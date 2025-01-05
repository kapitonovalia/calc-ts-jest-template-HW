import {CountryCodeGenerator} from "../src/CountryCodeGenerator"

//Проверка, что возвращается код с правильным префиксом для соответствующей страны
describe ("CountryCodeGenerator", () => {
    test("Check prefix of Estonia", () => {
        const estGenerator = new CountryCodeGenerator('EST');
        const code = estGenerator.generateCode()
        expect(code.startsWith("EST-")).toBe(true);
        expect(code.length).toBe(8);
        expect(/EST-\d{4}/.test(code)).toBe(true)
    })
    test ("Check prefix of Latvia", () => {
        const lvaGenerator = new CountryCodeGenerator('LVA');
        const code = lvaGenerator.generateCode()
        expect(code.startsWith("LVA-")).toBe(true);
        expect(code.length).toBe(8);
        expect(/LVA-\d{4}/.test(code)).toBe(true)
    })
    test ("Check prefix of Lithuania", () => {
        const ltuGenerator = new CountryCodeGenerator('LTU');
        const code = ltuGenerator.generateCode()
        expect(code.startsWith("LTU-")).toBe(true);
        expect(code.length).toBe(8);
        expect(/LTU-\d{4}/.test(code)).toBe(true)
    })
})