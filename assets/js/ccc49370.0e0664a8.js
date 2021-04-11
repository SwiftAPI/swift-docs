(window.webpackJsonp=window.webpackJsonp||[]).push([[41,10,13],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(125),o=a(136),c=a(122),s=a(121);var i=function(e){const{nextItem:t,prevItem:a}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":Object(c.b)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.a.createElement("div",{className:"pagination-nav__item"},a&&l.a.createElement(s.a,{className:"pagination-nav__link",to:a.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(c.a,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(c.a,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),l.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(130),d=a(133),u=a(137);t.default=function(e){const{content:t,sidebar:a}=e,{frontMatter:n,metadata:c}=t,{title:s,description:f,nextItem:g,prevItem:E,editUrl:p}=c,{hide_table_of_contents:v}=n;return l.a.createElement(r.a,{title:s,description:f,wrapperClassName:"blog-wrapper"},t&&l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(m.a,{sidebar:a})),l.a.createElement("main",{className:"col col--7"},l.a.createElement(o.a,{frontMatter:n,metadata:c,isBlogPostPage:!0},l.a.createElement(t,null)),l.a.createElement("div",null,p&&l.a.createElement(u.a,{editUrl:p})),(g||E)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement(i,{nextItem:g,prevItem:E}))),!v&&t.toc&&l.a.createElement("div",{className:"col col--2"},l.a.createElement(d.a,{toc:t.toc})))))}},127:function(e,t,a){"use strict";var n=a(3),l=a(0),r=a.n(l),o=a(120),c=a(121),s=a(119),i=a(123),m=a(55),d=a.n(m),u=a(124);function f({to:e,href:t,label:a,prependBaseUrlToHref:l,...o}){const s=Object(i.a)(e),m=Object(i.a)(t,{forcePrependBaseUrl:!0});return r.a.createElement(c.a,Object(n.a)({className:"footer__link-item"},t?{href:l?m:t}:{to:s},o),a)}const g=({sources:e,alt:t})=>r.a.createElement(u.a,{className:"footer__logo",alt:t,sources:e});t.a=function(){const{footer:e}=Object(s.useThemeConfig)(),{copyright:t,links:a=[],logo:n={}}=e||{},l={light:Object(i.a)(n.src),dark:Object(i.a)(n.srcDark||n.src)};return e?r.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},a&&a.length>0&&r.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(f,e))))):null)))),(n||t)&&r.a.createElement("div",{className:"footer__bottom text--center"},n&&(n.src||n.srcDark)&&r.a.createElement("div",{className:"margin-bottom--sm"},n.href?r.a.createElement(c.a,{href:n.href,className:d.a.footerLogoLink},r.a.createElement(g,{alt:n.alt,sources:l})):r.a.createElement(g,{alt:n.alt,sources:l})),t?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}},133:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(120);var o=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,o=!1;const c=document.getElementsByClassName(e);for(;a<c.length&&!o;){const e=c[a],{href:s}=e,i=decodeURIComponent(s.substring(s.indexOf("#")+1));n.id===i&&(l&&l.classList.remove(t),e.classList.add(t),r(e),o=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},c=a(56),s=a.n(c);const i="table-of-contents__link";function m({toc:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:`#${e.id}`,className:i,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(m,{isChild:!0,toc:e.children}))))):null}t.a=function({toc:e}){return o(i,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(r.a)(s.a.tableOfContents,"thin-scrollbar")},l.a.createElement(m,{toc:e}))}},137:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),l=a.n(n),r=a(122),o=a(3),c=a(120),s=a(61),i=a.n(s);var m=({className:e,...t})=>l.a.createElement("svg",Object(o.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(c.a)(i.a.iconEdit,e),"aria-label":"Edit page"},t),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));function d({editUrl:e}){return l.a.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(m,null),l.a.createElement(r.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);