(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[4],{217:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.module&&t.familiar?a("div",{staticClass:"familiars"},[a("char",{attrs:{char:t.familiar}}),t._v(" "),a("upgrades",{attrs:{items:t.module.lists.tasks,event:t.TRY_USE_ON,target:t.familiar}}),t._v(" "),a("upgrades",{attrs:{items:t.module.lists.alters,event:t.TRY_USE_ON,target:t.familiar}})],1):t.module?a("div",[t._v("FAMILIAR NOT FOUND")]):a("div",[t._v("FAMILIAR MODULE MISSING")])};s._withStripped=!0;var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"charpane"},[a("div",[a("table",[a("tr",[a("td",{on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.char)}}},[t._v("name")]),a("th",{staticClass:"text-entry"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.char.name,expression:"char.name"}],staticClass:"fld-name",attrs:{type:"text"},domProps:{value:t.char.name},on:{input:function(e){e.target.composing||t.$set(t.char,"name",e.target.value)}}})])]),t._v(" "),a("tr",[a("td",[t._v("level")]),a("th",{staticClass:"num-align"},[t._v(" "+t._s(t.level))])]),t._v(" "),a("tr",[a("td",[t._v("exp")]),a("th",{staticClass:"num-align"},[t._v(" "+t._s(t.exp)+" / "+t._s(t.next)+" ")])]),t._v(" "),a("tr",[a("td",[t._v("max hp")]),a("th",{staticClass:"num-align"},[t._v(" "+t._s(t.char.hp.max)+" ")])]),t._v(" "),a("tr",[a("td",[t._v("defense")]),a("th",{staticClass:"num-align"},[t._v(" "+t._s(t.defense)+" ")])]),t._v(" "),a("tr",[a("td",[t._v("dodge")]),a("th",{staticClass:"num-align"},[t._v(" "+t._s(t.dodge)+" ")])]),t._v(" "),a("tr",[a("td",[t._v("damage bonus")]),a("th",{staticClass:"num-align"},[t._v(" "+t._s(t.damage)+" ")])]),t._v(" "),a("tr",[a("td",[t._v("hit bonus")]),a("th",{staticClass:"num-align"},[t._v(" "+t._s(t.tohit)+" ")])]),t._v(" "),a("tr",[a("td",[t._v("speed")]),a("th",{staticClass:"num-align"},[t._v(" "+t._s(t.char.speed)+" ")])])])])])};r._withStripped=!0;var i=a(11),n={props:["char"],computed:{level(){return this.char.level.value},defense(){return this.char.defense},dodge(){return Math.floor(this.char.dodge.valueOf())},damage(){return this.char.damage.valueOf()},tohit(){return this.char.tohit?this.char.tohit.value:0},exp(){return Object(i.b)(this.char.exp.value)},next(){return Object(i.b)(this.char.next)}}},l=a(6),o=Object(l.a)(n,r,[],!1,null,null,null);o.options.__file="src/ui/panes/charpane.vue";var c=o.exports,u=a(60),v=a(2),_=a(1),m={props:["module"],mixins:[a(19).a],components:{char:c,upgrades:u.a},computed:{familiar(){let t=v.c.getSlot("familiar");return t&&(console.log("num familiars: "+t),console.log("fam tohit: "+t.tohit),console.log("fam type: "+t.constructor.name)),v.c.getSlot("familiar")}},created(){this.TRY_USE_ON=_.J}},h=Object(l.a)(m,s,[],!1,null,null,null);h.options.__file="src/ui/sections/familiars.vue";e.default=h.exports}}]);