# check-domain-availability

Checks the availability of the domain name and returns with some useful information

## Usage

```
import {Domains} from 'check-domain-availability';

Domains.find(domainName).then((isAvailable) => {
    if(isAvailable) {
        console.log('Available');
    } else {
        console.log('Not Available');
    }
}).catch((err) => {
    console.err('Handle err', err);
});
```
