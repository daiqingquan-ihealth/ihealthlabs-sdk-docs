"use strict";(self.webpackChunkdoc_sdk=self.webpackChunkdoc_sdk||[]).push([[826],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(n),p=i,v=m["".concat(s,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(v,o(o({ref:t},l),{},{components:n})):a.createElement(v,o({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),i=n(9443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),c="tabItem_1uMI",s="tabItemActive_2DSg";var d=function(e){var t,n=e.lazy,i=e.block,d=e.defaultValue,l=e.values,u=e.groupId,m=e.className,p=a.Children.toArray(e.children),v=null!=l?l:p.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=d?d:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,h=r(),y=h.tabGroupChoices,g=h.setTabGroupChoices,M=(0,a.useState)(f),A=M[0],E=M[1],b=[];if(null!=u){var D=y[u];null!=D&&D!==A&&v.some((function(e){return e.value===D}))&&E(D)}var _=function(e){var t=e.currentTarget,n=b.indexOf(t),a=v[n].value;E(a),null!=u&&(g(u,a),setTimeout((function(){var e,n,a,i,r,o,c,d;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,c=o.innerHeight,d=o.innerWidth,n>=0&&r<=d&&i<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},k=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=b.indexOf(e.target)+1;n=b[a]||b[0];break;case"ArrowLeft":var i=b.indexOf(e.target)-1;n=b[i]||b[b.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},m)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,className:(0,o.Z)("tabs__item",c,{"tabs__item--active":A===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:k,onFocus:_,onClick:_},null!=n?n:t)}))),n?(0,a.cloneElement)(p.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},8860:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return v}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(5064),c=n(8215),s=["components"],d={},l="AM5",u={unversionedId:"device/am5",id:"device/am5",isDocsHomePage:!1,title:"AM5",description:"iOS Doc",source:"@site/docs/device/am5.md",sourceDirName:"device",slug:"/device/am5",permalink:"/doc.sdk.ihealthlabs/docs/device/am5",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/device/am5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AM4",permalink:"/doc.sdk.ihealthlabs/docs/device/am4"},next:{title:"BG1S",permalink:"/doc.sdk.ihealthlabs/docs/device/bg1s"}},m=[{value:"APIs",id:"apis",children:[{value:"Add and remove listener",id:"add-and-remove-listener",children:[]},{value:"get all connected am5 devices",id:"get-all-connected-am5-devices",children:[]},{value:"disconnect a am5 devices",id:"disconnect-a-am5-devices",children:[]},{value:"Binding apps and devices",id:"binding-apps-and-devices",children:[]},{value:"UnBind apps and devices",id:"unbind-apps-and-devices",children:[]},{value:"Get information of the device",id:"get-information-of-the-device",children:[]},{value:"Set current time of the device",id:"set-current-time-of-the-device",children:[]},{value:"Set user info",id:"set-user-info",children:[]},{value:"Set unit",id:"set-unit",children:[]},{value:"Set Hand Wear Mode",id:"set-hand-wear-mode",children:[]},{value:"Get the live data of the device",id:"get-the-live-data-of-the-device",children:[]},{value:"Sync health data from device",id:"sync-health-data-from-device",children:[]}]}],p={toc:m};function v(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"am5"},"AM5"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"android",label:"Android",default:!0,mdxType:"TabItem"},(0,r.kt)("h4",{id:"ios-doc"},"iOS Doc")),(0,r.kt)(c.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,r.kt)("h4",{id:"android-doc"},"Android Doc")),(0,r.kt)(c.Z,{value:"reactnative",label:"React Native",mdxType:"TabItem"},"## Import AM5 Module",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  AM5Module,\n  AM5ProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,r.kt)("h2",{id:"apis"},"APIs"),(0,r.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,r.kt)("h3",{id:"get-all-connected-am5-devices"},"get all connected am5 devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'AM5Module.getAllConnectedDevices();\n\n// {"action": "action_get_all_connected_devices", "devices": ["DD4173E7F41E"]}\n')),(0,r.kt)("h3",{id:"disconnect-a-am5-devices"},"disconnect a am5 devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"AM5Module.disconnect(mac);\n")),(0,r.kt)("h3",{id:"binding-apps-and-devices"},"Binding apps and devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'AM5Module.bindDevice(mac);\n\n// response\n// {"action": "action_user_bind", "description": "no error", "mac": "DD4173E7F41E", "status": 3, "type": "AM5"}\nnotifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {\n    if (event.action === AM5ProfileModule.ACTION_USER_BIND) {\n        if (3 === event[AM5ProfileModule.OPERATION_STATUS]) {\n            console.log(\'bind success\');\n        } else if (4 === event[AM5ProfileModule.OPERATION_STATUS]) {\n            console.log(\'bind fail\');\n        }\n    }\n});\n')),(0,r.kt)("h3",{id:"unbind-apps-and-devices"},"UnBind apps and devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'AM5Module.unBindDevice(mac);\n\n// response\n// {"action": "action_user_unbind", "description": "no error", "mac": "DD4173E7F41E", "status": 3, "type": "AM5"}\nnotifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {\n    if (event.action === AM5ProfileModule.ACTION_USER_UNBIND) {\n        if (3 === event[AM5ProfileModule.OPERATION_STATUS]) {\n            console.log(\'unbind success\');\n        } else if (4 === event[AM5ProfileModule.OPERATION_STATUS]) {\n            console.log(\'unbind fail\');\n        }\n    }\n});\n')),(0,r.kt)("h3",{id:"get-information-of-the-device"},"Get information of the device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'AM5Module.getBasicInfo(mac);\n\n// response\n// {"action": "action_basic_info", "battStatus": 0, "bind_confirm_method": 0, "bind_confirm_timeout": 0, "deivceId": 7041, "energe": 63, "firmwareVersion": 40, "mac": "DD4173E7F41E", "mode": 1, "pairFlag": 0, "reboot": 0, "type": "AM5"}\nnotifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {\n    if (event.action === AM5ProfileModule.ACTION_BASIC_INFO) {\n        console.log(AM5ProfileModule.BASIC_ENERGE);\n    }\n});\n')),(0,r.kt)("h3",{id:"set-current-time-of-the-device"},"Set current time of the device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'AM5Module.setTime(mac);\n\n// response\n// {"action": "TIME", "mac": "DD4173E7F41E", "result": true, "type": "AM5"}\nnotifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {\n    if (event.action === "TIME") {\n        console.log(\'set success\');\n    }\n});\n')),(0,r.kt)("h3",{id:"set-user-info"},"Set user info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * @param year   Year of birth\n * @param month  Month of birth\n * @param day    Day of birth\n * @param weight weight\n * @param height height\n * @param gender gender male: 1, female: 2\n */\nAM5Module.setUserInfo(mac, 1990, 1, 1, 75, 176, 1);\n\n// response\n// {"action": "USER_INFO", "mac": "DD4173E7F41E", "result": true, "type": "AM5"}\nnotifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {\n    if (event.action === "USER_INFO") {\n        console.log(\'set success\');\n    }\n});\n')),(0,r.kt)("h3",{id:"set-unit"},"Set unit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * When you never set them, treat them as defaults\n * @param {string} mac Device\'s mac address\n * @param type 0: Distance unit                 unit: 0 default ; 1 KM ; 2 MI\n * @param type 1: Wight unit                    unit: 0 default ; 1 KG ; 2 LB ; 3 ST\n * @param type 2: Temperature unit              unit: 0 default ; 1 \xb0C ; 2 \xb0F\n * @param type 3: Distance at each step         unit: distance (cm)      (default 0cm)\n * @param type 4: Language                      unit: 0 default ; 1 zh ; 2 en ; 3 fr ; 4 de ; 5 it ; 6 es ; 7 ja ; 8 po ; 9 cz\n * @param type 5: Time Mode                     unit: 0 default ; 1 24 hour system ; 2 12 hour system\n * @param type 6: Distance at each step of run  unit: distance (cm)      (default 0cm)\n * @param type 7: GPS calibration switch        unit: 0 default ; 1 open ; 2 close\n*/\nAM5Module.setUnit(mac, [1, 3, 2]);\n\n// response\n// {"action": "UNIT", "mac": "DD4173E7F41E", "result": true, "type": "AM5"}\nnotifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {\n    if (event.action === "UNIT") {\n        console.log(\'set success\');\n    }\n});\n')),(0,r.kt)("h3",{id:"set-hand-wear-mode"},"Set Hand Wear Mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * @param {string} mac Device\'s mac address\n * @param mode 0  left-hand   1 right-hand\n */\nAM5Module.setHandWearMode(mac, 1);\n\n// response\n// {"action": "HAND_MODE", "mac": "DD4173E7F41E", "result": true, "type": "AM5"}\nnotifyListener = DeviceEventEmitter.addListener(AM4Module.Event_Notify,  (event) => {\n    if (event.action === "HAND_MODE") {\n        console.log(\'set success\');\n    }\n});\n')),(0,r.kt)("h3",{id:"get-the-live-data-of-the-device"},"Get the live data of the device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * @param {string} mac Device\'s mac address\n */\nAM5Module.getLiveData(mac);\n\n// response\n// {"action": "action_live_data", "dbp": 0, "heartRate": 0, "mac": "DD4173E7F41E", "sbp": 0, "totalActiveTime": 0, "totalCalories": 0, "totalDistances": 0, "totalStep": 0, "type": "AM5"}\nnotifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {\n    if (event.action === AM5ProfileModule.ACTION_LIVE_DATA) {\n        console.log(\'set success\');\n    }\n});\n')),(0,r.kt)("h3",{id:"sync-health-data-from-device"},"Sync health data from device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * @param {string} mac Device\'s mac address\n */\nAM5Module.syncHealthData(mac);\n\n// response\n\n// 1. {"action": "action_sync_health_data", "mac": "DD4173E7F41E", "status": 0, "type": "AM5"}\n// 2. {"action": "action_sync_health_data", "mac": "DD4173E7F41E", "progress": 2, "status": 2, "type": "AM5"}\n\n// 3. {"action": "action_sync_health_data_sport", "dId": 7041, "date": "Aug 16, 2021 12:00:00 AM", "day": 16, "items": [       {"activeTime": 0, "calory": 0, "dId": 7041, "date": "Aug 16, 2021 12:00:00 AM", "day": 16, "distance": 0, "month": 8, "sportDataId": 1, "stepCount": 0, "year": 2021}], "mac": "DD4173E7F41E", "month": 8, "sportDataId": 3, "startTime": 0, "timeSpace": 15, "totalActiveTime": 473, "totalCalory": 40, "totalDistance": 718, "totalStepCount": 998, "type": "AM5", "year": 2021} \n\n// 4. {"action": "action_sync_health_data_sleep", "awakeCount": 2, "dId": 7041, "date": "Aug 27, 2021 12:00:00 AM", "day": 27,"deepSleepCount": 7, "deepSleepMinutes": 157, "items": \n// [{"dId": 7041, "date": "Aug 27, 2021 12:00:00 AM", "day": 27, "month": 8, "offsetMinute": 19, "sleepDataId": 2, "sleepStatus": 2, "year": 2021}, \n//  {"dId": 7041, "date": "Aug 27, 2021 12:00:00 AM", "day": 27, "month": 8, "offsetMinute": 28, "sleepDataId": 3, "sleepStatus": 3, "year": 2021}, {"dId": 7041, "date": "Aug 27, 2021 12:00:00 AM", "day": 27, "month": 8, "offsetMinute": 56, "sleepDataId": 4, "sleepStatus": 2, "year": 2021}],  "lightSleepCount": 9, "lightSleepMinutes": 327, "mac": "DD4173E7F41E", "month": 8, "sleepDataId": 1, "sleepEndedTimeH": 9, "sleepEndedTimeM": 10, "totalSleepMinutes": 533, "type": "AM5", "year": 2021}\n\n// 5. {"action": "action_sync_health_data_heart_rate", "dId": 7041, "date": "Aug 16, 2021 12:00:00 AM", "day": 16, "items": [ {"activeTime": 0, "calory": 0, "dId": 7041, "date": "Aug 16, 2021 12:00:00 AM", "day": 16, "distance": 0, "month": 8, "sportDataId": 1, "stepCount": 0, "year": 2021}]}\n\n// 6. {"action": "action_sync_health_data", "mac": "DD4173E7F41E", "progress": 100, "status": 3, "type": "AM5"}\n\nnotifyListener = DeviceEventEmitter.addListener(AM5Module.Event_Notify,  (event) => {\n    if (event.action === AM5ProfileModule.ACTION_SYNC_HEALTH_DATA) {\n        console.log(\'get success\');\n    }\n});\n')))))}v.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);