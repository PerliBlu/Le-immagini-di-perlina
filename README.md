![nodeJs-heroku](src/heroku_nodejs.png)

## NodeJs + Heroku
Simple hello-world app deployed on Heroku.

### What is Heroku
Heroku is a cloud Platform-as-a-Service (PaaS) supporting several programming languages that are used as a web application deployment model. Heroku is one of the first cloud platforms, it has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go
[*Heroku's About page](https://www.heroku.com/about)
[*Wikipedia link](https://en.wikipedia.org/wiki/Heroku)

### Create New App
[heroku-create_app](src/heroku-create_app.png)
You only need an App Name and select a region to deploy the App. Currently are USA and Europe runtime regions.

### Deploy

#### Deployment method
[heroku-deployment_sources](src/heroku-deployment_sources.png)
Heroku Git: Use Heroku CLI, to use this option you need to follow [Heroku's started guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).
GitHub: Connect your GitHub repo with Heroku. This is the easier one, first, you need to grant Heroku access, then select the repo and branch to deploy. 
Dropbox: Use your source code storage in Dropbox.

#### GitHub
Some functionalities when you use GitHub are Code diffs, manual and auto deploys, and activity feed.

#### Automatic deploys
Enables a chosen branch to be automatically deployed. Very useful if you have a production branch ready.

#### Manual deploy
[heroku-manual_deploy](src/heroku-manual_deploy)
Deploy the current state of your selected App's branch.

### Build Log
[heroku-build_log](src/hheroku-build_log.png)
Very useful tool to follow your App's building.

```sh
-----> Node.js app detected
-----> Creating runtime environment
       ...
-----> Installing binaries
       engines.node (package.json):  unspecified
       engines.npm (package.json):   unspecified (use default)
       ...
-----> Building dependencies
       Installing node modules (package.json)
-----> Caching build
       Clearing previous node cache
       Saving 2 cacheDirectories (default):
       - node_modules
       - bower_components (nothing to cache)
-----> Build succeeded!
-----> Discovering process types
       Procfile declares types     -> (none)
       Default types for buildpack -> web
-----> Compressing...
       Done: 13.8M
-----> Launching...
       Released v22
       https://twogg-nodejs.herokuapp.com/ deployed to Heroku
```

### Heroku App Link
Here is the link to access are deployed App.
[Heroku running App!!!](https://twogg-nodejs.herokuapp.com/)