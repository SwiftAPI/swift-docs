(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(7),r=(n(0),n(118)),o={title:"Dependency Injection"},s={unversionedId:"dependency-injection",id:"dependency-injection",isDocsHomePage:!1,title:"Dependency Injection",description:"DI is in the core of the system. It requires barely any configuration. Under the hood Symfony Dependency Injection is used to provide this. See the Symfony documentation for more detailed information on the specifics of DI.",source:"@site/docs/dependency-injection.md",slug:"/dependency-injection",permalink:"/swift-docs/docs/dependency-injection",editUrl:"https://github.com/HenrivantSant/swift/docs/docs/dependency-injection.md",version:"current",sidebar:"docs",previous:{title:"Database layer",permalink:"/swift-docs/docs/database"},next:{title:"Events & Subscribers",permalink:"/swift-docs/docs/events-and-subscribers"}},c=[{value:"What is dependency injection",id:"what-is-dependency-injection",children:[]},{value:"Autowiring",id:"autowiring",children:[]},{value:"Autowire Attribute",id:"autowire-attribute",children:[]},{value:"Interface injection",id:"interface-injection",children:[]},{value:"Setter injection",id:"setter-injection",children:[]},{value:"DI and Autowire Attribute",id:"di-and-autowire-attribute",children:[]},{value:"Compiler passes",id:"compiler-passes",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"DI is in the core of the system. It requires barely any configuration. Under the hood ",Object(r.b)("a",{parentName:"p",href:"https://symfony.com/doc/current/components/dependency_injection.html"},"Symfony Dependency Injection")," is used to provide this. See the Symfony documentation for more detailed information on the specifics of DI."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"imports:\n  - { resource: vendor/henrivantsant/swift/services.yaml }\n\nparameters:\n  # ...\n\nservices:\n  _defaults:\n    autowire: false\n    autoconfigure: true\n    public: true\n\n  Foo\\:\n    resource: 'app/Foo/*'\n")),Object(r.b)("p",null,"This will tell the DI component to enable DI for all files in the app/Foo directory. In the top of the file the framework configuration for DI is included. Make sure to put this services.yaml file in the root of your project. Feel free to split your services.yaml in different files if it grows too big. This can easily be done by using a import statement to the additional services.yaml file, just like framework services.yaml is imported."),Object(r.b)("h3",{id:"what-is-dependency-injection"},"What is dependency injection"),Object(r.b)("p",null,"Injection usually happens in the constructor. Add the classes you wish to inject as arguments to the constructor and they will be automatically provided as an instance. How convenient! This is available through autowiring. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Foo\\Service;\n\nuse Swift\\Configuration\\ConfigurationInterface;\nuse Swift\\Kernel\\Attributes\\Autowire;\nuse Swift\\Model\\EntityInterface;\nuse Swift\\Security\\Security;\n\n/**\n * Class FooService\n * @package Foo\\Service\n */\n#[Autowire]\nclass FooService {\n\n    /**\n     * FooService constructor.\n     *\n     * @param Security $security\n     * @param ConfigurationInterface $configuration\n     * @param EntityInterface $fooRepository\n     * @param string|null $nonAutowired\n     */\n    public function __construct(\n        private Security $security,\n        private ConfigurationInterface $configuration,\n        private EntityInterface $fooRepository,\n        private string|null $nonAutowired = null,\n    ) {\n    }\n    \n}\n")),Object(r.b)("h3",{id:"autowiring"},"Autowiring"),Object(r.b)("p",null,"Autowiring will make the dependency injection container read the types in the constructor of the class and inject those types when it creates an instance of the class. Through the services.yaml configuration file this can be enabled by default for all classes, or not. There are some important notes to take into consideration for both."),Object(r.b)("h3",{id:"autowire-attribute"},"Autowire Attribute"),Object(r.b)("p",null,"It is recommended to not autowire all classes by default, but to specifically add the attribute to a class. This prevents for weird bugs in class construction and easily allows for non-autowired classes to exist."),Object(r.b)("h4",{id:"autowire-all-by-default"},"Autowire all by default"),Object(r.b)("p",null,"This is not recommended. If you choose to autowire all classes by default, note that the container will try to inject all types in the constructor. As in the example above, giving a default value will solve this."),Object(r.b)("p",null,"Another option is to manually disable autowiring using the DI Attribute"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Foo\\Service;\n\nuse Swift\\Configuration\\ConfigurationInterface;\nuse Swift\\Kernel\\Attributes\\DI;\nuse Swift\\Model\\EntityInterface;\nuse Swift\\Security\\Security;\nuse Foo\\Bar\\FooBarInterface;\n\n/**\n * Class FooService\n * @package Foo\\Service\n */\n#[DI(autowire: false)]\nclass FooService {\n\n    /**\n     * FooService constructor.\n     *\n     * @param Security $security\n     * @param ConfigurationInterface $configuration\n     * @param EntityInterface $fooRepository\n *   * @param FooBarInterface $fooBar,\n     * @param string|null $nonAutowired\n     */\n    public function __construct(\n        private Security $security,\n        private ConfigurationInterface $configuration,\n        private EntityInterface $fooRepository,\n        private FooBarInterface $fooBar,\n        private string|null $nonAutowired = null,\n    ) {\n    }\n    \n}\n")),Object(r.b)("h3",{id:"interface-injection"},"Interface injection"),Object(r.b)("p",null,"To prevent code from becoming to dependent on specific implementations it is recommended to use interfaces instead of direct class references. This however present challenges for autowiring since an interface is not linked to a class implementation, and so the container will need a little help in finding the right class associated to the interface. The container uses 'aliases' which are combination between interface name and variable name to reference to implementing classes."),Object(r.b)("h4",{id:"default-alias"},"Default alias"),Object(r.b)("p",null,"By default a camelCase alias will be created according to following example:\n",Object(r.b)("inlineCode",{parentName:"p"},"class FooBar implement Foo\\Bar\\FooBarInterface")),Object(r.b)("p",null,"We can now inject this using the interface followed by a camelCase of the implementing class. So this would be ",Object(r.b)("inlineCode",{parentName:"p"},"Foo\\Bar\\FooBarInterface $fooBar"),". This is also included in the example above."),Object(r.b)("p",null,"It is also possible to create manual aliases, more on this in 'Class aliasing'."),Object(r.b)("h3",{id:"setter-injection"},"Setter injection"),Object(r.b)("p",null,"Setter injection offers some more functionalities over constructor injection for several specific use cases. Setter injection is also dependency injection by the container, but not via de constructor. But through defined class methods called by the container after the classes has been instantiated."),Object(r.b)("h4",{id:"when-to-use-setter-injection"},"When to use setter injection?"),Object(r.b)("p",null,"This is particularly useful when injection a group of tagged services or when writing abstract or base classes to prevent complex inheritance structures through constructor injection."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Foo\\Service;\n\nuse Swift\\Configuration\\ConfigurationInterface;\nuse Swift\\HttpFoundation\\RequestInterface;\nuse Swift\\Kernel\\Attributes\\Autowire;\nuse Swift\\Kernel\\Attributes\\DI;\nuse Swift\\Model\\EntityInterface;\nuse Swift\\Security\\Security;\n\n/**\n * Class FooService\n * @package Foo\\Service\n */\n#[DI(tags: ['foo.service', 'foo.example']), Autowire]\nclass FooService {\n\n    private RequestInterface $request;\n    private iterable $services;\n\n    /**\n     * FooService constructor.\n     *\n     * @param Security $security\n     * @param ConfigurationInterface $configuration\n     * @param EntityInterface $fooRepository\n     * @param string|null $nonAutowired\n     */\n    public function __construct(\n        private Security $security,\n        private ConfigurationInterface $configuration,\n        private EntityInterface $fooRepository,\n        private string|null $nonAutowired = null,\n    ) {\n    }\n\n    #[Autowire]\n    public function setAutowired( RequestInterface $request ): void {\n        $this->request = $request;\n    }\n\n    #[Autowire]\n    public function setTaggedServices( #[Autowire(tag: 'example_tag')] iterable $services ): void {\n        $this->services = $services;\n    }\n\n}\n")),Object(r.b)("h3",{id:"di-and-autowire-attribute"},"DI and Autowire Attribute"),Object(r.b)("p",null,"Container configuration happens through the DI Attribute. This comes with multiple configuration options. The Autowire attribute is just to a shortcut to set Autowire to true."),Object(r.b)("h4",{id:"inheritance"},"Inheritance"),Object(r.b)("p",null,"Note that attribute settings are inherited from classes, interfaces and traits! Settings can be overwritten. When an implemented interface claims autowire to be false, the class can overwrite this to be true."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\n\nnamespace Swift\\Kernel\\Attributes;\n\nuse Attribute;\n\n/**\n * Class DI\n * @package Swift\\Kernel\\Attributes\n */\n#[Attribute(Attribute::TARGET_CLASS)]\nclass DI {\n\n    /**\n     * DI constructor.\n     *\n     * @param array $tags\n     * @param bool $shared\n     * @param bool $exclude\n     * @param bool $autowire\n     * @param array $aliases\n     */\n    public function __construct(\n        public array $tags = array(),\n        public bool $shared = true,\n        public bool $exclude = false,\n        public bool $autowire = true,\n        public array $aliases = array(),\n    ) {\n    }\n}\n")),Object(r.b)("h4",{id:"class-tagging"},"Class tagging"),Object(r.b)("p",null,"By tagging services they can be retrieved from the container as a batch. As used on the previous example with Setter Injection."),Object(r.b)("h4",{id:"class-shared"},"Class shared"),Object(r.b)("p",null,"By default classes classes are shared. So the container will only make one single instance and inject this in all dependents. By setting shared to false, a new instance will be created every time. This might be useful in some cases."),Object(r.b)("h4",{id:"class-exclude"},"Class exclude"),Object(r.b)("p",null,"When a class in excluded it will be unknown in the container. Note that tagging for example will also not work on this classes if excluded. If you're not sure what you're doing, it's recommended to set autowire to false instead of excluding."),Object(r.b)("h4",{id:"class-autowire"},"Class autowire"),Object(r.b)("p",null,"Set the class to autowire or not. It is recommended to always provide either true or false so changing the general autowire settings does not break the application."),Object(r.b)("h4",{id:"class-aliasing"},"Class aliasing"),Object(r.b)("p",null,"A class can have multiple aliases. Those aliases can be type hinted for dependency injection. Usually you'd want to use this to relate interfaces to implementing classes to avoid having to depend on them directly, which would make maintaining the application much harder on long term."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Foo\\Repository;\n\nuse Swift\\Kernel\\Attributes\\DI;\nuse Swift\\Model\\Attributes\\DB;\nuse Swift\\Model\\Entity;\nuse Swift\\Model\\EntityInterface;\n\n/**\n * Class FooRepository\n * @package Foo\\Repository\n */\n#[DI(aliases: [EntityInterface::class . ' $fooRepository']), DB(table: 'foo_bar')]\nclass FooRepository extends Entity {\n\n}\n")),Object(r.b)("h3",{id:"compiler-passes"},"Compiler passes"),Object(r.b)("p",null,"It is possible to directly hook into the container compilation and adjust the service definitions in any desired way. Doing this required creating a class tagged with the COMPILER_PASS tag as in the example below from the GraphQl component. When to containers compiles it will iterate through all compiler passes and call the ",Object(r.b)("inlineCode",{parentName:"p"},"proces")," method with itself as parameter."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Swift\\GraphQl\\Kernel;\n\nuse Swift\\GraphQl\\Attributes\\InputType;\nuse Swift\\GraphQl\\Attributes\\Mutation;\nuse Swift\\GraphQl\\Attributes\\Query;\nuse Swift\\GraphQl\\Attributes\\Type;\nuse Swift\\Kernel\\Attributes\\DI;\nuse Swift\\Kernel\\DiTags;\nuse Symfony\\Component\\DependencyInjection\\ContainerBuilder;\nuse Symfony\\Component\\DependencyInjection\\Compiler\\CompilerPassInterface;\n\n/**\n * Class GraphQlCompilerPass\n * @package Swift\\GraphQl\\Kernel\n */\n#[DI(tags: [DiTags::COMPILER_PASS])]\nclass GraphQlCompilerPass implements CompilerPassInterface {\n\n    /**\n     * @inheritDoc\n     */\n    public function process( ContainerBuilder $container ): void {\n        foreach ($container->getDefinitions() as $definition) {\n            $classReflection = $container->getReflectionClass($definition->getClass());\n\n            if (!empty($classReflection?->getAttributes(name: Type::class))) {\n                $definition->addTag(name: 'graphql.type');\n            }\n\n            if (!empty($classReflection?->getAttributes(name: InputType::class))) {\n                $definition->addTag( name: 'graphql.input_type' );\n            }\n\n            foreach ($classReflection?->getMethods() as $reflectionMethod) {\n                if (!empty($reflectionMethod->getAttributes(name: Query::class))) {\n                    $definition->addTag(name: 'graphql.query');\n                }\n                if (!empty($reflectionMethod->getAttributes(name: Mutation::class))) {\n                    $definition->addTag(name: 'graphql.mutation');\n                }\n            }\n        }\n    }\n}\n")))}u.isMDXComponent=!0},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,b=p["".concat(o,".").concat(f)]||p[f]||d[f]||r;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);