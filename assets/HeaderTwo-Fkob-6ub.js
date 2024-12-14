import{u as $,h as b,B as z,I as R,i as D,D as H,d as f,j as m,b as d,E as B,M as j,k as N,l as _,m as O,n as Q,e as E,T as P,P as C,L as p,o as A,p as I,q as F,r as G,s as U,A as V,t as q,v as X,w as h,x as Y,y as J,z as K,F as Z}from"./@mui-Csw87z9D.js";import{r}from"./react-dev62Y2W.js";import{C as ee,u as te,a as ae}from"./index-BbTa3VbI.js";import{L as u}from"./react-router-dom-D8gmtBAx.js";import{u as L}from"./react-i18next-C2mcZv1Q.js";import{u as W}from"./@emotion-HfzjR6I5.js";import{a as ne}from"./react-router-C6p7Y0lq.js";import"./@babel-aYS-HXSK.js";import"./react-is-DcfIKM1A.js";import"./clsx-B-dksMZM.js";import"./react-transition-group-BkCmV8E2.js";import"./react-dom-DdqnYRr0.js";import"./scheduler-CzFDRTuY.js";import"./swiper-BoGKMJQU.js";import"./@reduxjs-DOXiz0qh.js";import"./redux-DITMfSWq.js";import"./immer-BkdjC0q7.js";import"./reselect-BEFkisvr.js";import"./redux-thunk-ClJT1hhx.js";import"./react-redux-yZtbivP8.js";import"./use-sync-external-store-KXRVgxgj.js";import"./framer-motion-D_nEhxwi.js";import"./i18next-BkujY4Wd.js";import"./hoist-non-react-statics-DQogQWOa.js";import"./@remix-run-DyRdwddT.js";const M=["ar","en"];function re(){const[t,i]=L(),e=r.useContext(ee),a=$(),[n,l]=r.useState(null),[c,w]=r.useState(1),g=!!n,k=o=>{l(o.currentTarget)},S=(o,x,y)=>{w(x),l(null),s(y)},v=()=>{l(null)};function s(o){i.changeLanguage(o),localStorage.setItem("lng",o),i.language==="ar"?(a.direction="rtl",document.body.dir=i.dir()):(a.direction="ltr",document.body.dir=i.dir())}return React.createElement(b,{spacing:{xs:1.5,md:2},direction:"row",gap:1,alignItems:"center"},React.createElement(z,{flexGrow:1}),React.createElement("div",null,a.palette.mode==="light"?React.createElement(R,{onClick:()=>{localStorage.setItem("mode",a.palette.mode==="dark"?"light":"dark"),e.toggleColorMode()},color:"#fff"},React.createElement(D,{sx:{fontSize:"16px"}})):React.createElement(R,{onClick:()=>{localStorage.setItem("mode",a.palette.mode==="dark"?"light":"dark"),e.toggleColorMode()}},React.createElement(H,{sx:{fontSize:"16px"}}))),React.createElement("div",null,React.createElement(f,{component:"nav","aria-label":"Device settings",sx:{p:0,m:0}},React.createElement(m,{id:"lock-button","aria-haspopup":"listbox","aria-controls":"lock-menu","aria-label":"when device is locked","aria-expanded":g?"true":void 0,onClick:k,sx:{"&:hover":{cursor:"pointer",bgcolor:"none"},px:0}},React.createElement(d,{sx:{".MuiTypography-root":{fontSize:"11px"}},secondary:M[c]}),React.createElement(B,{sx:{fontSize:"18px"}}))),React.createElement(j,{id:"lock-menu",anchorEl:n,open:g,onClose:v,MenuListProps:{"aria-labelledby":"lock-button",role:"listbox"}},M.map((o,x)=>React.createElement(N,{sx:{fontSize:"13px",p:"3px  10px"},key:o,selected:x===c,onClick:y=>S(y,x,o)},o)))),React.createElement(_,{sx:{fontSize:"16px",cursor:"pointer"}}),React.createElement(O,{sx:{fontSize:"16px",mx:1,cursor:"pointer"}}),React.createElement(Q,{sx:{fontSize:"16px",cursor:"pointer"}}))}function T({title:t}){return React.createElement(E,{sx:{zIndex:20,display:"flex",alignItems:"center",position:"relative",cursor:"pointer",":hover .showPaperHover":{display:"block",cursor:"pointer"}}},React.createElement(P,null,t),React.createElement(B,null),React.createElement(E,{className:"showPaperHover",sx:{position:"absolute",left:"50%",transform:"translateX(-50%)",top:"100%",minWidth:"170px",display:"none"}},React.createElement(C,{sx:{mt:2}},React.createElement("nav",{"aria-label":"secondary mailbox folders"},React.createElement(f,null,React.createElement(p,{disablePadding:!0},React.createElement(m,{sx:{display:"flex",p:0,px:1.5}},React.createElement(d,{sx:{".MuiTypography-root":{fontSize:"15px",fontWeight:300}},primary:"Luigi Bormioli"}))),React.createElement(p,{disablePadding:!0,sx:{position:"relative",":hover .sub-link":{display:"block"}}},React.createElement(E,{className:"sub-link ",sx:{display:"none",position:"absolute",top:"-9%",left:"100%"}},React.createElement(C,{sx:{ml:1,minWidth:150}},React.createElement("nav",{"aria-label":"secondary mailbox folders"},React.createElement(f,null,React.createElement(p,{disablePadding:!0},React.createElement(m,{sx:{display:"flex",p:0,px:1.5}},React.createElement(d,{sx:{".MuiTypography-root":{fontSize:"15px",fontWeight:300}},primary:"Luigi Bormioli"})))))))),React.createElement(p,{disablePadding:!0},React.createElement(m,{sx:{display:"flex",p:0,px:1.5}},React.createElement(d,{sx:{".MuiTypography-root":{fontSize:"15px",fontWeight:300}},primary:"La Tavola"}))),React.createElement(p,{disablePadding:!0},React.createElement(m,{sx:{display:"flex",p:0,px:1.5}},React.createElement(d,{sx:{".MuiTypography-root":{fontSize:"15px",fontWeight:300}},primary:"LAVA"}))))))))}function oe(){const[t,i]=r.useState({top:!1});r.useState(null),r.useState(!0);const[e]=L();W();const a=(n,l)=>c=>{c.type==="keydown"&&(c.key==="Tab"||c.key==="Shift")||i({...t,[n]:l})};return React.createElement(A,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",py:1}},I("(min-width:1200px)")&&React.createElement(b,{gap:4,direction:"row",alignItems:"center"},React.createElement(P,{sx:{"&:hover":{borderBottom:"1px solid #000"}}},React.createElement(u,{to:"/whoWeAre",color:"inherit",title:e("Whaao we are")},"Who we are")),React.createElement(T,{title:e("Partners")}),React.createElement(T,{title:e("HORECA")}),React.createElement(u,null,"Retail"),React.createElement(u,{to:"contactUs"},"Contact us")),I("(max-width:1200px)")&&React.createElement(R,{onClick:a("top",!0)},React.createElement(F,null)),React.createElement(G,{sx:{".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper":{height:"100%"}},anchor:"top",open:t.top,onClose:a("top",!1)},React.createElement(z,{sx:{width:{xs:"350px",md:"750px"},mx:"auto",position:"relative",mt:6,pt:10}},React.createElement(R,{sx:{position:"absolute",top:"0",right:"2%",":hover":{rotate:"360deg",scale:"1.09",transition:".3s",color:"red"}},onClick:a("top",!1)},React.createElement(U,null)),[{mainLink:e`Who we are`,subLink:[e`Link`,e`Link`,e`Link`]},{mainLink:e`MegaMenu`,subLink:[e`Link`,e`Link`,e`Link`]},{mainLink:e`FullScreen`,subLink:[e`Link`,e`Link`,e`Link`]},{mainLink:e`pages`,subLink:[e`Link`,e`Link`,e`Link`]},{mainLink:e`UserAccount`,subLink:[e`Link`,e`Link`,e`Link`]},{mainLink:e`VendorAccount`,subLink:[e`Link`,e`Link`,e`Link`]}].map(n=>React.createElement(V,{elevation:0,sx:{bgcolor:"initial"},key:n},React.createElement(q,{expandIcon:React.createElement(X,null),"aria-controls":"panel1-content",id:"panel1-header"},n.mainLink),React.createElement(f,{sx:{py:0,px:0}},n.subLink.map(l=>React.createElement(p,{key:l},React.createElement(m,null,React.createElement(d,{primary:l}))))))))))}h(Y)(({theme:t})=>({"& .MuiBadge-badge":{right:-3,top:13,border:`2px solid ${t.palette.background.paper}`,padding:"0 4px"}}));const ie=h("div")(({theme:t})=>({flexGrow:.4,position:"relative",borderRadius:t.shape.borderRadius,border:"1px solid #777",marginRight:t.spacing(2),marginLeft:0,width:"270px",[t.breakpoints.down("sm")]:{height:"auto",width:"140px",margin:"auto"}})),le=h("div")(({theme:t})=>({padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"})),ce=h(J)(({theme:t})=>({color:"inherit","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:`calc(1em + ${t.spacing(4)})`,transition:t.transitions.create("width"),width:"100%",[t.breakpoints.up("md")]:{width:"20ch"}}}));function Ae(){const[t,i]=r.useState(!1);r.useState({right:!1}),r.useState(null),r.useState(0);const[e,a]=L(),n=W();ne(),e("Categories"),e("CAR"),e("cloths"),e("Electronics");const{gitID:l,renderData:c,removeFromCart:w,valueSearch:g,searchProduct:k,increaseCartQuantity:S,decreaseCartQuantity:v}=te();return ae("products"),r.useEffect(()=>{const s=()=>{window.pageYOffset>50?i(!0):i(!1)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),React.createElement(K,{elevation:t?2:0,position:"sticky",color:`${n.palette.mode==="dark","inherit"}`},React.createElement(A,null,React.createElement(b,{direction:"row",justifyContent:"space-between",alignItems:"center"},n.palette.mode==="dark"?React.createElement(u,{to:"/"},React.createElement("img",{className:"logoHeader",src:"./images/logo.png",alt:"logo",loading:"lazy",decoding:"async"}),"  "):React.createElement(u,{to:"/"}," ",React.createElement("img",{className:"logoHeader",src:"./images\\b770c444-ad28-4879-9405-9d68a5a0c217-removebg-preview.png",alt:"logo",loading:"lazy",decoding:"async"})," "),React.createElement(ie,{Search:!0,sx:{display:"flex",borderRadius:22,justifyContent:"space-between","&:focus":{border:"none"}}},React.createElement(E,{sx:{display:"flex",borderRadius:22,justifyContent:"space-between",borderColor:"red"}},a.language==="en"&&React.createElement(le,null,React.createElement(Z,null)),React.createElement(ce,{sx:{px:1},value:g,onChange:s=>k(s),placeholder:e("searchInput"),inputProps:{"aria-label":"search"}}))),React.createElement(re,null))),React.createElement(oe,null))}export{Ae as default};
