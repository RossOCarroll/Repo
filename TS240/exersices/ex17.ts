interface KeyValuePair<K, V> {
  key: K;
  value: V;
};

let pair: KeyValuePair<string, number> = {key: 'key', value: 345}