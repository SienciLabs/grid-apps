// english. other language maps will defer to english
// map for any missing key/value pairs
kiri.lang['en'] =
kiri.lang['en-us'] = {
    version:        "version",
    enable:         "enable",
    settings:       "settings",

    acct_xpo:       "make a backup of your device\nand device profiles with the\noption to include workspace\nobjects and positions",

    // DEVICE dialog groups
    dv_gr_dev:      "device",
    dv_gr_ext:      "extruder",
    dv_gr_out:      "output",
    dv_gr_gco:      "gcode macros",

    // DEVICE dialog (_s = label, _l = hover help)
    dv_name_s:      "name",
    dv_name_l:      "device name",
    dv_fila_s:      "filament",
    dv_fila_l:      "diameter in millimeters",
    dv_nozl_s:      "nozzle",
    dv_nozl_l:      "diameter in millimeters",
    dv_bedw_s:      "width",
    dv_bedw_l:      "workspace units",
    dv_bedd_s:      "depth",
    dv_bedd_l:      "workspace units",
    dv_bedh_s:      "height",
    dv_bedh_l:      "max build height\nin workspace units",
    dv_spmx_s:      "max spindle",
    dv_spmx_l:      "max spindle rpm speed\n0 to disable",
    dv_xtab_s:      "absolute positioning",
    dv_xtab_l:      "extrusion moves absolute",
    dv_orgc_s:      "origin center",
    dv_orgc_l:      "bed origin center",
    // dv_orgt_s:      "origin top",
    // dv_orgt_l:      "part z origin top",
    dv_bedc_s:      "circular bed",
    dv_bedc_l:      "device bed is circular",
    dv_belt_s:      "belt bed",
    dv_belt_l:      "continuous printing bed",
    dv_fanp_s:      "fan power",
    dv_fanp_l:      "set cooling fan power",
    dv_prog_s:      "progress",
    dv_prog_l:      "output on each % progress",
    dv_layr_s:      "layer",
    dv_layr_l:      "output at each\nlayer change",
    dv_tksp_s:      "token spacer",
    dv_tksp_l:      "add a space between\ngcode axis parameters\nG0X0Y0X0\nvs\nG0 X0 Y0 Z0",
    dv_strc_s:      "strip comments",
    dv_strc_l:      "strip gcode comments\ncomments begin with ;",
    dv_fext_s:      "file extension",
    dv_fext_l:      "file name extension",
    dv_dwll_s:      "dwell",
    dv_dwll_l:      "gcode dwell script",
    dv_tool_s:      "tool change",
    dv_tool_l:      "tool change script",
    dv_sspd_s:      "spindle speed",
    dv_sspd_l:      "set spindle speed",
    dv_paus_s:      "pause",
    dv_paus_l:      "gcode pause script",
    dv_head_s:      "header",
    dv_head_l:      "gcode header script",
    dv_foot_s:      "footer",
    dv_foot_l:      "gcode footer script",
    dv_lzon_s:      "laser on",
    dv_lzon_l:      "gcode laser on script",
    dv_lzof_s:      "laser off",
    dv_lzof_l:      "gcode laser off script",
    dv_exts_s:      "select",
    dv_exts_l:      "gcode run to enable this extruder",
    dv_dext_s:      "deselect",
    dv_dext_l:      "gcode run before enabling another extruder",
    dv_extd_s:      "deselect",
    dv_extd_l:      "gcode to deselect this extruder",
    dv_exox_s:      "offset x",
    dv_exox_l:      "nozzle offset x",
    dv_exoy_s:      "offset y",
    dv_exoy_l:      "nozzle offset y",

    // MODE
    mo_menu:        "mode",
    mo_fdmp:        "FDM Print",
    mo_slap:        "SLA Print",
    mo_lazr:        "Laser Cut",
    mo_cncm:        "CNC Mill",

    // SETUP
    su_menu:        "setup",
    su_devi:        "Devices",
    su_tool:        "Tools",
    su_locl:        "Local",
    su_xprt:        "Export",
    su_help:        "Help",

    // LOAD
    fe_menu:        "file",
    fn_recn:        "Recent",
    fn_impo:        "Import",

    // FUNCTION
    fn_menu:        "action",
    fn_arra:        "Arrange",
    fn_slic:        "Slice",
    fn_prev:        "Preview",
    fn_expo:        "Export",

    // VIEW
    vu_menu:        "view",
    vu_home:        "Home",
    vu_rset:        "Reset",
    vu_sptp:        "Top",
    vu_spfr:        "Front",
    vu_splt:        "Left",
    vu_sprt:        "Right",

    // WORKSPACE
    ws_menu:        "view",
    ws_save:        "Save",
    ws_cler:        "Clear",

    // OPTIONS
    op_menu:        "interface",
    op_disp:        "display",
    op_xprt_s:      "expert",
    op_xprt_l:      "show more settings options",
    op_decl_s:      "decals",
    op_decl_l:      "show device decals and logos",
    op_dang_s:      "experimental",
    op_dang_l:      "show experimental parameters",
    op_hopo_s:      "hover pop",
    op_hopo_l:      "enable menu hover\nto activate",
    op_dark_s:      "dark mode",
    op_dark_l:      "dark mode interface",
    op_comp_s:      "compact ui",
    op_comp_l:      "compact user interface\nbetter for small screens\nand tablets",
    op_shor_s:      "show origin",
    op_shor_l:      "show device or process origin",
    op_shru_s:      "show rulers",
    op_shru_l:      "show axes rulers\non major gridlines",
    op_sped_s:      "show speeds",
    op_sped_l:      "show speed to color bar\nin preview mode",
    op_auto_s:      "auto layout",
    op_auto_l:      "automatically layout platform\nwhen new items added",
    op_free_s:      "free layout",
    op_free_l:      "permit dragable layout\nno effect in laser mode",
    op_spcr_s:      "spacing",
    op_spcr_l:      "spacing between objects\nduring auto layout\nin workspace units",
    op_invr_s:      "invert zoom",
    op_invr_l:      "invert mouse wheel\nscroll zoom",
    op_save_s:      "auto save",
    op_save_l:      "preserve objects in workspace\nbetween application reloads",
    op_line_s:      "line type",
    op_line_l:      "line style for path rendering\nimpacts 3d performance\npath: 3d best\nflat: 2d good\nline = 1d fast",
    op_unit_s:      "units",
    op_unit_l:      "workspace units affects\nspeeds and distances",
    op_anim_s:      "animate",
    op_anim_l:      "animation mesh density\nhigher is more dense\ntakes more memory\nand is slower",

    lo_menu:        "layout",

    pt_menu:        "parts",
    pt_deci_s:      "decimate",
    pt_deci_l:      "enable or disable point decimation\nduring port import. for faster slicing\nand lower memory usage",
    pt_qual_s:      "quality",
    pt_qual_l:      "level of detail to retain\nduring slicing operations\nlower is faster",
    pt_heal_s:      "heal mesh",
    pt_heal_l:      "attempt to heal\nnon-manifold meshes\nadds to slicing time",

    xp_menu:        "exports",

    // SETTINGS
    se_menu:        "profile",
    se_load:        "load",
    se_save:        "save",

    // FDM SLICING
    sl_menu:        "layers",
    sl_lahi_s:      "height",
    sl_lahi_l:      "height of each slice\nlayer in millimeters",
    ad_minl_s:      "height min",
    ad_minl_l:      "adaptive min layer height\nin millimeters\nmust be non-zero",
    sl_ltop_s:      "top layers",
    sl_ltop_l:      "number of solid layers\nto enforce at the\ntop of the print",
    sl_lsld_s:      "solid layers",
    sl_lsld_l:      "solid fill areas computed\nfrom layer deltas. see\nlayer pop menu",
    sl_lbot_s:      "base layers",
    sl_lbot_l:      "number of solid layers\nto enforce at the\nbottom of the print",
    ad_adap_s:      "adaptive",
    ad_adap_l:      "use adaptive layer heights\nwith 'layer height' as max\nand 'layer min' as the min",

    // FDM SHELLS
    sl_shel_s:      "shell count",
    sl_shel_l:      "number of perimeter\nwalls to generate",
    sl_ordr_s:      "shell order",
    sl_ordr_l:      "output shell order\ninside to outside\nor outside to inside\naffects surface quality",
    sl_strt_s:      "layer start",
    sl_strt_l:      "layer starting point\nlast = last layer end\ncenter = part center\norigin = device origin",
    ad_thin_s:      "thin walls",
    ad_thin_l:      "detect and fill gaps\nbetween shell walls",

    // FDM FILL
    fi_menu:        "infill",
    fi_type:        "type",
    fi_pcnt_s:      "fill fraction",
    fi_pcnt_l:      "fill density values\n0.0 - 1.0",
    fi_angl_s:      "solid start",
    fi_angl_l:      "starting angle in degrees\n90 degrees added to \neach following layer\napplies only to solid layers",
    fi_over_s:      "overlap",
    fi_over_l:      "overlap with shell and other fill\nas fraction of nozzle diameter\n0.0 - 1.0",
    // fi_rate_s:      "print speed",
    fi_rate_l:      "extrusion speed for infill\nset to 0 to use default\noutput print speeds",

    // FDM FIRST LAYER
    fl_menu:        "base",
    fl_lahi_s:      "layer height",
    fl_lahi_l:      "height of each slice\nin millimeters\nshould be >= slice height",
    fl_rate_s:      "shell speed",
    fl_rate_l:      "shell printing max speed\nin millimeters / minute",
    fl_frat_s:      "fill speed",
    fl_frat_l:      "fill printing max speed\nin millimeters / minute",
    fl_mult_s:      "flow factor",
    fl_mult_l:      "extrusion multiplier\n0.0 - 2.0",
    fl_sfac_s:      "width factor",
    fl_sfac_l:      "multiplier on nozzle size\nchanges line spacing",
    fl_skrt_s:      "skirt count",
    fl_skrt_l:      "number of first-layer offset\nbrims to generate",
    fl_skro_s:      "skirt offset",
    fl_skro_l:      "skirt offset from part\nin millimeters",
    fl_nozl_s:      "nozzle temp",
    fl_nozl_l:      "degrees in celsius\noutput setting used\nwhen this is zero",
    fl_bedd_s:      "bed temp",
    fl_bedd_l:      "degrees in celsius\noutput setting used\nwhen this is zero",
    fr_spac_s:      "raft gap",
    fr_spac_l:      "additional layer spacing\nbetween 1st layer and raft\nin millimeters",
    fr_nabl_s:      "raft enable",
    fr_nabl_l:      "create a raft under the\nmodel for better adhesion\nuses skirt offset and\ndisables skirt output",

    // FDM BELT ONLY
    fl_zoff_s:      "belt offset",
    fl_zoff_l:      "height offset from belt\nof lowest extrusion\nin millimeters",
    fl_brim_s:      "brim size",
    fl_brim_l:      "add brim to part bottom\nsize is width in millimeters\n0 to disable",
    fl_brmn_s:      "brim trigger",
    fl_brmn_l:      "add brims only when segment\nfacing belt is shorter than this\nvalue in millimeters\n0 = Infinity",
    fl_bled_s:      "part anchor",
    fl_bled_l:      "belt part anchor\nat start of print\nin millimeters",

    // FDM SUPPORT
    sp_menu:        "support",
    sp_detect:      "detect",
    sp_dens_s:      "density",
    sp_dens_l:      "fraction 0.0 - 1.0\nrecommended 0.15\n0 to disable",
    sp_size_s:      "pillar size",
    sp_size_l:      "pillar width\nin millimeters",
    sp_offs_s:      "part offset",
    sp_offs_l:      "offset from part\nin millimeters",
    sp_gaps_s:      "gap layers",
    sp_gaps_l:      "number of layers\noffset from part",
    sp_span_s:      "max span",
    sp_span_l:      "unsupported span that causes\na new support to be generated\nin millimeters",
    sp_angl_s:      "max angle",
    sp_angl_l:      "max overhang angle before\nsupporting pillar is generated",
    sp_area_s:      "min area",
    sp_area_l:      "minimum area for\na support column\nin millimeters",
    sp_xpnd_s:      "expand",
    sp_xpnd_l:      "expand support area\nbeyond part boundary\nin millimeters",
    sp_nozl_s:      "extruder",
    sp_nozl_l:      "in multi-extruder systems\nthe extruder to use for\nsupport material",
    sp_auto_s:      "automatic",
    sp_auto_l:      "enable generated supports\nusing at-slice-time geometry\nsupports will only appear\nafter slicing completes",

    // LASER SLICING
    ls_offs_s:      "offset",
    ls_offs_l:      "adjust for beam width\nin millimeters",
    ls_lahi_s:      "height",
    ls_lahi_l:      "layer height\nin millimeters\n0 = auto/detect",
    ls_lahm_s:      "min",
    ls_lahm_l:      "layer height minimum\nwill merge auto slices\nunder this thickness\nin millimeters",
    ls_sngl_s:      "single",
    ls_sngl_l:      "perform only one slice\nat specified layer height",

    // CNC COMMON terms
    cc_tool:        "tool",
    cc_offs_s:      "offset",
    cc_offs_l:      "offset tool center\nfrom chosen path",
    cc_spnd_s:      "spindle rpm",
    cc_spnd_l:      "spindle speed in\nrevolutions / minute",
    cc_sovr_s:      "step over",
    cc_sovr_l:      "as a fraction of\ntool diameter",
    cc_sdwn_s:      "step down",
    cc_sdwn_l:      "step down depth\nfor each pass\nin workspace units\n0 to disable",
    cc_feed_s:      "feed rate",
    cc_feed_l:      "max cutting speed in\nworkspace units / minute",
    cc_plng_s:      "plunge rate",
    cc_plng_l:      "max z axis speed in\nworkspace units / minute",

    // CNC COMMON
    cc_menu:        "limits",
    cc_flip:        "flip",
    cc_rapd_s:      "xy feed",
    cc_rapd_l:      "max xy moves feedrate\nin workspace units / minute",
    cc_rzpd_s:      "z feed",
    cc_rzpd_l:      "max z moves feedrate\nin workspace units / minute",

    cc_loff_s:      "offset",
    cc_loff_l:      "distance from stock face\nfor leveling pass\nin workspace units",

    // CNC ROUGHING
    cr_menu:        "rough",
    cr_lsto_s:      "leave stock",
    cr_lsto_l:      "horizontal offset from vertical faces\nstock to leave for finishing pass\nin workspace units",
    cr_ease_s:      "ease down",
    cr_ease_l:      "plunge cuts will\nspiral down or ease\nalong a linear path",
    cr_clrt_s:      "clear top",
    cr_clrt_l:      "run a clearing pass over\nthe bounding area of the part\nat z = 0",
    cr_clrp_s:      "clear voids",
    cr_clrp_l:      "mill out through pockets\ninstead of just the outline",
    cr_clrf_s:      "clear faces",
    cr_clrf_l:      "interpolate step down to\nclear any detected flat areas",
    cr_olin_s:      "inside only",
    cr_olin_l:      "limit cutting to\ninside part boundaries",

    // CNC OUTLINE
    co_menu:        "outline",
    co_dogb_s:      "dogbones",
    co_dogb_l:      "insert dogbone cuts\ninto inside corners",
    co_wide_s:      "wide cutout",
    co_wide_l:      "widen outside cutout paths\nfor deep cuts in hard material",
    co_olin_s:      "inside only",
    co_olin_l:      "limit cutting to\ninside part boundaries",
    co_olot_s:      "outside only",
    co_olot_l:      "limit cutting to\nexterior part boundaries\nwhich can be thought of\nas the shadow outline",
    co_omit_s:      "omit through",
    co_omit_l:      "eliminate thru holes",
    co_olen_s:      "enable",
    co_olen_l:      "enabled outline cutting",

    // CNC CONTOUR
    cn_menu:        "contour",
    cf_angl_s:      "max angle",
    cf_angl_l:      "angles greater than this\nare considered vertical",
    cf_curv_s:      "curves only",
    cf_curv_l:      "limit linear cleanup\nto curved surfaces",
    cf_olin_s:      "inside only",
    cf_olin_l:      "limit cutting to\ninside part boundaries",
    cf_linx_s:      "enable y pass",
    cf_linx_l:      "linear y-axis finishing",
    cf_liny_s:      "enable x pass",
    cf_liny_l:      "linear x-axis finishing",

    // CNC TRACE
    cu_menu:        "trace",
    cu_type_s:      "type",
    cu_type_l:      "follow = tool tip follows line\nright or left = tool tip\nfollows line offset by tool radius",

    // CNC DRILLING
    cd_menu:        "drill",
    cd_axis:        "axis",
    cd_points:      "points",
    cd_plpr_s:      "plunge per",
    cd_plpr_l:      "max plunge between\ndwell periods\nin workspace units\n0 to disable",
    cd_dwll_s:      "dwell time",
    cd_dwll_l:      "dwell time\nbetween plunges in\nin milliseconds",
    cd_lift_s:      "drill lift",
    cd_lift_l:      "lift between plunges\nafter dwell period\nin workspace units\n0 to disable",
    cd_regi_s:      "register",
    cd_regi_l:      "drill registration holes\nfor double-sided parts\nindependent of enable\ndrilling but uses same\ntool and settings",

    // CNC CUTOUT TABS
    ct_menu:        "tabs",
    ct_angl_s:      "angle",
    ct_angl_l:      "starting angle for tab spacing\nin degrees (0-360)",
    ct_numb_s:      "count",
    ct_numb_l:      "number of tabs to use\nwill be spaced evenly\naround the part",
    ct_wdth_s:      "width",
    ct_wdth_l:      "width in workspace units",
    ct_hght_s:      "height",
    ct_hght_l:      "height in workspace units",
    ct_dpth_s:      "depth",
    ct_dpth_l:      "distance in workspace units\nthat the tab projects from\nthe part surface",
    ct_midl_s:      "midline",
    ct_midl_l:      "use midline of tab\ninstead of z bottom\nfor double-sided work",
    ct_nabl_s:      "auto",
    ct_nabl_l:      "auto generate radial tabs\nprojected from part center\nusing count and angle offset",

    // OUTPUT
    ou_menu:        "output",

    // LASER KNIFE
    dk_menu:        "knife",
    dk_dpth_s:      "cut depth",
    dk_dpth_l:      "final cut depth\nin millimeters",
    dk_pass_s:      "cut passes",
    dk_pass_l:      "number of passes\ndown to cut depth",
    dk_offs_s:      "tip offset",
    dk_offs_l:      "distance from blade tip\nto center of tool\nin millimeters",

    // OUTPUT LASER
    ou_spac_s:      "spacing",
    ou_spac_l:      "distance between layer output\nin millimeters",
    ou_scal_s:      "scaling",
    ou_scal_l:      "multiplier (0.1 to 100)",
    ou_powr_s:      "power",
    ou_powr_l:      "0 - 100\nrepresents %",
    ou_sped_s:      "speed",
    ou_sped_l:      "millimeters / minute",
    ou_mrgd_s:      "merged",
    ou_mrgd_l:      "merge all layers using\ncolor coding to denote\nstacking depth",
    ou_grpd_s:      "grouped",
    ou_grpd_l:      "retain each layer as\na unified grouping\ninstead of separated\npolygons",
    ou_layr_s:      "layer order",
    ou_layr_l:      "output layer order\nfrom top right to\nbottom left",
    ou_layo_s:      "layer color",
    ou_layo_l:      "output layer colors\nfor each z index\noverridden by merged",
    ou_drkn_s:      "drag knife",
    ou_drkn_l:      "enable drag knife\noutput in gcode\ncut radii are added\nto corners with\ncut down passes",

    // OUTPUT FDM
    ou_nozl_s:      "nozzle temp",
    ou_nozl_l:      "degrees in celsius",
    ou_bedd_s:      "bed temp",
    ou_bedd_l:      "degrees in celsius",
    ou_feed_s:      "print speed",
    ou_feed_l:      "max print speed\nmillimeters / minute",
    ou_fini_s:      "finish speed",
    ou_fini_l:      "outermost shell speed\nmillimeters / minute",
    ou_move_s:      "move speed",
    ou_move_l:      "non-print move speed\nmillimeters / minute\n0 = enable G0 moves",
    ou_shml_s:      "shell factor",
    ou_flml_s:      "solid factor",
    ou_spml_s:      "infill factor",
    ou_exml_l:      "extrusion multiplier\n0.0 - 2.0",
    ou_fans_s:      "fan speed",
    ou_fans_l:      "0 - 255",

    // OUTPUT CAM
    ou_toll_s:      "tolerance",
    ou_toll_l:      "surface precision\nin workspace units\nlower is slower and\nuses more memory\n0 = automatic based\non animate preference",
    ou_zanc_s:      "z anchor",
    ou_zanc_l:      "controls the position of the part\nwhen stock Z exceeds part Z",
    ou_ztof_s:      "z offset",
    ou_ztof_l:      "offset z anchor\nin workspace units\nhas no effect when\nanchor is middle",
    ou_zbot_s:      "z bottom",
    ou_zbot_l:      "offset from part bottom\nto limit cutting depth\nin workspace units",
    ou_zclr_s:      "z clearance",
    ou_zclr_l:      "safe travel offset\nfrom top of part\nin workspace units",
    ou_ztru_s:      "z thru",
    ou_ztru_l:      "extend cutout pass down\nin workspace units",
    ou_conv_s:      "conventional",
    ou_conv_l:      "milling direction\nuncheck for 'climb'",
    ou_depf_s:      "depth first",
    ou_depf_l:      "optimize pocket cuts\nwith depth priority",

    // CAM STOCK
    cs_menu:        "stock",
    cs_wdth_s:      "width",
    cs_wdth_l:      "width (x) in workspace units\n0 defaults to part size",
    cs_dpth_s:      "depth",
    cs_dpth_l:      "depth (y) in workspace units\n0 defaults to part size",
    cs_hght_s:      "height",
    cs_hght_l:      "height (z) in workspace units\n0 defaults to part size",
    cs_offs_s:      "offset",
    cs_offs_l:      "use width, depth, height\nas offsets from max\npart size on platform",
    cs_clip_s:      "clip to",
    cs_clip_l:      "rough and outline\nclip cutting paths\nto defined stock",
    cs_offe_s:      "enable",
    cs_offe_l:      "enable milling stock",

    // ORIGIN (CAM & LASER)
    or_bnds_s:      "origin bounds",
    or_bnds_l:      "origin is relative to\nboundary of all objects",
    or_cntr_s:      "origin center",
    or_cntr_l:      "origin is referenced from the center",
    or_topp_s:      "origin top",
    or_topp_l:      "origin is references from the top of objects",

    // FDM ADVANCED
    ad_menu:        "expert",
    ad_rdst_s:      "retract dist",
    ad_rdst_l:      "amount to retract filament\nfor long moves. in millimeters",
    ad_rrat_s:      "retract rate",
    ad_rrat_l:      "speed of filament\nretraction in mm/s",
    ad_rdwl_s:      "engage dwell",
    ad_wpln_s:      "retract wipe",
    ad_wpln_l:      "non-printing move\nafter retraction\nin millimeters",
    ad_rdwl_l:      "time between re-engaging\nfilament and movement\nin milliseconds",
    ad_scst_s:      "shell coast",
    ad_scst_l:      "non-printing end\nof perimeter shells\nin millimeters",
    ad_msol_s:      "min solid",
    ad_msol_l:      "minimum area (mm^2)\nrequired to keep solid\nmust be > 0.1",
    ad_mins_s:      "min speed",
    ad_mins_l:      "minimum speed\nfor short segments",
    ad_spol_s:      "short path",
    ad_spol_l:      "polygons shorter than this\nwill have their print speed\nscaled down to min speed\nin millimeters",
    ad_arct_s:      "arc tolerance",
    ad_arct_l:      "convert faceted lines to arcs\ncenter point drift tolerance\nwhen matching arc points\nconsider values around 0.15\nin millimeters\n0 to disable",
    ad_zhop_s:      "z hop dist",
    ad_zhop_l:      "amount to raise z\non retraction moves\nin millimeters\n0 to disable",
    ad_abkl_s:      "anti-backlash",
    ad_abkl_l:      "for better flat surface finish\nuse micro-movements to cancel\nbacklash in solid layer output\nin millimeters\n0 to disable\nif your firmware has M425\nput that in the gcode header\nand leave this as 0",
    ad_lret_s:      "layer retract",
    ad_lret_l:      "force filament retraction\nbetween layers",
    ad_play_s:      "polish layers",
    ad_play_l:      "polish up to specified\n# of layers at a time",
    ad_pspd_s:      "polish speed",
    ad_pspd_l:      "polishing speed\nin millimeters / minute",

    // CAM EXPERT
    cx_fast_s:      "skip shadow",
    cx_fast_l:      "disable overhang detection\ncan be faster and use less\nmemory with complex models\nbut fails with overhangs\ntry enabling if slicing\nhangs during shadowing",

    // FDM GCODE
    ag_menu:        "gcode",
    ag_nozl_s:      "nozzle",
    ag_nozl_l:      "select output nozzle or head",
    ag_paws_s:      "pause layers",
    ag_paws_l:      "comma-separated list of layers\nto inject pause commands before",
    ag_loop_s:      "loop layers",
    ag_loop_l:      "layer ranges to repeat in the format\nfirst-last-count,first-last-count,...\nomitted count = 1",

    // SLA MENU
    sa_menu:        "slicing",
    sa_lahe_s:      "layer height",
    sa_lahe_l:      "layer height\nin millimeters",
    sa_shel_s:      "hollow shell",
    sa_shel_l:      "shell thickness in mm\nuse multiple of layer height\nuse 0 for solid (disabled)",
    sa_otop_s:      "open top",
    sa_otop_l:      "if shell is enabled\nresults in an open top",
    sa_obas_s:      "open base",
    sa_obas_l:      "if shell is enabled\nresults in an open base\ndisabled with supports",

    sa_layr_m:      "layers",
    sa_lton_s:      "light on time",
    sa_lton_l:      "layer light on\ntime in seconds",
    sa_ltof_s:      "light off time",
    sa_ltof_l:      "layer light off\ntime in seconds",
    sa_pldi_s:      "peel distance",
    sa_pldi_l:      "peel distance\nin millimeters",
    sa_pllr_s:      "peel lift rate",
    sa_pllr_l:      "peel lift speed\nin mm/sec",
    sa_pldr_s:      "peel drop rate",
    sa_pldr_l:      "peel drop speed\nin mm/sec",

    sa_base_m:      "base",
    sa_balc_s:      "layer count",
    sa_balc_l:      "number of\nbase layers",
    sa_bltn_l:      "base layer light on\ntime in seconds",
    sa_bltf_l:      "base layer light off\ntime in seconds",

    sa_infl_m:      "infill",
    sa_ifdn_s:      "density",
    sa_ifdn_l:      "percent infill\nrequires shell\n0 = disabled\nvalid 0.0 - 1.0",
    sa_iflw_s:      "line width",
    sa_iflw_l:      "hatch line width\nin millimeters",

    sa_supp_m:      "support",
    sa_slyr_s:      "base layers",
    sa_slyr_l:      "base support layers\nvalue range 0-10",
    sa_slgp_s:      "gap layers",
    sa_slgp_l:      "number of layers between\nraft and bottom of object",
    sa_sldn_s:      "density",
    sa_sldn_l:      "used to compute the\nnumber of support pillars\n0.0-1.0 (0 = disable)",
    sa_slsz_s:      "size",
    sa_slsz_l:      "max size of a\nsupport pillar\nin millimeters",
    sa_slpt_s:      "points",
    sa_slpt_l:      "number of points in\neach support pillar\nin millimeters",
    sl_slen_l:      "enable supports",

    sa_outp_m:      "output",
    sa_opzo_s:      "z offset",
    sa_opzo_l:      "z layer offset\nalmost always 0.0\n0.0-1.0 in millimeters",
    sa_opaa_s:      "anti alias",
    sa_opaa_l:      "enable anti-aliasing\nproduces larger files\ncan blur details"
};
