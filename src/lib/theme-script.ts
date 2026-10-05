export const THEME_STORAGE_KEY = "theme";

/**
 * Runs before first paint (inlined in <head>) so the page never renders with
 * the wrong theme. An explicit choice in localStorage wins; otherwise the
 * system preference is followed, including live changes to it.
 */
export const themeScript = `(function(){
var d=document.documentElement,k=${JSON.stringify(THEME_STORAGE_KEY)},m=window.matchMedia("(prefers-color-scheme: dark)");
function stored(){try{var v=localStorage.getItem(k);return v==="dark"||v==="light"?v:null}catch(e){return null}}
function apply(t){d.dataset.theme=t;d.style.colorScheme=t}
apply(stored()||(m.matches?"dark":"light"));
d.classList.add("js");
m.addEventListener("change",function(e){if(!stored())apply(e.matches?"dark":"light")});
})();`;
