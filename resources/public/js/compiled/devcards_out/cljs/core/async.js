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
var args21048 = [];
var len__17884__auto___21054 = arguments.length;
var i__17885__auto___21055 = (0);
while(true){
if((i__17885__auto___21055 < len__17884__auto___21054)){
args21048.push((arguments[i__17885__auto___21055]));

var G__21056 = (i__17885__auto___21055 + (1));
i__17885__auto___21055 = G__21056;
continue;
} else {
}
break;
}

var G__21050 = args21048.length;
switch (G__21050) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21048.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21051 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21051 = (function (f,blockable,meta21052){
this.f = f;
this.blockable = blockable;
this.meta21052 = meta21052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21053,meta21052__$1){
var self__ = this;
var _21053__$1 = this;
return (new cljs.core.async.t_cljs$core$async21051(self__.f,self__.blockable,meta21052__$1));
});

cljs.core.async.t_cljs$core$async21051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21053){
var self__ = this;
var _21053__$1 = this;
return self__.meta21052;
});

cljs.core.async.t_cljs$core$async21051.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21051.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21051.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21051.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21052","meta21052",638822434,null)], null);
});

cljs.core.async.t_cljs$core$async21051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21051";

cljs.core.async.t_cljs$core$async21051.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21051");
});

cljs.core.async.__GT_t_cljs$core$async21051 = (function cljs$core$async$__GT_t_cljs$core$async21051(f__$1,blockable__$1,meta21052){
return (new cljs.core.async.t_cljs$core$async21051(f__$1,blockable__$1,meta21052));
});

}

return (new cljs.core.async.t_cljs$core$async21051(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args21060 = [];
var len__17884__auto___21063 = arguments.length;
var i__17885__auto___21064 = (0);
while(true){
if((i__17885__auto___21064 < len__17884__auto___21063)){
args21060.push((arguments[i__17885__auto___21064]));

var G__21065 = (i__17885__auto___21064 + (1));
i__17885__auto___21064 = G__21065;
continue;
} else {
}
break;
}

var G__21062 = args21060.length;
switch (G__21062) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21060.length)].join('')));

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
var args21067 = [];
var len__17884__auto___21070 = arguments.length;
var i__17885__auto___21071 = (0);
while(true){
if((i__17885__auto___21071 < len__17884__auto___21070)){
args21067.push((arguments[i__17885__auto___21071]));

var G__21072 = (i__17885__auto___21071 + (1));
i__17885__auto___21071 = G__21072;
continue;
} else {
}
break;
}

var G__21069 = args21067.length;
switch (G__21069) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21067.length)].join('')));

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
var args21074 = [];
var len__17884__auto___21077 = arguments.length;
var i__17885__auto___21078 = (0);
while(true){
if((i__17885__auto___21078 < len__17884__auto___21077)){
args21074.push((arguments[i__17885__auto___21078]));

var G__21079 = (i__17885__auto___21078 + (1));
i__17885__auto___21078 = G__21079;
continue;
} else {
}
break;
}

var G__21076 = args21074.length;
switch (G__21076) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21074.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21081 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21081);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21081,ret){
return (function (){
return fn1.call(null,val_21081);
});})(val_21081,ret))
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
var args21082 = [];
var len__17884__auto___21085 = arguments.length;
var i__17885__auto___21086 = (0);
while(true){
if((i__17885__auto___21086 < len__17884__auto___21085)){
args21082.push((arguments[i__17885__auto___21086]));

var G__21087 = (i__17885__auto___21086 + (1));
i__17885__auto___21086 = G__21087;
continue;
} else {
}
break;
}

var G__21084 = args21082.length;
switch (G__21084) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21082.length)].join('')));

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
var n__17729__auto___21089 = n;
var x_21090 = (0);
while(true){
if((x_21090 < n__17729__auto___21089)){
(a[x_21090] = (0));

var G__21091 = (x_21090 + (1));
x_21090 = G__21091;
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

var G__21092 = (i + (1));
i = G__21092;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21096 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21096 = (function (alt_flag,flag,meta21097){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21097 = meta21097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21098,meta21097__$1){
var self__ = this;
var _21098__$1 = this;
return (new cljs.core.async.t_cljs$core$async21096(self__.alt_flag,self__.flag,meta21097__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21098){
var self__ = this;
var _21098__$1 = this;
return self__.meta21097;
});})(flag))
;

cljs.core.async.t_cljs$core$async21096.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21096.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21096.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21096.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21096.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21097","meta21097",-1124107314,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21096";

cljs.core.async.t_cljs$core$async21096.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21096");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21096 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21096(alt_flag__$1,flag__$1,meta21097){
return (new cljs.core.async.t_cljs$core$async21096(alt_flag__$1,flag__$1,meta21097));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21096(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21102 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21102 = (function (alt_handler,flag,cb,meta21103){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21103 = meta21103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21104,meta21103__$1){
var self__ = this;
var _21104__$1 = this;
return (new cljs.core.async.t_cljs$core$async21102(self__.alt_handler,self__.flag,self__.cb,meta21103__$1));
});

cljs.core.async.t_cljs$core$async21102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21104){
var self__ = this;
var _21104__$1 = this;
return self__.meta21103;
});

cljs.core.async.t_cljs$core$async21102.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21102.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21103","meta21103",451748497,null)], null);
});

cljs.core.async.t_cljs$core$async21102.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21102";

cljs.core.async.t_cljs$core$async21102.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21102");
});

cljs.core.async.__GT_t_cljs$core$async21102 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21102(alt_handler__$1,flag__$1,cb__$1,meta21103){
return (new cljs.core.async.t_cljs$core$async21102(alt_handler__$1,flag__$1,cb__$1,meta21103));
});

}

return (new cljs.core.async.t_cljs$core$async21102(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21105_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21105_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21106_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21106_SHARP_,port], null));
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
var G__21107 = (i + (1));
i = G__21107;
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
var len__17884__auto___21113 = arguments.length;
var i__17885__auto___21114 = (0);
while(true){
if((i__17885__auto___21114 < len__17884__auto___21113)){
args__17891__auto__.push((arguments[i__17885__auto___21114]));

var G__21115 = (i__17885__auto___21114 + (1));
i__17885__auto___21114 = G__21115;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21110){
var map__21111 = p__21110;
var map__21111__$1 = ((((!((map__21111 == null)))?((((map__21111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21111):map__21111);
var opts = map__21111__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21108){
var G__21109 = cljs.core.first.call(null,seq21108);
var seq21108__$1 = cljs.core.next.call(null,seq21108);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21109,seq21108__$1);
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
var args21116 = [];
var len__17884__auto___21166 = arguments.length;
var i__17885__auto___21167 = (0);
while(true){
if((i__17885__auto___21167 < len__17884__auto___21166)){
args21116.push((arguments[i__17885__auto___21167]));

var G__21168 = (i__17885__auto___21167 + (1));
i__17885__auto___21167 = G__21168;
continue;
} else {
}
break;
}

var G__21118 = args21116.length;
switch (G__21118) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21116.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21003__auto___21170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___21170){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___21170){
return (function (state_21142){
var state_val_21143 = (state_21142[(1)]);
if((state_val_21143 === (7))){
var inst_21138 = (state_21142[(2)]);
var state_21142__$1 = state_21142;
var statearr_21144_21171 = state_21142__$1;
(statearr_21144_21171[(2)] = inst_21138);

(statearr_21144_21171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21143 === (1))){
var state_21142__$1 = state_21142;
var statearr_21145_21172 = state_21142__$1;
(statearr_21145_21172[(2)] = null);

(statearr_21145_21172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21143 === (4))){
var inst_21121 = (state_21142[(7)]);
var inst_21121__$1 = (state_21142[(2)]);
var inst_21122 = (inst_21121__$1 == null);
var state_21142__$1 = (function (){var statearr_21146 = state_21142;
(statearr_21146[(7)] = inst_21121__$1);

return statearr_21146;
})();
if(cljs.core.truth_(inst_21122)){
var statearr_21147_21173 = state_21142__$1;
(statearr_21147_21173[(1)] = (5));

} else {
var statearr_21148_21174 = state_21142__$1;
(statearr_21148_21174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21143 === (13))){
var state_21142__$1 = state_21142;
var statearr_21149_21175 = state_21142__$1;
(statearr_21149_21175[(2)] = null);

(statearr_21149_21175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21143 === (6))){
var inst_21121 = (state_21142[(7)]);
var state_21142__$1 = state_21142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21142__$1,(11),to,inst_21121);
} else {
if((state_val_21143 === (3))){
var inst_21140 = (state_21142[(2)]);
var state_21142__$1 = state_21142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21142__$1,inst_21140);
} else {
if((state_val_21143 === (12))){
var state_21142__$1 = state_21142;
var statearr_21150_21176 = state_21142__$1;
(statearr_21150_21176[(2)] = null);

(statearr_21150_21176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21143 === (2))){
var state_21142__$1 = state_21142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21142__$1,(4),from);
} else {
if((state_val_21143 === (11))){
var inst_21131 = (state_21142[(2)]);
var state_21142__$1 = state_21142;
if(cljs.core.truth_(inst_21131)){
var statearr_21151_21177 = state_21142__$1;
(statearr_21151_21177[(1)] = (12));

} else {
var statearr_21152_21178 = state_21142__$1;
(statearr_21152_21178[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21143 === (9))){
var state_21142__$1 = state_21142;
var statearr_21153_21179 = state_21142__$1;
(statearr_21153_21179[(2)] = null);

(statearr_21153_21179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21143 === (5))){
var state_21142__$1 = state_21142;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21154_21180 = state_21142__$1;
(statearr_21154_21180[(1)] = (8));

} else {
var statearr_21155_21181 = state_21142__$1;
(statearr_21155_21181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21143 === (14))){
var inst_21136 = (state_21142[(2)]);
var state_21142__$1 = state_21142;
var statearr_21156_21182 = state_21142__$1;
(statearr_21156_21182[(2)] = inst_21136);

(statearr_21156_21182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21143 === (10))){
var inst_21128 = (state_21142[(2)]);
var state_21142__$1 = state_21142;
var statearr_21157_21183 = state_21142__$1;
(statearr_21157_21183[(2)] = inst_21128);

(statearr_21157_21183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21143 === (8))){
var inst_21125 = cljs.core.async.close_BANG_.call(null,to);
var state_21142__$1 = state_21142;
var statearr_21158_21184 = state_21142__$1;
(statearr_21158_21184[(2)] = inst_21125);

(statearr_21158_21184[(1)] = (10));


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
});})(c__21003__auto___21170))
;
return ((function (switch__20891__auto__,c__21003__auto___21170){
return (function() {
var cljs$core$async$state_machine__20892__auto__ = null;
var cljs$core$async$state_machine__20892__auto____0 = (function (){
var statearr_21162 = [null,null,null,null,null,null,null,null];
(statearr_21162[(0)] = cljs$core$async$state_machine__20892__auto__);

(statearr_21162[(1)] = (1));

return statearr_21162;
});
var cljs$core$async$state_machine__20892__auto____1 = (function (state_21142){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_21142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e21163){if((e21163 instanceof Object)){
var ex__20895__auto__ = e21163;
var statearr_21164_21185 = state_21142;
(statearr_21164_21185[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21186 = state_21142;
state_21142 = G__21186;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$state_machine__20892__auto__ = function(state_21142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20892__auto____1.call(this,state_21142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20892__auto____0;
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20892__auto____1;
return cljs$core$async$state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___21170))
})();
var state__21005__auto__ = (function (){var statearr_21165 = f__21004__auto__.call(null);
(statearr_21165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___21170);

return statearr_21165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___21170))
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
return (function (p__21370){
var vec__21371 = p__21370;
var v = cljs.core.nth.call(null,vec__21371,(0),null);
var p = cljs.core.nth.call(null,vec__21371,(1),null);
var job = vec__21371;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21003__auto___21553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___21553,res,vec__21371,v,p,job,jobs,results){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___21553,res,vec__21371,v,p,job,jobs,results){
return (function (state_21376){
var state_val_21377 = (state_21376[(1)]);
if((state_val_21377 === (1))){
var state_21376__$1 = state_21376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21376__$1,(2),res,v);
} else {
if((state_val_21377 === (2))){
var inst_21373 = (state_21376[(2)]);
var inst_21374 = cljs.core.async.close_BANG_.call(null,res);
var state_21376__$1 = (function (){var statearr_21378 = state_21376;
(statearr_21378[(7)] = inst_21373);

return statearr_21378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21376__$1,inst_21374);
} else {
return null;
}
}
});})(c__21003__auto___21553,res,vec__21371,v,p,job,jobs,results))
;
return ((function (switch__20891__auto__,c__21003__auto___21553,res,vec__21371,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____0 = (function (){
var statearr_21382 = [null,null,null,null,null,null,null,null];
(statearr_21382[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__);

(statearr_21382[(1)] = (1));

return statearr_21382;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____1 = (function (state_21376){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_21376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e21383){if((e21383 instanceof Object)){
var ex__20895__auto__ = e21383;
var statearr_21384_21554 = state_21376;
(statearr_21384_21554[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21555 = state_21376;
state_21376 = G__21555;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__ = function(state_21376){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____1.call(this,state_21376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___21553,res,vec__21371,v,p,job,jobs,results))
})();
var state__21005__auto__ = (function (){var statearr_21385 = f__21004__auto__.call(null);
(statearr_21385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___21553);

return statearr_21385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___21553,res,vec__21371,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21386){
var vec__21387 = p__21386;
var v = cljs.core.nth.call(null,vec__21387,(0),null);
var p = cljs.core.nth.call(null,vec__21387,(1),null);
var job = vec__21387;
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
var n__17729__auto___21556 = n;
var __21557 = (0);
while(true){
if((__21557 < n__17729__auto___21556)){
var G__21388_21558 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21388_21558) {
case "compute":
var c__21003__auto___21560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21557,c__21003__auto___21560,G__21388_21558,n__17729__auto___21556,jobs,results,process,async){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (__21557,c__21003__auto___21560,G__21388_21558,n__17729__auto___21556,jobs,results,process,async){
return (function (state_21401){
var state_val_21402 = (state_21401[(1)]);
if((state_val_21402 === (1))){
var state_21401__$1 = state_21401;
var statearr_21403_21561 = state_21401__$1;
(statearr_21403_21561[(2)] = null);

(statearr_21403_21561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (2))){
var state_21401__$1 = state_21401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21401__$1,(4),jobs);
} else {
if((state_val_21402 === (3))){
var inst_21399 = (state_21401[(2)]);
var state_21401__$1 = state_21401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21401__$1,inst_21399);
} else {
if((state_val_21402 === (4))){
var inst_21391 = (state_21401[(2)]);
var inst_21392 = process.call(null,inst_21391);
var state_21401__$1 = state_21401;
if(cljs.core.truth_(inst_21392)){
var statearr_21404_21562 = state_21401__$1;
(statearr_21404_21562[(1)] = (5));

} else {
var statearr_21405_21563 = state_21401__$1;
(statearr_21405_21563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (5))){
var state_21401__$1 = state_21401;
var statearr_21406_21564 = state_21401__$1;
(statearr_21406_21564[(2)] = null);

(statearr_21406_21564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (6))){
var state_21401__$1 = state_21401;
var statearr_21407_21565 = state_21401__$1;
(statearr_21407_21565[(2)] = null);

(statearr_21407_21565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (7))){
var inst_21397 = (state_21401[(2)]);
var state_21401__$1 = state_21401;
var statearr_21408_21566 = state_21401__$1;
(statearr_21408_21566[(2)] = inst_21397);

(statearr_21408_21566[(1)] = (3));


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
});})(__21557,c__21003__auto___21560,G__21388_21558,n__17729__auto___21556,jobs,results,process,async))
;
return ((function (__21557,switch__20891__auto__,c__21003__auto___21560,G__21388_21558,n__17729__auto___21556,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____0 = (function (){
var statearr_21412 = [null,null,null,null,null,null,null];
(statearr_21412[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__);

(statearr_21412[(1)] = (1));

return statearr_21412;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____1 = (function (state_21401){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_21401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e21413){if((e21413 instanceof Object)){
var ex__20895__auto__ = e21413;
var statearr_21414_21567 = state_21401;
(statearr_21414_21567[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21568 = state_21401;
state_21401 = G__21568;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__ = function(state_21401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____1.call(this,state_21401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__;
})()
;})(__21557,switch__20891__auto__,c__21003__auto___21560,G__21388_21558,n__17729__auto___21556,jobs,results,process,async))
})();
var state__21005__auto__ = (function (){var statearr_21415 = f__21004__auto__.call(null);
(statearr_21415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___21560);

return statearr_21415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(__21557,c__21003__auto___21560,G__21388_21558,n__17729__auto___21556,jobs,results,process,async))
);


break;
case "async":
var c__21003__auto___21569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21557,c__21003__auto___21569,G__21388_21558,n__17729__auto___21556,jobs,results,process,async){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (__21557,c__21003__auto___21569,G__21388_21558,n__17729__auto___21556,jobs,results,process,async){
return (function (state_21428){
var state_val_21429 = (state_21428[(1)]);
if((state_val_21429 === (1))){
var state_21428__$1 = state_21428;
var statearr_21430_21570 = state_21428__$1;
(statearr_21430_21570[(2)] = null);

(statearr_21430_21570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (2))){
var state_21428__$1 = state_21428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21428__$1,(4),jobs);
} else {
if((state_val_21429 === (3))){
var inst_21426 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21428__$1,inst_21426);
} else {
if((state_val_21429 === (4))){
var inst_21418 = (state_21428[(2)]);
var inst_21419 = async.call(null,inst_21418);
var state_21428__$1 = state_21428;
if(cljs.core.truth_(inst_21419)){
var statearr_21431_21571 = state_21428__$1;
(statearr_21431_21571[(1)] = (5));

} else {
var statearr_21432_21572 = state_21428__$1;
(statearr_21432_21572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (5))){
var state_21428__$1 = state_21428;
var statearr_21433_21573 = state_21428__$1;
(statearr_21433_21573[(2)] = null);

(statearr_21433_21573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (6))){
var state_21428__$1 = state_21428;
var statearr_21434_21574 = state_21428__$1;
(statearr_21434_21574[(2)] = null);

(statearr_21434_21574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (7))){
var inst_21424 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
var statearr_21435_21575 = state_21428__$1;
(statearr_21435_21575[(2)] = inst_21424);

(statearr_21435_21575[(1)] = (3));


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
});})(__21557,c__21003__auto___21569,G__21388_21558,n__17729__auto___21556,jobs,results,process,async))
;
return ((function (__21557,switch__20891__auto__,c__21003__auto___21569,G__21388_21558,n__17729__auto___21556,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____0 = (function (){
var statearr_21439 = [null,null,null,null,null,null,null];
(statearr_21439[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__);

(statearr_21439[(1)] = (1));

return statearr_21439;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____1 = (function (state_21428){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_21428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e21440){if((e21440 instanceof Object)){
var ex__20895__auto__ = e21440;
var statearr_21441_21576 = state_21428;
(statearr_21441_21576[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21577 = state_21428;
state_21428 = G__21577;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__ = function(state_21428){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____1.call(this,state_21428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__;
})()
;})(__21557,switch__20891__auto__,c__21003__auto___21569,G__21388_21558,n__17729__auto___21556,jobs,results,process,async))
})();
var state__21005__auto__ = (function (){var statearr_21442 = f__21004__auto__.call(null);
(statearr_21442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___21569);

return statearr_21442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(__21557,c__21003__auto___21569,G__21388_21558,n__17729__auto___21556,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21578 = (__21557 + (1));
__21557 = G__21578;
continue;
} else {
}
break;
}

var c__21003__auto___21579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___21579,jobs,results,process,async){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___21579,jobs,results,process,async){
return (function (state_21464){
var state_val_21465 = (state_21464[(1)]);
if((state_val_21465 === (1))){
var state_21464__$1 = state_21464;
var statearr_21466_21580 = state_21464__$1;
(statearr_21466_21580[(2)] = null);

(statearr_21466_21580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21465 === (2))){
var state_21464__$1 = state_21464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21464__$1,(4),from);
} else {
if((state_val_21465 === (3))){
var inst_21462 = (state_21464[(2)]);
var state_21464__$1 = state_21464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21464__$1,inst_21462);
} else {
if((state_val_21465 === (4))){
var inst_21445 = (state_21464[(7)]);
var inst_21445__$1 = (state_21464[(2)]);
var inst_21446 = (inst_21445__$1 == null);
var state_21464__$1 = (function (){var statearr_21467 = state_21464;
(statearr_21467[(7)] = inst_21445__$1);

return statearr_21467;
})();
if(cljs.core.truth_(inst_21446)){
var statearr_21468_21581 = state_21464__$1;
(statearr_21468_21581[(1)] = (5));

} else {
var statearr_21469_21582 = state_21464__$1;
(statearr_21469_21582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21465 === (5))){
var inst_21448 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21464__$1 = state_21464;
var statearr_21470_21583 = state_21464__$1;
(statearr_21470_21583[(2)] = inst_21448);

(statearr_21470_21583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21465 === (6))){
var inst_21445 = (state_21464[(7)]);
var inst_21450 = (state_21464[(8)]);
var inst_21450__$1 = cljs.core.async.chan.call(null,(1));
var inst_21451 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21452 = [inst_21445,inst_21450__$1];
var inst_21453 = (new cljs.core.PersistentVector(null,2,(5),inst_21451,inst_21452,null));
var state_21464__$1 = (function (){var statearr_21471 = state_21464;
(statearr_21471[(8)] = inst_21450__$1);

return statearr_21471;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21464__$1,(8),jobs,inst_21453);
} else {
if((state_val_21465 === (7))){
var inst_21460 = (state_21464[(2)]);
var state_21464__$1 = state_21464;
var statearr_21472_21584 = state_21464__$1;
(statearr_21472_21584[(2)] = inst_21460);

(statearr_21472_21584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21465 === (8))){
var inst_21450 = (state_21464[(8)]);
var inst_21455 = (state_21464[(2)]);
var state_21464__$1 = (function (){var statearr_21473 = state_21464;
(statearr_21473[(9)] = inst_21455);

return statearr_21473;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21464__$1,(9),results,inst_21450);
} else {
if((state_val_21465 === (9))){
var inst_21457 = (state_21464[(2)]);
var state_21464__$1 = (function (){var statearr_21474 = state_21464;
(statearr_21474[(10)] = inst_21457);

return statearr_21474;
})();
var statearr_21475_21585 = state_21464__$1;
(statearr_21475_21585[(2)] = null);

(statearr_21475_21585[(1)] = (2));


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
});})(c__21003__auto___21579,jobs,results,process,async))
;
return ((function (switch__20891__auto__,c__21003__auto___21579,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____0 = (function (){
var statearr_21479 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__);

(statearr_21479[(1)] = (1));

return statearr_21479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____1 = (function (state_21464){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_21464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e21480){if((e21480 instanceof Object)){
var ex__20895__auto__ = e21480;
var statearr_21481_21586 = state_21464;
(statearr_21481_21586[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21587 = state_21464;
state_21464 = G__21587;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__ = function(state_21464){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____1.call(this,state_21464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___21579,jobs,results,process,async))
})();
var state__21005__auto__ = (function (){var statearr_21482 = f__21004__auto__.call(null);
(statearr_21482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___21579);

return statearr_21482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___21579,jobs,results,process,async))
);


var c__21003__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto__,jobs,results,process,async){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto__,jobs,results,process,async){
return (function (state_21520){
var state_val_21521 = (state_21520[(1)]);
if((state_val_21521 === (7))){
var inst_21516 = (state_21520[(2)]);
var state_21520__$1 = state_21520;
var statearr_21522_21588 = state_21520__$1;
(statearr_21522_21588[(2)] = inst_21516);

(statearr_21522_21588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21521 === (20))){
var state_21520__$1 = state_21520;
var statearr_21523_21589 = state_21520__$1;
(statearr_21523_21589[(2)] = null);

(statearr_21523_21589[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21521 === (1))){
var state_21520__$1 = state_21520;
var statearr_21524_21590 = state_21520__$1;
(statearr_21524_21590[(2)] = null);

(statearr_21524_21590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21521 === (4))){
var inst_21485 = (state_21520[(7)]);
var inst_21485__$1 = (state_21520[(2)]);
var inst_21486 = (inst_21485__$1 == null);
var state_21520__$1 = (function (){var statearr_21525 = state_21520;
(statearr_21525[(7)] = inst_21485__$1);

return statearr_21525;
})();
if(cljs.core.truth_(inst_21486)){
var statearr_21526_21591 = state_21520__$1;
(statearr_21526_21591[(1)] = (5));

} else {
var statearr_21527_21592 = state_21520__$1;
(statearr_21527_21592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21521 === (15))){
var inst_21498 = (state_21520[(8)]);
var state_21520__$1 = state_21520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21520__$1,(18),to,inst_21498);
} else {
if((state_val_21521 === (21))){
var inst_21511 = (state_21520[(2)]);
var state_21520__$1 = state_21520;
var statearr_21528_21593 = state_21520__$1;
(statearr_21528_21593[(2)] = inst_21511);

(statearr_21528_21593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21521 === (13))){
var inst_21513 = (state_21520[(2)]);
var state_21520__$1 = (function (){var statearr_21529 = state_21520;
(statearr_21529[(9)] = inst_21513);

return statearr_21529;
})();
var statearr_21530_21594 = state_21520__$1;
(statearr_21530_21594[(2)] = null);

(statearr_21530_21594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21521 === (6))){
var inst_21485 = (state_21520[(7)]);
var state_21520__$1 = state_21520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21520__$1,(11),inst_21485);
} else {
if((state_val_21521 === (17))){
var inst_21506 = (state_21520[(2)]);
var state_21520__$1 = state_21520;
if(cljs.core.truth_(inst_21506)){
var statearr_21531_21595 = state_21520__$1;
(statearr_21531_21595[(1)] = (19));

} else {
var statearr_21532_21596 = state_21520__$1;
(statearr_21532_21596[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21521 === (3))){
var inst_21518 = (state_21520[(2)]);
var state_21520__$1 = state_21520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21520__$1,inst_21518);
} else {
if((state_val_21521 === (12))){
var inst_21495 = (state_21520[(10)]);
var state_21520__$1 = state_21520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21520__$1,(14),inst_21495);
} else {
if((state_val_21521 === (2))){
var state_21520__$1 = state_21520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21520__$1,(4),results);
} else {
if((state_val_21521 === (19))){
var state_21520__$1 = state_21520;
var statearr_21533_21597 = state_21520__$1;
(statearr_21533_21597[(2)] = null);

(statearr_21533_21597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21521 === (11))){
var inst_21495 = (state_21520[(2)]);
var state_21520__$1 = (function (){var statearr_21534 = state_21520;
(statearr_21534[(10)] = inst_21495);

return statearr_21534;
})();
var statearr_21535_21598 = state_21520__$1;
(statearr_21535_21598[(2)] = null);

(statearr_21535_21598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21521 === (9))){
var state_21520__$1 = state_21520;
var statearr_21536_21599 = state_21520__$1;
(statearr_21536_21599[(2)] = null);

(statearr_21536_21599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21521 === (5))){
var state_21520__$1 = state_21520;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21537_21600 = state_21520__$1;
(statearr_21537_21600[(1)] = (8));

} else {
var statearr_21538_21601 = state_21520__$1;
(statearr_21538_21601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21521 === (14))){
var inst_21500 = (state_21520[(11)]);
var inst_21498 = (state_21520[(8)]);
var inst_21498__$1 = (state_21520[(2)]);
var inst_21499 = (inst_21498__$1 == null);
var inst_21500__$1 = cljs.core.not.call(null,inst_21499);
var state_21520__$1 = (function (){var statearr_21539 = state_21520;
(statearr_21539[(11)] = inst_21500__$1);

(statearr_21539[(8)] = inst_21498__$1);

return statearr_21539;
})();
if(inst_21500__$1){
var statearr_21540_21602 = state_21520__$1;
(statearr_21540_21602[(1)] = (15));

} else {
var statearr_21541_21603 = state_21520__$1;
(statearr_21541_21603[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21521 === (16))){
var inst_21500 = (state_21520[(11)]);
var state_21520__$1 = state_21520;
var statearr_21542_21604 = state_21520__$1;
(statearr_21542_21604[(2)] = inst_21500);

(statearr_21542_21604[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21521 === (10))){
var inst_21492 = (state_21520[(2)]);
var state_21520__$1 = state_21520;
var statearr_21543_21605 = state_21520__$1;
(statearr_21543_21605[(2)] = inst_21492);

(statearr_21543_21605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21521 === (18))){
var inst_21503 = (state_21520[(2)]);
var state_21520__$1 = state_21520;
var statearr_21544_21606 = state_21520__$1;
(statearr_21544_21606[(2)] = inst_21503);

(statearr_21544_21606[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21521 === (8))){
var inst_21489 = cljs.core.async.close_BANG_.call(null,to);
var state_21520__$1 = state_21520;
var statearr_21545_21607 = state_21520__$1;
(statearr_21545_21607[(2)] = inst_21489);

(statearr_21545_21607[(1)] = (10));


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
});})(c__21003__auto__,jobs,results,process,async))
;
return ((function (switch__20891__auto__,c__21003__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____0 = (function (){
var statearr_21549 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21549[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__);

(statearr_21549[(1)] = (1));

return statearr_21549;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____1 = (function (state_21520){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_21520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e21550){if((e21550 instanceof Object)){
var ex__20895__auto__ = e21550;
var statearr_21551_21608 = state_21520;
(statearr_21551_21608[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21609 = state_21520;
state_21520 = G__21609;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__ = function(state_21520){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____1.call(this,state_21520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20892__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto__,jobs,results,process,async))
})();
var state__21005__auto__ = (function (){var statearr_21552 = f__21004__auto__.call(null);
(statearr_21552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto__);

return statearr_21552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto__,jobs,results,process,async))
);

return c__21003__auto__;
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
var args21610 = [];
var len__17884__auto___21613 = arguments.length;
var i__17885__auto___21614 = (0);
while(true){
if((i__17885__auto___21614 < len__17884__auto___21613)){
args21610.push((arguments[i__17885__auto___21614]));

var G__21615 = (i__17885__auto___21614 + (1));
i__17885__auto___21614 = G__21615;
continue;
} else {
}
break;
}

var G__21612 = args21610.length;
switch (G__21612) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21610.length)].join('')));

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
var args21617 = [];
var len__17884__auto___21620 = arguments.length;
var i__17885__auto___21621 = (0);
while(true){
if((i__17885__auto___21621 < len__17884__auto___21620)){
args21617.push((arguments[i__17885__auto___21621]));

var G__21622 = (i__17885__auto___21621 + (1));
i__17885__auto___21621 = G__21622;
continue;
} else {
}
break;
}

var G__21619 = args21617.length;
switch (G__21619) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21617.length)].join('')));

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
var args21624 = [];
var len__17884__auto___21677 = arguments.length;
var i__17885__auto___21678 = (0);
while(true){
if((i__17885__auto___21678 < len__17884__auto___21677)){
args21624.push((arguments[i__17885__auto___21678]));

var G__21679 = (i__17885__auto___21678 + (1));
i__17885__auto___21678 = G__21679;
continue;
} else {
}
break;
}

var G__21626 = args21624.length;
switch (G__21626) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21624.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21003__auto___21681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___21681,tc,fc){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___21681,tc,fc){
return (function (state_21652){
var state_val_21653 = (state_21652[(1)]);
if((state_val_21653 === (7))){
var inst_21648 = (state_21652[(2)]);
var state_21652__$1 = state_21652;
var statearr_21654_21682 = state_21652__$1;
(statearr_21654_21682[(2)] = inst_21648);

(statearr_21654_21682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21653 === (1))){
var state_21652__$1 = state_21652;
var statearr_21655_21683 = state_21652__$1;
(statearr_21655_21683[(2)] = null);

(statearr_21655_21683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21653 === (4))){
var inst_21629 = (state_21652[(7)]);
var inst_21629__$1 = (state_21652[(2)]);
var inst_21630 = (inst_21629__$1 == null);
var state_21652__$1 = (function (){var statearr_21656 = state_21652;
(statearr_21656[(7)] = inst_21629__$1);

return statearr_21656;
})();
if(cljs.core.truth_(inst_21630)){
var statearr_21657_21684 = state_21652__$1;
(statearr_21657_21684[(1)] = (5));

} else {
var statearr_21658_21685 = state_21652__$1;
(statearr_21658_21685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21653 === (13))){
var state_21652__$1 = state_21652;
var statearr_21659_21686 = state_21652__$1;
(statearr_21659_21686[(2)] = null);

(statearr_21659_21686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21653 === (6))){
var inst_21629 = (state_21652[(7)]);
var inst_21635 = p.call(null,inst_21629);
var state_21652__$1 = state_21652;
if(cljs.core.truth_(inst_21635)){
var statearr_21660_21687 = state_21652__$1;
(statearr_21660_21687[(1)] = (9));

} else {
var statearr_21661_21688 = state_21652__$1;
(statearr_21661_21688[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21653 === (3))){
var inst_21650 = (state_21652[(2)]);
var state_21652__$1 = state_21652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21652__$1,inst_21650);
} else {
if((state_val_21653 === (12))){
var state_21652__$1 = state_21652;
var statearr_21662_21689 = state_21652__$1;
(statearr_21662_21689[(2)] = null);

(statearr_21662_21689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21653 === (2))){
var state_21652__$1 = state_21652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21652__$1,(4),ch);
} else {
if((state_val_21653 === (11))){
var inst_21629 = (state_21652[(7)]);
var inst_21639 = (state_21652[(2)]);
var state_21652__$1 = state_21652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21652__$1,(8),inst_21639,inst_21629);
} else {
if((state_val_21653 === (9))){
var state_21652__$1 = state_21652;
var statearr_21663_21690 = state_21652__$1;
(statearr_21663_21690[(2)] = tc);

(statearr_21663_21690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21653 === (5))){
var inst_21632 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21633 = cljs.core.async.close_BANG_.call(null,fc);
var state_21652__$1 = (function (){var statearr_21664 = state_21652;
(statearr_21664[(8)] = inst_21632);

return statearr_21664;
})();
var statearr_21665_21691 = state_21652__$1;
(statearr_21665_21691[(2)] = inst_21633);

(statearr_21665_21691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21653 === (14))){
var inst_21646 = (state_21652[(2)]);
var state_21652__$1 = state_21652;
var statearr_21666_21692 = state_21652__$1;
(statearr_21666_21692[(2)] = inst_21646);

(statearr_21666_21692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21653 === (10))){
var state_21652__$1 = state_21652;
var statearr_21667_21693 = state_21652__$1;
(statearr_21667_21693[(2)] = fc);

(statearr_21667_21693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21653 === (8))){
var inst_21641 = (state_21652[(2)]);
var state_21652__$1 = state_21652;
if(cljs.core.truth_(inst_21641)){
var statearr_21668_21694 = state_21652__$1;
(statearr_21668_21694[(1)] = (12));

} else {
var statearr_21669_21695 = state_21652__$1;
(statearr_21669_21695[(1)] = (13));

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
});})(c__21003__auto___21681,tc,fc))
;
return ((function (switch__20891__auto__,c__21003__auto___21681,tc,fc){
return (function() {
var cljs$core$async$state_machine__20892__auto__ = null;
var cljs$core$async$state_machine__20892__auto____0 = (function (){
var statearr_21673 = [null,null,null,null,null,null,null,null,null];
(statearr_21673[(0)] = cljs$core$async$state_machine__20892__auto__);

(statearr_21673[(1)] = (1));

return statearr_21673;
});
var cljs$core$async$state_machine__20892__auto____1 = (function (state_21652){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_21652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e21674){if((e21674 instanceof Object)){
var ex__20895__auto__ = e21674;
var statearr_21675_21696 = state_21652;
(statearr_21675_21696[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21697 = state_21652;
state_21652 = G__21697;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$state_machine__20892__auto__ = function(state_21652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20892__auto____1.call(this,state_21652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20892__auto____0;
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20892__auto____1;
return cljs$core$async$state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___21681,tc,fc))
})();
var state__21005__auto__ = (function (){var statearr_21676 = f__21004__auto__.call(null);
(statearr_21676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___21681);

return statearr_21676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___21681,tc,fc))
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
var c__21003__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto__){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto__){
return (function (state_21761){
var state_val_21762 = (state_21761[(1)]);
if((state_val_21762 === (7))){
var inst_21757 = (state_21761[(2)]);
var state_21761__$1 = state_21761;
var statearr_21763_21784 = state_21761__$1;
(statearr_21763_21784[(2)] = inst_21757);

(statearr_21763_21784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21762 === (1))){
var inst_21741 = init;
var state_21761__$1 = (function (){var statearr_21764 = state_21761;
(statearr_21764[(7)] = inst_21741);

return statearr_21764;
})();
var statearr_21765_21785 = state_21761__$1;
(statearr_21765_21785[(2)] = null);

(statearr_21765_21785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21762 === (4))){
var inst_21744 = (state_21761[(8)]);
var inst_21744__$1 = (state_21761[(2)]);
var inst_21745 = (inst_21744__$1 == null);
var state_21761__$1 = (function (){var statearr_21766 = state_21761;
(statearr_21766[(8)] = inst_21744__$1);

return statearr_21766;
})();
if(cljs.core.truth_(inst_21745)){
var statearr_21767_21786 = state_21761__$1;
(statearr_21767_21786[(1)] = (5));

} else {
var statearr_21768_21787 = state_21761__$1;
(statearr_21768_21787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21762 === (6))){
var inst_21744 = (state_21761[(8)]);
var inst_21741 = (state_21761[(7)]);
var inst_21748 = (state_21761[(9)]);
var inst_21748__$1 = f.call(null,inst_21741,inst_21744);
var inst_21749 = cljs.core.reduced_QMARK_.call(null,inst_21748__$1);
var state_21761__$1 = (function (){var statearr_21769 = state_21761;
(statearr_21769[(9)] = inst_21748__$1);

return statearr_21769;
})();
if(inst_21749){
var statearr_21770_21788 = state_21761__$1;
(statearr_21770_21788[(1)] = (8));

} else {
var statearr_21771_21789 = state_21761__$1;
(statearr_21771_21789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21762 === (3))){
var inst_21759 = (state_21761[(2)]);
var state_21761__$1 = state_21761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21761__$1,inst_21759);
} else {
if((state_val_21762 === (2))){
var state_21761__$1 = state_21761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21761__$1,(4),ch);
} else {
if((state_val_21762 === (9))){
var inst_21748 = (state_21761[(9)]);
var inst_21741 = inst_21748;
var state_21761__$1 = (function (){var statearr_21772 = state_21761;
(statearr_21772[(7)] = inst_21741);

return statearr_21772;
})();
var statearr_21773_21790 = state_21761__$1;
(statearr_21773_21790[(2)] = null);

(statearr_21773_21790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21762 === (5))){
var inst_21741 = (state_21761[(7)]);
var state_21761__$1 = state_21761;
var statearr_21774_21791 = state_21761__$1;
(statearr_21774_21791[(2)] = inst_21741);

(statearr_21774_21791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21762 === (10))){
var inst_21755 = (state_21761[(2)]);
var state_21761__$1 = state_21761;
var statearr_21775_21792 = state_21761__$1;
(statearr_21775_21792[(2)] = inst_21755);

(statearr_21775_21792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21762 === (8))){
var inst_21748 = (state_21761[(9)]);
var inst_21751 = cljs.core.deref.call(null,inst_21748);
var state_21761__$1 = state_21761;
var statearr_21776_21793 = state_21761__$1;
(statearr_21776_21793[(2)] = inst_21751);

(statearr_21776_21793[(1)] = (10));


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
});})(c__21003__auto__))
;
return ((function (switch__20891__auto__,c__21003__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20892__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20892__auto____0 = (function (){
var statearr_21780 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21780[(0)] = cljs$core$async$reduce_$_state_machine__20892__auto__);

(statearr_21780[(1)] = (1));

return statearr_21780;
});
var cljs$core$async$reduce_$_state_machine__20892__auto____1 = (function (state_21761){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_21761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e21781){if((e21781 instanceof Object)){
var ex__20895__auto__ = e21781;
var statearr_21782_21794 = state_21761;
(statearr_21782_21794[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21795 = state_21761;
state_21761 = G__21795;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20892__auto__ = function(state_21761){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20892__auto____1.call(this,state_21761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20892__auto____0;
cljs$core$async$reduce_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20892__auto____1;
return cljs$core$async$reduce_$_state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto__))
})();
var state__21005__auto__ = (function (){var statearr_21783 = f__21004__auto__.call(null);
(statearr_21783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto__);

return statearr_21783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto__))
);

return c__21003__auto__;
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
var args21796 = [];
var len__17884__auto___21848 = arguments.length;
var i__17885__auto___21849 = (0);
while(true){
if((i__17885__auto___21849 < len__17884__auto___21848)){
args21796.push((arguments[i__17885__auto___21849]));

var G__21850 = (i__17885__auto___21849 + (1));
i__17885__auto___21849 = G__21850;
continue;
} else {
}
break;
}

var G__21798 = args21796.length;
switch (G__21798) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21796.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21003__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto__){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto__){
return (function (state_21823){
var state_val_21824 = (state_21823[(1)]);
if((state_val_21824 === (7))){
var inst_21805 = (state_21823[(2)]);
var state_21823__$1 = state_21823;
var statearr_21825_21852 = state_21823__$1;
(statearr_21825_21852[(2)] = inst_21805);

(statearr_21825_21852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (1))){
var inst_21799 = cljs.core.seq.call(null,coll);
var inst_21800 = inst_21799;
var state_21823__$1 = (function (){var statearr_21826 = state_21823;
(statearr_21826[(7)] = inst_21800);

return statearr_21826;
})();
var statearr_21827_21853 = state_21823__$1;
(statearr_21827_21853[(2)] = null);

(statearr_21827_21853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (4))){
var inst_21800 = (state_21823[(7)]);
var inst_21803 = cljs.core.first.call(null,inst_21800);
var state_21823__$1 = state_21823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21823__$1,(7),ch,inst_21803);
} else {
if((state_val_21824 === (13))){
var inst_21817 = (state_21823[(2)]);
var state_21823__$1 = state_21823;
var statearr_21828_21854 = state_21823__$1;
(statearr_21828_21854[(2)] = inst_21817);

(statearr_21828_21854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (6))){
var inst_21808 = (state_21823[(2)]);
var state_21823__$1 = state_21823;
if(cljs.core.truth_(inst_21808)){
var statearr_21829_21855 = state_21823__$1;
(statearr_21829_21855[(1)] = (8));

} else {
var statearr_21830_21856 = state_21823__$1;
(statearr_21830_21856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (3))){
var inst_21821 = (state_21823[(2)]);
var state_21823__$1 = state_21823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21823__$1,inst_21821);
} else {
if((state_val_21824 === (12))){
var state_21823__$1 = state_21823;
var statearr_21831_21857 = state_21823__$1;
(statearr_21831_21857[(2)] = null);

(statearr_21831_21857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (2))){
var inst_21800 = (state_21823[(7)]);
var state_21823__$1 = state_21823;
if(cljs.core.truth_(inst_21800)){
var statearr_21832_21858 = state_21823__$1;
(statearr_21832_21858[(1)] = (4));

} else {
var statearr_21833_21859 = state_21823__$1;
(statearr_21833_21859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (11))){
var inst_21814 = cljs.core.async.close_BANG_.call(null,ch);
var state_21823__$1 = state_21823;
var statearr_21834_21860 = state_21823__$1;
(statearr_21834_21860[(2)] = inst_21814);

(statearr_21834_21860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (9))){
var state_21823__$1 = state_21823;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21835_21861 = state_21823__$1;
(statearr_21835_21861[(1)] = (11));

} else {
var statearr_21836_21862 = state_21823__$1;
(statearr_21836_21862[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (5))){
var inst_21800 = (state_21823[(7)]);
var state_21823__$1 = state_21823;
var statearr_21837_21863 = state_21823__$1;
(statearr_21837_21863[(2)] = inst_21800);

(statearr_21837_21863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (10))){
var inst_21819 = (state_21823[(2)]);
var state_21823__$1 = state_21823;
var statearr_21838_21864 = state_21823__$1;
(statearr_21838_21864[(2)] = inst_21819);

(statearr_21838_21864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (8))){
var inst_21800 = (state_21823[(7)]);
var inst_21810 = cljs.core.next.call(null,inst_21800);
var inst_21800__$1 = inst_21810;
var state_21823__$1 = (function (){var statearr_21839 = state_21823;
(statearr_21839[(7)] = inst_21800__$1);

return statearr_21839;
})();
var statearr_21840_21865 = state_21823__$1;
(statearr_21840_21865[(2)] = null);

(statearr_21840_21865[(1)] = (2));


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
});})(c__21003__auto__))
;
return ((function (switch__20891__auto__,c__21003__auto__){
return (function() {
var cljs$core$async$state_machine__20892__auto__ = null;
var cljs$core$async$state_machine__20892__auto____0 = (function (){
var statearr_21844 = [null,null,null,null,null,null,null,null];
(statearr_21844[(0)] = cljs$core$async$state_machine__20892__auto__);

(statearr_21844[(1)] = (1));

return statearr_21844;
});
var cljs$core$async$state_machine__20892__auto____1 = (function (state_21823){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_21823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e21845){if((e21845 instanceof Object)){
var ex__20895__auto__ = e21845;
var statearr_21846_21866 = state_21823;
(statearr_21846_21866[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21867 = state_21823;
state_21823 = G__21867;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$state_machine__20892__auto__ = function(state_21823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20892__auto____1.call(this,state_21823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20892__auto____0;
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20892__auto____1;
return cljs$core$async$state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto__))
})();
var state__21005__auto__ = (function (){var statearr_21847 = f__21004__auto__.call(null);
(statearr_21847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto__);

return statearr_21847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto__))
);

return c__21003__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async22089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22089 = (function (mult,ch,cs,meta22090){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22090 = meta22090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22091,meta22090__$1){
var self__ = this;
var _22091__$1 = this;
return (new cljs.core.async.t_cljs$core$async22089(self__.mult,self__.ch,self__.cs,meta22090__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22091){
var self__ = this;
var _22091__$1 = this;
return self__.meta22090;
});})(cs))
;

cljs.core.async.t_cljs$core$async22089.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22089.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22089.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22089.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22089.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22089.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22089.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22090","meta22090",-365138327,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22089";

cljs.core.async.t_cljs$core$async22089.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22089");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22089 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22089(mult__$1,ch__$1,cs__$1,meta22090){
return (new cljs.core.async.t_cljs$core$async22089(mult__$1,ch__$1,cs__$1,meta22090));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22089(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21003__auto___22310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___22310,cs,m,dchan,dctr,done){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___22310,cs,m,dchan,dctr,done){
return (function (state_22222){
var state_val_22223 = (state_22222[(1)]);
if((state_val_22223 === (7))){
var inst_22218 = (state_22222[(2)]);
var state_22222__$1 = state_22222;
var statearr_22224_22311 = state_22222__$1;
(statearr_22224_22311[(2)] = inst_22218);

(statearr_22224_22311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (20))){
var inst_22123 = (state_22222[(7)]);
var inst_22133 = cljs.core.first.call(null,inst_22123);
var inst_22134 = cljs.core.nth.call(null,inst_22133,(0),null);
var inst_22135 = cljs.core.nth.call(null,inst_22133,(1),null);
var state_22222__$1 = (function (){var statearr_22225 = state_22222;
(statearr_22225[(8)] = inst_22134);

return statearr_22225;
})();
if(cljs.core.truth_(inst_22135)){
var statearr_22226_22312 = state_22222__$1;
(statearr_22226_22312[(1)] = (22));

} else {
var statearr_22227_22313 = state_22222__$1;
(statearr_22227_22313[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (27))){
var inst_22163 = (state_22222[(9)]);
var inst_22094 = (state_22222[(10)]);
var inst_22165 = (state_22222[(11)]);
var inst_22170 = (state_22222[(12)]);
var inst_22170__$1 = cljs.core._nth.call(null,inst_22163,inst_22165);
var inst_22171 = cljs.core.async.put_BANG_.call(null,inst_22170__$1,inst_22094,done);
var state_22222__$1 = (function (){var statearr_22228 = state_22222;
(statearr_22228[(12)] = inst_22170__$1);

return statearr_22228;
})();
if(cljs.core.truth_(inst_22171)){
var statearr_22229_22314 = state_22222__$1;
(statearr_22229_22314[(1)] = (30));

} else {
var statearr_22230_22315 = state_22222__$1;
(statearr_22230_22315[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (1))){
var state_22222__$1 = state_22222;
var statearr_22231_22316 = state_22222__$1;
(statearr_22231_22316[(2)] = null);

(statearr_22231_22316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (24))){
var inst_22123 = (state_22222[(7)]);
var inst_22140 = (state_22222[(2)]);
var inst_22141 = cljs.core.next.call(null,inst_22123);
var inst_22103 = inst_22141;
var inst_22104 = null;
var inst_22105 = (0);
var inst_22106 = (0);
var state_22222__$1 = (function (){var statearr_22232 = state_22222;
(statearr_22232[(13)] = inst_22140);

(statearr_22232[(14)] = inst_22103);

(statearr_22232[(15)] = inst_22104);

(statearr_22232[(16)] = inst_22105);

(statearr_22232[(17)] = inst_22106);

return statearr_22232;
})();
var statearr_22233_22317 = state_22222__$1;
(statearr_22233_22317[(2)] = null);

(statearr_22233_22317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (39))){
var state_22222__$1 = state_22222;
var statearr_22237_22318 = state_22222__$1;
(statearr_22237_22318[(2)] = null);

(statearr_22237_22318[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (4))){
var inst_22094 = (state_22222[(10)]);
var inst_22094__$1 = (state_22222[(2)]);
var inst_22095 = (inst_22094__$1 == null);
var state_22222__$1 = (function (){var statearr_22238 = state_22222;
(statearr_22238[(10)] = inst_22094__$1);

return statearr_22238;
})();
if(cljs.core.truth_(inst_22095)){
var statearr_22239_22319 = state_22222__$1;
(statearr_22239_22319[(1)] = (5));

} else {
var statearr_22240_22320 = state_22222__$1;
(statearr_22240_22320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (15))){
var inst_22103 = (state_22222[(14)]);
var inst_22104 = (state_22222[(15)]);
var inst_22105 = (state_22222[(16)]);
var inst_22106 = (state_22222[(17)]);
var inst_22119 = (state_22222[(2)]);
var inst_22120 = (inst_22106 + (1));
var tmp22234 = inst_22103;
var tmp22235 = inst_22104;
var tmp22236 = inst_22105;
var inst_22103__$1 = tmp22234;
var inst_22104__$1 = tmp22235;
var inst_22105__$1 = tmp22236;
var inst_22106__$1 = inst_22120;
var state_22222__$1 = (function (){var statearr_22241 = state_22222;
(statearr_22241[(18)] = inst_22119);

(statearr_22241[(14)] = inst_22103__$1);

(statearr_22241[(15)] = inst_22104__$1);

(statearr_22241[(16)] = inst_22105__$1);

(statearr_22241[(17)] = inst_22106__$1);

return statearr_22241;
})();
var statearr_22242_22321 = state_22222__$1;
(statearr_22242_22321[(2)] = null);

(statearr_22242_22321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (21))){
var inst_22144 = (state_22222[(2)]);
var state_22222__$1 = state_22222;
var statearr_22246_22322 = state_22222__$1;
(statearr_22246_22322[(2)] = inst_22144);

(statearr_22246_22322[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (31))){
var inst_22170 = (state_22222[(12)]);
var inst_22174 = done.call(null,null);
var inst_22175 = cljs.core.async.untap_STAR_.call(null,m,inst_22170);
var state_22222__$1 = (function (){var statearr_22247 = state_22222;
(statearr_22247[(19)] = inst_22174);

return statearr_22247;
})();
var statearr_22248_22323 = state_22222__$1;
(statearr_22248_22323[(2)] = inst_22175);

(statearr_22248_22323[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (32))){
var inst_22164 = (state_22222[(20)]);
var inst_22163 = (state_22222[(9)]);
var inst_22162 = (state_22222[(21)]);
var inst_22165 = (state_22222[(11)]);
var inst_22177 = (state_22222[(2)]);
var inst_22178 = (inst_22165 + (1));
var tmp22243 = inst_22164;
var tmp22244 = inst_22163;
var tmp22245 = inst_22162;
var inst_22162__$1 = tmp22245;
var inst_22163__$1 = tmp22244;
var inst_22164__$1 = tmp22243;
var inst_22165__$1 = inst_22178;
var state_22222__$1 = (function (){var statearr_22249 = state_22222;
(statearr_22249[(20)] = inst_22164__$1);

(statearr_22249[(9)] = inst_22163__$1);

(statearr_22249[(21)] = inst_22162__$1);

(statearr_22249[(11)] = inst_22165__$1);

(statearr_22249[(22)] = inst_22177);

return statearr_22249;
})();
var statearr_22250_22324 = state_22222__$1;
(statearr_22250_22324[(2)] = null);

(statearr_22250_22324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (40))){
var inst_22190 = (state_22222[(23)]);
var inst_22194 = done.call(null,null);
var inst_22195 = cljs.core.async.untap_STAR_.call(null,m,inst_22190);
var state_22222__$1 = (function (){var statearr_22251 = state_22222;
(statearr_22251[(24)] = inst_22194);

return statearr_22251;
})();
var statearr_22252_22325 = state_22222__$1;
(statearr_22252_22325[(2)] = inst_22195);

(statearr_22252_22325[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (33))){
var inst_22181 = (state_22222[(25)]);
var inst_22183 = cljs.core.chunked_seq_QMARK_.call(null,inst_22181);
var state_22222__$1 = state_22222;
if(inst_22183){
var statearr_22253_22326 = state_22222__$1;
(statearr_22253_22326[(1)] = (36));

} else {
var statearr_22254_22327 = state_22222__$1;
(statearr_22254_22327[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (13))){
var inst_22113 = (state_22222[(26)]);
var inst_22116 = cljs.core.async.close_BANG_.call(null,inst_22113);
var state_22222__$1 = state_22222;
var statearr_22255_22328 = state_22222__$1;
(statearr_22255_22328[(2)] = inst_22116);

(statearr_22255_22328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (22))){
var inst_22134 = (state_22222[(8)]);
var inst_22137 = cljs.core.async.close_BANG_.call(null,inst_22134);
var state_22222__$1 = state_22222;
var statearr_22256_22329 = state_22222__$1;
(statearr_22256_22329[(2)] = inst_22137);

(statearr_22256_22329[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (36))){
var inst_22181 = (state_22222[(25)]);
var inst_22185 = cljs.core.chunk_first.call(null,inst_22181);
var inst_22186 = cljs.core.chunk_rest.call(null,inst_22181);
var inst_22187 = cljs.core.count.call(null,inst_22185);
var inst_22162 = inst_22186;
var inst_22163 = inst_22185;
var inst_22164 = inst_22187;
var inst_22165 = (0);
var state_22222__$1 = (function (){var statearr_22257 = state_22222;
(statearr_22257[(20)] = inst_22164);

(statearr_22257[(9)] = inst_22163);

(statearr_22257[(21)] = inst_22162);

(statearr_22257[(11)] = inst_22165);

return statearr_22257;
})();
var statearr_22258_22330 = state_22222__$1;
(statearr_22258_22330[(2)] = null);

(statearr_22258_22330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (41))){
var inst_22181 = (state_22222[(25)]);
var inst_22197 = (state_22222[(2)]);
var inst_22198 = cljs.core.next.call(null,inst_22181);
var inst_22162 = inst_22198;
var inst_22163 = null;
var inst_22164 = (0);
var inst_22165 = (0);
var state_22222__$1 = (function (){var statearr_22259 = state_22222;
(statearr_22259[(20)] = inst_22164);

(statearr_22259[(9)] = inst_22163);

(statearr_22259[(27)] = inst_22197);

(statearr_22259[(21)] = inst_22162);

(statearr_22259[(11)] = inst_22165);

return statearr_22259;
})();
var statearr_22260_22331 = state_22222__$1;
(statearr_22260_22331[(2)] = null);

(statearr_22260_22331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (43))){
var state_22222__$1 = state_22222;
var statearr_22261_22332 = state_22222__$1;
(statearr_22261_22332[(2)] = null);

(statearr_22261_22332[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (29))){
var inst_22206 = (state_22222[(2)]);
var state_22222__$1 = state_22222;
var statearr_22262_22333 = state_22222__$1;
(statearr_22262_22333[(2)] = inst_22206);

(statearr_22262_22333[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (44))){
var inst_22215 = (state_22222[(2)]);
var state_22222__$1 = (function (){var statearr_22263 = state_22222;
(statearr_22263[(28)] = inst_22215);

return statearr_22263;
})();
var statearr_22264_22334 = state_22222__$1;
(statearr_22264_22334[(2)] = null);

(statearr_22264_22334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (6))){
var inst_22154 = (state_22222[(29)]);
var inst_22153 = cljs.core.deref.call(null,cs);
var inst_22154__$1 = cljs.core.keys.call(null,inst_22153);
var inst_22155 = cljs.core.count.call(null,inst_22154__$1);
var inst_22156 = cljs.core.reset_BANG_.call(null,dctr,inst_22155);
var inst_22161 = cljs.core.seq.call(null,inst_22154__$1);
var inst_22162 = inst_22161;
var inst_22163 = null;
var inst_22164 = (0);
var inst_22165 = (0);
var state_22222__$1 = (function (){var statearr_22265 = state_22222;
(statearr_22265[(30)] = inst_22156);

(statearr_22265[(20)] = inst_22164);

(statearr_22265[(29)] = inst_22154__$1);

(statearr_22265[(9)] = inst_22163);

(statearr_22265[(21)] = inst_22162);

(statearr_22265[(11)] = inst_22165);

return statearr_22265;
})();
var statearr_22266_22335 = state_22222__$1;
(statearr_22266_22335[(2)] = null);

(statearr_22266_22335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (28))){
var inst_22181 = (state_22222[(25)]);
var inst_22162 = (state_22222[(21)]);
var inst_22181__$1 = cljs.core.seq.call(null,inst_22162);
var state_22222__$1 = (function (){var statearr_22267 = state_22222;
(statearr_22267[(25)] = inst_22181__$1);

return statearr_22267;
})();
if(inst_22181__$1){
var statearr_22268_22336 = state_22222__$1;
(statearr_22268_22336[(1)] = (33));

} else {
var statearr_22269_22337 = state_22222__$1;
(statearr_22269_22337[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (25))){
var inst_22164 = (state_22222[(20)]);
var inst_22165 = (state_22222[(11)]);
var inst_22167 = (inst_22165 < inst_22164);
var inst_22168 = inst_22167;
var state_22222__$1 = state_22222;
if(cljs.core.truth_(inst_22168)){
var statearr_22270_22338 = state_22222__$1;
(statearr_22270_22338[(1)] = (27));

} else {
var statearr_22271_22339 = state_22222__$1;
(statearr_22271_22339[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (34))){
var state_22222__$1 = state_22222;
var statearr_22272_22340 = state_22222__$1;
(statearr_22272_22340[(2)] = null);

(statearr_22272_22340[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (17))){
var state_22222__$1 = state_22222;
var statearr_22273_22341 = state_22222__$1;
(statearr_22273_22341[(2)] = null);

(statearr_22273_22341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (3))){
var inst_22220 = (state_22222[(2)]);
var state_22222__$1 = state_22222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22222__$1,inst_22220);
} else {
if((state_val_22223 === (12))){
var inst_22149 = (state_22222[(2)]);
var state_22222__$1 = state_22222;
var statearr_22274_22342 = state_22222__$1;
(statearr_22274_22342[(2)] = inst_22149);

(statearr_22274_22342[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (2))){
var state_22222__$1 = state_22222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22222__$1,(4),ch);
} else {
if((state_val_22223 === (23))){
var state_22222__$1 = state_22222;
var statearr_22275_22343 = state_22222__$1;
(statearr_22275_22343[(2)] = null);

(statearr_22275_22343[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (35))){
var inst_22204 = (state_22222[(2)]);
var state_22222__$1 = state_22222;
var statearr_22276_22344 = state_22222__$1;
(statearr_22276_22344[(2)] = inst_22204);

(statearr_22276_22344[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (19))){
var inst_22123 = (state_22222[(7)]);
var inst_22127 = cljs.core.chunk_first.call(null,inst_22123);
var inst_22128 = cljs.core.chunk_rest.call(null,inst_22123);
var inst_22129 = cljs.core.count.call(null,inst_22127);
var inst_22103 = inst_22128;
var inst_22104 = inst_22127;
var inst_22105 = inst_22129;
var inst_22106 = (0);
var state_22222__$1 = (function (){var statearr_22277 = state_22222;
(statearr_22277[(14)] = inst_22103);

(statearr_22277[(15)] = inst_22104);

(statearr_22277[(16)] = inst_22105);

(statearr_22277[(17)] = inst_22106);

return statearr_22277;
})();
var statearr_22278_22345 = state_22222__$1;
(statearr_22278_22345[(2)] = null);

(statearr_22278_22345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (11))){
var inst_22103 = (state_22222[(14)]);
var inst_22123 = (state_22222[(7)]);
var inst_22123__$1 = cljs.core.seq.call(null,inst_22103);
var state_22222__$1 = (function (){var statearr_22279 = state_22222;
(statearr_22279[(7)] = inst_22123__$1);

return statearr_22279;
})();
if(inst_22123__$1){
var statearr_22280_22346 = state_22222__$1;
(statearr_22280_22346[(1)] = (16));

} else {
var statearr_22281_22347 = state_22222__$1;
(statearr_22281_22347[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (9))){
var inst_22151 = (state_22222[(2)]);
var state_22222__$1 = state_22222;
var statearr_22282_22348 = state_22222__$1;
(statearr_22282_22348[(2)] = inst_22151);

(statearr_22282_22348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (5))){
var inst_22101 = cljs.core.deref.call(null,cs);
var inst_22102 = cljs.core.seq.call(null,inst_22101);
var inst_22103 = inst_22102;
var inst_22104 = null;
var inst_22105 = (0);
var inst_22106 = (0);
var state_22222__$1 = (function (){var statearr_22283 = state_22222;
(statearr_22283[(14)] = inst_22103);

(statearr_22283[(15)] = inst_22104);

(statearr_22283[(16)] = inst_22105);

(statearr_22283[(17)] = inst_22106);

return statearr_22283;
})();
var statearr_22284_22349 = state_22222__$1;
(statearr_22284_22349[(2)] = null);

(statearr_22284_22349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (14))){
var state_22222__$1 = state_22222;
var statearr_22285_22350 = state_22222__$1;
(statearr_22285_22350[(2)] = null);

(statearr_22285_22350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (45))){
var inst_22212 = (state_22222[(2)]);
var state_22222__$1 = state_22222;
var statearr_22286_22351 = state_22222__$1;
(statearr_22286_22351[(2)] = inst_22212);

(statearr_22286_22351[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (26))){
var inst_22154 = (state_22222[(29)]);
var inst_22208 = (state_22222[(2)]);
var inst_22209 = cljs.core.seq.call(null,inst_22154);
var state_22222__$1 = (function (){var statearr_22287 = state_22222;
(statearr_22287[(31)] = inst_22208);

return statearr_22287;
})();
if(inst_22209){
var statearr_22288_22352 = state_22222__$1;
(statearr_22288_22352[(1)] = (42));

} else {
var statearr_22289_22353 = state_22222__$1;
(statearr_22289_22353[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (16))){
var inst_22123 = (state_22222[(7)]);
var inst_22125 = cljs.core.chunked_seq_QMARK_.call(null,inst_22123);
var state_22222__$1 = state_22222;
if(inst_22125){
var statearr_22290_22354 = state_22222__$1;
(statearr_22290_22354[(1)] = (19));

} else {
var statearr_22291_22355 = state_22222__$1;
(statearr_22291_22355[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (38))){
var inst_22201 = (state_22222[(2)]);
var state_22222__$1 = state_22222;
var statearr_22292_22356 = state_22222__$1;
(statearr_22292_22356[(2)] = inst_22201);

(statearr_22292_22356[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (30))){
var state_22222__$1 = state_22222;
var statearr_22293_22357 = state_22222__$1;
(statearr_22293_22357[(2)] = null);

(statearr_22293_22357[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (10))){
var inst_22104 = (state_22222[(15)]);
var inst_22106 = (state_22222[(17)]);
var inst_22112 = cljs.core._nth.call(null,inst_22104,inst_22106);
var inst_22113 = cljs.core.nth.call(null,inst_22112,(0),null);
var inst_22114 = cljs.core.nth.call(null,inst_22112,(1),null);
var state_22222__$1 = (function (){var statearr_22294 = state_22222;
(statearr_22294[(26)] = inst_22113);

return statearr_22294;
})();
if(cljs.core.truth_(inst_22114)){
var statearr_22295_22358 = state_22222__$1;
(statearr_22295_22358[(1)] = (13));

} else {
var statearr_22296_22359 = state_22222__$1;
(statearr_22296_22359[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (18))){
var inst_22147 = (state_22222[(2)]);
var state_22222__$1 = state_22222;
var statearr_22297_22360 = state_22222__$1;
(statearr_22297_22360[(2)] = inst_22147);

(statearr_22297_22360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (42))){
var state_22222__$1 = state_22222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22222__$1,(45),dchan);
} else {
if((state_val_22223 === (37))){
var inst_22190 = (state_22222[(23)]);
var inst_22181 = (state_22222[(25)]);
var inst_22094 = (state_22222[(10)]);
var inst_22190__$1 = cljs.core.first.call(null,inst_22181);
var inst_22191 = cljs.core.async.put_BANG_.call(null,inst_22190__$1,inst_22094,done);
var state_22222__$1 = (function (){var statearr_22298 = state_22222;
(statearr_22298[(23)] = inst_22190__$1);

return statearr_22298;
})();
if(cljs.core.truth_(inst_22191)){
var statearr_22299_22361 = state_22222__$1;
(statearr_22299_22361[(1)] = (39));

} else {
var statearr_22300_22362 = state_22222__$1;
(statearr_22300_22362[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22223 === (8))){
var inst_22105 = (state_22222[(16)]);
var inst_22106 = (state_22222[(17)]);
var inst_22108 = (inst_22106 < inst_22105);
var inst_22109 = inst_22108;
var state_22222__$1 = state_22222;
if(cljs.core.truth_(inst_22109)){
var statearr_22301_22363 = state_22222__$1;
(statearr_22301_22363[(1)] = (10));

} else {
var statearr_22302_22364 = state_22222__$1;
(statearr_22302_22364[(1)] = (11));

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
});})(c__21003__auto___22310,cs,m,dchan,dctr,done))
;
return ((function (switch__20891__auto__,c__21003__auto___22310,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20892__auto__ = null;
var cljs$core$async$mult_$_state_machine__20892__auto____0 = (function (){
var statearr_22306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22306[(0)] = cljs$core$async$mult_$_state_machine__20892__auto__);

(statearr_22306[(1)] = (1));

return statearr_22306;
});
var cljs$core$async$mult_$_state_machine__20892__auto____1 = (function (state_22222){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_22222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e22307){if((e22307 instanceof Object)){
var ex__20895__auto__ = e22307;
var statearr_22308_22365 = state_22222;
(statearr_22308_22365[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22366 = state_22222;
state_22222 = G__22366;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20892__auto__ = function(state_22222){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20892__auto____1.call(this,state_22222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20892__auto____0;
cljs$core$async$mult_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20892__auto____1;
return cljs$core$async$mult_$_state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___22310,cs,m,dchan,dctr,done))
})();
var state__21005__auto__ = (function (){var statearr_22309 = f__21004__auto__.call(null);
(statearr_22309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___22310);

return statearr_22309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___22310,cs,m,dchan,dctr,done))
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
var args22367 = [];
var len__17884__auto___22370 = arguments.length;
var i__17885__auto___22371 = (0);
while(true){
if((i__17885__auto___22371 < len__17884__auto___22370)){
args22367.push((arguments[i__17885__auto___22371]));

var G__22372 = (i__17885__auto___22371 + (1));
i__17885__auto___22371 = G__22372;
continue;
} else {
}
break;
}

var G__22369 = args22367.length;
switch (G__22369) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22367.length)].join('')));

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
var len__17884__auto___22384 = arguments.length;
var i__17885__auto___22385 = (0);
while(true){
if((i__17885__auto___22385 < len__17884__auto___22384)){
args__17891__auto__.push((arguments[i__17885__auto___22385]));

var G__22386 = (i__17885__auto___22385 + (1));
i__17885__auto___22385 = G__22386;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22378){
var map__22379 = p__22378;
var map__22379__$1 = ((((!((map__22379 == null)))?((((map__22379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22379):map__22379);
var opts = map__22379__$1;
var statearr_22381_22387 = state;
(statearr_22381_22387[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22379,map__22379__$1,opts){
return (function (val){
var statearr_22382_22388 = state;
(statearr_22382_22388[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22379,map__22379__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22383_22389 = state;
(statearr_22383_22389[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22374){
var G__22375 = cljs.core.first.call(null,seq22374);
var seq22374__$1 = cljs.core.next.call(null,seq22374);
var G__22376 = cljs.core.first.call(null,seq22374__$1);
var seq22374__$2 = cljs.core.next.call(null,seq22374__$1);
var G__22377 = cljs.core.first.call(null,seq22374__$2);
var seq22374__$3 = cljs.core.next.call(null,seq22374__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22375,G__22376,G__22377,seq22374__$3);
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
if(typeof cljs.core.async.t_cljs$core$async22553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22553 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22554){
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
this.meta22554 = meta22554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22555,meta22554__$1){
var self__ = this;
var _22555__$1 = this;
return (new cljs.core.async.t_cljs$core$async22553(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22554__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22553.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22555){
var self__ = this;
var _22555__$1 = this;
return self__.meta22554;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22553.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22553.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22553.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22553.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22553.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22553.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22553.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22553.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async22553.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22554","meta22554",340072855,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22553.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22553";

cljs.core.async.t_cljs$core$async22553.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22553");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22553 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22553(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22554){
return (new cljs.core.async.t_cljs$core$async22553(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22554));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22553(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21003__auto___22716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___22716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___22716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22653){
var state_val_22654 = (state_22653[(1)]);
if((state_val_22654 === (7))){
var inst_22571 = (state_22653[(2)]);
var state_22653__$1 = state_22653;
var statearr_22655_22717 = state_22653__$1;
(statearr_22655_22717[(2)] = inst_22571);

(statearr_22655_22717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (20))){
var inst_22583 = (state_22653[(7)]);
var state_22653__$1 = state_22653;
var statearr_22656_22718 = state_22653__$1;
(statearr_22656_22718[(2)] = inst_22583);

(statearr_22656_22718[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (27))){
var state_22653__$1 = state_22653;
var statearr_22657_22719 = state_22653__$1;
(statearr_22657_22719[(2)] = null);

(statearr_22657_22719[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (1))){
var inst_22559 = (state_22653[(8)]);
var inst_22559__$1 = calc_state.call(null);
var inst_22561 = (inst_22559__$1 == null);
var inst_22562 = cljs.core.not.call(null,inst_22561);
var state_22653__$1 = (function (){var statearr_22658 = state_22653;
(statearr_22658[(8)] = inst_22559__$1);

return statearr_22658;
})();
if(inst_22562){
var statearr_22659_22720 = state_22653__$1;
(statearr_22659_22720[(1)] = (2));

} else {
var statearr_22660_22721 = state_22653__$1;
(statearr_22660_22721[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (24))){
var inst_22613 = (state_22653[(9)]);
var inst_22627 = (state_22653[(10)]);
var inst_22606 = (state_22653[(11)]);
var inst_22627__$1 = inst_22606.call(null,inst_22613);
var state_22653__$1 = (function (){var statearr_22661 = state_22653;
(statearr_22661[(10)] = inst_22627__$1);

return statearr_22661;
})();
if(cljs.core.truth_(inst_22627__$1)){
var statearr_22662_22722 = state_22653__$1;
(statearr_22662_22722[(1)] = (29));

} else {
var statearr_22663_22723 = state_22653__$1;
(statearr_22663_22723[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (4))){
var inst_22574 = (state_22653[(2)]);
var state_22653__$1 = state_22653;
if(cljs.core.truth_(inst_22574)){
var statearr_22664_22724 = state_22653__$1;
(statearr_22664_22724[(1)] = (8));

} else {
var statearr_22665_22725 = state_22653__$1;
(statearr_22665_22725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (15))){
var inst_22600 = (state_22653[(2)]);
var state_22653__$1 = state_22653;
if(cljs.core.truth_(inst_22600)){
var statearr_22666_22726 = state_22653__$1;
(statearr_22666_22726[(1)] = (19));

} else {
var statearr_22667_22727 = state_22653__$1;
(statearr_22667_22727[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (21))){
var inst_22605 = (state_22653[(12)]);
var inst_22605__$1 = (state_22653[(2)]);
var inst_22606 = cljs.core.get.call(null,inst_22605__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22607 = cljs.core.get.call(null,inst_22605__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22608 = cljs.core.get.call(null,inst_22605__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22653__$1 = (function (){var statearr_22668 = state_22653;
(statearr_22668[(12)] = inst_22605__$1);

(statearr_22668[(13)] = inst_22607);

(statearr_22668[(11)] = inst_22606);

return statearr_22668;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22653__$1,(22),inst_22608);
} else {
if((state_val_22654 === (31))){
var inst_22635 = (state_22653[(2)]);
var state_22653__$1 = state_22653;
if(cljs.core.truth_(inst_22635)){
var statearr_22669_22728 = state_22653__$1;
(statearr_22669_22728[(1)] = (32));

} else {
var statearr_22670_22729 = state_22653__$1;
(statearr_22670_22729[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (32))){
var inst_22612 = (state_22653[(14)]);
var state_22653__$1 = state_22653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22653__$1,(35),out,inst_22612);
} else {
if((state_val_22654 === (33))){
var inst_22605 = (state_22653[(12)]);
var inst_22583 = inst_22605;
var state_22653__$1 = (function (){var statearr_22671 = state_22653;
(statearr_22671[(7)] = inst_22583);

return statearr_22671;
})();
var statearr_22672_22730 = state_22653__$1;
(statearr_22672_22730[(2)] = null);

(statearr_22672_22730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (13))){
var inst_22583 = (state_22653[(7)]);
var inst_22590 = inst_22583.cljs$lang$protocol_mask$partition0$;
var inst_22591 = (inst_22590 & (64));
var inst_22592 = inst_22583.cljs$core$ISeq$;
var inst_22593 = (inst_22591) || (inst_22592);
var state_22653__$1 = state_22653;
if(cljs.core.truth_(inst_22593)){
var statearr_22673_22731 = state_22653__$1;
(statearr_22673_22731[(1)] = (16));

} else {
var statearr_22674_22732 = state_22653__$1;
(statearr_22674_22732[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (22))){
var inst_22612 = (state_22653[(14)]);
var inst_22613 = (state_22653[(9)]);
var inst_22611 = (state_22653[(2)]);
var inst_22612__$1 = cljs.core.nth.call(null,inst_22611,(0),null);
var inst_22613__$1 = cljs.core.nth.call(null,inst_22611,(1),null);
var inst_22614 = (inst_22612__$1 == null);
var inst_22615 = cljs.core._EQ_.call(null,inst_22613__$1,change);
var inst_22616 = (inst_22614) || (inst_22615);
var state_22653__$1 = (function (){var statearr_22675 = state_22653;
(statearr_22675[(14)] = inst_22612__$1);

(statearr_22675[(9)] = inst_22613__$1);

return statearr_22675;
})();
if(cljs.core.truth_(inst_22616)){
var statearr_22676_22733 = state_22653__$1;
(statearr_22676_22733[(1)] = (23));

} else {
var statearr_22677_22734 = state_22653__$1;
(statearr_22677_22734[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (36))){
var inst_22605 = (state_22653[(12)]);
var inst_22583 = inst_22605;
var state_22653__$1 = (function (){var statearr_22678 = state_22653;
(statearr_22678[(7)] = inst_22583);

return statearr_22678;
})();
var statearr_22679_22735 = state_22653__$1;
(statearr_22679_22735[(2)] = null);

(statearr_22679_22735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (29))){
var inst_22627 = (state_22653[(10)]);
var state_22653__$1 = state_22653;
var statearr_22680_22736 = state_22653__$1;
(statearr_22680_22736[(2)] = inst_22627);

(statearr_22680_22736[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (6))){
var state_22653__$1 = state_22653;
var statearr_22681_22737 = state_22653__$1;
(statearr_22681_22737[(2)] = false);

(statearr_22681_22737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (28))){
var inst_22623 = (state_22653[(2)]);
var inst_22624 = calc_state.call(null);
var inst_22583 = inst_22624;
var state_22653__$1 = (function (){var statearr_22682 = state_22653;
(statearr_22682[(7)] = inst_22583);

(statearr_22682[(15)] = inst_22623);

return statearr_22682;
})();
var statearr_22683_22738 = state_22653__$1;
(statearr_22683_22738[(2)] = null);

(statearr_22683_22738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (25))){
var inst_22649 = (state_22653[(2)]);
var state_22653__$1 = state_22653;
var statearr_22684_22739 = state_22653__$1;
(statearr_22684_22739[(2)] = inst_22649);

(statearr_22684_22739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (34))){
var inst_22647 = (state_22653[(2)]);
var state_22653__$1 = state_22653;
var statearr_22685_22740 = state_22653__$1;
(statearr_22685_22740[(2)] = inst_22647);

(statearr_22685_22740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (17))){
var state_22653__$1 = state_22653;
var statearr_22686_22741 = state_22653__$1;
(statearr_22686_22741[(2)] = false);

(statearr_22686_22741[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (3))){
var state_22653__$1 = state_22653;
var statearr_22687_22742 = state_22653__$1;
(statearr_22687_22742[(2)] = false);

(statearr_22687_22742[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (12))){
var inst_22651 = (state_22653[(2)]);
var state_22653__$1 = state_22653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22653__$1,inst_22651);
} else {
if((state_val_22654 === (2))){
var inst_22559 = (state_22653[(8)]);
var inst_22564 = inst_22559.cljs$lang$protocol_mask$partition0$;
var inst_22565 = (inst_22564 & (64));
var inst_22566 = inst_22559.cljs$core$ISeq$;
var inst_22567 = (inst_22565) || (inst_22566);
var state_22653__$1 = state_22653;
if(cljs.core.truth_(inst_22567)){
var statearr_22688_22743 = state_22653__$1;
(statearr_22688_22743[(1)] = (5));

} else {
var statearr_22689_22744 = state_22653__$1;
(statearr_22689_22744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (23))){
var inst_22612 = (state_22653[(14)]);
var inst_22618 = (inst_22612 == null);
var state_22653__$1 = state_22653;
if(cljs.core.truth_(inst_22618)){
var statearr_22690_22745 = state_22653__$1;
(statearr_22690_22745[(1)] = (26));

} else {
var statearr_22691_22746 = state_22653__$1;
(statearr_22691_22746[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (35))){
var inst_22638 = (state_22653[(2)]);
var state_22653__$1 = state_22653;
if(cljs.core.truth_(inst_22638)){
var statearr_22692_22747 = state_22653__$1;
(statearr_22692_22747[(1)] = (36));

} else {
var statearr_22693_22748 = state_22653__$1;
(statearr_22693_22748[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (19))){
var inst_22583 = (state_22653[(7)]);
var inst_22602 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22583);
var state_22653__$1 = state_22653;
var statearr_22694_22749 = state_22653__$1;
(statearr_22694_22749[(2)] = inst_22602);

(statearr_22694_22749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (11))){
var inst_22583 = (state_22653[(7)]);
var inst_22587 = (inst_22583 == null);
var inst_22588 = cljs.core.not.call(null,inst_22587);
var state_22653__$1 = state_22653;
if(inst_22588){
var statearr_22695_22750 = state_22653__$1;
(statearr_22695_22750[(1)] = (13));

} else {
var statearr_22696_22751 = state_22653__$1;
(statearr_22696_22751[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (9))){
var inst_22559 = (state_22653[(8)]);
var state_22653__$1 = state_22653;
var statearr_22697_22752 = state_22653__$1;
(statearr_22697_22752[(2)] = inst_22559);

(statearr_22697_22752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (5))){
var state_22653__$1 = state_22653;
var statearr_22698_22753 = state_22653__$1;
(statearr_22698_22753[(2)] = true);

(statearr_22698_22753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (14))){
var state_22653__$1 = state_22653;
var statearr_22699_22754 = state_22653__$1;
(statearr_22699_22754[(2)] = false);

(statearr_22699_22754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (26))){
var inst_22613 = (state_22653[(9)]);
var inst_22620 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22613);
var state_22653__$1 = state_22653;
var statearr_22700_22755 = state_22653__$1;
(statearr_22700_22755[(2)] = inst_22620);

(statearr_22700_22755[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (16))){
var state_22653__$1 = state_22653;
var statearr_22701_22756 = state_22653__$1;
(statearr_22701_22756[(2)] = true);

(statearr_22701_22756[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (38))){
var inst_22643 = (state_22653[(2)]);
var state_22653__$1 = state_22653;
var statearr_22702_22757 = state_22653__$1;
(statearr_22702_22757[(2)] = inst_22643);

(statearr_22702_22757[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (30))){
var inst_22613 = (state_22653[(9)]);
var inst_22607 = (state_22653[(13)]);
var inst_22606 = (state_22653[(11)]);
var inst_22630 = cljs.core.empty_QMARK_.call(null,inst_22606);
var inst_22631 = inst_22607.call(null,inst_22613);
var inst_22632 = cljs.core.not.call(null,inst_22631);
var inst_22633 = (inst_22630) && (inst_22632);
var state_22653__$1 = state_22653;
var statearr_22703_22758 = state_22653__$1;
(statearr_22703_22758[(2)] = inst_22633);

(statearr_22703_22758[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (10))){
var inst_22559 = (state_22653[(8)]);
var inst_22579 = (state_22653[(2)]);
var inst_22580 = cljs.core.get.call(null,inst_22579,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22581 = cljs.core.get.call(null,inst_22579,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22582 = cljs.core.get.call(null,inst_22579,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22583 = inst_22559;
var state_22653__$1 = (function (){var statearr_22704 = state_22653;
(statearr_22704[(16)] = inst_22582);

(statearr_22704[(7)] = inst_22583);

(statearr_22704[(17)] = inst_22580);

(statearr_22704[(18)] = inst_22581);

return statearr_22704;
})();
var statearr_22705_22759 = state_22653__$1;
(statearr_22705_22759[(2)] = null);

(statearr_22705_22759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (18))){
var inst_22597 = (state_22653[(2)]);
var state_22653__$1 = state_22653;
var statearr_22706_22760 = state_22653__$1;
(statearr_22706_22760[(2)] = inst_22597);

(statearr_22706_22760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (37))){
var state_22653__$1 = state_22653;
var statearr_22707_22761 = state_22653__$1;
(statearr_22707_22761[(2)] = null);

(statearr_22707_22761[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22654 === (8))){
var inst_22559 = (state_22653[(8)]);
var inst_22576 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22559);
var state_22653__$1 = state_22653;
var statearr_22708_22762 = state_22653__$1;
(statearr_22708_22762[(2)] = inst_22576);

(statearr_22708_22762[(1)] = (10));


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
});})(c__21003__auto___22716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20891__auto__,c__21003__auto___22716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20892__auto__ = null;
var cljs$core$async$mix_$_state_machine__20892__auto____0 = (function (){
var statearr_22712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22712[(0)] = cljs$core$async$mix_$_state_machine__20892__auto__);

(statearr_22712[(1)] = (1));

return statearr_22712;
});
var cljs$core$async$mix_$_state_machine__20892__auto____1 = (function (state_22653){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_22653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e22713){if((e22713 instanceof Object)){
var ex__20895__auto__ = e22713;
var statearr_22714_22763 = state_22653;
(statearr_22714_22763[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22764 = state_22653;
state_22653 = G__22764;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20892__auto__ = function(state_22653){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20892__auto____1.call(this,state_22653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20892__auto____0;
cljs$core$async$mix_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20892__auto____1;
return cljs$core$async$mix_$_state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___22716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21005__auto__ = (function (){var statearr_22715 = f__21004__auto__.call(null);
(statearr_22715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___22716);

return statearr_22715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___22716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args22765 = [];
var len__17884__auto___22768 = arguments.length;
var i__17885__auto___22769 = (0);
while(true){
if((i__17885__auto___22769 < len__17884__auto___22768)){
args22765.push((arguments[i__17885__auto___22769]));

var G__22770 = (i__17885__auto___22769 + (1));
i__17885__auto___22769 = G__22770;
continue;
} else {
}
break;
}

var G__22767 = args22765.length;
switch (G__22767) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22765.length)].join('')));

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
var args22773 = [];
var len__17884__auto___22898 = arguments.length;
var i__17885__auto___22899 = (0);
while(true){
if((i__17885__auto___22899 < len__17884__auto___22898)){
args22773.push((arguments[i__17885__auto___22899]));

var G__22900 = (i__17885__auto___22899 + (1));
i__17885__auto___22899 = G__22900;
continue;
} else {
}
break;
}

var G__22775 = args22773.length;
switch (G__22775) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22773.length)].join('')));

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
return (function (p1__22772_SHARP_){
if(cljs.core.truth_(p1__22772_SHARP_.call(null,topic))){
return p1__22772_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22772_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22776 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22777){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22777 = meta22777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22778,meta22777__$1){
var self__ = this;
var _22778__$1 = this;
return (new cljs.core.async.t_cljs$core$async22776(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22777__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22778){
var self__ = this;
var _22778__$1 = this;
return self__.meta22777;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22776.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22776.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22776.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22776.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22776.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22776.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22776.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22776.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22777","meta22777",903870426,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22776.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22776";

cljs.core.async.t_cljs$core$async22776.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22776");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22776 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22776(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22777){
return (new cljs.core.async.t_cljs$core$async22776(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22777));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22776(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21003__auto___22902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___22902,mults,ensure_mult,p){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___22902,mults,ensure_mult,p){
return (function (state_22850){
var state_val_22851 = (state_22850[(1)]);
if((state_val_22851 === (7))){
var inst_22846 = (state_22850[(2)]);
var state_22850__$1 = state_22850;
var statearr_22852_22903 = state_22850__$1;
(statearr_22852_22903[(2)] = inst_22846);

(statearr_22852_22903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (20))){
var state_22850__$1 = state_22850;
var statearr_22853_22904 = state_22850__$1;
(statearr_22853_22904[(2)] = null);

(statearr_22853_22904[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (1))){
var state_22850__$1 = state_22850;
var statearr_22854_22905 = state_22850__$1;
(statearr_22854_22905[(2)] = null);

(statearr_22854_22905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (24))){
var inst_22829 = (state_22850[(7)]);
var inst_22838 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22829);
var state_22850__$1 = state_22850;
var statearr_22855_22906 = state_22850__$1;
(statearr_22855_22906[(2)] = inst_22838);

(statearr_22855_22906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (4))){
var inst_22781 = (state_22850[(8)]);
var inst_22781__$1 = (state_22850[(2)]);
var inst_22782 = (inst_22781__$1 == null);
var state_22850__$1 = (function (){var statearr_22856 = state_22850;
(statearr_22856[(8)] = inst_22781__$1);

return statearr_22856;
})();
if(cljs.core.truth_(inst_22782)){
var statearr_22857_22907 = state_22850__$1;
(statearr_22857_22907[(1)] = (5));

} else {
var statearr_22858_22908 = state_22850__$1;
(statearr_22858_22908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (15))){
var inst_22823 = (state_22850[(2)]);
var state_22850__$1 = state_22850;
var statearr_22859_22909 = state_22850__$1;
(statearr_22859_22909[(2)] = inst_22823);

(statearr_22859_22909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (21))){
var inst_22843 = (state_22850[(2)]);
var state_22850__$1 = (function (){var statearr_22860 = state_22850;
(statearr_22860[(9)] = inst_22843);

return statearr_22860;
})();
var statearr_22861_22910 = state_22850__$1;
(statearr_22861_22910[(2)] = null);

(statearr_22861_22910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (13))){
var inst_22805 = (state_22850[(10)]);
var inst_22807 = cljs.core.chunked_seq_QMARK_.call(null,inst_22805);
var state_22850__$1 = state_22850;
if(inst_22807){
var statearr_22862_22911 = state_22850__$1;
(statearr_22862_22911[(1)] = (16));

} else {
var statearr_22863_22912 = state_22850__$1;
(statearr_22863_22912[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (22))){
var inst_22835 = (state_22850[(2)]);
var state_22850__$1 = state_22850;
if(cljs.core.truth_(inst_22835)){
var statearr_22864_22913 = state_22850__$1;
(statearr_22864_22913[(1)] = (23));

} else {
var statearr_22865_22914 = state_22850__$1;
(statearr_22865_22914[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (6))){
var inst_22831 = (state_22850[(11)]);
var inst_22781 = (state_22850[(8)]);
var inst_22829 = (state_22850[(7)]);
var inst_22829__$1 = topic_fn.call(null,inst_22781);
var inst_22830 = cljs.core.deref.call(null,mults);
var inst_22831__$1 = cljs.core.get.call(null,inst_22830,inst_22829__$1);
var state_22850__$1 = (function (){var statearr_22866 = state_22850;
(statearr_22866[(11)] = inst_22831__$1);

(statearr_22866[(7)] = inst_22829__$1);

return statearr_22866;
})();
if(cljs.core.truth_(inst_22831__$1)){
var statearr_22867_22915 = state_22850__$1;
(statearr_22867_22915[(1)] = (19));

} else {
var statearr_22868_22916 = state_22850__$1;
(statearr_22868_22916[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (25))){
var inst_22840 = (state_22850[(2)]);
var state_22850__$1 = state_22850;
var statearr_22869_22917 = state_22850__$1;
(statearr_22869_22917[(2)] = inst_22840);

(statearr_22869_22917[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (17))){
var inst_22805 = (state_22850[(10)]);
var inst_22814 = cljs.core.first.call(null,inst_22805);
var inst_22815 = cljs.core.async.muxch_STAR_.call(null,inst_22814);
var inst_22816 = cljs.core.async.close_BANG_.call(null,inst_22815);
var inst_22817 = cljs.core.next.call(null,inst_22805);
var inst_22791 = inst_22817;
var inst_22792 = null;
var inst_22793 = (0);
var inst_22794 = (0);
var state_22850__$1 = (function (){var statearr_22870 = state_22850;
(statearr_22870[(12)] = inst_22792);

(statearr_22870[(13)] = inst_22816);

(statearr_22870[(14)] = inst_22791);

(statearr_22870[(15)] = inst_22793);

(statearr_22870[(16)] = inst_22794);

return statearr_22870;
})();
var statearr_22871_22918 = state_22850__$1;
(statearr_22871_22918[(2)] = null);

(statearr_22871_22918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (3))){
var inst_22848 = (state_22850[(2)]);
var state_22850__$1 = state_22850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22850__$1,inst_22848);
} else {
if((state_val_22851 === (12))){
var inst_22825 = (state_22850[(2)]);
var state_22850__$1 = state_22850;
var statearr_22872_22919 = state_22850__$1;
(statearr_22872_22919[(2)] = inst_22825);

(statearr_22872_22919[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (2))){
var state_22850__$1 = state_22850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22850__$1,(4),ch);
} else {
if((state_val_22851 === (23))){
var state_22850__$1 = state_22850;
var statearr_22873_22920 = state_22850__$1;
(statearr_22873_22920[(2)] = null);

(statearr_22873_22920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (19))){
var inst_22831 = (state_22850[(11)]);
var inst_22781 = (state_22850[(8)]);
var inst_22833 = cljs.core.async.muxch_STAR_.call(null,inst_22831);
var state_22850__$1 = state_22850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22850__$1,(22),inst_22833,inst_22781);
} else {
if((state_val_22851 === (11))){
var inst_22805 = (state_22850[(10)]);
var inst_22791 = (state_22850[(14)]);
var inst_22805__$1 = cljs.core.seq.call(null,inst_22791);
var state_22850__$1 = (function (){var statearr_22874 = state_22850;
(statearr_22874[(10)] = inst_22805__$1);

return statearr_22874;
})();
if(inst_22805__$1){
var statearr_22875_22921 = state_22850__$1;
(statearr_22875_22921[(1)] = (13));

} else {
var statearr_22876_22922 = state_22850__$1;
(statearr_22876_22922[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (9))){
var inst_22827 = (state_22850[(2)]);
var state_22850__$1 = state_22850;
var statearr_22877_22923 = state_22850__$1;
(statearr_22877_22923[(2)] = inst_22827);

(statearr_22877_22923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (5))){
var inst_22788 = cljs.core.deref.call(null,mults);
var inst_22789 = cljs.core.vals.call(null,inst_22788);
var inst_22790 = cljs.core.seq.call(null,inst_22789);
var inst_22791 = inst_22790;
var inst_22792 = null;
var inst_22793 = (0);
var inst_22794 = (0);
var state_22850__$1 = (function (){var statearr_22878 = state_22850;
(statearr_22878[(12)] = inst_22792);

(statearr_22878[(14)] = inst_22791);

(statearr_22878[(15)] = inst_22793);

(statearr_22878[(16)] = inst_22794);

return statearr_22878;
})();
var statearr_22879_22924 = state_22850__$1;
(statearr_22879_22924[(2)] = null);

(statearr_22879_22924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (14))){
var state_22850__$1 = state_22850;
var statearr_22883_22925 = state_22850__$1;
(statearr_22883_22925[(2)] = null);

(statearr_22883_22925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (16))){
var inst_22805 = (state_22850[(10)]);
var inst_22809 = cljs.core.chunk_first.call(null,inst_22805);
var inst_22810 = cljs.core.chunk_rest.call(null,inst_22805);
var inst_22811 = cljs.core.count.call(null,inst_22809);
var inst_22791 = inst_22810;
var inst_22792 = inst_22809;
var inst_22793 = inst_22811;
var inst_22794 = (0);
var state_22850__$1 = (function (){var statearr_22884 = state_22850;
(statearr_22884[(12)] = inst_22792);

(statearr_22884[(14)] = inst_22791);

(statearr_22884[(15)] = inst_22793);

(statearr_22884[(16)] = inst_22794);

return statearr_22884;
})();
var statearr_22885_22926 = state_22850__$1;
(statearr_22885_22926[(2)] = null);

(statearr_22885_22926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (10))){
var inst_22792 = (state_22850[(12)]);
var inst_22791 = (state_22850[(14)]);
var inst_22793 = (state_22850[(15)]);
var inst_22794 = (state_22850[(16)]);
var inst_22799 = cljs.core._nth.call(null,inst_22792,inst_22794);
var inst_22800 = cljs.core.async.muxch_STAR_.call(null,inst_22799);
var inst_22801 = cljs.core.async.close_BANG_.call(null,inst_22800);
var inst_22802 = (inst_22794 + (1));
var tmp22880 = inst_22792;
var tmp22881 = inst_22791;
var tmp22882 = inst_22793;
var inst_22791__$1 = tmp22881;
var inst_22792__$1 = tmp22880;
var inst_22793__$1 = tmp22882;
var inst_22794__$1 = inst_22802;
var state_22850__$1 = (function (){var statearr_22886 = state_22850;
(statearr_22886[(12)] = inst_22792__$1);

(statearr_22886[(17)] = inst_22801);

(statearr_22886[(14)] = inst_22791__$1);

(statearr_22886[(15)] = inst_22793__$1);

(statearr_22886[(16)] = inst_22794__$1);

return statearr_22886;
})();
var statearr_22887_22927 = state_22850__$1;
(statearr_22887_22927[(2)] = null);

(statearr_22887_22927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (18))){
var inst_22820 = (state_22850[(2)]);
var state_22850__$1 = state_22850;
var statearr_22888_22928 = state_22850__$1;
(statearr_22888_22928[(2)] = inst_22820);

(statearr_22888_22928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22851 === (8))){
var inst_22793 = (state_22850[(15)]);
var inst_22794 = (state_22850[(16)]);
var inst_22796 = (inst_22794 < inst_22793);
var inst_22797 = inst_22796;
var state_22850__$1 = state_22850;
if(cljs.core.truth_(inst_22797)){
var statearr_22889_22929 = state_22850__$1;
(statearr_22889_22929[(1)] = (10));

} else {
var statearr_22890_22930 = state_22850__$1;
(statearr_22890_22930[(1)] = (11));

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
});})(c__21003__auto___22902,mults,ensure_mult,p))
;
return ((function (switch__20891__auto__,c__21003__auto___22902,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20892__auto__ = null;
var cljs$core$async$state_machine__20892__auto____0 = (function (){
var statearr_22894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22894[(0)] = cljs$core$async$state_machine__20892__auto__);

(statearr_22894[(1)] = (1));

return statearr_22894;
});
var cljs$core$async$state_machine__20892__auto____1 = (function (state_22850){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_22850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e22895){if((e22895 instanceof Object)){
var ex__20895__auto__ = e22895;
var statearr_22896_22931 = state_22850;
(statearr_22896_22931[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22932 = state_22850;
state_22850 = G__22932;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$state_machine__20892__auto__ = function(state_22850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20892__auto____1.call(this,state_22850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20892__auto____0;
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20892__auto____1;
return cljs$core$async$state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___22902,mults,ensure_mult,p))
})();
var state__21005__auto__ = (function (){var statearr_22897 = f__21004__auto__.call(null);
(statearr_22897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___22902);

return statearr_22897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___22902,mults,ensure_mult,p))
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
var args22933 = [];
var len__17884__auto___22936 = arguments.length;
var i__17885__auto___22937 = (0);
while(true){
if((i__17885__auto___22937 < len__17884__auto___22936)){
args22933.push((arguments[i__17885__auto___22937]));

var G__22938 = (i__17885__auto___22937 + (1));
i__17885__auto___22937 = G__22938;
continue;
} else {
}
break;
}

var G__22935 = args22933.length;
switch (G__22935) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22933.length)].join('')));

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
var args22940 = [];
var len__17884__auto___22943 = arguments.length;
var i__17885__auto___22944 = (0);
while(true){
if((i__17885__auto___22944 < len__17884__auto___22943)){
args22940.push((arguments[i__17885__auto___22944]));

var G__22945 = (i__17885__auto___22944 + (1));
i__17885__auto___22944 = G__22945;
continue;
} else {
}
break;
}

var G__22942 = args22940.length;
switch (G__22942) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22940.length)].join('')));

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
var args22947 = [];
var len__17884__auto___23018 = arguments.length;
var i__17885__auto___23019 = (0);
while(true){
if((i__17885__auto___23019 < len__17884__auto___23018)){
args22947.push((arguments[i__17885__auto___23019]));

var G__23020 = (i__17885__auto___23019 + (1));
i__17885__auto___23019 = G__23020;
continue;
} else {
}
break;
}

var G__22949 = args22947.length;
switch (G__22949) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22947.length)].join('')));

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
var c__21003__auto___23022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___23022,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___23022,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22988){
var state_val_22989 = (state_22988[(1)]);
if((state_val_22989 === (7))){
var state_22988__$1 = state_22988;
var statearr_22990_23023 = state_22988__$1;
(statearr_22990_23023[(2)] = null);

(statearr_22990_23023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (1))){
var state_22988__$1 = state_22988;
var statearr_22991_23024 = state_22988__$1;
(statearr_22991_23024[(2)] = null);

(statearr_22991_23024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (4))){
var inst_22952 = (state_22988[(7)]);
var inst_22954 = (inst_22952 < cnt);
var state_22988__$1 = state_22988;
if(cljs.core.truth_(inst_22954)){
var statearr_22992_23025 = state_22988__$1;
(statearr_22992_23025[(1)] = (6));

} else {
var statearr_22993_23026 = state_22988__$1;
(statearr_22993_23026[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (15))){
var inst_22984 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_22994_23027 = state_22988__$1;
(statearr_22994_23027[(2)] = inst_22984);

(statearr_22994_23027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (13))){
var inst_22977 = cljs.core.async.close_BANG_.call(null,out);
var state_22988__$1 = state_22988;
var statearr_22995_23028 = state_22988__$1;
(statearr_22995_23028[(2)] = inst_22977);

(statearr_22995_23028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (6))){
var state_22988__$1 = state_22988;
var statearr_22996_23029 = state_22988__$1;
(statearr_22996_23029[(2)] = null);

(statearr_22996_23029[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (3))){
var inst_22986 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22988__$1,inst_22986);
} else {
if((state_val_22989 === (12))){
var inst_22974 = (state_22988[(8)]);
var inst_22974__$1 = (state_22988[(2)]);
var inst_22975 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22974__$1);
var state_22988__$1 = (function (){var statearr_22997 = state_22988;
(statearr_22997[(8)] = inst_22974__$1);

return statearr_22997;
})();
if(cljs.core.truth_(inst_22975)){
var statearr_22998_23030 = state_22988__$1;
(statearr_22998_23030[(1)] = (13));

} else {
var statearr_22999_23031 = state_22988__$1;
(statearr_22999_23031[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (2))){
var inst_22951 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22952 = (0);
var state_22988__$1 = (function (){var statearr_23000 = state_22988;
(statearr_23000[(7)] = inst_22952);

(statearr_23000[(9)] = inst_22951);

return statearr_23000;
})();
var statearr_23001_23032 = state_22988__$1;
(statearr_23001_23032[(2)] = null);

(statearr_23001_23032[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (11))){
var inst_22952 = (state_22988[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22988,(10),Object,null,(9));
var inst_22961 = chs__$1.call(null,inst_22952);
var inst_22962 = done.call(null,inst_22952);
var inst_22963 = cljs.core.async.take_BANG_.call(null,inst_22961,inst_22962);
var state_22988__$1 = state_22988;
var statearr_23002_23033 = state_22988__$1;
(statearr_23002_23033[(2)] = inst_22963);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22988__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (9))){
var inst_22952 = (state_22988[(7)]);
var inst_22965 = (state_22988[(2)]);
var inst_22966 = (inst_22952 + (1));
var inst_22952__$1 = inst_22966;
var state_22988__$1 = (function (){var statearr_23003 = state_22988;
(statearr_23003[(7)] = inst_22952__$1);

(statearr_23003[(10)] = inst_22965);

return statearr_23003;
})();
var statearr_23004_23034 = state_22988__$1;
(statearr_23004_23034[(2)] = null);

(statearr_23004_23034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (5))){
var inst_22972 = (state_22988[(2)]);
var state_22988__$1 = (function (){var statearr_23005 = state_22988;
(statearr_23005[(11)] = inst_22972);

return statearr_23005;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22988__$1,(12),dchan);
} else {
if((state_val_22989 === (14))){
var inst_22974 = (state_22988[(8)]);
var inst_22979 = cljs.core.apply.call(null,f,inst_22974);
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22988__$1,(16),out,inst_22979);
} else {
if((state_val_22989 === (16))){
var inst_22981 = (state_22988[(2)]);
var state_22988__$1 = (function (){var statearr_23006 = state_22988;
(statearr_23006[(12)] = inst_22981);

return statearr_23006;
})();
var statearr_23007_23035 = state_22988__$1;
(statearr_23007_23035[(2)] = null);

(statearr_23007_23035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (10))){
var inst_22956 = (state_22988[(2)]);
var inst_22957 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22988__$1 = (function (){var statearr_23008 = state_22988;
(statearr_23008[(13)] = inst_22956);

return statearr_23008;
})();
var statearr_23009_23036 = state_22988__$1;
(statearr_23009_23036[(2)] = inst_22957);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22988__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (8))){
var inst_22970 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_23010_23037 = state_22988__$1;
(statearr_23010_23037[(2)] = inst_22970);

(statearr_23010_23037[(1)] = (5));


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
});})(c__21003__auto___23022,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20891__auto__,c__21003__auto___23022,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20892__auto__ = null;
var cljs$core$async$state_machine__20892__auto____0 = (function (){
var statearr_23014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23014[(0)] = cljs$core$async$state_machine__20892__auto__);

(statearr_23014[(1)] = (1));

return statearr_23014;
});
var cljs$core$async$state_machine__20892__auto____1 = (function (state_22988){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_22988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e23015){if((e23015 instanceof Object)){
var ex__20895__auto__ = e23015;
var statearr_23016_23038 = state_22988;
(statearr_23016_23038[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23039 = state_22988;
state_22988 = G__23039;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$state_machine__20892__auto__ = function(state_22988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20892__auto____1.call(this,state_22988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20892__auto____0;
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20892__auto____1;
return cljs$core$async$state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___23022,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21005__auto__ = (function (){var statearr_23017 = f__21004__auto__.call(null);
(statearr_23017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___23022);

return statearr_23017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___23022,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23041 = [];
var len__17884__auto___23097 = arguments.length;
var i__17885__auto___23098 = (0);
while(true){
if((i__17885__auto___23098 < len__17884__auto___23097)){
args23041.push((arguments[i__17885__auto___23098]));

var G__23099 = (i__17885__auto___23098 + (1));
i__17885__auto___23098 = G__23099;
continue;
} else {
}
break;
}

var G__23043 = args23041.length;
switch (G__23043) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23041.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21003__auto___23101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___23101,out){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___23101,out){
return (function (state_23073){
var state_val_23074 = (state_23073[(1)]);
if((state_val_23074 === (7))){
var inst_23053 = (state_23073[(7)]);
var inst_23052 = (state_23073[(8)]);
var inst_23052__$1 = (state_23073[(2)]);
var inst_23053__$1 = cljs.core.nth.call(null,inst_23052__$1,(0),null);
var inst_23054 = cljs.core.nth.call(null,inst_23052__$1,(1),null);
var inst_23055 = (inst_23053__$1 == null);
var state_23073__$1 = (function (){var statearr_23075 = state_23073;
(statearr_23075[(7)] = inst_23053__$1);

(statearr_23075[(9)] = inst_23054);

(statearr_23075[(8)] = inst_23052__$1);

return statearr_23075;
})();
if(cljs.core.truth_(inst_23055)){
var statearr_23076_23102 = state_23073__$1;
(statearr_23076_23102[(1)] = (8));

} else {
var statearr_23077_23103 = state_23073__$1;
(statearr_23077_23103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (1))){
var inst_23044 = cljs.core.vec.call(null,chs);
var inst_23045 = inst_23044;
var state_23073__$1 = (function (){var statearr_23078 = state_23073;
(statearr_23078[(10)] = inst_23045);

return statearr_23078;
})();
var statearr_23079_23104 = state_23073__$1;
(statearr_23079_23104[(2)] = null);

(statearr_23079_23104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (4))){
var inst_23045 = (state_23073[(10)]);
var state_23073__$1 = state_23073;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23073__$1,(7),inst_23045);
} else {
if((state_val_23074 === (6))){
var inst_23069 = (state_23073[(2)]);
var state_23073__$1 = state_23073;
var statearr_23080_23105 = state_23073__$1;
(statearr_23080_23105[(2)] = inst_23069);

(statearr_23080_23105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (3))){
var inst_23071 = (state_23073[(2)]);
var state_23073__$1 = state_23073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23073__$1,inst_23071);
} else {
if((state_val_23074 === (2))){
var inst_23045 = (state_23073[(10)]);
var inst_23047 = cljs.core.count.call(null,inst_23045);
var inst_23048 = (inst_23047 > (0));
var state_23073__$1 = state_23073;
if(cljs.core.truth_(inst_23048)){
var statearr_23082_23106 = state_23073__$1;
(statearr_23082_23106[(1)] = (4));

} else {
var statearr_23083_23107 = state_23073__$1;
(statearr_23083_23107[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (11))){
var inst_23045 = (state_23073[(10)]);
var inst_23062 = (state_23073[(2)]);
var tmp23081 = inst_23045;
var inst_23045__$1 = tmp23081;
var state_23073__$1 = (function (){var statearr_23084 = state_23073;
(statearr_23084[(10)] = inst_23045__$1);

(statearr_23084[(11)] = inst_23062);

return statearr_23084;
})();
var statearr_23085_23108 = state_23073__$1;
(statearr_23085_23108[(2)] = null);

(statearr_23085_23108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (9))){
var inst_23053 = (state_23073[(7)]);
var state_23073__$1 = state_23073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23073__$1,(11),out,inst_23053);
} else {
if((state_val_23074 === (5))){
var inst_23067 = cljs.core.async.close_BANG_.call(null,out);
var state_23073__$1 = state_23073;
var statearr_23086_23109 = state_23073__$1;
(statearr_23086_23109[(2)] = inst_23067);

(statearr_23086_23109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (10))){
var inst_23065 = (state_23073[(2)]);
var state_23073__$1 = state_23073;
var statearr_23087_23110 = state_23073__$1;
(statearr_23087_23110[(2)] = inst_23065);

(statearr_23087_23110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23074 === (8))){
var inst_23053 = (state_23073[(7)]);
var inst_23054 = (state_23073[(9)]);
var inst_23045 = (state_23073[(10)]);
var inst_23052 = (state_23073[(8)]);
var inst_23057 = (function (){var cs = inst_23045;
var vec__23050 = inst_23052;
var v = inst_23053;
var c = inst_23054;
return ((function (cs,vec__23050,v,c,inst_23053,inst_23054,inst_23045,inst_23052,state_val_23074,c__21003__auto___23101,out){
return (function (p1__23040_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23040_SHARP_);
});
;})(cs,vec__23050,v,c,inst_23053,inst_23054,inst_23045,inst_23052,state_val_23074,c__21003__auto___23101,out))
})();
var inst_23058 = cljs.core.filterv.call(null,inst_23057,inst_23045);
var inst_23045__$1 = inst_23058;
var state_23073__$1 = (function (){var statearr_23088 = state_23073;
(statearr_23088[(10)] = inst_23045__$1);

return statearr_23088;
})();
var statearr_23089_23111 = state_23073__$1;
(statearr_23089_23111[(2)] = null);

(statearr_23089_23111[(1)] = (2));


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
});})(c__21003__auto___23101,out))
;
return ((function (switch__20891__auto__,c__21003__auto___23101,out){
return (function() {
var cljs$core$async$state_machine__20892__auto__ = null;
var cljs$core$async$state_machine__20892__auto____0 = (function (){
var statearr_23093 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23093[(0)] = cljs$core$async$state_machine__20892__auto__);

(statearr_23093[(1)] = (1));

return statearr_23093;
});
var cljs$core$async$state_machine__20892__auto____1 = (function (state_23073){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_23073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e23094){if((e23094 instanceof Object)){
var ex__20895__auto__ = e23094;
var statearr_23095_23112 = state_23073;
(statearr_23095_23112[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23113 = state_23073;
state_23073 = G__23113;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$state_machine__20892__auto__ = function(state_23073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20892__auto____1.call(this,state_23073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20892__auto____0;
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20892__auto____1;
return cljs$core$async$state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___23101,out))
})();
var state__21005__auto__ = (function (){var statearr_23096 = f__21004__auto__.call(null);
(statearr_23096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___23101);

return statearr_23096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___23101,out))
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
var args23114 = [];
var len__17884__auto___23163 = arguments.length;
var i__17885__auto___23164 = (0);
while(true){
if((i__17885__auto___23164 < len__17884__auto___23163)){
args23114.push((arguments[i__17885__auto___23164]));

var G__23165 = (i__17885__auto___23164 + (1));
i__17885__auto___23164 = G__23165;
continue;
} else {
}
break;
}

var G__23116 = args23114.length;
switch (G__23116) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23114.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21003__auto___23167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___23167,out){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___23167,out){
return (function (state_23140){
var state_val_23141 = (state_23140[(1)]);
if((state_val_23141 === (7))){
var inst_23122 = (state_23140[(7)]);
var inst_23122__$1 = (state_23140[(2)]);
var inst_23123 = (inst_23122__$1 == null);
var inst_23124 = cljs.core.not.call(null,inst_23123);
var state_23140__$1 = (function (){var statearr_23142 = state_23140;
(statearr_23142[(7)] = inst_23122__$1);

return statearr_23142;
})();
if(inst_23124){
var statearr_23143_23168 = state_23140__$1;
(statearr_23143_23168[(1)] = (8));

} else {
var statearr_23144_23169 = state_23140__$1;
(statearr_23144_23169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (1))){
var inst_23117 = (0);
var state_23140__$1 = (function (){var statearr_23145 = state_23140;
(statearr_23145[(8)] = inst_23117);

return statearr_23145;
})();
var statearr_23146_23170 = state_23140__$1;
(statearr_23146_23170[(2)] = null);

(statearr_23146_23170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (4))){
var state_23140__$1 = state_23140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23140__$1,(7),ch);
} else {
if((state_val_23141 === (6))){
var inst_23135 = (state_23140[(2)]);
var state_23140__$1 = state_23140;
var statearr_23147_23171 = state_23140__$1;
(statearr_23147_23171[(2)] = inst_23135);

(statearr_23147_23171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (3))){
var inst_23137 = (state_23140[(2)]);
var inst_23138 = cljs.core.async.close_BANG_.call(null,out);
var state_23140__$1 = (function (){var statearr_23148 = state_23140;
(statearr_23148[(9)] = inst_23137);

return statearr_23148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23140__$1,inst_23138);
} else {
if((state_val_23141 === (2))){
var inst_23117 = (state_23140[(8)]);
var inst_23119 = (inst_23117 < n);
var state_23140__$1 = state_23140;
if(cljs.core.truth_(inst_23119)){
var statearr_23149_23172 = state_23140__$1;
(statearr_23149_23172[(1)] = (4));

} else {
var statearr_23150_23173 = state_23140__$1;
(statearr_23150_23173[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (11))){
var inst_23117 = (state_23140[(8)]);
var inst_23127 = (state_23140[(2)]);
var inst_23128 = (inst_23117 + (1));
var inst_23117__$1 = inst_23128;
var state_23140__$1 = (function (){var statearr_23151 = state_23140;
(statearr_23151[(8)] = inst_23117__$1);

(statearr_23151[(10)] = inst_23127);

return statearr_23151;
})();
var statearr_23152_23174 = state_23140__$1;
(statearr_23152_23174[(2)] = null);

(statearr_23152_23174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (9))){
var state_23140__$1 = state_23140;
var statearr_23153_23175 = state_23140__$1;
(statearr_23153_23175[(2)] = null);

(statearr_23153_23175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (5))){
var state_23140__$1 = state_23140;
var statearr_23154_23176 = state_23140__$1;
(statearr_23154_23176[(2)] = null);

(statearr_23154_23176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (10))){
var inst_23132 = (state_23140[(2)]);
var state_23140__$1 = state_23140;
var statearr_23155_23177 = state_23140__$1;
(statearr_23155_23177[(2)] = inst_23132);

(statearr_23155_23177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23141 === (8))){
var inst_23122 = (state_23140[(7)]);
var state_23140__$1 = state_23140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23140__$1,(11),out,inst_23122);
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
});})(c__21003__auto___23167,out))
;
return ((function (switch__20891__auto__,c__21003__auto___23167,out){
return (function() {
var cljs$core$async$state_machine__20892__auto__ = null;
var cljs$core$async$state_machine__20892__auto____0 = (function (){
var statearr_23159 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23159[(0)] = cljs$core$async$state_machine__20892__auto__);

(statearr_23159[(1)] = (1));

return statearr_23159;
});
var cljs$core$async$state_machine__20892__auto____1 = (function (state_23140){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_23140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e23160){if((e23160 instanceof Object)){
var ex__20895__auto__ = e23160;
var statearr_23161_23178 = state_23140;
(statearr_23161_23178[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23179 = state_23140;
state_23140 = G__23179;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$state_machine__20892__auto__ = function(state_23140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20892__auto____1.call(this,state_23140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20892__auto____0;
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20892__auto____1;
return cljs$core$async$state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___23167,out))
})();
var state__21005__auto__ = (function (){var statearr_23162 = f__21004__auto__.call(null);
(statearr_23162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___23167);

return statearr_23162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___23167,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23187 = (function (map_LT_,f,ch,meta23188){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23188 = meta23188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23189,meta23188__$1){
var self__ = this;
var _23189__$1 = this;
return (new cljs.core.async.t_cljs$core$async23187(self__.map_LT_,self__.f,self__.ch,meta23188__$1));
});

cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23189){
var self__ = this;
var _23189__$1 = this;
return self__.meta23188;
});

cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23190 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23190 = (function (map_LT_,f,ch,meta23188,_,fn1,meta23191){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23188 = meta23188;
this._ = _;
this.fn1 = fn1;
this.meta23191 = meta23191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23192,meta23191__$1){
var self__ = this;
var _23192__$1 = this;
return (new cljs.core.async.t_cljs$core$async23190(self__.map_LT_,self__.f,self__.ch,self__.meta23188,self__._,self__.fn1,meta23191__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23192){
var self__ = this;
var _23192__$1 = this;
return self__.meta23191;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23190.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23190.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23190.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23190.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23180_SHARP_){
return f1.call(null,(((p1__23180_SHARP_ == null))?null:self__.f.call(null,p1__23180_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23190.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23188","meta23188",-111341327,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23187","cljs.core.async/t_cljs$core$async23187",-1708571896,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23191","meta23191",1270065056,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23190";

cljs.core.async.t_cljs$core$async23190.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23190");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23190 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23190(map_LT___$1,f__$1,ch__$1,meta23188__$1,___$2,fn1__$1,meta23191){
return (new cljs.core.async.t_cljs$core$async23190(map_LT___$1,f__$1,ch__$1,meta23188__$1,___$2,fn1__$1,meta23191));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23190(self__.map_LT_,self__.f,self__.ch,self__.meta23188,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23188","meta23188",-111341327,null)], null);
});

cljs.core.async.t_cljs$core$async23187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23187";

cljs.core.async.t_cljs$core$async23187.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23187");
});

cljs.core.async.__GT_t_cljs$core$async23187 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23187(map_LT___$1,f__$1,ch__$1,meta23188){
return (new cljs.core.async.t_cljs$core$async23187(map_LT___$1,f__$1,ch__$1,meta23188));
});

}

return (new cljs.core.async.t_cljs$core$async23187(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23196 = (function (map_GT_,f,ch,meta23197){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23197 = meta23197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23198,meta23197__$1){
var self__ = this;
var _23198__$1 = this;
return (new cljs.core.async.t_cljs$core$async23196(self__.map_GT_,self__.f,self__.ch,meta23197__$1));
});

cljs.core.async.t_cljs$core$async23196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23198){
var self__ = this;
var _23198__$1 = this;
return self__.meta23197;
});

cljs.core.async.t_cljs$core$async23196.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23196.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23196.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23196.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23196.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23196.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23197","meta23197",-2033308785,null)], null);
});

cljs.core.async.t_cljs$core$async23196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23196";

cljs.core.async.t_cljs$core$async23196.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23196");
});

cljs.core.async.__GT_t_cljs$core$async23196 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23196(map_GT___$1,f__$1,ch__$1,meta23197){
return (new cljs.core.async.t_cljs$core$async23196(map_GT___$1,f__$1,ch__$1,meta23197));
});

}

return (new cljs.core.async.t_cljs$core$async23196(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23202 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23202 = (function (filter_GT_,p,ch,meta23203){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23203 = meta23203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23204,meta23203__$1){
var self__ = this;
var _23204__$1 = this;
return (new cljs.core.async.t_cljs$core$async23202(self__.filter_GT_,self__.p,self__.ch,meta23203__$1));
});

cljs.core.async.t_cljs$core$async23202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23204){
var self__ = this;
var _23204__$1 = this;
return self__.meta23203;
});

cljs.core.async.t_cljs$core$async23202.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23202.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23202.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23202.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23202.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23202.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23202.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23203","meta23203",-1710436056,null)], null);
});

cljs.core.async.t_cljs$core$async23202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23202";

cljs.core.async.t_cljs$core$async23202.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23202");
});

cljs.core.async.__GT_t_cljs$core$async23202 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23202(filter_GT___$1,p__$1,ch__$1,meta23203){
return (new cljs.core.async.t_cljs$core$async23202(filter_GT___$1,p__$1,ch__$1,meta23203));
});

}

return (new cljs.core.async.t_cljs$core$async23202(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23205 = [];
var len__17884__auto___23249 = arguments.length;
var i__17885__auto___23250 = (0);
while(true){
if((i__17885__auto___23250 < len__17884__auto___23249)){
args23205.push((arguments[i__17885__auto___23250]));

var G__23251 = (i__17885__auto___23250 + (1));
i__17885__auto___23250 = G__23251;
continue;
} else {
}
break;
}

var G__23207 = args23205.length;
switch (G__23207) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23205.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21003__auto___23253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___23253,out){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___23253,out){
return (function (state_23228){
var state_val_23229 = (state_23228[(1)]);
if((state_val_23229 === (7))){
var inst_23224 = (state_23228[(2)]);
var state_23228__$1 = state_23228;
var statearr_23230_23254 = state_23228__$1;
(statearr_23230_23254[(2)] = inst_23224);

(statearr_23230_23254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (1))){
var state_23228__$1 = state_23228;
var statearr_23231_23255 = state_23228__$1;
(statearr_23231_23255[(2)] = null);

(statearr_23231_23255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (4))){
var inst_23210 = (state_23228[(7)]);
var inst_23210__$1 = (state_23228[(2)]);
var inst_23211 = (inst_23210__$1 == null);
var state_23228__$1 = (function (){var statearr_23232 = state_23228;
(statearr_23232[(7)] = inst_23210__$1);

return statearr_23232;
})();
if(cljs.core.truth_(inst_23211)){
var statearr_23233_23256 = state_23228__$1;
(statearr_23233_23256[(1)] = (5));

} else {
var statearr_23234_23257 = state_23228__$1;
(statearr_23234_23257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (6))){
var inst_23210 = (state_23228[(7)]);
var inst_23215 = p.call(null,inst_23210);
var state_23228__$1 = state_23228;
if(cljs.core.truth_(inst_23215)){
var statearr_23235_23258 = state_23228__$1;
(statearr_23235_23258[(1)] = (8));

} else {
var statearr_23236_23259 = state_23228__$1;
(statearr_23236_23259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (3))){
var inst_23226 = (state_23228[(2)]);
var state_23228__$1 = state_23228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23228__$1,inst_23226);
} else {
if((state_val_23229 === (2))){
var state_23228__$1 = state_23228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23228__$1,(4),ch);
} else {
if((state_val_23229 === (11))){
var inst_23218 = (state_23228[(2)]);
var state_23228__$1 = state_23228;
var statearr_23237_23260 = state_23228__$1;
(statearr_23237_23260[(2)] = inst_23218);

(statearr_23237_23260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (9))){
var state_23228__$1 = state_23228;
var statearr_23238_23261 = state_23228__$1;
(statearr_23238_23261[(2)] = null);

(statearr_23238_23261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (5))){
var inst_23213 = cljs.core.async.close_BANG_.call(null,out);
var state_23228__$1 = state_23228;
var statearr_23239_23262 = state_23228__$1;
(statearr_23239_23262[(2)] = inst_23213);

(statearr_23239_23262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (10))){
var inst_23221 = (state_23228[(2)]);
var state_23228__$1 = (function (){var statearr_23240 = state_23228;
(statearr_23240[(8)] = inst_23221);

return statearr_23240;
})();
var statearr_23241_23263 = state_23228__$1;
(statearr_23241_23263[(2)] = null);

(statearr_23241_23263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23229 === (8))){
var inst_23210 = (state_23228[(7)]);
var state_23228__$1 = state_23228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23228__$1,(11),out,inst_23210);
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
});})(c__21003__auto___23253,out))
;
return ((function (switch__20891__auto__,c__21003__auto___23253,out){
return (function() {
var cljs$core$async$state_machine__20892__auto__ = null;
var cljs$core$async$state_machine__20892__auto____0 = (function (){
var statearr_23245 = [null,null,null,null,null,null,null,null,null];
(statearr_23245[(0)] = cljs$core$async$state_machine__20892__auto__);

(statearr_23245[(1)] = (1));

return statearr_23245;
});
var cljs$core$async$state_machine__20892__auto____1 = (function (state_23228){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_23228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e23246){if((e23246 instanceof Object)){
var ex__20895__auto__ = e23246;
var statearr_23247_23264 = state_23228;
(statearr_23247_23264[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23265 = state_23228;
state_23228 = G__23265;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$state_machine__20892__auto__ = function(state_23228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20892__auto____1.call(this,state_23228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20892__auto____0;
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20892__auto____1;
return cljs$core$async$state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___23253,out))
})();
var state__21005__auto__ = (function (){var statearr_23248 = f__21004__auto__.call(null);
(statearr_23248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___23253);

return statearr_23248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___23253,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23266 = [];
var len__17884__auto___23269 = arguments.length;
var i__17885__auto___23270 = (0);
while(true){
if((i__17885__auto___23270 < len__17884__auto___23269)){
args23266.push((arguments[i__17885__auto___23270]));

var G__23271 = (i__17885__auto___23270 + (1));
i__17885__auto___23270 = G__23271;
continue;
} else {
}
break;
}

var G__23268 = args23266.length;
switch (G__23268) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23266.length)].join('')));

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
var c__21003__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto__){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto__){
return (function (state_23438){
var state_val_23439 = (state_23438[(1)]);
if((state_val_23439 === (7))){
var inst_23434 = (state_23438[(2)]);
var state_23438__$1 = state_23438;
var statearr_23440_23481 = state_23438__$1;
(statearr_23440_23481[(2)] = inst_23434);

(statearr_23440_23481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (20))){
var inst_23404 = (state_23438[(7)]);
var inst_23415 = (state_23438[(2)]);
var inst_23416 = cljs.core.next.call(null,inst_23404);
var inst_23390 = inst_23416;
var inst_23391 = null;
var inst_23392 = (0);
var inst_23393 = (0);
var state_23438__$1 = (function (){var statearr_23441 = state_23438;
(statearr_23441[(8)] = inst_23393);

(statearr_23441[(9)] = inst_23392);

(statearr_23441[(10)] = inst_23415);

(statearr_23441[(11)] = inst_23391);

(statearr_23441[(12)] = inst_23390);

return statearr_23441;
})();
var statearr_23442_23482 = state_23438__$1;
(statearr_23442_23482[(2)] = null);

(statearr_23442_23482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (1))){
var state_23438__$1 = state_23438;
var statearr_23443_23483 = state_23438__$1;
(statearr_23443_23483[(2)] = null);

(statearr_23443_23483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (4))){
var inst_23379 = (state_23438[(13)]);
var inst_23379__$1 = (state_23438[(2)]);
var inst_23380 = (inst_23379__$1 == null);
var state_23438__$1 = (function (){var statearr_23444 = state_23438;
(statearr_23444[(13)] = inst_23379__$1);

return statearr_23444;
})();
if(cljs.core.truth_(inst_23380)){
var statearr_23445_23484 = state_23438__$1;
(statearr_23445_23484[(1)] = (5));

} else {
var statearr_23446_23485 = state_23438__$1;
(statearr_23446_23485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (15))){
var state_23438__$1 = state_23438;
var statearr_23450_23486 = state_23438__$1;
(statearr_23450_23486[(2)] = null);

(statearr_23450_23486[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (21))){
var state_23438__$1 = state_23438;
var statearr_23451_23487 = state_23438__$1;
(statearr_23451_23487[(2)] = null);

(statearr_23451_23487[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (13))){
var inst_23393 = (state_23438[(8)]);
var inst_23392 = (state_23438[(9)]);
var inst_23391 = (state_23438[(11)]);
var inst_23390 = (state_23438[(12)]);
var inst_23400 = (state_23438[(2)]);
var inst_23401 = (inst_23393 + (1));
var tmp23447 = inst_23392;
var tmp23448 = inst_23391;
var tmp23449 = inst_23390;
var inst_23390__$1 = tmp23449;
var inst_23391__$1 = tmp23448;
var inst_23392__$1 = tmp23447;
var inst_23393__$1 = inst_23401;
var state_23438__$1 = (function (){var statearr_23452 = state_23438;
(statearr_23452[(8)] = inst_23393__$1);

(statearr_23452[(9)] = inst_23392__$1);

(statearr_23452[(14)] = inst_23400);

(statearr_23452[(11)] = inst_23391__$1);

(statearr_23452[(12)] = inst_23390__$1);

return statearr_23452;
})();
var statearr_23453_23488 = state_23438__$1;
(statearr_23453_23488[(2)] = null);

(statearr_23453_23488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (22))){
var state_23438__$1 = state_23438;
var statearr_23454_23489 = state_23438__$1;
(statearr_23454_23489[(2)] = null);

(statearr_23454_23489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (6))){
var inst_23379 = (state_23438[(13)]);
var inst_23388 = f.call(null,inst_23379);
var inst_23389 = cljs.core.seq.call(null,inst_23388);
var inst_23390 = inst_23389;
var inst_23391 = null;
var inst_23392 = (0);
var inst_23393 = (0);
var state_23438__$1 = (function (){var statearr_23455 = state_23438;
(statearr_23455[(8)] = inst_23393);

(statearr_23455[(9)] = inst_23392);

(statearr_23455[(11)] = inst_23391);

(statearr_23455[(12)] = inst_23390);

return statearr_23455;
})();
var statearr_23456_23490 = state_23438__$1;
(statearr_23456_23490[(2)] = null);

(statearr_23456_23490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (17))){
var inst_23404 = (state_23438[(7)]);
var inst_23408 = cljs.core.chunk_first.call(null,inst_23404);
var inst_23409 = cljs.core.chunk_rest.call(null,inst_23404);
var inst_23410 = cljs.core.count.call(null,inst_23408);
var inst_23390 = inst_23409;
var inst_23391 = inst_23408;
var inst_23392 = inst_23410;
var inst_23393 = (0);
var state_23438__$1 = (function (){var statearr_23457 = state_23438;
(statearr_23457[(8)] = inst_23393);

(statearr_23457[(9)] = inst_23392);

(statearr_23457[(11)] = inst_23391);

(statearr_23457[(12)] = inst_23390);

return statearr_23457;
})();
var statearr_23458_23491 = state_23438__$1;
(statearr_23458_23491[(2)] = null);

(statearr_23458_23491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (3))){
var inst_23436 = (state_23438[(2)]);
var state_23438__$1 = state_23438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23438__$1,inst_23436);
} else {
if((state_val_23439 === (12))){
var inst_23424 = (state_23438[(2)]);
var state_23438__$1 = state_23438;
var statearr_23459_23492 = state_23438__$1;
(statearr_23459_23492[(2)] = inst_23424);

(statearr_23459_23492[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (2))){
var state_23438__$1 = state_23438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23438__$1,(4),in$);
} else {
if((state_val_23439 === (23))){
var inst_23432 = (state_23438[(2)]);
var state_23438__$1 = state_23438;
var statearr_23460_23493 = state_23438__$1;
(statearr_23460_23493[(2)] = inst_23432);

(statearr_23460_23493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (19))){
var inst_23419 = (state_23438[(2)]);
var state_23438__$1 = state_23438;
var statearr_23461_23494 = state_23438__$1;
(statearr_23461_23494[(2)] = inst_23419);

(statearr_23461_23494[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (11))){
var inst_23404 = (state_23438[(7)]);
var inst_23390 = (state_23438[(12)]);
var inst_23404__$1 = cljs.core.seq.call(null,inst_23390);
var state_23438__$1 = (function (){var statearr_23462 = state_23438;
(statearr_23462[(7)] = inst_23404__$1);

return statearr_23462;
})();
if(inst_23404__$1){
var statearr_23463_23495 = state_23438__$1;
(statearr_23463_23495[(1)] = (14));

} else {
var statearr_23464_23496 = state_23438__$1;
(statearr_23464_23496[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (9))){
var inst_23426 = (state_23438[(2)]);
var inst_23427 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23438__$1 = (function (){var statearr_23465 = state_23438;
(statearr_23465[(15)] = inst_23426);

return statearr_23465;
})();
if(cljs.core.truth_(inst_23427)){
var statearr_23466_23497 = state_23438__$1;
(statearr_23466_23497[(1)] = (21));

} else {
var statearr_23467_23498 = state_23438__$1;
(statearr_23467_23498[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (5))){
var inst_23382 = cljs.core.async.close_BANG_.call(null,out);
var state_23438__$1 = state_23438;
var statearr_23468_23499 = state_23438__$1;
(statearr_23468_23499[(2)] = inst_23382);

(statearr_23468_23499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (14))){
var inst_23404 = (state_23438[(7)]);
var inst_23406 = cljs.core.chunked_seq_QMARK_.call(null,inst_23404);
var state_23438__$1 = state_23438;
if(inst_23406){
var statearr_23469_23500 = state_23438__$1;
(statearr_23469_23500[(1)] = (17));

} else {
var statearr_23470_23501 = state_23438__$1;
(statearr_23470_23501[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (16))){
var inst_23422 = (state_23438[(2)]);
var state_23438__$1 = state_23438;
var statearr_23471_23502 = state_23438__$1;
(statearr_23471_23502[(2)] = inst_23422);

(statearr_23471_23502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23439 === (10))){
var inst_23393 = (state_23438[(8)]);
var inst_23391 = (state_23438[(11)]);
var inst_23398 = cljs.core._nth.call(null,inst_23391,inst_23393);
var state_23438__$1 = state_23438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23438__$1,(13),out,inst_23398);
} else {
if((state_val_23439 === (18))){
var inst_23404 = (state_23438[(7)]);
var inst_23413 = cljs.core.first.call(null,inst_23404);
var state_23438__$1 = state_23438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23438__$1,(20),out,inst_23413);
} else {
if((state_val_23439 === (8))){
var inst_23393 = (state_23438[(8)]);
var inst_23392 = (state_23438[(9)]);
var inst_23395 = (inst_23393 < inst_23392);
var inst_23396 = inst_23395;
var state_23438__$1 = state_23438;
if(cljs.core.truth_(inst_23396)){
var statearr_23472_23503 = state_23438__$1;
(statearr_23472_23503[(1)] = (10));

} else {
var statearr_23473_23504 = state_23438__$1;
(statearr_23473_23504[(1)] = (11));

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
});})(c__21003__auto__))
;
return ((function (switch__20891__auto__,c__21003__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20892__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20892__auto____0 = (function (){
var statearr_23477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23477[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20892__auto__);

(statearr_23477[(1)] = (1));

return statearr_23477;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20892__auto____1 = (function (state_23438){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_23438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e23478){if((e23478 instanceof Object)){
var ex__20895__auto__ = e23478;
var statearr_23479_23505 = state_23438;
(statearr_23479_23505[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23506 = state_23438;
state_23438 = G__23506;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20892__auto__ = function(state_23438){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20892__auto____1.call(this,state_23438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20892__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20892__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto__))
})();
var state__21005__auto__ = (function (){var statearr_23480 = f__21004__auto__.call(null);
(statearr_23480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto__);

return statearr_23480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto__))
);

return c__21003__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23507 = [];
var len__17884__auto___23510 = arguments.length;
var i__17885__auto___23511 = (0);
while(true){
if((i__17885__auto___23511 < len__17884__auto___23510)){
args23507.push((arguments[i__17885__auto___23511]));

var G__23512 = (i__17885__auto___23511 + (1));
i__17885__auto___23511 = G__23512;
continue;
} else {
}
break;
}

var G__23509 = args23507.length;
switch (G__23509) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23507.length)].join('')));

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
var args23514 = [];
var len__17884__auto___23517 = arguments.length;
var i__17885__auto___23518 = (0);
while(true){
if((i__17885__auto___23518 < len__17884__auto___23517)){
args23514.push((arguments[i__17885__auto___23518]));

var G__23519 = (i__17885__auto___23518 + (1));
i__17885__auto___23518 = G__23519;
continue;
} else {
}
break;
}

var G__23516 = args23514.length;
switch (G__23516) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23514.length)].join('')));

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
var args23521 = [];
var len__17884__auto___23572 = arguments.length;
var i__17885__auto___23573 = (0);
while(true){
if((i__17885__auto___23573 < len__17884__auto___23572)){
args23521.push((arguments[i__17885__auto___23573]));

var G__23574 = (i__17885__auto___23573 + (1));
i__17885__auto___23573 = G__23574;
continue;
} else {
}
break;
}

var G__23523 = args23521.length;
switch (G__23523) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23521.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21003__auto___23576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___23576,out){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___23576,out){
return (function (state_23547){
var state_val_23548 = (state_23547[(1)]);
if((state_val_23548 === (7))){
var inst_23542 = (state_23547[(2)]);
var state_23547__$1 = state_23547;
var statearr_23549_23577 = state_23547__$1;
(statearr_23549_23577[(2)] = inst_23542);

(statearr_23549_23577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (1))){
var inst_23524 = null;
var state_23547__$1 = (function (){var statearr_23550 = state_23547;
(statearr_23550[(7)] = inst_23524);

return statearr_23550;
})();
var statearr_23551_23578 = state_23547__$1;
(statearr_23551_23578[(2)] = null);

(statearr_23551_23578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (4))){
var inst_23527 = (state_23547[(8)]);
var inst_23527__$1 = (state_23547[(2)]);
var inst_23528 = (inst_23527__$1 == null);
var inst_23529 = cljs.core.not.call(null,inst_23528);
var state_23547__$1 = (function (){var statearr_23552 = state_23547;
(statearr_23552[(8)] = inst_23527__$1);

return statearr_23552;
})();
if(inst_23529){
var statearr_23553_23579 = state_23547__$1;
(statearr_23553_23579[(1)] = (5));

} else {
var statearr_23554_23580 = state_23547__$1;
(statearr_23554_23580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (6))){
var state_23547__$1 = state_23547;
var statearr_23555_23581 = state_23547__$1;
(statearr_23555_23581[(2)] = null);

(statearr_23555_23581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (3))){
var inst_23544 = (state_23547[(2)]);
var inst_23545 = cljs.core.async.close_BANG_.call(null,out);
var state_23547__$1 = (function (){var statearr_23556 = state_23547;
(statearr_23556[(9)] = inst_23544);

return statearr_23556;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23547__$1,inst_23545);
} else {
if((state_val_23548 === (2))){
var state_23547__$1 = state_23547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23547__$1,(4),ch);
} else {
if((state_val_23548 === (11))){
var inst_23527 = (state_23547[(8)]);
var inst_23536 = (state_23547[(2)]);
var inst_23524 = inst_23527;
var state_23547__$1 = (function (){var statearr_23557 = state_23547;
(statearr_23557[(7)] = inst_23524);

(statearr_23557[(10)] = inst_23536);

return statearr_23557;
})();
var statearr_23558_23582 = state_23547__$1;
(statearr_23558_23582[(2)] = null);

(statearr_23558_23582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (9))){
var inst_23527 = (state_23547[(8)]);
var state_23547__$1 = state_23547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23547__$1,(11),out,inst_23527);
} else {
if((state_val_23548 === (5))){
var inst_23527 = (state_23547[(8)]);
var inst_23524 = (state_23547[(7)]);
var inst_23531 = cljs.core._EQ_.call(null,inst_23527,inst_23524);
var state_23547__$1 = state_23547;
if(inst_23531){
var statearr_23560_23583 = state_23547__$1;
(statearr_23560_23583[(1)] = (8));

} else {
var statearr_23561_23584 = state_23547__$1;
(statearr_23561_23584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (10))){
var inst_23539 = (state_23547[(2)]);
var state_23547__$1 = state_23547;
var statearr_23562_23585 = state_23547__$1;
(statearr_23562_23585[(2)] = inst_23539);

(statearr_23562_23585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (8))){
var inst_23524 = (state_23547[(7)]);
var tmp23559 = inst_23524;
var inst_23524__$1 = tmp23559;
var state_23547__$1 = (function (){var statearr_23563 = state_23547;
(statearr_23563[(7)] = inst_23524__$1);

return statearr_23563;
})();
var statearr_23564_23586 = state_23547__$1;
(statearr_23564_23586[(2)] = null);

(statearr_23564_23586[(1)] = (2));


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
});})(c__21003__auto___23576,out))
;
return ((function (switch__20891__auto__,c__21003__auto___23576,out){
return (function() {
var cljs$core$async$state_machine__20892__auto__ = null;
var cljs$core$async$state_machine__20892__auto____0 = (function (){
var statearr_23568 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23568[(0)] = cljs$core$async$state_machine__20892__auto__);

(statearr_23568[(1)] = (1));

return statearr_23568;
});
var cljs$core$async$state_machine__20892__auto____1 = (function (state_23547){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_23547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e23569){if((e23569 instanceof Object)){
var ex__20895__auto__ = e23569;
var statearr_23570_23587 = state_23547;
(statearr_23570_23587[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23588 = state_23547;
state_23547 = G__23588;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$state_machine__20892__auto__ = function(state_23547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20892__auto____1.call(this,state_23547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20892__auto____0;
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20892__auto____1;
return cljs$core$async$state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___23576,out))
})();
var state__21005__auto__ = (function (){var statearr_23571 = f__21004__auto__.call(null);
(statearr_23571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___23576);

return statearr_23571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___23576,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23589 = [];
var len__17884__auto___23659 = arguments.length;
var i__17885__auto___23660 = (0);
while(true){
if((i__17885__auto___23660 < len__17884__auto___23659)){
args23589.push((arguments[i__17885__auto___23660]));

var G__23661 = (i__17885__auto___23660 + (1));
i__17885__auto___23660 = G__23661;
continue;
} else {
}
break;
}

var G__23591 = args23589.length;
switch (G__23591) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23589.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21003__auto___23663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___23663,out){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___23663,out){
return (function (state_23629){
var state_val_23630 = (state_23629[(1)]);
if((state_val_23630 === (7))){
var inst_23625 = (state_23629[(2)]);
var state_23629__$1 = state_23629;
var statearr_23631_23664 = state_23629__$1;
(statearr_23631_23664[(2)] = inst_23625);

(statearr_23631_23664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23630 === (1))){
var inst_23592 = (new Array(n));
var inst_23593 = inst_23592;
var inst_23594 = (0);
var state_23629__$1 = (function (){var statearr_23632 = state_23629;
(statearr_23632[(7)] = inst_23594);

(statearr_23632[(8)] = inst_23593);

return statearr_23632;
})();
var statearr_23633_23665 = state_23629__$1;
(statearr_23633_23665[(2)] = null);

(statearr_23633_23665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23630 === (4))){
var inst_23597 = (state_23629[(9)]);
var inst_23597__$1 = (state_23629[(2)]);
var inst_23598 = (inst_23597__$1 == null);
var inst_23599 = cljs.core.not.call(null,inst_23598);
var state_23629__$1 = (function (){var statearr_23634 = state_23629;
(statearr_23634[(9)] = inst_23597__$1);

return statearr_23634;
})();
if(inst_23599){
var statearr_23635_23666 = state_23629__$1;
(statearr_23635_23666[(1)] = (5));

} else {
var statearr_23636_23667 = state_23629__$1;
(statearr_23636_23667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23630 === (15))){
var inst_23619 = (state_23629[(2)]);
var state_23629__$1 = state_23629;
var statearr_23637_23668 = state_23629__$1;
(statearr_23637_23668[(2)] = inst_23619);

(statearr_23637_23668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23630 === (13))){
var state_23629__$1 = state_23629;
var statearr_23638_23669 = state_23629__$1;
(statearr_23638_23669[(2)] = null);

(statearr_23638_23669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23630 === (6))){
var inst_23594 = (state_23629[(7)]);
var inst_23615 = (inst_23594 > (0));
var state_23629__$1 = state_23629;
if(cljs.core.truth_(inst_23615)){
var statearr_23639_23670 = state_23629__$1;
(statearr_23639_23670[(1)] = (12));

} else {
var statearr_23640_23671 = state_23629__$1;
(statearr_23640_23671[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23630 === (3))){
var inst_23627 = (state_23629[(2)]);
var state_23629__$1 = state_23629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23629__$1,inst_23627);
} else {
if((state_val_23630 === (12))){
var inst_23593 = (state_23629[(8)]);
var inst_23617 = cljs.core.vec.call(null,inst_23593);
var state_23629__$1 = state_23629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23629__$1,(15),out,inst_23617);
} else {
if((state_val_23630 === (2))){
var state_23629__$1 = state_23629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23629__$1,(4),ch);
} else {
if((state_val_23630 === (11))){
var inst_23609 = (state_23629[(2)]);
var inst_23610 = (new Array(n));
var inst_23593 = inst_23610;
var inst_23594 = (0);
var state_23629__$1 = (function (){var statearr_23641 = state_23629;
(statearr_23641[(10)] = inst_23609);

(statearr_23641[(7)] = inst_23594);

(statearr_23641[(8)] = inst_23593);

return statearr_23641;
})();
var statearr_23642_23672 = state_23629__$1;
(statearr_23642_23672[(2)] = null);

(statearr_23642_23672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23630 === (9))){
var inst_23593 = (state_23629[(8)]);
var inst_23607 = cljs.core.vec.call(null,inst_23593);
var state_23629__$1 = state_23629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23629__$1,(11),out,inst_23607);
} else {
if((state_val_23630 === (5))){
var inst_23602 = (state_23629[(11)]);
var inst_23594 = (state_23629[(7)]);
var inst_23593 = (state_23629[(8)]);
var inst_23597 = (state_23629[(9)]);
var inst_23601 = (inst_23593[inst_23594] = inst_23597);
var inst_23602__$1 = (inst_23594 + (1));
var inst_23603 = (inst_23602__$1 < n);
var state_23629__$1 = (function (){var statearr_23643 = state_23629;
(statearr_23643[(12)] = inst_23601);

(statearr_23643[(11)] = inst_23602__$1);

return statearr_23643;
})();
if(cljs.core.truth_(inst_23603)){
var statearr_23644_23673 = state_23629__$1;
(statearr_23644_23673[(1)] = (8));

} else {
var statearr_23645_23674 = state_23629__$1;
(statearr_23645_23674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23630 === (14))){
var inst_23622 = (state_23629[(2)]);
var inst_23623 = cljs.core.async.close_BANG_.call(null,out);
var state_23629__$1 = (function (){var statearr_23647 = state_23629;
(statearr_23647[(13)] = inst_23622);

return statearr_23647;
})();
var statearr_23648_23675 = state_23629__$1;
(statearr_23648_23675[(2)] = inst_23623);

(statearr_23648_23675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23630 === (10))){
var inst_23613 = (state_23629[(2)]);
var state_23629__$1 = state_23629;
var statearr_23649_23676 = state_23629__$1;
(statearr_23649_23676[(2)] = inst_23613);

(statearr_23649_23676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23630 === (8))){
var inst_23602 = (state_23629[(11)]);
var inst_23593 = (state_23629[(8)]);
var tmp23646 = inst_23593;
var inst_23593__$1 = tmp23646;
var inst_23594 = inst_23602;
var state_23629__$1 = (function (){var statearr_23650 = state_23629;
(statearr_23650[(7)] = inst_23594);

(statearr_23650[(8)] = inst_23593__$1);

return statearr_23650;
})();
var statearr_23651_23677 = state_23629__$1;
(statearr_23651_23677[(2)] = null);

(statearr_23651_23677[(1)] = (2));


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
});})(c__21003__auto___23663,out))
;
return ((function (switch__20891__auto__,c__21003__auto___23663,out){
return (function() {
var cljs$core$async$state_machine__20892__auto__ = null;
var cljs$core$async$state_machine__20892__auto____0 = (function (){
var statearr_23655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23655[(0)] = cljs$core$async$state_machine__20892__auto__);

(statearr_23655[(1)] = (1));

return statearr_23655;
});
var cljs$core$async$state_machine__20892__auto____1 = (function (state_23629){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_23629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e23656){if((e23656 instanceof Object)){
var ex__20895__auto__ = e23656;
var statearr_23657_23678 = state_23629;
(statearr_23657_23678[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23679 = state_23629;
state_23629 = G__23679;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$state_machine__20892__auto__ = function(state_23629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20892__auto____1.call(this,state_23629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20892__auto____0;
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20892__auto____1;
return cljs$core$async$state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___23663,out))
})();
var state__21005__auto__ = (function (){var statearr_23658 = f__21004__auto__.call(null);
(statearr_23658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___23663);

return statearr_23658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___23663,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23680 = [];
var len__17884__auto___23754 = arguments.length;
var i__17885__auto___23755 = (0);
while(true){
if((i__17885__auto___23755 < len__17884__auto___23754)){
args23680.push((arguments[i__17885__auto___23755]));

var G__23756 = (i__17885__auto___23755 + (1));
i__17885__auto___23755 = G__23756;
continue;
} else {
}
break;
}

var G__23682 = args23680.length;
switch (G__23682) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23680.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21003__auto___23758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___23758,out){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___23758,out){
return (function (state_23724){
var state_val_23725 = (state_23724[(1)]);
if((state_val_23725 === (7))){
var inst_23720 = (state_23724[(2)]);
var state_23724__$1 = state_23724;
var statearr_23726_23759 = state_23724__$1;
(statearr_23726_23759[(2)] = inst_23720);

(statearr_23726_23759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (1))){
var inst_23683 = [];
var inst_23684 = inst_23683;
var inst_23685 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23724__$1 = (function (){var statearr_23727 = state_23724;
(statearr_23727[(7)] = inst_23684);

(statearr_23727[(8)] = inst_23685);

return statearr_23727;
})();
var statearr_23728_23760 = state_23724__$1;
(statearr_23728_23760[(2)] = null);

(statearr_23728_23760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (4))){
var inst_23688 = (state_23724[(9)]);
var inst_23688__$1 = (state_23724[(2)]);
var inst_23689 = (inst_23688__$1 == null);
var inst_23690 = cljs.core.not.call(null,inst_23689);
var state_23724__$1 = (function (){var statearr_23729 = state_23724;
(statearr_23729[(9)] = inst_23688__$1);

return statearr_23729;
})();
if(inst_23690){
var statearr_23730_23761 = state_23724__$1;
(statearr_23730_23761[(1)] = (5));

} else {
var statearr_23731_23762 = state_23724__$1;
(statearr_23731_23762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (15))){
var inst_23714 = (state_23724[(2)]);
var state_23724__$1 = state_23724;
var statearr_23732_23763 = state_23724__$1;
(statearr_23732_23763[(2)] = inst_23714);

(statearr_23732_23763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (13))){
var state_23724__$1 = state_23724;
var statearr_23733_23764 = state_23724__$1;
(statearr_23733_23764[(2)] = null);

(statearr_23733_23764[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (6))){
var inst_23684 = (state_23724[(7)]);
var inst_23709 = inst_23684.length;
var inst_23710 = (inst_23709 > (0));
var state_23724__$1 = state_23724;
if(cljs.core.truth_(inst_23710)){
var statearr_23734_23765 = state_23724__$1;
(statearr_23734_23765[(1)] = (12));

} else {
var statearr_23735_23766 = state_23724__$1;
(statearr_23735_23766[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (3))){
var inst_23722 = (state_23724[(2)]);
var state_23724__$1 = state_23724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23724__$1,inst_23722);
} else {
if((state_val_23725 === (12))){
var inst_23684 = (state_23724[(7)]);
var inst_23712 = cljs.core.vec.call(null,inst_23684);
var state_23724__$1 = state_23724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23724__$1,(15),out,inst_23712);
} else {
if((state_val_23725 === (2))){
var state_23724__$1 = state_23724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23724__$1,(4),ch);
} else {
if((state_val_23725 === (11))){
var inst_23688 = (state_23724[(9)]);
var inst_23692 = (state_23724[(10)]);
var inst_23702 = (state_23724[(2)]);
var inst_23703 = [];
var inst_23704 = inst_23703.push(inst_23688);
var inst_23684 = inst_23703;
var inst_23685 = inst_23692;
var state_23724__$1 = (function (){var statearr_23736 = state_23724;
(statearr_23736[(11)] = inst_23704);

(statearr_23736[(7)] = inst_23684);

(statearr_23736[(8)] = inst_23685);

(statearr_23736[(12)] = inst_23702);

return statearr_23736;
})();
var statearr_23737_23767 = state_23724__$1;
(statearr_23737_23767[(2)] = null);

(statearr_23737_23767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (9))){
var inst_23684 = (state_23724[(7)]);
var inst_23700 = cljs.core.vec.call(null,inst_23684);
var state_23724__$1 = state_23724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23724__$1,(11),out,inst_23700);
} else {
if((state_val_23725 === (5))){
var inst_23688 = (state_23724[(9)]);
var inst_23685 = (state_23724[(8)]);
var inst_23692 = (state_23724[(10)]);
var inst_23692__$1 = f.call(null,inst_23688);
var inst_23693 = cljs.core._EQ_.call(null,inst_23692__$1,inst_23685);
var inst_23694 = cljs.core.keyword_identical_QMARK_.call(null,inst_23685,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23695 = (inst_23693) || (inst_23694);
var state_23724__$1 = (function (){var statearr_23738 = state_23724;
(statearr_23738[(10)] = inst_23692__$1);

return statearr_23738;
})();
if(cljs.core.truth_(inst_23695)){
var statearr_23739_23768 = state_23724__$1;
(statearr_23739_23768[(1)] = (8));

} else {
var statearr_23740_23769 = state_23724__$1;
(statearr_23740_23769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (14))){
var inst_23717 = (state_23724[(2)]);
var inst_23718 = cljs.core.async.close_BANG_.call(null,out);
var state_23724__$1 = (function (){var statearr_23742 = state_23724;
(statearr_23742[(13)] = inst_23717);

return statearr_23742;
})();
var statearr_23743_23770 = state_23724__$1;
(statearr_23743_23770[(2)] = inst_23718);

(statearr_23743_23770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (10))){
var inst_23707 = (state_23724[(2)]);
var state_23724__$1 = state_23724;
var statearr_23744_23771 = state_23724__$1;
(statearr_23744_23771[(2)] = inst_23707);

(statearr_23744_23771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23725 === (8))){
var inst_23688 = (state_23724[(9)]);
var inst_23684 = (state_23724[(7)]);
var inst_23692 = (state_23724[(10)]);
var inst_23697 = inst_23684.push(inst_23688);
var tmp23741 = inst_23684;
var inst_23684__$1 = tmp23741;
var inst_23685 = inst_23692;
var state_23724__$1 = (function (){var statearr_23745 = state_23724;
(statearr_23745[(7)] = inst_23684__$1);

(statearr_23745[(8)] = inst_23685);

(statearr_23745[(14)] = inst_23697);

return statearr_23745;
})();
var statearr_23746_23772 = state_23724__$1;
(statearr_23746_23772[(2)] = null);

(statearr_23746_23772[(1)] = (2));


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
});})(c__21003__auto___23758,out))
;
return ((function (switch__20891__auto__,c__21003__auto___23758,out){
return (function() {
var cljs$core$async$state_machine__20892__auto__ = null;
var cljs$core$async$state_machine__20892__auto____0 = (function (){
var statearr_23750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23750[(0)] = cljs$core$async$state_machine__20892__auto__);

(statearr_23750[(1)] = (1));

return statearr_23750;
});
var cljs$core$async$state_machine__20892__auto____1 = (function (state_23724){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_23724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e23751){if((e23751 instanceof Object)){
var ex__20895__auto__ = e23751;
var statearr_23752_23773 = state_23724;
(statearr_23752_23773[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23774 = state_23724;
state_23724 = G__23774;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
cljs$core$async$state_machine__20892__auto__ = function(state_23724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20892__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20892__auto____1.call(this,state_23724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20892__auto____0;
cljs$core$async$state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20892__auto____1;
return cljs$core$async$state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___23758,out))
})();
var state__21005__auto__ = (function (){var statearr_23753 = f__21004__auto__.call(null);
(statearr_23753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___23758);

return statearr_23753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___23758,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1454020203592