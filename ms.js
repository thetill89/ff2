let LZString=function(){var o=String.fromCharCode;var t={compress:function(e){return t._compress(e,16,function(t){return o(t)})},_compress:function(o,t,e){if(null==o)return"";var r,n,i,p={},s={},a="",f="",u="",l=2,h=3,c=2,d=[],w=0,v=0;for(i=0;i<o.length;i+=1)if(a=o.charAt(i),Object.prototype.hasOwnProperty.call(p,a)||(p[a]=h++,s[a]=!0),f=u+a,Object.prototype.hasOwnProperty.call(p,f))u=f;else{if(Object.prototype.hasOwnProperty.call(s,u)){if(u.charCodeAt(0)<256){for(r=0;r<c;r++)w<<=1,v==t-1?(v=0,d.push(e(w)),w=0):v++;for(n=u.charCodeAt(0),r=0;r<8;r++)w=w<<1|1&n,v==t-1?(v=0,d.push(e(w)),w=0):v++,n>>=1}else{for(n=1,r=0;r<c;r++)w=w<<1|n,v==t-1?(v=0,d.push(e(w)),w=0):v++,n=0;for(n=u.charCodeAt(0),r=0;r<16;r++)w=w<<1|1&n,v==t-1?(v=0,d.push(e(w)),w=0):v++,n>>=1}0==--l&&(l=Math.pow(2,c),c++),delete s[u]}else for(n=p[u],r=0;r<c;r++)w=w<<1|1&n,v==t-1?(v=0,d.push(e(w)),w=0):v++,n>>=1;0==--l&&(l=Math.pow(2,c),c++),p[f]=h++,u=String(a)}if(""!==u){if(Object.prototype.hasOwnProperty.call(s,u)){if(u.charCodeAt(0)<256){for(r=0;r<c;r++)w<<=1,v==t-1?(v=0,d.push(e(w)),w=0):v++;for(n=u.charCodeAt(0),r=0;r<8;r++)w=w<<1|1&n,v==t-1?(v=0,d.push(e(w)),w=0):v++,n>>=1}else{for(n=1,r=0;r<c;r++)w=w<<1|n,v==t-1?(v=0,d.push(e(w)),w=0):v++,n=0;for(n=u.charCodeAt(0),r=0;r<16;r++)w=w<<1|1&n,v==t-1?(v=0,d.push(e(w)),w=0):v++,n>>=1}0==--l&&(l=Math.pow(2,c),c++),delete s[u]}else for(n=p[u],r=0;r<c;r++)w=w<<1|1&n,v==t-1?(v=0,d.push(e(w)),w=0):v++,n>>=1;0==--l&&(l=Math.pow(2,c),c++)}for(n=2,r=0;r<c;r++)w=w<<1|1&n,v==t-1?(v=0,d.push(e(w)),w=0):v++,n>>=1;for(;;){if(w<<=1,v==t-1){d.push(e(w));break}v++}return d.join("")},decompress:function(o){return null==o?"":""==o?null:t._decompress(o.length,32768,function(t){return o.charCodeAt(t)})},_decompress:function(t,e,r){var n,i,p,s,a,f,u,l=[],h=4,c=4,d=3,w="",v=[],g={val:r(0),position:e,index:1};for(n=0;n<3;n+=1)l[n]=n;for(p=0,a=Math.pow(2,2),f=1;f!=a;)s=g.val&g.position,g.position>>=1,0==g.position&&(g.position=e,g.val=r(g.index++)),p|=(s>0?1:0)*f,f<<=1;switch(p){case 0:for(p=0,a=Math.pow(2,8),f=1;f!=a;)s=g.val&g.position,g.position>>=1,0==g.position&&(g.position=e,g.val=r(g.index++)),p|=(s>0?1:0)*f,f<<=1;u=o(p);break;case 1:for(p=0,a=Math.pow(2,16),f=1;f!=a;)s=g.val&g.position,g.position>>=1,0==g.position&&(g.position=e,g.val=r(g.index++)),p|=(s>0?1:0)*f,f<<=1;u=o(p);break;case 2:return""}for(l[3]=u,i=u,v.push(u);;){if(g.index>t)return"";for(p=0,a=Math.pow(2,d),f=1;f!=a;)s=g.val&g.position,g.position>>=1,0==g.position&&(g.position=e,g.val=r(g.index++)),p|=(s>0?1:0)*f,f<<=1;switch(u=p){case 0:for(p=0,a=Math.pow(2,8),f=1;f!=a;)s=g.val&g.position,g.position>>=1,0==g.position&&(g.position=e,g.val=r(g.index++)),p|=(s>0?1:0)*f,f<<=1;l[c++]=o(p),u=c-1,h--;break;case 1:for(p=0,a=Math.pow(2,16),f=1;f!=a;)s=g.val&g.position,g.position>>=1,0==g.position&&(g.position=e,g.val=r(g.index++)),p|=(s>0?1:0)*f,f<<=1;l[c++]=o(p),u=c-1,h--;break;case 2:return v.join("")}if(0==h&&(h=Math.pow(2,d),d++),l[u])w=l[u];else{if(u!==c)return null;w=i+i.charAt(0)}v.push(w),l[c++]=i+w.charAt(0),i=w,0==--h&&(h=Math.pow(2,d),d++)}}};return t}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module?module.exports=LZString:"undefined"!=typeof angular&&null!=angular&&angular.module("LZString",[]).factory("LZString",function(){return LZString});
!function(){var e=0;function t(){return"qs_"+ ++e}function n(e,t){var n=r("div",null,"qs_label",t);return n.innerHTML=e,n}function i(e,t,n,i){var o=r("input",t,n,i);return o.type=e,o}function r(e,t,n,i){var r=document.createElement(e);if(r)return r.id=t,n&&(r.className=n),i&&i.appendChild(r),r}var o=!1,a=".qs_main{background-color:#dddddd;text-align:left;position:absolute;width:200px;font:12px sans-serif;box-shadow:5px 5px 8px rgba(0,0,0,0.35);user-select:none;-webkit-user-select:none;color:#000000;border:none}.qs_content{background-color:#cccccc;overflow-y:auto}.qs_title_bar{background-color:#eeeeee;user-select:none;-webkit-user-select:none;cursor:default;padding:5px;font-weight:bold;border:none;color:#000000}.qs_container{margin:5px;padding:5px;background-color:#eeeeee;border:none;position:relative}.qs_container_selected{border:none;background-color:#ffffff}.qs_range{-webkit-appearance:none;-moz-appearance:none;width:100%;height:17px;padding:0;margin:0;background-color:transparent;border:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_range:focus{outline:none;border:none}.qs_range::-webkit-slider-runnable-track{width:100%;height:15px;cursor:default;background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-webkit-slider-runnable-track{background:#cccccc}.qs_range::-webkit-slider-thumb{-webkit-appearance:none;height:15px;width:15px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:default;margin-top:0}.qs_range::-moz-range-track{width:100%;height:15px;cursor:default;background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range::-moz-range-thumb{height:15px;width:15px;border:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:default}.qs_range::-ms-track{width:100%;height:15px;cursor:default;visibility:hidden;background:transparent}.qs_range::-ms-thumb{height:15px;width:15px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:default;border:none}.qs_range::-ms-fill-lower{background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-ms-fill-lower{background:#cccccc}.qs_range::-ms-fill-upper{background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-ms-fill-upper{background:#cccccc}.qs_button{background-color:#f6f6f6;color:#000000;height:30px;border:1px solid #aaaaaa;font:12px sans-serif}.qs_button:active{background-color:#ffffff;border:1px solid #aaaaaa}.qs_button:focus{border:1px solid #aaaaaa;outline:none}.qs_checkbox{cursor:default;display:inline}.qs_checkbox input{position:absolute;left:-99999px}.qs_checkbox span{height:16px;width:100%;display:block;text-indent:20px;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALklEQVQ4T2OcOXPmfwYKACPIgLS0NLKMmDVrFsOoAaNhMJoOGBioFwZkZUWoJgApdFaxjUM1YwAAAABJRU5ErkJggg==') no-repeat}.qs_checkbox input:checked+span{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVQ4T63Tyw2EIBAA0OFKBxBL40wDRovAUACcKc1IB1zZDAkG18GYZTmSmafzgTnnMgwchoDWGlJKheGcP3JtnPceCqCUAmttSZznuYtgchsXQrgC+77DNE0kUpPbmBOoJaBOIVQylnqWgAAeKhDve/AN+EaklJBzhhgjWRoJVGTbNjiOowAIret6a+4jYIwpX8aDwLIs74C2D0IIYIyVP6Gm898m9kbVm85ljHUTf16k4VUefkwDrxk+zoUEwCt0GbUAAAAASUVORK5CYII=') no-repeat}.qs_checkbox_label{position:absolute;top:7px;left:30px}.qs_label{margin-bottom:3px;user-select:none;-webkit-user-select:none;cursor:default;font:12px sans-serif}.qs_text_input{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;padding:0 0 0 5px;height:24px;border:1px inset #ffffff;background-color:#ffffff;color:#000000;font-size:12px}.qs_text_input:focus{outline:none;background:#ffffff;border:1px inset #ffffff}.qs_select{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAp0lEQVRIS+2SsQ3FIAwF7RVYhA5mgQFhFuhYhJKWL0eKxI8SGylKZ0p4+OBsHGNM+HChAiS7qkgyBKrovaLeOxhjbgtxZ+cFtgelFMg5QwgBvPd/EO5sDbKAlBLUWo/8CjmL075zDmKMj6rEKbpCqBL9aqc4ZUQAhVbInBMQUXz5Vg/WfxOktXZsWWtZLds9uIqlqaH1NFV3jdhSJA47E1CAaE8ViYp+wGiWMZ/T+cgAAAAASUVORK5CYII=') no-repeat right #f6f6f6;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:#000000;width:100%;height:24px;border:1px solid #aaaaaa;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;padding:0 5px;-moz-outline:none;font-size:14px}.qs_select option{font-size:14px}.qs_select::-ms-expand{display:none}.qs_select:focus{outline:none}.qs_number{height:24px}.qs_image{width:100%}.qs_progress{width:100%;height:15px;background-color:#cccccc;border:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_progress_value{height:100%;background-color:#999999}.qs_textarea{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;resize:vertical;width:100%;padding:3px 5px;border:1px inset #ffffff;background-color:#ffffff;color:#000000;font-size:12px}.qs_textarea:focus{outline:none;background:#ffffff;border:1px inset #ffffff}.qs_color{position:absolute;left:-999999px}.qs_color_label{width:100%;height:20px;display:block;border:1px solid #aaaaaa;cursor:default;padding:0 0 0 5px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_file_chooser{position:absolute;left:-999999px}.qs_file_chooser_label{background-color:#f6f6f6;color:#000000;height:30px;border:1px solid #aaaaaa;font:12px sans-serif;width:100%;display:block;cursor:default;padding:7px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}";var s={_topZ:1,_panel:null,_titleBar:null,_content:null,_startX:0,_startY:0,_hidden:!1,_controls:null,_keyCodeArray:new Array,_globalChangeHandler:null,create:function(e,t,n,i){var r=Object.create(this);return r._init(e,t,n,i),r},destroy:function(){for(var e in this._panel.parentElement&&this._panel.parentElement.removeChild(this._panel),this)this[e]=null},_init:function(e,t,n,i){var r;o||((r=document.createElement("style")).innerText=a,document.head.appendChild(r),o=!0),this._bindHandlers(),this._createPanel(e,t,i),this._createTitleBar(n||"QuickSettings"),this._createContent()},_bindHandlers:function(){this._doubleClickTitle=this._doubleClickTitle.bind(this),this._onKeyUp=this._onKeyUp.bind(this)},_createPanel:function(e,t,n){this._panel=r("div",null,"qs_main",n||document.body),this._panel.style.zIndex=++s._topZ,this.setPosition(e||0,t||0),this._controls={}},_createTitleBar:function(e){this._titleBar=r("div",null,"qs_title_bar",this._panel),this._titleBar.textContent=e,this._titleBar.addEventListener("dblclick",this._doubleClickTitle)},_createContent:function(){this._content=r("div",null,"qs_content",this._panel)},_createContainer:function(){var e=r("div",null,"qs_container");return e.addEventListener("focus",function(){this.className+=" qs_container_selected"},!0),e.addEventListener("blur",function(){var e=this.className.indexOf(" qs_container_selected");e>-1&&(this.className=this.className.substr(0,e))},!0),this._content.appendChild(e),e},getPosition:function(){return[parseInt(this._panel.style.left),parseInt(this._content.style.width),parseInt(this._panel.style.top),parseInt(this._content.style.height)+parseInt(this._titleBar.offsetHeight)-1]},setPosition:function(e,t){return this._panel.style.left=e+"px",this._panel.style.top=Math.max(t,0)+"px",this},setSize:function(e,t){return this._panel.style.width=e+"px",this._content.style.width=e+"px",this._content.style.height=t-this._titleBar.offsetHeight+"px",this},setWidth:function(e){return this._panel.style.width=e+"px",this._content.style.width=e+"px",this},setHeight:function(e){return this._content.style.height=e-this._titleBar.offsetHeight+"px",this},setGlobalChangeHandler:function(e){return this._globalChangeHandler=e,this},_callGCH:function(e){this._localStorageName&&this._saveInLocalStorage(this._localStorageName),this._globalChangeHandler&&this._globalChangeHandler(e)},hide:function(){return this._panel.style.visibility="hidden",this._hidden=!0,this},show:function(){return this._panel.style.visibility="visible",this._panel.style.zIndex=++s._topZ,this._hidden=!1,this},toggleVisibility:function(){return this._hidden?this.show():this.hide(),this},setKey:function(e){return Number.isInteger(e)?this._keyCodeArray.push(e):this._keyCodeArray.push(e.toUpperCase().charCodeAt(0)),document.addEventListener("keyup",this._onKeyUp),this},_onKeyUp:function(e){this._keyCodeArray.includes(e.keyCode)&&this.toggleVisibility()},_doubleClickTitle:function(){this.toggleVisibility()},enableControl:function(e){return this._controls[e]&&(this._controls[e].control.disabled=!1),this},disableControl:function(e){return this._controls[e]&&(this._controls[e].control.disabled=!0),this},hideControl:function(e){return this._controls[e]&&(this._controls[e].container.style.display="none"),this},showControl:function(e){return this._controls[e]&&(this._controls[e].container.style.display="block"),this},hideTitle:function(e){var t=this._controls[e].label;return t&&(t.style.display="none"),this},showTitle:function(e){var t=this._controls[e].label;return t&&(t.style.display="block"),this},hideAllTitles:function(){for(var e in this._controls){var t=this._controls[e].label;t&&(t.style.display="none")}return this},showAllTitles:function(){for(var e in this._controls){var t=this._controls[e].label;t&&(t.style.display="block")}return this},getValue:function(e){return this._controls[e].getValue()},setValue:function(e,t){return this._controls[e].setValue(t),this._callGCH(e),this},addBoolean:function(e,n,o){var a=this._createContainer(),s=t(),l=r("label",null,"qs_checkbox_label",a);l.textContent=e,l.setAttribute("for",s);var c=r("label",null,"qs_checkbox",a);c.setAttribute("for",s);var u=i("checkbox",s,null,c);u.checked=n;r("span",null,null,c);this._controls[e]={container:a,control:u,getValue:function(){return this.control.checked},setValue:function(e){this.control.checked=e,o&&o(e)}};var d=this;return u.addEventListener("change",function(){o&&o(u.checked),d._callGCH(e)}),this},bindBoolean:function(e,t,n){return this.addBoolean(e,t,function(t){n[e]=t})},addButton:function(e,n){var r=this._createContainer(),o=i("button",t(),"qs_button",r);o.value=e,this._controls[e]={container:r,control:o};var a=this;return o.addEventListener("click",function(){n&&n(o),a._callGCH(e)}),this},addDropDown:function(e,t,i){for(var o=this._createContainer(),a=n("<b>"+e+"</b>",o),s=r("select",null,"qs_select",o),l=0;l<t.length;l++){var c=r("option"),u=t[l];u.label?(c.value=u.value,c.innerText=u.label):(c.label=u,c.innerText=u),s.add(c)}var d=this;return s.addEventListener("change",function(){var n=s.selectedIndex,r=s.options;i&&i({index:n,label:r[n].label,value:t[n].value||t[n]}),d._callGCH(e)}),this._controls[e]={container:o,control:s,label:a,getValue:function(){var e=this.control.selectedIndex;return{index:e,label:this.control.options[e].label,value:t[e].value||t[e]}},setValue:function(e){var n;n=null!=e.index?e.index:e;var r=this.control.options;this.control.selectedIndex=n,i&&i({index:n,label:r[n].label,value:t[n].value||t[n]})}},this},bindDropDown:function(e,t,n){return this.addDropDown(e,t,function(t){n[e]=t.value})},addRange:function(e,t,n,i,r,o){return this._addNumber("range",e,t,n,i,r,o)},addNumber:function(e,t,n,i,r,o){return this._addNumber("number",e,t,n,i,r,o)},_addNumber:function(e,r,o,a,s,l,c){var u=this._createContainer(),d=n("",u),h="range"===e?"qs_range":"qs_text_input qs_number",b=i(e,t(),h,u);b.min=o||0,b.max=a||100,b.step=l||1,b.value=s||0,d.innerHTML="<b>"+r+":</b> "+b.value,this._controls[r]={container:u,control:b,label:d,title:r,callback:c,getValue:function(){return parseFloat(this.control.value)},setValue:function(e){this.control.value=e,this.label.innerHTML="<b>"+this.title+":</b> "+this.control.value,c&&c(parseFloat(e))}};var f=this;return b.addEventListener("input",function(){d.innerHTML="<b>"+r+":</b> "+b.value,c&&c(parseFloat(b.value)),f._callGCH(r)}),this},bindRange:function(e,t,n,i,r,o){return this.addRange(e,t,n,i,r,function(t){o[e]=t})},bindNumber:function(e,t,n,i,r,o){return this.addNumber(e,t,n,i,r,function(t){o[e]=t})},setRangeParameters:function(e,t,n,i){return this.setNumberParameters(e,t,n,i)},setNumberParameters:function(e,t,n,i){var r=this._controls[e],o=r.control.value;return r.control.min=t,r.control.max=n,r.control.step=i,r.control.value!==o&&r.callback&&r.callback(r.control.value),this},addProgressBar:function(e,t,i,o){var a=this._createContainer(),s=n("",a),l=r("div",null,"qs_progress",a),c=r("div",null,"qs_progress_value",l);return c.style.width=i/t*100+"%",s.innerHTML="numbers"===o?"<b>"+e+":</b> "+i+" / "+t:"percent"===o?"<b>"+e+":</b> "+Math.round(i/t*100)+"%":"<b>"+e+"</b>",this._controls[e]={container:a,control:l,valueDiv:c,valueDisplay:o,label:s,value:i,max:t,title:e,getValue:function(){return this.value},setValue:function(e){this.value=Math.max(0,Math.min(e,this.max)),this.valueDiv.style.width=this.value/this.max*100+"%","numbers"===this.valueDisplay?this.label.innerHTML="<b>"+this.title+":</b> "+this.value+" / "+this.max:"percent"===this.valueDisplay&&(this.label.innerHTML="<b>"+this.title+":</b> "+Math.round(this.value/this.max*100)+"%")}},this},setProgressMax:function(e,t){var n=this._controls[e];return n.max=t,n.value=Math.min(n.value,n.max),n.valueDiv.style.width=n.value/n.max*100+"%","numbers"===n.valueDisplay?n.label.innerHTML="<b>"+n.title+":</b> "+n.value+" / "+n.max:"percent"===n.valueDisplay?n.label.innerHTML="<b>"+n.title+":</b> "+Math.round(n.value/n.max*100)+"%":n.label.innerHTML="<b>"+n.title+"</b>",this},addText:function(e,t,n){return this._addText("text",e,t,n)},_addText:function(e,o,a,s){var l,c=this._createContainer(),u=n("<b>"+o+"</b>",c);"textarea"===e?(l=r("textarea",t(),"qs_textarea",c)).rows=5:l=i(e,t(),"qs_text_input",c),l.value=a||"",this._controls[o]={container:c,control:l,label:u,getValue:function(){return this.control.value},setValue:function(e){this.control.value=e,s&&s(e)}};var d=this;return l.addEventListener("input",function(){s&&s(l.value),d._callGCH(o)}),this},bindText:function(e,t,n){return this.addText(e,t,function(t){n[e]=t})},addTextArea:function(e,t,n){return this._addText("textarea",e,t,n)},setTextAreaRows:function(e,t){return this._controls[e].control.rows=t,this},bindTextArea:function(e,t,n){return this.addTextArea(e,t,function(t){n[e]=t})},addTime:function(e,r,o){var a;if(r instanceof Date){var s=r.getHours();s<10&&(s="0"+s);var l=r.getMinutes();l<10&&(l="0"+l);var c=r.getSeconds();c<10&&(c="0"+c),a=s+":"+l+":"+c}else a=r;var u=this._createContainer(),d=n("<b>"+e+"</b>",u),h=i("time",t(),"qs_text_input",u);h.value=a||"",this._controls[e]={container:u,control:h,label:d,getValue:function(){return this.control.value},setValue:function(e){var t;if(e instanceof Date){var n=e.getHours();n<10&&(n="0"+n);var i=e.getMinutes();i<10&&(i="0"+i);var r=e.getSeconds();r<10&&(r="0"+r),t=n+":"+i+":"+r}else t=e;this.control.value=t||"",o&&o(t)}};var b=this;return h.addEventListener("input",function(){o&&o(h.value),b._callGCH(e)}),this},bindTime:function(e,t,n){return this.addTime(e,t,function(t){n[e]=t})}};window.qs=s}();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let sVersion = 'v.0.831', sLoaded = false
let maxRuns = 120, mainBuild = 8

initScript()
function initScript() {
	if (sLoaded && typeof hundredbplus === 'object' && document.getElementsByClassName('eventbtn').length) {
		let now = Date.now()
		loadSettings()
		createButtons()
		createUI()
		createSettingsUI()
		createCalcUI()
		createCostUI()
		createMissionUI()
		loadLog()
		loadStatus() 
		setTheme()
		getFarmTime()
		getMissionTime()
		getTourTime()
		getResearchTime()
		checkReward(true)
		getCalcData()
		statusInfo()
		initLoop()
		addStatus2(seperator)
		addStatus2('Loaded in: 0.' + (Date.now()-now) + ' sec')
		if (ST.idle) startIdleMode() 		
	}
	else setTimeout(initScript, 50)
}

let mainLoop, autoPlay = false, updateTimer = Date.now()
function initLoop() {
	mainLoop = window.setInterval(function() {
		let now = new Date()
		if (now - updateTimer >= 500) {
			checkConnection()
			collectFarm()
			doMission()
			doTour()
			doResearch()
			displayStats()
		    if (!autoPlay && sleepOn && now.getHours() === sleepTime[0] && now.getMinutes() >= sleepTime[1]) { 
				clearInterval(mainLoop)
				location.href = '1.php'
		   }
		   updateTimer = now
		}		
		if (autoPlay) {
			buyRoutine()
			idleRoutine()
			resetRoutine()
		}
	}, 20)
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let buyMax, buyGoal, minFries, useMaxBuy, otherPct, buyTimeOut, buyStep
let buyTimer = buyStepTimer = idleTimer = sessionTimer = sessionTimer2 = Date.now()
let sessionTime = idleTime = idleStep = idleMax = 0, idleStats = [0,0,[]] 
let maxProd = maxLevel = highLevel = prodExeeded = 0

function buyRoutine() { 
	if (!building[mainBuild]) { 
		buyStep = prodExeeded = 0
		buyStepTimer = Date.now()
		ep = getPoints('event')
		sp = getPoints('skill')
	}
	if (buyStep > buyMax.length || idlemode || resetStep || prodExeeded || getLevel() >= highLevel - 10) return
	if (buyTimeOut > Date.now() - buyTimer || getSessionTime() > idleMax + 10 || getIdleTime() < idleTime) return
	if (building[1] < minFries) {
		for (let i = 1; i <= 8; i++) if (maxbplus[i] > 100) buildingbuy(i, 4)
	}
	else {
		let nextGoal = buyStep < buyMax.length ? buyMax[buyStep] : buyGoal[buyGoal.length-1]
		let maxBuild = buyStep < 1 ? otherPct * nextGoal : (otherPct - 0.2) * nextGoal
		let curBuild = getBuildingCount(true)		
		for (let i = 0; i <= 1; i++) {      
			let nbr = !i ? [mainBuild,building[mainBuild],building[mainBuild]<nextGoal] : [curBuild[0],building[curBuild[0]],curBuild[1]<maxBuild]	
			let amt = maxbplus[nbr[0]] > 500 && nbr[1] < useMaxBuy && !buyStep ? 4 : 3
			if (nbr[2]) buildingbuy(nbr[0], amt)
		}	
		if (building[mainBuild] >= nextGoal && curBuild[1] >= maxBuild) startIdleMode()
	}
	buyTimer = Date.now()
}

function idleRoutine() {
	if (!idlemode || idleStep) return
	if (getIdleTime() > idleTime) idleStep = 1
	if (getSessionTime() > sessionTime) idleStep = 2
	if (idleStep) {		
		$j.get('game/offlineearning.php').done(function(r) { 
				buyStepTimer = Date.now()
				idleTimer = Date.now()
				idleTime = -1
				idlemode = 0
				idleStep = 0
				homeanz()
			}).fail(function() {
					setIdleTime(5)
					if (idleStep === 2) setSessionTime(5)		
					idleStep = 0							
			})	
	}
}

function startIdleMode() {
	if (autoPlay) {
		buyStep++
		idleTimer = Date.now()
		if (buyStep > buyMax.length) idleTime = sessionTime
		else idleTime = (getBuyCost() - getGold()) / getValue(incomeoffline) + 1
		let time = getSessionTime()
		if (idleTime < 30) idleTime = 30
		if (idleTime + time > idleMax) idleTime = sessionTime - time - 1
		let diff = getValue(maxProd)/getValue(incomeoffline)
		if (diff < 1) { 
			idleTime =  sessionTime * diff - time
			prodExeeded = true
		}
		idleStats[0] = [displayTime(idleTime + time)]
		idleStats[1] = [idleTime]	
		idleStats[2].push(' ' + displayTime(time) + '   |   ' + building[mainBuild] + '    |   ' + incomeoffline.slice(2,12))
		if (idleTime >= 30 && getLevel() <= highLevel - 10) {
			idlemode = 1
			if (isVisible('home')) {
				$j('#home').toggle()
				$j('#idlemode').toggle()	
			}
		}
		else addStatus2('Idle time: ' + idleStats[0])
		if (buyStep > 1) getMissionTime()
	}
	else {
		closeall()
		$j('#idlemode').toggle() 
		idlemodestart()
	}
	displayStats()
}

function toggleAutoPlay(adjust=true) {
	if (!autoPlay) {
		if (adjust) {
			sessionTimer = sessionTimer2 = Date.now()
			setSessionTime(nextrstimediv-600)
		}
		else sessionTimer = sessionTimer2 = Date.now()
		idleStep = 0
		idleTimer = Date.now()
		idleTime = -1
		idleStats = [0,0,[]] 
		buyStepTimer = Date.now()
		buyStep = 0
		prodExeeded = 0
		resetStep = 0
		ep = getPoints('event')
		sp = getPoints('skill')
		gemsbar.style.border = '1.2px solid ' + theme
		autoPlay = Date.now()
		buyMax.forEach((v,i) => building[mainBuild] >= v ? buyStep = i : 0)
		if (building[mainBuild] >= buyGoal[buyGoal.length-1]) buyStep++
		if (buyStep) {
			if (getSessionTime() > idleMax) buyStep++
			else startIdleMode()
		}
		else {
			closeall()
			if (ST.idle) $j('#idlemode').toggle()
			else $j("#home").toggle()
		}	
	}
	else {
		if (idlemode) idlemodeend()
		gemsbar.style.border = '1px dotted ' + theme
		autoPlay = false
	}
	displayStats()
	highlightBtn(btn1)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let resetStep = ep = sp = 0, runData = []
function resetRoutine() {
	if (getSessionTime() < sessionTime + 1 || idlemode || resetStep) return
	resetStep = 1
	$j.get('game/megaanz.php').done(function(r) {
		setRunData(r)
		adjustProd()
		$j.get('game/resetmd.php?rscode=0').done(function(r) {
			if (r.erfolg === 1) finishRun()
			else if (r.erfolg === 5) solveCaptcha(r.codemessage)
			else if (r.erfolg === 2) {
				setSessionTime(10)
				resetStep = 0
				addStatus2('Reset error: <10 Min')
			}
		}).fail(function() {
				setSessionTime(10)
				resetStep = 0
				addStatus2('Reset error: ResetMD')
			})
	}).fail(function() {
			setSessionTime(10)	
			resetStep = 0
			addStatus2('Reset error: Megaanz')
		})				
}

function setRunData(r) {
	runData.push([getLevel(), parseFloat(document.getElementsByClassName('epbari')[0].style.width),	incomeoffline.slice(2,12), r.nextreset, r.maxrelikte, new Date().toLocaleTimeString().slice(0,5), (todayRuns.r+1)])		
	let dollarTotal = convertValue(getValue(r.nextreset) + getValue(r.relikte))
	$j('.button').eq(4).html('&nbsp&nbsp&nbspMS: ' + dollarTotal)
}

function adjustProd() {
	let factor, level = runData[runData.length-1][0] 
	if ((Date.now() - autoPlay)/1000 > sessionTime) {
		if (level < maxLevel && prodExeeded) factor = 1.01
	 	else if (level > maxLevel || (level === maxLevel && runData[runData.length-1][1] > 70)) factor = 0.99
		if (factor) {
			maxProd = prodExeeded ? convertValue(getValue(maxProd) * factor) : convertValue(getValue(incomeoffline) * factor)
			UI[2].setValue('maxProd', maxProd)
			saveSettings()
		}
	}
	if (level > highLevel) { 
		highLevel = level
		saveSettings()
	}
}

function solveCaptcha(captcha) {
	let code = captcha.substr(captcha.lastIndexOf('>')+1, captcha.length)
	let numbers = code.match(/\d+/g).map(Number)
	if (captcha.includes('add')) captcha = numbers[0] + numbers[1]
	else if (captcha.includes('subtract')) captcha = numbers[0] - numbers[1]
	else if (captcha.includes('Multiply')) captcha = numbers[0] * numbers[1]
	else captcha = numbers[0] / numbers[1]
	$j.get('game/resetmd.php?rscode=' + captcha).done(() =>	finishRun()).fail(function() {
			setSessionTime(10)	
			resetStep = 0
			addStatus2('Reset error: Captcha solve')
    })
}

let sleepTime = [], sleepOn = finishNext = 0 
let finishAudio = new Audio('https://thetill89.github.io/ff2/finish.mp3')
function finishRun() {
	ep = getPoints('event') - ep 
	sp = getPoints('skill') - sp 
	if (sp < 0 || sp > 10 || ep < 30 || ep > 80)   {
		ep = Math.floor(Math.random() * (50 - 45 + 1)) + 45
		sp = Math.floor(Math.random() * (5 - 1 + 1)) + 1	
	}
	setTodayRuns()
	updateSummary()	
	addLog(pl(todayRuns.r, 3) + ' | ' + pl(runData[runData.length-1][0],5) + ' | ' + pl(runData[runData.length-1][2],9) + ' | '
	+ pl(runData[runData.length-1][3],9) + ' | '  + pl(runData[runData.length-1][4],10) + ' | '
	+ pl(sp,2) + ' sp | ' + pl(ep,3) + ' ep')
	sessionTimer = sessionTimer2 = Date.now()
	idleTimer = Date.now()
	idleTime = -1
	idleStats = [0,0,[]] 
	idlemode = 0
	idleStep = 0
	resetStep = 0
	homeanz()
	if (sleepOn && new Date().getHours() === sleepTime[0] && new Date().getMinutes() >= sleepTime[1]) {
		autoPlay = false
		location.href = '1.php'
	}
	else if (finishNext) {
		if (ST.audio) finishAudio.play()
		gemsbar.style.border = '1px dotted ' + theme
		autoPlay = false
		finishNext = false
		highlightBtn(btn1)
		highlightBtn(btn2)
	}
	getMissionTime() 
	buyResearchPoint()
	upgradeSkill()
	checkReward()
	statusInfo()
}

function displayStats() {
    let total = getBuildingCount()
	if (isVisible('idlemode') || isVisible('afkwin')) {
		 let i1 = [], i2 = []
		 let status =  ' CURRENT RUN ' + (autoPlay ? buyStep + '/' + (buyMax.length+1) : '')
		 i1.push(status + '\n')
		 i1.push(' Time    |   Count   |   Prod  ')
		 i1.push(' ' + ('-').repeat(35))
		 status = autoPlay && idleStats[2].length ? [...idleStats[2]].reverse().join('\n') : 
			' ' + displayTime(getSessionTime()) + '   |   ' + pr(building[mainBuild],5) + '   |   ' + incomeoffline.slice(2,12)
		 i1.push(status)
		 $j('#ii1').val(i1.join('\n')) 
		  //--------------------------------------  
		if (idlemode) {
			let s = 10
			let nextBuilding = autoPlay && buyStep <= buyMax.length ? buyGoal[buyStep-1] : building[mainBuild] + 100
			let nextCost = autoPlay && buyStep <= buyMax.length ? getBuyCost() : getValue(bcost[mainBuild*4-1])
			let time = (nextCost-getGold()) / getValue(incomeoffline)
			time = time < 3600 ? displayTime(time) : displayTime(time,true)
			let info = !isVisible('afkwin') ? ' IDLE MODE\n' : ' IDLE MODE                      ' + displayTime(getSessionTime()) + ' \n'
			i2.push(info)
			i2.push(' ' + pr('Time',s) + '  |   ' +  pr('Need',s) + ' |   End')
			i2.push(' ' + pr(displayTime(getIdleTime()),s) + '  |   ' +  pr(time,s) + ' |   ' + (idleStats[0] || '00:00'))     
			i2.push(' ' + ('-').repeat(37))
			i2.push(' ' + pr('Cost',s) + '  |   ' +  pr('Need',s) + ' |   Next')
			i2.push(' ' + pr(convertValue(getGold() + getIdleIncome()),s) + '  |   ' +  pr(convertValue(nextCost),s) + ' |   ' + nextBuilding)  	  
		}
		else {
			let s = 7
			let info = !isVisible('afkwin') ? ' BUYING\n' : ' BUYING                        ' + displayTime(getSessionTime()) + ' \n'
			i2.push(info)
			i2.push(' ' + pr('Fries',s) + ' | ' + pr('Pizza',s)  + ' | ' + pr('Hotdog',s) + ' |  Hamb')
			i2.push(' ' + pr(total[0][0],s) + ' | ' + pr(total[0][1],s) + ' | ' + pr(total[0][2],s) + ' |  ' + total[0][3])
			i2.push(' ' + ('-').repeat(37))
			i2.push(' ' + pr('Bike',s) + ' | ' + pr('Scooter',s)  + ' | ' + pr('Van',s) + ' |  Truck')
			i2.push(' ' + pr(total[0][4],s) + ' | ' + pr(total[0][5],s) + ' | ' + pr(total[0][6],s) + ' |  ' + total[0][7]) 
		}	 
	    if (!isVisible('afkwin')) $j('#ii2').val(i2.join('\n'))
	 	else {
			 if (runData.length) {
				let max = 0
				i2.push('\n')
				 for (let i = runData.length-1; i >= 0; i--) {
					max++
					if (max === 5) break
					let cur = runData[i]
					i2.push(cur[5] + ' | ' + cur[6] + ' | ' + cur[0] + ' | ' + cur[2] + ' | ' +  cur[4])
				 }
				 
			 }
			 $j('#afkwin').val(i2.join('\n'))
		 }
		 if (autoPlay && !idlemode)	ii2.style.outline = '1.5px solid ' + theme
		 else ii2.style.outline = 'none'
	}
	else if (isVisible('home')) {
		 let factor = building[mainBuild] ? total[1]/building[mainBuild] : 1
		 let div = document.getElementsByClassName('buildingname')
		 div[0].innerText = 'total: ' + total[1].toLocaleString()
		 div[1].innerText = 'factor: ' + factor.toFixed(2)
	 } 
	let mTime, fTime
	mTime = missionLeft - (Date.now() - missionTimer)/1000
	mTime = mTime >= 3600 ? '∞' : mTime >= 60 ? pl(Math.round(mTime/60),2) +  ' min': displayTime(mTime)	
	fTime = farmLeft/1000 - (Date.now() - farmTimer)/1000
	fTime = fTime >= 9600 ? '∞' : fTime >= 60 ? pl(Math.round(fTime/60),2) +  ' min': displayTime(fTime)	
	timeinfo.innerHTML = '\nMission: ' + mTime + '\nFarming: ' + fTime
	$j('.gems').html(autoPlay ? 'AUTO ' + (idlemode ? 'IDLE' : 'BUY ') + '&nbsp'.repeat(19) + displayTime(getSessionTime()) : 'MANUAL MODE' + '&nbsp'.repeat(17) + new Date().toLocaleTimeString().slice(0,5))
	document.title = displayTime(getSessionTime()) + (autoPlay ? ' - ' + getLevel() + ' - ' + (todayRuns.r + 1 ) + ' - ' + account : ' - IDLE')
}

function statusInfo() {
	let s = 11
	info2.value = ''
	if (runData.length) addStatus2(pr('Last:',s) + runData[runData.length-1][0] + ', ' + Math.floor(runData[runData.length-1][1]) + '%') 
	if (todayRuns.c) {
		addStatus2(pr('Ø SP:',s) + (todayRuns.sp/todayRuns.c).toFixed(2) + ', ' + (todayRuns.ep/todayRuns.c).toFixed(2))
		addStatus2(pr('Today: ',s) + todayRuns.r)
	}
	addStatus2(seperator)
	let data = getFarmData()
	let time = (Date.now()-ST.startTime)/1000
	addStatus2(pr('Points:',s-1) + data[2] + ' | ' + data[3] + ' | ' + data[4])
	addStatus2(pr('Farm:',s) + data[1])
	let runMS = convertValue(getValue(getLogData()[1]) * todayRuns.r)
	addStatus2(pr('Dollar:',s) +  runMS)
	addStatus2(seperator)
	addStatus2(pr('Level:',s)+ highLevel)
	addStatus2(pr('Resets:',s) + ST.totalRuns.toLocaleString())
	addStatus2(pr('Playtime:',s) + displayTime(time, true))
	addStatus2(pr('Account:',s) + account)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let missionTimer = tourTimer = researchTimer = farmTimer = Date.now()
let missionLeft = tourLeft = researchLeft = farmLeft = 1e9 
let autoMission = false, failTimeOut = 15

function getMissionTime() {
	$j.get('game/clanquests.php').done(function(r) {
		missionLeft = (r.clanquestdauer + 1) || 1e9
		missionTimer = Date.now()
		getMissionStanding(r)
		getClanChat()
		if (!autoPlay && autoMission) setTimeout(getMissionTime, 600000)
	}).fail(() => setTimeout(getMissionTime, failTimeOut * 1000))	
}

let missionData = []
function doMission() {
	if (resetStep || !autoMission) return
	if (Date.now() - missionTimer > missionLeft * 1000) {
		missionLeft = 1e9
		$j.get('game/clanquests.php').done(function(r) {
			let need = r.aktfullpoints
			if (!r.uaktanz && typeof r.uaktanz !== 'undefined') {
				missionData.push([r.aktfullpoints, r.clanquests])
				$j.get('game/cqattack.php').done(function() {
					setTimeout(getMissionTime, 2000)	
					addStatus('Mission: ' + need)
					$j('.clanbtn').html('Fastfood Clan')
				}).fail(() => setTimeout(getMissionTime, failTimeOut * 1000))
			}
			else setTimeout(getMissionTime, 2000)
		}).fail(() => setTimeout(getMissionTime, failTimeOut * 1000))
	}
}

function getTourTime() {
	$j.get('game/guildanz.php').done(function(r) {
		tourLeft = r.clandauernoch + 1
		tourTimer = Date.now()		
	}).fail(() => setTimeout(getTourTime, failTimeOut * 1000))	
}

function doTour() {
	if (resetStep) return
	if (Date.now() - tourTimer > tourLeft * 1000) {
		tourLeft = 1e9
		$j.get('game/clantourfertig.php').done(function() {
			$j.get('game/clantourstart.php').done(function() {
				getTourTime()
				addStatus('Tour started')
				setTimeout(() => $j.get('game/buynextclanb.php'), 2000)
			}).fail(() => setTimeout(getTourTime, failTimeOut * 1000))	
		}).fail(() => setTimeout(getTourTime, failTimeOut * 1000))		
	}
}

let farmMax
function getFarmTime() {
	$j.get('game/megaidleanz.php').done(function(r) {
		farmLeft = (farmMax * 60 - r.megaidletime + 1) * 1000
		if (farmLeft < 0 ) farmLeft = 0
		let now = new Date(), farmNext = new Date()
		farmNext.setMilliseconds(farmNext.getMilliseconds() + farmLeft)
		let midNight = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 0, -1)
		if (farmNext.getDate() !== now.getDate() && midNight - now > 600000) farmLeft = midNight - now		
		farmTimer = Date.now()
		$j('.button').eq(5).html('&nbsp&nbsp&nbspFarm: ' + r.megaidlepoints)
		if (r.megaidlepoints >= r.costs2) {
				r.megaidlepoints -= r.costs2
				$j.get('game/megaidleup.php?2')
				addStatus('Farm upgrade ' + (r.costs2+1))
				$j('.button').eq(5).html('&nbsp&nbsp&nbspFarm: ' + r.megaidlepoints)
		}
			
	}).fail(() => setTimeout(getFarmTime, failTimeOut * 1000))		
}
	
	
function collectFarm() {
	if (resetStep) return
	if (Date.now() - farmTimer > farmLeft) {
		farmLeft = 1e9
		$j.get('game/farmcollect.php').done(function(r) {
			if (r.erfolg === 1) {
				let fp = ' | ' + pl(r.megapointswin, 2) 
				let fsp = ' | ' + pl(r.skillpointsplus, 2)
				let fep = ' | ' + pl(r.eventpointsplus, 2)			
				sp += r.skillpointsplus
				ep += r.eventpointsplus
				addStatus(r.megadollarwin +  fp + fsp + fep)
				addStatus('Farm collect')
			} 
			else if (r.erfolg === 2) addStatus2('Farm time <1 min')
			getFarmTime()
		 }).fail(() => setTimeout(getFarmTime, failTimeOut * 1000))				
	}
}

function collectNow() {
	let val = btn20.innerText
	if (val === 'Collect') {
		btn20.innerText = 'Confirm?'
		setTimeout(function(){ btn20.innerText = 'Collect' }, 5000)
	}
	else {
		farmLeft = 0
		collectFarm()
		btn20.innerText = 'Collect'
		highlightBtn(btn20,true) 
	}		
}

let researchNow
function getResearchTime() {
	$j.get('game/researchanz.php').done(function(r) {
		researchLeft = (r.researchdauernoch + 1) * 1000
		researchTimer = Date.now()	
		researchNow = r.nextresearch
		$j('.researchbtn').html('Research: ' + r.researchpoints)		
	}).fail(() => setTimeout(getResearchTime, failTimeOut * 1000))		
}

function doResearch() {
	if (resetStep || (buyStep && researchNow === mainBuild)) return
	if (Date.now() - researchTimer > researchLeft) {
		researchLeft = 1e9
		$j.get('game/researchfertig.php').done(function() {
			$j.get('game/researchstart.php').done(function() {
				getResearchTime()
				addStatus('Research started')
			 }).fail(() => setTimeout(getResearchTime, failTimeOut * 1000))	
		}).fail(() => setTimeout(getResearchTime, failTimeOut * 1000))	
	}
}

let autoRP
function buyResearchPoint() {
	if (autoRP && getPoints('event') >= 500) {
		$j.get('game/eventbuy.php?3').done(function(r) { 
			addStatus('Buy RP ' + r.researchpoints + ' | ' + getLastBuy() + ' min')
			$j('.researchbtn').html('Research: ' + r.researchpoints)
			$j('.eventbtn').html('Event: ' + r.eventpoints) 
		 })	
	}	
}

function getLastBuy() {
	let data = info1.value.split('\n')
	for (let i = 0; i < data.length; i++) {
		let e = data[i].match(/(\d+).(\d+)...(\d+).(\d+).*RP/)
		if (e) { 
			e = e.map(Number)
			let n = new Date()
			let d = new Date(n.getFullYear(), e[2]-1, e[1], e[3], e[4])
			let min = Math.round((n-d)/1000/60)
			if (min > 180) min = '+180'
			return min
		}
	}
	return 0
}

let autoSkill
function upgradeSkill() {
	if (autoSkill) {
		let spTmp = getPoints('skill')
		if (spTmp >= 10) {
			spTmp -= 10
			$j.get('game/skillupgrade.php?10').done(() => $j('.skillbtn').html('Skills: ' + spTmp))	
		}	
	}
}

function getMissionStanding(r) {
	let info = [] 
	let pct = r.aktclanquest ? pl(Math.floor(getValue(r.aktclanquest)/getValue(r.aktfullpoints)*100) + '%', 5) + pl((r.aktclanquest + ' / ' + r.aktfullpoints), 29) : ''
	info.push('\ MISSION' + pct + '\n')
	if (r.anz) {
		let max = r.anz < 9 ? 2 : 9
		for (let i = 1; i <= max; i++) {
			let points = r.aktclandmg[i]
			if (!points) continue
			let level = ' ' + pl(r.maxlevelarr[i], 4) + ' | '
			let name = pr(r.namearray[i].split('> ')[1].slice(0,16), 16) + ' | '
			points = pl(points.toLocaleString(), 15)
			info.push(level + name + points)
		}
	}
	$j('#ii4').val(info.join('\n')) 
}


function getClanChat() {
	let maxEntry = 9
	$j.get('game/sortonline.php').done(function(r) {	
		let info = []
		info.push(' ONLINE\n')
		if (r.anz) {
			let max = r.anz < 2 ? r.anz : 2
			for (let i = 1; i <= max; i++) {
				let nbr =  pl(i,2) + ' | '
				let level = pl(r.maxlevelarr[i], 5) + '  |'
				let name = pr(r.namearray[i].match(/\/>\s(\w+)/)[1].slice(0,16), 16) + ' | '
				let status = r.clanrangarr[i].match(/title\="([^"]*)/)[1]
				if (status.includes('Last')) status = ' ' + status.substr(status.length-5)
				status = '    ' + status
				info.push(nbr + name + level + status)
			}
		}
		$j('#ii3').val(info.join('\n')) 
	})
	$j.get('game/clanchat.php').done(function(r) {	
		let info = []
		info.push(' CHAT\n')
		let max = r.postanz < maxEntry ? r.postanz : maxEntry
		if (r.postanz) {
			for (let i = 1; i <= max; i++) {
				let time = ' ' + r.gchatdate[i].slice(-5)  + ' | '
				let name = pr(r.gchatfrom[i].slice(0,7), 7) + ' |  '
				let txt = r.gchatpost[i].replace(/<\/?span[^>]*>/g,'').slice(0,23)
				if (txt.includes('Clan-Mission')) txt = 'Clan mission'
				else if (txt.includes('Clan-Bonus')) txt = 'Clan bonus'
				info.push(time + name + txt)
				
			}	
		}
		$j('#ii5').val(info.join('\n')) 
		$j('.clanbtn').html('Fastfood Clan')
	})
	$j.get('game/turnieranz.php').done(function(r) {		
		let info = []
		let header = r.turniertxt.includes('Last') ? 'LAST TOURNAMENT' :  'TOURNAMENT'
		info.push(' ' + header  + '\n')
		let max = r.playeranz < maxEntry ? r.playeranz : maxEntry 
		for (let i = 1; i <= max; i++) {
			let rank = pl(r.turnierrank[i],2) + ' | '
			let name = pr(r.playername[i].slice(0,13), 13) + ' |  '
			let level = pl(r.playermaxlvl[i], 4) + '  | '
			let prize = pl(r.turnierprizes[i].slice(0,10), 12)
			info.push(rank + name + level + prize)
		}	
		$j('#ii6').val(info.join('\n')) 
	})	
}

let autoReward
function checkReward(forced=false) {
	if(autoReward && (!new Date().getHours() || forced)) {
		$j.get('game/eventanz.php').done(function(r) { 
			if (!r.noreward) {
				addStatus('Reward Day ' + r.nextreward)
				$j.get('game/claimreward.php').done(() => homeanz())	
			}
		})	
	}
}

function showResearch() {
	$j.get('game/eventanz.php').done(function(r) { 
		let reward = r.nextreward
		$j.get('game/researchanz.php').done(function(r) { 
			let week = ['SO','MO','TU','WE','TH','FR','SA']
			let rewards = ['1h profit','2h profit','2 golbars','400 points','4h profit','3 goldbars','10 golbars']
			info2.value = ''
			for (let i = 1; i <= 7; i++) {
				let next = reward-1-i
				if (next < 0) next += 7
				let now = new Date()
				now.setDate(now.getDate()+8-i)
				addStatus2(week[now.getDay()] + ': ' + rewards[next])
			}
			addStatus2(seperator)
			let res = r.nextresearch
			let bonus = r.researchboni[res]
			let finish = new Date()
			finish.setSeconds(r.researchdauernoch)
			let build =['Fries','Pizza','Hotdog','Hamburger','Bike','Scooter','Van','Truck']
			if (res === mainBuild) {
				let prod = getValue(getLogData()[0])
				prod = convertValue(prod/bonus*(bonus+3))
				addStatus2('New prod: ' + prod)
			}
			else {
				let timeLeft = r.researchdauernoch
				for (let i = res + 1; i <= 8; i++) timeLeft += 43200
				let next = new Date()
				next.setSeconds(timeLeft)
				addStatus2('Truck:    ' + week[next.getDay()] + ' ' + next.toLocaleTimeString())		
			}		
			addStatus2('Bonus:    ' + (bonus+3) + 'x')
			addStatus2('Finish:   ' + finish.toLocaleTimeString())
			addStatus2('Research: ' + build[r.nextresearch-1] + ' ' + r.nextresearch )
		})
	})		
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let todayRuns = {}
function setTodayRuns() {
	let todayLog = account + '_day_' + new Date().toLocaleDateString()
	todayRuns = JSON.parse(load(todayLog))
	if (!todayRuns) {
		todayRuns = { r: 0, sp: 0, ep: 0, c: 0}
		for (key in localStorage) { if (key.match(/.*day_\d+.\d+.\d+/)) localStorage.removeItem(key) }
	}
	todayRuns.sp += sp
	todayRuns.ep += ep
	todayRuns.c++
	todayRuns.r++
	save(todayLog, JSON.stringify(todayRuns))
	ST.totalRuns++
	saveSettings(true)
}


function updateSummary() {
	let n = new Date()
	let d = timeFormat(n.getDate()) + '.' + timeFormat(n.getMonth()+1) + '.' + n.getFullYear()
	let sum = decompress(load(account + '_summary'))
	sum = sum ? JSON.parse(sum) : {}
	let l = runData[runData.length-1][0]
	let p = getValue(runData[runData.length-1][2])
	let m = getValue(runData[runData.length-1][3]), t = getValue(runData[runData.length-1][4])
	let s = sp, e = ep, c = 1
	if (!sum[d]) { 
		let sorted = {}
		sum[d] = { r: 1, l: l, p: p, m: m, t: t, s: s, e: e, c: c }	
		Object.keys(sum).sort(function(a, b) {
			a = a.split('.')
			a = new Date(a[2],a[1]-1,a[0])
			b = b.split('.')
			b = new Date(b[2],b[1]-1,b[0])
			return b-a
		}).forEach(function(k) { sorted[k] = sum[k] })
		sum = sorted		
	}
	else {
		 sum[d].r++
		 sum[d].s += s
		 sum[d].e += e
		 sum[d].c += c
		 if (p > sum[d].p) sum[d].p = p	
		 if (l > sum[d].l) sum[d].l = l 
		 if (m > sum[d].m) sum[d].m = m
		 if (t > sum[d].t) sum[d].t = t		
	}
	allRuns = sum
	save(account + '_summary', compress(JSON.stringify(sum)))
}

let seperator = ('-').repeat(31), allRuns
function statsSummary() {
	if (!allRuns) allRuns = JSON.parse(decompress(load(account + '_summary')))
	let runs, lvl, prod, ms, mst, avgSp, avgEp, msRun, data = ''
	let sep = ('-').repeat(79) + '\n'
	let week = ['SO','MO','TU','WE','TH','FR','SA'], ct = 1
	for (key in allRuns) {
		let date = key.split('.').map(Number)
		date = key.slice(0,5) + ' ' + week[new Date(date[2],date[1]-1,date[0]).getDay()]
		runs = pl(allRuns[key].r,4)
		lvl = pl(allRuns[key].l,5)
		prod = pl(convertValue(allRuns[key].p),10)
		mst = pl(convertValue(allRuns[key].t),10)
		ms = pl(convertValue(allRuns[key].m),10)
		avgSp = allRuns[key].c ? (allRuns[key].s/allRuns[key].c).toFixed(2) : '0.00' 
		avgEp = allRuns[key].c ? (allRuns[key].e/allRuns[key].c).toFixed(2) : '00.00' 
		data += date + ' | ' +   runs + ' | ' + lvl
		data += ' | ' + prod + ' | ' + mst + ' | ' + ms
		data += ' |  ' + avgSp + ' | ' + avgEp + '\n'
		if (!msRun) msRun = allRuns[key].r * allRuns[key].m
		if (ct%7 === 0) data += sep
		if (ct===21) data += '\n'
		ct++
	}
	let total = 'Runs: ' + ST.totalRuns.toLocaleString() +  ' | '
	let time = 'Time: ' + ((Date.now()-ST.startTime)/(1000*3600*24)).toFixed(2) + ' days | '
	msRun = 'MS: ' + convertValue(msRun) + ' - ' 	
	let farm = getFarmData()
	farm = farm[1] + ' | FP:' + farm[2] + '\n'
	data =  'AVERAGE DAILY STATS\n' + total  + time + msRun + farm + sep + data
	statswin.value = data
	statswin.style.display = 'block'
}

function statsGrowth() {
	if (!allRuns) allRuns = JSON.parse(decompress(load(account + '_summary')))
	let runs, lvl, prod, ms, mst, avgSp, avgEp, tSp = tEp = 0, data = ''
	let sep = ('-').repeat(79) + '\n'
	let week = ['SO','MO','TU','WE','TH','FR','SA']
	let res = Object.entries(allRuns)
	for (let i = 0; i < res.length-1; i++) {
		let now = res[i], next = res[i+1], pre = ''
		let date = now[0].split('.').map(Number)
		date = res[i][0].slice(0,5) + ' ' + week[new Date(date[2],date[1]-1,date[0]).getDay()]
		runs = pl(now[1].r,4)
		lvl = pl(now[1].l - next[1].l,5)
		prod = now[1].p - next[1].p
		if (prod < 0) {
			prod = next[1].p - now[1].p
			pre = '-'
		}
		prod = pl(pre + convertValue(prod),10)
		mst = pl(convertValue(now[1].t - next[1].t),10)
		ms = now[1].m > next[1].m ? pl(convertValue(now[1].m - next[1].m), 10) : pl (0, 10)
		avgSp = now[1].c ? now[1].s/now[1].c : 0
		avgEp = now[1].c ? now[1].e/now[1].c : 0
		tSp += avgSp
		tEp += avgEp
		data += date + ' | ' +   runs + ' | ' + lvl 
		data += ' | ' + prod + ' | ' + mst + ' | ' + ms
		data += ' | ' + pl(avgSp.toFixed(2),5)
		data += ' | ' + pl(avgEp.toFixed(2),5) + '\n'
		if ((i+1)%7 === 0) data += sep	
		if (i===20) data += '\n'
	}
	let total = 'Runs: ' + ST.totalRuns.toLocaleString() +  ' | '
	let time = 'Time: ' + ((Date.now()-ST.startTime)/(1000*3600*24)).toFixed(2) + ' days | '
	tSp = 'SP: ' + (tSp/(res.length-1)).toFixed(2) + ' | '
	tEp = 'EP: ' + (tEp/(res.length-1)).toFixed(2) + '\n'
	data =  'DAILY GROWTH\n' + total + time + tSp + tEp + sep + data
	statswin.value = data
	statswin.style.display = 'block'
}

function getLogData() {
	if (runData.length) return [runData[runData.length-1][2], runData[runData.length-1][3], runData[runData.length-1][4]]
	let data = log.value.match(/^([^\|]*)\|([^\|]*)\|([^\|]*)\|([^\|]*)\|([^\|]*)\|([^\|]*)\|([^\|]*)\|([^\|]*)\|(.*)/)
	if (!data) return [0,0,0]
	return [data[5].trim(), data[6].trim(), data[7].trim()]

}

function statsFarm() {
	info2.value = ''
	let avgM = avgP = avgS = 0
	let data = getFarmData(true).reverse()
	for (let i = 0; i < data.length; i++) {
		let d = data[i][0].slice(0,5) + ' | '
		let m = pl(data[i][1],9) + ' | '
		let p = pl(data[i][2],4) + ' | '
		let s = pl(data[i][3],3)
		addStatus2(d + m + p + s)
		avgM += getValue(data[i][1])
		avgP += parseInt(data[i][2])
		avgS += parseInt(data[i][3])	
	}
	addStatus2(seperator)
	avgM = pl(convertValue(avgM/data.length),9) + ' | '
	avgP = pl(Math.round(avgP/data.length),4) + ' | '
	avgS = pl(Math.round(avgS/data.length),3)
	addStatus2('  Ø  ' + ' | ' + avgM + avgP + avgS)
	addStatus2('Farm stats')
}

function getFarmData(all=false) {
	let res = {}
	let data = info1.value.split('\n')
	for (let i = 0; i < data.length; i++) {
		let entry = data[i].match(/(.*)\|(.*)\|(.*)\|(.*)\|(.*)\|(.*)/)
		if (entry) { 
			let date = entry[1]
			if (typeof res[date] === 'undefined') { 
				if (Object.keys(res).length && !all) break	
				res[date] = [0,0,0,0]
			}		
			entry.forEach((v,i) => i > 2 ?  res[date][i-3] += getValue(v) : 0)
		}
	}
	if (!Object.keys(res).length) return [0,0,0,0,0]
	res = Object.keys(res).map(function(k) { return [k, convertValue(res[k][0]),pl(res[k][1],4),pl(res[k][2],3),pl(res[k][3],3)] })
	if (!all) res = [res[0][0],res[0][1],res[0][2],res[0][3],res[0][4]]
	return res
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let missionUI =[]
function createMissionUI() {
	missionUI[0] = qs.create(1310,552, 'MS')
	.addNumber('ms', 1, 100, 50, 1, missionDaily)
	.hideAllTitles()
	.hide()
	.setSize(90,72)
	let p = missionUI[0].getPosition()
	let rp = todayRuns.c ? Math.round((720 + todayRuns.ep/todayRuns.c * maxRuns) / 500) : Math.round((720 + 50 * maxRuns) / 500) 
	missionUI[1] = qs.create(p[0]+p[1],p[2], 'RP')
	.addNumber('rp', 0, 20, rp, 1, missionDaily)
	.hideAllTitles()
	.hide()
	.setSize(90,72)
}

function missionDaily() {
	ms = missionUI[0].getValue('ms')
	rp = missionUI[1].getValue('rp')
	if (isNaN(ms) || ms < 1 || ms > 100 || isNaN(rp) || rp < 0 || rp > 20) return
	info2.value = ''
	let missionPower = calc['mission'] 
	let msDaily1 = msDaily2 = ((calc['msrun'] * maxRuns) + (calc['farmnow'] * 1440))* ms/100
	let msCost1 = calc['msclanCost'] * 100
	let msLevel1 = msLevel2 = calc['msclan'] 
	let rpDaily1 = rpDaily2 = rp
	let rpCost1 = Math.ceil((calc['rsclan']+1)/10)		
	let rpLevel1 = rpLevel2 = calc['rsclan']
	let msTotal = rpTotal = missionNew = 0, now = new Date()
	let ts = ' ' + now.toLocaleTimeString().slice(0,5)  + ' | '
	for (let i = 1; i <= 22; i++) {			
		while(msDaily2 > msCost1) {
			msCost1 *= 1.005
			msDaily2 -= msCost1
			msLevel2 += 100	
			msTotal += msCost1
		}	
		msDaily2 += msDaily1
		while(rpDaily2 > rpCost1) {
			rpCost1 = Math.ceil((rpLevel2+1)/10)	
			rpDaily2 -= rpCost1
			rpLevel2++
			rpTotal += rpCost1
		}
		rpDaily2 += rpDaily1
		msTotal = rpTotal = 0	
		now.setDate(now.getDate()+1)
		let mp = convertValue(missionPower * msLevel2/msLevel1 * rpLevel2/rpLevel1)
		let rs = ' - ' + pl(rpLevel2,3)
		let ms = ' - ' + pl((msLevel2/1000).toFixed(1))
		let c = i === 1 ? '\n' : ''
		addStatus2(now.toLocaleDateString().slice(0,4) + ':  ' + mp + rs + ms + c)		
	}
	addStatus2(seperator)
	addStatus2('Clan upgrade')
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function msUpgrade() {
	let dollarRun = getLogData()[1], f = arguments.callee.name
	if (typeof f.cache !== 'undefined') info2.value =  f.cache
	$j.get('game/researchanz.php').done(function(r) {
		let rsLevel = r.rsupgrade2
		let rsCost = rsLevel+1
		let runNow = rsLevel+1
		let runNext = rsLevel+2
		$j.get('game/megaidleanz.php').done(function(r) {
			info2.value = ''
			let farmLevel = r.megaidlelvl+1
			let farmCost = farmLevel <= 10 ? farmLevel : 10
			let farmNow = getValue(r.megaidleprominute)
			let farmNext = getValue(r.megaidleprominutenext)
			let farmDiff = farmNext-farmNow
			let farmRP = farmDiff/farmCost
			let totalMs1 =  convertValue((getValue(dollarRun) * maxRuns) + (farmNext*60*24))	
			farmNow = convertValue(farmNow)
			farmNext = convertValue(farmNext)
			let newDollar = getValue(dollarRun)/runNow*runNext
			let newDiff = (newDollar-getValue(dollarRun))/10
			let nowFarm = getValue(farmNow)
			let newFarm = nowFarm/runNow*runNext
			let diffFarm = newFarm-nowFarm
			let costRP = (newDiff/rsCost) + (diffFarm/rsCost)
			let totalMs2 = convertValue((newDollar * maxRuns) + (newFarm*60*24))	
			newDollar = convertValue(newDollar)
			nowFarm = convertValue(nowFarm)
			newFarm = convertValue(newFarm)
			let costPct = ' (' + (farmRP/costRP*100-100).toFixed(2) + '%)'
			addStatus2('Cost: ' + convertValue(farmRP) + '/RP' + costPct)
			addStatus2('Day:  ' + totalMs1)
			addStatus2('Farm: ' + pl(farmNow,8) + '  => ' + farmNext) 
			addStatus2(seperator)
			addStatus2('Farm Upgrade ' + farmLevel)		
			costPct = ' (' + (costRP/farmRP*100-100).toFixed(2) + '%)'	
			addStatus2(seperator)
			addStatus2('Cost: ' + convertValue(costRP) + '/RP' + costPct)
			addStatus2('Day:  ' + totalMs2)
			addStatus2('Farm: ' + pl(nowFarm,8) + ' => ' + pl(newFarm,8)) 
			addStatus2('Run:  ' + pl(dollarRun,8) + ' => ' + pl(newDollar,8)) 
			addStatus2(seperator)
			addStatus2('RS Upgrade ' + (rsLevel+1))	
			window[f].cache = info2.value 
		})
	})
}

function msGrowth() {
	let f = arguments.callee.name
	if (typeof f.cache !== 'undefined') info2.value =  f.cache
	$j.get('game/megaidleanz.php').done(function(r) {
		let farmNow = getValue(r.megaidleprominute) * 10
		let farmCollect = farmMax * farmNow / 10
		let farm24 = farmNow/10 * 24 * 60
		let spFarm = Math.ceil(24*6*r.megaidleu3/100)
			$j.get('game/skillanz.php').done(function(r) {	
				info2.value = ''
				skillLvl = [r.skill[9], r.skill[10]]
				let avgSP = 3
				if (todayRuns.c) avgSP = todayRuns.sp/todayRuns.c
				let spUpgrades = Math.round((avgSP * maxRuns+spFarm)/10)
				let newSkill = (spUpgrades+skillLvl[1])/skillLvl[1]*100-100	
				let data = getLogData()
				let msRun = getValue(data[1])
				let msTotal = getValue(data[2])
				let doubleProd = (msTotal/(msRun*maxRuns+farm24)).toFixed(2) + ' days'
				let ms24 = msRun * maxRuns	
				let sumOld = ms24 + farm24
				addStatus2('                    ' + pl(convertValue(sumOld),8))
				addStatus2('MS Farm: ' + pl(convertValue(farmCollect),8) + ' / ' + pl(convertValue(farm24),8))
				addStatus2('MS Run:  ' + pl(convertValue(msRun),8) + ' / ' + pl(convertValue(ms24),8))
				farmCollect *= newSkill/100+1
				farm24 *= newSkill/100+1
				msRun *= newSkill/100+1
				ms24 *= newSkill/100+1
				let sumNew = ms24 + farm24
				let newMS = sumNew - sumOld
				addStatus2(seperator)	
				addStatus2('                    ' + pl(convertValue(sumNew),8))				
				addStatus2('MS Farm: ' + pl(convertValue(farmCollect),8) + ' / ' + pl(convertValue(farm24),8))
				addStatus2('MS Run:  ' + pl(convertValue(msRun),8) + ' / ' + pl(convertValue(ms24),8))		
				addStatus2(seperator)	
				addStatus2('Prod 2:  ' + doubleProd)
				addStatus2('Growth:  ' + newSkill.toFixed(2) + ' % - ' + convertValue(newMS))
				window[f].cache = info2.value 				
			})
	})
}

function dailyGrowth() {
	let f = arguments.callee.name
	if (typeof f.cache !== 'undefined') info2.value =  f.cache
	$j.get('game/megaidleanz.php').done(function(r) {
		let farm = getValue(r.megaidleprominute) * 60 * 24
		let spChance = Math.ceil(24*6*r.megaidleu3/100)
			$j.get('game/skillanz.php').done(function(r) {	
				info2.value = ''
				skillLvl = [r.skill[9], r.skill[10]]
				let now = new Date()
				let ms = getValue(getLogData()[1]) * maxRuns + farm
				let avgSP = 3
				if (todayRuns.c) avgSP = todayRuns.sp/todayRuns.c
				let dailySKill = Math.round((avgSP*maxRuns+spChance)/10)
				for (let i = 1; i <= 22; i++) {
					now.setDate(now.getDate()+1)
					let d = timeFormat(now.getDate()) + '.' + timeFormat(now.getMonth()+1) + ':  '			
					let newSkill =  (skillLvl[1] + dailySKill * i)/skillLvl[1]
					let msNew = pl(convertValue(ms * newSkill),8)
					let pct = pl((newSkill*100-100).toFixed(2) + ' %', 7)
					let c = i === 1 ? '\n' : ''
					addStatus2(d + msNew + ' -  ' + pct + c)	
				}
				addStatus2(seperator)
				let newSkill = (skillLvl[1] + dailySKill)/skillLvl[1]
				let pct = pl((newSkill*100-100).toFixed(2) + ' %', 7)
				let msNew = pl(convertValue(ms * newSkill - ms),8)
				addStatus2('Growth: ' + msNew + ' -  ' + pct)
				window[f].cache = info2.value 				
			})
	})
}

function prodUpgrade() {
	let f = arguments.callee.name
	if (typeof f.cache !== 'undefined') info2.value =  f.cache
	$j.get('game/researchanz.php').done(function(r) {
		info2.value = ''
		let cost = 0
		let sLevel =  r['rsupgrade' + (4+mainBuild)]
		let sFactor = sLevel*(sLevel+1)/2+1
		let cProd = getValue(getLogData()[0])
		for (let i = 0; i < 22; i++) {
			sLevel++
			cost += Math.ceil(sLevel/10)
			let nFactor = sLevel*(sLevel+1)/2+1
			let pct = (nFactor/sFactor)
			let nProd = convertValue(cProd * pct)
			let c = !i ? '\n' : ''
			addStatus2(sLevel + ': ' + pl(nProd, 9) + ' - ' + pct.toFixed(2) + 'x - ' + pl(cost,3) + ' rp' + c) 				
		}	
		addStatus2(seperator)
		addStatus2('Resarch prod')
		window[f].cache = info2.value 
	})
}

let costUI = []
function calculateCost() {
	let start = costUI[0].getValue('start') 
	let end = costUI[0].getValue('end') 
	let prod = costUI[1].getValue('prod') 
	let total = 0
	for (let i = start; i < end; i+= 100) total += getValue(bc[mainBuild][i+100])	
	total *= 1.015
	costUI[2].setValue('cost', convertValue(total))
	costUI[2].setValue('time', displayTime(total/getValue(prod),true))
}

function createCostUI() {
	 costUI[0] = qs.create(926,510, 'Building')
	.addNumber('start', 0, 4700, buyMax[buyMax.length-1], 100)
	.addNumber('end', 0, 4700, buyGoal[buyGoal.length-1], 100)
	.hideAllTitles()
	.hide()
	.setSize(90,115)
	let p = costUI[0].getPosition()
	costUI[1] = qs.create(p[0]+p[1],p[2], 'Prod')
	.addText('prod')
	.addButton('Calculate   ', calculateCost)
	.hideAllTitles()
	.hide()
	.setSize(90,115)
	 p = costUI[1].getPosition()
	costUI[2] = qs.create(p[0]+p[1],p[2], 'Cost/Time')
	.addText('cost')
	.disableControl('cost')
	.addText('time')
	.disableControl('time')
	.hideAllTitles()
	.hide()
	.setSize(90,115)
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let calc = {}
function createCalcUI() {
	let x = 925, y = 490, w = 90, h = 70
	calc['ui'] = []
	calc['ui'][0] = qs.create(x,y, 'Truck')
	.addNumber('sktruck', 1, 1000000, 1, 1, updateCalc)
	.setSize(w,h)
	calc['ui'][1] = qs.create(x,y+h-1, 'Business')
	.addNumber('skmega', 1, 1000000, 1, 1, updateCalc)
	.setSize(w,h)
	calc['ui'][2] = qs.create(x+w,y, 'Research')
	.addNumber('rstruck', 1, 1000, 1, 1, updateCalc)
	.setSize(w,h)
	calc['ui'][3] = qs.create(x+w,y+h-1, 'Research')
	.addNumber('rsmega', 1, 1000, 1, 1, updateCalc)
	.setSize(w,h)
	calc['ui'][4] = qs.create(x+2*w,y, 'Dollar')
	.addNumber('mstruck', 100, 1000000, 1, 100, updateCalc)
	.setSize(w,h)
	calc['ui'][5] = qs.create(x+2*w,y+h-1, 'Clan dollar')
	.addNumber('msclan', 100, 1000000, 1, 100, updateCalc)
	.setSize(w,h)
	calc['ui'][6] = qs.create(x+3*w,y, 'Farm level')
	.addNumber('rsfarm', 1, 1000, 1, 1, updateCalc)
	.setSize(w,h)
	calc['ui'][7] = qs.create(x+3*w,y+h-1, 'Level')
	.addNumber('rsclan', 1, 1000, 1, 1, updateCalc)
	.setSize(w,h)
	calc['ui'][8] = qs.create(x+4*w,y, 'Result output')
	.addTextArea('data')
	.setTextAreaRows('data',6)
	.disableControl('data')
	.setSize(w*2+70,h*2-1)
	for (let i = 0; i < calc['ui'].length; i++) {
		calc['ui'][i].hideAllTitles()
		calc['ui'][i].hide()
	}
}

function updateCalc() {
	if (typeof calc['mission'] === 'undefined') return
	let info = []
	let prodNow = calc['prod']
	let skillNow = (calc['sktruck'] + 1)*(calc['sktruck'] + 2)/2
	let skillNew = calc['ui'][0].getValue('sktruck')
	skillNew = (skillNew + 1)*(skillNew + 2)/2
	let prodNew = prodNow/Math.pow(skillNow,2)*Math.pow(skillNew,2)
	skillNow = calc['rstruck'] *(calc['rstruck'] +1)/2+1
	skillNew = calc['ui'][2].getValue('rstruck')
	skillNew = skillNew*(skillNew+1)/2+1
	prodNew = prodNew/skillNow*skillNew
	skillNow = calc['mstruck']
	skillNew = calc['ui'][4].getValue('mstruck')
	prodNew = prodNew/Math.pow(skillNow,2)*Math.pow(skillNew,2)
	let pct = '  - ' + pl(Math.round(prodNew/prodNow*100),4) + '%'
	info.push(' Prod:  ' + pl(convertValue(prodNew),9) + pct)
	let msRun = calc['msrun']
	let msNow = calc['skmega'] 
	let msNext = calc['ui'][1].getValue('skmega')
	msRun = msRun/msNow*msNext
	msNow = calc['rsmega'] + 1
	msNext = calc['ui'][3].getValue('rsmega') + 1
	msRun = msRun/msNow*msNext
	pct = '  - ' + pl(Math.round(msRun/calc['msrun']*100),4) + '%'
	info.push(' Mega:  ' + pl(convertValue(msRun),9) + pct)
	let farmDaily = calc['farmnow'] * farmMax
	let farmNow = calc['skmega']
	let farmNext = calc['ui'][1].getValue('skmega')
	farmDaily = farmDaily/farmNow*farmNext
	farmNow = calc['rsmega'] + 1
	farmNext = calc['ui'][3].getValue('rsmega') + 1
	farmDaily = farmDaily/farmNow*farmNext
	farmDaily = farmDaily/calc['farmlvl']*calc['ui'][6].getValue('rsfarm') 
	pct = '  - ' + pl(Math.round((farmDaily/(calc['farmnow'] * farmMax))*100),4) + '%'
	info.push(' Farm:  ' + pl(convertValue(farmDaily),9) + pct)
	let mission = calc['mission']
	let missionNow = calc['rsclan'] + 1
	let missionNext = calc['ui'][7].getValue('rsclan') + 1
	mission = mission/missionNow*missionNext
	missionNow = calc['msclan']
	missionNext = calc['ui'][5].getValue('msclan')
	mission = mission/missionNow*missionNext
	pct = '  - ' + pl(Math.round(mission/calc['mission']*100),4) + '%'
	info.push(' Clan:  ' + pl(convertValue(mission),9) + pct)
	let tc = calc['mstruckCost']
	let f = Math.round((calc['ui'][4].getValue('mstruck')-calc['mstruck'])/100)
	for (let i = 1; i <= f; i++) {
		tc *= 1.005
	}
	tc = f > 0 ? tc * f * 100 * 2 : 0
	let cc = calc['msclanCost']
	f = Math.round((calc['ui'][5].getValue('msclan')-calc['msclan'])/100)
	for (let i = 1; i <= f; i++) {
		cc *= 1.005
	}
	cc = f > 0 ? cc * f * 100 : 0
	if (tc+cc) info.push(' Cost:  ' + pl(convertValue(tc+cc),9))
	tc = 0
	f = calc['ui'][2].getValue('rstruck') - calc['rstruck']  
	for (let i = 1; i <= f; i++) {
		tc += Math.ceil((calc['rstruck']+i)/10)	
	}	
	f = calc['ui'][3].getValue('rsmega')  - calc['rsmega'] 
	for (let i = 1; i <= f; i++) {
		tc += calc['rsmega'] + i 		
	}	
	f =  calc['ui'][7].getValue('rsclan') - calc['rsclan']
	for (let i = 1; i <= f; i++) {
		tc += Math.ceil((calc['rsclan']+i)/10)		
	}	
	f =  calc['ui'][6].getValue('rsfarm') - calc['farmlvl']
	for (let i = 1; i <= f; i++) {
		if (calc['farmlvl'] + i <= 10) tc += calc['farmlvl'] + i
		else tc += 10
	}	
	if (tc) info.push(' RP:     ' + tc)
	else {
		let prod = calc['ui'][0].getValue('sktruck') * 2
		let pct = (prod/(prod+calc['ui'][1].getValue('skmega'))*100).toFixed(2) + '%'
		info.push(' P/MS:   ' + pct)	
	}	
	calc['ui'][8].setValue('data', info.join('\n'))
}

function getCalcData() {
	calc['ui'][8].setValue('data', ' Getting data')
	$j.get('game/skillanz.php').done(function(r) {	
		calc['sktruck'] = r.skill[9]
		calc['skmega'] = r.skill[10]
		calc['ui'][0].setValue('sktruck', calc['sktruck'])
		calc['ui'][1].setValue('skmega', calc['skmega'] )
		$j.get('game/researchanz.php').done(function(r) {
			calc['rstruck'] = r.rsupgrade12
			calc['rsmega'] = r.rsupgrade2
			calc['rsclan'] = r.rsupgrade3
			calc['ui'][2].setValue('rstruck', calc['rstruck'])
			calc['ui'][2].setNumberParameters('rstruck', calc['rstruck'], 1000, 1)
			calc['ui'][3].setValue('rsmega', calc['rsmega'])
			calc['ui'][3].setNumberParameters('rsmega', calc['rsmega'], 1000, 1)
			calc['ui'][7].setValue('rsclan', calc['rsclan'])	
			calc['ui'][7].setNumberParameters('rsclan', calc['rsclan'], 1000, 1)
			$j.get('game/megaanz.php').done(function(r) {
				calc['mstruck'] = r.mega[9]
				calc['mstruckCost'] = getValue(r.megacost[9])
				calc['msclan'] = r.mega[10]
				calc['msclanCost'] = getValue(r.megacost[10])
				calc['ui'][4].setValue('mstruck', calc['mstruck'])
				calc['ui'][4].setNumberParameters('mstruck', calc['mstruck'], 1000000, 100)
				calc['ui'][5].setValue('msclan', calc['msclan'])
				calc['ui'][5].setNumberParameters('msclan', calc['msclan'], 1000000, 100)
				$j('.button').eq(4).html('&nbsp&nbsp&nbspMS: ' + r.relikte)
				$j.get('game/megaidleanz.php').done(function(r) {
					calc['farmlvl'] = r.megaidlelvl
					calc['farmnow'] = getValue(r.megaidleprominute)
					calc['ui'][6].setValue('rsfarm', calc['farmlvl'])	
					calc['ui'][6].setNumberParameters('rsfarm', calc['farmlvl'], 1000, 1)
					$j('.button').eq(5).html('&nbsp&nbsp&nbspFarm: ' + r.megaidlepoints)
					$j.get('game/clanquests.php').done(function(r) {
						let data = getLogData()
						calc['prod'] = getValue(data[0])
						calc['msrun'] = getValue(data[1])					
						calc['mission'] = getValue(r.clanpoints)
						updateCalc()
					})
				})	
			})	
		})	
	})
}

function showCalcUI() {
	for (let i = 0; i < calc['ui'].length; i++) calc['ui'][i].toggleVisibility()
	highlightBtn(btn21)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getGold() {
	return getValue(document.getElementsByClassName('gold')[0].innerText)	
}

function getIdleIncome() {
	return getValue(incomeoffline) * getIdleTime()
}

function getLevel() {
	return parseInt(document.getElementsByClassName('epbartxt')[0].innerText) || 0
}

function getPoints(which) {
	let points = document.getElementsByClassName(which + 'btn')[0].innerText.match(/\d+/)
	if (!points) return 0
	return parseInt(points[0])
}

function getSessionTime() {
	return (Date.now()-sessionTimer)/1000 
}

function setSessionTime(sec) {
	sessionTimer += sec * 1000
}

function getIdleTime() {
	if (autoPlay) return (Date.now()-idleTimer)/1000 
	return idletimevar
	 
}

function setIdleTime(sec) {
	idleTimer += sec * 1000
}

function getBuildingCount(cheapest=false) {
	let toBuy = 0, total = [[],0] , maxCost = 1e99
	for (let i = 1; i <= 8; i++) {
		total[0].push(building[i].toString())
		if (i === mainBuild) continue
		total[1] += building[i]
		if (cheapest) {
			let cost = getValue(bcost[i*4-1])
			if (cost < maxCost) {
				maxCost = cost
				toBuy = i	
			}
		}
	}
	if (cheapest) return [toBuy, total[1]]
	return total
}

function getBuyCost(manual = false) {
	let total = 0
	let next = buyStep ? buyStep - 1 : 0
	if (manual) next = manual
	for (let i = buyMax[next]; i < buyGoal[next]; i+= 100) {
		total += getValue(bc[mainBuild][i+100])	
	}
	return total * 1.015 
}

function getValue(str='1 aw') { 
	let reg = str.toString().match(/(\d+\.*\d*)\s*(\w*)/)
	let val = parseFloat(reg[1])
	let exp = reg[2]
	if (exp === 'K') val *= 1e3
	else if (exp === 'M') val *= 1e6
	else if (exp === 'B') val *= 1e9
	else if (exp === 'T') val *= 1e12
	else if (exp === 'aa') val *= 1e15
	else if (exp === 'ab') val *= 1e18
	else if (exp === 'ac') val *= 1e21
	else if (exp === 'ad') val *= 1e24
	else if (exp === 'ae') val *= 1e27
	else if (exp === 'af') val *= 1e30
	else if (exp === 'ag') val *= 1e33
	else if (exp === 'ah') val *= 1e36
	else if (exp === 'ai') val *= 1e39
	else if (exp === 'aj') val *= 1e42
	else if (exp === 'ak') val *= 1e45
	else if (exp === 'al') val *= 1e48
	else if (exp === 'am') val *= 1e51
	else if (exp === 'an') val *= 1e54
	else if (exp === 'ao') val *= 1e57
	else if (exp === 'ap') val *= 1e60
	else if (exp === 'aq') val *= 1e63
	else if (exp === 'ar') val *= 1e66
	else if (exp === 'as') val *= 1e69
	else if (exp === 'at') val *= 1e72
	else if (exp === 'au') val *= 1e75
	else if (exp === 'av') val *= 1e78
	else if (exp === 'aw') val *= 1e81
	else if (exp === 'ax') val *= 1e84
	return val
}

function convertValue(nbr) {
	if (nbr/1e84 >= 1) return (nbr/1e84).toFixed(2) + ' ax'
	else if (nbr/1e81 >= 1) return (nbr/1e81).toFixed(2) + ' aw'
	else if (nbr/1e78 >= 1) return (nbr/1e78).toFixed(2) + ' av'
	else if (nbr/1e75 >= 1) return (nbr/1e75).toFixed(2) + ' au'
	else if (nbr/1e72 >= 1) return (nbr/1e72).toFixed(2) + ' at'
	else if (nbr/1e69 >= 1) return (nbr/1e69).toFixed(2) + ' as'
	else if (nbr/1e66 >= 1) return (nbr/1e66).toFixed(2) + ' ar'
	else if (nbr/1e63 >= 1) return (nbr/1e63).toFixed(2) + ' aq'
	else if (nbr/1e60 >= 1) return (nbr/1e60).toFixed(2) + ' ap'
	else if (nbr/1e57 >= 1) return (nbr/1e57).toFixed(2) + ' ao'
	else if (nbr/1e54 >= 1) return (nbr/1e54).toFixed(2) + ' an'
	else if (nbr/1e51 >= 1) return (nbr/1e51).toFixed(2) + ' am'
	else if (nbr/1e48 >= 1) return (nbr/1e48).toFixed(2) + ' al'
	else if (nbr/1e45 >= 1) return (nbr/1e45).toFixed(2) + ' ak'
	else if (nbr/1e42 >= 1) return (nbr/1e42).toFixed(2) + ' aj'
	else if (nbr/1e39 >= 1) return (nbr/1e39).toFixed(2) + ' ai'
	else if (nbr/1e36 >= 1) return (nbr/1e36).toFixed(2) + ' ah'
	else if (nbr/1e33 >= 1) return (nbr/1e33).toFixed(2) + ' ag'
	else if (nbr/1e30 >= 1) return (nbr/1e30).toFixed(2) + ' af'
	else if (nbr/1e27 >= 1) return (nbr/1e27).toFixed(2) + ' ae'
	else if (nbr/1e24 >= 1) return (nbr/1e24).toFixed(2) + ' ad'
	else if (nbr/1e21 >= 1) return (nbr/1e21).toFixed(2) + ' ac'
	else if (nbr/1e18 >= 1) return (nbr/1e18).toFixed(2) + ' ab'		
	else if (nbr/1e15 >= 1) return (nbr/1e15).toFixed(2) + ' aa'	
	else if (nbr/1e12 >= 1) return (nbr/1e12).toFixed(2) + ' T'	
	else if (nbr/1e9 >= 1) return (nbr/1e9).toFixed(2) + ' B'	
	else if (nbr/1e6 >= 1) return (nbr/1e6).toFixed(2) + ' M'	
	else if (nbr/1e3 >= 1) return (nbr/1e3).toFixed(2) + ' K'	
	else return (nbr).toFixed(2)
}


let bc = {
	1: { 100: '368.50 M', 200: '27.43 B', 300: '768.33 B', 400: '15.44 T', 500: '266.76 T', 600: '4.26 aa', 700: '65.16 aa', 800: '972.19 aa',
	900: '14.31 ab', 1000: '209.31 ab', 1100: '3.06 ac', 1200: '44.64 ac', 1300: '654.23 ac', 1400: '9.63 ad', 1500: '142.56 ad', 1600: '2.12 ae',
	1700: '31.83 ae', 1800: '480.40 ae', 1900: '7.30 af', 2000: '111.83 af', 2100: '1.72 ag', 2200: '26.80 ag', 2300: '419.45 ag', 2400: '6.61 ah',
	2500: '104.99 ah', 2600: '1.68 ai', 2700: '27.04 ai', 2800: '438.39 ai', 2900: '7.16 aj', 3000: '117.63 aj', 3100: '1.95 ak', 3200: '32.41 ak',
	3300: '543.16 ak', 3400: '9.16 al', 3500: '155.45 al', 3600: '2.65 am', 3700: '45.59 am', 3800: '787.65 am', 3900: '13.69 an', 4000: '239.22 an', 4100: '4.20 ao', 4200: '74.31 ao'},
	
    8: { 100: '116.52 T', 200: '14.55 aa', 300: '554.88 aa', 400: '13.84 ab', 500: '282.32 ab', 600: '5.16 ac', 700: '88.30 ac', 800: '1.45 ad', 900: '23.28 ad', 
	1000: '367.41 ad', 1100: '5.74 ae',	1200: '89.34 ae', 1300: '1.39 af', 1400: '21.53 af', 1500: '334.75 af', 1600: '5.22 ag', 1700: '81.71 ag', 1800: '1.28 ah',
	1900: '20.30 ah', 2000: '322.34 ah', 2100: '5.15 ai', 2200: '82.66 ai', 2300: '1.34 aj', 2400: '21.69 aj', 2500: '354.55 aj', 2600: '5.83 ak', 2700: '96.41 ak', 
	2800: '1.60 al', 2900: '26.85 al', 3000: '451.95 al', 3100: '7.65 am', 3200: '130.33 am', 3300: '2.23 an ', 3400: '38.45 an', 3500: '665.99 an', 3600: '11.60 ao',
	3700: '203.12 ao', 3800: '3.58 ap', 3900: '63.29 ap', 4000: '1.13 aq', 4100: '20.14 aq', 4200: '362.00 aq', 4300: '6.54 ar', 4400: '118.73 ar', 4500: '2.17 as',
	4600: '39.71 as', 4700: '731.40 as'
 }		
}
	
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let connTimeOut = 2000, connStatus = 0, connTimer = Date.now()
let errorAudio = new Audio('https://thetill89.github.io/ff2/alarm.mp3')
errorAudio.loop = true
function checkConnection() {
	if (!idlemode && !resetStep && parseInt($j('.zeitbar1').css('width')) > 160) {
		if (connStatus === 0) {
			connTimer = Date.now()
			connStatus = 1
		}	
		else if (Date.now() - connTimer > connTimeOut){
			homeanz()
			connStatus = 0
		}
	}
	else connStatus = 0 
	if (ST.audio && autoPlay && errorAudio.paused) {
		if ((Date.now()-sessionTimer2)/1000 > sessionTime + 30) errorAudio.play()
		else if (getLevel() - 5 > highLevel) errorAudio.play()
	}
}

function logError(f,r) {
	let e = JSON.parse(load(account + '_error')) || {}
	e[new Date().getTime()] = {  
		t: new Date().toLocaleString(),
		f: f,
		l: getLevel(), 
		s1: r.status,
		s2: r.statusText
	}
	save(account + '_error', JSON.stringify(e))
}


function pl(str, nbr) {
	str = str.toString()
	if (nbr - str.length > 0) str = ' '.repeat(nbr-str.length) + str
	return str
}

function pr(str, nbr) {
	str = str.toString()
	if (nbr - str.length > 0) str += ' '.repeat(nbr-str.length)
	return str
}

function displayTime(time, hours = false) {
	 if (time > 86400000) return '∞'
	 else if (time > 172800) return (time/86400).toFixed(2) + ' days'
	 else if (time < 0) time = 0
	 return (hours ? timeFormat(Math.floor(time / 3600)) + ':' : '') + timeFormat(Math.floor((time % 3600) / 60)) + ':' + timeFormat(Math.floor(time % 60)) 
}

function timeFormat(nbr) {
  if (nbr.toString().length === 1) return '0' + nbr
  return nbr
}

function convertDate(str) {
	let regex = /(\d+).(\d+).(\d+)..(\d+).(\d+).(\d+)/
	, [, d, mo, y, h, m, s] = regex.exec(str)
	return new Date(y, mo-1, d, h, m, s)

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function createLog() {
	let textf = document.createElement("textarea");
	textf.id = 'log'
	textf.spellcheck = false
	textf.style.cssText = 'font-family: monospace; font-size: 13px; position: absolute; width: 590px; height: 118px; top: 497px; left: 926px; padding-left: 15px; border-top: none;  border-image: initial; border-radius: 5px; background-color: black; color: ' + theme + '; caret-color: transparent; overflow: hidden; outline: none; resize: none; cursor: default; border-right: 1px dotted ' + theme + '; border-bottom: 1px dotted ' + theme + '; border-left: 1px dotted ' + theme
	document.getElementById('maingame').appendChild(textf); 
	textf = document.createElement('div')
	textf.style.cssText = 'position: absolute; left: 940px; top: 606px; width: 592px; height: 13px; background-color: black;'
	document.getElementById('maingame').appendChild(textf); 	
}

function createStatus() {
	let textf = document.createElement("textarea");
	textf.id = 'info1'
	textf.spellcheck = false
	textf.style.cssText = "font-family: monospace; font-size: 13px; position: absolute; width: 285px; height: 380px; top: 44px; left: 1230px; padding-left: 15px; border-top: none; border-right: 1px dotted "+ theme + "; border-bottom: 1px dotted "+ theme + "; border-left: 1px dotted "+ theme + "; border-image: initial; border-radius: 5px; background-color: black; color: "+ theme + "; caret-color: transparent; overflow: hidden; outline: none; resize: none; cursor: default;"
	document.getElementById('maingame').appendChild(textf); 
	textf = document.createElement('div')
	textf.style.cssText = 'position: absolute; left: 1235px; top: 410px; width: 297px; height: 18px; background-color: black;'
	document.getElementById('maingame').appendChild(textf); 	
}

function createStatus2() {
    let textf = document.createElement("textarea");
    textf.id = 'info2'
	textf.spellcheck = false
    textf.style.cssText = "font-family: monospace; font-size: 13px; position: absolute; width: 258px; height: 380px; top: 44px; left: 926px; padding-left: 15px; border-top: none; border-right: 1px dotted "+ theme + "; border-bottom: 1px dotted "+ theme + "; border-left: 1px dotted "+ theme + "; border-image: initial; border-radius: 5px; background-color: transparent; color: "+ theme + "; caret-color: transparent; overflow: hidden; outline: none; resize: none; cursor: default;"
    document.getElementById('maingame').appendChild(textf); 
}

function createIdleInfo() {
	for (let i = 1; i <= 6; i++) {
		let id = 'ii' + i
		let textf = document.createElement("textarea");
		textf.id = id
		textf.spellcheck = false
		textf.style.fontFamily = 'monospace'
		textf.style.fontSize = '13px'
		textf.style.position = 'absolute'
		textf.style.width = i === 1 || i === 3 || i === 5 ? '320px' : '318px'
		textf.style.height = i < 3 ? '158px' : i < 5 ? '184px' : '184px'
		textf.style.top = i < 3 ? '10px' : i < 5 ? '214px' : '446px'
		textf.style.left = i%2 === 1 ? '-8px' : '356px'
		textf.style.border = '1px dotted ' + theme
		textf.style.borderRadius = '5px'
		textf.style.paddingLeft = '5px'
		textf.style.paddingTop = '5px'
		textf.style.backgroundColor = 'transparent'
		textf.style.color = theme
		textf.style.caretColor = 'transparent'
		textf.style.overflow = 'hidden'
		textf.style.outline = 'none'
		textf.style.resize = 'none'
		textf.style.cursor = 'default'
		document.getElementById('idlemode').appendChild(textf);
	    document.getElementById('ii' + i).onclick = i > 2 ? getMissionTime : ''
		document.getElementById('ii' + i).oncontextmenu  = function(e) { return false }
	}
	ii2.onclick = () => idlemode ? idlemodeend() : startIdleMode()
}


function createStatsWin() {
	let textf = document.createElement("textarea");
	textf.id = 'statswin'
	textf.spellcheck = false
	textf.style.cssText = "font-family: monospace; font-size: 13px; position: absolute; width: 590px; height: 413px; top: 10px; left: 926px; padding-left: 15px; border: 1px dotted "+ theme + "; border-radius: 3px; background-color: black; color: "+ theme + "; caret-color: transparent; overflow: hidden; outline: none; resize: none; cursor: default; display: none; z-index: 1;"
	document.getElementById('maingame').appendChild(textf); 
	statswin.d = 0
}

function createAFKwin() {
	let textf = document.createElement("textarea");
	textf.id = 'afkwin'
	textf.spellcheck = false
	textf.style.cssText = 'font-family: monospace; font-size: 44px; position: absolute; width: 1312px; height: 720px; top: 0px; left: 0x; padding-left: 220px; border-top: none;  border-image: initial; border-radius: 5px; background-color: black; color: ' + theme + '; caret-color: transparent; overflow: hidden; outline: none; resize: none; cursor: default; border: 1px dotted black; display: none;'
	document.getElementById('maingame').appendChild(textf); 
	afkwin.onclick = function() {
		afkwin.style.display = 'none'
		displayStats()
	}
}

function createTimeInfo() {
	let id = 'timeinfo'
	let textf = document.createElement("textarea");
	textf.id = id
	textf.spellcheck = false
	textf.style.cssText = "font-family: monospace; font-size: 14px; line-height: 18px; position: absolute; width: 134px; padding-left: 20px; height: 76px; top: 106px; left: 10px; border: 1px dotted "+ theme + "; border-radius: 5px; background-color: black; color: "+ theme + "; caret-color: transparent; outline: none; overflow: hidden; resize: none; cursor: default;"
	document.getElementById('maingame').appendChild(textf); 
}

function createHeader() {
	let textf = document.createElement("textarea");
	textf.id = 'header1'
	textf.disabled = true
	textf.spellcheck = false
	textf.style.cssText = "font-family: monospace; font-weight: 800; font-size: 13px; position: absolute; width: 258px; height: 34px; top: 10px; left: 926px; padding-left: 15px; padding-top: 3px; border-top: 1px dotted "+ theme + "; border-right: 1px dotted "+ theme + "; border-bottom: none; border-left: 1px dotted "+ theme + "; border-image: initial; border-radius: 5px; background-color: black; color: "+ theme + "; overflow: hidden; resize: none; cursor: default; outline: none; caret-color: transparent"
	document.getElementById('maingame').appendChild(textf); 
	header1.value = 'STATS'
	textf = document.createElement("textarea");
	textf.id = 'header2'
	textf.disabled = true
	textf.spellcheck = false
	textf.style.cssText = "font-family: monospace; font-weight: 800; font-size: 13px; position: absolute; width: 285px; height: 34px; top: 10px; left: 1230px; padding-left: 15px; padding-top: 3px; border-top: 1px dotted "+ theme + "; border-right: 1px dotted "+ theme + "; border-bottom: none; border-left: 1px dotted "+ theme + "; border-image: initial; border-radius: 5px; background-color: black; color: "+ theme + "; overflow: hidden; resize: none; cursor: default; outline: none; caret-color: transparent"
	document.getElementById('maingame').appendChild(textf); 
	header2.value = 'LOG'
	textf = document.createElement('textarea');
	textf.id = 'header3'
	textf.disabled = true
	textf.spellcheck = false
	textf.style.cssText = "font-family: monospace; font-weight: 800; font-size: 13px; position: absolute; width: 590px; height: 34px; top: 463px; left: 926px; padding-left: 15px; padding-top: 3px; border-top: 1px dotted "+ theme + "; border-right: 1px dotted "+ theme + "; border-bottom: none; border-left: 1px dotted "+ theme + "; border-image: initial; border-radius: 5px; background-color: black; color: "+ theme + "; overflow: hidden; resize: none; cursor: default; outline: none; caret-color: transparent"
	document.getElementById('maingame').appendChild(textf); 
	header3.value = 'LAST RUNS'	
}

function createLines() {
	let l = function(i,x,y,w,id) {
		let textf = document.createElement('div')
		textf.id = 'il' + i
		textf.style.position = 'absolute'
		textf.style.left = x + 'px'
		textf.style.top = y + 'px'
		textf.style.width = w + 'px'
		textf.style.height = '1px'
		textf.style.borderBottom =  '1px dotted ' + theme
		document.getElementById(id).appendChild(textf)
	}
	l(1,6,34,300,'idlemode')
	l(2,370,34,298,'idlemode')
	l(3,6,238,300,'idlemode')
	l(4,370,238,298,'idlemode')
	l(5,6,470,300,'idlemode')
	l(6,370,470,298,'idlemode')	
	l(7,941,32,248,'maingame')
	l(8,1244,32,277,'maingame')
	l(9,940,484,582,'maingame')
}

function logBackup() {
	let a = document.createElement("a"), data, file
	document.body.appendChild(a)
	for (let i = 0; i <= 1; i++) {
		data = !i ? [log.value, '_log.txt'] : [info1.value, '_status.txt']
		file = new Blob([data[0]], {type: 'text/plain'})
		a.href = URL.createObjectURL(file)
		a.download = account + data[1]
		a.click()
	}
	data = 'var data = ' + decompress(load(account + '_summary')) + '\n'
	data += 'data = compress(JSON.stringify(data))\n'
	data += 'save(\'' + account +	'_summary\', data)'
	file = new Blob([data], {type: 'text/plain'})
	a.href = URL.createObjectURL(file)
	a.download = account + '_summary.txt'
	a.click()
	data = 'var set = ' + JSON.stringify(ST) + '\n'
	data += 'save(\'' + account +	'_settings\', JSON.stringify(set))'
	file = new Blob([data], {type: 'text/plain'})
	a.href = URL.createObjectURL(file)
	a.download = account + '_settings.txt'
	a.click()
	document.body.removeChild(a)
	addStatus2('Backup created')
}

function confirmBackup() {
	let val = btn16.innerText
	if (val === 'Backup') {
		btn16.innerText = 'Confirm?'
		setTimeout(() => btn16.innerText = 'Backup', 5000)
	}
	else {
		logBackup()	
		btn16.innerText = 'Backup' 
	}		
}

function isVisible(elem) {
	return document.getElementById(elem).style.display === 'block'
}

function getCSS(id) {
	let css = document.getElementById(id).style.cssText
	return css.replace(/(rgb\W*\d+\W*\d+\W*\d+\W*\))/g,'"+ theme + "')	
}

function createUI() {
	createLog()
	createStatus() 
	createStatus2()
	createHeader()
	createLines()
	createStatsWin()
	createIdleInfo()
	createTimeInfo()
	createAFKwin()
	log.onkeydown = function(e) { 
		if (e.keyCode === 38) { log.scrollTop -= 105; event.preventDefault() }
		else if (e.keyCode === 40) { log.scrollTop += 105; event.preventDefault() }
	}
	log.oncontextmenu  = function(e) { return false }
	info1.onkeydown = function(e) { 
		if (e.keyCode === 38) { info1.scrollTop -= 378; event.preventDefault() }
		else if (e.keyCode === 40) { info1.scrollTop += 378; event.preventDefault() }
	}
	info1.oncontextmenu  = function(e) { return false }	
	info2.onkeydown  = function(e) {
		if (e.keyCode === 38) { info2.scrollTop -= 378; event.preventDefault() }
		else if (e.keyCode === 40) { info2.scrollTop += 378; event.preventDefault() }
	}
	info2.onmousedown  = function(e) {
		if (e.which === 3) statusInfo()
	}
	info2.oncontextmenu  = function(e) { return false }	
	statswin.onkeydown  = function(e) {
		if (e.keyCode === 38) { statswin.scrollTop -= 410; event.preventDefault() }
		else if (e.keyCode === 40) { statswin.scrollTop += 410; event.preventDefault() }
	}
	statswin.oncontextmenu  = function(e) { return false }
	timeinfo.oncontextmenu  = function(e) { return false }	
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let account = $j('.accname').text()
function addLog(txt) {
	let now = new Date()
	let val = log.value
	let ts = timeFormat(now.getDate()) + '.' + timeFormat(now.getMonth()+1) + ' | ' + now.toLocaleTimeString().slice(0,5)
    log.value = ts + ' | ' + txt + '\n' + val
	saveLog()
}

function loadLog() {
	let data = decompress(load(account + '_log'))
	if (data) log.value = data
}

function saveLog() {
	let data = log.value
	if (!data) return
	save(account + '_log', compress(data))
}


function addStatus(txt) {
	let now = new Date() 
	let val =  info1.value
	let ts = timeFormat(now.getDate()) + '.' + timeFormat(now.getMonth()+1) + ' | ' + now.toLocaleTimeString().slice(0,5)
	info1.value = ts + ' | ' + txt + '\n' + val
	saveStatus()
}

function loadStatus() {
	let data = decompress(load(account + '_status'))
	if (data) info1.value = data
}

function saveStatus() {
	let data = info1.value
	if (!data) return
	data = data.split('\n')
	for (let i = data.length-1; i >= 3200; i--) { data.splice(i,1) }	
	data = data.join('\n')
	save(account + '_status', compress(data))
	info1.value = data
}

function addStatus2(txt) {
	let old = info2.value
    info2.value = txt + '\n' + old
}

function load(id) {
	 return localStorage.getItem(id)
}

function save(id,data) {
	 return localStorage.setItem(id,data)
}

function compress(data) {
	return LZString.compress(data)
}

function decompress(data) {
	return LZString.decompress(data)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let UI = [], ST = {}
function createSettingsUI() {
	let pos = [926,351], t
	UI[0] = qs.create(pos[0],pos[1], 'Buy max')
	.addNumber('m0', 0, 6000, 0, 100)
	.addNumber('m1', 0, 6000, 0, 100)
	.addNumber('m2', 0, 6000, 0, 100)
	.addNumber('m3', 0, 6000, 0, 100)
	.setSize(100,205)
	pos = getPos(0,'r')
	UI[1] = qs.create(pos[0],pos[1], 'Idle goal')
	.addNumber('g0', 0, 6000, 0, 100)
	.addNumber('g1', 0, 6000, 0, 100)
	.addNumber('g2', 0, 6000, 0, 100)
	.addNumber('g3', 0, 6000, 0, 100)
	.setSize(100,205)
	for (let i = 0; i < 4; i++) {
		let m = typeof buyMax[i] !== 'undefined' ? buyMax[i] : ''
		UI[0].setValue('m' + i, m)
		let g = typeof buyGoal[i] !== 'undefined' ? buyGoal[i] : ''
		UI[1].setValue('g' + i,  g)
	}
	 pos = getPos(0,'b')
	 UI[2] = qs.create(pos[0],pos[1], 'Max prod')
	.addText('maxProd', maxProd)
	.setSize(100,70)
	 pos = getPos(2,'r')
	UI[3] = qs.create(pos[0],pos[1], 'Max level')
	.addNumber('maxLevel', 0, 6498, maxLevel, 1,
	() => maxLevel = Number(UI[3].getValue('maxLevel')) || maxLevel)
	.setSize(100,70)
	pos = getPos(1,'r')
	UI[4] = qs.create(pos[0],pos[1], 'Fries at start')
	.addNumber('minFries', 0, 6000, minFries, 100,
	() => minFries = Number(UI[4].getValue('minFries')) || minFries)
	.setSize(130,69)
	pos = getPos(4,'b')
	UI[5] = qs.create(pos[0],pos[1], 'Buy max limit')
	.addNumber('useMaxBuy', 0, 6000, useMaxBuy, 100,
	() => useMaxBuy = Number(UI[5].getValue('useMaxBuy')) || useMaxBuy)
	.setSize(130,69)
	pos = getPos(5,'b')
	UI[6] = qs.create(pos[0],pos[1], 'Building factor')
	.addNumber('otherPct', 1, 10, otherPct, 0.05, 
	() => otherPct = Number(UI[6].getValue('otherPct')) || otherPct)
	.setSize(130,69)
	pos = getPos(6,'b')
	UI[7] = qs.create(pos[0],pos[1], 'Timeout ms')
	.addNumber('buyTimeOut', 50, 2000, buyTimeOut, 10, 
	() => buyTimeOut = Number(UI[7].getValue('buyTimeOut')) || buyTimeOut)
	.setSize(130,69)
	pos = getPos(4,'r')
	t = timeFormat(Math.floor(sessionTime/60)) + ':' + timeFormat(sessionTime%60)
    UI[8] = qs.create(pos[0],pos[1], 'Reset time')
	.addTime('sessionTime', t)
	.setSize(130,69)
	pos = getPos(8,'b')
	t = timeFormat(Math.floor(idleMax/60)) + ':' + timeFormat(idleMax%60)
    UI[9] = qs.create(pos[0],pos[1], 'Idle time')
	.addTime('idleMax', t,)
	.setSize(130,69)
	pos = getPos(9,'b')
	 UI[10] = qs.create(pos[0],pos[1], 'Sleep time')
	.addTime('sleepTime', timeFormat(sleepTime[0]) + ':' + timeFormat(sleepTime[1]),
	function() { 
		let t = UI[10].getValue('sleepTime').split(':').map(Number)
		sleepTime = [t[0], t[1]]
		if (sleepOn) btn4.innerText = timeFormat(sleepTime[0]) + ':' + timeFormat(sleepTime[1]) 
	})
	.setSize(130,69)
	pos = getPos(10,'b')
	UI[11] = qs.create(pos[0],pos[1], 'Farm minute')
	.addNumber('farmMax', 1, 900, farmMax, 1, 
	function() {
		if (!isNaN(UI[11].getValue('farmMax'))) {
			farmMax = UI[11].getValue('farmMax')
			getFarmTime()
		}
	})
	.setSize(130,69)
	pos = getPos(8,'r')
	UI[12] = qs.create(pos[0],pos[1], 'Buy research')
	.addBoolean('Enabled', autoRP, () => autoRP = !autoRP)
	.setSize(130,69)
	pos = getPos(12,'b')
	UI[13] = qs.create(pos[0],pos[1], 'Claim rewards')
	.addBoolean('Enabled', autoReward, () => autoReward = !autoReward)
	.setSize(130,69)
	pos = getPos(13,'b')
	UI[14] = qs.create(pos[0],pos[1], 'Upgrade skills')
	.addBoolean('Enabled', autoSkill, () => autoSkill = !autoSkill)
	.setSize(130,69)
	pos = getPos(14,'b')
	UI[15] = qs.create(pos[0],pos[1], 'Do missions')
	.addBoolean('Enabled', autoMission, () => autoMission = !autoMission)
	.setSize(130,69)
	for (let i = 0; i < UI.length; i++) {
		UI[i].hideAllTitles()
		UI[i].hide()
	}
}
	
function getPos(id,pos) {
	let d = UI[id].getPosition()
	if (pos === 'r') return [d[0]+d[1],d[2]]
	return [d[0],d[2]+d[3]]
}

function saveSettings(quick=false) {
	if (!quick) {
		let tmpMax = [...buyMax], tmpGoal = [...buyGoal]
		buyMax = [], buyGoal = []
		for (let i = 0; i < 4; i++) {
			let m = UI[0].getValue('m' + i) 
			let g = UI[1].getValue('g' + i)
			if (m>0 && g>0) {
				buyMax[i] = m
				buyGoal[i] = g
			}
			else {
				UI[0].setValue('m' + i, '')
				UI[1].setValue('g' + i, '')			
			}
		}
		let reg = UI[2].getValue('maxProd').match(/(\d+\.*\d*)\s*(\w*)/)
		maxProd = reg ? reg[1] + ' ' + reg[2] : maxProd	
		UI[2].setValue('maxProd', maxProd)		
		if ((tmpMax.length !== buyMax.length || tmpGoal.length !== buyGoal.length) && autoPlay) {
			//toggleAutoPlay()
			//addStatus2('New settings - Auto: off')
		}
		let t = UI[8].getValue('sessionTime').split(':').map(Number)
		sessionTime = t[0]*60 + t[1] >= 600 ? t[0]*60 + t[1] : 600
		t = timeFormat(Math.floor(sessionTime/60)) + ':' + timeFormat(sessionTime%60)
		UI[8].setValue('sessionTime',t)
		t = UI[9].getValue('idleMax').split(':').map(Number)
		idleMax = t[0]*60 + t[1] <= sessionTime-40 ? t[0]*60 + t[1] : sessionTime-40	
		t = timeFormat(Math.floor(idleMax/60)) + ':' + timeFormat(idleMax%60)
		UI[9].setValue('idleMax',t)
		ST['buyMax'] = buyMax
		ST['buyGoal'] = buyGoal
		ST['minFries'] = minFries
		ST['useMaxBuy'] = useMaxBuy
		ST['otherPct'] = otherPct
		ST['buyTimeOut'] = buyTimeOut
		ST['maxProd'] = maxProd
		ST['maxLevel'] = maxLevel
		ST['sessionTime'] = sessionTime
		ST['idleMax'] = idleMax
		ST['sleepTime'] = sleepTime
		ST['farmMax'] = farmMax
		ST['autoRP'] = autoRP
		ST['autoReward'] = autoReward 
		ST['autoSkill'] = autoSkill
		ST['autoMission'] = autoMission
		ST['highLevel'] = highLevel
		ST['theme'] = theme
	}
	save(account +	'_settings',  JSON.stringify(ST))	
}
	
function loadSettings() { 
	ST = JSON.parse(load(account + '_settings'))
	if (ST) {
		buyMax = ST.buyMax
		buyGoal = ST.buyGoal
		minFries = ST.minFries
		useMaxBuy = ST.useMaxBuy
		otherPct = ST.otherPct
		buyTimeOut = ST.buyTimeOut
		maxProd = ST.maxProd
		maxLevel = ST.maxLevel
		sessionTime = ST.sessionTime
		idleMax = ST.idleMax
		sleepTime = ST.sleepTime
		farmMax = ST.farmMax
		autoRP = ST.autoRP
		autoReward = ST.autoReward
		autoSkill = ST.autoSkill
		autoMission = ST.autoMission	
		highLevel = ST.highLevel		
		theme = ST.theme
	}
	else {
		ST = { 
			buyMax: [2000, 2500],
			buyGoal: [2500, 3000],
			minFries: [2000],
			useMaxBuy: [1500],
			otherPct: 7.2,
			buyTimeOut: 100,
			maxProd: '1.00 aq',
			maxLevel: 6498,
			sessionTime: 600,
			idleMax: 540,
			sleepTime: [6,0],
			farmMax: 60,
			highLevel: 6498,
			autoRP: false,
			autoReward: false,
			autoSkill: false,
			autoMission: false,
			startTime: Date.now(),
			totalRuns: 0,
			theme: theme
		}
		saveSettings(true)
	}
	todayRuns = JSON.parse(load(account + '_day_' + new Date().toLocaleDateString()))
	if (!todayRuns) todayRuns = { r: 0, sp: 0, ep: 0, c: 0}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function createButtons() {
	let btns = ['Autoplay','Finish','Time','Sleep','Sound','Idle','Stats',
	'Cost','Mega','Growth','Daily','Prod','Clan','Research',
	'Settings','Backup', 'Theme', sVersion ,'Farm','Collect', 'Calc']
	let top = 638, right = 523
	for (let i = 1; i <= btns.length; i++) {
		addButton(i, btns[i-1], top, right)
		window['btn' + i].oncontextmenu = function(e) { return false }
		right -= 87
		if (right < 0) right = 523
		if (i%7 === 0) top += 20
	}	
	btn1.onmousedown  = function(e) {
		if (e.which === 1) toggleAutoPlay()
		else if (e.which === 3) toggleAutoPlay(false)	
	}
	btn2.onclick = function() {
	    finishNext = !finishNext
		highlightBtn(btn2)
	}
	btn3.onclick  = function() { 
		sessionTimer = sessionTimer2 = Date.now()
		setSessionTime(nextrstimediv-600)
		addStatus2('Sessiontime set')
	}
	btn4.onclick  = function() {
		sleepOn = !sleepOn
		if (sleepOn) btn4.innerText = timeFormat(sleepTime[0]) + ':' + timeFormat(sleepTime[1]) 		
		else btn4.innerText = 'Sleep'
		highlightBtn(btn4)		
	}
	btn5.onclick = function() {
		ST.audio = !ST.audio
		highlightBtn(btn5)
		saveSettings(true)
	}
	btn6.onclick = function() {
		ST.idle = !ST.idle
		closeall()
		if (ST.idle) $j('#idlemode').toggle()
		else $j("#home").toggle()
		highlightBtn(btn6)
		saveSettings(true)
	}
	btn7.onmousedown = function(e) {
		if (e.which === 1) { 
			statswin.d++ 
			if (statswin.d > 2) statswin.d = 1
			if (statswin.d == 1) statsSummary()
			else statsGrowth()	
		}
		else if (e.which === 3) {
			statswin.style.display = 'none'
			statswin.d = 0
		}		
	}
	btn8.onclick = function() {
		if (!costUI[1].getValue('prod')) {
			let prod  = getLogData()[0]
			costUI[1].setValue('prod', prod)
		}
		for (let i = 0; i < 3;i++) costUI[i].toggleVisibility()
		highlightBtn(btn8)
	}
	btn9.onclick  = function() {
		msUpgrade()
		highlightBtn(btn9,true)
	}
	btn10.onclick = function() {
		msGrowth()	
		highlightBtn(btn10,true) 
	}
	btn11.onclick = function() {
		dailyGrowth()	
		highlightBtn(btn11,true) 
	}
	btn12.onclick  = function() {
		prodUpgrade()
		highlightBtn(btn12,true)
	}
	btn13.onclick  = function(e) {
		missionUI[0].toggleVisibility()
		missionUI[1].toggleVisibility()
		if (!missionUI[0]._hidden) missionDaily()	
		highlightBtn(btn13)
	}
	btn14.onclick  = function() {
		showResearch()
		highlightBtn(btn14,true)
	}
	btn15.onmousedown = function(e) {
		if (e.which === 1) {
			for (let i = 0; i < UI.length; i++) UI[i].toggleVisibility()
			if (UI[0]._hidden) saveSettings()
			highlightBtn(btn15)
		}
		else if (e.which === 3) { 
			statusInfo()
			if (isVisible('statswin')) { 
				statswin.d = 0
				statswin.style.display = 'none' 
			}
		}
	}
	btn16.onmousedown = function(e) {
		if (e.which === 1) confirmBackup()
		else if (e.which === 3) {
			let l = info1.value
			l = [l.length/1024,l.split('\n').length]
			addStatus2(seperator)
			addStatus2('Info: ' + l[1].toLocaleString() + ' entries, ' + Math.round(l[0]) + ' kb')
			l = log.value
			l = [l.length/1024,l.split('\n').length]
			addStatus2('Log:  ' + l[1].toLocaleString() + ' entries, ' + Math.round(l[0]) + ' kb')
		}
	}	
	btn17.onclick = changeTheme
	btn18.onclick = function() {
		if (afkwin.style.display === 'none') afkwin.style.display = 'block'
		displayStats()
	}
	btn19.onclick = statsFarm
	btn20.onclick = collectNow
	btn21.onmousedown = function(e) {
		if (e.which === 1) showCalcUI()
		else if (e.which === 3) getCalcData()		
	}
}

document.onkeydown = function(e) {
	if (!isVisible('guild')) {
		let id = document.activeElement.id
		if (!id.includes('log') && !id.includes('info') && !id.includes('stats') && UI[0]._hidden && costUI[0]._hidden) {
			if (e.keyCode === 67) showCalcUI()         //c
			else if (e.keyCode === 66) confirmBackup() //b
			else if (e.keyCode === 68) dailyGrowth()   //d
			else if (e.keyCode === 70) collectNow()    //f
			else if (e.keyCode === 71) msGrowth()      //g
			else if (e.keyCode === 77) msUpgrade()     //m
			else if (e.keyCode === 80) prodUpgrade()   //p
			else if (e.keyCode === 81) changeTheme()   //q
			else if (e.keyCode === 82) showResearch()  //r
			else if (e.keyCode === 83) {                //s
				statswin.d++ 
				if (statswin.d === 1) statsSummary()
				else if (statswin.d === 2) statsGrowth()
				else {
					statswin.d = 0
					statswin.style.display = 'none'
				}
			}
		}
	}	
	if (e.keyCode === 27) {                               //esc
		statusInfo()
		if (isVisible('statswin')) { 
			statswin.d = 0
			statswin.style.display = 'none' 
		}
		if (isVisible('afkwin')) afkwin.style.display = 'none' 
	}
}

document.onclick = function() {
	if (!errorAudio.paused) { 
		sessionTimer2 = Date.now()
		errorAudio.pause()
	}	
}

function addButton(id, name, top = 0, right = 0, height = 20, width = 87) {
	let btn = document.createElement('button')
	btn.id = 'btn' + id
	btn.innerText = name
	btn.style.fontSize = '12px'
	btn.style.fontFamily = 'monospace'
	btn.style.backgroundColor = 'black'
	btn.style.border = '1px dotted ' + theme
	btn.style.borderRadius = '5px'
	btn.style.color = theme
	btn.style.position = 'fixed'
	btn.style.width =  width + 'px'
	btn.style.height =  height + 'px'
	btn.style.top = top + 'px'
	btn.style.right = right + 'px'
	btn.style.outline = 'none' 
	document.getElementById('maingame').appendChild(btn); 
}

function highlightBtn(id,disable=false) {
	if (!id.style.fontWeight) {
		id.style.border = '1.2px solid ' + theme
		id.style.fontWeight = 800
		if (disable) { 
			id.disabled = true	
			setTimeout(highlightBtn, 000, id)
		}
	}
	else {
		id.style.border = '1px dotted ' + theme
		id.style.fontWeight = ''
		id.disabled = false	
	}	
}

function confirmBox(cb) {
	if (typeof c1 !== 'undefined') return
	for (let i = 1; i <= 2; i++) {
		let btn = document.createElement('button')
		btn.id = 'c' + i
		btn.innerText = i === 1 ? 'Confirm' : 'Cancel'
		let r = i === 1 ? 985 : 710
		btn.style.cssText = "font-size: 40px; color: "+ theme + "; background-color: black; border: 5px solid "+ theme + "; position: fixed; width: 280px; height: 80px; right: " + r + "px; top: 210px; outline: none; z-index: 10000;"	 
		document.getElementById('maingame').appendChild(btn); 	
	}
	let close = () => (c1.remove(),c2.remove())
	c1.onclick = ()=> (cb(),close())
	c2.onclick = close
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let allDivs = [],theme = 'rgb(204, 82, 0)'
function setTheme() {
	document.body.style.backgroundColor = 'black'
	document.getElementById('maingame').style.background = 'black'
	document.getElementById('maingame').style.backgroundColor = 'black'
	let div = document.getElementsByClassName('lvlanz')[0]
	div.style.cssText = 'width: 156px; height: 89px; background-color: transparent; border: 1px dotted ' + theme 
	allDivs.push(div)
	div = document.getElementsByClassName('epbartxt')[0]
	div.style.cssText = 'margin-left: 4px; color: ' +theme + '; font-weight: 200;'
	allDivs.push(div)	
	div = document.getElementsByClassName('epbara')[0]
	div.style.cssText = 'background-color: transparent; border-color: transparent; margin-top: 5px; margin-left: -4px;'
	allDivs.push(div)	
	div = document.getElementsByClassName('epbari')[0]
	div.style.backgroundColor = theme
	div.style.opacity = '0.2'
	div.style.borderRadius = '5px'
	allDivs.push(div)
    div = document.getElementsByClassName('accname')[0]
	div.style.cssText = 'margin-left: -4px; color: ' + theme + '; font-weight: 200; font-family: monospace; font-size: 14px; margin-top: 6px;'
	allDivs.push(div)
    document.getElementsByClassName('guildname')[0].remove()
    div = document.getElementsByClassName('nextrstimeranz')[0]
	div.style.cssText = 'margin-left: -4px; color: ' +theme + '; font-weight: 200; font-family: monospace; font-size: 11px;'
	allDivs.push(div)
	div = document.getElementById('goldbar')
	div.style.cssText = 'margin-left: 202px; width: 326px; height: 26px; background-color: transparent; border: 1px dotted ' + theme 
	allDivs.push(div)
	div = document.getElementsByClassName('gold')[0]
	div.style.cssText = 'line-height: 26px; text-align: left; font-size: 16px; font-family: monospace; font-weight: 200; margin-left: 16px; color: ' + theme
	allDivs.push(div)	
	document.getElementsByClassName('goldicon')[0].remove()
	div = document.getElementById('gemsbar')
	div.style.cssText = 'width: 324px; height: 26px; left: -20px; background-color: transparent; border: 1px dotted ' + theme 
	allDivs.push(div)	
	div = document.getElementsByClassName('gems')[0]
	div.style.cssText = 'width: 324px; line-height: 26px; text-align: left; font-size: 16px; font-family: monospace; font-weight: 200; margin-left: 16px; color: ' + theme
	allDivs.push(div)	
	document.getElementsByClassName('gemsicon')[0].remove()
	document.getElementById('kredsicon').remove()
	for (var i = 1; i <= 8; i++) { 
		div = document.getElementsByClassName('building' + i)[0]
		div.style.cssText = 'height: 174px; background-color: transparent; border: 1px dotted ' + theme 
		if (i >= 2 && i !== 5) div.style.marginTop = '-176px'
		else if (i === 5) div.style.marginTop = '60px'
		allDivs.push(div)	
	}
	div = document.getElementsByClassName('buildingname')
	for (var i = 0; i < div.length; i++) { 
		div[i].style.cssText = 'color: ' + theme + '; font-family: monospace; font-weight: 200; font-size: 14px;'
		div[i].innerText = ''
		allDivs.push(div[i])
	}
	div = document.getElementsByClassName('bimgp')
	for (var i = 0; i < div.length; i++) { 
		div[i].style.marginTop = '-20px'
	}
	div = document.getElementsByClassName('bimgscale')
	for (var i = div.length-1; i >= 0; i--) div[i].remove()
	for (var i = 1; i <= 8; i++) { 
		div = document.getElementsByClassName('b' + i + 'lvl')[0]
		div.style.cssText = 'margin-top: -55px; margin-bottom: 66px; font-family: monospace; font-size: 15px; line-height: 1.5; font-weight: 200; color: ' + theme
		allDivs.push(div)
	}
	for (var i = 1; i <= 8; i++) { 
		document.getElementsByClassName('zeitbar' + i)[0].style.backgroundColor = 'transparent'
		div = document.getElementsByClassName('zeitbartxt' + i)[0]
		allDivs.push(div)
		div.style.cssText = 'font-weight: 200; font-size: 15px; font-family: monospace; color: ' + theme
		div = document.getElementsByClassName('b' + i + 'btn')[0]
		div.style.cssText = 'font-weight: 200; font-size: 15px;  font-family: monospace; border: 1px dotted ' + theme 
		allDivs.push(div)		
	}
	div = document.getElementsByClassName('zeitbara')
	for (var i = 0; i < 8; i++) { 
	    div[i].style.cssText = 'background-color: transparent; border-color: transparent; margin-top: -20px; margin-bottom: 20px'
	}
	div = document.getElementsByClassName('button3')[0]
	div.style.cssText = 'color: ' + theme + ';background: transparent; margin-top: 55px; font-weight: 200; text-shadow: none; border: 1px dotted ' + theme 
	allDivs.push(div)	
	div = document.getElementsByClassName('idlemodebtn')[0]
	div.style.cssText = 'color: ' + theme + ';background: transparent; font-family: monospace; font-size: 15px; font-weight: 200; width: 680px; margin-left: 0px; text-shadow: none; border: 1px dotted ' + theme 
	div.innerText = 'Idle mode'
	allDivs.push(div)
	document.getElementById('idlemode').style.marginTop = '60px'
	document.getElementsByClassName('idlemodetxt')[0].remove()
	div = document.getElementsByClassName('incomepersekanz')[0]
	div.style.cssText = 'color: ' + theme + ';background: transparent; height: 40px; margin-top: -42px; font-family: monospace; font-size: 13px; font-weight: 200; border: 1px dotted ' + theme 
	allDivs.push(div)
	div = document.getElementsByClassName('incomepersekoff')[0]
	div.style.cssText = 'color: ' + theme + ';background: transparent; height: 40px; margin-top: -42px; font-family: monospace; font-size: 13px; font-weight: 200; border: 1px dotted ' + theme 
	allDivs.push(div)
	div = document.getElementsByClassName('buystufentxt')[0]
	div.style.cssText = 'font-size: 20px; font-family: monospace;'
	div.innerHTML = 'Buy x100' 
	div = document.getElementsByClassName('naciicons')
	for (var i = div.length-1; i >= 0; i--) div[i].remove() 
	document.getElementsByClassName('itemimg4')[0].remove()
	div = document.getElementsByClassName('button')
	for (var i = 0; i < div.length; i++) { 
		div[i].style.cssText = 'width: 156px; color: ' + theme + ';background: transparent; text-align: left; font-weight: 200; font-family: monospace; font-size: 14px; text-shadow: none; cursor: default; border: 1px dotted ' + theme 
		if (!i) div[i].style.marginTop = '93px'
		allDivs.push(div[i])
	}
	div[2].remove()
	div[4].innerHTML = '&nbsp&nbsp&nbspMS'
	div[5].innerHTML = '&nbsp&nbsp&nbspFarm'
	div = document.getElementsByClassName('researchbtn')[0]
	div.style.cssText = 'font-size: 14px; font-family: monospace;'
	div = document.getElementsByClassName('eventbtn')[0]
	div.style.cssText = 'font-size: 14px; font-family: monospace; margin-left: -5px'	
	document.getElementsByClassName('clanbtn')[0].style.marginLeft = '-25px'
	div = document.getElementsByClassName('buttonk')[0]
	div.style.cssText = 'color: ' + theme + '; background: transparent; text-align: left; font-weight: 200; font-family: monospace; font-size: 14px; text-shadow: none; width: 156px;  border: 1px dotted ' + theme 
	div.innerHTML = '&nbsp&nbsp&nbspStats'
	allDivs.push(div)
	document.getElementsByClassName('buttonk2')[0].remove()
	div = document.getElementById('maintutorial')
	div.style.cssText =  'background: black; border: 1px solid ' + theme
	allDivs.push(div)
	div = document.getElementsByClassName('tutorialtxt')[0]
	div.style.cssText = 'color: ' + theme
	allDivs.push(div)
	div = document.getElementsByClassName('tutorialclosebtn')[0]
	div.style.cssText = 'color: ' + theme + '; background: transparent; font-weight: 200; border: 1px solid ' + theme 
	allDivs.push(div)
	div = document.getElementsByClassName('avatarinfo')
	div[1].remove()
	div[0].remove()
	document.getElementsByClassName('researchpoints')[0].remove()
	document.getElementById('store').style.cssText = 'top: 80px; height: 400px'
	document.getElementsByClassName('item9')[0].style.marginTop = '-590px'
	document.getElementsByClassName('aktresearch')[0].style.height = '60px'
	document.getElementsByClassName('researchuptxt')[0].remove()
	for (var i = 6; i <= 11; i++) document.getElementsByClassName('researchup' + i)[0].remove()
	div = document.getElementById('allrsupgrades')
	div.style.cssText = 'height: 380px; overflow: hidden'
	document.getElementsByClassName('megaidle4')[0].style.marginTop = '10px'
	document.getElementsByClassName('megaidle5')[0].style.marginTop = '-122px'
	document.getElementsByClassName('turniertxtges')[0].style.opacity = 0.6
	document.getElementsByClassName('turniergesamt')[0].style.opacity = 0.6
	div = document.getElementsByClassName('qs_title_bar')
	for (let i = 0; i < div.length; i++) {
		div[i].style.background = theme
		div[i].style.color = 'black'
		allDivs.push(div[i])
	}
	div = ['qs_container','qs_content', 'qs_text_input qs_number', 'qs_text_input', 'qs_button', 'qs_textarea', 'qs_select']
	for (let i = 0; i < div.length; i++) {
	let id = document.getElementsByClassName(div[i])
		for (let j = 0; j < id.length; j++) {	
			if (div[i] !== 'qs_container' && div[i] !=='qs_content') id[j].style.border = '1px dotted ' + theme
			id[j].style.background = 'black'
			id[j].style.color = theme
			allDivs.push(id[j])
		}
	}	
	for (let i = 1; i <= 21; i++) allDivs.push(document.getElementById('btn' + i))
	allDivs.push(log,info1,info2,statswin,timeinfo,afkwin)
	allDivs.push(ii1,ii2,ii3,ii4,ii5,ii6,header1,header2,header3)	
	allDivs.push(il1,il2,il3,il4,il5,il6,il7,il8,il9)
	buildingcostanz(true)
	if (ST.audio) highlightBtn(btn5)
	if (ST.idle) highlightBtn(btn6)
	aktbuystufe = 3
}

function changeTheme() {
	if (theme === 'rgb(204, 82, 0)') theme = 'rgb(240, 132, 0)'
	else if (theme === 'rgb(240, 132, 0)') theme = 'rgb(0, 122, 204)'
	else if (theme ===  'rgb(0, 122, 204)') theme = 'rgb(185, 185, 185)'
	else theme = 'rgb(204, 82, 0)'
	ST['theme'] = theme
	for (let i = 0; i < allDivs.length; i++) {
		let css = allDivs[i].style.cssText.replace(/rgb\(\d+\D*\d+\D*\d+\)/g, theme)
		allDivs[i].style.cssText = css
	}
	if (autoPlay) btn1.style.borderColor = theme
	if (finishNext) btn2.style.borderColor = theme
	if (sleepOn) btn3.style.borderColor = theme
	if (ST.audio) btn5.style.borderColor = theme
	buildingcostanz()
	displayStats()
	saveSettings(true)	
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function homeanz() {
	chatoffen = 0;
	if (idlemode == 1) {
		closeall();
		$j('#idlemode').css({ display: 'block' });
	}
	else {
		clearTimeout(idletimervar);
		$j.get('game/homeanz.php', function(e) {
			if (e.erfolg == 1) {
				idlemode = 0;
				clearTimeout(btimervar1);
				clearTimeout(btimervar2);
				clearTimeout(btimervar3);
				clearTimeout(btimervar4);
				clearTimeout(btimervar5);
				clearTimeout(btimervar6);
				clearTimeout(btimervar7);
				clearTimeout(btimervar8);
				clearTimeout(btimervar9);
				clearTimeout(btimervar10);
				clearTimeout(btimervar11);
				clearTimeout(btimervar12);
				clearTimeout(btimervar13);
				clearTimeout(btimervar14);
				clearTimeout(btimervar15);
				clearTimeout(btimervar16);
				nextrstimediv = e.nextrstimediv;
				clearTimeout(nextrstimervar);
				nextrstimer();
				building = new Array();
				bcost = new Array();
				maxbplus = new Array();
				tenbplus = new Array();
				hundredbplus = new Array();
				graubtn = new Array();
				bincome = new Array();
				btime = new Array();
				bauto = new Array();
				bincomesec = new Array();
				bincomesec = e.bincomesec;
				bdauernoch = new Array();
				zeitbarwidth = new Array();
				building = e.building;
				bcost = e.bcost;
				maxbplus = e.maxbplus;
				tenbplus = e.tenbplus;
				hundredbplus = e.hundredbplus;
				graubtn = e.graubtn;
				bincome = e.bincome;
				incomepersek = e.incomepersek;
				btime = e.btime;
				bauto = e.bauto;
				bdauernoch = e.bdauernoch;
				zeitbarwidth = e.zeitbarwidth;
				bdauer1 = bdauernoch[1] * 10;
				bdauer2 = bdauernoch[2] * 10;
				bdauer3 = bdauernoch[3] * 10;
				bdauer4 = bdauernoch[4] * 10;
				bdauer5 = bdauernoch[5] * 10;
				bdauer6 = bdauernoch[6] * 10;
				bdauer7 = bdauernoch[7] * 10;
				bdauer8 = bdauernoch[8] * 10;
				dauerb1 = e.dauerb1;
				dauerb2 = e.dauerb2;
				dauerb3 = e.dauerb3;
				dauerb4 = e.dauerb4;
				dauerb5 = e.dauerb5;
				dauerb6 = e.dauerb6;
				dauerb7 = e.dauerb7;
				dauerb8 = e.dauerb8;
				incomeoffline = e.incomeoffline;
				$j('.incomepersekanz').html('Dollar / sec: ' + incomepersek + '<br>Total Levels: +' + e.totalprof + '% Profit');
				$j('.incomepersekoff').html('Offline Profits:<br>Dollar / sec: ' + e.incomeoffline);
				$j('.gold').html(e.gold.slice(2, 12))	
				document.getElementsByClassName('button')[8].innerHTML = '&nbsp&nbsp Store: ' + e.gems	
				e.epbar = e.epbar >= 0 ? e.epbar : 0
                $j(".epbartxt").html(e.level + ' - ' + Math.round(e.epbar) + '%')
				$j('.epbari').css({ width: e.epbar + '%' });
				for (i = 1; i < 9; i++) {
					profitprozent = building[i] / 10;
					$j('.b' + i + 'lvl').html('Lv. ' + building[i] + '<br><br>' + bincomesec[i].toString().slice(2,12))
					$j('.zeitbar' + i).css({ width: zeitbarwidth[i] + '%' });
					if (btime[i] > 0) {
						$j('.zeitbartxt' + i).html('');
						$j('.zeitbartxt' + i).unbind("click");
						$j('.zeitbartxt' + i).css({ cursor: 'default' });
					}
					else {
						$j('.zeitbartxt' + i).unbind("click")
						if (bauto[i] > 0 && building[i] > 0) {
							$j('.zeitbartxt' + i).html('');
							$j('.zeitbartxt' + i).css({ cursor: 'default' });
							if (i === 1) buildstart(i)
						}
						else {
							$j('.zeitbartxt' + i).html('');
							$j('.zeitbartxt' + i).css({ cursor: 'default' });
						}
					}
					$j('.building' + i).css({ display: 'block' })
				}
				$j('.skillbtn').html('Skills: ' + (e.skillpoints || 0))
				$j('.researchbtn').html('Research: ' + (e.researchpoints || 0))
				$j('.eventbtn').html('Event: ' + (e.eventpoints || 0))
				$j('.clanbtn').html('Fastfood Clan')
				clearTimeout(btimervar1);
				clearTimeout(btimervar2);
				clearTimeout(btimervar3);
				clearTimeout(btimervar4);
				clearTimeout(btimervar5);
				clearTimeout(btimervar6);
				clearTimeout(btimervar7);
				clearTimeout(btimervar8);
				clearTimeout(btimervar9);
				clearTimeout(btimervar10);
				clearTimeout(btimervar11);
				clearTimeout(btimervar12);
				clearTimeout(btimervar13);
				clearTimeout(btimervar14);
				clearTimeout(btimervar15);
				clearTimeout(btimervar16);
				if (btime[1] > 0) { btimer1(); btimerprog1(); }
				buildingcostanz();
				closeall();
				ST.idle ? $j('#idlemode').toggle() : $j("#home").toggle()
			}
		})
	}
}

let lastBought = Array(8).fill(0)
function buildingbuy(nbr, amount=0) {
	  if (!amount) amount = aktbuystufe
	  let canBuy = getGold()-getValue(bcost[(nbr*4)-(4-amount)])	
	  if (Date.now() - buyStepTimer > 10000 && autoPlay) startIdleMode()
	  else if (canBuy > 0 && !lastBought[nbr-1]) {
			lastBought[nbr-1] = true
			buyStepTimer = Date.now()
			document.getElementsByClassName('gold')[0].innerText = convertValue(canBuy)
			$j.get('game/buildingbuy.php?b=' + nbr + '&s=' + amount, function(e) {
				if (e.erfolg == 1) {
					building = []
					bcost = []
					maxbplus = []
					tenbplus = []
					hundredbplus = []
					graubtn = []
					bincome = []
					building = e.building
					bcost = e.bcost
					maxbplus = e.maxbplus
					tenbplus = e.tenbplus
					hundredbplus = e.hundredbplus
					graubtn = e.graubtn
					bincome = e.bincome
					incomepersek = e.incomepersek
					bincomesec = []
					bincomesec = e.bincomesec
					incomeoffline = e.incomeoffline
					$j('.incomepersekanz').html('Dollar / sec: ' + incomepersek + '<br>Total Levels: +' + e.totalprof + '% Profit')
					$j('.incomepersekoff').html('Offline Profits:<br>Dollar / sec: ' + e.incomeoffline)
					$j('.gold').html(e.gold.slice(2, 12))
					for (i = 1; i < 9; i++) {
						$j('.b' + i + 'lvl').html('Lv. ' + building[i] + '<br><br>' +  bincomesec[i].toString().slice(2,12))
					}
					$j('.building' + nbr).css({ display: 'block' })
					if (bauto[nbr] >= 1 && nbr === 1) buildstart(nbr)
					buildingcostanz()
				}
				lastBought[nbr-1] = false
				displayStats()
			})	
	  }
}

function buildstart(bnmbr) {
	$j.get('game/buildstart.php?' + bnmbr, function(e) {
		if (e.erfolg == 1) {
			btime = new Array();
			bdauernoch = new Array();
			zeitbarwidth = new Array();
			btime = e.btime;
			bdauernoch = e.bdauernoch;
			zeitbarwidth = e.zeitbarwidth;
			bdauer1 = bdauernoch[1] * 10;
			bdauer2 = bdauernoch[2] * 10;
			bdauer3 = bdauernoch[3] * 10;
			bdauer4 = bdauernoch[4] * 10;
			bdauer5 = bdauernoch[5] * 10;
			bdauer6 = bdauernoch[6] * 10;
			bdauer7 = bdauernoch[7] * 10;
			bdauer8 = bdauernoch[8] * 10;
			for (i = 1; i < 9; i++) {
				$j('.zeitbar' + i).css({ width: zeitbarwidth[i] + '%' });
				if (btime[i] > 0) {
					$j('.zeitbartxt' + i).html('');
					$j('.zeitbartxt' + i).unbind("click");
					$j('.zeitbartxt' + i).css({ cursor: 'default' });
				}
				else {
					$j('.zeitbartxt' + i).unbind("click");
					if (bauto[i] > 0 && building[i] > 0) {
						$j('.zeitbartxt' + i).html('');
						$j('.zeitbartxt' + i).css({ cursor: 'default' });
					}
					else {
						$j('.zeitbartxt' + i).html('');
						$j('.zeitbartxt' + i).css({ cursor: 'default' });
					}
				}
				$j('.building' + i).css({ display: 'block' });
			}
			clearTimeout(btimervar1);
			clearTimeout(btimervar2);
			clearTimeout(btimervar3);
			clearTimeout(btimervar4);
			clearTimeout(btimervar5);
			clearTimeout(btimervar6);
			clearTimeout(btimervar7);
			clearTimeout(btimervar8);
			clearTimeout(btimervar9);
			clearTimeout(btimervar10);
			clearTimeout(btimervar11);
			clearTimeout(btimervar12);
			clearTimeout(btimervar13);
			clearTimeout(btimervar14);
			clearTimeout(btimervar15);
			clearTimeout(btimervar16);
			if (btime[1] > 0) { btimer1(); btimerprog1(); }
		}
	});
}

function buildfertig(bnmbr) {
	if (buildpause[bnmbr] == 1)	window.setTimeout(function(){ buildpause[bnmbr] = 0; },500)
	else {
		buildpause[bnmbr] = 1;
		if (idlemode == 0) {
			$j.get('game/buildfertig.php?' + bnmbr, function(e) {
				if (e.erfolg == 1) {
					truckplusgesamt += e.truckplusgesamt;
					if (e.truckplusgesamt > 0) {
						$j('.avatarbtn').html('Avatar: ' + truckplusgesamt );
					}
					btime = new Array();
					bdauernoch = new Array();
					zeitbarwidth = new Array();
					graubtn = new Array();
					bcost = new Array();
					maxbplus = new Array();
					tenbplus = new Array();
					hundredbplus = new Array();
					bcost = e.bcost;
					maxbplus = e.maxbplus;
					tenbplus = e.tenbplus;
					hundredbplus = e.hundredbplus;
					btime = e.btime;
					bdauernoch = e.bdauernoch;
					zeitbarwidth = e.zeitbarwidth;
					graubtn = e.graubtn;
					skillplus += e.skillplus;
					bdauer1 = bdauernoch[1] * 10;
					bdauer2 = bdauernoch[2] * 10;
					bdauer3 = bdauernoch[3] * 10;
					bdauer4 = bdauernoch[4] * 10;
					bdauer5 = bdauernoch[5] * 10;
					bdauer6 = bdauernoch[6] * 10;
					bdauer7 = bdauernoch[7] * 10;
					bdauer8 = bdauernoch[8] * 10;
					$j('.gold').html(e.gold.slice(2, 12));
					$j('.epbartxt').html(e.level + ' - ' + Math.round(Math.abs(e.epbar)) + '%');
					$j('.epbari').css({ width: e.epbar + '%' });
					for (i = 1; i < 9; i++) {
						$j('.zeitbar' + i).css({ width: zeitbarwidth[i] + '%' });
						if (btime[i] > 0) {
							$j('.zeitbartxt' + i).html('');
							$j('.zeitbartxt' + i).unbind("click");
							$j('.zeitbartxt' + i).css({ cursor: 'default' });
						}
						else {
							$j('.zeitbartxt' + i).unbind("click");
							if (bauto[i] > 0 && building[i] > 0) {
								$j('.zeitbartxt' + i).html('');
								$j('.zeitbartxt' + i).css({ cursor: 'default' });
								if (i === 1) buildstart(i)
							}
							else {
								$j('.zeitbartxt' + i).html('');
								$j('.zeitbartxt' + i).css({ cursor: 'default' });
							}
						}
						$j('.building' + i).css({ display: 'block' });
					}
					$j('.skillbtn').html('Skills: ' + (e.skillpointsanz || 0))
					$j('.researchbtn').html('Research: ' + (e.researchpoints || 0))
					$j('.eventbtn').html('Event: ' + (e.eventpoints || 0))
					$j('.clanbtn').html('Fastfood Clan')
					clearTimeout(btimervar1);
					clearTimeout(btimervar2);
					clearTimeout(btimervar3);
					clearTimeout(btimervar4);
					clearTimeout(btimervar5);
					clearTimeout(btimervar6);
					clearTimeout(btimervar7);
					clearTimeout(btimervar8);
					clearTimeout(btimervar9);
					clearTimeout(btimervar10);
					clearTimeout(btimervar11);
					clearTimeout(btimervar12);
					clearTimeout(btimervar13);
					clearTimeout(btimervar14);
					clearTimeout(btimervar15);
					clearTimeout(btimervar16);
					if (btime[1] > 0) { btimer1(); btimerprog1(); }
					buildpause[bnmbr] = 0;
					buildingcostanz();
				}
			})
		}
		else {
			buildpause[bnmbr] = 0;
			clearTimeout(btimervar1);
			clearTimeout(btimervar2);
			clearTimeout(btimervar3);
			clearTimeout(btimervar4);
			clearTimeout(btimervar5);
			clearTimeout(btimervar6);
			clearTimeout(btimervar7);
			clearTimeout(btimervar8);
			clearTimeout(btimervar9);
			clearTimeout(btimervar10);
			clearTimeout(btimervar11);
			clearTimeout(btimervar12);
			clearTimeout(btimervar13);
			clearTimeout(btimervar14);
			clearTimeout(btimervar15);
			clearTimeout(btimervar16);
		}
	}
}

function buildingcostanz(forced=false) {
	if (!ST.idle || forced) {
		for (i = 1; i < 9; i++) {
			aktcostnmbr = ((i - 1) * 4) + 1;
			buttongrau = 0;
			if (aktbuystufe == 1) { buycosttxt = 'Buy x1<br>' + bcost[aktcostnmbr].toString().slice(2,12); if (graubtn[aktcostnmbr] == 1) { buttongrau = 1; } }
			else if (aktbuystufe == 2) { buycosttxt = 'Buy x' + tenbplus[i] + '<br>' + bcost[aktcostnmbr + 1].toString().slice(2,12); if (graubtn[aktcostnmbr + 1] == 1) { buttongrau = 1; } }
			else if (aktbuystufe == 3) { buycosttxt = 'Buy x' + hundredbplus[i] + '<br>' + bcost[aktcostnmbr + 2].toString().slice(2,12); if (graubtn[aktcostnmbr + 2] == 1) { buttongrau = 1; } }
			else if (aktbuystufe == 4) { buycosttxt = 'Buy x' + maxbplus[i] + '<br>' + bcost[aktcostnmbr + 3].toString().slice(2,12); if (graubtn[aktcostnmbr + 3] == 1) { buttongrau = 1; } }
			$j('.b' + i + 'cost').html(buycosttxt);
			if (buttongrau == 1) {
				$j('.b' + i + 'btn').css({ cursor: 'default' });
				$j('.b' + i + 'btn').css({
						background: 'transparent',
						color: theme,
						border: '1px dotted ' + theme,
						fontWeight: 200,
						textShadow: 'none'
				 })
				$j('.b' + i + 'btn').off('mouseenter mouseleave')
				$j('.b' + i + 'btn').unbind("click");
			}
			else {
				$j('.b' + i + 'btn').css({ cursor: 'default' });
				$j('.b' + i + 'btn').css({
						background: 'transparent',
						color: theme,
						border: '1.2px solid ' + theme,
						fontWeight: 600,
						textShadow: 'none'
				 })
				$j('.b' + i + 'btn').off('mouseenter mouseleave')
				$j('.b' + i + 'btn').unbind("click");
				if (i == 1) { $j('.b' + i + 'btn').click(function() { buildingbuy(1); }); }
				else if (i == 2) { $j('.b' + i + 'btn').click(function() { buildingbuy(2); }); }
				else if (i == 3) { $j('.b' + i + 'btn').click(function() { buildingbuy(3); }); }
				else if (i == 4) { $j('.b' + i + 'btn').click(function() { buildingbuy(4); }); }
				else if (i == 5) { $j('.b' + i + 'btn').click(function() { buildingbuy(5); }); }
				else if (i == 6) { $j('.b' + i + 'btn').click(function() { buildingbuy(6); }); }
				else if (i == 7) { $j('.b' + i + 'btn').click(function() { buildingbuy(7); }); }
				else if (i == 8) { $j('.b' + i + 'btn').click(function() { buildingbuy(8); }); }
			}
		}
	}
}

function megaanz() {
	chatoffen = 0;
	$j.get('game/megaanz.php', function(e) {
		if (e.erfolg == 1) {
			resetnmbr = 1;
			mega = new Array();
			megaid = new Array();
			megabonusnext = new Array();
			megabonus = new Array();
			megacost = new Array();
			mega = e.mega;
			megaid = e.megaid;
			megabonusnext = e.megabonusnext;
			megabonus = e.megabonus;
			megacost = e.megacost;
			$j('.resetbtn').html('Reset');
			$j('.mdtxt').html(e.relikte + ' &nbsp;&nbsp;&nbsp;(max. MegaDollar: ' + e.maxrelikte + ')<br>All Profits +' + e.reliktebonus + ' % &nbsp;&nbsp;(for each max. MegaDollar +0.05%)');
			$j('.resetmd').html('(next reset: +' + e.nextreset + ' MegaDollar in ' + e.timetxt + ')');
			allmegatxt = '';
			for (i = 1; i <= e.megaanz; i++) {
				if (i > 1 && i < 8) continue
				aktmegaid = megaid[i];
				allmegatxt += '<div class="mega' + i + '">' +
									'<div class="platz1px"></div>' +
									'<div class="megaimg"><img class="mdimg" src="img/food/' + aktmegaid + '.png" /></div>' +
									'<div class="megatxt">' +
										megatxt[aktmegaid] +
									'</div>' +
									'<div class="megabtn1" onclick="megaupgrade(' + aktmegaid + ')">Buy x1</div>' +
									'<div class="megabtn2" onclick="megaupgrade2(' + aktmegaid + ')">Buy x10</div>' +
									'<div class="megabtn3" onclick="megaupgrade3(' + aktmegaid + ')">Buy x100</div>' +
								'</div>';
			}
			if (e.megaanz < 10) {
				newmega = e.megaanz + 1;
				allmegatxt += '<div class="mega' + newmega + '">' +
									'<div class="platz1px"></div>' +
									'<div class="newmegatxt">Get a new MegaDollar-Upgrade<br>for ' + e.nextcost + ' MegaDollars.</div>' +
									'<div class="newmegabtn" onclick="newmegaup()">Buy</div>' +
								'</div>';
			}
			$j('.allmegau').html(allmegatxt);
			for (i = 1; i < 11; i++) {
				$j('.megalvl' + i).html('Lv. ' + megabonus[i] + ' (next: +' + megabonusnext[i] + ')');
				$j('.megatxt' + i).html('Bonus:<br>+' + megabonus[i] + megabonustxt[i] + '<br>Upgrade for ' + megacost[i] + ' MegaDollar');
			}
			closeall();
			$j('#megadollar').css({ display: 'block' });
			$j('.button').eq(4).html('&nbsp&nbsp&nbspMS: ' + e.relikte)
		}
	});
}

function resetmd() {
	$j.get('game/resetmd.php?rscode=' + rscode, function(e) {
		rscode = 0;
		if (e.erfolg == 1) {
			idlemode = 0;
			homeanz();
		}
		else if (e.erfolg == 2) {
			$j('#maintutorial').css({ display: 'block' });
			$j(".tutorialtxt").html(e.nexttxt);
		}
		else if (e.erfolg == 5) {
			let code = e.codemessage.split('<br><br>')[1]
			let numbers = code.match(/\d+/g).map(Number)
			if (e.codemessage.includes('add')) code = numbers[0] + numbers[1]
			else if (e.codemessage.includes('subtract')) code = numbers[0] - numbers[1]
			else if (e.codemessage.includes('Multiply')) code = numbers[0] * numbers[1]
			else code = numbers[0] / numbers[1]
			rscode = code
			setTimeout(resetmd,50)							
		}
		else if (e.erfolg == 6) {
			$j('#maintutorial').css({ display: 'block' });
			$j(".tutorialtxt").html('The result is wrong! Try again.');
			rscode = 0;
		}
		else if (e.erfolg == 7) {
			$j('#maintutorial').css({ display: 'block' });
			$j(".tutorialtxt").html('The result is wrong, again! Next try possible in 30 minutes.');
			rscode = 0;
		}
	});
}

function megaidleanz() {
	chatoffen = 0;
	$j.get('game/megaidleanz.php', function(e) {
		if (e.erfolg == 1) {
			clearTimeout(timerqi);
			akttimedif = e.megaidletime;
			seconddurch = 0;
			megaidle1next = e.megaidleu1 + 1;
			megaidle2next = e.megaidleu2 + 1;
			megaidle3next = e.megaidleu3 + 1;
			megaidle4next = e.megaidleu4 + 1;
			$j('.megaidletime').html('You\'ve been farming for <span class="idlequestzeit"></span>!' +
									'<div class="farmcollectbtn" onclick="farmcollect()">collect</div>' +
									'<br>' +
									'Researchpoints: ' + e.researchpoints +
									'<br>Farmpoints: ' + e.megaidlepoints +
									'<br>MegaDollar per Minute: ' + e.megaidleprominute +
									'<br>You can farm for a maximum of ' + e.megaidlemax + ' minutes.' +
									'');
			$j('.megaidle1title').html('Mega Farm Lv. ' + e.megaidlelvl);
			$j('.megaidle2title').html('MegaDollar Lv. ' + e.megaidleu1);
			$j('.megaidle3title').html('Farmpoints Lv. ' + e.megaidleu2);
			$j('.megaidle4title').html('Skillfarm Lv. ' + e.megaidleu3);
			$j('.megaidle5title').html('Eventfarm Lv. ' + e.megaidleu4);
			$j('.megaidle1btnp').html('');
			$j('.megaidle2btnp').html('');
			$j('.megaidle3btnp').html('');
			$j('.megaidle4btnp').html('');
			$j('.megaidle5btnp').html('');
			if (e.costs1 == 1) { costs1txt = 'Researchpoint'; }
			else { costs1txt = 'Researchpoints'; }
			$j('.megaidle1txt').html('MegaDollar / min: ' + e.megaidleprominute + 
									'<br>Next Level: ' + e.megaidleprominutenext + ' / min' +
									'<br>and +2 minutes of maximum farming per Level.' +
									'<br><br>Costs: ' + e.costs1 + ' ' + costs1txt);
			if (e.costs2 == 1) { costs2txt = 'Farmpoint'; }
			else { costs2txt = 'Farmpoints'; }
			$j('.megaidle2txt').html('MegaDollar Bonus: +' + e.megaidleu1 + '%' +
									'<br>Next Level: +' + megaidle1next + '%' +
									'<br>(only affects the Mega Farm)' +
									'<br><br><br>Costs: ' + e.costs2 + ' ' + costs2txt);
			if (e.costs3 == 1) { costs3txt = 'Farmpoint'; }
			else { costs3txt = 'Farmpoints'; }
			$j('.megaidle3txt').html('Farmpoints Chance: +' + e.megaidleu2 + '%' +
									'<br>Next Level: +' + megaidle2next + '%' +
									'<br><br>' +
									'<br><br>Costs: ' + e.costs3 + ' ' + costs3txt);
			if (e.costs4 == 1) { costs4txt = 'Farmpoint'; }
			else { costs4txt = 'Farmpoints'; }
			$j('.megaidle4txt').html(e.megaidleu3 + '% Chance to get 1SP / 10 min' +
									'<br>Next Level: ' + megaidle3next + '% Chance' +
									'<br>Costs: ' + e.costs4 + ' ' + costs4txt);
			if (e.costs5 == 1) { costs5txt = 'Farmpoint'; }
			else { costs5txt = 'Farmpoints'; }
			$j('.megaidle5txt').html(e.megaidleu4 + '% Chance to get 1EP / 2 min' +
									'<br>Next Level: ' + megaidle4next + '% Chance' +
									'<br>Costs: ' + e.costs5 + ' ' + costs5txt);
			if (e.researchpoints >= e.costs1) { $j('.megaidle1btnp').html('<div class="megaidlebtn" onclick="megaidleup(1)">upgrade</div>'); }
			if (e.megaidlepoints >= e.costs2) { $j('.megaidle2btnp').html('<div class="megaidlebtn" onclick="megaidleup(2)">upgrade</div>'); }
			if (e.megaidlepoints >= e.costs3 && e.megaidleu2 < 100) { $j('.megaidle3btnp').html('<div class="megaidlebtn" onclick="megaidleup(3)">upgrade</div>'); }
			if (e.megaidlepoints >= e.costs4 && e.megaidleu3 < 100) { $j('.megaidle4btnp').html('<div class="megaidlebtn" onclick="megaidleup(4)">upgrade</div>'); }
			if (e.megaidlepoints >= e.costs5 && e.megaidleu4 < 100) { $j('.megaidle5btnp').html('<div class="megaidlebtn" onclick="megaidleup(5)">upgrade</div>'); }
			if (megaidleclose == 0) {
				closeall();
			}
			megaidleclose = 0;
			questidlezeit();
			$j('#megaidleanz').css({ display: 'block' });
			$j('.researchbtn').html('Research: ' + (e.researchpoints || 0))
			$j('.button').eq(5).html('&nbsp&nbsp&nbspFarm: ' + e.megaidlepoints)
		}
	});
}

function megaidleup(e) {
	if (e === 2) {
		 $j.get('game/megaidleup.php?' + e, function(e) {
			1 == e.erfolg && megaidleanz()
		})	
	}
	else {
		confirmBox(function(){
			 let update = e === 1 ? true : false
			 $j.get('game/megaidleup.php?' + e, function(e) {
				if (update) getFarmTime()
				1 == e.erfolg && megaidleanz()
			})		
		})
	}
}

function researchanz() {
	chatoffen = 0;
	$j.get('game/researchanz.php', function(e) {
		if (e.erfolg == 1) {
			rsupsperre = 0;
			researchboni = new Array();
			researchlvl = new Array();
			researchboni = e.researchboni;
			researchlvl = e.researchlvl;
			nextbonustxt = '';
			researchdauernoch = e.researchdauernoch;
			researchdauernoch1 = researchdauernoch * 10;
			for (i = 1; i < 9; i++) {
				nextbonustxt += '<div class="nb' + i + '">' +
									'<div class="nbnextstufe">Lv. ' + researchlvl[i] + '</div>' +
									'<div class="nbimg"><img class="nextbimg" src="img/food/' + i + '.png" /></div>' +
									'<div class="nbnextbonus">x' + researchboni[i] + '</div>' +
								'</div>';
			}
			$j('.researchbtn').html('Research: ' + (e.researchpoints || 0))
			if (e.nextresearch == 1) { nextrename = "French-Fries"; }
			else if (e.nextresearch == 2) { nextrename = "Pizza"; }
			else if (e.nextresearch == 3) { nextrename = "Hot-Dogs"; }
			else if (e.nextresearch == 4) { nextrename = "Hamburger"; }
			else if (e.nextresearch == 5) { nextrename = "Bike"; }
			else if (e.nextresearch == 6) { nextrename = "Scooter"; }
			else if (e.nextresearch == 7) { nextrename = "Van"; }
			else if (e.nextresearch == 8) { nextrename = "Food-Truck"; }
			$j('.researchbonis').html('<div class="rsplatz1"></div><span class="yourstats">Research: ' + nextrename + '</span><div class="rsplatz1"></div>' + nextbonustxt)
			if (e.researchtime == 0) {
				$j('.aktresearch').html('<div class="platz1px"></div>' +
										'<div class="researchstartbtn" onclick="researchstart()">start research</div>');
			}
			else {
				$j('.aktresearch').html('<div class="platz1px"></div>' +
											'<div class="researchbar">' +
											'<div class="researchbari"></div>' +
											'<div class="researchbartxt"></div>' +
										'</div>')
				}
			$j('.researchfail1').html('<div class="researchupbtn1" onclick="researchup(1)">upgrade</div>');
			$j('.researchfail2').html('<div class="researchupbtn2" onclick="researchup(2)">upgrade</div>');
			$j('.researchfail3').html('<div class="researchupbtn3" onclick="researchup(3)">upgrade</div>');
			$j('.researchfail4').html('<div class="researchupbtn4" onclick="researchup(4)">upgrade</div>');
			$j('.researchfail5').html('<div class="researchupbtn5" onclick="researchup(5)">upgrade</div>');
			$j('.researchfail6').html('<div class="researchupbtn6" onclick="researchup(6)">upgrade</div>');
			$j('.researchfail7').html('<div class="researchupbtn7" onclick="researchup(7)">upgrade</div>');
			$j('.researchfail8').html('<div class="researchupbtn8" onclick="researchup(8)">upgrade</div>');
			$j('.researchfail9').html('<div class="researchupbtn9" onclick="researchup(9)">upgrade</div>');
			$j('.researchfail10').html('<div class="researchupbtn10" onclick="researchup(10)">upgrade</div>');
			$j('.researchfail11').html('<div class="researchupbtn11" onclick="researchup(11)">upgrade</div>');
			$j('.researchfail12').html('<div class="researchupbtn12" onclick="researchup(12)">upgrade</div>');
			if (e.rsupcost1 > e.researchpoints) { $j('.researchfail1').html('Not enough Researchpoints!'); }
			if (e.rsupcost2 > e.researchpoints) { $j('.researchfail2').html('Not enough Researchpoints!'); }
			if (e.rsupcost3 > e.researchpoints) { $j('.researchfail3').html('Not enough Researchpoints!'); }
			if (e.rsupcost4 > e.researchpoints) { $j('.researchfail4').html('Not enough Researchpoints!'); }
			if (e.rsupcost5 > e.researchpoints) { $j('.researchfail5').html('Not enough Researchpoints!'); }
			if (e.rsupcost6 > e.researchpoints) { $j('.researchfail6').html('Not enough Researchpoints!'); }
			if (e.rsupcost7 > e.researchpoints) { $j('.researchfail7').html('Not enough Researchpoints!'); }
			if (e.rsupcost8 > e.researchpoints) { $j('.researchfail8').html('Not enough Researchpoints!'); }
			if (e.rsupcost9 > e.researchpoints) { $j('.researchfail9').html('Not enough Researchpoints!'); }
			if (e.rsupcost10 > e.researchpoints) { $j('.researchfail10').html('Not enough Researchpoints!'); }
			if (e.rsupcost11 > e.researchpoints) { $j('.researchfail11').html('Not enough Researchpoints!'); }
			if (e.rsupcost12 > e.researchpoints) { $j('.researchfail12').html('Not enough Researchpoints!'); }
			if (e.rsupgrade1 > 9) { $j('.researchfail1').html(''); }
			if (e.rsupgrade4 > 7) { $j('.researchfail4').html(''); }
			$j('.researchbonitxt1').html(e.rstxt1);
			$j('.researchbonitxt2').html(e.rstxt2);
			$j('.researchbonitxt3').html(e.rstxt3);
			$j('.researchbonitxt4').html(e.rstxt4);
			$j('.researchbonitxt5').html(e.rstxt5);
			$j('.researchbonitxt6').html(e.rstxt6);
			$j('.researchbonitxt7').html(e.rstxt7);
			$j('.researchbonitxt8').html(e.rstxt8);
			$j('.researchbonitxt9').html(e.rstxt9);
			$j('.researchbonitxt10').html(e.rstxt10);
			$j('.researchbonitxt11').html(e.rstxt11);
			$j('.researchbonitxt12').html(e.rstxt12);
			$j('.researchup1txt').html('All Profits Lv. ' + e.rsupgrade1 + ':');
			$j('.researchup2txt').html('Mega Business Lv. ' + e.rsupgrade2 + ':');
			$j('.researchup3txt').html('Mega Clan Lv. ' + e.rsupgrade3 + ':');
			$j('.researchup4txt').html('Productions Lv. ' + e.rsupgrade4 + ':');
			$j('.researchup5txt').html('French Fries Lv. ' + e.rsupgrade5 + ':');
			$j('.researchup12txt').html('Food Truck Lv. ' + e.rsupgrade12 + ':');
			researchtime = e.researchtime;
			clearTimeout(researchtimervar);
			clearTimeout(researchtimervar2);
			if (researchtime > 0) { researchtimer(); researchtimerprog(); }
			closeall();
			$j('#researchanz').css({ display: 'block' });
		}
	});
}

function researchup(e) {
	confirmBox(function(){
		if (rsupsperre == 0) {
			rsupsperre = 1;
			$j.get('game/researchup.php?' + e, function(e) {
				if (e.erfolg == 1) {
					researchanz();
				}
				else if (e.erfolg == 2) {
					$j('.researchfail' + e).html('Not enough Researchpoints!');
					rsupsperre = 0;
				}
			});
		}
	})
}

function researchfertig() {}

function skillanz() {
	resetspstatus = 0;
	chatoffen = 0;
	$j.get('game/skillanz.php', function(e) {
		if (e.erfolg == 1) {
			skillplus = 0;
			$j('.skillbtn').html('Skills: ' + (e.skillpoints || 0))
			$j('.sptxt').html(e.skillpoints);
			$j('.resetsp').html('(reset for 10 Goldbars)');
			spbonus = new Array();
			spcost = new Array();
			skill = new Array();
			skillnext = new Array();
			skill = e.skill;
			spbonus = e.spbonus;
			spcost = e.spcost;
			skillnext = e.skillnext;
			for (i = 1; i < 11; i++) {
				if (i < 9) {
					$j('.skilllvl' + i).html('Lv.' + skill[i] + ' (next: x' + skillnext[i] + ' Bonus)');
					$j('.skilltxt' + i).html('Bonus:<br>x' + spbonus[i] + spbonustxt[i] + '<br>Upgrade for ' + spcost[i]);
				}
				else if (i == 9) {
					$j('.skilllvl' + i).html('Lv.' + skill[i] + ' (next: x' + skillnext[i] + ' Bonus)');
					$j('.skilltxt' + i).html('Bonus: x' + spbonus[i] + spbonustxt[i] + '<br>Upgrade for ' + spcost[i]);
				}
				else if (i == 10) {
					skillnext2 = spbonus[i] + 10;
					$j('.skilllvl' + i).html('Lv.' + skill[i] + ' (next: +' + skillnext2 + '%)');
					$j('.skilltxt' + i).html('Bonus: gain ' + spbonus[i] + spbonustxt[i] + '<br>Upgrade for ' + spcost[i]);
				}
			}
			for (let i = 2; i <= 7; i++) {
				let div = document.getElementsByClassName('skill' + i)[0]
				if (typeof div !== 'undefined') div.remove()
			}	
			closeall();
			$j('#upgrades').css({ display: 'block' });
		}
	});
}


function skillupgradex100(e) {
	confirmBox(function(){
	   $j.get("game/skillupgradex100.php?" + e, function(e) {
			1 == e.erfolg && skillanz()
		})
	})
}

function eventanz() {
	chatoffen = 0;
	$j.get('game/eventanz.php', function(e) {
		if (e.erfolg == 1) {
			$j('#events').html('<div class="eventtxt">' +
									'<br>' +
									e.eventtxt +
									'' +
								'</div>' +
								'<div class="storetitle">Event-Store:</div><div class="esplatz"></div>' +
								e.eventstorevar);
			closeall();
			if (e.noreward == 0) {
				$j('.drclaim' + e.nextreward).html('<div class="drclaimbtn" onclick="claimreward()">claim</div>');
			}
			else {
				$j('.drclaim' + e.nextreward).html('<div class="drclaimbtn2">claim</div>');
			}
			$j('.eventbtn').html('Event: ' + (e.eventpoints || 0))
			$j('#events').css({ display: 'block' });
		}
	});
}

function eventbuy(e) {
	confirmBox(function(){
		$j.get('game/eventbuy.php?' + e, function(e) {
			if (e.erfolg == 1) {
				$j('.skillbtn').html('Skills: ' + (e.skillpointsanz || 0))
				$j('.researchbtn').html('Research: ' + (e.researchpoints || 0))
				$j('.eventbtn').html('Event: ' + (e.eventpoints || 0))
				if (e == 4) {
					eventgot = 1;
					eventgottxt = e.pricetxt;
				}
				$j('.gold').html(e.gold.slice(2,12));
				document.getElementsByClassName('button')[8].innerHTML = '&nbsp&nbsp Store: ' + e.gems	
				eventanz()
			}
		})
	})
}


function clanquests() {
	$j.get('game/clanquests.php', function(e) {
		if (e.erfolg == 1) {
			cqfrage = 0;
			cqsperre = 0;
			chatoffen = 0;
			ownrank = e.clanrang;
			clearTimeout(timergc);
			guildrankvar = '';
			namearray = new Array();
			maxlevelarr = new Array();
			aktclandmg = new Array();
			lastclandmg = new Array();
			lastclandmg = e.lastclandmg;
			aktclandmg = e.aktclandmg;
			namearray = e.namearray;
			maxlevelarr = e.maxlevelarr;
			memberanzvar = e.anz;
			realnextcost = e.uaktanz;
			for (i = 1; i <= memberanzvar; i++) {
				guildrankvar += '<div class="cqname">' + namearray[i] + '</div><div class="cqlvl">' + maxlevelarr[i] + '</div><div class="cqcurrent">' + aktclandmg[i].toLocaleString() + '</div><div class="cqlast">' + lastclandmg[i].toLocaleString() + '</div>';
			}
			document.getElementsByClassName('button')[8].innerHTML = '&nbsp&nbsp Store: ' + e.gems	
			nextmissionnmbr = e.clanquests + 1;
			$j('#guild').html('<div class="clananzname">' + e.clanname + ' &nbsp;&nbsp; Clangold: ' + e.clangold + ' &nbsp;&nbsp; Clan-Missions: ' + e.clanquests + '</div>' +
							'<div class="clananzall">' +
								'<div class="platz1px"></div>' +
								'<div class="clbtn1" onclick="guildanz()">Overview</div>' +
								'<div class="clbtn2" onclick="chatanz()">Chat</div>' +
								'<div class="clbtn3" onclick="memberanz()">Member</div>' +
								'<div class="clbtn4" onclick="clanquests()">Clan-Missions</div>' +
								'<div class="clbtn5" onclick="clanranking()">Highscore</div>' +
								'<div class="clanmissions">' +
									'Help your Clan to finish Mission ' + nextmissionnmbr + ':<br>' +
									e.aktclanquest + ' / ' + e.aktfullpoints + ' Points<br>' +
									'Add ' + e.clanpoints + ' to this Mission:' +
									'<div class="addcqbtn" onclick="cqattack2()">participate' + e.nextcost + '</div>' +
								'</div>' +
								'<div class="cqranking">' +
									'<div class="clanchat2">' +
										'<div class="cqname"><u>Name</u></div>' +
										'<div class="cqlvl"><u>max. Level:</u></div>' +
										'<div class="cqcurrent"><u>Current Points:</u></div>' +
										'<div class="cqlast"><u>Last Mission Points:</u></div>' +
										guildrankvar +
									'</div>' +
								'</div>' +
							'</div>' +
							'');
			clanquestdauer = e.clanquestdauer;
			if (clanquestdauer > 0) {
				clearTimeout(cqtimervar);
				cqtimer();
			}
			var div = $j('.cqname')
			for (var i = 0; i < div.length; i++) {
				if (div[i].innerText.trim() === account) {
					div[i].style.color = 'black'
					div[i].style.backgroundColor = theme
					div = $j('.cqlvl')[i]
					div.style.color = 'black'
					div.style.backgroundColor = theme
					div = $j('.cqcurrent')[i]
					div.style.color = 'black'
					div.style.backgroundColor = theme
					div = $j('.cqlast')[i]
					div.style.color = 'black'
					div.style.backgroundColor = theme
					break
				}
			}	
		}
	});
}

function clantourfertig() {}

function memberanz() {
    $j.get("game/memberanz.php", function(e) {
        if (1 == e.erfolg) {
            for (chatoffen = 0, ownrank = e.clanrang, clearTimeout(timergc), guildrankvar = "", namearray = new Array, maxlevelarr = new Array, clanquestarr = new Array, clanmissionarr = new Array, clanrangarr = new Array, clanrangarr = e.clanrangarr, namearray = e.namearray, maxlevelarr = e.maxlevelarr, clanquestarr = e.clanquestarr, clanmissionarr = e.clanmissionarr, memberanzvar = e.anz, i = 1; i <= memberanzvar; i++) guildrankvar += '<div class="cmname">' + namearray[i] + '</div><div class="cmlvl">' + maxlevelarr[i] + '</div><div class="cmclanquest">' + clanquestarr[i] + '</div><div class="cmmissions">' + clanmissionarr[i] + '</div><div class="cmnewrank">' + clanrangarr[i] + "</div>";
            $j(".clananzall").html('<div class="platz1px"></div><div class="clbtn1" onclick="guildanz()">Overview</div><div class="clbtn2" onclick="chatanz()">Chat</div><div class="clbtn3" onclick="memberanz()">Member</div><div class="clbtn4" onclick="clanquests()">Clan-Missions</div><div class="clbtn5" onclick="clanranking()">Highscore</div><div class="clanchat"><div class="clanchat2"><div class="cmname"><u>Name</u></div><div class="cmlvl">max. Level:</div><div class="cmclanquest" onclick="sortcq()"><u style="cursor:pointer;">Clan-Missions:</u></div><div class="cmmissions" onclick="sorttour()"><u style="cursor:pointer;">Clan-Tours:</u></div><div class="cmnewrank" onclick="sortonline()"><u style="cursor:pointer;">Online:</u></div>' + guildrankvar + "</div></div>")
			var div = $j('.cmname')
			for (var i = 0; i < div.length; i++) {
				if (div[i].innerText.trim() === account) {
					div[i].style.color = 'black'
					div[i].style.backgroundColor = theme
					div = $j('.cmlvl')[i]
					div.style.color = 'black'
					div.style.backgroundColor = theme
					div = $j('.cmclanquest')[i]
					div.style.color = 'black'
					div.style.backgroundColor = theme
					div = $j('.cmmissions')[i]
					div.style.color = 'black'
					div.style.backgroundColor = theme
					div = $j('.cmnewrank')[i]
					div.style.color = 'black'
					div.style.backgroundColor = theme
					break
				}
			}	
		}
    })
}

function turnieranz() {
    chatoffen = 0, $j.get("game/turnieranz.php", function(e) {
        if (1 == e.erfolg) {
            for (highscorevar = "", playername = new Array, playermaxlvl = new Array, turnierprizes = new Array, turnierprizes = e.turnierprizes, turnierrank = new Array, turnierrank = e.turnierrank, playermaxlvl = e.playermaxlvl, playername = e.playername, idarrt = new Array, idarrt = e.idarrt, i = 1; i <= e.playeranz; i++) highscorevar += '<div class="pgmtrank">' + turnierrank[i] + '</div><div class="pgmtname2" onclick="playeranz(' + idarrt[i] + ')">' + playername[i] + '</div><div class="pgmtlevel">' + playermaxlvl[i] + '</div><div class="pgmprize">' + turnierprizes[i] + "</div>";
            $j(".servertime").html(e.servertime), $j(".aktturnier").html(e.turniertxt), $j(".turniergesamt2").html('<div class="platz1px"></div><div class="pgmtrank"><u>#</u></div><div class="pgmtname"><u>Playername:</u></div><div class="pgmtlevel"><u>Max. Level:</u></div><div class="pgmprize"><u>Prizes:</u></div>' + highscorevar), closeall(), $j("#turnieranz").css({
                display: "block"
            })
			var div = $j('.pgmtname2')
			for (var i = 0; i < div.length; i++) {
				if (div[i].innerText === account) {
					div[i].style.color = 'black'
					div[i].style.backgroundColor = theme
					div = $j('.pgmtrank')[i+1]
					div.style.color = 'black'
					div.style.backgroundColor = theme
					div = $j('.pgmtlevel')[i+1]
					div.style.color = 'black'
					div.style.backgroundColor = theme
					div = $j('.pgmprize')[i+1]
					div.style.color = 'black'
					div.style.backgroundColor = theme
					break
				}
			}					
        }
    })
}

function storeanz() {
	chatoffen = 0;
	$j.get('game/storeanz.php', function(e) {
		if (e.erfolg == 1) {
			document.getElementsByClassName('button')[8].innerHTML = '&nbsp&nbsp Store: ' + e.gems	
		    $j(".gold").html(e.gold.slice(2,12))
			$j('.item1value').html(e.goldpack1);
			$j('.item2value').html(e.goldpack2);
			$j('.item3value').html(e.goldpack3);
			$j('.item4value').html(e.megadollarpack);
			$j('.shopsp1').html(e.shopsp1);
			$j('.shopsp2').html(e.shopsp2);
			$j('.shopsp3').html(e.shopsp3);
			$j('.shopfarm').html(e.shopfarm);
			if (e.offlinevip == 1) {
				$j('.itembuybtn2').css({ display: 'none' });
				$j('.offviptxt').html('<br><br>You already bought this pack!');
			}
			$j('.skillbtn').html('Skills: ' + (e.skillpoints || 0))
			$j('.researchbtn').html('Research: ' + (e.researchpoints || 0))
			closeall();
			$j('#store').css({ display: 'block' });
		}
	});
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
delete Array.prototype.toJSON
sLoaded = true
