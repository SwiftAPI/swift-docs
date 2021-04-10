(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{118:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},h=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),h=r,b=l["".concat(s,".").concat(h)]||l[h]||d[h]||a;return t?o.a.createElement(b,i(i({ref:n},u),{},{components:t})):o.a.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=h;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(118)),s={title:"Events & Subscribers"},i={unversionedId:"events-and-subscribers",id:"events-and-subscribers",isDocsHomePage:!1,title:"Events & Subscribers",description:"Under the hood the Symfony Event Dispatcher is used, however there is a custom implementation on the Event Dispatcher. This is in order to provide future stability and to enable the system for adding functionality in to the event system.",source:"@site/docs/events-and-subscribers.md",slug:"/events-and-subscribers",permalink:"/swift-docs/docs/events-and-subscribers",editUrl:"https://github.com/HenrivantSant/swift-docs/tree/master/docs/events-and-subscribers.md",version:"current",sidebar:"docs",previous:{title:"Dependency Injection",permalink:"/swift-docs/docs/dependency-injection"},next:{title:"GraphQL",permalink:"/swift-docs/docs/graphql"}},c=[{value:"Default system events",id:"default-system-events",children:[]},{value:"How to subscribe to events",id:"how-to-subscribe-to-events",children:[]},{value:"How to create your own events",id:"how-to-create-your-own-events",children:[]},{value:"Dispatch events",id:"dispatch-events",children:[]}],u={toc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Under the hood the ",Object(a.b)("a",{parentName:"p",href:"https://symfony.com/doc/current/components/event_dispatcher.html"},"Symfony Event Dispatcher")," is used, however there is a custom implementation on the Event Dispatcher. This is in order to provide future stability and to enable the system for adding functionality in to the event system."),Object(a.b)("h3",{id:"default-system-events"},"Default system events"),Object(a.b)("h3",{id:"how-to-subscribe-to-events"},"How to subscribe to events"),Object(a.b)("p",null,"When you want to do something when a given event occurs (like logging, or for example add a Route variable_type) you can subscribe to those event using a EventSubscriber instance. In contrary to Symfony, in this system Event Subscriber do support Dependency Injection. It is recommend to only use subscribers to 'catch' the event and use a service to execute the actual logic (and if applicable apply the result to the event). Pretty the same as you would do in a Controller or a command. This makes the logic in the service resuable for different occasions and keeps the subscriber clean."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"namespace Foo\\EventSubscriber;\n\nuse Henri\\Framework\\Configuration\\Configuration;\nuse Henri\\Framework\\Events\\EventDispatcher;\nuse Henri\\Framework\\Router\\Event\\OnBeforeRouteEnterEvent;\nuse Symfony\\Component\\EventDispatcher\\EventSubscriberInterface;\n\nfinal class FooSubscriber implements EventSubscriberInterface {\n\n    /**\n     * @var Configuration $configuration\n     */\n    private $configuration;\n\n    /**\n     * FooSubscriber constructor.\n     *\n     * @param Configuration $configuration\n     */\n    public function __construct( Configuration $configuration ) {\n        $this->configuration = $configuration;\n    }\n\n\n    /**\n     * Returns an array of event names this subscriber wants to listen to.\n     *\n     * The array keys are event names and the value can be:\n     *\n     *  * The method name to call (priority defaults to 0)\n     *  * An array composed of the method name to call and the priority\n     *  * An array of arrays composed of the method names to call and respective\n     *    priorities, or 0 if unset\n     *\n     * For instance:\n     *\n     *  * ['eventName' => 'methodName']\n     *  * ['eventName' => ['methodName', $priority]]\n     *  * ['eventName' => [['methodName1', $priority], ['methodName2']]]\n     *\n     * @return array The event names to listen to\n     */\n    public static function getSubscribedEvents(): array {\n        return array(\n            OnBeforeRouteEnterEvent::class => 'onBeforeRouteEnter',\n        );\n    }\n\n    /**\n     * @param OnBeforeRouteEnterEvent $event\n     * @param string $eventClassName\n     * @param EventDispatcher $eventDispatcher\n     */\n    public function onBeforeRouteEnter( OnBeforeRouteEnterEvent $event, string $eventClassName, EventDispatcher $eventDispatcher ) {\n        // Read/modify event data or do some logging\n    }\n\n}\n")),Object(a.b)("h3",{id:"how-to-create-your-own-events"},"How to create your own events"),Object(a.b)("p",null,"Events are classes which can be dispatched using the EventDispatcher. You can easily create your own like the example."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"namespace Foo\\Event;\n\nuse Symfony\\Contracts\\EventDispatcher\\Event;\n\nclass OnBeforeFooEvent extends Event {\n\n    /**\n     * @var array $handlers   associative array of handlers\n     */\n    private $bars;\n\n    /**\n     * OnBeforeSyncEvent constructor.\n     *\n     * @param array $bars\n     */\n    public function __construct( array $bars = array() ) {\n        $this->bars = $bars;\n    }\n\n    /**\n     * @param string $bar\n     */\n    public function addBar(string $bar = ''): void {\n        $this->bars[] = $bar;\n    }\n\n    /**\n     * @return array\n     */\n    public function getBars(): array {\n        return $this->bars;\n    }\n\n}\n")),Object(a.b)("h3",{id:"dispatch-events"},"Dispatch events"),Object(a.b)("p",null,"Events are dispatched using the EventDispatcher. You will need to inject the EventDispatcher (",Object(a.b)("inlineCode",{parentName:"p"},"Henri\\Framework\\Events\\EventDispatcher"),") into your class. Below an example of how the Router uses an event to provide all found routes and match types, allows for all subscribers to modify those and reassign them before actually matching the routes."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"/**\n * Get route from current url\n *\n * @return Route\n * @throws Exception\n */\npublic function getCurrentRoute(): Route {\n    $this->routeHarvest = $this->harvester->harvestRoutes();\n\n    /**\n     * @var OnBeforeRoutesCompileEvent $onBeforeCompileRoutes\n     */\n    $onBeforeCompileRoutes = $this->dispatcher->dispatch(\n        new OnBeforeRoutesCompileEvent($this->routeHarvest, $this->matchTypes),\n        OnBeforeRoutesCompileEvent::class\n    );\n\n    /**\n     * Reassign possibly changed routes and match types\n     */\n    $this->routeHarvest = $onBeforeCompileRoutes->getRoutes();\n    $this->matchTypes   = $onBeforeCompileRoutes->getMatchTypes();\n\n    $this->bindRoutes();\n    $match = $this->match();\n\n    if (is_null($match)) {\n        throw new NotFoundException('Not found');\n    }\n\n    return $match;\n}\n")))}p.isMDXComponent=!0}}]);