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
var pred__27549 = cljs.core._EQ_;
var expr__27550 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27549.call(null,"true",expr__27550))){
return true;
} else {
if(cljs.core.truth_(pred__27549.call(null,"false",expr__27550))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27550)].join('')));
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
var G__27552__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27553__i = 0, G__27553__a = new Array(arguments.length -  0);
while (G__27553__i < G__27553__a.length) {G__27553__a[G__27553__i] = arguments[G__27553__i + 0]; ++G__27553__i;}
  args = new cljs.core.IndexedSeq(G__27553__a,0);
} 
return G__27552__delegate.call(this,args);};
G__27552.cljs$lang$maxFixedArity = 0;
G__27552.cljs$lang$applyTo = (function (arglist__27554){
var args = cljs.core.seq(arglist__27554);
return G__27552__delegate(args);
});
G__27552.cljs$core$IFn$_invoke$arity$variadic = G__27552__delegate;
return G__27552;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27555){
var map__27558 = p__27555;
var map__27558__$1 = ((((!((map__27558 == null)))?((((map__27558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27558):map__27558);
var message = cljs.core.get.call(null,map__27558__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27558__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__18942__auto___27720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___27720,ch){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___27720,ch){
return (function (state_27689){
var state_val_27690 = (state_27689[(1)]);
if((state_val_27690 === (7))){
var inst_27685 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27691_27721 = state_27689__$1;
(statearr_27691_27721[(2)] = inst_27685);

(statearr_27691_27721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (1))){
var state_27689__$1 = state_27689;
var statearr_27692_27722 = state_27689__$1;
(statearr_27692_27722[(2)] = null);

(statearr_27692_27722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (4))){
var inst_27642 = (state_27689[(7)]);
var inst_27642__$1 = (state_27689[(2)]);
var state_27689__$1 = (function (){var statearr_27693 = state_27689;
(statearr_27693[(7)] = inst_27642__$1);

return statearr_27693;
})();
if(cljs.core.truth_(inst_27642__$1)){
var statearr_27694_27723 = state_27689__$1;
(statearr_27694_27723[(1)] = (5));

} else {
var statearr_27695_27724 = state_27689__$1;
(statearr_27695_27724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (15))){
var inst_27649 = (state_27689[(8)]);
var inst_27664 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27649);
var inst_27665 = cljs.core.first.call(null,inst_27664);
var inst_27666 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27665);
var inst_27667 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27666)].join('');
var inst_27668 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27667);
var state_27689__$1 = state_27689;
var statearr_27696_27725 = state_27689__$1;
(statearr_27696_27725[(2)] = inst_27668);

(statearr_27696_27725[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (13))){
var inst_27673 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27697_27726 = state_27689__$1;
(statearr_27697_27726[(2)] = inst_27673);

(statearr_27697_27726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (6))){
var state_27689__$1 = state_27689;
var statearr_27698_27727 = state_27689__$1;
(statearr_27698_27727[(2)] = null);

(statearr_27698_27727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (17))){
var inst_27671 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27699_27728 = state_27689__$1;
(statearr_27699_27728[(2)] = inst_27671);

(statearr_27699_27728[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (3))){
var inst_27687 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27689__$1,inst_27687);
} else {
if((state_val_27690 === (12))){
var inst_27648 = (state_27689[(9)]);
var inst_27662 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27648,opts);
var state_27689__$1 = state_27689;
if(cljs.core.truth_(inst_27662)){
var statearr_27700_27729 = state_27689__$1;
(statearr_27700_27729[(1)] = (15));

} else {
var statearr_27701_27730 = state_27689__$1;
(statearr_27701_27730[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (2))){
var state_27689__$1 = state_27689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27689__$1,(4),ch);
} else {
if((state_val_27690 === (11))){
var inst_27649 = (state_27689[(8)]);
var inst_27654 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27655 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27649);
var inst_27656 = cljs.core.async.timeout.call(null,(1000));
var inst_27657 = [inst_27655,inst_27656];
var inst_27658 = (new cljs.core.PersistentVector(null,2,(5),inst_27654,inst_27657,null));
var state_27689__$1 = state_27689;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27689__$1,(14),inst_27658);
} else {
if((state_val_27690 === (9))){
var inst_27649 = (state_27689[(8)]);
var inst_27675 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27676 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27649);
var inst_27677 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27676);
var inst_27678 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27677)].join('');
var inst_27679 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27678);
var state_27689__$1 = (function (){var statearr_27702 = state_27689;
(statearr_27702[(10)] = inst_27675);

return statearr_27702;
})();
var statearr_27703_27731 = state_27689__$1;
(statearr_27703_27731[(2)] = inst_27679);

(statearr_27703_27731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (5))){
var inst_27642 = (state_27689[(7)]);
var inst_27644 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27645 = (new cljs.core.PersistentArrayMap(null,2,inst_27644,null));
var inst_27646 = (new cljs.core.PersistentHashSet(null,inst_27645,null));
var inst_27647 = figwheel.client.focus_msgs.call(null,inst_27646,inst_27642);
var inst_27648 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27647);
var inst_27649 = cljs.core.first.call(null,inst_27647);
var inst_27650 = figwheel.client.autoload_QMARK_.call(null);
var state_27689__$1 = (function (){var statearr_27704 = state_27689;
(statearr_27704[(9)] = inst_27648);

(statearr_27704[(8)] = inst_27649);

return statearr_27704;
})();
if(cljs.core.truth_(inst_27650)){
var statearr_27705_27732 = state_27689__$1;
(statearr_27705_27732[(1)] = (8));

} else {
var statearr_27706_27733 = state_27689__$1;
(statearr_27706_27733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (14))){
var inst_27660 = (state_27689[(2)]);
var state_27689__$1 = state_27689;
var statearr_27707_27734 = state_27689__$1;
(statearr_27707_27734[(2)] = inst_27660);

(statearr_27707_27734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (16))){
var state_27689__$1 = state_27689;
var statearr_27708_27735 = state_27689__$1;
(statearr_27708_27735[(2)] = null);

(statearr_27708_27735[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (10))){
var inst_27681 = (state_27689[(2)]);
var state_27689__$1 = (function (){var statearr_27709 = state_27689;
(statearr_27709[(11)] = inst_27681);

return statearr_27709;
})();
var statearr_27710_27736 = state_27689__$1;
(statearr_27710_27736[(2)] = null);

(statearr_27710_27736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27690 === (8))){
var inst_27648 = (state_27689[(9)]);
var inst_27652 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27648,opts);
var state_27689__$1 = state_27689;
if(cljs.core.truth_(inst_27652)){
var statearr_27711_27737 = state_27689__$1;
(statearr_27711_27737[(1)] = (11));

} else {
var statearr_27712_27738 = state_27689__$1;
(statearr_27712_27738[(1)] = (12));

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
});})(c__18942__auto___27720,ch))
;
return ((function (switch__18921__auto__,c__18942__auto___27720,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18922__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18922__auto____0 = (function (){
var statearr_27716 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27716[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18922__auto__);

(statearr_27716[(1)] = (1));

return statearr_27716;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18922__auto____1 = (function (state_27689){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_27689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e27717){if((e27717 instanceof Object)){
var ex__18925__auto__ = e27717;
var statearr_27718_27739 = state_27689;
(statearr_27718_27739[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27740 = state_27689;
state_27689 = G__27740;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18922__auto__ = function(state_27689){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18922__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18922__auto____1.call(this,state_27689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18922__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18922__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___27720,ch))
})();
var state__18944__auto__ = (function (){var statearr_27719 = f__18943__auto__.call(null);
(statearr_27719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___27720);

return statearr_27719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___27720,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27741_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27741_SHARP_));
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
var base_path_27748 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27748){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27746 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27747 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27746,_STAR_print_newline_STAR_27747,base_path_27748){
return (function() { 
var G__27749__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27749 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27750__i = 0, G__27750__a = new Array(arguments.length -  0);
while (G__27750__i < G__27750__a.length) {G__27750__a[G__27750__i] = arguments[G__27750__i + 0]; ++G__27750__i;}
  args = new cljs.core.IndexedSeq(G__27750__a,0);
} 
return G__27749__delegate.call(this,args);};
G__27749.cljs$lang$maxFixedArity = 0;
G__27749.cljs$lang$applyTo = (function (arglist__27751){
var args = cljs.core.seq(arglist__27751);
return G__27749__delegate(args);
});
G__27749.cljs$core$IFn$_invoke$arity$variadic = G__27749__delegate;
return G__27749;
})()
;})(_STAR_print_fn_STAR_27746,_STAR_print_newline_STAR_27747,base_path_27748))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27747;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27746;
}}catch (e27745){if((e27745 instanceof Error)){
var e = e27745;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27748], null));
} else {
var e = e27745;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27748))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27752){
var map__27759 = p__27752;
var map__27759__$1 = ((((!((map__27759 == null)))?((((map__27759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27759):map__27759);
var opts = map__27759__$1;
var build_id = cljs.core.get.call(null,map__27759__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27759,map__27759__$1,opts,build_id){
return (function (p__27761){
var vec__27762 = p__27761;
var map__27763 = cljs.core.nth.call(null,vec__27762,(0),null);
var map__27763__$1 = ((((!((map__27763 == null)))?((((map__27763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27763):map__27763);
var msg = map__27763__$1;
var msg_name = cljs.core.get.call(null,map__27763__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27762,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27762,map__27763,map__27763__$1,msg,msg_name,_,map__27759,map__27759__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27762,map__27763,map__27763__$1,msg,msg_name,_,map__27759,map__27759__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27759,map__27759__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27769){
var vec__27770 = p__27769;
var map__27771 = cljs.core.nth.call(null,vec__27770,(0),null);
var map__27771__$1 = ((((!((map__27771 == null)))?((((map__27771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27771):map__27771);
var msg = map__27771__$1;
var msg_name = cljs.core.get.call(null,map__27771__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27770,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27773){
var map__27783 = p__27773;
var map__27783__$1 = ((((!((map__27783 == null)))?((((map__27783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27783):map__27783);
var on_compile_warning = cljs.core.get.call(null,map__27783__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27783__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27783,map__27783__$1,on_compile_warning,on_compile_fail){
return (function (p__27785){
var vec__27786 = p__27785;
var map__27787 = cljs.core.nth.call(null,vec__27786,(0),null);
var map__27787__$1 = ((((!((map__27787 == null)))?((((map__27787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27787):map__27787);
var msg = map__27787__$1;
var msg_name = cljs.core.get.call(null,map__27787__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27786,(1));
var pred__27789 = cljs.core._EQ_;
var expr__27790 = msg_name;
if(cljs.core.truth_(pred__27789.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27790))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27789.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27790))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27783,map__27783__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18942__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto__,msg_hist,msg_names,msg){
return (function (state_28006){
var state_val_28007 = (state_28006[(1)]);
if((state_val_28007 === (7))){
var inst_27930 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27930)){
var statearr_28008_28054 = state_28006__$1;
(statearr_28008_28054[(1)] = (8));

} else {
var statearr_28009_28055 = state_28006__$1;
(statearr_28009_28055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (20))){
var inst_28000 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28010_28056 = state_28006__$1;
(statearr_28010_28056[(2)] = inst_28000);

(statearr_28010_28056[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (27))){
var inst_27996 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28011_28057 = state_28006__$1;
(statearr_28011_28057[(2)] = inst_27996);

(statearr_28011_28057[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (1))){
var inst_27923 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27923)){
var statearr_28012_28058 = state_28006__$1;
(statearr_28012_28058[(1)] = (2));

} else {
var statearr_28013_28059 = state_28006__$1;
(statearr_28013_28059[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (24))){
var inst_27998 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28014_28060 = state_28006__$1;
(statearr_28014_28060[(2)] = inst_27998);

(statearr_28014_28060[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (4))){
var inst_28004 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28006__$1,inst_28004);
} else {
if((state_val_28007 === (15))){
var inst_28002 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28015_28061 = state_28006__$1;
(statearr_28015_28061[(2)] = inst_28002);

(statearr_28015_28061[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (21))){
var inst_27961 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28016_28062 = state_28006__$1;
(statearr_28016_28062[(2)] = inst_27961);

(statearr_28016_28062[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (31))){
var inst_27985 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27985)){
var statearr_28017_28063 = state_28006__$1;
(statearr_28017_28063[(1)] = (34));

} else {
var statearr_28018_28064 = state_28006__$1;
(statearr_28018_28064[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (32))){
var inst_27994 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28019_28065 = state_28006__$1;
(statearr_28019_28065[(2)] = inst_27994);

(statearr_28019_28065[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (33))){
var inst_27983 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28020_28066 = state_28006__$1;
(statearr_28020_28066[(2)] = inst_27983);

(statearr_28020_28066[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (13))){
var inst_27944 = figwheel.client.heads_up.clear.call(null);
var state_28006__$1 = state_28006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28006__$1,(16),inst_27944);
} else {
if((state_val_28007 === (22))){
var inst_27965 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27966 = figwheel.client.heads_up.append_message.call(null,inst_27965);
var state_28006__$1 = state_28006;
var statearr_28021_28067 = state_28006__$1;
(statearr_28021_28067[(2)] = inst_27966);

(statearr_28021_28067[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (36))){
var inst_27992 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28022_28068 = state_28006__$1;
(statearr_28022_28068[(2)] = inst_27992);

(statearr_28022_28068[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (29))){
var inst_27976 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28023_28069 = state_28006__$1;
(statearr_28023_28069[(2)] = inst_27976);

(statearr_28023_28069[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (6))){
var inst_27925 = (state_28006[(7)]);
var state_28006__$1 = state_28006;
var statearr_28024_28070 = state_28006__$1;
(statearr_28024_28070[(2)] = inst_27925);

(statearr_28024_28070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (28))){
var inst_27972 = (state_28006[(2)]);
var inst_27973 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27974 = figwheel.client.heads_up.display_warning.call(null,inst_27973);
var state_28006__$1 = (function (){var statearr_28025 = state_28006;
(statearr_28025[(8)] = inst_27972);

return statearr_28025;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28006__$1,(29),inst_27974);
} else {
if((state_val_28007 === (25))){
var inst_27970 = figwheel.client.heads_up.clear.call(null);
var state_28006__$1 = state_28006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28006__$1,(28),inst_27970);
} else {
if((state_val_28007 === (34))){
var inst_27987 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28006__$1 = state_28006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28006__$1,(37),inst_27987);
} else {
if((state_val_28007 === (17))){
var inst_27952 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28026_28071 = state_28006__$1;
(statearr_28026_28071[(2)] = inst_27952);

(statearr_28026_28071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (3))){
var inst_27942 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27942)){
var statearr_28027_28072 = state_28006__$1;
(statearr_28027_28072[(1)] = (13));

} else {
var statearr_28028_28073 = state_28006__$1;
(statearr_28028_28073[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (12))){
var inst_27938 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28029_28074 = state_28006__$1;
(statearr_28029_28074[(2)] = inst_27938);

(statearr_28029_28074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (2))){
var inst_27925 = (state_28006[(7)]);
var inst_27925__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28006__$1 = (function (){var statearr_28030 = state_28006;
(statearr_28030[(7)] = inst_27925__$1);

return statearr_28030;
})();
if(cljs.core.truth_(inst_27925__$1)){
var statearr_28031_28075 = state_28006__$1;
(statearr_28031_28075[(1)] = (5));

} else {
var statearr_28032_28076 = state_28006__$1;
(statearr_28032_28076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (23))){
var inst_27968 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27968)){
var statearr_28033_28077 = state_28006__$1;
(statearr_28033_28077[(1)] = (25));

} else {
var statearr_28034_28078 = state_28006__$1;
(statearr_28034_28078[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (35))){
var state_28006__$1 = state_28006;
var statearr_28035_28079 = state_28006__$1;
(statearr_28035_28079[(2)] = null);

(statearr_28035_28079[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (19))){
var inst_27963 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27963)){
var statearr_28036_28080 = state_28006__$1;
(statearr_28036_28080[(1)] = (22));

} else {
var statearr_28037_28081 = state_28006__$1;
(statearr_28037_28081[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (11))){
var inst_27934 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28038_28082 = state_28006__$1;
(statearr_28038_28082[(2)] = inst_27934);

(statearr_28038_28082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (9))){
var inst_27936 = figwheel.client.heads_up.clear.call(null);
var state_28006__$1 = state_28006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28006__$1,(12),inst_27936);
} else {
if((state_val_28007 === (5))){
var inst_27927 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28006__$1 = state_28006;
var statearr_28039_28083 = state_28006__$1;
(statearr_28039_28083[(2)] = inst_27927);

(statearr_28039_28083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (14))){
var inst_27954 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27954)){
var statearr_28040_28084 = state_28006__$1;
(statearr_28040_28084[(1)] = (18));

} else {
var statearr_28041_28085 = state_28006__$1;
(statearr_28041_28085[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (26))){
var inst_27978 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27978)){
var statearr_28042_28086 = state_28006__$1;
(statearr_28042_28086[(1)] = (30));

} else {
var statearr_28043_28087 = state_28006__$1;
(statearr_28043_28087[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (16))){
var inst_27946 = (state_28006[(2)]);
var inst_27947 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27948 = figwheel.client.format_messages.call(null,inst_27947);
var inst_27949 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27950 = figwheel.client.heads_up.display_error.call(null,inst_27948,inst_27949);
var state_28006__$1 = (function (){var statearr_28044 = state_28006;
(statearr_28044[(9)] = inst_27946);

return statearr_28044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28006__$1,(17),inst_27950);
} else {
if((state_val_28007 === (30))){
var inst_27980 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27981 = figwheel.client.heads_up.display_warning.call(null,inst_27980);
var state_28006__$1 = state_28006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28006__$1,(33),inst_27981);
} else {
if((state_val_28007 === (10))){
var inst_27940 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28045_28088 = state_28006__$1;
(statearr_28045_28088[(2)] = inst_27940);

(statearr_28045_28088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (18))){
var inst_27956 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27957 = figwheel.client.format_messages.call(null,inst_27956);
var inst_27958 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27959 = figwheel.client.heads_up.display_error.call(null,inst_27957,inst_27958);
var state_28006__$1 = state_28006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28006__$1,(21),inst_27959);
} else {
if((state_val_28007 === (37))){
var inst_27989 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28046_28089 = state_28006__$1;
(statearr_28046_28089[(2)] = inst_27989);

(statearr_28046_28089[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (8))){
var inst_27932 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28006__$1 = state_28006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28006__$1,(11),inst_27932);
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
});})(c__18942__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18921__auto__,c__18942__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto____0 = (function (){
var statearr_28050 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28050[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto__);

(statearr_28050[(1)] = (1));

return statearr_28050;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto____1 = (function (state_28006){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_28006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e28051){if((e28051 instanceof Object)){
var ex__18925__auto__ = e28051;
var statearr_28052_28090 = state_28006;
(statearr_28052_28090[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28091 = state_28006;
state_28006 = G__28091;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto__ = function(state_28006){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto____1.call(this,state_28006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto__,msg_hist,msg_names,msg))
})();
var state__18944__auto__ = (function (){var statearr_28053 = f__18943__auto__.call(null);
(statearr_28053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto__);

return statearr_28053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto__,msg_hist,msg_names,msg))
);

return c__18942__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18942__auto___28154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto___28154,ch){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto___28154,ch){
return (function (state_28137){
var state_val_28138 = (state_28137[(1)]);
if((state_val_28138 === (1))){
var state_28137__$1 = state_28137;
var statearr_28139_28155 = state_28137__$1;
(statearr_28139_28155[(2)] = null);

(statearr_28139_28155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (2))){
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(4),ch);
} else {
if((state_val_28138 === (3))){
var inst_28135 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28137__$1,inst_28135);
} else {
if((state_val_28138 === (4))){
var inst_28125 = (state_28137[(7)]);
var inst_28125__$1 = (state_28137[(2)]);
var state_28137__$1 = (function (){var statearr_28140 = state_28137;
(statearr_28140[(7)] = inst_28125__$1);

return statearr_28140;
})();
if(cljs.core.truth_(inst_28125__$1)){
var statearr_28141_28156 = state_28137__$1;
(statearr_28141_28156[(1)] = (5));

} else {
var statearr_28142_28157 = state_28137__$1;
(statearr_28142_28157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (5))){
var inst_28125 = (state_28137[(7)]);
var inst_28127 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28125);
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(8),inst_28127);
} else {
if((state_val_28138 === (6))){
var state_28137__$1 = state_28137;
var statearr_28143_28158 = state_28137__$1;
(statearr_28143_28158[(2)] = null);

(statearr_28143_28158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (7))){
var inst_28133 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28144_28159 = state_28137__$1;
(statearr_28144_28159[(2)] = inst_28133);

(statearr_28144_28159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (8))){
var inst_28129 = (state_28137[(2)]);
var state_28137__$1 = (function (){var statearr_28145 = state_28137;
(statearr_28145[(8)] = inst_28129);

return statearr_28145;
})();
var statearr_28146_28160 = state_28137__$1;
(statearr_28146_28160[(2)] = null);

(statearr_28146_28160[(1)] = (2));


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
});})(c__18942__auto___28154,ch))
;
return ((function (switch__18921__auto__,c__18942__auto___28154,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18922__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18922__auto____0 = (function (){
var statearr_28150 = [null,null,null,null,null,null,null,null,null];
(statearr_28150[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18922__auto__);

(statearr_28150[(1)] = (1));

return statearr_28150;
});
var figwheel$client$heads_up_plugin_$_state_machine__18922__auto____1 = (function (state_28137){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_28137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e28151){if((e28151 instanceof Object)){
var ex__18925__auto__ = e28151;
var statearr_28152_28161 = state_28137;
(statearr_28152_28161[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28162 = state_28137;
state_28137 = G__28162;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18922__auto__ = function(state_28137){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18922__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18922__auto____1.call(this,state_28137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18922__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18922__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto___28154,ch))
})();
var state__18944__auto__ = (function (){var statearr_28153 = f__18943__auto__.call(null);
(statearr_28153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto___28154);

return statearr_28153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto___28154,ch))
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
var c__18942__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18942__auto__){
return (function (){
var f__18943__auto__ = (function (){var switch__18921__auto__ = ((function (c__18942__auto__){
return (function (state_28183){
var state_val_28184 = (state_28183[(1)]);
if((state_val_28184 === (1))){
var inst_28178 = cljs.core.async.timeout.call(null,(3000));
var state_28183__$1 = state_28183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28183__$1,(2),inst_28178);
} else {
if((state_val_28184 === (2))){
var inst_28180 = (state_28183[(2)]);
var inst_28181 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28183__$1 = (function (){var statearr_28185 = state_28183;
(statearr_28185[(7)] = inst_28180);

return statearr_28185;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28183__$1,inst_28181);
} else {
return null;
}
}
});})(c__18942__auto__))
;
return ((function (switch__18921__auto__,c__18942__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18922__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18922__auto____0 = (function (){
var statearr_28189 = [null,null,null,null,null,null,null,null];
(statearr_28189[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18922__auto__);

(statearr_28189[(1)] = (1));

return statearr_28189;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18922__auto____1 = (function (state_28183){
while(true){
var ret_value__18923__auto__ = (function (){try{while(true){
var result__18924__auto__ = switch__18921__auto__.call(null,state_28183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18924__auto__;
}
break;
}
}catch (e28190){if((e28190 instanceof Object)){
var ex__18925__auto__ = e28190;
var statearr_28191_28193 = state_28183;
(statearr_28191_28193[(5)] = ex__18925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28194 = state_28183;
state_28183 = G__28194;
continue;
} else {
return ret_value__18923__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18922__auto__ = function(state_28183){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18922__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18922__auto____1.call(this,state_28183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18922__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18922__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18922__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18922__auto__;
})()
;})(switch__18921__auto__,c__18942__auto__))
})();
var state__18944__auto__ = (function (){var statearr_28192 = f__18943__auto__.call(null);
(statearr_28192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18942__auto__);

return statearr_28192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18944__auto__);
});})(c__18942__auto__))
);

return c__18942__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28195){
var map__28202 = p__28195;
var map__28202__$1 = ((((!((map__28202 == null)))?((((map__28202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28202):map__28202);
var ed = map__28202__$1;
var formatted_exception = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28204_28208 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28205_28209 = null;
var count__28206_28210 = (0);
var i__28207_28211 = (0);
while(true){
if((i__28207_28211 < count__28206_28210)){
var msg_28212 = cljs.core._nth.call(null,chunk__28205_28209,i__28207_28211);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28212);

var G__28213 = seq__28204_28208;
var G__28214 = chunk__28205_28209;
var G__28215 = count__28206_28210;
var G__28216 = (i__28207_28211 + (1));
seq__28204_28208 = G__28213;
chunk__28205_28209 = G__28214;
count__28206_28210 = G__28215;
i__28207_28211 = G__28216;
continue;
} else {
var temp__4425__auto___28217 = cljs.core.seq.call(null,seq__28204_28208);
if(temp__4425__auto___28217){
var seq__28204_28218__$1 = temp__4425__auto___28217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28204_28218__$1)){
var c__17629__auto___28219 = cljs.core.chunk_first.call(null,seq__28204_28218__$1);
var G__28220 = cljs.core.chunk_rest.call(null,seq__28204_28218__$1);
var G__28221 = c__17629__auto___28219;
var G__28222 = cljs.core.count.call(null,c__17629__auto___28219);
var G__28223 = (0);
seq__28204_28208 = G__28220;
chunk__28205_28209 = G__28221;
count__28206_28210 = G__28222;
i__28207_28211 = G__28223;
continue;
} else {
var msg_28224 = cljs.core.first.call(null,seq__28204_28218__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28224);

var G__28225 = cljs.core.next.call(null,seq__28204_28218__$1);
var G__28226 = null;
var G__28227 = (0);
var G__28228 = (0);
seq__28204_28208 = G__28225;
chunk__28205_28209 = G__28226;
count__28206_28210 = G__28227;
i__28207_28211 = G__28228;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28229){
var map__28232 = p__28229;
var map__28232__$1 = ((((!((map__28232 == null)))?((((map__28232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28232):map__28232);
var w = map__28232__$1;
var message = cljs.core.get.call(null,map__28232__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__28240 = cljs.core.seq.call(null,plugins);
var chunk__28241 = null;
var count__28242 = (0);
var i__28243 = (0);
while(true){
if((i__28243 < count__28242)){
var vec__28244 = cljs.core._nth.call(null,chunk__28241,i__28243);
var k = cljs.core.nth.call(null,vec__28244,(0),null);
var plugin = cljs.core.nth.call(null,vec__28244,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28246 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28240,chunk__28241,count__28242,i__28243,pl_28246,vec__28244,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28246.call(null,msg_hist);
});})(seq__28240,chunk__28241,count__28242,i__28243,pl_28246,vec__28244,k,plugin))
);
} else {
}

var G__28247 = seq__28240;
var G__28248 = chunk__28241;
var G__28249 = count__28242;
var G__28250 = (i__28243 + (1));
seq__28240 = G__28247;
chunk__28241 = G__28248;
count__28242 = G__28249;
i__28243 = G__28250;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28240);
if(temp__4425__auto__){
var seq__28240__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28240__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__28240__$1);
var G__28251 = cljs.core.chunk_rest.call(null,seq__28240__$1);
var G__28252 = c__17629__auto__;
var G__28253 = cljs.core.count.call(null,c__17629__auto__);
var G__28254 = (0);
seq__28240 = G__28251;
chunk__28241 = G__28252;
count__28242 = G__28253;
i__28243 = G__28254;
continue;
} else {
var vec__28245 = cljs.core.first.call(null,seq__28240__$1);
var k = cljs.core.nth.call(null,vec__28245,(0),null);
var plugin = cljs.core.nth.call(null,vec__28245,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28255 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28240,chunk__28241,count__28242,i__28243,pl_28255,vec__28245,k,plugin,seq__28240__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28255.call(null,msg_hist);
});})(seq__28240,chunk__28241,count__28242,i__28243,pl_28255,vec__28245,k,plugin,seq__28240__$1,temp__4425__auto__))
);
} else {
}

var G__28256 = cljs.core.next.call(null,seq__28240__$1);
var G__28257 = null;
var G__28258 = (0);
var G__28259 = (0);
seq__28240 = G__28256;
chunk__28241 = G__28257;
count__28242 = G__28258;
i__28243 = G__28259;
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
var args28260 = [];
var len__17884__auto___28263 = arguments.length;
var i__17885__auto___28264 = (0);
while(true){
if((i__17885__auto___28264 < len__17884__auto___28263)){
args28260.push((arguments[i__17885__auto___28264]));

var G__28265 = (i__17885__auto___28264 + (1));
i__17885__auto___28264 = G__28265;
continue;
} else {
}
break;
}

var G__28262 = args28260.length;
switch (G__28262) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28260.length)].join('')));

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
var len__17884__auto___28271 = arguments.length;
var i__17885__auto___28272 = (0);
while(true){
if((i__17885__auto___28272 < len__17884__auto___28271)){
args__17891__auto__.push((arguments[i__17885__auto___28272]));

var G__28273 = (i__17885__auto___28272 + (1));
i__17885__auto___28272 = G__28273;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28268){
var map__28269 = p__28268;
var map__28269__$1 = ((((!((map__28269 == null)))?((((map__28269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28269):map__28269);
var opts = map__28269__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28267){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28267));
});

//# sourceMappingURL=client.js.map?rel=1454026304420