---
title: Routing & Controllers
---

When your application receives a request, it calls a controller action (method on a controller) to generate the response. The routing configuration defines which action to run for each incoming URL. It also provides other useful features, like generating SEO-friendly URLs (e.g. /read/intro-to-swift instead of index.php?article_id=57).
## Controllers
Controllers are classes in which available routes are defined and in which actions based on the route will be executed. Controllers must be created in the app directory in your app. For example 'app/Foo/Controller/' and should extend 'Swift\Controller\AbstractController'. This way the Router will know this is a controller class and map the routes.

```php
declare(strict_types=1);

namespace App\Foo\Controller;

use App\Foo\Service\FooService;
use Swift\Configuration\ConfigurationInterface;
use Swift\Controller\AbstractController;
use Swift\HttpFoundation\JsonResponse;
use Swift\Router\Attributes\Route;
use Swift\Router\RouteParameterBag;
use Swift\Router\Types\RouteMethod;

/**
 * class FooController
 * @package Foo\Controller
 */
#[Route(method: [RouteMethod::GET, RouteMethod::PATCH], route: '/foo/', name: 'foo')]
class FooController extends AbstractController {

    /**
     * Foo constructor.
     *
     * @param ConfigurationInterface $configuration
     * @param FooService $fooService
     * @param string|null $notAutowired
     */
    public function __construct(
        protected ConfigurationInterface $configuration,
        protected FooService $fooService,
        protected ?string $notAutowired = null,
    ) {
    }

    /**
     * @param RouteParameterBag $params
     *
     * @return JSONResponse
     */
    #[Route(method: [RouteMethod::GET], route: '/bar/[i:article_id]/', name: 'foo.get_bar')]
    public function getBar( RouteParameterBag $params): JsonResponse {
        // Let's return the article here

        $article_id = $params->get('article_id')->getValue();

        return new JsonResponse( [
            'article_id' => $article_id,
            'title' => 'Foo Bar',
        ] );
    }

    /**
     * @param RouteParameterBag $params
     *
     * @return JsonResponse
     */
    #[Route(method: [RouteMethod::PATCH], route: '/bar/[i:article_id]/', name: 'foo.patch_bar')]
    public function patchBar( RouteParameterBag $params): JsonResponse {
        // Let's update the article here
        return new JsonResponse( ['foo bar' ] );
    }
}
```

Don't worry too much about what's going on above, but here is a basic example of a route. In this example we expose the route 'foo/bar' for all GET requests. How come? On the class of the controller you can provide a prefix for all controllers routes. This is highly recommended to force you to group specific routes and use different controllers for different kinds of stuff.

On the method `getBar()` we expose the route '/bar'/ which will be prefixed with the class route. So this results in '/foo/bar'. The moment this route is matched this method will be called. This is the first point entry for the actual app logic. All the data from the request can be found in the Request which is available in the controller by default. All the request data is accessible through `$this->getRequest()`. Note that route definitions by convention always start and end with forward slashes.

But what if you want a variable like an id? More on the specifics of building the Route Annotation in the chapter 'Route Attribute'. 

NOTE: Multiple types can be exposed for a given route. Also, the same route can lead to different methods on the controller based on the Method used to make the request. The class route must allow for all HTTP Methods used in the definitions within. Type HTTP methods in writing (uppercase) or simple refer using the `Swift\Router\Types\RouteMethod` as in the example above. 

## Route Attribute
The Router will 'collect' all methods in the controllers classes with a `#[Route]` attribute, and map those as routes. If a route attribute is used on the class (highly recommended) this will be used as a prefix for all methods in this specific controller as explained in the example above.

The attributes come with the following settings:
- method = Allowed HTTP methods to call this route (e.g. GET, POST, PATCH, PUT, etc.). Multiple methods can be provided together like `#[Route(method="[GET, POST, PUT]", route="/bar/"]`. Usually this should only be necessary on the class. There is no wildcard to allow all methods as you should normally not direct a GET request for data to the same functionality as e.g. a POST request.

This means you could have the same route for different HTTP Methods if you would desire this. You can have an endpoint `/article/[i:id]/`, where the GET would lead to method which would return the value of the article with the given id, and where PATCH for example to this same endpoint would update the given article. Makes sense to split this into different methods right?
- route = The route for this method with a leading and closing slash
- name = Make the route easy to find back in the router and allow for reversed routing
- isGranted = Validate user is granted certain rights or status. More on this in de Security documentation
- tags = Provide a route with certain tags. E.g. the Security component uses this to define a route as authentication endpoint.
```php
   /**
     * Rest user authentication endpoint
     *
     * Authentication already occurs on the security component. So all that needs to be done is return the currently authenticated user
     *
     * Only a direct login is valid here. Re-authentication or no authentication is not valid. This is already cover through isGranted in the route (validated by the firewall)
     *
     * @param RouteParameter[] $params
     *
     * @return JsonResponse
     */
    #[Route( method: [RouteMethodEnum::POST], route: '/login/', name: 'security.user.login', isGranted: [AuthorizationType::IS_AUTHENTICATED_DIRECTLY], tags: [Route::TAG_ENTRYPOINT] )]
    public function login( RouteParameterBag $params ): JsonResponse {
        $data = $this->getCurrentUser()?->serialize();
        $data->token = new \stdClass();
        $data->token->token = $this->getSecurityToken()->getTokenString();
        $data->token->expires = $this->getSecurityToken()->expiresAt()->format('Y-m-d H:i:s');

        return new JsonResponse($data);
    }
```

### Variables in urls
Note: This principle is fork of [AltoRouter](https://github.com/dannyvankooten/AltoRouter).  
As you can see in the previous example there some weird syntax going on in the route parameter in the attribute. This a route 'variable' with the name 'article_id'. Each route can have multiple variables which allows for the url to be like '/bar/123'.

Variables always follow the syntax `[variable_type:variable_name]`. Variable types are predefined and the variable name is up to yourself, you will need the variable name to extract it's value later (123 in this case).

Predefined variable types:
```php
*                    // Match all request URIs
[i]                  // Match an integer
[i:id]               // Match an integer as 'id'
[a:action]           // Match alphanumeric characters as 'action'
[h:key]              // Match hexadecimal characters as 'key'
[:action]            // Match anything up to the next / or end of the URI as 'action'
[create|edit:action] // Match either 'create' or 'edit' as 'action'
[*]                  // Catch all (lazy, stops at the next trailing slash)
[*:trailing]         // Catch all as 'trailing' (lazy)
[**:trailing]        // Catch all (possessive - will match the rest of the URI)
.[:format]?          // Match an optional parameter 'format' - a / or . before the block is also optional
```
Each of those variable types results in a regex
```php
'i'  => '[0-9]++'
'a'  => '[0-9A-Za-z]++'
'h'  => '[0-9A-Fa-f]++'
'*'  => '.+?'
'**' => '.++'
''   => '[^/\.]++'
```
It is possible to register your custom variable types to router if you wish to match a specific pattern. More on this in the chapter 'Hooking in to the router'.

### Reading url variables
Okay so we can use several variables, convenient! How to read this? Easy! The variables which be passed into your function as an ``Swift\Router\RouteParameterBag``. See the example below.
```php
    /**
     * @param RouteParameter[] $params
     *
     * @return JSONResponse
     */
    #[Route(method: [RouteMethodEnum::GET], route: '/bar/[i:article_id]/', name: 'foo.get_bar')]
    public function getBar( RouteParameterBag $params): JsonResponse {
        // Let's return the article here

        $article_id = $params->get('article_id')->getValue();

        return new JsonResponse( [
            'article_id' => $article_id,
            'title' => 'Foo Bar',
        ] );
    }
```
See how the variable name comes in to play now? See [`Swift\Router\RouteParameter`](https://github.com/HenrivantSant/swift/blob/master/src/Router/RouteParameter.php)

## Responses
A controller action must always return a [`Swift\HTTPFoundation\ResponseInterface`](https://github.com/HenrivantSant/swift/blob/master/src/HttpFoundation/ResponseInterface.php) instance. This will output the given payload as JSON. You can easily add different Responses as long as they extend from `Swift\HTTPFoundation\Response`, or make one from scratch. As long as it implements the interface all is good. There are some defaults at your disposal:
- [`Swift\HttpFoundation\Response`](https://github.com/HenrivantSant/swift/blob/master/src/HttpFoundation/Response.php)
- [`Swift\HttpFoundation\JsonResponse`](https://github.com/HenrivantSant/swift/blob/master/src/HttpFoundation/JsonResponse.php)
- [`Swift\HttpFoundation\RedirectResponse`](https://github.com/HenrivantSant/swift/blob/master/src/HttpFoundation/RedirectResponse.php)
- [`Swift\HttpFoundation\BinaryFileResponse`](https://github.com/HenrivantSant/swift/blob/master/src/HttpFoundation/BinaryFileResponse.php)

The above controller called with 'foo/bar/3' with HTTP GET would return:
```json
{
    "article_id": 3,
    "title": "Foo Bar"
}
```
In the real world you would likely fetch some data or execute certain logic.

### Exceptions 
For some 'simple' responses it's not necessary to give a response. You can simply throw an Exception and the system will catch it, and deal with it accordingly. Those are available right now:
- `Swift\HTTPFoundation\Exceptions\BadRequestException` => Will return a 400 status code
- `Swift\HTTPFoundation\Exceptions\InternalErrorException` => Will return a 500 status code
- `Swift\HTTPFoundation\Exceptions\NotAuthorizedException` => Will return a 401 status code
- `Swift\HTTPFoundation\Exceptions\AccessDeniedException` => Will return a 403 status code
- `Swift\HTTPFoundation\Exceptions\NotFoundException` => Will return a 404 status code
Note that with 400 errors the exception message will be passed the client too. If it's empty it defaults the Mozilla errors text defaults.

With error message:
```json
{
    "message": "Token has expired",
    "code": 401
}
```
Without message:
```json
{
    "message": "Unauthorized",
    "code": 401
}
```  

## Hooking in to the router (Route Events)
TODO

### Register your own variable types (MatchTypes)
As discussed before it's possible to define variables in route declarations. Those variables are declared by MatchTypes. It's possible to add custom types (regexes). To do so, create a class implementing the ``Swift\Router\MatchTypes\MatchTypeInterface``. Below an example of the AlphaNumeric MatchType.

There's three methods to implement here.
 - getIdentifier() -> return name of MatchType, the router will use this to identify back to this MatchType from usage in the route declaring ('/foo/bar/[a:example]')
 - getRegex() -> Regex pattern to match for this MatchType
 - parseValue() -> If the route has matched the MatchType it will call the parseValue method to (optionally) parse the value. In this example we specifically return a string, but any type is allowed by the Interface (mixed).

```php
declare(strict_types=1);

namespace Swift\Router\MatchTypes;

use Swift\HttpFoundation\RequestInterface;

/**
 * Class Integer
 * @package Swift\Router\MatchTypes
 *
 * Match alphanumeric characters
 */
class AlphaNumeric implements MatchTypeInterface {

    public const IDENTIFIER = 'a';
    public const REGEX = '[0-9A-Za-z]++';

    /**
     * @inheritDoc
     */
    public function getIdentifier(): string {
        return static::IDENTIFIER;
    }

    /**
     * @inheritDoc
     */
    public function getRegex(): string {
        return static::REGEX;
    }

    /**
     * @inheritDoc
     */
    public function parseValue( mixed $value, RequestInterface $request ): string {
        return preg_replace('/[^\da-z]/i', '', $value);
    }

}
```

### Adding/modifying routes
TODO