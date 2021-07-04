# mono-rush

A monorepo using [Rush](https://rushjs.io/).

## Requirements

- [nvm](https://github.com/nvm-sh/nvm)

## Local Development

Install specific NodeJS version using `nvm`:

```shell
# use version defined in .nvmrc
nvm use

# install if not available
nvm install
```

Install pnpm globally:

```shell
# if pnpm version is updated, also update listing in rush.json
npm i -g pnpm@6.9.1
```

Install `rush` globally:

```shell
# if rush version is updated, also update listing in rush.json
npm i -g @microsoft/rush@5.47.0
```

To install the dependencies using `rush`:

```shell
rush install
```

To build the projects:

```shell
rush build
```

To update the lockfile when you change dependencies in a `package.json` file:

```shell
rush update
```
