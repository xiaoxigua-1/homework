(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{4873:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/homework4",function(){return a(5080)}])},4634:function(e,n,a){"use strict";var t=a(5893),l=a(7294),i=a(979),r=function(e){var n=e.name,a=e.value,r=e.regex,s=(0,l.useState)(!1),o=s[0],c=s[1];return(0,t.jsxs)("div",{className:"flex justify-between mt-2",children:[n?(0,t.jsxs)("span",{className:"whitespace-nowrap",children:[n,":"]}):(0,t.jsx)("div",{className:"flex-grow"}),(0,t.jsx)("div",{className:"w-[320px]",children:(0,t.jsx)(i.II,{isInvalid:o,defaultValue:a,errorBorderColor:"crimson",type:"text",size:"sm",onChange:function(e){c(!!r&&!(null==r?void 0:r.test(e.target.value)))}})})]})};n.Z=r},5080:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return em}});var t=a(5893),l=a(5675),i=a.n(l),r=a(4634),s=a(639),o=a(979),c=a(7294),d=a(8387),u=a(9251),m=a(7277),p=a(1755),h=a(5820),f=a(4520),v=a(3234),x=a(4040),y=a(5314),b=a(6734),k={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};(0,m.m$)("span",{baseStyle:k}).displayName="VisuallyHidden",(0,m.m$)("input",{baseStyle:k}).displayName="VisuallyHiddenInput";var w=!1,j=null,g=!1,E=new Set,C="undefined"!=typeof window&&null!=window.navigator&&/^Mac/.test(window.navigator.platform);function N(e,n){E.forEach(a=>a(e,n))}function _(e){var n;g=!0,!(e.metaKey||!C&&e.altKey||e.ctrlKey)&&(j="keyboard",N("keyboard",e))}function S(e){j="pointer",("mousedown"===e.type||"pointerdown"===e.type)&&(g=!0,N("pointer",e))}function M(e){e.target!==window&&e.target!==document&&(g||(j="keyboard",N("keyboard",e)),g=!1)}function D(){g=!1}function I(){return"pointer"!==j}function L(e){!function(){if("undefined"==typeof window||w)return;let{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...n){g=!0,e.apply(this,n)},document.addEventListener("keydown",_,!0),document.addEventListener("keyup",_,!0),window.addEventListener("focus",M,!0),window.addEventListener("blur",D,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",S,!0),document.addEventListener("pointermove",S,!0),document.addEventListener("pointerup",S,!0)):(document.addEventListener("mousedown",S,!0),document.addEventListener("mousemove",S,!0),document.addEventListener("mouseup",S,!0)),w=!0}(),e(I());let n=()=>e(I());return E.add(n),()=>{E.delete(n)}}var[$,B]=(0,d.k)({name:"CheckboxGroupContext",strict:!1}),q=(...e)=>e.filter(Boolean).join(" "),K=e=>e?"":void 0;function Z(...e){return function(n){e.some(e=>(null==e||e(n),null==n?void 0:n.defaultPrevented))}}var A=(0,m.m$)(p.E.svg);function T(e){return c.createElement(A,{width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e},c.createElement("polyline",{points:"1.5 6 4.5 9 10.5 1"}))}function G(e){return c.createElement(A,{width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4},...e},c.createElement("line",{x1:"21",x2:"3",y1:"12",y2:"12"}))}function O({open:e,children:n}){return c.createElement(h.M,{initial:!1},e&&c.createElement(p.E.div,{variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},n))}function R(e){let{isIndeterminate:n,isChecked:a,...t}=e;return c.createElement(O,{open:a||n},c.createElement(n?G:T,{...t}))}function z(e){e.preventDefault(),e.stopPropagation()}var P=(0,m.m$)("span",{baseStyle:{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0}}),V=(0,m.m$)("label",{baseStyle:{cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"}}),F=(0,m.Gp)(function(e,n){let a=B(),t={...a,...e},l=(0,m.jC)("Checkbox",t),i=(0,f.Lr)(e),{spacing:r="0.5rem",className:s,children:o,iconColor:d,iconSize:p,icon:h=c.createElement(R,null),isChecked:w,isDisabled:j=null==a?void 0:a.isDisabled,onChange:g,inputProps:E,...C}=i,N=w;(null==a?void 0:a.value)&&i.value&&(N=a.value.includes(i.value));let _=g;(null==a?void 0:a.onChange)&&i.value&&(_=function(...e){return function(n){e.forEach(e=>{null==e||e(n)})}}(a.onChange,g));let{state:S,getInputProps:M,getCheckboxProps:D,getLabelProps:I,getRootProps:$}=function(e={}){let n=(0,v.Kn)(e),{isDisabled:a,isReadOnly:t,isRequired:l,isInvalid:i,id:r,onBlur:s,onFocus:o,"aria-describedby":d}=n,{defaultChecked:m,isChecked:p,isFocusable:h,onChange:f,isIndeterminate:w,name:j,value:g,tabIndex:E,"aria-label":C,"aria-labelledby":N,"aria-invalid":_,...S}=e,M=function(e,n=[]){let a=Object.assign({},e);for(let t of n)t in a&&delete a[t];return a}(S,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),D=(0,u.W)(f),I=(0,u.W)(s),$=(0,u.W)(o),[B,q]=(0,c.useState)(!1),[A,T]=(0,c.useState)(!1),[G,O]=(0,c.useState)(!1),[R,P]=(0,c.useState)(!1);(0,c.useEffect)(()=>L(q),[]);let V=(0,c.useRef)(null),[F,U]=(0,c.useState)(!0),[W,H]=(0,c.useState)(!!m),X=void 0!==p,Y=X?p:W,J=(0,c.useCallback)(e=>{if(t||a){e.preventDefault();return}X||(Y?H(e.target.checked):H(!!w||e.target.checked)),null==D||D(e)},[t,a,Y,X,w,D]);(0,x.G)(()=>{V.current&&(V.current.indeterminate=Boolean(w))},[w]),(0,y.r)(()=>{a&&T(!1)},[a,T]),(0,x.G)(()=>{let e=V.current;(null==e?void 0:e.form)&&(e.form.onreset=()=>{H(!!m)})},[]);let Q=a&&!h,ee=(0,c.useCallback)(e=>{" "===e.key&&P(!0)},[P]),en=(0,c.useCallback)(e=>{" "===e.key&&P(!1)},[P]);(0,x.G)(()=>{if(!V.current)return;let e=V.current.checked!==Y;e&&H(V.current.checked)},[V.current]);let ea=(0,c.useCallback)((e={},n=null)=>{let l=e=>{A&&e.preventDefault(),P(!0)};return{...e,ref:n,"data-active":K(R),"data-hover":K(G),"data-checked":K(Y),"data-focus":K(A),"data-focus-visible":K(A&&B),"data-indeterminate":K(w),"data-disabled":K(a),"data-invalid":K(i),"data-readonly":K(t),"aria-hidden":!0,onMouseDown:Z(e.onMouseDown,l),onMouseUp:Z(e.onMouseUp,()=>P(!1)),onMouseEnter:Z(e.onMouseEnter,()=>O(!0)),onMouseLeave:Z(e.onMouseLeave,()=>O(!1))}},[R,Y,a,A,B,G,w,i,t]),et=(0,c.useCallback)((e={},n=null)=>({...M,...e,ref:(0,b.lq)(n,e=>{e&&U("LABEL"===e.tagName)}),onClick:Z(e.onClick,()=>{var e;F||(null==(e=V.current)||e.click(),requestAnimationFrame(()=>{var e;null==(e=V.current)||e.focus()}))}),"data-disabled":K(a),"data-checked":K(Y),"data-invalid":K(i)}),[M,a,Y,i,F]),el=(0,c.useCallback)((e={},n=null)=>({...e,ref:(0,b.lq)(V,n),type:"checkbox",name:j,value:g,id:r,tabIndex:E,onChange:Z(e.onChange,J),onBlur:Z(e.onBlur,I,()=>T(!1)),onFocus:Z(e.onFocus,$,()=>T(!0)),onKeyDown:Z(e.onKeyDown,ee),onKeyUp:Z(e.onKeyUp,en),required:l,checked:Y,disabled:Q,readOnly:t,"aria-label":C,"aria-labelledby":N,"aria-invalid":_?Boolean(_):i,"aria-describedby":d,"aria-disabled":a,style:k}),[j,g,r,J,I,$,ee,en,l,Y,Q,t,C,N,_,i,d,a,E]),ei=(0,c.useCallback)((e={},n=null)=>({...e,ref:n,onMouseDown:Z(e.onMouseDown,z),onTouchStart:Z(e.onTouchStart,z),"data-disabled":K(a),"data-checked":K(Y),"data-invalid":K(i)}),[Y,a,i]);return{state:{isInvalid:i,isFocused:A,isChecked:Y,isActive:R,isHovered:G,isIndeterminate:w,isDisabled:a,isReadOnly:t,isRequired:l},getRootProps:et,getCheckboxProps:ea,getInputProps:el,getLabelProps:ei,htmlProps:M}}({...C,isDisabled:j,isChecked:N,onChange:_}),A=(0,c.useMemo)(()=>({opacity:S.isChecked||S.isIndeterminate?1:0,transform:S.isChecked||S.isIndeterminate?"scale(1)":"scale(0.95)",fontSize:p,color:d,...l.icon}),[d,p,S.isChecked,S.isIndeterminate,l.icon]),T=(0,c.cloneElement)(h,{__css:A,isIndeterminate:S.isIndeterminate,isChecked:S.isChecked});return c.createElement(V,{__css:l.container,className:q("chakra-checkbox",s),...$()},c.createElement("input",{className:"chakra-checkbox__input",...M(E,n)}),c.createElement(P,{__css:l.control,className:"chakra-checkbox__control",...D()},T),o&&c.createElement(m.m$.span,{className:"chakra-checkbox__label",...I(),__css:{marginStart:r,...l.label}},o))});F.displayName="Checkbox";var U=(...e)=>e.filter(Boolean).join(" ");function W(e){let n=typeof e;return null!=e&&("object"===n||"function"===n)&&!Array.isArray(e)}var H=e=>e?"":void 0,X=e=>!!e||void 0;function Y(...e){return function(n){e.some(e=>(null==e||e(n),null==n?void 0:n.defaultPrevented))}}var[J,Q]=(0,d.k)({name:"RadioGroupContext",strict:!1}),ee=(0,m.Gp)((e,n)=>{let{colorScheme:a,size:t,variant:l,children:i,className:r,isDisabled:s,isFocusable:o,...d}=e,{value:u,onChange:p,getRootProps:h,name:f,htmlProps:v}=function(e={}){let{onChange:n,value:a,defaultValue:t,name:l,isDisabled:i,isFocusable:r,isNative:s,...o}=e,[d,u]=(0,c.useState)(t||""),m=void 0!==a,p=m?a:d,h=(0,c.useRef)(null),f=(0,c.useCallback)(()=>{let e=h.current;if(!e)return;let n="input:not(:disabled):checked",a=e.querySelector(n);if(a){a.focus();return}n="input:not(:disabled)";let t=e.querySelector(n);null==t||t.focus()},[]),v=(0,c.useId)(),x=`radio-${v}`,y=l||x,k=(0,c.useCallback)(e=>{var a;let t=e&&W(e)&&W(e.target)?e.target.value:e;m||u(t),null==n||n(String(t))},[n,m]),w=(0,c.useCallback)((e={},n=null)=>({...e,ref:(0,b.lq)(n,h),role:"radiogroup"}),[]),j=(0,c.useCallback)((e={},n=null)=>({...e,ref:n,name:y,[s?"checked":"isChecked"]:null!=p?e.value===p:void 0,onChange(e){k(e)},"data-radiogroup":!0}),[s,y,k,p]);return{getRootProps:w,getRadioProps:j,name:y,ref:h,focus:f,setValue:u,value:p,onChange:k,isDisabled:i,isFocusable:r,htmlProps:o}}(d),x=(0,c.useMemo)(()=>({name:f,size:t,onChange:p,colorScheme:a,value:u,variant:l,isDisabled:s,isFocusable:o}),[f,t,p,a,u,l,s,o]);return c.createElement(J,{value:x},c.createElement(m.m$.div,{...h(v,n),className:U("chakra-radio-group",r)},i))});ee.displayName="RadioGroup";var en={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function ea(e){e.preventDefault(),e.stopPropagation()}(0,m.m$)("span",{baseStyle:en}).displayName="VisuallyHidden",(0,m.m$)("input",{baseStyle:en}).displayName="VisuallyHiddenInput";var et=(0,m.Gp)((e,n)=>{let a=Q(),{onChange:t,value:l}=e,i=(0,m.jC)("Radio",{...a,...e}),r=(0,f.Lr)(e),{spacing:s="0.5rem",children:o,isDisabled:d=null==a?void 0:a.isDisabled,isFocusable:u=null==a?void 0:a.isFocusable,inputProps:p,...h}=r,x=e.isChecked;(null==a?void 0:a.value)!=null&&null!=l&&(x=a.value===l);let y=t;(null==a?void 0:a.onChange)&&null!=l&&(y=function(...e){return function(n){e.forEach(e=>{null==e||e(n)})}}(a.onChange,t));let b=(null==e?void 0:e.name)??(null==a?void 0:a.name),{getInputProps:k,getCheckboxProps:w,getLabelProps:j,getRootProps:g,htmlProps:E}=function(e={}){let{defaultChecked:n,isChecked:a,isFocusable:t,isDisabled:l,isReadOnly:i,isRequired:r,onChange:s,isInvalid:o,name:d,value:u,id:m,"data-radiogroup":p,"aria-describedby":h,...f}=e,x=`radio-${(0,c.useId)()}`,y=(0,v.NJ)(),b=Q(),k=y&&!(b||p)?y.id:x;k=m??k;let w=l??(null==y?void 0:y.isDisabled),j=i??(null==y?void 0:y.isReadOnly),g=r??(null==y?void 0:y.isRequired),E=o??(null==y?void 0:y.isInvalid),[C,N]=(0,c.useState)(!1),[_,S]=(0,c.useState)(!1),[M,D]=(0,c.useState)(!1),[I,$]=(0,c.useState)(!1),[B,q]=(0,c.useState)(Boolean(n)),K=void 0!==a,Z=K?a:B;(0,c.useEffect)(()=>L(N),[]);let A=(0,c.useCallback)(e=>{if(j||w){e.preventDefault();return}K||q(e.target.checked),null==s||s(e)},[K,w,j,s]),T=(0,c.useCallback)(e=>{" "===e.key&&$(!0)},[$]),G=(0,c.useCallback)(e=>{" "===e.key&&$(!1)},[$]),O=(0,c.useCallback)((e={},n=null)=>({...e,ref:n,"data-active":H(I),"data-hover":H(M),"data-disabled":H(w),"data-invalid":H(E),"data-checked":H(Z),"data-focus":H(_),"data-focus-visible":H(_&&C),"data-readonly":H(j),"aria-hidden":!0,onMouseDown:Y(e.onMouseDown,()=>$(!0)),onMouseUp:Y(e.onMouseUp,()=>$(!1)),onMouseEnter:Y(e.onMouseEnter,()=>D(!0)),onMouseLeave:Y(e.onMouseLeave,()=>D(!1))}),[I,M,w,E,Z,_,j,C]),{onFocus:R,onBlur:z}=y??{},P=(0,c.useCallback)((e={},n=null)=>{let a=w&&!t;return{...e,id:k,ref:n,type:"radio",name:d,value:u,onChange:Y(e.onChange,A),onBlur:Y(z,e.onBlur,()=>S(!1)),onFocus:Y(R,e.onFocus,()=>S(!0)),onKeyDown:Y(e.onKeyDown,T),onKeyUp:Y(e.onKeyUp,G),checked:Z,disabled:a,readOnly:j,required:g,"aria-invalid":X(E),"aria-disabled":X(a),"aria-required":X(g),"data-readonly":H(j),"aria-describedby":h,style:en}},[w,t,k,d,u,A,z,R,T,G,Z,j,g,E,h]),V=(e={},n=null)=>({...e,ref:n,onMouseDown:Y(e.onMouseDown,ea),onTouchStart:Y(e.onTouchStart,ea),"data-disabled":H(w),"data-checked":H(Z),"data-invalid":H(E)}),F=(e,n=null)=>({...e,ref:n,"data-disabled":H(w),"data-checked":H(Z),"data-invalid":H(E)});return{state:{isInvalid:E,isFocused:_,isChecked:Z,isActive:I,isHovered:M,isDisabled:w,isReadOnly:j,isRequired:g},getCheckboxProps:O,getInputProps:P,getLabelProps:V,getRootProps:F,htmlProps:f}}({...h,isChecked:x,isFocusable:u,isDisabled:d,onChange:y,name:b}),[C,N]=function(e,n){let a={},t={};for(let[l,i]of Object.entries(e))n.includes(l)?a[l]=i:t[l]=i;return[a,t]}(E,f.oE),_=w(N),S=k(p,n),M=j(),D=Object.assign({},C,g()),I={display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative",...i.container},$={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,...i.control},B={userSelect:"none",marginStart:s,...i.label};return c.createElement(m.m$.label,{className:"chakra-radio",...D,__css:I},c.createElement("input",{className:"chakra-radio__input",...S}),c.createElement(m.m$.span,{className:"chakra-radio__control",..._,__css:$}),o&&c.createElement(m.m$.span,{className:"chakra-radio__label",...M,__css:B},o))});et.displayName="Radio";var el=(...e)=>e.filter(Boolean).join(" "),ei=e=>e?"":void 0,er=(0,m.Gp)(function(e,n){let{children:a,placeholder:t,className:l,...i}=e;return c.createElement(m.m$.select,{...i,ref:n,className:el("chakra-select",l)},t&&c.createElement("option",{value:""},t),a)});er.displayName="SelectField";var es=(0,m.Gp)((e,n)=>{var a;let t=(0,m.jC)("Select",e),{rootProps:l,placeholder:i,icon:r,color:s,height:o,h:d,minH:u,minHeight:p,iconColor:h,iconSize:x,...y}=(0,f.Lr)(e),[b,k]=function(e,n){let a={},t={};for(let[l,i]of Object.entries(e))n.includes(l)?a[l]=i:t[l]=i;return[a,t]}(y,f.oE),w=(0,v.Yp)(k),j={paddingEnd:"2rem",...t.field,_focus:{zIndex:"unset",...null==(a=t.field)?void 0:a._focus}};return c.createElement(m.m$.div,{className:"chakra-select__wrapper",__css:{width:"100%",height:"fit-content",position:"relative",color:s},...b,...l},c.createElement(er,{ref:n,height:d??o,minH:u??p,placeholder:i,...w,__css:j},e.children),c.createElement(ed,{"data-disabled":ei(w.disabled),...(h||s)&&{color:h||s},__css:t.icon,...x&&{fontSize:x}},r))});es.displayName="Select";var eo=e=>c.createElement("svg",{viewBox:"0 0 24 24",...e},c.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),ec=(0,m.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),ed=e=>{let{children:n=c.createElement(eo,null),...a}=e,t=(0,c.cloneElement)(n,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return c.createElement(ec,{...a,className:"chakra-select__icon-wrapper"},(0,c.isValidElement)(n)?t:null)};ed.displayName="SelectIcon";var eu=function(e){var n=e.options,a=e.name,l=e.setValue;return(0,t.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,t.jsxs)("span",{className:"whitespace-nowrap",children:[a,":"]}),(0,t.jsx)("div",{className:"w-[320px]",children:(0,t.jsx)(es,{className:"w-28",size:"sm",onChange:function(e){return l?l(e.target.value):null},children:n.map(function(e){return(0,t.jsx)("option",{value:e,children:e},e)})})})]})},em=function(){var e=(0,c.useState)(""),n=e[0],a=e[1],l=(0,c.useState)("#444444"),d=l[0],u=l[1];return(0,t.jsxs)("div",{children:[(0,t.jsxs)(s.W2,{textAlign:"center",marginTop:10,maxW:"container.xl",children:[(0,t.jsx)("h1",{className:"font-bold text-4xl",children:"杏仁咪嚕"}),(0,t.jsx)("p",{style:{color:d},children:"杏仁咪嚕（日語：杏仁 ミル／あんにん みる Annin Miru），是一名台灣虛擬YouTuber、遊戲實況主，其頻道以遊戲實況、翻唱及直播為主。杏仁咪嚕為個人勢虛擬網紅，同時與Yahoo TV合作，在Yahoo TV上擁有自己的節目「咪嚕咪嚕杏期四」。"})]}),(0,t.jsxs)("div",{className:"flex flex-wrap mt-5 justify-center mx-5",children:[(0,t.jsxs)("div",{className:"flex-grow mx-2",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-yellow-500",children:"Profile"}),(0,t.jsx)(i(),{src:"/avatar.jpeg",className:"select-none m-auto",width:240,height:240,alt:"avatar"})]}),(0,t.jsxs)("div",{className:"flex-grow mx-2 max-w-xl",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-yellow-500",children:"個人資料"}),(0,t.jsx)(r.Z,{name:"性",value:""}),(0,t.jsx)(r.Z,{name:"名",value:""}),(0,t.jsx)(eu,{name:"性別",options:["男","女"],setValue:a}),(0,t.jsx)(r.Z,{name:"身高(cm)",value:""}),(0,t.jsx)(r.Z,{name:"體重(kg)",value:""}),(0,t.jsx)(r.Z,{name:"生日",value:""}),(0,t.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,t.jsx)("span",{className:"whitespace-nowrap",children:"生日:"}),(0,t.jsx)("div",{className:"w-[320px]",children:(0,t.jsx)(o.II,{placeholder:"Select Date and Time",size:"sm",type:"datetime-local"})})]}),(0,t.jsx)(r.Z,{name:"國籍",value:""}),(0,t.jsx)(eu,{name:"血型",options:["A","B","AB","O"]}),(0,t.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,t.jsx)("span",{className:"whitespace-nowrap",children:"興趣:"}),(0,t.jsxs)(s.Kq,{direction:"row",className:"w-[320px] justify-between",children:[(0,t.jsx)(F,{children:"偷"}),(0,t.jsx)(F,{children:"拐"}),(0,t.jsx)(F,{children:"搶"}),(0,t.jsx)(F,{children:"騙"})]})]})]}),(0,t.jsxs)("div",{className:"flex-grow mx-2 max-w-xl",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-yellow-500",children:"個人資料"}),(0,t.jsx)(r.Z,{name:"地址",value:""}),(0,t.jsxs)("div",{className:"flex flex-row",children:[(0,t.jsx)("div",{className:"flex-grow"}),(0,t.jsxs)(s.Kq,{direction:"row",className:"w-[320px] justify-between",children:[(0,t.jsx)(F,{children:"戶籍地址"}),(0,t.jsx)(F,{children:"通訊地址"})]})]}),(0,t.jsx)(r.Z,{name:"電話",value:"",regex:/^06(-[0-9]{3}){2}$/g}),(0,t.jsx)(r.Z,{name:"行動電話",value:"",regex:/^09[0-9]{2}(-[0-9]{3}){2}$/g}),(0,t.jsx)(r.Z,{name:"Email",value:"",regex:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/g}),(0,t.jsxs)("div",{className:"flex flex-row",children:[(0,t.jsx)("div",{className:"flex-grow",children:"社群網站:"}),(0,t.jsx)(ee,{children:(0,t.jsxs)(s.Kq,{direction:"row",className:"w-[320px] justify-between",children:[(0,t.jsx)(et,{value:"1",children:"FB"}),(0,t.jsx)(et,{value:"2",children:"IG"}),(0,t.jsx)(et,{value:"3",children:"TW"})]})})]}),(0,t.jsx)(r.Z,{value:""})]})]}),(0,t.jsxs)("div",{className:"flex flex-wrap mt-2 text-white",children:[(0,t.jsx)("div",{className:"flex-grow"}),(0,t.jsx)("button",{className:"flex-grow mx-5 bg-green-400 rounded-md p-1 min-w-[200px] mt-3",onClick:function(){return u("男"===n?"blue":"red")},children:"確定"}),(0,t.jsx)("button",{className:"flex-grow mx-5 bg-red-600 rounded-md p-1 min-w-[200px] mt-3",children:"取消"})]})]})}}},function(e){e.O(0,[771,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);