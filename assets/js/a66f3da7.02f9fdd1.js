(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(7),o=(n(0),n(142)),r={title:"Dependency Injection"},c={unversionedId:"dependency-injection",id:"dependency-injection",isDocsHomePage:!1,title:"Dependency Injection",description:"DI is in the core of the system. It requires hardly any configuration. Under the hood Symfony Dependency Injection is used. See the Symfony documentation for more detailed information on the specifics of DI.",source:"@site/docs/dependency-injection.md",slug:"/dependency-injection",permalink:"/swift-docs/docs/dependency-injection",editUrl:"https://github.com/SwiftAPI/swift-docs/tree/main/docs/dependency-injection.md",version:"current",sidebar:"docs",previous:{title:"Driver",permalink:"/swift-docs/docs/database/driver"},next:{title:"Events, Subscribers & Listeners",permalink:"/swift-docs/docs/events-and-subscribers"}},s=[{value:"What is dependency injection",id:"what-is-dependency-injection",children:[]},{value:"Dependency Injection in Swift",id:"dependency-injection-in-swift",children:[]},{value:"Autowiring",id:"autowiring",children:[{value:"Do not autowire all by default",id:"do-not-autowire-all-by-default",children:[]},{value:"Manually set class to autowire",id:"manually-set-class-to-autowire",children:[]}]},{value:"Interface injection",id:"interface-injection",children:[{value:"Default alias",id:"default-alias",children:[]}]},{value:"Setter injection",id:"setter-injection",children:[{value:"When to use setter injection?",id:"when-to-use-setter-injection",children:[]}]},{value:"DI and Autowire Attribute",id:"di-and-autowire-attribute",children:[{value:"Inheritance",id:"inheritance",children:[]},{value:"Class tagging",id:"class-tagging",children:[]},{value:"Class shared",id:"class-shared",children:[]},{value:"Class exclude",id:"class-exclude",children:[]},{value:"Class autowire",id:"class-autowire",children:[]},{value:"Class aliasing",id:"class-aliasing",children:[]}]},{value:"Compiler passes",id:"compiler-passes",children:[{value:"On Compilation CompilerPass",id:"on-compilation-compilerpass",children:[]},{value:"Post Compilation CompilerPass",id:"post-compilation-compilerpass",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"DI is in the core of the system. It requires hardly any configuration. Under the hood ",Object(o.b)("a",{parentName:"p",href:"https://symfony.com/doc/current/components/dependency_injection.html"},"Symfony Dependency Injection")," is used. See the Symfony documentation for more detailed information on the specifics of DI."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"imports:\n  # ...\n\nservices:\n  _defaults:\n    autowire: false\n    autoconfigure: true\n    public: true\n\n  Foo\\:\n    resource: 'app/Foo/*'\n")),Object(o.b)("p",null,"This will tell the DI Container how it should load the given namespace and to enable DI for all files in the app/Foo directory. In the top of the file the configuration for DI is included. Make sure to put the services.yaml file in the root of your project. Feel free to split your services.yaml in different files if it grows too big. This can easily be done by using an import statement to the additional services.yaml file."),Object(o.b)("h2",{id:"what-is-dependency-injection"},"What is dependency injection"),Object(o.b)("p",null,"We're not diving into the specifics of Dependency Injection here. For more on the subject check the ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dependency_injection"},"wiki"),"."),Object(o.b)("h2",{id:"dependency-injection-in-swift"},"Dependency Injection in Swift"),Object(o.b)("p",null,"Injection usually happens in the constructor. Add the classes you wish to inject as arguments to the constructor, and they will automatically be provided as an instance. How convenient! This is available through autowiring. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\n\nnamespace App\\Foo\\Service;\n\nuse Swift\\Configuration\\ConfigurationInterface;\nuse Swift\\DependencyInjection\\Attributes\\Autowire;\nuse Swift\\Orm\\EntityManagerInterface;\nuse Swift\\Security\\Security;\n\n#[Autowire]\nclass FooService {\n    \n    public function __construct(\n        protected Security               $security,\n        protected ConfigurationInterface $configuration,\n        protected EntityManagerInterface $entityManager,\n        protected ?string                $nonAutowired = null,\n    ) {\n    }\n    \n}\n")),Object(o.b)("h2",{id:"autowiring"},"Autowiring"),Object(o.b)("p",null,"Autowiring will make the dependency injection container read the types in the constructor of the class and inject those types when it creates an instance of the class. Through the services.yaml configuration file this can be enabled by default for all classes, or not. There are some important notes to take into consideration for both."),Object(o.b)("h3",{id:"do-not-autowire-all-by-default"},"Do not autowire all by default"),Object(o.b)("p",null,"It is possible to set autowire to true in the services configuration. If you choose to autowire all classes by default, note that the container will try to inject all types in the constructor. As in the example above, giving a default value will solve this. "),Object(o.b)("p",null,"As seen below, $nonAutowired needs a default value when autowiring this FooService. When autowiring is enabled by default, it can be disabled by setting it to false in the example below. Once again, this is not recommended. It is recommended to specify each class to autowire specifically (more on this later). "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Foo\\Service;\n\nuse Swift\\Configuration\\ConfigurationInterface;\nuse Swift\\Kernel\\Attributes\\DI;\nuse Swift\\Orm\\EntityManagerInterface;\nuse Swift\\Security\\Security;\n\n/**\n * Class FooService\n * @package Foo\\Service\n */\n#[DI(autowire: false)]\nclass FooService {\n\n    public function __construct(\n        protected Security               $security,\n        protected ConfigurationInterface $configuration,\n        protected EntityManagerInterface $entityManager,\n        protected ?string                $nonAutowired = null,\n    ) {\n    }\n    \n}\n")),Object(o.b)("h3",{id:"manually-set-class-to-autowire"},"Manually set class to autowire"),Object(o.b)("p",null,"The example as below is more recommended. By specifically telling the container to autowire you will keep your code more predictable. Simple add to #","[Swift\\Kernel\\Attributes\\Autowire]"," attribute to the class as in the example below to autowire the class."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\n\nnamespace App\\Foo\\Service;\n\nuse Swift\\Configuration\\ConfigurationInterface;\nuse Swift\\DependencyInjection\\Attributes\\Autowire;\nuse Swift\\Orm\\EntityManagerInterface;\nuse Swift\\Security\\Security;\n\n#[Autowire]\nclass FooService {\n    \n    public function __construct(\n        protected Security               $security,\n        protected ConfigurationInterface $configuration,\n        protected EntityManagerInterface $entityManager,\n        protected ?string                $nonAutowired = null,\n    ) {\n    }\n    \n}\n")),Object(o.b)("h2",{id:"interface-injection"},"Interface injection"),Object(o.b)("p",null,"To prevent code from becoming dependent on specific implementations it is recommended to use interfaces instead of direct class references. This however presents challenges for autowiring since an interface is not directly linked to a class implementation, and so the container will need a little help in finding the right class associated to the interface. The container uses 'aliases' which are combination between interface name and variable name to reference to implementing classes. "),Object(o.b)("p",null,"During container compilation default aliases based on Interface implementations will already be created. See 'Default Alias' for more on this."),Object(o.b)("h3",{id:"default-alias"},"Default alias"),Object(o.b)("p",null,"By default a camelCase alias will be created according to following example:\n",Object(o.b)("inlineCode",{parentName:"p"},"class FooBar implement Foo\\Bar\\FooBarInterface")),Object(o.b)("p",null,"We can now inject this using the interface followed by a camelCase of the implementing class. So this would be ",Object(o.b)("inlineCode",{parentName:"p"},"Foo\\Bar\\FooBarInterface $fooBar"),". This is also included in the example above."),Object(o.b)("p",null,"It is also possible to create manual aliases, more on this in 'Class aliasing'."),Object(o.b)("h2",{id:"setter-injection"},"Setter injection"),Object(o.b)("p",null,"Setter injection offers some more functionalities over constructor injection for several specific use cases. Setter injection is also dependency injection by the container, but not via de constructor. But through defined class methods called by the container after the classes has been instantiated."),Object(o.b)("h3",{id:"when-to-use-setter-injection"},"When to use setter injection?"),Object(o.b)("p",null,"This is particularly useful when injection a group of tagged services or when writing abstract or base classes to prevent complex inheritance structures through constructor injection."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\n\nnamespace App\\Foo\\Service;\n\nuse Swift\\Configuration\\ConfigurationInterface;\nuse Swift\\DependencyInjection\\Attributes\\Autowire;\nuse Swift\\DependencyInjection\\Attributes\\DI;\nuse Swift\\HttpClient\\HttpClientInterface;\nuse Swift\\Orm\\EntityManagerInterface;\nuse Swift\\Security\\Security;\n\n#[Autowire]\n#[DI( tags: [ 'foo.service', 'foo.example' ] )]\nclass FooService {\n    \n    protected iterable $services;\n    protected HttpClientInterface $httpClient;\n    \n    public function __construct(\n        protected Security               $security,\n        protected ConfigurationInterface $configuration,\n        protected EntityManagerInterface $entityManager,\n        protected ?string                $nonAutowired = null,\n    ) {\n    }\n    \n    /**\n     * @param \\Swift\\HttpClient\\HttpClientInterface $httpClient\n     */\n    #[Autowire]\n    public function setHttpClient( HttpClientInterface $httpClient ): void {\n        $this->httpClient = $httpClient;\n    }\n    \n    #[Autowire]\n    public function setTaggedServices( #[Autowire( tag: 'example_tag' )] iterable $services ): void {\n        $this->services = $services;\n    }\n    \n}\n")),Object(o.b)("h2",{id:"di-and-autowire-attribute"},"DI and Autowire Attribute"),Object(o.b)("p",null,"Container configuration happens through the DI Attribute. This comes with multiple configuration options. The Autowire attribute is just a shortcut to set Autowire to true."),Object(o.b)("h3",{id:"inheritance"},"Inheritance"),Object(o.b)("p",null,"Note that attribute settings are inherited from classes, interfaces and traits! Settings can be overwritten. When an implemented interface claims autowire to be false, the class can overwrite this to be true."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php declare(strict_types=1);\n\nnamespace Swift\\DependencyInjection\\Attributes;\n\nuse Attribute;\n\n\n#[Attribute(Attribute::TARGET_CLASS)]\nclass DI {\n\n    public function __construct(\n        public array $tags = [],\n        public bool $shared = true,\n        public bool $exclude = false,\n        public bool $autowire = true,\n        public array $aliases = [],\n    ) {\n    }\n}\n")),Object(o.b)("h3",{id:"class-tagging"},"Class tagging"),Object(o.b)("p",null,"By tagging services they can be retrieved from the container as a batch. As used on the previous example with Setter Injection."),Object(o.b)("h3",{id:"class-shared"},"Class shared"),Object(o.b)("p",null,"By default classes classes are shared. So the container will only make one single instance and inject this in all dependents. By setting shared to false, a new instance will be created every time. This might be useful in some cases."),Object(o.b)("h3",{id:"class-exclude"},"Class exclude"),Object(o.b)("p",null,"When a class in excluded it will be unknown in the container. Note that tagging for example will also not work on this classes if excluded. If you're not sure about the difference, it's recommended to set autowire to false instead of excluding."),Object(o.b)("h3",{id:"class-autowire"},"Class autowire"),Object(o.b)("p",null,"Set the class to autowire or not. It is recommended to always provide either true or false so changing the general autowire settings does not break the application."),Object(o.b)("h3",{id:"class-aliasing"},"Class aliasing"),Object(o.b)("p",null,"A class can have multiple aliases. Those aliases can be type hinted for dependency injection. Usually you'd want to use this to relate interfaces to implementing classes to avoid having to depend on them directly, which would make maintaining the application much harder on long term."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Foo\\Service;\n\nuse Swift\\Kernel\\Attributes\\DI;\n\n#[DI(aliases: [BarInterface::class . ' $barService'])]\nclass FooService implements BarInterface {\n\n}\n")),Object(o.b)("h2",{id:"compiler-passes"},"Compiler passes"),Object(o.b)("p",null,"It is possible to directly hook into the container compilation and adjust the service definitions in any desired way. There's to kinds of CompilerPasses:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"On compilation CompilerPass"),Object(o.b)("li",{parentName:"ul"},"Post compilation CompilerPass (passes run after the container compiled, but before the application is initialized)")),Object(o.b)("h3",{id:"on-compilation-compilerpass"},"On Compilation CompilerPass"),Object(o.b)("p",null,"To register the compiler pass simply implement the ",Object(o.b)("inlineCode",{parentName:"p"},"Swift\\DependencyInjection\\CompilerPass\\CompilerPassInterface"),". This is useful for adding actual configuration before compilation. See the example below from the GraphQl component."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\n\nnamespace App\\Foo\\DependencyInjection;\n\n\nuse Swift\\DependencyInjection\\Container;\n\nclass FooPrecompilerPass implements \\Swift\\DependencyInjection\\CompilerPass\\CompilerPassInterface {\n    \n    public function process( Container $container ) {\n        // Add tags to definitions\n        // Add method calls to definitions\n        // Etc.\n    }\n    \n}\n")),Object(o.b)("h3",{id:"post-compilation-compilerpass"},"Post Compilation CompilerPass"),Object(o.b)("p",null,"Useful for post compilation tasks like registering tagged events or subscribers."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\n\nnamespace App\\Foo\\DependencyInjection;\n\n\nuse Swift\\DependencyInjection\\Container;\n\nclass FooPostCompilerPass implements \\Swift\\DependencyInjection\\CompilerPass\\PostCompilerPassInterface {\n    \n    public function process( Container $container ) {\n        // Find tags services\n        // Register services to listener\n        // Etc.\n    }\n    \n}\n")))}u.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=i,f=p["".concat(r,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);