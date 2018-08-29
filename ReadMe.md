- How to make a react website from 0

- install nodejs -> nodejs.org
  Terminal (-g global, -v version)
  node -v
  npm -v

- install yarn:

  npm install -g yarn
  yarn --v

- Create project folder

- Create index.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>(title)</title>
  </head>
  <body>
  (something)
  </body>
</html>

- Install live-server
    Yarn:
    yarn global add live-server
    live-server -v
    NPM:
    npm install -g live-server
    live-server -v

- Install Babel compiler -> http://babeljs.io/docs/en/babel-cli

    npm install -g babel-cli@6.24.1 <--- version from @
    babel --help

- Create package.json inside project's main folder

    npm init (or)

    yarn init

- Install dependencies:

  yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

  dependencies will appear in package.json and node_modules will appear

- Compile files from JSX to regular JS:

  babel (app file) --out-file=(compiled file) --presets=env,react

- Add Babel watch :)

  babel (app file) --out-file=(compiled file) --presets=env,react --watch
