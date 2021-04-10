(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),i=(n(0),n(118)),a={title:"HTTP Foundation"},s={unversionedId:"httpfoundation",id:"httpfoundation",isDocsHomePage:!1,title:"HTTP Foundation",description:"The HTTP Foundation component contains all logic for request, responses and (in the future) sessions and cookies. HTTP Foundation is fully PSR-7 compliant and therefore easily compatible with third party libraries implementing the same interface.",source:"@site/docs/httpfoundation.md",slug:"/httpfoundation",permalink:"/swift-docs/docs/httpfoundation",editUrl:"https://github.com/HenrivantSant/swift/docs/docs/httpfoundation.md",version:"current",sidebar:"docs",previous:{title:"GraphQL",permalink:"/swift-docs/docs/graphql"},next:{title:"Logging",permalink:"/swift-docs/docs/logging"}},c=[{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]},{value:"Session",id:"session",children:[]},{value:"Cookies",id:"cookies",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The HTTP Foundation component contains all logic for request, responses and (in the future) sessions and cookies. HTTP Foundation is fully ",Object(i.b)("a",{parentName:"p",href:"https://www.php-fig.org/psr/psr-7/"},"PSR-7")," compliant and therefore easily compatible with third party libraries implementing the same interface."),Object(i.b)("h2",{id:"request"},"Request"),Object(i.b)("p",null,"The request represents the request made to the application. In a controller this a accessible through ",Object(i.b)("inlineCode",{parentName:"p"},"$this->getRequest()"),". If you need to inject the request in a service inject it as ",Object(i.b)("inlineCode",{parentName:"p"},"Swift\\HttpFoundation\\RequestInterface $request")," to avoid a long chain of passing it through from the controller."),Object(i.b)("h2",{id:"response"},"Response"),Object(i.b)("p",null,"Responses are returned from controller methods and must implement the ",Object(i.b)("a",{parentName:"p",href:"https://www.php-fig.org/psr/psr-7/"},"PSR-7")," compliant ",Object(i.b)("inlineCode",{parentName:"p"},"Swift\\HttpFoundation\\ResponseInterface"),". Swift comes out of the box with the following responses:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Swift\\HttpFoundation\\Response")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Swift\\HttpFoundation\\JsonResponse")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Swift\\HttpFoundation\\RedirectResponse")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Swift\\HttpFoundation\\BinaryFileResponse"))),Object(i.b)("p",null,"More on the use of responses and controllers in Routing and Controllers."),Object(i.b)("h2",{id:"session"},"Session"),Object(i.b)("p",null,"In active development"),Object(i.b)("h2",{id:"cookies"},"Cookies"),Object(i.b)("p",null,"In active development"))}l.isMDXComponent=!0},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,b=u["".concat(a,".").concat(f)]||u[f]||d[f]||i;return n?r.a.createElement(b,s(s({ref:t},p),{},{components:n})):r.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);