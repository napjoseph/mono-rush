# shelves-web

A project using [NextJS](http://nextjs.org/).

Also includes configuration for:

- [tailwindcss](https://tailwindcss.com/)
- [eslint](https://eslint.org/)
- [jest](https://jestjs.io/)

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
cd apps/shelves/web

# run development server
rushx dev

# see other commands in package.json
rushx --help

# adding new dependencies
rush add --dev --package <package-name>
```
