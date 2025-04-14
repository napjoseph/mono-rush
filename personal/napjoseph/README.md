# napjoseph

![napjoseph/mono-rush](https://github.com/napjoseph/mono-rush/actions/workflows/main--napjoseph--deploy-to-github-pages.yml/badge.svg)

The website of Nap Joseph Calub.

A project using [NextJS](http://nextjs.org/).

## Local Development

```
# use version defined in .nvmrc
nvm use

# install if not available
nvm install

# open workspace on vscode
code default.code-workspace

# install dependencies
rush update

# go to project directory
cd personal/napjoseph

# run development server
rushx dev

# generate sitemap. be sure to set env variables
# ROOT_URL="https://napjose.ph"
# TARGET_FOLDER="./out"
rushx sitemap

# see other commands in package.json
rushx --help

# adding new dependencies
rush add --package <package-name>
rush add --dev --package <package-name>
```

## Links

| description                               | link                                                                                                                                                |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **source code**                           | [napjoseph/mono-rush](https://github.com/napjoseph/mono-rush/tree/main/personal/napjoseph)                                                          |
| **github actions for deploying the site** | [main--napjoseph--deploy-to-github-pages.yml](https://github.com/napjoseph/mono-rush/actions/workflows/main--napjoseph--deploy-to-github-pages.yml) |
| **repository for the build artifacts**    | [napjoseph/napjoseph.github.io@export--mono-rush](https://github.com/napjoseph/napjoseph.github.io/tree/export--mono-rush)                          |
| **live site via github pages**            | [napjose.ph](https://napjose.ph)                                                                                                                    |
