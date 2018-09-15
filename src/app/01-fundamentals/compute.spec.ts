import {compute} from './compute';

describe('compute', async() => {
    it('should return 0 if input is negative'), async() => {
        const result = compute(-1);
        expect(result).toBe(0);
    }

    it('should return 0 if input is positive'), async() => {
        const result = compute(1);
        expect(result).toBe(2);
    }
})