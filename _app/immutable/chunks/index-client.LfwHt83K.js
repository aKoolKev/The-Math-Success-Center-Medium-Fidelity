import{w as x,x as _,y as u,z as h,S as k,A as e,B as o,C as v,D as y,F as E}from"./runtime.D6Vdr8Ko.js";function i(t,s){return t===s||(t==null?void 0:t[k])===s}function A(t={},s,c,a){return x(()=>{var r,n;return _(()=>{r=n,n=[],u(()=>{t!==c(...n)&&(s(t,...n),r&&i(c(...r),t)&&s(null,...r))})}),()=>{h(()=>{n&&i(c(...n),t)&&s(null,...n)})}}),t}function B(t){e===null&&o(),v&&e.l!==null?d(e).m.push(t):y(()=>{const s=u(t);if(typeof s=="function")return s})}function S(t,s,{bubbles:c=!1,cancelable:a=!1}={}){return new CustomEvent(t,{detail:s,bubbles:c,cancelable:a})}function C(){const t=e;return t===null&&o(),(s,c,a)=>{var n;const r=(n=t.s.$$events)==null?void 0:n[s];if(r){const l=E(r)?r.slice():[r],f=S(s,c,a);for(const p of l)p.call(t.x,f);return!f.defaultPrevented}return!0}}function d(t){var s=t.l;return s.u??(s.u={a:[],b:[],m:[]})}export{A as b,C as c,B as o};