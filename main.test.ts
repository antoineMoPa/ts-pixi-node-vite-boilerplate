import { myFunc } from './main';
import {
    describe,
    it,
    expect,
} from 'vitest';

describe('main', async () => {
    it('Should return 42', async () => {
        // Arrange

        // Act

        // Assert
        expect(myFunc()).to.equal(42);

        // Cleanup
    });
});
