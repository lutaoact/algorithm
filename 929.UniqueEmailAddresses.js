/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let map = {};
  for (let i = 0; i < emails.length; i++) {
    let email = emails[i];
    let atSignIndex = email.indexOf('@');
    let plusSignIndex = email.indexOf('+');
    let localName = email.substr(0, atSignIndex);
    if (plusSignIndex > 0) {
      localName = localName.substr(0, plusSignIndex);
    }
    map[localName.replace(/\./g, '') + email.substr(atSignIndex)] = true;
  }
  return Object.keys(map).length;
};

let emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
console.log(numUniqueEmails(emails));
