const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', empty];
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['Javascript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['javascript`, empty, empty]
console.log(languages.length); // 3

languages.length = 1;
languages['2'] = 'Python'; 
console.log(languages); // ['JavaScript', 2: 'Python']
console.log(languages[1]); // undeclared?
console.log(languages.length); // 1