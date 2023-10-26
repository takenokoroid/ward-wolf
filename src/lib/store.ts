import { writable, type Writable } from 'svelte/store';

export const hands: Writable<string[]> = writable([]);
