<script lang="ts">
	import { wordWolf } from '$lib/logic/wordWolf';
	import { data } from '$lib/repository/data';
	import { hands } from '$lib/store';

	//村人の数
	let villager = 3;
	//人狼の数
	let wolf = 1;
	//テーマリスト
	const themeList = ['にじさんじ', 'ホロライブ'];
	//トークテーマ
	let theme = themeList[0];

	let index = 0;

	let wordList: string[] = [];
	let word = '';
	let nonDuplicatedWord = '';
	const func = () => {
		$hands = [];
		wordList = wordWolf.generateWordListWithTheme([theme], data);
		word = wordWolf.choseWord(wordList);
		nonDuplicatedWord = wordWolf.choseNonDuplicatedWords(wordList, word);
		const player = villager + wolf;
		for (let i = 0; i < player; i++) {
			hands.update((hands) => [...hands, nonDuplicatedWord]);
		}
		for (let i = 0; i < wolf; i++) {
			const index = Math.floor(Math.random() * $hands.length);
			if ($hands[index] === word) {
				i--;
				continue;
			}
			$hands[index] = word;
		}
	};

	const inc = () => {
		index++;
	};

	const reset = () => {
		index = 0;
		hands.update(() => []);
	};
</script>

<div>
	{#if $hands.length === 0}
		<div class="form-group">
			<label>
				村人の人数
				<input type="number" bind:value={villager} />
			</label>
		</div>

		<div class="form-group">
			<label>
				人狼の人数
				<input type="number" bind:value={wolf} />
			</label>
		</div>

		<div class="form-group">
			<label>
				トークテーマ
				<select bind:value={theme}>
					{#each themeList as item}
						<option value={item}>{item}</option>
					{/each}
				</select>
			</label>
		</div>
		<button on:click={func}>ゲームスタート</button>
	{:else if index < $hands.length}
		{'player' + (index + 1)}
		<div>
			{$hands[index]}
		</div>
		<button on:click={inc}>次へ</button>
	{:else}
		{#each $hands as hand, index}
			<div>{'player' + (index + 1)} {hand}</div>
		{/each}
		<button on:click={reset}>TOPへ</button>
	{/if}
</div>

<style>
	.form-group {
		margin-bottom: 1rem; /* 各グループの間隔を開ける */
	}

	.form-group label {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 250px; /* この値は適宜調整してください */
	}
	.form-group select {
		max-width: auto; /* この値は適宜調整してください */
	}
</style>
