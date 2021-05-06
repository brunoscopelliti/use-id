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

Default behavior:

```js
import useId from "@bscop/use-id";

useId(); // aS42hp
```

Custom behavior:

```js
import useId from "@bscop/use-id";

useId({ length: 10, prefix: "app" }); // app-aS42hpZn9Q
```

- `length`: determine the length of the random part of the id (default is 6).

- `prefix`: define a prefix that will be prepended to the random id (default, no prefix).

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
