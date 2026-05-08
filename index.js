/* empty css                      */import{a as v,S as P,i as a}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const q="https://pixabay.com/api/",B="55778076-28ca791bc77771c5473683f0d";function u(o){return v.get(q,{params:{key:B,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const m=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=document.querySelector(".load-more"),M=new P(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const t=o.map(({webformatURL:l,largeImageURL:s,tags:e,likes:r,views:n,comments:w,downloads:S})=>`
          <li class="gallery-item">
            <a href="${s}">
              <img
                class="gallery-image"
                src="${l}"
                alt="${e}"
              />
            </a>

            <div class="info">
              <p><b>Likes</b><br>${r}</p>
              <p><b>Views</b><br>${n}</p>
              <p><b>Comments</b><br>${w}</p>
              <p><b>Downloads</b><br>${S}</p>
            </div>
          </li>
        `).join("");m.insertAdjacentHTML("beforeend",t),M.refresh()}function $(){m.innerHTML=""}function p(){f.classList.remove("hidden")}function y(){f.classList.add("hidden")}function R(){h.classList.remove("hidden")}function b(){h.classList.add("hidden")}const L=document.querySelector(".form"),O=document.querySelector(".load-more");let c="",i=1,d=0;L.addEventListener("submit",x);O.addEventListener("click",E);async function x(o){if(o.preventDefault(),c=o.currentTarget.elements["search-text"].value.trim(),!c){a.warning({message:"Please fill in the search field!",position:"topRight"});return}i=1,$(),b(),p();try{const t=await u(c,i);if(d=t.totalHits,t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),d>15&&R()}catch{a.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{y(),L.reset()}}async function E(){i+=1,p();try{const o=await u(c,i);g(o.hits),i*15>=d&&(b(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),I()}catch{a.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{y()}}function I(){const o=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
