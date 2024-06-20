/**
 * 生成指定長度且不重複的隨機數字陣列
 * @param length - 要生成的唯一數字的數量
 * @param start - 起始數
 * @param end - 結束數
 * @returns 返回不重複隨機數字的陣列
 */

import getRandomNumber from './getRandomNumber';

const generateUniqueNumbers = (length: number, start: number, end: number): number[] => {
    const uniqueNumbers = new Set<number>();

    while (uniqueNumbers.size < length) {
        const number = getRandomNumber(start, end);
        uniqueNumbers.add(number);
    }

    return Array.from(uniqueNumbers);
};

export default generateUniqueNumbers;
export { generateUniqueNumbers };
