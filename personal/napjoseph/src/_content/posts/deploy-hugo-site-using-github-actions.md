---
title: 'Deploy Hugo Site Using GitHub Actions'
publishedDate: '2020-07-31T03:02:37+08:00'
tags:
  - 'Hugo'
  - 'GitHub Actions'
---

After creating a new project using
[Hugo's Quick Start guide](https://gohugo.io/getting-started/quick-start/), you
can then deploy to [GitHub Pages](https://pages.github.com/).

### Git Branches

For this site, we are deploying the project hosted at
[napjoseph/napjoseph.github.io](https://github.com/napjoseph/napjoseph.github.io/).

Since this is an
[Organization Pages-type repository](https://docs.github.com/en/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites),
we will be using following branches for our workflow:

```bash
$ git branch
master           # the branch that GitHub pages will serve the files from
stable           # the main development branch where all pull requests will be merged to
id_your_feature  # additional development branches for new features
```

### Add your Deploy Key

Follow the tutorial over at
[peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-create-ssh-deploy-key)
and add an SSH deploy key for your project.

### Create your GitHub Action

Afterwards, create a directory for your workflows and add the config file for
your new action.

```bash
$ mkdir -p .github/workflows
$ touch .github/workflows/deploy.yml
```

```yaml | file:hello.yaml
# file: .github/workflows/deploy.yml

name: deploy-to-master

on:
  push:
    branches:
      - stable

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      - name: Update theme
        run: git submodule update --init --recursive

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.74.3'

      - name: Build
        run: HUGO_ENV=production hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
          publish_dir: ./public
          publish_branch: master
          keep_files: false
          allow_empty_commit: true
```

### Deployment

After merging your pull requests to the **stable** branch, it should automatically
deploy to the **master** branch.
