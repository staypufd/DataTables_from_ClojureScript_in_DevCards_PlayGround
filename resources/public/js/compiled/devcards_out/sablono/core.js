// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__22190__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__22189 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__22189,(0),null);
var body = cljs.core.nthnext.call(null,vec__22189,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__22190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22191__i = 0, G__22191__a = new Array(arguments.length -  0);
while (G__22191__i < G__22191__a.length) {G__22191__a[G__22191__i] = arguments[G__22191__i + 0]; ++G__22191__i;}
  args = new cljs.core.IndexedSeq(G__22191__a,0);
} 
return G__22190__delegate.call(this,args);};
G__22190.cljs$lang$maxFixedArity = 0;
G__22190.cljs$lang$applyTo = (function (arglist__22192){
var args = cljs.core.seq(arglist__22192);
return G__22190__delegate(args);
});
G__22190.cljs$core$IFn$_invoke$arity$variadic = G__22190__delegate;
return G__22190;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17598__auto__ = (function sablono$core$update_arglists_$_iter__22197(s__22198){
return (new cljs.core.LazySeq(null,(function (){
var s__22198__$1 = s__22198;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22198__$1);
if(temp__4425__auto__){
var s__22198__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22198__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__22198__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__22200 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__22199 = (0);
while(true){
if((i__22199 < size__17597__auto__)){
var args = cljs.core._nth.call(null,c__17596__auto__,i__22199);
cljs.core.chunk_append.call(null,b__22200,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__22201 = (i__22199 + (1));
i__22199 = G__22201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22200),sablono$core$update_arglists_$_iter__22197.call(null,cljs.core.chunk_rest.call(null,s__22198__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22200),null);
}
} else {
var args = cljs.core.first.call(null,s__22198__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__22197.call(null,cljs.core.rest.call(null,s__22198__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17891__auto__ = [];
var len__17884__auto___22207 = arguments.length;
var i__17885__auto___22208 = (0);
while(true){
if((i__17885__auto___22208 < len__17884__auto___22207)){
args__17891__auto__.push((arguments[i__17885__auto___22208]));

var G__22209 = (i__17885__auto___22208 + (1));
i__17885__auto___22208 = G__22209;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17598__auto__ = (function sablono$core$iter__22203(s__22204){
return (new cljs.core.LazySeq(null,(function (){
var s__22204__$1 = s__22204;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22204__$1);
if(temp__4425__auto__){
var s__22204__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22204__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__22204__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__22206 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__22205 = (0);
while(true){
if((i__22205 < size__17597__auto__)){
var style = cljs.core._nth.call(null,c__17596__auto__,i__22205);
cljs.core.chunk_append.call(null,b__22206,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__22210 = (i__22205 + (1));
i__22205 = G__22210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22206),sablono$core$iter__22203.call(null,cljs.core.chunk_rest.call(null,s__22204__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22206),null);
}
} else {
var style = cljs.core.first.call(null,s__22204__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__22203.call(null,cljs.core.rest.call(null,s__22204__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq22202){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22202));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to22211 = (function sablono$core$link_to22211(var_args){
var args__17891__auto__ = [];
var len__17884__auto___22214 = arguments.length;
var i__17885__auto___22215 = (0);
while(true){
if((i__17885__auto___22215 < len__17884__auto___22214)){
args__17891__auto__.push((arguments[i__17885__auto___22215]));

var G__22216 = (i__17885__auto___22215 + (1));
i__17885__auto___22215 = G__22216;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.link_to22211.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.link_to22211.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to22211.cljs$lang$maxFixedArity = (1);

sablono.core.link_to22211.cljs$lang$applyTo = (function (seq22212){
var G__22213 = cljs.core.first.call(null,seq22212);
var seq22212__$1 = cljs.core.next.call(null,seq22212);
return sablono.core.link_to22211.cljs$core$IFn$_invoke$arity$variadic(G__22213,seq22212__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to22211);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to22217 = (function sablono$core$mail_to22217(var_args){
var args__17891__auto__ = [];
var len__17884__auto___22222 = arguments.length;
var i__17885__auto___22223 = (0);
while(true){
if((i__17885__auto___22223 < len__17884__auto___22222)){
args__17891__auto__.push((arguments[i__17885__auto___22223]));

var G__22224 = (i__17885__auto___22223 + (1));
i__17885__auto___22223 = G__22224;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.mail_to22217.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.mail_to22217.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__22220){
var vec__22221 = p__22220;
var content = cljs.core.nth.call(null,vec__22221,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16826__auto__ = content;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to22217.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to22217.cljs$lang$applyTo = (function (seq22218){
var G__22219 = cljs.core.first.call(null,seq22218);
var seq22218__$1 = cljs.core.next.call(null,seq22218);
return sablono.core.mail_to22217.cljs$core$IFn$_invoke$arity$variadic(G__22219,seq22218__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to22217);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list22225 = (function sablono$core$unordered_list22225(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17598__auto__ = (function sablono$core$unordered_list22225_$_iter__22230(s__22231){
return (new cljs.core.LazySeq(null,(function (){
var s__22231__$1 = s__22231;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22231__$1);
if(temp__4425__auto__){
var s__22231__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22231__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__22231__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__22233 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__22232 = (0);
while(true){
if((i__22232 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__22232);
cljs.core.chunk_append.call(null,b__22233,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22234 = (i__22232 + (1));
i__22232 = G__22234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22233),sablono$core$unordered_list22225_$_iter__22230.call(null,cljs.core.chunk_rest.call(null,s__22231__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22233),null);
}
} else {
var x = cljs.core.first.call(null,s__22231__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list22225_$_iter__22230.call(null,cljs.core.rest.call(null,s__22231__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list22225);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list22235 = (function sablono$core$ordered_list22235(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17598__auto__ = (function sablono$core$ordered_list22235_$_iter__22240(s__22241){
return (new cljs.core.LazySeq(null,(function (){
var s__22241__$1 = s__22241;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22241__$1);
if(temp__4425__auto__){
var s__22241__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22241__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__22241__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__22243 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__22242 = (0);
while(true){
if((i__22242 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__22242);
cljs.core.chunk_append.call(null,b__22243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22244 = (i__22242 + (1));
i__22242 = G__22244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22243),sablono$core$ordered_list22235_$_iter__22240.call(null,cljs.core.chunk_rest.call(null,s__22241__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22243),null);
}
} else {
var x = cljs.core.first.call(null,s__22241__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list22235_$_iter__22240.call(null,cljs.core.rest.call(null,s__22241__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list22235);
/**
 * Create an image element.
 */
sablono.core.image22245 = (function sablono$core$image22245(var_args){
var args22246 = [];
var len__17884__auto___22249 = arguments.length;
var i__17885__auto___22250 = (0);
while(true){
if((i__17885__auto___22250 < len__17884__auto___22249)){
args22246.push((arguments[i__17885__auto___22250]));

var G__22251 = (i__17885__auto___22250 + (1));
i__17885__auto___22250 = G__22251;
continue;
} else {
}
break;
}

var G__22248 = args22246.length;
switch (G__22248) {
case 1:
return sablono.core.image22245.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image22245.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22246.length)].join('')));

}
});

sablono.core.image22245.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image22245.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image22245.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image22245);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__22253_SHARP_,p2__22254_SHARP_){
return [cljs.core.str(p1__22253_SHARP_),cljs.core.str("["),cljs.core.str(p2__22254_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__22255_SHARP_,p2__22256_SHARP_){
return [cljs.core.str(p1__22255_SHARP_),cljs.core.str("-"),cljs.core.str(p2__22256_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field22257 = (function sablono$core$color_field22257(var_args){
var args22258 = [];
var len__17884__auto___22325 = arguments.length;
var i__17885__auto___22326 = (0);
while(true){
if((i__17885__auto___22326 < len__17884__auto___22325)){
args22258.push((arguments[i__17885__auto___22326]));

var G__22327 = (i__17885__auto___22326 + (1));
i__17885__auto___22326 = G__22327;
continue;
} else {
}
break;
}

var G__22260 = args22258.length;
switch (G__22260) {
case 1:
return sablono.core.color_field22257.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field22257.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22258.length)].join('')));

}
});

sablono.core.color_field22257.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.color_field22257.call(null,name__19415__auto__,null);
});

sablono.core.color_field22257.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.color_field22257.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field22257);

/**
 * Creates a date input field.
 */
sablono.core.date_field22261 = (function sablono$core$date_field22261(var_args){
var args22262 = [];
var len__17884__auto___22329 = arguments.length;
var i__17885__auto___22330 = (0);
while(true){
if((i__17885__auto___22330 < len__17884__auto___22329)){
args22262.push((arguments[i__17885__auto___22330]));

var G__22331 = (i__17885__auto___22330 + (1));
i__17885__auto___22330 = G__22331;
continue;
} else {
}
break;
}

var G__22264 = args22262.length;
switch (G__22264) {
case 1:
return sablono.core.date_field22261.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field22261.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22262.length)].join('')));

}
});

sablono.core.date_field22261.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.date_field22261.call(null,name__19415__auto__,null);
});

sablono.core.date_field22261.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.date_field22261.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field22261);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field22265 = (function sablono$core$datetime_field22265(var_args){
var args22266 = [];
var len__17884__auto___22333 = arguments.length;
var i__17885__auto___22334 = (0);
while(true){
if((i__17885__auto___22334 < len__17884__auto___22333)){
args22266.push((arguments[i__17885__auto___22334]));

var G__22335 = (i__17885__auto___22334 + (1));
i__17885__auto___22334 = G__22335;
continue;
} else {
}
break;
}

var G__22268 = args22266.length;
switch (G__22268) {
case 1:
return sablono.core.datetime_field22265.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field22265.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22266.length)].join('')));

}
});

sablono.core.datetime_field22265.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.datetime_field22265.call(null,name__19415__auto__,null);
});

sablono.core.datetime_field22265.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.datetime_field22265.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field22265);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field22269 = (function sablono$core$datetime_local_field22269(var_args){
var args22270 = [];
var len__17884__auto___22337 = arguments.length;
var i__17885__auto___22338 = (0);
while(true){
if((i__17885__auto___22338 < len__17884__auto___22337)){
args22270.push((arguments[i__17885__auto___22338]));

var G__22339 = (i__17885__auto___22338 + (1));
i__17885__auto___22338 = G__22339;
continue;
} else {
}
break;
}

var G__22272 = args22270.length;
switch (G__22272) {
case 1:
return sablono.core.datetime_local_field22269.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field22269.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22270.length)].join('')));

}
});

sablono.core.datetime_local_field22269.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.datetime_local_field22269.call(null,name__19415__auto__,null);
});

sablono.core.datetime_local_field22269.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.datetime_local_field22269.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field22269);

/**
 * Creates a email input field.
 */
sablono.core.email_field22273 = (function sablono$core$email_field22273(var_args){
var args22274 = [];
var len__17884__auto___22341 = arguments.length;
var i__17885__auto___22342 = (0);
while(true){
if((i__17885__auto___22342 < len__17884__auto___22341)){
args22274.push((arguments[i__17885__auto___22342]));

var G__22343 = (i__17885__auto___22342 + (1));
i__17885__auto___22342 = G__22343;
continue;
} else {
}
break;
}

var G__22276 = args22274.length;
switch (G__22276) {
case 1:
return sablono.core.email_field22273.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field22273.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22274.length)].join('')));

}
});

sablono.core.email_field22273.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.email_field22273.call(null,name__19415__auto__,null);
});

sablono.core.email_field22273.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.email_field22273.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field22273);

/**
 * Creates a file input field.
 */
sablono.core.file_field22277 = (function sablono$core$file_field22277(var_args){
var args22278 = [];
var len__17884__auto___22345 = arguments.length;
var i__17885__auto___22346 = (0);
while(true){
if((i__17885__auto___22346 < len__17884__auto___22345)){
args22278.push((arguments[i__17885__auto___22346]));

var G__22347 = (i__17885__auto___22346 + (1));
i__17885__auto___22346 = G__22347;
continue;
} else {
}
break;
}

var G__22280 = args22278.length;
switch (G__22280) {
case 1:
return sablono.core.file_field22277.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field22277.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22278.length)].join('')));

}
});

sablono.core.file_field22277.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.file_field22277.call(null,name__19415__auto__,null);
});

sablono.core.file_field22277.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.file_field22277.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field22277);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field22281 = (function sablono$core$hidden_field22281(var_args){
var args22282 = [];
var len__17884__auto___22349 = arguments.length;
var i__17885__auto___22350 = (0);
while(true){
if((i__17885__auto___22350 < len__17884__auto___22349)){
args22282.push((arguments[i__17885__auto___22350]));

var G__22351 = (i__17885__auto___22350 + (1));
i__17885__auto___22350 = G__22351;
continue;
} else {
}
break;
}

var G__22284 = args22282.length;
switch (G__22284) {
case 1:
return sablono.core.hidden_field22281.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field22281.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22282.length)].join('')));

}
});

sablono.core.hidden_field22281.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.hidden_field22281.call(null,name__19415__auto__,null);
});

sablono.core.hidden_field22281.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.hidden_field22281.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22281);

/**
 * Creates a month input field.
 */
sablono.core.month_field22285 = (function sablono$core$month_field22285(var_args){
var args22286 = [];
var len__17884__auto___22353 = arguments.length;
var i__17885__auto___22354 = (0);
while(true){
if((i__17885__auto___22354 < len__17884__auto___22353)){
args22286.push((arguments[i__17885__auto___22354]));

var G__22355 = (i__17885__auto___22354 + (1));
i__17885__auto___22354 = G__22355;
continue;
} else {
}
break;
}

var G__22288 = args22286.length;
switch (G__22288) {
case 1:
return sablono.core.month_field22285.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field22285.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22286.length)].join('')));

}
});

sablono.core.month_field22285.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.month_field22285.call(null,name__19415__auto__,null);
});

sablono.core.month_field22285.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.month_field22285.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22285);

/**
 * Creates a number input field.
 */
sablono.core.number_field22289 = (function sablono$core$number_field22289(var_args){
var args22290 = [];
var len__17884__auto___22357 = arguments.length;
var i__17885__auto___22358 = (0);
while(true){
if((i__17885__auto___22358 < len__17884__auto___22357)){
args22290.push((arguments[i__17885__auto___22358]));

var G__22359 = (i__17885__auto___22358 + (1));
i__17885__auto___22358 = G__22359;
continue;
} else {
}
break;
}

var G__22292 = args22290.length;
switch (G__22292) {
case 1:
return sablono.core.number_field22289.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field22289.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22290.length)].join('')));

}
});

sablono.core.number_field22289.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.number_field22289.call(null,name__19415__auto__,null);
});

sablono.core.number_field22289.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.number_field22289.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22289);

/**
 * Creates a password input field.
 */
sablono.core.password_field22293 = (function sablono$core$password_field22293(var_args){
var args22294 = [];
var len__17884__auto___22361 = arguments.length;
var i__17885__auto___22362 = (0);
while(true){
if((i__17885__auto___22362 < len__17884__auto___22361)){
args22294.push((arguments[i__17885__auto___22362]));

var G__22363 = (i__17885__auto___22362 + (1));
i__17885__auto___22362 = G__22363;
continue;
} else {
}
break;
}

var G__22296 = args22294.length;
switch (G__22296) {
case 1:
return sablono.core.password_field22293.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field22293.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22294.length)].join('')));

}
});

sablono.core.password_field22293.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.password_field22293.call(null,name__19415__auto__,null);
});

sablono.core.password_field22293.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.password_field22293.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22293);

/**
 * Creates a range input field.
 */
sablono.core.range_field22297 = (function sablono$core$range_field22297(var_args){
var args22298 = [];
var len__17884__auto___22365 = arguments.length;
var i__17885__auto___22366 = (0);
while(true){
if((i__17885__auto___22366 < len__17884__auto___22365)){
args22298.push((arguments[i__17885__auto___22366]));

var G__22367 = (i__17885__auto___22366 + (1));
i__17885__auto___22366 = G__22367;
continue;
} else {
}
break;
}

var G__22300 = args22298.length;
switch (G__22300) {
case 1:
return sablono.core.range_field22297.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field22297.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22298.length)].join('')));

}
});

sablono.core.range_field22297.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.range_field22297.call(null,name__19415__auto__,null);
});

sablono.core.range_field22297.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.range_field22297.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22297);

/**
 * Creates a search input field.
 */
sablono.core.search_field22301 = (function sablono$core$search_field22301(var_args){
var args22302 = [];
var len__17884__auto___22369 = arguments.length;
var i__17885__auto___22370 = (0);
while(true){
if((i__17885__auto___22370 < len__17884__auto___22369)){
args22302.push((arguments[i__17885__auto___22370]));

var G__22371 = (i__17885__auto___22370 + (1));
i__17885__auto___22370 = G__22371;
continue;
} else {
}
break;
}

var G__22304 = args22302.length;
switch (G__22304) {
case 1:
return sablono.core.search_field22301.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field22301.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22302.length)].join('')));

}
});

sablono.core.search_field22301.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.search_field22301.call(null,name__19415__auto__,null);
});

sablono.core.search_field22301.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.search_field22301.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22301);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field22305 = (function sablono$core$tel_field22305(var_args){
var args22306 = [];
var len__17884__auto___22373 = arguments.length;
var i__17885__auto___22374 = (0);
while(true){
if((i__17885__auto___22374 < len__17884__auto___22373)){
args22306.push((arguments[i__17885__auto___22374]));

var G__22375 = (i__17885__auto___22374 + (1));
i__17885__auto___22374 = G__22375;
continue;
} else {
}
break;
}

var G__22308 = args22306.length;
switch (G__22308) {
case 1:
return sablono.core.tel_field22305.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field22305.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22306.length)].join('')));

}
});

sablono.core.tel_field22305.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.tel_field22305.call(null,name__19415__auto__,null);
});

sablono.core.tel_field22305.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.tel_field22305.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22305);

/**
 * Creates a text input field.
 */
sablono.core.text_field22309 = (function sablono$core$text_field22309(var_args){
var args22310 = [];
var len__17884__auto___22377 = arguments.length;
var i__17885__auto___22378 = (0);
while(true){
if((i__17885__auto___22378 < len__17884__auto___22377)){
args22310.push((arguments[i__17885__auto___22378]));

var G__22379 = (i__17885__auto___22378 + (1));
i__17885__auto___22378 = G__22379;
continue;
} else {
}
break;
}

var G__22312 = args22310.length;
switch (G__22312) {
case 1:
return sablono.core.text_field22309.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field22309.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22310.length)].join('')));

}
});

sablono.core.text_field22309.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.text_field22309.call(null,name__19415__auto__,null);
});

sablono.core.text_field22309.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.text_field22309.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22309);

/**
 * Creates a time input field.
 */
sablono.core.time_field22313 = (function sablono$core$time_field22313(var_args){
var args22314 = [];
var len__17884__auto___22381 = arguments.length;
var i__17885__auto___22382 = (0);
while(true){
if((i__17885__auto___22382 < len__17884__auto___22381)){
args22314.push((arguments[i__17885__auto___22382]));

var G__22383 = (i__17885__auto___22382 + (1));
i__17885__auto___22382 = G__22383;
continue;
} else {
}
break;
}

var G__22316 = args22314.length;
switch (G__22316) {
case 1:
return sablono.core.time_field22313.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field22313.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22314.length)].join('')));

}
});

sablono.core.time_field22313.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.time_field22313.call(null,name__19415__auto__,null);
});

sablono.core.time_field22313.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.time_field22313.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22313);

/**
 * Creates a url input field.
 */
sablono.core.url_field22317 = (function sablono$core$url_field22317(var_args){
var args22318 = [];
var len__17884__auto___22385 = arguments.length;
var i__17885__auto___22386 = (0);
while(true){
if((i__17885__auto___22386 < len__17884__auto___22385)){
args22318.push((arguments[i__17885__auto___22386]));

var G__22387 = (i__17885__auto___22386 + (1));
i__17885__auto___22386 = G__22387;
continue;
} else {
}
break;
}

var G__22320 = args22318.length;
switch (G__22320) {
case 1:
return sablono.core.url_field22317.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field22317.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22318.length)].join('')));

}
});

sablono.core.url_field22317.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.url_field22317.call(null,name__19415__auto__,null);
});

sablono.core.url_field22317.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.url_field22317.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22317);

/**
 * Creates a week input field.
 */
sablono.core.week_field22321 = (function sablono$core$week_field22321(var_args){
var args22322 = [];
var len__17884__auto___22389 = arguments.length;
var i__17885__auto___22390 = (0);
while(true){
if((i__17885__auto___22390 < len__17884__auto___22389)){
args22322.push((arguments[i__17885__auto___22390]));

var G__22391 = (i__17885__auto___22390 + (1));
i__17885__auto___22390 = G__22391;
continue;
} else {
}
break;
}

var G__22324 = args22322.length;
switch (G__22324) {
case 1:
return sablono.core.week_field22321.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field22321.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22322.length)].join('')));

}
});

sablono.core.week_field22321.cljs$core$IFn$_invoke$arity$1 = (function (name__19415__auto__){
return sablono.core.week_field22321.call(null,name__19415__auto__,null);
});

sablono.core.week_field22321.cljs$core$IFn$_invoke$arity$2 = (function (name__19415__auto__,value__19416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19415__auto__,value__19416__auto__);
});

sablono.core.week_field22321.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22321);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box22393 = (function sablono$core$check_box22393(var_args){
var args22394 = [];
var len__17884__auto___22397 = arguments.length;
var i__17885__auto___22398 = (0);
while(true){
if((i__17885__auto___22398 < len__17884__auto___22397)){
args22394.push((arguments[i__17885__auto___22398]));

var G__22399 = (i__17885__auto___22398 + (1));
i__17885__auto___22398 = G__22399;
continue;
} else {
}
break;
}

var G__22396 = args22394.length;
switch (G__22396) {
case 1:
return sablono.core.check_box22393.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box22393.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box22393.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22394.length)].join('')));

}
});

sablono.core.check_box22393.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box22393.call(null,name,null);
});

sablono.core.check_box22393.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box22393.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box22393.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box22393.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22393);
/**
 * Creates a radio button.
 */
sablono.core.radio_button22401 = (function sablono$core$radio_button22401(var_args){
var args22402 = [];
var len__17884__auto___22405 = arguments.length;
var i__17885__auto___22406 = (0);
while(true){
if((i__17885__auto___22406 < len__17884__auto___22405)){
args22402.push((arguments[i__17885__auto___22406]));

var G__22407 = (i__17885__auto___22406 + (1));
i__17885__auto___22406 = G__22407;
continue;
} else {
}
break;
}

var G__22404 = args22402.length;
switch (G__22404) {
case 1:
return sablono.core.radio_button22401.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button22401.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button22401.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22402.length)].join('')));

}
});

sablono.core.radio_button22401.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button22401.call(null,group,null);
});

sablono.core.radio_button22401.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button22401.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button22401.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button22401.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22401);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options22409 = (function sablono$core$select_options22409(coll){
var iter__17598__auto__ = (function sablono$core$select_options22409_$_iter__22418(s__22419){
return (new cljs.core.LazySeq(null,(function (){
var s__22419__$1 = s__22419;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22419__$1);
if(temp__4425__auto__){
var s__22419__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22419__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__22419__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__22421 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__22420 = (0);
while(true){
if((i__22420 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__22420);
cljs.core.chunk_append.call(null,b__22421,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22424 = x;
var text = cljs.core.nth.call(null,vec__22424,(0),null);
var val = cljs.core.nth.call(null,vec__22424,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22424,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options22409.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__22426 = (i__22420 + (1));
i__22420 = G__22426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22421),sablono$core$select_options22409_$_iter__22418.call(null,cljs.core.chunk_rest.call(null,s__22419__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22421),null);
}
} else {
var x = cljs.core.first.call(null,s__22419__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22425 = x;
var text = cljs.core.nth.call(null,vec__22425,(0),null);
var val = cljs.core.nth.call(null,vec__22425,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22425,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options22409.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options22409_$_iter__22418.call(null,cljs.core.rest.call(null,s__22419__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22409);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down22427 = (function sablono$core$drop_down22427(var_args){
var args22428 = [];
var len__17884__auto___22431 = arguments.length;
var i__17885__auto___22432 = (0);
while(true){
if((i__17885__auto___22432 < len__17884__auto___22431)){
args22428.push((arguments[i__17885__auto___22432]));

var G__22433 = (i__17885__auto___22432 + (1));
i__17885__auto___22432 = G__22433;
continue;
} else {
}
break;
}

var G__22430 = args22428.length;
switch (G__22430) {
case 2:
return sablono.core.drop_down22427.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down22427.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22428.length)].join('')));

}
});

sablono.core.drop_down22427.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down22427.call(null,name,options,null);
});

sablono.core.drop_down22427.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down22427.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22427);
/**
 * Creates a text area element.
 */
sablono.core.text_area22435 = (function sablono$core$text_area22435(var_args){
var args22436 = [];
var len__17884__auto___22439 = arguments.length;
var i__17885__auto___22440 = (0);
while(true){
if((i__17885__auto___22440 < len__17884__auto___22439)){
args22436.push((arguments[i__17885__auto___22440]));

var G__22441 = (i__17885__auto___22440 + (1));
i__17885__auto___22440 = G__22441;
continue;
} else {
}
break;
}

var G__22438 = args22436.length;
switch (G__22438) {
case 1:
return sablono.core.text_area22435.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area22435.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22436.length)].join('')));

}
});

sablono.core.text_area22435.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area22435.call(null,name,null);
});

sablono.core.text_area22435.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area22435.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22435);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label22443 = (function sablono$core$label22443(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22443);
/**
 * Creates a submit button.
 */
sablono.core.submit_button22444 = (function sablono$core$submit_button22444(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22444);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button22445 = (function sablono$core$reset_button22445(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22445);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to22446 = (function sablono$core$form_to22446(var_args){
var args__17891__auto__ = [];
var len__17884__auto___22451 = arguments.length;
var i__17885__auto___22452 = (0);
while(true){
if((i__17885__auto___22452 < len__17884__auto___22451)){
args__17891__auto__.push((arguments[i__17885__auto___22452]));

var G__22453 = (i__17885__auto___22452 + (1));
i__17885__auto___22452 = G__22453;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.form_to22446.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.form_to22446.cljs$core$IFn$_invoke$arity$variadic = (function (p__22449,body){
var vec__22450 = p__22449;
var method = cljs.core.nth.call(null,vec__22450,(0),null);
var action = cljs.core.nth.call(null,vec__22450,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to22446.cljs$lang$maxFixedArity = (1);

sablono.core.form_to22446.cljs$lang$applyTo = (function (seq22447){
var G__22448 = cljs.core.first.call(null,seq22447);
var seq22447__$1 = cljs.core.next.call(null,seq22447);
return sablono.core.form_to22446.cljs$core$IFn$_invoke$arity$variadic(G__22448,seq22447__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22446);

//# sourceMappingURL=core.js.map?rel=1453769942159