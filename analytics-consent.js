(() => {
  const ID = "G-SWVLQ1LFZ7", DOMAIN = "companysetupfacts.com", GROUP = "reference", KEY = "37x.analytics-consent";
  if (location.hostname !== DOMAIN || location.search || document.querySelector('meta[name="robots"][content*="noindex" i]')) return;
  const pageType = location.pathname === "/" ? "landing" : location.pathname.includes("search") ? "search" : location.pathname.split("/").filter(Boolean).length > 1 ? "entity" : "content";
  window.dataLayer = window.dataLayer || []; function gtag(){ window.dataLayer.push(arguments); } window.gtag = window.gtag || gtag;
  gtag("consent", "default", { ad_storage:"denied", ad_user_data:"denied", ad_personalization:"denied", analytics_storage:"denied", functionality_storage:"granted", security_storage:"granted", wait_for_update:500 });
  let loaded=false; function load(){ if(loaded)return; loaded=true; gtag("consent","update",{analytics_storage:"granted"}); gtag("js",new Date()); gtag("config",ID,{allow_google_signals:false,allow_ad_personalization_signals:false,site_domain:DOMAIN,site_group:GROUP,page_type:pageType}); const s=document.createElement("script"); s.async=true; s.src="https://www.googletagmanager.com/gtag/js?id="+ID; document.head.appendChild(s); }
  function choose(ok,b){ try{localStorage.setItem(KEY,ok?"granted":"denied")}catch{} if(ok)load(); b.remove(); }
  function show(){ const b=document.createElement("aside"); b.id="analytics-consent"; b.setAttribute("role","dialog"); b.setAttribute("aria-label","Analytics choice"); b.style.cssText="position:fixed;z-index:9999;left:1rem;right:1rem;bottom:1rem;max-width:42rem;margin:auto;padding:1rem;background:#fff;color:#17242a;border:1px solid #83919a;border-radius:.7rem;box-shadow:0 12px 35px #0003;font:15px/1.45 system-ui"; b.innerHTML='<strong>Allow anonymous usage measurement?</strong><p style="margin:.45rem 0 .8rem">This helps us improve useful pages. Google Analytics loads only if you allow it; advertising storage and personalisation remain off.</p><button data-y type="button">Allow analytics</button> <button data-n type="button">Decline</button>'; b.querySelector("[data-y]").onclick=()=>choose(true,b); b.querySelector("[data-n]").onclick=()=>choose(false,b); document.body.appendChild(b); }
  let c=null; try{c=localStorage.getItem(KEY)}catch{} if(c==="granted")load(); else if(c!=="denied")show();
})();

