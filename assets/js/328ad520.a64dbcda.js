"use strict";(self.webpackChunkdoc_sdk=self.webpackChunkdoc_sdk||[]).push([[293],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=d(t),m=a,v=f["".concat(c,".").concat(m)]||f[m]||u[m]||r;return t?o.createElement(v,l(l({ref:n},s),{},{components:t})):o.createElement(v,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8215:function(e,n,t){var o=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(7294),a=t(9443);var r=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(6010),i="tabItem_1uMI",c="tabItemActive_2DSg";var d=function(e){var n,t=e.lazy,a=e.block,d=e.defaultValue,s=e.values,u=e.groupId,f=e.className,m=o.Children.toArray(e.children),v=null!=s?s:m.map((function(e){return{value:e.props.value,label:e.props.label}})),P=null!=d?d:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value,p=r(),g=p.tabGroupChoices,B=p.setTabGroupChoices,h=(0,o.useState)(P),b=h[0],E=h[1],y=[];if(null!=u){var _=g[u];null!=_&&_!==b&&v.some((function(e){return e.value===_}))&&E(_)}var N=function(e){var n=e.currentTarget,t=y.indexOf(n),o=v[t].value;E(o),null!=u&&(B(u,o),setTimeout((function(){var e,t,o,a,r,l,i,d;(e=n.getBoundingClientRect(),t=e.top,o=e.left,a=e.bottom,r=e.right,l=window,i=l.innerHeight,d=l.innerWidth,t>=0&&r<=d&&a<=i&&o>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c),setTimeout((function(){return n.classList.remove(c)}),2e3))}),150))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var o=y.indexOf(e.target)+1;t=y[o]||y[0];break;case"ArrowLeft":var a=y.indexOf(e.target)-1;t=y[a]||y[y.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},f)},v.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":b===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:O,onFocus:N,onClick:N},null!=t?t:n)}))),t?(0,o.cloneElement)(m.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==b})}))))}},9443:function(e,n,t){var o=(0,t(7294).createContext)(void 0);n.Z=o},2005:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return f},default:function(){return v}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),l=t(5064),i=t(8215),c=["components"],d={},s="BP7",u={unversionedId:"device/bp7",id:"device/bp7",isDocsHomePage:!1,title:"BP7",description:"Android Doc",source:"@site/docs/device/bp7.md",sourceDirName:"device",slug:"/device/bp7",permalink:"/doc.sdk.ihealthlabs/docs/device/bp7",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/device/bp7.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BP5S",permalink:"/doc.sdk.ihealthlabs/docs/device/bp5s"},next:{title:"BP7S",permalink:"/doc.sdk.ihealthlabs/docs/device/bp7s"}},f=[{value:"APIs",id:"apis",children:[{value:"add and remove listener",id:"add-and-remove-listener",children:[]},{value:"start a measurement",id:"start-a-measurement",children:[]},{value:"cancel current measurement",id:"cancel-current-measurement",children:[]},{value:"get battery",id:"get-battery",children:[]},{value:"enable offline mode",id:"enable-offline-mode",children:[]},{value:"disable offline mode",id:"disable-offline-mode",children:[]},{value:"is enable offline mode",id:"is-enable-offline-mode",children:[]},{value:"get quantity of data stored in the bp5 device",id:"get-quantity-of-data-stored-in-the-bp5-device",children:[]},{value:"get data stored in the bp5 device",id:"get-data-stored-in-the-bp5-device",children:[]},{value:"disconnect device",id:"disconnect-device",children:[]},{value:"get device information",id:"get-device-information",children:[]},{value:"get all connected devices",id:"get-all-connected-devices",children:[]}]}],m={toc:f};function v(e){var n=e.components,t=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bp7"},"BP7"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"android",label:"Android",default:!0,mdxType:"TabItem"},(0,r.kt)("h4",{id:"android-doc"},"Android Doc")),(0,r.kt)(i.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,r.kt)("h4",{id:"ios-doc"},"iOS Doc")),(0,r.kt)(i.Z,{value:"reactnative",label:"React Native",mdxType:"TabItem"},"## import BP7 module",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  BP7Module,\n  BPProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,r.kt)("h2",{id:"apis"},"APIs"),(0,r.kt)("h3",{id:"add-and-remove-listener"},"add and remove listener"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(BP7Module.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,r.kt)("h3",{id:"start-a-measurement"},"start a measurement"),(0,r.kt)("p",null,"The API is asyn function. It will return message until finish measurement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// When you start a measurement, need call startMeasure function firstly, you will get angle of BP7\n// make sure your angle is below the 30 degree, then call conformAngle function, the BP7 will start a measurement. \nBP5Module.startMeasure(mac);\n\nBP5Module.conformAngle(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_ANGLE_BP) {\n        // {"which_arm":0,"value":22}\n        console.log(event[BPProfileModule.WHICH_ARM]);\n        console.log(event[BPProfileModule.ANGLE_BP]);\n\n    } else if (event.action === BPProfileModule.ACTION_ZOREING_BP) {\n        console.log("zero adjustment");\n\n    } else if (event.action === BPProfileModule.ACTION_ZOREOVER_BP) {\n        console.log("zero adjustment is done");\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_PRESSURE_BP) {\n        // {"pressure":3}\n        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_PULSEWAVE_BP) {\n        // {"pressure":31,"heartbeat":false,"wave":"[15,15,15,15,15,15,15,15]"}\n        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.FLAG_HEARTBEAT_BP]);\n        console.log(event[BPProfileModule.PULSEWAVE_BP]);\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_RESULT_BP) {\n        // {"sys":122,"dia":87,"heartRate":75,"arrhythmia":false,"hsd":false,"dataID":"E3FC99C20A7FA7F7B7F8FC4B9DD059DF"}\n        console.log(event[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.PULSE_BP]);\n        console.log(event[BPProfileModule.MEASUREMENT_AHR_BP]);\n        console.log(event[BPProfileModule.DATAID]);\n\n    } else if (event.action === BPProfileModule.ACTION_ERROR_BP) {\n        console.log(event[BPProfileModule.ERROR_NUM_BP]);\n        console.log(event[BPProfileModule.ERROR_DESCRIPTION_BP]);\n    }\n});\n')),(0,r.kt)("h3",{id:"cancel-current-measurement"},"cancel current measurement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.stopMeasure(mac);\n")),(0,r.kt)("h3",{id:"get-battery"},"get battery"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.getBattery(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_BATTERY_BP) {\n        console.log(event[BPProfileModule.BATTERY_BP]);\n    }\n});\n")),(0,r.kt)("h3",{id:"enable-offline-mode"},"enable offline mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.enbleOffline(mac);\n")),(0,r.kt)("h3",{id:"disable-offline-mode"},"disable offline mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.disableOffline(mac);\n")),(0,r.kt)("h3",{id:"is-enable-offline-mode"},"is enable offline mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.isEnableOffline(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_IS_ENABLE_OFFLINE) {\n        console.log(event[BPProfileModule.IS_ENABLE_OFFLINE]);\n    }\n});\n")),(0,r.kt)("h3",{id:"get-quantity-of-data-stored-in-the-bp5-device"},"get quantity of data stored in the bp5 device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'BP5Module.getOfflineNum(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {\n        // {"offlinenum":2}\n        console.log(event[BPProfileModule.HISTORICAL_NUM_BP]);\n    }\n});\n')),(0,r.kt)("h3",{id:"get-data-stored-in-the-bp5-device"},"get data stored in the bp5 device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'BP5Module.getOfflineData(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    // {"data":[{"time":"2009-01-02 15:12:00","sys":120,"dia":72,"heartRate":71,"arrhythmia":false,"hsd":false,"dataID":"F77B50204315322FAB3B31548E6CDC4E"},{"time":"2009-01-02 15:13:00","sys":115,"dia":73,"heartRate":68,"arrhythmia":false,"hsd":false,"dataID":"F75BC53C3E43ACC3BA3DE1343B317398"}]}\n    if (event.action === BPProfileModule.ACTION_HISTORICAL_DATA_BP) {\n        let dataArray = event[BPProfileModule.HISTORICAL_DATA_BP];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n\n                console.log(offlineData[BPProfileModule.MEASUREMENT_DATE_BP]);\n                console.log(offlineData[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.PULSE_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_AHR_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_HSD_BP]);\n                console.log(offlineData[BPProfileModule.DATAID]);\n            }\n        }\n    }\n});\n')),(0,r.kt)("h3",{id:"disconnect-device"},"disconnect device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.disConnect(mac);\n")),(0,r.kt)("h3",{id:"get-device-information"},"get device information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"iHealthDeviceManagerModule.getDevicesIDPS(mac, (event) => {\n    console.info(event);\n})\n")),(0,r.kt)("h3",{id:"get-all-connected-devices"},"get all connected devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.getAllConnectedDevices();\n")))))}v.isMDXComponent=!0},6010:function(e,n,t){function o(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=o(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=o(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);