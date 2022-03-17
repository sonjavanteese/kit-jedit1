import { writable } from 'svelte/store';
import {fetchList, fetchDetail} from './api';
function createSchemList() {
	const {subscribe, set, update} = writable([]);
	return {
		subscribe,
		fetchAll: () => {
			const fetchData = fetchList();
			set(fetchData);
		}
	}
}

export const schemalist = createSchemList();

function createSchemDetail() {
	const {subscribe, set, update} = writable([]);
	return {
		subscribe,
		fetchDet: (index) => {
			const fetchData = fetchDetail(index);
			set(fetchData);
		}
	}
}

export const schemadetail = createSchemDetail();