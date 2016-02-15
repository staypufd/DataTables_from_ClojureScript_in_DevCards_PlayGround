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
var seq__27130_27144 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27131_27145 = null;
var count__27132_27146 = (0);
var i__27133_27147 = (0);
while(true){
if((i__27133_27147 < count__27132_27146)){
var f_27148 = cljs.core._nth.call(null,chunk__27131_27145,i__27133_27147);
cljs.core.println.call(null,"  ",f_27148);

var G__27149 = seq__27130_27144;
var G__27150 = chunk__27131_27145;
var G__27151 = count__27132_27146;
var G__27152 = (i__27133_27147 + (1));
seq__27130_27144 = G__27149;
chunk__27131_27145 = G__27150;
count__27132_27146 = G__27151;
i__27133_27147 = G__27152;
continue;
} else {
var temp__4425__auto___27153 = cljs.core.seq.call(null,seq__27130_27144);
if(temp__4425__auto___27153){
var seq__27130_27154__$1 = temp__4425__auto___27153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27130_27154__$1)){
var c__17629__auto___27155 = cljs.core.chunk_first.call(null,seq__27130_27154__$1);
var G__27156 = cljs.core.chunk_rest.call(null,seq__27130_27154__$1);
var G__27157 = c__17629__auto___27155;
var G__27158 = cljs.core.count.call(null,c__17629__auto___27155);
var G__27159 = (0);
seq__27130_27144 = G__27156;
chunk__27131_27145 = G__27157;
count__27132_27146 = G__27158;
i__27133_27147 = G__27159;
continue;
} else {
var f_27160 = cljs.core.first.call(null,seq__27130_27154__$1);
cljs.core.println.call(null,"  ",f_27160);

var G__27161 = cljs.core.next.call(null,seq__27130_27154__$1);
var G__27162 = null;
var G__27163 = (0);
var G__27164 = (0);
seq__27130_27144 = G__27161;
chunk__27131_27145 = G__27162;
count__27132_27146 = G__27163;
i__27133_27147 = G__27164;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27165 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27165);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27165)))?cljs.core.second.call(null,arglists_27165):arglists_27165));
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
var seq__27134 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27135 = null;
var count__27136 = (0);
var i__27137 = (0);
while(true){
if((i__27137 < count__27136)){
var vec__27138 = cljs.core._nth.call(null,chunk__27135,i__27137);
var name = cljs.core.nth.call(null,vec__27138,(0),null);
var map__27139 = cljs.core.nth.call(null,vec__27138,(1),null);
var map__27139__$1 = ((((!((map__27139 == null)))?((((map__27139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27139):map__27139);
var doc = cljs.core.get.call(null,map__27139__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27139__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27166 = seq__27134;
var G__27167 = chunk__27135;
var G__27168 = count__27136;
var G__27169 = (i__27137 + (1));
seq__27134 = G__27166;
chunk__27135 = G__27167;
count__27136 = G__27168;
i__27137 = G__27169;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27134);
if(temp__4425__auto__){
var seq__27134__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27134__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__27134__$1);
var G__27170 = cljs.core.chunk_rest.call(null,seq__27134__$1);
var G__27171 = c__17629__auto__;
var G__27172 = cljs.core.count.call(null,c__17629__auto__);
var G__27173 = (0);
seq__27134 = G__27170;
chunk__27135 = G__27171;
count__27136 = G__27172;
i__27137 = G__27173;
continue;
} else {
var vec__27141 = cljs.core.first.call(null,seq__27134__$1);
var name = cljs.core.nth.call(null,vec__27141,(0),null);
var map__27142 = cljs.core.nth.call(null,vec__27141,(1),null);
var map__27142__$1 = ((((!((map__27142 == null)))?((((map__27142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27142):map__27142);
var doc = cljs.core.get.call(null,map__27142__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27142__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27174 = cljs.core.next.call(null,seq__27134__$1);
var G__27175 = null;
var G__27176 = (0);
var G__27177 = (0);
seq__27134 = G__27174;
chunk__27135 = G__27175;
count__27136 = G__27176;
i__27137 = G__27177;
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

//# sourceMappingURL=repl.js.map?rel=1454026303832