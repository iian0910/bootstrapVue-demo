(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d40b9a4"],{"0cb2":function(t,e,r){var n=r("7b0b"),a=Math.floor,i="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,l,u,s){var f=r+t.length,d=l.length,v=o;return void 0!==u&&(u=n(u),v=c),i.call(s,v,(function(n,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(f);case"<":c=u[i.slice(1,-1)];break;default:var o=+i;if(0===o)return n;if(o>d){var s=a(o/10);return 0===s?n:s<=d?void 0===l[s-1]?i.charAt(1):l[s-1]+i.charAt(1):n}c=l[o-1]}return void 0===c?"":c}))}},"14c3":function(t,e,r){var n=r("c6b6"),a=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"1dde":function(t,e,r){var n=r("d039"),a=r("b622"),i=r("2d00"),c=a("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),a=r("825a"),i=r("d039"),c=r("ad6d"),o="toString",l=RegExp.prototype,u=l[o],s=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=o;(s||f)&&n(RegExp.prototype,o,(function(){var t=a(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in l)?c.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"466d":function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("50c4"),c=r("1d80"),o=r("8aa5"),l=r("14c3");n("match",1,(function(t,e,r){return[function(e){var r=c(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var c=a(t),u=String(this);if(!c.global)return l(c,u);var s=c.unicode;c.lastIndex=0;var f,d=[],v=0;while(null!==(f=l(c,u))){var p=String(f[0]);d[v]=p,""===p&&(c.lastIndex=o(u,i(c.lastIndex),s)),v++}return 0===v?null:d}]}))},"4de4":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").filter,i=r("1dde"),c=i("filter");n({target:"Array",proto:!0,forced:!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("50c4"),c=r("a691"),o=r("1d80"),l=r("8aa5"),u=r("0cb2"),s=r("14c3"),f=Math.max,d=Math.min,v=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var p=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=n.REPLACE_KEEPS_$0,h=p?"$":"$0";return[function(r,n){var a=o(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!p&&g||"string"===typeof n&&-1===n.indexOf(h)){var o=r(e,t,this,n);if(o.done)return o.value}var x=a(t),b=String(this),y="function"===typeof n;y||(n=String(n));var E=x.global;if(E){var m=x.unicode;x.lastIndex=0}var P=[];while(1){var _=s(x,b);if(null===_)break;if(P.push(_),!E)break;var R=String(_[0]);""===R&&(x.lastIndex=l(b,i(x.lastIndex),m))}for(var S="",k=0,D=0;D<P.length;D++){_=P[D];for(var T=String(_[0]),I=f(d(c(_.index),b.length),0),C=[],w=1;w<_.length;w++)C.push(v(_[w]));var A=_.groups;if(y){var $=[T].concat(C,I,b);void 0!==A&&$.push(A);var O=String(n.apply(void 0,$))}else O=u(T,b,I,C,A,n);I>=k&&(S+=b.slice(k,I)+O,k=I+T.length)}return S+b.slice(k)}]}))},6889:function(t,e,r){"use strict";r("a107")},"7b29":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t.isLoading?t._e():r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-3 offset-1 my-3 key-word"},[t._v(" 關鍵字："),r("b-form-input",{attrs:{type:"text",placeholder:"輸入稅目類別"},model:{value:t.filterText,callback:function(e){t.filterText=e},expression:"filterText"}}),t.filterText?r("b-icon",{attrs:{icon:"plus-circle"},on:{click:t.cleanText}}):t._e()],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-10 offset-1"},[r("b-table",{attrs:{striped:"",hover:"",items:t.filterInput},scopedSlots:t._u([{key:"cell(seq)",fn:function(e){return[t._v(t._s(e.item.seq))]}},{key:"cell(materialYear)",fn:function(e){return[t._v(t._s(e.item.materialYear))]}},{key:"cell(statisticsProject)",fn:function(e){return[t._v(t._s(e.item.statisticsProject))]}},{key:"cell(taxCategory)",fn:function(e){return[t._v(t._s(e.item.taxCategory))]}},{key:"cell(value)",fn:function(e){return[r("div",{staticClass:"text-left"},[t._v(t._s(t._f("currencyChange")(e.item.value)))])]}},{key:"cell(dataUnit)",fn:function(e){return[t._v(t._s(e.item.dataUnit))]}}],null,!1,625607984)}),r("div",{staticClass:"d-flex justify-content-center"},[r("b-pagination",{attrs:{"total-rows":t.matchData.length,"per-page":t.perPage,pills:"","first-number":"","last-number":"",size:"sm"},nativeOn:{click:function(e){return t.filterData(t.currentPage)}},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)])])],1)},a=[],i=r("d4ec");function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),t}var l=r("262e"),u=r("2caf"),s=(r("d81d"),r("fb6a"),r("4de4"),r("ac1f"),r("466d"),r("5319"),r("d3b7"),r("25f0"),r("9ab4")),f=r("1b40"),d=function(t){Object(l["a"])(r,t);var e=Object(u["a"])(r);function r(){var t;return Object(i["a"])(this,r),t=e.apply(this,arguments),t.apiURL="https://api.kcg.gov.tw/api/service/get/2c1d9959-d038-4918-bae3-409680f8193a",t.data=[],t.sliceData=[],t.parentSendData="parentSendData",t.childSendData="",t.currentPage=1,t.perPage=10,t.filterText="",t.matchData=[],t.sliceMatchData=[],t.isLoading=!1,t.fullPage=!0,t}return o(r,[{key:"changeDataDTO",value:function(t){this.data=t.map((function(t){var e={};return e.seq=t.seq,e.materialYear=t.資料年度,e.statisticsProject=t.統計項目,e.taxCategory=t.稅目別,e.value=t.值,e.dataUnit=t.資料單位,e}))}},{key:"filterData",value:function(t){this.sliceData=this.data.slice(this.perPage*t-this.perPage,this.perPage*t)}},{key:"cleanText",value:function(){this.filterText="",this.currentPage=1}},{key:"filterInput",get:function(){var t=this;return this.matchData=this.data.filter((function(e){return e.taxCategory.match(t.filterText)})),this.sliceMatchData=this.matchData.slice(this.perPage*this.currentPage-this.perPage,this.perPage*this.currentPage),this.sliceMatchData}},{key:"mounted",value:function(){var t=this;this.isLoading=!0,this.$http.get(this.apiURL).then((function(e){t.data=e.data.data,t.changeDataDTO(t.data),t.filterData(t.currentPage),t.isLoading=!1}))}}]),r}(f["b"]);d=Object(s["a"])([Object(f["a"])({filters:{currencyChange:function(t){return t=parseFloat(t.replace(/\s/g,"").replace(/,/g,"")).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),"NaN"===t&&(t=""),"$"+t}}})],d);var v=d,p=v,g=(r("6889"),r("2877")),h=Object(g["a"])(p,n,a,!1,null,"0f2ac1a8",null);e["default"]=h.exports},8418:function(t,e,r){"use strict";var n=r("c04e"),a=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?a.f(t,c,i(0,r)):t[c]=r}},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=r("5692"),c=RegExp.prototype.exec,o=i("native-string-replace",String.prototype.replace),l=c,u=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=a.UNSUPPORTED_Y||a.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],d=u||f||s;d&&(l=function(t){var e,r,a,i,l=this,d=s&&l.sticky,v=n.call(l),p=l.source,g=0,h=t;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),h=String(t).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==t[l.lastIndex-1])&&(p="(?: "+p+")",h=" "+h,g++),r=new RegExp("^(?:"+p+")",v)),f&&(r=new RegExp("^"+p+"$(?!\\s)",v)),u&&(e=l.lastIndex),a=c.call(d?r:l,h),d?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=l.lastIndex,l.lastIndex+=a[0].length):l.lastIndex=0:u&&a&&(l.lastIndex=l.global?a.index+a[0].length:e),f&&a&&a.length>1&&o.call(a[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a}),t.exports=l},"9f7f":function(t,e,r){"use strict";var n=r("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a107:function(t,e,r){},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),c=r("9112"),o=i("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),s=i("replace"),f=function(){return!!/./[s]&&""===/./[s]("a","$0")}(),d=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,s){var v=i(t),p=!a((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),g=p&&!a((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return e=!0,null},r[v](""),!e}));if(!p||!g||"replace"===t&&(!l||!u||f)||"split"===t&&!d){var h=/./[v],x=r(v,""[t],(function(t,e,r,n,a){return e.exec===RegExp.prototype.exec?p&&!a?{done:!0,value:h.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=x[0],y=x[1];n(String.prototype,t,b),n(RegExp.prototype,v,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}s&&c(RegExp.prototype[v],"sham",!0)}},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,i=r("1dde"),c=i("map");n({target:"Array",proto:!0,forced:!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),i=r("e8b5"),c=r("23cb"),o=r("50c4"),l=r("fc6a"),u=r("8418"),s=r("b622"),f=r("1dde"),d=f("slice"),v=s("species"),p=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var r,n,s,f=l(this),d=o(f.length),h=c(t,d),x=c(void 0===e?d:e,d);if(i(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(f,h,x);for(n=new(void 0===r?Array:r)(g(x-h,0)),s=0;h<x;h++,s++)h in f&&u(n,s,f[h]);return n.length=s,n}})}}]);
//# sourceMappingURL=chunk-4d40b9a4.2795692f.js.map