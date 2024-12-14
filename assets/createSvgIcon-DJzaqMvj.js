import{r as i,a7 as A,i as z,n as N,o as w,b as h,k as M,d as E,_ as m,j as y,e as j,h as k,a8 as F,a9 as U,y as V,a as B,A as D,v as G,a3 as O,x as _,aa as L}from"./index-CQvmm7r0.js";function W(...e){return e.reduce((o,t)=>t==null?o:function(...n){o.apply(this,n),t.apply(this,n)},()=>{})}function H(e,o=166){let t;function a(...n){const r=()=>{e.apply(this,n)};clearTimeout(t),t=setTimeout(r,o)}return a.clear=()=>{clearTimeout(t)},a}function J(e,o){return()=>null}function T(e){return e&&e.ownerDocument||document}function K(e){return T(e).defaultView||window}function Q(e,o){return()=>null}let x=0;function X(e){const[o,t]=i.useState(e),a=e||o;return i.useEffect(()=>{o==null&&(x+=1,t(`mui-${x}`))},[o]),a}const C=A.useId;function Y(e){if(C!==void 0){const o=C();return e??o}return X(e)}function Z(e,o,t,a,n){return null}function ee({controlled:e,default:o,name:t,state:a="value"}){const{current:n}=i.useRef(e!==void 0),[r,u]=i.useState(o),l=n?e:r,d=i.useCallback(s=>{n||u(s)},[]);return[l,d]}const R=e=>{let o;return e<1?o=5.11916*e**2:o=4.5*Math.log(e+1)+2,(o/100).toFixed(2)};function oe(e){return z("MuiSvgIcon",e)}N("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const te=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],ne=e=>{const{color:o,fontSize:t,classes:a}=e,n={root:["root",o!=="inherit"&&`color${h(o)}`,`fontSize${h(t)}`]};return k(n,oe,a)},ae=w("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.color!=="inherit"&&o[`color${h(t.color)}`],o[`fontSize${h(t.fontSize)}`]]}})(({theme:e,ownerState:o})=>{var t,a,n,r,u,l,d,s,v,c,f,g,p;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:o.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(t=e.transitions)==null||(a=t.create)==null?void 0:a.call(t,"fill",{duration:(n=e.transitions)==null||(n=n.duration)==null?void 0:n.shorter}),fontSize:{inherit:"inherit",small:((r=e.typography)==null||(u=r.pxToRem)==null?void 0:u.call(r,20))||"1.25rem",medium:((l=e.typography)==null||(d=l.pxToRem)==null?void 0:d.call(l,24))||"1.5rem",large:((s=e.typography)==null||(v=s.pxToRem)==null?void 0:v.call(s,35))||"2.1875rem"}[o.fontSize],color:(c=(f=(e.vars||e).palette)==null||(f=f[o.color])==null?void 0:f.main)!=null?c:{action:(g=(e.vars||e).palette)==null||(g=g.action)==null?void 0:g.active,disabled:(p=(e.vars||e).palette)==null||(p=p.action)==null?void 0:p.disabled,inherit:void 0}[o.color]}}),b=i.forwardRef(function(o,t){const a=M({props:o,name:"MuiSvgIcon"}),{children:n,className:r,color:u="inherit",component:l="svg",fontSize:d="medium",htmlColor:s,inheritViewBox:v=!1,titleAccess:c,viewBox:f="0 0 24 24"}=a,g=E(a,te),p=i.isValidElement(n)&&n.type==="svg",$=m({},a,{color:u,component:l,fontSize:d,instanceFontSize:o.fontSize,inheritViewBox:v,viewBox:f,hasSvgAsChild:p}),I={};v||(I.viewBox=f);const q=ne($);return y.jsxs(ae,m({as:l,className:j(q.root,r),focusable:"false",color:s,"aria-hidden":c?void 0:!0,role:c?"img":void 0,ref:t},I,g,p&&n.props,{ownerState:$,children:[p?n.props.children:n,c?y.jsx("title",{children:c}):null]}))});b.muiName="SvgIcon";function re(e,o){function t(a,n){return y.jsx(b,m({"data-testid":`${o}Icon`,ref:n},a,{children:e}))}return t.muiName=b.muiName,i.memo(i.forwardRef(t))}const le={configure:e=>{F.configure(e)}},ie=Object.freeze(Object.defineProperty({__proto__:null,capitalize:h,createChainedFunction:W,createSvgIcon:re,debounce:H,deprecatedPropType:J,isMuiElement:U,ownerDocument:T,ownerWindow:K,requirePropFactory:Q,setRef:V,unstable_ClassNameGenerator:le,unstable_useEnhancedEffect:B,unstable_useId:Y,unsupportedProp:Z,useControlled:ee,useEventCallback:D,useForkRef:G,useIsFocusVisible:O},Symbol.toStringTag,{value:"Module"}));function se(e){return z("MuiPaper",e)}N("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const ce=["className","component","elevation","square","variant"],ue=e=>{const{square:o,elevation:t,variant:a,classes:n}=e,r={root:["root",a,!o&&"rounded",a==="elevation"&&`elevation${t}`]};return k(r,se,n)},de=w("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],!t.square&&o.rounded,t.variant==="elevation"&&o[`elevation${t.elevation}`]]}})(({theme:e,ownerState:o})=>{var t;return m({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!o.square&&{borderRadius:e.shape.borderRadius},o.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},o.variant==="elevation"&&m({boxShadow:(e.vars||e).shadows[o.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${_("#fff",R(o.elevation))}, ${_("#fff",R(o.elevation))})`},e.vars&&{backgroundImage:(t=e.vars.overlays)==null?void 0:t[o.elevation]}))}),ve=i.forwardRef(function(o,t){const a=M({props:o,name:"MuiPaper"}),{className:n,component:r="div",elevation:u=1,square:l=!1,variant:d="elevation"}=a,s=E(a,ce),v=m({},a,{component:r,elevation:u,square:l,variant:d}),c=ue(v);return y.jsx(de,m({as:r,ownerState:v,className:j(c.root,n),ref:t},s))}),me=ve;var S={};const pe=L(ie);var P;function ge(){return P||(P=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=pe}(S)),S}export{me as P,K as a,re as b,W as c,H as d,Y as e,T as o,ge as r,ee as u};
