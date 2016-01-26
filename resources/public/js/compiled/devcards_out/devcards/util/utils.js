// Compiled by ClojureScript 1.7.170 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4423__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4423__auto__)){
var doc = temp__4423__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__17800__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19134_19136 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19135_19137 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19134_19136,_STAR_print_fn_STAR_19135_19137,sb__17800__auto__){
return (function (x__17801__auto__){
return sb__17800__auto__.append(x__17801__auto__);
});})(_STAR_print_newline_STAR_19134_19136,_STAR_print_fn_STAR_19135_19137,sb__17800__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19135_19137;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19134_19136;
}
return [cljs.core.str(sb__17800__auto__)].join('');
}catch (e19132){if((e19132 instanceof Error)){
var e1 = e19132;
try{return obj.toString();
}catch (e19133){if((e19133 instanceof Error)){
var e2 = e19133;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e19133;

}
}} else {
throw e19132;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_19139 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_19139;
}});

//# sourceMappingURL=utils.js.map?rel=1454020200844