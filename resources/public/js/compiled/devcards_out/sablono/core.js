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
var G__19667__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__19666 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__19666,(0),null);
var body = cljs.core.nthnext.call(null,vec__19666,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__19667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19668__i = 0, G__19668__a = new Array(arguments.length -  0);
while (G__19668__i < G__19668__a.length) {G__19668__a[G__19668__i] = arguments[G__19668__i + 0]; ++G__19668__i;}
  args = new cljs.core.IndexedSeq(G__19668__a,0);
} 
return G__19667__delegate.call(this,args);};
G__19667.cljs$lang$maxFixedArity = 0;
G__19667.cljs$lang$applyTo = (function (arglist__19669){
var args = cljs.core.seq(arglist__19669);
return G__19667__delegate(args);
});
G__19667.cljs$core$IFn$_invoke$arity$variadic = G__19667__delegate;
return G__19667;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17598__auto__ = (function sablono$core$update_arglists_$_iter__19674(s__19675){
return (new cljs.core.LazySeq(null,(function (){
var s__19675__$1 = s__19675;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19675__$1);
if(temp__4425__auto__){
var s__19675__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19675__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__19675__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__19677 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__19676 = (0);
while(true){
if((i__19676 < size__17597__auto__)){
var args = cljs.core._nth.call(null,c__17596__auto__,i__19676);
cljs.core.chunk_append.call(null,b__19677,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__19678 = (i__19676 + (1));
i__19676 = G__19678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19677),sablono$core$update_arglists_$_iter__19674.call(null,cljs.core.chunk_rest.call(null,s__19675__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19677),null);
}
} else {
var args = cljs.core.first.call(null,s__19675__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__19674.call(null,cljs.core.rest.call(null,s__19675__$2)));
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
var len__17884__auto___19684 = arguments.length;
var i__17885__auto___19685 = (0);
while(true){
if((i__17885__auto___19685 < len__17884__auto___19684)){
args__17891__auto__.push((arguments[i__17885__auto___19685]));

var G__19686 = (i__17885__auto___19685 + (1));
i__17885__auto___19685 = G__19686;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17598__auto__ = (function sablono$core$iter__19680(s__19681){
return (new cljs.core.LazySeq(null,(function (){
var s__19681__$1 = s__19681;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19681__$1);
if(temp__4425__auto__){
var s__19681__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19681__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__19681__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__19683 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__19682 = (0);
while(true){
if((i__19682 < size__17597__auto__)){
var style = cljs.core._nth.call(null,c__17596__auto__,i__19682);
cljs.core.chunk_append.call(null,b__19683,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__19687 = (i__19682 + (1));
i__19682 = G__19687;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19683),sablono$core$iter__19680.call(null,cljs.core.chunk_rest.call(null,s__19681__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19683),null);
}
} else {
var style = cljs.core.first.call(null,s__19681__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__19680.call(null,cljs.core.rest.call(null,s__19681__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq19679){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19679));
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
sablono.core.link_to19688 = (function sablono$core$link_to19688(var_args){
var args__17891__auto__ = [];
var len__17884__auto___19691 = arguments.length;
var i__17885__auto___19692 = (0);
while(true){
if((i__17885__auto___19692 < len__17884__auto___19691)){
args__17891__auto__.push((arguments[i__17885__auto___19692]));

var G__19693 = (i__17885__auto___19692 + (1));
i__17885__auto___19692 = G__19693;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.link_to19688.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.link_to19688.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to19688.cljs$lang$maxFixedArity = (1);

sablono.core.link_to19688.cljs$lang$applyTo = (function (seq19689){
var G__19690 = cljs.core.first.call(null,seq19689);
var seq19689__$1 = cljs.core.next.call(null,seq19689);
return sablono.core.link_to19688.cljs$core$IFn$_invoke$arity$variadic(G__19690,seq19689__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to19688);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to19694 = (function sablono$core$mail_to19694(var_args){
var args__17891__auto__ = [];
var len__17884__auto___19699 = arguments.length;
var i__17885__auto___19700 = (0);
while(true){
if((i__17885__auto___19700 < len__17884__auto___19699)){
args__17891__auto__.push((arguments[i__17885__auto___19700]));

var G__19701 = (i__17885__auto___19700 + (1));
i__17885__auto___19700 = G__19701;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.mail_to19694.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.mail_to19694.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__19697){
var vec__19698 = p__19697;
var content = cljs.core.nth.call(null,vec__19698,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16826__auto__ = content;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to19694.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to19694.cljs$lang$applyTo = (function (seq19695){
var G__19696 = cljs.core.first.call(null,seq19695);
var seq19695__$1 = cljs.core.next.call(null,seq19695);
return sablono.core.mail_to19694.cljs$core$IFn$_invoke$arity$variadic(G__19696,seq19695__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to19694);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list19702 = (function sablono$core$unordered_list19702(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17598__auto__ = (function sablono$core$unordered_list19702_$_iter__19707(s__19708){
return (new cljs.core.LazySeq(null,(function (){
var s__19708__$1 = s__19708;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19708__$1);
if(temp__4425__auto__){
var s__19708__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19708__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__19708__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__19710 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__19709 = (0);
while(true){
if((i__19709 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__19709);
cljs.core.chunk_append.call(null,b__19710,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__19711 = (i__19709 + (1));
i__19709 = G__19711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19710),sablono$core$unordered_list19702_$_iter__19707.call(null,cljs.core.chunk_rest.call(null,s__19708__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19710),null);
}
} else {
var x = cljs.core.first.call(null,s__19708__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list19702_$_iter__19707.call(null,cljs.core.rest.call(null,s__19708__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list19702);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list19712 = (function sablono$core$ordered_list19712(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17598__auto__ = (function sablono$core$ordered_list19712_$_iter__19717(s__19718){
return (new cljs.core.LazySeq(null,(function (){
var s__19718__$1 = s__19718;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19718__$1);
if(temp__4425__auto__){
var s__19718__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19718__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__19718__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__19720 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__19719 = (0);
while(true){
if((i__19719 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__19719);
cljs.core.chunk_append.call(null,b__19720,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__19721 = (i__19719 + (1));
i__19719 = G__19721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19720),sablono$core$ordered_list19712_$_iter__19717.call(null,cljs.core.chunk_rest.call(null,s__19718__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19720),null);
}
} else {
var x = cljs.core.first.call(null,s__19718__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list19712_$_iter__19717.call(null,cljs.core.rest.call(null,s__19718__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list19712);
/**
 * Create an image element.
 */
sablono.core.image19722 = (function sablono$core$image19722(var_args){
var args19723 = [];
var len__17884__auto___19726 = arguments.length;
var i__17885__auto___19727 = (0);
while(true){
if((i__17885__auto___19727 < len__17884__auto___19726)){
args19723.push((arguments[i__17885__auto___19727]));

var G__19728 = (i__17885__auto___19727 + (1));
i__17885__auto___19727 = G__19728;
continue;
} else {
}
break;
}

var G__19725 = args19723.length;
switch (G__19725) {
case 1:
return sablono.core.image19722.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image19722.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19723.length)].join('')));

}
});

sablono.core.image19722.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image19722.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image19722.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image19722);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__19730_SHARP_,p2__19731_SHARP_){
return [cljs.core.str(p1__19730_SHARP_),cljs.core.str("["),cljs.core.str(p2__19731_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__19732_SHARP_,p2__19733_SHARP_){
return [cljs.core.str(p1__19732_SHARP_),cljs.core.str("-"),cljs.core.str(p2__19733_SHARP_)].join('');
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
sablono.core.color_field19734 = (function sablono$core$color_field19734(var_args){
var args19735 = [];
var len__17884__auto___19802 = arguments.length;
var i__17885__auto___19803 = (0);
while(true){
if((i__17885__auto___19803 < len__17884__auto___19802)){
args19735.push((arguments[i__17885__auto___19803]));

var G__19804 = (i__17885__auto___19803 + (1));
i__17885__auto___19803 = G__19804;
continue;
} else {
}
break;
}

var G__19737 = args19735.length;
switch (G__19737) {
case 1:
return sablono.core.color_field19734.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field19734.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19735.length)].join('')));

}
});

sablono.core.color_field19734.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.color_field19734.call(null,name__19655__auto__,null);
});

sablono.core.color_field19734.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.color_field19734.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field19734);

/**
 * Creates a date input field.
 */
sablono.core.date_field19738 = (function sablono$core$date_field19738(var_args){
var args19739 = [];
var len__17884__auto___19806 = arguments.length;
var i__17885__auto___19807 = (0);
while(true){
if((i__17885__auto___19807 < len__17884__auto___19806)){
args19739.push((arguments[i__17885__auto___19807]));

var G__19808 = (i__17885__auto___19807 + (1));
i__17885__auto___19807 = G__19808;
continue;
} else {
}
break;
}

var G__19741 = args19739.length;
switch (G__19741) {
case 1:
return sablono.core.date_field19738.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field19738.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19739.length)].join('')));

}
});

sablono.core.date_field19738.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.date_field19738.call(null,name__19655__auto__,null);
});

sablono.core.date_field19738.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.date_field19738.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field19738);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field19742 = (function sablono$core$datetime_field19742(var_args){
var args19743 = [];
var len__17884__auto___19810 = arguments.length;
var i__17885__auto___19811 = (0);
while(true){
if((i__17885__auto___19811 < len__17884__auto___19810)){
args19743.push((arguments[i__17885__auto___19811]));

var G__19812 = (i__17885__auto___19811 + (1));
i__17885__auto___19811 = G__19812;
continue;
} else {
}
break;
}

var G__19745 = args19743.length;
switch (G__19745) {
case 1:
return sablono.core.datetime_field19742.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field19742.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19743.length)].join('')));

}
});

sablono.core.datetime_field19742.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.datetime_field19742.call(null,name__19655__auto__,null);
});

sablono.core.datetime_field19742.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.datetime_field19742.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field19742);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field19746 = (function sablono$core$datetime_local_field19746(var_args){
var args19747 = [];
var len__17884__auto___19814 = arguments.length;
var i__17885__auto___19815 = (0);
while(true){
if((i__17885__auto___19815 < len__17884__auto___19814)){
args19747.push((arguments[i__17885__auto___19815]));

var G__19816 = (i__17885__auto___19815 + (1));
i__17885__auto___19815 = G__19816;
continue;
} else {
}
break;
}

var G__19749 = args19747.length;
switch (G__19749) {
case 1:
return sablono.core.datetime_local_field19746.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field19746.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19747.length)].join('')));

}
});

sablono.core.datetime_local_field19746.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.datetime_local_field19746.call(null,name__19655__auto__,null);
});

sablono.core.datetime_local_field19746.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.datetime_local_field19746.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field19746);

/**
 * Creates a email input field.
 */
sablono.core.email_field19750 = (function sablono$core$email_field19750(var_args){
var args19751 = [];
var len__17884__auto___19818 = arguments.length;
var i__17885__auto___19819 = (0);
while(true){
if((i__17885__auto___19819 < len__17884__auto___19818)){
args19751.push((arguments[i__17885__auto___19819]));

var G__19820 = (i__17885__auto___19819 + (1));
i__17885__auto___19819 = G__19820;
continue;
} else {
}
break;
}

var G__19753 = args19751.length;
switch (G__19753) {
case 1:
return sablono.core.email_field19750.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field19750.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19751.length)].join('')));

}
});

sablono.core.email_field19750.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.email_field19750.call(null,name__19655__auto__,null);
});

sablono.core.email_field19750.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.email_field19750.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field19750);

/**
 * Creates a file input field.
 */
sablono.core.file_field19754 = (function sablono$core$file_field19754(var_args){
var args19755 = [];
var len__17884__auto___19822 = arguments.length;
var i__17885__auto___19823 = (0);
while(true){
if((i__17885__auto___19823 < len__17884__auto___19822)){
args19755.push((arguments[i__17885__auto___19823]));

var G__19824 = (i__17885__auto___19823 + (1));
i__17885__auto___19823 = G__19824;
continue;
} else {
}
break;
}

var G__19757 = args19755.length;
switch (G__19757) {
case 1:
return sablono.core.file_field19754.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field19754.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19755.length)].join('')));

}
});

sablono.core.file_field19754.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.file_field19754.call(null,name__19655__auto__,null);
});

sablono.core.file_field19754.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.file_field19754.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field19754);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field19758 = (function sablono$core$hidden_field19758(var_args){
var args19759 = [];
var len__17884__auto___19826 = arguments.length;
var i__17885__auto___19827 = (0);
while(true){
if((i__17885__auto___19827 < len__17884__auto___19826)){
args19759.push((arguments[i__17885__auto___19827]));

var G__19828 = (i__17885__auto___19827 + (1));
i__17885__auto___19827 = G__19828;
continue;
} else {
}
break;
}

var G__19761 = args19759.length;
switch (G__19761) {
case 1:
return sablono.core.hidden_field19758.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field19758.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19759.length)].join('')));

}
});

sablono.core.hidden_field19758.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.hidden_field19758.call(null,name__19655__auto__,null);
});

sablono.core.hidden_field19758.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.hidden_field19758.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field19758);

/**
 * Creates a month input field.
 */
sablono.core.month_field19762 = (function sablono$core$month_field19762(var_args){
var args19763 = [];
var len__17884__auto___19830 = arguments.length;
var i__17885__auto___19831 = (0);
while(true){
if((i__17885__auto___19831 < len__17884__auto___19830)){
args19763.push((arguments[i__17885__auto___19831]));

var G__19832 = (i__17885__auto___19831 + (1));
i__17885__auto___19831 = G__19832;
continue;
} else {
}
break;
}

var G__19765 = args19763.length;
switch (G__19765) {
case 1:
return sablono.core.month_field19762.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field19762.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19763.length)].join('')));

}
});

sablono.core.month_field19762.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.month_field19762.call(null,name__19655__auto__,null);
});

sablono.core.month_field19762.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.month_field19762.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field19762);

/**
 * Creates a number input field.
 */
sablono.core.number_field19766 = (function sablono$core$number_field19766(var_args){
var args19767 = [];
var len__17884__auto___19834 = arguments.length;
var i__17885__auto___19835 = (0);
while(true){
if((i__17885__auto___19835 < len__17884__auto___19834)){
args19767.push((arguments[i__17885__auto___19835]));

var G__19836 = (i__17885__auto___19835 + (1));
i__17885__auto___19835 = G__19836;
continue;
} else {
}
break;
}

var G__19769 = args19767.length;
switch (G__19769) {
case 1:
return sablono.core.number_field19766.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field19766.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19767.length)].join('')));

}
});

sablono.core.number_field19766.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.number_field19766.call(null,name__19655__auto__,null);
});

sablono.core.number_field19766.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.number_field19766.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field19766);

/**
 * Creates a password input field.
 */
sablono.core.password_field19770 = (function sablono$core$password_field19770(var_args){
var args19771 = [];
var len__17884__auto___19838 = arguments.length;
var i__17885__auto___19839 = (0);
while(true){
if((i__17885__auto___19839 < len__17884__auto___19838)){
args19771.push((arguments[i__17885__auto___19839]));

var G__19840 = (i__17885__auto___19839 + (1));
i__17885__auto___19839 = G__19840;
continue;
} else {
}
break;
}

var G__19773 = args19771.length;
switch (G__19773) {
case 1:
return sablono.core.password_field19770.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field19770.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19771.length)].join('')));

}
});

sablono.core.password_field19770.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.password_field19770.call(null,name__19655__auto__,null);
});

sablono.core.password_field19770.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.password_field19770.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field19770);

/**
 * Creates a range input field.
 */
sablono.core.range_field19774 = (function sablono$core$range_field19774(var_args){
var args19775 = [];
var len__17884__auto___19842 = arguments.length;
var i__17885__auto___19843 = (0);
while(true){
if((i__17885__auto___19843 < len__17884__auto___19842)){
args19775.push((arguments[i__17885__auto___19843]));

var G__19844 = (i__17885__auto___19843 + (1));
i__17885__auto___19843 = G__19844;
continue;
} else {
}
break;
}

var G__19777 = args19775.length;
switch (G__19777) {
case 1:
return sablono.core.range_field19774.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field19774.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19775.length)].join('')));

}
});

sablono.core.range_field19774.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.range_field19774.call(null,name__19655__auto__,null);
});

sablono.core.range_field19774.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.range_field19774.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field19774);

/**
 * Creates a search input field.
 */
sablono.core.search_field19778 = (function sablono$core$search_field19778(var_args){
var args19779 = [];
var len__17884__auto___19846 = arguments.length;
var i__17885__auto___19847 = (0);
while(true){
if((i__17885__auto___19847 < len__17884__auto___19846)){
args19779.push((arguments[i__17885__auto___19847]));

var G__19848 = (i__17885__auto___19847 + (1));
i__17885__auto___19847 = G__19848;
continue;
} else {
}
break;
}

var G__19781 = args19779.length;
switch (G__19781) {
case 1:
return sablono.core.search_field19778.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field19778.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19779.length)].join('')));

}
});

sablono.core.search_field19778.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.search_field19778.call(null,name__19655__auto__,null);
});

sablono.core.search_field19778.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.search_field19778.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field19778);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field19782 = (function sablono$core$tel_field19782(var_args){
var args19783 = [];
var len__17884__auto___19850 = arguments.length;
var i__17885__auto___19851 = (0);
while(true){
if((i__17885__auto___19851 < len__17884__auto___19850)){
args19783.push((arguments[i__17885__auto___19851]));

var G__19852 = (i__17885__auto___19851 + (1));
i__17885__auto___19851 = G__19852;
continue;
} else {
}
break;
}

var G__19785 = args19783.length;
switch (G__19785) {
case 1:
return sablono.core.tel_field19782.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field19782.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19783.length)].join('')));

}
});

sablono.core.tel_field19782.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.tel_field19782.call(null,name__19655__auto__,null);
});

sablono.core.tel_field19782.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.tel_field19782.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field19782);

/**
 * Creates a text input field.
 */
sablono.core.text_field19786 = (function sablono$core$text_field19786(var_args){
var args19787 = [];
var len__17884__auto___19854 = arguments.length;
var i__17885__auto___19855 = (0);
while(true){
if((i__17885__auto___19855 < len__17884__auto___19854)){
args19787.push((arguments[i__17885__auto___19855]));

var G__19856 = (i__17885__auto___19855 + (1));
i__17885__auto___19855 = G__19856;
continue;
} else {
}
break;
}

var G__19789 = args19787.length;
switch (G__19789) {
case 1:
return sablono.core.text_field19786.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field19786.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19787.length)].join('')));

}
});

sablono.core.text_field19786.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.text_field19786.call(null,name__19655__auto__,null);
});

sablono.core.text_field19786.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.text_field19786.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field19786);

/**
 * Creates a time input field.
 */
sablono.core.time_field19790 = (function sablono$core$time_field19790(var_args){
var args19791 = [];
var len__17884__auto___19858 = arguments.length;
var i__17885__auto___19859 = (0);
while(true){
if((i__17885__auto___19859 < len__17884__auto___19858)){
args19791.push((arguments[i__17885__auto___19859]));

var G__19860 = (i__17885__auto___19859 + (1));
i__17885__auto___19859 = G__19860;
continue;
} else {
}
break;
}

var G__19793 = args19791.length;
switch (G__19793) {
case 1:
return sablono.core.time_field19790.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field19790.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19791.length)].join('')));

}
});

sablono.core.time_field19790.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.time_field19790.call(null,name__19655__auto__,null);
});

sablono.core.time_field19790.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.time_field19790.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field19790);

/**
 * Creates a url input field.
 */
sablono.core.url_field19794 = (function sablono$core$url_field19794(var_args){
var args19795 = [];
var len__17884__auto___19862 = arguments.length;
var i__17885__auto___19863 = (0);
while(true){
if((i__17885__auto___19863 < len__17884__auto___19862)){
args19795.push((arguments[i__17885__auto___19863]));

var G__19864 = (i__17885__auto___19863 + (1));
i__17885__auto___19863 = G__19864;
continue;
} else {
}
break;
}

var G__19797 = args19795.length;
switch (G__19797) {
case 1:
return sablono.core.url_field19794.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field19794.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19795.length)].join('')));

}
});

sablono.core.url_field19794.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.url_field19794.call(null,name__19655__auto__,null);
});

sablono.core.url_field19794.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.url_field19794.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field19794);

/**
 * Creates a week input field.
 */
sablono.core.week_field19798 = (function sablono$core$week_field19798(var_args){
var args19799 = [];
var len__17884__auto___19866 = arguments.length;
var i__17885__auto___19867 = (0);
while(true){
if((i__17885__auto___19867 < len__17884__auto___19866)){
args19799.push((arguments[i__17885__auto___19867]));

var G__19868 = (i__17885__auto___19867 + (1));
i__17885__auto___19867 = G__19868;
continue;
} else {
}
break;
}

var G__19801 = args19799.length;
switch (G__19801) {
case 1:
return sablono.core.week_field19798.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field19798.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19799.length)].join('')));

}
});

sablono.core.week_field19798.cljs$core$IFn$_invoke$arity$1 = (function (name__19655__auto__){
return sablono.core.week_field19798.call(null,name__19655__auto__,null);
});

sablono.core.week_field19798.cljs$core$IFn$_invoke$arity$2 = (function (name__19655__auto__,value__19656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19655__auto__,value__19656__auto__);
});

sablono.core.week_field19798.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field19798);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box19870 = (function sablono$core$check_box19870(var_args){
var args19871 = [];
var len__17884__auto___19874 = arguments.length;
var i__17885__auto___19875 = (0);
while(true){
if((i__17885__auto___19875 < len__17884__auto___19874)){
args19871.push((arguments[i__17885__auto___19875]));

var G__19876 = (i__17885__auto___19875 + (1));
i__17885__auto___19875 = G__19876;
continue;
} else {
}
break;
}

var G__19873 = args19871.length;
switch (G__19873) {
case 1:
return sablono.core.check_box19870.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box19870.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box19870.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19871.length)].join('')));

}
});

sablono.core.check_box19870.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box19870.call(null,name,null);
});

sablono.core.check_box19870.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box19870.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box19870.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box19870.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box19870);
/**
 * Creates a radio button.
 */
sablono.core.radio_button19878 = (function sablono$core$radio_button19878(var_args){
var args19879 = [];
var len__17884__auto___19882 = arguments.length;
var i__17885__auto___19883 = (0);
while(true){
if((i__17885__auto___19883 < len__17884__auto___19882)){
args19879.push((arguments[i__17885__auto___19883]));

var G__19884 = (i__17885__auto___19883 + (1));
i__17885__auto___19883 = G__19884;
continue;
} else {
}
break;
}

var G__19881 = args19879.length;
switch (G__19881) {
case 1:
return sablono.core.radio_button19878.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button19878.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button19878.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19879.length)].join('')));

}
});

sablono.core.radio_button19878.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button19878.call(null,group,null);
});

sablono.core.radio_button19878.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button19878.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button19878.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button19878.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button19878);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options19886 = (function sablono$core$select_options19886(coll){
var iter__17598__auto__ = (function sablono$core$select_options19886_$_iter__19895(s__19896){
return (new cljs.core.LazySeq(null,(function (){
var s__19896__$1 = s__19896;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19896__$1);
if(temp__4425__auto__){
var s__19896__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19896__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__19896__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__19898 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__19897 = (0);
while(true){
if((i__19897 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__19897);
cljs.core.chunk_append.call(null,b__19898,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__19901 = x;
var text = cljs.core.nth.call(null,vec__19901,(0),null);
var val = cljs.core.nth.call(null,vec__19901,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__19901,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options19886.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__19903 = (i__19897 + (1));
i__19897 = G__19903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19898),sablono$core$select_options19886_$_iter__19895.call(null,cljs.core.chunk_rest.call(null,s__19896__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19898),null);
}
} else {
var x = cljs.core.first.call(null,s__19896__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__19902 = x;
var text = cljs.core.nth.call(null,vec__19902,(0),null);
var val = cljs.core.nth.call(null,vec__19902,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__19902,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options19886.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options19886_$_iter__19895.call(null,cljs.core.rest.call(null,s__19896__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options19886);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down19904 = (function sablono$core$drop_down19904(var_args){
var args19905 = [];
var len__17884__auto___19908 = arguments.length;
var i__17885__auto___19909 = (0);
while(true){
if((i__17885__auto___19909 < len__17884__auto___19908)){
args19905.push((arguments[i__17885__auto___19909]));

var G__19910 = (i__17885__auto___19909 + (1));
i__17885__auto___19909 = G__19910;
continue;
} else {
}
break;
}

var G__19907 = args19905.length;
switch (G__19907) {
case 2:
return sablono.core.drop_down19904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down19904.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19905.length)].join('')));

}
});

sablono.core.drop_down19904.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down19904.call(null,name,options,null);
});

sablono.core.drop_down19904.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down19904.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down19904);
/**
 * Creates a text area element.
 */
sablono.core.text_area19912 = (function sablono$core$text_area19912(var_args){
var args19913 = [];
var len__17884__auto___19916 = arguments.length;
var i__17885__auto___19917 = (0);
while(true){
if((i__17885__auto___19917 < len__17884__auto___19916)){
args19913.push((arguments[i__17885__auto___19917]));

var G__19918 = (i__17885__auto___19917 + (1));
i__17885__auto___19917 = G__19918;
continue;
} else {
}
break;
}

var G__19915 = args19913.length;
switch (G__19915) {
case 1:
return sablono.core.text_area19912.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area19912.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19913.length)].join('')));

}
});

sablono.core.text_area19912.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area19912.call(null,name,null);
});

sablono.core.text_area19912.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area19912.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area19912);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label19920 = (function sablono$core$label19920(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label19920);
/**
 * Creates a submit button.
 */
sablono.core.submit_button19921 = (function sablono$core$submit_button19921(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button19921);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button19922 = (function sablono$core$reset_button19922(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button19922);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to19923 = (function sablono$core$form_to19923(var_args){
var args__17891__auto__ = [];
var len__17884__auto___19928 = arguments.length;
var i__17885__auto___19929 = (0);
while(true){
if((i__17885__auto___19929 < len__17884__auto___19928)){
args__17891__auto__.push((arguments[i__17885__auto___19929]));

var G__19930 = (i__17885__auto___19929 + (1));
i__17885__auto___19929 = G__19930;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.form_to19923.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.form_to19923.cljs$core$IFn$_invoke$arity$variadic = (function (p__19926,body){
var vec__19927 = p__19926;
var method = cljs.core.nth.call(null,vec__19927,(0),null);
var action = cljs.core.nth.call(null,vec__19927,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to19923.cljs$lang$maxFixedArity = (1);

sablono.core.form_to19923.cljs$lang$applyTo = (function (seq19924){
var G__19925 = cljs.core.first.call(null,seq19924);
var seq19924__$1 = cljs.core.next.call(null,seq19924);
return sablono.core.form_to19923.cljs$core$IFn$_invoke$arity$variadic(G__19925,seq19924__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to19923);

//# sourceMappingURL=core.js.map?rel=1454020201455