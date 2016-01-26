// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__27958 = cljs.core._EQ_;
var expr__27959 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27958.call(null,"true",expr__27959))){
return true;
} else {
if(cljs.core.truth_(pred__27958.call(null,"false",expr__27959))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27959)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27961__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27962__i = 0, G__27962__a = new Array(arguments.length -  0);
while (G__27962__i < G__27962__a.length) {G__27962__a[G__27962__i] = arguments[G__27962__i + 0]; ++G__27962__i;}
  args = new cljs.core.IndexedSeq(G__27962__a,0);
} 
return G__27961__delegate.call(this,args);};
G__27961.cljs$lang$maxFixedArity = 0;
G__27961.cljs$lang$applyTo = (function (arglist__27963){
var args = cljs.core.seq(arglist__27963);
return G__27961__delegate(args);
});
G__27961.cljs$core$IFn$_invoke$arity$variadic = G__27961__delegate;
return G__27961;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27964){
var map__27967 = p__27964;
var map__27967__$1 = ((((!((map__27967 == null)))?((((map__27967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27967):map__27967);
var message = cljs.core.get.call(null,map__27967__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27967__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16814__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18952__auto___28129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___28129,ch){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___28129,ch){
return (function (state_28098){
var state_val_28099 = (state_28098[(1)]);
if((state_val_28099 === (7))){
var inst_28094 = (state_28098[(2)]);
var state_28098__$1 = state_28098;
var statearr_28100_28130 = state_28098__$1;
(statearr_28100_28130[(2)] = inst_28094);

(statearr_28100_28130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (1))){
var state_28098__$1 = state_28098;
var statearr_28101_28131 = state_28098__$1;
(statearr_28101_28131[(2)] = null);

(statearr_28101_28131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (4))){
var inst_28051 = (state_28098[(7)]);
var inst_28051__$1 = (state_28098[(2)]);
var state_28098__$1 = (function (){var statearr_28102 = state_28098;
(statearr_28102[(7)] = inst_28051__$1);

return statearr_28102;
})();
if(cljs.core.truth_(inst_28051__$1)){
var statearr_28103_28132 = state_28098__$1;
(statearr_28103_28132[(1)] = (5));

} else {
var statearr_28104_28133 = state_28098__$1;
(statearr_28104_28133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (15))){
var inst_28058 = (state_28098[(8)]);
var inst_28073 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28058);
var inst_28074 = cljs.core.first.call(null,inst_28073);
var inst_28075 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28074);
var inst_28076 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28075)].join('');
var inst_28077 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28076);
var state_28098__$1 = state_28098;
var statearr_28105_28134 = state_28098__$1;
(statearr_28105_28134[(2)] = inst_28077);

(statearr_28105_28134[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (13))){
var inst_28082 = (state_28098[(2)]);
var state_28098__$1 = state_28098;
var statearr_28106_28135 = state_28098__$1;
(statearr_28106_28135[(2)] = inst_28082);

(statearr_28106_28135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (6))){
var state_28098__$1 = state_28098;
var statearr_28107_28136 = state_28098__$1;
(statearr_28107_28136[(2)] = null);

(statearr_28107_28136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (17))){
var inst_28080 = (state_28098[(2)]);
var state_28098__$1 = state_28098;
var statearr_28108_28137 = state_28098__$1;
(statearr_28108_28137[(2)] = inst_28080);

(statearr_28108_28137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (3))){
var inst_28096 = (state_28098[(2)]);
var state_28098__$1 = state_28098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28098__$1,inst_28096);
} else {
if((state_val_28099 === (12))){
var inst_28057 = (state_28098[(9)]);
var inst_28071 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28057,opts);
var state_28098__$1 = state_28098;
if(cljs.core.truth_(inst_28071)){
var statearr_28109_28138 = state_28098__$1;
(statearr_28109_28138[(1)] = (15));

} else {
var statearr_28110_28139 = state_28098__$1;
(statearr_28110_28139[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (2))){
var state_28098__$1 = state_28098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28098__$1,(4),ch);
} else {
if((state_val_28099 === (11))){
var inst_28058 = (state_28098[(8)]);
var inst_28063 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28064 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28058);
var inst_28065 = cljs.core.async.timeout.call(null,(1000));
var inst_28066 = [inst_28064,inst_28065];
var inst_28067 = (new cljs.core.PersistentVector(null,2,(5),inst_28063,inst_28066,null));
var state_28098__$1 = state_28098;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28098__$1,(14),inst_28067);
} else {
if((state_val_28099 === (9))){
var inst_28058 = (state_28098[(8)]);
var inst_28084 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28085 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28058);
var inst_28086 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28085);
var inst_28087 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28086)].join('');
var inst_28088 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28087);
var state_28098__$1 = (function (){var statearr_28111 = state_28098;
(statearr_28111[(10)] = inst_28084);

return statearr_28111;
})();
var statearr_28112_28140 = state_28098__$1;
(statearr_28112_28140[(2)] = inst_28088);

(statearr_28112_28140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (5))){
var inst_28051 = (state_28098[(7)]);
var inst_28053 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28054 = (new cljs.core.PersistentArrayMap(null,2,inst_28053,null));
var inst_28055 = (new cljs.core.PersistentHashSet(null,inst_28054,null));
var inst_28056 = figwheel.client.focus_msgs.call(null,inst_28055,inst_28051);
var inst_28057 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28056);
var inst_28058 = cljs.core.first.call(null,inst_28056);
var inst_28059 = figwheel.client.autoload_QMARK_.call(null);
var state_28098__$1 = (function (){var statearr_28113 = state_28098;
(statearr_28113[(9)] = inst_28057);

(statearr_28113[(8)] = inst_28058);

return statearr_28113;
})();
if(cljs.core.truth_(inst_28059)){
var statearr_28114_28141 = state_28098__$1;
(statearr_28114_28141[(1)] = (8));

} else {
var statearr_28115_28142 = state_28098__$1;
(statearr_28115_28142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (14))){
var inst_28069 = (state_28098[(2)]);
var state_28098__$1 = state_28098;
var statearr_28116_28143 = state_28098__$1;
(statearr_28116_28143[(2)] = inst_28069);

(statearr_28116_28143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (16))){
var state_28098__$1 = state_28098;
var statearr_28117_28144 = state_28098__$1;
(statearr_28117_28144[(2)] = null);

(statearr_28117_28144[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (10))){
var inst_28090 = (state_28098[(2)]);
var state_28098__$1 = (function (){var statearr_28118 = state_28098;
(statearr_28118[(11)] = inst_28090);

return statearr_28118;
})();
var statearr_28119_28145 = state_28098__$1;
(statearr_28119_28145[(2)] = null);

(statearr_28119_28145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (8))){
var inst_28057 = (state_28098[(9)]);
var inst_28061 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28057,opts);
var state_28098__$1 = state_28098;
if(cljs.core.truth_(inst_28061)){
var statearr_28120_28146 = state_28098__$1;
(statearr_28120_28146[(1)] = (11));

} else {
var statearr_28121_28147 = state_28098__$1;
(statearr_28121_28147[(1)] = (12));

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
});})(c__18952__auto___28129,ch))
;
return ((function (switch__18931__auto__,c__18952__auto___28129,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18932__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18932__auto____0 = (function (){
var statearr_28125 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28125[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18932__auto__);

(statearr_28125[(1)] = (1));

return statearr_28125;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18932__auto____1 = (function (state_28098){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_28098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e28126){if((e28126 instanceof Object)){
var ex__18935__auto__ = e28126;
var statearr_28127_28148 = state_28098;
(statearr_28127_28148[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28149 = state_28098;
state_28098 = G__28149;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18932__auto__ = function(state_28098){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18932__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18932__auto____1.call(this,state_28098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18932__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18932__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___28129,ch))
})();
var state__18954__auto__ = (function (){var statearr_28128 = f__18953__auto__.call(null);
(statearr_28128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___28129);

return statearr_28128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___28129,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28150_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28150_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28157 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28157){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28155 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28156 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28155,_STAR_print_newline_STAR_28156,base_path_28157){
return (function() { 
var G__28158__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28159__i = 0, G__28159__a = new Array(arguments.length -  0);
while (G__28159__i < G__28159__a.length) {G__28159__a[G__28159__i] = arguments[G__28159__i + 0]; ++G__28159__i;}
  args = new cljs.core.IndexedSeq(G__28159__a,0);
} 
return G__28158__delegate.call(this,args);};
G__28158.cljs$lang$maxFixedArity = 0;
G__28158.cljs$lang$applyTo = (function (arglist__28160){
var args = cljs.core.seq(arglist__28160);
return G__28158__delegate(args);
});
G__28158.cljs$core$IFn$_invoke$arity$variadic = G__28158__delegate;
return G__28158;
})()
;})(_STAR_print_fn_STAR_28155,_STAR_print_newline_STAR_28156,base_path_28157))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28156;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28155;
}}catch (e28154){if((e28154 instanceof Error)){
var e = e28154;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28157], null));
} else {
var e = e28154;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28157))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28161){
var map__28168 = p__28161;
var map__28168__$1 = ((((!((map__28168 == null)))?((((map__28168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28168):map__28168);
var opts = map__28168__$1;
var build_id = cljs.core.get.call(null,map__28168__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28168,map__28168__$1,opts,build_id){
return (function (p__28170){
var vec__28171 = p__28170;
var map__28172 = cljs.core.nth.call(null,vec__28171,(0),null);
var map__28172__$1 = ((((!((map__28172 == null)))?((((map__28172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28172):map__28172);
var msg = map__28172__$1;
var msg_name = cljs.core.get.call(null,map__28172__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28171,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28171,map__28172,map__28172__$1,msg,msg_name,_,map__28168,map__28168__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28171,map__28172,map__28172__$1,msg,msg_name,_,map__28168,map__28168__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28168,map__28168__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28178){
var vec__28179 = p__28178;
var map__28180 = cljs.core.nth.call(null,vec__28179,(0),null);
var map__28180__$1 = ((((!((map__28180 == null)))?((((map__28180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28180):map__28180);
var msg = map__28180__$1;
var msg_name = cljs.core.get.call(null,map__28180__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28179,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28182){
var map__28192 = p__28182;
var map__28192__$1 = ((((!((map__28192 == null)))?((((map__28192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28192):map__28192);
var on_compile_warning = cljs.core.get.call(null,map__28192__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28192__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28192,map__28192__$1,on_compile_warning,on_compile_fail){
return (function (p__28194){
var vec__28195 = p__28194;
var map__28196 = cljs.core.nth.call(null,vec__28195,(0),null);
var map__28196__$1 = ((((!((map__28196 == null)))?((((map__28196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28196):map__28196);
var msg = map__28196__$1;
var msg_name = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28195,(1));
var pred__28198 = cljs.core._EQ_;
var expr__28199 = msg_name;
if(cljs.core.truth_(pred__28198.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28199))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28198.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28199))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28192,map__28192__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto__,msg_hist,msg_names,msg){
return (function (state_28415){
var state_val_28416 = (state_28415[(1)]);
if((state_val_28416 === (7))){
var inst_28339 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
if(cljs.core.truth_(inst_28339)){
var statearr_28417_28463 = state_28415__$1;
(statearr_28417_28463[(1)] = (8));

} else {
var statearr_28418_28464 = state_28415__$1;
(statearr_28418_28464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (20))){
var inst_28409 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28419_28465 = state_28415__$1;
(statearr_28419_28465[(2)] = inst_28409);

(statearr_28419_28465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (27))){
var inst_28405 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28420_28466 = state_28415__$1;
(statearr_28420_28466[(2)] = inst_28405);

(statearr_28420_28466[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (1))){
var inst_28332 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28415__$1 = state_28415;
if(cljs.core.truth_(inst_28332)){
var statearr_28421_28467 = state_28415__$1;
(statearr_28421_28467[(1)] = (2));

} else {
var statearr_28422_28468 = state_28415__$1;
(statearr_28422_28468[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (24))){
var inst_28407 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28423_28469 = state_28415__$1;
(statearr_28423_28469[(2)] = inst_28407);

(statearr_28423_28469[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (4))){
var inst_28413 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28415__$1,inst_28413);
} else {
if((state_val_28416 === (15))){
var inst_28411 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28424_28470 = state_28415__$1;
(statearr_28424_28470[(2)] = inst_28411);

(statearr_28424_28470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (21))){
var inst_28370 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28425_28471 = state_28415__$1;
(statearr_28425_28471[(2)] = inst_28370);

(statearr_28425_28471[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (31))){
var inst_28394 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28415__$1 = state_28415;
if(cljs.core.truth_(inst_28394)){
var statearr_28426_28472 = state_28415__$1;
(statearr_28426_28472[(1)] = (34));

} else {
var statearr_28427_28473 = state_28415__$1;
(statearr_28427_28473[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (32))){
var inst_28403 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28428_28474 = state_28415__$1;
(statearr_28428_28474[(2)] = inst_28403);

(statearr_28428_28474[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (33))){
var inst_28392 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28429_28475 = state_28415__$1;
(statearr_28429_28475[(2)] = inst_28392);

(statearr_28429_28475[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (13))){
var inst_28353 = figwheel.client.heads_up.clear.call(null);
var state_28415__$1 = state_28415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28415__$1,(16),inst_28353);
} else {
if((state_val_28416 === (22))){
var inst_28374 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28375 = figwheel.client.heads_up.append_message.call(null,inst_28374);
var state_28415__$1 = state_28415;
var statearr_28430_28476 = state_28415__$1;
(statearr_28430_28476[(2)] = inst_28375);

(statearr_28430_28476[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (36))){
var inst_28401 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28431_28477 = state_28415__$1;
(statearr_28431_28477[(2)] = inst_28401);

(statearr_28431_28477[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (29))){
var inst_28385 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28432_28478 = state_28415__$1;
(statearr_28432_28478[(2)] = inst_28385);

(statearr_28432_28478[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (6))){
var inst_28334 = (state_28415[(7)]);
var state_28415__$1 = state_28415;
var statearr_28433_28479 = state_28415__$1;
(statearr_28433_28479[(2)] = inst_28334);

(statearr_28433_28479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (28))){
var inst_28381 = (state_28415[(2)]);
var inst_28382 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28383 = figwheel.client.heads_up.display_warning.call(null,inst_28382);
var state_28415__$1 = (function (){var statearr_28434 = state_28415;
(statearr_28434[(8)] = inst_28381);

return statearr_28434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28415__$1,(29),inst_28383);
} else {
if((state_val_28416 === (25))){
var inst_28379 = figwheel.client.heads_up.clear.call(null);
var state_28415__$1 = state_28415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28415__$1,(28),inst_28379);
} else {
if((state_val_28416 === (34))){
var inst_28396 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28415__$1 = state_28415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28415__$1,(37),inst_28396);
} else {
if((state_val_28416 === (17))){
var inst_28361 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28435_28480 = state_28415__$1;
(statearr_28435_28480[(2)] = inst_28361);

(statearr_28435_28480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (3))){
var inst_28351 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28415__$1 = state_28415;
if(cljs.core.truth_(inst_28351)){
var statearr_28436_28481 = state_28415__$1;
(statearr_28436_28481[(1)] = (13));

} else {
var statearr_28437_28482 = state_28415__$1;
(statearr_28437_28482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (12))){
var inst_28347 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28438_28483 = state_28415__$1;
(statearr_28438_28483[(2)] = inst_28347);

(statearr_28438_28483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (2))){
var inst_28334 = (state_28415[(7)]);
var inst_28334__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28415__$1 = (function (){var statearr_28439 = state_28415;
(statearr_28439[(7)] = inst_28334__$1);

return statearr_28439;
})();
if(cljs.core.truth_(inst_28334__$1)){
var statearr_28440_28484 = state_28415__$1;
(statearr_28440_28484[(1)] = (5));

} else {
var statearr_28441_28485 = state_28415__$1;
(statearr_28441_28485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (23))){
var inst_28377 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28415__$1 = state_28415;
if(cljs.core.truth_(inst_28377)){
var statearr_28442_28486 = state_28415__$1;
(statearr_28442_28486[(1)] = (25));

} else {
var statearr_28443_28487 = state_28415__$1;
(statearr_28443_28487[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (35))){
var state_28415__$1 = state_28415;
var statearr_28444_28488 = state_28415__$1;
(statearr_28444_28488[(2)] = null);

(statearr_28444_28488[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (19))){
var inst_28372 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28415__$1 = state_28415;
if(cljs.core.truth_(inst_28372)){
var statearr_28445_28489 = state_28415__$1;
(statearr_28445_28489[(1)] = (22));

} else {
var statearr_28446_28490 = state_28415__$1;
(statearr_28446_28490[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (11))){
var inst_28343 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28447_28491 = state_28415__$1;
(statearr_28447_28491[(2)] = inst_28343);

(statearr_28447_28491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (9))){
var inst_28345 = figwheel.client.heads_up.clear.call(null);
var state_28415__$1 = state_28415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28415__$1,(12),inst_28345);
} else {
if((state_val_28416 === (5))){
var inst_28336 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28415__$1 = state_28415;
var statearr_28448_28492 = state_28415__$1;
(statearr_28448_28492[(2)] = inst_28336);

(statearr_28448_28492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (14))){
var inst_28363 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28415__$1 = state_28415;
if(cljs.core.truth_(inst_28363)){
var statearr_28449_28493 = state_28415__$1;
(statearr_28449_28493[(1)] = (18));

} else {
var statearr_28450_28494 = state_28415__$1;
(statearr_28450_28494[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (26))){
var inst_28387 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28415__$1 = state_28415;
if(cljs.core.truth_(inst_28387)){
var statearr_28451_28495 = state_28415__$1;
(statearr_28451_28495[(1)] = (30));

} else {
var statearr_28452_28496 = state_28415__$1;
(statearr_28452_28496[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (16))){
var inst_28355 = (state_28415[(2)]);
var inst_28356 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28357 = figwheel.client.format_messages.call(null,inst_28356);
var inst_28358 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28359 = figwheel.client.heads_up.display_error.call(null,inst_28357,inst_28358);
var state_28415__$1 = (function (){var statearr_28453 = state_28415;
(statearr_28453[(9)] = inst_28355);

return statearr_28453;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28415__$1,(17),inst_28359);
} else {
if((state_val_28416 === (30))){
var inst_28389 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28390 = figwheel.client.heads_up.display_warning.call(null,inst_28389);
var state_28415__$1 = state_28415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28415__$1,(33),inst_28390);
} else {
if((state_val_28416 === (10))){
var inst_28349 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28454_28497 = state_28415__$1;
(statearr_28454_28497[(2)] = inst_28349);

(statearr_28454_28497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (18))){
var inst_28365 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28366 = figwheel.client.format_messages.call(null,inst_28365);
var inst_28367 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28368 = figwheel.client.heads_up.display_error.call(null,inst_28366,inst_28367);
var state_28415__$1 = state_28415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28415__$1,(21),inst_28368);
} else {
if((state_val_28416 === (37))){
var inst_28398 = (state_28415[(2)]);
var state_28415__$1 = state_28415;
var statearr_28455_28498 = state_28415__$1;
(statearr_28455_28498[(2)] = inst_28398);

(statearr_28455_28498[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28416 === (8))){
var inst_28341 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28415__$1 = state_28415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28415__$1,(11),inst_28341);
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
});})(c__18952__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18931__auto__,c__18952__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18932__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18932__auto____0 = (function (){
var statearr_28459 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28459[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18932__auto__);

(statearr_28459[(1)] = (1));

return statearr_28459;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18932__auto____1 = (function (state_28415){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_28415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e28460){if((e28460 instanceof Object)){
var ex__18935__auto__ = e28460;
var statearr_28461_28499 = state_28415;
(statearr_28461_28499[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28500 = state_28415;
state_28415 = G__28500;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18932__auto__ = function(state_28415){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18932__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18932__auto____1.call(this,state_28415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18932__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18932__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto__,msg_hist,msg_names,msg))
})();
var state__18954__auto__ = (function (){var statearr_28462 = f__18953__auto__.call(null);
(statearr_28462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto__);

return statearr_28462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto__,msg_hist,msg_names,msg))
);

return c__18952__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18952__auto___28563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto___28563,ch){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto___28563,ch){
return (function (state_28546){
var state_val_28547 = (state_28546[(1)]);
if((state_val_28547 === (1))){
var state_28546__$1 = state_28546;
var statearr_28548_28564 = state_28546__$1;
(statearr_28548_28564[(2)] = null);

(statearr_28548_28564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28547 === (2))){
var state_28546__$1 = state_28546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28546__$1,(4),ch);
} else {
if((state_val_28547 === (3))){
var inst_28544 = (state_28546[(2)]);
var state_28546__$1 = state_28546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28546__$1,inst_28544);
} else {
if((state_val_28547 === (4))){
var inst_28534 = (state_28546[(7)]);
var inst_28534__$1 = (state_28546[(2)]);
var state_28546__$1 = (function (){var statearr_28549 = state_28546;
(statearr_28549[(7)] = inst_28534__$1);

return statearr_28549;
})();
if(cljs.core.truth_(inst_28534__$1)){
var statearr_28550_28565 = state_28546__$1;
(statearr_28550_28565[(1)] = (5));

} else {
var statearr_28551_28566 = state_28546__$1;
(statearr_28551_28566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28547 === (5))){
var inst_28534 = (state_28546[(7)]);
var inst_28536 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28534);
var state_28546__$1 = state_28546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28546__$1,(8),inst_28536);
} else {
if((state_val_28547 === (6))){
var state_28546__$1 = state_28546;
var statearr_28552_28567 = state_28546__$1;
(statearr_28552_28567[(2)] = null);

(statearr_28552_28567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28547 === (7))){
var inst_28542 = (state_28546[(2)]);
var state_28546__$1 = state_28546;
var statearr_28553_28568 = state_28546__$1;
(statearr_28553_28568[(2)] = inst_28542);

(statearr_28553_28568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28547 === (8))){
var inst_28538 = (state_28546[(2)]);
var state_28546__$1 = (function (){var statearr_28554 = state_28546;
(statearr_28554[(8)] = inst_28538);

return statearr_28554;
})();
var statearr_28555_28569 = state_28546__$1;
(statearr_28555_28569[(2)] = null);

(statearr_28555_28569[(1)] = (2));


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
});})(c__18952__auto___28563,ch))
;
return ((function (switch__18931__auto__,c__18952__auto___28563,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18932__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18932__auto____0 = (function (){
var statearr_28559 = [null,null,null,null,null,null,null,null,null];
(statearr_28559[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18932__auto__);

(statearr_28559[(1)] = (1));

return statearr_28559;
});
var figwheel$client$heads_up_plugin_$_state_machine__18932__auto____1 = (function (state_28546){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_28546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e28560){if((e28560 instanceof Object)){
var ex__18935__auto__ = e28560;
var statearr_28561_28570 = state_28546;
(statearr_28561_28570[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28571 = state_28546;
state_28546 = G__28571;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18932__auto__ = function(state_28546){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18932__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18932__auto____1.call(this,state_28546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18932__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18932__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto___28563,ch))
})();
var state__18954__auto__ = (function (){var statearr_28562 = f__18953__auto__.call(null);
(statearr_28562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto___28563);

return statearr_28562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto___28563,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18952__auto__){
return (function (){
var f__18953__auto__ = (function (){var switch__18931__auto__ = ((function (c__18952__auto__){
return (function (state_28592){
var state_val_28593 = (state_28592[(1)]);
if((state_val_28593 === (1))){
var inst_28587 = cljs.core.async.timeout.call(null,(3000));
var state_28592__$1 = state_28592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28592__$1,(2),inst_28587);
} else {
if((state_val_28593 === (2))){
var inst_28589 = (state_28592[(2)]);
var inst_28590 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28592__$1 = (function (){var statearr_28594 = state_28592;
(statearr_28594[(7)] = inst_28589);

return statearr_28594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28592__$1,inst_28590);
} else {
return null;
}
}
});})(c__18952__auto__))
;
return ((function (switch__18931__auto__,c__18952__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18932__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18932__auto____0 = (function (){
var statearr_28598 = [null,null,null,null,null,null,null,null];
(statearr_28598[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18932__auto__);

(statearr_28598[(1)] = (1));

return statearr_28598;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18932__auto____1 = (function (state_28592){
while(true){
var ret_value__18933__auto__ = (function (){try{while(true){
var result__18934__auto__ = switch__18931__auto__.call(null,state_28592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18934__auto__;
}
break;
}
}catch (e28599){if((e28599 instanceof Object)){
var ex__18935__auto__ = e28599;
var statearr_28600_28602 = state_28592;
(statearr_28600_28602[(5)] = ex__18935__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28603 = state_28592;
state_28592 = G__28603;
continue;
} else {
return ret_value__18933__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18932__auto__ = function(state_28592){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18932__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18932__auto____1.call(this,state_28592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18932__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18932__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18932__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18932__auto__;
})()
;})(switch__18931__auto__,c__18952__auto__))
})();
var state__18954__auto__ = (function (){var statearr_28601 = f__18953__auto__.call(null);
(statearr_28601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18952__auto__);

return statearr_28601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18954__auto__);
});})(c__18952__auto__))
);

return c__18952__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28604){
var map__28611 = p__28604;
var map__28611__$1 = ((((!((map__28611 == null)))?((((map__28611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28611):map__28611);
var ed = map__28611__$1;
var formatted_exception = cljs.core.get.call(null,map__28611__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28611__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28611__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28613_28617 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28614_28618 = null;
var count__28615_28619 = (0);
var i__28616_28620 = (0);
while(true){
if((i__28616_28620 < count__28615_28619)){
var msg_28621 = cljs.core._nth.call(null,chunk__28614_28618,i__28616_28620);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28621);

var G__28622 = seq__28613_28617;
var G__28623 = chunk__28614_28618;
var G__28624 = count__28615_28619;
var G__28625 = (i__28616_28620 + (1));
seq__28613_28617 = G__28622;
chunk__28614_28618 = G__28623;
count__28615_28619 = G__28624;
i__28616_28620 = G__28625;
continue;
} else {
var temp__4425__auto___28626 = cljs.core.seq.call(null,seq__28613_28617);
if(temp__4425__auto___28626){
var seq__28613_28627__$1 = temp__4425__auto___28626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28613_28627__$1)){
var c__17629__auto___28628 = cljs.core.chunk_first.call(null,seq__28613_28627__$1);
var G__28629 = cljs.core.chunk_rest.call(null,seq__28613_28627__$1);
var G__28630 = c__17629__auto___28628;
var G__28631 = cljs.core.count.call(null,c__17629__auto___28628);
var G__28632 = (0);
seq__28613_28617 = G__28629;
chunk__28614_28618 = G__28630;
count__28615_28619 = G__28631;
i__28616_28620 = G__28632;
continue;
} else {
var msg_28633 = cljs.core.first.call(null,seq__28613_28627__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28633);

var G__28634 = cljs.core.next.call(null,seq__28613_28627__$1);
var G__28635 = null;
var G__28636 = (0);
var G__28637 = (0);
seq__28613_28617 = G__28634;
chunk__28614_28618 = G__28635;
count__28615_28619 = G__28636;
i__28616_28620 = G__28637;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28638){
var map__28641 = p__28638;
var map__28641__$1 = ((((!((map__28641 == null)))?((((map__28641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28641):map__28641);
var w = map__28641__$1;
var message = cljs.core.get.call(null,map__28641__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16814__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28649 = cljs.core.seq.call(null,plugins);
var chunk__28650 = null;
var count__28651 = (0);
var i__28652 = (0);
while(true){
if((i__28652 < count__28651)){
var vec__28653 = cljs.core._nth.call(null,chunk__28650,i__28652);
var k = cljs.core.nth.call(null,vec__28653,(0),null);
var plugin = cljs.core.nth.call(null,vec__28653,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28655 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28649,chunk__28650,count__28651,i__28652,pl_28655,vec__28653,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28655.call(null,msg_hist);
});})(seq__28649,chunk__28650,count__28651,i__28652,pl_28655,vec__28653,k,plugin))
);
} else {
}

var G__28656 = seq__28649;
var G__28657 = chunk__28650;
var G__28658 = count__28651;
var G__28659 = (i__28652 + (1));
seq__28649 = G__28656;
chunk__28650 = G__28657;
count__28651 = G__28658;
i__28652 = G__28659;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28649);
if(temp__4425__auto__){
var seq__28649__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28649__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__28649__$1);
var G__28660 = cljs.core.chunk_rest.call(null,seq__28649__$1);
var G__28661 = c__17629__auto__;
var G__28662 = cljs.core.count.call(null,c__17629__auto__);
var G__28663 = (0);
seq__28649 = G__28660;
chunk__28650 = G__28661;
count__28651 = G__28662;
i__28652 = G__28663;
continue;
} else {
var vec__28654 = cljs.core.first.call(null,seq__28649__$1);
var k = cljs.core.nth.call(null,vec__28654,(0),null);
var plugin = cljs.core.nth.call(null,vec__28654,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28664 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28649,chunk__28650,count__28651,i__28652,pl_28664,vec__28654,k,plugin,seq__28649__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28664.call(null,msg_hist);
});})(seq__28649,chunk__28650,count__28651,i__28652,pl_28664,vec__28654,k,plugin,seq__28649__$1,temp__4425__auto__))
);
} else {
}

var G__28665 = cljs.core.next.call(null,seq__28649__$1);
var G__28666 = null;
var G__28667 = (0);
var G__28668 = (0);
seq__28649 = G__28665;
chunk__28650 = G__28666;
count__28651 = G__28667;
i__28652 = G__28668;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args28669 = [];
var len__17884__auto___28672 = arguments.length;
var i__17885__auto___28673 = (0);
while(true){
if((i__17885__auto___28673 < len__17884__auto___28672)){
args28669.push((arguments[i__17885__auto___28673]));

var G__28674 = (i__17885__auto___28673 + (1));
i__17885__auto___28673 = G__28674;
continue;
} else {
}
break;
}

var G__28671 = args28669.length;
switch (G__28671) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28669.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17891__auto__ = [];
var len__17884__auto___28680 = arguments.length;
var i__17885__auto___28681 = (0);
while(true){
if((i__17885__auto___28681 < len__17884__auto___28680)){
args__17891__auto__.push((arguments[i__17885__auto___28681]));

var G__28682 = (i__17885__auto___28681 + (1));
i__17885__auto___28681 = G__28682;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28677){
var map__28678 = p__28677;
var map__28678__$1 = ((((!((map__28678 == null)))?((((map__28678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28678):map__28678);
var opts = map__28678__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28676){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28676));
});

//# sourceMappingURL=client.js.map?rel=1453769945372