# example of path issue with serverless-plugin-typescript

### steps to reproduce

1. `rm -rf .build`
1. `yarn run offline`

### to make it work

1. `rm -rf .build`
1. `yarn run build`
1. `yarn run offline`

It works in this case because `yarn run build` put index.js at `.build/src`
