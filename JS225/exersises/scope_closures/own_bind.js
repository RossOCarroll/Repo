function myBind(func, obj) {
  return function(...args) {
    return func.apply(obj, args);
  }
}