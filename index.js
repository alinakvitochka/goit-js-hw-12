/* empty css                      */import{a as P,S as q,i as n}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const B="https://pixabay.com/api/",M="55778076-28ca791bc77771c5473683f0d";async function f(o,t=1){return(await P.get(B,{params:{key:M,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),g=document.querySelector(".load-more"),R=new q(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const t=o.map(({webformatURL:i,largeImageURL:c,tags:e,likes:r,views:a,comments:S,downloads:v})=>`
          <li class="gallery-item">
            <a href="${c}">
              <img
                class="gallery-image"
                src="${i}"
                alt="${e}"
              />
            </a>

            <div class="info">
              <p><b>Likes</b><br>${r}</p>
              <p><b>Views</b><br>${a}</p>
              <p><b>Comments</b><br>${S}</p>
              <p><b>Downloads</b><br>${v}</p>
            </div>
          </li>
        `).join("");m.insertAdjacentHTML("beforeend",t),R.refresh()}function $(){m.innerHTML=""}function y(){h.classList.remove("hidden")}function b(){h.classList.add("hidden")}function L(){g.classList.remove("hidden")}function d(){g.classList.add("hidden")}const w=document.querySelector(".form"),O=document.querySelector(".load-more");let l="",s=1,u=0;w.addEventListener("submit",x);O.addEventListener("click",E);async function x(o){if(o.preventDefault(),l=o.currentTarget.elements["search-text"].value.trim(),!l){n.warning({message:"Please fill in the search field!",position:"topRight"});return}s=1,$(),d(),y();try{const t=await f(l,s);if(u=t.totalHits,t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(p(t.hits),u<=15){n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),d();return}L()}catch{n.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{b(),w.reset()}}async function E(){s+=1,d(),y();try{const o=await f(l,s);p(o.hits),s*15>=u?n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):L(),I()}catch{n.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{b()}}function I(){const o=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
