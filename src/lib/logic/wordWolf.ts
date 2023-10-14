import type { Data } from '$lib/repository/data';

const choseWord = (wordList: string[]): string => {
	if (wordList.length === 0) {
		throw new Error('wordList is empty');
	}
	const index = Math.floor(Math.random() * wordList.length);
	return wordList[index];
};

const choseNonDuplicatedWords = (wordList: string[], word: string): string => {
	// wordListからwordを除外した配列を作成し、choseWordを呼び出す
	wordList = wordList.filter((w) => w !== word);
	word = choseWord(wordList);
	return word;
};

const generateWordListWithTheme = (themeList: string[], data: Data[]): string[] => {
	if (themeList.length === 0) {
		throw new Error('themeList is empty');
	}
	let wordList: string[] = [];
	for (let i = 0; i < themeList.length; i++) {
		for (let j = 0; j < data.length; j++) {
			if (data[j].theme === themeList[i]) {
				wordList = wordList.concat(data[j].words);
			}
		}
	}
	return wordList;
};

export const wordWolf = {
	choseWord,
	choseNonDuplicatedWords,
	generateWordListWithTheme
};
