# red-hibiscus

Scheme-like expressions in pure Typescript complete with a mini test suite.

**WIP: More to come!**

## car

```ts
type t = car<["one","two","three"]>
// type t = "one"
```

## cdr

```ts
type t = cdr<["one","two","three"]>
// type t = ["two","three"]
```

## cons

```ts
type t = cons<"one", ["two","three"]>
// type t = ["one",two","three"]
```
