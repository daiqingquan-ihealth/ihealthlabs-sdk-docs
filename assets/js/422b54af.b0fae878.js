"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[6331],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return P}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),c=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=c(t),P=r,m=f["".concat(d,".").concat(P)]||f[P]||u[P]||l;return t?o.createElement(m,i(i({ref:n},s),{},{components:t})):o.createElement(m,i({ref:n},s))}));function P(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=f;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<l;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},28323:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var o=t(87462),r=t(63366),l=(t(67294),t(3905)),i=["components"],a={title:"KN926",sidebar_position:8},d=void 0,c={unversionedId:"blood_pressure/kd926",id:"version-1.4.9/blood_pressure/kd926",isDocsHomePage:!1,title:"KN926",description:"API Reference",source:"@site/react-native_versioned_docs/version-1.4.9/blood_pressure/kd926.md",sourceDirName:"blood_pressure",slug:"/blood_pressure/kd926",permalink:"/react-native/blood_pressure/kd926",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native_versioned_docs/version-1.4.9/blood_pressure/kd926.md",tags:[],version:"1.4.9",sidebarPosition:8,frontMatter:{title:"KN926",sidebar_position:8},sidebar:"version-0.23.x/mainSidebar",previous:{title:"KD723",permalink:"/react-native/blood_pressure/kd723"},next:{title:"HS2",permalink:"/react-native/scale/hs2"}},s=[{value:"API Reference",id:"api-reference",children:[{value:"Import BP5 module",id:"import-bp5-module",children:[]},{value:"Add and remove listener",id:"add-and-remove-listener",children:[]},{value:"start a measurement",id:"start-a-measurement",children:[]},{value:"cancel current measurement",id:"cancel-current-measurement",children:[]},{value:"get battery",id:"get-battery",children:[]},{value:"enable offline mode",id:"enable-offline-mode",children:[]},{value:"disable offline mode",id:"disable-offline-mode",children:[]},{value:"is enable offline mode",id:"is-enable-offline-mode",children:[]},{value:"get quantity of data stored in the bp5 device",id:"get-quantity-of-data-stored-in-the-bp5-device",children:[]},{value:"get data stored in the bp5 device",id:"get-data-stored-in-the-bp5-device",children:[]},{value:"disconnect device",id:"disconnect-device",children:[]},{value:"get device information",id:"get-device-information",children:[]},{value:"get all connected devices",id:"get-all-connected-devices",children:[]}]}],u={toc:s};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"api-reference"},"API Reference"),(0,l.kt)("h3",{id:"import-bp5-module"},"Import BP5 module"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  BP5Module,\n  BPProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,l.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,l.kt)("h3",{id:"start-a-measurement"},"start a measurement"),(0,l.kt)("p",null,"The API is asyn function. It will return message until finish measurement."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'BP5Module.startMeasure(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_ZOREING_BP) {\n        console.log("zero adjustment");\n\n    } else if (event.action === BPProfileModule.ACTION_ZOREOVER_BP) {\n        console.log("zero adjustment is done");\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_PRESSURE_BP) {\n        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_PULSEWAVE_BP) {\n        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.FLAG_HEARTBEAT_BP]);\n        console.log(event[BPProfileModule.PULSEWAVE_BP]);\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_RESULT_BP) {\n        console.log(event[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.PULSE_BP]);\n        console.log(event[BPProfileModule.MEASUREMENT_AHR_BP]);\n        console.log(event[BPProfileModule.DATAID]);\n\n    } else if (event.action === BPProfileModule.ACTION_ERROR_BP) {\n        console.log(event[BPProfileModule.ERROR_NUM_BP]);\n        console.log(event[BPProfileModule.ERROR_DESCRIPTION_BP]);\n    }\n});\n')),(0,l.kt)("h3",{id:"cancel-current-measurement"},"cancel current measurement"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.stopMeasure(mac);\n")),(0,l.kt)("h3",{id:"get-battery"},"get battery"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.getBattery(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_BATTERY_BP) {\n        console.log(event[BPProfileModule.BATTERY_BP]);\n    }\n});\n")),(0,l.kt)("h3",{id:"enable-offline-mode"},"enable offline mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.enbleOffline(mac);\n")),(0,l.kt)("h3",{id:"disable-offline-mode"},"disable offline mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.disableOffline(mac);\n")),(0,l.kt)("h3",{id:"is-enable-offline-mode"},"is enable offline mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.isEnableOffline(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_IS_ENABLE_OFFLINE) {\n        console.log(event[BPProfileModule.IS_ENABLE_OFFLINE]);\n    }\n});\n")),(0,l.kt)("h3",{id:"get-quantity-of-data-stored-in-the-bp5-device"},"get quantity of data stored in the bp5 device"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.getOfflineNum(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {\n        console.log(event[BPProfileModule.HISTORICAL_NUM_BP]);\n    }\n});\n")),(0,l.kt)("h3",{id:"get-data-stored-in-the-bp5-device"},"get data stored in the bp5 device"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'BP5Module.getOfflineData(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_HISTORICAL_DATA_BP) {\n        let dataArray = event[BPProfileModule.HISTORICAL_DATA_BP];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n\n                console.log(offlineData[BPProfileModule.MEASUREMENT_DATE_BP]);\n                console.log(offlineData[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.PULSE_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_AHR_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_HSD_BP]);\n                console.log(offlineData[BPProfileModule.DATAID]);\n            }\n        }\n    }\n});\n')),(0,l.kt)("h3",{id:"disconnect-device"},"disconnect device"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.disConnect(mac);\n")),(0,l.kt)("h3",{id:"get-device-information"},"get device information"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"iHealthDeviceManagerModule.getDevicesIDPS(mac, (event) => {\n    console.info(event);\n})\n")),(0,l.kt)("h3",{id:"get-all-connected-devices"},"get all connected devices"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.getAllConnectedDevices();\n")))}f.isMDXComponent=!0}}]);