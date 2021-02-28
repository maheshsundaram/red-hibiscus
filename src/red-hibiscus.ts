export type car<list extends unknown[]> = list extends [
  infer head,
  ...infer _tail
]
  ? head
  : list;

export type cdr<list extends unknown[]> = list extends [
  infer _head,
  ...infer tail
]
  ? tail
  : list;

export type cons<item, list extends unknown[] = []> = list extends []
  ? [item]
  : [item, ...list];
