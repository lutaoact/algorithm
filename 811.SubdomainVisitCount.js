/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  let map = {};
  for (let i = 0; i < cpdomains.length; i++) {
    let [count, domain] = cpdomains[i].split(' ');
    count = Number(count);

    if (map[domain] === undefined) map[domain] = 0;
    map[domain] += count;

    let fromIndex = 0, index = domain.indexOf('.', fromIndex);
    while (index > 0) {
      fromIndex = index + 1;
      let subdomain = domain.substr(fromIndex);
      if (map[subdomain] === undefined) map[subdomain] = 0;
      map[subdomain] += count;

      index = domain.indexOf('.', fromIndex);
    }
  }
  return Object.keys(map).map(function(domain) {
    return map[domain] + ' ' + domain;
  });
};

let cpdomains = ["9001 discuss.leetcode.com"];
console.log(subdomainVisits(cpdomains));

cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
console.log(subdomainVisits(cpdomains));
