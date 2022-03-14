"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[7122],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),v=s(t),u=i,g=v["".concat(l,".").concat(u)]||v[u]||d[u]||r;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=v;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},34065:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],c={title:"PO1",sidebar_position:1},l=void 0,s={unversionedId:"blood_oxygen/po1",id:"version-2.7.7/blood_oxygen/po1",isDocsHomePage:!1,title:"PO1",description:"WorkFlow",source:"@site/ios_versioned_docs/version-2.7.7/blood_oxygen/po1.md",sourceDirName:"blood_oxygen",slug:"/blood_oxygen/po1",permalink:"/ios/blood_oxygen/po1",editUrl:"https://github.com/dyte-in/docs/tree/main/ios_versioned_docs/version-2.7.7/blood_oxygen/po1.md",tags:[],version:"2.7.7",sidebarPosition:1,frontMatter:{title:"PO1",sidebar_position:1},sidebar:"version-1.33.x/mainSidebar",previous:{title:"BG5S",permalink:"/ios/blood_glucose/bg5s"},next:{title:"PO3",permalink:"/ios/blood_oxygen/po3"}},p=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for PO1 devices",id:"2scan-for-po1-devices",children:[]},{value:"3.Connect to PO1 devices",id:"3connect-to-po1-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Open buzzer for PO1 device",id:"open-buzzer-for-po1-device",children:[]},{value:"Get battery for PO1 device",id:"get-battery-for-po1-device",children:[]},{value:"Data Notify",id:"data-notify",children:[]},{value:"Disconnect the PO1",id:"disconnect-the-po1",children:[]}]}],d={toc:p};function v(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"workflow"},"WorkFlow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scan and connect PO1 device.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"PO1 only support online measurement."))),(0,r.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,r.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_PO1);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,r.kt)("h3",{id:"2scan-for-po1-devices"},"2.Scan for PO1 devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.PO1);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Return\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { \n        Log.i(TAG, "onScanDevice - mac:" + mac + " - deviceType:" + deviceType + " - rssi:" + rssi + " - manufactorData:" + manufactorData);\n    }\n}\n')),(0,r.kt)("h3",{id:"3connect-to-po1-devices"},"3.Connect to PO1 devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_PO1)\nPo1Control control = iHealthDevicesManager.getInstance().getPo1Control(mDeviceMac);\n')),(0,r.kt)("h2",{id:"api-reference"},"API reference"),(0,r.kt)("h3",{id:"open-buzzer-for-po1-device"},"Open buzzer for PO1 device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Po1Control control = iHealthDevicesManager.getInstance().getPo1Control(mDeviceMac);\ncontrol.openBuzzer(boolean isopened);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Po1Profile.ACTION_SET_BUZZER.equals(action)) {\n        \n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"get-battery-for-po1-device"},"Get battery for PO1 device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Po1Control control = iHealthDevicesManager.getInstance().getPo1Control(mDeviceMac);\ncontrol.getBattery() \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Po1Profile.ACTION_GET_BATTERY.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int battery = obj.getInt(Po1Profile.BATTERY);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"data-notify"},"Data Notify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Po1Profile.ACTION_BO_MEASUREMENT.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int blood_oxygen = obj.getInt(Po1Profile.BLOOD_OXYGEN);\n                int pulse = obj.getInt(Po1Profile.PULSE);\n                float pulse_porce = obj.getFloat(Po1Profile.PULSE_FORCE);\n                int pi = obj.getInt(Po1Profile.PI);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    }\n}\n")),(0,r.kt)("h3",{id:"disconnect-the-po1"},"Disconnect the PO1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Po1Control control = iHealthDevicesManager.getInstance().getPo1Control(mDeviceMac);\ncontrol.disconnect();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n     @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { \n        \n    }\n}\n")))}v.isMDXComponent=!0}}]);