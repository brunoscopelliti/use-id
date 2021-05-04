# use-id

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/brunoscopelliti/use-id/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@bscop/use-id.svg?style=flat)](https://www.npmjs.com/package/@bscop/use-id)
[![CircleCI Status](https://circleci.com/gh/brunoscopelliti/use-id.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/brunoscopelliti/use-id)
[![Coverage](https://img.shields.io/codecov/c/github/brunoscopelliti/use-id)](https://app.codecov.io/gh/brunoscopelliti/use-id/)

A React hook to generate a very-likely unique id, persistent across re-renders.

## Install

```
npm i @bscop/use-id
```

## Usage

```js
import useId from "@bscop/use-id";

useId();
```

## Contribute

Read the [guidelines](./CONTRIBUTING.md).

### Run tests

```
npm test
```

### Coverage

Coverage reports are hosted on [codecov](https://codecov.io/).

```
npm run badge:coverage -- --token=<guid>
```

---

Bruno Scopelliti\
www.brunoscopelliti.com
