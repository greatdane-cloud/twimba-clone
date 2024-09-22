import{v4 as d}from"https://jspm.dev/uuid";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=l(i);fetch(i.href,s)}})();const n=[{handle:"@TrollBot66756542 💎",profilePic:"/troll.jpg",likes:27,retweets:10,tweetText:`Buy Bitcoin, ETH Make 💰💰💰 low low prices. 
            Guaranteed return on investment. HMU DMs open!!`,replies:[],isLiked:!1,isRetweeted:!1,uuid:"4b161eee-c0f5-4545-9c4b-8562944223ee"},{handle:"@Elon ✅",profilePic:"/musk.png",likes:6500,retweets:234,tweetText:"I need volunteers for a one-way mission to Mars 🪐. No experience necessary🚀",replies:[{handle:"@TomCruise ✅",profilePic:"/tcruise.png",tweetText:"Yes! Sign me up! 😎🛩"},{handle:"@ChuckNorris ✅",profilePic:"/chucknorris.jpeg",tweetText:"I went last year😴"}],isLiked:!1,isRetweeted:!1,uuid:"3c23454ee-c0f5-9g9g-9c4b-77835tgs2"},{handle:"@NoobCoder12",profilePic:"/flower.png",likes:10,retweets:3,tweetText:"Are you a coder if you only know HTML?",replies:[{handle:"@StackOverflower ☣️",profilePic:"/overflow.png",tweetText:"No. Onviosuly not. Go get a job in McDonald's."},{handle:"@YummyCoder64",profilePic:"/love.png",tweetText:"You are wonderful just as you are! ❤️"}],isLiked:!1,isRetweeted:!1,uuid:"8hy671sff-c0f5-4545-9c4b-1237gyys45"}];document.addEventListener("click",function(t){t.target.dataset.like?c(t.target.dataset.like):t.target.dataset.retweet?f(t.target.dataset.retweet):t.target.dataset.reply?u(t.target.dataset.reply):t.target.id==="tweet-btn"&&p()});function c(t){const e=n.filter(function(l){return l.uuid===t})[0];e.isLiked?e.likes--:e.likes++,e.isLiked=!e.isLiked,a()}function f(t){const e=n.filter(function(l){return l.uuid===t})[0];e.isRetweeted?e.retweets--:e.retweets++,e.isRetweeted=!e.isRetweeted,a()}function u(t){document.getElementById(`replies-${t}`).classList.toggle("hidden")}function p(){const t=document.getElementById("tweet-input");t.value&&(n.unshift({handle:"@Scrimba",profilePic:"public/scrimbalogo.png",likes:0,retweets:0,tweetText:t.value,replies:[],isLiked:!1,isRetweeted:!1,uuid:d()}),a(),t.value="")}function w(){let t="";return n.forEach(function(e){let l="";e.isLiked&&(l="liked");let r="";e.isRetweeted&&(r="retweeted");let i="";e.replies.length>0&&e.replies.forEach(function(s){i+=`
                    <div class="tweet-reply">
                    <div class="tweet-inner">
                     <img src="${s.profilePic}" class="profile-pic">
                     <div>
                     <p class="handle">${s.handle}</p>
                     <p class="tweet-text">${s.tweetText}</p>
                    </div>
                    </div>
                    </div>
                        `}),t+=`
    <div class="tweet">
        <div class="tweet-inner">
            <img src="${e.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${e.handle}</p>
                <p class="tweet-text">${e.tweetText}</p>
                <div class="tweet-details">
                    <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${e.uuid}"
                    ></i>
                    ${e.replies.length}
                    </span>
                    <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${l}"
                    data-like="${e.uuid}"
                    ></i>
                    ${e.likes}
                    </span>
                    <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${r}"
                    data-retweet="${e.uuid}"
                    ></i>
                    ${e.retweets}
                    </span>
                </div>   
            </div>            
        </div>
        <div class="hidden" id="replies-${e.uuid}">
        ${i}
    </div> 
    </div>
    `}),t}function a(){document.getElementById("feed").innerHTML=w()}a();
