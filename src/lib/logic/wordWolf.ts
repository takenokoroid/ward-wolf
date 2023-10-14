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

export const wordWolf = {
	choseWord,
	choseNonDuplicatedWords
};
