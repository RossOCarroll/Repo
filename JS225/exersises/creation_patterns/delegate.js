function delegate(obj, methodName, ...presetArgs) {
  return function(...laterArgs) {
    return obj[methodName].apply(obj, [...presetArgs, ...laterArgs]);
  };
}


const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

baz.qux();          // logs 'changed'