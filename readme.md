# demo

this is an empty/barebones next.js application, demonstrating failure from https://github.com/DevExpress/testcafe/issues/7425

- `[p]npm install`
- in terminal-1: `npm run serve`
- in terminal-2: `npm run test`
- see `pages/index.js` for the next.js window.location.assign invocation
  - this breaks because next.js uses TrustedScripts, and testcafe doesn't process `eval(__procScript$(new TrustedScript(...))`
