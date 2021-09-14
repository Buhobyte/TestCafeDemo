# Test Cafe Example

_This example is based on "[E2E Web Testing with TestCafe](https://testautomationu.applitools.com/testcafe-tutorial)"_

## Starting 🚀


### Requirements

   1. [Node](https://nodejs.org/en/)
   2. [Visual Studio Code](https://code.visualstudio.com/)

### Build

```sh
npm init TestCafeDemo
npm i testcafe
```
## Execution

Write the command: __testcafe [browser] [path_file.js]__

For example:
```sh
testcafe chrome tests/firstTest.js
```

## Commands

You can use the next commands:

* Test only with metadata
    ```sh
    testcafe chrome tests/testmetaScript.js --test-meta env=production
    ```