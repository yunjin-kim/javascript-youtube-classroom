(()=>{"use strict";var n={475:(n,e,t)=>{t(18);const i="VIDEO_ID_LIST",o="[404] 개발자에게 문의하세요.",r="공백은 검색할 수 없습니다.",a="100개 이상 저장할 수 없습니다.";function s(n,e,t){!function(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n,e),e.set(n,t)}function A(n,e){var t=function(n,e,t){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return e.get(n)}(n,e);return function(n,e){return e.get?e.get.call(n):e.value}(n,t)}var l=new WeakMap,c=new WeakMap;const d=(n,e=document)=>e.querySelector(n),h=(n,e,t)=>n.addEventListener(e,t);function p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}new class{constructor(){p(this,"onScrollVideoList",(()=>{const{scrollHeight:n,offsetHeight:e,scrollTop:t}=this.videoListContainer;n-e===t&&this.videoListContainer.children.length<100&&this.loadVideo()})),p(this,"onSearchModalButtonClick",(()=>{this.modalContainer.classList.remove("hide")})),p(this,"onSearchFormSubmit",(n=>{n.preventDefault(),this.videoListContainer.scrollTop=0,this.searchVideo.prevSearchKeyword!==this.searchInput.value.trim()&&(this.videoListContainer.replaceChildren(""),this.loadVideo())})),p(this,"onSaveButtonClick",(({target:n})=>{const e=n.classList.contains("video-item__save-button");if(e&&this.saveVideo.saveVideoList.length<100)return this.saveVideo.setStorageVideoList(n.closest("li").dataset.videoId),n.textContent="저장됨",void(n.disabled=!0);e&&alert(a)})),this.searchVideo=new class{constructor(){s(this,l,{writable:!0,value:async n=>{const e=new URL("youtube/v3/search","https://youtube.googleapis.com"),t=new URLSearchParams({part:"snippet",type:"video",maxResults:12,regionCode:"kr",pageToken:this.nextPageToken||"",q:n,key:"AIzaSyBPFNUl5D_CxXWJQuWlCXDuWnb6l6lbhqw"});e.search=t.toString();const i=await fetch(e);if(!i.ok)throw new Error(o);const{items:r,nextPageToken:a}=await i.json();return this.nextPageToken=a,r}}),s(this,c,{writable:!0,value:n=>{if(!n)throw new Error(r)}}),this.prevSearchKeyword="",this.nextPageToken=""}async handleSearchVideo(n){return A(this,c).call(this,n),this.prevSearchKeyword=n,await A(this,l).call(this,n)}},this.saveVideo=new class{constructor(){this.saveVideoList=this.getStorageVideoList()}setStorageVideoList(n){this.saveVideoList=[n,...this.saveVideoList],localStorage.setItem(i,JSON.stringify(this.saveVideoList))}getStorageVideoList(){return JSON.parse(localStorage.getItem(i))||[]}},this.searchModalButton=d("#search-modal-button"),this.modalContainer=d(".modal-container"),this.searchForm=d("#search-form",this.modalContainer),this.searchInput=d("#search-input-keyword",this.searchForm),this.videoListContainer=d(".video-list",this.modalContainer),this.searchResultSection=d(".search-result",this.modalContainer),this.addEvents()}addEvents(){h(this.searchModalButton,"click",this.onSearchModalButtonClick),h(this.searchForm,"submit",this.onSearchFormSubmit),h(this.videoListContainer,"scroll",this.onScrollVideoList),h(this.videoListContainer,"click",this.onSaveButtonClick)}renderSearchVideo(n){this.handleSketonUi(this.videoListContainer.children,"add"),n.length?Array.from(this.videoListContainer.children).find((n=>n.classList.contains("skeleton"))).insertAdjacentHTML("beforebegin",n.map((n=>(({id:{videoId:n},snippet:{title:e,channelTitle:t,publishTime:i,thumbnails:{default:{url:o}}}},r)=>`\n  <li class="video-item" data-video-id="${n}"> \n    <img src="${o}" alt="video-item-thumbnail" class="video-item__thumbnail" />\n    <h4 class="video-item__title">${e}</h4>\n    <p class="video-item__channel-name">${t}</p>\n    <p class="video-item__published-date">${i}</p>\n    ${r?'<button type="button" class="video-item__save-button button" disabled >저장됨</button>':'<button type="button" class="video-item__save-button button">⬇ 저장</button>'}\n  </li>\n`)(n,this.saveVideo.saveVideoList.includes(n.id.videoId)))).join(" ")):this.videoListContainer.insertAdjacentHTML("afterbegin",'\n  <section class="search-result search-result--no-result">\n    <h3 hidden>검색 결과</h3>\n    <div class="no-result">\n      <img src="./src/assets/images/not_found.png" alt="no result image" class="no-result__image">\n      <p class="no-result__description">\n        검색 결과가 없습니다<br />\n        다른 키워드로 검색해보세요\n      </p>\n    </div>\n  </section>\n')}renderVideoSkeleton(){0===this.videoListContainer.children.length&&this.videoListContainer.insertAdjacentHTML("beforeend",Array.from({length:12},(()=>'\n  <div class="skeleton">\n  <div class="image"></div>\n  <p class="line"></p>\n  <p class="line"></p>\n  </div>\n')).join(" ")),this.handleSketonUi(this.videoListContainer.children,"remove")}async loadVideo(){this.renderVideoSkeleton();try{const n=await this.searchVideo.handleSearchVideo(this.searchInput.value.trim());this.renderSearchVideo(n)}catch(n){return this.searchInput.value="",this.searchInput.focus(),this.videoListContainer.replaceChildren(""),alert(n)}}handleSketonUi(n,e){Array.from(n).filter((n=>n.classList.contains("skeleton"))).map((n=>"add"===e?n.classList.add("hide-skeleton"):n.classList.remove("hide-skeleton")))}}},71:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(537),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([n.id,"body {\n    padding: 64px 0;\n    font-size: 16px;\n}\n\n#app {\n    max-width: 1020px;\n    margin: 0 auto;\n}\n\n.classroom-container__title {\n    text-align: center;\n    font-weight: bold;\n    font-size: 34px;\n    line-height: 36px;\n    margin-bottom: 64px;\n}\n\n.nav {\n    display: flex;\n    justify-content: center;\n}\n\n.button {\n    cursor: pointer;\n    border-radius: 4px;\n    border: none;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    letter-spacing: 1.25px;\n}\n\n.nav__button {\n    width: 80px;\n    height: 36px;\n    background: #F5F5F5;\n}\n\n.nav__button:hover {\n    background: #ebebeb;\n}\n","",{version:3,sources:["webpack://./src/css/app.css"],names:[],mappings:"AAAA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB",sourcesContent:["body {\n    padding: 64px 0;\n    font-size: 16px;\n}\n\n#app {\n    max-width: 1020px;\n    margin: 0 auto;\n}\n\n.classroom-container__title {\n    text-align: center;\n    font-weight: bold;\n    font-size: 34px;\n    line-height: 36px;\n    margin-bottom: 64px;\n}\n\n.nav {\n    display: flex;\n    justify-content: center;\n}\n\n.button {\n    cursor: pointer;\n    border-radius: 4px;\n    border: none;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    letter-spacing: 1.25px;\n}\n\n.nav__button {\n    width: 80px;\n    height: 36px;\n    background: #F5F5F5;\n}\n\n.nav__button:hover {\n    background: #ebebeb;\n}\n"],sourceRoot:""}]);const s=a},340:(n,e,t)=>{t.d(e,{Z:()=>d});var i=t(537),o=t.n(i),r=t(645),a=t.n(r),s=t(71),A=t(399),l=t(341),c=a()(o());c.i(s.Z),c.i(A.Z),c.i(l.Z),c.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nol,ul {\n    list-style: none;\n}\n\nhtml, body {\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n}\n\ninput, button, textarea, select {\n    font: inherit;\n}\n","",{version:3,sources:["webpack://./src/css/index.css"],names:[],mappings:"AAIA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,aAAa;AACjB",sourcesContent:["@import './app.css';\n@import './modal.css';\n@import './skeleton.css';\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nol,ul {\n    list-style: none;\n}\n\nhtml, body {\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n}\n\ninput, button, textarea, select {\n    font: inherit;\n}\n"],sourceRoot:""}]);const d=c},399:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(537),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([n.id,".modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.modal-container.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  position: relative;\n  width: 1080px;\n  height: 727px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: #00bcd4;\n  color: #ffffff;\n}\n\n.search-result.search-result--no-result {\n  justify-content: center;\n  align-items: center;\n}\n\n.no-result__image {\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.video-list {\n  width: 1040px;\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: scroll;\n}\n\n.video-item {\n  position: relative;\n  width: 240px;\n  height: 255px;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: #f9f9f9;\n  margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n  background: #efefef;\n}\n\n.search-result {\n  margin: auto;\n}\n\n.video-item__save-button:disabled {\n  background-color: #f9f9f9;\n}","",{version:3,sources:["webpack://./src/css/modal.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qCAAqC;EACrC,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B",sourcesContent:[".modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.modal-container.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  position: relative;\n  width: 1080px;\n  height: 727px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: #00bcd4;\n  color: #ffffff;\n}\n\n.search-result.search-result--no-result {\n  justify-content: center;\n  align-items: center;\n}\n\n.no-result__image {\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.video-list {\n  width: 1040px;\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: scroll;\n}\n\n.video-item {\n  position: relative;\n  width: 240px;\n  height: 255px;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: #f9f9f9;\n  margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n  background: #efefef;\n}\n\n.search-result {\n  margin: auto;\n}\n\n.video-item__save-button:disabled {\n  background-color: #f9f9f9;\n}"],sourceRoot:""}]);const s=a},341:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(537),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([n.id,".skeleton {\n  width: 240px;\n  height: 255px;\n}\n\n.skeleton .image,\n.skeleton .line {\n  background-image: linear-gradient(\n    90deg,\n    #e0e0e0 0px,\n    #ededed 30px,\n    #e0e0e0 60px\n  );\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton .image {\n  height: 135px;\n}\n\n.skeleton .line {\n  height: 16px;\n}\n\n.line {\n  height: 24px;\n  margin: 14px 0;\n}\n\n.skeleton .line:first-child {\n  width: 50%;\n}\n\n.skeleton .line:last-child {\n  width: 80%;\n}\n\n.hide-skeleton {\n  display: none;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}","",{version:3,sources:["webpack://./src/css/skeleton.css"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;;EAEE;;;;;GAKC;EACD,uCAAuC;AACzC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,iCAAiC;EACnC;EACA;;IAEE,0BAA0B;EAC5B;AACF",sourcesContent:[".skeleton {\n  width: 240px;\n  height: 255px;\n}\n\n.skeleton .image,\n.skeleton .line {\n  background-image: linear-gradient(\n    90deg,\n    #e0e0e0 0px,\n    #ededed 30px,\n    #e0e0e0 60px\n  );\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton .image {\n  height: 135px;\n}\n\n.skeleton .line {\n  height: 16px;\n}\n\n.line {\n  height: 24px;\n  margin: 14px 0;\n}\n\n.skeleton .line:first-child {\n  width: 50%;\n}\n\n.skeleton .line:last-child {\n  width: 80%;\n}\n\n.hide-skeleton {\n  display: none;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}"],sourceRoot:""}]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(a[A]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);i&&a[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(o," */"),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([r]).join("\n")}return[e].join("\n")}},18:(n,e,t)=>{var i=t(379),o=t.n(i),r=t(795),a=t.n(r),s=t(569),A=t.n(s),l=t(565),c=t.n(l),d=t(216),h=t.n(d),p=t(589),u=t.n(p),f=t(340),C={};C.styleTagTransform=u(),C.setAttributes=c(),C.insert=A().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=h(),o()(f.Z,C),f.Z&&f.Z.locals&&f.Z.locals},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},a=[],s=0;s<n.length;s++){var A=n[s],l=i.base?A[0]+i.base:A[0],c=r[l]||0,d="".concat(l," ").concat(c);r[l]=c+1;var h=t(d),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var u=o(p,i);i.byIndex=s,e.splice(s,0,{identifier:d,updater:u,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=t(r[a]);e[s].references--}for(var A=i(n,o),l=0;l<r.length;l++){var c=t(r[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=A}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t(475),t(18)})();
//# sourceMappingURL=bundle.js.map