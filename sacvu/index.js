(function(e,t,a,r,l,d){"use strict";var s='console.log("VENDETTA FRENDETTA MAJORINCETTA");const basicFind=l=>Object.values(window.modules).find(o=>o?.publicModule.exports?.[l])?.publicModule?.exports,color=basicFind("SemanticColor"),provider={xoshiro(l){let o=1779033703,t=3144134277,r=1013904242,e=2773480762;for(let n=0,a;n<l.length;n++)a=l.charCodeAt(n),o=t^Math.imul(o^a,597399067),t=r^Math.imul(t^a,2869860233),r=e^Math.imul(r^a,951274213),e=o^Math.imul(e^a,2716044179);o=Math.imul(r^o>>>18,597399067),t=Math.imul(e^t>>>22,2869860233),r=Math.imul(o^r>>>17,951274213),e=Math.imul(t^e>>>19,2716044179);let[c,d,i,u]=[(o^t^r^e)>>>0,(t^o)>>>0,(r^o)>>>0,(e^o)>>>0];return function(){let a=d<<9,s=c*5;return s=(s<<7|s>>>25)*9,i^=c,u^=d,d^=i,c^=u,i^=a,u=u<<11|u>>>21,(s>>>0)/4294967296}},math:()=>Math.random};function computeColor(l){const o=provider.__RAND_PROVIDER__(l);let t="#";for(var r="0123456789abcdef",e=0;e<6;e++)t+=r[Math.floor(o()*16)];return t}const keys=Object.keys(color.default.colors),refs=Object.values(color.default.colors),computedColors={},oldRaw=color.default.unsafe_rawColors;color.default.unsafe_rawColors=new Proxy(oldRaw,{get:(l,o)=>computedColors[o]??=computeColor(o)}),color.default.meta.resolveSemanticColor=(l,o)=>{let t=keys[refs.indexOf(o)];return l!=="dark"&&(t=l.toUpperCase()+"_"+t),computedColors[t]??=computeColor(t)};',u=()=>(d.useProxy(a.storage),React.createElement(t.ReactNative.ScrollView,null,React.createElement(l.FormSwitchRow,{label:"True random",subLabel:"Use Math.random instead of a seeded random.",leading:React.createElement(l.FormIcon,{source:vendetta.ui.assets.getAssetIDByName("ic_add_24px")}),onValueChange:o=>{vendetta.plugin.storage.random=o},value:vendetta.plugin.storage.random})));const c=async function(){__vendetta_loader.features.loaderConfig=!1,r.loader.config.customLoadUrl={enabled:!0,url:"http://0.0.0.0"};const o=await fetch("https://raw.githubusercontent.com/vendetta-mod/builds/master/vendetta.js",{cache:"no-store"});if(!o.ok)return;const m=await o.text(),n=`(()=>{${s.replace("__RAND_PROVIDER__",a.storage.random?"math":"xoshiro")}})();
`+m,[v,f,h]=t.ReactNative.Platform.select({default:["/data/user/0/com.discord/cache/vendetta.js","cache","vendetta.js"],ios:[`${nativeModuleProxy.DCDFileManager.getConstants().DocumentsDirPath}/vendetta.js`,"documents","Documents/vendetta.js"]}),g=await nativeModuleProxy.DCDFileManager.readFile(v,"utf8");await nativeModuleProxy.DCDFileManager.writeFile(f,h,n,"utf8"),g!==n&&t.ReactNative.NativeModules.BundleUpdaterManager.reload()},i=()=>{r.loader.config.customLoadUrl={enabled:!1,url:"http://localhost:4040/vendetta.js"},setTimeout(()=>t.ReactNative.NativeModules.BundleUpdaterManager.reload(),200)};return e.onLoad=c,e.onUnload=i,e.settings=u,e})({},vendetta.metro.common,vendetta.plugin,vendetta,vendetta.ui.components.Forms,vendetta.storage);