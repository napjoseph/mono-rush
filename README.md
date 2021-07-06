# mono-rush

A monorepo using [Rush](https://rushjs.io/).

## Requirements

- [nvm](https://github.com/nvm-sh/nvm)

## Local Development

It's recommended to use [Visual Studio Code](https://code.visualstudio.com/Download) and install the [recommended extensions](./.vscode/extensions.json). Once installed, open the default workspace:

```shell
# open the default vscode workspace
code default.code-workspace
```

You can also create your own workspace if you want:

```shell
# clone the default workspace
cp default.code-workspace your-custom-workspace.code-workspace

# open and update the settings to your liking
code your-custom-workspace.code-workspace
```

Install specific NodeJS version using `nvm`:

```shell
# use version defined in .nvmrc
nvm use

# install if not available
nvm install
```

Install `pnpm` globally:

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

## Apps

| package | folder | category |
| ------- | ------ | -------- |
| `starters-nextjs` | [apps/starters/nextjs](./apps/starters/nextjs) | `prototypes` |

## Contributing

**Imposter syndrome disclaimer**: We want your help. No, really.

There may be a little voice inside your head that is telling you that you're not ready to be an open source contributor; that your skills aren't nearly good enough to contribute. What could you possibly offer a project like this one?

We assure you - the little voice in your head is wrong. If you can write code at all, you can contribute code to open source. Contributing to open source projects is a fantastic way to advance one's coding skills. Writing perfect code isn't the measure of a good developer (that would disqualify all of us!); it's trying to create something, making mistakes, and learning from those mistakes. That's how we all improve, and we are happy to help others learn.

Being an open source contributor doesn't just mean writing code, either. You can help out by writing documentation, tests, or even giving feedback about the project (and yes - that includes giving feedback about the contribution process). Some of these contributions may be the most valuable to the project as a whole, because you're coming to the project with fresh eyes, so you can see the errors and assumptions that seasoned contributors have glossed over.

## License

Licensed under **MIT**. Please see bundled [LICENSE file](./LICENSE.md) for more details.
