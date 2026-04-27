function myfunc(input: string | undefined): void {
  input && console.log('input is defined and not empty')
}

myfunc('');
myfunc('Hello');