(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return _}));var r=n(3),o=n(7),i=(n(0),n(141)),a={title:"Introduction"},c={unversionedId:"runtime/introduction",id:"runtime/introduction",isDocsHomePage:!1,title:"Introduction",description:"PHP is great. It's easy. It's flexible. It's open source. However, it's not always fast, it's not asynchronous, and it's hard to work with things like websockets.",source:"@site/docs/runtime/introduction.md",slug:"/runtime/introduction",permalink:"/swift-docs/docs/runtime/introduction",editUrl:"https://github.com/SwiftAPI/swift-docs/tree/main/docs/runtime/introduction.md",version:"current",sidebar:"docs",previous:{title:"Firewall",permalink:"/swift-docs/docs/security/firewall"},next:{title:"Configuration",permalink:"/swift-docs/docs/runtime/configuration"}},s=[{value:"Usage",id:"usage",children:[{value:"Starting the Runtime",id:"starting-the-runtime",children:[]}]}],u={toc:s};function _(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"PHP is great. It's easy. It's flexible. It's open source. However, it's not always fast, it's not asynchronous, and it's hard to work with things like websockets."),Object(i.b)("p",null,"A runtime would be a great way to make it easy to work with things like websockets, and it also eliminates bootstrapping the application on every request. Sounds great right!? Exactly!"),Object(i.b)("p",null,"The development of the Runtime Component is just getting started. It's not ready for production yet, but it's ready for you to try it out. At the moment it exists of four components:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/swift-docs/docs/runtime/cron"},"Cron")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/swift-docs/docs/runtime/coroutines"},"Coroutines")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/swift-docs/docs/runtime/websockets"},"WebSockets")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/swift-docs/docs/runtime/filewatcher"},"FileWatcher"))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"The Runtime can be started by running the command below. Since it's a runtime, it will keep running until you stop it. Once you stop it, the runtime will stop and the sockets will be closed."),Object(i.b)("h3",{id:"starting-the-runtime"},"Starting the Runtime"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"bin/server runtime:start\n")),Object(i.b)("p",null,"This should give you an output somewhat like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ bin/server runtime:start\n\n   _______          _______ ______ _______   _____  _    _ _   _ _______ _____ __  __ ______\n  / ____\\ \\        / /_   _|  ____|__   __| |  __ \\| |  | | \\ | |__   __|_   _|  \\/  |  ____|\n | (___  \\ \\  /\\  / /  | | | |__     | |    | |__) | |  | |  \\| |  | |    | | | \\  / | |__\n  \\___ \\  \\ \\/  \\/ /   | | |  __|    | |    |  _  /| |  | | . ` |  | |    | | | |\\/| |  __|\n  ____) |  \\  /\\  /   _| |_| |       | |    | | \\ \\| |__| | |\\  |  | |   _| |_| |  | | |____\n |_____/    \\/  \\/   |_____|_|       |_|    |_|  \\_\\____/|_| \\_|  |_|  |_____|_|  |_|______|\n\n\nCoroutines\n==========\n\nScheduled 2 coroutines\n\n\n\nFile watcher\n============\n\n  Server will restart on changes in configured files and/or directories\n\n ------------------------------------- ----------\n  Watching                              Ignoring\n ------------------------------------- ----------\n  services.yaml, app, src, etc/config   tests\n ------------------------------------- ----------\n\n\n\n\nWebsocket server\n================\n\n\u2705  Successfully booted socket router\n\n -------- ---------\n  Status   Enabled\n  Port     8000\n  Routes   1\n -------- ---------\n\n\n\u2839\n")))}_.isMDXComponent=!0},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),_=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=_(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=_(n),b=r,d=l["".concat(a,".").concat(b)]||l[b]||p[b]||i;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);