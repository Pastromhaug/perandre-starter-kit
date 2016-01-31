# vdorbs-starter-kit
Node.js development starter kit

### Installation
vdorbs-starter-kit requires [Node.js](https://nodejs.org/en/) for installation. Installation includes the Node Package Manager ([npm](https://www.npmjs.com/)).

Once Node.js is installed, follow these instructions for starting your own project (fork instructions originally found [here](https://help.github.com/articles/fork-a-repo/)):

1. Fork the repository. This can be done using the Fork button [here](https://github.com/vdorbs/vdorbs-starter-kit).

2. Create a local clone of the fork. This can be done using the following terminal command:

  ```
  git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
  ```

3. Navigate to the local repo in the terminal using the following command:

  ```
  cd YOUR-REPO-NAME
  ```

4. Configure the fork to follow the original repo using the following command:

  ```
  git remote add upstream https://github.com/vdorbs/vdorbs-starter-kit.git
  ```
  
  To merge changes in the original repo with yours, use the following command:
  
  ```
  git merge upstream/master
  ```

5. Install the node modules with npm using the following command:

  ```
  npm install
  ```

### Kit Details
#### Webpack
vdorbs-starter-kit uses [webpack](https://webpack.github.io/) to build Node.js projects. Webpack determines the dependencies of each relevant file in the project, and generates standalone modules. The starter kit is also configured to compile ES2015 (ES6) and JSX (React) down to ES5 Javascript, as well as run Mocha unit tests. In the file tree excerpt below, you can see relevant files to the build and test processes.

```
.
├── src
├── build
|   ├── bundle.js
|   ├── test.js
├── main.js
├── main.test.js
└── ...
```

`main.js` and `main.test.js` are the entry points for the application and unit testing, respectively. Those files and all dependencies are packaged into `bundle.js` and `test.js`, respectively. Building and testing is outlined further in Usage. vdorbs-starter-kit also uses webpack-dev-server to watch changes to `main.js` and `main.test.js` and serve the directory locally (by default at port 8080). Additional details in Usage.

#### Babel
[Babel](https://babeljs.io/) compiles ES2015 down to ES5 Javascript, which is currently supported by most browsers. vdorbs-starter-kit also invokes a Babel preset for compiling JSX files, the format used for building React applications.

#### React
[React](https://facebook.github.io/react/) is a front-end framework developed by Facebook and Instagram. React uses a Javascript/HTML-like syntax called JSX. Use of this format is optional, since ultimately it is compiled to plain Javascript. Using this JSX syntax allows developers to embed HTML inside Javascript. React uses one-way data bindings (unlike Angular, Ember, Backbone, etc.) to pass data down to child components. React also uses a virtual DOM to construct components on servers and in native apps, as well as to re-render the browser DOM using diff's instead of complete rebuilds. vdorb-starter-kit also uses React DOM and [React Router](https://github.com/rackt/react-router) to render in the browser and create nested routers for single page-applications.

#### Mocha
[Mocha](https://mochajs.org/) is a tool for unit testing Javascript. vdorbs-starter-kit also uses the [Chai](http://chaijs.com/guide/) plugin for Mocha for additions like assertions.

### Usage
vdorbs-starter-kit uses npm to perform the following actions (Note: commands should be run from the repo root):

`npm run build` builds the project

`npm run build:dev` builds the project, watches the source directory for changes, and serves the directory [here](http://localhost:8080/).

`npm test` runs Mocha tests

### Additional Notes
The `.gitignore` includes `node_modules/` and `src/build/`. To add new dependencies, use the following command:

```
npm install --save DEPENDENCY_NAME
```

To add a developer dependency, use the following command:

```
npm install --save-dev DEPENDENCY_NAME
```

These commands add dependencies to `package.json`, which is not included in the `.gitignore`. The command

```
npm install
```

will install any new dependencies in this file, for anyone else using your repository.
