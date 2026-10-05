import { defaultLocale, LOCALE_STORAGE_KEY, locales } from "@/i18n/config";

/**
 * Inlined on `/`: sends the visitor to the language saved by the switcher,
 * otherwise to the first supported language in the browser's preferences,
 * otherwise to the default locale.
 */
export const localeRedirectScript = `(function(){
var supported=${JSON.stringify(locales)},fallback=${JSON.stringify(defaultLocale)},l=null;
try{l=localStorage.getItem(${JSON.stringify(LOCALE_STORAGE_KEY)})}catch(e){}
if(supported.indexOf(l)<0){
l=null;
var prefs=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""];
for(var i=0;i<prefs.length&&!l;i++){var p=String(prefs[i]).toLowerCase().split("-")[0];if(supported.indexOf(p)>=0)l=p}
}
location.replace("/"+(l||fallback)+location.search+location.hash);
})();`;
