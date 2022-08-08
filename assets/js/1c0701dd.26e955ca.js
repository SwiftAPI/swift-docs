(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{144:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),c=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,b=u["".concat(d,".").concat(h)]||u[h]||p[h]||a;return r?i.a.createElement(b,l(l({ref:t},s),{},{components:r})):i.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,d=new Array(a);d[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,d[1]=l;for(var s=2;s<a;s++)d[s]=r[s];return i.a.createElement.apply(null,d)}return i.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return d})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return c}));var n=r(3),i=r(7),a=(r(0),r(144)),d={title:"Middleware"},l={unversionedId:"middleware",id:"middleware",isDocsHomePage:!1,title:"Middleware",description:"Middleware is a queue of callbacks that will be executed in order. The middleware stack is executed in the order that the middleware is added to the stack. The middleware stack is executed for each request. The middleware is responsible for handling the request and generating the response.",source:"@site/docs/middleware.md",slug:"/middleware",permalink:"/swift-docs/docs/middleware",editUrl:"https://github.com/SwiftAPI/swift-docs/tree/main/docs/middleware.md",version:"current",sidebar:"docs",previous:{title:"Attributes",permalink:"/swift-docs/docs/architecture/attributes"},next:{title:"Command line interface",permalink:"/swift-docs/docs/command-line-interface"}},o=[{value:"Usage",id:"usage",children:[{value:"Modifying the response",id:"modifying-the-response",children:[]},{value:"Async middleware",id:"async-middleware",children:[]}]},{value:"Middleware queue",id:"middleware-queue",children:[]},{value:"Middleware execution order",id:"middleware-execution-order",children:[]},{value:"Default middleware",id:"default-middleware",children:[{value:"RequestParsingMiddleware",id:"requestparsingmiddleware",children:[]},{value:"DefaultTimeZoneMiddleware",id:"defaulttimezonemiddleware",children:[]},{value:"DeprecationMiddleware",id:"deprecationmiddleware",children:[]},{value:"CorsMiddleware",id:"corsmiddleware",children:[]},{value:"AuthMiddleware",id:"authmiddleware",children:[]},{value:"RateLimitingMiddleware",id:"ratelimitingmiddleware",children:[]},{value:"RequestLoggingMiddleware",id:"requestloggingmiddleware",children:[]},{value:"GraphQlMiddleware",id:"graphqlmiddleware",children:[]},{value:"RestMiddleware",id:"restmiddleware",children:[]}]}],s={toc:o};function c(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Middleware is a queue of callbacks that will be executed in order. The middleware stack is executed in the order that the middleware is added to the stack. The middleware stack is executed for each request. The middleware is responsible for handling the request and generating the response. "),Object(a.b)("p",null,"Middleware is a good place to add logging, authentication, routing, etc."),Object(a.b)("p",null,"Swift middleware is compliant with the ",Object(a.b)("a",{parentName:"p",href:"https://www.php-fig.org/psr/psr-15/"},"PSR-15 middleware interface"),". Any implementation of the ",Object(a.b)("inlineCode",{parentName:"p"},"Psr\\Http\\Server\\MiddlewareInterface")," can be used and will automatically be recognized by the kernel and added to the queue."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"Middlewares will automatically be added to the kernel. All middleware must implement the ",Object(a.b)("inlineCode",{parentName:"p"},"Psr\\Http\\Server\\MiddlewareInterface")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Swift\\Kernel\\Middleware\\MiddlewareInterface")," which is an extension of the PSR interface."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\nnamespace Swift\\Kernel\\Middleware;\n\nuse Swift\\Configuration\\ConfigurationInterface;\nuse Swift\\DependencyInjection\\Attributes\\Autowire;\n\n#[Autowire]\nclass CorsMiddleware implements MiddlewareInterface {\n    \n    public function __construct(\n        protected ConfigurationInterface $configuration,\n    ) {\n    }\n    \n    public function getOrder(): int {\n        return KernelMiddlewareOrder::CORS;\n    }\n    \n    public function process(\n        \\Psr\\Http\\Message\\ServerRequestInterface $request,\n        \\Psr\\Http\\Server\\RequestHandlerInterface $handler,\n    ): \\Psr\\Http\\Message\\ResponseInterface {\n        if ( $this->configuration->get( 'app.allow_cors', 'root' ) && $request->isPreflight() ) {\n            return new \\Swift\\HttpFoundation\\CorsResponse();\n        }\n        \n        return $handler->handle( $request );\n    }\n    \n}\n")),Object(a.b)("h3",{id:"modifying-the-response"},"Modifying the response"),Object(a.b)("p",null,"The handler returns a response. The response can be modified by the middleware."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"public function process(\n    \\Psr\\Http\\Message\\ServerRequestInterface $request,\n    \\Psr\\Http\\Server\\RequestHandlerInterface $handler,\n): \\Psr\\Http\\Message\\ResponseInterface {\n    return $handler->handle( $request )->withHeader(\n        'X-Powered-By',\n        $this->configuration->get( 'app.name', 'root' ),\n    );\n}\n")),Object(a.b)("h3",{id:"async-middleware"},"Async middleware"),Object(a.b)("p",null,"ReactPHP can be used to handle async middleware. This is a good way to handle independent tasks, so they won't block the request."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"public function process( ServerRequestInterface $request, RequestHandlerInterface $handler ): ResponseInterface {\n    // There's no point in logging cli requests\n    if ( ! $this->configuration->get( 'app.log_requests', 'app' ) || ( Environment::isCli() && ! Environment::isRuntime() ) ) {\n        return $handler->handle( $request );\n    }\n    \n    \\React\\Async\\async( function () use ( $request ) {\n        $requestLog = new LogRequest();\n        $requestLog->setIp( $request->getClientIp() );\n        $requestLog->setOrigin( $request->getUri()->getPath() );\n        $requestLog->setTime( new \\DateTime() );\n        $requestLog->setMethod( $request->getMethod() );\n        $requestLog->setHeaders( (object) $request->getHeaders()->all() );\n        $requestLog->setBody( (object) $request->getParsedBody() );\n        $requestLog->setCode( 200 );\n\n        $this->entityManager->persist( $requestLog );\n        $this->entityManager->run();\n    } )();\n    \n    return $handler->handle( $request );\n}\n")),Object(a.b)("h2",{id:"middleware-queue"},"Middleware queue"),Object(a.b)("p",null,"All middleware is added to a queue in which it will be executed in order when it's added to the stack. This can be influenced by implementing the ",Object(a.b)("inlineCode",{parentName:"p"},"Swift\\Middleware\\MiddlewareInterface"),", which is an extension of the PSR interface."),Object(a.b)("h2",{id:"middleware-execution-order"},"Middleware execution order"),Object(a.b)("p",null,"Middleware is executed in the order that it is added to the stack. This order can be influenced by implementing the ",Object(a.b)("inlineCode",{parentName:"p"},"Swift\\Middleware\\MiddlewareInterface"),", which is an extension of the PSR interface. This interface also adds the ",Object(a.b)("inlineCode",{parentName:"p"},"getOrder(): int")," method. All middlewares not implementing this method will default to order 0. "),Object(a.b)("h2",{id:"default-middleware"},"Default middleware"),Object(a.b)("p",null,"Swift itself relies fully on middleware. The middlewares that are available by default in the following order are:"),Object(a.b)("h3",{id:"requestparsingmiddleware"},"RequestParsingMiddleware"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Swift\\HttpFoundation\\Kernel\\Middleware\\RequestParsingMiddleware")," parses any PSR-7 request to a Swift ",Object(a.b)("inlineCode",{parentName:"p"},"Swift\\HttpFoundation\\ServerRequest")," request. It has order - 80."),Object(a.b)("h3",{id:"defaulttimezonemiddleware"},"DefaultTimeZoneMiddleware"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Swift\\Kernel\\Middleware\\DefaultTimeZoneMiddleware")," sets the default timezone as configured in the application config. It has order - 50."),Object(a.b)("h3",{id:"deprecationmiddleware"},"DeprecationMiddleware"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Swift\\Kernel\\Middleware\\DeprecationMiddleware")," sets the correct Deprecation level for the application. It has order -50."),Object(a.b)("h3",{id:"corsmiddleware"},"CorsMiddleware"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Swift\\Kernel\\Middleware\\CorsMiddleware")," intercepts any CORS preflight request and returns a CORS response. It has order - 45."),Object(a.b)("h3",{id:"authmiddleware"},"AuthMiddleware"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Swift\\Security\\Authentication\\Kernel\\Middleware\\AuthMiddleware")," is responsible for handling authentication. It has order - 10."),Object(a.b)("h3",{id:"ratelimitingmiddleware"},"RateLimitingMiddleware"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Swift\\Security\\RateLimiter\\Kernel\\Middleware\\RateLimitingMiddleware")," is responsible for default rate limiting. It has order - 5."),Object(a.b)("h3",{id:"requestloggingmiddleware"},"RequestLoggingMiddleware"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Swift\\Kernel\\Middleware\\RequestLoggingMiddleware")," logs all requests to the database if enabled. It has order 0."),Object(a.b)("h3",{id:"graphqlmiddleware"},"GraphQlMiddleware"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Swift\\GraphQl\\Middleware\\RequestMiddleware")," is responsible for handling GraphQl requests. It has order 30."),Object(a.b)("h3",{id:"restmiddleware"},"RestMiddleware"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Swift\\Router\\Kernel\\Middleware\\RestMiddleware")," is responsible for handling REST requests. It has order 40."))}c.isMDXComponent=!0}}]);