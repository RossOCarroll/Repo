function substring(string, start, end) {

  if (end === undefined) {
    end = string.length;
  }  
  
  start = isNaN(start) || start < 0 ? 0 : start;
  end = isNaN(end) || end < 0 ? 0 : end;

  start = Math.min(start, string.length);
  end = Math.min(end, string.length);

  if (start > end) {
    [start, end] = [end, start];
  }

  if (start === end) {
    console.log('');
    return;
  }

  let subString = '';
  for (let index = start; index < end; index++) {
    subString += string[index];
  }

  console.log(subString);
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"