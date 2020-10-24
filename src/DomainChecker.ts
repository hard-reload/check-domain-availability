import { getTemplateString } from 'js-dynamic-constants';
import whois from 'whois';

const NO_MATCH_STRING = 'No match for domain "${0}"';

class DomainChecker {
  static find(domainName: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      console.log(`Look up for domain: ${domainName}`);
      try {
        whois.lookup(domainName, (err: any, data: any) => {
          const check = getTemplateString(NO_MATCH_STRING)(
            domainName?.toUpperCase()
          );
          if (data.indexOf(check) !== -1) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default DomainChecker;
