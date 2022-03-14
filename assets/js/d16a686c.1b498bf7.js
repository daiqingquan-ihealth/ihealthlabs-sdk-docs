"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[1006],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),v=s(t),u=r,g=v["".concat(c,".").concat(u)]||v[u]||d[u]||i;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=v;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},36608:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],l={title:"KN550",sidebar_position:6},c=void 0,s={unversionedId:"blood_pressure/kn550",id:"version-2.9.9/blood_pressure/kn550",isDocsHomePage:!1,title:"KN550",description:"WorkFlow",source:"@site/android_versioned_docs/version-2.9.9/blood_pressure/kn550.md",sourceDirName:"blood_pressure",slug:"/blood_pressure/kn550",permalink:"/android/blood_pressure/kn550",editUrl:"https://github.com/dyte-in/docs/tree/main/android_versioned_docs/version-2.9.9/blood_pressure/kn550.md",tags:[],version:"2.9.9",sidebarPosition:6,frontMatter:{title:"KN550",sidebar_position:6},sidebar:"version-2.9.9/mainSidebar",previous:{title:"BP7S",permalink:"/android/blood_pressure/bp7s"},next:{title:"KD723",permalink:"/android/blood_pressure/kd723"}},p=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for KN-550BT devices",id:"2scan-for-kn-550bt-devices",children:[]},{value:"3.Connect to KN-550BT devices",id:"3connect-to-kn-550bt-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Get the device battery",id:"get-the-device-battery",children:[]},{value:"Get the number of history data",id:"get-the-number-of-history-data",children:[]},{value:"Get history data",id:"get-history-data",children:[]},{value:"Set locat time to KN-550BT",id:"set-locat-time-to-kn-550bt",children:[]},{value:"Get the KN-550BT display status",id:"get-the-kn-550bt-display-status",children:[]},{value:"Set the KN-550BT display status",id:"set-the-kn-550bt-display-status",children:[]},{value:"Disconnect KN-550BT device",id:"disconnect-kn-550bt-device",children:[]}]}],d={toc:p};function v(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"workflow"},"WorkFlow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scan and connect KN-550BT blood pressure monitor.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"KN-550BT only support offline measurement."))),(0,i.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,i.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_550BT);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,i.kt)("h3",{id:"2scan-for-kn-550bt-devices"},"2.Scan for KN-550BT devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BP550BT);\n")),(0,i.kt)("h3",{id:"3connect-to-kn-550bt-devices"},"3.Connect to KN-550BT devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_550BT)\n\nBp550BTControl control = iHealthDevicesManager.getInstance().getBp550BTControl(mDeviceMac);\n')),(0,i.kt)("h2",{id:"api-reference"},"API reference"),(0,i.kt)("h3",{id:"get-the-device-battery"},"Get the device battery"),(0,i.kt)("p",null,"The KN-550BT doesn't support this feature above firmware 2.0.0 or later."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp550BTControl control = iHealthDevicesManager.getInstance().getBp550BTControl(mDeviceMac);\ncontrol.getBattery();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_BATTERY_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int battery = obj.getInt(BpProfile.BATTERY_BP);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"get-the-number-of-history-data"},"Get the number of history data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp550BTControl control = iHealthDevicesManager.getInstance().getBp550BTControl(mDeviceMac);\ncontrol.getOfflineNum();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_HISTORICAL_NUM_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int count = obj.getInt(BpProfile.HISTORICAL_NUM_BP);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"get-history-data"},"Get history data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp550BTControl control = iHealthDevicesManager.getInstance().getBp550BTControl(mDeviceMac);\ncontrol.getOfflineData();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_HISTORICAL_NUM_BP.equals(action)) {\n            try {\n                JSONArray historyArr = new JSONArray(message);\n                for (int i = 0; i < historyArr.length(); i++) {\n                    JSONObject obj = historyArr.getJSONObject(i);\n                    String time = obj.getString(BpProfile.MEASUREMENT_DATE_BP);\n                    int sys = obj.getInt(BpProfile.HIGH_BLOOD_PRESSURE_BP)\n                    int dia = obj.getInt(BpProfile.LOW_BLOOD_PRESSURE_BP)\n                    int heartRate = obj.getInt(BpProfile.PULSE_BP)\n                    int ahr = obj.getInt(BpProfile.MEASUREMENT_AHR_BP)\n                    int hsd = obj.getInt(BpProfile.MEASUREMENT_HSD_BP)\n\n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"set-locat-time-to-kn-550bt"},"Set locat time to KN-550BT"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp550BTControl control = iHealthDevicesManager.getInstance().getBp550BTControl(mDeviceMac);\ncontrol.getFunctionInfo();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_FUNCTION_INFORMATION_BP.equals(action)) {\n            try {\n               JSONObject obj = new JSONObject(message);\n               Boolean upAirMeasureFlg    = obj.getBoolean(BpProfile.FUNCTION_IS_UPAIR_MEASURE);\n               Boolean armMeasureFlg      = obj.getBoolean(BpProfile.FUNCTION_IS_ARM_MEASURE);\n               Boolean haveAngleSensorFlg = obj.getBoolean(BpProfile.FUNCTION_HAVE_ANGLE_SENSOR);\n               Boolean haveOfflineFlg     = obj.getBoolean(BpProfile.FUNCTION_HAVE_OFFLINE);\n               Boolean haveHSDFlg         = obj.getBoolean(BpProfile.FUNCTION_HAVE_HSD);\n               Boolean haveAngleSetFlg    = obj.getBoolean(BpProfile.FUNCTION_HAVE_ANGLE_SETTING);\n               Boolean mutableUploadFlg   = obj.getBoolean(BpProfile.FUNCTION_IS_MULTI_UPLOAD);\n               Boolean selfUpdateFlg      = obj.getBoolean(BpProfile.FUNCTION_HAVE_SELF_UPDATE);\n            } catch(JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    } \n}\n")),(0,i.kt)("h3",{id:"get-the-kn-550bt-display-status"},"Get the KN-550BT display status"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp550BTControl control = iHealthDevicesManager.getInstance().getBp550BTControl(mDeviceMac);\ncontrol.getStatusOfDisplay();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_SHOW_CONFIG_BP.equals(action)) {\n            try {\n               JSONObject obj = new JSONObject(message);\n               Boolean isBackLightOn = obj.getBoolean(BpProfile.IS_BACKLIGHT_ON_BP);\n               Boolean isClockOn     = obj.getBoolean(BpProfile.IS_CLOCK_ON_BP);\n               \n            } catch(JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"set-the-kn-550bt-display-status"},"Set the KN-550BT display status"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp550BTControl control = iHealthDevicesManager.getInstance().getBp550BTControl(mDeviceMac);\ncontrol.getStatusOfDisplay();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_SET_STATUS_DISPLAY_SUCCESS.equals(action)) {\n        \n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"disconnect-kn-550bt-device"},"Disconnect KN-550BT device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp550BTControl control = iHealthDevicesManager.getInstance().getBp550BTControl(mDeviceMac);\ncontrol.disconnect();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n     @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { \n        \n    }\n}\n")))}v.isMDXComponent=!0}}]);