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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25374_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25374_SHARP_));
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
var seq__25379 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25380 = null;
var count__25381 = (0);
var i__25382 = (0);
while(true){
if((i__25382 < count__25381)){
var n = cljs.core._nth.call(null,chunk__25380,i__25382);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25383 = seq__25379;
var G__25384 = chunk__25380;
var G__25385 = count__25381;
var G__25386 = (i__25382 + (1));
seq__25379 = G__25383;
chunk__25380 = G__25384;
count__25381 = G__25385;
i__25382 = G__25386;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25379);
if(temp__4425__auto__){
var seq__25379__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25379__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__25379__$1);
var G__25387 = cljs.core.chunk_rest.call(null,seq__25379__$1);
var G__25388 = c__17629__auto__;
var G__25389 = cljs.core.count.call(null,c__17629__auto__);
var G__25390 = (0);
seq__25379 = G__25387;
chunk__25380 = G__25388;
count__25381 = G__25389;
i__25382 = G__25390;
continue;
} else {
var n = cljs.core.first.call(null,seq__25379__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25391 = cljs.core.next.call(null,seq__25379__$1);
var G__25392 = null;
var G__25393 = (0);
var G__25394 = (0);
seq__25379 = G__25391;
chunk__25380 = G__25392;
count__25381 = G__25393;
i__25382 = G__25394;
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

var seq__25433_25440 = cljs.core.seq.call(null,deps);
var chunk__25434_25441 = null;
var count__25435_25442 = (0);
var i__25436_25443 = (0);
while(true){
if((i__25436_25443 < count__25435_25442)){
var dep_25444 = cljs.core._nth.call(null,chunk__25434_25441,i__25436_25443);
topo_sort_helper_STAR_.call(null,dep_25444,(depth + (1)),state);

var G__25445 = seq__25433_25440;
var G__25446 = chunk__25434_25441;
var G__25447 = count__25435_25442;
var G__25448 = (i__25436_25443 + (1));
seq__25433_25440 = G__25445;
chunk__25434_25441 = G__25446;
count__25435_25442 = G__25447;
i__25436_25443 = G__25448;
continue;
} else {
var temp__4425__auto___25449 = cljs.core.seq.call(null,seq__25433_25440);
if(temp__4425__auto___25449){
var seq__25433_25450__$1 = temp__4425__auto___25449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25433_25450__$1)){
var c__17629__auto___25451 = cljs.core.chunk_first.call(null,seq__25433_25450__$1);
var G__25452 = cljs.core.chunk_rest.call(null,seq__25433_25450__$1);
var G__25453 = c__17629__auto___25451;
var G__25454 = cljs.core.count.call(null,c__17629__auto___25451);
var G__25455 = (0);
seq__25433_25440 = G__25452;
chunk__25434_25441 = G__25453;
count__25435_25442 = G__25454;
i__25436_25443 = G__25455;
continue;
} else {
var dep_25456 = cljs.core.first.call(null,seq__25433_25450__$1);
topo_sort_helper_STAR_.call(null,dep_25456,(depth + (1)),state);

var G__25457 = cljs.core.next.call(null,seq__25433_25450__$1);
var G__25458 = null;
var G__25459 = (0);
var G__25460 = (0);
seq__25433_25440 = G__25457;
chunk__25434_25441 = G__25458;
count__25435_25442 = G__25459;
i__25436_25443 = G__25460;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25437){
var vec__25439 = p__25437;
var x = cljs.core.nth.call(null,vec__25439,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25439,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25439,x,xs,get_deps__$1){
return (function (p1__25395_SHARP_){
return clojure.set.difference.call(null,p1__25395_SHARP_,x);
});})(vec__25439,x,xs,get_deps__$1))
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
var seq__25473 = cljs.core.seq.call(null,provides);
var chunk__25474 = null;
var count__25475 = (0);
var i__25476 = (0);
while(true){
if((i__25476 < count__25475)){
var prov = cljs.core._nth.call(null,chunk__25474,i__25476);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25477_25485 = cljs.core.seq.call(null,requires);
var chunk__25478_25486 = null;
var count__25479_25487 = (0);
var i__25480_25488 = (0);
while(true){
if((i__25480_25488 < count__25479_25487)){
var req_25489 = cljs.core._nth.call(null,chunk__25478_25486,i__25480_25488);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25489,prov);

var G__25490 = seq__25477_25485;
var G__25491 = chunk__25478_25486;
var G__25492 = count__25479_25487;
var G__25493 = (i__25480_25488 + (1));
seq__25477_25485 = G__25490;
chunk__25478_25486 = G__25491;
count__25479_25487 = G__25492;
i__25480_25488 = G__25493;
continue;
} else {
var temp__4425__auto___25494 = cljs.core.seq.call(null,seq__25477_25485);
if(temp__4425__auto___25494){
var seq__25477_25495__$1 = temp__4425__auto___25494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25477_25495__$1)){
var c__17629__auto___25496 = cljs.core.chunk_first.call(null,seq__25477_25495__$1);
var G__25497 = cljs.core.chunk_rest.call(null,seq__25477_25495__$1);
var G__25498 = c__17629__auto___25496;
var G__25499 = cljs.core.count.call(null,c__17629__auto___25496);
var G__25500 = (0);
seq__25477_25485 = G__25497;
chunk__25478_25486 = G__25498;
count__25479_25487 = G__25499;
i__25480_25488 = G__25500;
continue;
} else {
var req_25501 = cljs.core.first.call(null,seq__25477_25495__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25501,prov);

var G__25502 = cljs.core.next.call(null,seq__25477_25495__$1);
var G__25503 = null;
var G__25504 = (0);
var G__25505 = (0);
seq__25477_25485 = G__25502;
chunk__25478_25486 = G__25503;
count__25479_25487 = G__25504;
i__25480_25488 = G__25505;
continue;
}
} else {
}
}
break;
}

var G__25506 = seq__25473;
var G__25507 = chunk__25474;
var G__25508 = count__25475;
var G__25509 = (i__25476 + (1));
seq__25473 = G__25506;
chunk__25474 = G__25507;
count__25475 = G__25508;
i__25476 = G__25509;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25473);
if(temp__4425__auto__){
var seq__25473__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25473__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__25473__$1);
var G__25510 = cljs.core.chunk_rest.call(null,seq__25473__$1);
var G__25511 = c__17629__auto__;
var G__25512 = cljs.core.count.call(null,c__17629__auto__);
var G__25513 = (0);
seq__25473 = G__25510;
chunk__25474 = G__25511;
count__25475 = G__25512;
i__25476 = G__25513;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25473__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25481_25514 = cljs.core.seq.call(null,requires);
var chunk__25482_25515 = null;
var count__25483_25516 = (0);
var i__25484_25517 = (0);
while(true){
if((i__25484_25517 < count__25483_25516)){
var req_25518 = cljs.core._nth.call(null,chunk__25482_25515,i__25484_25517);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25518,prov);

var G__25519 = seq__25481_25514;
var G__25520 = chunk__25482_25515;
var G__25521 = count__25483_25516;
var G__25522 = (i__25484_25517 + (1));
seq__25481_25514 = G__25519;
chunk__25482_25515 = G__25520;
count__25483_25516 = G__25521;
i__25484_25517 = G__25522;
continue;
} else {
var temp__4425__auto___25523__$1 = cljs.core.seq.call(null,seq__25481_25514);
if(temp__4425__auto___25523__$1){
var seq__25481_25524__$1 = temp__4425__auto___25523__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25481_25524__$1)){
var c__17629__auto___25525 = cljs.core.chunk_first.call(null,seq__25481_25524__$1);
var G__25526 = cljs.core.chunk_rest.call(null,seq__25481_25524__$1);
var G__25527 = c__17629__auto___25525;
var G__25528 = cljs.core.count.call(null,c__17629__auto___25525);
var G__25529 = (0);
seq__25481_25514 = G__25526;
chunk__25482_25515 = G__25527;
count__25483_25516 = G__25528;
i__25484_25517 = G__25529;
continue;
} else {
var req_25530 = cljs.core.first.call(null,seq__25481_25524__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25530,prov);

var G__25531 = cljs.core.next.call(null,seq__25481_25524__$1);
var G__25532 = null;
var G__25533 = (0);
var G__25534 = (0);
seq__25481_25514 = G__25531;
chunk__25482_25515 = G__25532;
count__25483_25516 = G__25533;
i__25484_25517 = G__25534;
continue;
}
} else {
}
}
break;
}

var G__25535 = cljs.core.next.call(null,seq__25473__$1);
var G__25536 = null;
var G__25537 = (0);
var G__25538 = (0);
seq__25473 = G__25535;
chunk__25474 = G__25536;
count__25475 = G__25537;
i__25476 = G__25538;
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
var seq__25543_25547 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25544_25548 = null;
var count__25545_25549 = (0);
var i__25546_25550 = (0);
while(true){
if((i__25546_25550 < count__25545_25549)){
var ns_25551 = cljs.core._nth.call(null,chunk__25544_25548,i__25546_25550);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25551);

var G__25552 = seq__25543_25547;
var G__25553 = chunk__25544_25548;
var G__25554 = count__25545_25549;
var G__25555 = (i__25546_25550 + (1));
seq__25543_25547 = G__25552;
chunk__25544_25548 = G__25553;
count__25545_25549 = G__25554;
i__25546_25550 = G__25555;
continue;
} else {
var temp__4425__auto___25556 = cljs.core.seq.call(null,seq__25543_25547);
if(temp__4425__auto___25556){
var seq__25543_25557__$1 = temp__4425__auto___25556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25543_25557__$1)){
var c__17629__auto___25558 = cljs.core.chunk_first.call(null,seq__25543_25557__$1);
var G__25559 = cljs.core.chunk_rest.call(null,seq__25543_25557__$1);
var G__25560 = c__17629__auto___25558;
var G__25561 = cljs.core.count.call(null,c__17629__auto___25558);
var G__25562 = (0);
seq__25543_25547 = G__25559;
chunk__25544_25548 = G__25560;
count__25545_25549 = G__25561;
i__25546_25550 = G__25562;
continue;
} else {
var ns_25563 = cljs.core.first.call(null,seq__25543_25557__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25563);

var G__25564 = cljs.core.next.call(null,seq__25543_25557__$1);
var G__25565 = null;
var G__25566 = (0);
var G__25567 = (0);
seq__25543_25547 = G__25564;
chunk__25544_25548 = G__25565;
count__25545_25549 = G__25566;
i__25546_25550 = G__25567;
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
var G__25568__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25569__i = 0, G__25569__a = new Array(arguments.length -  0);
while (G__25569__i < G__25569__a.length) {G__25569__a[G__25569__i] = arguments[G__25569__i + 0]; ++G__25569__i;}
  args = new cljs.core.IndexedSeq(G__25569__a,0);
} 
return G__25568__delegate.call(this,args);};
G__25568.cljs$lang$maxFixedArity = 0;
G__25568.cljs$lang$applyTo = (function (arglist__25570){
var args = cljs.core.seq(arglist__25570);
return G__25568__delegate(args);
});
G__25568.cljs$core$IFn$_invoke$arity$variadic = G__25568__delegate;
return G__25568;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25572 = cljs.core._EQ_;
var expr__25573 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25572.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25573))){
var path_parts = ((function (pred__25572,expr__25573){
return (function (p1__25571_SHARP_){
return clojure.string.split.call(null,p1__25571_SHARP_,/[\/\\]/);
});})(pred__25572,expr__25573))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25572,expr__25573){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25575){if((e25575 instanceof Error)){
var e = e25575;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25575;

}
}})());
});
;})(path_parts,sep,root,pred__25572,expr__25573))
} else {
if(cljs.core.truth_(pred__25572.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25573))){
return ((function (pred__25572,expr__25573){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25572,expr__25573){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25572,expr__25573))
);

return deferred.addErrback(((function (deferred,pred__25572,expr__25573){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25572,expr__25573))
);
});
;})(pred__25572,expr__25573))
} else {
return ((function (pred__25572,expr__25573){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25572,expr__25573))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25576,callback){
var map__25579 = p__25576;
var map__25579__$1 = ((((!((map__25579 == null)))?((((map__25579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25579):map__25579);
var file_msg = map__25579__$1;
var request_url = cljs.core.get.call(null,map__25579__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25579,map__25579__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25579,map__25579__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__21003__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto__){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto__){
return (function (state_25603){
var state_val_25604 = (state_25603[(1)]);
if((state_val_25604 === (7))){
var inst_25599 = (state_25603[(2)]);
var state_25603__$1 = state_25603;
var statearr_25605_25625 = state_25603__$1;
(statearr_25605_25625[(2)] = inst_25599);

(statearr_25605_25625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25604 === (1))){
var state_25603__$1 = state_25603;
var statearr_25606_25626 = state_25603__$1;
(statearr_25606_25626[(2)] = null);

(statearr_25606_25626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25604 === (4))){
var inst_25583 = (state_25603[(7)]);
var inst_25583__$1 = (state_25603[(2)]);
var state_25603__$1 = (function (){var statearr_25607 = state_25603;
(statearr_25607[(7)] = inst_25583__$1);

return statearr_25607;
})();
if(cljs.core.truth_(inst_25583__$1)){
var statearr_25608_25627 = state_25603__$1;
(statearr_25608_25627[(1)] = (5));

} else {
var statearr_25609_25628 = state_25603__$1;
(statearr_25609_25628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25604 === (6))){
var state_25603__$1 = state_25603;
var statearr_25610_25629 = state_25603__$1;
(statearr_25610_25629[(2)] = null);

(statearr_25610_25629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25604 === (3))){
var inst_25601 = (state_25603[(2)]);
var state_25603__$1 = state_25603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25603__$1,inst_25601);
} else {
if((state_val_25604 === (2))){
var state_25603__$1 = state_25603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25603__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25604 === (11))){
var inst_25595 = (state_25603[(2)]);
var state_25603__$1 = (function (){var statearr_25611 = state_25603;
(statearr_25611[(8)] = inst_25595);

return statearr_25611;
})();
var statearr_25612_25630 = state_25603__$1;
(statearr_25612_25630[(2)] = null);

(statearr_25612_25630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25604 === (9))){
var inst_25587 = (state_25603[(9)]);
var inst_25589 = (state_25603[(10)]);
var inst_25591 = inst_25589.call(null,inst_25587);
var state_25603__$1 = state_25603;
var statearr_25613_25631 = state_25603__$1;
(statearr_25613_25631[(2)] = inst_25591);

(statearr_25613_25631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25604 === (5))){
var inst_25583 = (state_25603[(7)]);
var inst_25585 = figwheel.client.file_reloading.blocking_load.call(null,inst_25583);
var state_25603__$1 = state_25603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25603__$1,(8),inst_25585);
} else {
if((state_val_25604 === (10))){
var inst_25587 = (state_25603[(9)]);
var inst_25593 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25587);
var state_25603__$1 = state_25603;
var statearr_25614_25632 = state_25603__$1;
(statearr_25614_25632[(2)] = inst_25593);

(statearr_25614_25632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25604 === (8))){
var inst_25583 = (state_25603[(7)]);
var inst_25589 = (state_25603[(10)]);
var inst_25587 = (state_25603[(2)]);
var inst_25588 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25589__$1 = cljs.core.get.call(null,inst_25588,inst_25583);
var state_25603__$1 = (function (){var statearr_25615 = state_25603;
(statearr_25615[(9)] = inst_25587);

(statearr_25615[(10)] = inst_25589__$1);

return statearr_25615;
})();
if(cljs.core.truth_(inst_25589__$1)){
var statearr_25616_25633 = state_25603__$1;
(statearr_25616_25633[(1)] = (9));

} else {
var statearr_25617_25634 = state_25603__$1;
(statearr_25617_25634[(1)] = (10));

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
});})(c__21003__auto__))
;
return ((function (switch__20891__auto__,c__21003__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20892__auto__ = null;
var figwheel$client$file_reloading$state_machine__20892__auto____0 = (function (){
var statearr_25621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25621[(0)] = figwheel$client$file_reloading$state_machine__20892__auto__);

(statearr_25621[(1)] = (1));

return statearr_25621;
});
var figwheel$client$file_reloading$state_machine__20892__auto____1 = (function (state_25603){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_25603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e25622){if((e25622 instanceof Object)){
var ex__20895__auto__ = e25622;
var statearr_25623_25635 = state_25603;
(statearr_25623_25635[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25636 = state_25603;
state_25603 = G__25636;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20892__auto__ = function(state_25603){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20892__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20892__auto____1.call(this,state_25603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20892__auto____0;
figwheel$client$file_reloading$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20892__auto____1;
return figwheel$client$file_reloading$state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto__))
})();
var state__21005__auto__ = (function (){var statearr_25624 = f__21004__auto__.call(null);
(statearr_25624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto__);

return statearr_25624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto__))
);

return c__21003__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25637,callback){
var map__25640 = p__25637;
var map__25640__$1 = ((((!((map__25640 == null)))?((((map__25640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25640):map__25640);
var file_msg = map__25640__$1;
var namespace = cljs.core.get.call(null,map__25640__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25640,map__25640__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25640,map__25640__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25642){
var map__25645 = p__25642;
var map__25645__$1 = ((((!((map__25645 == null)))?((((map__25645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25645):map__25645);
var file_msg = map__25645__$1;
var namespace = cljs.core.get.call(null,map__25645__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25647,callback){
var map__25650 = p__25647;
var map__25650__$1 = ((((!((map__25650 == null)))?((((map__25650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25650):map__25650);
var file_msg = map__25650__$1;
var request_url = cljs.core.get.call(null,map__25650__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25650__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21003__auto___25738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___25738,out){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___25738,out){
return (function (state_25720){
var state_val_25721 = (state_25720[(1)]);
if((state_val_25721 === (1))){
var inst_25698 = cljs.core.nth.call(null,files,(0),null);
var inst_25699 = cljs.core.nthnext.call(null,files,(1));
var inst_25700 = files;
var state_25720__$1 = (function (){var statearr_25722 = state_25720;
(statearr_25722[(7)] = inst_25698);

(statearr_25722[(8)] = inst_25699);

(statearr_25722[(9)] = inst_25700);

return statearr_25722;
})();
var statearr_25723_25739 = state_25720__$1;
(statearr_25723_25739[(2)] = null);

(statearr_25723_25739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25721 === (2))){
var inst_25703 = (state_25720[(10)]);
var inst_25700 = (state_25720[(9)]);
var inst_25703__$1 = cljs.core.nth.call(null,inst_25700,(0),null);
var inst_25704 = cljs.core.nthnext.call(null,inst_25700,(1));
var inst_25705 = (inst_25703__$1 == null);
var inst_25706 = cljs.core.not.call(null,inst_25705);
var state_25720__$1 = (function (){var statearr_25724 = state_25720;
(statearr_25724[(11)] = inst_25704);

(statearr_25724[(10)] = inst_25703__$1);

return statearr_25724;
})();
if(inst_25706){
var statearr_25725_25740 = state_25720__$1;
(statearr_25725_25740[(1)] = (4));

} else {
var statearr_25726_25741 = state_25720__$1;
(statearr_25726_25741[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25721 === (3))){
var inst_25718 = (state_25720[(2)]);
var state_25720__$1 = state_25720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25720__$1,inst_25718);
} else {
if((state_val_25721 === (4))){
var inst_25703 = (state_25720[(10)]);
var inst_25708 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25703);
var state_25720__$1 = state_25720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25720__$1,(7),inst_25708);
} else {
if((state_val_25721 === (5))){
var inst_25714 = cljs.core.async.close_BANG_.call(null,out);
var state_25720__$1 = state_25720;
var statearr_25727_25742 = state_25720__$1;
(statearr_25727_25742[(2)] = inst_25714);

(statearr_25727_25742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25721 === (6))){
var inst_25716 = (state_25720[(2)]);
var state_25720__$1 = state_25720;
var statearr_25728_25743 = state_25720__$1;
(statearr_25728_25743[(2)] = inst_25716);

(statearr_25728_25743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25721 === (7))){
var inst_25704 = (state_25720[(11)]);
var inst_25710 = (state_25720[(2)]);
var inst_25711 = cljs.core.async.put_BANG_.call(null,out,inst_25710);
var inst_25700 = inst_25704;
var state_25720__$1 = (function (){var statearr_25729 = state_25720;
(statearr_25729[(12)] = inst_25711);

(statearr_25729[(9)] = inst_25700);

return statearr_25729;
})();
var statearr_25730_25744 = state_25720__$1;
(statearr_25730_25744[(2)] = null);

(statearr_25730_25744[(1)] = (2));


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
});})(c__21003__auto___25738,out))
;
return ((function (switch__20891__auto__,c__21003__auto___25738,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20892__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20892__auto____0 = (function (){
var statearr_25734 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25734[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20892__auto__);

(statearr_25734[(1)] = (1));

return statearr_25734;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20892__auto____1 = (function (state_25720){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_25720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e25735){if((e25735 instanceof Object)){
var ex__20895__auto__ = e25735;
var statearr_25736_25745 = state_25720;
(statearr_25736_25745[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25746 = state_25720;
state_25720 = G__25746;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20892__auto__ = function(state_25720){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20892__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20892__auto____1.call(this,state_25720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20892__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20892__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___25738,out))
})();
var state__21005__auto__ = (function (){var statearr_25737 = f__21004__auto__.call(null);
(statearr_25737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___25738);

return statearr_25737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___25738,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25747,opts){
var map__25751 = p__25747;
var map__25751__$1 = ((((!((map__25751 == null)))?((((map__25751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25751):map__25751);
var eval_body__$1 = cljs.core.get.call(null,map__25751__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25751__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e25753){var e = e25753;
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
return (function (p1__25754_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25754_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__25759){
var vec__25760 = p__25759;
var k = cljs.core.nth.call(null,vec__25760,(0),null);
var v = cljs.core.nth.call(null,vec__25760,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25761){
var vec__25762 = p__25761;
var k = cljs.core.nth.call(null,vec__25762,(0),null);
var v = cljs.core.nth.call(null,vec__25762,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25766,p__25767){
var map__26014 = p__25766;
var map__26014__$1 = ((((!((map__26014 == null)))?((((map__26014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26014):map__26014);
var opts = map__26014__$1;
var before_jsload = cljs.core.get.call(null,map__26014__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26014__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26014__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26015 = p__25767;
var map__26015__$1 = ((((!((map__26015 == null)))?((((map__26015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26015):map__26015);
var msg = map__26015__$1;
var files = cljs.core.get.call(null,map__26015__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26015__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26015__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21003__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26168){
var state_val_26169 = (state_26168[(1)]);
if((state_val_26169 === (7))){
var inst_26031 = (state_26168[(7)]);
var inst_26030 = (state_26168[(8)]);
var inst_26032 = (state_26168[(9)]);
var inst_26029 = (state_26168[(10)]);
var inst_26037 = cljs.core._nth.call(null,inst_26030,inst_26032);
var inst_26038 = figwheel.client.file_reloading.eval_body.call(null,inst_26037,opts);
var inst_26039 = (inst_26032 + (1));
var tmp26170 = inst_26031;
var tmp26171 = inst_26030;
var tmp26172 = inst_26029;
var inst_26029__$1 = tmp26172;
var inst_26030__$1 = tmp26171;
var inst_26031__$1 = tmp26170;
var inst_26032__$1 = inst_26039;
var state_26168__$1 = (function (){var statearr_26173 = state_26168;
(statearr_26173[(7)] = inst_26031__$1);

(statearr_26173[(8)] = inst_26030__$1);

(statearr_26173[(11)] = inst_26038);

(statearr_26173[(9)] = inst_26032__$1);

(statearr_26173[(10)] = inst_26029__$1);

return statearr_26173;
})();
var statearr_26174_26260 = state_26168__$1;
(statearr_26174_26260[(2)] = null);

(statearr_26174_26260[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (20))){
var inst_26072 = (state_26168[(12)]);
var inst_26080 = figwheel.client.file_reloading.sort_files.call(null,inst_26072);
var state_26168__$1 = state_26168;
var statearr_26175_26261 = state_26168__$1;
(statearr_26175_26261[(2)] = inst_26080);

(statearr_26175_26261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (27))){
var state_26168__$1 = state_26168;
var statearr_26176_26262 = state_26168__$1;
(statearr_26176_26262[(2)] = null);

(statearr_26176_26262[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (1))){
var inst_26021 = (state_26168[(13)]);
var inst_26018 = before_jsload.call(null,files);
var inst_26019 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26020 = (function (){return ((function (inst_26021,inst_26018,inst_26019,state_val_26169,c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25763_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25763_SHARP_);
});
;})(inst_26021,inst_26018,inst_26019,state_val_26169,c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26021__$1 = cljs.core.filter.call(null,inst_26020,files);
var inst_26022 = cljs.core.not_empty.call(null,inst_26021__$1);
var state_26168__$1 = (function (){var statearr_26177 = state_26168;
(statearr_26177[(14)] = inst_26018);

(statearr_26177[(15)] = inst_26019);

(statearr_26177[(13)] = inst_26021__$1);

return statearr_26177;
})();
if(cljs.core.truth_(inst_26022)){
var statearr_26178_26263 = state_26168__$1;
(statearr_26178_26263[(1)] = (2));

} else {
var statearr_26179_26264 = state_26168__$1;
(statearr_26179_26264[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (24))){
var state_26168__$1 = state_26168;
var statearr_26180_26265 = state_26168__$1;
(statearr_26180_26265[(2)] = null);

(statearr_26180_26265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (39))){
var inst_26122 = (state_26168[(16)]);
var state_26168__$1 = state_26168;
var statearr_26181_26266 = state_26168__$1;
(statearr_26181_26266[(2)] = inst_26122);

(statearr_26181_26266[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (46))){
var inst_26163 = (state_26168[(2)]);
var state_26168__$1 = state_26168;
var statearr_26182_26267 = state_26168__$1;
(statearr_26182_26267[(2)] = inst_26163);

(statearr_26182_26267[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (4))){
var inst_26066 = (state_26168[(2)]);
var inst_26067 = cljs.core.List.EMPTY;
var inst_26068 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26067);
var inst_26069 = (function (){return ((function (inst_26066,inst_26067,inst_26068,state_val_26169,c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25764_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25764_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25764_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_26066,inst_26067,inst_26068,state_val_26169,c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26070 = cljs.core.filter.call(null,inst_26069,files);
var inst_26071 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26072 = cljs.core.concat.call(null,inst_26070,inst_26071);
var state_26168__$1 = (function (){var statearr_26183 = state_26168;
(statearr_26183[(17)] = inst_26066);

(statearr_26183[(18)] = inst_26068);

(statearr_26183[(12)] = inst_26072);

return statearr_26183;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26184_26268 = state_26168__$1;
(statearr_26184_26268[(1)] = (16));

} else {
var statearr_26185_26269 = state_26168__$1;
(statearr_26185_26269[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (15))){
var inst_26056 = (state_26168[(2)]);
var state_26168__$1 = state_26168;
var statearr_26186_26270 = state_26168__$1;
(statearr_26186_26270[(2)] = inst_26056);

(statearr_26186_26270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (21))){
var inst_26082 = (state_26168[(19)]);
var inst_26082__$1 = (state_26168[(2)]);
var inst_26083 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26082__$1);
var state_26168__$1 = (function (){var statearr_26187 = state_26168;
(statearr_26187[(19)] = inst_26082__$1);

return statearr_26187;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26168__$1,(22),inst_26083);
} else {
if((state_val_26169 === (31))){
var inst_26166 = (state_26168[(2)]);
var state_26168__$1 = state_26168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26168__$1,inst_26166);
} else {
if((state_val_26169 === (32))){
var inst_26122 = (state_26168[(16)]);
var inst_26127 = inst_26122.cljs$lang$protocol_mask$partition0$;
var inst_26128 = (inst_26127 & (64));
var inst_26129 = inst_26122.cljs$core$ISeq$;
var inst_26130 = (inst_26128) || (inst_26129);
var state_26168__$1 = state_26168;
if(cljs.core.truth_(inst_26130)){
var statearr_26188_26271 = state_26168__$1;
(statearr_26188_26271[(1)] = (35));

} else {
var statearr_26189_26272 = state_26168__$1;
(statearr_26189_26272[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (40))){
var inst_26143 = (state_26168[(20)]);
var inst_26142 = (state_26168[(2)]);
var inst_26143__$1 = cljs.core.get.call(null,inst_26142,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26144 = cljs.core.get.call(null,inst_26142,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26145 = cljs.core.not_empty.call(null,inst_26143__$1);
var state_26168__$1 = (function (){var statearr_26190 = state_26168;
(statearr_26190[(20)] = inst_26143__$1);

(statearr_26190[(21)] = inst_26144);

return statearr_26190;
})();
if(cljs.core.truth_(inst_26145)){
var statearr_26191_26273 = state_26168__$1;
(statearr_26191_26273[(1)] = (41));

} else {
var statearr_26192_26274 = state_26168__$1;
(statearr_26192_26274[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (33))){
var state_26168__$1 = state_26168;
var statearr_26193_26275 = state_26168__$1;
(statearr_26193_26275[(2)] = false);

(statearr_26193_26275[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (13))){
var inst_26042 = (state_26168[(22)]);
var inst_26046 = cljs.core.chunk_first.call(null,inst_26042);
var inst_26047 = cljs.core.chunk_rest.call(null,inst_26042);
var inst_26048 = cljs.core.count.call(null,inst_26046);
var inst_26029 = inst_26047;
var inst_26030 = inst_26046;
var inst_26031 = inst_26048;
var inst_26032 = (0);
var state_26168__$1 = (function (){var statearr_26194 = state_26168;
(statearr_26194[(7)] = inst_26031);

(statearr_26194[(8)] = inst_26030);

(statearr_26194[(9)] = inst_26032);

(statearr_26194[(10)] = inst_26029);

return statearr_26194;
})();
var statearr_26195_26276 = state_26168__$1;
(statearr_26195_26276[(2)] = null);

(statearr_26195_26276[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (22))){
var inst_26090 = (state_26168[(23)]);
var inst_26085 = (state_26168[(24)]);
var inst_26082 = (state_26168[(19)]);
var inst_26086 = (state_26168[(25)]);
var inst_26085__$1 = (state_26168[(2)]);
var inst_26086__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26085__$1);
var inst_26087 = (function (){var all_files = inst_26082;
var res_SINGLEQUOTE_ = inst_26085__$1;
var res = inst_26086__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26090,inst_26085,inst_26082,inst_26086,inst_26085__$1,inst_26086__$1,state_val_26169,c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25765_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25765_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26090,inst_26085,inst_26082,inst_26086,inst_26085__$1,inst_26086__$1,state_val_26169,c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26088 = cljs.core.filter.call(null,inst_26087,inst_26085__$1);
var inst_26089 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26090__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26089);
var inst_26091 = cljs.core.not_empty.call(null,inst_26090__$1);
var state_26168__$1 = (function (){var statearr_26196 = state_26168;
(statearr_26196[(23)] = inst_26090__$1);

(statearr_26196[(24)] = inst_26085__$1);

(statearr_26196[(26)] = inst_26088);

(statearr_26196[(25)] = inst_26086__$1);

return statearr_26196;
})();
if(cljs.core.truth_(inst_26091)){
var statearr_26197_26277 = state_26168__$1;
(statearr_26197_26277[(1)] = (23));

} else {
var statearr_26198_26278 = state_26168__$1;
(statearr_26198_26278[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (36))){
var state_26168__$1 = state_26168;
var statearr_26199_26279 = state_26168__$1;
(statearr_26199_26279[(2)] = false);

(statearr_26199_26279[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (41))){
var inst_26143 = (state_26168[(20)]);
var inst_26147 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26148 = cljs.core.map.call(null,inst_26147,inst_26143);
var inst_26149 = cljs.core.pr_str.call(null,inst_26148);
var inst_26150 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26149)].join('');
var inst_26151 = figwheel.client.utils.log.call(null,inst_26150);
var state_26168__$1 = state_26168;
var statearr_26200_26280 = state_26168__$1;
(statearr_26200_26280[(2)] = inst_26151);

(statearr_26200_26280[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (43))){
var inst_26144 = (state_26168[(21)]);
var inst_26154 = (state_26168[(2)]);
var inst_26155 = cljs.core.not_empty.call(null,inst_26144);
var state_26168__$1 = (function (){var statearr_26201 = state_26168;
(statearr_26201[(27)] = inst_26154);

return statearr_26201;
})();
if(cljs.core.truth_(inst_26155)){
var statearr_26202_26281 = state_26168__$1;
(statearr_26202_26281[(1)] = (44));

} else {
var statearr_26203_26282 = state_26168__$1;
(statearr_26203_26282[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (29))){
var inst_26122 = (state_26168[(16)]);
var inst_26090 = (state_26168[(23)]);
var inst_26085 = (state_26168[(24)]);
var inst_26088 = (state_26168[(26)]);
var inst_26082 = (state_26168[(19)]);
var inst_26086 = (state_26168[(25)]);
var inst_26118 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26121 = (function (){var all_files = inst_26082;
var res_SINGLEQUOTE_ = inst_26085;
var res = inst_26086;
var files_not_loaded = inst_26088;
var dependencies_that_loaded = inst_26090;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26122,inst_26090,inst_26085,inst_26088,inst_26082,inst_26086,inst_26118,state_val_26169,c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26120){
var map__26204 = p__26120;
var map__26204__$1 = ((((!((map__26204 == null)))?((((map__26204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26204):map__26204);
var namespace = cljs.core.get.call(null,map__26204__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26122,inst_26090,inst_26085,inst_26088,inst_26082,inst_26086,inst_26118,state_val_26169,c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26122__$1 = cljs.core.group_by.call(null,inst_26121,inst_26088);
var inst_26124 = (inst_26122__$1 == null);
var inst_26125 = cljs.core.not.call(null,inst_26124);
var state_26168__$1 = (function (){var statearr_26206 = state_26168;
(statearr_26206[(16)] = inst_26122__$1);

(statearr_26206[(28)] = inst_26118);

return statearr_26206;
})();
if(inst_26125){
var statearr_26207_26283 = state_26168__$1;
(statearr_26207_26283[(1)] = (32));

} else {
var statearr_26208_26284 = state_26168__$1;
(statearr_26208_26284[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (44))){
var inst_26144 = (state_26168[(21)]);
var inst_26157 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26144);
var inst_26158 = cljs.core.pr_str.call(null,inst_26157);
var inst_26159 = [cljs.core.str("not required: "),cljs.core.str(inst_26158)].join('');
var inst_26160 = figwheel.client.utils.log.call(null,inst_26159);
var state_26168__$1 = state_26168;
var statearr_26209_26285 = state_26168__$1;
(statearr_26209_26285[(2)] = inst_26160);

(statearr_26209_26285[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (6))){
var inst_26063 = (state_26168[(2)]);
var state_26168__$1 = state_26168;
var statearr_26210_26286 = state_26168__$1;
(statearr_26210_26286[(2)] = inst_26063);

(statearr_26210_26286[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (28))){
var inst_26088 = (state_26168[(26)]);
var inst_26115 = (state_26168[(2)]);
var inst_26116 = cljs.core.not_empty.call(null,inst_26088);
var state_26168__$1 = (function (){var statearr_26211 = state_26168;
(statearr_26211[(29)] = inst_26115);

return statearr_26211;
})();
if(cljs.core.truth_(inst_26116)){
var statearr_26212_26287 = state_26168__$1;
(statearr_26212_26287[(1)] = (29));

} else {
var statearr_26213_26288 = state_26168__$1;
(statearr_26213_26288[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (25))){
var inst_26086 = (state_26168[(25)]);
var inst_26102 = (state_26168[(2)]);
var inst_26103 = cljs.core.not_empty.call(null,inst_26086);
var state_26168__$1 = (function (){var statearr_26214 = state_26168;
(statearr_26214[(30)] = inst_26102);

return statearr_26214;
})();
if(cljs.core.truth_(inst_26103)){
var statearr_26215_26289 = state_26168__$1;
(statearr_26215_26289[(1)] = (26));

} else {
var statearr_26216_26290 = state_26168__$1;
(statearr_26216_26290[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (34))){
var inst_26137 = (state_26168[(2)]);
var state_26168__$1 = state_26168;
if(cljs.core.truth_(inst_26137)){
var statearr_26217_26291 = state_26168__$1;
(statearr_26217_26291[(1)] = (38));

} else {
var statearr_26218_26292 = state_26168__$1;
(statearr_26218_26292[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (17))){
var state_26168__$1 = state_26168;
var statearr_26219_26293 = state_26168__$1;
(statearr_26219_26293[(2)] = recompile_dependents);

(statearr_26219_26293[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (3))){
var state_26168__$1 = state_26168;
var statearr_26220_26294 = state_26168__$1;
(statearr_26220_26294[(2)] = null);

(statearr_26220_26294[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (12))){
var inst_26059 = (state_26168[(2)]);
var state_26168__$1 = state_26168;
var statearr_26221_26295 = state_26168__$1;
(statearr_26221_26295[(2)] = inst_26059);

(statearr_26221_26295[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (2))){
var inst_26021 = (state_26168[(13)]);
var inst_26028 = cljs.core.seq.call(null,inst_26021);
var inst_26029 = inst_26028;
var inst_26030 = null;
var inst_26031 = (0);
var inst_26032 = (0);
var state_26168__$1 = (function (){var statearr_26222 = state_26168;
(statearr_26222[(7)] = inst_26031);

(statearr_26222[(8)] = inst_26030);

(statearr_26222[(9)] = inst_26032);

(statearr_26222[(10)] = inst_26029);

return statearr_26222;
})();
var statearr_26223_26296 = state_26168__$1;
(statearr_26223_26296[(2)] = null);

(statearr_26223_26296[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (23))){
var inst_26090 = (state_26168[(23)]);
var inst_26085 = (state_26168[(24)]);
var inst_26088 = (state_26168[(26)]);
var inst_26082 = (state_26168[(19)]);
var inst_26086 = (state_26168[(25)]);
var inst_26093 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26095 = (function (){var all_files = inst_26082;
var res_SINGLEQUOTE_ = inst_26085;
var res = inst_26086;
var files_not_loaded = inst_26088;
var dependencies_that_loaded = inst_26090;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26090,inst_26085,inst_26088,inst_26082,inst_26086,inst_26093,state_val_26169,c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26094){
var map__26224 = p__26094;
var map__26224__$1 = ((((!((map__26224 == null)))?((((map__26224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26224):map__26224);
var request_url = cljs.core.get.call(null,map__26224__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26090,inst_26085,inst_26088,inst_26082,inst_26086,inst_26093,state_val_26169,c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26096 = cljs.core.reverse.call(null,inst_26090);
var inst_26097 = cljs.core.map.call(null,inst_26095,inst_26096);
var inst_26098 = cljs.core.pr_str.call(null,inst_26097);
var inst_26099 = figwheel.client.utils.log.call(null,inst_26098);
var state_26168__$1 = (function (){var statearr_26226 = state_26168;
(statearr_26226[(31)] = inst_26093);

return statearr_26226;
})();
var statearr_26227_26297 = state_26168__$1;
(statearr_26227_26297[(2)] = inst_26099);

(statearr_26227_26297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (35))){
var state_26168__$1 = state_26168;
var statearr_26228_26298 = state_26168__$1;
(statearr_26228_26298[(2)] = true);

(statearr_26228_26298[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (19))){
var inst_26072 = (state_26168[(12)]);
var inst_26078 = figwheel.client.file_reloading.expand_files.call(null,inst_26072);
var state_26168__$1 = state_26168;
var statearr_26229_26299 = state_26168__$1;
(statearr_26229_26299[(2)] = inst_26078);

(statearr_26229_26299[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (11))){
var state_26168__$1 = state_26168;
var statearr_26230_26300 = state_26168__$1;
(statearr_26230_26300[(2)] = null);

(statearr_26230_26300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (9))){
var inst_26061 = (state_26168[(2)]);
var state_26168__$1 = state_26168;
var statearr_26231_26301 = state_26168__$1;
(statearr_26231_26301[(2)] = inst_26061);

(statearr_26231_26301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (5))){
var inst_26031 = (state_26168[(7)]);
var inst_26032 = (state_26168[(9)]);
var inst_26034 = (inst_26032 < inst_26031);
var inst_26035 = inst_26034;
var state_26168__$1 = state_26168;
if(cljs.core.truth_(inst_26035)){
var statearr_26232_26302 = state_26168__$1;
(statearr_26232_26302[(1)] = (7));

} else {
var statearr_26233_26303 = state_26168__$1;
(statearr_26233_26303[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (14))){
var inst_26042 = (state_26168[(22)]);
var inst_26051 = cljs.core.first.call(null,inst_26042);
var inst_26052 = figwheel.client.file_reloading.eval_body.call(null,inst_26051,opts);
var inst_26053 = cljs.core.next.call(null,inst_26042);
var inst_26029 = inst_26053;
var inst_26030 = null;
var inst_26031 = (0);
var inst_26032 = (0);
var state_26168__$1 = (function (){var statearr_26234 = state_26168;
(statearr_26234[(7)] = inst_26031);

(statearr_26234[(8)] = inst_26030);

(statearr_26234[(9)] = inst_26032);

(statearr_26234[(32)] = inst_26052);

(statearr_26234[(10)] = inst_26029);

return statearr_26234;
})();
var statearr_26235_26304 = state_26168__$1;
(statearr_26235_26304[(2)] = null);

(statearr_26235_26304[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (45))){
var state_26168__$1 = state_26168;
var statearr_26236_26305 = state_26168__$1;
(statearr_26236_26305[(2)] = null);

(statearr_26236_26305[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (26))){
var inst_26090 = (state_26168[(23)]);
var inst_26085 = (state_26168[(24)]);
var inst_26088 = (state_26168[(26)]);
var inst_26082 = (state_26168[(19)]);
var inst_26086 = (state_26168[(25)]);
var inst_26105 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26107 = (function (){var all_files = inst_26082;
var res_SINGLEQUOTE_ = inst_26085;
var res = inst_26086;
var files_not_loaded = inst_26088;
var dependencies_that_loaded = inst_26090;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26090,inst_26085,inst_26088,inst_26082,inst_26086,inst_26105,state_val_26169,c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26106){
var map__26237 = p__26106;
var map__26237__$1 = ((((!((map__26237 == null)))?((((map__26237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26237):map__26237);
var namespace = cljs.core.get.call(null,map__26237__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26237__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26090,inst_26085,inst_26088,inst_26082,inst_26086,inst_26105,state_val_26169,c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26108 = cljs.core.map.call(null,inst_26107,inst_26086);
var inst_26109 = cljs.core.pr_str.call(null,inst_26108);
var inst_26110 = figwheel.client.utils.log.call(null,inst_26109);
var inst_26111 = (function (){var all_files = inst_26082;
var res_SINGLEQUOTE_ = inst_26085;
var res = inst_26086;
var files_not_loaded = inst_26088;
var dependencies_that_loaded = inst_26090;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26090,inst_26085,inst_26088,inst_26082,inst_26086,inst_26105,inst_26107,inst_26108,inst_26109,inst_26110,state_val_26169,c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26090,inst_26085,inst_26088,inst_26082,inst_26086,inst_26105,inst_26107,inst_26108,inst_26109,inst_26110,state_val_26169,c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26112 = setTimeout(inst_26111,(10));
var state_26168__$1 = (function (){var statearr_26239 = state_26168;
(statearr_26239[(33)] = inst_26110);

(statearr_26239[(34)] = inst_26105);

return statearr_26239;
})();
var statearr_26240_26306 = state_26168__$1;
(statearr_26240_26306[(2)] = inst_26112);

(statearr_26240_26306[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (16))){
var state_26168__$1 = state_26168;
var statearr_26241_26307 = state_26168__$1;
(statearr_26241_26307[(2)] = reload_dependents);

(statearr_26241_26307[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (38))){
var inst_26122 = (state_26168[(16)]);
var inst_26139 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26122);
var state_26168__$1 = state_26168;
var statearr_26242_26308 = state_26168__$1;
(statearr_26242_26308[(2)] = inst_26139);

(statearr_26242_26308[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (30))){
var state_26168__$1 = state_26168;
var statearr_26243_26309 = state_26168__$1;
(statearr_26243_26309[(2)] = null);

(statearr_26243_26309[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (10))){
var inst_26042 = (state_26168[(22)]);
var inst_26044 = cljs.core.chunked_seq_QMARK_.call(null,inst_26042);
var state_26168__$1 = state_26168;
if(inst_26044){
var statearr_26244_26310 = state_26168__$1;
(statearr_26244_26310[(1)] = (13));

} else {
var statearr_26245_26311 = state_26168__$1;
(statearr_26245_26311[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (18))){
var inst_26076 = (state_26168[(2)]);
var state_26168__$1 = state_26168;
if(cljs.core.truth_(inst_26076)){
var statearr_26246_26312 = state_26168__$1;
(statearr_26246_26312[(1)] = (19));

} else {
var statearr_26247_26313 = state_26168__$1;
(statearr_26247_26313[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (42))){
var state_26168__$1 = state_26168;
var statearr_26248_26314 = state_26168__$1;
(statearr_26248_26314[(2)] = null);

(statearr_26248_26314[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (37))){
var inst_26134 = (state_26168[(2)]);
var state_26168__$1 = state_26168;
var statearr_26249_26315 = state_26168__$1;
(statearr_26249_26315[(2)] = inst_26134);

(statearr_26249_26315[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26169 === (8))){
var inst_26042 = (state_26168[(22)]);
var inst_26029 = (state_26168[(10)]);
var inst_26042__$1 = cljs.core.seq.call(null,inst_26029);
var state_26168__$1 = (function (){var statearr_26250 = state_26168;
(statearr_26250[(22)] = inst_26042__$1);

return statearr_26250;
})();
if(inst_26042__$1){
var statearr_26251_26316 = state_26168__$1;
(statearr_26251_26316[(1)] = (10));

} else {
var statearr_26252_26317 = state_26168__$1;
(statearr_26252_26317[(1)] = (11));

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
});})(c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20891__auto__,c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20892__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20892__auto____0 = (function (){
var statearr_26256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26256[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20892__auto__);

(statearr_26256[(1)] = (1));

return statearr_26256;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20892__auto____1 = (function (state_26168){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_26168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e26257){if((e26257 instanceof Object)){
var ex__20895__auto__ = e26257;
var statearr_26258_26318 = state_26168;
(statearr_26258_26318[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26319 = state_26168;
state_26168 = G__26319;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20892__auto__ = function(state_26168){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20892__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20892__auto____1.call(this,state_26168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20892__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20892__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21005__auto__ = (function (){var statearr_26259 = f__21004__auto__.call(null);
(statearr_26259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto__);

return statearr_26259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto__,map__26014,map__26014__$1,opts,before_jsload,on_jsload,reload_dependents,map__26015,map__26015__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21003__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26322,link){
var map__26325 = p__26322;
var map__26325__$1 = ((((!((map__26325 == null)))?((((map__26325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26325):map__26325);
var file = cljs.core.get.call(null,map__26325__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26325,map__26325__$1,file){
return (function (p1__26320_SHARP_,p2__26321_SHARP_){
if(cljs.core._EQ_.call(null,p1__26320_SHARP_,p2__26321_SHARP_)){
return p1__26320_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26325,map__26325__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26331){
var map__26332 = p__26331;
var map__26332__$1 = ((((!((map__26332 == null)))?((((map__26332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26332):map__26332);
var match_length = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26332__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26327_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26327_SHARP_);
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
var args26334 = [];
var len__17884__auto___26337 = arguments.length;
var i__17885__auto___26338 = (0);
while(true){
if((i__17885__auto___26338 < len__17884__auto___26337)){
args26334.push((arguments[i__17885__auto___26338]));

var G__26339 = (i__17885__auto___26338 + (1));
i__17885__auto___26338 = G__26339;
continue;
} else {
}
break;
}

var G__26336 = args26334.length;
switch (G__26336) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26334.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26341_SHARP_,p2__26342_SHARP_){
return cljs.core.assoc.call(null,p1__26341_SHARP_,cljs.core.get.call(null,p2__26342_SHARP_,key),p2__26342_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26343){
var map__26346 = p__26343;
var map__26346__$1 = ((((!((map__26346 == null)))?((((map__26346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26346):map__26346);
var f_data = map__26346__$1;
var file = cljs.core.get.call(null,map__26346__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26348,files_msg){
var map__26355 = p__26348;
var map__26355__$1 = ((((!((map__26355 == null)))?((((map__26355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26355):map__26355);
var opts = map__26355__$1;
var on_cssload = cljs.core.get.call(null,map__26355__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26357_26361 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26358_26362 = null;
var count__26359_26363 = (0);
var i__26360_26364 = (0);
while(true){
if((i__26360_26364 < count__26359_26363)){
var f_26365 = cljs.core._nth.call(null,chunk__26358_26362,i__26360_26364);
figwheel.client.file_reloading.reload_css_file.call(null,f_26365);

var G__26366 = seq__26357_26361;
var G__26367 = chunk__26358_26362;
var G__26368 = count__26359_26363;
var G__26369 = (i__26360_26364 + (1));
seq__26357_26361 = G__26366;
chunk__26358_26362 = G__26367;
count__26359_26363 = G__26368;
i__26360_26364 = G__26369;
continue;
} else {
var temp__4425__auto___26370 = cljs.core.seq.call(null,seq__26357_26361);
if(temp__4425__auto___26370){
var seq__26357_26371__$1 = temp__4425__auto___26370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26357_26371__$1)){
var c__17629__auto___26372 = cljs.core.chunk_first.call(null,seq__26357_26371__$1);
var G__26373 = cljs.core.chunk_rest.call(null,seq__26357_26371__$1);
var G__26374 = c__17629__auto___26372;
var G__26375 = cljs.core.count.call(null,c__17629__auto___26372);
var G__26376 = (0);
seq__26357_26361 = G__26373;
chunk__26358_26362 = G__26374;
count__26359_26363 = G__26375;
i__26360_26364 = G__26376;
continue;
} else {
var f_26377 = cljs.core.first.call(null,seq__26357_26371__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26377);

var G__26378 = cljs.core.next.call(null,seq__26357_26371__$1);
var G__26379 = null;
var G__26380 = (0);
var G__26381 = (0);
seq__26357_26361 = G__26378;
chunk__26358_26362 = G__26379;
count__26359_26363 = G__26380;
i__26360_26364 = G__26381;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26355,map__26355__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26355,map__26355__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1454020205214