(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(3),a=n(7),s=(n(0),n(148)),r={title:"Entity Behaviors"},o={unversionedId:"database/entity-behaviors",id:"database/entity-behaviors",isDocsHomePage:!1,title:"Entity Behaviors",description:"The Entity Behavior package is a collection of attributes that adds behaviors to entities.",source:"@site/docs/database/entity-behaviors.md",slug:"/database/entity-behaviors",permalink:"/swift-docs/docs/database/entity-behaviors",editUrl:"https://github.com/SwiftAPI/swift-docs/tree/main/docs/database/entity-behaviors.md",version:"current",sidebar:"docs",previous:{title:"Relations",permalink:"/swift-docs/docs/database/relations"},next:{title:"Lifecycles",permalink:"/swift-docs/docs/database/lifecycles"}},c=[{value:"UUID",id:"uuid",children:[{value:"Usage",id:"usage",children:[]},{value:"RFC 4122 UUIDs",id:"rfc-4122-uuids",children:[]}]},{value:"Auto timestamps",id:"auto-timestamps",children:[]},{value:"Soft delete (DeletedAT)",id:"soft-delete-deletedat",children:[]},{value:"Optimistic lock",id:"optimistic-lock",children:[{value:"Available strategies",id:"available-strategies",children:[]},{value:"Usage",id:"usage-1",children:[]}]},{value:"Hooks",id:"hooks",children:[{value:"Usage",id:"usage-2",children:[]}]},{value:"Event listener",id:"event-listener",children:[{value:"Usage",id:"usage-3",children:[]}]},{value:"Extensions",id:"extensions",children:[]},{value:"Events",id:"events",children:[{value:"OnCreate",id:"oncreate",children:[]},{value:"OnUpdate",id:"onupdate",children:[]},{value:"OnDelete",id:"ondelete",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The Entity Behavior package is a collection of attributes that adds behaviors to entities."),Object(s.b)("p",null,"The package provides functionality that hooks in to the lifecycle events of entities. Those events are create, update, and delete."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Note that embedded entities are not supported by the Entity Behavior package.")),Object(s.b)("h2",{id:"uuid"},"UUID"),Object(s.b)("p",null,"The UUID behavior adds a UUID field to an entity. It for this it uses the ",Object(s.b)("inlineCode",{parentName:"p"},"ramsey/uuid")," library. This is already a dependency of Swift, so there's no need to install it."),Object(s.b)("h3",{id:"usage"},"Usage"),Object(s.b)("p",null,"The package provides several implementations of the UUID behavior. The most basic form in the one below."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\nnamespace Swift\\Security\\User\\Entity;\n\nuse Ramsey\\Uuid\\UuidInterface;\nuse Swift\\Orm\\Attributes\\Behavior\\Uuid\\Uuid1;\nuse Swift\\Orm\\Attributes\\Entity;\nuse Swift\\Orm\\Attributes\\Field;\nuse Swift\\Orm\\Types\\FieldTypes;\nuse Swift\\Orm\\Entity\\AbstractEntity;\n\n\n#[Entity( table: 'security_users' )]\n#[Uuid1( field: 'uuid' )]\nclass UserEntity extends AbstractEntity implements UserStorageInterface {\n    \n    #[Field( name: 'uuid', type: FieldTypes::UUID )]\n    protected UuidInterface $uuid;\n    \n}\n")),Object(s.b)("h3",{id:"rfc-4122-uuids"},"RFC 4122 UUIDs"),Object(s.b)("h4",{id:"version-1-time-based"},"Version 1: Time-based"),Object(s.b)("p",null,"A version 1 UUID uses the current time, along with the MAC address (or node) for a network interface on the local machine."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\nnamespace Swift\\Security\\User\\Entity;\n\nuse Ramsey\\Uuid\\UuidInterface;\nuse Swift\\Orm\\Attributes\\Behavior\\Uuid\\Uuid1;\nuse Swift\\Orm\\Attributes\\Entity;\nuse Swift\\Orm\\Attributes\\Field;\nuse Swift\\Orm\\Types\\FieldTypes;\nuse Swift\\Orm\\Entity\\AbstractEntity;\n\n\n#[Entity( table: 'security_users' )]\n#[Uuid1( field: 'uuid', node: '00000fffffff', clockSeq: 0xffff )]\nclass UserEntity extends AbstractEntity implements UserStorageInterface {\n    \n    #[Field( name: 'uuid', type: FieldTypes::UUID )]\n    protected UuidInterface $uuid;\n    \n}\n")),Object(s.b)("h4",{id:"version-2-dce-security"},"Version 2: DCE Security"),Object(s.b)("p",null,"UUID v2 uses the current time, along with the MAC address (or node) for a network interface on the local machine. Additionally, a version 2 UUID replaces the low part of the time field with a local identifier such as the user ID or group ID of the local account that created the UUID."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\nnamespace Swift\\Security\\User\\Entity;\n\nuse Ramsey\\Uuid\\UuidInterface;\nuse Ramsey\\Uuid\\Uuid;\nuse Swift\\Orm\\Attributes\\Behavior\\Uuid\\Uuid2;\nuse Swift\\Orm\\Attributes\\Entity;\nuse Swift\\Orm\\Attributes\\Field;\nuse Swift\\Orm\\Types\\FieldTypes;\nuse Swift\\Orm\\Entity\\AbstractEntity;\n\n\n#[Entity( table: 'security_users' )]\n#[Uuid2(\n    field: 'uuid',\n    localDomain: Uuid::DCE_DOMAIN_PERSON, \n    localIdentifier: '12345678', \n    node: '00000fffffff', \n    clockSeq: 0xffff\n)]\nclass UserEntity extends AbstractEntity implements UserStorageInterface {\n    \n    #[Field( name: 'uuid', type: FieldTypes::UUID )]\n    protected UuidInterface $uuid;\n    \n}\n")),Object(s.b)("h4",{id:"version-3-name-based-md5"},"Version 3: Name-based (MD5)"),Object(s.b)("p",null,"Uses a version 3 (name-based) UUID based on the MD5 hash of a namespace ID and a name."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\nnamespace Swift\\Security\\User\\Entity;\n\nuse Ramsey\\Uuid\\UuidInterface;\nuse Ramsey\\Uuid\\Uuid;\nuse Swift\\Orm\\Attributes\\Behavior\\Uuid\\Uuid3;\nuse Swift\\Orm\\Attributes\\Entity;\nuse Swift\\Orm\\Attributes\\Field;\nuse Swift\\Orm\\Types\\FieldTypes;\nuse Swift\\Orm\\Entity\\AbstractEntity;\n\n\n#[Entity( table: 'security_users' )]\n#[Uuid3(\n    field: 'uuid',\n    namespace: Uuid::NAMESPACE_URL,\n    name: 'https://example.com/foo'\n)]\nclass UserEntity extends AbstractEntity implements UserStorageInterface {\n    \n    #[Field( name: 'uuid', type: FieldTypes::UUID )]\n    protected UuidInterface $uuid;\n    \n}\n")),Object(s.b)("h4",{id:"version-4-random"},"Version 4: Random"),Object(s.b)("p",null,"They are randomly-generated and do not contain any information about the time they are created or the machine that generated them."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\nnamespace Swift\\Security\\User\\Entity;\n\nuse Ramsey\\Uuid\\UuidInterface;\nuse Swift\\Orm\\Attributes\\Behavior\\Uuid\\Uuid4;\nuse Swift\\Orm\\Attributes\\Entity;\nuse Swift\\Orm\\Attributes\\Field;\nuse Swift\\Orm\\Types\\FieldTypes;\nuse Swift\\Orm\\Entity\\AbstractEntity;\n\n\n#[Entity( table: 'security_users' )]\n#[Uuid4( field: 'uuid' )]\nclass UserEntity extends AbstractEntity implements UserStorageInterface {\n    \n    #[Field( name: 'uuid', type: FieldTypes::UUID )]\n    protected UuidInterface $uuid;\n    \n}\n")),Object(s.b)("h4",{id:"version-5-name-based-sha-1"},"Version 5: Name-based (SHA-1)"),Object(s.b)("p",null,"Uses a version 5 (name-based) UUID based on the SHA-1 hash of a namespace ID and a name."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\nnamespace Swift\\Security\\User\\Entity;\n\nuse Ramsey\\Uuid\\UuidInterface;\nuse Ramsey\\Uuid\\Uuid;\nuse Swift\\Orm\\Attributes\\Behavior\\Uuid\\Uuid5;\nuse Swift\\Orm\\Attributes\\Entity;\nuse Swift\\Orm\\Attributes\\Field;\nuse Swift\\Orm\\Types\\FieldTypes;\nuse Swift\\Orm\\Entity\\AbstractEntity;\n\n\n#[Entity( table: 'security_users' )]\n#[Uuid5(\n    field: 'uuid', \n    namespace: Uuid::NAMESPACE_URL, \n    name: 'https://example.com/foo'\n)]\nclass UserEntity extends AbstractEntity implements UserStorageInterface {\n    \n    #[Field( name: 'uuid', type: FieldTypes::UUID )]\n    protected UuidInterface $uuid;\n    \n}\n")),Object(s.b)("h4",{id:"version-6-nonstandard-uuids"},"Version 6: Nonstandard UUIDs"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\nnamespace Swift\\Security\\User\\Entity;\n\nuse Ramsey\\Uuid\\UuidInterface;\nuse Ramsey\\Uuid\\Uuid;\nuse Swift\\Orm\\Attributes\\Behavior\\Uuid\\Uuid6;\nuse Swift\\Orm\\Attributes\\Entity;\nuse Swift\\Orm\\Attributes\\Field;\nuse Swift\\Orm\\Types\\FieldTypes;\nuse Swift\\Orm\\Entity\\AbstractEntity;\n\n\n#[Entity( table: 'security_users' )]\n#[Uuid6(\n    field: 'uuid', \n    node: '00000fffffff', \n    clockSeq: 0xffff\n)]\nclass UserEntity extends AbstractEntity implements UserStorageInterface {\n    \n    #[Field( name: 'uuid', type: FieldTypes::UUID )]\n    protected UuidInterface $uuid;\n    \n}\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"If you want to use a custom ",Object(s.b)("inlineCode",{parentName:"p"},"uuid")," declaration, you have to extend the ",Object(s.b)("inlineCode",{parentName:"p"},"Swift\\Orm\\Attributes\\Behavior\\Uuid\\Uuid")," class.")),Object(s.b)("h2",{id:"auto-timestamps"},"Auto timestamps"),Object(s.b)("p",null,"The behaviour that is likely most used in the Auto Timestamps. This pattern adds ",Object(s.b)("inlineCode",{parentName:"p"},"created_at")," and ",Object(s.b)("inlineCode",{parentName:"p"},"updated_at")," fields to your entity. This behavior automatically saves datetime values to createdAt and updateAt fields."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\nnamespace Swift\\Security\\User\\Entity;\n\nuse Swift\\Orm\\Attributes\\Behavior\\CreatedAt;\nuse Swift\\Orm\\Attributes\\Behavior\\UpdatedAt;\nuse Swift\\Orm\\Attributes\\Entity;\nuse Swift\\Orm\\Attributes\\Field;\nuse Swift\\Orm\\Types\\FieldTypes;\nuse Swift\\Orm\\Entity\\AbstractEntity;\n\n#[Entity( table: 'security_users' )]\n#[CreatedAt( field: 'created' )]\n#[UpdatedAt( field: 'modified' )]\nclass UserEntity extends AbstractEntity {\n    \n    #[Field( name: 'created', type: FieldTypes::DATETIME )]\n    protected \\DateTimeInterface $created;\n    \n    #[Field( name: 'modified', type: FieldTypes::DATETIME )]\n    protected \\DateTimeInterface $modified;\n}\n")),Object(s.b)("h2",{id:"soft-delete-deletedat"},"Soft delete (DeletedAT)"),Object(s.b)("p",null,"Adds a deleted_at column which defines if a record has been marked as deleted (and if so, when). Useful when designing a highly complicated system where data consistency is important and even if some data should be invisible in the backend, it should still remain in the database."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\nnamespace Swift\\Security\\User\\Entity;\n\nuse Swift\\Orm\\Attributes\\Behavior\\SoftDelete;\nuse Swift\\Orm\\Attributes\\Entity;\nuse Swift\\Orm\\Attributes\\Field;\nuse Swift\\Orm\\Types\\FieldTypes;\nuse Swift\\Orm\\Entity\\AbstractEntity;\n\n#[Entity( table: 'security_users' )]\n#[SoftDelete( field: 'created' )]\nclass UserEntity extends AbstractEntity {\n    \n    #[Field( name: 'created', type: FieldTypes::DATETIME )]\n    protected \\DateTimeInterface $created;\n    \n    #[Field( name: 'modified', type: FieldTypes::DATETIME, empty: true )]\n    protected ?\\DateTimeInterface $deletedAt = null;\n}\n")),Object(s.b)("h2",{id:"optimistic-lock"},"Optimistic lock"),Object(s.b)("p",null,"The package adds support for automatic optimistic locking via a version field. In this approach any entity that should be protected against concurrent modifications during long-running business transactions gets a version field. When changes to such an entity are persisted at the end of a long-running conversation the version of the entity is compared to the version in the database and if they don't match, an ",Object(s.b)("inlineCode",{parentName:"p"},"Swift\\Orm\\Behavior\\Exception\\OptimisticLock\\RecordIsLockedException")," is thrown,\nindicating that the entity has been modified by someone else already."),Object(s.b)("h3",{id:"available-strategies"},"Available strategies"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"MICROTIME")," - Current timestamp with microseconds as string."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"RAND_STR")," - Random generated string (random_bytes)."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"INCREMENT")," - Auto incremented integer version."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"DATETIME")," - Current datetime."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"MANUAL")," - Allows using custom realisation for setting and controlling version. You have to manage entity and DB column by yourself.")),Object(s.b)("h3",{id:"usage-1"},"Usage"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\nnamespace Swift\\Security\\User\\Entity;\n\nuse Swift\\Orm\\Attributes\\Behavior\\OptimisticLock;\nuse Swift\\Orm\\Attributes\\Entity;\nuse Swift\\Orm\\Attributes\\Field;\nuse Swift\\Orm\\Types\\FieldTypes;\nuse Swift\\Orm\\Entity\\AbstractEntity;\n\n#[Entity( table: 'security_users' )]\n#[OptimisticLock(\n  field: 'version',                         // Required. By default 'version' \n  column: 'version',                        // Optional. By default 'null'. If not set, will be used information from property declaration.\n  rule: OptimisticLock::RULE_INCREMENT      // Optional. By default OptimisticLock::RULE_INCREMENT\n)]\nclass UserEntity extends AbstractEntity {\n    \n    #[Field( name: 'created', type: FieldTypes::DATETIME )]\n    protected \\DateTimeInterface $created;\n    \n    #[Field( name: 'version', type: FieldTypes::INT )]\n    protected int $version;\n}\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Note: Your field declaration should be compatible with the strategy you use.")),Object(s.b)("h2",{id:"hooks"},"Hooks"),Object(s.b)("p",null,"Events serve as a great way to decouple various aspects of your application, since a single event can have multiple listeners that do not depend on each other."),Object(s.b)("p",null,"This package provides a simple observer pattern implementation, allowing you to subscribe and listen for various events via closure based event listeners."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"This is basically a simple version on ",Object(s.b)("a",{parentName:"p",href:"/docs/database/lifecycles"},"LifeCycles"))),Object(s.b)("h3",{id:"usage-2"},"Usage"),Object(s.b)("p",null,"To start listening to entity events, add a ",Object(s.b)("inlineCode",{parentName:"p"},"Swift\\Orm\\Attributes\\Behavior\\Hook")," attribute to your Entity."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\nnamespace Swift\\Security\\User\\Entity;\n\nuse Swift\\Orm\\Attributes\\Behavior\\Hook;\nuse Swift\\Orm\\Attributes\\Entity;\nuse Swift\\Orm\\Attributes\\Field;\nuse Swift\\Orm\\Types\\FieldTypes;\nuse Swift\\Orm\\Entity\\AbstractEntity;\n\n#[Entity( table: 'review' )]\n#[Hook(\n  callable: [Review::class, 'onCreate'],\n  events: [\\Swift\\Orm\\Behavior\\Event\\Mapper\\Command\\OnCreate::class],\n)]\n#[Hook(\n  callable: [Review::class, 'onUpdate'],\n  events: [\\Swift\\Orm\\Behavior\\Event\\Mapper\\Command\\OnUpdate::class],\n)]\nclass Review extends AbstractEntity {\n    \n    #[Field( name: 'id', primary: true, type: FieldTypes::INT, length: 11 )]\n    public int $id;\n\n    public static function onCreate( \\Swift\\Orm\\Behavior\\Event\\Mapper\\Command\\OnCreate $event ): void {\n        // do something before review created\n    }\n\n    public static function onUpdate( \\Swift\\Orm\\Behavior\\Event\\Mapper\\Command\\OnUpdate $event ): void {\n        // do something when review updated\n    }\n    \n}\n")),Object(s.b)("h2",{id:"event-listener"},"Event listener"),Object(s.b)("p",null,"Events serve as a great way to decouple various aspects of your application, since a single event can have multiple listeners that do not depend on each other."),Object(s.b)("p",null,"This package provides a simple observer pattern implementation, allowing you to subscribe and listen for various events."),Object(s.b)("h3",{id:"usage-3"},"Usage"),Object(s.b)("p",null,"If you are listening for many events on a given entity, you may use ",Object(s.b)("inlineCode",{parentName:"p"},"Swift\\Orm\\Attributes\\Behavior\\EventListener")," attribute to group all of your listeners into a single class. Event listener classes should have attributes which subscribe to the Entity events you wish to listen for. Each of these methods receives the event object as their only argument."),Object(s.b)("h4",{id:"entity-event-listener"},"Entity event listener"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\nnamespace App\\Foo\\Repository;\n\nuse Swift\\Orm\\Attributes\\Behavior\\EventListener;\nuse Swift\\Orm\\Entity\\AbstractEntity;\nuse Swift\\Orm\\Attributes\\Entity;\nuse Swift\\Orm\\Attributes\\Field;\nuse Swift\\Orm\\Types\\FieldTypes;\n\n#[Entity( table: 'movies' )]\n#[EventListener( listener: MovieListener::class, args: [ 'test' => 'foo bar' ] )]\nclass Movie extends AbstractEntity {\n    \n    #[Field( name: 'id', primary: true, type: FieldTypes::INT, length: 11 )]\n    protected int $id;\n    \n}\n")),Object(s.b)("h4",{id:"listener-class"},"Listener class"),Object(s.b)("p",null,"Next, let's take a look at the listener for our example Comment entity. Event listeners receive event instances in their methods that subscribed to the events."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"<?php declare( strict_types=1 );\n\nnamespace Foo\\Repository;\n\nuse Swift\\DependencyInjection\\Attributes\\Autowire;\nuse Swift\\Orm\\Attributes\\Behavior\\Listen;\nuse Swift\\Orm\\Behavior\\Event\\Mapper\\Command\\OnUpdate;\n\n#[Autowire]\nclass MovieListener {\n    \n    public function __construct(\n        protected readonly \\Swift\\Configuration\\ConfigurationInterface $configuration,\n        protected string $test = 'test',\n    ) {\n    }\n    \n    #[Listen( event: OnUpdate::class )]\n    public function onUpdate( OnUpdate $event ): void {\n        // do something when movie updated\n    }\n    \n}\n")),Object(s.b)("h2",{id:"extensions"},"Extensions"),Object(s.b)("p",null,"Todo"),Object(s.b)("h2",{id:"events"},"Events"),Object(s.b)("p",null,"The package dispatch several events, allowing you to hook into the following moments in an entity's lifecycle:"),Object(s.b)("p",null,"An event object contains the following public properties:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"// Entity mapper\nprint_r($event->mapper);     \n\n// Read only entity object. Change entity property values carefully.\n// Property value changes won't affect persisting data, but will affect next event listeners.\nprint_r($event->entity);    \n\n// Use for changing persisting data. Data from state will be stored to the database\nprint_r($event->state);\n\n// DateTime object shared between all events\nprint_r($event->timestamp); \n\n// Entity state before changes\nprint_r($event->node); \n")),Object(s.b)("h3",{id:"oncreate"},"OnCreate"),Object(s.b)("p",null,"The event will dispatch before an entity is stored to the database."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"public function onCreate( \\Swift\\Orm\\Behavior\\Event\\Mapper\\Command\\OnCreate $event ): void {\n    $event->state->register( 'id', Uuid::uuid4() );\n}\n")),Object(s.b)("h3",{id:"onupdate"},"OnUpdate"),Object(s.b)("p",null,"The event will dispatch before an entity is updated in the database."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"public function onUpdate( \\Swift\\Orm\\Behavior\\Event\\Mapper\\Command\\OnUpdate $event ): void {\n    $event->state->register( 'modifiedAt', new \\DateTimeImmutable() );\n}\n")),Object(s.b)("h3",{id:"ondelete"},"OnDelete"),Object(s.b)("p",null,"The event will dispatch before an entity is deleted from the database."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"public function onDelete( \\Swift\\Orm\\Behavior\\Event\\Mapper\\Command\\OnDelete $event ): void {\n    if ( ! $accessDecisionManager->isGranted( [ 'ROLE_ADMIN' ] ) ) {\n        throw new UnauthorizedException();\n    } \n}\n")))}d.isMDXComponent=!0},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=i,m=u["".concat(r,".").concat(b)]||u[b]||p[b]||s;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);