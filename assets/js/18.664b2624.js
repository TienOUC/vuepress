(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{388:function(e,t,c){},406:function(e,t,c){"use strict";var o=c(388);c.n(o).a},411:function(e,t,c){"use strict";c(199),c(200);var o={name:"TiCheckbox",inject:{checkboxGroup:{default:""}},props:{value:{type:Boolean,default:!1},name:{type:String,default:""},label:{type:String,default:""}},computed:{isGroup:function(){return!!this.checkboxGroup},isChecked:function(){return this.isGroup?this.model.includes(this.label):this.model},model:{get:function(){return this.isGroup?this.checkboxGroup.value:this.value},set:function(e){this.isGroup?this.checkboxGroup.$emit("input",e):this.$emit("input",e)}}}},i=(c(406),c(4)),a=Object(i.a)(o,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("label",{staticClass:"ti-checkbox",class:{"is-checked":e.isChecked}},[c("span",{staticClass:"ti-checkbox_input"},[c("span",{staticClass:"ti-checkbox_inner"}),e._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"ti-checkbox_original",attrs:{name:e.name,type:"checkbox"},domProps:{value:e.label,checked:Array.isArray(e.model)?e._i(e.model,e.label)>-1:e.model},on:{change:function(t){var c=e.model,o=t.target,i=!!o.checked;if(Array.isArray(c)){var a=e.label,l=e._i(c,a);o.checked?l<0&&(e.model=c.concat([a])):l>-1&&(e.model=c.slice(0,l).concat(c.slice(l+1)))}else e.model=i}}})]),e._v(" "),c("span",{staticClass:"ti-checkbox_label"}),e._v(" "),e._t("default"),e._v(" "),e.$slots.default?e._e():[e._v(e._s(e.label))]],2)}),[],!1,null,null,null);t.a=a.exports},453:function(e,t,c){"use strict";var o={name:"TiCheckboxGroup",props:{value:{type:Array}},provide:function(){return{checkboxGroup:this}}},i=c(4),a=Object(i.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"ti-checkbox-group"},[this._t("default")],2)}),[],!1,null,null,null);t.a=a.exports},547:function(e,t,c){"use strict";c.r(t);var o=c(411),i=c(453),a={name:"CheckboxGroup",components:{TiCheckbox:o.a,TiCheckboxGroup:i.a},data:function(){return{hobby:["选项 A","选项 B"]}}},l=c(4),n=Object(l.a)(a,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("ti-checkbox-group",{model:{value:e.hobby,callback:function(t){e.hobby=t},expression:"hobby"}},[c("ti-checkbox",{attrs:{label:"选项 A"}}),e._v(" "),c("ti-checkbox",{attrs:{label:"选项 B"}}),e._v(" "),c("ti-checkbox",{attrs:{label:"选项 C"}})],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);