!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequiree209;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequiree209=i),(0,i.register)("13Rru",function(e,t){var n;e.exports,n=function(){var e="millisecond",t="second",n="minute",r="hour",i="week",s="month",a="quarter",u="year",o="date",c="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},h="en",m={};m[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}};var M="$isDayjsObject",y=function(e){return e instanceof v||!(!e||!e[M])},$=function e(t,n,r){var i;if(!t)return h;if("string"==typeof t){var s=t.toLowerCase();m[s]&&(i=s),n&&(m[s]=n,i=s);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var u=t.name;m[u]=t,i=u}return!r&&i&&(h=i),i||!r&&h},_=function(e,t){if(y(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new v(n)},w={s:l,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+l(Math.floor(n/60),2,"0")+":"+l(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,s),a=n-i<0,u=t.clone().add(r+(a?-1:1),s);return+(-(r+(n-i)/(a?i-u:u-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return({M:s,y:u,w:i,d:"day",D:o,h:r,m:n,s:t,ms:e,Q:a})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};w.l=$,w.i=y,w.w=function(e,t){return _(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var v=function(){function l(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[M]=!0}var h=l.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return w},h.isValid=function(){return this.$d.toString()!==c},h.isSame=function(e,t){var n=_(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return _(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<_(e)},h.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,a){var c=this,d=!!w.u(a)||a,f=w.p(e),l=function(e,t){var n=w.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return d?n:n.endOf("day")},h=function(e,t){return w.w(c.toDate()[e].apply(c.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},m=this.$W,M=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(f){case u:return d?l(1,0):l(31,11);case s:return d?l(1,M):l(0,M+1);case i:var _=this.$locale().weekStart||0,v=(m<_?m+7:m)-_;return l(d?y-v:y+(6-v),M);case"day":case o:return h($+"Hours",0);case r:return h($+"Minutes",1);case n:return h($+"Seconds",2);case t:return h($+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(i,a){var c,d=w.p(i),f="set"+(this.$u?"UTC":""),l=((c={}).day=f+"Date",c[o]=f+"Date",c[s]=f+"Month",c[u]=f+"FullYear",c[r]=f+"Hours",c[n]=f+"Minutes",c[t]=f+"Seconds",c[e]=f+"Milliseconds",c)[d],h="day"===d?this.$D+(a-this.$W):a;if(d===s||d===u){var m=this.clone().set(o,1);m.$d[l](h),m.init(),this.$d=m.set(o,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[w.p(e)]()},h.add=function(e,a){var o,c=this;e=Number(e);var d=w.p(a),f=function(t){var n=_(c);return w.w(n.date(n.date()+Math.round(t*e)),c)};if(d===s)return this.set(s,this.$M+e);if(d===u)return this.set(u,this.$y+e);if("day"===d)return f(1);if(d===i)return f(7);var l=((o={})[n]=6e4,o[r]=36e5,o[t]=1e3,o)[d]||1,h=this.$d.getTime()+e*l;return w.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,d=n.months,l=n.meridiem,h=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].slice(0,s)},m=function(e){return w.s(s%12||12,e,"0")},M=l||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(f,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return w.s(t.$y,4,"0");case"M":return u+1;case"MM":return w.s(u+1,2,"0");case"MMM":return h(n.monthsShort,u,d,3);case"MMMM":return h(d,u);case"D":return t.$D;case"DD":return w.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(n.weekdaysMin,t.$W,o,2);case"ddd":return h(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(s);case"HH":return w.s(s,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return M(s,a,!0);case"A":return M(s,a,!1);case"m":return String(a);case"mm":return w.s(a,2,"0");case"s":return String(t.$s);case"ss":return w.s(t.$s,2,"0");case"SSS":return w.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,o,c){var d,f=this,l=w.p(o),h=_(e),m=(h.utcOffset()-this.utcOffset())*6e4,M=this-h,y=function(){return w.m(f,h)};switch(l){case u:d=y()/12;break;case s:d=y();break;case a:d=y()/3;break;case i:d=(M-m)/6048e5;break;case"day":d=(M-m)/864e5;break;case r:d=M/36e5;break;case n:d=M/6e4;break;case t:d=M/1e3;break;default:d=M}return c?d:w.a(d)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return m[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},h.clone=function(){return w.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},l}(),p=v.prototype;return _.prototype=p,[["$ms",e],["$s",t],["$m",n],["$H",r],["$W","day"],["$M",s],["$y",u],["$D",o]].forEach(function(e){p[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),_.extend=function(e,t){return e.$i||(e(t,v,_),e.$i=!0),_},_.locale=$,_.isDayjs=y,_.unix=function(e){return _(1e3*e)},_.en=m[h],_.Ls=m,_.p={},_},e.exports=n()});var s=i("13Rru");!function(e){(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale({name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}},null,!0)}(i("13Rru"));var a={};a=function(e,t,n){var r=t.prototype,i=function(e){return e&&(e.indexOf?e:e.s)},s=function(e,t,n,r,s){var a=e.name?e:e.$locale(),u=i(a[t]),o=i(a[n]),c=u||o.map(function(e){return e.slice(0,r)});if(!s)return c;var d=a.weekStart;return c.map(function(e,t){return c[(t+(d||0))%7]})},a=function(){return n.Ls[n.locale()]},u=function(e,t){return e.formats[t]||e.formats[t.toUpperCase()].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(e,t,n){return t||n.slice(1)})},o=function(){var e=this;return{months:function(t){return t?t.format("MMMM"):s(e,"months")},monthsShort:function(t){return t?t.format("MMM"):s(e,"monthsShort","months",3)},firstDayOfWeek:function(){return e.$locale().weekStart||0},weekdays:function(t){return t?t.format("dddd"):s(e,"weekdays")},weekdaysMin:function(t){return t?t.format("dd"):s(e,"weekdaysMin","weekdays",2)},weekdaysShort:function(t){return t?t.format("ddd"):s(e,"weekdaysShort","weekdays",3)},longDateFormat:function(t){return u(e.$locale(),t)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};r.localeData=function(){return o.bind(this)()},n.localeData=function(){var e=a();return{firstDayOfWeek:function(){return e.weekStart||0},weekdays:function(){return n.weekdays()},weekdaysShort:function(){return n.weekdaysShort()},weekdaysMin:function(){return n.weekdaysMin()},months:function(){return n.months()},monthsShort:function(){return n.monthsShort()},longDateFormat:function(t){return u(e,t)},meridiem:e.meridiem,ordinal:e.ordinal}},n.months=function(){return s(a(),"months")},n.monthsShort=function(){return s(a(),"monthsShort","months",3)},n.weekdays=function(e){return s(a(),"weekdays",null,null,e)},n.weekdaysShort=function(e){return s(a(),"weekdaysShort","weekdays",3,e)},n.weekdaysMin=function(e){return s(a(),"weekdaysMin","weekdays",2,e)}},console.log("Hello world"),function t(){let n=new Date;/*@__PURE__*/e(s)(n),/*@__PURE__*/e(s).locale("es"),/*@__PURE__*/e(s).extend(/*@__PURE__*/e(a)),/*@__PURE__*/e(s).weekdays(),/*@__PURE__*/e(s).months();let r=/*@__PURE__*/e(s)().format("dddd, D [de] MMMM [de] YYYY (DD/MM/YYYY)  "),i=/*@__PURE__*/e(s)().format("HH:mm:ss  ");document.getElementById("fecha").innerHTML=r,document.getElementById("reloj").innerHTML=i,setInterval(t,1e3)}()}();
//# sourceMappingURL=index.0abb19f1.js.map
