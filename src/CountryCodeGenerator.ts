export class CountryCodeGenerator {
    country: any;
    countryPrefix: any;

    constructor(country: string) {
       this.country = country.toUpperCase();
        this.setCountryPrefix();
    }
    setCountryPrefix(): void {
        if (this.country === 'EST') {
            this.countryPrefix = 'EST-';
        } else if (this.country === 'LVA') {
            this.countryPrefix = 'LVA-';
        } else if (this.country === 'LTU') {
            this.countryPrefix = 'LTU-';
        }
    }
    generateCode(): string {
        const randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000);
        return this.countryPrefix + randomFourDigitNumber;
    }
}
const estGenerator = new CountryCodeGenerator('EST');
console.log(estGenerator.generateCode());

const lvaGenerator = new CountryCodeGenerator('LVA');
console.log(lvaGenerator.generateCode());

const ltuGenerator = new CountryCodeGenerator('LTU');
console.log(ltuGenerator.generateCode());
