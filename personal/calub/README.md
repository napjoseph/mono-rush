# calub-web

![napjoseph/mono-rush](https://github.com/napjoseph/mono-rush/actions/workflows/main--calub-web--deploy-to-github-pages.yml/badge.svg)

The Curriculum Vitae of Nap Joseph Calub.

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
cd personal/calub

# run development server
rushx dev

# see other commands in package.json
rushx --help

# adding new dependencies
rush add --dev --package <package-name>
```

## Links

| description                               | link                                                                                                                                                |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **source code**                           | [napjoseph/mono-rush](https://github.com/napjoseph/mono-rush/tree/main/personal/calub)                                                              |
| **github actions for deploying the site** | [main--calub-web--deploy-to-github-pages.yml](https://github.com/napjoseph/mono-rush/actions/workflows/main--calub-web--deploy-to-github-pages.yml) |
| **repository for the build artifacts**    | [napjoseph/calub@export--mono-rush](https://github.com/napjoseph/calub/tree/export--mono-rush)                                                      |
| **live site via github pages**            | [napjose.ph/calub](https://napjose.ph/calub)                                                                                                        |
