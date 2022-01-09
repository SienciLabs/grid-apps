/** Copyright Stewart Allen <sa@grid.space> -- All Rights Reserved */

"use strict";

(function() {

// start worker pool (disabled for now with *0)
moto.client.start(`/code/mesh_pool?${gapp.version}`, moto.client.max() * 0);

// dep: ext.three
// dep: ext.three-bgu
gapp.finalize("mesh.work", [
    "moto.license", // dep: moto.license
    "moto.client",  // dep: moto.client
    "moto.worker",  // dep: moto.worker
    "mesh.tool",    // dep: mesh.tool
    "add.three",    // dep: add.three
]);

// compensation for space/world/platform rotation
let core_matrix = new THREE.Matrix4().makeRotationX(Math.PI / 2);

let { client, worker } = moto;
let cache = {};

function log(msg) {
    return worker.publish("mesh.log", msg);
}

function cacheUpdate(id, data) {
    Object.assign(cache[id], data);
}

function translate_encode(id, matrix) {
    let rec = cache[id];
    let geo = rec.geo.clone();
    geo.applyMatrix4(core_matrix.clone().multiply( new THREE.Matrix4().fromArray(matrix) ));
    return geo.attributes.position.array;
}

let model = {
    load(data) {
        let { vertices, indices, name, id } = data;
        let geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        if (indices) geo.setIndex(new THREE.BufferAttribute(indices, 1));
        cacheUpdate(id, { name, geo, matrix: core_matrix.clone() });
    },

    debug(data) {
        let { id, matrix } = data;
        return translate_encode(id, matrix);
        throw "should not here";
        let rec = cache[id];
        let geo = rec.geo.clone();
        let m4 = core_matrix.clone().multiply( new THREE.Matrix4().fromArray(matrix) );
        geo.applyMatrix4(m4);
        // for debugging state / matrix ops
        return geo.attributes.position.array;
    },

    heal(id) {
        log(`${id} | indexing...`);
        let geo = cache[id].geo;
        let tool = new mesh.tool({
            vertices: geo.attributes.position.array,
            faces: geo.index ? geo.index.array : undefined,
            debug: false
        });
        log(`${id} | healing...`);
        tool.heal();
        dbug.log(tool);
        return true || tool.newFaces ? {
            vertices: tool.unrolled().toFloat32(),
        } : 0;
    }
};

let group = {
    add(data) {
        let { id, model } = data;
    },

    remove(data) {
        let { id, model } = data;
    }
};

let object = {
    create(data) {
        let { id, type } = data;
        cache[id] = { id, type };
    },

    destroy(data) {
        delete cache[data.id];
    },

    move(data) {
        let { id, x, y, z } = data;
    },

    position(data) {
        let { id, x, y, z } = data;
    },

    rotate(data) {
        let { id, x, y, z } = data;
    },

    rotation(data) {
        let { id, x, y, z } = data;
    },

    qrotation(data) {
        let { id, w, x, y, z } = data;
    }
};

let file = {
    export(data, send) {
        let { format, recs } = data;
        switch (format) {
            case "obj":
                let p = 1;
                let obj = [];
                for (let rec of recs) {
                    let { id, matrix, file } = rec;
                    let verts = translate_encode(id, matrix);
                    obj.push(`g ${file}`);
                    for (let i=0; i<verts.length; p += 3) {
                        obj.push(`v ${verts[i++]} ${verts[i++]} ${verts[i++]}`);
                        obj.push(`v ${verts[i++]} ${verts[i++]} ${verts[i++]}`);
                        obj.push(`v ${verts[i++]} ${verts[i++]} ${verts[i++]}`);
                        obj.push(`f ${p} ${p+1} ${p+2}`);
                    }
                }
                return obj.join('\n');
            default:
                throw `invalid format "${format}"`;
        }
    }
};

function debug() {
    console.log({work_cache: cache});
}

worker.bindObject({
    debug,
    model,
    group,
    object,
    file
});

worker.ready();

})();
