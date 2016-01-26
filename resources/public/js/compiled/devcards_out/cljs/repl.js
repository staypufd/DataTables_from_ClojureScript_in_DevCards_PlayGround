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
var seq__27539_27553 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27540_27554 = null;
var count__27541_27555 = (0);
var i__27542_27556 = (0);
while(true){
if((i__27542_27556 < count__27541_27555)){
var f_27557 = cljs.core._nth.call(null,chunk__27540_27554,i__27542_27556);
cljs.core.println.call(null,"  ",f_27557);

var G__27558 = seq__27539_27553;
var G__27559 = chunk__27540_27554;
var G__27560 = count__27541_27555;
var G__27561 = (i__27542_27556 + (1));
seq__27539_27553 = G__27558;
chunk__27540_27554 = G__27559;
count__27541_27555 = G__27560;
i__27542_27556 = G__27561;
continue;
} else {
var temp__4425__auto___27562 = cljs.core.seq.call(null,seq__27539_27553);
if(temp__4425__auto___27562){
var seq__27539_27563__$1 = temp__4425__auto___27562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27539_27563__$1)){
var c__17629__auto___27564 = cljs.core.chunk_first.call(null,seq__27539_27563__$1);
var G__27565 = cljs.core.chunk_rest.call(null,seq__27539_27563__$1);
var G__27566 = c__17629__auto___27564;
var G__27567 = cljs.core.count.call(null,c__17629__auto___27564);
var G__27568 = (0);
seq__27539_27553 = G__27565;
chunk__27540_27554 = G__27566;
count__27541_27555 = G__27567;
i__27542_27556 = G__27568;
continue;
} else {
var f_27569 = cljs.core.first.call(null,seq__27539_27563__$1);
cljs.core.println.call(null,"  ",f_27569);

var G__27570 = cljs.core.next.call(null,seq__27539_27563__$1);
var G__27571 = null;
var G__27572 = (0);
var G__27573 = (0);
seq__27539_27553 = G__27570;
chunk__27540_27554 = G__27571;
count__27541_27555 = G__27572;
i__27542_27556 = G__27573;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27574 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27574);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27574)))?cljs.core.second.call(null,arglists_27574):arglists_27574));
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
var seq__27543 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27544 = null;
var count__27545 = (0);
var i__27546 = (0);
while(true){
if((i__27546 < count__27545)){
var vec__27547 = cljs.core._nth.call(null,chunk__27544,i__27546);
var name = cljs.core.nth.call(null,vec__27547,(0),null);
var map__27548 = cljs.core.nth.call(null,vec__27547,(1),null);
var map__27548__$1 = ((((!((map__27548 == null)))?((((map__27548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27548):map__27548);
var doc = cljs.core.get.call(null,map__27548__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27548__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27575 = seq__27543;
var G__27576 = chunk__27544;
var G__27577 = count__27545;
var G__27578 = (i__27546 + (1));
seq__27543 = G__27575;
chunk__27544 = G__27576;
count__27545 = G__27577;
i__27546 = G__27578;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27543);
if(temp__4425__auto__){
var seq__27543__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27543__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__27543__$1);
var G__27579 = cljs.core.chunk_rest.call(null,seq__27543__$1);
var G__27580 = c__17629__auto__;
var G__27581 = cljs.core.count.call(null,c__17629__auto__);
var G__27582 = (0);
seq__27543 = G__27579;
chunk__27544 = G__27580;
count__27545 = G__27581;
i__27546 = G__27582;
continue;
} else {
var vec__27550 = cljs.core.first.call(null,seq__27543__$1);
var name = cljs.core.nth.call(null,vec__27550,(0),null);
var map__27551 = cljs.core.nth.call(null,vec__27550,(1),null);
var map__27551__$1 = ((((!((map__27551 == null)))?((((map__27551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27551):map__27551);
var doc = cljs.core.get.call(null,map__27551__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27551__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27583 = cljs.core.next.call(null,seq__27543__$1);
var G__27584 = null;
var G__27585 = (0);
var G__27586 = (0);
seq__27543 = G__27583;
chunk__27544 = G__27584;
count__27545 = G__27585;
i__27546 = G__27586;
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

//# sourceMappingURL=repl.js.map?rel=1453769944853