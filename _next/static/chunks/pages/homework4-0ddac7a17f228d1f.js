(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{4873:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/homework4",function(){return a(8880)}])},4634:function(e,s,a){"use strict";var l=a(5893),n=a(7294),t=a(979),i=function(e){var s=e.name,a=e.value,i=e.regex,r=e.setValue,x=e.defaultIsInvalid,c=(0,n.useState)(null!=x&&x),d=c[0],o=c[1];return(0,l.jsxs)("div",{className:"flex justify-between mt-2",children:[s?(0,l.jsxs)("span",{className:"whitespace-nowrap",children:[s,":"]}):(0,l.jsx)("div",{className:"flex-grow"}),(0,l.jsx)("div",{className:"w-[320px]",children:(0,l.jsx)(t.II,{isInvalid:d,defaultValue:a,errorBorderColor:"crimson",type:"text",size:"sm",onChange:function(e){o(!!i&&!(null==i?void 0:i.test(e.target.value))),r&&r(e.target.value)}})})]})};s.Z=i},5286:function(e,s,a){"use strict";var l=a(5893),n=a(7026),t=function(e){var s=e.options,a=e.name,t=e.setValue;return(0,l.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,l.jsxs)("span",{className:"whitespace-nowrap",children:[a,":"]}),(0,l.jsx)("div",{className:"w-[320px]",children:(0,l.jsx)(n.Ph,{className:"w-28",size:"sm",onChange:function(e){return t?t(e.target.value):null},children:s.map(function(e){return(0,l.jsx)("option",{value:e,children:e},e)})})})]})};s.Z=t},8880:function(e,s,a){"use strict";a.r(s);var l=a(5893),n=a(5675),t=a.n(n),i=a(4634),r=a(1184),x=a(639),c=a(979),d=a(1236),o=a(2588),u=a(5286),m=a(7294),j=function(){var e=(0,r.pm)(),s=(0,m.useState)(""),a=s[0],n=s[1],j=(0,m.useState)("#444444"),h=j[0],f=j[1],w=(0,m.useState)(""),v=w[0],p=w[1],N=(0,m.useState)(""),g=N[0],Z=N[1],b=(0,m.useState)(""),y=b[0],_=b[1],V=(0,m.useState)(""),I=V[0],S=V[1];return(0,l.jsxs)("div",{children:[(0,l.jsxs)(x.W2,{textAlign:"center",marginTop:10,maxW:"container.xl",children:[(0,l.jsx)("h1",{className:"font-bold text-4xl",children:"杏仁咪嚕"}),(0,l.jsx)("p",{style:{color:h},children:"杏仁咪嚕（日語：杏仁 ミル／あんにん みる Annin Miru），是一名台灣虛擬YouTuber、遊戲實況主，其頻道以遊戲實況、翻唱及直播為主。杏仁咪嚕為個人勢虛擬網紅，同時與Yahoo TV合作，在Yahoo TV上擁有自己的節目「咪嚕咪嚕杏期四」。"})]}),(0,l.jsxs)("div",{className:"flex flex-wrap mt-5 justify-center mx-5",children:[(0,l.jsxs)("div",{className:"flex-grow mx-2",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold text-yellow-500",children:"Profile"}),(0,l.jsx)(t(),{src:"/avatar.jpeg",className:"select-none m-auto",width:240,height:240,alt:"avatar"})]}),(0,l.jsxs)("div",{className:"flex-grow mx-2 max-w-xl",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold text-yellow-500",children:"個人資料"}),(0,l.jsx)(i.Z,{name:"性*",value:"",regex:/^.+$/,setValue:p}),(0,l.jsx)(i.Z,{name:"名*",value:"",regex:/^.+$/,setValue:Z}),(0,l.jsx)(u.Z,{name:"性別",options:["男","女"],setValue:n}),(0,l.jsx)(i.Z,{name:"身高(cm)*",value:"",regex:/^.+$/,setValue:_}),(0,l.jsx)(i.Z,{name:"體重(kg)*",value:"",regex:/^.+$/,setValue:S}),(0,l.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,l.jsx)("span",{className:"whitespace-nowrap",children:"生日:"}),(0,l.jsx)("div",{className:"w-[320px]",children:(0,l.jsx)(c.II,{placeholder:"Select Date and Time",size:"sm",type:"datetime-local"})})]}),(0,l.jsx)(i.Z,{name:"國籍",value:""}),(0,l.jsx)(u.Z,{name:"血型",options:["A","B","AB","O"]}),(0,l.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,l.jsx)("span",{className:"whitespace-nowrap",children:"興趣:"}),(0,l.jsxs)(x.Kq,{direction:"row",className:"w-[320px] justify-between",children:[(0,l.jsx)(d.XZ,{children:"偷"}),(0,l.jsx)(d.XZ,{children:"拐"}),(0,l.jsx)(d.XZ,{children:"搶"}),(0,l.jsx)(d.XZ,{children:"騙"})]})]})]}),(0,l.jsxs)("div",{className:"flex-grow mx-2 max-w-xl",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold text-yellow-500",children:"個人資料"}),(0,l.jsx)(i.Z,{name:"地址",value:""}),(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsx)("div",{className:"flex-grow"}),(0,l.jsxs)(x.Kq,{direction:"row",className:"w-[320px] justify-between",children:[(0,l.jsx)(d.XZ,{children:"戶籍地址"}),(0,l.jsx)(d.XZ,{children:"通訊地址"})]})]}),(0,l.jsx)(i.Z,{name:"電話",value:"",regex:/^06(-[0-9]{3}){2}$/g}),(0,l.jsx)(i.Z,{name:"行動電話",value:"",regex:/^09[0-9]{2}(-[0-9]{3}){2}$/g}),(0,l.jsx)(i.Z,{name:"Email",value:"",regex:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/g}),(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsx)("div",{className:"flex-grow",children:"社群網站:"}),(0,l.jsx)(o.Ee,{children:(0,l.jsxs)(x.Kq,{direction:"row",className:"w-[320px] justify-between",children:[(0,l.jsx)(o.Y8,{value:"1",children:"FB"}),(0,l.jsx)(o.Y8,{value:"2",children:"IG"}),(0,l.jsx)(o.Y8,{value:"3",children:"TW"})]})})]}),(0,l.jsx)(i.Z,{value:""})]})]}),(0,l.jsxs)("div",{className:"flex flex-wrap mt-2 text-white",children:[(0,l.jsx)("div",{className:"flex-grow"}),(0,l.jsx)("button",{className:"flex-grow mx-5 bg-green-400 rounded-md p-1 min-w-[200px] mt-3",onClick:function(){if(v&&g&&y&&I)f("男"===a?"blue":"red");else{var s=["姓","名","身高","體重"],l=[v,g,y,I];for(var n in l)l[n]||e({description:"".concat(s[n],"未輸入"),status:"warning"})}},children:"確定"}),(0,l.jsx)("button",{className:"flex-grow mx-5 bg-red-600 rounded-md p-1 min-w-[200px] mt-3",children:"取消"})]})]})};s.default=j}},function(e){e.O(0,[771,532,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);