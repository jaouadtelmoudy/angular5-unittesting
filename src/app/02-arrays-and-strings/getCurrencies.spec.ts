import {getCurrencies} from './getCurrencies';


describe('getCurrencies', () => {

    it('should return suppored currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('EUR');
        expect(result).toContain('AUD');
    })

})