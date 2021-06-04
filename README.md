# Quick'n Dirty HTTP poll PoC

This code is just a small PoC about making an HTTP poll
with plain JS in the frontend.

Used express-generator for the backend

# install

Node version 14 at least.

```
npm install
```

# launching

```
npm run dev
```

This will simultaneously:

* launch express for the backend (with nodemon)
* build all frontend files, start a webserver (with parcel2)

Get the frontend url from `[frontend]` logs `server running at`
and browse it.