# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

1. Use Volta or install the Node.js version specified in `package.json`.
2. Run `npx corepack enable` to enable Yarn 3+.
3. Run `yarn install` to install and link dependencies.

> Note that dependencies are cached in the `.yarn/cache` directory which is pushed to the repository. This is intentional.

### Local Development

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
USE_SSH=true yarn deploy
```

Not using SSH:

```
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
