"use strict";(self.webpackChunkdoc_sdk=self.webpackChunkdoc_sdk||[]).push([[734],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=d(t),m=r,v=f["".concat(c,".").concat(m)]||f[m]||u[m]||l;return t?o.createElement(v,a(a({ref:n},s),{},{components:t})):o.createElement(v,a({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var d=2;d<l;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8215:function(e,n,t){var o=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(7294),r=t(9443);var l=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=t(6010),i="tabItem_1uMI",c="tabItemActive_2DSg";var d=function(e){var n,t=e.lazy,r=e.block,d=e.defaultValue,s=e.values,u=e.groupId,f=e.className,m=o.Children.toArray(e.children),v=null!=s?s:m.map((function(e){return{value:e.props.value,label:e.props.label}})),p=null!=d?d:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value,P=l(),g=P.tabGroupChoices,b=P.setTabGroupChoices,B=(0,o.useState)(p),E=B[0],h=B[1],y=[];if(null!=u){var _=g[u];null!=_&&_!==E&&v.some((function(e){return e.value===_}))&&h(_)}var O=function(e){var n=e.currentTarget,t=y.indexOf(n),o=v[t].value;h(o),null!=u&&(b(u,o),setTimeout((function(){var e,t,o,r,l,a,i,d;(e=n.getBoundingClientRect(),t=e.top,o=e.left,r=e.bottom,l=e.right,a=window,i=a.innerHeight,d=a.innerWidth,t>=0&&l<=d&&r<=i&&o>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c),setTimeout((function(){return n.classList.remove(c)}),2e3))}),150))},N=function(e){var n,t=null;switch(e.key){case"ArrowRight":var o=y.indexOf(e.target)+1;t=y[o]||y[0];break;case"ArrowLeft":var r=y.indexOf(e.target)-1;t=y[r]||y[y.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},f)},v.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":E===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:N,onFocus:O,onClick:O},null!=t?t:n)}))),t?(0,o.cloneElement)(m.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}},9443:function(e,n,t){var o=(0,t(7294).createContext)(void 0);n.Z=o},6174:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return f},default:function(){return v}});var o=t(7462),r=t(3366),l=(t(7294),t(3905)),a=t(5064),i=t(8215),c=["components"],d={},s="BP5S",u={unversionedId:"device/bp5s",id:"device/bp5s",isDocsHomePage:!1,title:"BP5S",description:"Android Doc",source:"@site/docs/device/bp5s.md",sourceDirName:"device",slug:"/device/bp5s",permalink:"/doc.sdk.ihealthlabs/docs/device/bp5s",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/device/bp5s.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BP5",permalink:"/doc.sdk.ihealthlabs/docs/device/bp5"},next:{title:"BP7",permalink:"/doc.sdk.ihealthlabs/docs/device/bp7"}},f=[{value:"APIs",id:"apis",children:[{value:"add and remove listener",id:"add-and-remove-listener",children:[]},{value:"start a measurement",id:"start-a-measurement",children:[]},{value:"cancel current measurement",id:"cancel-current-measurement",children:[]},{value:"get battery",id:"get-battery",children:[]},{value:"enable offline mode",id:"enable-offline-mode",children:[]},{value:"disable offline mode",id:"disable-offline-mode",children:[]},{value:"is enable offline mode",id:"is-enable-offline-mode",children:[]},{value:"get quantity of data stored in the bp5 device",id:"get-quantity-of-data-stored-in-the-bp5-device",children:[]},{value:"get data stored in the bp5 device",id:"get-data-stored-in-the-bp5-device",children:[]},{value:"disconnect device",id:"disconnect-device",children:[]},{value:"get all connected devices",id:"get-all-connected-devices",children:[]}]}],m={toc:f};function v(e){var n=e.components,t=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bp5s"},"BP5S"),(0,l.kt)(a.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"android",label:"Android",default:!0,mdxType:"TabItem"},(0,l.kt)("h4",{id:"android-doc"},"Android Doc")),(0,l.kt)(i.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,l.kt)("h4",{id:"ios-doc"},"iOS Doc")),(0,l.kt)(i.Z,{value:"reactnative",label:"React Native",mdxType:"TabItem"},"## Import BP5S Module",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  BP5SModule,\n  BPProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,l.kt)("h2",{id:"apis"},"APIs"),(0,l.kt)("h3",{id:"add-and-remove-listener"},"add and remove listener"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,l.kt)("h3",{id:"start-a-measurement"},"start a measurement"),(0,l.kt)("p",null,"The API is asyn function. It will return message until finish measurement."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'BP5SModule.startMeasure(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_ZOREING_BP) {\n        console.log("zero adjustment");\n\n    } else if (event.action === BPProfileModule.ACTION_ZOREOVER_BP) {\n        console.log("zero adjustment is done");\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_PRESSURE_BP) {\n        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_PULSEWAVE_BP) {\n        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.FLAG_HEARTBEAT_BP]);\n        console.log(event[BPProfileModule.PULSEWAVE_BP]);\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_RESULT_BP) {\n        console.log(event[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.PULSE_BP]);\n        console.log(event[BPProfileModule.MEASUREMENT_AHR_BP]);\n        console.log(event[BPProfileModule.DATAID]);\n\n    } else if (event.action === BPProfileModule.ACTION_ERROR_BP) {\n        console.log(event[BPProfileModule.ERROR_NUM_BP]);\n        console.log(event[BPProfileModule.ERROR_DESCRIPTION_BP]);\n    }\n});\n')),(0,l.kt)("h3",{id:"cancel-current-measurement"},"cancel current measurement"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.stopMeasure(mac);\n")),(0,l.kt)("h3",{id:"get-battery"},"get battery"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.getBattery(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_BATTERY_BP) {\n        console.log(event[BPProfileModule.BATTERY_BP]);\n    }\n});\n")),(0,l.kt)("h3",{id:"enable-offline-mode"},"enable offline mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.enbleOffline(mac);\n")),(0,l.kt)("h3",{id:"disable-offline-mode"},"disable offline mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.disableOffline(mac);\n")),(0,l.kt)("h3",{id:"is-enable-offline-mode"},"is enable offline mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.isEnableOffline(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_IS_ENABLE_OFFLINE) {\n        console.log(event[BPProfileModule.IS_ENABLE_OFFLINE]);\n    }\n});\n")),(0,l.kt)("h3",{id:"get-quantity-of-data-stored-in-the-bp5-device"},"get quantity of data stored in the bp5 device"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.getOfflineNum(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {\n        console.log(event[BPProfileModule.HISTORICAL_NUM_BP]);\n    }\n});\n")),(0,l.kt)("h3",{id:"get-data-stored-in-the-bp5-device"},"get data stored in the bp5 device"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'BP5SModule.getOfflineData(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5SModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_DATA_BP) {\n        let dataArray = event[BPProfileModule.HISTORICAL_DATA_BP];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n\n                console.log(offlineData[BPProfileModule.MEASUREMENT_DATE_BP]);\n                console.log(offlineData[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.PULSE_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_AHR_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_HSD_BP]);\n                console.log(offlineData[BPProfileModule.DATAID]);\n            }\n        }\n    }\n});\n')),(0,l.kt)("h3",{id:"disconnect-device"},"disconnect device"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.disConnect(mac);\n")),(0,l.kt)("h3",{id:"get-all-connected-devices"},"get all connected devices"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5SModule.getAllConnectedDevices();\n")))))}v.isMDXComponent=!0},6010:function(e,n,t){function o(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=o(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=o(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})}}]);