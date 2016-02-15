// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16826__auto__){
return or__16826__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26106_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26106_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26111 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26112 = null;
var count__26113 = (0);
var i__26114 = (0);
while(true){
if((i__26114 < count__26113)){
var n = cljs.core._nth.call(null,chunk__26112,i__26114);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26115 = seq__26111;
var G__26116 = chunk__26112;
var G__26117 = count__26113;
var G__26118 = (i__26114 + (1));
seq__26111 = G__26115;
chunk__26112 = G__26116;
count__26113 = G__26117;
i__26114 = G__26118;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26111);
if(temp__4425__auto__){
var seq__26111__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26111__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__26111__$1);
var G__26119 = cljs.core.chunk_rest.call(null,seq__26111__$1);
var G__26120 = c__17629__auto__;
var G__26121 = cljs.core.count.call(null,c__17629__auto__);
var G__26122 = (0);
seq__26111 = G__26119;
chunk__26112 = G__26120;
count__26113 = G__26121;
i__26114 = G__26122;
continue;
} else {
var n = cljs.core.first.call(null,seq__26111__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26123 = cljs.core.next.call(null,seq__26111__$1);
var G__26124 = null;
var G__26125 = (0);
var G__26126 = (0);
seq__26111 = G__26123;
chunk__26112 = G__26124;
count__26113 = G__26125;
i__26114 = G__26126;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26165_26172 = cljs.core.seq.call(null,deps);
var chunk__26166_26173 = null;
var count__26167_26174 = (0);
var i__26168_26175 = (0);
while(true){
if((i__26168_26175 < count__26167_26174)){
var dep_26176 = cljs.core._nth.call(null,chunk__26166_26173,i__26168_26175);
topo_sort_helper_STAR_.call(null,dep_26176,(depth + (1)),state);

var G__26177 = seq__26165_26172;
var G__26178 = chunk__26166_26173;
var G__26179 = count__26167_26174;
var G__26180 = (i__26168_26175 + (1));
seq__26165_26172 = G__26177;
chunk__26166_26173 = G__26178;
count__26167_26174 = G__26179;
i__26168_26175 = G__26180;
continue;
} else {
var temp__4425__auto___26181 = cljs.core.seq.call(null,seq__26165_26172);
if(temp__4425__auto___26181){
var seq__26165_26182__$1 = temp__4425__auto___26181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26165_26182__$1)){
var c__17629__auto___26183 = cljs.core.chunk_first.call(null,seq__26165_26182__$1);
var G__26184 = cljs.core.chunk_rest.call(null,seq__26165_26182__$1);
var G__26185 = c__17629__auto___26183;
var G__26186 = cljs.core.count.call(null,c__17629__auto___26183);
var G__26187 = (0);
seq__26165_26172 = G__26184;
chunk__26166_26173 = G__26185;
count__26167_26174 = G__26186;
i__26168_26175 = G__26187;
continue;
} else {
var dep_26188 = cljs.core.first.call(null,seq__26165_26182__$1);
topo_sort_helper_STAR_.call(null,dep_26188,(depth + (1)),state);

var G__26189 = cljs.core.next.call(null,seq__26165_26182__$1);
var G__26190 = null;
var G__26191 = (0);
var G__26192 = (0);
seq__26165_26172 = G__26189;
chunk__26166_26173 = G__26190;
count__26167_26174 = G__26191;
i__26168_26175 = G__26192;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26169){
var vec__26171 = p__26169;
var x = cljs.core.nth.call(null,vec__26171,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26171,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26171,x,xs,get_deps__$1){
return (function (p1__26127_SHARP_){
return clojure.set.difference.call(null,p1__26127_SHARP_,x);
});})(vec__26171,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26205 = cljs.core.seq.call(null,provides);
var chunk__26206 = null;
var count__26207 = (0);
var i__26208 = (0);
while(true){
if((i__26208 < count__26207)){
var prov = cljs.core._nth.call(null,chunk__26206,i__26208);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26209_26217 = cljs.core.seq.call(null,requires);
var chunk__26210_26218 = null;
var count__26211_26219 = (0);
var i__26212_26220 = (0);
while(true){
if((i__26212_26220 < count__26211_26219)){
var req_26221 = cljs.core._nth.call(null,chunk__26210_26218,i__26212_26220);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26221,prov);

var G__26222 = seq__26209_26217;
var G__26223 = chunk__26210_26218;
var G__26224 = count__26211_26219;
var G__26225 = (i__26212_26220 + (1));
seq__26209_26217 = G__26222;
chunk__26210_26218 = G__26223;
count__26211_26219 = G__26224;
i__26212_26220 = G__26225;
continue;
} else {
var temp__4425__auto___26226 = cljs.core.seq.call(null,seq__26209_26217);
if(temp__4425__auto___26226){
var seq__26209_26227__$1 = temp__4425__auto___26226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26209_26227__$1)){
var c__17629__auto___26228 = cljs.core.chunk_first.call(null,seq__26209_26227__$1);
var G__26229 = cljs.core.chunk_rest.call(null,seq__26209_26227__$1);
var G__26230 = c__17629__auto___26228;
var G__26231 = cljs.core.count.call(null,c__17629__auto___26228);
var G__26232 = (0);
seq__26209_26217 = G__26229;
chunk__26210_26218 = G__26230;
count__26211_26219 = G__26231;
i__26212_26220 = G__26232;
continue;
} else {
var req_26233 = cljs.core.first.call(null,seq__26209_26227__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26233,prov);

var G__26234 = cljs.core.next.call(null,seq__26209_26227__$1);
var G__26235 = null;
var G__26236 = (0);
var G__26237 = (0);
seq__26209_26217 = G__26234;
chunk__26210_26218 = G__26235;
count__26211_26219 = G__26236;
i__26212_26220 = G__26237;
continue;
}
} else {
}
}
break;
}

var G__26238 = seq__26205;
var G__26239 = chunk__26206;
var G__26240 = count__26207;
var G__26241 = (i__26208 + (1));
seq__26205 = G__26238;
chunk__26206 = G__26239;
count__26207 = G__26240;
i__26208 = G__26241;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26205);
if(temp__4425__auto__){
var seq__26205__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26205__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__26205__$1);
var G__26242 = cljs.core.chunk_rest.call(null,seq__26205__$1);
var G__26243 = c__17629__auto__;
var G__26244 = cljs.core.count.call(null,c__17629__auto__);
var G__26245 = (0);
seq__26205 = G__26242;
chunk__26206 = G__26243;
count__26207 = G__26244;
i__26208 = G__26245;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26205__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26213_26246 = cljs.core.seq.call(null,requires);
var chunk__26214_26247 = null;
var count__26215_26248 = (0);
var i__26216_26249 = (0);
while(true){
if((i__26216_26249 < count__26215_26248)){
var req_26250 = cljs.core._nth.call(null,chunk__26214_26247,i__26216_26249);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26250,prov);

var G__26251 = seq__26213_26246;
var G__26252 = chunk__26214_26247;
var G__26253 = count__26215_26248;
var G__26254 = (i__26216_26249 + (1));
seq__26213_26246 = G__26251;
chunk__26214_26247 = G__26252;
count__26215_26248 = G__26253;
i__26216_26249 = G__26254;
continue;
} else {
var temp__4425__auto___26255__$1 = cljs.core.seq.call(null,seq__26213_26246);
if(temp__4425__auto___26255__$1){
var seq__26213_26256__$1 = temp__4425__auto___26255__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26213_26256__$1)){
var c__17629__auto___26257 = cljs.core.chunk_first.call(null,seq__26213_26256__$1);
var G__26258 = cljs.core.chunk_rest.call(null,seq__26213_26256__$1);
var G__26259 = c__17629__auto___26257;
var G__26260 = cljs.core.count.call(null,c__17629__auto___26257);
var G__26261 = (0);
seq__26213_26246 = G__26258;
chunk__26214_26247 = G__26259;
count__26215_26248 = G__26260;
i__26216_26249 = G__26261;
continue;
} else {
var req_26262 = cljs.core.first.call(null,seq__26213_26256__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26262,prov);

var G__26263 = cljs.core.next.call(null,seq__26213_26256__$1);
var G__26264 = null;
var G__26265 = (0);
var G__26266 = (0);
seq__26213_26246 = G__26263;
chunk__26214_26247 = G__26264;
count__26215_26248 = G__26265;
i__26216_26249 = G__26266;
continue;
}
} else {
}
}
break;
}

var G__26267 = cljs.core.next.call(null,seq__26205__$1);
var G__26268 = null;
var G__26269 = (0);
var G__26270 = (0);
seq__26205 = G__26267;
chunk__26206 = G__26268;
count__26207 = G__26269;
i__26208 = G__26270;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26275_26279 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26276_26280 = null;
var count__26277_26281 = (0);
var i__26278_26282 = (0);
while(true){
if((i__26278_26282 < count__26277_26281)){
var ns_26283 = cljs.core._nth.call(null,chunk__26276_26280,i__26278_26282);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26283);

var G__26284 = seq__26275_26279;
var G__26285 = chunk__26276_26280;
var G__26286 = count__26277_26281;
var G__26287 = (i__26278_26282 + (1));
seq__26275_26279 = G__26284;
chunk__26276_26280 = G__26285;
count__26277_26281 = G__26286;
i__26278_26282 = G__26287;
continue;
} else {
var temp__4425__auto___26288 = cljs.core.seq.call(null,seq__26275_26279);
if(temp__4425__auto___26288){
var seq__26275_26289__$1 = temp__4425__auto___26288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26275_26289__$1)){
var c__17629__auto___26290 = cljs.core.chunk_first.call(null,seq__26275_26289__$1);
var G__26291 = cljs.core.chunk_rest.call(null,seq__26275_26289__$1);
var G__26292 = c__17629__auto___26290;
var G__26293 = cljs.core.count.call(null,c__17629__auto___26290);
var G__26294 = (0);
seq__26275_26279 = G__26291;
chunk__26276_26280 = G__26292;
count__26277_26281 = G__26293;
i__26278_26282 = G__26294;
continue;
} else {
var ns_26295 = cljs.core.first.call(null,seq__26275_26289__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26295);

var G__26296 = cljs.core.next.call(null,seq__26275_26289__$1);
var G__26297 = null;
var G__26298 = (0);
var G__26299 = (0);
seq__26275_26279 = G__26296;
chunk__26276_26280 = G__26297;
count__26277_26281 = G__26298;
i__26278_26282 = G__26299;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16826__auto__ = goog.require__;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26300__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26301__i = 0, G__26301__a = new Array(arguments.length -  0);
while (G__26301__i < G__26301__a.length) {G__26301__a[G__26301__i] = arguments[G__26301__i + 0]; ++G__26301__i;}
  args = new cljs.core.IndexedSeq(G__26301__a,0);
} 
return G__26300__delegate.call(this,args);};
G__26300.cljs$lang$maxFixedArity = 0;
G__26300.cljs$lang$applyTo = (function (arglist__26302){
var args = cljs.core.seq(arglist__26302);
return G__26300__delegate(args);
});
G__26300.cljs$core$IFn$_invoke$arity$variadic = G__26300__delegate;
return G__26300;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26304 = cljs.core._EQ_;
var expr__26305 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26304.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26305))){
var path_parts = ((function (pred__26304,expr__26305){
return (function (p1__26303_SHARP_){
return clojure.string.split.call(null,p1__26303_SHARP_,/[\/\\]/);
});})(pred__26304,expr__26305))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26304,expr__26305){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26307){if((e26307 instanceof Error)){
var e = e26307;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26307;

}
}})());
});
;})(path_parts,sep,root,pred__26304,expr__26305))
} else {
if(cljs.core.truth_(pred__26304.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26305))){
return ((function (pred__26304,expr__26305){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26304,expr__26305){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26304,expr__26305))
);

return deferred.addErrback(((function (deferred,pred__26304,expr__26305){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26304,expr__26305))
);
});
;})(pred__26304,expr__26305))
} else {
return ((function (pred__26304,expr__26305){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26304,expr__26305))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26308,callback){
var map__26311 = p__26308;
var map__26311__$1 = ((((!((map__26311 == null)))?((((map__26311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26311):map__26311);
var file_msg = map__26311__$1;
var request_url = cljs.core.get.call(null,map__26311__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26311,map__26311__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26311,map__26311__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18942__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto__){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto__){
return (function (state_26335){
var state_val_26336 = (state_26335[(1)]);
if((state_val_26336 === (7))){
var inst_26331 = (state_26335[(2)]);
var state_26335__$1 = state_26335;
var statearr_26337_26357 = state_26335__$1;
(statearr_26337_26357[(2)] = inst_26331);

(statearr_26337_26357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (1))){
var state_26335__$1 = state_26335;
var statearr_26338_26358 = state_26335__$1;
(statearr_26338_26358[(2)] = null);

(statearr_26338_26358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (4))){
var inst_26315 = (state_26335[(7)]);
var inst_26315__$1 = (state_26335[(2)]);
var state_26335__$1 = (function (){var statearr_26339 = state_26335;
(statearr_26339[(7)] = inst_26315__$1);

return statearr_26339;
})();
if(cljs.core.truth_(inst_26315__$1)){
var statearr_26340_26359 = state_26335__$1;
(statearr_26340_26359[(1)] = (5));

} else {
var statearr_26341_26360 = state_26335__$1;
(statearr_26341_26360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (6))){
var state_26335__$1 = state_26335;
var statearr_26342_26361 = state_26335__$1;
(statearr_26342_26361[(2)] = null);

(statearr_26342_26361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (3))){
var inst_26333 = (state_26335[(2)]);
var state_26335__$1 = state_26335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26335__$1,inst_26333);
} else {
if((state_val_26336 === (2))){
var state_26335__$1 = state_26335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26335__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26336 === (11))){
var inst_26327 = (state_26335[(2)]);
var state_26335__$1 = (function (){var statearr_26343 = state_26335;
(statearr_26343[(8)] = inst_26327);

return statearr_26343;
})();
var statearr_26344_26362 = state_26335__$1;
(statearr_26344_26362[(2)] = null);

(statearr_26344_26362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (9))){
var inst_26319 = (state_26335[(9)]);
var inst_26321 = (state_26335[(10)]);
var inst_26323 = inst_26321.call(null,inst_26319);
var state_26335__$1 = state_26335;
var statearr_26345_26363 = state_26335__$1;
(statearr_26345_26363[(2)] = inst_26323);

(statearr_26345_26363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (5))){
var inst_26315 = (state_26335[(7)]);
var inst_26317 = figwheel.client.file_reloading.blocking_load.call(null,inst_26315);
var state_26335__$1 = state_26335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26335__$1,(8),inst_26317);
} else {
if((state_val_26336 === (10))){
var inst_26319 = (state_26335[(9)]);
var inst_26325 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26319);
var state_26335__$1 = state_26335;
var statearr_26346_26364 = state_26335__$1;
(statearr_26346_26364[(2)] = inst_26325);

(statearr_26346_26364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26336 === (8))){
var inst_26315 = (state_26335[(7)]);
var inst_26321 = (state_26335[(10)]);
var inst_26319 = (state_26335[(2)]);
var inst_26320 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26321__$1 = cljs.core.get.call(null,inst_26320,inst_26315);
var state_26335__$1 = (function (){var statearr_26347 = state_26335;
(statearr_26347[(9)] = inst_26319);

(statearr_26347[(10)] = inst_26321__$1);

return statearr_26347;
})();
if(cljs.core.truth_(inst_26321__$1)){
var statearr_26348_26365 = state_26335__$1;
(statearr_26348_26365[(1)] = (9));

} else {
var statearr_26349_26366 = state_26335__$1;
(statearr_26349_26366[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18942__auto__))
;
return ((function (switch__18921__auto__,c__18942__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18922__auto__ = null;
var figwheel$client$file_reloading$state_machine__18922__auto____0 = (function (){
var statearr_26353 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26353[(0)] = figwheel$client$file_reloading$state_machine__18922__auto__);

(statearr_26353[(1)] = (1));

return statearr_26353;
});
var figwheel$client$file_reloading$state_machine__18922__auto____1 = (function (state_26335){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_26335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e26354){if((e26354 instanceof Object)){
var ex__18925__auto__ = e26354;
var statearr_26355_26367 = state_26335;
(statearr_26355_26367[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26368 = state_26335;
state_26335 = G__26368;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18922__auto__ = function(state_26335){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18922__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18922__auto____1.call(this,state_26335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18922__auto____0;
figwheel$client$file_reloading$state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18922__auto____1;
return figwheel$client$file_reloading$state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto__))
})();
var state__18944__auto__ = (function (){var statearr_26356 = f__18943__auto__.call(null);
(statearr_26356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto__);

return statearr_26356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto__))
);

return c__18942__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26369,callback){
var map__26372 = p__26369;
var map__26372__$1 = ((((!((map__26372 == null)))?((((map__26372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26372):map__26372);
var file_msg = map__26372__$1;
var namespace = cljs.core.get.call(null,map__26372__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26372,map__26372__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26372,map__26372__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26374){
var map__26377 = p__26374;
var map__26377__$1 = ((((!((map__26377 == null)))?((((map__26377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26377):map__26377);
var file_msg = map__26377__$1;
var namespace = cljs.core.get.call(null,map__26377__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16814__auto__){
var or__16826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26379,callback){
var map__26382 = p__26379;
var map__26382__$1 = ((((!((map__26382 == null)))?((((map__26382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26382):map__26382);
var file_msg = map__26382__$1;
var request_url = cljs.core.get.call(null,map__26382__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26382__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18942__auto___26470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___26470,out){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___26470,out){
return (function (state_26452){
var state_val_26453 = (state_26452[(1)]);
if((state_val_26453 === (1))){
var inst_26430 = cljs.core.nth.call(null,files,(0),null);
var inst_26431 = cljs.core.nthnext.call(null,files,(1));
var inst_26432 = files;
var state_26452__$1 = (function (){var statearr_26454 = state_26452;
(statearr_26454[(7)] = inst_26430);

(statearr_26454[(8)] = inst_26432);

(statearr_26454[(9)] = inst_26431);

return statearr_26454;
})();
var statearr_26455_26471 = state_26452__$1;
(statearr_26455_26471[(2)] = null);

(statearr_26455_26471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26453 === (2))){
var inst_26432 = (state_26452[(8)]);
var inst_26435 = (state_26452[(10)]);
var inst_26435__$1 = cljs.core.nth.call(null,inst_26432,(0),null);
var inst_26436 = cljs.core.nthnext.call(null,inst_26432,(1));
var inst_26437 = (inst_26435__$1 == null);
var inst_26438 = cljs.core.not.call(null,inst_26437);
var state_26452__$1 = (function (){var statearr_26456 = state_26452;
(statearr_26456[(11)] = inst_26436);

(statearr_26456[(10)] = inst_26435__$1);

return statearr_26456;
})();
if(inst_26438){
var statearr_26457_26472 = state_26452__$1;
(statearr_26457_26472[(1)] = (4));

} else {
var statearr_26458_26473 = state_26452__$1;
(statearr_26458_26473[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26453 === (3))){
var inst_26450 = (state_26452[(2)]);
var state_26452__$1 = state_26452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26452__$1,inst_26450);
} else {
if((state_val_26453 === (4))){
var inst_26435 = (state_26452[(10)]);
var inst_26440 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26435);
var state_26452__$1 = state_26452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26452__$1,(7),inst_26440);
} else {
if((state_val_26453 === (5))){
var inst_26446 = cljs.core.async.close_BANG_.call(null,out);
var state_26452__$1 = state_26452;
var statearr_26459_26474 = state_26452__$1;
(statearr_26459_26474[(2)] = inst_26446);

(statearr_26459_26474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26453 === (6))){
var inst_26448 = (state_26452[(2)]);
var state_26452__$1 = state_26452;
var statearr_26460_26475 = state_26452__$1;
(statearr_26460_26475[(2)] = inst_26448);

(statearr_26460_26475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26453 === (7))){
var inst_26436 = (state_26452[(11)]);
var inst_26442 = (state_26452[(2)]);
var inst_26443 = cljs.core.async.put_BANG_.call(null,out,inst_26442);
var inst_26432 = inst_26436;
var state_26452__$1 = (function (){var statearr_26461 = state_26452;
(statearr_26461[(12)] = inst_26443);

(statearr_26461[(8)] = inst_26432);

return statearr_26461;
})();
var statearr_26462_26476 = state_26452__$1;
(statearr_26462_26476[(2)] = null);

(statearr_26462_26476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18942__auto___26470,out))
;
return ((function (switch__18921__auto__,c__18942__auto___26470,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto____0 = (function (){
var statearr_26466 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26466[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto__);

(statearr_26466[(1)] = (1));

return statearr_26466;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto____1 = (function (state_26452){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_26452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e26467){if((e26467 instanceof Object)){
var ex__18925__auto__ = e26467;
var statearr_26468_26477 = state_26452;
(statearr_26468_26477[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26478 = state_26452;
state_26452 = G__26478;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto__ = function(state_26452){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto____1.call(this,state_26452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___26470,out))
})();
var state__18944__auto__ = (function (){var statearr_26469 = f__18943__auto__.call(null);
(statearr_26469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___26470);

return statearr_26469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___26470,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26479,opts){
var map__26483 = p__26479;
var map__26483__$1 = ((((!((map__26483 == null)))?((((map__26483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26483):map__26483);
var eval_body__$1 = cljs.core.get.call(null,map__26483__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26483__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16814__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16814__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16814__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26485){var e = e26485;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26486_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26486_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26491){
var vec__26492 = p__26491;
var k = cljs.core.nth.call(null,vec__26492,(0),null);
var v = cljs.core.nth.call(null,vec__26492,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26493){
var vec__26494 = p__26493;
var k = cljs.core.nth.call(null,vec__26494,(0),null);
var v = cljs.core.nth.call(null,vec__26494,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26498,p__26499){
var map__26746 = p__26498;
var map__26746__$1 = ((((!((map__26746 == null)))?((((map__26746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26746):map__26746);
var opts = map__26746__$1;
var before_jsload = cljs.core.get.call(null,map__26746__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26746__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26746__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26747 = p__26499;
var map__26747__$1 = ((((!((map__26747 == null)))?((((map__26747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26747):map__26747);
var msg = map__26747__$1;
var files = cljs.core.get.call(null,map__26747__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26747__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26747__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18942__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26900){
var state_val_26901 = (state_26900[(1)]);
if((state_val_26901 === (7))){
var inst_26761 = (state_26900[(7)]);
var inst_26762 = (state_26900[(8)]);
var inst_26763 = (state_26900[(9)]);
var inst_26764 = (state_26900[(10)]);
var inst_26769 = cljs.core._nth.call(null,inst_26762,inst_26764);
var inst_26770 = figwheel.client.file_reloading.eval_body.call(null,inst_26769,opts);
var inst_26771 = (inst_26764 + (1));
var tmp26902 = inst_26761;
var tmp26903 = inst_26762;
var tmp26904 = inst_26763;
var inst_26761__$1 = tmp26902;
var inst_26762__$1 = tmp26903;
var inst_26763__$1 = tmp26904;
var inst_26764__$1 = inst_26771;
var state_26900__$1 = (function (){var statearr_26905 = state_26900;
(statearr_26905[(7)] = inst_26761__$1);

(statearr_26905[(11)] = inst_26770);

(statearr_26905[(8)] = inst_26762__$1);

(statearr_26905[(9)] = inst_26763__$1);

(statearr_26905[(10)] = inst_26764__$1);

return statearr_26905;
})();
var statearr_26906_26992 = state_26900__$1;
(statearr_26906_26992[(2)] = null);

(statearr_26906_26992[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (20))){
var inst_26804 = (state_26900[(12)]);
var inst_26812 = figwheel.client.file_reloading.sort_files.call(null,inst_26804);
var state_26900__$1 = state_26900;
var statearr_26907_26993 = state_26900__$1;
(statearr_26907_26993[(2)] = inst_26812);

(statearr_26907_26993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (27))){
var state_26900__$1 = state_26900;
var statearr_26908_26994 = state_26900__$1;
(statearr_26908_26994[(2)] = null);

(statearr_26908_26994[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (1))){
var inst_26753 = (state_26900[(13)]);
var inst_26750 = before_jsload.call(null,files);
var inst_26751 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26752 = (function (){return ((function (inst_26753,inst_26750,inst_26751,state_val_26901,c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26495_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26495_SHARP_);
});
;})(inst_26753,inst_26750,inst_26751,state_val_26901,c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26753__$1 = cljs.core.filter.call(null,inst_26752,files);
var inst_26754 = cljs.core.not_empty.call(null,inst_26753__$1);
var state_26900__$1 = (function (){var statearr_26909 = state_26900;
(statearr_26909[(14)] = inst_26750);

(statearr_26909[(15)] = inst_26751);

(statearr_26909[(13)] = inst_26753__$1);

return statearr_26909;
})();
if(cljs.core.truth_(inst_26754)){
var statearr_26910_26995 = state_26900__$1;
(statearr_26910_26995[(1)] = (2));

} else {
var statearr_26911_26996 = state_26900__$1;
(statearr_26911_26996[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (24))){
var state_26900__$1 = state_26900;
var statearr_26912_26997 = state_26900__$1;
(statearr_26912_26997[(2)] = null);

(statearr_26912_26997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (39))){
var inst_26854 = (state_26900[(16)]);
var state_26900__$1 = state_26900;
var statearr_26913_26998 = state_26900__$1;
(statearr_26913_26998[(2)] = inst_26854);

(statearr_26913_26998[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (46))){
var inst_26895 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26914_26999 = state_26900__$1;
(statearr_26914_26999[(2)] = inst_26895);

(statearr_26914_26999[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (4))){
var inst_26798 = (state_26900[(2)]);
var inst_26799 = cljs.core.List.EMPTY;
var inst_26800 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26799);
var inst_26801 = (function (){return ((function (inst_26798,inst_26799,inst_26800,state_val_26901,c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26496_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26496_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26496_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_26798,inst_26799,inst_26800,state_val_26901,c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26802 = cljs.core.filter.call(null,inst_26801,files);
var inst_26803 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26804 = cljs.core.concat.call(null,inst_26802,inst_26803);
var state_26900__$1 = (function (){var statearr_26915 = state_26900;
(statearr_26915[(17)] = inst_26800);

(statearr_26915[(12)] = inst_26804);

(statearr_26915[(18)] = inst_26798);

return statearr_26915;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26916_27000 = state_26900__$1;
(statearr_26916_27000[(1)] = (16));

} else {
var statearr_26917_27001 = state_26900__$1;
(statearr_26917_27001[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (15))){
var inst_26788 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26918_27002 = state_26900__$1;
(statearr_26918_27002[(2)] = inst_26788);

(statearr_26918_27002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (21))){
var inst_26814 = (state_26900[(19)]);
var inst_26814__$1 = (state_26900[(2)]);
var inst_26815 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26814__$1);
var state_26900__$1 = (function (){var statearr_26919 = state_26900;
(statearr_26919[(19)] = inst_26814__$1);

return statearr_26919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26900__$1,(22),inst_26815);
} else {
if((state_val_26901 === (31))){
var inst_26898 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26900__$1,inst_26898);
} else {
if((state_val_26901 === (32))){
var inst_26854 = (state_26900[(16)]);
var inst_26859 = inst_26854.cljs$lang$protocol_mask$partition0$;
var inst_26860 = (inst_26859 & (64));
var inst_26861 = inst_26854.cljs$core$ISeq$;
var inst_26862 = (inst_26860) || (inst_26861);
var state_26900__$1 = state_26900;
if(cljs.core.truth_(inst_26862)){
var statearr_26920_27003 = state_26900__$1;
(statearr_26920_27003[(1)] = (35));

} else {
var statearr_26921_27004 = state_26900__$1;
(statearr_26921_27004[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (40))){
var inst_26875 = (state_26900[(20)]);
var inst_26874 = (state_26900[(2)]);
var inst_26875__$1 = cljs.core.get.call(null,inst_26874,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26876 = cljs.core.get.call(null,inst_26874,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26877 = cljs.core.not_empty.call(null,inst_26875__$1);
var state_26900__$1 = (function (){var statearr_26922 = state_26900;
(statearr_26922[(20)] = inst_26875__$1);

(statearr_26922[(21)] = inst_26876);

return statearr_26922;
})();
if(cljs.core.truth_(inst_26877)){
var statearr_26923_27005 = state_26900__$1;
(statearr_26923_27005[(1)] = (41));

} else {
var statearr_26924_27006 = state_26900__$1;
(statearr_26924_27006[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (33))){
var state_26900__$1 = state_26900;
var statearr_26925_27007 = state_26900__$1;
(statearr_26925_27007[(2)] = false);

(statearr_26925_27007[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (13))){
var inst_26774 = (state_26900[(22)]);
var inst_26778 = cljs.core.chunk_first.call(null,inst_26774);
var inst_26779 = cljs.core.chunk_rest.call(null,inst_26774);
var inst_26780 = cljs.core.count.call(null,inst_26778);
var inst_26761 = inst_26779;
var inst_26762 = inst_26778;
var inst_26763 = inst_26780;
var inst_26764 = (0);
var state_26900__$1 = (function (){var statearr_26926 = state_26900;
(statearr_26926[(7)] = inst_26761);

(statearr_26926[(8)] = inst_26762);

(statearr_26926[(9)] = inst_26763);

(statearr_26926[(10)] = inst_26764);

return statearr_26926;
})();
var statearr_26927_27008 = state_26900__$1;
(statearr_26927_27008[(2)] = null);

(statearr_26927_27008[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (22))){
var inst_26818 = (state_26900[(23)]);
var inst_26814 = (state_26900[(19)]);
var inst_26822 = (state_26900[(24)]);
var inst_26817 = (state_26900[(25)]);
var inst_26817__$1 = (state_26900[(2)]);
var inst_26818__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26817__$1);
var inst_26819 = (function (){var all_files = inst_26814;
var res_SINGLEQUOTE_ = inst_26817__$1;
var res = inst_26818__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26818,inst_26814,inst_26822,inst_26817,inst_26817__$1,inst_26818__$1,state_val_26901,c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26497_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26497_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26818,inst_26814,inst_26822,inst_26817,inst_26817__$1,inst_26818__$1,state_val_26901,c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26820 = cljs.core.filter.call(null,inst_26819,inst_26817__$1);
var inst_26821 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26822__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26821);
var inst_26823 = cljs.core.not_empty.call(null,inst_26822__$1);
var state_26900__$1 = (function (){var statearr_26928 = state_26900;
(statearr_26928[(23)] = inst_26818__$1);

(statearr_26928[(24)] = inst_26822__$1);

(statearr_26928[(26)] = inst_26820);

(statearr_26928[(25)] = inst_26817__$1);

return statearr_26928;
})();
if(cljs.core.truth_(inst_26823)){
var statearr_26929_27009 = state_26900__$1;
(statearr_26929_27009[(1)] = (23));

} else {
var statearr_26930_27010 = state_26900__$1;
(statearr_26930_27010[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (36))){
var state_26900__$1 = state_26900;
var statearr_26931_27011 = state_26900__$1;
(statearr_26931_27011[(2)] = false);

(statearr_26931_27011[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (41))){
var inst_26875 = (state_26900[(20)]);
var inst_26879 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26880 = cljs.core.map.call(null,inst_26879,inst_26875);
var inst_26881 = cljs.core.pr_str.call(null,inst_26880);
var inst_26882 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26881)].join('');
var inst_26883 = figwheel.client.utils.log.call(null,inst_26882);
var state_26900__$1 = state_26900;
var statearr_26932_27012 = state_26900__$1;
(statearr_26932_27012[(2)] = inst_26883);

(statearr_26932_27012[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (43))){
var inst_26876 = (state_26900[(21)]);
var inst_26886 = (state_26900[(2)]);
var inst_26887 = cljs.core.not_empty.call(null,inst_26876);
var state_26900__$1 = (function (){var statearr_26933 = state_26900;
(statearr_26933[(27)] = inst_26886);

return statearr_26933;
})();
if(cljs.core.truth_(inst_26887)){
var statearr_26934_27013 = state_26900__$1;
(statearr_26934_27013[(1)] = (44));

} else {
var statearr_26935_27014 = state_26900__$1;
(statearr_26935_27014[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (29))){
var inst_26818 = (state_26900[(23)]);
var inst_26814 = (state_26900[(19)]);
var inst_26854 = (state_26900[(16)]);
var inst_26822 = (state_26900[(24)]);
var inst_26820 = (state_26900[(26)]);
var inst_26817 = (state_26900[(25)]);
var inst_26850 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26853 = (function (){var all_files = inst_26814;
var res_SINGLEQUOTE_ = inst_26817;
var res = inst_26818;
var files_not_loaded = inst_26820;
var dependencies_that_loaded = inst_26822;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26818,inst_26814,inst_26854,inst_26822,inst_26820,inst_26817,inst_26850,state_val_26901,c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26852){
var map__26936 = p__26852;
var map__26936__$1 = ((((!((map__26936 == null)))?((((map__26936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26936):map__26936);
var namespace = cljs.core.get.call(null,map__26936__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26818,inst_26814,inst_26854,inst_26822,inst_26820,inst_26817,inst_26850,state_val_26901,c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26854__$1 = cljs.core.group_by.call(null,inst_26853,inst_26820);
var inst_26856 = (inst_26854__$1 == null);
var inst_26857 = cljs.core.not.call(null,inst_26856);
var state_26900__$1 = (function (){var statearr_26938 = state_26900;
(statearr_26938[(28)] = inst_26850);

(statearr_26938[(16)] = inst_26854__$1);

return statearr_26938;
})();
if(inst_26857){
var statearr_26939_27015 = state_26900__$1;
(statearr_26939_27015[(1)] = (32));

} else {
var statearr_26940_27016 = state_26900__$1;
(statearr_26940_27016[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (44))){
var inst_26876 = (state_26900[(21)]);
var inst_26889 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26876);
var inst_26890 = cljs.core.pr_str.call(null,inst_26889);
var inst_26891 = [cljs.core.str("not required: "),cljs.core.str(inst_26890)].join('');
var inst_26892 = figwheel.client.utils.log.call(null,inst_26891);
var state_26900__$1 = state_26900;
var statearr_26941_27017 = state_26900__$1;
(statearr_26941_27017[(2)] = inst_26892);

(statearr_26941_27017[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (6))){
var inst_26795 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26942_27018 = state_26900__$1;
(statearr_26942_27018[(2)] = inst_26795);

(statearr_26942_27018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (28))){
var inst_26820 = (state_26900[(26)]);
var inst_26847 = (state_26900[(2)]);
var inst_26848 = cljs.core.not_empty.call(null,inst_26820);
var state_26900__$1 = (function (){var statearr_26943 = state_26900;
(statearr_26943[(29)] = inst_26847);

return statearr_26943;
})();
if(cljs.core.truth_(inst_26848)){
var statearr_26944_27019 = state_26900__$1;
(statearr_26944_27019[(1)] = (29));

} else {
var statearr_26945_27020 = state_26900__$1;
(statearr_26945_27020[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (25))){
var inst_26818 = (state_26900[(23)]);
var inst_26834 = (state_26900[(2)]);
var inst_26835 = cljs.core.not_empty.call(null,inst_26818);
var state_26900__$1 = (function (){var statearr_26946 = state_26900;
(statearr_26946[(30)] = inst_26834);

return statearr_26946;
})();
if(cljs.core.truth_(inst_26835)){
var statearr_26947_27021 = state_26900__$1;
(statearr_26947_27021[(1)] = (26));

} else {
var statearr_26948_27022 = state_26900__$1;
(statearr_26948_27022[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (34))){
var inst_26869 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
if(cljs.core.truth_(inst_26869)){
var statearr_26949_27023 = state_26900__$1;
(statearr_26949_27023[(1)] = (38));

} else {
var statearr_26950_27024 = state_26900__$1;
(statearr_26950_27024[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (17))){
var state_26900__$1 = state_26900;
var statearr_26951_27025 = state_26900__$1;
(statearr_26951_27025[(2)] = recompile_dependents);

(statearr_26951_27025[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (3))){
var state_26900__$1 = state_26900;
var statearr_26952_27026 = state_26900__$1;
(statearr_26952_27026[(2)] = null);

(statearr_26952_27026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (12))){
var inst_26791 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26953_27027 = state_26900__$1;
(statearr_26953_27027[(2)] = inst_26791);

(statearr_26953_27027[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (2))){
var inst_26753 = (state_26900[(13)]);
var inst_26760 = cljs.core.seq.call(null,inst_26753);
var inst_26761 = inst_26760;
var inst_26762 = null;
var inst_26763 = (0);
var inst_26764 = (0);
var state_26900__$1 = (function (){var statearr_26954 = state_26900;
(statearr_26954[(7)] = inst_26761);

(statearr_26954[(8)] = inst_26762);

(statearr_26954[(9)] = inst_26763);

(statearr_26954[(10)] = inst_26764);

return statearr_26954;
})();
var statearr_26955_27028 = state_26900__$1;
(statearr_26955_27028[(2)] = null);

(statearr_26955_27028[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (23))){
var inst_26818 = (state_26900[(23)]);
var inst_26814 = (state_26900[(19)]);
var inst_26822 = (state_26900[(24)]);
var inst_26820 = (state_26900[(26)]);
var inst_26817 = (state_26900[(25)]);
var inst_26825 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26827 = (function (){var all_files = inst_26814;
var res_SINGLEQUOTE_ = inst_26817;
var res = inst_26818;
var files_not_loaded = inst_26820;
var dependencies_that_loaded = inst_26822;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26818,inst_26814,inst_26822,inst_26820,inst_26817,inst_26825,state_val_26901,c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26826){
var map__26956 = p__26826;
var map__26956__$1 = ((((!((map__26956 == null)))?((((map__26956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26956):map__26956);
var request_url = cljs.core.get.call(null,map__26956__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26818,inst_26814,inst_26822,inst_26820,inst_26817,inst_26825,state_val_26901,c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26828 = cljs.core.reverse.call(null,inst_26822);
var inst_26829 = cljs.core.map.call(null,inst_26827,inst_26828);
var inst_26830 = cljs.core.pr_str.call(null,inst_26829);
var inst_26831 = figwheel.client.utils.log.call(null,inst_26830);
var state_26900__$1 = (function (){var statearr_26958 = state_26900;
(statearr_26958[(31)] = inst_26825);

return statearr_26958;
})();
var statearr_26959_27029 = state_26900__$1;
(statearr_26959_27029[(2)] = inst_26831);

(statearr_26959_27029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (35))){
var state_26900__$1 = state_26900;
var statearr_26960_27030 = state_26900__$1;
(statearr_26960_27030[(2)] = true);

(statearr_26960_27030[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (19))){
var inst_26804 = (state_26900[(12)]);
var inst_26810 = figwheel.client.file_reloading.expand_files.call(null,inst_26804);
var state_26900__$1 = state_26900;
var statearr_26961_27031 = state_26900__$1;
(statearr_26961_27031[(2)] = inst_26810);

(statearr_26961_27031[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (11))){
var state_26900__$1 = state_26900;
var statearr_26962_27032 = state_26900__$1;
(statearr_26962_27032[(2)] = null);

(statearr_26962_27032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (9))){
var inst_26793 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26963_27033 = state_26900__$1;
(statearr_26963_27033[(2)] = inst_26793);

(statearr_26963_27033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (5))){
var inst_26763 = (state_26900[(9)]);
var inst_26764 = (state_26900[(10)]);
var inst_26766 = (inst_26764 < inst_26763);
var inst_26767 = inst_26766;
var state_26900__$1 = state_26900;
if(cljs.core.truth_(inst_26767)){
var statearr_26964_27034 = state_26900__$1;
(statearr_26964_27034[(1)] = (7));

} else {
var statearr_26965_27035 = state_26900__$1;
(statearr_26965_27035[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (14))){
var inst_26774 = (state_26900[(22)]);
var inst_26783 = cljs.core.first.call(null,inst_26774);
var inst_26784 = figwheel.client.file_reloading.eval_body.call(null,inst_26783,opts);
var inst_26785 = cljs.core.next.call(null,inst_26774);
var inst_26761 = inst_26785;
var inst_26762 = null;
var inst_26763 = (0);
var inst_26764 = (0);
var state_26900__$1 = (function (){var statearr_26966 = state_26900;
(statearr_26966[(7)] = inst_26761);

(statearr_26966[(32)] = inst_26784);

(statearr_26966[(8)] = inst_26762);

(statearr_26966[(9)] = inst_26763);

(statearr_26966[(10)] = inst_26764);

return statearr_26966;
})();
var statearr_26967_27036 = state_26900__$1;
(statearr_26967_27036[(2)] = null);

(statearr_26967_27036[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (45))){
var state_26900__$1 = state_26900;
var statearr_26968_27037 = state_26900__$1;
(statearr_26968_27037[(2)] = null);

(statearr_26968_27037[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (26))){
var inst_26818 = (state_26900[(23)]);
var inst_26814 = (state_26900[(19)]);
var inst_26822 = (state_26900[(24)]);
var inst_26820 = (state_26900[(26)]);
var inst_26817 = (state_26900[(25)]);
var inst_26837 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26839 = (function (){var all_files = inst_26814;
var res_SINGLEQUOTE_ = inst_26817;
var res = inst_26818;
var files_not_loaded = inst_26820;
var dependencies_that_loaded = inst_26822;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26818,inst_26814,inst_26822,inst_26820,inst_26817,inst_26837,state_val_26901,c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26838){
var map__26969 = p__26838;
var map__26969__$1 = ((((!((map__26969 == null)))?((((map__26969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26969):map__26969);
var namespace = cljs.core.get.call(null,map__26969__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26969__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26818,inst_26814,inst_26822,inst_26820,inst_26817,inst_26837,state_val_26901,c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26840 = cljs.core.map.call(null,inst_26839,inst_26818);
var inst_26841 = cljs.core.pr_str.call(null,inst_26840);
var inst_26842 = figwheel.client.utils.log.call(null,inst_26841);
var inst_26843 = (function (){var all_files = inst_26814;
var res_SINGLEQUOTE_ = inst_26817;
var res = inst_26818;
var files_not_loaded = inst_26820;
var dependencies_that_loaded = inst_26822;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26818,inst_26814,inst_26822,inst_26820,inst_26817,inst_26837,inst_26839,inst_26840,inst_26841,inst_26842,state_val_26901,c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26818,inst_26814,inst_26822,inst_26820,inst_26817,inst_26837,inst_26839,inst_26840,inst_26841,inst_26842,state_val_26901,c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26844 = setTimeout(inst_26843,(10));
var state_26900__$1 = (function (){var statearr_26971 = state_26900;
(statearr_26971[(33)] = inst_26842);

(statearr_26971[(34)] = inst_26837);

return statearr_26971;
})();
var statearr_26972_27038 = state_26900__$1;
(statearr_26972_27038[(2)] = inst_26844);

(statearr_26972_27038[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (16))){
var state_26900__$1 = state_26900;
var statearr_26973_27039 = state_26900__$1;
(statearr_26973_27039[(2)] = reload_dependents);

(statearr_26973_27039[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (38))){
var inst_26854 = (state_26900[(16)]);
var inst_26871 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26854);
var state_26900__$1 = state_26900;
var statearr_26974_27040 = state_26900__$1;
(statearr_26974_27040[(2)] = inst_26871);

(statearr_26974_27040[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (30))){
var state_26900__$1 = state_26900;
var statearr_26975_27041 = state_26900__$1;
(statearr_26975_27041[(2)] = null);

(statearr_26975_27041[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (10))){
var inst_26774 = (state_26900[(22)]);
var inst_26776 = cljs.core.chunked_seq_QMARK_.call(null,inst_26774);
var state_26900__$1 = state_26900;
if(inst_26776){
var statearr_26976_27042 = state_26900__$1;
(statearr_26976_27042[(1)] = (13));

} else {
var statearr_26977_27043 = state_26900__$1;
(statearr_26977_27043[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (18))){
var inst_26808 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
if(cljs.core.truth_(inst_26808)){
var statearr_26978_27044 = state_26900__$1;
(statearr_26978_27044[(1)] = (19));

} else {
var statearr_26979_27045 = state_26900__$1;
(statearr_26979_27045[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (42))){
var state_26900__$1 = state_26900;
var statearr_26980_27046 = state_26900__$1;
(statearr_26980_27046[(2)] = null);

(statearr_26980_27046[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (37))){
var inst_26866 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26981_27047 = state_26900__$1;
(statearr_26981_27047[(2)] = inst_26866);

(statearr_26981_27047[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (8))){
var inst_26761 = (state_26900[(7)]);
var inst_26774 = (state_26900[(22)]);
var inst_26774__$1 = cljs.core.seq.call(null,inst_26761);
var state_26900__$1 = (function (){var statearr_26982 = state_26900;
(statearr_26982[(22)] = inst_26774__$1);

return statearr_26982;
})();
if(inst_26774__$1){
var statearr_26983_27048 = state_26900__$1;
(statearr_26983_27048[(1)] = (10));

} else {
var statearr_26984_27049 = state_26900__$1;
(statearr_26984_27049[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18921__auto__,c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto____0 = (function (){
var statearr_26988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26988[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto__);

(statearr_26988[(1)] = (1));

return statearr_26988;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto____1 = (function (state_26900){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_26900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e26989){if((e26989 instanceof Object)){
var ex__18925__auto__ = e26989;
var statearr_26990_27050 = state_26900;
(statearr_26990_27050[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27051 = state_26900;
state_26900 = G__27051;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto__ = function(state_26900){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto____1.call(this,state_26900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18944__auto__ = (function (){var statearr_26991 = f__18943__auto__.call(null);
(statearr_26991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto__);

return statearr_26991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto__,map__26746,map__26746__$1,opts,before_jsload,on_jsload,reload_dependents,map__26747,map__26747__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18942__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27054,link){
var map__27057 = p__27054;
var map__27057__$1 = ((((!((map__27057 == null)))?((((map__27057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27057):map__27057);
var file = cljs.core.get.call(null,map__27057__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27057,map__27057__$1,file){
return (function (p1__27052_SHARP_,p2__27053_SHARP_){
if(cljs.core._EQ_.call(null,p1__27052_SHARP_,p2__27053_SHARP_)){
return p1__27052_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27057,map__27057__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27063){
var map__27064 = p__27063;
var map__27064__$1 = ((((!((map__27064 == null)))?((((map__27064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27064):map__27064);
var match_length = cljs.core.get.call(null,map__27064__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27064__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27059_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27059_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27066 = [];
var len__17884__auto___27069 = arguments.length;
var i__17885__auto___27070 = (0);
while(true){
if((i__17885__auto___27070 < len__17884__auto___27069)){
args27066.push((arguments[i__17885__auto___27070]));

var G__27071 = (i__17885__auto___27070 + (1));
i__17885__auto___27070 = G__27071;
continue;
} else {
}
break;
}

var G__27068 = args27066.length;
switch (G__27068) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27066.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27073_SHARP_,p2__27074_SHARP_){
return cljs.core.assoc.call(null,p1__27073_SHARP_,cljs.core.get.call(null,p2__27074_SHARP_,key),p2__27074_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27075){
var map__27078 = p__27075;
var map__27078__$1 = ((((!((map__27078 == null)))?((((map__27078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27078):map__27078);
var f_data = map__27078__$1;
var file = cljs.core.get.call(null,map__27078__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27080,files_msg){
var map__27087 = p__27080;
var map__27087__$1 = ((((!((map__27087 == null)))?((((map__27087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27087):map__27087);
var opts = map__27087__$1;
var on_cssload = cljs.core.get.call(null,map__27087__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27089_27093 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27090_27094 = null;
var count__27091_27095 = (0);
var i__27092_27096 = (0);
while(true){
if((i__27092_27096 < count__27091_27095)){
var f_27097 = cljs.core._nth.call(null,chunk__27090_27094,i__27092_27096);
figwheel.client.file_reloading.reload_css_file.call(null,f_27097);

var G__27098 = seq__27089_27093;
var G__27099 = chunk__27090_27094;
var G__27100 = count__27091_27095;
var G__27101 = (i__27092_27096 + (1));
seq__27089_27093 = G__27098;
chunk__27090_27094 = G__27099;
count__27091_27095 = G__27100;
i__27092_27096 = G__27101;
continue;
} else {
var temp__4425__auto___27102 = cljs.core.seq.call(null,seq__27089_27093);
if(temp__4425__auto___27102){
var seq__27089_27103__$1 = temp__4425__auto___27102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27089_27103__$1)){
var c__17629__auto___27104 = cljs.core.chunk_first.call(null,seq__27089_27103__$1);
var G__27105 = cljs.core.chunk_rest.call(null,seq__27089_27103__$1);
var G__27106 = c__17629__auto___27104;
var G__27107 = cljs.core.count.call(null,c__17629__auto___27104);
var G__27108 = (0);
seq__27089_27093 = G__27105;
chunk__27090_27094 = G__27106;
count__27091_27095 = G__27107;
i__27092_27096 = G__27108;
continue;
} else {
var f_27109 = cljs.core.first.call(null,seq__27089_27103__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27109);

var G__27110 = cljs.core.next.call(null,seq__27089_27103__$1);
var G__27111 = null;
var G__27112 = (0);
var G__27113 = (0);
seq__27089_27093 = G__27110;
chunk__27090_27094 = G__27111;
count__27091_27095 = G__27112;
i__27092_27096 = G__27113;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27087,map__27087__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27087,map__27087__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1454026303782