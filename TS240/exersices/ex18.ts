function filterByType<T>(arr: any[], providedType: T): T[]{
  return arr.filter(ele => typeof ele === providedType);
}

console.log(filterByType<string>(["hello", "world", 42, true], "string"))