/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged 
to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples








*/

function scramble(str1, str2) {
  for (let i = 0; i < str2.length; i++ ) {
    if (!str1.includes(str2[i])) {
      return false;
    } else {
      str1 = str1.replace(str2[i], '');
    }
  }
  
  return true;
}


console.log(scramble('rkqodlw',           'world'      ))//, true );
console.log(scramble('cedewaraaossoqqyt', 'codewars'   ))//, true );
console.log(scramble('katas',             'steak'      ))//, false);
console.log(scramble('scriptjavx',        'javascript' ))//, false);
console.log(scramble('scriptingjava',     'javascript' ))//, true );
console.log(scramble('scriptsjava',       'javascripts'))//, true );
console.log(scramble('javscripts',        'javascript' ))//, false);
console.log(scramble('jscripts',          'javascript' ))//, false);
console.log(scramble('aabbcamaomsccdd',   'commas'     ))//, true );
console.log(scramble('commas',            'commas'     ))//, true );
console.log(scramble('sammoc',            'commas'     ))//, true )