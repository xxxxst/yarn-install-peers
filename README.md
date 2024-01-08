# yarn-install-peers

CLI command to install peerDependencies by yarn or npm. This can be useful when developing modules

[https://github.com/xxxxst/yarn-install-peers](https://github.com/xxxxst/yarn-install-peers)

Consider the following dependencies:

```json
{
    "dependencies": {
        "vue": "^2.6.11"
    },
    "devDependencies": {},
    "peerDependencies": {
        "vue-class-component": "^7.2.3"
    },
}
```

## Install

install global

```bash
$ npm i -g yarn-install-peers
```

or install local

```bash
$ yarn add -d yarn-install-peers
$ # or
$ npm i -d yarn-install-peers
```

## Usage

```bash
$ # use yarn
$ yarn-install-peers
$ # use npm
$ yarn-install-peers-npm
```

This will read out your `package.json` file and install all of its peerDependencies. There are no other options.

## Usage(local)

```json
//pacakge.json
{
    "scripts": {
        // use yarn
        "yarn-install-peers": "yarn-install-peers",
        // use npm
        "yarn-install-peers-npm": "yarn-install-peers-npm"
    },
    "devDependencies": {
        "yarn-install-peers": "^0.0.1"
    },
}
```

run in project directory

```bash
$ yarn yarn-install-peers
$ # or
$ npm run yarn-install-peers-npm
```

# License

MIT

[LICENSE](./LICENSE)
