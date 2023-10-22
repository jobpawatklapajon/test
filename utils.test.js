const utils = require('./utils');

describe('permutation', () => {
    it("input 'a' should return  ['a']", () => {
        const result = utils.findPermutation('a');
        expect(result).toEqual('a');
    });

    it("input 'ab' should return ['ab', 'ba']", () => {
        const result = utils.findPermutation('ab');
        expect(result).toEqual('ab', 'ba');
    });

    it("input 'abc' should return ['abc','acb','bac','bca','cab','cba']", () => {
        const result = utils.findPermutation('abc');
        expect(result).toEqual('abc','acb','bac','bca','cab','cba');
    });

    it("input 'aabb' should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']", () => {
        const result = utils.findPermutation('aabb');
        expect(result).toEqual('aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa');
    });
});

describe('odd int', () => {
    it("input [7] should return 7", () => {
        const result = utils.findOddInt([7]);
        expect(result).toEqual(7);
    });

    it("input [0] should return 0", () => {
        const result = utils.findOddInt([0]);
        expect(result).toEqual(0);
    });

    it("input [1,1,2] should return 2", () => {
        const result = utils.findOddInt([1, 1, 2]);
        expect(result).toEqual(2);
    });

    it("input [0,1,0,1,0] should return 0", () => {
        const result = utils.findOddInt([0,1,0,1,0]);
        expect(result).toEqual(0);
    });

    it("input [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4", () => {
        const result = utils.findOddInt([1,2,2,3,3,3,4,3,3,3,2,2,1]);
        expect(result).toEqual(4);
    });
});


describe('count smile face', () => {
    it("input [':)', ';(', ';}', ':-D'] should return 2", () => {
        const result = utils.countSmile([':)', ';(', ';}', ':-D']);
        expect(result).toEqual(2);
    })

    it("input [';D', ':-(', ':-)', ';~)'] should return 3", () => {
        const result = utils.countSmile([';D', ':-(', ':-)', ';~)']);
        expect(result).toEqual(3);
    })

    it("input [';]', ':[', ';*', ':$', ';-D'] should return 1", () => {
        const result = utils.countSmile([';]', ':[', ';*', ':$', ';-D']);
        expect(result).toEqual(1);
    })
});

