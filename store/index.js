// todo: Base state demo / change to modules system!!!

export const state = () => ({
	test: '12345',
})

export const getters = {
	test(state) {
		return state.test
	},
	// l10nSpecific(state, getters) {
	// 	return state.l10n[getters.local]
	// }
}

export const mutations = {
	UpdateTest(state, payload) {
		state.test = payload;
	},
}

export const actions = {
	// async getLocalization( {getters, commit} ) {
	// 	let l10nUrl = "https://touchscreen.enzym.com.ua/wp/wp-json/enzym/v1/l10n/";

	// 	if ( Object.keys(getters.l10n).length !== 2 ) {
	// 		return await this.$axios.get(l10nUrl)
	// 			.then((res) => {
	// 				if (res.status === 200) {
	// 					commit('l10nUpdate', res.data);
	// 					return res.data
	// 				} else {
	// 					alert( {Error: res.status} )
	// 				}
	// 		})
	// 	} else {
	// 		// commit('l10nUpdate', getters.l10nMock);
	// 		return false
	// 	}

	// }
}
