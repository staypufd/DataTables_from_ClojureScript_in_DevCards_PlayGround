// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22611 = [];
var len__17884__auto___22617 = arguments.length;
var i__17885__auto___22618 = (0);
while(true){
if((i__17885__auto___22618 < len__17884__auto___22617)){
args22611.push((arguments[i__17885__auto___22618]));

var G__22619 = (i__17885__auto___22618 + (1));
i__17885__auto___22618 = G__22619;
continue;
} else {
}
break;
}

var G__22613 = args22611.length;
switch (G__22613) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22611.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22614 = (function (f,blockable,meta22615){
this.f = f;
this.blockable = blockable;
this.meta22615 = meta22615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22616,meta22615__$1){
var self__ = this;
var _22616__$1 = this;
return (new cljs.core.async.t_cljs$core$async22614(self__.f,self__.blockable,meta22615__$1));
});

cljs.core.async.t_cljs$core$async22614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22616){
var self__ = this;
var _22616__$1 = this;
return self__.meta22615;
});

cljs.core.async.t_cljs$core$async22614.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22614.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22615","meta22615",1740398105,null)], null);
});

cljs.core.async.t_cljs$core$async22614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22614";

cljs.core.async.t_cljs$core$async22614.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22614");
});

cljs.core.async.__GT_t_cljs$core$async22614 = (function cljs$core$async$__GT_t_cljs$core$async22614(f__$1,blockable__$1,meta22615){
return (new cljs.core.async.t_cljs$core$async22614(f__$1,blockable__$1,meta22615));
});

}

return (new cljs.core.async.t_cljs$core$async22614(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22623 = [];
var len__17884__auto___22626 = arguments.length;
var i__17885__auto___22627 = (0);
while(true){
if((i__17885__auto___22627 < len__17884__auto___22626)){
args22623.push((arguments[i__17885__auto___22627]));

var G__22628 = (i__17885__auto___22627 + (1));
i__17885__auto___22627 = G__22628;
continue;
} else {
}
break;
}

var G__22625 = args22623.length;
switch (G__22625) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22623.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22630 = [];
var len__17884__auto___22633 = arguments.length;
var i__17885__auto___22634 = (0);
while(true){
if((i__17885__auto___22634 < len__17884__auto___22633)){
args22630.push((arguments[i__17885__auto___22634]));

var G__22635 = (i__17885__auto___22634 + (1));
i__17885__auto___22634 = G__22635;
continue;
} else {
}
break;
}

var G__22632 = args22630.length;
switch (G__22632) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22630.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22637 = [];
var len__17884__auto___22640 = arguments.length;
var i__17885__auto___22641 = (0);
while(true){
if((i__17885__auto___22641 < len__17884__auto___22640)){
args22637.push((arguments[i__17885__auto___22641]));

var G__22642 = (i__17885__auto___22641 + (1));
i__17885__auto___22641 = G__22642;
continue;
} else {
}
break;
}

var G__22639 = args22637.length;
switch (G__22639) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22637.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22644 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22644);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22644,ret){
return (function (){
return fn1.call(null,val_22644);
});})(val_22644,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22645 = [];
var len__17884__auto___22648 = arguments.length;
var i__17885__auto___22649 = (0);
while(true){
if((i__17885__auto___22649 < len__17884__auto___22648)){
args22645.push((arguments[i__17885__auto___22649]));

var G__22650 = (i__17885__auto___22649 + (1));
i__17885__auto___22649 = G__22650;
continue;
} else {
}
break;
}

var G__22647 = args22645.length;
switch (G__22647) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22645.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17729__auto___22652 = n;
var x_22653 = (0);
while(true){
if((x_22653 < n__17729__auto___22652)){
(a[x_22653] = (0));

var G__22654 = (x_22653 + (1));
x_22653 = G__22654;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22655 = (i + (1));
i = G__22655;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22659 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22659 = (function (alt_flag,flag,meta22660){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22660 = meta22660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22661,meta22660__$1){
var self__ = this;
var _22661__$1 = this;
return (new cljs.core.async.t_cljs$core$async22659(self__.alt_flag,self__.flag,meta22660__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22659.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22661){
var self__ = this;
var _22661__$1 = this;
return self__.meta22660;
});})(flag))
;

cljs.core.async.t_cljs$core$async22659.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22659.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22659.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22660","meta22660",1038229122,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22659.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22659";

cljs.core.async.t_cljs$core$async22659.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22659");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22659 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22659(alt_flag__$1,flag__$1,meta22660){
return (new cljs.core.async.t_cljs$core$async22659(alt_flag__$1,flag__$1,meta22660));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22659(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22665 = (function (alt_handler,flag,cb,meta22666){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22666 = meta22666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22667,meta22666__$1){
var self__ = this;
var _22667__$1 = this;
return (new cljs.core.async.t_cljs$core$async22665(self__.alt_handler,self__.flag,self__.cb,meta22666__$1));
});

cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22667){
var self__ = this;
var _22667__$1 = this;
return self__.meta22666;
});

cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22665.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22666","meta22666",-1094681433,null)], null);
});

cljs.core.async.t_cljs$core$async22665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22665";

cljs.core.async.t_cljs$core$async22665.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22665");
});

cljs.core.async.__GT_t_cljs$core$async22665 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22665(alt_handler__$1,flag__$1,cb__$1,meta22666){
return (new cljs.core.async.t_cljs$core$async22665(alt_handler__$1,flag__$1,cb__$1,meta22666));
});

}

return (new cljs.core.async.t_cljs$core$async22665(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22668_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22668_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22669_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22669_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16826__auto__ = wport;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22670 = (i + (1));
i = G__22670;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16826__auto__ = ret;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16814__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___22676 = arguments.length;
var i__17885__auto___22677 = (0);
while(true){
if((i__17885__auto___22677 < len__17884__auto___22676)){
args__17891__auto__.push((arguments[i__17885__auto___22677]));

var G__22678 = (i__17885__auto___22677 + (1));
i__17885__auto___22677 = G__22678;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22673){
var map__22674 = p__22673;
var map__22674__$1 = ((((!((map__22674 == null)))?((((map__22674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22674):map__22674);
var opts = map__22674__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22671){
var G__22672 = cljs.core.first.call(null,seq22671);
var seq22671__$1 = cljs.core.next.call(null,seq22671);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22672,seq22671__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22679 = [];
var len__17884__auto___22729 = arguments.length;
var i__17885__auto___22730 = (0);
while(true){
if((i__17885__auto___22730 < len__17884__auto___22729)){
args22679.push((arguments[i__17885__auto___22730]));

var G__22731 = (i__17885__auto___22730 + (1));
i__17885__auto___22730 = G__22731;
continue;
} else {
}
break;
}

var G__22681 = args22679.length;
switch (G__22681) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22679.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18952__auto___22733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___22733){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___22733){
return (function (state_22705){
var state_val_22706 = (state_22705[(1)]);
if((state_val_22706 === (7))){
var inst_22701 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
var statearr_22707_22734 = state_22705__$1;
(statearr_22707_22734[(2)] = inst_22701);

(statearr_22707_22734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (1))){
var state_22705__$1 = state_22705;
var statearr_22708_22735 = state_22705__$1;
(statearr_22708_22735[(2)] = null);

(statearr_22708_22735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (4))){
var inst_22684 = (state_22705[(7)]);
var inst_22684__$1 = (state_22705[(2)]);
var inst_22685 = (inst_22684__$1 == null);
var state_22705__$1 = (function (){var statearr_22709 = state_22705;
(statearr_22709[(7)] = inst_22684__$1);

return statearr_22709;
})();
if(cljs.core.truth_(inst_22685)){
var statearr_22710_22736 = state_22705__$1;
(statearr_22710_22736[(1)] = (5));

} else {
var statearr_22711_22737 = state_22705__$1;
(statearr_22711_22737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (13))){
var state_22705__$1 = state_22705;
var statearr_22712_22738 = state_22705__$1;
(statearr_22712_22738[(2)] = null);

(statearr_22712_22738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (6))){
var inst_22684 = (state_22705[(7)]);
var state_22705__$1 = state_22705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22705__$1,(11),to,inst_22684);
} else {
if((state_val_22706 === (3))){
var inst_22703 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22705__$1,inst_22703);
} else {
if((state_val_22706 === (12))){
var state_22705__$1 = state_22705;
var statearr_22713_22739 = state_22705__$1;
(statearr_22713_22739[(2)] = null);

(statearr_22713_22739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (2))){
var state_22705__$1 = state_22705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22705__$1,(4),from);
} else {
if((state_val_22706 === (11))){
var inst_22694 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
if(cljs.core.truth_(inst_22694)){
var statearr_22714_22740 = state_22705__$1;
(statearr_22714_22740[(1)] = (12));

} else {
var statearr_22715_22741 = state_22705__$1;
(statearr_22715_22741[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (9))){
var state_22705__$1 = state_22705;
var statearr_22716_22742 = state_22705__$1;
(statearr_22716_22742[(2)] = null);

(statearr_22716_22742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (5))){
var state_22705__$1 = state_22705;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22717_22743 = state_22705__$1;
(statearr_22717_22743[(1)] = (8));

} else {
var statearr_22718_22744 = state_22705__$1;
(statearr_22718_22744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (14))){
var inst_22699 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
var statearr_22719_22745 = state_22705__$1;
(statearr_22719_22745[(2)] = inst_22699);

(statearr_22719_22745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (10))){
var inst_22691 = (state_22705[(2)]);
var state_22705__$1 = state_22705;
var statearr_22720_22746 = state_22705__$1;
(statearr_22720_22746[(2)] = inst_22691);

(statearr_22720_22746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22706 === (8))){
var inst_22688 = cljs.core.async.close_BANG_.call(null,to);
var state_22705__$1 = state_22705;
var statearr_22721_22747 = state_22705__$1;
(statearr_22721_22747[(2)] = inst_22688);

(statearr_22721_22747[(1)] = (10));


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
});})(c__18952__auto___22733))
;
return ((function (switch__18931__auto__,c__18952__auto___22733){
return (function() {
var cljs$core$async$state_machine__18932__auto__ = null;
var cljs$core$async$state_machine__18932__auto____0 = (function (){
var statearr_22725 = [null,null,null,null,null,null,null,null];
(statearr_22725[(0)] = cljs$core$async$state_machine__18932__auto__);

(statearr_22725[(1)] = (1));

return statearr_22725;
});
var cljs$core$async$state_machine__18932__auto____1 = (function (state_22705){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_22705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e22726){if((e22726 instanceof Object)){
var ex__18935__auto__ = e22726;
var statearr_22727_22748 = state_22705;
(statearr_22727_22748[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22749 = state_22705;
state_22705 = G__22749;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$state_machine__18932__auto__ = function(state_22705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18932__auto____1.call(this,state_22705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18932__auto____0;
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18932__auto____1;
return cljs$core$async$state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___22733))
})();
var state__18954__auto__ = (function (){var statearr_22728 = f__18953__auto__.call(null);
(statearr_22728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___22733);

return statearr_22728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___22733))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22933){
var vec__22934 = p__22933;
var v = cljs.core.nth.call(null,vec__22934,(0),null);
var p = cljs.core.nth.call(null,vec__22934,(1),null);
var job = vec__22934;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18952__auto___23116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___23116,res,vec__22934,v,p,job,jobs,results){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___23116,res,vec__22934,v,p,job,jobs,results){
return (function (state_22939){
var state_val_22940 = (state_22939[(1)]);
if((state_val_22940 === (1))){
var state_22939__$1 = state_22939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22939__$1,(2),res,v);
} else {
if((state_val_22940 === (2))){
var inst_22936 = (state_22939[(2)]);
var inst_22937 = cljs.core.async.close_BANG_.call(null,res);
var state_22939__$1 = (function (){var statearr_22941 = state_22939;
(statearr_22941[(7)] = inst_22936);

return statearr_22941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22939__$1,inst_22937);
} else {
return null;
}
}
});})(c__18952__auto___23116,res,vec__22934,v,p,job,jobs,results))
;
return ((function (switch__18931__auto__,c__18952__auto___23116,res,vec__22934,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____0 = (function (){
var statearr_22945 = [null,null,null,null,null,null,null,null];
(statearr_22945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__);

(statearr_22945[(1)] = (1));

return statearr_22945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____1 = (function (state_22939){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_22939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e22946){if((e22946 instanceof Object)){
var ex__18935__auto__ = e22946;
var statearr_22947_23117 = state_22939;
(statearr_22947_23117[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23118 = state_22939;
state_22939 = G__23118;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__ = function(state_22939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____1.call(this,state_22939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___23116,res,vec__22934,v,p,job,jobs,results))
})();
var state__18954__auto__ = (function (){var statearr_22948 = f__18953__auto__.call(null);
(statearr_22948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___23116);

return statearr_22948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___23116,res,vec__22934,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22949){
var vec__22950 = p__22949;
var v = cljs.core.nth.call(null,vec__22950,(0),null);
var p = cljs.core.nth.call(null,vec__22950,(1),null);
var job = vec__22950;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17729__auto___23119 = n;
var __23120 = (0);
while(true){
if((__23120 < n__17729__auto___23119)){
var G__22951_23121 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22951_23121) {
case "compute":
var c__18952__auto___23123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23120,c__18952__auto___23123,G__22951_23121,n__17729__auto___23119,jobs,results,process,async){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (__23120,c__18952__auto___23123,G__22951_23121,n__17729__auto___23119,jobs,results,process,async){
return (function (state_22964){
var state_val_22965 = (state_22964[(1)]);
if((state_val_22965 === (1))){
var state_22964__$1 = state_22964;
var statearr_22966_23124 = state_22964__$1;
(statearr_22966_23124[(2)] = null);

(statearr_22966_23124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22965 === (2))){
var state_22964__$1 = state_22964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22964__$1,(4),jobs);
} else {
if((state_val_22965 === (3))){
var inst_22962 = (state_22964[(2)]);
var state_22964__$1 = state_22964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22964__$1,inst_22962);
} else {
if((state_val_22965 === (4))){
var inst_22954 = (state_22964[(2)]);
var inst_22955 = process.call(null,inst_22954);
var state_22964__$1 = state_22964;
if(cljs.core.truth_(inst_22955)){
var statearr_22967_23125 = state_22964__$1;
(statearr_22967_23125[(1)] = (5));

} else {
var statearr_22968_23126 = state_22964__$1;
(statearr_22968_23126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22965 === (5))){
var state_22964__$1 = state_22964;
var statearr_22969_23127 = state_22964__$1;
(statearr_22969_23127[(2)] = null);

(statearr_22969_23127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22965 === (6))){
var state_22964__$1 = state_22964;
var statearr_22970_23128 = state_22964__$1;
(statearr_22970_23128[(2)] = null);

(statearr_22970_23128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22965 === (7))){
var inst_22960 = (state_22964[(2)]);
var state_22964__$1 = state_22964;
var statearr_22971_23129 = state_22964__$1;
(statearr_22971_23129[(2)] = inst_22960);

(statearr_22971_23129[(1)] = (3));


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
});})(__23120,c__18952__auto___23123,G__22951_23121,n__17729__auto___23119,jobs,results,process,async))
;
return ((function (__23120,switch__18931__auto__,c__18952__auto___23123,G__22951_23121,n__17729__auto___23119,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____0 = (function (){
var statearr_22975 = [null,null,null,null,null,null,null];
(statearr_22975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__);

(statearr_22975[(1)] = (1));

return statearr_22975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____1 = (function (state_22964){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_22964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e22976){if((e22976 instanceof Object)){
var ex__18935__auto__ = e22976;
var statearr_22977_23130 = state_22964;
(statearr_22977_23130[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23131 = state_22964;
state_22964 = G__23131;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__ = function(state_22964){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____1.call(this,state_22964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__;
})()
;})(__23120,switch__18931__auto__,c__18952__auto___23123,G__22951_23121,n__17729__auto___23119,jobs,results,process,async))
})();
var state__18954__auto__ = (function (){var statearr_22978 = f__18953__auto__.call(null);
(statearr_22978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___23123);

return statearr_22978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(__23120,c__18952__auto___23123,G__22951_23121,n__17729__auto___23119,jobs,results,process,async))
);


break;
case "async":
var c__18952__auto___23132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23120,c__18952__auto___23132,G__22951_23121,n__17729__auto___23119,jobs,results,process,async){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (__23120,c__18952__auto___23132,G__22951_23121,n__17729__auto___23119,jobs,results,process,async){
return (function (state_22991){
var state_val_22992 = (state_22991[(1)]);
if((state_val_22992 === (1))){
var state_22991__$1 = state_22991;
var statearr_22993_23133 = state_22991__$1;
(statearr_22993_23133[(2)] = null);

(statearr_22993_23133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22992 === (2))){
var state_22991__$1 = state_22991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22991__$1,(4),jobs);
} else {
if((state_val_22992 === (3))){
var inst_22989 = (state_22991[(2)]);
var state_22991__$1 = state_22991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22991__$1,inst_22989);
} else {
if((state_val_22992 === (4))){
var inst_22981 = (state_22991[(2)]);
var inst_22982 = async.call(null,inst_22981);
var state_22991__$1 = state_22991;
if(cljs.core.truth_(inst_22982)){
var statearr_22994_23134 = state_22991__$1;
(statearr_22994_23134[(1)] = (5));

} else {
var statearr_22995_23135 = state_22991__$1;
(statearr_22995_23135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22992 === (5))){
var state_22991__$1 = state_22991;
var statearr_22996_23136 = state_22991__$1;
(statearr_22996_23136[(2)] = null);

(statearr_22996_23136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22992 === (6))){
var state_22991__$1 = state_22991;
var statearr_22997_23137 = state_22991__$1;
(statearr_22997_23137[(2)] = null);

(statearr_22997_23137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22992 === (7))){
var inst_22987 = (state_22991[(2)]);
var state_22991__$1 = state_22991;
var statearr_22998_23138 = state_22991__$1;
(statearr_22998_23138[(2)] = inst_22987);

(statearr_22998_23138[(1)] = (3));


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
});})(__23120,c__18952__auto___23132,G__22951_23121,n__17729__auto___23119,jobs,results,process,async))
;
return ((function (__23120,switch__18931__auto__,c__18952__auto___23132,G__22951_23121,n__17729__auto___23119,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____0 = (function (){
var statearr_23002 = [null,null,null,null,null,null,null];
(statearr_23002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__);

(statearr_23002[(1)] = (1));

return statearr_23002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____1 = (function (state_22991){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_22991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e23003){if((e23003 instanceof Object)){
var ex__18935__auto__ = e23003;
var statearr_23004_23139 = state_22991;
(statearr_23004_23139[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23140 = state_22991;
state_22991 = G__23140;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__ = function(state_22991){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____1.call(this,state_22991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__;
})()
;})(__23120,switch__18931__auto__,c__18952__auto___23132,G__22951_23121,n__17729__auto___23119,jobs,results,process,async))
})();
var state__18954__auto__ = (function (){var statearr_23005 = f__18953__auto__.call(null);
(statearr_23005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___23132);

return statearr_23005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(__23120,c__18952__auto___23132,G__22951_23121,n__17729__auto___23119,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23141 = (__23120 + (1));
__23120 = G__23141;
continue;
} else {
}
break;
}

var c__18952__auto___23142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___23142,jobs,results,process,async){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___23142,jobs,results,process,async){
return (function (state_23027){
var state_val_23028 = (state_23027[(1)]);
if((state_val_23028 === (1))){
var state_23027__$1 = state_23027;
var statearr_23029_23143 = state_23027__$1;
(statearr_23029_23143[(2)] = null);

(statearr_23029_23143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23028 === (2))){
var state_23027__$1 = state_23027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23027__$1,(4),from);
} else {
if((state_val_23028 === (3))){
var inst_23025 = (state_23027[(2)]);
var state_23027__$1 = state_23027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23027__$1,inst_23025);
} else {
if((state_val_23028 === (4))){
var inst_23008 = (state_23027[(7)]);
var inst_23008__$1 = (state_23027[(2)]);
var inst_23009 = (inst_23008__$1 == null);
var state_23027__$1 = (function (){var statearr_23030 = state_23027;
(statearr_23030[(7)] = inst_23008__$1);

return statearr_23030;
})();
if(cljs.core.truth_(inst_23009)){
var statearr_23031_23144 = state_23027__$1;
(statearr_23031_23144[(1)] = (5));

} else {
var statearr_23032_23145 = state_23027__$1;
(statearr_23032_23145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23028 === (5))){
var inst_23011 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23027__$1 = state_23027;
var statearr_23033_23146 = state_23027__$1;
(statearr_23033_23146[(2)] = inst_23011);

(statearr_23033_23146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23028 === (6))){
var inst_23008 = (state_23027[(7)]);
var inst_23013 = (state_23027[(8)]);
var inst_23013__$1 = cljs.core.async.chan.call(null,(1));
var inst_23014 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23015 = [inst_23008,inst_23013__$1];
var inst_23016 = (new cljs.core.PersistentVector(null,2,(5),inst_23014,inst_23015,null));
var state_23027__$1 = (function (){var statearr_23034 = state_23027;
(statearr_23034[(8)] = inst_23013__$1);

return statearr_23034;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23027__$1,(8),jobs,inst_23016);
} else {
if((state_val_23028 === (7))){
var inst_23023 = (state_23027[(2)]);
var state_23027__$1 = state_23027;
var statearr_23035_23147 = state_23027__$1;
(statearr_23035_23147[(2)] = inst_23023);

(statearr_23035_23147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23028 === (8))){
var inst_23013 = (state_23027[(8)]);
var inst_23018 = (state_23027[(2)]);
var state_23027__$1 = (function (){var statearr_23036 = state_23027;
(statearr_23036[(9)] = inst_23018);

return statearr_23036;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23027__$1,(9),results,inst_23013);
} else {
if((state_val_23028 === (9))){
var inst_23020 = (state_23027[(2)]);
var state_23027__$1 = (function (){var statearr_23037 = state_23027;
(statearr_23037[(10)] = inst_23020);

return statearr_23037;
})();
var statearr_23038_23148 = state_23027__$1;
(statearr_23038_23148[(2)] = null);

(statearr_23038_23148[(1)] = (2));


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
});})(c__18952__auto___23142,jobs,results,process,async))
;
return ((function (switch__18931__auto__,c__18952__auto___23142,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____0 = (function (){
var statearr_23042 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23042[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__);

(statearr_23042[(1)] = (1));

return statearr_23042;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____1 = (function (state_23027){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_23027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e23043){if((e23043 instanceof Object)){
var ex__18935__auto__ = e23043;
var statearr_23044_23149 = state_23027;
(statearr_23044_23149[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23150 = state_23027;
state_23027 = G__23150;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__ = function(state_23027){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____1.call(this,state_23027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___23142,jobs,results,process,async))
})();
var state__18954__auto__ = (function (){var statearr_23045 = f__18953__auto__.call(null);
(statearr_23045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___23142);

return statearr_23045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___23142,jobs,results,process,async))
);


var c__18952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto__,jobs,results,process,async){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto__,jobs,results,process,async){
return (function (state_23083){
var state_val_23084 = (state_23083[(1)]);
if((state_val_23084 === (7))){
var inst_23079 = (state_23083[(2)]);
var state_23083__$1 = state_23083;
var statearr_23085_23151 = state_23083__$1;
(statearr_23085_23151[(2)] = inst_23079);

(statearr_23085_23151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (20))){
var state_23083__$1 = state_23083;
var statearr_23086_23152 = state_23083__$1;
(statearr_23086_23152[(2)] = null);

(statearr_23086_23152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (1))){
var state_23083__$1 = state_23083;
var statearr_23087_23153 = state_23083__$1;
(statearr_23087_23153[(2)] = null);

(statearr_23087_23153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (4))){
var inst_23048 = (state_23083[(7)]);
var inst_23048__$1 = (state_23083[(2)]);
var inst_23049 = (inst_23048__$1 == null);
var state_23083__$1 = (function (){var statearr_23088 = state_23083;
(statearr_23088[(7)] = inst_23048__$1);

return statearr_23088;
})();
if(cljs.core.truth_(inst_23049)){
var statearr_23089_23154 = state_23083__$1;
(statearr_23089_23154[(1)] = (5));

} else {
var statearr_23090_23155 = state_23083__$1;
(statearr_23090_23155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (15))){
var inst_23061 = (state_23083[(8)]);
var state_23083__$1 = state_23083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23083__$1,(18),to,inst_23061);
} else {
if((state_val_23084 === (21))){
var inst_23074 = (state_23083[(2)]);
var state_23083__$1 = state_23083;
var statearr_23091_23156 = state_23083__$1;
(statearr_23091_23156[(2)] = inst_23074);

(statearr_23091_23156[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (13))){
var inst_23076 = (state_23083[(2)]);
var state_23083__$1 = (function (){var statearr_23092 = state_23083;
(statearr_23092[(9)] = inst_23076);

return statearr_23092;
})();
var statearr_23093_23157 = state_23083__$1;
(statearr_23093_23157[(2)] = null);

(statearr_23093_23157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (6))){
var inst_23048 = (state_23083[(7)]);
var state_23083__$1 = state_23083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23083__$1,(11),inst_23048);
} else {
if((state_val_23084 === (17))){
var inst_23069 = (state_23083[(2)]);
var state_23083__$1 = state_23083;
if(cljs.core.truth_(inst_23069)){
var statearr_23094_23158 = state_23083__$1;
(statearr_23094_23158[(1)] = (19));

} else {
var statearr_23095_23159 = state_23083__$1;
(statearr_23095_23159[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (3))){
var inst_23081 = (state_23083[(2)]);
var state_23083__$1 = state_23083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23083__$1,inst_23081);
} else {
if((state_val_23084 === (12))){
var inst_23058 = (state_23083[(10)]);
var state_23083__$1 = state_23083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23083__$1,(14),inst_23058);
} else {
if((state_val_23084 === (2))){
var state_23083__$1 = state_23083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23083__$1,(4),results);
} else {
if((state_val_23084 === (19))){
var state_23083__$1 = state_23083;
var statearr_23096_23160 = state_23083__$1;
(statearr_23096_23160[(2)] = null);

(statearr_23096_23160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (11))){
var inst_23058 = (state_23083[(2)]);
var state_23083__$1 = (function (){var statearr_23097 = state_23083;
(statearr_23097[(10)] = inst_23058);

return statearr_23097;
})();
var statearr_23098_23161 = state_23083__$1;
(statearr_23098_23161[(2)] = null);

(statearr_23098_23161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (9))){
var state_23083__$1 = state_23083;
var statearr_23099_23162 = state_23083__$1;
(statearr_23099_23162[(2)] = null);

(statearr_23099_23162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (5))){
var state_23083__$1 = state_23083;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23100_23163 = state_23083__$1;
(statearr_23100_23163[(1)] = (8));

} else {
var statearr_23101_23164 = state_23083__$1;
(statearr_23101_23164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (14))){
var inst_23063 = (state_23083[(11)]);
var inst_23061 = (state_23083[(8)]);
var inst_23061__$1 = (state_23083[(2)]);
var inst_23062 = (inst_23061__$1 == null);
var inst_23063__$1 = cljs.core.not.call(null,inst_23062);
var state_23083__$1 = (function (){var statearr_23102 = state_23083;
(statearr_23102[(11)] = inst_23063__$1);

(statearr_23102[(8)] = inst_23061__$1);

return statearr_23102;
})();
if(inst_23063__$1){
var statearr_23103_23165 = state_23083__$1;
(statearr_23103_23165[(1)] = (15));

} else {
var statearr_23104_23166 = state_23083__$1;
(statearr_23104_23166[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (16))){
var inst_23063 = (state_23083[(11)]);
var state_23083__$1 = state_23083;
var statearr_23105_23167 = state_23083__$1;
(statearr_23105_23167[(2)] = inst_23063);

(statearr_23105_23167[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (10))){
var inst_23055 = (state_23083[(2)]);
var state_23083__$1 = state_23083;
var statearr_23106_23168 = state_23083__$1;
(statearr_23106_23168[(2)] = inst_23055);

(statearr_23106_23168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (18))){
var inst_23066 = (state_23083[(2)]);
var state_23083__$1 = state_23083;
var statearr_23107_23169 = state_23083__$1;
(statearr_23107_23169[(2)] = inst_23066);

(statearr_23107_23169[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23084 === (8))){
var inst_23052 = cljs.core.async.close_BANG_.call(null,to);
var state_23083__$1 = state_23083;
var statearr_23108_23170 = state_23083__$1;
(statearr_23108_23170[(2)] = inst_23052);

(statearr_23108_23170[(1)] = (10));


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
});})(c__18952__auto__,jobs,results,process,async))
;
return ((function (switch__18931__auto__,c__18952__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____0 = (function (){
var statearr_23112 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__);

(statearr_23112[(1)] = (1));

return statearr_23112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____1 = (function (state_23083){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_23083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e23113){if((e23113 instanceof Object)){
var ex__18935__auto__ = e23113;
var statearr_23114_23171 = state_23083;
(statearr_23114_23171[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23172 = state_23083;
state_23083 = G__23172;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__ = function(state_23083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____1.call(this,state_23083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18932__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto__,jobs,results,process,async))
})();
var state__18954__auto__ = (function (){var statearr_23115 = f__18953__auto__.call(null);
(statearr_23115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto__);

return statearr_23115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto__,jobs,results,process,async))
);

return c__18952__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args23173 = [];
var len__17884__auto___23176 = arguments.length;
var i__17885__auto___23177 = (0);
while(true){
if((i__17885__auto___23177 < len__17884__auto___23176)){
args23173.push((arguments[i__17885__auto___23177]));

var G__23178 = (i__17885__auto___23177 + (1));
i__17885__auto___23177 = G__23178;
continue;
} else {
}
break;
}

var G__23175 = args23173.length;
switch (G__23175) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23173.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args23180 = [];
var len__17884__auto___23183 = arguments.length;
var i__17885__auto___23184 = (0);
while(true){
if((i__17885__auto___23184 < len__17884__auto___23183)){
args23180.push((arguments[i__17885__auto___23184]));

var G__23185 = (i__17885__auto___23184 + (1));
i__17885__auto___23184 = G__23185;
continue;
} else {
}
break;
}

var G__23182 = args23180.length;
switch (G__23182) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23180.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args23187 = [];
var len__17884__auto___23240 = arguments.length;
var i__17885__auto___23241 = (0);
while(true){
if((i__17885__auto___23241 < len__17884__auto___23240)){
args23187.push((arguments[i__17885__auto___23241]));

var G__23242 = (i__17885__auto___23241 + (1));
i__17885__auto___23241 = G__23242;
continue;
} else {
}
break;
}

var G__23189 = args23187.length;
switch (G__23189) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23187.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18952__auto___23244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___23244,tc,fc){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___23244,tc,fc){
return (function (state_23215){
var state_val_23216 = (state_23215[(1)]);
if((state_val_23216 === (7))){
var inst_23211 = (state_23215[(2)]);
var state_23215__$1 = state_23215;
var statearr_23217_23245 = state_23215__$1;
(statearr_23217_23245[(2)] = inst_23211);

(statearr_23217_23245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23216 === (1))){
var state_23215__$1 = state_23215;
var statearr_23218_23246 = state_23215__$1;
(statearr_23218_23246[(2)] = null);

(statearr_23218_23246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23216 === (4))){
var inst_23192 = (state_23215[(7)]);
var inst_23192__$1 = (state_23215[(2)]);
var inst_23193 = (inst_23192__$1 == null);
var state_23215__$1 = (function (){var statearr_23219 = state_23215;
(statearr_23219[(7)] = inst_23192__$1);

return statearr_23219;
})();
if(cljs.core.truth_(inst_23193)){
var statearr_23220_23247 = state_23215__$1;
(statearr_23220_23247[(1)] = (5));

} else {
var statearr_23221_23248 = state_23215__$1;
(statearr_23221_23248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23216 === (13))){
var state_23215__$1 = state_23215;
var statearr_23222_23249 = state_23215__$1;
(statearr_23222_23249[(2)] = null);

(statearr_23222_23249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23216 === (6))){
var inst_23192 = (state_23215[(7)]);
var inst_23198 = p.call(null,inst_23192);
var state_23215__$1 = state_23215;
if(cljs.core.truth_(inst_23198)){
var statearr_23223_23250 = state_23215__$1;
(statearr_23223_23250[(1)] = (9));

} else {
var statearr_23224_23251 = state_23215__$1;
(statearr_23224_23251[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23216 === (3))){
var inst_23213 = (state_23215[(2)]);
var state_23215__$1 = state_23215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23215__$1,inst_23213);
} else {
if((state_val_23216 === (12))){
var state_23215__$1 = state_23215;
var statearr_23225_23252 = state_23215__$1;
(statearr_23225_23252[(2)] = null);

(statearr_23225_23252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23216 === (2))){
var state_23215__$1 = state_23215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23215__$1,(4),ch);
} else {
if((state_val_23216 === (11))){
var inst_23192 = (state_23215[(7)]);
var inst_23202 = (state_23215[(2)]);
var state_23215__$1 = state_23215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23215__$1,(8),inst_23202,inst_23192);
} else {
if((state_val_23216 === (9))){
var state_23215__$1 = state_23215;
var statearr_23226_23253 = state_23215__$1;
(statearr_23226_23253[(2)] = tc);

(statearr_23226_23253[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23216 === (5))){
var inst_23195 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23196 = cljs.core.async.close_BANG_.call(null,fc);
var state_23215__$1 = (function (){var statearr_23227 = state_23215;
(statearr_23227[(8)] = inst_23195);

return statearr_23227;
})();
var statearr_23228_23254 = state_23215__$1;
(statearr_23228_23254[(2)] = inst_23196);

(statearr_23228_23254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23216 === (14))){
var inst_23209 = (state_23215[(2)]);
var state_23215__$1 = state_23215;
var statearr_23229_23255 = state_23215__$1;
(statearr_23229_23255[(2)] = inst_23209);

(statearr_23229_23255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23216 === (10))){
var state_23215__$1 = state_23215;
var statearr_23230_23256 = state_23215__$1;
(statearr_23230_23256[(2)] = fc);

(statearr_23230_23256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23216 === (8))){
var inst_23204 = (state_23215[(2)]);
var state_23215__$1 = state_23215;
if(cljs.core.truth_(inst_23204)){
var statearr_23231_23257 = state_23215__$1;
(statearr_23231_23257[(1)] = (12));

} else {
var statearr_23232_23258 = state_23215__$1;
(statearr_23232_23258[(1)] = (13));

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
});})(c__18952__auto___23244,tc,fc))
;
return ((function (switch__18931__auto__,c__18952__auto___23244,tc,fc){
return (function() {
var cljs$core$async$state_machine__18932__auto__ = null;
var cljs$core$async$state_machine__18932__auto____0 = (function (){
var statearr_23236 = [null,null,null,null,null,null,null,null,null];
(statearr_23236[(0)] = cljs$core$async$state_machine__18932__auto__);

(statearr_23236[(1)] = (1));

return statearr_23236;
});
var cljs$core$async$state_machine__18932__auto____1 = (function (state_23215){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_23215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e23237){if((e23237 instanceof Object)){
var ex__18935__auto__ = e23237;
var statearr_23238_23259 = state_23215;
(statearr_23238_23259[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23260 = state_23215;
state_23215 = G__23260;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$state_machine__18932__auto__ = function(state_23215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18932__auto____1.call(this,state_23215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18932__auto____0;
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18932__auto____1;
return cljs$core$async$state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___23244,tc,fc))
})();
var state__18954__auto__ = (function (){var statearr_23239 = f__18953__auto__.call(null);
(statearr_23239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___23244);

return statearr_23239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___23244,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto__){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto__){
return (function (state_23324){
var state_val_23325 = (state_23324[(1)]);
if((state_val_23325 === (7))){
var inst_23320 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
var statearr_23326_23347 = state_23324__$1;
(statearr_23326_23347[(2)] = inst_23320);

(statearr_23326_23347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (1))){
var inst_23304 = init;
var state_23324__$1 = (function (){var statearr_23327 = state_23324;
(statearr_23327[(7)] = inst_23304);

return statearr_23327;
})();
var statearr_23328_23348 = state_23324__$1;
(statearr_23328_23348[(2)] = null);

(statearr_23328_23348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (4))){
var inst_23307 = (state_23324[(8)]);
var inst_23307__$1 = (state_23324[(2)]);
var inst_23308 = (inst_23307__$1 == null);
var state_23324__$1 = (function (){var statearr_23329 = state_23324;
(statearr_23329[(8)] = inst_23307__$1);

return statearr_23329;
})();
if(cljs.core.truth_(inst_23308)){
var statearr_23330_23349 = state_23324__$1;
(statearr_23330_23349[(1)] = (5));

} else {
var statearr_23331_23350 = state_23324__$1;
(statearr_23331_23350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (6))){
var inst_23307 = (state_23324[(8)]);
var inst_23311 = (state_23324[(9)]);
var inst_23304 = (state_23324[(7)]);
var inst_23311__$1 = f.call(null,inst_23304,inst_23307);
var inst_23312 = cljs.core.reduced_QMARK_.call(null,inst_23311__$1);
var state_23324__$1 = (function (){var statearr_23332 = state_23324;
(statearr_23332[(9)] = inst_23311__$1);

return statearr_23332;
})();
if(inst_23312){
var statearr_23333_23351 = state_23324__$1;
(statearr_23333_23351[(1)] = (8));

} else {
var statearr_23334_23352 = state_23324__$1;
(statearr_23334_23352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (3))){
var inst_23322 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23324__$1,inst_23322);
} else {
if((state_val_23325 === (2))){
var state_23324__$1 = state_23324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23324__$1,(4),ch);
} else {
if((state_val_23325 === (9))){
var inst_23311 = (state_23324[(9)]);
var inst_23304 = inst_23311;
var state_23324__$1 = (function (){var statearr_23335 = state_23324;
(statearr_23335[(7)] = inst_23304);

return statearr_23335;
})();
var statearr_23336_23353 = state_23324__$1;
(statearr_23336_23353[(2)] = null);

(statearr_23336_23353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (5))){
var inst_23304 = (state_23324[(7)]);
var state_23324__$1 = state_23324;
var statearr_23337_23354 = state_23324__$1;
(statearr_23337_23354[(2)] = inst_23304);

(statearr_23337_23354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (10))){
var inst_23318 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
var statearr_23338_23355 = state_23324__$1;
(statearr_23338_23355[(2)] = inst_23318);

(statearr_23338_23355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (8))){
var inst_23311 = (state_23324[(9)]);
var inst_23314 = cljs.core.deref.call(null,inst_23311);
var state_23324__$1 = state_23324;
var statearr_23339_23356 = state_23324__$1;
(statearr_23339_23356[(2)] = inst_23314);

(statearr_23339_23356[(1)] = (10));


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
});})(c__18952__auto__))
;
return ((function (switch__18931__auto__,c__18952__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18932__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18932__auto____0 = (function (){
var statearr_23343 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23343[(0)] = cljs$core$async$reduce_$_state_machine__18932__auto__);

(statearr_23343[(1)] = (1));

return statearr_23343;
});
var cljs$core$async$reduce_$_state_machine__18932__auto____1 = (function (state_23324){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_23324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e23344){if((e23344 instanceof Object)){
var ex__18935__auto__ = e23344;
var statearr_23345_23357 = state_23324;
(statearr_23345_23357[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23358 = state_23324;
state_23324 = G__23358;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18932__auto__ = function(state_23324){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18932__auto____1.call(this,state_23324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18932__auto____0;
cljs$core$async$reduce_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18932__auto____1;
return cljs$core$async$reduce_$_state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto__))
})();
var state__18954__auto__ = (function (){var statearr_23346 = f__18953__auto__.call(null);
(statearr_23346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto__);

return statearr_23346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto__))
);

return c__18952__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23359 = [];
var len__17884__auto___23411 = arguments.length;
var i__17885__auto___23412 = (0);
while(true){
if((i__17885__auto___23412 < len__17884__auto___23411)){
args23359.push((arguments[i__17885__auto___23412]));

var G__23413 = (i__17885__auto___23412 + (1));
i__17885__auto___23412 = G__23413;
continue;
} else {
}
break;
}

var G__23361 = args23359.length;
switch (G__23361) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23359.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto__){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto__){
return (function (state_23386){
var state_val_23387 = (state_23386[(1)]);
if((state_val_23387 === (7))){
var inst_23368 = (state_23386[(2)]);
var state_23386__$1 = state_23386;
var statearr_23388_23415 = state_23386__$1;
(statearr_23388_23415[(2)] = inst_23368);

(statearr_23388_23415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23387 === (1))){
var inst_23362 = cljs.core.seq.call(null,coll);
var inst_23363 = inst_23362;
var state_23386__$1 = (function (){var statearr_23389 = state_23386;
(statearr_23389[(7)] = inst_23363);

return statearr_23389;
})();
var statearr_23390_23416 = state_23386__$1;
(statearr_23390_23416[(2)] = null);

(statearr_23390_23416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23387 === (4))){
var inst_23363 = (state_23386[(7)]);
var inst_23366 = cljs.core.first.call(null,inst_23363);
var state_23386__$1 = state_23386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23386__$1,(7),ch,inst_23366);
} else {
if((state_val_23387 === (13))){
var inst_23380 = (state_23386[(2)]);
var state_23386__$1 = state_23386;
var statearr_23391_23417 = state_23386__$1;
(statearr_23391_23417[(2)] = inst_23380);

(statearr_23391_23417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23387 === (6))){
var inst_23371 = (state_23386[(2)]);
var state_23386__$1 = state_23386;
if(cljs.core.truth_(inst_23371)){
var statearr_23392_23418 = state_23386__$1;
(statearr_23392_23418[(1)] = (8));

} else {
var statearr_23393_23419 = state_23386__$1;
(statearr_23393_23419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23387 === (3))){
var inst_23384 = (state_23386[(2)]);
var state_23386__$1 = state_23386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23386__$1,inst_23384);
} else {
if((state_val_23387 === (12))){
var state_23386__$1 = state_23386;
var statearr_23394_23420 = state_23386__$1;
(statearr_23394_23420[(2)] = null);

(statearr_23394_23420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23387 === (2))){
var inst_23363 = (state_23386[(7)]);
var state_23386__$1 = state_23386;
if(cljs.core.truth_(inst_23363)){
var statearr_23395_23421 = state_23386__$1;
(statearr_23395_23421[(1)] = (4));

} else {
var statearr_23396_23422 = state_23386__$1;
(statearr_23396_23422[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23387 === (11))){
var inst_23377 = cljs.core.async.close_BANG_.call(null,ch);
var state_23386__$1 = state_23386;
var statearr_23397_23423 = state_23386__$1;
(statearr_23397_23423[(2)] = inst_23377);

(statearr_23397_23423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23387 === (9))){
var state_23386__$1 = state_23386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23398_23424 = state_23386__$1;
(statearr_23398_23424[(1)] = (11));

} else {
var statearr_23399_23425 = state_23386__$1;
(statearr_23399_23425[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23387 === (5))){
var inst_23363 = (state_23386[(7)]);
var state_23386__$1 = state_23386;
var statearr_23400_23426 = state_23386__$1;
(statearr_23400_23426[(2)] = inst_23363);

(statearr_23400_23426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23387 === (10))){
var inst_23382 = (state_23386[(2)]);
var state_23386__$1 = state_23386;
var statearr_23401_23427 = state_23386__$1;
(statearr_23401_23427[(2)] = inst_23382);

(statearr_23401_23427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23387 === (8))){
var inst_23363 = (state_23386[(7)]);
var inst_23373 = cljs.core.next.call(null,inst_23363);
var inst_23363__$1 = inst_23373;
var state_23386__$1 = (function (){var statearr_23402 = state_23386;
(statearr_23402[(7)] = inst_23363__$1);

return statearr_23402;
})();
var statearr_23403_23428 = state_23386__$1;
(statearr_23403_23428[(2)] = null);

(statearr_23403_23428[(1)] = (2));


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
});})(c__18952__auto__))
;
return ((function (switch__18931__auto__,c__18952__auto__){
return (function() {
var cljs$core$async$state_machine__18932__auto__ = null;
var cljs$core$async$state_machine__18932__auto____0 = (function (){
var statearr_23407 = [null,null,null,null,null,null,null,null];
(statearr_23407[(0)] = cljs$core$async$state_machine__18932__auto__);

(statearr_23407[(1)] = (1));

return statearr_23407;
});
var cljs$core$async$state_machine__18932__auto____1 = (function (state_23386){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_23386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e23408){if((e23408 instanceof Object)){
var ex__18935__auto__ = e23408;
var statearr_23409_23429 = state_23386;
(statearr_23409_23429[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23430 = state_23386;
state_23386 = G__23430;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$state_machine__18932__auto__ = function(state_23386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18932__auto____1.call(this,state_23386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18932__auto____0;
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18932__auto____1;
return cljs$core$async$state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto__))
})();
var state__18954__auto__ = (function (){var statearr_23410 = f__18953__auto__.call(null);
(statearr_23410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto__);

return statearr_23410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto__))
);

return c__18952__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17481__auto__ = (((_ == null))?null:_);
var m__17482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,_);
} else {
var m__17482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23652 = (function (mult,ch,cs,meta23653){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23653 = meta23653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23654,meta23653__$1){
var self__ = this;
var _23654__$1 = this;
return (new cljs.core.async.t_cljs$core$async23652(self__.mult,self__.ch,self__.cs,meta23653__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23654){
var self__ = this;
var _23654__$1 = this;
return self__.meta23653;
});})(cs))
;

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23652.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23652.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23653","meta23653",-1780449435,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23652";

cljs.core.async.t_cljs$core$async23652.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23652");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23652 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23652(mult__$1,ch__$1,cs__$1,meta23653){
return (new cljs.core.async.t_cljs$core$async23652(mult__$1,ch__$1,cs__$1,meta23653));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23652(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18952__auto___23873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___23873,cs,m,dchan,dctr,done){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___23873,cs,m,dchan,dctr,done){
return (function (state_23785){
var state_val_23786 = (state_23785[(1)]);
if((state_val_23786 === (7))){
var inst_23781 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23787_23874 = state_23785__$1;
(statearr_23787_23874[(2)] = inst_23781);

(statearr_23787_23874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (20))){
var inst_23686 = (state_23785[(7)]);
var inst_23696 = cljs.core.first.call(null,inst_23686);
var inst_23697 = cljs.core.nth.call(null,inst_23696,(0),null);
var inst_23698 = cljs.core.nth.call(null,inst_23696,(1),null);
var state_23785__$1 = (function (){var statearr_23788 = state_23785;
(statearr_23788[(8)] = inst_23697);

return statearr_23788;
})();
if(cljs.core.truth_(inst_23698)){
var statearr_23789_23875 = state_23785__$1;
(statearr_23789_23875[(1)] = (22));

} else {
var statearr_23790_23876 = state_23785__$1;
(statearr_23790_23876[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (27))){
var inst_23733 = (state_23785[(9)]);
var inst_23657 = (state_23785[(10)]);
var inst_23726 = (state_23785[(11)]);
var inst_23728 = (state_23785[(12)]);
var inst_23733__$1 = cljs.core._nth.call(null,inst_23726,inst_23728);
var inst_23734 = cljs.core.async.put_BANG_.call(null,inst_23733__$1,inst_23657,done);
var state_23785__$1 = (function (){var statearr_23791 = state_23785;
(statearr_23791[(9)] = inst_23733__$1);

return statearr_23791;
})();
if(cljs.core.truth_(inst_23734)){
var statearr_23792_23877 = state_23785__$1;
(statearr_23792_23877[(1)] = (30));

} else {
var statearr_23793_23878 = state_23785__$1;
(statearr_23793_23878[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (1))){
var state_23785__$1 = state_23785;
var statearr_23794_23879 = state_23785__$1;
(statearr_23794_23879[(2)] = null);

(statearr_23794_23879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (24))){
var inst_23686 = (state_23785[(7)]);
var inst_23703 = (state_23785[(2)]);
var inst_23704 = cljs.core.next.call(null,inst_23686);
var inst_23666 = inst_23704;
var inst_23667 = null;
var inst_23668 = (0);
var inst_23669 = (0);
var state_23785__$1 = (function (){var statearr_23795 = state_23785;
(statearr_23795[(13)] = inst_23669);

(statearr_23795[(14)] = inst_23668);

(statearr_23795[(15)] = inst_23666);

(statearr_23795[(16)] = inst_23667);

(statearr_23795[(17)] = inst_23703);

return statearr_23795;
})();
var statearr_23796_23880 = state_23785__$1;
(statearr_23796_23880[(2)] = null);

(statearr_23796_23880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (39))){
var state_23785__$1 = state_23785;
var statearr_23800_23881 = state_23785__$1;
(statearr_23800_23881[(2)] = null);

(statearr_23800_23881[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (4))){
var inst_23657 = (state_23785[(10)]);
var inst_23657__$1 = (state_23785[(2)]);
var inst_23658 = (inst_23657__$1 == null);
var state_23785__$1 = (function (){var statearr_23801 = state_23785;
(statearr_23801[(10)] = inst_23657__$1);

return statearr_23801;
})();
if(cljs.core.truth_(inst_23658)){
var statearr_23802_23882 = state_23785__$1;
(statearr_23802_23882[(1)] = (5));

} else {
var statearr_23803_23883 = state_23785__$1;
(statearr_23803_23883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (15))){
var inst_23669 = (state_23785[(13)]);
var inst_23668 = (state_23785[(14)]);
var inst_23666 = (state_23785[(15)]);
var inst_23667 = (state_23785[(16)]);
var inst_23682 = (state_23785[(2)]);
var inst_23683 = (inst_23669 + (1));
var tmp23797 = inst_23668;
var tmp23798 = inst_23666;
var tmp23799 = inst_23667;
var inst_23666__$1 = tmp23798;
var inst_23667__$1 = tmp23799;
var inst_23668__$1 = tmp23797;
var inst_23669__$1 = inst_23683;
var state_23785__$1 = (function (){var statearr_23804 = state_23785;
(statearr_23804[(13)] = inst_23669__$1);

(statearr_23804[(18)] = inst_23682);

(statearr_23804[(14)] = inst_23668__$1);

(statearr_23804[(15)] = inst_23666__$1);

(statearr_23804[(16)] = inst_23667__$1);

return statearr_23804;
})();
var statearr_23805_23884 = state_23785__$1;
(statearr_23805_23884[(2)] = null);

(statearr_23805_23884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (21))){
var inst_23707 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23809_23885 = state_23785__$1;
(statearr_23809_23885[(2)] = inst_23707);

(statearr_23809_23885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (31))){
var inst_23733 = (state_23785[(9)]);
var inst_23737 = done.call(null,null);
var inst_23738 = cljs.core.async.untap_STAR_.call(null,m,inst_23733);
var state_23785__$1 = (function (){var statearr_23810 = state_23785;
(statearr_23810[(19)] = inst_23737);

return statearr_23810;
})();
var statearr_23811_23886 = state_23785__$1;
(statearr_23811_23886[(2)] = inst_23738);

(statearr_23811_23886[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (32))){
var inst_23725 = (state_23785[(20)]);
var inst_23726 = (state_23785[(11)]);
var inst_23727 = (state_23785[(21)]);
var inst_23728 = (state_23785[(12)]);
var inst_23740 = (state_23785[(2)]);
var inst_23741 = (inst_23728 + (1));
var tmp23806 = inst_23725;
var tmp23807 = inst_23726;
var tmp23808 = inst_23727;
var inst_23725__$1 = tmp23806;
var inst_23726__$1 = tmp23807;
var inst_23727__$1 = tmp23808;
var inst_23728__$1 = inst_23741;
var state_23785__$1 = (function (){var statearr_23812 = state_23785;
(statearr_23812[(20)] = inst_23725__$1);

(statearr_23812[(11)] = inst_23726__$1);

(statearr_23812[(22)] = inst_23740);

(statearr_23812[(21)] = inst_23727__$1);

(statearr_23812[(12)] = inst_23728__$1);

return statearr_23812;
})();
var statearr_23813_23887 = state_23785__$1;
(statearr_23813_23887[(2)] = null);

(statearr_23813_23887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (40))){
var inst_23753 = (state_23785[(23)]);
var inst_23757 = done.call(null,null);
var inst_23758 = cljs.core.async.untap_STAR_.call(null,m,inst_23753);
var state_23785__$1 = (function (){var statearr_23814 = state_23785;
(statearr_23814[(24)] = inst_23757);

return statearr_23814;
})();
var statearr_23815_23888 = state_23785__$1;
(statearr_23815_23888[(2)] = inst_23758);

(statearr_23815_23888[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (33))){
var inst_23744 = (state_23785[(25)]);
var inst_23746 = cljs.core.chunked_seq_QMARK_.call(null,inst_23744);
var state_23785__$1 = state_23785;
if(inst_23746){
var statearr_23816_23889 = state_23785__$1;
(statearr_23816_23889[(1)] = (36));

} else {
var statearr_23817_23890 = state_23785__$1;
(statearr_23817_23890[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (13))){
var inst_23676 = (state_23785[(26)]);
var inst_23679 = cljs.core.async.close_BANG_.call(null,inst_23676);
var state_23785__$1 = state_23785;
var statearr_23818_23891 = state_23785__$1;
(statearr_23818_23891[(2)] = inst_23679);

(statearr_23818_23891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (22))){
var inst_23697 = (state_23785[(8)]);
var inst_23700 = cljs.core.async.close_BANG_.call(null,inst_23697);
var state_23785__$1 = state_23785;
var statearr_23819_23892 = state_23785__$1;
(statearr_23819_23892[(2)] = inst_23700);

(statearr_23819_23892[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (36))){
var inst_23744 = (state_23785[(25)]);
var inst_23748 = cljs.core.chunk_first.call(null,inst_23744);
var inst_23749 = cljs.core.chunk_rest.call(null,inst_23744);
var inst_23750 = cljs.core.count.call(null,inst_23748);
var inst_23725 = inst_23749;
var inst_23726 = inst_23748;
var inst_23727 = inst_23750;
var inst_23728 = (0);
var state_23785__$1 = (function (){var statearr_23820 = state_23785;
(statearr_23820[(20)] = inst_23725);

(statearr_23820[(11)] = inst_23726);

(statearr_23820[(21)] = inst_23727);

(statearr_23820[(12)] = inst_23728);

return statearr_23820;
})();
var statearr_23821_23893 = state_23785__$1;
(statearr_23821_23893[(2)] = null);

(statearr_23821_23893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (41))){
var inst_23744 = (state_23785[(25)]);
var inst_23760 = (state_23785[(2)]);
var inst_23761 = cljs.core.next.call(null,inst_23744);
var inst_23725 = inst_23761;
var inst_23726 = null;
var inst_23727 = (0);
var inst_23728 = (0);
var state_23785__$1 = (function (){var statearr_23822 = state_23785;
(statearr_23822[(20)] = inst_23725);

(statearr_23822[(11)] = inst_23726);

(statearr_23822[(21)] = inst_23727);

(statearr_23822[(12)] = inst_23728);

(statearr_23822[(27)] = inst_23760);

return statearr_23822;
})();
var statearr_23823_23894 = state_23785__$1;
(statearr_23823_23894[(2)] = null);

(statearr_23823_23894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (43))){
var state_23785__$1 = state_23785;
var statearr_23824_23895 = state_23785__$1;
(statearr_23824_23895[(2)] = null);

(statearr_23824_23895[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (29))){
var inst_23769 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23825_23896 = state_23785__$1;
(statearr_23825_23896[(2)] = inst_23769);

(statearr_23825_23896[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (44))){
var inst_23778 = (state_23785[(2)]);
var state_23785__$1 = (function (){var statearr_23826 = state_23785;
(statearr_23826[(28)] = inst_23778);

return statearr_23826;
})();
var statearr_23827_23897 = state_23785__$1;
(statearr_23827_23897[(2)] = null);

(statearr_23827_23897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (6))){
var inst_23717 = (state_23785[(29)]);
var inst_23716 = cljs.core.deref.call(null,cs);
var inst_23717__$1 = cljs.core.keys.call(null,inst_23716);
var inst_23718 = cljs.core.count.call(null,inst_23717__$1);
var inst_23719 = cljs.core.reset_BANG_.call(null,dctr,inst_23718);
var inst_23724 = cljs.core.seq.call(null,inst_23717__$1);
var inst_23725 = inst_23724;
var inst_23726 = null;
var inst_23727 = (0);
var inst_23728 = (0);
var state_23785__$1 = (function (){var statearr_23828 = state_23785;
(statearr_23828[(20)] = inst_23725);

(statearr_23828[(11)] = inst_23726);

(statearr_23828[(29)] = inst_23717__$1);

(statearr_23828[(21)] = inst_23727);

(statearr_23828[(30)] = inst_23719);

(statearr_23828[(12)] = inst_23728);

return statearr_23828;
})();
var statearr_23829_23898 = state_23785__$1;
(statearr_23829_23898[(2)] = null);

(statearr_23829_23898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (28))){
var inst_23725 = (state_23785[(20)]);
var inst_23744 = (state_23785[(25)]);
var inst_23744__$1 = cljs.core.seq.call(null,inst_23725);
var state_23785__$1 = (function (){var statearr_23830 = state_23785;
(statearr_23830[(25)] = inst_23744__$1);

return statearr_23830;
})();
if(inst_23744__$1){
var statearr_23831_23899 = state_23785__$1;
(statearr_23831_23899[(1)] = (33));

} else {
var statearr_23832_23900 = state_23785__$1;
(statearr_23832_23900[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (25))){
var inst_23727 = (state_23785[(21)]);
var inst_23728 = (state_23785[(12)]);
var inst_23730 = (inst_23728 < inst_23727);
var inst_23731 = inst_23730;
var state_23785__$1 = state_23785;
if(cljs.core.truth_(inst_23731)){
var statearr_23833_23901 = state_23785__$1;
(statearr_23833_23901[(1)] = (27));

} else {
var statearr_23834_23902 = state_23785__$1;
(statearr_23834_23902[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (34))){
var state_23785__$1 = state_23785;
var statearr_23835_23903 = state_23785__$1;
(statearr_23835_23903[(2)] = null);

(statearr_23835_23903[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (17))){
var state_23785__$1 = state_23785;
var statearr_23836_23904 = state_23785__$1;
(statearr_23836_23904[(2)] = null);

(statearr_23836_23904[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (3))){
var inst_23783 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23785__$1,inst_23783);
} else {
if((state_val_23786 === (12))){
var inst_23712 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23837_23905 = state_23785__$1;
(statearr_23837_23905[(2)] = inst_23712);

(statearr_23837_23905[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (2))){
var state_23785__$1 = state_23785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23785__$1,(4),ch);
} else {
if((state_val_23786 === (23))){
var state_23785__$1 = state_23785;
var statearr_23838_23906 = state_23785__$1;
(statearr_23838_23906[(2)] = null);

(statearr_23838_23906[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (35))){
var inst_23767 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23839_23907 = state_23785__$1;
(statearr_23839_23907[(2)] = inst_23767);

(statearr_23839_23907[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (19))){
var inst_23686 = (state_23785[(7)]);
var inst_23690 = cljs.core.chunk_first.call(null,inst_23686);
var inst_23691 = cljs.core.chunk_rest.call(null,inst_23686);
var inst_23692 = cljs.core.count.call(null,inst_23690);
var inst_23666 = inst_23691;
var inst_23667 = inst_23690;
var inst_23668 = inst_23692;
var inst_23669 = (0);
var state_23785__$1 = (function (){var statearr_23840 = state_23785;
(statearr_23840[(13)] = inst_23669);

(statearr_23840[(14)] = inst_23668);

(statearr_23840[(15)] = inst_23666);

(statearr_23840[(16)] = inst_23667);

return statearr_23840;
})();
var statearr_23841_23908 = state_23785__$1;
(statearr_23841_23908[(2)] = null);

(statearr_23841_23908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (11))){
var inst_23686 = (state_23785[(7)]);
var inst_23666 = (state_23785[(15)]);
var inst_23686__$1 = cljs.core.seq.call(null,inst_23666);
var state_23785__$1 = (function (){var statearr_23842 = state_23785;
(statearr_23842[(7)] = inst_23686__$1);

return statearr_23842;
})();
if(inst_23686__$1){
var statearr_23843_23909 = state_23785__$1;
(statearr_23843_23909[(1)] = (16));

} else {
var statearr_23844_23910 = state_23785__$1;
(statearr_23844_23910[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (9))){
var inst_23714 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23845_23911 = state_23785__$1;
(statearr_23845_23911[(2)] = inst_23714);

(statearr_23845_23911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (5))){
var inst_23664 = cljs.core.deref.call(null,cs);
var inst_23665 = cljs.core.seq.call(null,inst_23664);
var inst_23666 = inst_23665;
var inst_23667 = null;
var inst_23668 = (0);
var inst_23669 = (0);
var state_23785__$1 = (function (){var statearr_23846 = state_23785;
(statearr_23846[(13)] = inst_23669);

(statearr_23846[(14)] = inst_23668);

(statearr_23846[(15)] = inst_23666);

(statearr_23846[(16)] = inst_23667);

return statearr_23846;
})();
var statearr_23847_23912 = state_23785__$1;
(statearr_23847_23912[(2)] = null);

(statearr_23847_23912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (14))){
var state_23785__$1 = state_23785;
var statearr_23848_23913 = state_23785__$1;
(statearr_23848_23913[(2)] = null);

(statearr_23848_23913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (45))){
var inst_23775 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23849_23914 = state_23785__$1;
(statearr_23849_23914[(2)] = inst_23775);

(statearr_23849_23914[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (26))){
var inst_23717 = (state_23785[(29)]);
var inst_23771 = (state_23785[(2)]);
var inst_23772 = cljs.core.seq.call(null,inst_23717);
var state_23785__$1 = (function (){var statearr_23850 = state_23785;
(statearr_23850[(31)] = inst_23771);

return statearr_23850;
})();
if(inst_23772){
var statearr_23851_23915 = state_23785__$1;
(statearr_23851_23915[(1)] = (42));

} else {
var statearr_23852_23916 = state_23785__$1;
(statearr_23852_23916[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (16))){
var inst_23686 = (state_23785[(7)]);
var inst_23688 = cljs.core.chunked_seq_QMARK_.call(null,inst_23686);
var state_23785__$1 = state_23785;
if(inst_23688){
var statearr_23853_23917 = state_23785__$1;
(statearr_23853_23917[(1)] = (19));

} else {
var statearr_23854_23918 = state_23785__$1;
(statearr_23854_23918[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (38))){
var inst_23764 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23855_23919 = state_23785__$1;
(statearr_23855_23919[(2)] = inst_23764);

(statearr_23855_23919[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (30))){
var state_23785__$1 = state_23785;
var statearr_23856_23920 = state_23785__$1;
(statearr_23856_23920[(2)] = null);

(statearr_23856_23920[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (10))){
var inst_23669 = (state_23785[(13)]);
var inst_23667 = (state_23785[(16)]);
var inst_23675 = cljs.core._nth.call(null,inst_23667,inst_23669);
var inst_23676 = cljs.core.nth.call(null,inst_23675,(0),null);
var inst_23677 = cljs.core.nth.call(null,inst_23675,(1),null);
var state_23785__$1 = (function (){var statearr_23857 = state_23785;
(statearr_23857[(26)] = inst_23676);

return statearr_23857;
})();
if(cljs.core.truth_(inst_23677)){
var statearr_23858_23921 = state_23785__$1;
(statearr_23858_23921[(1)] = (13));

} else {
var statearr_23859_23922 = state_23785__$1;
(statearr_23859_23922[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (18))){
var inst_23710 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23860_23923 = state_23785__$1;
(statearr_23860_23923[(2)] = inst_23710);

(statearr_23860_23923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (42))){
var state_23785__$1 = state_23785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23785__$1,(45),dchan);
} else {
if((state_val_23786 === (37))){
var inst_23657 = (state_23785[(10)]);
var inst_23753 = (state_23785[(23)]);
var inst_23744 = (state_23785[(25)]);
var inst_23753__$1 = cljs.core.first.call(null,inst_23744);
var inst_23754 = cljs.core.async.put_BANG_.call(null,inst_23753__$1,inst_23657,done);
var state_23785__$1 = (function (){var statearr_23861 = state_23785;
(statearr_23861[(23)] = inst_23753__$1);

return statearr_23861;
})();
if(cljs.core.truth_(inst_23754)){
var statearr_23862_23924 = state_23785__$1;
(statearr_23862_23924[(1)] = (39));

} else {
var statearr_23863_23925 = state_23785__$1;
(statearr_23863_23925[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (8))){
var inst_23669 = (state_23785[(13)]);
var inst_23668 = (state_23785[(14)]);
var inst_23671 = (inst_23669 < inst_23668);
var inst_23672 = inst_23671;
var state_23785__$1 = state_23785;
if(cljs.core.truth_(inst_23672)){
var statearr_23864_23926 = state_23785__$1;
(statearr_23864_23926[(1)] = (10));

} else {
var statearr_23865_23927 = state_23785__$1;
(statearr_23865_23927[(1)] = (11));

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
});})(c__18952__auto___23873,cs,m,dchan,dctr,done))
;
return ((function (switch__18931__auto__,c__18952__auto___23873,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18932__auto__ = null;
var cljs$core$async$mult_$_state_machine__18932__auto____0 = (function (){
var statearr_23869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23869[(0)] = cljs$core$async$mult_$_state_machine__18932__auto__);

(statearr_23869[(1)] = (1));

return statearr_23869;
});
var cljs$core$async$mult_$_state_machine__18932__auto____1 = (function (state_23785){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_23785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e23870){if((e23870 instanceof Object)){
var ex__18935__auto__ = e23870;
var statearr_23871_23928 = state_23785;
(statearr_23871_23928[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23929 = state_23785;
state_23785 = G__23929;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18932__auto__ = function(state_23785){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18932__auto____1.call(this,state_23785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18932__auto____0;
cljs$core$async$mult_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18932__auto____1;
return cljs$core$async$mult_$_state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___23873,cs,m,dchan,dctr,done))
})();
var state__18954__auto__ = (function (){var statearr_23872 = f__18953__auto__.call(null);
(statearr_23872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___23873);

return statearr_23872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___23873,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23930 = [];
var len__17884__auto___23933 = arguments.length;
var i__17885__auto___23934 = (0);
while(true){
if((i__17885__auto___23934 < len__17884__auto___23933)){
args23930.push((arguments[i__17885__auto___23934]));

var G__23935 = (i__17885__auto___23934 + (1));
i__17885__auto___23934 = G__23935;
continue;
} else {
}
break;
}

var G__23932 = args23930.length;
switch (G__23932) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23930.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,state_map);
} else {
var m__17482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,mode);
} else {
var m__17482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___23947 = arguments.length;
var i__17885__auto___23948 = (0);
while(true){
if((i__17885__auto___23948 < len__17884__auto___23947)){
args__17891__auto__.push((arguments[i__17885__auto___23948]));

var G__23949 = (i__17885__auto___23948 + (1));
i__17885__auto___23948 = G__23949;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23941){
var map__23942 = p__23941;
var map__23942__$1 = ((((!((map__23942 == null)))?((((map__23942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23942):map__23942);
var opts = map__23942__$1;
var statearr_23944_23950 = state;
(statearr_23944_23950[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23942,map__23942__$1,opts){
return (function (val){
var statearr_23945_23951 = state;
(statearr_23945_23951[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23942,map__23942__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23946_23952 = state;
(statearr_23946_23952[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23937){
var G__23938 = cljs.core.first.call(null,seq23937);
var seq23937__$1 = cljs.core.next.call(null,seq23937);
var G__23939 = cljs.core.first.call(null,seq23937__$1);
var seq23937__$2 = cljs.core.next.call(null,seq23937__$1);
var G__23940 = cljs.core.first.call(null,seq23937__$2);
var seq23937__$3 = cljs.core.next.call(null,seq23937__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23938,G__23939,G__23940,seq23937__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24116 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24117){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24117 = meta24117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24118,meta24117__$1){
var self__ = this;
var _24118__$1 = this;
return (new cljs.core.async.t_cljs$core$async24116(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24117__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24116.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24118){
var self__ = this;
var _24118__$1 = this;
return self__.meta24117;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24116.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24116.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24116.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24116.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24116.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24116.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24116.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24116.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24116.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24117","meta24117",-1631385254,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24116";

cljs.core.async.t_cljs$core$async24116.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async24116");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24116 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24116(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24117){
return (new cljs.core.async.t_cljs$core$async24116(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24117));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24116(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18952__auto___24279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___24279,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___24279,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24216){
var state_val_24217 = (state_24216[(1)]);
if((state_val_24217 === (7))){
var inst_24134 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
var statearr_24218_24280 = state_24216__$1;
(statearr_24218_24280[(2)] = inst_24134);

(statearr_24218_24280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (20))){
var inst_24146 = (state_24216[(7)]);
var state_24216__$1 = state_24216;
var statearr_24219_24281 = state_24216__$1;
(statearr_24219_24281[(2)] = inst_24146);

(statearr_24219_24281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (27))){
var state_24216__$1 = state_24216;
var statearr_24220_24282 = state_24216__$1;
(statearr_24220_24282[(2)] = null);

(statearr_24220_24282[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (1))){
var inst_24122 = (state_24216[(8)]);
var inst_24122__$1 = calc_state.call(null);
var inst_24124 = (inst_24122__$1 == null);
var inst_24125 = cljs.core.not.call(null,inst_24124);
var state_24216__$1 = (function (){var statearr_24221 = state_24216;
(statearr_24221[(8)] = inst_24122__$1);

return statearr_24221;
})();
if(inst_24125){
var statearr_24222_24283 = state_24216__$1;
(statearr_24222_24283[(1)] = (2));

} else {
var statearr_24223_24284 = state_24216__$1;
(statearr_24223_24284[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (24))){
var inst_24190 = (state_24216[(9)]);
var inst_24176 = (state_24216[(10)]);
var inst_24169 = (state_24216[(11)]);
var inst_24190__$1 = inst_24169.call(null,inst_24176);
var state_24216__$1 = (function (){var statearr_24224 = state_24216;
(statearr_24224[(9)] = inst_24190__$1);

return statearr_24224;
})();
if(cljs.core.truth_(inst_24190__$1)){
var statearr_24225_24285 = state_24216__$1;
(statearr_24225_24285[(1)] = (29));

} else {
var statearr_24226_24286 = state_24216__$1;
(statearr_24226_24286[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (4))){
var inst_24137 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
if(cljs.core.truth_(inst_24137)){
var statearr_24227_24287 = state_24216__$1;
(statearr_24227_24287[(1)] = (8));

} else {
var statearr_24228_24288 = state_24216__$1;
(statearr_24228_24288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (15))){
var inst_24163 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
if(cljs.core.truth_(inst_24163)){
var statearr_24229_24289 = state_24216__$1;
(statearr_24229_24289[(1)] = (19));

} else {
var statearr_24230_24290 = state_24216__$1;
(statearr_24230_24290[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (21))){
var inst_24168 = (state_24216[(12)]);
var inst_24168__$1 = (state_24216[(2)]);
var inst_24169 = cljs.core.get.call(null,inst_24168__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24170 = cljs.core.get.call(null,inst_24168__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24171 = cljs.core.get.call(null,inst_24168__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24216__$1 = (function (){var statearr_24231 = state_24216;
(statearr_24231[(12)] = inst_24168__$1);

(statearr_24231[(11)] = inst_24169);

(statearr_24231[(13)] = inst_24170);

return statearr_24231;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24216__$1,(22),inst_24171);
} else {
if((state_val_24217 === (31))){
var inst_24198 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
if(cljs.core.truth_(inst_24198)){
var statearr_24232_24291 = state_24216__$1;
(statearr_24232_24291[(1)] = (32));

} else {
var statearr_24233_24292 = state_24216__$1;
(statearr_24233_24292[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (32))){
var inst_24175 = (state_24216[(14)]);
var state_24216__$1 = state_24216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24216__$1,(35),out,inst_24175);
} else {
if((state_val_24217 === (33))){
var inst_24168 = (state_24216[(12)]);
var inst_24146 = inst_24168;
var state_24216__$1 = (function (){var statearr_24234 = state_24216;
(statearr_24234[(7)] = inst_24146);

return statearr_24234;
})();
var statearr_24235_24293 = state_24216__$1;
(statearr_24235_24293[(2)] = null);

(statearr_24235_24293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (13))){
var inst_24146 = (state_24216[(7)]);
var inst_24153 = inst_24146.cljs$lang$protocol_mask$partition0$;
var inst_24154 = (inst_24153 & (64));
var inst_24155 = inst_24146.cljs$core$ISeq$;
var inst_24156 = (inst_24154) || (inst_24155);
var state_24216__$1 = state_24216;
if(cljs.core.truth_(inst_24156)){
var statearr_24236_24294 = state_24216__$1;
(statearr_24236_24294[(1)] = (16));

} else {
var statearr_24237_24295 = state_24216__$1;
(statearr_24237_24295[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (22))){
var inst_24175 = (state_24216[(14)]);
var inst_24176 = (state_24216[(10)]);
var inst_24174 = (state_24216[(2)]);
var inst_24175__$1 = cljs.core.nth.call(null,inst_24174,(0),null);
var inst_24176__$1 = cljs.core.nth.call(null,inst_24174,(1),null);
var inst_24177 = (inst_24175__$1 == null);
var inst_24178 = cljs.core._EQ_.call(null,inst_24176__$1,change);
var inst_24179 = (inst_24177) || (inst_24178);
var state_24216__$1 = (function (){var statearr_24238 = state_24216;
(statearr_24238[(14)] = inst_24175__$1);

(statearr_24238[(10)] = inst_24176__$1);

return statearr_24238;
})();
if(cljs.core.truth_(inst_24179)){
var statearr_24239_24296 = state_24216__$1;
(statearr_24239_24296[(1)] = (23));

} else {
var statearr_24240_24297 = state_24216__$1;
(statearr_24240_24297[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (36))){
var inst_24168 = (state_24216[(12)]);
var inst_24146 = inst_24168;
var state_24216__$1 = (function (){var statearr_24241 = state_24216;
(statearr_24241[(7)] = inst_24146);

return statearr_24241;
})();
var statearr_24242_24298 = state_24216__$1;
(statearr_24242_24298[(2)] = null);

(statearr_24242_24298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (29))){
var inst_24190 = (state_24216[(9)]);
var state_24216__$1 = state_24216;
var statearr_24243_24299 = state_24216__$1;
(statearr_24243_24299[(2)] = inst_24190);

(statearr_24243_24299[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (6))){
var state_24216__$1 = state_24216;
var statearr_24244_24300 = state_24216__$1;
(statearr_24244_24300[(2)] = false);

(statearr_24244_24300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (28))){
var inst_24186 = (state_24216[(2)]);
var inst_24187 = calc_state.call(null);
var inst_24146 = inst_24187;
var state_24216__$1 = (function (){var statearr_24245 = state_24216;
(statearr_24245[(15)] = inst_24186);

(statearr_24245[(7)] = inst_24146);

return statearr_24245;
})();
var statearr_24246_24301 = state_24216__$1;
(statearr_24246_24301[(2)] = null);

(statearr_24246_24301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (25))){
var inst_24212 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
var statearr_24247_24302 = state_24216__$1;
(statearr_24247_24302[(2)] = inst_24212);

(statearr_24247_24302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (34))){
var inst_24210 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
var statearr_24248_24303 = state_24216__$1;
(statearr_24248_24303[(2)] = inst_24210);

(statearr_24248_24303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (17))){
var state_24216__$1 = state_24216;
var statearr_24249_24304 = state_24216__$1;
(statearr_24249_24304[(2)] = false);

(statearr_24249_24304[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (3))){
var state_24216__$1 = state_24216;
var statearr_24250_24305 = state_24216__$1;
(statearr_24250_24305[(2)] = false);

(statearr_24250_24305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (12))){
var inst_24214 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24216__$1,inst_24214);
} else {
if((state_val_24217 === (2))){
var inst_24122 = (state_24216[(8)]);
var inst_24127 = inst_24122.cljs$lang$protocol_mask$partition0$;
var inst_24128 = (inst_24127 & (64));
var inst_24129 = inst_24122.cljs$core$ISeq$;
var inst_24130 = (inst_24128) || (inst_24129);
var state_24216__$1 = state_24216;
if(cljs.core.truth_(inst_24130)){
var statearr_24251_24306 = state_24216__$1;
(statearr_24251_24306[(1)] = (5));

} else {
var statearr_24252_24307 = state_24216__$1;
(statearr_24252_24307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (23))){
var inst_24175 = (state_24216[(14)]);
var inst_24181 = (inst_24175 == null);
var state_24216__$1 = state_24216;
if(cljs.core.truth_(inst_24181)){
var statearr_24253_24308 = state_24216__$1;
(statearr_24253_24308[(1)] = (26));

} else {
var statearr_24254_24309 = state_24216__$1;
(statearr_24254_24309[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (35))){
var inst_24201 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
if(cljs.core.truth_(inst_24201)){
var statearr_24255_24310 = state_24216__$1;
(statearr_24255_24310[(1)] = (36));

} else {
var statearr_24256_24311 = state_24216__$1;
(statearr_24256_24311[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (19))){
var inst_24146 = (state_24216[(7)]);
var inst_24165 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24146);
var state_24216__$1 = state_24216;
var statearr_24257_24312 = state_24216__$1;
(statearr_24257_24312[(2)] = inst_24165);

(statearr_24257_24312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (11))){
var inst_24146 = (state_24216[(7)]);
var inst_24150 = (inst_24146 == null);
var inst_24151 = cljs.core.not.call(null,inst_24150);
var state_24216__$1 = state_24216;
if(inst_24151){
var statearr_24258_24313 = state_24216__$1;
(statearr_24258_24313[(1)] = (13));

} else {
var statearr_24259_24314 = state_24216__$1;
(statearr_24259_24314[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (9))){
var inst_24122 = (state_24216[(8)]);
var state_24216__$1 = state_24216;
var statearr_24260_24315 = state_24216__$1;
(statearr_24260_24315[(2)] = inst_24122);

(statearr_24260_24315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (5))){
var state_24216__$1 = state_24216;
var statearr_24261_24316 = state_24216__$1;
(statearr_24261_24316[(2)] = true);

(statearr_24261_24316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (14))){
var state_24216__$1 = state_24216;
var statearr_24262_24317 = state_24216__$1;
(statearr_24262_24317[(2)] = false);

(statearr_24262_24317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (26))){
var inst_24176 = (state_24216[(10)]);
var inst_24183 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24176);
var state_24216__$1 = state_24216;
var statearr_24263_24318 = state_24216__$1;
(statearr_24263_24318[(2)] = inst_24183);

(statearr_24263_24318[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (16))){
var state_24216__$1 = state_24216;
var statearr_24264_24319 = state_24216__$1;
(statearr_24264_24319[(2)] = true);

(statearr_24264_24319[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (38))){
var inst_24206 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
var statearr_24265_24320 = state_24216__$1;
(statearr_24265_24320[(2)] = inst_24206);

(statearr_24265_24320[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (30))){
var inst_24176 = (state_24216[(10)]);
var inst_24169 = (state_24216[(11)]);
var inst_24170 = (state_24216[(13)]);
var inst_24193 = cljs.core.empty_QMARK_.call(null,inst_24169);
var inst_24194 = inst_24170.call(null,inst_24176);
var inst_24195 = cljs.core.not.call(null,inst_24194);
var inst_24196 = (inst_24193) && (inst_24195);
var state_24216__$1 = state_24216;
var statearr_24266_24321 = state_24216__$1;
(statearr_24266_24321[(2)] = inst_24196);

(statearr_24266_24321[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (10))){
var inst_24122 = (state_24216[(8)]);
var inst_24142 = (state_24216[(2)]);
var inst_24143 = cljs.core.get.call(null,inst_24142,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24144 = cljs.core.get.call(null,inst_24142,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24145 = cljs.core.get.call(null,inst_24142,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24146 = inst_24122;
var state_24216__$1 = (function (){var statearr_24267 = state_24216;
(statearr_24267[(16)] = inst_24145);

(statearr_24267[(17)] = inst_24144);

(statearr_24267[(7)] = inst_24146);

(statearr_24267[(18)] = inst_24143);

return statearr_24267;
})();
var statearr_24268_24322 = state_24216__$1;
(statearr_24268_24322[(2)] = null);

(statearr_24268_24322[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (18))){
var inst_24160 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
var statearr_24269_24323 = state_24216__$1;
(statearr_24269_24323[(2)] = inst_24160);

(statearr_24269_24323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (37))){
var state_24216__$1 = state_24216;
var statearr_24270_24324 = state_24216__$1;
(statearr_24270_24324[(2)] = null);

(statearr_24270_24324[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24217 === (8))){
var inst_24122 = (state_24216[(8)]);
var inst_24139 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24122);
var state_24216__$1 = state_24216;
var statearr_24271_24325 = state_24216__$1;
(statearr_24271_24325[(2)] = inst_24139);

(statearr_24271_24325[(1)] = (10));


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
});})(c__18952__auto___24279,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18931__auto__,c__18952__auto___24279,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18932__auto__ = null;
var cljs$core$async$mix_$_state_machine__18932__auto____0 = (function (){
var statearr_24275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24275[(0)] = cljs$core$async$mix_$_state_machine__18932__auto__);

(statearr_24275[(1)] = (1));

return statearr_24275;
});
var cljs$core$async$mix_$_state_machine__18932__auto____1 = (function (state_24216){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_24216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e24276){if((e24276 instanceof Object)){
var ex__18935__auto__ = e24276;
var statearr_24277_24326 = state_24216;
(statearr_24277_24326[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24327 = state_24216;
state_24216 = G__24327;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18932__auto__ = function(state_24216){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18932__auto____1.call(this,state_24216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18932__auto____0;
cljs$core$async$mix_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18932__auto____1;
return cljs$core$async$mix_$_state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___24279,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18954__auto__ = (function (){var statearr_24278 = f__18953__auto__.call(null);
(statearr_24278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___24279);

return statearr_24278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___24279,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24328 = [];
var len__17884__auto___24331 = arguments.length;
var i__17885__auto___24332 = (0);
while(true){
if((i__17885__auto___24332 < len__17884__auto___24331)){
args24328.push((arguments[i__17885__auto___24332]));

var G__24333 = (i__17885__auto___24332 + (1));
i__17885__auto___24332 = G__24333;
continue;
} else {
}
break;
}

var G__24330 = args24328.length;
switch (G__24330) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24328.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args24336 = [];
var len__17884__auto___24461 = arguments.length;
var i__17885__auto___24462 = (0);
while(true){
if((i__17885__auto___24462 < len__17884__auto___24461)){
args24336.push((arguments[i__17885__auto___24462]));

var G__24463 = (i__17885__auto___24462 + (1));
i__17885__auto___24462 = G__24463;
continue;
} else {
}
break;
}

var G__24338 = args24336.length;
switch (G__24338) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24336.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16826__auto__,mults){
return (function (p1__24335_SHARP_){
if(cljs.core.truth_(p1__24335_SHARP_.call(null,topic))){
return p1__24335_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24335_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24339 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24339 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24340){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24340 = meta24340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24341,meta24340__$1){
var self__ = this;
var _24341__$1 = this;
return (new cljs.core.async.t_cljs$core$async24339(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24340__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24339.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24341){
var self__ = this;
var _24341__$1 = this;
return self__.meta24340;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24339.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24339.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24339.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24339.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24339.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24339.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24339.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24339.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24340","meta24340",2037972935,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24339.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24339";

cljs.core.async.t_cljs$core$async24339.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async24339");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24339 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24339(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24340){
return (new cljs.core.async.t_cljs$core$async24339(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24340));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24339(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18952__auto___24465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___24465,mults,ensure_mult,p){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___24465,mults,ensure_mult,p){
return (function (state_24413){
var state_val_24414 = (state_24413[(1)]);
if((state_val_24414 === (7))){
var inst_24409 = (state_24413[(2)]);
var state_24413__$1 = state_24413;
var statearr_24415_24466 = state_24413__$1;
(statearr_24415_24466[(2)] = inst_24409);

(statearr_24415_24466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (20))){
var state_24413__$1 = state_24413;
var statearr_24416_24467 = state_24413__$1;
(statearr_24416_24467[(2)] = null);

(statearr_24416_24467[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (1))){
var state_24413__$1 = state_24413;
var statearr_24417_24468 = state_24413__$1;
(statearr_24417_24468[(2)] = null);

(statearr_24417_24468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (24))){
var inst_24392 = (state_24413[(7)]);
var inst_24401 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24392);
var state_24413__$1 = state_24413;
var statearr_24418_24469 = state_24413__$1;
(statearr_24418_24469[(2)] = inst_24401);

(statearr_24418_24469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (4))){
var inst_24344 = (state_24413[(8)]);
var inst_24344__$1 = (state_24413[(2)]);
var inst_24345 = (inst_24344__$1 == null);
var state_24413__$1 = (function (){var statearr_24419 = state_24413;
(statearr_24419[(8)] = inst_24344__$1);

return statearr_24419;
})();
if(cljs.core.truth_(inst_24345)){
var statearr_24420_24470 = state_24413__$1;
(statearr_24420_24470[(1)] = (5));

} else {
var statearr_24421_24471 = state_24413__$1;
(statearr_24421_24471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (15))){
var inst_24386 = (state_24413[(2)]);
var state_24413__$1 = state_24413;
var statearr_24422_24472 = state_24413__$1;
(statearr_24422_24472[(2)] = inst_24386);

(statearr_24422_24472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (21))){
var inst_24406 = (state_24413[(2)]);
var state_24413__$1 = (function (){var statearr_24423 = state_24413;
(statearr_24423[(9)] = inst_24406);

return statearr_24423;
})();
var statearr_24424_24473 = state_24413__$1;
(statearr_24424_24473[(2)] = null);

(statearr_24424_24473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (13))){
var inst_24368 = (state_24413[(10)]);
var inst_24370 = cljs.core.chunked_seq_QMARK_.call(null,inst_24368);
var state_24413__$1 = state_24413;
if(inst_24370){
var statearr_24425_24474 = state_24413__$1;
(statearr_24425_24474[(1)] = (16));

} else {
var statearr_24426_24475 = state_24413__$1;
(statearr_24426_24475[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (22))){
var inst_24398 = (state_24413[(2)]);
var state_24413__$1 = state_24413;
if(cljs.core.truth_(inst_24398)){
var statearr_24427_24476 = state_24413__$1;
(statearr_24427_24476[(1)] = (23));

} else {
var statearr_24428_24477 = state_24413__$1;
(statearr_24428_24477[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (6))){
var inst_24392 = (state_24413[(7)]);
var inst_24344 = (state_24413[(8)]);
var inst_24394 = (state_24413[(11)]);
var inst_24392__$1 = topic_fn.call(null,inst_24344);
var inst_24393 = cljs.core.deref.call(null,mults);
var inst_24394__$1 = cljs.core.get.call(null,inst_24393,inst_24392__$1);
var state_24413__$1 = (function (){var statearr_24429 = state_24413;
(statearr_24429[(7)] = inst_24392__$1);

(statearr_24429[(11)] = inst_24394__$1);

return statearr_24429;
})();
if(cljs.core.truth_(inst_24394__$1)){
var statearr_24430_24478 = state_24413__$1;
(statearr_24430_24478[(1)] = (19));

} else {
var statearr_24431_24479 = state_24413__$1;
(statearr_24431_24479[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (25))){
var inst_24403 = (state_24413[(2)]);
var state_24413__$1 = state_24413;
var statearr_24432_24480 = state_24413__$1;
(statearr_24432_24480[(2)] = inst_24403);

(statearr_24432_24480[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (17))){
var inst_24368 = (state_24413[(10)]);
var inst_24377 = cljs.core.first.call(null,inst_24368);
var inst_24378 = cljs.core.async.muxch_STAR_.call(null,inst_24377);
var inst_24379 = cljs.core.async.close_BANG_.call(null,inst_24378);
var inst_24380 = cljs.core.next.call(null,inst_24368);
var inst_24354 = inst_24380;
var inst_24355 = null;
var inst_24356 = (0);
var inst_24357 = (0);
var state_24413__$1 = (function (){var statearr_24433 = state_24413;
(statearr_24433[(12)] = inst_24356);

(statearr_24433[(13)] = inst_24357);

(statearr_24433[(14)] = inst_24355);

(statearr_24433[(15)] = inst_24354);

(statearr_24433[(16)] = inst_24379);

return statearr_24433;
})();
var statearr_24434_24481 = state_24413__$1;
(statearr_24434_24481[(2)] = null);

(statearr_24434_24481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (3))){
var inst_24411 = (state_24413[(2)]);
var state_24413__$1 = state_24413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24413__$1,inst_24411);
} else {
if((state_val_24414 === (12))){
var inst_24388 = (state_24413[(2)]);
var state_24413__$1 = state_24413;
var statearr_24435_24482 = state_24413__$1;
(statearr_24435_24482[(2)] = inst_24388);

(statearr_24435_24482[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (2))){
var state_24413__$1 = state_24413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24413__$1,(4),ch);
} else {
if((state_val_24414 === (23))){
var state_24413__$1 = state_24413;
var statearr_24436_24483 = state_24413__$1;
(statearr_24436_24483[(2)] = null);

(statearr_24436_24483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (19))){
var inst_24344 = (state_24413[(8)]);
var inst_24394 = (state_24413[(11)]);
var inst_24396 = cljs.core.async.muxch_STAR_.call(null,inst_24394);
var state_24413__$1 = state_24413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24413__$1,(22),inst_24396,inst_24344);
} else {
if((state_val_24414 === (11))){
var inst_24354 = (state_24413[(15)]);
var inst_24368 = (state_24413[(10)]);
var inst_24368__$1 = cljs.core.seq.call(null,inst_24354);
var state_24413__$1 = (function (){var statearr_24437 = state_24413;
(statearr_24437[(10)] = inst_24368__$1);

return statearr_24437;
})();
if(inst_24368__$1){
var statearr_24438_24484 = state_24413__$1;
(statearr_24438_24484[(1)] = (13));

} else {
var statearr_24439_24485 = state_24413__$1;
(statearr_24439_24485[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (9))){
var inst_24390 = (state_24413[(2)]);
var state_24413__$1 = state_24413;
var statearr_24440_24486 = state_24413__$1;
(statearr_24440_24486[(2)] = inst_24390);

(statearr_24440_24486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (5))){
var inst_24351 = cljs.core.deref.call(null,mults);
var inst_24352 = cljs.core.vals.call(null,inst_24351);
var inst_24353 = cljs.core.seq.call(null,inst_24352);
var inst_24354 = inst_24353;
var inst_24355 = null;
var inst_24356 = (0);
var inst_24357 = (0);
var state_24413__$1 = (function (){var statearr_24441 = state_24413;
(statearr_24441[(12)] = inst_24356);

(statearr_24441[(13)] = inst_24357);

(statearr_24441[(14)] = inst_24355);

(statearr_24441[(15)] = inst_24354);

return statearr_24441;
})();
var statearr_24442_24487 = state_24413__$1;
(statearr_24442_24487[(2)] = null);

(statearr_24442_24487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (14))){
var state_24413__$1 = state_24413;
var statearr_24446_24488 = state_24413__$1;
(statearr_24446_24488[(2)] = null);

(statearr_24446_24488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (16))){
var inst_24368 = (state_24413[(10)]);
var inst_24372 = cljs.core.chunk_first.call(null,inst_24368);
var inst_24373 = cljs.core.chunk_rest.call(null,inst_24368);
var inst_24374 = cljs.core.count.call(null,inst_24372);
var inst_24354 = inst_24373;
var inst_24355 = inst_24372;
var inst_24356 = inst_24374;
var inst_24357 = (0);
var state_24413__$1 = (function (){var statearr_24447 = state_24413;
(statearr_24447[(12)] = inst_24356);

(statearr_24447[(13)] = inst_24357);

(statearr_24447[(14)] = inst_24355);

(statearr_24447[(15)] = inst_24354);

return statearr_24447;
})();
var statearr_24448_24489 = state_24413__$1;
(statearr_24448_24489[(2)] = null);

(statearr_24448_24489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (10))){
var inst_24356 = (state_24413[(12)]);
var inst_24357 = (state_24413[(13)]);
var inst_24355 = (state_24413[(14)]);
var inst_24354 = (state_24413[(15)]);
var inst_24362 = cljs.core._nth.call(null,inst_24355,inst_24357);
var inst_24363 = cljs.core.async.muxch_STAR_.call(null,inst_24362);
var inst_24364 = cljs.core.async.close_BANG_.call(null,inst_24363);
var inst_24365 = (inst_24357 + (1));
var tmp24443 = inst_24356;
var tmp24444 = inst_24355;
var tmp24445 = inst_24354;
var inst_24354__$1 = tmp24445;
var inst_24355__$1 = tmp24444;
var inst_24356__$1 = tmp24443;
var inst_24357__$1 = inst_24365;
var state_24413__$1 = (function (){var statearr_24449 = state_24413;
(statearr_24449[(12)] = inst_24356__$1);

(statearr_24449[(13)] = inst_24357__$1);

(statearr_24449[(14)] = inst_24355__$1);

(statearr_24449[(15)] = inst_24354__$1);

(statearr_24449[(17)] = inst_24364);

return statearr_24449;
})();
var statearr_24450_24490 = state_24413__$1;
(statearr_24450_24490[(2)] = null);

(statearr_24450_24490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (18))){
var inst_24383 = (state_24413[(2)]);
var state_24413__$1 = state_24413;
var statearr_24451_24491 = state_24413__$1;
(statearr_24451_24491[(2)] = inst_24383);

(statearr_24451_24491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24414 === (8))){
var inst_24356 = (state_24413[(12)]);
var inst_24357 = (state_24413[(13)]);
var inst_24359 = (inst_24357 < inst_24356);
var inst_24360 = inst_24359;
var state_24413__$1 = state_24413;
if(cljs.core.truth_(inst_24360)){
var statearr_24452_24492 = state_24413__$1;
(statearr_24452_24492[(1)] = (10));

} else {
var statearr_24453_24493 = state_24413__$1;
(statearr_24453_24493[(1)] = (11));

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
});})(c__18952__auto___24465,mults,ensure_mult,p))
;
return ((function (switch__18931__auto__,c__18952__auto___24465,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18932__auto__ = null;
var cljs$core$async$state_machine__18932__auto____0 = (function (){
var statearr_24457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24457[(0)] = cljs$core$async$state_machine__18932__auto__);

(statearr_24457[(1)] = (1));

return statearr_24457;
});
var cljs$core$async$state_machine__18932__auto____1 = (function (state_24413){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_24413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e24458){if((e24458 instanceof Object)){
var ex__18935__auto__ = e24458;
var statearr_24459_24494 = state_24413;
(statearr_24459_24494[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24495 = state_24413;
state_24413 = G__24495;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$state_machine__18932__auto__ = function(state_24413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18932__auto____1.call(this,state_24413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18932__auto____0;
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18932__auto____1;
return cljs$core$async$state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___24465,mults,ensure_mult,p))
})();
var state__18954__auto__ = (function (){var statearr_24460 = f__18953__auto__.call(null);
(statearr_24460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___24465);

return statearr_24460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___24465,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24496 = [];
var len__17884__auto___24499 = arguments.length;
var i__17885__auto___24500 = (0);
while(true){
if((i__17885__auto___24500 < len__17884__auto___24499)){
args24496.push((arguments[i__17885__auto___24500]));

var G__24501 = (i__17885__auto___24500 + (1));
i__17885__auto___24500 = G__24501;
continue;
} else {
}
break;
}

var G__24498 = args24496.length;
switch (G__24498) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24496.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24503 = [];
var len__17884__auto___24506 = arguments.length;
var i__17885__auto___24507 = (0);
while(true){
if((i__17885__auto___24507 < len__17884__auto___24506)){
args24503.push((arguments[i__17885__auto___24507]));

var G__24508 = (i__17885__auto___24507 + (1));
i__17885__auto___24507 = G__24508;
continue;
} else {
}
break;
}

var G__24505 = args24503.length;
switch (G__24505) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24503.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24510 = [];
var len__17884__auto___24581 = arguments.length;
var i__17885__auto___24582 = (0);
while(true){
if((i__17885__auto___24582 < len__17884__auto___24581)){
args24510.push((arguments[i__17885__auto___24582]));

var G__24583 = (i__17885__auto___24582 + (1));
i__17885__auto___24582 = G__24583;
continue;
} else {
}
break;
}

var G__24512 = args24510.length;
switch (G__24512) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24510.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18952__auto___24585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___24585,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___24585,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24551){
var state_val_24552 = (state_24551[(1)]);
if((state_val_24552 === (7))){
var state_24551__$1 = state_24551;
var statearr_24553_24586 = state_24551__$1;
(statearr_24553_24586[(2)] = null);

(statearr_24553_24586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24552 === (1))){
var state_24551__$1 = state_24551;
var statearr_24554_24587 = state_24551__$1;
(statearr_24554_24587[(2)] = null);

(statearr_24554_24587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24552 === (4))){
var inst_24515 = (state_24551[(7)]);
var inst_24517 = (inst_24515 < cnt);
var state_24551__$1 = state_24551;
if(cljs.core.truth_(inst_24517)){
var statearr_24555_24588 = state_24551__$1;
(statearr_24555_24588[(1)] = (6));

} else {
var statearr_24556_24589 = state_24551__$1;
(statearr_24556_24589[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24552 === (15))){
var inst_24547 = (state_24551[(2)]);
var state_24551__$1 = state_24551;
var statearr_24557_24590 = state_24551__$1;
(statearr_24557_24590[(2)] = inst_24547);

(statearr_24557_24590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24552 === (13))){
var inst_24540 = cljs.core.async.close_BANG_.call(null,out);
var state_24551__$1 = state_24551;
var statearr_24558_24591 = state_24551__$1;
(statearr_24558_24591[(2)] = inst_24540);

(statearr_24558_24591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24552 === (6))){
var state_24551__$1 = state_24551;
var statearr_24559_24592 = state_24551__$1;
(statearr_24559_24592[(2)] = null);

(statearr_24559_24592[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24552 === (3))){
var inst_24549 = (state_24551[(2)]);
var state_24551__$1 = state_24551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24551__$1,inst_24549);
} else {
if((state_val_24552 === (12))){
var inst_24537 = (state_24551[(8)]);
var inst_24537__$1 = (state_24551[(2)]);
var inst_24538 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24537__$1);
var state_24551__$1 = (function (){var statearr_24560 = state_24551;
(statearr_24560[(8)] = inst_24537__$1);

return statearr_24560;
})();
if(cljs.core.truth_(inst_24538)){
var statearr_24561_24593 = state_24551__$1;
(statearr_24561_24593[(1)] = (13));

} else {
var statearr_24562_24594 = state_24551__$1;
(statearr_24562_24594[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24552 === (2))){
var inst_24514 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24515 = (0);
var state_24551__$1 = (function (){var statearr_24563 = state_24551;
(statearr_24563[(7)] = inst_24515);

(statearr_24563[(9)] = inst_24514);

return statearr_24563;
})();
var statearr_24564_24595 = state_24551__$1;
(statearr_24564_24595[(2)] = null);

(statearr_24564_24595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24552 === (11))){
var inst_24515 = (state_24551[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24551,(10),Object,null,(9));
var inst_24524 = chs__$1.call(null,inst_24515);
var inst_24525 = done.call(null,inst_24515);
var inst_24526 = cljs.core.async.take_BANG_.call(null,inst_24524,inst_24525);
var state_24551__$1 = state_24551;
var statearr_24565_24596 = state_24551__$1;
(statearr_24565_24596[(2)] = inst_24526);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24551__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24552 === (9))){
var inst_24515 = (state_24551[(7)]);
var inst_24528 = (state_24551[(2)]);
var inst_24529 = (inst_24515 + (1));
var inst_24515__$1 = inst_24529;
var state_24551__$1 = (function (){var statearr_24566 = state_24551;
(statearr_24566[(10)] = inst_24528);

(statearr_24566[(7)] = inst_24515__$1);

return statearr_24566;
})();
var statearr_24567_24597 = state_24551__$1;
(statearr_24567_24597[(2)] = null);

(statearr_24567_24597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24552 === (5))){
var inst_24535 = (state_24551[(2)]);
var state_24551__$1 = (function (){var statearr_24568 = state_24551;
(statearr_24568[(11)] = inst_24535);

return statearr_24568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24551__$1,(12),dchan);
} else {
if((state_val_24552 === (14))){
var inst_24537 = (state_24551[(8)]);
var inst_24542 = cljs.core.apply.call(null,f,inst_24537);
var state_24551__$1 = state_24551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24551__$1,(16),out,inst_24542);
} else {
if((state_val_24552 === (16))){
var inst_24544 = (state_24551[(2)]);
var state_24551__$1 = (function (){var statearr_24569 = state_24551;
(statearr_24569[(12)] = inst_24544);

return statearr_24569;
})();
var statearr_24570_24598 = state_24551__$1;
(statearr_24570_24598[(2)] = null);

(statearr_24570_24598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24552 === (10))){
var inst_24519 = (state_24551[(2)]);
var inst_24520 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24551__$1 = (function (){var statearr_24571 = state_24551;
(statearr_24571[(13)] = inst_24519);

return statearr_24571;
})();
var statearr_24572_24599 = state_24551__$1;
(statearr_24572_24599[(2)] = inst_24520);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24551__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24552 === (8))){
var inst_24533 = (state_24551[(2)]);
var state_24551__$1 = state_24551;
var statearr_24573_24600 = state_24551__$1;
(statearr_24573_24600[(2)] = inst_24533);

(statearr_24573_24600[(1)] = (5));


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
});})(c__18952__auto___24585,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18931__auto__,c__18952__auto___24585,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18932__auto__ = null;
var cljs$core$async$state_machine__18932__auto____0 = (function (){
var statearr_24577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24577[(0)] = cljs$core$async$state_machine__18932__auto__);

(statearr_24577[(1)] = (1));

return statearr_24577;
});
var cljs$core$async$state_machine__18932__auto____1 = (function (state_24551){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_24551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e24578){if((e24578 instanceof Object)){
var ex__18935__auto__ = e24578;
var statearr_24579_24601 = state_24551;
(statearr_24579_24601[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24602 = state_24551;
state_24551 = G__24602;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$state_machine__18932__auto__ = function(state_24551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18932__auto____1.call(this,state_24551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18932__auto____0;
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18932__auto____1;
return cljs$core$async$state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___24585,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18954__auto__ = (function (){var statearr_24580 = f__18953__auto__.call(null);
(statearr_24580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___24585);

return statearr_24580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___24585,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24604 = [];
var len__17884__auto___24660 = arguments.length;
var i__17885__auto___24661 = (0);
while(true){
if((i__17885__auto___24661 < len__17884__auto___24660)){
args24604.push((arguments[i__17885__auto___24661]));

var G__24662 = (i__17885__auto___24661 + (1));
i__17885__auto___24661 = G__24662;
continue;
} else {
}
break;
}

var G__24606 = args24604.length;
switch (G__24606) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24604.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18952__auto___24664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___24664,out){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___24664,out){
return (function (state_24636){
var state_val_24637 = (state_24636[(1)]);
if((state_val_24637 === (7))){
var inst_24615 = (state_24636[(7)]);
var inst_24616 = (state_24636[(8)]);
var inst_24615__$1 = (state_24636[(2)]);
var inst_24616__$1 = cljs.core.nth.call(null,inst_24615__$1,(0),null);
var inst_24617 = cljs.core.nth.call(null,inst_24615__$1,(1),null);
var inst_24618 = (inst_24616__$1 == null);
var state_24636__$1 = (function (){var statearr_24638 = state_24636;
(statearr_24638[(7)] = inst_24615__$1);

(statearr_24638[(9)] = inst_24617);

(statearr_24638[(8)] = inst_24616__$1);

return statearr_24638;
})();
if(cljs.core.truth_(inst_24618)){
var statearr_24639_24665 = state_24636__$1;
(statearr_24639_24665[(1)] = (8));

} else {
var statearr_24640_24666 = state_24636__$1;
(statearr_24640_24666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (1))){
var inst_24607 = cljs.core.vec.call(null,chs);
var inst_24608 = inst_24607;
var state_24636__$1 = (function (){var statearr_24641 = state_24636;
(statearr_24641[(10)] = inst_24608);

return statearr_24641;
})();
var statearr_24642_24667 = state_24636__$1;
(statearr_24642_24667[(2)] = null);

(statearr_24642_24667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (4))){
var inst_24608 = (state_24636[(10)]);
var state_24636__$1 = state_24636;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24636__$1,(7),inst_24608);
} else {
if((state_val_24637 === (6))){
var inst_24632 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
var statearr_24643_24668 = state_24636__$1;
(statearr_24643_24668[(2)] = inst_24632);

(statearr_24643_24668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (3))){
var inst_24634 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24636__$1,inst_24634);
} else {
if((state_val_24637 === (2))){
var inst_24608 = (state_24636[(10)]);
var inst_24610 = cljs.core.count.call(null,inst_24608);
var inst_24611 = (inst_24610 > (0));
var state_24636__$1 = state_24636;
if(cljs.core.truth_(inst_24611)){
var statearr_24645_24669 = state_24636__$1;
(statearr_24645_24669[(1)] = (4));

} else {
var statearr_24646_24670 = state_24636__$1;
(statearr_24646_24670[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (11))){
var inst_24608 = (state_24636[(10)]);
var inst_24625 = (state_24636[(2)]);
var tmp24644 = inst_24608;
var inst_24608__$1 = tmp24644;
var state_24636__$1 = (function (){var statearr_24647 = state_24636;
(statearr_24647[(11)] = inst_24625);

(statearr_24647[(10)] = inst_24608__$1);

return statearr_24647;
})();
var statearr_24648_24671 = state_24636__$1;
(statearr_24648_24671[(2)] = null);

(statearr_24648_24671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (9))){
var inst_24616 = (state_24636[(8)]);
var state_24636__$1 = state_24636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24636__$1,(11),out,inst_24616);
} else {
if((state_val_24637 === (5))){
var inst_24630 = cljs.core.async.close_BANG_.call(null,out);
var state_24636__$1 = state_24636;
var statearr_24649_24672 = state_24636__$1;
(statearr_24649_24672[(2)] = inst_24630);

(statearr_24649_24672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (10))){
var inst_24628 = (state_24636[(2)]);
var state_24636__$1 = state_24636;
var statearr_24650_24673 = state_24636__$1;
(statearr_24650_24673[(2)] = inst_24628);

(statearr_24650_24673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24637 === (8))){
var inst_24615 = (state_24636[(7)]);
var inst_24617 = (state_24636[(9)]);
var inst_24608 = (state_24636[(10)]);
var inst_24616 = (state_24636[(8)]);
var inst_24620 = (function (){var cs = inst_24608;
var vec__24613 = inst_24615;
var v = inst_24616;
var c = inst_24617;
return ((function (cs,vec__24613,v,c,inst_24615,inst_24617,inst_24608,inst_24616,state_val_24637,c__18952__auto___24664,out){
return (function (p1__24603_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24603_SHARP_);
});
;})(cs,vec__24613,v,c,inst_24615,inst_24617,inst_24608,inst_24616,state_val_24637,c__18952__auto___24664,out))
})();
var inst_24621 = cljs.core.filterv.call(null,inst_24620,inst_24608);
var inst_24608__$1 = inst_24621;
var state_24636__$1 = (function (){var statearr_24651 = state_24636;
(statearr_24651[(10)] = inst_24608__$1);

return statearr_24651;
})();
var statearr_24652_24674 = state_24636__$1;
(statearr_24652_24674[(2)] = null);

(statearr_24652_24674[(1)] = (2));


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
});})(c__18952__auto___24664,out))
;
return ((function (switch__18931__auto__,c__18952__auto___24664,out){
return (function() {
var cljs$core$async$state_machine__18932__auto__ = null;
var cljs$core$async$state_machine__18932__auto____0 = (function (){
var statearr_24656 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24656[(0)] = cljs$core$async$state_machine__18932__auto__);

(statearr_24656[(1)] = (1));

return statearr_24656;
});
var cljs$core$async$state_machine__18932__auto____1 = (function (state_24636){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_24636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e24657){if((e24657 instanceof Object)){
var ex__18935__auto__ = e24657;
var statearr_24658_24675 = state_24636;
(statearr_24658_24675[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24676 = state_24636;
state_24636 = G__24676;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$state_machine__18932__auto__ = function(state_24636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18932__auto____1.call(this,state_24636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18932__auto____0;
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18932__auto____1;
return cljs$core$async$state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___24664,out))
})();
var state__18954__auto__ = (function (){var statearr_24659 = f__18953__auto__.call(null);
(statearr_24659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___24664);

return statearr_24659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___24664,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24677 = [];
var len__17884__auto___24726 = arguments.length;
var i__17885__auto___24727 = (0);
while(true){
if((i__17885__auto___24727 < len__17884__auto___24726)){
args24677.push((arguments[i__17885__auto___24727]));

var G__24728 = (i__17885__auto___24727 + (1));
i__17885__auto___24727 = G__24728;
continue;
} else {
}
break;
}

var G__24679 = args24677.length;
switch (G__24679) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24677.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18952__auto___24730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___24730,out){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___24730,out){
return (function (state_24703){
var state_val_24704 = (state_24703[(1)]);
if((state_val_24704 === (7))){
var inst_24685 = (state_24703[(7)]);
var inst_24685__$1 = (state_24703[(2)]);
var inst_24686 = (inst_24685__$1 == null);
var inst_24687 = cljs.core.not.call(null,inst_24686);
var state_24703__$1 = (function (){var statearr_24705 = state_24703;
(statearr_24705[(7)] = inst_24685__$1);

return statearr_24705;
})();
if(inst_24687){
var statearr_24706_24731 = state_24703__$1;
(statearr_24706_24731[(1)] = (8));

} else {
var statearr_24707_24732 = state_24703__$1;
(statearr_24707_24732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (1))){
var inst_24680 = (0);
var state_24703__$1 = (function (){var statearr_24708 = state_24703;
(statearr_24708[(8)] = inst_24680);

return statearr_24708;
})();
var statearr_24709_24733 = state_24703__$1;
(statearr_24709_24733[(2)] = null);

(statearr_24709_24733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (4))){
var state_24703__$1 = state_24703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24703__$1,(7),ch);
} else {
if((state_val_24704 === (6))){
var inst_24698 = (state_24703[(2)]);
var state_24703__$1 = state_24703;
var statearr_24710_24734 = state_24703__$1;
(statearr_24710_24734[(2)] = inst_24698);

(statearr_24710_24734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (3))){
var inst_24700 = (state_24703[(2)]);
var inst_24701 = cljs.core.async.close_BANG_.call(null,out);
var state_24703__$1 = (function (){var statearr_24711 = state_24703;
(statearr_24711[(9)] = inst_24700);

return statearr_24711;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24703__$1,inst_24701);
} else {
if((state_val_24704 === (2))){
var inst_24680 = (state_24703[(8)]);
var inst_24682 = (inst_24680 < n);
var state_24703__$1 = state_24703;
if(cljs.core.truth_(inst_24682)){
var statearr_24712_24735 = state_24703__$1;
(statearr_24712_24735[(1)] = (4));

} else {
var statearr_24713_24736 = state_24703__$1;
(statearr_24713_24736[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (11))){
var inst_24680 = (state_24703[(8)]);
var inst_24690 = (state_24703[(2)]);
var inst_24691 = (inst_24680 + (1));
var inst_24680__$1 = inst_24691;
var state_24703__$1 = (function (){var statearr_24714 = state_24703;
(statearr_24714[(10)] = inst_24690);

(statearr_24714[(8)] = inst_24680__$1);

return statearr_24714;
})();
var statearr_24715_24737 = state_24703__$1;
(statearr_24715_24737[(2)] = null);

(statearr_24715_24737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (9))){
var state_24703__$1 = state_24703;
var statearr_24716_24738 = state_24703__$1;
(statearr_24716_24738[(2)] = null);

(statearr_24716_24738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (5))){
var state_24703__$1 = state_24703;
var statearr_24717_24739 = state_24703__$1;
(statearr_24717_24739[(2)] = null);

(statearr_24717_24739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (10))){
var inst_24695 = (state_24703[(2)]);
var state_24703__$1 = state_24703;
var statearr_24718_24740 = state_24703__$1;
(statearr_24718_24740[(2)] = inst_24695);

(statearr_24718_24740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24704 === (8))){
var inst_24685 = (state_24703[(7)]);
var state_24703__$1 = state_24703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24703__$1,(11),out,inst_24685);
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
});})(c__18952__auto___24730,out))
;
return ((function (switch__18931__auto__,c__18952__auto___24730,out){
return (function() {
var cljs$core$async$state_machine__18932__auto__ = null;
var cljs$core$async$state_machine__18932__auto____0 = (function (){
var statearr_24722 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24722[(0)] = cljs$core$async$state_machine__18932__auto__);

(statearr_24722[(1)] = (1));

return statearr_24722;
});
var cljs$core$async$state_machine__18932__auto____1 = (function (state_24703){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_24703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e24723){if((e24723 instanceof Object)){
var ex__18935__auto__ = e24723;
var statearr_24724_24741 = state_24703;
(statearr_24724_24741[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24742 = state_24703;
state_24703 = G__24742;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$state_machine__18932__auto__ = function(state_24703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18932__auto____1.call(this,state_24703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18932__auto____0;
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18932__auto____1;
return cljs$core$async$state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___24730,out))
})();
var state__18954__auto__ = (function (){var statearr_24725 = f__18953__auto__.call(null);
(statearr_24725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___24730);

return statearr_24725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___24730,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24750 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24750 = (function (map_LT_,f,ch,meta24751){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24751 = meta24751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24752,meta24751__$1){
var self__ = this;
var _24752__$1 = this;
return (new cljs.core.async.t_cljs$core$async24750(self__.map_LT_,self__.f,self__.ch,meta24751__$1));
});

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24752){
var self__ = this;
var _24752__$1 = this;
return self__.meta24751;
});

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24753 = (function (map_LT_,f,ch,meta24751,_,fn1,meta24754){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24751 = meta24751;
this._ = _;
this.fn1 = fn1;
this.meta24754 = meta24754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24755,meta24754__$1){
var self__ = this;
var _24755__$1 = this;
return (new cljs.core.async.t_cljs$core$async24753(self__.map_LT_,self__.f,self__.ch,self__.meta24751,self__._,self__.fn1,meta24754__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24753.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24755){
var self__ = this;
var _24755__$1 = this;
return self__.meta24754;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24753.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24753.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24743_SHARP_){
return f1.call(null,(((p1__24743_SHARP_ == null))?null:self__.f.call(null,p1__24743_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24753.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24751","meta24751",-1925553548,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24750","cljs.core.async/t_cljs$core$async24750",-1921066347,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24754","meta24754",-650138684,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24753";

cljs.core.async.t_cljs$core$async24753.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async24753");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24753 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24753(map_LT___$1,f__$1,ch__$1,meta24751__$1,___$2,fn1__$1,meta24754){
return (new cljs.core.async.t_cljs$core$async24753(map_LT___$1,f__$1,ch__$1,meta24751__$1,___$2,fn1__$1,meta24754));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24753(self__.map_LT_,self__.f,self__.ch,self__.meta24751,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16814__auto__ = ret;
if(cljs.core.truth_(and__16814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24751","meta24751",-1925553548,null)], null);
});

cljs.core.async.t_cljs$core$async24750.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24750";

cljs.core.async.t_cljs$core$async24750.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async24750");
});

cljs.core.async.__GT_t_cljs$core$async24750 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24750(map_LT___$1,f__$1,ch__$1,meta24751){
return (new cljs.core.async.t_cljs$core$async24750(map_LT___$1,f__$1,ch__$1,meta24751));
});

}

return (new cljs.core.async.t_cljs$core$async24750(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24759 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24759 = (function (map_GT_,f,ch,meta24760){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24760 = meta24760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24761,meta24760__$1){
var self__ = this;
var _24761__$1 = this;
return (new cljs.core.async.t_cljs$core$async24759(self__.map_GT_,self__.f,self__.ch,meta24760__$1));
});

cljs.core.async.t_cljs$core$async24759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24761){
var self__ = this;
var _24761__$1 = this;
return self__.meta24760;
});

cljs.core.async.t_cljs$core$async24759.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24759.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24759.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24759.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24759.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24759.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24760","meta24760",1516424490,null)], null);
});

cljs.core.async.t_cljs$core$async24759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24759";

cljs.core.async.t_cljs$core$async24759.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async24759");
});

cljs.core.async.__GT_t_cljs$core$async24759 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24759(map_GT___$1,f__$1,ch__$1,meta24760){
return (new cljs.core.async.t_cljs$core$async24759(map_GT___$1,f__$1,ch__$1,meta24760));
});

}

return (new cljs.core.async.t_cljs$core$async24759(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24765 = (function (filter_GT_,p,ch,meta24766){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24766 = meta24766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24767,meta24766__$1){
var self__ = this;
var _24767__$1 = this;
return (new cljs.core.async.t_cljs$core$async24765(self__.filter_GT_,self__.p,self__.ch,meta24766__$1));
});

cljs.core.async.t_cljs$core$async24765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24767){
var self__ = this;
var _24767__$1 = this;
return self__.meta24766;
});

cljs.core.async.t_cljs$core$async24765.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24765.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24765.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24765.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24765.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24765.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24765.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24766","meta24766",753144280,null)], null);
});

cljs.core.async.t_cljs$core$async24765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24765";

cljs.core.async.t_cljs$core$async24765.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async24765");
});

cljs.core.async.__GT_t_cljs$core$async24765 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24765(filter_GT___$1,p__$1,ch__$1,meta24766){
return (new cljs.core.async.t_cljs$core$async24765(filter_GT___$1,p__$1,ch__$1,meta24766));
});

}

return (new cljs.core.async.t_cljs$core$async24765(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24768 = [];
var len__17884__auto___24812 = arguments.length;
var i__17885__auto___24813 = (0);
while(true){
if((i__17885__auto___24813 < len__17884__auto___24812)){
args24768.push((arguments[i__17885__auto___24813]));

var G__24814 = (i__17885__auto___24813 + (1));
i__17885__auto___24813 = G__24814;
continue;
} else {
}
break;
}

var G__24770 = args24768.length;
switch (G__24770) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24768.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18952__auto___24816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___24816,out){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___24816,out){
return (function (state_24791){
var state_val_24792 = (state_24791[(1)]);
if((state_val_24792 === (7))){
var inst_24787 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24793_24817 = state_24791__$1;
(statearr_24793_24817[(2)] = inst_24787);

(statearr_24793_24817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (1))){
var state_24791__$1 = state_24791;
var statearr_24794_24818 = state_24791__$1;
(statearr_24794_24818[(2)] = null);

(statearr_24794_24818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (4))){
var inst_24773 = (state_24791[(7)]);
var inst_24773__$1 = (state_24791[(2)]);
var inst_24774 = (inst_24773__$1 == null);
var state_24791__$1 = (function (){var statearr_24795 = state_24791;
(statearr_24795[(7)] = inst_24773__$1);

return statearr_24795;
})();
if(cljs.core.truth_(inst_24774)){
var statearr_24796_24819 = state_24791__$1;
(statearr_24796_24819[(1)] = (5));

} else {
var statearr_24797_24820 = state_24791__$1;
(statearr_24797_24820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (6))){
var inst_24773 = (state_24791[(7)]);
var inst_24778 = p.call(null,inst_24773);
var state_24791__$1 = state_24791;
if(cljs.core.truth_(inst_24778)){
var statearr_24798_24821 = state_24791__$1;
(statearr_24798_24821[(1)] = (8));

} else {
var statearr_24799_24822 = state_24791__$1;
(statearr_24799_24822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (3))){
var inst_24789 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24791__$1,inst_24789);
} else {
if((state_val_24792 === (2))){
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24791__$1,(4),ch);
} else {
if((state_val_24792 === (11))){
var inst_24781 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24800_24823 = state_24791__$1;
(statearr_24800_24823[(2)] = inst_24781);

(statearr_24800_24823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (9))){
var state_24791__$1 = state_24791;
var statearr_24801_24824 = state_24791__$1;
(statearr_24801_24824[(2)] = null);

(statearr_24801_24824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (5))){
var inst_24776 = cljs.core.async.close_BANG_.call(null,out);
var state_24791__$1 = state_24791;
var statearr_24802_24825 = state_24791__$1;
(statearr_24802_24825[(2)] = inst_24776);

(statearr_24802_24825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (10))){
var inst_24784 = (state_24791[(2)]);
var state_24791__$1 = (function (){var statearr_24803 = state_24791;
(statearr_24803[(8)] = inst_24784);

return statearr_24803;
})();
var statearr_24804_24826 = state_24791__$1;
(statearr_24804_24826[(2)] = null);

(statearr_24804_24826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (8))){
var inst_24773 = (state_24791[(7)]);
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24791__$1,(11),out,inst_24773);
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
});})(c__18952__auto___24816,out))
;
return ((function (switch__18931__auto__,c__18952__auto___24816,out){
return (function() {
var cljs$core$async$state_machine__18932__auto__ = null;
var cljs$core$async$state_machine__18932__auto____0 = (function (){
var statearr_24808 = [null,null,null,null,null,null,null,null,null];
(statearr_24808[(0)] = cljs$core$async$state_machine__18932__auto__);

(statearr_24808[(1)] = (1));

return statearr_24808;
});
var cljs$core$async$state_machine__18932__auto____1 = (function (state_24791){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_24791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e24809){if((e24809 instanceof Object)){
var ex__18935__auto__ = e24809;
var statearr_24810_24827 = state_24791;
(statearr_24810_24827[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24828 = state_24791;
state_24791 = G__24828;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$state_machine__18932__auto__ = function(state_24791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18932__auto____1.call(this,state_24791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18932__auto____0;
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18932__auto____1;
return cljs$core$async$state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___24816,out))
})();
var state__18954__auto__ = (function (){var statearr_24811 = f__18953__auto__.call(null);
(statearr_24811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___24816);

return statearr_24811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___24816,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24829 = [];
var len__17884__auto___24832 = arguments.length;
var i__17885__auto___24833 = (0);
while(true){
if((i__17885__auto___24833 < len__17884__auto___24832)){
args24829.push((arguments[i__17885__auto___24833]));

var G__24834 = (i__17885__auto___24833 + (1));
i__17885__auto___24833 = G__24834;
continue;
} else {
}
break;
}

var G__24831 = args24829.length;
switch (G__24831) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24829.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto__){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto__){
return (function (state_25001){
var state_val_25002 = (state_25001[(1)]);
if((state_val_25002 === (7))){
var inst_24997 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25003_25044 = state_25001__$1;
(statearr_25003_25044[(2)] = inst_24997);

(statearr_25003_25044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (20))){
var inst_24967 = (state_25001[(7)]);
var inst_24978 = (state_25001[(2)]);
var inst_24979 = cljs.core.next.call(null,inst_24967);
var inst_24953 = inst_24979;
var inst_24954 = null;
var inst_24955 = (0);
var inst_24956 = (0);
var state_25001__$1 = (function (){var statearr_25004 = state_25001;
(statearr_25004[(8)] = inst_24955);

(statearr_25004[(9)] = inst_24953);

(statearr_25004[(10)] = inst_24954);

(statearr_25004[(11)] = inst_24956);

(statearr_25004[(12)] = inst_24978);

return statearr_25004;
})();
var statearr_25005_25045 = state_25001__$1;
(statearr_25005_25045[(2)] = null);

(statearr_25005_25045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (1))){
var state_25001__$1 = state_25001;
var statearr_25006_25046 = state_25001__$1;
(statearr_25006_25046[(2)] = null);

(statearr_25006_25046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (4))){
var inst_24942 = (state_25001[(13)]);
var inst_24942__$1 = (state_25001[(2)]);
var inst_24943 = (inst_24942__$1 == null);
var state_25001__$1 = (function (){var statearr_25007 = state_25001;
(statearr_25007[(13)] = inst_24942__$1);

return statearr_25007;
})();
if(cljs.core.truth_(inst_24943)){
var statearr_25008_25047 = state_25001__$1;
(statearr_25008_25047[(1)] = (5));

} else {
var statearr_25009_25048 = state_25001__$1;
(statearr_25009_25048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (15))){
var state_25001__$1 = state_25001;
var statearr_25013_25049 = state_25001__$1;
(statearr_25013_25049[(2)] = null);

(statearr_25013_25049[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (21))){
var state_25001__$1 = state_25001;
var statearr_25014_25050 = state_25001__$1;
(statearr_25014_25050[(2)] = null);

(statearr_25014_25050[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (13))){
var inst_24955 = (state_25001[(8)]);
var inst_24953 = (state_25001[(9)]);
var inst_24954 = (state_25001[(10)]);
var inst_24956 = (state_25001[(11)]);
var inst_24963 = (state_25001[(2)]);
var inst_24964 = (inst_24956 + (1));
var tmp25010 = inst_24955;
var tmp25011 = inst_24953;
var tmp25012 = inst_24954;
var inst_24953__$1 = tmp25011;
var inst_24954__$1 = tmp25012;
var inst_24955__$1 = tmp25010;
var inst_24956__$1 = inst_24964;
var state_25001__$1 = (function (){var statearr_25015 = state_25001;
(statearr_25015[(14)] = inst_24963);

(statearr_25015[(8)] = inst_24955__$1);

(statearr_25015[(9)] = inst_24953__$1);

(statearr_25015[(10)] = inst_24954__$1);

(statearr_25015[(11)] = inst_24956__$1);

return statearr_25015;
})();
var statearr_25016_25051 = state_25001__$1;
(statearr_25016_25051[(2)] = null);

(statearr_25016_25051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (22))){
var state_25001__$1 = state_25001;
var statearr_25017_25052 = state_25001__$1;
(statearr_25017_25052[(2)] = null);

(statearr_25017_25052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (6))){
var inst_24942 = (state_25001[(13)]);
var inst_24951 = f.call(null,inst_24942);
var inst_24952 = cljs.core.seq.call(null,inst_24951);
var inst_24953 = inst_24952;
var inst_24954 = null;
var inst_24955 = (0);
var inst_24956 = (0);
var state_25001__$1 = (function (){var statearr_25018 = state_25001;
(statearr_25018[(8)] = inst_24955);

(statearr_25018[(9)] = inst_24953);

(statearr_25018[(10)] = inst_24954);

(statearr_25018[(11)] = inst_24956);

return statearr_25018;
})();
var statearr_25019_25053 = state_25001__$1;
(statearr_25019_25053[(2)] = null);

(statearr_25019_25053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (17))){
var inst_24967 = (state_25001[(7)]);
var inst_24971 = cljs.core.chunk_first.call(null,inst_24967);
var inst_24972 = cljs.core.chunk_rest.call(null,inst_24967);
var inst_24973 = cljs.core.count.call(null,inst_24971);
var inst_24953 = inst_24972;
var inst_24954 = inst_24971;
var inst_24955 = inst_24973;
var inst_24956 = (0);
var state_25001__$1 = (function (){var statearr_25020 = state_25001;
(statearr_25020[(8)] = inst_24955);

(statearr_25020[(9)] = inst_24953);

(statearr_25020[(10)] = inst_24954);

(statearr_25020[(11)] = inst_24956);

return statearr_25020;
})();
var statearr_25021_25054 = state_25001__$1;
(statearr_25021_25054[(2)] = null);

(statearr_25021_25054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (3))){
var inst_24999 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25001__$1,inst_24999);
} else {
if((state_val_25002 === (12))){
var inst_24987 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25022_25055 = state_25001__$1;
(statearr_25022_25055[(2)] = inst_24987);

(statearr_25022_25055[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (2))){
var state_25001__$1 = state_25001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25001__$1,(4),in$);
} else {
if((state_val_25002 === (23))){
var inst_24995 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25023_25056 = state_25001__$1;
(statearr_25023_25056[(2)] = inst_24995);

(statearr_25023_25056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (19))){
var inst_24982 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25024_25057 = state_25001__$1;
(statearr_25024_25057[(2)] = inst_24982);

(statearr_25024_25057[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (11))){
var inst_24967 = (state_25001[(7)]);
var inst_24953 = (state_25001[(9)]);
var inst_24967__$1 = cljs.core.seq.call(null,inst_24953);
var state_25001__$1 = (function (){var statearr_25025 = state_25001;
(statearr_25025[(7)] = inst_24967__$1);

return statearr_25025;
})();
if(inst_24967__$1){
var statearr_25026_25058 = state_25001__$1;
(statearr_25026_25058[(1)] = (14));

} else {
var statearr_25027_25059 = state_25001__$1;
(statearr_25027_25059[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (9))){
var inst_24989 = (state_25001[(2)]);
var inst_24990 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25001__$1 = (function (){var statearr_25028 = state_25001;
(statearr_25028[(15)] = inst_24989);

return statearr_25028;
})();
if(cljs.core.truth_(inst_24990)){
var statearr_25029_25060 = state_25001__$1;
(statearr_25029_25060[(1)] = (21));

} else {
var statearr_25030_25061 = state_25001__$1;
(statearr_25030_25061[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (5))){
var inst_24945 = cljs.core.async.close_BANG_.call(null,out);
var state_25001__$1 = state_25001;
var statearr_25031_25062 = state_25001__$1;
(statearr_25031_25062[(2)] = inst_24945);

(statearr_25031_25062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (14))){
var inst_24967 = (state_25001[(7)]);
var inst_24969 = cljs.core.chunked_seq_QMARK_.call(null,inst_24967);
var state_25001__$1 = state_25001;
if(inst_24969){
var statearr_25032_25063 = state_25001__$1;
(statearr_25032_25063[(1)] = (17));

} else {
var statearr_25033_25064 = state_25001__$1;
(statearr_25033_25064[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (16))){
var inst_24985 = (state_25001[(2)]);
var state_25001__$1 = state_25001;
var statearr_25034_25065 = state_25001__$1;
(statearr_25034_25065[(2)] = inst_24985);

(statearr_25034_25065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25002 === (10))){
var inst_24954 = (state_25001[(10)]);
var inst_24956 = (state_25001[(11)]);
var inst_24961 = cljs.core._nth.call(null,inst_24954,inst_24956);
var state_25001__$1 = state_25001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25001__$1,(13),out,inst_24961);
} else {
if((state_val_25002 === (18))){
var inst_24967 = (state_25001[(7)]);
var inst_24976 = cljs.core.first.call(null,inst_24967);
var state_25001__$1 = state_25001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25001__$1,(20),out,inst_24976);
} else {
if((state_val_25002 === (8))){
var inst_24955 = (state_25001[(8)]);
var inst_24956 = (state_25001[(11)]);
var inst_24958 = (inst_24956 < inst_24955);
var inst_24959 = inst_24958;
var state_25001__$1 = state_25001;
if(cljs.core.truth_(inst_24959)){
var statearr_25035_25066 = state_25001__$1;
(statearr_25035_25066[(1)] = (10));

} else {
var statearr_25036_25067 = state_25001__$1;
(statearr_25036_25067[(1)] = (11));

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
});})(c__18952__auto__))
;
return ((function (switch__18931__auto__,c__18952__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18932__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18932__auto____0 = (function (){
var statearr_25040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25040[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18932__auto__);

(statearr_25040[(1)] = (1));

return statearr_25040;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18932__auto____1 = (function (state_25001){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_25001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e25041){if((e25041 instanceof Object)){
var ex__18935__auto__ = e25041;
var statearr_25042_25068 = state_25001;
(statearr_25042_25068[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25069 = state_25001;
state_25001 = G__25069;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18932__auto__ = function(state_25001){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18932__auto____1.call(this,state_25001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18932__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18932__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto__))
})();
var state__18954__auto__ = (function (){var statearr_25043 = f__18953__auto__.call(null);
(statearr_25043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto__);

return statearr_25043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto__))
);

return c__18952__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25070 = [];
var len__17884__auto___25073 = arguments.length;
var i__17885__auto___25074 = (0);
while(true){
if((i__17885__auto___25074 < len__17884__auto___25073)){
args25070.push((arguments[i__17885__auto___25074]));

var G__25075 = (i__17885__auto___25074 + (1));
i__17885__auto___25074 = G__25075;
continue;
} else {
}
break;
}

var G__25072 = args25070.length;
switch (G__25072) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25070.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args25077 = [];
var len__17884__auto___25080 = arguments.length;
var i__17885__auto___25081 = (0);
while(true){
if((i__17885__auto___25081 < len__17884__auto___25080)){
args25077.push((arguments[i__17885__auto___25081]));

var G__25082 = (i__17885__auto___25081 + (1));
i__17885__auto___25081 = G__25082;
continue;
} else {
}
break;
}

var G__25079 = args25077.length;
switch (G__25079) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25077.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args25084 = [];
var len__17884__auto___25135 = arguments.length;
var i__17885__auto___25136 = (0);
while(true){
if((i__17885__auto___25136 < len__17884__auto___25135)){
args25084.push((arguments[i__17885__auto___25136]));

var G__25137 = (i__17885__auto___25136 + (1));
i__17885__auto___25136 = G__25137;
continue;
} else {
}
break;
}

var G__25086 = args25084.length;
switch (G__25086) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25084.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18952__auto___25139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___25139,out){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___25139,out){
return (function (state_25110){
var state_val_25111 = (state_25110[(1)]);
if((state_val_25111 === (7))){
var inst_25105 = (state_25110[(2)]);
var state_25110__$1 = state_25110;
var statearr_25112_25140 = state_25110__$1;
(statearr_25112_25140[(2)] = inst_25105);

(statearr_25112_25140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25111 === (1))){
var inst_25087 = null;
var state_25110__$1 = (function (){var statearr_25113 = state_25110;
(statearr_25113[(7)] = inst_25087);

return statearr_25113;
})();
var statearr_25114_25141 = state_25110__$1;
(statearr_25114_25141[(2)] = null);

(statearr_25114_25141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25111 === (4))){
var inst_25090 = (state_25110[(8)]);
var inst_25090__$1 = (state_25110[(2)]);
var inst_25091 = (inst_25090__$1 == null);
var inst_25092 = cljs.core.not.call(null,inst_25091);
var state_25110__$1 = (function (){var statearr_25115 = state_25110;
(statearr_25115[(8)] = inst_25090__$1);

return statearr_25115;
})();
if(inst_25092){
var statearr_25116_25142 = state_25110__$1;
(statearr_25116_25142[(1)] = (5));

} else {
var statearr_25117_25143 = state_25110__$1;
(statearr_25117_25143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25111 === (6))){
var state_25110__$1 = state_25110;
var statearr_25118_25144 = state_25110__$1;
(statearr_25118_25144[(2)] = null);

(statearr_25118_25144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25111 === (3))){
var inst_25107 = (state_25110[(2)]);
var inst_25108 = cljs.core.async.close_BANG_.call(null,out);
var state_25110__$1 = (function (){var statearr_25119 = state_25110;
(statearr_25119[(9)] = inst_25107);

return statearr_25119;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25110__$1,inst_25108);
} else {
if((state_val_25111 === (2))){
var state_25110__$1 = state_25110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25110__$1,(4),ch);
} else {
if((state_val_25111 === (11))){
var inst_25090 = (state_25110[(8)]);
var inst_25099 = (state_25110[(2)]);
var inst_25087 = inst_25090;
var state_25110__$1 = (function (){var statearr_25120 = state_25110;
(statearr_25120[(7)] = inst_25087);

(statearr_25120[(10)] = inst_25099);

return statearr_25120;
})();
var statearr_25121_25145 = state_25110__$1;
(statearr_25121_25145[(2)] = null);

(statearr_25121_25145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25111 === (9))){
var inst_25090 = (state_25110[(8)]);
var state_25110__$1 = state_25110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25110__$1,(11),out,inst_25090);
} else {
if((state_val_25111 === (5))){
var inst_25090 = (state_25110[(8)]);
var inst_25087 = (state_25110[(7)]);
var inst_25094 = cljs.core._EQ_.call(null,inst_25090,inst_25087);
var state_25110__$1 = state_25110;
if(inst_25094){
var statearr_25123_25146 = state_25110__$1;
(statearr_25123_25146[(1)] = (8));

} else {
var statearr_25124_25147 = state_25110__$1;
(statearr_25124_25147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25111 === (10))){
var inst_25102 = (state_25110[(2)]);
var state_25110__$1 = state_25110;
var statearr_25125_25148 = state_25110__$1;
(statearr_25125_25148[(2)] = inst_25102);

(statearr_25125_25148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25111 === (8))){
var inst_25087 = (state_25110[(7)]);
var tmp25122 = inst_25087;
var inst_25087__$1 = tmp25122;
var state_25110__$1 = (function (){var statearr_25126 = state_25110;
(statearr_25126[(7)] = inst_25087__$1);

return statearr_25126;
})();
var statearr_25127_25149 = state_25110__$1;
(statearr_25127_25149[(2)] = null);

(statearr_25127_25149[(1)] = (2));


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
});})(c__18952__auto___25139,out))
;
return ((function (switch__18931__auto__,c__18952__auto___25139,out){
return (function() {
var cljs$core$async$state_machine__18932__auto__ = null;
var cljs$core$async$state_machine__18932__auto____0 = (function (){
var statearr_25131 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25131[(0)] = cljs$core$async$state_machine__18932__auto__);

(statearr_25131[(1)] = (1));

return statearr_25131;
});
var cljs$core$async$state_machine__18932__auto____1 = (function (state_25110){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_25110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e25132){if((e25132 instanceof Object)){
var ex__18935__auto__ = e25132;
var statearr_25133_25150 = state_25110;
(statearr_25133_25150[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25151 = state_25110;
state_25110 = G__25151;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$state_machine__18932__auto__ = function(state_25110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18932__auto____1.call(this,state_25110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18932__auto____0;
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18932__auto____1;
return cljs$core$async$state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___25139,out))
})();
var state__18954__auto__ = (function (){var statearr_25134 = f__18953__auto__.call(null);
(statearr_25134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___25139);

return statearr_25134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___25139,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25152 = [];
var len__17884__auto___25222 = arguments.length;
var i__17885__auto___25223 = (0);
while(true){
if((i__17885__auto___25223 < len__17884__auto___25222)){
args25152.push((arguments[i__17885__auto___25223]));

var G__25224 = (i__17885__auto___25223 + (1));
i__17885__auto___25223 = G__25224;
continue;
} else {
}
break;
}

var G__25154 = args25152.length;
switch (G__25154) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25152.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18952__auto___25226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___25226,out){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___25226,out){
return (function (state_25192){
var state_val_25193 = (state_25192[(1)]);
if((state_val_25193 === (7))){
var inst_25188 = (state_25192[(2)]);
var state_25192__$1 = state_25192;
var statearr_25194_25227 = state_25192__$1;
(statearr_25194_25227[(2)] = inst_25188);

(statearr_25194_25227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (1))){
var inst_25155 = (new Array(n));
var inst_25156 = inst_25155;
var inst_25157 = (0);
var state_25192__$1 = (function (){var statearr_25195 = state_25192;
(statearr_25195[(7)] = inst_25156);

(statearr_25195[(8)] = inst_25157);

return statearr_25195;
})();
var statearr_25196_25228 = state_25192__$1;
(statearr_25196_25228[(2)] = null);

(statearr_25196_25228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (4))){
var inst_25160 = (state_25192[(9)]);
var inst_25160__$1 = (state_25192[(2)]);
var inst_25161 = (inst_25160__$1 == null);
var inst_25162 = cljs.core.not.call(null,inst_25161);
var state_25192__$1 = (function (){var statearr_25197 = state_25192;
(statearr_25197[(9)] = inst_25160__$1);

return statearr_25197;
})();
if(inst_25162){
var statearr_25198_25229 = state_25192__$1;
(statearr_25198_25229[(1)] = (5));

} else {
var statearr_25199_25230 = state_25192__$1;
(statearr_25199_25230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (15))){
var inst_25182 = (state_25192[(2)]);
var state_25192__$1 = state_25192;
var statearr_25200_25231 = state_25192__$1;
(statearr_25200_25231[(2)] = inst_25182);

(statearr_25200_25231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (13))){
var state_25192__$1 = state_25192;
var statearr_25201_25232 = state_25192__$1;
(statearr_25201_25232[(2)] = null);

(statearr_25201_25232[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (6))){
var inst_25157 = (state_25192[(8)]);
var inst_25178 = (inst_25157 > (0));
var state_25192__$1 = state_25192;
if(cljs.core.truth_(inst_25178)){
var statearr_25202_25233 = state_25192__$1;
(statearr_25202_25233[(1)] = (12));

} else {
var statearr_25203_25234 = state_25192__$1;
(statearr_25203_25234[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (3))){
var inst_25190 = (state_25192[(2)]);
var state_25192__$1 = state_25192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25192__$1,inst_25190);
} else {
if((state_val_25193 === (12))){
var inst_25156 = (state_25192[(7)]);
var inst_25180 = cljs.core.vec.call(null,inst_25156);
var state_25192__$1 = state_25192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25192__$1,(15),out,inst_25180);
} else {
if((state_val_25193 === (2))){
var state_25192__$1 = state_25192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25192__$1,(4),ch);
} else {
if((state_val_25193 === (11))){
var inst_25172 = (state_25192[(2)]);
var inst_25173 = (new Array(n));
var inst_25156 = inst_25173;
var inst_25157 = (0);
var state_25192__$1 = (function (){var statearr_25204 = state_25192;
(statearr_25204[(7)] = inst_25156);

(statearr_25204[(8)] = inst_25157);

(statearr_25204[(10)] = inst_25172);

return statearr_25204;
})();
var statearr_25205_25235 = state_25192__$1;
(statearr_25205_25235[(2)] = null);

(statearr_25205_25235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (9))){
var inst_25156 = (state_25192[(7)]);
var inst_25170 = cljs.core.vec.call(null,inst_25156);
var state_25192__$1 = state_25192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25192__$1,(11),out,inst_25170);
} else {
if((state_val_25193 === (5))){
var inst_25160 = (state_25192[(9)]);
var inst_25165 = (state_25192[(11)]);
var inst_25156 = (state_25192[(7)]);
var inst_25157 = (state_25192[(8)]);
var inst_25164 = (inst_25156[inst_25157] = inst_25160);
var inst_25165__$1 = (inst_25157 + (1));
var inst_25166 = (inst_25165__$1 < n);
var state_25192__$1 = (function (){var statearr_25206 = state_25192;
(statearr_25206[(11)] = inst_25165__$1);

(statearr_25206[(12)] = inst_25164);

return statearr_25206;
})();
if(cljs.core.truth_(inst_25166)){
var statearr_25207_25236 = state_25192__$1;
(statearr_25207_25236[(1)] = (8));

} else {
var statearr_25208_25237 = state_25192__$1;
(statearr_25208_25237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (14))){
var inst_25185 = (state_25192[(2)]);
var inst_25186 = cljs.core.async.close_BANG_.call(null,out);
var state_25192__$1 = (function (){var statearr_25210 = state_25192;
(statearr_25210[(13)] = inst_25185);

return statearr_25210;
})();
var statearr_25211_25238 = state_25192__$1;
(statearr_25211_25238[(2)] = inst_25186);

(statearr_25211_25238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (10))){
var inst_25176 = (state_25192[(2)]);
var state_25192__$1 = state_25192;
var statearr_25212_25239 = state_25192__$1;
(statearr_25212_25239[(2)] = inst_25176);

(statearr_25212_25239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (8))){
var inst_25165 = (state_25192[(11)]);
var inst_25156 = (state_25192[(7)]);
var tmp25209 = inst_25156;
var inst_25156__$1 = tmp25209;
var inst_25157 = inst_25165;
var state_25192__$1 = (function (){var statearr_25213 = state_25192;
(statearr_25213[(7)] = inst_25156__$1);

(statearr_25213[(8)] = inst_25157);

return statearr_25213;
})();
var statearr_25214_25240 = state_25192__$1;
(statearr_25214_25240[(2)] = null);

(statearr_25214_25240[(1)] = (2));


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
});})(c__18952__auto___25226,out))
;
return ((function (switch__18931__auto__,c__18952__auto___25226,out){
return (function() {
var cljs$core$async$state_machine__18932__auto__ = null;
var cljs$core$async$state_machine__18932__auto____0 = (function (){
var statearr_25218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25218[(0)] = cljs$core$async$state_machine__18932__auto__);

(statearr_25218[(1)] = (1));

return statearr_25218;
});
var cljs$core$async$state_machine__18932__auto____1 = (function (state_25192){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_25192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e25219){if((e25219 instanceof Object)){
var ex__18935__auto__ = e25219;
var statearr_25220_25241 = state_25192;
(statearr_25220_25241[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25242 = state_25192;
state_25192 = G__25242;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$state_machine__18932__auto__ = function(state_25192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18932__auto____1.call(this,state_25192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18932__auto____0;
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18932__auto____1;
return cljs$core$async$state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___25226,out))
})();
var state__18954__auto__ = (function (){var statearr_25221 = f__18953__auto__.call(null);
(statearr_25221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___25226);

return statearr_25221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___25226,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25243 = [];
var len__17884__auto___25317 = arguments.length;
var i__17885__auto___25318 = (0);
while(true){
if((i__17885__auto___25318 < len__17884__auto___25317)){
args25243.push((arguments[i__17885__auto___25318]));

var G__25319 = (i__17885__auto___25318 + (1));
i__17885__auto___25318 = G__25319;
continue;
} else {
}
break;
}

var G__25245 = args25243.length;
switch (G__25245) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25243.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18952__auto___25321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___25321,out){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___25321,out){
return (function (state_25287){
var state_val_25288 = (state_25287[(1)]);
if((state_val_25288 === (7))){
var inst_25283 = (state_25287[(2)]);
var state_25287__$1 = state_25287;
var statearr_25289_25322 = state_25287__$1;
(statearr_25289_25322[(2)] = inst_25283);

(statearr_25289_25322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (1))){
var inst_25246 = [];
var inst_25247 = inst_25246;
var inst_25248 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25287__$1 = (function (){var statearr_25290 = state_25287;
(statearr_25290[(7)] = inst_25247);

(statearr_25290[(8)] = inst_25248);

return statearr_25290;
})();
var statearr_25291_25323 = state_25287__$1;
(statearr_25291_25323[(2)] = null);

(statearr_25291_25323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (4))){
var inst_25251 = (state_25287[(9)]);
var inst_25251__$1 = (state_25287[(2)]);
var inst_25252 = (inst_25251__$1 == null);
var inst_25253 = cljs.core.not.call(null,inst_25252);
var state_25287__$1 = (function (){var statearr_25292 = state_25287;
(statearr_25292[(9)] = inst_25251__$1);

return statearr_25292;
})();
if(inst_25253){
var statearr_25293_25324 = state_25287__$1;
(statearr_25293_25324[(1)] = (5));

} else {
var statearr_25294_25325 = state_25287__$1;
(statearr_25294_25325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (15))){
var inst_25277 = (state_25287[(2)]);
var state_25287__$1 = state_25287;
var statearr_25295_25326 = state_25287__$1;
(statearr_25295_25326[(2)] = inst_25277);

(statearr_25295_25326[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (13))){
var state_25287__$1 = state_25287;
var statearr_25296_25327 = state_25287__$1;
(statearr_25296_25327[(2)] = null);

(statearr_25296_25327[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (6))){
var inst_25247 = (state_25287[(7)]);
var inst_25272 = inst_25247.length;
var inst_25273 = (inst_25272 > (0));
var state_25287__$1 = state_25287;
if(cljs.core.truth_(inst_25273)){
var statearr_25297_25328 = state_25287__$1;
(statearr_25297_25328[(1)] = (12));

} else {
var statearr_25298_25329 = state_25287__$1;
(statearr_25298_25329[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (3))){
var inst_25285 = (state_25287[(2)]);
var state_25287__$1 = state_25287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25287__$1,inst_25285);
} else {
if((state_val_25288 === (12))){
var inst_25247 = (state_25287[(7)]);
var inst_25275 = cljs.core.vec.call(null,inst_25247);
var state_25287__$1 = state_25287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25287__$1,(15),out,inst_25275);
} else {
if((state_val_25288 === (2))){
var state_25287__$1 = state_25287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25287__$1,(4),ch);
} else {
if((state_val_25288 === (11))){
var inst_25255 = (state_25287[(10)]);
var inst_25251 = (state_25287[(9)]);
var inst_25265 = (state_25287[(2)]);
var inst_25266 = [];
var inst_25267 = inst_25266.push(inst_25251);
var inst_25247 = inst_25266;
var inst_25248 = inst_25255;
var state_25287__$1 = (function (){var statearr_25299 = state_25287;
(statearr_25299[(7)] = inst_25247);

(statearr_25299[(11)] = inst_25265);

(statearr_25299[(12)] = inst_25267);

(statearr_25299[(8)] = inst_25248);

return statearr_25299;
})();
var statearr_25300_25330 = state_25287__$1;
(statearr_25300_25330[(2)] = null);

(statearr_25300_25330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (9))){
var inst_25247 = (state_25287[(7)]);
var inst_25263 = cljs.core.vec.call(null,inst_25247);
var state_25287__$1 = state_25287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25287__$1,(11),out,inst_25263);
} else {
if((state_val_25288 === (5))){
var inst_25255 = (state_25287[(10)]);
var inst_25248 = (state_25287[(8)]);
var inst_25251 = (state_25287[(9)]);
var inst_25255__$1 = f.call(null,inst_25251);
var inst_25256 = cljs.core._EQ_.call(null,inst_25255__$1,inst_25248);
var inst_25257 = cljs.core.keyword_identical_QMARK_.call(null,inst_25248,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25258 = (inst_25256) || (inst_25257);
var state_25287__$1 = (function (){var statearr_25301 = state_25287;
(statearr_25301[(10)] = inst_25255__$1);

return statearr_25301;
})();
if(cljs.core.truth_(inst_25258)){
var statearr_25302_25331 = state_25287__$1;
(statearr_25302_25331[(1)] = (8));

} else {
var statearr_25303_25332 = state_25287__$1;
(statearr_25303_25332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (14))){
var inst_25280 = (state_25287[(2)]);
var inst_25281 = cljs.core.async.close_BANG_.call(null,out);
var state_25287__$1 = (function (){var statearr_25305 = state_25287;
(statearr_25305[(13)] = inst_25280);

return statearr_25305;
})();
var statearr_25306_25333 = state_25287__$1;
(statearr_25306_25333[(2)] = inst_25281);

(statearr_25306_25333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (10))){
var inst_25270 = (state_25287[(2)]);
var state_25287__$1 = state_25287;
var statearr_25307_25334 = state_25287__$1;
(statearr_25307_25334[(2)] = inst_25270);

(statearr_25307_25334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25288 === (8))){
var inst_25247 = (state_25287[(7)]);
var inst_25255 = (state_25287[(10)]);
var inst_25251 = (state_25287[(9)]);
var inst_25260 = inst_25247.push(inst_25251);
var tmp25304 = inst_25247;
var inst_25247__$1 = tmp25304;
var inst_25248 = inst_25255;
var state_25287__$1 = (function (){var statearr_25308 = state_25287;
(statearr_25308[(7)] = inst_25247__$1);

(statearr_25308[(14)] = inst_25260);

(statearr_25308[(8)] = inst_25248);

return statearr_25308;
})();
var statearr_25309_25335 = state_25287__$1;
(statearr_25309_25335[(2)] = null);

(statearr_25309_25335[(1)] = (2));


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
});})(c__18952__auto___25321,out))
;
return ((function (switch__18931__auto__,c__18952__auto___25321,out){
return (function() {
var cljs$core$async$state_machine__18932__auto__ = null;
var cljs$core$async$state_machine__18932__auto____0 = (function (){
var statearr_25313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25313[(0)] = cljs$core$async$state_machine__18932__auto__);

(statearr_25313[(1)] = (1));

return statearr_25313;
});
var cljs$core$async$state_machine__18932__auto____1 = (function (state_25287){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_25287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e25314){if((e25314 instanceof Object)){
var ex__18935__auto__ = e25314;
var statearr_25315_25336 = state_25287;
(statearr_25315_25336[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25337 = state_25287;
state_25287 = G__25337;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
cljs$core$async$state_machine__18932__auto__ = function(state_25287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18932__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18932__auto____1.call(this,state_25287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18932__auto____0;
cljs$core$async$state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18932__auto____1;
return cljs$core$async$state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___25321,out))
})();
var state__18954__auto__ = (function (){var statearr_25316 = f__18953__auto__.call(null);
(statearr_25316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___25321);

return statearr_25316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___25321,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1453769943429