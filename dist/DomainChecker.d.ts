declare class DomainChecker {
    static find(domainName: string): Promise<boolean>;
}
export default DomainChecker;
