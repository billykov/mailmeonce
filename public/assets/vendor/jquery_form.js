(function($){function clickHandler(e){var t=this.form;if(t.clk=this,"image"==this.type)if(void 0!=e.offsetX)t.clk_x=e.offsetX,t.clk_y=e.offsetY;else if("function"==typeof $.fn.offset){var o=$(this).offset();t.clk_x=e.pageX-o.left,t.clk_y=e.pageY-o.top}else t.clk_x=e.pageX-this.offsetLeft,t.clk_y=e.pageY-this.offsetTop;setTimeout(function(){t.clk=t.clk_x=t.clk_y=null},10)}function submitHandler(){var e=this.formPluginId,t=$.fn.ajaxForm.optionHash[e];return $(this).ajaxSubmit(t),!1}$.fn.ajaxSubmit=function(options){function fileUpload(){function cb(){if(!cbInvoked++){io.detachEvent?io.detachEvent("onload",cb):io.removeEventListener("load",cb,!1);var ok=!0;try{if(timedOut)throw"timeout";var data,doc;if(doc=io.contentWindow?io.contentWindow.document:io.contentDocument?io.contentDocument:io.document,xhr.responseText=doc.body?doc.body.innerHTML:null,xhr.responseXML=doc.XMLDocument?doc.XMLDocument:doc,"json"==opts.dataType||"script"==opts.dataType){var ta=doc.getElementsByTagName("textarea")[0];data=ta?ta.value:xhr.responseText,"json"==opts.dataType?eval("data = "+data):$.globalEval(data)}else"xml"==opts.dataType?(data=xhr.responseXML,data||null==xhr.responseText||(data=toXml(xhr.responseText))):data=xhr.responseText}catch(e){ok=!1,$.handleError(opts,xhr,"error",e)}ok&&(opts.success(data,"success"),g&&$.event.trigger("ajaxSuccess",[xhr,opts])),g&&$.event.trigger("ajaxComplete",[xhr,opts]),g&&!--$.active&&$.event.trigger("ajaxStop"),opts.complete&&opts.complete(xhr,ok?"success":"error"),setTimeout(function(){$io.remove(),xhr.responseXML=null},100)}}function toXml(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.tagName?t:null}var form=$form[0],opts=$.extend({},$.ajaxSettings,options),id="jqFormIO"+$.fn.ajaxSubmit.counter++,$io=$('<iframe id="'+id+'" name="'+id+'" />'),io=$io[0],op8=$.browser.opera&&9>window.opera.version();($.browser.msie||op8)&&(io.src='javascript:false;document.write("");'),$io.css({position:"absolute",top:"-1000px",left:"-1000px"});var xhr={responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){}},g=opts.global;g&&!$.active++&&$.event.trigger("ajaxStart"),g&&$.event.trigger("ajaxSend",[xhr,opts]);var cbInvoked=0,timedOut=0;setTimeout(function(){$io.appendTo("body"),io.attachEvent?io.attachEvent("onload",cb):io.addEventListener("load",cb,!1);var e=form.encoding?"encoding":"enctype",t=$form.attr("target");$form.attr({target:id,method:"POST",action:opts.url}),form[e]="multipart/form-data",opts.timeout&&setTimeout(function(){timedOut=!0,cb()},opts.timeout),form.submit(),$form.attr("target",t)},10)}"function"==typeof options&&(options={success:options}),options=$.extend({url:this.attr("action")||window.location,type:this.attr("method")||"GET"},options||{});var veto={};if($.event.trigger("form.pre.serialize",[this,options,veto]),veto.veto)return this;var a=this.formToArray(options.semantic);if(options.beforeSubmit&&options.beforeSubmit(a,this,options)===!1)return this;if($.event.trigger("form.submit.validate",[a,this,options,veto]),veto.veto)return this;var q=$.param(a);"GET"==options.type.toUpperCase()?(options.url+=(options.url.indexOf("?")>=0?"&":"?")+q,options.data=null):options.data=q;var $form=this,callbacks=[];if(options.resetForm&&callbacks.push(function(){$form.resetForm()}),options.clearForm&&callbacks.push(function(){$form.clearForm()}),!options.dataType&&options.target){var oldSuccess=options.success||function(){};callbacks.push(function(e){this.evalScripts?$(options.target).attr("innerHTML",e).evalScripts().each(oldSuccess,arguments):$(options.target).html(e).each(oldSuccess,arguments)})}else options.success&&callbacks.push(options.success);options.success=function(e,t){for(var o=0,n=callbacks.length;n>o;o++)callbacks[o](e,t,$form)};for(var files=$("input:file",this).fieldValue(),found=!1,j=0;files.length>j;j++)files[j]&&(found=!0);return options.iframe||found?fileUpload():$.ajax(options),$.event.trigger("form.submit.notify",[this,options]),this},$.fn.ajaxSubmit.counter=0,$.fn.ajaxForm=function(e){return this.ajaxFormUnbind().submit(submitHandler).each(function(){this.formPluginId=$.fn.ajaxForm.counter++,$.fn.ajaxForm.optionHash[this.formPluginId]=e,$(":submit,input:image",this).click(clickHandler)})},$.fn.ajaxForm.counter=1,$.fn.ajaxForm.optionHash={},$.fn.ajaxFormUnbind=function(){return this.unbind("submit",submitHandler),this.each(function(){$(":submit,input:image",this).unbind("click",clickHandler)})},$.fn.formToArray=function(e){var t=[];if(0==this.length)return t;var o=this[0],n=e?o.getElementsByTagName("*"):o.elements;if(!n)return t;for(var a=0,r=n.length;r>a;a++){var i=n[a],s=i.name;if(s)if(e&&o.clk&&"image"==i.type)i.disabled||o.clk!=i||t.push({name:s+".x",value:o.clk_x},{name:s+".y",value:o.clk_y});else{var c=$.fieldValue(i,!0);if(c&&c.constructor==Array)for(var l=0,u=c.length;u>l;l++)t.push({name:s,value:c[l]});else null!==c&&"undefined"!=typeof c&&t.push({name:s,value:c})}}if(!e&&o.clk)for(var f=o.getElementsByTagName("input"),a=0,r=f.length;r>a;a++){var p=f[a],s=p.name;s&&!p.disabled&&"image"==p.type&&o.clk==p&&t.push({name:s+".x",value:o.clk_x},{name:s+".y",value:o.clk_y})}return t},$.fn.formSerialize=function(e){return $.param(this.formToArray(e))},$.fn.fieldSerialize=function(e){var t=[];return this.each(function(){var o=this.name;if(o){var n=$.fieldValue(this,e);if(n&&n.constructor==Array)for(var a=0,r=n.length;r>a;a++)t.push({name:o,value:n[a]});else null!==n&&"undefined"!=typeof n&&t.push({name:this.name,value:n})}}),$.param(t)},$.fn.fieldValue=function(e){for(var t=[],o=0,n=this.length;n>o;o++){var a=this[o],r=$.fieldValue(a,e);null===r||"undefined"==typeof r||r.constructor==Array&&!r.length||(r.constructor==Array?$.merge(t,r):t.push(r))}return t},$.fieldValue=function(e,t){var o=e.name,n=e.type,a=e.tagName.toLowerCase();if("undefined"==typeof t&&(t=!0),t&&(!o||e.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!e.checked||("submit"==n||"image"==n)&&e.form&&e.form.clk!=e||"select"==a&&-1==e.selectedIndex))return null;if("select"==a){var r=e.selectedIndex;if(0>r)return null;for(var i=[],s=e.options,c="select-one"==n,l=c?r+1:s.length,u=c?r:0;l>u;u++){var f=s[u];if(f.selected){var p=$.browser.msie&&!f.attributes.value.specified?f.text:f.value;if(c)return p;i.push(p)}}return i}return e.value},$.fn.clearForm=function(){return this.each(function(){$("input,select,textarea",this).clearFields()})},$.fn.clearFields=$.fn.clearInputs=function(){return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();"text"==e||"password"==e||"textarea"==t?this.value="":"checkbox"==e||"radio"==e?this.checked=!1:"select"==t&&(this.selectedIndex=-1)})},$.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})}})(jQuery);