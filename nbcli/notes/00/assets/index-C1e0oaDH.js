const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./inputs-DoHVubAa.js","./inputs-Cuu9vI3M.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(l){if(l.ep)return;l.ep=!0;const n=o(l);fetch(l.href,n)}})();class k extends Error{constructor(t,o){super(t),this.input=o}}k.prototype.name="RuntimeError";function Je(e){return e&&typeof e.next=="function"&&typeof e.return=="function"}function oe(e){return()=>e}function Y(e){return e}function Ke(e){return()=>{throw e}}const Ze=Array.prototype,Xe=Ze.map;function P(){}const ie=1,M=2,B=3,R=Symbol("no-observer"),Qe=Promise.resolve();function A(e,t,o,r){o||(o=R),Object.defineProperties(this,{_observer:{value:o,writable:!0},_definition:{value:se,writable:!0},_duplicate:{value:void 0,writable:!0},_duplicates:{value:void 0,writable:!0},_indegree:{value:NaN,writable:!0},_inputs:{value:[],writable:!0},_invalidate:{value:P,writable:!0},_module:{value:t},_name:{value:null,writable:!0},_outputs:{value:new Set,writable:!0},_promise:{value:Qe,writable:!0},_reachable:{value:o!==R,writable:!0},_rejector:{value:rt(this)},_shadow:{value:et(t,r)},_type:{value:e},_value:{value:void 0,writable:!0},_version:{value:0,writable:!0}})}Object.defineProperties(A.prototype,{_pending:{value:at,writable:!0,configurable:!0},_fulfilled:{value:ct,writable:!0,configurable:!0},_rejected:{value:ut,writable:!0,configurable:!0},_resolve:{value:nt,writable:!0,configurable:!0},define:{value:lt,writable:!0,configurable:!0},delete:{value:st,writable:!0,configurable:!0},import:{value:it,writable:!0,configurable:!0}});function et(e,t){return t?.shadow?new Map(Object.entries(t.shadow).map(([o,r])=>[o,new A(M,e).define([],r)])):null}function tt(e){e._module._runtime._dirty.add(e),e._outputs.add(this)}function ot(e){e._module._runtime._dirty.add(e),e._outputs.delete(this)}function se(){throw se}function T(){throw T}function rt(e){return t=>{throw t===T?t:t===se?new k(`${e._name} is not defined`,e._name):t instanceof Error&&t.message?new k(t.message,e._name):new k(`${e._name} could not be resolved`,e._name)}}function ve(e){return()=>{throw new k(`${e} is defined more than once`)}}function lt(e,t,o){switch(arguments.length){case 1:{o=e,e=t=null;break}case 2:{o=t,typeof e=="string"?t=null:(t=e,e=null);break}}return ae.call(this,e==null?null:String(e),t==null?[]:Xe.call(t,this._resolve,this),typeof o=="function"?o:oe(o))}function nt(e){return this._shadow?.get(e)??this._module._resolve(e)}function ae(e,t,o){const r=this._module._scope,l=this._module._runtime;if(this._inputs.forEach(ot,this),t.forEach(tt,this),this._inputs=t,this._definition=o,this._value=void 0,o===P?l._variables.delete(this):l._variables.add(this),e!==this._name||r.get(e)!==this){let n,i;if(this._name)if(this._outputs.size)r.delete(this._name),i=this._module._resolve(this._name),i._outputs=this._outputs,this._outputs=new Set,i._outputs.forEach(function(s){s._inputs[s._inputs.indexOf(this)]=i},this),i._outputs.forEach(l._updates.add,l._updates),l._dirty.add(i).add(this),r.set(this._name,i);else if((i=r.get(this._name))===this)r.delete(this._name);else if(i._type===B)i._duplicates.delete(this),this._duplicate=void 0,i._duplicates.size===1&&(i=i._duplicates.keys().next().value,n=r.get(this._name),i._outputs=n._outputs,n._outputs=new Set,i._outputs.forEach(function(s){s._inputs[s._inputs.indexOf(n)]=i}),i._definition=i._duplicate,i._duplicate=void 0,l._dirty.add(n).add(i),l._updates.add(i),r.set(this._name,i));else throw new Error;if(this._outputs.size)throw new Error;e&&((i=r.get(e))?i._type===B?(this._definition=ve(e),this._duplicate=o,i._duplicates.add(this)):i._type===M?(this._outputs=i._outputs,i._outputs=new Set,this._outputs.forEach(function(s){s._inputs[s._inputs.indexOf(i)]=this},this),l._dirty.add(i).add(this),r.set(e,this)):(i._duplicate=i._definition,this._duplicate=o,n=new A(B,this._module),n._name=e,n._definition=this._definition=i._definition=ve(e),n._outputs=i._outputs,i._outputs=new Set,n._outputs.forEach(function(s){s._inputs[s._inputs.indexOf(i)]=n}),n._duplicates=new Set([this,i]),l._dirty.add(i).add(n),l._updates.add(i).add(n),r.set(e,n)):r.set(e,this)),this._name=e}return this._version>0&&++this._version,l._updates.add(this),l._compute(),this}function it(e,t,o){return arguments.length<3&&(o=t,t=e),ae.call(this,String(t),[o._resolve(String(e))],Y)}function st(){return ae.call(this,null,[],P)}function at(){this._observer.pending&&this._observer.pending()}function ct(e){this._observer.fulfilled&&this._observer.fulfilled(e,this._name)}function ut(e){this._observer.rejected&&this._observer.rejected(e,this._name)}const Ce=Symbol("variable"),Pe=Symbol("invalidation"),Oe=Symbol("visibility");function G(e,t=[]){Object.defineProperties(this,{_runtime:{value:e},_scope:{value:new Map},_builtins:{value:new Map([["@variable",Ce],["invalidation",Pe],["visibility",Oe],...t])},_source:{value:null,writable:!0}})}Object.defineProperties(G.prototype,{_resolve:{value:yt,writable:!0,configurable:!0},redefine:{value:dt,writable:!0,configurable:!0},define:{value:ft,writable:!0,configurable:!0},derive:{value:bt,writable:!0,configurable:!0},import:{value:pt,writable:!0,configurable:!0},value:{value:mt,writable:!0,configurable:!0},variable:{value:ht,writable:!0,configurable:!0},builtin:{value:vt,writable:!0,configurable:!0}});function dt(e){const t=this._scope.get(e);if(!t)throw new k(`${e} is not defined`);if(t._type===B)throw new k(`${e} is defined more than once`);return t.define.apply(t,arguments)}function ft(){const e=new A(ie,this);return e.define.apply(e,arguments)}function pt(){const e=new A(ie,this);return e.import.apply(e,arguments)}function ht(e,t){return new A(ie,this,e,t)}async function mt(e){let t=this._scope.get(e);if(!t)throw new k(`${e} is not defined`);if(t._observer===R){t=this.variable(!0).define([e],Y);try{return await re(this._runtime,t)}finally{t.delete()}}else return re(this._runtime,t)}async function re(e,t){await e._compute();try{return await t._promise}catch(o){if(o===T)return re(e,t);throw o}}function bt(e,t){const o=new Map,r=new Set,l=[];function n(s){let c=o.get(s);return c||(c=new G(s._runtime,s._builtins),c._source=s,o.set(s,c),l.push([c,s]),r.add(s),c)}const i=n(this);for(const s of e){const{alias:c,name:a}=typeof s=="object"?s:{name:s};i.import(a,c??a,t)}for(const s of r)for(const[c,a]of s._scope)if(a._definition===Y){if(s===this&&i._scope.has(c))continue;const u=a._inputs[0]._module;u._source&&n(u)}for(const[s,c]of l)for(const[a,u]of c._scope){const d=s._scope.get(a);if(!(d&&d._type!==M))if(u._definition===Y){const h=u._inputs[0],p=h._module;s.import(h._name,a,o.get(p)||p)}else s.define(a,u._inputs.map(gt),u._definition)}return i}function yt(e){let t=this._scope.get(e),o;if(!t)if(t=new A(M,this),this._builtins.has(e))t.define(e,oe(this._builtins.get(e)));else if(this._runtime._builtin._scope.has(e))t.import(e,this._runtime._builtin);else{try{o=this._runtime._global(e)}catch(r){return t.define(e,Ke(r))}o===void 0?this._scope.set(t._name=e,t):t.define(e,oe(o))}return t}function vt(e,t){this._builtins.set(e,t)}function gt(e){return e._name}const _t=typeof requestAnimationFrame=="function"?requestAnimationFrame:typeof setImmediate=="function"?setImmediate:e=>setTimeout(e,0);function Ae(e,t=Rt){const o=this.module();if(Object.defineProperties(this,{_dirty:{value:new Set},_updates:{value:new Set},_precomputes:{value:[],writable:!0},_computing:{value:null,writable:!0},_init:{value:null,writable:!0},_modules:{value:new Map},_variables:{value:new Set},_disposed:{value:!1,writable:!0},_builtin:{value:o},_global:{value:t}}),e)for(const r in e)new A(M,o).define(r,[],e[r])}Object.defineProperties(Ae.prototype,{_precompute:{value:Et,writable:!0,configurable:!0},_compute:{value:zt,writable:!0,configurable:!0},_computeSoon:{value:kt,writable:!0,configurable:!0},_computeNow:{value:Tt,writable:!0,configurable:!0},dispose:{value:wt,writable:!0,configurable:!0},module:{value:xt,writable:!0,configurable:!0}});function wt(){this._computing=Promise.resolve(),this._disposed=!0,this._variables.forEach(e=>{e._invalidate(),e._version=NaN})}function xt(e,t=P){let o;if(e===void 0)return(o=this._init)?(this._init=null,o):new G(this);if(o=this._modules.get(e),o)return o;this._init=o=new G(this),this._modules.set(e,o);try{e(this,t)}finally{this._init=null}return o}function Et(e){this._precomputes.push(e),this._compute()}function zt(){return this._computing||(this._computing=this._computeSoon())}function kt(){return new Promise(_t).then(()=>this._disposed?void 0:this._computeNow())}async function Tt(){let e=[],t,o,r=this._precomputes;if(r.length){this._precomputes=[];for(const n of r)n();await Ct(3)}t=new Set(this._dirty),t.forEach(function(n){n._inputs.forEach(t.add,t);const i=Dt(n);i>n._reachable?this._updates.add(n):i<n._reachable&&n._invalidate(),n._reachable=i},this),t=new Set(this._updates),t.forEach(function(n){n._reachable?(n._indegree=0,n._outputs.forEach(t.add,t)):(n._indegree=NaN,t.delete(n))}),this._computing=null,this._updates.clear(),this._dirty.clear(),t.forEach(function(n){n._outputs.forEach(Ot)});do{for(t.forEach(function(n){n._indegree===0&&e.push(n)});o=e.pop();)It(o),o._outputs.forEach(l),t.delete(o);t.forEach(function(n){Pt(n)&&(Nt(n,new k("circular definition")),n._outputs.forEach(At),t.delete(n))})}while(t.size);function l(n){--n._indegree===0&&e.push(n)}}function Ct(e=0){let t=Promise.resolve();for(let o=0;o<e;++o)t=t.then(()=>{});return t}function Pt(e){const t=new Set(e._inputs);for(const o of t){if(o===e)return!0;o._inputs.forEach(t.add,t)}return!1}function Ot(e){++e._indegree}function At(e){--e._indegree}function St(e){return e._promise.catch(e._rejector)}function ee(e){return new Promise(function(t){e._invalidate=t})}function $t(e,t){let o=typeof IntersectionObserver=="function"&&t._observer&&t._observer._node,r=!o,l=P,n=P,i,s;return o&&(s=new IntersectionObserver(([c])=>(r=c.isIntersecting)&&(i=null,l())),s.observe(o),e.then(()=>(s.disconnect(),s=null,n()))),function(c){return r?Promise.resolve(c):s?(i||(i=new Promise((a,u)=>(l=a,n=u))),i.then(()=>c)):Promise.reject()}}function It(e){e._invalidate(),e._invalidate=P,e._pending();const t=e._value,o=++e._version,r=e._inputs,l=e._definition;let n=null;const i=e._promise=e._promise.then(s,s).then(c).then(a);function s(){return Promise.all(r.map(St))}function c(u){if(e._version!==o)throw T;for(let d=0,h=u.length;d<h;++d)switch(u[d]){case Pe:{u[d]=n=ee(e);break}case Oe:{n||(n=ee(e)),u[d]=$t(n,e);break}case Ce:{u[d]=e;break}}return l.apply(t,u)}function a(u){if(e._version!==o)throw T;return Je(u)?((n||ee(e)).then(Lt(u)),qt(e,o,u)):u}i.then(u=>{e._value=u,e._fulfilled(u)},u=>{u===T||e._version!==o||(e._value=void 0,e._rejected(u))})}function qt(e,t,o){const r=e._module._runtime;let l;function n(c){return new Promise(a=>a(o.next(l))).then(({done:a,value:u})=>a?void 0:Promise.resolve(u).then(c))}function i(){const c=n(a=>{if(e._version!==t)throw T;return l=a,s(a,c).then(()=>r._precompute(i)),e._fulfilled(a),a});c.catch(a=>{a===T||e._version!==t||(s(void 0,c),e._rejected(a))})}function s(c,a){return e._value=c,e._promise=a,e._outputs.forEach(r._updates.add,r._updates),r._compute()}return n(c=>{if(e._version!==t)throw T;return l=c,r._precompute(i),c})}function Nt(e,t){e._invalidate(),e._invalidate=P,e._pending(),++e._version,e._indegree=NaN,(e._promise=Promise.reject(t)).catch(P),e._value=void 0,e._rejected(t)}function Lt(e){return function(){e.return()}}function Dt(e){if(e._observer!==R)return!0;const t=new Set(e._outputs);for(const o of t){if(o._observer!==R)return!0;o._outputs.forEach(t.add,t)}return!1}function Rt(e){return globalThis[e]}function H(e,t,o){o=o||{};var r=e.ownerDocument,l=r.defaultView.CustomEvent;typeof l=="function"?l=new l(t,{detail:o}):(l=r.createEvent("Event"),l.initEvent(t,!1,!1),l.detail=o),e.dispatchEvent(l)}function Se(e){return Array.isArray(e)||e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array}function $e(e){return e===(e|0)+""}function x(e){const t=document.createElement("span");return t.className="observablehq--cellname",t.textContent=`${e} = `,t}const jt=Symbol.prototype.toString;function q(e){return jt.call(e)}const{getOwnPropertySymbols:Mt,prototype:{hasOwnProperty:Ft}}=Object,{toStringTag:Vt}=Symbol,Ie={},F=Mt;function X(e,t){return Ft.call(e,t)}function le(e){return e[Vt]||e.constructor&&e.constructor.name||"Object"}function g(e,t){try{const o=e[t];return o&&o.constructor,o}catch{return Ie}}const Bt=[{symbol:"@@__IMMUTABLE_INDEXED__@@",name:"Indexed",modifier:!0},{symbol:"@@__IMMUTABLE_KEYED__@@",name:"Keyed",modifier:!0},{symbol:"@@__IMMUTABLE_LIST__@@",name:"List",arrayish:!0},{symbol:"@@__IMMUTABLE_MAP__@@",name:"Map"},{symbol:"@@__IMMUTABLE_ORDERED__@@",name:"Ordered",modifier:!0,prefix:!0},{symbol:"@@__IMMUTABLE_RECORD__@@",name:"Record"},{symbol:"@@__IMMUTABLE_SET__@@",name:"Set",arrayish:!0,setish:!0},{symbol:"@@__IMMUTABLE_STACK__@@",name:"Stack",arrayish:!0}];function qe(e){try{let t=Bt.filter(({symbol:i})=>e[i]===!0);if(!t.length)return;const o=t.find(i=>!i.modifier),r=o.name==="Map"&&t.find(i=>i.modifier&&i.prefix),l=t.some(i=>i.arrayish),n=t.some(i=>i.setish);return{name:`${r?r.name:""}${o.name}`,symbols:t,arrayish:l&&!n,setish:n}}catch{return null}}const{getPrototypeOf:ce,getOwnPropertyDescriptors:Ut}=Object,Ne=ce({});function Le(e,t,o,r){let l=Se(e),n,i,s,c;e instanceof Map?e instanceof e.constructor?(n=`Map(${e.size})`,i=Yt):(n="Map()",i=L):e instanceof Set?e instanceof e.constructor?(n=`Set(${e.size})`,i=Gt):(n="Set()",i=L):l?(n=`${e.constructor.name}(${e.length})`,i=Wt):(c=qe(e))?(n=`Immutable.${c.name}${c.name==="Record"?"":`(${e.size})`}`,l=c.arrayish,i=c.arrayish?Jt:c.setish?Ht:Zt):r?(n=le(e),i=Kt):(n=le(e),i=L);const a=document.createElement("span");a.className="observablehq--expanded",o&&a.appendChild(x(o));const u=a.appendChild(document.createElement("a"));u.innerHTML=`<svg width=8 height=8 class='observablehq--caret'>
    <path d='M4 7L0 1h8z' fill='currentColor' />
  </svg>`,u.appendChild(document.createTextNode(`${n}${l?" [":" {"}`)),u.addEventListener("mouseup",function(d){d.stopPropagation(),J(a,ue(e,null,o,r))}),i=i(e);for(let d=0;!(s=i.next()).done&&d<20;++d)a.appendChild(s.value);if(!s.done){const d=a.appendChild(document.createElement("a"));d.className="observablehq--field",d.style.display="block",d.appendChild(document.createTextNode("  … more")),d.addEventListener("mouseup",function(h){h.stopPropagation(),a.insertBefore(s.value,a.lastChild.previousSibling);for(let p=0;!(s=i.next()).done&&p<19;++p)a.insertBefore(s.value,a.lastChild.previousSibling);s.done&&a.removeChild(a.lastChild.previousSibling),H(a,"load")})}return a.appendChild(document.createTextNode(l?"]":"}")),a}function*Yt(e){for(const[t,o]of e)yield Xt(t,o);yield*L(e)}function*Gt(e){for(const t of e)yield Re(t);yield*L(e)}function*Ht(e){for(const t of e)yield Re(t)}function*Wt(e){for(let t=0,o=e.length;t<o;++t)t in e&&(yield C(t,g(e,t),"observablehq--index"));for(const t in e)!$e(t)&&X(e,t)&&(yield C(t,g(e,t),"observablehq--key"));for(const t of F(e))yield C(q(t),g(e,t),"observablehq--symbol")}function*Jt(e){let t=0;for(const o=e.size;t<o;++t)yield C(t,e.get(t),!0)}function*Kt(e){for(const o in Ut(e))yield C(o,g(e,o),"observablehq--key");for(const o of F(e))yield C(q(o),g(e,o),"observablehq--symbol");const t=ce(e);t&&t!==Ne&&(yield De(t))}function*L(e){for(const o in e)X(e,o)&&(yield C(o,g(e,o),"observablehq--key"));for(const o of F(e))yield C(q(o),g(e,o),"observablehq--symbol");const t=ce(e);t&&t!==Ne&&(yield De(t))}function*Zt(e){for(const[t,o]of e)yield C(t,o,"observablehq--key")}function De(e){const t=document.createElement("div"),o=t.appendChild(document.createElement("span"));return t.className="observablehq--field",o.className="observablehq--prototype-key",o.textContent="  <prototype>",t.appendChild(document.createTextNode(": ")),t.appendChild(y(e,void 0,void 0,void 0,!0)),t}function C(e,t,o){const r=document.createElement("div"),l=r.appendChild(document.createElement("span"));return r.className="observablehq--field",l.className=o,l.textContent=`  ${e}`,r.appendChild(document.createTextNode(": ")),r.appendChild(y(t)),r}function Xt(e,t){const o=document.createElement("div");return o.className="observablehq--field",o.appendChild(document.createTextNode("  ")),o.appendChild(y(e)),o.appendChild(document.createTextNode(" => ")),o.appendChild(y(t)),o}function Re(e){const t=document.createElement("div");return t.className="observablehq--field",t.appendChild(document.createTextNode("  ")),t.appendChild(y(e)),t}function ge(e){const t=window.getSelection();return t.type==="Range"&&(t.containsNode(e,!0)||e.contains(t.anchorNode)||e.contains(t.focusNode))}function ue(e,t,o,r){let l=Se(e),n,i,s,c;if(e instanceof Map?e instanceof e.constructor?(n=`Map(${e.size})`,i=Qt):(n="Map()",i=D):e instanceof Set?e instanceof e.constructor?(n=`Set(${e.size})`,i=eo):(n="Set()",i=D):l?(n=`${e.constructor.name}(${e.length})`,i=ro):(c=qe(e))?(n=`Immutable.${c.name}${c.name==="Record"?"":`(${e.size})`}`,l=c.arrayish,i=c.arrayish?oo:c.setish?to:lo):(n=le(e),i=D),t){const d=document.createElement("span");return d.className="observablehq--shallow",o&&d.appendChild(x(o)),d.appendChild(document.createTextNode(n)),d.addEventListener("mouseup",function(h){ge(d)||(h.stopPropagation(),J(d,ue(e)))}),d}const a=document.createElement("span");a.className="observablehq--collapsed",o&&a.appendChild(x(o));const u=a.appendChild(document.createElement("a"));u.innerHTML=`<svg width=8 height=8 class='observablehq--caret'>
    <path d='M7 4L1 8V0z' fill='currentColor' />
  </svg>`,u.appendChild(document.createTextNode(`${n}${l?" [":" {"}`)),a.addEventListener("mouseup",function(d){ge(a)||(d.stopPropagation(),J(a,Le(e,null,o,r)))},!0),i=i(e);for(let d=0;!(s=i.next()).done&&d<20;++d)d>0&&a.appendChild(document.createTextNode(", ")),a.appendChild(s.value);return s.done||a.appendChild(document.createTextNode(", …")),a.appendChild(document.createTextNode(l?"]":"}")),a}function*Qt(e){for(const[t,o]of e)yield no(t,o);yield*D(e)}function*eo(e){for(const t of e)yield y(t,!0);yield*D(e)}function*to(e){for(const t of e)yield y(t,!0)}function*oo(e){let t=-1,o=0;for(const r=e.size;o<r;++o)o>t+1&&(yield W(o-t-1)),yield y(e.get(o),!0),t=o;o>t+1&&(yield W(o-t-1))}function*ro(e){let t=-1,o=0;for(const r=e.length;o<r;++o)o in e&&(o>t+1&&(yield W(o-t-1)),yield y(g(e,o),!0),t=o);o>t+1&&(yield W(o-t-1));for(const r in e)!$e(r)&&X(e,r)&&(yield j(r,g(e,r),"observablehq--key"));for(const r of F(e))yield j(q(r),g(e,r),"observablehq--symbol")}function*D(e){for(const t in e)X(e,t)&&(yield j(t,g(e,t),"observablehq--key"));for(const t of F(e))yield j(q(t),g(e,t),"observablehq--symbol")}function*lo(e){for(const[t,o]of e)yield j(t,o,"observablehq--key")}function W(e){const t=document.createElement("span");return t.className="observablehq--empty",t.textContent=e===1?"empty":`empty × ${e}`,t}function j(e,t,o){const r=document.createDocumentFragment(),l=r.appendChild(document.createElement("span"));return l.className=o,l.textContent=e,r.appendChild(document.createTextNode(": ")),r.appendChild(y(t,!0)),r}function no(e,t){const o=document.createDocumentFragment();return o.appendChild(y(e,!0)),o.appendChild(document.createTextNode(" => ")),o.appendChild(y(t,!0)),o}function io(e,t){if(e instanceof Date||(e=new Date(+e)),isNaN(e))return typeof t=="function"?t(e):t;const o=e.getUTCHours(),r=e.getUTCMinutes(),l=e.getUTCSeconds(),n=e.getUTCMilliseconds();return`${so(e.getUTCFullYear())}-${z(e.getUTCMonth()+1,2)}-${z(e.getUTCDate(),2)}${o||r||l||n?`T${z(o,2)}:${z(r,2)}${l||n?`:${z(l,2)}${n?`.${z(n,3)}`:""}`:""}Z`:""}`}function so(e){return e<0?`-${z(-e,6)}`:e>9999?`+${z(e,6)}`:z(e,4)}function z(e,t){return`${e}`.padStart(t,"0")}function ao(e){return io(e,"Invalid Date")}var co=Error.prototype.toString;function uo(e){return e.stack||co.call(e)}var fo=RegExp.prototype.toString;function po(e){return fo.call(e)}const te=20;function ho(e,t,o,r){if(t===!1){if(we(e,/["\n]/g)<=we(e,/`|\${/g)){const a=document.createElement("span");r&&a.appendChild(x(r));const u=a.appendChild(document.createElement("span"));return u.className="observablehq--string",u.textContent=JSON.stringify(e),a}const i=e.split(`
`);if(i.length>te&&!o){const a=document.createElement("div");r&&a.appendChild(x(r));const u=a.appendChild(document.createElement("span"));u.className="observablehq--string",u.textContent="`"+_e(i.slice(0,te).join(`
`));const d=a.appendChild(document.createElement("span")),h=i.length-te;return d.textContent=`Show ${h} truncated line${h>1?"s":""}`,d.className="observablehq--string-expand",d.addEventListener("mouseup",function(p){p.stopPropagation(),J(a,y(e,t,!0,r))}),a}const s=document.createElement("span");r&&s.appendChild(x(r));const c=s.appendChild(document.createElement("span"));return c.className=`observablehq--string${o?" observablehq--expanded":""}`,c.textContent="`"+_e(e)+"`",s}const l=document.createElement("span");r&&l.appendChild(x(r));const n=l.appendChild(document.createElement("span"));return n.className="observablehq--string",n.textContent=JSON.stringify(e.length>100?`${e.slice(0,50)}…${e.slice(-49)}`:e),l}function _e(e){return e.replace(/[\\`\x00-\x09\x0b-\x19]|\${/g,mo)}function mo(e){var t=e.charCodeAt(0);switch(t){case 8:return"\\b";case 9:return"\\t";case 11:return"\\v";case 12:return"\\f";case 13:return"\\r"}return t<16?"\\x0"+t.toString(16):t<32?"\\x"+t.toString(16):"\\"+e}function we(e,t){for(var o=0;t.exec(e);)++o;return o}var bo=Function.prototype.toString,yo={prefix:"async ƒ"},vo={prefix:"async ƒ*"},xe={prefix:"class"},go={prefix:"ƒ"},_o={prefix:"ƒ*"};function wo(e,t){var o,r,l=bo.call(e);switch(e.constructor&&e.constructor.name){case"AsyncFunction":o=yo;break;case"AsyncGeneratorFunction":o=vo;break;case"GeneratorFunction":o=_o;break;default:o=/^class\b/.test(l)?xe:go;break}return o===xe?N(o,"",t):(r=/^(?:async\s*)?(\w+)\s*=>/.exec(l))?N(o,"("+r[1]+")",t):(r=/^(?:async\s*)?\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(l))?N(o,r[1]?"("+r[1].replace(/\s*,\s*/g,", ")+")":"()",t):(r=/^(?:async\s*)?function(?:\s*\*)?(?:\s*\w+)?\s*\(\s*(\w+(?:\s*,\s*\w+)*)?\s*\)/.exec(l))?N(o,r[1]?"("+r[1].replace(/\s*,\s*/g,", ")+")":"()",t):N(o,"(…)",t)}function N(e,t,o){var r=document.createElement("span");r.className="observablehq--function",o&&r.appendChild(x(o));var l=r.appendChild(document.createElement("span"));return l.className="observablehq--keyword",l.textContent=e.prefix,r.appendChild(document.createTextNode(t)),r}const{prototype:{toString:xo}}=Object;function y(e,t,o,r,l){let n=typeof e;switch(n){case"boolean":case"undefined":{e+="";break}case"number":{e=e===0&&1/e<0?"-0":e+"";break}case"bigint":{e=e+"n";break}case"symbol":{e=q(e);break}case"function":return wo(e,r);case"string":return ho(e,t,o,r);default:{if(e===null){n=null,e="null";break}if(e instanceof Date){n="date",e=ao(e);break}if(e===Ie){n="forbidden",e="[forbidden]";break}switch(xo.call(e)){case"[object RegExp]":{n="regexp",e=po(e);break}case"[object Error]":case"[object DOMException]":{n="error",e=uo(e);break}default:return(o?Le:ue)(e,t,r,l)}break}}const i=document.createElement("span");r&&i.appendChild(x(r));const s=i.appendChild(document.createElement("span"));return s.className=`observablehq--${n}`,s.textContent=e,i}function J(e,t){e.classList.contains("observablehq--inspect")&&t.classList.add("observablehq--inspect"),e.parentNode.replaceChild(t,e),H(t,"load")}const Eo=/\s+\(\d+:\d+\)$/m;class K{constructor(t){if(!t)throw new Error("invalid node");this._node=t,t.classList.add("observablehq")}pending(){const{_node:t}=this;t.classList.remove("observablehq--error"),t.classList.add("observablehq--running")}fulfilled(t,o){const{_node:r}=this;if((!zo(t)||t.parentNode&&t.parentNode!==r)&&(t=y(t,!1,r.firstChild&&r.firstChild.classList&&r.firstChild.classList.contains("observablehq--expanded"),o),t.classList.add("observablehq--inspect")),r.classList.remove("observablehq--running","observablehq--error"),r.firstChild!==t)if(r.firstChild){for(;r.lastChild!==r.firstChild;)r.removeChild(r.lastChild);r.replaceChild(t,r.firstChild)}else r.appendChild(t);H(r,"update")}rejected(t,o){const{_node:r}=this;for(r.classList.remove("observablehq--running"),r.classList.add("observablehq--error");r.lastChild;)r.removeChild(r.lastChild);var l=document.createElement("div");l.className="observablehq--inspect",o&&l.appendChild(x(o)),l.appendChild(document.createTextNode((t+"").replace(Eo,""))),r.appendChild(l),H(r,"error",{error:t})}}K.into=function(e){if(typeof e=="string"&&(e=document.querySelector(e),e==null))throw new Error("container not found");return function(){return new K(e.appendChild(document.createElement("div")))}};function zo(e){return(e instanceof Element||e instanceof Text)&&e instanceof e.constructor}function ko(e,t){const o=document.createElement("div");if(new K(o).fulfilled(e),t)for(const r of t){let l=o;for(const n of r)l=l?.childNodes[n];l?.dispatchEvent(new Event("mouseup"))}return o}function To(e){const t=document.createElement("div");return new K(t).rejected(e),t}function Co(e){if(!Oo(e))return;const t=e.querySelectorAll(".observablehq--expanded");if(t.length)return Array.from(t,o=>Ao(e,o))}function Po(e){return e.nodeType===1}function Oo(e){return Po(e)&&e.classList.contains("observablehq")}function Ao(e,t){const o=[];for(;t!==e;)o.push(So(t)),t=t.parentNode;return o.reverse()}function So(e){return Array.prototype.indexOf.call(e.parentNode.childNodes,e)}const $o=["audio source[src]","audio[src]","img[src]","picture source[src]","video source[src]","video[src]"].join(),Io=["img[srcset]","picture source[srcset]"].join(),qo=["a[href][download]","link[href]"].join(),No=[[$o,"src"],[Io,"srcset"],[qo,"href"]];function Lo(e,t){const o=r=>t.get(jo(r))??r;for(const[r,l]of No)for(const n of e.querySelectorAll(r)){if(Do(n))continue;const i=decodeURI(n.getAttribute(l));l==="srcset"?n.setAttribute(l,Fo(i,o)):n.setAttribute(l,o(i))}}function Do(e){return/(?:^|\s)external(?:\s|$)/i.test(e.getAttribute("rel")??"")}function Ro(e){const t=e.indexOf("?"),o=e.indexOf("#"),r=t>=0&&o>=0?Math.min(t,o):t>=0?t:o;return r>=0?e.slice(0,r):e}function jo(e){const t=Ro(e);return Mo(t)?t:`./${t}`}function Mo(e){return["./","../","/"].some(t=>e.startsWith(t))}function Fo(e,t){return e.trim().split(/\s*,\s*/).filter(o=>o).map(o=>{const r=o.split(/\s+/),l=t(r[0]);return l&&(r[0]=encodeURI(l)),r.join(" ")}).join(", ")}function je(e,t){const{root:o,expanded:r}=e,l=Bo(t,o)?t:ko(t,r[o.childNodes.length]);Me(e,l)}function Me(e,t){if(t.nodeType===11){let o;for(;o=t.firstChild;)e.root.appendChild(o)}else e.root.appendChild(t)}function Vo(e,t){Me(e,To(t))}function Bo(e,t){return(e instanceof Element||e instanceof Text)&&e instanceof e.constructor&&(!e.parentNode||t.contains(e))}function $(e){for(e.autoclear=!1,e.expanded=Array.from(e.root.childNodes,Co);e.root.lastChild;)e.root.lastChild.remove()}function Uo(e,{autodisplay:t,assets:o}){return{_error:!1,_node:e.root,pending(){this._error&&(this._error=!1,$(e))},fulfilled(r){t?(o&&r instanceof Element&&Lo(r,o),$(e),je(e,r)):e.autoclear&&$(e)},rejected(r){console.error(r),this._error=!0,$(e),Vo(e,r)}}}function Q(e){let t,o,r,l=!1;const n=e(i=>(r=i,t!=null?(t(i),t=o=void 0):l=!0,i));if(n!=null&&typeof n!="function")throw new Error(typeof n=="object"&&typeof n.then=="function"?"async initializers are not supported":"initializer returned something, but not a dispose function");return{async next(){return{done:!1,value:await(l?(l=!1,r):new Promise((i,s)=>(t=i,o=s)))}},async return(){return o!=null&&(o(new Error("Generator returned")),t=o=void 0),n?.(),{done:!0,value:void 0}},async throw(i){return o!=null&&(o(i),t=o=void 0),n?.(),{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}function ne(e){return Q(t=>{const o=Yo(e),r=Ee(e),l=()=>t(Ee(e));return e.addEventListener(o,l),r!==void 0&&t(r),()=>e.removeEventListener(o,l)})}function Ee(e){const t=e,o=e;if("type"in e)switch(e.type){case"range":case"number":return t.valueAsNumber;case"date":return t.valueAsDate;case"checkbox":return t.checked;case"file":return t.multiple?t.files:t.files[0];case"select-multiple":return Array.from(o.selectedOptions,r=>r.value)}return t.value}function Yo(e){if("type"in e)switch(e.type){case"button":case"submit":case"checkbox":return"click";case"file":return"change"}return"input"}async function*Fe(){for(;;)yield Date.now()}function Go(e){let t,o;const r=[],l=e(n=>(r.push(n),t!=null&&(t(r.shift()),t=void 0),n));if(l!=null&&typeof l!="function")throw new Error(typeof l=="object"&&typeof l.then=="function"?"async initializers are not supported":"initializer returned something, but not a dispose function");return{async next(){return{done:!1,value:await(r.length?r.shift():new Promise((n,i)=>(t=n,o=i)))}},async return(){return o!=null&&(o(new Error("Generator returned")),t=o=void 0),l?.(),{done:!0,value:void 0}},async throw(n){return o!=null&&(o(n),t=o=void 0),l?.(),{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}function Ve(e,t){return Q(o=>{let r;const l=new ResizeObserver(([n])=>{const i=n.contentRect.width;i!==r&&o(r=i)});return l.observe(e,t),()=>l.disconnect()})}const Ho=Object.freeze(Object.defineProperty({__proto__:null,input:ne,now:Fe,observe:Q,queue:Go,width:Ve},Symbol.toStringTag,{value:"Module"}));function Be(e){let t;return Object.defineProperty(Q(o=>{t=o,e!==void 0&&t(e)}),"value",{get:()=>e,set:o=>(e=o,void t?.(e))})}function Wo(e){const t=Be(e);return[t,{get value(){return t.value},set value(o){t.value=o}}]}function Jo(e,t,o,r=Uo){const{id:l,body:n,inputs:i=[],outputs:s=[],output:c,autodisplay:a,autoview:u,automutable:d}=o,h=t.variables,p=e.variable(r(t,o),{shadow:{}}),O=c??(s.length?`cell ${l}`:null);if(t.autoclear=!0,i.includes("display")||i.includes("view")){let m=-1;const E=new p.constructor(2,p._module);if(E.define(i.filter(b=>b!=="display"&&b!=="view"),()=>{const b=p._version;return V=>{if(b<m)throw new Error("stale display");if(t.variables[0]!==p)throw new Error("stale display");return b>m&&$(t),m=b,je(t,V),V}}),p._shadow.set("display",E),i.includes("view")){const b=new p.constructor(2,p._module,null,{shadow:{}});b._shadow.set("display",E),b.define(["display"],V=>We=>ne(V(We))),p._shadow.set("view",b)}}else a||$(t);if(h.push(p.define(O,i,n)),c!=null){if(u){const m=ze(c,"viewof$");h.push(e.define(m,[c],ne))}else if(d){const m=ze(c,"mutable "),E=`cell ${l}`;p.define(m,[E],([b])=>b),h.push(e.define(c,i,n),e.define(E,[c],Wo),e.define(`mutable$${m}`,[E],([,b])=>b))}}else for(const m of s)h.push(e.variable(!0).define(m,[O],E=>E[m]))}function ze(e,t){if(!e.startsWith(t))throw new Error(`expected ${t}: ${e}`);return e.slice(t.length)}const Ko="modulepreload",Zo=function(e,t){return new URL(e,t).href},ke={},f=function(t,o,r){let l=Promise.resolve();if(o&&o.length>0){let a=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const i=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),c=s?.nonce||s?.getAttribute("nonce");l=a(o.map(u=>{if(u=Zo(u,r),u in ke)return;ke[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(r)for(let O=i.length-1;O>=0;O--){const m=i[O];if(m.href===u&&(!d||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":Ko,d||(p.as="script"),p.crossOrigin="",p.href=u,c&&p.setAttribute("nonce",c),document.head.appendChild(p),d)return new Promise((O,m)=>{p.addEventListener("load",O),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function n(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return l.then(i=>{for(const s of i||[])s.status==="rejected"&&n(s.reason);return t().catch(n)})},Te=new Map,de=(e,t=document.baseURI)=>{const o=new URL(e,t).href;let r=Te.get(o);return r||(r=new I(o,e.split("/").pop()),Te.set(o,r)),r};async function S(e){const t=await fetch(e.href);if(!t.ok)throw new Error(`Unable to load file: ${e.name}`);return t}class Xo{constructor(t,o=Qo(t),r,l){Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"mimeType",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastModified",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperties(this,{name:{value:`${t}`,enumerable:!0},mimeType:{value:`${o}`,enumerable:!0},lastModified:{value:r===void 0?void 0:+r,enumerable:!0},size:{value:l===void 0?void 0:+l,enumerable:!0}})}async url(){return this.href}async blob(){return(await S(this)).blob()}async arrayBuffer(){return(await S(this)).arrayBuffer()}async text(t){return t===void 0?(await S(this)).text():new TextDecoder(t).decode(await this.arrayBuffer())}async json(){return(await S(this)).json()}async stream(){return(await S(this)).body}async dsv({delimiter:t=",",array:o=!1,typed:r=!1}={}){const[l,n]=await Promise.all([this.text(),f(()=>import("https://cdn.jsdelivr.net/npm/d3-dsv/+esm"),[],import.meta.url)]),i=n.dsvFormat(t);return(o?i.parseRows:i.parse)(l,r&&n.autoType)}async csv(t){return this.dsv({...t,delimiter:","})}async tsv(t){return this.dsv({...t,delimiter:"	"})}async image(t){const o=await this.url();return new Promise((r,l)=>{const n=new Image;new URL(o,document.baseURI).origin!==location.origin&&(n.crossOrigin="anonymous"),Object.assign(n,t),n.onload=()=>r(n),n.onerror=()=>l(new Error(`Unable to load file: ${this.name}`)),n.src=o})}async arrow(){const[t,o]=await Promise.all([f(()=>import("https://cdn.jsdelivr.net/npm/apache-arrow@17.0.0/+esm"),[],import.meta.url),S(this)]);return t.tableFromIPC(o)}async arquero(t){let o,r;switch(this.mimeType){case"application/json":o=this.text(),r="fromJSON";break;case"text/tab-separated-values":t?.delimiter===void 0&&(t={...t,delimiter:"	"});case"text/csv":o=this.text(),r="fromCSV";break;default:if(/\.arrow$/i.test(this.name))o=this.arrow(),r="fromArrow";else if(/\.parquet$/i.test(this.name))o=this.parquet(),r="fromArrow";else throw new Error(`unable to determine Arquero loader: ${this.name}`);break}const[l,n]=await Promise.all([f(()=>import("https://cdn.jsdelivr.net/npm/arquero/+esm"),[],import.meta.url),o]);return l[r](n,t)}async parquet(){const[t,o,r]=await Promise.all([f(()=>import("https://cdn.jsdelivr.net/npm/apache-arrow@17.0.0/+esm"),[],import.meta.url),f(()=>import("https://cdn.jsdelivr.net/npm/parquet-wasm/+esm"),[],import.meta.url).then(async l=>(await l.default("https://cdn.jsdelivr.net/npm/parquet-wasm/esm/parquet_wasm_bg.wasm"),l)),this.arrayBuffer()]);return t.tableFromIPC(o.readParquet(new Uint8Array(r)).intoIPCStream())}async xml(t="application/xml"){return new DOMParser().parseFromString(await this.text(),t)}async html(){return this.xml("text/html")}}function Qo(e){const t=e.lastIndexOf("."),o=e.lastIndexOf("/");switch(t>0&&(o<0||t>o)?e.slice(t).toLowerCase():""){case".csv":return"text/csv";case".tsv":return"text/tab-separated-values";case".json":return"application/json";case".html":return"text/html";case".xml":return"application/xml";case".png":return"image/png";case".jpg":return"image/jpg";case".js":return"text/javascript";default:return"application/octet-stream"}}class I extends Xo{constructor(t,o,r,l,n){super(o,r,l,n),Object.defineProperty(this,"href",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"href",{value:t})}}Object.defineProperty(I,"name",{value:"FileAttachment"});de.prototype=I.prototype;function er(e){function t(o){const r=e(o+="");if(r==null)throw new Error(`File not found: ${o}`);if(typeof r=="object"&&"url"in r){const{url:l,mimeType:n}=r;return new I(l,o,n)}return new I(r,o)}return t.prototype=I.prototype,t}function tr(e,{length:t=50,fallback:o="untitled",separator:r="-"}={}){const l=e.normalize("NFD").replace(/[\u0300-\u036f'‘’]/g,"").toLowerCase().split(/\W+/g).filter(or);let n=-1;for(let i=0,s=l.length;++n<s;)if((i+=l[n].length)+n>t){l[n]=l[n].substring(0,t-i+l[n].length-n);break}return l.slice(0,n+1).filter(Boolean).join(r)||o.slice(0,t)}function or(e){return e.length>0}async function fe(e){const t=new TextEncoder().encode(e),o=await crypto.subtle.digest("SHA-256",t);return new Uint8Array(o).reduce((r,l)=>r<<8n|BigInt(l),0n)}function pe(e,t){return e.toString(36).padStart(t,"0").slice(0,t)}async function rr(e,...t){return pe(await fe(JSON.stringify([e,...t])),16)}async function lr(e){return pe(await fe(e),16)}async function Ue(e){return/^[\w-]+$/.test(e)?e:`${tr(nr(e))}.${pe(await fe(e),8)}`}function nr(e){return e.replace(/^.*\//,"")}const he=(e,t)=>new me(e,ir(t));function ir({id:e,since:t}={}){const o={};return e!==void 0&&(o.id=e),t!==void 0&&(o.since=new Date(t)),o}class me{constructor(t,o){Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperties(this,{name:{value:t,enumerable:!0},options:{value:o,enumerable:!0}})}async sql(t,...o){const r=await this.cachePath(t,...o),l=await fetch(r);if(!l.ok)throw new Error(`failed to fetch: ${r}`);return await l.json().then(Ye)}async cachePath(t,...o){return`.observable/cache/${await Ue(this.name)}-${await rr(t,...o)}.json`}}function Ye({rows:e,schema:t,date:o,...r}){for(const l of t)switch(l.type){case"bigint":{const{name:n}=l;for(const i of e){const s=i[n];s!=null&&(i[n]=Number(s))}break}case"date":{const{name:n}=l;for(const i of e){const s=i[n];s!=null&&(i[n]=sr(s))}break}}return o!=null&&(o=new Date(o)),Object.assign(e,{schema:t,date:o},r)}function sr(e){return new Date(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(?::\d{2})?$/.test(e)?e+"Z":e)}he.revive=Ye;he.prototype=me.prototype;Object.defineProperty(me,"name",{value:"DatabaseClient"});function ar(e,t){const o=document.createElement("canvas");return o.width=e,o.height=t,o}function cr(e,t,o=devicePixelRatio){const r=document.createElement("canvas");r.width=e*o,r.height=t*o,r.style.width=`${e}px`;const l=r.getContext("2d");return l.scale(o,o),l}function ur(e,t){const o=document.createElementNS("http://www.w3.org/2000/svg","svg");return o.setAttribute("viewBox",`0 0 ${e} ${t}`),o.setAttribute("width",`${e}`),o.setAttribute("height",`${t}`),o}function dr(e){return document.createTextNode(e)}let fr=0;function pr(e){return new hr(`O-${e==null?"":`${e}-`}${++fr}`)}class hr{constructor(t){Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"href",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.id=t,this.href=new URL(`#${t}`,location.href).href}toString(){return`url(${this.href})`}}const mr=Object.freeze(Object.defineProperty({__proto__:null,canvas:ar,context2d:cr,svg:ur,text:dr,uid:pr},Symbol.toStringTag,{value:"Module"}));function br(e){switch(e){case"html":case"text":return".txt";case"jpeg":return".jpg";case"json":case"arrow":case"parquet":case"csv":case"tsv":case"png":case"gif":case"svg":case"webp":case"xml":return`.${e}`;default:return".bin"}}const Ge=(e,t)=>new be(e,yr(t));function yr({format:e="buffer",id:t,since:o}={}){const r={format:e};return t!==void 0&&(r.id=t),o!==void 0&&(r.since=new Date(o)),r}class be{constructor(t,o){Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperties(this,{name:{value:t,enumerable:!0},options:{value:o,enumerable:!0}})}async run(t){return de(await this.cachePath(t))}async cachePath(t){const{format:o}=this.options;return`.observable/cache/${await Ue(this.name)}-${await lr(t)}${br(o)}`}}Ge.prototype=be.prototype;Object.defineProperty(be,"name",{value:"Interpreter"});var vr=function(e,t,o,r){if(o==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?r:o==="a"?r.call(e):r?r.value:t.get(e)},gr=function(e,t,o,r,l){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!l)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!l:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?l.call(e,o):l?l.value=o:t.set(e,o),o},U;class _r{constructor(){U.set(this,void 0),Object.defineProperty(this,"fulfilled",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rejected",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.next()}async next(){const t=await vr(this,U,"f");return gr(this,U,new Promise((o,r)=>(this.fulfilled=o,this.rejected=r)),"f"),{done:!1,value:t}}throw(){return{done:!0}}return(){return{done:!0}}}U=new WeakMap;const wr=()=>f(()=>import("https://cdn.jsdelivr.net/npm/lodash/+esm"),[],import.meta.url).then(e=>e.default),xr=()=>f(()=>import("https://cdn.jsdelivr.net/npm/arquero/+esm"),[],import.meta.url),Er=()=>f(()=>import("https://cdn.jsdelivr.net/npm/apache-arrow@17.0.0/+esm"),[],import.meta.url),zr=()=>f(()=>import("https://cdn.jsdelivr.net/npm/d3/+esm"),[],import.meta.url),kr=()=>f(()=>import("./dot-DSyh6hFx.js"),[],import.meta.url).then(e=>e.dot),Tr=()=>f(()=>import("https://cdn.jsdelivr.net/npm/@duckdb/duckdb-wasm@1.29.0/+esm"),[],import.meta.url),Cr=()=>f(()=>import("./duckdb-B-POlv-Q.js"),[],import.meta.url).then(e=>e.DuckDBClient),Pr=()=>f(()=>import("https://cdn.jsdelivr.net/npm/echarts/+esm"),[],import.meta.url),Or=()=>f(()=>import("https://cdn.jsdelivr.net/npm/htl/+esm"),[],import.meta.url),Ar=()=>f(()=>import("https://cdn.jsdelivr.net/npm/htl/+esm"),[],import.meta.url).then(e=>e.html),Sr=()=>f(()=>import("https://cdn.jsdelivr.net/npm/htl/+esm"),[],import.meta.url).then(e=>e.svg),$r=()=>f(()=>import("./inputs-DoHVubAa.js"),__vite__mapDeps([0,1]),import.meta.url),Ir=()=>f(()=>import("./leaflet-CiJEybLC.js"),[],import.meta.url),qr=()=>f(()=>import("./mapboxgl-C94UFoDx.js"),[],import.meta.url).then(e=>e.default),Nr=()=>f(()=>import("./md-NiJwoD0S.js"),[],import.meta.url).then(e=>e.md),Lr=()=>f(()=>import("./mermaid-CWCaPgOr.js"),[],import.meta.url).then(e=>e.mermaid),Dr=()=>f(()=>import("https://cdn.jsdelivr.net/npm/@observablehq/plot/+esm"),[],import.meta.url),Rr=()=>f(()=>import("https://cdn.jsdelivr.net/npm/react/+esm"),[],import.meta.url),jr=()=>f(()=>import("https://cdn.jsdelivr.net/npm/react-dom/+esm"),[],import.meta.url),Mr=()=>f(()=>import("./tex-BE43Lb2g.js"),[],import.meta.url).then(e=>e.tex),Fr=()=>f(()=>import("https://cdn.jsdelivr.net/npm/topojson-client/+esm"),[],import.meta.url),Vr=()=>f(()=>import("./vega-lite-ClQwpDTB.js"),[],import.meta.url).then(e=>e.vl),Br=Object.freeze(Object.defineProperty({__proto__:null,Arrow:Er,DuckDBClient:Cr,Inputs:$r,L:Ir,Plot:Dr,React:Rr,ReactDOM:jr,_:wr,aq:xr,d3:zr,dot:kr,duckdb:Tr,echarts:Pr,htl:Or,html:Ar,mapboxgl:qr,md:Nr,mermaid:Lr,svg:Sr,tex:Mr,topojson:Fr,vl:Vr},Symbol.toStringTag,{value:"Module"}));ye.resolve=He;function ye(...e){return e.length===1?import(He(e[0])):Promise.all(e.map(t=>ye(t))).then(t=>Object.assign({},...t))}function Ur(e){const t=e.split("/"),o=e.startsWith("@")?[t.shift(),t.shift()].join("/"):t.shift(),r=o.indexOf("@",1),l=r>0?o.slice(0,r):o,n=r>0?o.slice(r):"",i=t.length>0?`/${t.join("/")}`:"";return{name:l,range:n,path:i}}function He(e){const t=String(e);if(Yr(t)||Gr(t))return t;const{name:o,range:r,path:l}=Ur(t);return`https://cdn.jsdelivr.net/npm/${o}${r}${l+(Hr(l)||Wr(l)?"":"/+esm")}`}function Yr(e){return/^\w+:/.test(e)}function Gr(e){return/^(\.\/|\.\.\/|\/)/.test(e)}function Hr(e){return/(\.\w*)$/.test(e)}function Wr(e){return/(\/)$/.test(e)}const Jr=()=>w(_("aapl.csv")),Kr=()=>w(_("alphabet.csv")),Zr=()=>w(_("cars.csv")),Xr=()=>w(_("citywages.csv")),Qr=()=>w(_("diamonds.csv")),el=()=>w(_("flare.csv")),tl=()=>w(_("industries.csv")),ol=()=>sl(_("miserables.json")),rl=()=>w(_("olympians.csv")),ll=()=>w(_("penguins.csv")),nl=()=>w(_("pizza.csv")),il=()=>w(_("weather.csv"));function _(e){return`https://cdn.jsdelivr.net/npm/@observablehq/sample-datasets/${e}`}async function sl(e){const t=await fetch(e);if(!t.ok)throw new Error(`unable to fetch ${e}: status ${t.status}`);return t.json()}async function al(e){const t=await fetch(e);if(!t.ok)throw new Error(`unable to fetch ${e}: status ${t.status}`);return t.text()}async function w(e,t){const[o,r]=await Promise.all([al(e),f(()=>import("https://cdn.jsdelivr.net/npm/d3-dsv/+esm"),[],import.meta.url)]);return r.csvParse(o,r.autoType)}const cl=Object.freeze(Object.defineProperty({__proto__:null,aapl:Jr,alphabet:Kr,cars:Zr,citywages:Xr,diamonds:Qr,flare:el,industries:tl,miserables:ol,olympians:rl,penguins:ll,pizza:nl,weather:il},Symbol.toStringTag,{value:"Module"})),ul=document.querySelector("main")??document.body,dl={now:()=>Fe(),width:()=>Ve(ul),DatabaseClient:()=>he,FileAttachment:()=>de,Generators:()=>Ho,Interpreter:()=>Ge,Mutable:()=>Be,DOM:()=>mr,require:()=>ye,__ojs_observer:()=>()=>new _r,...Br,...cl};class fl{constructor(t=dl){Object.defineProperty(this,"runtime",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"main",{enumerable:!0,configurable:!0,writable:!0,value:void 0});const o=new Ae({...t,__ojs_runtime:()=>o});this.runtime=Object.assign(o,{fileAttachments:er}),this.main=o.module()}define(t,o,r){Jo(this.main,t,o,r)}}const Z=new fl;Z.runtime;const pl=Z.main,v=Z.define.bind(Z);pl.constructor.prototype.defines=function(e){return this._scope.has(e)||this._builtins.has(e)||this._runtime._builtin._scope.has(e)};v({root:document.getElementById("cell-43"),expanded:[],variables:[]},{id:43,body:e=>e`
graph module {
  rankdir=TD
  viewport="1000,450"
  size=13
  height=0.1
  layout="dot"
  node [shape="rect" height="0.5" width="0.9" color="lavender" fontsize="18" fontname="Avenir"]
  edge [color="gray"]

  # Relationships

  nbcli -- {automata,clearbuff,gen,sclang,tmux,sfor,window,histo,qr,qrec,rnr,rsr,rpg,count,timer,rand,randx,morph,morph0,morpha,vert,frag,o,ofx,omods,orcac} [style="filled" color="ghostwhite"]

  s -- sigv [style="filled" color="lavender"]
  sigv -- osc [style="filled" color="lavender"]

  osc -- {aio,b0,bfg,cv,fpic,geo,grain,"graph",lfo,light,lz,lttp,markov,midi,model,monde,nature,new,nurbs,particles,plato,proc,rossler,shady,sketch,sky,som,specs,spk,synth,terra,typo,wave,wrld,zap} [style="filled" color="gold"]

  osc -- {new,zap,markov,lfo} [style="filled" color="gold"]
  count -- timer [style="filled" color="lavender"]
  gen -- {count,timer,sfor,automata} [style="filled" color="lavender"]
  {automata,clearbuff,gen,sfor,window,histo,qr,qrec,rnr,rsr,rpg,count,timer,rand,randx,morph,morph0,morpha,vert,frag,o} -- sigv [style="filled" color="lavender"]
  orcac -- omods [style="filled" color="lavender"]

  aio -- {grain,wave,spk,midi,synth} [style="filled" color="deeppink"]
  {nature,qrec} -- {aio,wrld} [style="filled" color="lavender"]

  rnr -- {rsr,rpg,rand,randx} [style="filled" color="lavender"]
  rsr -- {rnr,rpg,rand,randx} [style="filled" color="lavender"]
  qr -- rpg [style="filled" color="lavender"]

  wrld -- {fx,camera,monde,movie,biomes} [style="filled" color="steelblue1"]
  fx -- {monde,biomes} [style="filled" color="steelblue1"]

  rpg -- morph [style="filled" color="lavender"]
  {morph0,morpha} -- morph [style="filled" color="lavender"]
  {morph,morph0} -- {geo,plato} [style="filled" color="lavender"]
  {morph0,morpha} -- grain [style="filled" color="lavender"]

  {eca,som} -- fpic [style="filled" color="steelblue1"]

  monde -- movie [style="filled" color="steelblue1"]

  histo -- clearbuff [style="filled" color="lavender"]
  window -- sigv [style="filled" color="lavender"]
  window -- histo [style="filled" color="lavender"]

  {frag,vert} -- shady [style="filled" color="lavender"]
  model -- b0 [style="filled" color="steelblue1"]

  {aio,grain,lttp,midi,nature,spk,synth,wave} -- tilde [style="filled" color="deeppink"]{b0,bfg,fpic,geo,"graph",light,lz,model,monde,nurbs,particles,plato,proc,rossler,shady,sketch,sky,som,specs,terra,typo,wrld} -- tilde [style="filled" color="steelblue1"]

  # Core

  tilde [style="filled" color="gold2"]
  aio [style="filled" color="deeppink" fontcolor="white"]
  automata [style="filled" color="ghostwhite"]
  b0 [style="filled" color="steelblue3" fontcolor="azure1"]
  bfg [style="filled" color="steelblue1" fontcolor="azure1"]
  biomes [style="filled" color="skyblue1" fontcolor="lightskyblue4"]
  camera [style="filled" color="steelblue1" fontcolor="azure1"]
  clearbuff [style="filled" color="ghostwhite"]
  count [style="filled" color="ghostwhite"]
  cv [style="filled" color="gold2"]
  eca [style="filled" color="steelblue1" fontcolor="azure1"]
  fpic [style="filled" color="steelblue1" fontcolor="azure1"]
  frag [style="filled" color="ghostwhite"]
  fx [style="filled" color="steelblue1" fontcolor="azure1"]
  gen [style="filled" color="ghostwhite"]
  geo [style="filled" color="steelblue3" fontcolor="azure1"]
  grain [style="filled" color="deeppink" fontcolor="white"]
  "graph" [style="filled" color="steelblue1" fontcolor="azure1"]
  histo [style="filled" color="ghostwhite"]
  lfo [style="filled" color="gold2"]
  light [style="filled" color="steelblue1" fontcolor="azure1"]
  lz [style="filled" color="steelblue3" fontcolor="azure1"]
  lttp [style="filled" color="deeppink" fontcolor="white"]
  markov [style="filled" color="gold2"]
  midi [style="filled" color="deeppink" fontcolor="white"]
  model [style="filled" color="steelblue3" fontcolor="azure1"]
  monde [style="filled" color="skyblue1" fontcolor="lightskyblue4"]
  morph [style="filled" color="ghostwhite"]
  morph0 [style="filled" color="ghostwhite"]
  morpha [style="filled" color="ghostwhite"]
  movie [style="filled" color="steelblue1" fontcolor="azure1"]
  nature [style="filled" color="deeppink" fontcolor="white"]
  new [style="filled" color="gold2"]
  nurbs [style="filled" color="steelblue1" fontcolor="azure1"]
  o [style="filled" color="ghostwhite"]
  ofx
  omods [style="filled" color="ghostwhite"]
  orcac
  osc [style="filled" color="gold2"]
  particles [style="filled" color="steelblue3" fontcolor="azure1"]
  plato [style="filled" color="steelblue3" fontcolor="azure1"]
  proc [style="filled" color="steelblue3" fontcolor="azure1"]
  qr [style="filled" color="ghostwhite"]
  qrec [style="filled" color="ghostwhite"]
  rand [style="filled" color="ghostwhite"]
  randx [style="filled" color="ghostwhite"]
  rnr [style="filled" color="ghostwhite"]
  rossler [style="filled" color="steelblue3" fontcolor="azure1"]
  rpg [style="filled" color="ghostwhite"]
  rsr [style="filled" color="ghostwhite"]
  s [style="filled" color="lavender"]
  sclang
  sfor [style="filled" color="ghostwhite"]
  shady [style="filled" color="steelblue1" fontcolor="azure1"]
  sigv [style="filled" color="lavender"]
  sketch [style="filled" color="steelblue1" fontcolor="azure1"]
  sky [style="filled" color="steelblue1" fontcolor="azure1"]
  som [style="filled" color="steelblue1" fontcolor="azure1"]
  specs [style="filled" color="steelblue1" fontcolor="azure1"]
  spk [style="filled" color="deeppink" fontcolor="white"]
  synth [style="filled" color="deeppink" fontcolor="white"]
  terra [style="filled" color="steelblue3" fontcolor="azure1"]
  timer [style="filled" color="ghostwhite"]
  tmux
  typo [style="filled" color="steelblue3" fontcolor="azure1"]
  vert [style="filled" color="ghostwhite"]
  wave [style="filled" color="deeppink" fontcolor="white"]
  window [style="filled" color="ghostwhite"]
  wrld [style="filled" color="steelblue1" fontcolor="azure1"]
  zap [style="filled" color="gold2"]
}
`,inputs:["dot"],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});v({root:document.getElementById("cell-78"),expanded:[],variables:[]},{id:78,body:e=>e`
graph module {
  rankdir=TD
  viewport="1000,350"
  size=13
  height=0.1
  layout="dot"
  node [shape="rect" height="0.5" width="0.9" color="lavender" fontsize="18" fontname="Avenir"]
  edge [color="gray"]

  # Relationships

  nbcli -- {automata,clearbuff,gen,sclang,tmux,sfor,window,histo,qr,qrec,rnr,rsr,rpg,count,timer,rand,randx,morph,morph0,morpha,vert,frag,o,ofx,omods,orcac} [style="filled" color="ghostwhite"]
  nbcli [style="filled" color="ghostwhite"]

  s -- sigv [style="filled" color="lavender"]

  count -- timer [style="filled" color="lavender"]
  gen -- {count,timer,sfor,automata} [style="filled" color="lavender"]
  {automata,clearbuff,gen,sfor,window,histo,qr,qrec,rnr,rsr,rpg,count,timer,rand,randx,morph,morph0,morpha,vert,frag,o} -- sigv [style="filled" color="lavender"]
  orcac -- omods [style="filled" color="lavender"]

  rnr -- {rsr,rpg,rand,randx} [style="filled" color="lavender"]
  rsr -- {rnr,rpg,rand,randx} [style="filled" color="lavender"]
  qr -- rpg [style="filled" color="lavender"]

  rpg -- morph [style="filled" color="lavender"]
  {morph0,morpha} -- morph [style="filled" color="lavender"]

  histo -- clearbuff [style="filled" color="lavender"]
  window -- sigv [style="filled" color="lavender"]
  window -- histo [style="filled" color="lavender"]

}
`,inputs:["dot"],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});v({root:document.getElementById("cell-92"),expanded:[],variables:[]},{id:92,body:e=>e`
graph module {
  rankdir=TD
  viewport="1000,500"
  size=13
  height=0.1
  layout="dot"
  node [shape="rect" height="0.5" width="0.9" color="lavender" fontsize="18" fontname="Avenir"]
  edge [color="gray"]

  # Relationships

  nbcli [style="filled" color="ghostwhite"]
  s [style="filled" color="lavender"]
  sigv [style="filled" color="lavender"]
  osc,cv,lfo,markov,new,zap,tilde [style="filled" color="gold"]

  nbcli -- s [style="filled" color="ghostwhite"]

  s -- sigv [style="filled" color="lavender"]
  sigv -- osc [style="filled" color="lavender"]

  count -- timer [style="filled" color="lavender"]
  gen -- {count,timer,sfor,automata} [style="filled" color="lavender"]
  {automata,clearbuff,gen,sfor,window,histo,qr,qrec,rnr,rsr,rpg,count,timer,rand,randx,morph,morph0,morpha,vert,frag,o} -- sigv [style="filled" color="lavender"]
  orcac -- omods [style="filled" color="lavender"]

  rnr -- {rsr,rpg,rand,randx} [style="filled" color="lavender"]
  rsr -- {rnr,rpg,rand,randx} [style="filled" color="lavender"]
  qr -- rpg [style="filled" color="lavender"]

  rpg -- morph [style="filled" color="lavender"]
  {morph0,morpha} -- morph [style="filled" color="lavender"]

  histo -- clearbuff [style="filled" color="lavender"]
  window -- sigv [style="filled" color="lavender"]
  window -- histo [style="filled" color="lavender"]

  osc -- {cv,lfo,markov,new,zap,tilde} [style="filled" color="gold"]

  {osc,cv,lfo,markov,new,zap} -- tilde [style="filled" color="gold"]

}
`,inputs:["dot"],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});v({root:document.getElementById("cell-89"),expanded:[],variables:[]},{id:89,body:e=>e`
graph spatial {
  rankdir=TD
  viewport="1000,350"
  size=13
  height=0.1
  layout="dot"
  node [shape="rect" height="0.5" width="0.9" color="lavender" fontsize="18" fontname="Avenir"]
  edge [color="gray"]

  # Relationships

  nbcli [style="filled" color="ghostwhite"]
  nbcli -- {rpg,morph,morph0,morpha,vert,frag} [style="filled" color="ghostwhite"]
  sigv,s [style="filled" color="lavender"]
  osc,cv,lfo,markov,new,zap,tilde [style="filled" color="gold"]
  geo,lz,particles,proc,b0,model,terra,rossler,typo,plato [style="filled" color="steelblue3" fontcolor="white"]
  bfg,fpic,"graph",light,monde,nurbs,particles,shady,sketch,sky,som,specs,wrld [style="filled" color="steelblue1" fontcolor="white"]
  monde,biomes [style="filled" color="skyblue1" fontcolor="slategray"]
  fx,camera,movie [style="filled" color="steelblue1" fontcolor="white"]
  eca,som [style="filled" color="steelblue1" fontcolor="white"]

  nbcli -- s [style="filled" color="ghostwhite"]

  s -- sigv [style="filled" color="lavender"]
  sigv -- osc [style="filled" color="lavender"]

  wrld -- {fx,camera,monde,movie,biomes} [style="filled" color="steelblue1"]
  fx -- {monde,biomes} [style="filled" color="steelblue1"]

  rpg -- morph [style="filled" color="lavender"]
  {morph0,morpha} -- morph [style="filled" color="lavender"]
  {morph,morph0} -- {geo,plato} [style="filled" color="lavender"]

  {eca,som} -- fpic [style="filled" color="steelblue1"]

  monde -- movie [style="filled" color="steelblue1"]

  {frag,vert} -- shady [style="filled" color="lavender"]
  model -- b0 [style="filled" color="steelblue1"]

  osc -- {cv,lfo,markov,new,zap,tilde} [style="filled" color="gold"]
  osc -- {b0,bfg,fpic,geo,"graph",light,lz,model,monde,nurbs,particles,plato,proc,rossler,shady,sketch,sky,som,specs,terra,typo,wrld} [style="filled" color="gold"]

  {geo,lz,particles,proc,b0,model,terra,rossler,typo,plato} -- tilde [style="filled" color="steelblue3"]
  {bfg,fpic,"graph",light,monde,nurbs,particles,shady,sketch,sky,som,specs,wrld} -- tilde [style="filled" color="steelblue1"]
  {monde,biomes} -- tilde [style="filled" color="skyblue1"]
  {fx,camera,movie,eca,som} -- tilde [style="filled" color="steelblue1"]
  {cv,lfo,markov,new,zap} -- tilde [style="filled" color="gold"]
}
`,inputs:["dot"],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});v({root:document.getElementById("cell-90"),expanded:[],variables:[]},{id:90,body:e=>e`
graph sonic {
  rankdir=TD
  viewport="450,450"
  size=6
  height=0.1
  layout="dot"
  node [shape="rect" height="0.5" width="0.9" color="lavender" fontsize="18" fontname="Avenir"]
  edge [color="gray"]

  # Relationships

  nbcli [style="filled" color="ghostwhite"]
  sigv,s [style="filled" color="lavender"]
  osc,cv,lfo,markov,new,zap,tilde [style="filled" color="gold"]
  aio,grain,lttp,midi,nature,spk,synth,wave [style="filled" color="deeppink" fontcolor="white"]

  nbcli -- s [style="filled" color="ghostwhite"]
  nbcli -- {qrec,rpg,morph0,morpha,rnr,rsr,rpg} [style="filled" color="ghostwhite"]

  {qrec,rpg,morph0,morpha,rnr,rsr,rpg} -- sigv [style="filled" color="ghostwhite"]

  s -- sigv [style="filled" color="lavender"]
  sigv -- osc [style="filled" color="lavender"]

  aio -- {grain,wave,spk,midi,synth} [style="filled" color="deeppink"]
  {nature,qrec} -- aio [style="filled" color="lavender"]

  rnr -- {rsr,rpg,rand,randx} [style="filled" color="lavender"]
  rsr -- {rnr,rpg,rand,randx} [style="filled" color="lavender"]
  qr -- rpg [style="filled" color="lavender"]

  {morph0,morpha} -- grain [style="filled" color="lavender"]

  osc -- {cv,lfo,markov,new,zap,tilde} [style="filled" color="gold"]
  osc -- {aio,grain,lttp,midi,nature,spk,synth,wave} [style="filled" color="gold"]

  {aio,grain,lttp,midi,nature,spk,synth,wave} -- tilde [style="filled" color="deeppink"]
  {cv,lfo,markov,new,zap} -- tilde [style="filled" color="gold"]

}
`,inputs:["dot"],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});v({root:document.getElementById("cell-116"),expanded:[],variables:[]},{id:116,body:e=>e`
digraph ANIM {
rankdir=TD
viewport="250,150"
size=3
height=0.1
layout="dot"
node [shape="rect" height="0.5" width="0.9" color="lavender" fontsize="18" fontname="Avenir"]
edge [color="gray"]

geo,lz,proc,b0,model,plato [style="filled" color="steelblue3" fontcolor="ghostwhite"]
b0 -> model [style="filled" color="steelblue1"]
turn,scaleto,moveto,rotateto,ease,easefunc [style="filled" color="ghostwhite"]
osc [style="filled" color="gold"]

osc -> {geo,lz,proc,b0,model,plato} [style="filled" color="steelblue3"]
{turn,scaleto,moveto,rotateto,ease,easefunc} -> "\`"
"\`" -> osc

turn [xlabel="t"]
scaleto [xlabel="s"]
moveto [xlabel="m"]
rotateto [xlabel="r"]
ease [xlabel="e"]
easefunc [xlabel="f"]

"\`" [xlabel="ANIM"]

}
`,inputs:["dot"],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});v({root:document.getElementById("cell-117"),expanded:[],variables:[]},{id:117,body:e=>e`
digraph LIGHTS {
rankdir=TD
viewport="250,150"
size=2.5
height=0.1
layout="osage"
node [shape="rect" height="0.5" width="0.9" color="lavender" fontsize="18" fontname="Avenir"]
edge [color="gray"]

geo,lz,proc,b0,model,plato [style="filled" color="steelblue3" fontcolor="ghostwhite"]
b0 -> model [style="filled" color="steelblue1"]
newlight,enable,activate,visible,randiffu,diffu,delete [style="filled" color="ghostwhite"]
osc,new [style="filled" color="gold"]

newlight -> new [style="filled" color="gold"]
new -> osc [style="filled" color="gold"]
osc -> {geo,lz,proc,b0,model,plato} [style="filled" color="steelblue3"]
{newlight,enable,activate,visible,randiffu,diffu,delete} -> "º"
"º" -> osc

newlight [xlabel="n"]
enable [xlabel="e"]
activate [xlabel="a"]
visible [xlabel="v"]
randiffu [xlabel="r"]
diffu [xlabel="c"]
delete [xlabel="d"]
"º" [xlabel="LIGHTS"]
}
`,inputs:["dot"],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});v({root:document.getElementById("cell-118"),expanded:[],variables:[]},{id:118,body:e=>e`
digraph TRANS {
rankdir=TD
viewport="250,150"
size=2.5
height=0.1
layout="twopi"
node [shape="rect" height="0.5" width="0.9" color="lavender" fontsize="18" fontname="Avenir"]
edge [color="gray"]

geo,lz,proc,b0,model,plato [style="filled" color="steelblue3" fontcolor="ghostwhite"]
b0 -> model [style="filled" color="steelblue1"]
morph,shape,dimension,delement,oaio,polymode,cullface,pointsize,linewidth,procperiod,procscale [style="filled" color="ghostwhite"]
osc [style="filled" color="gold"]

osc -> {geo,lz,proc,b0,model,plato} [style="filled" color="steelblue3"]
{morph,shape,dimension,delement,oaio,polymode,cullface,pointsize,linewidth,procperiod,procscale} -> "^"
"^" -> osc

morph [xlabel="o"]
shape [xlabel="s"]
dimension [xlabel="d"]
delement [xlabel="e"]
oaio [xlabel="a"]
polymode [xlabel="p"]
cullface [xlabel="c"]
pointsize [xlabel="0"]
linewidth [xlabel="1"]
procperiod [xlabel="f"]
procscale [xlabel="x"]
"^" [xlabel="TRANS"]
}
`,inputs:["dot"],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});v({root:document.getElementById("cell-119"),expanded:[],variables:[]},{id:119,body:e=>e`
digraph SERIAL {
rankdir=TD
viewport="250,150"
size=2.5
height=0.1
layout="twopi"
node [shape="rect" height="0.5" width="0.9" color="lavender" fontsize="18" fontname="Avenir"]
edge [color="gray"]

cv,lfo,new,zap,markov,tilde [style="filled" color="gold"]
osc,new [style="filled" color="gold"]
cvolt,cinput,aio [style="filled" color="deeppink" fontcolor="ghostwhite"]
newobj,zapobj,fobj,clear,exit,cmde,tset,tsrc,tlink,ttail [style="filled" color="gold"]

new -> osc [style="filled" color="gold"]
osc -> {cv,lfo,new,zap,markov,tilde,aio} [style="filled" color="gold"]
{gpiol,gpioa,mcu,copen} -> "∆" [style="filled" color="gold"]
{cvolt,cinput} -> "∆" [style="filled" color="deeppink"]
"∆" -> osc

cvolt [xlabel="v"]
cinput [xlabel="i"]
gpiopl [xlabel="p"]
gpioa [xlabel="a"]
mcu [xlabel="m"]
copen [xlabel="c"]
"∆" [xlabel="SERIAL"]
}
`,inputs:["dot"],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});v({root:document.getElementById("cell-120"),expanded:[],variables:[]},{id:120,body:e=>e`
digraph CHAO {
rankdir=TD
viewport="250,150"
size=2.5
height=0.1
layout="twopi"
node [shape="rect" height="0.5" width="0.9" color="lavender" fontsize="18" fontname="Avenir"]
edge [color="gray"]

lz,lzsamp,lzact,lzpdim,lzeq,lzaval,lzbval,lzcval,lzdtval [style="filled" color="steelblue3" fontcolor="ghostwhite"]
osc,new,lzdata [style="filled" color="gold"]

new -> osc [style="filled" color="gold"]
osc -> lz [style="filled" color="gold"]
lzdata -> "∞" [style="filled" color="gold"]
{lzsamp,lzact,lzpdim,lzeq,lzaval,lzbval,lzcval,lzdtval} -> "∞" [style="filled" color="steelblue3"]
"∞" -> osc

lzsamp [xlabel="s"]
lzact [xlabel="1"]
lzpdim [xlabel="p"]
lzeq [xlabel="e"]
lzaval [xlabel="a"]
lzbval [xlabel="b"]
lzcval [xlabel="c"]
lzdtval [xlabel="d"]
lzdata [xlabel="i"]
"∞" [xlabel="CHAO"]
}
`,inputs:["dot"],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});v({root:document.getElementById("cell-121"),expanded:[],variables:[]},{id:121,body:e=>e`
digraph BUFFER {
rankdir=TD
viewport="250,150"
size=3.5
height=0.1
layout="dot"
node [shape="rect" height="0.5" width="0.9" color="lavender" fontsize="18" fontname="Avenir"]
edge [color="gray"]

spk,startb,loopbuff,pbuff,rbuff,selecs,midicon [style="filled" color="deeppink" fontcolor="ghostwhite"]
osc,new,setbuff [style="filled" color="gold"]

new -> osc [style="filled" color="gold"]
osc -> spk [style="filled" color="gold"]
setbuff -> "ß" [style="filled" color="gold"]
{startb,loopbuff,pbuff,rbuff,selecs,midicon} -> "ß" [style="filled" color="deeppink"]
"ß" -> osc

startb [xlabel="#"]
loopbuff [xlabel="l"]
setbuff [xlabel="s"]
pbuff [xlabel="p"]
rbuff [xlabel="r"]
selecs [xlabel="o"]
midicon [xlabel="m"]
"ß" [xlabel="BUFFER"]
}
`,inputs:["dot"],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});v({root:document.getElementById("cell-122"),expanded:[],variables:[]},{id:122,body:e=>e`
digraph MAT {
rankdir=TD
viewport="250,150"
size=3
height=0.1
layout="twopi"
node [shape="rect" height="0.5" width="0.9" color="lavender" fontsize="18" fontname="Avenir"]
edge [color="gray"]

geo,lz,proc,b0,model,plato [style="filled" color="steelblue3" fontcolor="ghostwhite"]
b0 -> model [style="filled" color="steelblue1"]
material,diffuse,heightmap,normals,emission,bfg,fog,drawgrp,texgrp [style="filled" color="ghostwhite"]
osc [style="filled" color="gold"]

osc -> {geo,lz,proc,b0,model,plato} [style="filled" color="steelblue3"]
{material,diffuse,heightmap,normals,emission,bfg,fog,drawgrp,texgrp} -> "|"
"|" -> osc

material [xlabel="m"]
diffuse [xlabel="d"]
heightmap [xlabel="h"]
normals [xlabel="n"]
emission [xlabel="e"]
bfg [xlabel="b"]
fog [xlabel="f"]
drawgrp [xlabel="g"]
texgrp [xlabel="t"]
"|" [xlabel="MAT"]
}

`,inputs:["dot"],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});v({root:document.getElementById("cell-123"),expanded:[],variables:[]},{id:123,body:e=>e`
digraph AUDIO {
rankdir=TD
viewport="250,150"
size=2.85
height=0.1
layout="fdp"
node [shape="rect" height="0.5" width="0.9" color="lavender" fontsize="18" fontname="Avenir"]
edge [color="gray"]

aio,grain,lttp,midi,nature,spk,synth,wave [style="filled" color="deeppink" fontcolor="ghostwhite"]
pkthresh,pkramp,autoaio,aiopwr,naturemo,naturemu,naturepk,naturebi,naturesen,vstplug,vstopen,vstprg [style="filled" color="ghostwhite"]
osc [style="filled" color="gold"]

aio -> {grain,wave,spk,midi,synth} [style="filled" color="deeppink"]
nature -> aio [style="filled" color="deeppink"]

osc -> {aio,grain,lttp,midi,nature,spk,synth,wave} [style="filled" color="deeppink"]
{pkthresh,pkramp,autoaio,aiopwr,naturemo,naturemu,naturepk,naturebi,naturesen,vstplug,vstopen,vstprg} -> "_"
"_" -> osc

pkthresh [xlabel="o"]
pkramp [xlabel="s"]
autoaio [xlabel="d"]
aiopwr [xlabel="e"]
naturemo [xlabel="a"]
naturemu [xlabel="p"]
naturepk [xlabel="c"]
naturebi [xlabel="0"]
naturesen [xlabel="1"]
vstplug [xlabel="f"]
vstopen [xlabel="x"]
vstprg 
"_" [xlabel="AUDIO"]
}
`,inputs:["dot"],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});v({root:document.getElementById("cell-124"),expanded:[],variables:[]},{id:124,body:e=>e`
digraph SYSTEM {
rankdir=TD
viewport="250,150"
size=2.5
height=0.1
layout="osage"
node [shape="rect" height="0.5" width="0.9" color="lavender" fontsize="18" fontname="Avenir"]
edge [color="gray"]

geo,lz,proc,b0,model,plato [style="filled" color="steelblue3" fontcolor="ghostwhite"]
osc,new [style="filled" color="gold"]
matmo,wrldb,wrldz,fxpass,wrldp [style="filled" color="steelblue3" fontcolor="ghostwhite"]
newobj,zapobj,fobj,clear,exit,cmde,tset,tsrc,tlink,ttail [style="filled" color="gold"]

new -> osc [style="filled" color="gold"]
osc -> {geo,lz,proc,b0,model,plato} [style="filled" color="steelblue3"]
{newobj,zapobj,fobj,clear,exit,cmde,tset,tsrc,tlink,ttail} -> "…" [style="filled" color="gold"]
{matmo,wrldb,wrldz,fxpass,wrldp} -> "…" [style="filled" color="steelblue3"]
"…" -> osc

newobj [xlabel="n"]
zapobj [xlabel="z"]
fobj [xlabel="f"]
clear [xlabel="c"]
matmo [xlabel="m"]
exit [xlabel="x"]
wrldb [xlabel="b"]
wrldz [xlabel="e"]
fxpass [xlabel="q"]
wrldp [xlabel="w"]
cmde [xlabel="s"]
tset [xlabel="t"]
tsrc [xlabel="t"]
tlink [xlabel="t"]
ttail [xlabel="t"]
"…" [xlabel="SYSTEM"]
}
`,inputs:["dot"],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:void 0,automutable:void 0});export{f as _};
