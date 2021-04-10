(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{118:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,m=c["".concat(l,".").concat(d)]||c[d]||b[d]||i;return t?a.a.createElement(m,o(o({ref:n},p),{},{components:t})):a.a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(118)),l={title:"GraphQL"},o={unversionedId:"graphql",id:"graphql",isDocsHomePage:!1,title:"GraphQL",description:"The GraphQl component integrates a GraphQl endpoint as alternative for REST endpoints. Queries and Mutation can both be registered as methods on controllers.",source:"@site/docs/graphql.md",slug:"/graphql",permalink:"/swift-docs/docs/graphql",editUrl:"https://github.com/HenrivantSant/swift/docs/docs/graphql.md",version:"current",sidebar:"docs",previous:{title:"Events & Subscribers",permalink:"/swift-docs/docs/events-and-subscribers"},next:{title:"HTTP Foundation",permalink:"/swift-docs/docs/httpfoundation"}},s=[{value:"Endpoint",id:"endpoint",children:[]},{value:"Tools",id:"tools",children:[]},{value:"Attributes",id:"attributes",children:[{value:"Query",id:"query",children:[]},{value:"Mutation",id:"mutation",children:[]},{value:"Type",id:"type",children:[]},{value:"InputType",id:"inputtype",children:[]},{value:"Field",id:"field",children:[]},{value:"Argument",id:"argument",children:[]},{value:"Generators",id:"generators",children:[]}]},{value:"Autowire in types",id:"autowire-in-types",children:[]},{value:"Schema generation",id:"schema-generation",children:[]},{value:"Relay Server Spec",id:"relay-server-spec",children:[]}],p={toc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The GraphQl component integrates a GraphQl endpoint as alternative for REST endpoints. Queries and Mutation can both be registered as methods on controllers."),Object(i.b)("p",null,"The GraphQl implementation fully complies with the ",Object(i.b)("a",{parentName:"p",href:"http://spec.graphql.org/"},"GraphQl Spec")," and is basically a wrapper for ",Object(i.b)("a",{parentName:"p",href:"https://github.com/webonyx/graphql-php"},"Webonxy GraphQl"),"."),Object(i.b)("p",null,"Types, Queries and Mutations are mapped through the use of Attributes. Besides this some handy utilities have been added the make it all work nicely with the rest of the framework."),Object(i.b)("p",null,"Security endpoints are provided out of the box. So client and user authentication will work right away."),Object(i.b)("p",null,"Note that the documentation provided by Webonyx is only partially helpful since Webonyx is a almost literal translation of the Javascript Spec it's functional by design, where Swift is Object Oriented. The component wraps Webonyx in Object Oriented way and provides utilities for easy usage and integration to the rest of the application."),Object(i.b)("h2",{id:"endpoint"},"Endpoint"),Object(i.b)("p",null,"GraphQl can be enabled with setting this is in the etc/app.yaml config. This will automatically enable the /graphql endpoint."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"graphql:\n    enable_introspection: true\n")),Object(i.b)("h2",{id:"tools"},"Tools"),Object(i.b)("p",null,"A tool that is highly recommended for building GraphQl endpoints is ",Object(i.b)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL"),". This will inspect your endpoint, visual the schema and let's you execute queries and mutations against your schema."),Object(i.b)("h2",{id:"attributes"},"Attributes"),Object(i.b)("p",null,"Attributes are used to tell the compiler about possible types, fields, queries, mutations, etc. On compilation all those are mapped and stored in Type Registries."),Object(i.b)("h3",{id:"query"},"Query"),Object(i.b)("p",null,"Queries are the entry points in your Schema. A Query can easily be defined as below by adding the Query Attribute. The compiler will use PHP Types to translate this to types for the Schema. However some fields can be overridden or specific differently if desired. Those settings will take precedence over PHP Types if provided. See below for the options."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Foo\\Controller;\n\nuse Foo\\Type\\BarType;\nuse Foo\\Type\\FooType;\nuse Swift\\Controller\\AbstractController;\nuse Swift\\GraphQl\\Attributes\\Query;\n\n/**\n * Class FooControllerGraphQl\n * @package Foo\\Controller\n */\nclass FooControllerGraphQl extends AbstractController {\n\n    /**\n     * @param FooType $foo\n     *\n     * @return BarType\n     */\n    #[Query]\n    public function foo( FooType $foo ): BarType {\n        // Fetch some data here\n\n        return new BarType(id: $foo->id, title: 'GraphQl result title');\n    }\n\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Swift\\GraphQl\\Attributes;\n\nuse Attribute;\nuse Swift\\Kernel\\Attributes\\DI;\n\n/**\n * Class Query\n * @package Swift\\GraphQl\\Attributes\n */\n#[Attribute(Attribute::TARGET_METHOD), DI(exclude: true)]\nclass Query {\n\n    /**\n     * Query constructor.\n     *\n     * @param string|null $name\n     * @param mixed $type\n     * @param bool $nullable\n     * @param bool $isList\n     * @param string|null $generator\n     * @param array $generatorArguments\n     * @param string|null $description\n    */\n    public function __construct(\n        public string $name = null,\n        public mixed $type = null,\n        public bool $nullable = true,\n        public bool $isList = false,\n        public string $generator = null,\n        public array $generatorArguments = array(),\n        public string|null $description = null,\n    ) {\n    }\n}\n")),Object(i.b)("h4",{id:"foo-example-query-in-action"},"Foo example query in action"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Request:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},'query {\n    Foo(foo: {id: "3"}) {\n        id\n        title\n        author {\n            id\n            name\n        }\n        reviews(limit: 3) {\n            id\n            username\n            content\n        }\n    }\n}\n')),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Response:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "Foo": {\n      "id": "3",\n      "title": "GraphQl result title",\n      "author": {\n        "id": "3",\n        "name": "Foo Bar"\n      },\n      "reviews": [\n        {\n          "id": "1",\n          "username": "Foo",\n          "content": "Lorem ipsum dolor"\n        },\n        {\n          "id": "2",\n          "username": "Bar",\n          "content": "Lorem ipsum dolor"\n        },\n        {\n          "id": "3",\n          "username": "Fubar",\n          "content": "Lorem ipsum dolor"\n        }\n      ]\n    }\n  }\n}\n')),Object(i.b)("h3",{id:"mutation"},"Mutation"),Object(i.b)("p",null,"Mutations are created in a very similar way. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Foo\\Controller;\n\nuse Foo\\Type\\BarInput;\nuse Foo\\Type\\BarType;\nuse Swift\\Controller\\AbstractController;\nuse Swift\\GraphQl\\Attributes\\Mutation;\n\n/**\n * Class FooControllerGraphQl\n * @package Foo\\Controller\n */\nclass FooControllerGraphQl extends AbstractController {\n\n    /**\n     * @param BarInput $bar\n     *\n     * @return BarType\n     */\n    #[Mutation]\n    public function createBar( BarInput $bar ): BarType {\n        // Create new entity based on input and return it's values\n\n        return new BarType(id: '4', title: $bar->title);\n    }\n\n}\n")),Object(i.b)("h4",{id:"createbar-mutation-in-action"},"createBar mutation in action"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Request:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n    CreateBar(bar: {title: "Demo Bar"}) {\n        id\n        title\n    }\n}\n')),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Response:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "CreateBar": {\n            "id": "4",\n            "title": "Demo Bar"\n        }\n    }\n}\n')),Object(i.b)("h3",{id:"type"},"Type"),Object(i.b)("p",null,"As seen in the example above we're using a defined types and not one the default composites. In order to use those specific types we need to let the compiler know those exist on before hand. This is done with the Type Attribute. This will mark the given class as an OutputType."),Object(i.b)("p",null,"In the example we're keeping it simple, but you might just as well link to other types here link for example the Author of Bar."),Object(i.b)("h4",{id:"default-value--nullable"},"Default value / nullable"),Object(i.b)("p",null,"By giving a field default value it will automatically be nullable too. By optionally having it null, it will 'just' be nullable."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Foo\\Type;\n\nuse Swift\\GraphQl\\Attributes\\Field;\nuse Swift\\GraphQl\\Attributes\\Type;\nuse Swift\\Kernel\\Attributes\\Autowire;\nuse Swift\\Model\\EntityInterface;\n\n/**\n * Class BarType\n * @package Foo\\Type\n */\n#[Type]\nclass BarType {\n\n    private EntityInterface $fooRepository;\n\n    /**\n     * FooType constructor.\n     *\n     * @param string $id\n     * @param string $title\n     */\n    public function __construct(\n        #[Field] public string $id,\n        #[Field] public string $title,\n    ) {\n    }\n\n    #[Field(name: 'author', description: 'This is a field description')]\n    public function getAuthor(): AuthorType {\n        return new AuthorType(id: '3', name: 'Foo Bar');\n    }\n\n    #[Field(name: 'reviews', type: ReviewType::class, isList: true)]\n    public function getReviews(int $limit = 5): array {\n        return array_slice(array(\n            new ReviewType(id: '1', username: 'Foo', content: 'Lorem ipsum dolor'),\n            new ReviewType(id: '2', username: 'Bar', content: 'Lorem ipsum dolor'),\n            new ReviewType(id: '3', username: 'Fubar', content: 'Lorem ipsum dolor'),\n        ), 0, $limit);\n    }\n\n    #[Autowire]\n    public function setFooRepository(EntityInterface $fooRepository): void {\n        $this->fooRepository = $fooRepository;\n    }\n\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Swift\\GraphQl\\Attributes;\n\nuse Attribute;\nuse Swift\\Kernel\\Attributes\\DI;\n\n/**\n * Class Type\n * @package Swift\\GraphQl\\Attributes\n */\n#[Attribute(Attribute::TARGET_CLASS), DI(exclude: true)]\nclass Type {\n\n    /**\n     * Type constructor.\n     *\n     * @param string|null $name\n     * @param string|null $extends\n     * @param string|null $generator\n     * @param array $generatorArguments\n     * @param string|null $description\n     */\n    public function __construct(\n        public ?string $name = null,\n        public ?string $extends = null,\n        public ?string $generator = null,\n        public array $generatorArguments = array(),\n        private string|null $description = null,\n    ) {\n    }\n}\n")),Object(i.b)("h3",{id:"inputtype"},"InputType"),Object(i.b)("p",null,"An InputType quite surprisingly registers the Attributed class to an InputType. Those can be used as the arguments/input for queries and mutations."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Foo\\Type;\n\nuse Swift\\GraphQl\\Attributes\\Field;\nuse Swift\\GraphQl\\Attributes\\InputType;\nuse Swift\\GraphQl\\Types\\Type;\n\n/**\n * Class FooType\n * @package Foo\\Type\n */\n#[InputType]\nclass FooType {\n\n    /**\n     * FooType constructor.\n     *\n     * @param string $id\n     */\n    public function __construct(\n        #[Field(type: Type::ID)] public string $id,\n    ) {\n    }\n\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Swift\\GraphQl\\Attributes;\n\nuse Attribute;\nuse Swift\\Kernel\\Attributes\\DI;\n\n/**\n * Class Type\n * @package Swift\\GraphQl\\Attributes\n */\n#[Attribute(Attribute::TARGET_CLASS), DI(exclude: true)]\nclass InputType {\n\n    /**\n     * Type constructor.\n     *\n     * @param string|null $name\n     * @param string|null $extends\n     * @param string|null $generator\n     * @param array $generatorArguments\n     * @param string|null $description \n     */\n    public function __construct(\n        public ?string $name = null,\n        public ?string $extends = null,\n        public ?string $generator = null,\n        public array $generatorArguments = array(),\n        public string|null $description = null,\n    ) {\n    }\n}\n")),Object(i.b)("h3",{id:"field"},"Field"),Object(i.b)("p",null,"The field annotation is used to let the compiled know a property or method should be registered as a field within a Type or InputType. This only works within classes having the either the Type o InputType Attribute."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Foo\\Type;\n\nuse Swift\\GraphQl\\Attributes\\Field;\nuse Swift\\GraphQl\\Attributes\\Type;\n\n/**\n * Class BarType\n * @package Foo\\Type\n */\n#[Type]\nclass BarType {\n\n    /**\n     * FooType constructor.\n     *\n     * @param string $id\n     * @param string $title\n     */\n    public function __construct(\n        #[Field] public string $id,\n        #[Field] public string $title,\n    ) {\n    }\n    \n    #[Field(name: 'author', description: 'This is a field description')]\n    public function getAuthor(): AuthorType {\n        return new AuthorType(id: '3', name: 'Foo Bar');\n    }\n\n    #[Field(name: 'reviews', type: ReviewType::class, isList: true)]\n    public function getReviews(int $limit = 5): array {\n        return array_slice(array(\n            new ReviewType(id: '1', username: 'Foo', content: 'Lorem ipsum dolor'),\n            new ReviewType(id: '2', username: 'Bar', content: 'Lorem ipsum dolor'),\n            new ReviewType(id: '3', username: 'Fubar', content: 'Lorem ipsum dolor'),\n        ), 0, $limit);\n    }\n\n}\n")),Object(i.b)("h3",{id:"argument"},"Argument"),Object(i.b)("p",null,"The Argument attribute can be used to add additional meta data or settings to mutation or query arguments. They also serve to link to generators. They example below shows the GraphQl endpoint to list all users. It uses a generator to dynamically create a complex input type based on the OutputType and the Entity it references to."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"/**\n * GraphQl endpoint for listing users\n *\n * @param array $filter\n *\n * @return UserConnection\n */\n#[Query(name: 'Users', description: 'List all users' )]\npublic function users( #[Argument(type: ArgumentsType::class, generator: EntityArgumentGenerator::class, generatorArguments: ['entity' => UserEntity::class])] array $filter ): UserConnection {\n    // Make sure a user is authenticated\n    $this->denyAccessUnlessGranted([AuthorizationRolesEnum::ROLE_USERS_LIST]);\n\n    $filter ??= array();\n    $state = $filter['where'] ?? array();\n    unset($filter['where']);\n    $argumentsType = new ArgumentsType(...$filter);\n\n    if (!$result = $this->userDatabaseStorage->findMany($state, $argumentsType->toArgument())) {\n        return new UserConnection($result);\n    }\n\n\n    return new UserConnection($result);\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Swift\\GraphQl\\Attributes;\n\nuse Attribute;\n\n/**\n * Class Argument\n * @package Swift\\GraphQl\\Attributes\n */\n#[Attribute(Attribute::TARGET_PARAMETER)]\nclass Argument {\n\n    /**\n     * Argument constructor.\n     *\n     * @param string|null $name argument name in the schema\n     * @param string|array|null $type array of types will lead to a union\n     * @param string|null $generator FQN of the generator class \n     * @param array|null $generatorArguments Arguments to be passed to the generator\n     * @param string|null $description \n     */\n    public function __construct(\n        public string|null $name = null,\n        public string|array|null $type = null,\n        public string|null $generator = null,\n        public array|null $generatorArguments = null,\n        public string|null $description = null,\n    ) {\n    }\n}\n")),Object(i.b)("h3",{id:"generators"},"Generators"),Object(i.b)("p",null,"No feature freeze just yet. Documentation will follow."),Object(i.b)("h2",{id:"autowire-in-types"},"Autowire in types"),Object(i.b)("p",null,"Since type definitions should be able to be created easily the constructor can not directly depend on Dependency Injection from the container. However method injection is supported."),Object(i.b)("p",null,"Once the Field Resolver calls the Type to resolve a given field it will call all Autowire methods. Note that this happens on Field Resolution and not on Container Compilation. So you can only depend on the Services being set in the actual Field methods."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Foo\\Type;\n\nuse Swift\\GraphQl\\Attributes\\Field;\nuse Swift\\GraphQl\\Attributes\\Type;\nuse Swift\\Kernel\\Attributes\\Autowire;\nuse Swift\\Model\\EntityInterface;\n\n/**\n * Class BarType\n * @package Foo\\Type\n */\n#[Type]\nclass BarType {\n\n    private EntityInterface $fooRepository;\n\n    /**\n     * FooType constructor.\n     *\n     * @param string $id\n     * @param string $title\n     */\n    public function __construct(\n        #[Field] public string $id,\n        #[Field] public string $title,\n    ) {\n    }\n\n    #[Field(name: 'author', description: 'This is a field description')]\n    public function getAuthor(): AuthorType {\n        return new AuthorType(id: '3', name: 'Foo Bar');\n    }\n\n    #[Field(name: 'reviews', type: ReviewType::class, isList: true)]\n    public function getReviews(int $first = 5): array {\n        // Here we can assume $this->fooRepository to autowired\n        return array_slice(array(\n            new ReviewType(id: '1', username: 'Foo', content: 'Lorem ipsum dolor'),\n            new ReviewType(id: '2', username: 'Bar', content: 'Lorem ipsum dolor'),\n            new ReviewType(id: '3', username: 'Fubar', content: 'Lorem ipsum dolor'),\n        ), 0, $first);\n    }\n\n    #[Autowire]\n    public function setFooRepository(EntityInterface $fooRepository): void {\n        $this->fooRepository = $fooRepository;\n    }\n\n}\n")),Object(i.b)("h2",{id:"schema-generation"},"Schema generation"),Object(i.b)("p",null,"It might be handy or even needed to generate a schema.graphql file of your api in actual Type Language. This is easily done by running: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"bin/console graphql:schema:dump\n")),Object(i.b)("p",null,"This will automatically generate graphql schema representation of the api in the /etc directory."),Object(i.b)("p",null,"The Abstract classes enforce you to create a little logic and create all common fields and handle ID encoding too."),Object(i.b)("h2",{id:"relay-server-spec"},"Relay Server Spec"),Object(i.b)("p",null,"It is recommended to follow the ",Object(i.b)("a",{parentName:"p",href:"https://relay.dev/docs/guides/graphql-server-specification/"},"Relay Server Specs")," in the schema. All default Swift endpoint will comply with this spec out of the box. There's some useful abstracts and interfaces to help you on the way."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Swift\\GraphQl\\Types\\AbstractConnectionType")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Swift\\GraphQl\\Types\\ConnectionTypeInterface"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Swift\\GraphQl\\Types\\AbstractEdgeType")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Swift\\GraphQl\\Types\\EdgeInterface"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Swift\\GraphQl\\Types\\NodeTypeInterface"),Object(i.b)("br",{parentName:"p"}),"\n","As the Relay Spec defines any Node Type should be able to resolve against the Interface. To be able to resolve this the Node Type should return a resolver class and method for the given type. See example below.\n",Object(i.b)("em",{parentName:"p"},"Type")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-php"},"  declare(strict_types=1);\n  \n  namespace Swift\\Security\\User\\Type;\n  \n  use DateTime;\n  use Swift\\GraphQl\\Attributes\\Field;\n  use Swift\\GraphQl\\Attributes\\Type;\n  use Swift\\GraphQl\\ContextInterface;\n  use Swift\\GraphQl\\Types\\NodeTypeInterface;\n  use Swift\\GraphQl\\Utils;\n  use Swift\\Kernel\\Attributes\\DI;\n  use Swift\\Security\\User\\Controller\\UserControllerGraphQl;\n  \n  /**\n  * Class UserType\n  * @package Swift\\Security\\User\\Type\n    */\n  #[DI(autowire: false), Type(description: 'Represents user data')]\n  class UserType implements NodeTypeInterface {\n  \n      /**\n       * UserType constructor.\n       *\n       * @param int|null $id\n       * @param string $username\n       * @param string|null $email\n       * @param string $firstname\n       * @param string $lastname\n       * @param DateTime $created\n       * @param DateTime $modified\n       * @param string|null $password\n       */\n      public function __construct(\n          public ?int $id,\n          #[Field] public string $username,\n          #[Field(nullable: true)] public ?string $email,\n          #[Field] public string $firstname,\n          #[Field] public string $lastname,\n          #[Field] public DateTime $created,\n          #[Field] public DateTime $modified,\n          private string|null $password = null,\n      ) {\n      }\n  \n      #[Field( name: 'id', description: 'The user ID' )]\n      public function getId(): string {\n           return Utils::encodeId('UserType', $this->id);\n      }\n  \n      /**\n       * @inheritDoc\n       */\n      public static function getNodeResolverClassnameAndMethod( int|string $id, ContextInterface $context ): array {\n          return [UserControllerGraphQl::class, 'getUserTypeByNode'];\n      }\n  \n  }\n")),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Resolver method in referred controller (Swift\\Security\\User\\Controller\\UserControllerGraphQl)")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-php"},"  /**\n  * Node field resolver callback function for UserType\n  *\n  * @param string|int $id\n  * @param ContextInterface $context\n  *\n  * @return UserType\n  */\n  public function getUserTypeByNode( string|int $id, ContextInterface $context ): UserType {\n      // Make sure a user is authenticated\n      $this->denyAccessUnlessGranted([AuthorizationTypesEnum::IS_AUTHENTICATED, AuthorizationRolesEnum::ROLE_USERS_LIST]);\n  \n      // Get user data\n      if (!$data = $this->userProvider->getUserById((int) $id)?->serialize()) {\n          throw new UserNotFoundException(sprintf('User with id %s not found', $id));\n      }\n\n      return new UserType(...(array) $data);\n  }\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Swift\\GraphQl\\Types\\PageInfoType"),Object(i.b)("br",{parentName:"p"}),"\n","Use ",Object(i.b)("inlineCode",{parentName:"p"},"Swift\\GraphQl\\Types\\PageInfoType->toArgument()")," to build an Argument() class for filter usage on any Entity.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("em",{parentName:"p"},"Example usage of ArgumentsType to Argument")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-php"},"  /**\n   * GraphQl endpoint for listing users\n   *\n   * @param array $filter\n   *\n   * @return UserConnection\n   */\n  #[Query(name: 'Users', description: 'List all users' )]\n  public function users( #[Argument(type: ArgumentsType::class, generator: EntityArgumentGenerator::class, generatorArguments: ['entity' => UserEntity::class])] array $filter ): UserConnection {\n      // Make sure a user is authenticated\n      $this->denyAccessUnlessGranted([AuthorizationRolesEnum::ROLE_USERS_LIST]);\n  \n      $filter ??= array();\n      $state = $filter['where'] ?? array();\n      unset($filter['where']);\n      $argumentsType = new ArgumentsType(...$filter);\n  \n      if (!$result = $this->userDatabaseStorage->findMany($state, $argumentsType->toArgument())) {\n          return new UserConnection($result);\n      }\n  \n  \n      return new UserConnection($result);\n  }\n")))))}u.isMDXComponent=!0}}]);