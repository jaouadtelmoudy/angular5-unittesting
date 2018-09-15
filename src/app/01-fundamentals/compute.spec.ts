import {compute} from './compute';

describe('compute', async() => {
    it('should return 0 if input is negative'), function() {
        const result = compute(-1);
        expect(result).toBe(0);
    }

    it('should return 2 if input is positive'), function() {
        const result = compute(1);
        expect(result).toBe(2);
    }
})