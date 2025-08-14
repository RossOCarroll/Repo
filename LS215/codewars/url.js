/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"


Input:
  - A string that represents a url
Output:
  - A string of the domain name

Requirements:
  - Parse the string so we get the domain name only
  - the domain name will be after the http:// , https://, https://www.
  

Questions:
  - will there be an empty string input?

Data Structure:
  - split the string into arrays

Algorithm:
  - Split the string by '//''
  - get the second element
  - Split that string by '.'
  - if the string doesnt start with 'w'
    - Get the first element
  - else 
    - Get the second element



*/

function domainName(url) {
  url = url.split('//');

  if (url[0].includes('www')) {
    url = url[0];
  } else {
    url = url[1];
  }

 url = url.split('.');

 if (url[0].includes('www')){
  url = url[1];
 } else {
  url = url[0]
 }

 return url;
}

console.log(domainName("http://google.com"))//, "google");
console.log(domainName("http://google.co.jp"))//, "google");
console.log(domainName("www.xakep.ru"))//, "xakep");
console.log(domainName("https://youtube.com"))//, "youtube");
