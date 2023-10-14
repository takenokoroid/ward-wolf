import { describe, expect, it } from 'vitest';
import { wordWolf } from './wordWolf';

describe('choseWord', () => {
	it('返される文字列が配列内に存在することの確認', () => {
		const sampleWords = ['apple', 'banana', 'cherry'];
		const result = wordWolf.choseWord(sampleWords);
		expect(sampleWords).toContain(result);
	});

	it('関数が何度も呼び出された場合のランダム性の確認', () => {
		const sampleWords = ['apple', 'banana', 'cherry', 'date', 'fig'];
		const results = new Set();
		for (let i = 0; i < 100; i++) {
			results.add(wordWolf.choseWord(sampleWords));
		}
		// 100回の呼び出しで全て同じ結果が返されることは低確率なので、
		// resultsのサイズが1より大きいことを期待します。
		expect(results.size).toBeGreaterThan(1);
	});

	it('配列が空の場合の確認', () => {
		expect(() => wordWolf.choseWord([])).toThrowError('wordList is empty');
	});
});

describe('choseNonDuplicatedWords', () => {
	it('wordListにwordが存在しない場合:', () => {
		const sampleWords = ['apple', 'banana', 'cherry'];
		const sampleWord = 'another fruit...';
		const result = wordWolf.choseNonDuplicatedWords(sampleWords, sampleWord);
		expect(sampleWords).toContain(result);
	});

	// vitestの仕様でspyonができないらしい
	// it('wordListにwordが存在した場合', () => {
	// 	const sampleWords = ['apple', 'banana', 'cherry'];
	// 	const sampleWord = 'apple';
	// 	const spy = vi.spyOn(wordWolf, 'choseWord').mockImplementation(() => 'banana');
	// 	const result = wordWolf.choseNonDuplicatedWords(sampleWords, sampleWord);
	// 	expect(spy).toBeCalledTimes(1);
	// 	expect(sampleWords).toContain(result);
	// 	vi.restoreAllMocks();
	// });
});

describe('generateWordListWithTheme', () => {
	it('themeListにthemeが存在しない場合', () => {
		const sampleThemeList = ['fruit', 'animal', 'food'];
		const sampleData = [
			{
				theme: 'another theme...',
				words: ['apple', 'banana', 'cherry']
			}
		];
		const result = wordWolf.generateWordListWithTheme(sampleThemeList, sampleData);
		expect(result).toEqual([]);
	});

	it('themeListにthemeが存在した場合', () => {
		const sampleThemeList = ['fruit', 'animal', 'food'];
		const sampleData = [
			{
				theme: 'fruit',
				words: ['apple', 'banana', 'cherry']
			}
		];
		const result = wordWolf.generateWordListWithTheme(sampleThemeList, sampleData);
		expect(result).toEqual(sampleData[0].words);
	});

	it('themeListが空の場合', () => {
		const sampleThemeList: string[] = [];
		const sampleData = [
			{
				theme: 'fruit',
				words: ['apple', 'banana', 'cherry']
			}
		];
		expect(() => wordWolf.generateWordListWithTheme(sampleThemeList, sampleData)).toThrowError(
			'themeList is empty'
		);
	});
});
