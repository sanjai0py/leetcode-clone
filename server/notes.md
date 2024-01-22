user logs in / sign up -> can create / solve problems -> 



tasks:
    1. authenticate the user


`/routes/routes.ts`

```js
 import authCont from "auth.controller.js"
 import profileCont from "profile.controller.js"

// clup the routes together
 const api = Router()
 .use(authCont)
 .use(profileCont)

export default Router.use("/api", api)
```

```txt
1. First bring the routes controllers in to the scope

e.g
post - /user/signup
post - /user/login

2. chain the routes together

post - /api/user/signup
post - /api/user/login
```