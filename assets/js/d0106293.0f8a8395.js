"use strict";(self.webpackChunkunofficial_adb_book=self.webpackChunkunofficial_adb_book||[]).push([[214],{7942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,u=d["".concat(s,".").concat(k)]||d[k]||m[k]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(5882),r=(n(959),n(7942)),i=n(5869);const o={sidebar_position:3},l=void 0,s={unversionedId:"basics/connection",id:"basics/connection",title:"connection",description:"\x3c!--",source:"@site/docs/basics/connection.md",sourceDirName:"basics",slug:"/basics/connection",permalink:"/unofficial-adb-book/basics/connection",draft:!1,editUrl:"https://github.com/yume-chan/unofficial-adb-book/edit/main/docs/basics/connection.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"basics",previous:{title:"Packet Format",permalink:"/unofficial-adb-book/basics/packet"},next:{title:"Authentication",permalink:"/unofficial-adb-book/basics/authentication"}},c={},p=[{value:"<code>CNXN</code> Packet",id:"cnxn-packet",level:2},{value:"Protocol Version",id:"protocol-version",level:2},{value:"Device Banner",id:"device-banner",level:2},{value:"Sequence Diagram",id:"sequence-diagram",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connection"},"Connection"),(0,r.kt)("p",null,"In native ADB architecture, once ADB ",(0,r.kt)("strong",{parentName:"p"},"server")," detects a new device, it initiates a connection by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"CNXN")," ",(0,r.kt)("a",{parentName:"p",href:"/unofficial-adb-book/basics/packet"},"packet"),"."),(0,r.kt)("p",null,"After optional ",(0,r.kt)("a",{parentName:"p",href:"/unofficial-adb-book/basics/authentication"},"authentication"),", the ",(0,r.kt)("strong",{parentName:"p"},"daemon")," responses with a ",(0,r.kt)("inlineCode",{parentName:"p"},"CNXN")," packet to indicate success."),(0,r.kt)("h2",{id:"cnxn-packet"},(0,r.kt)("inlineCode",{parentName:"h2"},"CNXN")," Packet"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"command")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x4e584e43")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CNXN")," in UTF-8 encoding")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"arg0")),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#protocol-version"},"Protocol Version")),(0,r.kt)("td",{parentName:"tr",align:null},"Highest supported version number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"arg1")),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#protocol-version"},"Protocol Version")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum supported payload size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#device-banner"},"Device Banner")),(0,r.kt)("td",{parentName:"tr",align:null},"Device banner")))),(0,r.kt)("h2",{id:"protocol-version"},"Protocol Version"),(0,r.kt)("p",null,"ADB now has two versions, here are the differences:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version number"),(0,r.kt)("th",{parentName:"tr",align:null},"0x01000000"),(0,r.kt)("th",{parentName:"tr",align:null},"0x01000001"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Android version"),(0,r.kt)("td",{parentName:"tr",align:null},"<9"),(0,r.kt)("td",{parentName:"tr",align:null},">=9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max payload size in each packet"),(0,r.kt)("td",{parentName:"tr",align:null},"4 * 1024 bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"1024 * 1024 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Does not validate the ",(0,r.kt)("inlineCode",{parentName:"td"},"checksum")," field"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("p",null,"In the first upstream (",(0,r.kt)("strong",{parentName:"p"},"server")," to ",(0,r.kt)("strong",{parentName:"p"},"daemon"),") ",(0,r.kt)("inlineCode",{parentName:"p"},"CNXN")," packet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arg0")," field SHOULD contains this ",(0,r.kt)("strong",{parentName:"li"},"server"),"'s version (it can be lower, just will be slower)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arg1")," MUST NOT exceed the max payload size for that version in above table."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"checksum")," MUST NOT be omitted. The version of ",(0,r.kt)("strong",{parentName:"li"},"daemon")," is not yet to know. When connecting to an older version, it may still validate the ",(0,r.kt)("inlineCode",{parentName:"li"},"checksum")," can reject the connection.")),(0,r.kt)("p",null,"In the response (",(0,r.kt)("strong",{parentName:"p"},"daemon")," to ",(0,r.kt)("strong",{parentName:"p"},"server"),") ",(0,r.kt)("inlineCode",{parentName:"p"},"CNXN")," packet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arg0")," field SHOULD contains this ",(0,r.kt)("strong",{parentName:"li"},"daemon"),"'s version."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arg1")," MUST NOT exceed the max payload size for that version in above table."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"checksum")," can be omitted if the ",(0,r.kt)("strong",{parentName:"li"},"server"),"'s version is at least ",(0,r.kt)("inlineCode",{parentName:"li"},"0x01000001"),'. "Omit" means filling with anything, not removing the field entirely.')),(0,r.kt)("p",null,"After exchanging ",(0,r.kt)("inlineCode",{parentName:"p"},"CNXN")," packets, both sides pick the lowest version (whether can omit ",(0,r.kt)("inlineCode",{parentName:"p"},"checksum"),") and lowest max payload size to use in further packets."),(0,r.kt)("h2",{id:"device-banner"},"Device Banner"),(0,r.kt)("p",null,"Device banners describe device information and capabilities. It has the following format:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"DeviceBanner")," ",(0,r.kt)("strong",{parentName:"p"},":"),(0,r.kt)("br",null),"\n\u2003\u2003",(0,r.kt)("em",{parentName:"p"},"DeviceIdentifier")," ",(0,r.kt)("strong",{parentName:"p"},"::")," ",(0,r.kt)("em",{parentName:"p"},"ParameterList")," ",(0,r.kt)("strong",{parentName:"p"},"\\0")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"DeviceIdentifier")," ",(0,r.kt)("strong",{parentName:"p"},":"),(0,r.kt)("br",null),"\n\u2003\u2003",(0,r.kt)("strong",{parentName:"p"},"host"),(0,r.kt)("br",null),"\n\u2003\u2003",(0,r.kt)("strong",{parentName:"p"},"device"),(0,r.kt)("br",null),"\n\u2003\u2003",(0,r.kt)("strong",{parentName:"p"},"bootloader")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"ParameterList")," ",(0,r.kt)("strong",{parentName:"p"},":"),(0,r.kt)("br",null),"\n\u2003\u2003",(0,r.kt)("em",{parentName:"p"},"Parameter"),(0,r.kt)("br",null),"\n\u2003\u2003",(0,r.kt)("em",{parentName:"p"},"ParameterList")," ",(0,r.kt)("em",{parentName:"p"},"Parameter")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Parameter")," ",(0,r.kt)("strong",{parentName:"p"},":"),(0,r.kt)("br",null),"\n\u2003\u2003",(0,r.kt)("em",{parentName:"p"},"ParameterName")," ",(0,r.kt)("strong",{parentName:"p"},"=")," ",(0,r.kt)("em",{parentName:"p"},"ParameterValue")," ",(0,r.kt)("strong",{parentName:"p"},";")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"ParameterName")," ",(0,r.kt)("strong",{parentName:"p"},":"),(0,r.kt)("br",null),"\n\u2003\u2003any character except ",(0,r.kt)("strong",{parentName:"p"},"=")," ",(0,r.kt)("strong",{parentName:"p"},",")," ",(0,r.kt)("strong",{parentName:"p"},";")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"ParameterValue")," ",(0,r.kt)("strong",{parentName:"p"},":"),(0,r.kt)("br",null),"\n\u2003\u2003",(0,r.kt)("em",{parentName:"p"},"ParameterStringValue"),(0,r.kt)("br",null),"\n\u2003\u2003",(0,r.kt)("em",{parentName:"p"},"ParameterListValue")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"ParameterStringValue")," ",(0,r.kt)("strong",{parentName:"p"},":"),(0,r.kt)("br",null),"\n\u2003\u2003any character except ",(0,r.kt)("strong",{parentName:"p"},"=")," ",(0,r.kt)("strong",{parentName:"p"},",")," ",(0,r.kt)("strong",{parentName:"p"},";")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"ParameterListValue")," ",(0,r.kt)("strong",{parentName:"p"},":"),(0,r.kt)("br",null),"\n\u2003\u2003",(0,r.kt)("em",{parentName:"p"},"ParameterStringValue"),(0,r.kt)("br",null),"\n\u2003\u2003",(0,r.kt)("em",{parentName:"p"},"ParameterListValue")," ",(0,r.kt)("strong",{parentName:"p"},",")," ",(0,r.kt)("em",{parentName:"p"},"ParameterStringValue")),(0,r.kt)("p",null,"A device banner sent by ",(0,r.kt)("strong",{parentName:"p"},"server")," may look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"host::features=shell_v2,cmd,stat_v2,ls_v2,fixed_push_mkdir,apex,abb,fixed_push_symlink_timestamp,abb_exec,remount_shell,track_app,sendrecv_v2,sendrecv_v2_brotli,sendrecv_v2_lz4,sendrecv_v2_zstd,sendrecv_v2_dry_run_send;\\0\n")),(0,r.kt)("admonition",{title:"NULL Termination",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The trailing ",(0,r.kt)("inlineCode",{parentName:"p"},";")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"\\0")," are required in Android <9.")),(0,r.kt)("p",null,"A device banner sent by ",(0,r.kt)("strong",{parentName:"p"},"daemon")," may look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"device::ro.product.name=venus;ro.product.model=M2011K2C;ro.product.device=venus;features=sendrecv_v2_brotli,remount_shell,sendrecv_v2,abb_exec,fixed_push_mkdir,fixed_push_symlink_timestamp,abb,shell_v2,cmd,ls_v2,apex,stat_v2\n")),(0,r.kt)("h2",{id:"sequence-diagram"},"Sequence Diagram"),(0,r.kt)(i.Z,{sources:{light:"data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' contentStyleType='text/css' height='285.4167px' preserveAspectRatio='none' style='width:280px%3bheight:285px%3b' version='1.1' viewBox='0 0 280 285' width='280.2083px' zoomAndPan='magnify'%3e%3cdefs%3e%3clinearGradient id='g1wj194s6nvcv50' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2333B2E2'/%3e%3cstop offset='100%25' stop-color='%23009FDB'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%3e%3cline style='stroke:%23C2C2C2%3bstroke-width:1.0416666666666667%3bstroke-dasharray:5.0%2c5.0%3b' x1='79.1667' x2='79.1667' y1='57.2591' y2='113.4766'/%3e%3cline style='stroke:%23C2C2C2%3bstroke-width:1.0416666666666667%3bstroke-dasharray:1.0%2c4.0%3b' x1='79.1667' x2='79.1667' y1='113.4766' y2='173.8607'/%3e%3cline style='stroke:%23C2C2C2%3bstroke-width:1.0416666666666667%3bstroke-dasharray:5.0%2c5.0%3b' x1='79.1667' x2='79.1667' y1='173.8607' y2='230.0781'/%3e%3cline style='stroke:%23C2C2C2%3bstroke-width:1.0416666666666667%3bstroke-dasharray:5.0%2c5.0%3b' x1='227.0833' x2='227.0833' y1='57.2591' y2='113.4766'/%3e%3cline style='stroke:%23C2C2C2%3bstroke-width:1.0416666666666667%3bstroke-dasharray:1.0%2c4.0%3b' x1='227.0833' x2='227.0833' y1='113.4766' y2='173.8607'/%3e%3cline style='stroke:%23C2C2C2%3bstroke-width:1.0416666666666667%3bstroke-dasharray:5.0%2c5.0%3b' x1='227.0833' x2='227.0833' y1='173.8607' y2='230.0781'/%3e%3crect fill='url(%23g1wj194s6nvcv50)' height='45.8008' rx='10.4167' ry='10.4167' style='stroke:%2333B2E2%3bstroke-width:1.0416666666666667%3b' width='65.625' x='46.875' y='10.4167'/%3e%3ctext fill='white' font-family='%26quot%3bVerdana%26quot%3b' font-size='12.5' lengthAdjust='spacing' textLength='34.375' x='62.5' y='37.6444'%3eClient%3c/text%3e%3crect fill='url(%23g1wj194s6nvcv50)' height='45.8008' rx='10.4167' ry='10.4167' style='stroke:%2333B2E2%3bstroke-width:1.0416666666666667%3b' width='65.625' x='46.875' y='229.0365'/%3e%3ctext fill='white' font-family='%26quot%3bVerdana%26quot%3b' font-size='12.5' lengthAdjust='spacing' textLength='34.375' x='62.5' y='256.2642'%3eClient%3c/text%3e%3crect fill='url(%23g1wj194s6nvcv50)' height='45.8008' rx='10.4167' ry='10.4167' style='stroke:%2333B2E2%3bstroke-width:1.0416666666666667%3b' width='83.3333' x='185.4167' y='10.4167'/%3e%3ctext fill='white' font-family='%26quot%3bVerdana%26quot%3b' font-size='12.5' lengthAdjust='spacing' textLength='52.0833' x='201.0417' y='37.6444'%3eDaemon%3c/text%3e%3crect fill='url(%23g1wj194s6nvcv50)' height='45.8008' rx='10.4167' ry='10.4167' style='stroke:%2333B2E2%3bstroke-width:1.0416666666666667%3b' width='83.3333' x='185.4167' y='229.0365'/%3e%3ctext fill='white' font-family='%26quot%3bVerdana%26quot%3b' font-size='12.5' lengthAdjust='spacing' textLength='52.0833' x='201.0417' y='256.2642'%3eDaemon%3c/text%3e%3cpolygon fill='%23009FDB' points='214.5833%2c100.9766%2c225%2c105.1432%2c214.5833%2c109.3099%2c218.75%2c105.1432' style='stroke:%23009FDB%3bstroke-width:1.0416666666666667%3b'/%3e%3cline style='stroke:%23009FDB%3bstroke-width:3.125%3b' x1='79.6875' x2='220.8333' y1='105.1432' y2='105.1432'/%3e%3ctext fill='%235A5A5A' font-family='%26quot%3bVerdana%26quot%3b' font-size='12.5' lengthAdjust='spacing' textLength='83.3333' x='95.3125' y='91.7786'%3eCNXN (host::)%3c/text%3e%3ctext fill='white' font-family='%26quot%3bVerdana%26quot%3b' font-size='12.5' lengthAdjust='spacing' textLength='143.75' x='81.5104' y='147.996'%3eOptional Authentication%3c/text%3e%3cpolygon fill='%23009FDB' points='91.1458%2c207.1615%2c80.7292%2c211.3281%2c91.1458%2c215.4948%2c86.9792%2c211.3281' style='stroke:%23009FDB%3bstroke-width:1.0416666666666667%3b'/%3e%3cline style='stroke:%23009FDB%3bstroke-width:3.125%3b' x1='84.8958' x2='226.0417' y1='211.3281' y2='211.3281'/%3e%3ctext fill='%235A5A5A' font-family='%26quot%3bVerdana%26quot%3b' font-size='12.5' lengthAdjust='spacing' textLength='98.9583' x='105.7292' y='197.9635'%3eCNXN (device::)%3c/text%3e%3c!--SRC=%5bKop9ICrDLKZAAKrDBqgivE8gI2mgoKpEB4ZCAr5mpibCpIj14N99JCtDp-FYWaWfwDf1HQmKdFqY_1GqClABIwoiDBdqzFJy2qeoy_CISnGSIu6Mv06DI0G906Mu87f0kY7cm7Idf9Pb9gS2zGC0%5d--%3e%3c/g%3e%3c/svg%3e",dark:"data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' contentStyleType='text/css' height='254.1667px' preserveAspectRatio='none' style='width:298px%3bheight:254px%3b' version='1.1' viewBox='0 0 298 254' width='298.9583px' zoomAndPan='magnify'%3e%3cdefs/%3e%3cg%3e%3cline style='stroke:%23555555%3bstroke-width:1.0416666666666667%3bstroke-dasharray:5.0%2c5.0%3b' x1='86.4583' x2='86.4583' y1='51.0091' y2='100.9766'/%3e%3cline style='stroke:%23555555%3bstroke-width:1.0416666666666667%3bstroke-dasharray:1.0%2c4.0%3b' x1='86.4583' x2='86.4583' y1='100.9766' y2='155.1107'/%3e%3cline style='stroke:%23555555%3bstroke-width:1.0416666666666667%3bstroke-dasharray:5.0%2c5.0%3b' x1='86.4583' x2='86.4583' y1='155.1107' y2='205.0781'/%3e%3cline style='stroke:%23555555%3bstroke-width:1.0416666666666667%3bstroke-dasharray:5.0%2c5.0%3b' x1='248.9583' x2='248.9583' y1='51.0091' y2='100.9766'/%3e%3cline style='stroke:%23555555%3bstroke-width:1.0416666666666667%3bstroke-dasharray:1.0%2c4.0%3b' x1='248.9583' x2='248.9583' y1='100.9766' y2='155.1107'/%3e%3cline style='stroke:%23555555%3bstroke-width:1.0416666666666667%3bstroke-dasharray:5.0%2c5.0%3b' x1='248.9583' x2='248.9583' y1='155.1107' y2='205.0781'/%3e%3crect fill='%232A9FD6' height='39.5508' rx='4.1667' ry='4.1667' style='stroke:%2355B2DE%3bstroke-width:1.0416666666666667%3b' width='59.375' x='57.2917' y='10.4167'/%3e%3ctext fill='white' font-family='%26quot%3bVerdana%26quot%3b' font-size='12.5' lengthAdjust='spacing' textLength='34.375' x='69.7917' y='34.5194'%3eClient%3c/text%3e%3crect fill='%232A9FD6' height='39.5508' rx='4.1667' ry='4.1667' style='stroke:%2355B2DE%3bstroke-width:1.0416666666666667%3b' width='59.375' x='57.2917' y='204.0365'/%3e%3ctext fill='white' font-family='%26quot%3bVerdana%26quot%3b' font-size='12.5' lengthAdjust='spacing' textLength='34.375' x='69.7917' y='228.1392'%3eClient%3c/text%3e%3crect fill='%232A9FD6' height='39.5508' rx='4.1667' ry='4.1667' style='stroke:%2355B2DE%3bstroke-width:1.0416666666666667%3b' width='77.0833' x='210.4167' y='10.4167'/%3e%3ctext fill='white' font-family='%26quot%3bVerdana%26quot%3b' font-size='12.5' lengthAdjust='spacing' textLength='52.0833' x='222.9167' y='34.5194'%3eDaemon%3c/text%3e%3crect fill='%232A9FD6' height='39.5508' rx='4.1667' ry='4.1667' style='stroke:%2355B2DE%3bstroke-width:1.0416666666666667%3b' width='77.0833' x='210.4167' y='204.0365'/%3e%3ctext fill='white' font-family='%26quot%3bVerdana%26quot%3b' font-size='12.5' lengthAdjust='spacing' textLength='52.0833' x='222.9167' y='228.1392'%3eDaemon%3c/text%3e%3cpolygon fill='%232A9FD6' points='236.4583%2c88.4766%2c246.875%2c92.6432%2c236.4583%2c96.8099%2c240.625%2c92.6432' style='stroke:%232A9FD6%3bstroke-width:1.0416666666666667%3b'/%3e%3cline style='stroke:%232A9FD6%3bstroke-width:3.125%3b' x1='86.9792' x2='242.7083' y1='92.6432' y2='92.6432'/%3e%3ctext fill='white' font-family='%26quot%3bVerdana%26quot%3b' font-size='12.5' lengthAdjust='spacing' textLength='83.3333' x='99.4792' y='82.4036'%3eCNXN (host::)%3c/text%3e%3ctext fill='white' font-family='%26quot%3bVerdana%26quot%3b' font-size='12.5' lengthAdjust='spacing' textLength='143.75' x='96.0938' y='132.371'%3eOptional Authentication%3c/text%3e%3cpolygon fill='%232A9FD6' points='98.4375%2c182.1615%2c88.0208%2c186.3281%2c98.4375%2c190.4948%2c94.2708%2c186.3281' style='stroke:%232A9FD6%3bstroke-width:1.0416666666666667%3b'/%3e%3cline style='stroke:%232A9FD6%3bstroke-width:3.125%3b' x1='92.1875' x2='247.9167' y1='186.3281' y2='186.3281'/%3e%3ctext fill='white' font-family='%26quot%3bVerdana%26quot%3b' font-size='12.5' lengthAdjust='spacing' textLength='98.9583' x='109.8958' y='176.0885'%3eCNXN (device::)%3c/text%3e%3c!--SRC=%5bLOwn2i9044Jx_OeLBBGm7v12a0knaGIqiLtFnHnUTcEo4VBtNeWMjc_c3REoXbj6FzsqVy3m3D9HJorU-3MoU2uuqbIgcDEeFQxBewjFzHaWrIpuq94OkXXOx0yLnAqAm1BXRlybERhgMk6cqS7oV0jPbjMT1HMAU1ZJ6KaJD8EKmEBCzhBpi-_y3fwJ_m40%5d--%3e%3c/g%3e%3c/svg%3e"},mdxType:"ThemedImage46434120686501146"}))}m.isMDXComponent=!0}}]);