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
var G__21781__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__21780 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__21780,(0),null);
var body = cljs.core.nthnext.call(null,vec__21780,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__21781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21782__i = 0, G__21782__a = new Array(arguments.length -  0);
while (G__21782__i < G__21782__a.length) {G__21782__a[G__21782__i] = arguments[G__21782__i + 0]; ++G__21782__i;}
  args = new cljs.core.IndexedSeq(G__21782__a,0);
} 
return G__21781__delegate.call(this,args);};
G__21781.cljs$lang$maxFixedArity = 0;
G__21781.cljs$lang$applyTo = (function (arglist__21783){
var args = cljs.core.seq(arglist__21783);
return G__21781__delegate(args);
});
G__21781.cljs$core$IFn$_invoke$arity$variadic = G__21781__delegate;
return G__21781;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17598__auto__ = (function sablono$core$update_arglists_$_iter__21788(s__21789){
return (new cljs.core.LazySeq(null,(function (){
var s__21789__$1 = s__21789;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21789__$1);
if(temp__4425__auto__){
var s__21789__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21789__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__21789__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__21791 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__21790 = (0);
while(true){
if((i__21790 < size__17597__auto__)){
var args = cljs.core._nth.call(null,c__17596__auto__,i__21790);
cljs.core.chunk_append.call(null,b__21791,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__21792 = (i__21790 + (1));
i__21790 = G__21792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21791),sablono$core$update_arglists_$_iter__21788.call(null,cljs.core.chunk_rest.call(null,s__21789__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21791),null);
}
} else {
var args = cljs.core.first.call(null,s__21789__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__21788.call(null,cljs.core.rest.call(null,s__21789__$2)));
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
var len__17884__auto___21798 = arguments.length;
var i__17885__auto___21799 = (0);
while(true){
if((i__17885__auto___21799 < len__17884__auto___21798)){
args__17891__auto__.push((arguments[i__17885__auto___21799]));

var G__21800 = (i__17885__auto___21799 + (1));
i__17885__auto___21799 = G__21800;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17598__auto__ = (function sablono$core$iter__21794(s__21795){
return (new cljs.core.LazySeq(null,(function (){
var s__21795__$1 = s__21795;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21795__$1);
if(temp__4425__auto__){
var s__21795__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21795__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__21795__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__21797 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__21796 = (0);
while(true){
if((i__21796 < size__17597__auto__)){
var style = cljs.core._nth.call(null,c__17596__auto__,i__21796);
cljs.core.chunk_append.call(null,b__21797,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__21801 = (i__21796 + (1));
i__21796 = G__21801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21797),sablono$core$iter__21794.call(null,cljs.core.chunk_rest.call(null,s__21795__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21797),null);
}
} else {
var style = cljs.core.first.call(null,s__21795__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__21794.call(null,cljs.core.rest.call(null,s__21795__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq21793){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21793));
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
sablono.core.link_to21802 = (function sablono$core$link_to21802(var_args){
var args__17891__auto__ = [];
var len__17884__auto___21805 = arguments.length;
var i__17885__auto___21806 = (0);
while(true){
if((i__17885__auto___21806 < len__17884__auto___21805)){
args__17891__auto__.push((arguments[i__17885__auto___21806]));

var G__21807 = (i__17885__auto___21806 + (1));
i__17885__auto___21806 = G__21807;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.link_to21802.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.link_to21802.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to21802.cljs$lang$maxFixedArity = (1);

sablono.core.link_to21802.cljs$lang$applyTo = (function (seq21803){
var G__21804 = cljs.core.first.call(null,seq21803);
var seq21803__$1 = cljs.core.next.call(null,seq21803);
return sablono.core.link_to21802.cljs$core$IFn$_invoke$arity$variadic(G__21804,seq21803__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to21802);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to21808 = (function sablono$core$mail_to21808(var_args){
var args__17891__auto__ = [];
var len__17884__auto___21813 = arguments.length;
var i__17885__auto___21814 = (0);
while(true){
if((i__17885__auto___21814 < len__17884__auto___21813)){
args__17891__auto__.push((arguments[i__17885__auto___21814]));

var G__21815 = (i__17885__auto___21814 + (1));
i__17885__auto___21814 = G__21815;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.mail_to21808.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.mail_to21808.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__21811){
var vec__21812 = p__21811;
var content = cljs.core.nth.call(null,vec__21812,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16826__auto__ = content;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to21808.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to21808.cljs$lang$applyTo = (function (seq21809){
var G__21810 = cljs.core.first.call(null,seq21809);
var seq21809__$1 = cljs.core.next.call(null,seq21809);
return sablono.core.mail_to21808.cljs$core$IFn$_invoke$arity$variadic(G__21810,seq21809__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to21808);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list21816 = (function sablono$core$unordered_list21816(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17598__auto__ = (function sablono$core$unordered_list21816_$_iter__21821(s__21822){
return (new cljs.core.LazySeq(null,(function (){
var s__21822__$1 = s__21822;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21822__$1);
if(temp__4425__auto__){
var s__21822__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21822__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__21822__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__21824 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__21823 = (0);
while(true){
if((i__21823 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__21823);
cljs.core.chunk_append.call(null,b__21824,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__21825 = (i__21823 + (1));
i__21823 = G__21825;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21824),sablono$core$unordered_list21816_$_iter__21821.call(null,cljs.core.chunk_rest.call(null,s__21822__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21824),null);
}
} else {
var x = cljs.core.first.call(null,s__21822__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list21816_$_iter__21821.call(null,cljs.core.rest.call(null,s__21822__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list21816);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list21826 = (function sablono$core$ordered_list21826(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17598__auto__ = (function sablono$core$ordered_list21826_$_iter__21831(s__21832){
return (new cljs.core.LazySeq(null,(function (){
var s__21832__$1 = s__21832;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21832__$1);
if(temp__4425__auto__){
var s__21832__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21832__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__21832__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__21834 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__21833 = (0);
while(true){
if((i__21833 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__21833);
cljs.core.chunk_append.call(null,b__21834,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__21835 = (i__21833 + (1));
i__21833 = G__21835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21834),sablono$core$ordered_list21826_$_iter__21831.call(null,cljs.core.chunk_rest.call(null,s__21832__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21834),null);
}
} else {
var x = cljs.core.first.call(null,s__21832__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list21826_$_iter__21831.call(null,cljs.core.rest.call(null,s__21832__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list21826);
/**
 * Create an image element.
 */
sablono.core.image21836 = (function sablono$core$image21836(var_args){
var args21837 = [];
var len__17884__auto___21840 = arguments.length;
var i__17885__auto___21841 = (0);
while(true){
if((i__17885__auto___21841 < len__17884__auto___21840)){
args21837.push((arguments[i__17885__auto___21841]));

var G__21842 = (i__17885__auto___21841 + (1));
i__17885__auto___21841 = G__21842;
continue;
} else {
}
break;
}

var G__21839 = args21837.length;
switch (G__21839) {
case 1:
return sablono.core.image21836.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image21836.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21837.length)].join('')));

}
});

sablono.core.image21836.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image21836.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image21836.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image21836);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__21844_SHARP_,p2__21845_SHARP_){
return [cljs.core.str(p1__21844_SHARP_),cljs.core.str("["),cljs.core.str(p2__21845_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__21846_SHARP_,p2__21847_SHARP_){
return [cljs.core.str(p1__21846_SHARP_),cljs.core.str("-"),cljs.core.str(p2__21847_SHARP_)].join('');
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
sablono.core.color_field21848 = (function sablono$core$color_field21848(var_args){
var args21849 = [];
var len__17884__auto___21916 = arguments.length;
var i__17885__auto___21917 = (0);
while(true){
if((i__17885__auto___21917 < len__17884__auto___21916)){
args21849.push((arguments[i__17885__auto___21917]));

var G__21918 = (i__17885__auto___21917 + (1));
i__17885__auto___21917 = G__21918;
continue;
} else {
}
break;
}

var G__21851 = args21849.length;
switch (G__21851) {
case 1:
return sablono.core.color_field21848.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field21848.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21849.length)].join('')));

}
});

sablono.core.color_field21848.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.color_field21848.call(null,name__19405__auto__,null);
});

sablono.core.color_field21848.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.color_field21848.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field21848);

/**
 * Creates a date input field.
 */
sablono.core.date_field21852 = (function sablono$core$date_field21852(var_args){
var args21853 = [];
var len__17884__auto___21920 = arguments.length;
var i__17885__auto___21921 = (0);
while(true){
if((i__17885__auto___21921 < len__17884__auto___21920)){
args21853.push((arguments[i__17885__auto___21921]));

var G__21922 = (i__17885__auto___21921 + (1));
i__17885__auto___21921 = G__21922;
continue;
} else {
}
break;
}

var G__21855 = args21853.length;
switch (G__21855) {
case 1:
return sablono.core.date_field21852.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field21852.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21853.length)].join('')));

}
});

sablono.core.date_field21852.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.date_field21852.call(null,name__19405__auto__,null);
});

sablono.core.date_field21852.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.date_field21852.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field21852);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field21856 = (function sablono$core$datetime_field21856(var_args){
var args21857 = [];
var len__17884__auto___21924 = arguments.length;
var i__17885__auto___21925 = (0);
while(true){
if((i__17885__auto___21925 < len__17884__auto___21924)){
args21857.push((arguments[i__17885__auto___21925]));

var G__21926 = (i__17885__auto___21925 + (1));
i__17885__auto___21925 = G__21926;
continue;
} else {
}
break;
}

var G__21859 = args21857.length;
switch (G__21859) {
case 1:
return sablono.core.datetime_field21856.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field21856.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21857.length)].join('')));

}
});

sablono.core.datetime_field21856.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.datetime_field21856.call(null,name__19405__auto__,null);
});

sablono.core.datetime_field21856.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.datetime_field21856.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field21856);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field21860 = (function sablono$core$datetime_local_field21860(var_args){
var args21861 = [];
var len__17884__auto___21928 = arguments.length;
var i__17885__auto___21929 = (0);
while(true){
if((i__17885__auto___21929 < len__17884__auto___21928)){
args21861.push((arguments[i__17885__auto___21929]));

var G__21930 = (i__17885__auto___21929 + (1));
i__17885__auto___21929 = G__21930;
continue;
} else {
}
break;
}

var G__21863 = args21861.length;
switch (G__21863) {
case 1:
return sablono.core.datetime_local_field21860.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field21860.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21861.length)].join('')));

}
});

sablono.core.datetime_local_field21860.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.datetime_local_field21860.call(null,name__19405__auto__,null);
});

sablono.core.datetime_local_field21860.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.datetime_local_field21860.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field21860);

/**
 * Creates a email input field.
 */
sablono.core.email_field21864 = (function sablono$core$email_field21864(var_args){
var args21865 = [];
var len__17884__auto___21932 = arguments.length;
var i__17885__auto___21933 = (0);
while(true){
if((i__17885__auto___21933 < len__17884__auto___21932)){
args21865.push((arguments[i__17885__auto___21933]));

var G__21934 = (i__17885__auto___21933 + (1));
i__17885__auto___21933 = G__21934;
continue;
} else {
}
break;
}

var G__21867 = args21865.length;
switch (G__21867) {
case 1:
return sablono.core.email_field21864.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field21864.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21865.length)].join('')));

}
});

sablono.core.email_field21864.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.email_field21864.call(null,name__19405__auto__,null);
});

sablono.core.email_field21864.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.email_field21864.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field21864);

/**
 * Creates a file input field.
 */
sablono.core.file_field21868 = (function sablono$core$file_field21868(var_args){
var args21869 = [];
var len__17884__auto___21936 = arguments.length;
var i__17885__auto___21937 = (0);
while(true){
if((i__17885__auto___21937 < len__17884__auto___21936)){
args21869.push((arguments[i__17885__auto___21937]));

var G__21938 = (i__17885__auto___21937 + (1));
i__17885__auto___21937 = G__21938;
continue;
} else {
}
break;
}

var G__21871 = args21869.length;
switch (G__21871) {
case 1:
return sablono.core.file_field21868.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field21868.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21869.length)].join('')));

}
});

sablono.core.file_field21868.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.file_field21868.call(null,name__19405__auto__,null);
});

sablono.core.file_field21868.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.file_field21868.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field21868);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field21872 = (function sablono$core$hidden_field21872(var_args){
var args21873 = [];
var len__17884__auto___21940 = arguments.length;
var i__17885__auto___21941 = (0);
while(true){
if((i__17885__auto___21941 < len__17884__auto___21940)){
args21873.push((arguments[i__17885__auto___21941]));

var G__21942 = (i__17885__auto___21941 + (1));
i__17885__auto___21941 = G__21942;
continue;
} else {
}
break;
}

var G__21875 = args21873.length;
switch (G__21875) {
case 1:
return sablono.core.hidden_field21872.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field21872.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21873.length)].join('')));

}
});

sablono.core.hidden_field21872.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.hidden_field21872.call(null,name__19405__auto__,null);
});

sablono.core.hidden_field21872.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.hidden_field21872.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field21872);

/**
 * Creates a month input field.
 */
sablono.core.month_field21876 = (function sablono$core$month_field21876(var_args){
var args21877 = [];
var len__17884__auto___21944 = arguments.length;
var i__17885__auto___21945 = (0);
while(true){
if((i__17885__auto___21945 < len__17884__auto___21944)){
args21877.push((arguments[i__17885__auto___21945]));

var G__21946 = (i__17885__auto___21945 + (1));
i__17885__auto___21945 = G__21946;
continue;
} else {
}
break;
}

var G__21879 = args21877.length;
switch (G__21879) {
case 1:
return sablono.core.month_field21876.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field21876.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21877.length)].join('')));

}
});

sablono.core.month_field21876.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.month_field21876.call(null,name__19405__auto__,null);
});

sablono.core.month_field21876.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.month_field21876.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field21876);

/**
 * Creates a number input field.
 */
sablono.core.number_field21880 = (function sablono$core$number_field21880(var_args){
var args21881 = [];
var len__17884__auto___21948 = arguments.length;
var i__17885__auto___21949 = (0);
while(true){
if((i__17885__auto___21949 < len__17884__auto___21948)){
args21881.push((arguments[i__17885__auto___21949]));

var G__21950 = (i__17885__auto___21949 + (1));
i__17885__auto___21949 = G__21950;
continue;
} else {
}
break;
}

var G__21883 = args21881.length;
switch (G__21883) {
case 1:
return sablono.core.number_field21880.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field21880.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21881.length)].join('')));

}
});

sablono.core.number_field21880.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.number_field21880.call(null,name__19405__auto__,null);
});

sablono.core.number_field21880.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.number_field21880.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field21880);

/**
 * Creates a password input field.
 */
sablono.core.password_field21884 = (function sablono$core$password_field21884(var_args){
var args21885 = [];
var len__17884__auto___21952 = arguments.length;
var i__17885__auto___21953 = (0);
while(true){
if((i__17885__auto___21953 < len__17884__auto___21952)){
args21885.push((arguments[i__17885__auto___21953]));

var G__21954 = (i__17885__auto___21953 + (1));
i__17885__auto___21953 = G__21954;
continue;
} else {
}
break;
}

var G__21887 = args21885.length;
switch (G__21887) {
case 1:
return sablono.core.password_field21884.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field21884.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21885.length)].join('')));

}
});

sablono.core.password_field21884.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.password_field21884.call(null,name__19405__auto__,null);
});

sablono.core.password_field21884.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.password_field21884.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field21884);

/**
 * Creates a range input field.
 */
sablono.core.range_field21888 = (function sablono$core$range_field21888(var_args){
var args21889 = [];
var len__17884__auto___21956 = arguments.length;
var i__17885__auto___21957 = (0);
while(true){
if((i__17885__auto___21957 < len__17884__auto___21956)){
args21889.push((arguments[i__17885__auto___21957]));

var G__21958 = (i__17885__auto___21957 + (1));
i__17885__auto___21957 = G__21958;
continue;
} else {
}
break;
}

var G__21891 = args21889.length;
switch (G__21891) {
case 1:
return sablono.core.range_field21888.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field21888.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21889.length)].join('')));

}
});

sablono.core.range_field21888.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.range_field21888.call(null,name__19405__auto__,null);
});

sablono.core.range_field21888.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.range_field21888.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field21888);

/**
 * Creates a search input field.
 */
sablono.core.search_field21892 = (function sablono$core$search_field21892(var_args){
var args21893 = [];
var len__17884__auto___21960 = arguments.length;
var i__17885__auto___21961 = (0);
while(true){
if((i__17885__auto___21961 < len__17884__auto___21960)){
args21893.push((arguments[i__17885__auto___21961]));

var G__21962 = (i__17885__auto___21961 + (1));
i__17885__auto___21961 = G__21962;
continue;
} else {
}
break;
}

var G__21895 = args21893.length;
switch (G__21895) {
case 1:
return sablono.core.search_field21892.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field21892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21893.length)].join('')));

}
});

sablono.core.search_field21892.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.search_field21892.call(null,name__19405__auto__,null);
});

sablono.core.search_field21892.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.search_field21892.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field21892);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field21896 = (function sablono$core$tel_field21896(var_args){
var args21897 = [];
var len__17884__auto___21964 = arguments.length;
var i__17885__auto___21965 = (0);
while(true){
if((i__17885__auto___21965 < len__17884__auto___21964)){
args21897.push((arguments[i__17885__auto___21965]));

var G__21966 = (i__17885__auto___21965 + (1));
i__17885__auto___21965 = G__21966;
continue;
} else {
}
break;
}

var G__21899 = args21897.length;
switch (G__21899) {
case 1:
return sablono.core.tel_field21896.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field21896.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21897.length)].join('')));

}
});

sablono.core.tel_field21896.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.tel_field21896.call(null,name__19405__auto__,null);
});

sablono.core.tel_field21896.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.tel_field21896.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field21896);

/**
 * Creates a text input field.
 */
sablono.core.text_field21900 = (function sablono$core$text_field21900(var_args){
var args21901 = [];
var len__17884__auto___21968 = arguments.length;
var i__17885__auto___21969 = (0);
while(true){
if((i__17885__auto___21969 < len__17884__auto___21968)){
args21901.push((arguments[i__17885__auto___21969]));

var G__21970 = (i__17885__auto___21969 + (1));
i__17885__auto___21969 = G__21970;
continue;
} else {
}
break;
}

var G__21903 = args21901.length;
switch (G__21903) {
case 1:
return sablono.core.text_field21900.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field21900.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21901.length)].join('')));

}
});

sablono.core.text_field21900.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.text_field21900.call(null,name__19405__auto__,null);
});

sablono.core.text_field21900.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.text_field21900.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field21900);

/**
 * Creates a time input field.
 */
sablono.core.time_field21904 = (function sablono$core$time_field21904(var_args){
var args21905 = [];
var len__17884__auto___21972 = arguments.length;
var i__17885__auto___21973 = (0);
while(true){
if((i__17885__auto___21973 < len__17884__auto___21972)){
args21905.push((arguments[i__17885__auto___21973]));

var G__21974 = (i__17885__auto___21973 + (1));
i__17885__auto___21973 = G__21974;
continue;
} else {
}
break;
}

var G__21907 = args21905.length;
switch (G__21907) {
case 1:
return sablono.core.time_field21904.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field21904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21905.length)].join('')));

}
});

sablono.core.time_field21904.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.time_field21904.call(null,name__19405__auto__,null);
});

sablono.core.time_field21904.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.time_field21904.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field21904);

/**
 * Creates a url input field.
 */
sablono.core.url_field21908 = (function sablono$core$url_field21908(var_args){
var args21909 = [];
var len__17884__auto___21976 = arguments.length;
var i__17885__auto___21977 = (0);
while(true){
if((i__17885__auto___21977 < len__17884__auto___21976)){
args21909.push((arguments[i__17885__auto___21977]));

var G__21978 = (i__17885__auto___21977 + (1));
i__17885__auto___21977 = G__21978;
continue;
} else {
}
break;
}

var G__21911 = args21909.length;
switch (G__21911) {
case 1:
return sablono.core.url_field21908.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field21908.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21909.length)].join('')));

}
});

sablono.core.url_field21908.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.url_field21908.call(null,name__19405__auto__,null);
});

sablono.core.url_field21908.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.url_field21908.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field21908);

/**
 * Creates a week input field.
 */
sablono.core.week_field21912 = (function sablono$core$week_field21912(var_args){
var args21913 = [];
var len__17884__auto___21980 = arguments.length;
var i__17885__auto___21981 = (0);
while(true){
if((i__17885__auto___21981 < len__17884__auto___21980)){
args21913.push((arguments[i__17885__auto___21981]));

var G__21982 = (i__17885__auto___21981 + (1));
i__17885__auto___21981 = G__21982;
continue;
} else {
}
break;
}

var G__21915 = args21913.length;
switch (G__21915) {
case 1:
return sablono.core.week_field21912.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field21912.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21913.length)].join('')));

}
});

sablono.core.week_field21912.cljs$core$IFn$_invoke$arity$1 = (function (name__19405__auto__){
return sablono.core.week_field21912.call(null,name__19405__auto__,null);
});

sablono.core.week_field21912.cljs$core$IFn$_invoke$arity$2 = (function (name__19405__auto__,value__19406__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19405__auto__,value__19406__auto__);
});

sablono.core.week_field21912.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field21912);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box21984 = (function sablono$core$check_box21984(var_args){
var args21985 = [];
var len__17884__auto___21988 = arguments.length;
var i__17885__auto___21989 = (0);
while(true){
if((i__17885__auto___21989 < len__17884__auto___21988)){
args21985.push((arguments[i__17885__auto___21989]));

var G__21990 = (i__17885__auto___21989 + (1));
i__17885__auto___21989 = G__21990;
continue;
} else {
}
break;
}

var G__21987 = args21985.length;
switch (G__21987) {
case 1:
return sablono.core.check_box21984.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box21984.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box21984.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21985.length)].join('')));

}
});

sablono.core.check_box21984.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box21984.call(null,name,null);
});

sablono.core.check_box21984.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box21984.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box21984.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box21984.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box21984);
/**
 * Creates a radio button.
 */
sablono.core.radio_button21992 = (function sablono$core$radio_button21992(var_args){
var args21993 = [];
var len__17884__auto___21996 = arguments.length;
var i__17885__auto___21997 = (0);
while(true){
if((i__17885__auto___21997 < len__17884__auto___21996)){
args21993.push((arguments[i__17885__auto___21997]));

var G__21998 = (i__17885__auto___21997 + (1));
i__17885__auto___21997 = G__21998;
continue;
} else {
}
break;
}

var G__21995 = args21993.length;
switch (G__21995) {
case 1:
return sablono.core.radio_button21992.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button21992.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button21992.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21993.length)].join('')));

}
});

sablono.core.radio_button21992.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button21992.call(null,group,null);
});

sablono.core.radio_button21992.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button21992.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button21992.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button21992.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button21992);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options22000 = (function sablono$core$select_options22000(coll){
var iter__17598__auto__ = (function sablono$core$select_options22000_$_iter__22009(s__22010){
return (new cljs.core.LazySeq(null,(function (){
var s__22010__$1 = s__22010;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22010__$1);
if(temp__4425__auto__){
var s__22010__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22010__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__22010__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__22012 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__22011 = (0);
while(true){
if((i__22011 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__22011);
cljs.core.chunk_append.call(null,b__22012,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22015 = x;
var text = cljs.core.nth.call(null,vec__22015,(0),null);
var val = cljs.core.nth.call(null,vec__22015,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22015,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options22000.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__22017 = (i__22011 + (1));
i__22011 = G__22017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22012),sablono$core$select_options22000_$_iter__22009.call(null,cljs.core.chunk_rest.call(null,s__22010__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22012),null);
}
} else {
var x = cljs.core.first.call(null,s__22010__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22016 = x;
var text = cljs.core.nth.call(null,vec__22016,(0),null);
var val = cljs.core.nth.call(null,vec__22016,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22016,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options22000.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options22000_$_iter__22009.call(null,cljs.core.rest.call(null,s__22010__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22000);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down22018 = (function sablono$core$drop_down22018(var_args){
var args22019 = [];
var len__17884__auto___22022 = arguments.length;
var i__17885__auto___22023 = (0);
while(true){
if((i__17885__auto___22023 < len__17884__auto___22022)){
args22019.push((arguments[i__17885__auto___22023]));

var G__22024 = (i__17885__auto___22023 + (1));
i__17885__auto___22023 = G__22024;
continue;
} else {
}
break;
}

var G__22021 = args22019.length;
switch (G__22021) {
case 2:
return sablono.core.drop_down22018.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down22018.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22019.length)].join('')));

}
});

sablono.core.drop_down22018.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down22018.call(null,name,options,null);
});

sablono.core.drop_down22018.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down22018.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22018);
/**
 * Creates a text area element.
 */
sablono.core.text_area22026 = (function sablono$core$text_area22026(var_args){
var args22027 = [];
var len__17884__auto___22030 = arguments.length;
var i__17885__auto___22031 = (0);
while(true){
if((i__17885__auto___22031 < len__17884__auto___22030)){
args22027.push((arguments[i__17885__auto___22031]));

var G__22032 = (i__17885__auto___22031 + (1));
i__17885__auto___22031 = G__22032;
continue;
} else {
}
break;
}

var G__22029 = args22027.length;
switch (G__22029) {
case 1:
return sablono.core.text_area22026.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area22026.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22027.length)].join('')));

}
});

sablono.core.text_area22026.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area22026.call(null,name,null);
});

sablono.core.text_area22026.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area22026.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22026);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label22034 = (function sablono$core$label22034(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22034);
/**
 * Creates a submit button.
 */
sablono.core.submit_button22035 = (function sablono$core$submit_button22035(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22035);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button22036 = (function sablono$core$reset_button22036(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22036);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to22037 = (function sablono$core$form_to22037(var_args){
var args__17891__auto__ = [];
var len__17884__auto___22042 = arguments.length;
var i__17885__auto___22043 = (0);
while(true){
if((i__17885__auto___22043 < len__17884__auto___22042)){
args__17891__auto__.push((arguments[i__17885__auto___22043]));

var G__22044 = (i__17885__auto___22043 + (1));
i__17885__auto___22043 = G__22044;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.form_to22037.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.form_to22037.cljs$core$IFn$_invoke$arity$variadic = (function (p__22040,body){
var vec__22041 = p__22040;
var method = cljs.core.nth.call(null,vec__22041,(0),null);
var action = cljs.core.nth.call(null,vec__22041,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to22037.cljs$lang$maxFixedArity = (1);

sablono.core.form_to22037.cljs$lang$applyTo = (function (seq22038){
var G__22039 = cljs.core.first.call(null,seq22038);
var seq22038__$1 = cljs.core.next.call(null,seq22038);
return sablono.core.form_to22037.cljs$core$IFn$_invoke$arity$variadic(G__22039,seq22038__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22037);

//# sourceMappingURL=core.js.map?rel=1454026300945