'use strict';

/*
535. Encode and Decode TinyURL

TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
*/

let convertMap = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let id = 0, urlMap = {};
let baseUrl = 'http://tinyurl.com/';

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  let result = '', num = id++;
  for (let i = 0; i < 6; i++) {
    result = convertMap[num % 62] + result;
    num = ~~(num / 62);
  }
  urlMap[result] = longUrl;
  return baseUrl + result;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return urlMap[shortUrl.substr(-6)];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

console.log(encode('https://leetcode.com/problems/design-tinyurl'));

console.log(decode(encode('https://leetcode.com/problems/design-tinyurl')));
