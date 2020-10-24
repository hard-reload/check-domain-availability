"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var js_dynamic_constants_1 = require("js-dynamic-constants");
var whois_1 = __importDefault(require("whois"));
var NO_MATCH_STRING = 'No match for domain "${0}"';
var DomainChecker = /** @class */ (function () {
    function DomainChecker() {
    }
    DomainChecker.find = function (domainName) {
        return new Promise(function (resolve, reject) {
            console.log("Look up for domain: " + domainName);
            try {
                whois_1.default.lookup(domainName, function (err, data) {
                    var check = js_dynamic_constants_1.getTemplateString(NO_MATCH_STRING)(domainName === null || domainName === void 0 ? void 0 : domainName.toUpperCase());
                    if (data.indexOf(check) !== -1) {
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }
                });
            }
            catch (err) {
                reject(err);
            }
        });
    };
    return DomainChecker;
}());
exports.default = DomainChecker;
