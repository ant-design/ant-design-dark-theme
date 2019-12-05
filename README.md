<h1 align="center">🌚 Ant Design Dark Theme 🌚</h1>

<div align="center">

[![Travis](https://img.shields.io/travis/ant-design/ant-design-dark-theme/master.svg?style=flat-square)](https://travis-ci.org/ant-design/ant-design-dark-theme)
[![npm package](https://img.shields.io/npm/v/@ant-design/dark-theme.svg?style=flat-square)](https://www.npmjs.org/package/@ant-design/dark-theme)
[![NPM downloads](http://img.shields.io/npm/dm/@ant-design/dark-theme.svg?style=flat-square)](http://npmjs.com/@ant-design/dark-theme)

[![Dependencies](https://img.shields.io/david/ant-design/ant-design-dark-theme.svg?style=flat-square)](https://david-dm.org/ant-design/ant-design-dark-theme)
[![DevDependencies](https://img.shields.io/david/dev/ant-design/ant-design-dark-theme.svg?style=flat-square)](https://david-dm.org/ant-design/ant-design-dark-theme?type=dev)

Dark theme [variables](https://github.com/ant-design/ant-design-dark-theme/blob/master/index.ts) of Ant Design.

> Still being experimental, welcome to try out and help us to improve it.

<span>Visit <a href="https://antdtheme.com/dark" target="_blank">https://antdtheme.com/dark</a> to preview.</span>

![](https://gw.alipayobjects.com/zos/antfincdn/wp6GpGo%26ID/f31e18a4-2018-4e12-95c6-998e7ac5b2fa.png)

</div>

## Install

```bash
$ npm install @ant-design/dark-theme
```

## Usage

```js
import darkTheme from '@ant-design/dark-theme';

// webpack.config.js: less-loader
{
  loader: 'less-loader',
  options: {
    modifyVars: darkTheme,
  },
},
```

Use in Ant Design Pro: https://github.com/ant-design/ant-design-pro/pull/2946/
