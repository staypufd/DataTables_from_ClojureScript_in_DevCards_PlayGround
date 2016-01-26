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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26515_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26515_SHARP_));
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
var seq__26520 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26521 = null;
var count__26522 = (0);
var i__26523 = (0);
while(true){
if((i__26523 < count__26522)){
var n = cljs.core._nth.call(null,chunk__26521,i__26523);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26524 = seq__26520;
var G__26525 = chunk__26521;
var G__26526 = count__26522;
var G__26527 = (i__26523 + (1));
seq__26520 = G__26524;
chunk__26521 = G__26525;
count__26522 = G__26526;
i__26523 = G__26527;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26520);
if(temp__4425__auto__){
var seq__26520__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26520__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__26520__$1);
var G__26528 = cljs.core.chunk_rest.call(null,seq__26520__$1);
var G__26529 = c__17629__auto__;
var G__26530 = cljs.core.count.call(null,c__17629__auto__);
var G__26531 = (0);
seq__26520 = G__26528;
chunk__26521 = G__26529;
count__26522 = G__26530;
i__26523 = G__26531;
continue;
} else {
var n = cljs.core.first.call(null,seq__26520__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26532 = cljs.core.next.call(null,seq__26520__$1);
var G__26533 = null;
var G__26534 = (0);
var G__26535 = (0);
seq__26520 = G__26532;
chunk__26521 = G__26533;
count__26522 = G__26534;
i__26523 = G__26535;
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

var seq__26574_26581 = cljs.core.seq.call(null,deps);
var chunk__26575_26582 = null;
var count__26576_26583 = (0);
var i__26577_26584 = (0);
while(true){
if((i__26577_26584 < count__26576_26583)){
var dep_26585 = cljs.core._nth.call(null,chunk__26575_26582,i__26577_26584);
topo_sort_helper_STAR_.call(null,dep_26585,(depth + (1)),state);

var G__26586 = seq__26574_26581;
var G__26587 = chunk__26575_26582;
var G__26588 = count__26576_26583;
var G__26589 = (i__26577_26584 + (1));
seq__26574_26581 = G__26586;
chunk__26575_26582 = G__26587;
count__26576_26583 = G__26588;
i__26577_26584 = G__26589;
continue;
} else {
var temp__4425__auto___26590 = cljs.core.seq.call(null,seq__26574_26581);
if(temp__4425__auto___26590){
var seq__26574_26591__$1 = temp__4425__auto___26590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26574_26591__$1)){
var c__17629__auto___26592 = cljs.core.chunk_first.call(null,seq__26574_26591__$1);
var G__26593 = cljs.core.chunk_rest.call(null,seq__26574_26591__$1);
var G__26594 = c__17629__auto___26592;
var G__26595 = cljs.core.count.call(null,c__17629__auto___26592);
var G__26596 = (0);
seq__26574_26581 = G__26593;
chunk__26575_26582 = G__26594;
count__26576_26583 = G__26595;
i__26577_26584 = G__26596;
continue;
} else {
var dep_26597 = cljs.core.first.call(null,seq__26574_26591__$1);
topo_sort_helper_STAR_.call(null,dep_26597,(depth + (1)),state);

var G__26598 = cljs.core.next.call(null,seq__26574_26591__$1);
var G__26599 = null;
var G__26600 = (0);
var G__26601 = (0);
seq__26574_26581 = G__26598;
chunk__26575_26582 = G__26599;
count__26576_26583 = G__26600;
i__26577_26584 = G__26601;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26578){
var vec__26580 = p__26578;
var x = cljs.core.nth.call(null,vec__26580,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26580,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26580,x,xs,get_deps__$1){
return (function (p1__26536_SHARP_){
return clojure.set.difference.call(null,p1__26536_SHARP_,x);
});})(vec__26580,x,xs,get_deps__$1))
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
var seq__26614 = cljs.core.seq.call(null,provides);
var chunk__26615 = null;
var count__26616 = (0);
var i__26617 = (0);
while(true){
if((i__26617 < count__26616)){
var prov = cljs.core._nth.call(null,chunk__26615,i__26617);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26618_26626 = cljs.core.seq.call(null,requires);
var chunk__26619_26627 = null;
var count__26620_26628 = (0);
var i__26621_26629 = (0);
while(true){
if((i__26621_26629 < count__26620_26628)){
var req_26630 = cljs.core._nth.call(null,chunk__26619_26627,i__26621_26629);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26630,prov);

var G__26631 = seq__26618_26626;
var G__26632 = chunk__26619_26627;
var G__26633 = count__26620_26628;
var G__26634 = (i__26621_26629 + (1));
seq__26618_26626 = G__26631;
chunk__26619_26627 = G__26632;
count__26620_26628 = G__26633;
i__26621_26629 = G__26634;
continue;
} else {
var temp__4425__auto___26635 = cljs.core.seq.call(null,seq__26618_26626);
if(temp__4425__auto___26635){
var seq__26618_26636__$1 = temp__4425__auto___26635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26618_26636__$1)){
var c__17629__auto___26637 = cljs.core.chunk_first.call(null,seq__26618_26636__$1);
var G__26638 = cljs.core.chunk_rest.call(null,seq__26618_26636__$1);
var G__26639 = c__17629__auto___26637;
var G__26640 = cljs.core.count.call(null,c__17629__auto___26637);
var G__26641 = (0);
seq__26618_26626 = G__26638;
chunk__26619_26627 = G__26639;
count__26620_26628 = G__26640;
i__26621_26629 = G__26641;
continue;
} else {
var req_26642 = cljs.core.first.call(null,seq__26618_26636__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26642,prov);

var G__26643 = cljs.core.next.call(null,seq__26618_26636__$1);
var G__26644 = null;
var G__26645 = (0);
var G__26646 = (0);
seq__26618_26626 = G__26643;
chunk__26619_26627 = G__26644;
count__26620_26628 = G__26645;
i__26621_26629 = G__26646;
continue;
}
} else {
}
}
break;
}

var G__26647 = seq__26614;
var G__26648 = chunk__26615;
var G__26649 = count__26616;
var G__26650 = (i__26617 + (1));
seq__26614 = G__26647;
chunk__26615 = G__26648;
count__26616 = G__26649;
i__26617 = G__26650;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26614);
if(temp__4425__auto__){
var seq__26614__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26614__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__26614__$1);
var G__26651 = cljs.core.chunk_rest.call(null,seq__26614__$1);
var G__26652 = c__17629__auto__;
var G__26653 = cljs.core.count.call(null,c__17629__auto__);
var G__26654 = (0);
seq__26614 = G__26651;
chunk__26615 = G__26652;
count__26616 = G__26653;
i__26617 = G__26654;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26614__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26622_26655 = cljs.core.seq.call(null,requires);
var chunk__26623_26656 = null;
var count__26624_26657 = (0);
var i__26625_26658 = (0);
while(true){
if((i__26625_26658 < count__26624_26657)){
var req_26659 = cljs.core._nth.call(null,chunk__26623_26656,i__26625_26658);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26659,prov);

var G__26660 = seq__26622_26655;
var G__26661 = chunk__26623_26656;
var G__26662 = count__26624_26657;
var G__26663 = (i__26625_26658 + (1));
seq__26622_26655 = G__26660;
chunk__26623_26656 = G__26661;
count__26624_26657 = G__26662;
i__26625_26658 = G__26663;
continue;
} else {
var temp__4425__auto___26664__$1 = cljs.core.seq.call(null,seq__26622_26655);
if(temp__4425__auto___26664__$1){
var seq__26622_26665__$1 = temp__4425__auto___26664__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26622_26665__$1)){
var c__17629__auto___26666 = cljs.core.chunk_first.call(null,seq__26622_26665__$1);
var G__26667 = cljs.core.chunk_rest.call(null,seq__26622_26665__$1);
var G__26668 = c__17629__auto___26666;
var G__26669 = cljs.core.count.call(null,c__17629__auto___26666);
var G__26670 = (0);
seq__26622_26655 = G__26667;
chunk__26623_26656 = G__26668;
count__26624_26657 = G__26669;
i__26625_26658 = G__26670;
continue;
} else {
var req_26671 = cljs.core.first.call(null,seq__26622_26665__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26671,prov);

var G__26672 = cljs.core.next.call(null,seq__26622_26665__$1);
var G__26673 = null;
var G__26674 = (0);
var G__26675 = (0);
seq__26622_26655 = G__26672;
chunk__26623_26656 = G__26673;
count__26624_26657 = G__26674;
i__26625_26658 = G__26675;
continue;
}
} else {
}
}
break;
}

var G__26676 = cljs.core.next.call(null,seq__26614__$1);
var G__26677 = null;
var G__26678 = (0);
var G__26679 = (0);
seq__26614 = G__26676;
chunk__26615 = G__26677;
count__26616 = G__26678;
i__26617 = G__26679;
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
var seq__26684_26688 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26685_26689 = null;
var count__26686_26690 = (0);
var i__26687_26691 = (0);
while(true){
if((i__26687_26691 < count__26686_26690)){
var ns_26692 = cljs.core._nth.call(null,chunk__26685_26689,i__26687_26691);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26692);

var G__26693 = seq__26684_26688;
var G__26694 = chunk__26685_26689;
var G__26695 = count__26686_26690;
var G__26696 = (i__26687_26691 + (1));
seq__26684_26688 = G__26693;
chunk__26685_26689 = G__26694;
count__26686_26690 = G__26695;
i__26687_26691 = G__26696;
continue;
} else {
var temp__4425__auto___26697 = cljs.core.seq.call(null,seq__26684_26688);
if(temp__4425__auto___26697){
var seq__26684_26698__$1 = temp__4425__auto___26697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26684_26698__$1)){
var c__17629__auto___26699 = cljs.core.chunk_first.call(null,seq__26684_26698__$1);
var G__26700 = cljs.core.chunk_rest.call(null,seq__26684_26698__$1);
var G__26701 = c__17629__auto___26699;
var G__26702 = cljs.core.count.call(null,c__17629__auto___26699);
var G__26703 = (0);
seq__26684_26688 = G__26700;
chunk__26685_26689 = G__26701;
count__26686_26690 = G__26702;
i__26687_26691 = G__26703;
continue;
} else {
var ns_26704 = cljs.core.first.call(null,seq__26684_26698__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26704);

var G__26705 = cljs.core.next.call(null,seq__26684_26698__$1);
var G__26706 = null;
var G__26707 = (0);
var G__26708 = (0);
seq__26684_26688 = G__26705;
chunk__26685_26689 = G__26706;
count__26686_26690 = G__26707;
i__26687_26691 = G__26708;
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
var G__26709__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26710__i = 0, G__26710__a = new Array(arguments.length -  0);
while (G__26710__i < G__26710__a.length) {G__26710__a[G__26710__i] = arguments[G__26710__i + 0]; ++G__26710__i;}
  args = new cljs.core.IndexedSeq(G__26710__a,0);
} 
return G__26709__delegate.call(this,args);};
G__26709.cljs$lang$maxFixedArity = 0;
G__26709.cljs$lang$applyTo = (function (arglist__26711){
var args = cljs.core.seq(arglist__26711);
return G__26709__delegate(args);
});
G__26709.cljs$core$IFn$_invoke$arity$variadic = G__26709__delegate;
return G__26709;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26713 = cljs.core._EQ_;
var expr__26714 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26713.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26714))){
var path_parts = ((function (pred__26713,expr__26714){
return (function (p1__26712_SHARP_){
return clojure.string.split.call(null,p1__26712_SHARP_,/[\/\\]/);
});})(pred__26713,expr__26714))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26713,expr__26714){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26716){if((e26716 instanceof Error)){
var e = e26716;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26716;

}
}})());
});
;})(path_parts,sep,root,pred__26713,expr__26714))
} else {
if(cljs.core.truth_(pred__26713.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26714))){
return ((function (pred__26713,expr__26714){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26713,expr__26714){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26713,expr__26714))
);

return deferred.addErrback(((function (deferred,pred__26713,expr__26714){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26713,expr__26714))
);
});
;})(pred__26713,expr__26714))
} else {
return ((function (pred__26713,expr__26714){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26713,expr__26714))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26717,callback){
var map__26720 = p__26717;
var map__26720__$1 = ((((!((map__26720 == null)))?((((map__26720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26720):map__26720);
var file_msg = map__26720__$1;
var request_url = cljs.core.get.call(null,map__26720__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26720,map__26720__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26720,map__26720__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__18952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto__){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto__){
return (function (state_26744){
var state_val_26745 = (state_26744[(1)]);
if((state_val_26745 === (7))){
var inst_26740 = (state_26744[(2)]);
var state_26744__$1 = state_26744;
var statearr_26746_26766 = state_26744__$1;
(statearr_26746_26766[(2)] = inst_26740);

(statearr_26746_26766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26745 === (1))){
var state_26744__$1 = state_26744;
var statearr_26747_26767 = state_26744__$1;
(statearr_26747_26767[(2)] = null);

(statearr_26747_26767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26745 === (4))){
var inst_26724 = (state_26744[(7)]);
var inst_26724__$1 = (state_26744[(2)]);
var state_26744__$1 = (function (){var statearr_26748 = state_26744;
(statearr_26748[(7)] = inst_26724__$1);

return statearr_26748;
})();
if(cljs.core.truth_(inst_26724__$1)){
var statearr_26749_26768 = state_26744__$1;
(statearr_26749_26768[(1)] = (5));

} else {
var statearr_26750_26769 = state_26744__$1;
(statearr_26750_26769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26745 === (6))){
var state_26744__$1 = state_26744;
var statearr_26751_26770 = state_26744__$1;
(statearr_26751_26770[(2)] = null);

(statearr_26751_26770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26745 === (3))){
var inst_26742 = (state_26744[(2)]);
var state_26744__$1 = state_26744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26744__$1,inst_26742);
} else {
if((state_val_26745 === (2))){
var state_26744__$1 = state_26744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26744__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26745 === (11))){
var inst_26736 = (state_26744[(2)]);
var state_26744__$1 = (function (){var statearr_26752 = state_26744;
(statearr_26752[(8)] = inst_26736);

return statearr_26752;
})();
var statearr_26753_26771 = state_26744__$1;
(statearr_26753_26771[(2)] = null);

(statearr_26753_26771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26745 === (9))){
var inst_26728 = (state_26744[(9)]);
var inst_26730 = (state_26744[(10)]);
var inst_26732 = inst_26730.call(null,inst_26728);
var state_26744__$1 = state_26744;
var statearr_26754_26772 = state_26744__$1;
(statearr_26754_26772[(2)] = inst_26732);

(statearr_26754_26772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26745 === (5))){
var inst_26724 = (state_26744[(7)]);
var inst_26726 = figwheel.client.file_reloading.blocking_load.call(null,inst_26724);
var state_26744__$1 = state_26744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26744__$1,(8),inst_26726);
} else {
if((state_val_26745 === (10))){
var inst_26728 = (state_26744[(9)]);
var inst_26734 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26728);
var state_26744__$1 = state_26744;
var statearr_26755_26773 = state_26744__$1;
(statearr_26755_26773[(2)] = inst_26734);

(statearr_26755_26773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26745 === (8))){
var inst_26724 = (state_26744[(7)]);
var inst_26730 = (state_26744[(10)]);
var inst_26728 = (state_26744[(2)]);
var inst_26729 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26730__$1 = cljs.core.get.call(null,inst_26729,inst_26724);
var state_26744__$1 = (function (){var statearr_26756 = state_26744;
(statearr_26756[(9)] = inst_26728);

(statearr_26756[(10)] = inst_26730__$1);

return statearr_26756;
})();
if(cljs.core.truth_(inst_26730__$1)){
var statearr_26757_26774 = state_26744__$1;
(statearr_26757_26774[(1)] = (9));

} else {
var statearr_26758_26775 = state_26744__$1;
(statearr_26758_26775[(1)] = (10));

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
});})(c__18952__auto__))
;
return ((function (switch__18931__auto__,c__18952__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18932__auto__ = null;
var figwheel$client$file_reloading$state_machine__18932__auto____0 = (function (){
var statearr_26762 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26762[(0)] = figwheel$client$file_reloading$state_machine__18932__auto__);

(statearr_26762[(1)] = (1));

return statearr_26762;
});
var figwheel$client$file_reloading$state_machine__18932__auto____1 = (function (state_26744){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_26744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e26763){if((e26763 instanceof Object)){
var ex__18935__auto__ = e26763;
var statearr_26764_26776 = state_26744;
(statearr_26764_26776[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26777 = state_26744;
state_26744 = G__26777;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18932__auto__ = function(state_26744){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18932__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18932__auto____1.call(this,state_26744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18932__auto____0;
figwheel$client$file_reloading$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18932__auto____1;
return figwheel$client$file_reloading$state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto__))
})();
var state__18954__auto__ = (function (){var statearr_26765 = f__18953__auto__.call(null);
(statearr_26765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto__);

return statearr_26765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto__))
);

return c__18952__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26778,callback){
var map__26781 = p__26778;
var map__26781__$1 = ((((!((map__26781 == null)))?((((map__26781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26781):map__26781);
var file_msg = map__26781__$1;
var namespace = cljs.core.get.call(null,map__26781__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26781,map__26781__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26781,map__26781__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26783){
var map__26786 = p__26783;
var map__26786__$1 = ((((!((map__26786 == null)))?((((map__26786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26786):map__26786);
var file_msg = map__26786__$1;
var namespace = cljs.core.get.call(null,map__26786__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26788,callback){
var map__26791 = p__26788;
var map__26791__$1 = ((((!((map__26791 == null)))?((((map__26791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26791):map__26791);
var file_msg = map__26791__$1;
var request_url = cljs.core.get.call(null,map__26791__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26791__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__18952__auto___26879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___26879,out){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___26879,out){
return (function (state_26861){
var state_val_26862 = (state_26861[(1)]);
if((state_val_26862 === (1))){
var inst_26839 = cljs.core.nth.call(null,files,(0),null);
var inst_26840 = cljs.core.nthnext.call(null,files,(1));
var inst_26841 = files;
var state_26861__$1 = (function (){var statearr_26863 = state_26861;
(statearr_26863[(7)] = inst_26841);

(statearr_26863[(8)] = inst_26839);

(statearr_26863[(9)] = inst_26840);

return statearr_26863;
})();
var statearr_26864_26880 = state_26861__$1;
(statearr_26864_26880[(2)] = null);

(statearr_26864_26880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (2))){
var inst_26844 = (state_26861[(10)]);
var inst_26841 = (state_26861[(7)]);
var inst_26844__$1 = cljs.core.nth.call(null,inst_26841,(0),null);
var inst_26845 = cljs.core.nthnext.call(null,inst_26841,(1));
var inst_26846 = (inst_26844__$1 == null);
var inst_26847 = cljs.core.not.call(null,inst_26846);
var state_26861__$1 = (function (){var statearr_26865 = state_26861;
(statearr_26865[(10)] = inst_26844__$1);

(statearr_26865[(11)] = inst_26845);

return statearr_26865;
})();
if(inst_26847){
var statearr_26866_26881 = state_26861__$1;
(statearr_26866_26881[(1)] = (4));

} else {
var statearr_26867_26882 = state_26861__$1;
(statearr_26867_26882[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (3))){
var inst_26859 = (state_26861[(2)]);
var state_26861__$1 = state_26861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26861__$1,inst_26859);
} else {
if((state_val_26862 === (4))){
var inst_26844 = (state_26861[(10)]);
var inst_26849 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26844);
var state_26861__$1 = state_26861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26861__$1,(7),inst_26849);
} else {
if((state_val_26862 === (5))){
var inst_26855 = cljs.core.async.close_BANG_.call(null,out);
var state_26861__$1 = state_26861;
var statearr_26868_26883 = state_26861__$1;
(statearr_26868_26883[(2)] = inst_26855);

(statearr_26868_26883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (6))){
var inst_26857 = (state_26861[(2)]);
var state_26861__$1 = state_26861;
var statearr_26869_26884 = state_26861__$1;
(statearr_26869_26884[(2)] = inst_26857);

(statearr_26869_26884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26862 === (7))){
var inst_26845 = (state_26861[(11)]);
var inst_26851 = (state_26861[(2)]);
var inst_26852 = cljs.core.async.put_BANG_.call(null,out,inst_26851);
var inst_26841 = inst_26845;
var state_26861__$1 = (function (){var statearr_26870 = state_26861;
(statearr_26870[(12)] = inst_26852);

(statearr_26870[(7)] = inst_26841);

return statearr_26870;
})();
var statearr_26871_26885 = state_26861__$1;
(statearr_26871_26885[(2)] = null);

(statearr_26871_26885[(1)] = (2));


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
});})(c__18952__auto___26879,out))
;
return ((function (switch__18931__auto__,c__18952__auto___26879,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18932__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18932__auto____0 = (function (){
var statearr_26875 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26875[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18932__auto__);

(statearr_26875[(1)] = (1));

return statearr_26875;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18932__auto____1 = (function (state_26861){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_26861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e26876){if((e26876 instanceof Object)){
var ex__18935__auto__ = e26876;
var statearr_26877_26886 = state_26861;
(statearr_26877_26886[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26887 = state_26861;
state_26861 = G__26887;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18932__auto__ = function(state_26861){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18932__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18932__auto____1.call(this,state_26861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18932__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18932__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___26879,out))
})();
var state__18954__auto__ = (function (){var statearr_26878 = f__18953__auto__.call(null);
(statearr_26878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___26879);

return statearr_26878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___26879,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26888,opts){
var map__26892 = p__26888;
var map__26892__$1 = ((((!((map__26892 == null)))?((((map__26892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26892):map__26892);
var eval_body__$1 = cljs.core.get.call(null,map__26892__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26892__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e26894){var e = e26894;
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
return (function (p1__26895_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26895_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__26900){
var vec__26901 = p__26900;
var k = cljs.core.nth.call(null,vec__26901,(0),null);
var v = cljs.core.nth.call(null,vec__26901,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26902){
var vec__26903 = p__26902;
var k = cljs.core.nth.call(null,vec__26903,(0),null);
var v = cljs.core.nth.call(null,vec__26903,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26907,p__26908){
var map__27155 = p__26907;
var map__27155__$1 = ((((!((map__27155 == null)))?((((map__27155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27155):map__27155);
var opts = map__27155__$1;
var before_jsload = cljs.core.get.call(null,map__27155__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27155__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27155__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27156 = p__26908;
var map__27156__$1 = ((((!((map__27156 == null)))?((((map__27156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27156):map__27156);
var msg = map__27156__$1;
var files = cljs.core.get.call(null,map__27156__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27156__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27156__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27309){
var state_val_27310 = (state_27309[(1)]);
if((state_val_27310 === (7))){
var inst_27173 = (state_27309[(7)]);
var inst_27171 = (state_27309[(8)]);
var inst_27172 = (state_27309[(9)]);
var inst_27170 = (state_27309[(10)]);
var inst_27178 = cljs.core._nth.call(null,inst_27171,inst_27173);
var inst_27179 = figwheel.client.file_reloading.eval_body.call(null,inst_27178,opts);
var inst_27180 = (inst_27173 + (1));
var tmp27311 = inst_27171;
var tmp27312 = inst_27172;
var tmp27313 = inst_27170;
var inst_27170__$1 = tmp27313;
var inst_27171__$1 = tmp27311;
var inst_27172__$1 = tmp27312;
var inst_27173__$1 = inst_27180;
var state_27309__$1 = (function (){var statearr_27314 = state_27309;
(statearr_27314[(11)] = inst_27179);

(statearr_27314[(7)] = inst_27173__$1);

(statearr_27314[(8)] = inst_27171__$1);

(statearr_27314[(9)] = inst_27172__$1);

(statearr_27314[(10)] = inst_27170__$1);

return statearr_27314;
})();
var statearr_27315_27401 = state_27309__$1;
(statearr_27315_27401[(2)] = null);

(statearr_27315_27401[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (20))){
var inst_27213 = (state_27309[(12)]);
var inst_27221 = figwheel.client.file_reloading.sort_files.call(null,inst_27213);
var state_27309__$1 = state_27309;
var statearr_27316_27402 = state_27309__$1;
(statearr_27316_27402[(2)] = inst_27221);

(statearr_27316_27402[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (27))){
var state_27309__$1 = state_27309;
var statearr_27317_27403 = state_27309__$1;
(statearr_27317_27403[(2)] = null);

(statearr_27317_27403[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (1))){
var inst_27162 = (state_27309[(13)]);
var inst_27159 = before_jsload.call(null,files);
var inst_27160 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27161 = (function (){return ((function (inst_27162,inst_27159,inst_27160,state_val_27310,c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26904_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26904_SHARP_);
});
;})(inst_27162,inst_27159,inst_27160,state_val_27310,c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27162__$1 = cljs.core.filter.call(null,inst_27161,files);
var inst_27163 = cljs.core.not_empty.call(null,inst_27162__$1);
var state_27309__$1 = (function (){var statearr_27318 = state_27309;
(statearr_27318[(14)] = inst_27160);

(statearr_27318[(13)] = inst_27162__$1);

(statearr_27318[(15)] = inst_27159);

return statearr_27318;
})();
if(cljs.core.truth_(inst_27163)){
var statearr_27319_27404 = state_27309__$1;
(statearr_27319_27404[(1)] = (2));

} else {
var statearr_27320_27405 = state_27309__$1;
(statearr_27320_27405[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (24))){
var state_27309__$1 = state_27309;
var statearr_27321_27406 = state_27309__$1;
(statearr_27321_27406[(2)] = null);

(statearr_27321_27406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (39))){
var inst_27263 = (state_27309[(16)]);
var state_27309__$1 = state_27309;
var statearr_27322_27407 = state_27309__$1;
(statearr_27322_27407[(2)] = inst_27263);

(statearr_27322_27407[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (46))){
var inst_27304 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
var statearr_27323_27408 = state_27309__$1;
(statearr_27323_27408[(2)] = inst_27304);

(statearr_27323_27408[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (4))){
var inst_27207 = (state_27309[(2)]);
var inst_27208 = cljs.core.List.EMPTY;
var inst_27209 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27208);
var inst_27210 = (function (){return ((function (inst_27207,inst_27208,inst_27209,state_val_27310,c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26905_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26905_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26905_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_27207,inst_27208,inst_27209,state_val_27310,c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27211 = cljs.core.filter.call(null,inst_27210,files);
var inst_27212 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27213 = cljs.core.concat.call(null,inst_27211,inst_27212);
var state_27309__$1 = (function (){var statearr_27324 = state_27309;
(statearr_27324[(12)] = inst_27213);

(statearr_27324[(17)] = inst_27209);

(statearr_27324[(18)] = inst_27207);

return statearr_27324;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27325_27409 = state_27309__$1;
(statearr_27325_27409[(1)] = (16));

} else {
var statearr_27326_27410 = state_27309__$1;
(statearr_27326_27410[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (15))){
var inst_27197 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
var statearr_27327_27411 = state_27309__$1;
(statearr_27327_27411[(2)] = inst_27197);

(statearr_27327_27411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (21))){
var inst_27223 = (state_27309[(19)]);
var inst_27223__$1 = (state_27309[(2)]);
var inst_27224 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27223__$1);
var state_27309__$1 = (function (){var statearr_27328 = state_27309;
(statearr_27328[(19)] = inst_27223__$1);

return statearr_27328;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27309__$1,(22),inst_27224);
} else {
if((state_val_27310 === (31))){
var inst_27307 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27309__$1,inst_27307);
} else {
if((state_val_27310 === (32))){
var inst_27263 = (state_27309[(16)]);
var inst_27268 = inst_27263.cljs$lang$protocol_mask$partition0$;
var inst_27269 = (inst_27268 & (64));
var inst_27270 = inst_27263.cljs$core$ISeq$;
var inst_27271 = (inst_27269) || (inst_27270);
var state_27309__$1 = state_27309;
if(cljs.core.truth_(inst_27271)){
var statearr_27329_27412 = state_27309__$1;
(statearr_27329_27412[(1)] = (35));

} else {
var statearr_27330_27413 = state_27309__$1;
(statearr_27330_27413[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (40))){
var inst_27284 = (state_27309[(20)]);
var inst_27283 = (state_27309[(2)]);
var inst_27284__$1 = cljs.core.get.call(null,inst_27283,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27285 = cljs.core.get.call(null,inst_27283,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27286 = cljs.core.not_empty.call(null,inst_27284__$1);
var state_27309__$1 = (function (){var statearr_27331 = state_27309;
(statearr_27331[(21)] = inst_27285);

(statearr_27331[(20)] = inst_27284__$1);

return statearr_27331;
})();
if(cljs.core.truth_(inst_27286)){
var statearr_27332_27414 = state_27309__$1;
(statearr_27332_27414[(1)] = (41));

} else {
var statearr_27333_27415 = state_27309__$1;
(statearr_27333_27415[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (33))){
var state_27309__$1 = state_27309;
var statearr_27334_27416 = state_27309__$1;
(statearr_27334_27416[(2)] = false);

(statearr_27334_27416[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (13))){
var inst_27183 = (state_27309[(22)]);
var inst_27187 = cljs.core.chunk_first.call(null,inst_27183);
var inst_27188 = cljs.core.chunk_rest.call(null,inst_27183);
var inst_27189 = cljs.core.count.call(null,inst_27187);
var inst_27170 = inst_27188;
var inst_27171 = inst_27187;
var inst_27172 = inst_27189;
var inst_27173 = (0);
var state_27309__$1 = (function (){var statearr_27335 = state_27309;
(statearr_27335[(7)] = inst_27173);

(statearr_27335[(8)] = inst_27171);

(statearr_27335[(9)] = inst_27172);

(statearr_27335[(10)] = inst_27170);

return statearr_27335;
})();
var statearr_27336_27417 = state_27309__$1;
(statearr_27336_27417[(2)] = null);

(statearr_27336_27417[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (22))){
var inst_27226 = (state_27309[(23)]);
var inst_27231 = (state_27309[(24)]);
var inst_27227 = (state_27309[(25)]);
var inst_27223 = (state_27309[(19)]);
var inst_27226__$1 = (state_27309[(2)]);
var inst_27227__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27226__$1);
var inst_27228 = (function (){var all_files = inst_27223;
var res_SINGLEQUOTE_ = inst_27226__$1;
var res = inst_27227__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27226,inst_27231,inst_27227,inst_27223,inst_27226__$1,inst_27227__$1,state_val_27310,c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26906_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26906_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27226,inst_27231,inst_27227,inst_27223,inst_27226__$1,inst_27227__$1,state_val_27310,c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27229 = cljs.core.filter.call(null,inst_27228,inst_27226__$1);
var inst_27230 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27231__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27230);
var inst_27232 = cljs.core.not_empty.call(null,inst_27231__$1);
var state_27309__$1 = (function (){var statearr_27337 = state_27309;
(statearr_27337[(23)] = inst_27226__$1);

(statearr_27337[(24)] = inst_27231__$1);

(statearr_27337[(25)] = inst_27227__$1);

(statearr_27337[(26)] = inst_27229);

return statearr_27337;
})();
if(cljs.core.truth_(inst_27232)){
var statearr_27338_27418 = state_27309__$1;
(statearr_27338_27418[(1)] = (23));

} else {
var statearr_27339_27419 = state_27309__$1;
(statearr_27339_27419[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (36))){
var state_27309__$1 = state_27309;
var statearr_27340_27420 = state_27309__$1;
(statearr_27340_27420[(2)] = false);

(statearr_27340_27420[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (41))){
var inst_27284 = (state_27309[(20)]);
var inst_27288 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27289 = cljs.core.map.call(null,inst_27288,inst_27284);
var inst_27290 = cljs.core.pr_str.call(null,inst_27289);
var inst_27291 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27290)].join('');
var inst_27292 = figwheel.client.utils.log.call(null,inst_27291);
var state_27309__$1 = state_27309;
var statearr_27341_27421 = state_27309__$1;
(statearr_27341_27421[(2)] = inst_27292);

(statearr_27341_27421[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (43))){
var inst_27285 = (state_27309[(21)]);
var inst_27295 = (state_27309[(2)]);
var inst_27296 = cljs.core.not_empty.call(null,inst_27285);
var state_27309__$1 = (function (){var statearr_27342 = state_27309;
(statearr_27342[(27)] = inst_27295);

return statearr_27342;
})();
if(cljs.core.truth_(inst_27296)){
var statearr_27343_27422 = state_27309__$1;
(statearr_27343_27422[(1)] = (44));

} else {
var statearr_27344_27423 = state_27309__$1;
(statearr_27344_27423[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (29))){
var inst_27226 = (state_27309[(23)]);
var inst_27263 = (state_27309[(16)]);
var inst_27231 = (state_27309[(24)]);
var inst_27227 = (state_27309[(25)]);
var inst_27229 = (state_27309[(26)]);
var inst_27223 = (state_27309[(19)]);
var inst_27259 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27262 = (function (){var all_files = inst_27223;
var res_SINGLEQUOTE_ = inst_27226;
var res = inst_27227;
var files_not_loaded = inst_27229;
var dependencies_that_loaded = inst_27231;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27226,inst_27263,inst_27231,inst_27227,inst_27229,inst_27223,inst_27259,state_val_27310,c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27261){
var map__27345 = p__27261;
var map__27345__$1 = ((((!((map__27345 == null)))?((((map__27345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27345):map__27345);
var namespace = cljs.core.get.call(null,map__27345__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27226,inst_27263,inst_27231,inst_27227,inst_27229,inst_27223,inst_27259,state_val_27310,c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27263__$1 = cljs.core.group_by.call(null,inst_27262,inst_27229);
var inst_27265 = (inst_27263__$1 == null);
var inst_27266 = cljs.core.not.call(null,inst_27265);
var state_27309__$1 = (function (){var statearr_27347 = state_27309;
(statearr_27347[(28)] = inst_27259);

(statearr_27347[(16)] = inst_27263__$1);

return statearr_27347;
})();
if(inst_27266){
var statearr_27348_27424 = state_27309__$1;
(statearr_27348_27424[(1)] = (32));

} else {
var statearr_27349_27425 = state_27309__$1;
(statearr_27349_27425[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (44))){
var inst_27285 = (state_27309[(21)]);
var inst_27298 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27285);
var inst_27299 = cljs.core.pr_str.call(null,inst_27298);
var inst_27300 = [cljs.core.str("not required: "),cljs.core.str(inst_27299)].join('');
var inst_27301 = figwheel.client.utils.log.call(null,inst_27300);
var state_27309__$1 = state_27309;
var statearr_27350_27426 = state_27309__$1;
(statearr_27350_27426[(2)] = inst_27301);

(statearr_27350_27426[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (6))){
var inst_27204 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
var statearr_27351_27427 = state_27309__$1;
(statearr_27351_27427[(2)] = inst_27204);

(statearr_27351_27427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (28))){
var inst_27229 = (state_27309[(26)]);
var inst_27256 = (state_27309[(2)]);
var inst_27257 = cljs.core.not_empty.call(null,inst_27229);
var state_27309__$1 = (function (){var statearr_27352 = state_27309;
(statearr_27352[(29)] = inst_27256);

return statearr_27352;
})();
if(cljs.core.truth_(inst_27257)){
var statearr_27353_27428 = state_27309__$1;
(statearr_27353_27428[(1)] = (29));

} else {
var statearr_27354_27429 = state_27309__$1;
(statearr_27354_27429[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (25))){
var inst_27227 = (state_27309[(25)]);
var inst_27243 = (state_27309[(2)]);
var inst_27244 = cljs.core.not_empty.call(null,inst_27227);
var state_27309__$1 = (function (){var statearr_27355 = state_27309;
(statearr_27355[(30)] = inst_27243);

return statearr_27355;
})();
if(cljs.core.truth_(inst_27244)){
var statearr_27356_27430 = state_27309__$1;
(statearr_27356_27430[(1)] = (26));

} else {
var statearr_27357_27431 = state_27309__$1;
(statearr_27357_27431[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (34))){
var inst_27278 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
if(cljs.core.truth_(inst_27278)){
var statearr_27358_27432 = state_27309__$1;
(statearr_27358_27432[(1)] = (38));

} else {
var statearr_27359_27433 = state_27309__$1;
(statearr_27359_27433[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (17))){
var state_27309__$1 = state_27309;
var statearr_27360_27434 = state_27309__$1;
(statearr_27360_27434[(2)] = recompile_dependents);

(statearr_27360_27434[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (3))){
var state_27309__$1 = state_27309;
var statearr_27361_27435 = state_27309__$1;
(statearr_27361_27435[(2)] = null);

(statearr_27361_27435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (12))){
var inst_27200 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
var statearr_27362_27436 = state_27309__$1;
(statearr_27362_27436[(2)] = inst_27200);

(statearr_27362_27436[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (2))){
var inst_27162 = (state_27309[(13)]);
var inst_27169 = cljs.core.seq.call(null,inst_27162);
var inst_27170 = inst_27169;
var inst_27171 = null;
var inst_27172 = (0);
var inst_27173 = (0);
var state_27309__$1 = (function (){var statearr_27363 = state_27309;
(statearr_27363[(7)] = inst_27173);

(statearr_27363[(8)] = inst_27171);

(statearr_27363[(9)] = inst_27172);

(statearr_27363[(10)] = inst_27170);

return statearr_27363;
})();
var statearr_27364_27437 = state_27309__$1;
(statearr_27364_27437[(2)] = null);

(statearr_27364_27437[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (23))){
var inst_27226 = (state_27309[(23)]);
var inst_27231 = (state_27309[(24)]);
var inst_27227 = (state_27309[(25)]);
var inst_27229 = (state_27309[(26)]);
var inst_27223 = (state_27309[(19)]);
var inst_27234 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27236 = (function (){var all_files = inst_27223;
var res_SINGLEQUOTE_ = inst_27226;
var res = inst_27227;
var files_not_loaded = inst_27229;
var dependencies_that_loaded = inst_27231;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27226,inst_27231,inst_27227,inst_27229,inst_27223,inst_27234,state_val_27310,c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27235){
var map__27365 = p__27235;
var map__27365__$1 = ((((!((map__27365 == null)))?((((map__27365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27365):map__27365);
var request_url = cljs.core.get.call(null,map__27365__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27226,inst_27231,inst_27227,inst_27229,inst_27223,inst_27234,state_val_27310,c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27237 = cljs.core.reverse.call(null,inst_27231);
var inst_27238 = cljs.core.map.call(null,inst_27236,inst_27237);
var inst_27239 = cljs.core.pr_str.call(null,inst_27238);
var inst_27240 = figwheel.client.utils.log.call(null,inst_27239);
var state_27309__$1 = (function (){var statearr_27367 = state_27309;
(statearr_27367[(31)] = inst_27234);

return statearr_27367;
})();
var statearr_27368_27438 = state_27309__$1;
(statearr_27368_27438[(2)] = inst_27240);

(statearr_27368_27438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (35))){
var state_27309__$1 = state_27309;
var statearr_27369_27439 = state_27309__$1;
(statearr_27369_27439[(2)] = true);

(statearr_27369_27439[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (19))){
var inst_27213 = (state_27309[(12)]);
var inst_27219 = figwheel.client.file_reloading.expand_files.call(null,inst_27213);
var state_27309__$1 = state_27309;
var statearr_27370_27440 = state_27309__$1;
(statearr_27370_27440[(2)] = inst_27219);

(statearr_27370_27440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (11))){
var state_27309__$1 = state_27309;
var statearr_27371_27441 = state_27309__$1;
(statearr_27371_27441[(2)] = null);

(statearr_27371_27441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (9))){
var inst_27202 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
var statearr_27372_27442 = state_27309__$1;
(statearr_27372_27442[(2)] = inst_27202);

(statearr_27372_27442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (5))){
var inst_27173 = (state_27309[(7)]);
var inst_27172 = (state_27309[(9)]);
var inst_27175 = (inst_27173 < inst_27172);
var inst_27176 = inst_27175;
var state_27309__$1 = state_27309;
if(cljs.core.truth_(inst_27176)){
var statearr_27373_27443 = state_27309__$1;
(statearr_27373_27443[(1)] = (7));

} else {
var statearr_27374_27444 = state_27309__$1;
(statearr_27374_27444[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (14))){
var inst_27183 = (state_27309[(22)]);
var inst_27192 = cljs.core.first.call(null,inst_27183);
var inst_27193 = figwheel.client.file_reloading.eval_body.call(null,inst_27192,opts);
var inst_27194 = cljs.core.next.call(null,inst_27183);
var inst_27170 = inst_27194;
var inst_27171 = null;
var inst_27172 = (0);
var inst_27173 = (0);
var state_27309__$1 = (function (){var statearr_27375 = state_27309;
(statearr_27375[(32)] = inst_27193);

(statearr_27375[(7)] = inst_27173);

(statearr_27375[(8)] = inst_27171);

(statearr_27375[(9)] = inst_27172);

(statearr_27375[(10)] = inst_27170);

return statearr_27375;
})();
var statearr_27376_27445 = state_27309__$1;
(statearr_27376_27445[(2)] = null);

(statearr_27376_27445[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (45))){
var state_27309__$1 = state_27309;
var statearr_27377_27446 = state_27309__$1;
(statearr_27377_27446[(2)] = null);

(statearr_27377_27446[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (26))){
var inst_27226 = (state_27309[(23)]);
var inst_27231 = (state_27309[(24)]);
var inst_27227 = (state_27309[(25)]);
var inst_27229 = (state_27309[(26)]);
var inst_27223 = (state_27309[(19)]);
var inst_27246 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27248 = (function (){var all_files = inst_27223;
var res_SINGLEQUOTE_ = inst_27226;
var res = inst_27227;
var files_not_loaded = inst_27229;
var dependencies_that_loaded = inst_27231;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27226,inst_27231,inst_27227,inst_27229,inst_27223,inst_27246,state_val_27310,c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27247){
var map__27378 = p__27247;
var map__27378__$1 = ((((!((map__27378 == null)))?((((map__27378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27378):map__27378);
var namespace = cljs.core.get.call(null,map__27378__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27378__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27226,inst_27231,inst_27227,inst_27229,inst_27223,inst_27246,state_val_27310,c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27249 = cljs.core.map.call(null,inst_27248,inst_27227);
var inst_27250 = cljs.core.pr_str.call(null,inst_27249);
var inst_27251 = figwheel.client.utils.log.call(null,inst_27250);
var inst_27252 = (function (){var all_files = inst_27223;
var res_SINGLEQUOTE_ = inst_27226;
var res = inst_27227;
var files_not_loaded = inst_27229;
var dependencies_that_loaded = inst_27231;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27226,inst_27231,inst_27227,inst_27229,inst_27223,inst_27246,inst_27248,inst_27249,inst_27250,inst_27251,state_val_27310,c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27226,inst_27231,inst_27227,inst_27229,inst_27223,inst_27246,inst_27248,inst_27249,inst_27250,inst_27251,state_val_27310,c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27253 = setTimeout(inst_27252,(10));
var state_27309__$1 = (function (){var statearr_27380 = state_27309;
(statearr_27380[(33)] = inst_27246);

(statearr_27380[(34)] = inst_27251);

return statearr_27380;
})();
var statearr_27381_27447 = state_27309__$1;
(statearr_27381_27447[(2)] = inst_27253);

(statearr_27381_27447[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (16))){
var state_27309__$1 = state_27309;
var statearr_27382_27448 = state_27309__$1;
(statearr_27382_27448[(2)] = reload_dependents);

(statearr_27382_27448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (38))){
var inst_27263 = (state_27309[(16)]);
var inst_27280 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27263);
var state_27309__$1 = state_27309;
var statearr_27383_27449 = state_27309__$1;
(statearr_27383_27449[(2)] = inst_27280);

(statearr_27383_27449[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (30))){
var state_27309__$1 = state_27309;
var statearr_27384_27450 = state_27309__$1;
(statearr_27384_27450[(2)] = null);

(statearr_27384_27450[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (10))){
var inst_27183 = (state_27309[(22)]);
var inst_27185 = cljs.core.chunked_seq_QMARK_.call(null,inst_27183);
var state_27309__$1 = state_27309;
if(inst_27185){
var statearr_27385_27451 = state_27309__$1;
(statearr_27385_27451[(1)] = (13));

} else {
var statearr_27386_27452 = state_27309__$1;
(statearr_27386_27452[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (18))){
var inst_27217 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
if(cljs.core.truth_(inst_27217)){
var statearr_27387_27453 = state_27309__$1;
(statearr_27387_27453[(1)] = (19));

} else {
var statearr_27388_27454 = state_27309__$1;
(statearr_27388_27454[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (42))){
var state_27309__$1 = state_27309;
var statearr_27389_27455 = state_27309__$1;
(statearr_27389_27455[(2)] = null);

(statearr_27389_27455[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (37))){
var inst_27275 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
var statearr_27390_27456 = state_27309__$1;
(statearr_27390_27456[(2)] = inst_27275);

(statearr_27390_27456[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (8))){
var inst_27170 = (state_27309[(10)]);
var inst_27183 = (state_27309[(22)]);
var inst_27183__$1 = cljs.core.seq.call(null,inst_27170);
var state_27309__$1 = (function (){var statearr_27391 = state_27309;
(statearr_27391[(22)] = inst_27183__$1);

return statearr_27391;
})();
if(inst_27183__$1){
var statearr_27392_27457 = state_27309__$1;
(statearr_27392_27457[(1)] = (10));

} else {
var statearr_27393_27458 = state_27309__$1;
(statearr_27393_27458[(1)] = (11));

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
});})(c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18931__auto__,c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18932__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18932__auto____0 = (function (){
var statearr_27397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27397[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18932__auto__);

(statearr_27397[(1)] = (1));

return statearr_27397;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18932__auto____1 = (function (state_27309){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_27309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e27398){if((e27398 instanceof Object)){
var ex__18935__auto__ = e27398;
var statearr_27399_27459 = state_27309;
(statearr_27399_27459[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27460 = state_27309;
state_27309 = G__27460;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18932__auto__ = function(state_27309){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18932__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18932__auto____1.call(this,state_27309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18932__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18932__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18954__auto__ = (function (){var statearr_27400 = f__18953__auto__.call(null);
(statearr_27400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto__);

return statearr_27400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto__,map__27155,map__27155__$1,opts,before_jsload,on_jsload,reload_dependents,map__27156,map__27156__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18952__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27463,link){
var map__27466 = p__27463;
var map__27466__$1 = ((((!((map__27466 == null)))?((((map__27466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27466):map__27466);
var file = cljs.core.get.call(null,map__27466__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27466,map__27466__$1,file){
return (function (p1__27461_SHARP_,p2__27462_SHARP_){
if(cljs.core._EQ_.call(null,p1__27461_SHARP_,p2__27462_SHARP_)){
return p1__27461_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27466,map__27466__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27472){
var map__27473 = p__27472;
var map__27473__$1 = ((((!((map__27473 == null)))?((((map__27473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27473):map__27473);
var match_length = cljs.core.get.call(null,map__27473__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27473__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27468_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27468_SHARP_);
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
var args27475 = [];
var len__17884__auto___27478 = arguments.length;
var i__17885__auto___27479 = (0);
while(true){
if((i__17885__auto___27479 < len__17884__auto___27478)){
args27475.push((arguments[i__17885__auto___27479]));

var G__27480 = (i__17885__auto___27479 + (1));
i__17885__auto___27479 = G__27480;
continue;
} else {
}
break;
}

var G__27477 = args27475.length;
switch (G__27477) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27475.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27482_SHARP_,p2__27483_SHARP_){
return cljs.core.assoc.call(null,p1__27482_SHARP_,cljs.core.get.call(null,p2__27483_SHARP_,key),p2__27483_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27484){
var map__27487 = p__27484;
var map__27487__$1 = ((((!((map__27487 == null)))?((((map__27487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27487):map__27487);
var f_data = map__27487__$1;
var file = cljs.core.get.call(null,map__27487__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27489,files_msg){
var map__27496 = p__27489;
var map__27496__$1 = ((((!((map__27496 == null)))?((((map__27496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27496):map__27496);
var opts = map__27496__$1;
var on_cssload = cljs.core.get.call(null,map__27496__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27498_27502 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27499_27503 = null;
var count__27500_27504 = (0);
var i__27501_27505 = (0);
while(true){
if((i__27501_27505 < count__27500_27504)){
var f_27506 = cljs.core._nth.call(null,chunk__27499_27503,i__27501_27505);
figwheel.client.file_reloading.reload_css_file.call(null,f_27506);

var G__27507 = seq__27498_27502;
var G__27508 = chunk__27499_27503;
var G__27509 = count__27500_27504;
var G__27510 = (i__27501_27505 + (1));
seq__27498_27502 = G__27507;
chunk__27499_27503 = G__27508;
count__27500_27504 = G__27509;
i__27501_27505 = G__27510;
continue;
} else {
var temp__4425__auto___27511 = cljs.core.seq.call(null,seq__27498_27502);
if(temp__4425__auto___27511){
var seq__27498_27512__$1 = temp__4425__auto___27511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27498_27512__$1)){
var c__17629__auto___27513 = cljs.core.chunk_first.call(null,seq__27498_27512__$1);
var G__27514 = cljs.core.chunk_rest.call(null,seq__27498_27512__$1);
var G__27515 = c__17629__auto___27513;
var G__27516 = cljs.core.count.call(null,c__17629__auto___27513);
var G__27517 = (0);
seq__27498_27502 = G__27514;
chunk__27499_27503 = G__27515;
count__27500_27504 = G__27516;
i__27501_27505 = G__27517;
continue;
} else {
var f_27518 = cljs.core.first.call(null,seq__27498_27512__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27518);

var G__27519 = cljs.core.next.call(null,seq__27498_27512__$1);
var G__27520 = null;
var G__27521 = (0);
var G__27522 = (0);
seq__27498_27502 = G__27519;
chunk__27499_27503 = G__27520;
count__27500_27504 = G__27521;
i__27501_27505 = G__27522;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27496,map__27496__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27496,map__27496__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1453769944803