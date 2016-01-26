// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26398_26412 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26399_26413 = null;
var count__26400_26414 = (0);
var i__26401_26415 = (0);
while(true){
if((i__26401_26415 < count__26400_26414)){
var f_26416 = cljs.core._nth.call(null,chunk__26399_26413,i__26401_26415);
cljs.core.println.call(null,"  ",f_26416);

var G__26417 = seq__26398_26412;
var G__26418 = chunk__26399_26413;
var G__26419 = count__26400_26414;
var G__26420 = (i__26401_26415 + (1));
seq__26398_26412 = G__26417;
chunk__26399_26413 = G__26418;
count__26400_26414 = G__26419;
i__26401_26415 = G__26420;
continue;
} else {
var temp__4425__auto___26421 = cljs.core.seq.call(null,seq__26398_26412);
if(temp__4425__auto___26421){
var seq__26398_26422__$1 = temp__4425__auto___26421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26398_26422__$1)){
var c__17629__auto___26423 = cljs.core.chunk_first.call(null,seq__26398_26422__$1);
var G__26424 = cljs.core.chunk_rest.call(null,seq__26398_26422__$1);
var G__26425 = c__17629__auto___26423;
var G__26426 = cljs.core.count.call(null,c__17629__auto___26423);
var G__26427 = (0);
seq__26398_26412 = G__26424;
chunk__26399_26413 = G__26425;
count__26400_26414 = G__26426;
i__26401_26415 = G__26427;
continue;
} else {
var f_26428 = cljs.core.first.call(null,seq__26398_26422__$1);
cljs.core.println.call(null,"  ",f_26428);

var G__26429 = cljs.core.next.call(null,seq__26398_26422__$1);
var G__26430 = null;
var G__26431 = (0);
var G__26432 = (0);
seq__26398_26412 = G__26429;
chunk__26399_26413 = G__26430;
count__26400_26414 = G__26431;
i__26401_26415 = G__26432;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26433 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26433);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26433)))?cljs.core.second.call(null,arglists_26433):arglists_26433));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26402 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26403 = null;
var count__26404 = (0);
var i__26405 = (0);
while(true){
if((i__26405 < count__26404)){
var vec__26406 = cljs.core._nth.call(null,chunk__26403,i__26405);
var name = cljs.core.nth.call(null,vec__26406,(0),null);
var map__26407 = cljs.core.nth.call(null,vec__26406,(1),null);
var map__26407__$1 = ((((!((map__26407 == null)))?((((map__26407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26407):map__26407);
var doc = cljs.core.get.call(null,map__26407__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26407__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26434 = seq__26402;
var G__26435 = chunk__26403;
var G__26436 = count__26404;
var G__26437 = (i__26405 + (1));
seq__26402 = G__26434;
chunk__26403 = G__26435;
count__26404 = G__26436;
i__26405 = G__26437;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26402);
if(temp__4425__auto__){
var seq__26402__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26402__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__26402__$1);
var G__26438 = cljs.core.chunk_rest.call(null,seq__26402__$1);
var G__26439 = c__17629__auto__;
var G__26440 = cljs.core.count.call(null,c__17629__auto__);
var G__26441 = (0);
seq__26402 = G__26438;
chunk__26403 = G__26439;
count__26404 = G__26440;
i__26405 = G__26441;
continue;
} else {
var vec__26409 = cljs.core.first.call(null,seq__26402__$1);
var name = cljs.core.nth.call(null,vec__26409,(0),null);
var map__26410 = cljs.core.nth.call(null,vec__26409,(1),null);
var map__26410__$1 = ((((!((map__26410 == null)))?((((map__26410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26410):map__26410);
var doc = cljs.core.get.call(null,map__26410__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26410__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26442 = cljs.core.next.call(null,seq__26402__$1);
var G__26443 = null;
var G__26444 = (0);
var G__26445 = (0);
seq__26402 = G__26442;
chunk__26403 = G__26443;
count__26404 = G__26444;
i__26405 = G__26445;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1454020205270