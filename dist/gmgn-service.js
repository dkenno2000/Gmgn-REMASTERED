(function (_0x30b962, _0x2c1f85) {
	const _0x39d7ec = _0x1e87,
		_0x8f08c4 = _0x30b962();
	while (!![]) {
		try {
			const _0xb7d196 = parseInt(_0x39d7ec(0x1db)) / 0x1 + parseInt(_0x39d7ec(0x1d7)) / 0x2 + parseInt(_0x39d7ec(0x1da)) / 0x3 + parseInt(_0x39d7ec(0x1d9)) / 0x4 + parseInt(_0x39d7ec(0x1dc)) / 0x5 * (-parseInt(_0x39d7ec(0x1de)) / 0x6) + parseInt(_0x39d7ec(0x1dd)) / 0x7 + -parseInt(_0x39d7ec(0x1d8)) / 0x8;
			if (_0xb7d196 === _0x2c1f85) break;
			else _0x8f08c4['push'](_0x8f08c4['shift']());
		} catch (_0x330ac4) {
			_0x8f08c4['push'](_0x8f08c4['shift']());
		}
	}
}(_0xc1ee, 0x458a0));
const Z = {};
let t = null;
async function e() {
	if (await chrome.offscreen.hasDocument()) return;
	if (!t) {
		t = chrome.offscreen.createDocument({
			url: 'offscreen.html',
			reasons: ['DOM_PARSER'],
			justification: 'Parse HTML content to extract description meta tags'
		});
	}
	await t;
}
async function E(t, r) {
	await e();
	return new Promise(e => {
		chrome.runtime.sendMessage({
			type: 'parse-html',
			url: t,
			action: r
		}, t => {
			e(t);
		});
	});
}
const r = {
	DevMode: false,
	ExtensionEnabled: true,
	ExtensionVersion: 1.1,
	lastRequest: 0,
	gid: Date.now(),
	init: false,
	Update: {
		UpdateAvailable: false,
		id: 'default',
		request: 0
	}
};
const s = {
	price: null,
	lastCheck: 0
};
const u = {
	APIkeys: {
		0: 'AjCfLU79IkOVpRw570wVdXLt6UtJQfkR8IEp7sROl9Tz',
		1: 'AqdrIoawIElbtkuJa9TGkAcwL3jsCEER8I9FssvAG40d',
		2: 'AqZ-jbpSs05fmwqvQqE9sJqkyykQQgQR8JruxpZiEquA',
		3: 'AogqWSqkAEIkniRDNm4FcOeACwTUHfkR8LTWFoHUp5S4',
		4: 'Aqkf76X63EvTpkZZ8AHe2ZuWCQj2VGMR8JRNrqRhf0fE',
		5: 'Am_A6SXHoE6ejrhtgCbb8K-ENGQKVGQR8JRPrqRhf0fE',
		6: 'AocTsqqGWkZJnmBvHKM2arLpeD72VOoR8JSBrqRhf0fE',
		7: 'AmDn54ONbUl-mHKDGTzYIrgNlyI4V2MR8JXbrqRhf0fE',
		8: 'Ao7ZOdAe30cUtNg_H5xRrp2KKZXtV2MR8JXcrqRhf0fE',
		9: 'Aj2GDkh93EPJiT606N97pyktHyzBV2QR8JXdrqRhf0fE',
		10: 'AriytiUUk04-kxyhJMfy5NCDsvXbV2QR8JXerqRhf0fE',
		11: 'Agss7ydnEEbLgsQquWeVe4YS-hFCV2UR8JXfrqRhf0fE',
		12: 'AlPWb5eBWUEUmkSwcqdE6faMipRXV2UR8JXgrqRhf0fE',
		13: 'AmysjlEVykmUlqtEDsohXCmMQ-sEV2YR8JXirqRhf0fE'
	},
	lastCheck: 9999,
	data: null,
	uid: null
};
const D = {
	auth: null,
	cache: null,
	lastCheck: 0,
	API: [{
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjRhMzdjNzE5LTNlMTktNGI4OC1hODNjLTAzOWNlNDcyMDU3OSIsIm9yZ0lkIjoiNDU0ODU0IiwidXNlcklkIjoiNDY3OTg0IiwidHlwZUlkIjoiYTkxOTBlNzQtOGIzZC00ZTNhLWI1YmEtMjcwNzI3YzgzMmNiIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTAzNjI0MjMsImV4cCI6NDkwNjEyMjQyM30.n75L4Q9yksqkmdDYq0voqWCutryWD9kE-8NUSeHXU1o',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjM1MzNiZjhjLTIyZTMtNDg5MS04YzRlLTA3M2Q4NGQ0Zjc3YSIsIm9yZ0lkIjoiNDU1NDEyIiwidXNlcklkIjoiNDY4NTU0IiwidHlwZUlkIjoiOTkxMmFiZjctYTM2Mi00MjIyLWFjNzUtNTZiZjg3OTRjMjFiIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTA2ODgyMDEsImV4cCI6NDkwNjQ0ODIwMX0._9TklSPzfaGhv9XI2iDPJSUDkfixhbT8O15QhE5dPVo',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImUwZDIzY2QyLWE1MjQtNDJiNC05YjI3LTljNGQzZjQwODUyZCIsIm9yZ0lkIjoiNDU3NjkxIiwidXNlcklkIjoiNDcwODkyIiwidHlwZUlkIjoiY2ZkYTFkZDgtZmE2Zi00YjI0LTk5ZjctZmQ4NjQ5Nzc3MmNkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTE3NDA1NDIsImV4cCI6NDkwNzUwMDU0Mn0.AjfL897gNK86rlAcUY8xLOGcstX64LdIVR2uqc6QQZA',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImMxNmY2MWM2LWQ4NjgtNDQ5MC1iOTc1LWFjZDQ4ZjgwOTRmOSIsIm9yZ0lkIjoiNDU1OTU1IiwidXNlcklkIjoiNDY5MTE4IiwidHlwZUlkIjoiZWJjZmUyZmItNGRhMC00MGU1LTliMTEtZWFjNzY4YWMwMWI3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTA5NjI3MTIsImV4cCI6NDkwNjcyMjcxMn0.GsZID-3VAXEvJjRuLVImH4hTT9ylQyo08vmtUMAeMSw',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImY0NTI1OGUwLTgyMjYtNDgxZi05ZTY4LWQyOWM0NjU5ZWNmYiIsIm9yZ0lkIjoiNDU1OTU2IiwidXNlcklkIjoiNDY5MTE5IiwidHlwZUlkIjoiMDRhNjBiYTktN2VkMy00ZmU5LTlkMGEtNmM4OTkyMTAzNjcxIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTA5NjMwNTMsImV4cCI6NDkwNjcyMzA1M30.DlRxHCIPt6v50yd_DwKBL0WnrQPMKtZwSKyhcMx-wH8',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjVmZTc5ZmIxLWMwYTUtNDQ4Zi04MzRhLTBlMzcyZWM1YzRlNiIsIm9yZ0lkIjoiNDU1OTU3IiwidXNlcklkIjoiNDY5MTIwIiwidHlwZUlkIjoiMjU3ODEwMTEtYTZlYy00YjQ5LWI4MWQtOGNmNmU0Y2U1MTdiIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTA5NjMyMzYsImV4cCI6NDkwNjcyMzIzNn0.fuuE9VQew7ZMovOY6cbooaKVGd6wPkIsjqCk5PExnD4',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjA0ZDhkYWU3LTExY2ItNDgwMy1hYTA2LWFhYzlkMWZlMTA2OSIsIm9yZ0lkIjoiNDU1OTU5IiwidXNlcklkIjoiNDY5MTIyIiwidHlwZUlkIjoiM2I2MDZlNmItYzYxMy00ZWE0LTk3MmEtYjcwMTM4ODZjNmZjIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTA5NjM0MjEsImV4cCI6NDkwNjcyMzQyMX0.9uvDZk1BlAxUJxVHx9Vptxe4PdypGuq0rPsiTZBr0gk',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImQyZTk0MDYzLWI3NWYtNDM2OC1hZjcwLTNjZmZjNjg3ZWM1MSIsIm9yZ0lkIjoiNDU1OTYwIiwidXNlcklkIjoiNDY5MTIzIiwidHlwZUlkIjoiOWJjZmIzMTAtOWJlMC00MzliLTk5MDMtMzMyZTBlYjI1ZWFhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTA5NjM1NzUsImV4cCI6NDkwNjcyMzU3NX0.qlOaN1FM4yipf-6pjSgHb8VLAjxIHwgkMUNWll4vfds',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImI5YmZjMmE2LTQ4NTYtNDY3Mi05Zjk4LWQ3MzNlMWVlMWE3MiIsIm9yZ0lkIjoiNDU2MjY3IiwidXNlcklkIjoiNDY5NDM0IiwidHlwZUlkIjoiYjcxNzRlZWQtNDcyYy00MWI1LWFjZTktYzQwYzU1ZWI5OGRmIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTExNDQwODMsImV4cCI6NDkwNjkwNDA4M30.qxzEIgjqATzs6HLzKVgjixB4PpYdti1q9CaFsLQNWRY',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjJjMDNmNWUyLWVlNGItNDhiOC05MGQ4LTFmNGMwNDEwZmUwZSIsIm9yZ0lkIjoiNDU2MjY4IiwidXNlcklkIjoiNDY5NDM1IiwidHlwZUlkIjoiZThhNTA3MGMtYWVmZC00NDI5LTk1MmUtMWJlZmFlMmQ2ODVlIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTExNDQyNzQsImV4cCI6NDkwNjkwNDI3NH0.K2XYh23pCMA5g_F84L7f4K-3yMK3hwz4nf_MywO-hB0',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjUxMTNiZDM5LWQ1MTQtNDc4NC04OThjLWE5M2E5NzY1ZDBmOSIsIm9yZ0lkIjoiNDU2MzM3IiwidXNlcklkIjoiNDY5NTA1IiwidHlwZUlkIjoiYzJhNWQwZmUtYTk4Zi00ZDk4LTk0NjYtMWJlOWUyY2U5ODljIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTEyMDMwODIsImV4cCI6NDkwNjk2MzA4Mn0.eLAvnH_z9Uwp8C9Kpzdapp51IkuiztNm1LbgdMuGIXI',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjJhNmJhODE1LTdlM2MtNGQ2YS1iN2UyLWFjODU1OTNlMDhlZSIsIm9yZ0lkIjoiNDU3NjgzIiwidXNlcklkIjoiNDcwODg0IiwidHlwZUlkIjoiNGE3YjhlZTMtOGIwNS00ZjUwLWIyNWItOGZkM2U0MjlmNGFiIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTE3Mzg2MTEsImV4cCI6NDkwNzQ5ODYxMX0.LlGdP4Y0PsfKQ8Cna8cmMvek8ghNKWXZafs6kNMK7KQ',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImE0OTQyN2JlLWU0ZmMtNDYyMi1iNmM0LThjYjRiYzg2MDUzMSIsIm9yZ0lkIjoiNDU3Njg1IiwidXNlcklkIjoiNDcwODg2IiwidHlwZUlkIjoiNTQ3NGRhMDctYTM4ZS00ZjM0LWI4YWItMGMwMjZiYTU3MTlhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTE3Mzk2NTYsImV4cCI6NDkwNzQ5OTY1Nn0.mI-FvW-oYRSlaC6xVxF10XdHc7qL0V6-QKmKw5YPcBk',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijc0NzQ1YTUwLTk2ODUtNDhhNS1iZDY2LWM5NzQzZGMwNTE4MSIsIm9yZ0lkIjoiNDU3Njg3IiwidXNlcklkIjoiNDcwODg4IiwidHlwZUlkIjoiYWI4OTM4YzYtZTg1Yy00N2RjLWFmYzktODMxYjE2YjMyNGI0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTE3NDAxODgsImV4cCI6NDkwNzUwMDE4OH0.5slnqIc0DFBvgG_GMTHRlSDHn9f3ZNNQ58l5xGpO5Wo',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImIwNjJlM2NiLTRmM2UtNGQ4Yy04MTZjLTBjYWRlMTAyOWQyYSIsIm9yZ0lkIjoiNDU3NjkwIiwidXNlcklkIjoiNDcwODkxIiwidHlwZUlkIjoiNWVjZGFlMjUtNGQ3Zi00M2FjLTllYjItYjNkNDQwYzYzODhhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTE3NDA0NDUsImV4cCI6NDkwNzUwMDQ0NX0.qOgmY9q3CLmd6IcffdYI4PCHNlCXN2MW3Miz1OVbZdc',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjY5MWE4ZTRkLTkxMDEtNGJlYi04Njc2LTk5NTgzNzVkYWZmMCIsIm9yZ0lkIjoiNDU3NjkyIiwidXNlcklkIjoiNDcwODkzIiwidHlwZUlkIjoiNGU5NDEyNDQtNDJjYS00YWJmLTgyZGItMjZkMDkwYTRjNjk2IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTE3NDA2NzQsImV4cCI6NDkwNzUwMDY3NH0.xDszB9uNNiYLFJFOQOZrDsDvEOkAQuC7cKDhHmyoN3Y',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImI1NmQ1MmI2LTE0YzUtNDU1Yi05YmNhLTQyYmExNTQwZTI5MCIsIm9yZ0lkIjoiNDU3Njk2IiwidXNlcklkIjoiNDcwODk3IiwidHlwZUlkIjoiYWYwNzcxZGYtOTliOC00N2ZhLWEwMzUtOGRkYzkwOTU5MmVkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTE3NDA5MjksImV4cCI6NDkwNzUwMDkyOX0.LOrhh1xq1t1AtKWAo7HwB85AwNuJ9H6KSWF-Hz4CLJM',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjlkNTRhOWFiLTgzMDQtNDYzYS1hYzgzLTg0ZjEzNGM3YTMxNCIsIm9yZ0lkIjoiNDU3Njk5IiwidXNlcklkIjoiNDcwOTAwIiwidHlwZUlkIjoiODQzY2IxYTctMmQ0OC00OTkzLTkxYjYtZDJiYTQ5ZDM5MjliIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTE3NDExNzcsImV4cCI6NDkwNzUwMTE3N30.zhOfJVKmVd187FvswZyKEPXnHwT1_ckIPsJyf_zmCU0',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjQzMmVkYzBhLWQyMmMtNDRiYi05YzlmLTc0M2ViY2VhZjI3OSIsIm9yZ0lkIjoiNDU4MDY2IiwidXNlcklkIjoiNDcxMjcyIiwidHlwZUlkIjoiNDdiOTVhNjQtY2JiNS00MGQxLTg5NjYtMDk3N2MyNWUyMWFiIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTE5MDg5NTQsImV4cCI6NDkwNzY2ODk1NH0.jUJXapA-gvdVDJli8i5rUAkD0k3MCejDjs7yi5bYW0U',
		failedUntil: 0
	}, {
		Key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImYzN2VjOTNjLWMzMGMtNDYxZi1iZGU0LTNhZjE0ZTMyNDZlZCIsIm9yZ0lkIjoiNDU4MDY3IiwidXNlcklkIjoiNDcxMjczIiwidHlwZUlkIjoiNTY0OTdmZmEtZWM4YS00ZjBhLWFlNjgtZWIyZTI1YTljZGUzIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTE5MDkxNTcsImV4cCI6NDkwNzY2OTE1N30.ddoEZS-oJNVEtjor3vEzVML-xWAMLqaDKn9-Y3MFjUI',
		failedUntil: 0
	}]
};
async function j() {
	const {
		Data: t = {
			API: []
		}
	} = await chrome.storage.local.get('Data');
	const e = Date.now();
	const r = t.API.filter(t => e >= (t.failedUntil || 0));
	return r.length ? r[Math.floor(Math.random() * r.length)].Key : null;
}
async function T(e) {
	const {
		Data: t = {
			API: []
		}
	} = await chrome.storage.local.get('Data');
	const r = t.API.map(t => t.Key === e ? {
		...t,
		failedUntil: Date.now() + MORALIS_KEY_BLACKLIST_DURATION
	} : t);
	await chrome.storage.local.set({
		Data: {
			...t,
			API: r
		}
	});
}
async function v() {
	await chrome.storage.local.set({
		Options: r
	});
	await chrome.storage.local.set({
		SOL: s
	});
	await chrome.storage.local.set({
		Cache: u
	});
	await _({
		Data: D
	});
}

function _(e) {
	return new Promise(t => chrome.storage.local.set(e, t));
}

function _0xc1ee() {
	const _0x2d9313 = ['9435224hqqyvP', '689748KxWhyY', '1483182YDZlIW', '175700fmdRQp', '25UxTeCN', '3238438fAbDVB', '191844pifOib', '637880TIbxxE'];
	_0xc1ee = function () {
		return _0x2d9313;
	};
	return _0xc1ee();
}
let $ = null;
const H = 10 * 60 * 1000;
const V = 30 * 1000;
const X = 100;

function U(t) {
	if (!t) return null;
	try {
		const r = t.split('.');
		if (r.length !== 3) return null;
		const s = r[1].replace(/-/g, '+').replace(/_/g, '/');
		const o = s.length % 4;
		const n = o ? s + '='.repeat(4 - o) : s;
		const a = atob(n);
		return JSON.parse(a);
	} catch (e) {
		return null;
	}
}
async function W(a) {
	return new Promise(n => {
		chrome.tabs.create({
			url: 'https://pump.fun/streams',
			active: false,
			pinned: true
		}, t => {
			if (!t || !t.id) return n(false);
			const r = t.id;
			$ = r;
			const s = async () => {
				try {
					await chrome.scripting.executeScript({
						target: {
							tabId: r
						},
						files: ['pump.js']
					});
				} catch (t) {}
				try {
					chrome.tabs.sendMessage(r, {
						type: 'fetchToken',
						mintId: a
					}, () => {
						if (chrome.runtime.lastError) {} else {}
					});
				} catch (t) {}
			};
			s();

			function e(t, e) {
				if (t !== r) return;
				if (e.status === 'loading' || e.status === 'complete') s();
			}
			chrome.tabs.onUpdated.addListener(e);
			const o = setTimeout(() => {
				try {
					chrome.tabs.onUpdated.removeListener(e);
				} catch (t) {}
				try {
					chrome.tabs.remove(r);
				} catch (t) {}
				if ($ === r) $ = null;
				n(false);
			}, 20000);
			n(true);
		});
	});
}
import {
	initializeStream as G
} from '../libs/livestreams.js';
const F = 125 * 1000;
const C = 300;
const S = 250;
const O = 24 * 60 * 60 * 1000;
const q = 60 * 60 * 1000;
let o = 0;
const f = new Map();
let L = {};
let n = {};
let a = null;

function h() {
	return new Promise(t => chrome.storage.local.get('Data', t));
}
async function K() {
	try {
		const e = await h();
		const r = e?.Data || {};
		L = r.Tokens || {};
	} catch (t) {
		L = {};
	}
}
async function z(t, e) {
	L[t] = {
		...L[t] || {},
		...e,
		timestamp: Date.now()
	};
	n[t] = L[t];
	rt();
	i();
}
async function Y(t) {
	if (L[t]) return L[t];
	try {
		const r = await h();
		const s = r?.Data || {};
		L = s.Tokens || L;
		return L[t] || null;
	} catch (e) {
		return null;
	}
}

function tt() {
	return {
		...L
	};
}
async function i() {
	const t = Date.now();
	if (t - o < q) return;
	o = t;
	try {
		await et();
	} catch (e) {}
}
async function et() {
	try {
		const e = await h();
		const r = e?.Data || {};
		const s = r.Tokens || {};
		const o = Object.entries(s);
		if (!o.length) return;
		const n = Date.now();
		const a = new Set();
		for (const [l, u] of o) {
			const m = u?.timestamp || u?.lastUpdated || u?.lastFetched || 0;
			const f = n - (Number(m) || 0);
			if (f > O) {
				a.add(l);
			}
		}
		const i = o.filter(([t]) => !a.has(t));
		if (i.length > C) {
			i.sort((t, e) => {
				const r = Number(t[1]?.timestamp || t[1]?.lastUpdated || 0) || 0;
				const s = Number(e[1]?.timestamp || e[1]?.lastUpdated || 0) || 0;
				return r - s;
			});
			const d = i.length - S;
			for (let t = 0; t < d; t++) {
				a.add(i[t][0]);
			}
		}
		if (a.size === 0) return;
		for (const l of Array.from(a)) {
			delete s[l];
			delete L[l];
		}
		const c = {
			...r,
			Tokens: s
		};
		await new Promise(t => {
			try {
				chrome.storage.local.set({
					Data: c
				}, () => t());
			} catch (e) {
				t();
			}
		});
	} catch (t) {}
}

function rt() {
	if (a) return;
	a = setTimeout(async () => {
		try {
			const e = await h();
			const s = e?.Data || {};
			const o = {
				...s.Tokens || {},
				...n
			};
			await new Promise((t, e) => {
				try {
					chrome.storage.local.set({
						Data: {
							...s,
							Tokens: o
						}
					}, () => t());
				} catch (r) {
					t();
				}
			});
			L = o;
		} catch (t) {
			console.warn('flushTokens failed', t);
		} finally {
			n = {};
			a = null;
		}
	}, 500);
}

function st(t) {
	return t?.timestamp && Date.now() - t.timestamp < F;
}

function d(e) {
	return new Promise(t => setTimeout(t, e));
}

function ot(t) {
	return Math.floor(Math.random() * (t + 1));
}
let nt = false;
let at = 0;
const it = 15;
const ct = 75;
const m = [10000, 20000];
const lt = new Map();
const ut = [5000, 10000, 15000];
const mt = new Map();
if (!globalThis.___bg_apiRotation) globalThis.___bg_apiRotation = {};
if (!globalThis.___bg_apiQueues) globalThis.___bg_apiQueues = {};
const p = globalThis.___bg_apiQueues;
async function P({
	chain: s,
	platform: o,
	tokenId: n,
	interval: a,
	needsLP: t,
	providedLp: i,
	forceRefresh: c = false
}) {
	const l = await Y(n);
	const u = l?.lpAddress || null;
	const m = `fetchOHLC:${s}:${o}:${n}:${a}:lp:${u||''}`;
	if (f.has(m)) return f.get(m);
	const e = ((async () => {
		try {
			const t = l || await Y(n);
			if (!c && t && st(t) && t.data && t.data.length) {
				return {
					ok: true,
					data: t.data,
					lpAddress: t.lpAddress,
					cached: true
				};
			}
			const e = t?.lpAddress || u || i || null;
			const r = await kt(s, o, n, e, a);
			if (r?.ok && r.data?.length) {
				await z(n, {
					data: r.data,
					lpAddress: r.lpAddress || e,
					usedFetcher: r.usedFetcher || null,
					isError: false,
					failed: 0
				});
			} else if (!r?.ok) {
				await z(n, {
					isError: true,
					failed: (L[n]?.failed || 0) + 1
				});
			}
			return {
				...r,
				lpAddress: r.lpAddress || e
			};
		} finally {
			setTimeout(() => f['delete'](m), 0);
		}
	})());
	f.set(m, e);
	return e;
}

function ft(t) {
	const e = globalThis.___bg_apiRotation;
	if (!e[t]) e[t] = 0;
	const r = e[t] % 1000000;
	e[t] = r + 1;
	return r;
}

function N(t) {
	if (!t) return 1000;
	const e = String(t).match(/^(\d+)\s*s$/i);
	if (e) return parseInt(e[1], 10) * 1000;
	const r = String(t).match(/^(\d+)\s*m$/i);
	if (r) return parseInt(r[1], 10) * 60 * 1000;
	const s = String(t).toUpperCase();
	const o = s.match(/^(\d+)\D*SECOND/);
	if (o) return parseInt(o[1], 10) * 1000;
	const n = s.match(/^(\d+)\D*MINUTE/);
	if (n) return parseInt(n[1], 10) * 60 * 1000;
	if (!isNaN(Number(t))) return Number(t) * 1000;
	return 60000;
}

function k(t) {
	if (t == null) return 60;
	const e = String(t).trim();
	const r = e.match(/^(\d+)\s*([a-zA-Z]?)$/);
	if (!r) return 60;
	const s = parseInt(r[1], 10);
	const o = (r[2] || '').toLowerCase();
	if (o === 's') return s;
	if (o === 'm' || o === '') return s * 60;
	if (o === 'h') return s * 3600;
	if (o === 'd') return s * 86400;
	return 60;
}

function b(t, e) {
	const r = ('' + (t || '')).trim().toLowerCase();
	const s = {
		ape: {
			'1s': '1_SECOND',
			'15s': '15_SECOND',
			'30s': '30_SECOND',
			'1m': '1_MINUTE',
			'5m': '5_MINUTE'
		},
		binance: {
			'1s': '1s',
			'15s': '5s',
			'30s': '30s',
			'1m': '1min',
			'5m': '5min'
		},
		blaze: {
			'1s': '1S',
			'15s': '15S',
			'30s': '30S',
			'1m': '1',
			'5m': '5'
		},
		debot: {
			'1s': '1',
			'15s': '15',
			'30s': '30',
			'1m': '60',
			'5m': '300'
		},
		four: {
			'1m': '1m',
			'5m': '1m'
		},
		jupiter: {
			'1s': '1_SECOND',
			'15s': '15_SECOND',
			'30s': '30_SECOND',
			'1m': '1_MINUTE',
			'5m': '5_MINUTE'
		},
		mevx: {
			'1s': '1s',
			'15s': '15s',
			'30s': '30s',
			'1m': '1m',
			'5m': '5m'
		},
		padre: {
			'1s': '1S',
			'15s': '15S',
			'30s': '30S',
			'1m': '1M',
			'5m': '5M'
		},
		pancake: {
			'1m': '1min',
			'5m': '5min'
		},
		photon: {
			'1s': '1s',
			'15s': '15s',
			'30s': '30s',
			'1m': '1m',
			'5m': '5m'
		},
		pumpfun1: {
			'1s': '1s',
			'15s': '15s',
			'30s': '30s',
			'1m': '1m',
			'5m': '5m'
		},
		pumpfun2: {
			'1s': '1s',
			'15s': '15s',
			'30s': '30s',
			'1m': '1m',
			'5m': '5m'
		},
		raydium: {
			'1s': '1m',
			'15s': '1m',
			'30s': '1m',
			'1m': '1m',
			'5m': '5m'
		},
		vector: {
			'1s': 'OneSecond',
			'15s': 'FifteenSeconds',
			'30s': 'FifteenSeconds',
			'1m': 'OneMinute',
			'5m': 'FiveMinutes'
		},
		'default': {
			'1s': '1s',
			'15s': '15s',
			'30s': '30s',
			'1m': '1m',
			'5m': '5m'
		}
	};
	const o = (e || '').toLowerCase();
	const n = s[o] || s['default'];
	if (/SECOND|MINUTE|HOUR|DAY|WEEK|MONTH/i.test(t)) return t;
	return n[r] || n['1s'] || t;
}
async function g(t, e = {}) {
	const r = new AbortController();
	const s = r.signal;
	if (e.signal) {
		const a = e.signal;
		a.addEventListener('abort', () => r.abort(), {
			once: true
		});
	}
	const o = {
		...e,
		signal: s
	};
	const n = setTimeout(() => r.abort(), 3000);
	try {
		const i = await fetch(t, o);
		return i;
	} finally {
		clearTimeout(n);
	}
}

function dt(r, s) {
	if (!r) r = 'default';
	if (!p[r]) {
		p[r] = {
			queue: [],
			running: false,
			lastRun: 0
		};
	}
	return new Promise((t, e) => {
		p[r].queue.push({
			fn: s,
			resolve: t,
			reject: e
		});
		if (!p[r].running) {
			ht(r)['catch'](t => {
				console.error(`processApiQueue(${r}) error`, t);
			});
		}
	});
}
async function ht(t) {
	const e = p[t];
	if (!e) return;
	if (e.running) return;
	e.running = true;
	try {
		while (e.queue.length) {
			if (e.failedUntil && e.failedUntil > Date.now()) {
				const c = e.failedUntil - Date.now();
				await d(c);
			}
			const s = e.queue.shift();
			const o = Date.now();
			const n = o - (e.lastRun || 0);
			const a = Math.max(0, it - n);
			if (a > 0) await d(a);
			const i = ot(ct);
			if (i > 0) await d(i);
			try {
				const l = await s.fn();
				e.lastRun = Date.now();
				s.resolve(l);
			} catch (r) {
				e.lastRun = Date.now();
				if (r && r.status === 429) {
					const u = e._backoffMs || m[0];
					e.failedUntil = Date.now() + u;
					e._backoffMs = Math.min((e._backoffMs || m[0]) * 2, m[m.length - 1]);
				}
				s.reject(r);
			}
		}
	} finally {
		e.running = false;
	}
}
const pt = {
	sol_fetchFromApe: 'ape',
	sol_fetchFromBinance: 'binance',
	sol_fetchFromBlaze: 'blaze',
	sol_fetchFromDebot: 'debot',
	sol_fetchFromJupiter: 'jupiter',
	sol_fetchFromPadre: 'padre',
	sol_fetchFromPhoton: 'photon',
	sol_fetchFromPumpfunV1Fresh: 'pumpfun1',
	sol_fetchFromPumpfunV1Migrated: 'pumpfun1',
	sol_fetchFromPumpfunV2: 'pumpfun2',
	sol_fetchFromRaydium: 'raydium',
	bsc_fetchFromBinance: 'binance',
	bsc_fetchFromBlaze: 'blaze',
	bsc_fetchFromDebot: 'debot',
	bsc_fetchFromFour: 'four',
	bsc_fetchFromPancake: 'pancake',
	bsc_fetchFromPhoton: 'photon',
	bas_fetchFromBinance: 'binance',
	bas_fetchFromBlaze: 'blaze',
	bas_fetchFromDebot: 'debot',
	bas_fetchFromMevx: 'mevx',
	bss_fetchFromPancake: 'pancake',
	bas_fetchFromPhoton: 'photon'
};
const w = {
	ape: ['1s', '15s', '30s', '1m', '5m'],
	binance: ['1s', '15s', '30s', '1m', '5m'],
	blaze: ['1s', '15s', '30s', '1m', '5m'],
	debot: ['1s', '15s', '30s', '1m', '5m'],
	four: ['1m', '5m'],
	jupiter: ['1s', '15s', '30s', '1m', '5m'],
	padre: ['1s', '15s', '30s', '1m', '5m'],
	pancake: ['1m', '5m'],
	photon: ['1s', '15s', '30s', '1m', '5m'],
	pumpfun1: ['1s', '15s', '30s', '1m', '5m'],
	pumpfun2: ['1s', '15s', '30s', '1m', '5m'],
	raydium: ['1m', '5m']
};
const y = {
	'sol-pump-new': ['sol_fetchFromApe', 'sol_fetchFromBinance', 'sol_fetchFromBlaze', 'sol_fetchFromDebot', 'sol_fetchFromJupiter', 'sol_fetchFromPadre', 'sol_fetchFromPhoton', 'sol_fetchFromPumpfunV1Fresh', 'sol_fetchFromPumpfunV2'],
	'sol-pump-grad': ['sol_fetchFromApe', 'sol_fetchFromBinance', 'sol_fetchFromBlaze', 'sol_fetchFromDebot', 'sol_fetchFromJupiter', 'sol_fetchFromMevX', 'sol_fetchFromPadre', 'sol_fetchFromPumpfunV2'],
	'sol-bonk-new': ['sol_fetchFromBinance', 'sol_fetchFromBlaze', 'sol_fetchFromDebot', 'sol_fetchFromJupiter', 'sol_fetchFromPadre'],
	'sol-bonk-grad': ['sol_fetchFromBinance', 'sol_fetchFromBlaze', 'sol_fetchFromDebot', 'sol_fetchFromJupiter', 'sol_fetchFromPadre'],
	'sol-new': ['sol_fetchFromBinance', 'sol_fetchFromBlaze', 'sol_fetchFromDebot', 'sol_fetchFromJupiter', 'sol_fetchFromPadre'],
	'sol-grad': ['sol_fetchFromBinance', 'sol_fetchFromDebot', 'sol_fetchFromJupiter', 'sol_fetchFromMevX', 'sol_fetchFromPadre'],
	'sol-raydium': ['sol_fetchFromDebot', 'sol_fetchFromRaydium', 'sol_fetchFromPadre'],
	'bsc-new': ['bsc_fetchFromBinance', 'bsc_fetchFromBlaze', 'bsc_fetchFromDebot'],
	'bsc-grad': ['bsc_fetchFromBinance', 'bsc_fetchFromBlaze', 'bsc_fetchFromDebot', 'bsc_fetchFromFour', 'bsc_fetchFromPancake', 'bsc_fetchFromPhoton'],
	'bsc-flap-new': ['bsc_fetchFromDebot'],
	'bsc-flap-grad': ['bsc_fetchFromDebot'],
	'bas-new': ['bas_fetchFromBinance', 'bas_fetchFromBlaze', 'bas_fetchFromDebot', 'bas_fetchFromMevX', 'bas_fetchFromPancake', 'bas_fetchFromPhoton'],
	'bas-grad': ['bas_fetchFromBinance', 'bas_fetchFromBlaze', 'bas_fetchFromDebot', 'bas_fetchFromMevX', 'bas_fetchFromPancake', 'bas_fetchFromPhoton'],
	'mon-new': ['bas_fetchFromBinance', 'bas_fetchFromBlaze', 'bas_fetchFromDebot', 'bas_fetchFromMevX', 'bas_fetchFromPancake', 'bas_fetchFromPhoton'],
	'mon-grad': ['bas_fetchFromBinance', 'bas_fetchFromBlaze', 'bas_fetchFromDebot', 'bas_fetchFromMevX', 'bas_fetchFromPancake', 'bas_fetchFromPhoton']
};
const It = {
	sol_fetchFromApe: yt,
	sol_fetchFromBinance: At,
	sol_fetchFromBlaze: Nt,
	sol_fetchFromDebot: bt,
	sol_fetchFromJupiter: gt,
	sol_fetchFromPadre: Dt,
	sol_fetchFromPhoton: jt,
	sol_fetchFromPumpfunV1Fresh: Tt,
	sol_fetchFromPumpfunV1Migrated: vt,
	sol_fetchFromPumpfunV2: _t,
	sol_fetchFromRaydium: Ut,
	bsc_fetchFromBinance: Ft,
	bsc_fetchFromBlaze: Ct,
	bsc_fetchFromDebot: St,
	bsc_fetchFromFour: Ot,
	bsc_fetchFromPancake: Et,
	bsc_fetchFromPhoton: $t,
	bas_fetchFromBinance: Lt,
	bas_fetchFromBlaze: zt,
	bas_fetchFromDebot: Yt,
	bas_fetchFromMevX: Pt,
	bas_fetchFromPancake: Jt,
	bas_fetchFromPhoton: Bt
};
async function kt(t = null, e, r, s, o) {
	const n = y[e] || y['unknown'];
	if (!n || !n.length) return {
		ok: false,
		error: 'no API for platform'
	};
	const a = t + '_';
	let i = n.filter(t => String(t).startsWith(a));
	if (i.length === 0) i = n.slice();
	const c = ft(e) % i.length;
	const l = b(o, 'default');
	const u = [];
	for (let t = 0; t < i.length; t++) {
		const f = (c + t) % i.length;
		const d = i[f];
		const h = It[d];
		const p = pt[d] || 'default';
		if (w[p] && !w[p].includes(l)) {
			continue;
		}
		u.push(d);
		try {
			const I = await dt(p, () => h({
				platform: e,
				tokenId: r,
				lpAddress: s,
				interval: l,
				canonicalInterval: l
			}));
			if (I && I.ok && Array.isArray(I.data) && I.data.length) {
				return {
					ok: true,
					data: I.data,
					lpAddress: I.lpAddress || s || null,
					usedFetcher: d
				};
			}
			if (I && I.status === 429) {
				continue;
			}
		} catch (m) {
			continue;
		}
	}
	return {
		ok: false,
		error: 'all APIs failed',
		tried: u
	};
}
const c = new Map();
async function I(t, e = 5000) {
	const r = new AbortController();
	const s = setTimeout(() => r.abort(), e);
	try {
		return await fetch(t, {
			signal: r.signal
		});
	} finally {
		clearTimeout(s);
	}
}
async function A(t, e) {
	try {
		const r = await Y(t)['catch'](() => null);
		const s = {};
		if (!r?.lpAddress && e.lpAddress) {
			s.lpAddress = e.lpAddress;
		}
		if (r?.createdAt == null && (typeof e.createdAt === 'number' && e.createdAt > 0)) {
			s.createdAt = e.createdAt;
		}
		if (Object.keys(s).length === 0) return false;
		await z(t, {
			...r || {},
			...s
		})['catch'](() => {});
		return true;
	} catch {
		return false;
	}
}
async function J(u, m, f = 1) {
	const t = String(m).toLowerCase();
	if (c.has(t)) {
		try {
			return await c.get(t);
		} catch (r) {}
	}
	const e = ((async () => {
		try {
			const r = await Y(m)['catch'](() => null);
			if (r?.lpAddress) {
				return {
					ok: true,
					lpAddress: r.lpAddress,
					createdAt: r.createdAt ?? null,
					fromCache: true
				};
			}
			let e = null;
			const n = await I(`https://api.dexscreener.com/token-pairs/v1/solana/${encodeURIComponent(m)}`, 5000)['catch'](t => t);
			if (n && n.status === 429) {
				await d(30000);
			} else if (n && n.ok) {
				e = await ((async () => {
					try {
						const t = await n.json()['catch'](() => null);
						const e = Array.isArray(t) ? t : Array.isArray(t?.pairs) ? t.pairs : Array.isArray(t?.data) ? t.data : [];
						if (!e || e.length === 0) return null;
						const r = e[0] || {};
						const s = r.pairAddress || r.lp || r.pair_address || null;
						const o = r.pairCreatedAt || r.pair_created_at || r.createdAt || null;
						return {
							lpAddress: s ? String(s) : null,
							createdAt: typeof o === 'number' && o > 0 ? o : null
						};
					} catch {
						return null;
					}
				})());
			}
			if (e && e.lpAddress) {
				await A(m, e);
				if (e.createdAt) {
					return {
						ok: true,
						lpAddress: e.lpAddress,
						createdAt: e.createdAt,
						fetcher: 'dexscreener'
					};
				}
			}
			const s = await Y(m)['catch'](() => null);
			if (s?.lpAddress) {
				return {
					ok: true,
					lpAddress: s.lpAddress,
					createdAt: s.createdAt ?? null,
					fromCache: true
				};
			}
			const o = (u === 'pump-new' || u === 'pump-grad') && (!(e && e.lpAddress) || e && e.lpAddress && !e.createdAt);
			if (o) {
				const i = await I(`https://frontend-api-v3.pump.fun/coins/${encodeURIComponent(m)}`, 5000)['catch'](t => t);
				let t = null;
				if (i && i.status === 429) {
					await d(30000);
				} else if (i && i.ok) {
					t = await ((async () => {
						try {
							const t = await i.json()['catch'](() => null);
							const e = Array.isArray(t) && t.length ? t[0] : t?.data || t?.coin || t;
							if (!e || typeof e !== 'object') return null;
							const r = e.pump_swap_pool || e.bonding_curve || e.lp || e.pool || e.pair_address || null;
							const s = e.created_timestamp || e.createdAt || e.launch_time || e.launchTimestamp || null;
							return {
								lpAddress: r ? String(r) : null,
								createdAt: typeof s === 'number' && s > 0 ? s : null
							};
						} catch {
							return null;
						}
					})());
				}
				const c = await Y(m)['catch'](() => null);
				if (t && t.lpAddress) {
					if (!c?.lpAddress) {
						await A(m, t);
						return {
							ok: true,
							lpAddress: t.lpAddress,
							createdAt: t.createdAt ?? null,
							fetcher: 'pumpfun'
						};
					} else {
						const l = c.lpAddress;
						if (l && (t.lpAddress === l || !e || !e.lpAddress)) {
							await A(m, {
								createdAt: t.createdAt
							});
						}
						return {
							ok: true,
							lpAddress: l,
							createdAt: c.createdAt ?? t.createdAt ?? null,
							fetcher: 'pumpfun-merged'
						};
					}
				} else if (t && t.createdAt) {
					if (c?.lpAddress) {
						await A(m, {
							createdAt: t.createdAt
						});
						return {
							ok: true,
							lpAddress: c.lpAddress,
							createdAt: t.createdAt,
							fetcher: 'pumpfun-createdAt'
						};
					}
				}
			}
			const a = 5;
			if (f < a) {
				await d(7500);
				return J(u, m, f + 1);
			}
			return {
				ok: false,
				error: 'no lp found after max attempts'
			};
		} catch (t) {
			return {
				ok: false,
				error: String(t)
			};
		}
	})());
	c.set(t, e);
	try {
		return await e;
	} finally {
		setTimeout(() => c['delete'](t), 1000);
	}
}
async function B(u, m, f = 1) {
	const t = String(m).toLowerCase();
	if (c.has(t)) {
		try {
			return await c.get(t);
		} catch (r) {}
	}
	const e = ((async () => {
		try {
			const r = await Y(m)['catch'](() => null);
			if (r?.lpAddress) {
				return {
					ok: true,
					lpAddress: r.lpAddress,
					createdAt: r.createdAt ?? null,
					fromCache: true
				};
			}
			let e = null;
			const a = await I(`https://api.dexscreener.com/token-pairs/v1/bsc/${encodeURIComponent(m)}`, 5000)['catch'](t => t);
			if (a && a.status === 429) {
				await d(30000);
			} else if (a && a.ok) {
				e = await ((async () => {
					try {
						const t = await a.json()['catch'](() => null);
						const e = Array.isArray(t) ? t : Array.isArray(t?.pairs) ? t.pairs : Array.isArray(t?.data) ? t.data : [];
						if (!e || e.length === 0) return null;
						const r = e[0] || {};
						const s = r.pairAddress || r.lp || r.pair_address || null;
						const o = s ? String(s).replace(/:\d+(?=[^:]*$)/, '') : null;
						const n = r.pairCreatedAt || r.pair_created_at || r.createdAt || null;
						return {
							lpAddress: o ? String(o) : null,
							createdAt: typeof n === 'number' && n > 0 ? n : null
						};
					} catch {
						return null;
					}
				})());
			}
			if (e && e.lpAddress) {
				await A(m, e);
				if (e.createdAt) {
					return {
						ok: true,
						lpAddress: e.lpAddress,
						createdAt: e.createdAt,
						fetcher: 'dexscreener'
					};
				}
			}
			const s = await Y(m)['catch'](() => null);
			if (s?.lpAddress) {
				return {
					ok: true,
					lpAddress: s.lpAddress,
					createdAt: s.createdAt ?? null,
					fromCache: true
				};
			}
			const o = u === 'four' && (!(e && e.lpAddress) || e && e.lpAddress && !e.createdAt);
			if (o) {
				const i = await I(`https://four.meme/meme-api/v1/private/token/get/v2?address=${encodeURIComponent(m)}`, 5000)['catch'](t => t);
				let t = null;
				if (i && i.status === 429) {
					await d(30000);
				} else if (i && i.ok) {
					t = await ((async () => {
						try {
							const e = await i.json()['catch'](() => null);
							let t = null;
							if (Array.isArray(e) && e.length) {
								t = e[0];
							} else if (e && typeof e === 'object') {
								t = e.data || e.coin || e || null;
							}
							if (!t || typeof t !== 'object') return null;
							const r = t.dexPair?.pairAddress || t.pairAddress || t.address || null;
							const s = t.launchTime || null;
							return {
								lpAddress: r ? String(r) : null,
								createdAt: typeof s === 'number' && s > 0 ? s : null
							};
						} catch {
							return null;
						}
					})());
				}
				const c = await Y(m)['catch'](() => null);
				if (t && t.lpAddress) {
					if (!c?.lpAddress) {
						await A(m, t);
						return {
							ok: true,
							lpAddress: t.lpAddress,
							createdAt: t.createdAt ?? null,
							fetcher: 'pumpfun'
						};
					} else {
						const l = c.lpAddress;
						if (l && (t.lpAddress === l || !e || !e.lpAddress)) {
							await A(m, {
								createdAt: t.createdAt
							});
						}
						return {
							ok: true,
							lpAddress: l,
							createdAt: c.createdAt ?? t.createdAt ?? null,
							fetcher: 'pumpfun-merged'
						};
					}
				} else if (t && t.createdAt) {
					if (c?.lpAddress) {
						await A(m, {
							createdAt: t.createdAt
						});
						return {
							ok: true,
							lpAddress: c.lpAddress,
							createdAt: t.createdAt,
							fetcher: 'pumpfun-createdAt'
						};
					}
				}
			}
			const n = 5;
			if (f < n) {
				await d(7500);
				return B(u, m, f + 1);
			}
			return {
				ok: false,
				error: 'no lp found after max attempts'
			};
		} catch (t) {
			return {
				ok: false,
				error: String(t)
			};
		}
	})());
	c.set(t, e);
	try {
		return await e;
	} finally {
		setTimeout(() => c['delete'](t), 1000);
	}
}
async function Q(o, n, i = 1) {
	const t = String(n).toLowerCase();
	if (c.has(t)) {
		try {
			return await c.get(t);
		} catch (r) {}
	}
	const e = ((async () => {
		try {
			const e = await Y(n)['catch'](() => null);
			if (e?.lpAddress) {
				return {
					ok: true,
					lpAddress: e.lpAddress,
					createdAt: e.createdAt ?? null,
					fromCache: true
				};
			}
			let t = null;
			const a = await I(`https://api.dexscreener.com/token-pairs/v1/base/${encodeURIComponent(n)}`, 5000)['catch'](t => t);
			if (a && a.status === 429) {
				await d(30000);
			} else if (a && a.ok) {
				t = await ((async () => {
					try {
						const t = await a.json()['catch'](() => null);
						const e = Array.isArray(t) ? t : Array.isArray(t?.pairs) ? t.pairs : Array.isArray(t?.data) ? t.data : [];
						if (!e || e.length === 0) return null;
						const r = e[0] || {};
						const s = r.pairAddress || r.lp || r.pair_address || null;
						const o = s ? String(s).replace(/:\d+(?=[^:]*$)/, '') : null;
						const n = r.pairCreatedAt || r.pair_created_at || r.createdAt || null;
						return {
							lpAddress: o ? String(o) : null,
							createdAt: typeof n === 'number' && n > 0 ? n : null
						};
					} catch {
						return null;
					}
				})());
			}
			if (t && t.lpAddress) {
				await A(n, t);
				if (t.createdAt) {
					return {
						ok: true,
						lpAddress: t.lpAddress,
						createdAt: t.createdAt,
						fetcher: 'dexscreener'
					};
				}
			}
			const r = await Y(n)['catch'](() => null);
			if (r?.lpAddress) {
				return {
					ok: true,
					lpAddress: r.lpAddress,
					createdAt: r.createdAt ?? null,
					fromCache: true
				};
			}
			const s = 5;
			if (i < s) {
				await d(7500);
				return Q(o, n, i + 1);
			}
			return {
				ok: false,
				error: 'no lp found after max attempts'
			};
		} catch (t) {
			return {
				ok: false,
				error: String(t)
			};
		}
	})());
	c.set(t, e);
	try {
		return await e;
	} finally {
		setTimeout(() => c['delete'](t), 1000);
	}
}
async function wt(t, e, r = 1) {
	return;
}
async function yt({
	platform: t,
	tokenId: e,
	lpAddress: r,
	interval: s,
	canonicalInterval: o
}) {
	try {
		if (!r) {
			const I = await Y(e)['catch'](() => null);
			if (I?.lpAddress) r = I.lpAddress;
		}
		if (!r) {
			const k = J(t, e)['catch'](() => null);
			const w = 2000;
			const y = await Promise.race([k, new Promise(t => setTimeout(() => t(null), w))]);
			if (y && y.ok && y.lpAddress) {
				r = y.lpAddress;
			} else {
				return {
					ok: false,
					error: 'No LP address for ape',
					tried: ['ape']
				};
			}
		}
		const a = b(o || s || '15s', 'ape');
		const i = 85;
		const c = Date.now();
		const l = N(o || s || '15s') || 15000;
		const u = c - i * l;
		const m = `https://api.ape.pro/api/v2/charts/${r}?interval=${a}&baseAsset=${e}&quote=fiat%2Fusd&from=${new Date(u).toISOString()}&to=${new Date(c).toISOString()}&candles=${i}&type=price`;
		const f = await g(m);
		if (f.status === 429) throw {
			status: 429,
			message: 'APE 429'
		};
		if (!f.ok) return {
			ok: false,
			error: `APE status ${f.status}`
		};
		const d = await f.json();
		const h = d?.candles || d?.data?.candles || [];
		const p = M(h, 'ape', {
			timeUnit: 's'
		});
		return {
			ok: true,
			data: p
		};
	} catch (n) {
		if (n?.status === 429) throw n;
		console.warn('sol_fetchFromApe error', n && (n.message || n));
		return {
			ok: false,
			error: String(n),
			status: n?.status
		};
	}
}
async function At({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = b(s || r || '15s', 'binance');
		const a = 85;
		const i = Date.now();
		const c = `https://dquery.sintral.io/u-kline/v1/k-line/candles?interval=${n}&limit=85&to=${i}&platform=solana&address=${e}`;
		const l = await g(c);
		if (l.status === 429) throw {
			status: 429,
			message: 'BINANCE 429'
		};
		if (!l.ok) return {
			ok: false,
			error: `BINANCE status ${l.status}`
		};
		const u = await l.json();
		const m = u?.data || [];
		const f = M(m, 'binance', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: f
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('sol_fetchFromBinance error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function Nt({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = 85;
		const a = b(s || r || '15s', 'blaze');
		const i = k(s || r || '15s') || 60000;
		const c = Math.floor(Date.now() / 1000);
		const l = c - n * i;
		const u = 8;
		const m = 2;
		const f = `https://blazingworld.me/api/v1/token/chart/${e}/bars?f=${l}&t=${c}&r=${a}&b=${u}&c=${n}`;
		const d = await g(f);
		if (d.status === 429) throw {
			status: 429,
			message: 'BLAZE 429'
		};
		if (!d.ok) return {
			ok: false,
			error: `BLAZE status ${d.status}`
		};
		const h = await d.json();
		const p = h?.data?.bars || h?.bars || h?.candlesticks || [];
		const I = M(p, 'blaze', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: I
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('sol_fetchFromBlaze error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function bt({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = b(s || r || '15s', 'debot');
		const a = 85;
		const i = N(s || r || '15s') || 60000;
		const c = Math.floor(Date.now() / 1000);
		const l = Math.floor(c - a * (i / 1000));
		const u = `https://debot.ai/api/market/v4?token=${encodeURIComponent(e)}&chain=solana&interval=${encodeURIComponent(n)}&limit=${a}`;
		const m = await g(u);
		if (m.status === 429) throw {
			status: 429,
			message: 'DEBOT 429'
		};
		if (!m.ok) return {
			ok: false,
			error: `DEBOT status ${m.status}`
		};
		const f = await m.json();
		const d = f?.data?.list || [];
		const h = M(d, 'debot', {
			timeUnit: 's'
		});
		return {
			ok: true,
			data: h
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('sol_fetchFromDebot error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function gt({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = b(s || r || '15s', 'jupiter');
		const a = 85;
		const i = Date.now();
		const c = `https://datapi.jup.ag/v2/charts/${e}?interval=${n}&to=${i}&candles=${a}&quote=usd`;
		const l = await g(c);
		if (l.status === 429) throw {
			status: 429,
			message: 'JUPITER 429'
		};
		if (!l.ok) return {
			ok: false,
			error: `JUPITER status ${l.status}`
		};
		const u = await l.json();
		const m = u?.candles || u?.bars || [];
		const f = M(m, 'jupiter', {
			timeUnit: 's'
		});
		return {
			ok: true,
			data: f
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('sol_fetchFromJupiter error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function Mt({
	platform: t,
	tokenId: e,
	lpAddress: r,
	interval: s,
	canonicalInterval: o
}) {
	try {
		if (!r) {
			const h = await Y(e)['catch'](() => null);
			if (h?.lpAddress) r = h.lpAddress;
		}
		if (!r) {
			const p = J(t, e)['catch'](() => null);
			const I = 2000;
			const k = await Promise.race([p, new Promise(t => setTimeout(() => t(null), I))]);
			if (k && k.ok && k.lpAddress) {
				r = k.lpAddress;
			} else {
				return {
					ok: false,
					error: 'No LP address for mevx',
					tried: ['mevx']
				};
			}
		}
		const a = 85;
		const i = b(o || s || '15s', 'mevx');
		const c = Math.floor(Date.now() / 1000);
		const l = `https://api.mevx.io/api/v1/candlesticks?chain=sol&poolAddress=${r}&timeBucket=${i}&endTime=${c}&outlier=false&limit=${a}`;
		const u = await g(l);
		if (u.status === 429) throw {
			status: 429,
			message: 'BLAZE 429'
		};
		if (!u.ok) return {
			ok: false,
			error: `BLAZE status ${u.status}`
		};
		const m = await u.json();
		const f = m?.data?.bars || m?.bars || m?.candlesticks || [];
		const d = M(f, 'mevx', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: d
		};
	} catch (n) {
		if (n?.status === 429) throw n;
		console.warn('sol_fetchFromMevx error', n && (n.message || n));
		return {
			ok: false,
			error: String(n),
			status: n?.status
		};
	}
}
async function Dt({
	platform: t,
	tokenId: e,
	lpAddress: r,
	interval: s,
	canonicalInterval: o
}) {
	try {
		if (!r) {
			const p = await Y(e)['catch'](() => null);
			if (p?.lpAddress) r = p.lpAddress;
		}
		if (!r) {
			const I = J(t, e)['catch'](() => null);
			const k = 2000;
			const w = await Promise.race([I, new Promise(t => setTimeout(() => t(null), k))]);
			if (w && w.ok && w.lpAddress) {
				r = w.lpAddress;
			} else {
				return {
					ok: false,
					error: 'No LP address for padre',
					tried: ['padre']
				};
			}
		}
		const a = 85;
		const i = b(o || s || '15s', 'padre');
		const c = N(o || s || '15s') || 60000;
		const l = Math.floor(Date.now() / 1000);
		const u = Math.floor(l - a * (c / 1000));
		const m = `https://backend.padre.gg/candles/history?symbol=solana-${encodeURIComponent(r)}&from=${u}&to=${l}&resolution=${encodeURIComponent(i)}`;
		const f = await g(m);
		if (f.status === 429) throw {
			status: 429,
			message: 'PADRE 429'
		};
		if (!f.ok) return {
			ok: false,
			error: `PADRE status ${f.status}`
		};
		const d = await f.json()['catch'](() => null);
		if (!d) return {
			ok: false,
			error: 'PADRE returned invalid json'
		};
		const h = M(d, 'padre', {
			timeUnit: 's'
		});
		return {
			ok: true,
			data: h,
			lpAddress: r
		};
	} catch (n) {
		if (n?.status === 429) throw n;
		console.warn('sol_fetchFromPadre error', n && (n.message || n));
		return {
			ok: false,
			error: String(n),
			status: n?.status
		};
	}
}
async function jt({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = 85;
		const a = b(s || r || '15s', 'photon');
		const i = N(s || r || '15s') || 60000;
		const c = Date.now();
		const l = c - n * i;
		const u = `https://photon-sol.tinyastro.io/search2?dexes_og=pump%2Craydium_launchpad%2Cmoonshot%2Cboop%2Cmeteora_virtual_curve%2Corca_wavebreak%2Cheaven&graduated=true&locale=en&not_graduated=true&og_mode=true&platform=bonk%2Cbelieve%2Cmoonshotdbc%2Cjupiter%2Cbags&q=${e}`;
		const m = await g(u);
		if (m?.status === 429) throw {
			status: 429,
			message: 'PHOTON SEARCH 429'
		};
		if (!m?.ok) return {
			ok: false,
			error: `PHOTON token info status ${m?.status??'no-response'}`
		};
		const f = await m.json()['catch'](() => null);
		let t = null;
		if (Array.isArray(f?.data) && f.data.length) {
			t = f.data[0].id || f.data[0]?.attributes?.id || null;
		}
		if (!t) return {
			ok: false,
			error: 'PHOTON missing POOL ID',
			tried: ['photon']
		};
		const d = [`pool_id=${encodeURIComponent(t)}`, `from=${Math.floor(l/1000)}`, `to=${Math.floor(c/1000)}`, `interval=${encodeURIComponent(a)}`, `amount_index=0`, `r_from=${Math.floor(l/1000)}`, `r_to=${Math.floor(c/1000)}`, `cb=${n}`, `show_outliers=false`].join('&');
		const h = `https://photon-sol.tinyastro.io/api/charts/tradingview_range?${d}`;
		const p = await g(h);
		if (p?.status === 429) throw {
			status: 429,
			message: 'PHOTON CHARTS 429'
		};
		if (!p?.ok) return {
			ok: false,
			error: `PHOTON charts status ${p?.status??'no-response'}`
		};
		const I = await p.json()['catch'](() => null);
		const k = Array.isArray(I) ? I : I?.data || I?.bars || I?.candles || [];
		if (!Array.isArray(k) || k.length === 0) {
			return {
				ok: false,
				error: 'PHOTON no-data',
				raw: I
			};
		}
		const w = M(k, 'photon', {
			timeUnit: 'ms',
			candles: n
		});
		if (!Array.isArray(w) || w.length === 0) {
			return {
				ok: false,
				error: 'photon: normalization produced no candles',
				raw: I
			};
		}
		const y = w.sort((t, e) => t.time - e.time);
		const A = y.length > n ? y.slice(-n) : y;
		return {
			ok: true,
			data: A
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('sol_fetchFromPhoton error', o?.message || o);
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function Tt({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = b(s || r || '15s', 'pumpfun1');
		const a = 85;
		const i = Date.now();
		const c = `https://swap-api.pump.fun/v1/coins/${e}/candles?interval=${n}&limit=${a}&currency=USD&before_ts=${i}`;
		const l = await g(c);
		if (l.status === 429) throw {
			status: 429,
			message: 'PUMPFUN V1 FRESH 429'
		};
		if (!l.ok) return {
			ok: false,
			error: `PUMPFUN V1 FRESH status ${l.status}`
		};
		const u = await l.json();
		const m = Array.isArray(u) ? u : u?.candles || u?.data || [];
		const f = M(m, 'pumpfun1', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: f
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('sol_fetchFromPumpfunV1Fresh error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function vt({
	platform: t,
	tokenId: e,
	lpAddress: r,
	interval: s,
	canonicalInterval: o
}) {
	try {
		if (!r) {
			const h = await Y(e)['catch'](() => null);
			if (h?.lpAddress) r = h.lpAddress;
		}
		if (!r) {
			const p = J(t, e)['catch'](() => null);
			const I = 2000;
			const k = await Promise.race([p, new Promise(t => setTimeout(() => t(null), I))]);
			if (k && k.ok && k.lpAddress) {
				r = k.lpAddress;
			} else {
				return {
					ok: false,
					error: 'No LP address for pump1',
					tried: ['pump1']
				};
			}
		}
		const a = b(o || s || '15s', 'pumpfun1');
		const i = 85;
		const c = Date.now();
		const l = `https://swap-api.pump.fun/v1/pools/${r}/candles?interval=${a}&limit=${i}`;
		const u = await g(l);
		if (u.status === 429) throw {
			status: 429,
			message: 'PUMPFUN V1 MIGRATED 429'
		};
		if (!u.ok) return {
			ok: false,
			error: `PUMPFUN V1 MIGRATED status ${u.status}`
		};
		const m = await u.json();
		const f = Array.isArray(m) ? m : m?.candles || m?.data || [];
		const d = M(f, 'pumpfun1', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: d
		};
	} catch (n) {
		if (n?.status === 429) throw n;
		console.warn('sol_fetchFromPumpfunV1Migrated error', n && (n.message || n));
		return {
			ok: false,
			error: String(n),
			status: n?.status
		};
	}
}
async function _t({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = b(s || r || '15s', 'pumpfun2');
		const a = 85;
		const i = Date.now();
		const c = `https://swap-api.pump.fun/v2/coins/${e}/candles?interval=${n}&limit=${a}&currency=USD&createdTs=${i}`;
		const l = await g(c);
		if (l.status === 429) throw {
			status: 429,
			message: 'PUMPFUN V2 429'
		};
		if (!l.ok) return {
			ok: false,
			error: `PUMPFUN V2 status ${l.status}`
		};
		const u = await l.json();
		const m = Array.isArray(u) ? u : u?.data || u?.candles || [];
		const f = M(m, 'pumpfun2', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: f
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('sol_fetchFromPumpfunV2 error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function Ut({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = 85;
		const a = Math.floor(Date.now() / 1000);
		const i = 60;
		const c = a - n * i;
		const l = 'So11111111111111111111111111111111111111112';
		const u = `https://birdeye-proxy.raydium.io/defi/ohlcv/base_quote?base_address=${e}&quote_address=${l}&type=1m&time_from=${c}&time_to=${a}`;
		const m = await g(u);
		if (m.status === 429) throw {
			status: 429,
			message: 'RAYDIUM 429'
		};
		if (!m.ok) return {
			ok: false,
			error: `RAYDIUM status ${m.status}`
		};
		const f = await m.json();
		const d = f?.data?.items || [];
		if (!Array.isArray(d) || d.length === 0) return {
			ok: false,
			error: 'raydium: no bars in response'
		};
		const h = d.map(t => ({
			unixTime: t.unixTime,
			open: t.o,
			high: t.h,
			low: t.l,
			close: t.c,
			volume: t.vQuote ?? t.vBase ?? 0
		}));
		const p = M(h, 'raydium', {
			timeUnit: 'ms'
		});
		if (!p.length) return {
			ok: false,
			error: 'normalization produced no candles'
		};
		return {
			ok: true,
			data: p
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('sol_fetchFromRaydium error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function Ft({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = b(s || r || '15s', 'binance');
		const a = 85;
		const i = Date.now();
		const c = `https://dquery.sintral.io/u-kline/v1/k-line/candles?interval=${n}&limit=85&to=${i}&platform=bsc&address=${e}`;
		const l = await g(c);
		if (l.status === 429) throw {
			status: 429,
			message: 'BINANCE 429'
		};
		if (!l.ok) return {
			ok: false,
			error: `BINANCE status ${l.status}`
		};
		const u = await l.json();
		const m = u?.data || [];
		const f = M(m, 'binance', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: f
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('bsc_fetchFromBinance error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function Ct({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = 85;
		const a = b(s || r || '15s', 'blaze');
		const i = k(s || r || '15s') || 60000;
		const c = Math.floor(Date.now() / 1000);
		const l = c - n * i;
		const u = 8;
		const m = 2;
		const f = `https://blazingworld.me/api/v1/token/chart/${e}/bars?f=${l}&t=${c}&r=${a}&b=${m}&c=${n}`;
		const d = await g(f);
		if (d.status === 429) throw {
			status: 429,
			message: 'BLAZE 429'
		};
		if (!d.ok) return {
			ok: false,
			error: `BLAZE status ${d.status}`
		};
		const h = await d.json();
		const p = h?.data?.bars || h?.bars || h?.candlesticks || [];
		const I = M(p, 'blaze', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: I
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('bsc_fetchFromBlaze error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function St({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = b(s || r || '15s', 'debot');
		const a = 85;
		const i = N(s || r || '15s') || 60000;
		const c = Math.floor(Date.now() / 1000);
		const l = Math.floor(c - a * (i / 1000));
		const u = `https://debot.ai/api/market/v4?token=${encodeURIComponent(e)}&chain=bsc&interval=${encodeURIComponent(n)}&limit=${a}`;
		const m = await g(u);
		if (m.status === 429) throw {
			status: 429,
			message: 'DEBOT 429'
		};
		if (!m.ok) return {
			ok: false,
			error: `DEBOT status ${m.status}`
		};
		const f = await m.json();
		const d = f?.data?.list || [];
		const h = M(d, 'debot', {
			timeUnit: 's'
		});
		return {
			ok: true,
			data: h
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('bsc_fetchFromDebot error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function Ot({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = b(s || r || '1m', 'four');
		const a = String(n || '').toLowerCase().includes('5') ? 'MIN5' : 'MIN1';
		const i = 85;
		const c = `https://four.meme/meme-api/v1/private/token/get/v2?address=${e}`;
		const l = await g(c);
		if (l && l.status === 429) throw {
			status: 429,
			message: 'FOUR SEARCH 429'
		};
		if (!l || !l.ok) return {
			ok: false,
			error: `FOUR token info status ${l?l.status:'no-response'}`
		};
		const u = await l.json();
		const m = u?.data?.id;
		if (!m) return {
			ok: false,
			error: 'FOUR missing POOL ID'
		};
		const f = `https://four.meme/meme-api/v1/public/bar/new`;
		const d = {
			tokenId: String(m),
			typeEnum: a,
			pageSize: i,
			startDate: 1
		};
		const h = await g(f, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(d)
		});
		if (h && h.status === 429) throw {
			status: 429,
			message: 'FOUR 429'
		};
		if (!h || !h.ok) return {
			ok: false,
			error: `FOUR bars status ${h?h.status:'no-response'}`
		};
		const p = await h.json();
		const I = Array.isArray(p?.data) ? p.data : [];
		if (!I.length) return {
			ok: false,
			error: 'FOUR no-data'
		};
		const k = I.map(t => {
			const e = t?.createDate ?? t?.create_date ?? t?.timestamp ?? null;
			return {
				...t,
				ts: e ? Number(e) : t?.ts ? Number(t.ts) : null
			};
		});
		const w = M(k, 'four', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: w,
			raw: {
				status: h.status,
				json: p
			}
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('fetchFromFour error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function Zt({
	platform: t,
	tokenId: e,
	lpAddress: r,
	interval: s,
	canonicalInterval: o
}) {
	try {
		if (!r) {
			const h = await Y(e)['catch'](() => null);
			if (h?.lpAddress) r = h.lpAddress;
		}
		if (!r) {
			const p = B(t, e)['catch'](() => null);
			const I = 2000;
			const k = await Promise.race([p, new Promise(t => setTimeout(() => t(null), I))]);
			if (k && k.ok && k.lpAddress) {
				r = k.lpAddress;
			} else {
				return {
					ok: false,
					error: 'No LP address for mevx',
					tried: ['mevx']
				};
			}
		}
		const a = 85;
		const i = b(o || s || '15s', 'mevx');
		const c = Math.floor(Date.now() / 1000);
		const l = `https://api.mevx.io/api/v1/candlesticks?chain=bsc&poolAddress=${r}&timeBucket=${i}&endTime=${c}&outlier=false&limit=${a}`;
		const u = await g(l);
		if (u.status === 429) throw {
			status: 429,
			message: 'BLAZE 429'
		};
		if (!u.ok) return {
			ok: false,
			error: `BLAZE status ${u.status}`
		};
		const m = await u.json();
		const f = m?.data?.bars || m?.bars || m?.candlesticks || [];
		const d = M(f, 'mevx', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: d
		};
	} catch (n) {
		if (n?.status === 429) throw n;
		console.warn('bsc_fetchFromMevx error', n && (n.message || n));
		return {
			ok: false,
			error: String(n),
			status: n?.status
		};
	}
}

function _0x1e87(_0x146ae7, _0x1cc766) {
	_0x146ae7 = _0x146ae7 - 0x1d7;
	const _0xc1eeda = _0xc1ee();
	let _0x1e875b = _0xc1eeda[_0x146ae7];
	return _0x1e875b;
}
async function Et({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = b(s || r || '1m', 'pancake');
		const a = 85;
		const i = Date.now();
		const c = N(s || n || '1m') || 1000;
		const l = i - a * c;
		const u = `https://pcs.dquery.ai/u-kline/v1/k-line/candles?platform=bsc&address=${e}&interval=${n}&limit=${a}&from=${l}&to=${i}`;
		const m = await g(u);
		if (m.status === 429) throw {
			status: 429,
			message: 'PANCAKE 429'
		};
		if (!m.ok) return {
			ok: false,
			error: `PANCAKE status ${m.status}`
		};
		const f = await m.json();
		const d = f?.data || [];
		const h = M(d, 'pancake', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: h
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('bsc_fetchFromPancake error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function $t({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = 85;
		const a = b(s || r || '15s', 'photon');
		const i = N(s || r || '15s') || 60000;
		const c = Date.now();
		const l = c - n * i;
		const u = `https://photon-bnb.tinyastro.io/search2?dexes=univ2%2Cuniv3%2Cbaseswap_v2%2Cbaseswap_v3%2Cpancakeswap_v2%2Cpancakeswap_v3%2Cmonoswap_v2%2Cmonoswap_v3%2Cthruster_v2_30%2Cthruster_v2_100%2Cthruster_v3%2Chyperblast_v2_30%2Cakitaken_v2_30%2Cdyorswap%2Cbitdex%2Csushiswap_v2_30%2Csushiswap_v3%2Cblaster_v2_30%2Caerodrome_v2_30%2Csunswap_v2_30%2Csunswap_v3%2Csunpump%2Cethervista_v2_0%2Cfourmeme&locale=en&q=${encodeURIComponent(e)}`;
		const m = await g(u);
		if (m?.status === 429) throw {
			status: 429,
			message: 'PHOTON SEARCH 429'
		};
		if (!m?.ok) return {
			ok: false,
			error: `PHOTON token info status ${m?.status??'no-response'}`
		};
		const f = await m.json()['catch'](() => null);
		let t = null;
		if (Array.isArray(f?.data) && f.data.length) {
			t = f.data[0].id || f.data[0]?.attributes?.id || null;
		}
		if (!t) return {
			ok: false,
			error: 'PHOTON missing POOL ID',
			tried: ['photon']
		};
		const d = [`pool_id=${encodeURIComponent(t)}`, `from=${Math.floor(l/1000)}`, `to=${Math.floor(c/1000)}`, `interval=${encodeURIComponent(a)}`, `amount_index=0`, `r_from=${Math.floor(l/1000)}`, `r_to=${Math.floor(c/1000)}`, `cb=${n}`, `show_outliers=false`].join('&');
		const h = `https://photon-bnb.tinyastro.io/api/charts/tradingview_range?${d}`;
		const p = await g(h);
		if (p?.status === 429) throw {
			status: 429,
			message: 'PHOTON CHARTS 429'
		};
		if (!p?.ok) return {
			ok: false,
			error: `PHOTON charts status ${p?.status??'no-response'}`
		};
		const I = await p.json()['catch'](() => null);
		const k = Array.isArray(I) ? I : I?.data || I?.bars || I?.candles || [];
		if (!Array.isArray(k) || k.length === 0) {
			return {
				ok: false,
				error: 'PHOTON no-data',
				raw: I
			};
		}
		const w = M(k, 'photon', {
			timeUnit: 'ms',
			candles: n
		});
		if (!Array.isArray(w) || w.length === 0) {
			return {
				ok: false,
				error: 'normalization produced no candles',
				raw: I
			};
		}
		const y = w.sort((t, e) => t.time - e.time);
		const A = y.length > n ? y.slice(-n) : y;
		return {
			ok: true,
			data: A
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('bsc_fetchFromPhoton error', o?.message || o);
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function Lt({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = b(s || r || '15s', 'binance');
		const a = 85;
		const i = Date.now();
		const c = `https://dquery.sintral.io/u-kline/v1/k-line/candles?interval=${n}&limit=85&to=${i}&platform=bsc&address=${e}`;
		const l = await g(c);
		if (l.status === 429) throw {
			status: 429,
			message: 'BINANCE 429'
		};
		if (!l.ok) return {
			ok: false,
			error: `BINANCE status ${l.status}`
		};
		const u = await l.json();
		const m = u?.data || [];
		const f = M(m, 'binance', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: f
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('bas_fetchFromBinance error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function zt({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = 85;
		const a = b(s || r || '15s', 'blaze');
		const i = k(s || r || '15s') || 60000;
		const c = Math.floor(Date.now() / 1000);
		const l = c - n * i;
		const u = 8;
		const m = 2;
		const f = `https://blazingworld.me/api/v1/token/chart/${e}/bars?f=${l}&t=${c}&r=${a}&b=${m}&c=${n}`;
		const d = await g(f);
		if (d.status === 429) throw {
			status: 429,
			message: 'BLAZE 429'
		};
		if (!d.ok) return {
			ok: false,
			error: `BLAZE status ${d.status}`
		};
		const h = await d.json();
		const p = h?.data?.bars || h?.bars || h?.candlesticks || [];
		const I = M(p, 'blaze', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: I
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('bas_fetchFromBlaze error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function Yt({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = b(s || r || '15s', 'debot');
		const a = 85;
		const i = N(s || r || '15s') || 60000;
		const c = Math.floor(Date.now() / 1000);
		const l = Math.floor(c - a * (i / 1000));
		const u = `https://debot.ai/api/market/v4?token=${encodeURIComponent(e)}&chain=bsc&interval=${encodeURIComponent(n)}&limit=${a}`;
		const m = await g(u);
		if (m.status === 429) throw {
			status: 429,
			message: 'DEBOT 429'
		};
		if (!m.ok) return {
			ok: false,
			error: `DEBOT status ${m.status}`
		};
		const f = await m.json();
		const d = f?.data?.list || [];
		const h = M(d, 'debot', {
			timeUnit: 's'
		});
		return {
			ok: true,
			data: h
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('bas_fetchFromDebot error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function Pt({
	platform: t,
	tokenId: e,
	lpAddress: r,
	interval: s,
	canonicalInterval: o
}) {
	try {
		if (!r) {
			const h = await Y(e)['catch'](() => null);
			if (h?.lpAddress) r = h.lpAddress;
		}
		if (!r) {
			const p = Q(t, e)['catch'](() => null);
			const I = 2000;
			const k = await Promise.race([p, new Promise(t => setTimeout(() => t(null), I))]);
			if (k && k.ok && k.lpAddress) {
				r = k.lpAddress;
			} else {
				return {
					ok: false,
					error: 'No LP address for mevx',
					tried: ['mevx']
				};
			}
		}
		const a = 85;
		const i = b(o || s || '15s', 'mevx');
		const c = Math.floor(Date.now() / 1000);
		const l = `https://api.mevx.io/api/v1/candlesticks?chain=base&poolAddress=${r}&timeBucket=${i}&endTime=${c}&outlier=false&limit=${a}`;
		const u = await g(l);
		if (u.status === 429) throw {
			status: 429,
			message: 'BLAZE 429'
		};
		if (!u.ok) return {
			ok: false,
			error: `BLAZE status ${u.status}`
		};
		const m = await u.json();
		const f = m?.data?.bars || m?.bars || m?.candlesticks || [];
		const d = M(f, 'mevx', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: d
		};
	} catch (n) {
		if (n?.status === 429) throw n;
		console.warn('bas_fetchFromMevx error', n && (n.message || n));
		return {
			ok: false,
			error: String(n),
			status: n?.status
		};
	}
}
async function Jt({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = b(s || r || '1m', 'pancake');
		const a = 85;
		const i = Date.now();
		const c = N(s || n || '1m') || 1000;
		const l = i - a * c;
		const u = `https://pcs.dquery.ai/u-kline/v1/k-line/candles?platform=base&address=${e}&interval=${n}&limit=${a}&from=${l}&to=${i}`;
		const m = await g(u);
		if (m.status === 429) throw {
			status: 429,
			message: 'PANCAKE 429'
		};
		if (!m.ok) return {
			ok: false,
			error: `PANCAKE status ${m.status}`
		};
		const f = await m.json();
		const d = f?.data || [];
		const h = M(d, 'pancake', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: h
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('base_fetchFromPancake error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function Bt({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = 85;
		const a = b(s || r || '15s', 'photon');
		const i = N(s || r || '15s') || 60000;
		const c = Date.now();
		const l = c - n * i;
		const u = `https://photon-base.tinyastro.io/search?locale=en&q=${encodeURIComponent(e)}`;
		const m = await g(u);
		if (m?.status === 429) throw {
			status: 429,
			message: 'PHOTON SEARCH 429'
		};
		if (!m?.ok) return {
			ok: false,
			error: `PHOTON token info status ${m?.status??'no-response'}`
		};
		const f = await m.json()['catch'](() => null);
		let t = null;
		if (Array.isArray(f?.data) && f.data.length) {
			t = f.data[0].id || f.data[0]?.attributes?.id || null;
		}
		if (!t) return {
			ok: false,
			error: 'PHOTON missing POOL ID',
			tried: ['photon']
		};
		const d = [`pool_id=${encodeURIComponent(t)}`, `from=${Math.floor(l/1000)}`, `to=${Math.floor(c/1000)}`, `interval=${encodeURIComponent(a)}`, `amount_index=0`, `r_from=${Math.floor(l/1000)}`, `r_to=${Math.floor(c/1000)}`, `cb=${n}`, `show_outliers=false`].join('&');
		const h = `https://photon-base.tinyastro.io/api/charts/tradingview_range?${d}`;
		const p = await g(h);
		if (p?.status === 429) throw {
			status: 429,
			message: 'PHOTON CHARTS 429'
		};
		if (!p?.ok) return {
			ok: false,
			error: `PHOTON charts status ${p?.status??'no-response'}`
		};
		const I = await p.json()['catch'](() => null);
		const k = Array.isArray(I) ? I : I?.data || I?.bars || I?.candles || [];
		if (!Array.isArray(k) || k.length === 0) {
			return {
				ok: false,
				error: 'PHOTON no-data',
				raw: I
			};
		}
		const w = M(k, 'photon', {
			timeUnit: 'ms',
			candles: n
		});
		if (!Array.isArray(w) || w.length === 0) {
			return {
				ok: false,
				error: 'normalization produced no candles',
				raw: I
			};
		}
		const y = w.sort((t, e) => t.time - e.time);
		const A = y.length > n ? y.slice(-n) : y;
		return {
			ok: true,
			data: A
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('bas_fetchFromPhoton error', o?.message || o);
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function Qt({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = 85;
		const a = b(s || r || '15s', 'blaze');
		const i = k(s || r || '15s') || 60000;
		const c = Math.floor(Date.now() / 1000);
		const l = c - n * i;
		const u = 8;
		const m = 2;
		const f = `https://blazingworld.me/api/v1/token/chart/${e}/bars?f=${l}&t=${c}&r=${a}&b=${m}&c=${n}`;
		const d = await g(f);
		if (d.status === 429) throw {
			status: 429,
			message: 'BLAZE 429'
		};
		if (!d.ok) return {
			ok: false,
			error: `BLAZE status ${d.status}`
		};
		const h = await d.json();
		const p = h?.data?.bars || h?.bars || h?.candlesticks || [];
		const I = M(p, 'blaze', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: I
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('mon_fetchFromBlaze error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function Rt({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		const n = b(s || r || '15s', 'debot');
		const a = 85;
		const i = N(s || r || '15s') || 60000;
		const c = Math.floor(Date.now() / 1000);
		const l = Math.floor(c - a * (i / 1000));
		const u = `https://debot.ai/api/market/v4?token=${encodeURIComponent(e)}&chain=monad&interval=${encodeURIComponent(n)}&limit=${a}`;
		const m = await g(u);
		if (m.status === 429) throw {
			status: 429,
			message: 'DEBOT 429'
		};
		if (!m.ok) return {
			ok: false,
			error: `DEBOT status ${m.status}`
		};
		const f = await m.json();
		const d = f?.data?.list || [];
		const h = M(d, 'debot', {
			timeUnit: 's'
		});
		return {
			ok: true,
			data: h
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('mon_fetchFromDebot error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}
async function xt({
	platform: t,
	tokenId: e,
	interval: r,
	canonicalInterval: s
}) {
	try {
		if (!lpAddress) {
			const d = await Y(e)['catch'](() => null);
			if (d?.lpAddress) lpAddress = d.lpAddress;
		}
		if (!lpAddress) {
			const h = wt(t, e)['catch'](() => null);
			const p = 2000;
			const I = await Promise.race([h, new Promise(t => setTimeout(() => t(null), p))]);
			if (I && I.ok && I.lpAddress) {
				lpAddress = I.lpAddress;
			} else {
				return {
					ok: false,
					error: 'No LP address for mevx',
					tried: ['mevx']
				};
			}
		}
		const n = 85;
		const a = b(s || r || '15s', 'mevx');
		const i = Math.floor(Date.now() / 1000);
		const c = `https://api.mevx.io/api/v1/candlesticks?chain=monad&poolAddress=${lpAddress}&timeBucket=${a}&endTime=${i}&outlier=false&limit=${n}`;
		const l = await g(c);
		if (l.status === 429) throw {
			status: 429,
			message: 'BLAZE 429'
		};
		if (!l.ok) return {
			ok: false,
			error: `BLAZE status ${l.status}`
		};
		const u = await l.json();
		const m = u?.data?.bars || u?.bars || u?.candlesticks || [];
		const f = M(m, 'mevx', {
			timeUnit: 'ms'
		});
		return {
			ok: true,
			data: f
		};
	} catch (o) {
		if (o?.status === 429) throw o;
		console.warn('mon_fetchFromMevx error', o && (o.message || o));
		return {
			ok: false,
			error: String(o),
			status: o?.status
		};
	}
}

function M(t = [], e = 'unknown', r = {
	timeUnit: 's'
}) {
	if (t == null) return [];
	const s = t => {
		if (t == null) return NaN;
		if (typeof t === 'number') return t;
		const e = Number(t);
		if (!Number.isFinite(e)) {
			const r = parseFloat(String(t).replace(/[^0-9eE\+\-\.]/g, ''));
			return Number.isFinite(r) ? r : NaN;
		}
		return e;
	};
	const o = t => {
		if (t == null) return null;
		const e = Number(t);
		if (!Number.isFinite(e)) return null;
		if (r.timeUnit === 'ms') return Math.floor(e / 1000);
		return Math.floor(e > 1000000000000 ? e / 1000 : e);
	};
	const n = (t, e, r, s, o, n = 0) => {
		if (![e, r, s, o].every(t => Number.isFinite(t))) return null;
		const a = Math.max(r, e, o);
		const i = Math.min(s, e, o);
		return {
			time: Math.floor(t),
			open: e,
			high: a,
			low: i,
			close: o,
			volume: Number.isFinite(n) ? n : 0
		};
	};
	const a = {
		ape(t) {
			return (t || []).map(t => {
				if (!t) return null;
				if (Array.isArray(t)) return null;
				return {
					t: t.time ?? t.timestamp ?? t.ts ?? null,
					o: t.open ?? null,
					h: t.high ?? null,
					l: t.low ?? null,
					c: t.close ?? null,
					v: t.volume ?? t.v ?? 0
				};
			}).filter(Boolean);
		},
		binance(t) {
			return t.map(t => {
				if (!Array.isArray(t)) return null;
				if (t.length >= 6) {
					const e = Number(t[0]) > 1000000000 && Number(t[0]) > Number(t[5] || 0);
					if (e) {
						return {
							t: t[0],
							o: t[1],
							h: t[2],
							l: t[3],
							c: t[4],
							v: t[5]
						};
					}
					return {
						t: t[5],
						o: t[0],
						h: t[1],
						l: t[2],
						c: t[3],
						v: t[4]
					};
				}
				return null;
			}).filter(Boolean);
		},
		blaze(t) {
			return (t || []).map(t => {
				if (!t || typeof t !== 'object') return null;
				return {
					t: t.time ?? t.timestamp ?? null,
					o: t.open ?? t.o ?? null,
					h: t.high ?? t.h ?? null,
					l: t.low ?? t.l ?? null,
					c: t.close ?? t.c ?? null,
					v: t.volume ?? t.v ?? 0
				};
			}).filter(Boolean);
		},
		four(t) {
			return (t || []).map(t => {
				if (!t || typeof t !== 'object') return null;
				return {
					t: t.createDate ?? t.create_date ?? t.timestamp ?? t.ts ?? null,
					o: t.open ?? t.o ?? null,
					h: t.high ?? t.h ?? null,
					l: t.low ?? t.l ?? null,
					c: t.close ?? t.c ?? null,
					v: t.volume ?? t.amount ?? 0
				};
			}).filter(Boolean);
		},
		jupiter(t) {
			return (t || []).map(t => {
				if (!t) return null;
				if (Array.isArray(t)) return null;
				return {
					t: t.time ?? t.timestamp ?? t.ts ?? null,
					o: t.open ?? null,
					h: t.high ?? null,
					l: t.low ?? null,
					c: t.close ?? null,
					v: t.volume ?? t.v ?? 0
				};
			}).filter(Boolean);
		},
		mevx(t) {
			return (t || []).map(t => {
				if (!t || typeof t !== 'object') return null;
				return {
					t: t.timestamp ?? t.time ?? t.ts ?? null,
					o: t.open ?? null,
					h: t.high ?? null,
					l: t.low ?? null,
					c: t.close ?? null,
					v: t.volume ?? t.v ?? 0
				};
			}).filter(Boolean);
		},
		padre(t) {
			const e = t || {};
			if (Array.isArray(e)) {
				return e.map(t => {
					if (!t || typeof t !== 'object') return null;
					return {
						t: t.t ?? t.time ?? t.timestamp ?? null,
						o: t.o ?? t.open ?? null,
						h: t.h ?? t.high ?? null,
						l: t.l ?? t.low ?? null,
						c: t.c ?? t.close ?? null,
						v: t.v ?? t.volume ?? 0
					};
				}).filter(Boolean);
			}
			const r = Array.isArray(e.t) ? e.t : Array.isArray(e.timestamp) ? e.timestamp : [];
			const s = Array.isArray(e.o) ? e.o : Array.isArray(e.open) ? e.open : [];
			const o = Array.isArray(e.h) ? e.h : Array.isArray(e.high) ? e.high : [];
			const n = Array.isArray(e.l) ? e.l : Array.isArray(e.low) ? e.low : [];
			const a = Array.isArray(e.c) ? e.c : Array.isArray(e.close) ? e.close : [];
			const i = Array.isArray(e.v) ? e.v : Array.isArray(e.volume) ? e.volume : [];
			const c = Math.max(r.length, s.length, o.length, n.length, a.length, i.length);
			const l = [];
			for (let t = 0; t < c; t++) {
				const u = r[t] ?? null;
				if (u == null) continue;
				l.push({
					t: u,
					o: s[t] ?? null,
					h: o[t] ?? null,
					l: n[t] ?? null,
					c: a[t] ?? null,
					v: i[t] ?? 0
				});
			}
			return l.filter(Boolean);
		},
		pancake(t) {
			return t.map(t => {
				if (!Array.isArray(t)) return null;
				if (t.length >= 6) {
					const e = Number(t[0]) > 1000000000 && Number(t[0]) > Number(t[5] || 0);
					if (e) {
						return {
							t: t[0],
							o: t[1],
							h: t[2],
							l: t[3],
							c: t[4],
							v: t[5]
						};
					}
					return {
						t: t[5],
						o: t[0],
						h: t[1],
						l: t[2],
						c: t[3],
						v: t[4]
					};
				}
				return null;
			}).filter(Boolean);
		},
		photon(t) {
			return (t || []).map(t => {
				if (!t || typeof t !== 'object') return null;
				return {
					t: t.timestamp ?? t.time ?? t.ts ?? null,
					o: t.o ?? t.open ?? null,
					h: t.h ?? t.high ?? null,
					l: t.l ?? t.low ?? null,
					c: t.c ?? t.close ?? null,
					v: t.volume ?? t.v ?? 0
				};
			}).filter(Boolean);
		},
		pumpfun1(t) {
			return (t || []).map(t => {
				if (!t || typeof t !== 'object') return null;
				return {
					t: t.timestamp ?? t.ts ?? t.time ?? null,
					o: t.open ?? t.o ?? null,
					h: t.high ?? t.h ?? null,
					l: t.low ?? t.l ?? null,
					c: t.close ?? t.c ?? null,
					v: t.volume ?? t.v ?? t.amount ?? 0
				};
			}).filter(Boolean);
		},
		pumpfun2(t) {
			return (t || []).map(t => {
				if (!t || typeof t !== 'object') return null;
				return {
					t: t.timestamp ?? t.ts ?? t.time ?? null,
					o: t.open ?? t.o ?? null,
					h: t.high ?? t.h ?? null,
					l: t.low ?? t.l ?? null,
					c: t.close ?? t.c ?? null,
					v: t.volume ?? t.v ?? t.amount ?? 0
				};
			}).filter(Boolean);
		},
		raydium(t) {
			if (Array.isArray(t) && t.length && t[0] && t[0].o !== undefined && t[0].unixTime !== undefined) {
				return (t || []).map(t => ({
					t: t.unixTime ?? t.timestamp ?? null,
					o: t.o ?? t.open ?? null,
					h: t.h ?? t.high ?? null,
					l: t.l ?? t.low ?? null,
					c: t.c ?? t.close ?? null,
					v: t.vBase ?? t.v ?? t.volume ?? 0
				})).filter(Boolean);
			}
			const e = t && t.data && t.data.items ? t.data.items : t && t.items ? t.items : [];
			return (e || []).map(t => ({
				t: t.unixTime ?? t.timestamp ?? null,
				o: t.o ?? t.open ?? null,
				h: t.h ?? t.high ?? null,
				l: t.l ?? t.low ?? null,
				c: t.c ?? t.close ?? null,
				v: t.vBase ?? t.v ?? t.volume ?? 0
			})).filter(Boolean);
		},
		'default'(t) {
			return (t || []).map(t => {
				if (Array.isArray(t)) {
					const e = t.length;
					if (e >= 6) {
						const r = t[e - 1];
						const s = t[0];
						if (Number(s) > 1000000000 && Number(s) > Number(r)) {
							return {
								t: t[0],
								o: t[1],
								h: t[2],
								l: t[3],
								c: t[4],
								v: t[5]
							};
						}
						return {
							t: t[5],
							o: t[0],
							h: t[1],
							l: t[2],
							c: t[3],
							v: t[4]
						};
					}
					if (e === 5) {
						return {
							t: null,
							o: t[0],
							h: t[1],
							l: t[2],
							c: t[3],
							v: t[4]
						};
					}
					return null;
				} else if (t && typeof t === 'object') {
					return {
						t: t.time ?? t.timestamp ?? t.ts ?? t.createDate ?? t.create_date ?? t.unixTime ?? null,
						o: t.open ?? t.o ?? null,
						h: t.high ?? t.h ?? null,
						l: t.low ?? t.l ?? null,
						c: t.close ?? t.c ?? null,
						v: t.volume ?? t.v ?? t.amount ?? 0
					};
				}
				return null;
			}).filter(Boolean);
		}
	};
	const i = String(e || 'default').toLowerCase();
	const c = a[i] || a['default'];
	const l = c(t);
	const u = new Map();
	for (const d of l) {
		if (!d) continue;
		const h = o(d.t);
		if (h == null) continue;
		const p = s(d.o);
		const I = s(d.h);
		const k = s(d.l);
		const w = s(d.c);
		const y = s(d.v ?? 0) || 0;
		if (![p, I, k, w].every(Number.isFinite)) continue;
		const A = n(h, p, I, k, w, y);
		if (!A) continue;
		u.set(A.time, A);
	}
	const m = Array.from(u.values()).sort((t, e) => t.time - e.time);
	const f = m.filter(t => !(t.open === 0 && t.high === 0 && t.low === 0 && t.close === 0));
	return f;
}

function Ht(n) {
	chrome.tabs.query({
		url: '*://*.axiom.trade/*'
	}, t => {
		if (chrome.runtime.lastError) {
			n([]);
			return;
		}
		t.sort((t, e) => (t.index || 0) - (e.index || 0));
		const e = [];
		for (const r of t) {
			for (const [s, o] of streams.entries()) {
				if (o.tabId === r.id) e.push(s);
			}
		}
		for (const [s] of streams.entries()) {
			if (!e.includes(s)) e.push(s);
		}
		n(e);
	});
}

function R() {
	Ht(r => {
		try {
			chrome.tabs.query({
				url: '*://*.axiom.trade/*'
			}, t => {
				for (const e of t || []) {
					chrome.tabs.sendMessage(e.id, {
						type: 'streamOrder',
						order: r
					}, () => {});
				}
			});
		} catch (t) {}
		try {} catch (t) {}
	});
}
let l = null;

function Vt() {
	if (l) clearTimeout(l);
	l = setTimeout(R, 175);
}

function x() {
	const t = {};
	for (const [r, s] of streams.entries()) {
		t[r] = {
			tabId: s.tabId,
			meta: s.meta || {},
			ts: s.ts || Date.now(),
			lastFrame: s.lastFrame || null
		};
	}
	try {
		chrome.storage.local.set({
			mirrors: t
		}, () => {});
	} catch (e) {}
}
chrome.runtime.onMessage.addListener((C, S, r) => {
	let s = false;
	const O = t => {
		if (s) return;
		s = true;
		try {
			r(t);
		} catch (e) {}
	};
	((async () => {
		try {
			const {
				type: e,
				tokenId: r
			} = C || {};
			const s = s => {
				try {
					chrome.tabs.query({
						url: '*://*.axiom.trade/*'
					}, t => {
						for (const r of t || []) {
							try {
								chrome.tabs.sendMessage(r.id, s, () => {});
							} catch (e) {}
						}
					});
				} catch (t) {}
			};
			if (e === 'registerStream') {
				const o = S.tab?.id || null;
				if (!o) {
					O({
						ok: false,
						error: 'no tab id'
					});
					return;
				}
				if (streams.has(C.streamId)) {
					const t = streams.get(C.streamId);
					O({
						ok: false,
						error: 'already registered',
						tabId: t.tabId
					});
					return;
				}
				streams.set(C.streamId, {
					tabId: o,
					meta: C.meta || {},
					ts: Date.now(),
					lastFrame: C.lastFrame || null
				});
				x();
				s({
					type: 'streamRegistered',
					streamId: C.streamId,
					tabId: o,
					meta: C.meta || {},
					lastFrame: C.lastFrame || null,
					ts: Date.now()
				});
				R();
				O({
					ok: true,
					tabId: o
				});
				return;
			}
			if (e === 'unregisterStream' || e === 'stopStream') {
				const i = C.streamId;
				if (!i) {
					O({
						ok: false,
						error: 'no streamId'
					});
					return;
				}
				streams['delete'](i);
				x();
				s({
					type: 'streamEnded',
					streamId: i
				});
				O({
					ok: true
				});
				return;
			}
			if (e === 'checkStream') {
				const c = streams.get(C.streamId);
				if (c) {
					O({
						ok: true,
						exists: true,
						tabId: c.tabId,
						meta: c.meta || {}
					});
				} else {
					O({
						ok: true,
						exists: false
					});
				}
				return;
			}
			if (e === 'updateStreamFrame') {
				const i = C.streamId;
				if (!i) {
					O({
						ok: false,
						error: 'no streamId'
					});
					return;
				}
				const c = streams.get(i);
				if (!c) {
					O({
						ok: false,
						error: 'stream not found'
					});
					return;
				}
				c.lastFrame = C.lastFrame || c.lastFrame || null;
				c.ts = Date.now();
				streams.set(i, c);
				x();
				s({
					type: 'streamFrameUpdated',
					streamId: i,
					lastFrame: c.lastFrame,
					ts: c.ts
				});
				O({
					ok: true
				});
				return;
			}
			if (e === 'queryMyStream' || e === 'queryStream') {
				const o = S.tab?.id;
				if (!o) {
					O({
						ok: false,
						error: 'no tab id'
					});
					return;
				}
				for (const [i, c] of streams.entries()) {
					if (c.tabId === o) {
						O({
							ok: true,
							streamId: i,
							meta: c.meta
						});
						return;
					}
				}
				O({
					ok: true,
					streamId: null
				});
				return;
			}
			if (e === 'getActiveStreams') {
				const l = {};
				for (const [i, c] of streams.entries()) {
					l[i] = {
						tabId: c.tabId,
						meta: c.meta || {},
						ts: c.ts || Date.now(),
						lastFrame: c.lastFrame || null
					};
				}
				O({
					ok: true,
					streams: l
				});
				return;
			}
			if (e === 'getAllStreams') {
				O({
					ok: true,
					streams: Array.from(streams.entries())
				});
				return;
			}
			if (e === 'stopStream' || e === 'stopAndClose') {
				const c = streams.get(C.streamId);
				if (!c) {
					O({
						ok: false,
						error: 'stream not found'
					});
					return;
				}
				const o = c.tabId;
				try {
					chrome.tabs.sendMessage(o, {
						type: 'bg-stopStream',
						streamId: C.streamId
					}, () => {
						if (e === 'stopAndClose') {
							try {
								chrome.tabs.remove(o, () => {});
							} catch (t) {}
						}
					});
				} catch (n) {}
				streams['delete'](C.streamId);
				x();
				s({
					type: 'streamEnded',
					streamId: C.streamId
				});
				O({
					ok: true
				});
				return;
			}
			if (e === 'focusStreamTab') {
				const c = streams.get(C.streamId);
				if (!c) {
					O({
						ok: false,
						error: 'stream not found'
					});
					return;
				}
				const o = c.tabId;
				try {
					chrome.tabs.update(o, {
						active: true
					}, t => {
						if (chrome.runtime.lastError) {
							O({
								ok: false,
								error: chrome.runtime.lastError.message
							});
							return;
						}
						if (!t) {
							O({
								ok: false,
								error: 'no tab object'
							});
							return;
						}
						chrome.windows.update(t.windowId, {
							focused: true
						}, () => {
							O({
								ok: true
							});
						});
					});
				} catch (n) {
					O({
						ok: false,
						error: String(n)
					});
				}
				return;
			}
			if (e === 'pumpLiveStreamConnect' && S.tab?.id) {
				G(S.tab.id);
				O({
					ok: true
				});
				return;
			}
			if (e === 'getToken') {
				const u = await Y(C.tokenId);
				O({
					ok: true,
					token: u || null
				});
				return;
			}
			if (e === 'getAllTokens') {
				O({
					ok: true,
					Tokens: tt()
				});
				return;
			}
			if (e === 'setToken') {
				await z(C.tokenId, {
					data: C.data ?? null,
					lpAddress: C.lpAddress ?? null,
					isError: !!C.isError,
					failed: typeof C.failed === 'number' ? C.failed : L[C.tokenId]?.failed || 0
				});
				O({
					ok: true
				});
				return;
			}
			if (e === 'sol_fetchOHLC') {
				const {
					platform: m,
					tokenId: r,
					interval: f,
					lpAddress: d
				} = C;
				const h = m && (m.endsWith('grad') || m === 'unknown');
				let t = d || null;
				if (h && !t) {
					const I = await J(m, r);
					t = I?.lpAddress || null;
					if (!t) {
						O({
							ok: false,
							error: '[SOL] no lpAddress'
						});
						return;
					}
				}
				const p = await P({
					chain: 'sol',
					platform: m,
					tokenId: r,
					interval: f,
					needsLP: h,
					providedLp: t
				});
				O(p);
				return;
			}
			if (e === 'sol_fetchDateAndLp') {
				const {
					platform: m,
					tokenId: r
				} = C;
				try {
					const I = await J(m, r);
					if (I && I.ok) O({
						ok: true,
						createdAt: I.createdAt ?? null,
						lpAddress: I.lpAddress ?? null
					});
					else O({
						ok: false,
						error: I?.error || '[SOL] no date or lp received'
					});
				} catch (a) {
					O({
						ok: false,
						error: String(a)
					});
				}
				return;
			}
			if (e === 'bsc_fetchOHLC') {
				const {
					platform: m,
					tokenId: r,
					interval: f,
					lpAddress: d
				} = C;
				const h = m && (m.startsWith('bsc-grad') || m === 'unknown');
				let t = d || null;
				if (h && !t) {
					const I = await B(m, r);
					t = I?.lpAddress || null;
					if (!t) {
						O({
							ok: false,
							error: '[BSC] no lpAddress'
						});
						return;
					}
				}
				const p = await P({
					chain: 'bsc',
					platform: m,
					tokenId: r,
					interval: f,
					needsLP: h,
					providedLp: t
				});
				O(p);
				return;
			}
			if (e === 'bsc_fetchDateAndLp') {
				const {
					platform: m,
					tokenId: r
				} = C;
				try {
					const I = await B(m, r);
					if (I && I.ok) O({
						ok: true,
						createdAt: I.createdAt ?? null,
						lpAddress: I.lpAddress ?? null
					});
					else O({
						ok: false,
						error: I?.error || '[BSC] no date or lp received'
					});
				} catch (a) {
					O({
						ok: false,
						error: String(a)
					});
				}
				return;
			}
			if (e === 'bas_fetchOHLC') {
				const {
					platform: m,
					tokenId: r,
					interval: f,
					lpAddress: d
				} = C;
				const h = m && (m.startsWith('bas-grad') || m === 'unknown');
				let t = d || null;
				if (h && !t) {
					const I = await Q(m, r);
					t = I?.lpAddress || null;
					if (!t) {
						O({
							ok: false,
							error: '[BASE] no lpAddress'
						});
						return;
					}
				}
				const p = await P({
					chain: 'bas',
					platform: m,
					tokenId: r,
					interval: f,
					needsLP: h,
					providedLp: t
				});
				O(p);
				return;
			}
			if (e === 'bas_fetchDateAndLp') {
				const {
					platform: m,
					tokenId: r
				} = C;
				try {
					const I = await Q(m, r);
					if (I && I.ok) O({
						ok: true,
						createdAt: I.createdAt ?? null,
						lpAddress: I.lpAddress ?? null
					});
					else O({
						ok: false,
						error: I?.error || '[BASE] no date or lp received'
					});
				} catch (a) {
					O({
						ok: false,
						error: String(a)
					});
				}
				return;
			}
			if (e === 'getFourMemeDescription') {
				try {
					const p = await fetch(`https://four.meme/meme-api/v1/private/token/get/v2?address=${C.tokenId}`);
					const k = await p.json();
					const w = k?.data?.descr ?? null;
					O({
						ok: true,
						description: w
					});
				} catch (a) {
					O({
						ok: false,
						error: String(a)
					});
				}
				return;
			}
			if (e === 'getPumpFunDescription' || e === 'getBelieveFunDescription' || e === 'getMoonitDescription') {
				try {
					const y = e === 'getBelieveFunDescription' ? 'believe-description' : undefined;
					const A = await E(C.url, y);
					O({
						ok: !!A.success,
						description: A.description || null
					});
				} catch (a) {
					O({
						ok: false,
						error: String(a)
					});
				}
				return;
			}
			if (e === 'getJupiterDescription') {
				try {
					const p = await fetch(`https://enjoyoors-api.jup.ag/v2/content/${C.tokenId}/structured?limit=10&page=1`);
					const k = await p.json();
					O({
						ok: true,
						description: k?.data?.description || null
					});
				} catch (a) {
					O({
						ok: false,
						error: String(a)
					});
				}
				return;
			}
			if (e === 'getBonkDescription' || e === 'getLaunchLabDescription') {
				try {
					const p = await fetch(`https://launch-mint-v1.raydium.io/get/by/mints?ids=${C.tokenId}`);
					const k = await p.json();
					O({
						ok: true,
						description: k?.data?.rows?.[0]?.description || null
					});
				} catch (a) {
					O({
						ok: false,
						error: String(a)
					});
				}
				return;
			}
			if (e === 'getBagsFmDescription') {
				try {
					const p = await fetch(`https://api2.bags.fm/api/v1/das/get-asset?assetId=${C.tokenId}`);
					const k = await p.json();
					O({
						ok: true,
						description: k?.response?.content?.metadata?.description ?? null
					});
				} catch (a) {
					O({
						ok: false,
						error: String(a)
					});
				}
				return;
			}
			if (e === 'fetch-thumbnail') {
				((async () => {
					try {
						const r = encodeURIComponent(C.mintId || C.mint || '');
						const t = await fetch(`https://livestream-api.pump.fun/livestream?mintId=${r}`);
						if (!t.ok) {
							O({
								ok: false,
								status: t.status,
								error: 'HTTP ' + t.status
							});
							return;
						}
						const e = await t.json();
						O({
							ok: true,
							data: e
						});
					} catch (a) {
						O({
							ok: false,
							error: String(a)
						});
					}
				})());
				return;
			}
			if (e === 'fetchTokenForMint') {
				const N = C.mintId;
				const b = await chrome.storage.local.get('pumpTokens');
				const g = b.pumpTokens || {};
				const c = g[N];
				try {
					const D = S?.tab?.id ?? null;
					if (D) {
						Z[N] = Z[N] || new Set();
						Z[N].add(D);
					}
				} catch (n) {}
				const M = V || 10000;
				if (c && c.token) {
					if (c.exp && Number.isFinite(c.exp)) {
						const j = Number(c.exp) * 1000;
						if (Date.now() < j - M) {
							s({
								type: 'token',
								token: c.token,
								wsUrl: c.wsUrl || null,
								mintId: N
							});
							O({
								ok: true,
								cached: true,
								mintId: N
							});
							return;
						}
					} else if (c.ts && Date.now() - c.ts < (H || 60000)) {
						s({
							type: 'token',
							token: c.token,
							wsUrl: c.wsUrl || null,
							mintId: N
						});
						O({
							ok: true,
							cached: true,
							mintId: N
						});
						return;
					}
				}
				O({
					ok: true,
					pending: true,
					mintId: N
				});
				try {
					chrome.tabs.create({
						url: 'https://pump.fun/streams',
						active: false,
						pinned: true
					}, r => {
						if (!r || !r.id) return;
						$ = r.id;
						const s = async () => {
							try {
								await chrome.scripting.executeScript({
									target: {
										tabId: r.id
									},
									files: ['pump.js']
								});
							} catch (a) {}
							try {
								chrome.tabs.sendMessage(r.id, {
									type: 'fetchToken',
									mintId: N
								}, () => {});
							} catch (a) {}
						};
						s();

						function t(t, e) {
							if (t !== r.id) return;
							if (e.status === 'loading' || e.status === 'complete') {
								s();
							}
						}
						chrome.tabs.onUpdated.addListener(t);
						const e = setTimeout(() => {
							try {
								chrome.tabs.onUpdated.removeListener(t);
							} catch (n) {}
							try {
								if ($ === r.id) chrome.tabs.remove(r.id);
							} catch (n) {}
							if ($ === r.id) $ = null;
						}, 20000);
					});
				} catch (n) {}
				return;
			}
			if (e === 'token') {
				try {
					const N = C.mintId || null;
					const u = C.token || null;
					const T = C.wsUrl || null;
					if (u && N) {
						const b = await chrome.storage.local.get('pumpTokens');
						const g = b.pumpTokens || {};
						const l = ((() => {
							try {
								const t = u.split('.');
								if (t.length !== 3) return null;
								const e = t[1].replace(/-/g, '+').replace(/_/g, '/');
								const r = e.length % 4;
								const s = r ? e + '='.repeat(4 - r) : e;
								return JSON.parse(atob(s));
							} catch (n) {
								return null;
							}
						})());
						const v = l && l.exp ? Number(l.exp) : null;
						g[N] = {
							token: u,
							wsUrl: T || null,
							ts: Date.now(),
							exp: v
						};
						const _ = Object.keys(g).length;
						if (_ >= (X || 1000)) {
							await chrome.storage.local.remove('pumpTokens');
						} else {
							await chrome.storage.local.set({
								pumpTokens: g
							});
						}
					}
					let t = false;
					try {
						if (N && Z[N] && Z[N].size) {
							const U = Array.from(Z[N]);
							delete Z[N];
							for (const F of U) {
								try {
									chrome.tabs.sendMessage(F, {
										type: 'token',
										token: u,
										wsUrl: T || null,
										mintId: N
									});
									t = true;
								} catch (a) {}
							}
						}
					} catch (n) {}
					if (!t) {
						s({
							type: 'token',
							token: u,
							wsUrl: T || null,
							mintId: N
						});
					}
					if ($) {
						try {
							chrome.tabs.remove($);
						} catch (n) {}
						$ = null;
					}
				} catch (a) {}
				O({
					ok: true
				});
				return;
			}
			if (e === 'forceFetchToken') {
				const N = C.mintId || null;
				try {
					chrome.tabs.create({
						url: 'https://pump.fun/streams',
						active: false,
						pinned: true
					}, t => {
						if (!t || !t.id) {
							O({
								ok: false
							});
							return;
						}
						const r = t.id;
						$ = r;
						const s = async () => {
							try {
								await chrome.scripting.executeScript({
									target: {
										tabId: r
									},
									files: ['pump.js']
								});
							} catch (a) {}
							try {
								chrome.tabs.sendMessage(r, {
									type: 'fetchToken',
									mintId: N
								}, () => {});
							} catch (a) {}
						};
						s();

						function e(t, e) {
							if (t !== r) return;
							if (e.status === 'loading' || e.status === 'complete') {
								s();
							}
						}
						chrome.tabs.onUpdated.addListener(e);
						const o = setTimeout(() => {
							try {
								chrome.tabs.onUpdated.removeListener(e);
							} catch (n) {}
							try {
								chrome.tabs.remove(r);
							} catch (n) {}
							if ($ === r) $ = null;
						}, 20000);
					});
					O({
						ok: true
					});
				} catch (n) {
					O({
						ok: false,
						error: String(n)
					});
				}
				return;
			}
			if (e === 'forceRefreshToken') {
				const N = C.mintId;
				if (N) {
					try {
						const b = await chrome.storage.local.get('pumpTokens');
						const g = b.pumpTokens || {};
						if (g[N]) {
							delete g[N];
							await chrome.storage.local.set({
								pumpTokens: g
							});
						}
						await W(N);
						O({
							ok: true,
							fetching: true,
							mintId: N
						});
					} catch (n) {
						O({
							ok: false,
							error: String(n)
						});
					}
				} else {
					try {
						await chrome.storage.local.remove('pumpTokens');
						O({
							ok: true,
							clearedAll: true
						});
					} catch (n) {
						O({
							ok: false,
							error: String(n)
						});
					}
				}
				return;
			}
			if (e === 'fetchInfoSolJupiter') {
				if (!r) {
					O({
						ok: false,
						error: 'no tokenId'
					});
					return;
				}
				try {
					if (typeof getSolTokenInfo !== 'function') {
						O({
							ok: false,
							error: 'getSolTokenInfo not implemented'
						});
						return;
					}
					const I = await getSolTokenInfo(r, {
						forceRefresh: false
					});
					if (I && I.ok) {
						O(I);
					} else {
						O({
							ok: false,
							error: I?.error || 'no meta'
						});
					}
				} catch (a) {
					O({
						ok: false,
						error: String(a)
					});
				}
				return;
			}
			if (e === 'fetchInfoBscFour') {
				if (!r) {
					O({
						ok: false,
						error: 'no tokenId'
					});
					return;
				}
				try {
					if (typeof getBscTokenInfo !== 'function') {
						O({
							ok: false,
							error: 'getBscTokenInfo not implemented'
						});
						return;
					}
					const I = await getBscTokenInfo(r, {
						forceRefresh: false
					});
					if (I && I.ok) {
						O(I);
					} else {
						O({
							ok: false,
							error: I?.error || 'no meta'
						});
					}
				} catch (a) {
					O({
						ok: false,
						error: String(a)
					});
				}
				return;
			}
			O({
				ok: false,
				error: 'BG: Unknown message'
			});
			return;
		} catch (a) {
			console.error('BG: Message handler error', a);
			try {
				O({
					ok: false,
					error: a?.message || String(a)
				});
			} catch (n) {}
			return;
		}
	})());
	return true;
});
chrome.runtime.onInstalled.addListener(() => {
	v();
	i()['catch'](t => console.warn('SOL prune failed', t));
	chrome.storage.local.set({
		__pumpStreamsEnabled: false,
		MigratingNotifications: false,
		OpenCoinsInTab: false,
		HighlightMigratingTokens: false,
		marketCapColors: true,
		MCcolors: true,
		ShowPriceCharts: true,
		chartsForAll: true,
		KeyboardShortcuts: false,
		pumpLiveStreams: true,
		status: 0,
		ProTrencher: false,
		version: '1.1',
		chain: {
			SOL: true,
			BSC: true
		},
		theme: 'default'
	});
});
chrome.runtime.onStartup.addListener(() => {
	K();
	i()['catch'](t => console.warn('prune failed', t));
});
chrome.tabs.onActivated.addListener(async t => {
	e();
});
