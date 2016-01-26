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
var pred__26817 = cljs.core._EQ_;
var expr__26818 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26817.call(null,"true",expr__26818))){
return true;
} else {
if(cljs.core.truth_(pred__26817.call(null,"false",expr__26818))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26818)].join('')));
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
var G__26820__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26821__i = 0, G__26821__a = new Array(arguments.length -  0);
while (G__26821__i < G__26821__a.length) {G__26821__a[G__26821__i] = arguments[G__26821__i + 0]; ++G__26821__i;}
  args = new cljs.core.IndexedSeq(G__26821__a,0);
} 
return G__26820__delegate.call(this,args);};
G__26820.cljs$lang$maxFixedArity = 0;
G__26820.cljs$lang$applyTo = (function (arglist__26822){
var args = cljs.core.seq(arglist__26822);
return G__26820__delegate(args);
});
G__26820.cljs$core$IFn$_invoke$arity$variadic = G__26820__delegate;
return G__26820;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26823){
var map__26826 = p__26823;
var map__26826__$1 = ((((!((map__26826 == null)))?((((map__26826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26826):map__26826);
var message = cljs.core.get.call(null,map__26826__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26826__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__21003__auto___26988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___26988,ch){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___26988,ch){
return (function (state_26957){
var state_val_26958 = (state_26957[(1)]);
if((state_val_26958 === (7))){
var inst_26953 = (state_26957[(2)]);
var state_26957__$1 = state_26957;
var statearr_26959_26989 = state_26957__$1;
(statearr_26959_26989[(2)] = inst_26953);

(statearr_26959_26989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (1))){
var state_26957__$1 = state_26957;
var statearr_26960_26990 = state_26957__$1;
(statearr_26960_26990[(2)] = null);

(statearr_26960_26990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (4))){
var inst_26910 = (state_26957[(7)]);
var inst_26910__$1 = (state_26957[(2)]);
var state_26957__$1 = (function (){var statearr_26961 = state_26957;
(statearr_26961[(7)] = inst_26910__$1);

return statearr_26961;
})();
if(cljs.core.truth_(inst_26910__$1)){
var statearr_26962_26991 = state_26957__$1;
(statearr_26962_26991[(1)] = (5));

} else {
var statearr_26963_26992 = state_26957__$1;
(statearr_26963_26992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (15))){
var inst_26917 = (state_26957[(8)]);
var inst_26932 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26917);
var inst_26933 = cljs.core.first.call(null,inst_26932);
var inst_26934 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26933);
var inst_26935 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26934)].join('');
var inst_26936 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26935);
var state_26957__$1 = state_26957;
var statearr_26964_26993 = state_26957__$1;
(statearr_26964_26993[(2)] = inst_26936);

(statearr_26964_26993[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (13))){
var inst_26941 = (state_26957[(2)]);
var state_26957__$1 = state_26957;
var statearr_26965_26994 = state_26957__$1;
(statearr_26965_26994[(2)] = inst_26941);

(statearr_26965_26994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (6))){
var state_26957__$1 = state_26957;
var statearr_26966_26995 = state_26957__$1;
(statearr_26966_26995[(2)] = null);

(statearr_26966_26995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (17))){
var inst_26939 = (state_26957[(2)]);
var state_26957__$1 = state_26957;
var statearr_26967_26996 = state_26957__$1;
(statearr_26967_26996[(2)] = inst_26939);

(statearr_26967_26996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (3))){
var inst_26955 = (state_26957[(2)]);
var state_26957__$1 = state_26957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26957__$1,inst_26955);
} else {
if((state_val_26958 === (12))){
var inst_26916 = (state_26957[(9)]);
var inst_26930 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26916,opts);
var state_26957__$1 = state_26957;
if(cljs.core.truth_(inst_26930)){
var statearr_26968_26997 = state_26957__$1;
(statearr_26968_26997[(1)] = (15));

} else {
var statearr_26969_26998 = state_26957__$1;
(statearr_26969_26998[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (2))){
var state_26957__$1 = state_26957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26957__$1,(4),ch);
} else {
if((state_val_26958 === (11))){
var inst_26917 = (state_26957[(8)]);
var inst_26922 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26923 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26917);
var inst_26924 = cljs.core.async.timeout.call(null,(1000));
var inst_26925 = [inst_26923,inst_26924];
var inst_26926 = (new cljs.core.PersistentVector(null,2,(5),inst_26922,inst_26925,null));
var state_26957__$1 = state_26957;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26957__$1,(14),inst_26926);
} else {
if((state_val_26958 === (9))){
var inst_26917 = (state_26957[(8)]);
var inst_26943 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26944 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26917);
var inst_26945 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26944);
var inst_26946 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26945)].join('');
var inst_26947 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26946);
var state_26957__$1 = (function (){var statearr_26970 = state_26957;
(statearr_26970[(10)] = inst_26943);

return statearr_26970;
})();
var statearr_26971_26999 = state_26957__$1;
(statearr_26971_26999[(2)] = inst_26947);

(statearr_26971_26999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (5))){
var inst_26910 = (state_26957[(7)]);
var inst_26912 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26913 = (new cljs.core.PersistentArrayMap(null,2,inst_26912,null));
var inst_26914 = (new cljs.core.PersistentHashSet(null,inst_26913,null));
var inst_26915 = figwheel.client.focus_msgs.call(null,inst_26914,inst_26910);
var inst_26916 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26915);
var inst_26917 = cljs.core.first.call(null,inst_26915);
var inst_26918 = figwheel.client.autoload_QMARK_.call(null);
var state_26957__$1 = (function (){var statearr_26972 = state_26957;
(statearr_26972[(9)] = inst_26916);

(statearr_26972[(8)] = inst_26917);

return statearr_26972;
})();
if(cljs.core.truth_(inst_26918)){
var statearr_26973_27000 = state_26957__$1;
(statearr_26973_27000[(1)] = (8));

} else {
var statearr_26974_27001 = state_26957__$1;
(statearr_26974_27001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (14))){
var inst_26928 = (state_26957[(2)]);
var state_26957__$1 = state_26957;
var statearr_26975_27002 = state_26957__$1;
(statearr_26975_27002[(2)] = inst_26928);

(statearr_26975_27002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (16))){
var state_26957__$1 = state_26957;
var statearr_26976_27003 = state_26957__$1;
(statearr_26976_27003[(2)] = null);

(statearr_26976_27003[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (10))){
var inst_26949 = (state_26957[(2)]);
var state_26957__$1 = (function (){var statearr_26977 = state_26957;
(statearr_26977[(11)] = inst_26949);

return statearr_26977;
})();
var statearr_26978_27004 = state_26957__$1;
(statearr_26978_27004[(2)] = null);

(statearr_26978_27004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26958 === (8))){
var inst_26916 = (state_26957[(9)]);
var inst_26920 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26916,opts);
var state_26957__$1 = state_26957;
if(cljs.core.truth_(inst_26920)){
var statearr_26979_27005 = state_26957__$1;
(statearr_26979_27005[(1)] = (11));

} else {
var statearr_26980_27006 = state_26957__$1;
(statearr_26980_27006[(1)] = (12));

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
});})(c__21003__auto___26988,ch))
;
return ((function (switch__20891__auto__,c__21003__auto___26988,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20892__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20892__auto____0 = (function (){
var statearr_26984 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26984[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20892__auto__);

(statearr_26984[(1)] = (1));

return statearr_26984;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20892__auto____1 = (function (state_26957){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_26957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e26985){if((e26985 instanceof Object)){
var ex__20895__auto__ = e26985;
var statearr_26986_27007 = state_26957;
(statearr_26986_27007[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27008 = state_26957;
state_26957 = G__27008;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20892__auto__ = function(state_26957){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20892__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20892__auto____1.call(this,state_26957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20892__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20892__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___26988,ch))
})();
var state__21005__auto__ = (function (){var statearr_26987 = f__21004__auto__.call(null);
(statearr_26987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___26988);

return statearr_26987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___26988,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27009_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27009_SHARP_));
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
var base_path_27016 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27016){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27014 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27015 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27014,_STAR_print_newline_STAR_27015,base_path_27016){
return (function() { 
var G__27017__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27018__i = 0, G__27018__a = new Array(arguments.length -  0);
while (G__27018__i < G__27018__a.length) {G__27018__a[G__27018__i] = arguments[G__27018__i + 0]; ++G__27018__i;}
  args = new cljs.core.IndexedSeq(G__27018__a,0);
} 
return G__27017__delegate.call(this,args);};
G__27017.cljs$lang$maxFixedArity = 0;
G__27017.cljs$lang$applyTo = (function (arglist__27019){
var args = cljs.core.seq(arglist__27019);
return G__27017__delegate(args);
});
G__27017.cljs$core$IFn$_invoke$arity$variadic = G__27017__delegate;
return G__27017;
})()
;})(_STAR_print_fn_STAR_27014,_STAR_print_newline_STAR_27015,base_path_27016))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27015;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27014;
}}catch (e27013){if((e27013 instanceof Error)){
var e = e27013;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27016], null));
} else {
var e = e27013;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27016))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27020){
var map__27027 = p__27020;
var map__27027__$1 = ((((!((map__27027 == null)))?((((map__27027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27027):map__27027);
var opts = map__27027__$1;
var build_id = cljs.core.get.call(null,map__27027__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27027,map__27027__$1,opts,build_id){
return (function (p__27029){
var vec__27030 = p__27029;
var map__27031 = cljs.core.nth.call(null,vec__27030,(0),null);
var map__27031__$1 = ((((!((map__27031 == null)))?((((map__27031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27031):map__27031);
var msg = map__27031__$1;
var msg_name = cljs.core.get.call(null,map__27031__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27030,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27030,map__27031,map__27031__$1,msg,msg_name,_,map__27027,map__27027__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27030,map__27031,map__27031__$1,msg,msg_name,_,map__27027,map__27027__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27027,map__27027__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27037){
var vec__27038 = p__27037;
var map__27039 = cljs.core.nth.call(null,vec__27038,(0),null);
var map__27039__$1 = ((((!((map__27039 == null)))?((((map__27039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27039):map__27039);
var msg = map__27039__$1;
var msg_name = cljs.core.get.call(null,map__27039__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27038,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27041){
var map__27051 = p__27041;
var map__27051__$1 = ((((!((map__27051 == null)))?((((map__27051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27051):map__27051);
var on_compile_warning = cljs.core.get.call(null,map__27051__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27051__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27051,map__27051__$1,on_compile_warning,on_compile_fail){
return (function (p__27053){
var vec__27054 = p__27053;
var map__27055 = cljs.core.nth.call(null,vec__27054,(0),null);
var map__27055__$1 = ((((!((map__27055 == null)))?((((map__27055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27055):map__27055);
var msg = map__27055__$1;
var msg_name = cljs.core.get.call(null,map__27055__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27054,(1));
var pred__27057 = cljs.core._EQ_;
var expr__27058 = msg_name;
if(cljs.core.truth_(pred__27057.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27058))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27057.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27058))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27051,map__27051__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21003__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto__,msg_hist,msg_names,msg){
return (function (state_27274){
var state_val_27275 = (state_27274[(1)]);
if((state_val_27275 === (7))){
var inst_27198 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
if(cljs.core.truth_(inst_27198)){
var statearr_27276_27322 = state_27274__$1;
(statearr_27276_27322[(1)] = (8));

} else {
var statearr_27277_27323 = state_27274__$1;
(statearr_27277_27323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (20))){
var inst_27268 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
var statearr_27278_27324 = state_27274__$1;
(statearr_27278_27324[(2)] = inst_27268);

(statearr_27278_27324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (27))){
var inst_27264 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
var statearr_27279_27325 = state_27274__$1;
(statearr_27279_27325[(2)] = inst_27264);

(statearr_27279_27325[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (1))){
var inst_27191 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27274__$1 = state_27274;
if(cljs.core.truth_(inst_27191)){
var statearr_27280_27326 = state_27274__$1;
(statearr_27280_27326[(1)] = (2));

} else {
var statearr_27281_27327 = state_27274__$1;
(statearr_27281_27327[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (24))){
var inst_27266 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
var statearr_27282_27328 = state_27274__$1;
(statearr_27282_27328[(2)] = inst_27266);

(statearr_27282_27328[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (4))){
var inst_27272 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27274__$1,inst_27272);
} else {
if((state_val_27275 === (15))){
var inst_27270 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
var statearr_27283_27329 = state_27274__$1;
(statearr_27283_27329[(2)] = inst_27270);

(statearr_27283_27329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (21))){
var inst_27229 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
var statearr_27284_27330 = state_27274__$1;
(statearr_27284_27330[(2)] = inst_27229);

(statearr_27284_27330[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (31))){
var inst_27253 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27274__$1 = state_27274;
if(cljs.core.truth_(inst_27253)){
var statearr_27285_27331 = state_27274__$1;
(statearr_27285_27331[(1)] = (34));

} else {
var statearr_27286_27332 = state_27274__$1;
(statearr_27286_27332[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (32))){
var inst_27262 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
var statearr_27287_27333 = state_27274__$1;
(statearr_27287_27333[(2)] = inst_27262);

(statearr_27287_27333[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (33))){
var inst_27251 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
var statearr_27288_27334 = state_27274__$1;
(statearr_27288_27334[(2)] = inst_27251);

(statearr_27288_27334[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (13))){
var inst_27212 = figwheel.client.heads_up.clear.call(null);
var state_27274__$1 = state_27274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27274__$1,(16),inst_27212);
} else {
if((state_val_27275 === (22))){
var inst_27233 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27234 = figwheel.client.heads_up.append_message.call(null,inst_27233);
var state_27274__$1 = state_27274;
var statearr_27289_27335 = state_27274__$1;
(statearr_27289_27335[(2)] = inst_27234);

(statearr_27289_27335[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (36))){
var inst_27260 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
var statearr_27290_27336 = state_27274__$1;
(statearr_27290_27336[(2)] = inst_27260);

(statearr_27290_27336[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (29))){
var inst_27244 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
var statearr_27291_27337 = state_27274__$1;
(statearr_27291_27337[(2)] = inst_27244);

(statearr_27291_27337[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (6))){
var inst_27193 = (state_27274[(7)]);
var state_27274__$1 = state_27274;
var statearr_27292_27338 = state_27274__$1;
(statearr_27292_27338[(2)] = inst_27193);

(statearr_27292_27338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (28))){
var inst_27240 = (state_27274[(2)]);
var inst_27241 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27242 = figwheel.client.heads_up.display_warning.call(null,inst_27241);
var state_27274__$1 = (function (){var statearr_27293 = state_27274;
(statearr_27293[(8)] = inst_27240);

return statearr_27293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27274__$1,(29),inst_27242);
} else {
if((state_val_27275 === (25))){
var inst_27238 = figwheel.client.heads_up.clear.call(null);
var state_27274__$1 = state_27274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27274__$1,(28),inst_27238);
} else {
if((state_val_27275 === (34))){
var inst_27255 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27274__$1 = state_27274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27274__$1,(37),inst_27255);
} else {
if((state_val_27275 === (17))){
var inst_27220 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
var statearr_27294_27339 = state_27274__$1;
(statearr_27294_27339[(2)] = inst_27220);

(statearr_27294_27339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (3))){
var inst_27210 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27274__$1 = state_27274;
if(cljs.core.truth_(inst_27210)){
var statearr_27295_27340 = state_27274__$1;
(statearr_27295_27340[(1)] = (13));

} else {
var statearr_27296_27341 = state_27274__$1;
(statearr_27296_27341[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (12))){
var inst_27206 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
var statearr_27297_27342 = state_27274__$1;
(statearr_27297_27342[(2)] = inst_27206);

(statearr_27297_27342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (2))){
var inst_27193 = (state_27274[(7)]);
var inst_27193__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27274__$1 = (function (){var statearr_27298 = state_27274;
(statearr_27298[(7)] = inst_27193__$1);

return statearr_27298;
})();
if(cljs.core.truth_(inst_27193__$1)){
var statearr_27299_27343 = state_27274__$1;
(statearr_27299_27343[(1)] = (5));

} else {
var statearr_27300_27344 = state_27274__$1;
(statearr_27300_27344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (23))){
var inst_27236 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27274__$1 = state_27274;
if(cljs.core.truth_(inst_27236)){
var statearr_27301_27345 = state_27274__$1;
(statearr_27301_27345[(1)] = (25));

} else {
var statearr_27302_27346 = state_27274__$1;
(statearr_27302_27346[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (35))){
var state_27274__$1 = state_27274;
var statearr_27303_27347 = state_27274__$1;
(statearr_27303_27347[(2)] = null);

(statearr_27303_27347[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (19))){
var inst_27231 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27274__$1 = state_27274;
if(cljs.core.truth_(inst_27231)){
var statearr_27304_27348 = state_27274__$1;
(statearr_27304_27348[(1)] = (22));

} else {
var statearr_27305_27349 = state_27274__$1;
(statearr_27305_27349[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (11))){
var inst_27202 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
var statearr_27306_27350 = state_27274__$1;
(statearr_27306_27350[(2)] = inst_27202);

(statearr_27306_27350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (9))){
var inst_27204 = figwheel.client.heads_up.clear.call(null);
var state_27274__$1 = state_27274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27274__$1,(12),inst_27204);
} else {
if((state_val_27275 === (5))){
var inst_27195 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27274__$1 = state_27274;
var statearr_27307_27351 = state_27274__$1;
(statearr_27307_27351[(2)] = inst_27195);

(statearr_27307_27351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (14))){
var inst_27222 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27274__$1 = state_27274;
if(cljs.core.truth_(inst_27222)){
var statearr_27308_27352 = state_27274__$1;
(statearr_27308_27352[(1)] = (18));

} else {
var statearr_27309_27353 = state_27274__$1;
(statearr_27309_27353[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (26))){
var inst_27246 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27274__$1 = state_27274;
if(cljs.core.truth_(inst_27246)){
var statearr_27310_27354 = state_27274__$1;
(statearr_27310_27354[(1)] = (30));

} else {
var statearr_27311_27355 = state_27274__$1;
(statearr_27311_27355[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (16))){
var inst_27214 = (state_27274[(2)]);
var inst_27215 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27216 = figwheel.client.format_messages.call(null,inst_27215);
var inst_27217 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27218 = figwheel.client.heads_up.display_error.call(null,inst_27216,inst_27217);
var state_27274__$1 = (function (){var statearr_27312 = state_27274;
(statearr_27312[(9)] = inst_27214);

return statearr_27312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27274__$1,(17),inst_27218);
} else {
if((state_val_27275 === (30))){
var inst_27248 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27249 = figwheel.client.heads_up.display_warning.call(null,inst_27248);
var state_27274__$1 = state_27274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27274__$1,(33),inst_27249);
} else {
if((state_val_27275 === (10))){
var inst_27208 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
var statearr_27313_27356 = state_27274__$1;
(statearr_27313_27356[(2)] = inst_27208);

(statearr_27313_27356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (18))){
var inst_27224 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27225 = figwheel.client.format_messages.call(null,inst_27224);
var inst_27226 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27227 = figwheel.client.heads_up.display_error.call(null,inst_27225,inst_27226);
var state_27274__$1 = state_27274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27274__$1,(21),inst_27227);
} else {
if((state_val_27275 === (37))){
var inst_27257 = (state_27274[(2)]);
var state_27274__$1 = state_27274;
var statearr_27314_27357 = state_27274__$1;
(statearr_27314_27357[(2)] = inst_27257);

(statearr_27314_27357[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27275 === (8))){
var inst_27200 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27274__$1 = state_27274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27274__$1,(11),inst_27200);
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
});})(c__21003__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20891__auto__,c__21003__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20892__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20892__auto____0 = (function (){
var statearr_27318 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27318[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20892__auto__);

(statearr_27318[(1)] = (1));

return statearr_27318;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20892__auto____1 = (function (state_27274){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_27274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e27319){if((e27319 instanceof Object)){
var ex__20895__auto__ = e27319;
var statearr_27320_27358 = state_27274;
(statearr_27320_27358[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27359 = state_27274;
state_27274 = G__27359;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20892__auto__ = function(state_27274){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20892__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20892__auto____1.call(this,state_27274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20892__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20892__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto__,msg_hist,msg_names,msg))
})();
var state__21005__auto__ = (function (){var statearr_27321 = f__21004__auto__.call(null);
(statearr_27321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto__);

return statearr_27321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto__,msg_hist,msg_names,msg))
);

return c__21003__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21003__auto___27422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto___27422,ch){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto___27422,ch){
return (function (state_27405){
var state_val_27406 = (state_27405[(1)]);
if((state_val_27406 === (1))){
var state_27405__$1 = state_27405;
var statearr_27407_27423 = state_27405__$1;
(statearr_27407_27423[(2)] = null);

(statearr_27407_27423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (2))){
var state_27405__$1 = state_27405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27405__$1,(4),ch);
} else {
if((state_val_27406 === (3))){
var inst_27403 = (state_27405[(2)]);
var state_27405__$1 = state_27405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27405__$1,inst_27403);
} else {
if((state_val_27406 === (4))){
var inst_27393 = (state_27405[(7)]);
var inst_27393__$1 = (state_27405[(2)]);
var state_27405__$1 = (function (){var statearr_27408 = state_27405;
(statearr_27408[(7)] = inst_27393__$1);

return statearr_27408;
})();
if(cljs.core.truth_(inst_27393__$1)){
var statearr_27409_27424 = state_27405__$1;
(statearr_27409_27424[(1)] = (5));

} else {
var statearr_27410_27425 = state_27405__$1;
(statearr_27410_27425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (5))){
var inst_27393 = (state_27405[(7)]);
var inst_27395 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27393);
var state_27405__$1 = state_27405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27405__$1,(8),inst_27395);
} else {
if((state_val_27406 === (6))){
var state_27405__$1 = state_27405;
var statearr_27411_27426 = state_27405__$1;
(statearr_27411_27426[(2)] = null);

(statearr_27411_27426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (7))){
var inst_27401 = (state_27405[(2)]);
var state_27405__$1 = state_27405;
var statearr_27412_27427 = state_27405__$1;
(statearr_27412_27427[(2)] = inst_27401);

(statearr_27412_27427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (8))){
var inst_27397 = (state_27405[(2)]);
var state_27405__$1 = (function (){var statearr_27413 = state_27405;
(statearr_27413[(8)] = inst_27397);

return statearr_27413;
})();
var statearr_27414_27428 = state_27405__$1;
(statearr_27414_27428[(2)] = null);

(statearr_27414_27428[(1)] = (2));


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
});})(c__21003__auto___27422,ch))
;
return ((function (switch__20891__auto__,c__21003__auto___27422,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20892__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20892__auto____0 = (function (){
var statearr_27418 = [null,null,null,null,null,null,null,null,null];
(statearr_27418[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20892__auto__);

(statearr_27418[(1)] = (1));

return statearr_27418;
});
var figwheel$client$heads_up_plugin_$_state_machine__20892__auto____1 = (function (state_27405){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_27405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e27419){if((e27419 instanceof Object)){
var ex__20895__auto__ = e27419;
var statearr_27420_27429 = state_27405;
(statearr_27420_27429[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27430 = state_27405;
state_27405 = G__27430;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20892__auto__ = function(state_27405){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20892__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20892__auto____1.call(this,state_27405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20892__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20892__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto___27422,ch))
})();
var state__21005__auto__ = (function (){var statearr_27421 = f__21004__auto__.call(null);
(statearr_27421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto___27422);

return statearr_27421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto___27422,ch))
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
var c__21003__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21003__auto__){
return (function (){
var f__21004__auto__ = (function (){var switch__20891__auto__ = ((function (c__21003__auto__){
return (function (state_27451){
var state_val_27452 = (state_27451[(1)]);
if((state_val_27452 === (1))){
var inst_27446 = cljs.core.async.timeout.call(null,(3000));
var state_27451__$1 = state_27451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27451__$1,(2),inst_27446);
} else {
if((state_val_27452 === (2))){
var inst_27448 = (state_27451[(2)]);
var inst_27449 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27451__$1 = (function (){var statearr_27453 = state_27451;
(statearr_27453[(7)] = inst_27448);

return statearr_27453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27451__$1,inst_27449);
} else {
return null;
}
}
});})(c__21003__auto__))
;
return ((function (switch__20891__auto__,c__21003__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20892__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20892__auto____0 = (function (){
var statearr_27457 = [null,null,null,null,null,null,null,null];
(statearr_27457[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20892__auto__);

(statearr_27457[(1)] = (1));

return statearr_27457;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20892__auto____1 = (function (state_27451){
while(true){
var ret_value__20893__auto__ = (function (){try{while(true){
var result__20894__auto__ = switch__20891__auto__.call(null,state_27451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20894__auto__;
}
break;
}
}catch (e27458){if((e27458 instanceof Object)){
var ex__20895__auto__ = e27458;
var statearr_27459_27461 = state_27451;
(statearr_27459_27461[(5)] = ex__20895__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27462 = state_27451;
state_27451 = G__27462;
continue;
} else {
return ret_value__20893__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20892__auto__ = function(state_27451){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20892__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20892__auto____1.call(this,state_27451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20892__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20892__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20892__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20892__auto__;
})()
;})(switch__20891__auto__,c__21003__auto__))
})();
var state__21005__auto__ = (function (){var statearr_27460 = f__21004__auto__.call(null);
(statearr_27460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21003__auto__);

return statearr_27460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21005__auto__);
});})(c__21003__auto__))
);

return c__21003__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27463){
var map__27470 = p__27463;
var map__27470__$1 = ((((!((map__27470 == null)))?((((map__27470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27470):map__27470);
var ed = map__27470__$1;
var formatted_exception = cljs.core.get.call(null,map__27470__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27470__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27470__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27472_27476 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27473_27477 = null;
var count__27474_27478 = (0);
var i__27475_27479 = (0);
while(true){
if((i__27475_27479 < count__27474_27478)){
var msg_27480 = cljs.core._nth.call(null,chunk__27473_27477,i__27475_27479);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27480);

var G__27481 = seq__27472_27476;
var G__27482 = chunk__27473_27477;
var G__27483 = count__27474_27478;
var G__27484 = (i__27475_27479 + (1));
seq__27472_27476 = G__27481;
chunk__27473_27477 = G__27482;
count__27474_27478 = G__27483;
i__27475_27479 = G__27484;
continue;
} else {
var temp__4425__auto___27485 = cljs.core.seq.call(null,seq__27472_27476);
if(temp__4425__auto___27485){
var seq__27472_27486__$1 = temp__4425__auto___27485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27472_27486__$1)){
var c__17629__auto___27487 = cljs.core.chunk_first.call(null,seq__27472_27486__$1);
var G__27488 = cljs.core.chunk_rest.call(null,seq__27472_27486__$1);
var G__27489 = c__17629__auto___27487;
var G__27490 = cljs.core.count.call(null,c__17629__auto___27487);
var G__27491 = (0);
seq__27472_27476 = G__27488;
chunk__27473_27477 = G__27489;
count__27474_27478 = G__27490;
i__27475_27479 = G__27491;
continue;
} else {
var msg_27492 = cljs.core.first.call(null,seq__27472_27486__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27492);

var G__27493 = cljs.core.next.call(null,seq__27472_27486__$1);
var G__27494 = null;
var G__27495 = (0);
var G__27496 = (0);
seq__27472_27476 = G__27493;
chunk__27473_27477 = G__27494;
count__27474_27478 = G__27495;
i__27475_27479 = G__27496;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27497){
var map__27500 = p__27497;
var map__27500__$1 = ((((!((map__27500 == null)))?((((map__27500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27500):map__27500);
var w = map__27500__$1;
var message = cljs.core.get.call(null,map__27500__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__27508 = cljs.core.seq.call(null,plugins);
var chunk__27509 = null;
var count__27510 = (0);
var i__27511 = (0);
while(true){
if((i__27511 < count__27510)){
var vec__27512 = cljs.core._nth.call(null,chunk__27509,i__27511);
var k = cljs.core.nth.call(null,vec__27512,(0),null);
var plugin = cljs.core.nth.call(null,vec__27512,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27514 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27508,chunk__27509,count__27510,i__27511,pl_27514,vec__27512,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27514.call(null,msg_hist);
});})(seq__27508,chunk__27509,count__27510,i__27511,pl_27514,vec__27512,k,plugin))
);
} else {
}

var G__27515 = seq__27508;
var G__27516 = chunk__27509;
var G__27517 = count__27510;
var G__27518 = (i__27511 + (1));
seq__27508 = G__27515;
chunk__27509 = G__27516;
count__27510 = G__27517;
i__27511 = G__27518;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27508);
if(temp__4425__auto__){
var seq__27508__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27508__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__27508__$1);
var G__27519 = cljs.core.chunk_rest.call(null,seq__27508__$1);
var G__27520 = c__17629__auto__;
var G__27521 = cljs.core.count.call(null,c__17629__auto__);
var G__27522 = (0);
seq__27508 = G__27519;
chunk__27509 = G__27520;
count__27510 = G__27521;
i__27511 = G__27522;
continue;
} else {
var vec__27513 = cljs.core.first.call(null,seq__27508__$1);
var k = cljs.core.nth.call(null,vec__27513,(0),null);
var plugin = cljs.core.nth.call(null,vec__27513,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27523 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27508,chunk__27509,count__27510,i__27511,pl_27523,vec__27513,k,plugin,seq__27508__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27523.call(null,msg_hist);
});})(seq__27508,chunk__27509,count__27510,i__27511,pl_27523,vec__27513,k,plugin,seq__27508__$1,temp__4425__auto__))
);
} else {
}

var G__27524 = cljs.core.next.call(null,seq__27508__$1);
var G__27525 = null;
var G__27526 = (0);
var G__27527 = (0);
seq__27508 = G__27524;
chunk__27509 = G__27525;
count__27510 = G__27526;
i__27511 = G__27527;
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
var args27528 = [];
var len__17884__auto___27531 = arguments.length;
var i__17885__auto___27532 = (0);
while(true){
if((i__17885__auto___27532 < len__17884__auto___27531)){
args27528.push((arguments[i__17885__auto___27532]));

var G__27533 = (i__17885__auto___27532 + (1));
i__17885__auto___27532 = G__27533;
continue;
} else {
}
break;
}

var G__27530 = args27528.length;
switch (G__27530) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27528.length)].join('')));

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
var len__17884__auto___27539 = arguments.length;
var i__17885__auto___27540 = (0);
while(true){
if((i__17885__auto___27540 < len__17884__auto___27539)){
args__17891__auto__.push((arguments[i__17885__auto___27540]));

var G__27541 = (i__17885__auto___27540 + (1));
i__17885__auto___27540 = G__27541;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27536){
var map__27537 = p__27536;
var map__27537__$1 = ((((!((map__27537 == null)))?((((map__27537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27537):map__27537);
var opts = map__27537__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27535){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27535));
});

//# sourceMappingURL=client.js.map?rel=1454020205855