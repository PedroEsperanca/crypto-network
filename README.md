Angular Web App seed 
============================

This projects is based on [angular2-webpack-advance-starter](https://github.com/JonnyBGod/angular2-webpack-advance-starter), please consult it for further documentation.

The only diference here is that instead of the simple demo app we created a more complex app with many pre created components and systems.

### Features:

WIP

### How to use

```bash
git clone https://github.com/JonnyBGod/web-seed.git ./web
cd web
rm -rf .git
npm run git:setup
npm i
```

Now you are ready to start using it and developing

```bash
npm start
```

### Configurations

WIP

### Merge Upstream

If you followed "How to use" procedure, you can take advantage of update made in this repo

```bash
npm run git:merge:preview
```
this command will not do anything. You will just see what changed would do if you use the next command

```bash
npm run git:merge
```
Now you just have to deal with conflits...

### Build Docker container for production deployment

First change the name of the container at "build:docker" script in package.json

```bash
npm run build:docker
```

## KNOWN ISSUES

These is an upstrem problem with **bootstrap-loader** npm registry that installs the wrong version some times.
The following command fixes it:
```bash
npm i bootstrap-loader@2.0.0-beta.17
```