(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{148:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(a,".").concat(m)]||p[m]||f[m]||o;return r?i.a.createElement(d,l(l({ref:t},s),{},{components:r})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),o=(r(0),r(148)),a={title:"Firewall"},l={unversionedId:"security/firewall",id:"security/firewall",isDocsHomePage:!1,title:"Firewall",description:"The firewall is a security feature that allows you to restrict access to your API.",source:"@site/docs/security/firewall.md",slug:"/security/firewall",permalink:"/swift-docs/docs/security/firewall",editUrl:"https://github.com/SwiftAPI/swift-docs/tree/main/docs/security/firewall.md",version:"current",sidebar:"docs",previous:{title:"Authorization",permalink:"/swift-docs/docs/security/authorization"},next:{title:"Rate Limiter",permalink:"/swift-docs/docs/security/ratelimiter"}},c=[{value:"Login throttling",id:"login-throttling",children:[]}],s={toc:c};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The firewall is a security feature that allows you to restrict access to your API. "),Object(o.b)("h2",{id:"login-throttling"},"Login throttling"),Object(o.b)("p",null,"Login throttling is a security feature that allows you to restrict the number of login attempts within a given time frame. This is enabled by default and limited to 5 attempts per 15 minutes using the ",Object(o.b)("a",{parentName:"p",href:"/swift-docs/docs/security/ratelimiter#example-of-usage-in-middleware"},"SlidingWindowStrategy"),". "),Object(o.b)("p",null,"Login Throttling can be configured in ",Object(o.b)("inlineCode",{parentName:"p"},"etc/config/security.yaml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"firewalls:\n  main: \n  login_throttling:\n    # The number of login attempts allowed within 15 minutes using a sliding window strategy\n    max_attempts: 5\n")),Object(o.b)("p",null,"Login throttling can not be disabled. If you want to disable login throttling (not recommended), just use a very high number of max attempts."),Object(o.b)("p",null,"The lock will automatically be released after 15 minutes, or sooner if some tokens expire sooner. Each token will be released after 15 minutes."))}u.isMDXComponent=!0}}]);