var bn=Array.isArray,qn=Array.from,Pn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Wt=Object.getOwnPropertyDescriptors,Fn=Object.prototype,Mn=Array.prototype,Xt=Object.getPrototypeOf;function Ln(t){return typeof t=="function"}const Hn=()=>{};function Yn(t){return t()}function Et(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,yt=4,Y=8,et=16,w=32,z=64,S=128,V=256,p=512,x=1024,b=2048,C=4096,j=8192,tn=16384,wt=32768,jn=65536,nn=1<<18,mt=1<<19,vt=Symbol("$state"),Bn=Symbol("");function Tt(t){return t===this.v}function rn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!rn(t,this.v)}function en(t){throw new Error("effect_in_teardown")}function an(){throw new Error("effect_in_unowned_derived")}function sn(t){throw new Error("effect_orphan")}function ln(){throw new Error("effect_update_depth_exceeded")}function Un(){throw new Error("hydration_failed")}function Vn(t){throw new Error("props_invalid_value")}function Gn(){throw new Error("state_descriptors_fixed")}function Kn(){throw new Error("state_prototype_fixed")}function un(){throw new Error("state_unsafe_local_read")}function on(){throw new Error("state_unsafe_mutation")}let J=!1;function $n(){J=!0}function at(t){return{f:0,v:t,reactions:null,equals:Tt,version:0}}function Zn(t){return gt(at(t))}function fn(t,n=!1){var e;const r=at(t);return n||(r.equals=At),J&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function zn(t,n=!1){return gt(fn(t,n))}function gt(t){return i!==null&&i.f&T&&(y===null?kn([t]):y.push(t)),t}function Jn(t,n){return st(t,Jt(()=>ft(t))),n}function st(t,n){return i!==null&&it()&&i.f&(T|et)&&(y===null||!y.includes(t))&&on(),_n(t,n)}function _n(t,n){return t.equals(n)||(t.v=n,t.version=Vt(),xt(t,x),it()&&u!==null&&u.f&p&&!(u.f&w)&&(_!==null&&_.includes(t)?(E(u,x),Q(u)):g===null?In([t]):g.push(t))),n}function xt(t,n){var r=t.reactions;if(r!==null)for(var e=it(),a=r.length,s=0;s<a;s++){var l=r[s],f=l.f;f&x||!e&&l===u||(E(l,n),f&(p|S)&&(f&T?xt(l,b):Q(l)))}}const Qn=1,Wn=2,Xn=16,tr=1,nr=2,rr=4,er=8,ar=16,sr=4,lr=1,ur=2,cn="[",vn="[!",pn="]",kt={},or=Symbol(),ir="http://www.w3.org/2000/svg";function It(t){console.warn("hydration_mismatch")}let I=!1;function fr(t){I=t}let d;function M(t){if(t===null)throw It(),kt;return d=t}function _r(){return M(R(d))}function cr(t){if(I){if(R(d)!==null)throw It(),kt;d=t}}function vr(t=1){if(I){for(var n=t,r=d;n--;)r=R(r);d=r}}function pr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===pn){if(t===0)return n;t-=1}else(r===cn||r===vn)&&(t+=1)}var e=R(n);n.remove(),n=e}}var pt,hn,St,Rt;function hr(){if(pt===void 0){pt=window,hn=document;var t=Element.prototype,n=Node.prototype;St=ct(n,"firstChild").get,Rt=ct(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function W(t=""){return document.createTextNode(t)}function X(t){return St.call(t)}function R(t){return Rt.call(t)}function dr(t,n){if(!I)return X(t);var r=X(d);if(r===null)r=d.appendChild(W());else if(n&&r.nodeType!==3){var e=W();return r==null||r.before(e),M(e),e}return M(r),r}function Er(t,n){if(!I){var r=X(t);return r instanceof Comment&&r.data===""?R(r):r}return d}function yr(t,n=1,r=!1){let e=I?d:t;for(;n--;)e=R(e);if(!I)return e;var a=e.nodeType;if(r&&a!==3){var s=W();return e==null||e.before(s),M(s),s}return M(e),e}function wr(t){t.textContent=""}function dn(t){var n=T|x;u===null?n|=S:u.f|=mt;const r={children:null,ctx:o,deps:null,equals:Tt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(i!==null&&i.f&T){var e=i;(e.children??(e.children=[])).push(r)}return r}function mr(t){const n=dn(t);return n.equals=At,n}function Ot(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?lt(e):P(e)}}}function Dt(t){var n,r=u;Z(t.parent);try{Ot(t),n=Gt(t)}finally{Z(r)}return n}function Nt(t){var n=Dt(t),r=(O||t.f&S)&&t.deps!==null?b:p;E(t,r),t.equals(n)||(t.v=n,t.version=Vt())}function lt(t){Ot(t),H(t,0),E(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ct(t){u===null&&i===null&&sn(),i!==null&&i.f&S&&an(),ot&&en()}function En(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var a=(t&z)!==0,s=u,l={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var f=D;try{ht(!0),B(l),l.f|=tn}catch(c){throw P(l),c}finally{ht(f)}}else n!==null&&Q(l);var m=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&mt)===0;if(!m&&!a&&e&&(s!==null&&En(l,s),i!==null&&i.f&T)){var A=i;(A.children??(A.children=[])).push(l)}return l}function Tr(t){const n=q(Y,null,!1);return E(n,p),n.teardown=t,n}function Ar(t){Ct();var n=u!==null&&(u.f&w)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:i})}else{var e=bt(t);return e}}function gr(t){return Ct(),ut(t)}function xr(t){const n=q(z,t,!0);return()=>{P(n)}}function bt(t){return q(yt,t,!1)}function kr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ut(()=>{t(),!e.ran&&(e.ran=!0,st(r.l.r2,!0),Jt(n))})}function Ir(){var t=o;ut(()=>{if(ft(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,b),F(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function ut(t){return q(Y,t,!0)}function Sr(t){return yn(t)}function yn(t,n=0){return q(Y|et|n,t,!0)}function Rr(t,n=!0){return q(Y|w,t,!0,n)}function qt(t){var n=t.teardown;if(n!==null){const r=ot,e=i;dt(!0),$(null);try{n.call(null)}finally{dt(r),$(e)}}}function Pt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)lt(n[r])}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function wn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&nn)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var s=e===a?null:R(e);e.remove(),e=s}r=!0}Ft(t,n&&!r),Pt(t),H(t,0),E(t,j);var l=t.transitions;if(l!==null)for(const m of l)m.stop();qt(t);var f=t.parent;f!==null&&f.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Or(t,n){var r=[];Lt(t,r,!0),mn(r,()=>{P(t),n&&n()})}function mn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function Lt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var a=e.next,s=(e.f&wt)!==0||(e.f&w)!==0;Lt(e,n,s?r:!1),e=a}}}function Dr(t){Ht(t,!0)}function Ht(t,n){if(t.f&C){F(t)&&B(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,a=(r.f&wt)!==0||(r.f&w)!==0;Ht(r,a?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}const Tn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let G=!1,K=!1,tt=[],nt=[];function Yt(){G=!1;const t=tt.slice();tt=[],Et(t)}function jt(){K=!1;const t=nt.slice();nt=[],Et(t)}function Nr(t){G||(G=!0,queueMicrotask(Yt)),tt.push(t)}function Cr(t){K||(K=!0,Tn(jt)),nt.push(t)}function An(){G&&Yt(),K&&jt()}function br(){throw new Error("invalid_default_snippet")}function gn(t){throw new Error("lifecycle_outside_component")}const Bt=0,xn=1;let U=Bt,L=!1,D=!1,ot=!1;function ht(t){D=t}function dt(t){ot=t}let k=[],N=0;let i=null;function $(t){i=t}let u=null;function Z(t){u=t}let y=null;function kn(t){y=t}let _=null,h=0,g=null;function In(t){g=t}let Ut=0,O=!1,o=null;function Vt(){return++Ut}function it(){return!J||o!==null&&o.l===null}function F(t){var l,f;var n=t.f;if(n&x)return!0;if(n&b){var r=t.deps,e=(n&S)!==0;if(r!==null){var a;if(n&V){for(a=0;a<r.length;a++)((l=r[a]).reactions??(l.reactions=[])).push(t);t.f^=V}for(a=0;a<r.length;a++){var s=r[a];if(F(s)&&Nt(s),e&&u!==null&&!O&&!((f=s==null?void 0:s.reactions)!=null&&f.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}e||E(t,p)}return!1}function Sn(t,n,r){throw t}function Gt(t){var _t;var n=_,r=h,e=g,a=i,s=O,l=y,f=o,m=t.f;_=null,h=0,g=null,i=m&(w|z)?null:t,O=!D&&(m&S)!==0,y=null,o=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(H(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!O)for(v=h;v<c.length;v++)((_t=c[v]).reactions??(_t.reactions=[])).push(t)}else c!==null&&h<c.length&&(H(t,h),c.length=h);return A}finally{_=n,h=r,g=e,i=a,O=s,y=l,o=f}}function Rn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(E(n,b),n.f&(S|V)||(n.f^=V),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Rn(t,r[e])}function B(t){var n=t.f;if(!(n&j)){E(t,p);var r=u;u=t;try{n&et?wn(t):Ft(t),Pt(t),qt(t);var e=Gt(t);t.teardown=typeof e=="function"?e:null,t.version=Ut}catch(a){Sn(a)}finally{u=r}}}function Kt(){N>1e3&&(N=0,ln()),N++}function $t(t){var n=t.length;if(n!==0){Kt();var r=D;D=!0;try{for(var e=0;e<n;e++){var a=t[e];a.f&p||(a.f^=p);var s=[];Zt(a,s),On(s)}}finally{D=r}}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|C))&&F(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}}function Dn(){if(L=!1,N>1001)return;const t=k;k=[],$t(t),L||(N=0)}function Q(t){U===Bt&&(L||(L=!0,queueMicrotask(Dn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|w)){if(!(r&p))return;n.f^=p}}k.push(n)}function Zt(t,n){var r=t.first,e=[];t:for(;r!==null;){var a=r.f,s=(a&w)!==0,l=s&&(a&p)!==0;if(!l&&!(a&C))if(a&Y){s?r.f^=p:F(r)&&B(r);var f=r.first;if(f!==null){r=f;continue}}else a&yt&&e.push(r);var m=r.next;if(m===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=m}for(var c=0;c<e.length;c++)f=e[c],n.push(f),Zt(f,n)}function zt(t){var n=U,r=k;try{Kt();const a=[];U=xn,k=a,L=!1,$t(r);var e=t==null?void 0:t();return An(),(k.length>0||a.length>0)&&zt(),N=0,e}finally{U=n,k=r}}async function qr(){await Promise.resolve(),zt()}function ft(t){var f;var n=t.f,r=(n&T)!==0;if(r&&n&j){var e=Dt(t);return lt(t),e}if(i!==null){y!==null&&y.includes(t)&&un();var a=i.deps;_===null&&a!==null&&a[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&u!==null&&u.f&p&&!(u.f&w)&&g.includes(t)&&(E(u,x),Q(u))}else if(r&&t.deps===null){var s=t,l=s.parent;l!==null&&!((f=l.deriveds)!=null&&f.includes(s))&&(l.deriveds??(l.deriveds=[])).push(s)}return r&&(s=t,F(s)&&Nt(s)),t.v}function Jt(t){const n=i;try{return i=null,t()}finally{i=n}}const Nn=~(x|b|p);function E(t,n){t.f=t.f&Nn|n}function Pr(t){return Qt().get(t)}function Fr(t,n){return Qt().set(t,n),n}function Qt(t){return o===null&&gn(),o.c??(o.c=new Map(Cn(o)||void 0))}function Cn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Mr(t,n=1){var r=+ft(t);return st(t,r+n),r}function Lr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(o.l={s:null,u:null,r1:[],r2:at(!1)})}function Hr(t){const n=o;if(n!==null){const l=n.e;if(l!==null){var r=u,e=i;n.e=null;try{for(var a=0;a<l.length;a++){var s=l[a];Z(s.effect),$(s.reaction),bt(s.fn)}}finally{Z(r),$(e)}}o=n.p,n.m=!0}return{}}function Yr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)rt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&rt(r)}}}function rt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{rt(t[e],n)}catch{}const r=Xt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wt(r);for(let a in e){const s=e[a].get;if(s)try{s.call(t)}catch{}}}}}export{M as $,o as A,gn as B,J as C,Ar as D,wt as E,bn as F,gr as G,Yn as H,Et as I,$n as J,mr as K,Fn as L,Mn as M,ir as N,at as O,Gn as P,ct as Q,u as R,vt as S,Kn as T,or as U,Xt as V,Dr as W,Or as X,_r as Y,vn as Z,pr as _,Hr as a,fr as a0,Vn as a1,jn as a2,rr as a3,At as a4,Mr as a5,Ln as a6,w as a7,z as a8,Z as a9,R as aA,it as aB,Tr as aC,X as aD,W as aE,rn as aF,et as aG,tn as aH,sr as aI,$ as aJ,It as aK,kt as aL,Jn as aM,nn as aN,cn as aO,lr as aP,ur as aQ,hr as aR,Un as aS,xr as aT,tr as aa,nr as ab,er as ac,ar as ad,fn as ae,Cr as af,Bn as ag,Wt as ah,hn as ai,zt as aj,Pn as ak,qr as al,Zn as am,Fr as an,br as ao,qn as ap,C as aq,_n as ar,Lt as as,wr as at,mn as au,pn as av,i as aw,Wn as ax,Qn as ay,Xn as az,yn as b,dr as c,Rr as d,P as e,Er as f,d as g,I as h,Pr as i,vr as j,ft as k,dn as l,kr as m,Hn as n,Ir as o,Lr as p,st as q,cr as r,yr as s,Sr as t,Yr as u,zn as v,bt as w,ut as x,Jt as y,Nr as z};