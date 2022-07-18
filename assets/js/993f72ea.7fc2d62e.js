(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(141)),o={title:"Authorization"},s={unversionedId:"security/authorization",id:"security/authorization",isDocsHomePage:!1,title:"Authorization",description:"Authorization where is determined whether a user (clients are treated as users too) is allowed access to a certain resource/functionality.",source:"@site/docs/security/authorization.md",slug:"/security/authorization",permalink:"/swift-docs/docs/security/authorization",editUrl:"https://github.com/SwiftAPI/swift-docs/tree/main/docs/security/authorization.md",version:"current",sidebar:"docs",previous:{title:"Authentication",permalink:"/swift-docs/docs/security/authentication"},next:{title:"Users (& Clients)",permalink:"/swift-docs/docs/security/users"}},c=[{value:"Voters",id:"voters",children:[{value:"User Role Voter",id:"user-role-voter",children:[]},{value:"Authenticated Voter",id:"authenticated-voter",children:[]},{value:"Custom Voter",id:"custom-voter",children:[]}]},{value:"Strategies",id:"strategies",children:[{value:"Custom strategy",id:"custom-strategy",children:[]}]},{value:"Roles",id:"roles",children:[{value:"Assign role to authenticated user",id:"assign-role-to-authenticated-user",children:[]}]},{value:"Configuration",id:"configuration",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Controller shortcuts",id:"controller-shortcuts",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Authorization where is determined whether a user (clients are treated as users too) is allowed access to a certain resource/functionality."),Object(i.b)("p",null,"Most commonly this happens based on a User Role or Authentication Status (Authenticated/Not Authenticated). Also it's quite common to validate whether a User or a Client is requesting a resource."),Object(i.b)("h2",{id:"voters"},"Voters"),Object(i.b)("p",null,"To determine whether access is granted system of Voters is used. Voters should implement the VoterInterface. All voters are automatically registered in the AccessDecisionManager. The AccessDecisionManager will ask all voters to vote on the provided subject. A voter can return three possible answers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ACCESS_GRANTED"),Object(i.b)("li",{parentName:"ul"},"ACCESS_DENIED"),Object(i.b)("li",{parentName:"ul"},"ACCESS_ABSTAIN")),Object(i.b)("p",null,"Abstain is relevant when the voter has no possible answer. E.g. the Authenticated Voter has no clue when there's asked for a vote on a User Role. In this case the voter would abstain from voting."),Object(i.b)("p",null,"The component comes with default Voters on User Roles and User Authentication. No need to write custom Voters on this subject if you're not adding major extended functionality in that area."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"<?php declare(strict_types=1);\n\nnamespace Swift\\Security\\Authorization\\Voter;\n\nuse Swift\\DependencyInjection\\Attributes\\DI;\nuse Swift\\Security\\Authentication\\Token\\TokenInterface;\nuse Swift\\Security\\Authorization\\DiTags;\n\n/**\n * Class VoterInterface\n * @package Swift\\Security\\Authorization\\Voter\n */\n#[DI(tags: [DiTags::SECURITY_AUTHORIZATION_VOTER])]\ninterface VoterInterface {\n\n    public const ACCESS_GRANTED = Vote::ACCESS_GRANTED;\n    public const ACCESS_DENIED = Vote::ACCESS_DENIED;\n    public const ACCESS_ABSTAIN = Vote::ACCESS_ABSTAIN;\n    \n    /**\n     * Vote\n     *\n     * @param TokenInterface $token\n     * @param mixed          $subject\n     * @param array          $attributes\n     *\n     * @return \\Swift\\Security\\Authorization\\Voter\\Vote ACCESS_GRANTED || ACCESS_DENIED || ACCESS_ABSTAIN\n     */\n    public function vote( TokenInterface $token, mixed $subject, array $attributes ): Vote;\n\n}\n")),Object(i.b)("h3",{id:"user-role-voter"},"User Role Voter"),Object(i.b)("p",null,"User Role Voter confirms whether a user has a certain role. Do not use Swift\\Security\\User\\UserInterface::getRoles() to determine whether the user has a certain role as this only return the directly assigned roles. Roles can be related with each other or have a certain hierarchy. There are some default options:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"<?php declare(strict_types=1);\n\nnamespace Swift\\Security\\Authorization;\n\n/**\n * Class AuthorizationRole\n * @package Swift\\Security\\Authorization\n */\nenum AuthorizationRole: string {\n\n    // Main roles\n    case ROLE_GUEST = 'ROLE_GUEST';\n    case ROLE_USER = 'ROLE_USER';\n    case ROLE_CLIENT = 'ROLE_CLIENT';\n    case ROLE_ADMIN = 'ROLE_ADMIN';\n    case ROLE_SUPER_ADMIN = 'ROLE_SUPER_ADMIN';\n\n    // Sub roles\n    case ROLE_USERS_LIST = 'ROLE_USERS_LIST';\n    case ROLE_CHANGE_PASSWORD = 'ROLE_CHANGE_PASSWORD';\n\n}\n")),Object(i.b)("h3",{id:"authenticated-voter"},"Authenticated Voter"),Object(i.b)("p",null,"The Authenticated voter determines whether the current user or client has authenticated, but also how it authenticated. These are the options:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"<?php declare(strict_types=1);\n\nnamespace Swift\\Security\\Authorization;\n\n/**\n * Class AuthorizationTypes\n * @package Swift\\Security\\Authorization\n */\nenum AuthorizationType: string {\n\n    case IS_AUTHENTICATED = 'IS_AUTHENTICATED';\n    case IS_AUTHENTICATED_DIRECTLY = 'IS_AUTHENTICATED_DIRECTLY';\n    case IS_AUTHENTICATED_ANONYMOUSLY = 'IS_AUTHENTICATED_ANONYMOUSLY';\n    case IS_AUTHENTICATED_TOKEN = 'IS_AUTHENTICATED_TOKEN';\n    case PUBLIC_ACCESS = 'PUBLIC_ACCESS';\n\n}\n")),Object(i.b)("h3",{id:"custom-voter"},"Custom Voter"),Object(i.b)("p",null,"To create a custom voter simply implement the ",Object(i.b)("inlineCode",{parentName:"p"},"Swift\\Security\\Authorization\\Voter\\VoterInterface"),". This Interface is pre-tagged and will automatically register in the AccessDecisionManager. "),Object(i.b)("p",null,"Note: Make sure to return ACCESS_ABSTAIN if no vote could be made!"),Object(i.b)("h2",{id:"strategies"},"Strategies"),Object(i.b)("p",null,"By default there's four possible strategies on voting."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Swift\\Security\\Authorization\\Strategy\\AffirmativeDecisionStrategy"),Object(i.b)("br",{parentName:"li"}),"Grants access if any voter returns an affirmative response"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Swift\\Security\\Authorization\\Strategy\\ConsensusDecisionStrategy"),Object(i.b)("br",{parentName:"li"}),"Grants access if there is consensus of granted against denied responses.",Object(i.b)("br",{parentName:"li"}),"Consensus means majority-rule (ignoring abstains) rather than unanimous agreement (ignoring abstains)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Swift\\Security\\Authorization\\Strategy\\PriorityDecisionStrategy"),Object(i.b)("br",{parentName:"li"}),"Grant or deny access depending on the first voter that does not abstain.",Object(i.b)("br",{parentName:"li"}),"The priority of voters can be used to overrule a decision."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Swift\\Security\\Authorization\\Strategy\\UnanimousDecisionStrategy"),Object(i.b)("br",{parentName:"li"}),"Grants access if only grant (ignoring abstain) votes were received.")),Object(i.b)("p",null,"What if all voters abstain from voting? By default access is denied when all voters abstain from voting. The can be overruled in the configuration."),Object(i.b)("p",null,"The default strategy is ",Object(i.b)("inlineCode",{parentName:"p"},"Swift\\Security\\Authorization\\Strategy\\AffirmativeDecisionStrategy"),". This can be overruled on the configuration."),Object(i.b)("h3",{id:"custom-strategy"},"Custom strategy"),Object(i.b)("p",null,"Easily create your own strategy by implementing the ",Object(i.b)("inlineCode",{parentName:"p"},"Swift\\Security\\Authorization\\Strategy\\DecisionStrategyInterface"),". The Interface is pre-tagged and will automatically register the Strategy. To use it as default set it as default in the Security Configuration."),Object(i.b)("h2",{id:"roles"},"Roles"),Object(i.b)("p",null,"Roles are used to represent the users authenticity and what the user is allowed to do. Roles can be defined in the configuration as below. The roles in de example below are already present by default. Custom Roles can be added. A role will automatically also have all it's child roles. So ROLE_CLIENT will also have ROLE_USERS_LIST. To take it a step further, ROLE_SUPER_ADMIN will also have ROLE_ADMIN and therefore also ROLE_USERS_LIST. See how this works now?"),Object(i.b)("h3",{id:"assign-role-to-authenticated-user"},"Assign role to authenticated user"),Object(i.b)("p",null,"Now it's highly possible you'd want to assign a user more rights or validate the given rights of a user once it authenticates."),Object(i.b)("p",null,"The proper way to do this is to listen to the authentication events and add/remove the appropriate roles."),Object(i.b)("p",null,"Most appropriate events:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Swift\\Security\\Authentication\\Events\\AuthenticationTokenCreatedEvent"),Object(i.b)("br",{parentName:"li"}),"Token has been created, user authentication is not validated yet"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Swift\\Security\\Authentication\\Events\\AuthenticationSuccessEvent"),Object(i.b)("br",{parentName:"li"}),"Token has been created, authentication is successful. This usually makes the most sense.")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"/**\n * Listen to AuthenticationSuccessEvent callback and add/remove roles accordingly\n * \n * @param AuthenticationSuccessEvent $event\n */\n#[ListenTo(event: AuthenticationSuccessEvent::class)]\npublic function onAuthenticationFinished( AuthenticationSuccessEvent $event ): void {\n    // Example where user with id 3 should have an extra role\n    if ($event->getToken()->getUser()->getId() === 3) {\n        $event->getToken()->getUser()->getRoles()->set('ROLE_USER_DEMO');\n    }\n    \n    // Example where user with id 4 should not have given role\n    if ($event->getToken()->getUser()->getId() === 4) {\n        $event->getToken()->getUser()->getRoles()->remove('ROLE_USER_DEMO');\n    }\n}\n")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Security configuration happens through separate configuration file /etc/security.yaml. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"enable_firewalls: true\n\nfirewalls:\n  main:\n    # limit login attempts, defaults to 5 per minute. Set to 0 to disable throttling\n    login_throttling:\n      max_attempts: 5\n\nrole_hierarchy:\n  ROLE_GUEST:\n  ROLE_USER:\n  ROLE_CLIENT: [ROLE_USERS_LIST]\n  ROLE_ADMIN: [ ROLE_USERS_LIST ]\n  ROLE_SUPER_ADMIN: [ROLE_ADMIN]\n  \naccess_decision_manager:\n  strategy: Swift\\Security\\Authorization\\Strategy\\AffirmativeDecisionStrategy\n  allow_if_all_abstain: false\n  \naccess_control:\n  - { path: ^/users, ip: [84.31.60.101, 84.31.60.193], roles: [IS_AUTHENTICATED] }\n  - \ngraphql_access_control:\n  - { name: SecurityUser, fields: [lastname], roles: [ROLE_USER, ROLE_FOO] }\n  - { name: SecurityUsersCredential, fields: [], roles: [ROLE_USER, ROLE_FOO] }\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Authorization validation is presented through a simple interface called the AuthorizationChecker. It comes with two methods."),Object(i.b)("p",null,"Inject it with ",Object(i.b)("inlineCode",{parentName:"p"},"Swift\\Security\\Authorization\\AuthorizationCheckerInterface $authorizationChecker")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"declare(strict_types=1);\n\nnamespace Swift\\Security\\Authorization;\n\nuse Swift\\HttpFoundation\\Exception\\AccessDeniedException;\n\n/**\n * Interface AuthorizationCheckerInterface\n * @package Swift\\Security\\Authorization\n */\ninterface AuthorizationCheckerInterface {\n\n    /**\n     * Validate whether given subject should be available\n     *\n     * @param array $attributes\n     * @param mixed $subject\n     * @param string|null $strategy\n     *\n     * @return bool\n     */\n    public function isGranted( array $attributes, mixed $subject = null, string $strategy = null ): bool;\n\n    /**\n     * Validate whether given subject should be available\n     * Throw exception when not granted\n     *\n     * @param array $attributes\n     * @param mixed $subject\n     * @param string|null $strategy\n     *\n     * @return void\n     *\n     * @throws AccessDeniedException\n     */\n    public function denyUnlessGranted( array $attributes, mixed $subject = null, string $strategy = null ): void;\n\n}\n")),Object(i.b)("h4",{id:"how-to-use"},"How to use"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"// Returns a boolean (true on granted, false on not granted)\n$this->authorizationChecker->isGranted([AuthorizationRole::ROLE_CLIENT]);\n\n// Throws Swift\\HttpFoundation\\Exception\\AccessDeniedException when not granted.\n$this->authorizationChecker->denyUnlessGranted([AuthorizationRole::ROLE_CLIENT]);\n")),Object(i.b)("h2",{id:"controller-shortcuts"},"Controller shortcuts"),Object(i.b)("p",null,"Controllers are equipped with some handy shortcuts. In a Controller you can directly call ",Object(i.b)("inlineCode",{parentName:"p"},"$this->denyAccessUnlessGranted()"),"."),Object(i.b)("p",null,"However, even more useful for REST endpoints is the isGranted parameter on the Route Attribute. Below an example of the '/users/me/' endpoint."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"/**\n * Return currently authenticated user. For this it is required that a user is authenticated\n *\n * @param RouteParameter[] $params\n *\n * @return JsonResponse\n */\n#[Route( method: RouteMethodEnum::GET, route: '/me/', name: 'security.users.me', isGranted: [AuthorizationTypesEnum::IS_AUTHENTICATED] )]\npublic function me( RouteParameterBag $params ): JsonResponse {\n    $data = $this->getCurrentUser()->serialize();\n    unset($data->password);\n\n    return new JsonResponse($data);\n}\n")))}u.isMDXComponent=!0},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,d=h["".concat(o,".").concat(p)]||h[p]||b[p]||i;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);