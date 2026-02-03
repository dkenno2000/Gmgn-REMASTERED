window.__rem_marketCapColorsEnabled = false;
window.__rem_chartsForAll = true;
window.__rem_pageToken = typeof window.__rem_pageToken === "number" ? window.__rem_pageToken : 0;
window._pump_connecting = window._pump_connecting || false;
window.__rem_pumpStreams = window.__rem_pumpStreams || false;
try {
	chrome.storage.local.get(["marketCapColors", "chartsForAll"], e => {
		if (e && typeof e.marketCapColors !== "undefined") window.__rem_marketCapColorsEnabled = !!e.marketCapColors;
		if (e && typeof e.chartsForAll !== "undefined") window.__rem_chartsForAll = !!e.chartsForAll
	})
} catch (j) {}(function () {
	if (!window.__rem_lifecycle) {
		window.__rem_lifecycle = {
			resources: {
				navigation: new Set,
				pulse: new Set,
				meme: new Set,
				global: new Set
			}
		}
	}
	const r = window.__rem_lifecycle;

	function e(e) {
		try {
			if (e === "meme") {
				if (typeof S === "function") {
					try {
						S()["catch"]?.(() => {})
					} catch (j) {}
				}
			}
		} catch (j) {}
		if (!r.resources[e]) return;
		for (const t of Array.from(r.resources[e])) {
			try {
				switch (t.type) {
				case "observer":
					if (t.instance?.disconnect) t.instance.disconnect();
					break;
				case "interval":
					if (t.id) clearInterval(t.id);
					break;
				case "timeout":
					if (t.id) clearTimeout(t.id);
					break;
				case "listener":
					if (t.target && t.handler) {
						try {
							const n = typeof t.capture === "boolean" ? t.capture : t.options;
							t.target.removeEventListener(t.event, t.handler, t.originalOptions)
						} catch (j) {}
					}
					break;
				case "runtime-listener":
					try {
						if (t.handler) chrome.runtime.onMessage.removeListener(t.handler)
					} catch (j) {}
					break;
				case "livekit-listener":
					try {
						if (t.instance && t.handler && t.event) {
							try {
								if (typeof t.instance.off === "function") {
									t.instance.off(t.event, t.handler)
								} else if (typeof t.instance.removeListener === "function") {
									t.instance.removeListener(t.event, t.handler)
								}
							} catch (j) {}
						}
					} catch (j) {}
					break;
				case "component":
					if (t.element?.parentNode) {
						t.element.parentNode.removeChild(t.element)
					}
					break
				}
			} catch (j) {
				console.warn(`Cleanup error for ${t.type}:`, j)
			}
		}
		r.resources[e].clear();
		if (e === "pulse") {
			try {
				try {
					Qt(l)
				} catch (j) {}
				try {
					gn()
				} catch (j) {}
				try {
					if (typeof T !== "undefined" && T instanceof Map) T.clear()
				} catch (j) {}
				try {
					if (typeof d !== "undefined" && d instanceof Set) d.clear()
				} catch (j) {}
				try {
					if (typeof m !== "undefined" && m instanceof Map) m.clear()
				} catch (j) {}
				try {
					cn = new WeakMap
				} catch (j) {}
				try {
					hn = false;
					isProcessing = false
				} catch (j) {}
			} catch (j) {
				console.warn("Extra pulse cleanup failed", j)
			}
		}
	}

	function t() {
		e("pulse");
		e("meme");
		e("global")
	}

	function c(e, t) {
		if (!r.resources[e]) {
			r.resources[e] = new Set
		}
		r.resources[e].add(t);
		return t
	}

	function n(e, t, n, r = false, o, i = "meme") {
		if (!e || typeof e.addEventListener !== "function") return null;
		e.addEventListener(t, n, r);
		return c(i, {
			type: "listener",
			target: e,
			event: t,
			handler: n,
			originalOptions: r,
			description: o || `${t} listener`
		})
	}

	function o(e, t, n = "meme") {
		return c(n, {
			type: "observer",
			instance: e,
			description: t || "Observer"
		})
	}

	function i(e, t, n = "meme") {
		return c(n, {
			type: "timeout",
			id: e,
			description: t || "Timeout"
		})
	}

	function s(e, t, n = "meme") {
		return c(n, {
			type: "interval",
			id: e,
			description: t || "Interval"
		})
	}

	function a(e, t, n = "meme") {
		return c(n, {
			type: "component",
			element: e,
			description: t || "Component"
		})
	}
	window.__rem_cleanupPage = e;
	window.__rem_cleanupAll = t;
	window.__rem_registerResource = c;
	window.__rem_registerListener = n;
	window.__rem_registerObserver = o;
	window.__rem_registerTimeout = i;
	window.__rem_registerInterval = s;
	window.__rem_registerComponent = a
})();
const t = "main.w-full";
const n = ".flex.items-center.gap-2.whitespace-nowrap";
const r = t + " .flex.flex-col.flex-1.overflow-y-auto.overflow-x-hidden:nth-child(3)";
const C = ".g-table-body > div > div[data-index]";
const H = "a.cursor-pointer.absolute.rounded-full.bg-bg-100";
const c = ".flex.flex-col.w-full > .flex.items-center.whitespace-nowrap > p.font-normal.overflow-hidden.text-ellipsis > div";
const F = "main.flex .flex.relative.h-full .absolute.top-0.left-0 > .flex.flex-col.min-w-\\[320px\\].max-w-\\[320px\\].overflow-x-hidden";
const l = "main.w-fulllllll";
const i = ".rem-quick-buy-container";
async function s(t, n) {
	return new Promise(e => chrome.storage.local.set({
		[t]: n
	}, e))
}
async function W(n) {
	return new Promise(t => chrome.storage.local.get([n], e => t(e[n])))
}

function z(n, r = 100) {
	let o = null;
	return function (...e) {
		const t = this;
		clearTimeout(o);
		o = setTimeout(() => n.apply(t, e), r)
	}
}
const V = ["q", "w", "e", "r"];
const $ = ["a", "s", "d", "f"];
let K = 0;
const G = 120;
async function Q(i) {
	const e = Date.now();
	if (e - K < G) return;
	K = e;
	i = String(i || "").slice(0, 1);
	if (!i) return;
	const t = t => new Promise(e => setTimeout(e, t));
	const n = (e, t = {}) => {
		const n = i.toUpperCase();
		const r = n.charCodeAt(0);
		const o = {
			bubbles: true,
			cancelable: true,
			composed: true,
			view: window,
			key: t.key ?? (e === "Space" ? " " : i),
			code: t.code ?? (e === "Space" ? "Space" : "Key" + n),
			keyCode: t.keyCode ?? (e === "Space" ? 32 : r),
			which: t.which ?? (e === "Space" ? 32 : r),
			charCode: t.charCode ?? (e === "keypress" ? i.charCodeAt(0) || r : 0)
		};
		return o
	};

	function r(e, t, n) {
		const r = new KeyboardEvent(t, {
			key: n.key,
			code: n.code,
			bubbles: n.bubbles,
			cancelable: n.cancelable,
			composed: n.composed,
			view: n.view
		});
		try {
			Object.defineProperty(r, "keyCode", {
				get: () => n.keyCode
			});
			Object.defineProperty(r, "which", {
				get: () => n.which
			});
			Object.defineProperty(r, "charCode", {
				get: () => n.charCode
			})
		} catch (o) {}
		try {
			window.dispatchEvent(r)
		} catch (o) {}
	}
	const o = document.activeElement && document.activeElement !== document.body ? document.activeElement : document.body;
	try {
		o.focus && o.focus()
	} catch (d) {}
	const c = n("Space", {
		key: " ",
		code: "Space",
		keyCode: 32,
		which: 32
	});
	const s = n("Key", {
		key: i,
		code: "Key" + i.toUpperCase()
	});
	const a = n("keypress", {
		code: "Key" + i.toUpperCase()
	});
	const l = n("keyup", {
		code: "Key" + i.toUpperCase()
	});
	const u = c;
	r(o, "keydown", c);
	await t(8);
	r(o, "keydown", s);
	await t(6);
	r(o, "keypress", a);
	await t(6);
	r(o, "keyup", l);
	await t(6);
	r(o, "keyup", u)
}
const D = 3e3;
const R = 100;
let J = false;
let y = null;
async function Y() {
	if (J) return;
	J = true;
	try {
		const n = document.querySelector(".rem-quick-buy-container");
		if (n) {
			try {
				n.remove()
			} catch (j) {}
		}
		if (y) {
			clearInterval(y);
			y = null
		}
		const r = F + " .flex.flex-col.gap-y-12px.p-12px.pt-14px";
		let e = document.querySelector(r);
		if (!e) {
			e = await B(r)["catch"](() => null)
		}
		if (!e) {
			return null
		}
		const i = document.createElement("div");
		i.className = "rem-quick-buy-container";
		i.style.display = "flex";
		i.style.flexDirection = "column";
		i.style.width = "100%";
		const o = document.createElement("div");
		o.className = "rem-quick-buy-buttons";
		o.style.display = "flex";
		o.style.gap = "12px";
		o.style.padding = "7px 16px";
		o.classList.add("active");
		const c = document.createElement("div");
		c.className = "rem-quick-sell-buttons";
		c.style.display = "flex";
		c.style.gap = "12px";
		c.style.padding = "7px 16px";
		let t = {};
		try {
			t = JSON.parse(localStorage.getItem("tradeConfigsV9"))
		} catch (j) {}
		const s = t?.bsc?.buy?.quickAmount || [];
		const a = t?.bsc?.sell?.quickAmount || [];
		const l = [];
		const u = [];
		for (let e = 0; e < 4; e++) {
			const m = document.createElement("button");
			m.className = "rem-btn";
			m.textContent = s[e] !== undefined ? s[e] : `${e+1}`;
			const f = () => Q(V[e]);
			window.__rem_registerListener && window.__rem_registerListener(m, "click", f, false, "QuickWidget buy click", "meme");
			o.appendChild(m);
			l.push(m)
		}
		for (let e = 0; e < 4; e++) {
			const p = document.createElement("button");
			p.className = "rem-btn";
			p.textContent = a[e] !== undefined ? a[e] : `${e+1}`;
			const h = () => Q($[e]);
			window.__rem_registerListener && window.__rem_registerListener(p, "click", h, false, "QuickWidget sell click", "meme");
			c.appendChild(p);
			u.push(p)
		}
		const d = await W("KeyboardShortcuts");
		i.id = d ? "rem-keys-enabled" : "rem-keys-disabled";
		i.appendChild(o);
		i.appendChild(c);
		e.insertAdjacentElement("afterend", i);
		(() => {
			const n = F + "  .flex.flex-col.gap-y-12px.p-12px.pt-14px";
			const r = Date.now();
			const o = setInterval(() => {
				try {
					if (Date.now() - r > D) {
						clearInterval(o);
						return
					}
					if (i && i.isConnected) return;
					const t = document.querySelector(n);
					if (!t) return;
					if (!i) {
						return
					}
					try {
						t.insertAdjacentElement("afterend", i)
					} catch (e) {}
				} catch (j) {}
			}, R);
			try {
				window.__rem_registerInterval(o, "[MEME] QuickWidget reattach poll", "meme")
			} catch (j) {}
			const e = setTimeout(() => {
				try {
					clearInterval(o)
				} catch (j) {}
			}, D + 50);
			try {
				window.__rem_registerTimeout(e, "[MEME] QuickWidget reattach stop", "meme")
			} catch (j) {}
		})();
		y = setInterval(() => {
			let e = {};
			try {
				e = JSON.parse(localStorage.getItem("tradeConfigsV9"))
			} catch (j) {}
			const t = e?.bsc?.buy?.quickAmount;
			const n = e?.bsc?.sell?.quickAmount;
			for (let e = 0; e < 4; e++) {
				const r = t[e] !== undefined ? t[e] : `${e+1}`;
				if (l[e].textContent !== r) l[e].textContent = r
			}
			for (let e = 0; e < 4; e++) {
				const r = n[e] !== undefined ? n[e] : `${e+1}`;
				if (u[e].textContent !== r) u[e].textContent = r
			}
		}, 3500);
		window.__rem_registerInterval(y, "[MEME] QuickWidget content refresh", "meme")
	} catch (j) {
		console.error(j)
	} finally {
		J = false
	}
}
async function Z(e) {
	const t = await P({
		type: "getPumpFunDescription",
		url: e.href
	});
	if (t?.ok) return t.description || null;
	return null
}
async function X(e) {
	try {
		const n = await P({
			type: "getBelieveFunDescription",
			url: e.href
		});
		if (n?.ok && n.description) {
			return n.description
		}
		return null
	} catch (t) {
		console.warn("Error fetching description:", t);
		return null
	}
}
async function ee(e) {
	const t = e.href.match(/studio\/([^?#]*?jups)(?=[?#]|$)/i);
	const n = t?.[1] ?? null;
	if (!n) return null;
	try {
		const o = await P({
			type: "getJupiterDescription",
			tokenId: n
		});
		if (o?.ok && o.description) {
			return o.description
		}
		return null
	} catch (r) {
		console.error("Error fetching description:", r);
		return null
	}
}
async function te(e) {
	try {
		const n = await P({
			type: "getMoonitDescription",
			url: e.href
		});
		if (n?.ok && n.description) {
			return n.description
		}
		return null
	} catch (t) {
		console.warn("Error fetching description:", t);
		return null
	}
}
async function ne(e) {
	const t = e?.getAttribute("href") || bonkLink?.getAttribute("href");
	const n = t?.split("/token/")[1];
	if (!n) return null;
	try {
		const o = await P({
			type: "getBonkDescription",
			tokenId: n
		});
		if (o?.ok && o.description) {
			return o.description
		}
		return null
	} catch (r) {
		console.error("Error fetching description:", r);
		return null
	}
}
async function re(e) {
	const t = letsbonkLink?.getAttribute("href") || e?.getAttribute("href");
	const n = t?.split("/token/")[1];
	if (!n) return null;
	try {
		const o = await P({
			type: "getBonkDescription",
			tokenId: n
		});
		if (o?.ok && o.description) {
			return o.description
		}
		return null
	} catch (r) {
		console.error("Error fetching description:", r);
		return null
	}
}
async function oe(e) {
	const t = e.getAttribute("href");
	const n = t.split("?mint=")[1];
	if (!n) return null;
	try {
		const o = await P({
			type: "getLaunchLabDescription",
			tokenId: n
		});
		if (o?.ok && o.description) {
			return o.description
		}
		return null
	} catch (r) {
		console.error("Error fetching description:", r);
		return null
	}
}
async function ie(e) {
	const t = e.getAttribute("href");
	const n = t.split(".fm/")[1];
	if (!n) return null;
	try {
		const o = await P({
			type: "getBagsFmDescription",
			tokenId: n
		});
		if (o?.ok && o.description) {
			return o.description
		}
		return null
	} catch (r) {
		console.error("Error fetching description:", r);
		return null
	}
}
async function ce(e) {
	const t = e?.getAttribute("href");
	const n = t?.split("/token/")[1];
	try {
		const o = await P({
			type: "getFourMemeDescription",
			tokenId: n
		});
		if (o?.ok && o.description) {
			return o.description
		}
		return null
	} catch (r) {
		console.warn("Error fetching description:", r);
		return null
	}
}

function se(e) {
	if (!e) {
		console.error("Container not provided to getTokenInfo");
		return {
			coinImage: null,
			coinTicker: null,
			coinName: null,
			liveText: null,
			tokenId: null
		}
	}
	const t = {
		coinImage: null,
		coinTicker: null,
		coinName: null,
		liveText: null,
		tokenId: null
	};
	const n = e.querySelector('a[href*="pump.fun/coin/"]');
	if (n) {
		Z(n);
		const h = n.href.split("/");
		t.tokenId = h[h.length - 1]
	}
	const r = e.querySelector('a[href*="believe.app/coin/"]');
	if (r) X(r);
	const o = e.querySelector('a[href*="jup.ag/studio/"]');
	if (o) ee(o);
	const i = e.querySelector('a[href*="9gag.com/gag/"]');
	if (i) te(i);
	const c = e.querySelector('a[href*="letsbonk.fun/token/"]');
	if (c) ne(c);
	const s = e.querySelector('a[href*="bonk.fun/token/"]');
	if (s) re(s);
	const a = e.querySelector('a[href*="raydium.io/launchpad/token/?mint="]');
	if (a) oe(a);
	const l = e.querySelector('a[href*="https://bags.fm/"]');
	if (l) ie(l);
	const u = e.querySelector('a[href*="four.meme/token/"]');
	if (u) ce(u);
	const d = e.querySelector('img[alt="logo"]');
	if (d) {
		t.coinImage = d.src
	}
	const m = e.querySelector('span[class*="font-semibold"][class*="text-xl"]');
	if (m) {
		t.coinTicker = m.textContent.trim();
		const y = m.nextElementSibling;
		if (y) {
			t.coinName = y.textContent.trim()
		}
	}
	const f = Array.from(e.querySelectorAll("span"));
	const p = f.find(e => e.textContent.trim() === "LIVE");
	if (p) {
		t.liveText = "LIVE"
	}
	return t
}
async function ae({
	timeout: e = 2e3,
	interval: t = 150
} = {}) {
	const n = await B("#GlobalScrollDomId", e);
	const r = Date.now();
	while (Date.now() - r < e) {
		const o = se(n);
		if (o && (o.tokenId || o.coinTicker || o.coinImage || o.coinName || o.liveText)) {
			return o
		}
		await new Promise(e => setTimeout(e, t))
	}
	console.warn("waitForExtractedCoinData timed out; returning null");
	return null
}
const N = {
	meme: {
		expanded: true,
		toggleHeader: null,
		contentContainer: null
	}
};
let le = false;
async function ue() {
	if (le) return;
	le = true;
	try {
		const s = document.getElementById("meme-info-container");
		if (s) s.remove();
		const a = document.querySelector(".pump-image-modal");
		if (a) a.remove();
		const l = await B(F + " .p-12px.border-b-\\[1px\\].border-b-line-100:has(.flex.flex-col.gap-y-12px.text-text-300.text-sm.relative)");
		const y = await B("#GlobalScrollDomId");
		const u = await ae({
			timeout: 2e3,
			interval: 150
		});
		if (!u) {
			console.warn("token info not found after waiting");
			le = false;
			return
		}
		const d = u.coinImage || null;
		const m = u.coinTicker || null;
		const w = u.coinName || null;
		const _ = u.liveText || null;
		const g = u.tokenId || null;
		if (document.getElementById("meme-info-container")) return;
		const b = document.createElement("div");
		b.id = "meme-info-container";
		b.style.borderRadius = "8px";
		b.className = "p-12px flex flex-col gap-10px w-full border-b-[1px] border-line-100 border-solid";
		window.__rem_registerResource && window.__rem_registerResource("meme", {
			type: "component",
			element: b,
			description: "Meme info container"
		});
		const v = document.createElement("div");
		v.innerHTML = `
      <div class="flex items-center justify-between text-base font-medium text-text-100">
        <div class="flex items-center gap-[4px]">Coin Info
          <div class="cursor-pointer text-text-300 transform rotate-0">
            <svg width="14px" height="14px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M14.2032 6.11606C14.4765 5.84269 14.4766 5.39917 14.2032 5.12583C13.9299 4.85257 13.4863 4.85257 13.213 5.12583L8.00009 10.3387L2.7872 5.12583C2.51382 4.8527 2.07025 4.85254 1.79697 5.12583C1.52376 5.39912 1.52387 5.8427 1.79697 6.11606L7.50498 11.8241C7.77832 12.0974 8.22184 12.0974 8.49521 11.8241L14.2032 6.11606Z">
              </path>
            </svg>
          </div>
        </div>
      </div>`;
		v.style.display = "flex";
		v.style.justifyContent = "space-between";
		v.style.alignItems = "center";
		const k = document.createElement("div");
		k.className = "rem-img-desc-cont";
		k.style.padding = "4px";
		k.style.paddingTop = "0px";
		k.style.paddingBottom = "4px";
		b.appendChild(v);
		b.appendChild(k);
		const x = document.createElement("div");
		x.className = "pump-image-modal";
		x.innerHTML = `
      <div class="modal-pump-content">
        <img class="modal-pump-image" src="">
      </div>
    `;
		document.body.appendChild(x);

		function e() {
			x.classList.remove("active")
		}
		window.__rem_registerListener && window.__rem_registerListener(x, "click", e, false, "Modal background click handler", "meme");
		const C = x.querySelector(".modal-pump-content");

		function t(e) {
			e.stopPropagation()
		}
		window.__rem_registerListener && window.__rem_registerListener(C, "click", t, false, "Modal content click handler", "meme");

		function n(e) {
			if (e.key === "Escape" && x.classList.contains("active")) {
				x.classList.remove("active")
			}
		}
		window.__rem_registerListener && window.__rem_registerListener(document, "keydown", n, false, "Escape key handler for modal", "meme");
		if (d) {
			const L = document.createElement("img");
			L.src = d;
			L.id = "rem-pump-image";
			L.className = "rem-left";
			L.style.minWidth = "";
			L.style.maxWidth = "";
			L.style.margin = "";

			function r(e) {
				e.stopPropagation();
				const t = x.querySelector(".modal-pump-image");
				t.src = d;
				x.classList.add("active")
			}
			window.__rem_registerListener && window.__rem_registerListener(L, "click", r, false, "Pump image click handler", "meme");
			const S = document.createElement("div");
			S.className = "rem-desc-flow";
			S.appendChild(L);
			const A = m ? String(m).trim() : "";
			const I = w ? String(w).trim() : "";
			if (A && I) {
				const M = document.createElement("div");
				M.id = "rem-ticker";
				M.className = "rem-text";
				M.style.marginBottom = "6px";
				M.innerHTML = `
          <div class="text-nowrap gap-[4px]">
            <div id="rem-ticker">
              <span class="text-textPrimary text-[14px] leading-[18px] font-medium">${A}</span>
            </div>
            <div id="rem-name">
              <span class="text-textTertiary text-[11px] leading-[16px] font-normal">${I}</span>
            </div>
          </div>
        `;
				S.appendChild(M)
			}
			const T = document.createElement("div");
			T.id = "rem-token-desc-container";
			T.className = "rem-text";
			T.style.paddingLeft = "2px";
			T.style.paddingRight = "2px";
			T.style.lineHeight = "20px";
			T.style.display = "none";
			S.appendChild(T);
			k._setDescription = e => {
				if (!e) {
					T.style.display = "none";
					T.textContent = "";
					return
				}
				T.style.display = "block";
				T.textContent = e
			};
			k.appendChild(S)
		} else {
			const q = document.createElement("div");
			q.id = "rem-token-desc-container";
			q.className = "rem-text";
			q.style.paddingLeft = "2px";
			q.style.paddingRight = "2px";
			q.style.lineHeight = "20px";
			k.appendChild(q);
			k._setDescription = e => {
				q.style.display = e ? "block" : "none";
				q.textContent = e || ""
			}
		}
		try {
			if (l && l.parentNode) {
				l.parentNode.insertBefore(b, l.nextSibling)
			}
		} catch (j) {
			try {
				if (l && l.parentNode) l.parentNode.insertBefore(b, l.nextSibling)
			} catch (i) {}
		}
		async function p(e, t, {
			timeout: n = 1600,
			interval: r = 120
		} = {}) {
			if (!e) return null;
			const o = Date.now();
			let i = e.querySelector(t);
			if (i) return i;
			while (Date.now() - o < n) {
				await new Promise(e => setTimeout(e, r));
				if (!e.isConnected) return null;
				i = e.querySelector(t);
				if (i) return i
			}
			return null
		}
		let f = null;
		(async function h() {
			try {
				const r = typeof y !== "undefined" && y ? y : document.querySelector("#GlobalScrollDomId") || document;
				async function e(e, t = 800) {
					const n = r.querySelector(e);
					if (n) return n;
					return await p(r, e, {
						timeout: t,
						interval: 120
					})
				}
				const n = await e('a[href*="pump.fun/coin/"]', 1200);
				if (n) {
					f = await Z(n)
				}
				if (!f) {
					const o = await e('a[href*="believe.app/coin/"]', 800);
					if (o) {
						f = await X(o)
					}
				}
				if (!f) {
					const i = await e('a[href*="jup.ag/studio/"]', 1e3);
					if (i) {
						f = await ee(i)
					}
				}
				if (!f) {
					const c = await e('a[href*="9gag.com/gag/"]', 800);
					if (c) {
						f = await te(c)
					}
				}
				if (!f) {
					const s = await e('a[href*="letsbonk.fun/token/"]', 800);
					const a = await e('a[href*="bonk.fun/token/"]', 800);
					const l = s || a;
					if (l) {
						f = await re(l)
					}
				}
				if (!f) {
					const u = await e('a[href*="raydium.io/launchpad/token/?mint="]', 800);
					if (u) {
						f = await oe(u)
					}
				}
				if (!f) {
					const d = await e('a[href*="bags.fm/"]', 800);
					if (d) {
						f = await ie(d)
					}
				}
				if (!f) {
					const m = await e('a[href*="four.meme/token/"]', 800);
					if (m) {
						f = await ce(m)
					}
				}
			} catch (t) {
				console.warn("Error fetching description (async):", t)
			}
			try {
				if (k && typeof k._setDescription === "function") {
					k._setDescription(f)
				}
			} catch (t) {
				console.warn("Error applying description:", t)
			}
		})();
		if (k && typeof k._setDescription === "function") {
			k._setDescription(f)
		}
		const E = v.querySelector(".rotate-0");
		chrome.storage.local.get(["memeExpanded"], e => {
			const t = typeof e.memeExpanded === "boolean" ? e.memeExpanded : true;
			try {
				N.meme.expanded = t
			} catch (i) {}
			if (t) {
				k.style.display = "block";
				if (E) {
					E.classList.remove("rotate-0");
					E.classList.add("rotate-180")
				}
			} else {
				k.style.display = "none";
				if (E) {
					E.classList.remove("rotate-180");
					E.classList.add("rotate-0")
				}
			}
		});

		function o() {
			try {
				N.meme.expanded = !N.meme.expanded
			} catch (i) {}
			const e = N.meme.expanded;
			if (e) {
				k.style.display = "block";
				if (E) {
					E.classList.remove("rotate-0");
					E.classList.add("rotate-180")
				}
			} else {
				k.style.display = "none";
				if (E) {
					E.classList.remove("rotate-180");
					E.classList.add("rotate-0")
				}
			}
			chrome.storage.local.set({
				memeExpanded: N.meme.expanded
			})
		}
		window.__rem_registerListener && window.__rem_registerListener(v, "click", o, false, "Meme info toggle handler", "meme");
		N.meme = N.meme || {};
		N.meme.toggleHeader = v;
		N.meme.contentContainer = k;
		(() => {
			const n = F + " .p-12px.border-b-\\[1px\\].border-b-line-100:has(.flex.flex-col.gap-y-12px.text-text-300.text-sm.relative)";
			const r = Date.now();
			const o = setInterval(() => {
				try {
					if (Date.now() - r > D) {
						clearInterval(o);
						return
					}
					if (b && b.isConnected) return;
					const t = document.querySelector(n);
					if (!t) return;
					try {
						t.insertAdjacentElement("afterend", b)
					} catch (e) {}
				} catch (j) {}
			}, R);
			try {
				if (window.__rem_registerInterval) window.__rem_registerInterval(o, "MemeInfo reattach poll", "meme")
			} catch (j) {}
			const e = setTimeout(() => {
				try {
					clearInterval(o)
				} catch (j) {}
			}, D + 50);
			try {
				if (window.__rem_registerTimeout) window.__rem_registerTimeout(e, "MemeInfo reattach stop", "meme")
			} catch (j) {}
		})();
		window.__rem_registerResource && window.__rem_registerResource("meme", {
			type: "component",
			element: b,
			description: "Meme info container"
		})
	} catch (c) {
		console.error(c)
	} finally {
		le = false
	}
}
let de = false;
async function me() {
	try {
		const r = document.getElementById("twitter-info-container");
		if (r) r.remove();
		let e = document.querySelector('.flex.flex-col.flex-1.min-w-0 > .flex.items-center > .flex.items-center.gap-x-10px .flex.text-text-200 a[href^="https://x.com/"]');
		if (!e) {
			try {
				e = await B('.flex.flex-col.flex-1.min-w-0 > .flex.items-center > .flex.items-center.gap-x-10px .flex.text-text-200 a[href^="https://x.com/"]', 3e3)
			} catch (n) {
				return
			}
		}
		const i = document.querySelector(F);
		try {
			await B(F, 3e3)
		} catch (n) {
			return
		}
		if (document.getElementById("twitter-info-container")) return;
		const c = document.createElement("div");
		c.id = "twitter-info-container";
		c.style.borderRadius = "4px";
		const s = document.createElement("div");
		s.innerHTML = `
      <div class="flex items-center justify-between text-base font-medium text-text-100">
        <div style="padding-left:12px;" class="flex items-center gap-[4px]">Twitter Feed
          <div class="cursor-pointer text-text-300 transform rotate-0">
            <svg width="14px" height="14px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M14.2032 6.11606C14.4765 5.84269 14.4766 5.39917 14.2032 5.12583C13.9299 4.85257 13.4863 4.85257 13.213 5.12583L8.00009 10.3387L2.7872 5.12583C2.51382 4.8527 2.07025 4.85254 1.79697 5.12583C1.52376 5.39912 1.52387 5.8427 1.79697 6.11606L7.50498 11.8241C7.77832 12.0974 8.22184 12.0974 8.49521 11.8241L14.2032 6.11606Z">
              </path>
            </svg>
          </div>
        </div>
      </div>`;
		window.__rem_registerResource && window.__rem_registerResource("meme", {
			type: "component",
			element: c,
			description: "Meme info container"
		});
		s.style.display = "flex";
		s.style.justifyContent = "space-between";
		s.style.alignItems = "center";
		const a = document.createElement("div");
		a.style.padding = "6px";
		a.style.paddingTop = "12px";
		a.style.paddingLeft = "4px";
		a.style.display = "none";
		c.appendChild(s);
		c.appendChild(a);
		if (e) {
			const u = new URL(e.href);
			const d = u.pathname.replace("/", "");
			if (!d) return;
			const m = document.createElement("iframe");
			m.src = `https://nitter.net/${d}`;
			m.width = "100%";
			m.height = "600";
			m.id = "iframe-twitter-feed";
			m.className = "remastered-twitter-feed-body";
			m.style.border = "none";
			m.style.maxHeight = "1600px";
			m.style.opacity = "1";
			m.style.transition = "max-height 0.5s, opacity 0.5s";
			m.style.overflow = "hidden";
			m.style.display = "block";
			const f = document.createElement("div");
			f.className = "remastered-twitter-feed fade-mask-container";
			f.appendChild(m);
			a.appendChild(f)
		}
		const l = s.querySelector(".rotate-0");

		function t() {
			de = !de;
			if (de) {
				a.style.display = "block";
				if (l) {
					l.classList.remove("rotate-0");
					l.classList.add("rotate-180")
				}
			} else {
				a.style.display = "none";
				if (l) {
					l.classList.remove("rotate-180");
					l.classList.add("rotate-0")
				}
			}
		}
		window.__rem_registerListener && window.__rem_registerListener(s, "click", t, false, "Twitter container toggle handler", "meme");
		try {
			const p = document.getElementById("meme-info-container");
			if (!p) {
				return
			}
			p.insertAdjacentElement("afterend", c)
		} catch (o) {
			return
		}(() => {
			const e = F;
			const t = Date.now();
			const n = setInterval(() => {
				try {
					if (Date.now() - t > D) {
						clearInterval(n);
						return
					}
					if (c && c.isConnected) return;
					const e = document.getElementById("meme-info-container");
					if (!e) return;
					try {
						e.insertAdjacentElement("afterend", c)
					} catch (o) {}
				} catch (j) {}
			}, R);
			try {
				if (window.__rem_registerInterval) window.__rem_registerInterval(n, "Twitter reattach poll", "meme")
			} catch (j) {}
			const r = setTimeout(() => {
				try {
					clearInterval(n)
				} catch (j) {}
			}, D + 50);
			try {
				if (window.__rem_registerTimeout) window.__rem_registerTimeout(r, "Twitter reattach stop", "meme")
			} catch (j) {}
		})()
	} catch (n) {
		console.error("Twitter container error:", n)
	}
}
const fe = "axiom-chart-mirror";
let f = null;
const pe = "rem-mirror-cards";
let p = null;
let he = null;
const ye = 2;
const we = 560;
const _e = .92;
const ge = 2e3;

function be() {
	let n = document.getElementById(pe);
	if (n) return n;
	n = document.createElement("div");
	n.id = pe;
	const e = document.createElement("div");
	e.className = "rem-mirror-header";
	e.style.cssText = "display:flex; align-items:center; justify-content:flex-end; gap:6px; padding:4px;";
	n.appendChild(e);
	const t = document.createElement("div");
	t.id = "rem-mirror-cards-wrapper";
	t.style.cssText = "display:flex; gap:14px; align-items:flex-end;";
	n.appendChild(t);
	n.cardArea = t;
	const r = localStorage.getItem("rem_mirror_collapsed") === "1";
	if (r) n.classList.add("collapsed");
	const o = document.createElement("button");
	o.className = "rem-mirror-handle";
	o.type = "button";
	o.textContent = r ? "▶" : "◀";
	o.addEventListener("click", e => {
		e.stopPropagation();
		const t = n.classList.toggle("collapsed");
		o.textContent = t ? "▶" : "◀";
		localStorage.setItem("rem_mirror_collapsed", t ? "1" : "0")
	}, {
		passive: true
	});
	document.body.appendChild(n);
	document.body.appendChild(o);
	window.__rem_registerComponent && window.__rem_registerComponent(n, "mirror watch container", "global");
	window.__rem_registerComponent && window.__rem_registerComponent(o, "mirror watch handle", "global");
	if (window.__rem_mirror_cards && window.__rem_mirror_cards.size > 0) {
		const t = n.cardArea || n;
		for (const [i, c] of window.__rem_mirror_cards) {
			if (c.cardEl && !c.cardEl.isConnected) {
				t.appendChild(c.cardEl)
			}
		}
	}
	return n
}

function h(e) {
	return new Promise(n => {
		try {
			chrome.runtime.sendMessage(e, e => {
				if (chrome.runtime.lastError) {
					const t = chrome.runtime.lastError.message;
					if (t.includes("port closed") || t.includes("receiving end")) {
						n({
							ok: false,
							error: "port_closed"
						})
					} else {
						n({
							ok: false,
							error: t
						})
					}
				} else {
					n(e || {
						ok: false,
						error: "no response"
					})
				}
			})
		} catch (j) {
			n({
				ok: false,
				error: j?.message || String(j)
			})
		}
	})
}

function ve() {
	return location.pathname.replace(/[^\w-]/g, "_")
}

function ke(e) {
	if (!e || typeof e !== "string") return {
		value: null,
		match: null
	};
	const t = e.split("|")[0] || "";
	const n = t.match(/\$[0-9]{1,3}(?:[0-9,]*)(?:\.[0-9]+)?\s*[KMBkmb]?/);
	if (!n) return {
		value: null,
		match: null
	};
	const r = n[0].trim();
	const o = r.match(/\$([0-9,.]+)\s*([KMBkmb]?)/);
	if (!o) return {
		value: null,
		match: r
	};
	let i = parseFloat(o[1].replace(/,/g, ""));
	const c = (o[2] || "").toUpperCase();
	if (c === "K") i *= 1e3;
	else if (c === "M") i *= 1e6;
	else if (c === "B") i *= 1e9;
	return {
		value: Number.isFinite(i) ? Math.round(i) : null,
		match: r
	}
}

function xe(e) {
	const {
		value: t,
		match: n
	} = ke(e || "");
	if (!n) return Ce(e || "");
	const r = Ee(t);
	const o = Ce(e || "");
	const i = Ce(n);
	const c = o.replace(i, `<span class="rem-mirror-mcap" style="color:${r};">${i}</span>`);
	return c
}

function Ce(e) {
	return String(e || "").replace(/[&<>"']/g, e => ({
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#39;"
	})[e])
}

function Ee(e) {
	if (e == null) return "#e6eef8";
	if (e < 3e4) return "#52c5ff";
	if (e < 15e4) return "#dcc13c";
	return "#2fe3ac"
}

function Le(e) {
	try {
		const t = (document.title || "").trim();
		if (t && t.toLowerCase() !== "axiom" && t.length > 3) {
			return t.split("| Axiom")[0].trim()
		}
		const n = ["span.text-textPrimary.font-medium > span:nth-child(1) > .min-w-0.whitespace-nowrap.overflow-hidden.truncate", 'div:has(.ri-file-list-line) > span a[href^="https://solscan.io/"]'];
		for (const r of n) {
			try {
				const o = document.querySelector(r);
				if (o) {
					const i = (o.textContent || "").trim();
					if (i) return i
				}
			} catch (j) {}
		}
	} catch (j) {}
	return e
}
let w = null;
let _ = false;
let g = null;
let Se = 0;
async function Ae(e, t = {}) {
	return h({
		type: "registerStream",
		streamId: e,
		meta: t
	})
}
async function Ie(e, n, r) {
	return new Promise(t => {
		try {
			chrome.runtime.sendMessage({
				type: "registerStream",
				streamId: e,
				meta: n,
				lastFrame: r || null
			}, e => {
				t(e)
			})
		} catch (j) {
			t({
				ok: false,
				error: String(j)
			})
		}
	})
}
let Te = 0;
const Me = 1e3;

function qe(e, t) {
	const n = Date.now();
	if (n - Te < Me) return;
	Te = n;
	try {
		chrome.runtime.sendMessage({
			type: "updateStreamFrame",
			streamId: e,
			lastFrame: t
		}, e => {})
	} catch (j) {}
}
async function Fe(e) {
	return h({
		type: "unregisterStream",
		streamId: e
	})
}
async function De() {
	return h({
		type: "queryStream"
	})
}

function Re(e) {
	const t = document.createElement("div");
	t.className = "rem-mirror-toast";
	t.textContent = e;
	document.body.appendChild(t);
	requestAnimationFrame(() => t.style.opacity = "1");
	setTimeout(() => {
		t.style.opacity = "0";
		setTimeout(() => t.remove(), 250)
	}, 2500)
}
async function Ne() {
	const e = document.querySelector('iframe[id^="tradingview_"]');
	if (!e) return {
		ok: false,
		error: "no iframe"
	};
	let t;
	try {
		t = e.contentDocument
	} catch (d) {
		return {
			ok: false,
			error: "iframe_cross_origin"
		}
	}
	const i = t?.querySelector(".chart-gui-wrapper canvas");
	if (!i) return {
		ok: false,
		error: "no canvas"
	};
	w = ve();
	const n = await h({
		type: "checkStream",
		streamId: w
	});
	if (n && n.ok && n.exists) {
		const m = n.tabId || null;
		Re("This coin is already being mirrored from another tab.");
		return {
			ok: false,
			error: "already registered",
			ownerTab: m
		}
	}
	const r = Le(w);
	const c = {
		title: r,
		url: location.href
	};
	const o = await Ae(w, c);
	if (!o.ok) return {
		ok: false,
		error: o.error || "register failed"
	};
	try {
		v(w, c)
	} catch (j) {
		console.warn("makeCardForStream failed", j)
	}
	P && P({
		type: "enableDebugger"
	});
	he = c.title || "";
	p = setInterval(() => {
		try {
			const e = (document.title || "").trim();
			const t = e && e.toLowerCase() !== "axiom" ? e.split("| Axiom")[0].trim() : Le(w);
			if (t !== he) {
				he = t;
				c.title = t;
				try {
					f.postMessage({
						type: "meta",
						streamId: w,
						meta: c
					})
				} catch (j) {}
				h({
					type: "updateStreamMeta",
					streamId: w,
					meta: c
				})["catch"](() => {})
			}
		} catch (j) {}
	}, ge);
	try {
		window.__rem_registerInterval(p, "[MEME] Mirror title watcher", "meme")
	} catch (j) {}
	_ = true;
	Se = 0;
	const s = document.createElement("canvas");
	const a = s.getContext("2d");
	const l = Math.round(1e3 / ye);
	const u = async () => {
		if (!_) return;
		try {
			const e = i.width;
			const t = i.height;
			if (e <= 0 || t <= 0) return;
			let r = e;
			let o = t;
			if (e > we) {
				r = we;
				o = Math.round(we / e * t)
			}
			if (r <= 0 || o <= 0) return;
			const n = Math.max(1, window.devicePixelRatio || 1);
			s.width = Math.round(r * n);
			s.height = Math.round(o * n);
			a.setTransform(n, 0, 0, n, 0, 0);
			a.clearRect(0, 0, r, o);
			a.drawImage(i, 0, 0, r, o);
			a.setTransform(1, 0, 0, 1, 0, 0);
			s.toBlob(async e => {
				if (!e) return;
				try {
					const t = await e.arrayBuffer();
					try {
						f.postMessage({
							type: "frame",
							streamId: w,
							meta: c,
							buf: t,
							w: r,
							h: o,
							ts: Date.now(),
							frame: Se++
						}, [t])
					} catch (d) {
						console.warn("publish post error", d)
					}
					const n = new FileReader;
					n.onload = function () {
						try {
							const e = n.result;
							const t = Date.now();
							try {
								v(w, c);
								k(w, c, e, r, o, t)
							} catch (j) {
								console.warn("local updateCardWithFrame failed", j)
							}
							qe(w, e)
						} catch (j) {
							console.warn("reader.onload inner err", j)
						}
					};
					n.onerror = function (e) {
						console.warn("FileReader error", e)
					};
					n.readAsDataURL(e)
				} catch (d) {
					console.warn("publish capture error", d)
				}
			}, "image/webp", _e)
		} catch (d) {
			console.warn("publish capture error", d)
		}
	};
	g = setInterval(u, l);
	try {
		window.__rem_registerInterval(g, "[MEME] Mirror publish interval", "meme")
	} catch (j) {}
	window.dispatchEvent(new CustomEvent("rem:mirrorStarted", {
		detail: {
			streamId: w
		}
	}));
	return {
		ok: true,
		streamId: w
	}
}
async function Pe() {
	if (!_) return {
		ok: false,
		error: "not publishing"
	};
	_ = false;
	if (g) {
		clearInterval(g);
		g = null
	}
	if (p) {
		clearInterval(p);
		p = null
	}
	if (w) {
		try {
			f.postMessage({
				type: "end",
				streamId: w
			})
		} catch (j) {}
	}
	if (w) await Fe(w);
	w = null;
	Se = 0;
	P && P({
		type: "disableDebugger"
	});
	window.dispatchEvent(new CustomEvent("rem:mirrorStopped"));
	return {
		ok: true
	}
}
chrome.runtime.onMessage.addListener((e, t, n) => {
	if (!e || !e.type) return;
	try {
		switch (e.type) {
		case "bg-stopStream":
			if (e.streamId === w) {
				Pe();
				n({
					ok: true
				})
			} else {
				n({
					ok: false,
					error: "stream mismatch"
				})
			}
			return true;
		case "bg-clearAllStreams":
			if (_) Pe();
			n({
				ok: true
			});
			return true;
		case "streamEnded":
			Be(e.streamId);
			n({
				ok: true
			});
			return true;
		case "streamOrder":
			Ue(e.order);
			n({
				ok: true
			});
			return true;
		case "streamRegistered":
			v(e.streamId, e.meta || {});
			if (e.lastFrame) k(e.streamId, e.lastFrame);
			n({
				ok: true
			});
			return true;
		case "streamFrameUpdated":
			if (e.lastFrame) k(e.streamId, e.lastFrame);
			n({
				ok: true
			});
			return true;
		default:
			return
		}
	} catch (r) {
		console.warn("bg message handler error", r);
		n({
			ok: false,
			error: r.message
		})
	}
});
if (!window.__rem_mirror_initialized) {
	window.__rem_mirror_initialized = true;
	window.__rem_mirror_cards = new Map;
	We()
}
const b = window.__rem_mirror_cards;

function v(n, e) {
	if (!n) return null;
	if (b.has(n)) return b.get(n);
	const t = {
		cardEl: null,
		imgEl: null,
		titleEl: null,
		lastUrl: null,
		lastTs: 0,
		destroy() {}
	};
	b.set(n, t);
	const r = be();
	const o = r.cardArea || r;
	const i = document.createElement("div");
	i.className = "rem-mirror-card";
	i.dataset.streamId = n;
	const c = document.createElement("button");
	c.className = "rem-mirror-btn-kill";
	c.textContent = "✕";
	c.title = "Stop and close mirror";
	const s = document.createElement("div");
	s.className = "rem-mirror-title";
	const a = e?.title || n;
	s.innerHTML = xe(a);
	const l = document.createElement("img");
	l.style.cssText = "position:absolute; inset:0; width:100%; height:100%; display:block;";
	i.appendChild(l);
	i.appendChild(s);
	i.appendChild(c);
	o.appendChild(i);
	window.__rem_registerComponent && window.__rem_registerComponent(i, `mirror-card: ${n}`, "global");
	const u = {
		cardEl: i,
		imgEl: l,
		titleEl: s,
		lastUrl: null,
		lastTs: 0,
		destroy: () => {
			try {
				const e = b.get(n);
				if (e && e.lastUrl && e.lastUrl.startsWith("blob:")) {
					try {
						URL.revokeObjectURL(e.lastUrl)
					} catch (j) {}
					e.lastUrl = null
				}
				i.remove()
			} catch (j) {}
		}
	};
	b.set(n, u);
	c.onclick = e => {
		e.stopPropagation();
		chrome.runtime.sendMessage({
			type: "stopAndClose",
			streamId: n
		}, e => {
			if (chrome.runtime.lastError) {
				return
			}
			if (!e || !e.ok) console.warn("stopAndClose failed", e)
		});
		try {
			i.remove()
		} catch (j) {}
		const t = b.get(n);
		if (t && t.lastUrl && t.lastUrl.startsWith("blob:")) try {
			URL.revokeObjectURL(t.lastUrl)
		} catch (j) {}
		b["delete"](n)
	};
	i.onclick = e => {
		if (e.target === c) return;
		h({
			type: "focusStreamTab",
			streamId: n
		}).then(e => {
			if (!e || !e.ok) console.warn("focusStreamTab failed", e)
		})["catch"](() => {})
	};
	return u
}

function k(e, t, n, r, o, i, c) {
	let s = b.get(e);
	if (!s) s = v(e, t || {});
	if (!s) return;
	const a = Number.isFinite(i) ? Number(i) : Date.now();
	if (s.lastTs && a < s.lastTs) return;
	let l = null;
	let u = null;
	if (!n) return;
	if (typeof n === "string" && n.startsWith("data:")) {
		l = n
	} else if (n instanceof Blob) {
		u = URL.createObjectURL(n);
		l = u
	} else if (ArrayBuffer.isView(n) || n instanceof ArrayBuffer) {
		const h = new Blob([n], {
			type: "image/webp"
		});
		u = URL.createObjectURL(h);
		l = u
	} else if (n && n.lastFrame) {
		l = n.lastFrame
	} else {
		return
	}
	if (!l) {
		if (u) try {
			URL.revokeObjectURL(u)
		} catch (j) {}
		return
	}
	if (s.lastUrl === l && s.lastTs === a) {
		if (u) try {
			URL.revokeObjectURL(u)
		} catch (j) {}
		return
	}
	const d = s.lastUrl && s.lastUrl.startsWith("blob:") ? s.lastUrl : null;
	const m = s.imgEl;
	if (!m) {
		s.lastUrl = l;
		s.lastTs = a;
		return
	}
	m.style.transition = "opacity .18s ease";
	m.style.opacity = "0";
	const f = () => {
		try {
			m.style.opacity = "1";
			if (d) {
				try {
					URL.revokeObjectURL(d)
				} catch (j) {}
			}
			s.lastUrl = l;
			s.lastTs = a
		} finally {
			m.removeEventListener("load", f);
			m.removeEventListener("error", p)
		}
	};
	const p = () => {
		try {
			if (u) {
				try {
					URL.revokeObjectURL(u)
				} catch (j) {}
			}
			m.style.opacity = "1"
		} finally {
			m.removeEventListener("load", f);
			m.removeEventListener("error", p)
		}
	};
	m.addEventListener("load", f);
	m.addEventListener("error", p);
	m.src = l;
	if (t && t.title && s.titleEl) {
		s.titleEl.innerHTML = xe(t.title || e)
	}
}

function Ue(e) {
	try {
		const t = be();
		const n = t.cardArea || t;
		if (!Array.isArray(e) || !n) return;
		const r = new Map;
		for (const o of Array.from(n.children)) {
			const i = o.dataset?.streamId;
			if (i) r.set(i, o)
		}
		for (const i of e) {
			const c = r.get(i);
			if (c) n.appendChild(c);
			r["delete"](i)
		}
		for (const c of r.values()) n.appendChild(c)
	} catch (j) {}
}

function Oe(e) {
	if (!Array.isArray(e)) return;
	try {
		const t = be();
		for (const n of e) {
			const r = b.get(n);
			if (r && r.cardEl && t) {
				t.appendChild(r.cardEl)
			}
		}
	} catch (j) {}
}

function Be(e) {
	const t = b.get(e);
	if (!t) return;
	t.status && (t.status.textContent = "ended");
	setTimeout(() => {
		try {
			if (t.lastUrl) try {
				URL.revokeObjectURL(t.lastUrl)
			} catch (j) {}
			t.lastUrl = null;
			t.destroy()
		} catch (j) {}
		b["delete"](e)
	}, 1e3)
}
async function je() {
	try {
		const e = await h({
			type: "getAllStreams"
		});
		if (e && e.ok && e.streams) {
			for (const [t, n] of e.streams) {
				if (!b.has(t)) {
					v(t, n.meta || {})
				}
			}
		}
	} catch (j) {}
}

function He() {
	if (!f) {
		f = new BroadcastChannel(fe)
	}
	return f
}

function We() {
	const e = He();
	e.onmessage = e => {
		const t = e.data;
		if (!t || !t.type) return;
		if (t.type === "order" && Array.isArray(t.order)) {
			Ue(t.order);
			return
		}
		if (t.type === "frame") {
			const {
				streamId: n,
				meta: r,
				buf: o,
				w: i,
				h: c,
				ts: s,
				frame: a
			} = t;
			if (!n || !o) return;
			k(n, r, o, i, c, s, a);
			return
		}
		if (t.type === "meta") {
			const {
				streamId: n,
				meta: r
			} = t;
			if (!n || !r) return;
			const l = b.get(n);
			if (l && l.titleEl) {
				l.titleEl.innerHTML = xe(r.title || n)
			}
			if (l) l.meta = r;
			return
		}
		if (t.type === "end") {
			Be(t.streamId);
			return
		}
	}
}

function ze() {
	try {
		chrome.runtime.sendMessage({
			type: "getActiveStreams"
		}, e => {
			if (!e || !e.ok) return;
			const t = e.streams || {};
			for (const n of Object.keys(t)) {
				const r = t[n];
				v(n, r.meta || {});
				if (r.lastFrame) k(n, r.meta || {}, r.lastFrame, null, null, r.ts || Date.now())
			}
		})
	} catch (j) {}
}
let Ve = false;
async function $e() {
	if (Ve) return;
	Ve = true;
	try {
		const t = document.querySelector(".rem-mirror-btn");
		if (t) {
			try {
				t.remove()
			} catch (j) {}
		}
		const o = ".flex.flex-col.flex-1.min-w-0.h-\\[calc\\(100vh\\+360px\\)\\].border-primaryStroke.border-r .sm\\:flex.hidden.flex-1 > .flex.flex-row.flex-1.border-b.border-primaryStroke.sm\\:border-b-0 > .flex.flex-row.flex-1";
		let e = document.querySelector(o);
		if (!e) {
			e = await B(o)["catch"](() => null)
		}
		if (!e) return null;
		const i = document.createElement("div");
		i.className = "rem-mirror-container rem-mirror-btn";
		i.innerHTML = `<span class="contents"><button type="button" class="group rem-mirror-ui-btn" style="width:24px;height:24px;border-radius:4px;"><div style="display:flex;align-items:center;justify-content:center;width:16px;height:16px;"><i class="ri-cast-fill"></i></div></button></span>`;
		i.title = "Start chart mirroring";
		e.insertBefore(i, e.firstChild);
		window.__rem_registerComponent && window.__rem_registerComponent(i, "mirror btn", "meme");
		const n = await De();
		if (n && n.ok && n.streamId) {
			i.classList.add("streaming");
			i.querySelector("button")?.setAttribute("disabled", "disabled");
			i.title = "Chart is already mirrored"
		}
		const r = async e => {
			try {
				e.stopPropagation?.();
				e.preventDefault?.();
				if (_) {
					await Pe();
					i.classList.remove("streaming");
					i.querySelector("button")?.removeAttribute("disabled");
					i.title = "Start chart mirroring"
				} else {
					const n = await Ne();
					if (!n.ok) {
						Re("This coin is already being mirrored from another tab.")
					} else {
						i.classList.add("streaming");
						i.title = "Stop chart mirroring"
					}
				}
			} catch (t) {
				console.error("Mirror error:", t)
			}
		};
		window.__rem_registerListener && window.__rem_registerListener(i, "click", r, false, "MirrorBtn click", "meme");
		(() => {
			const n = Date.now();
			const r = setInterval(() => {
				try {
					if (Date.now() - n > (typeof D === "number" ? D : 6e4)) {
						clearInterval(r);
						return
					}
					if (i && i.isConnected) return;
					const t = document.querySelector(o);
					if (!t) return;
					try {
						t.insertBefore(i, t.firstChild)
					} catch (e) {}
				} catch (j) {}
			}, typeof R === "number" ? R : 500);
			try {
				window.__rem_registerInterval(r, "[MEME] Mirror Btn reattach poll", "meme")
			} catch (j) {}
			const e = setTimeout(() => {
				try {
					clearInterval(r)
				} catch (j) {}
			}, (typeof D === "number" ? D : 6e4) + 50);
			try {
				window.__rem_registerTimeout(e, "[MEME] Mirror Btn reattach stop", "meme")
			} catch (j) {}
		})()
	} catch (j) {
		console.error(j)
	} finally {
		Ve = false
	}
}
window.addEventListener("beforeunload", () => {
	try {
		f.close()
	} catch (j) {}
});
async function Ke() {
	if (!window.__rem_pumpStreams) {
		window.__rem_pumpStreams = true;
		setTimeout(() => {
			chrome.runtime.sendMessage({
				type: "pumpLiveStreamConnect"
			})
		}, 1e3)
	}
}

function Ge() {
	if (window.livekitClient) return window.livekitClient;
	if (window.LiveKit) return window.LiveKit;
	if (window.livekit) return window.livekit;
	return null
}

function Qe(e) {
	if (!e) return [];
	try {
		if (typeof e.getTrackPublications === "function") return e.getTrackPublications() || []
	} catch (j) {}
	const t = [];
	try {
		if (e.videoTracks && typeof e.videoTracks.values === "function") {
			for (const n of e.videoTracks.values()) t.push(n)
		}
		if (e.audioTracks && typeof e.audioTracks.values === "function") {
			for (const r of e.audioTracks.values()) t.push(r)
		}
	} catch (j) {}
	try {
		if (e.tracks && typeof e.tracks.forEach === "function") e.tracks.forEach(e => t.push(e));
		if (e.trackPublications && typeof e.trackPublications.forEach === "function") e.trackPublications.forEach(e => t.push(e))
	} catch (j) {}
	return t
}

function Je() {
	try {
		const e = window.AudioContext || window.webkitAudioContext;
		if (!e) return null;
		window._pump_audio_ctx = window._pump_audio_ctx || new e;
		return window._pump_audio_ctx
	} catch (j) {
		return null
	}
}

function Ye(e) {
	try {
		if (!e) return false;
		const t = window._pump_audio_ctx || (window._pump_audio_ctx = (window.AudioContext || window.webkitAudioContext) && new(window.AudioContext || window.webkitAudioContext));
		if (!t) return false;
		const n = t.createMediaStreamSource(e);
		const r = t.createGain();
		r.gain.value = 1;
		n.connect(r);
		r.connect(t.destination);
		window._pump_audio_gains = window._pump_audio_gains || [];
		window._pump_audio_gains.push(r);
		window._pump_audio_sources = window._pump_audio_sources || [];
		window._pump_audio_sources.push(n);
		return true
	} catch (j) {
		console.warn("routeStreamToAudioContext failed", j);
		return false
	}
}

function Ze() {
	let e = document.getElementById("pump-playback-container");
	if (!e) {
		e = document.createElement("div");
		e.id = "pump-playback-container";
		Object.assign(e.style, {
			position: "relative",
			width: "100%",
			height: "100%",
			backgroundColor: "#000",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			overflow: "hidden"
		})
	} else {
		e.innerHTML = ""
	}
	return e
}
async function Xe(e) {
	try {
		const r = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
		if (!r) {
			if (e.requestFullscreen) await e.requestFullscreen();
			else if (e.webkitRequestFullscreen) await e.webkitRequestFullscreen();
			else if (e.mozRequestFullScreen) await e.mozRequestFullScreen();
			else if (e.msRequestFullscreen) await e.msRequestFullscreen()
		} else {
			if (document.exitFullscreen) await document.exitFullscreen();
			else if (document.webkitExitFullscreen) await document.webkitExitFullscreen();
			else if (document.mozCancelFullScreen) await document.mozCancelFullScreen();
			else if (document.msExitFullscreen) await document.msExitFullscreen()
		}
	} catch (t) {} finally {
		try {
			const o = e.classList && e.classList.contains("pump-playback-container") ? e : e.closest && e.closest("#pump-playback-container") || document.getElementById("pump-playback-container");
			if (o) {
				const i = o.querySelector(".pump-fs-btn");
				if (i) {
					const c = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
					i.innerHTML = c ? "⤡" : "⤢"
				}
			}
		} catch (n) {}
	}
}

function et(e, a) {
	if (!e || !a) return;
	a.classList.add("pump-playback");
	e.controls = false;
	e.setAttribute("data-controls-added", "1");
	e.style.background = "#000";
	e.style.display = "block";
	e.style.width = "100%";
	e.style.height = "100%";
	e.playsInline = true;
	let r = a.querySelector(".pump-min-controls");
	if (!r) {
		r = document.createElement("div");
		r.className = "pump-min-controls";
		Object.assign(r.style, {
			position: "absolute",
			right: "8px",
			bottom: "8px",
			display: "flex",
			gap: "8px",
			alignItems: "center"
		});
		a.appendChild(r);
		window.__rem_registerComponent && window.__rem_registerComponent(r, "video controls wrapper", "meme")
	}

	function t(e, t) {
		const n = document.createElement("button");
		n.innerHTML = e;
		n.title = t || "";
		n.type = "button";
		Object.assign(n.style, {
			background: "rgba(0,0,0,0.5)",
			border: "none",
			color: "#fff",
			width: "36px",
			height: "36px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			borderRadius: "6px",
			cursor: "pointer",
			fontSize: "16px",
			pointerEvents: "auto"
		});
		n.onfocus = () => n.style.outline = "2px solid rgba(255,255,255,0.6)";
		n.onblur = () => n.style.outline = "none";
		return n
	}
	let l = a.querySelector(".pump-mute-btn");
	if (!l) {
		l = t(e.muted ? "🔇" : "🔊");
		l.className = "pump-mute-btn";
		const u = e => {
			e.stopPropagation();
			try {
				const r = a || document.getElementById("pump-playback-container");
				const o = r ? r.querySelector("video, audio") : null;
				const i = o ? !!o.muted : false;
				const c = !i;
				if (r) {
					const s = r.querySelectorAll("video, audio");
					s.forEach(e => {
						try {
							e.muted = c
						} catch (t) {}
					})
				}
				if (window._pump_audio_gains && window._pump_audio_gains.length) {
					window._pump_audio_gains.forEach(e => {
						try {
							e.gain.value = c ? 0 : 1
						} catch (t) {}
					})
				}
				try {
					l.innerHTML = c ? "🔇" : "🔊"
				} catch (t) {}
			} catch (n) {
				console.warn(n)
			}
		};
		window.__rem_registerListener && window.__rem_registerListener(l, "click", u, false, "Mute button click", "meme");
		r.appendChild(l)
	} else {
		l.innerHTML = e.muted ? "🔇" : "🔊";
		l.style.pointerEvents = "auto"
	}
	let o = a.querySelector(".pump-fs-btn");
	if (!o) {
		o = t("⤢");
		o.className = "pump-fs-btn";
		const d = async e => {
			e.stopPropagation();
			try {
				const n = a;
				if (!document.fullscreenElement) {
					await (n.requestFullscreen ? n.requestFullscreen() : n.webkitRequestFullscreen && n.webkitRequestFullscreen());
					o.innerHTML = "⤡";
					r.classList.add("show")
				} else {
					await (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen());
					o.innerHTML = "⤢";
					setTimeout(() => r.classList.remove("show"), 500)
				}
			} catch (t) {}
		};
		window.__rem_registerListener && window.__rem_registerListener(o, "click", d, false, " [MEME] Fullscreen btn click", "meme");
		r.appendChild(o)
	} else {
		const m = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
		o.innerHTML = m ? "⤡" : "⤢";
		o.style.pointerEvents = "auto"
	}
	let n = null;

	function i(e = 3e3) {
		try {
			r.classList.add("show");
			if (n) clearTimeout(n);
			n = setTimeout(() => {
				r.classList.remove("show");
				n = null
			}, e);
			try {
				window.__rem_registerTimeout(n, "[MEME] Livestream toggle controls", "meme")
			} catch (j) {}
		} catch (j) {}
	}

	function c() {
		try {
			const e = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
			if (e && (e === a || a.contains(e))) {
				r.classList.add("show")
			} else {
				setTimeout(() => r.classList.remove("show"), 500)
			}
		} catch (j) {}
	}
	const s = e => {
		i(3e3)
	};
	if (!a.__pump_controls_bound) {
		window.__rem_registerListener && window.__rem_registerListener(a, "touchstart", s, {
			passive: true
		}, "Playback touchshow", "meme");
		window.__rem_registerListener && window.__rem_registerListener(document, "fullscreenchange", c, false, "fullscreenchange", "meme");
		window.__rem_registerListener && window.__rem_registerListener(document, "webkitfullscreenchange", c, false, "webkitfullscreenchange", "meme");
		window.__rem_registerListener && window.__rem_registerListener(document, "mozfullscreenchange", c, false, "mozfullscreenchange", "meme");
		window.__rem_registerListener && window.__rem_registerListener(document, "MSFullscreenChange", c, false, "MSFullscreenChange", "meme");
		a.__pump_controls_bound = true
	}
	r.classList.remove("show")
}

function x(s, a, l, u) {
	if (!s) return;
	try {
		let c;
		if (typeof s.attach === "function") {
			const t = s.kind === "video" ? document.createElement("video") : document.createElement("audio");
			t.playsInline = true;
			t.autoplay = true;
			t.muted = !!!l;
			t.style.display = "block";
			try {
				const r = s.attach(t);
				c = r || t;
				c.playsInline = true;
				c.autoplay = true;
				c.muted = !!!l
			} catch (e) {
				try {
					c = s.attach()
				} catch (j) {
					c = t
				}
			}
		} else {
			c = s.kind === "video" ? document.createElement("video") : document.createElement("audio");
			if (s.mediaStream) c.srcObject = s.mediaStream
		}
		if (!c) return;
		c.controls = false;
		c.playsInline = true;
		if (s.kind === "video") {
			c.muted = !!!l;
			c.width = 360;
			c.style.maxWidth = "100%";
			c.style.display = "block";
			const o = Ze();
			o.appendChild(c);
			et(c, o);
			const i = e => {
				try {
					e.stopPropagation();
					e.preventDefault();
					Xe(o)
				} catch (t) {}
			};
			if (!c.__pump_dbl_bound) {
				window.__rem_registerListener && window.__rem_registerListener(c, "dblclick", i, false, "Double click fullscreen", "meme");
				c.__pump_dbl_bound = true
			}
			const d = c.muted;
			try {
				if (!l) c.muted = true;
				const m = c.play && c.play();
				if (m && typeof m.then === "function") {
					m["catch"](e => {
						console.warn("Livestream: play() rejected", e);
						try {
							if (!c.muted) {
								c.muted = true;
								c.play && c.play()["catch"](() => {})
							}
						} catch (t) {}
					})
				}
			} catch (j) {}
			try {
				if (s && s.kind === "video" && c && c.tagName === "VIDEO") {
					if (!c.__pump_health_interval) {
						const f = 1500;
						const p = 3;
						let t = 0;
						let i = 0;
						const h = 1e4;
						async function n() {
							const e = Date.now();
							if (e - i < h) return;
							i = e;
							try {
								if (s && typeof s.detach === "function") {
									try {
										try {
											s.detach()
										} catch (t) {}
										try {
											s.attach(c)
										} catch (t) {}
										try {
											c.play && c.play()["catch"](() => {})
										} catch (t) {}
										return
									} catch (j) {}
								}
							} catch (j) {}
							try {
								if (u) {
									if (typeof u.setSubscribed === "function") {
										try {
											await u.setSubscribed(false);
											await new Promise(e => setTimeout(e, 200));
											await u.setSubscribed(true);
											return
										} catch (j) {}
									} else if (typeof u.subscribe === "function") {
										try {
											const n = await u.subscribe();
											if (n) {
												x(n, a, l, u);
												return
											}
										} catch (j) {}
									}
								}
							} catch (j) {}
							try {
								const r = window.__rem_pageToken;
								const o = window.__rem_wsUrl || undefined;
								await S();
								await new Promise(e => setTimeout(e, 500));
								if (r) {
									try {
										await at(r, o, {
											value: !!l
										})
									} catch (j) {}
								}
							} catch (j) {}
						}
						const y = () => {
							try {
								t = p
							} catch (e) {}
							try {
								n()
							} catch (e) {}
						};
						window.__rem_registerListener && window.__rem_registerListener(c, "error", y, false, "Livestream: error", "meme");
						window.__rem_registerListener && window.__rem_registerListener(c, "stalled", y, false, "Livestream: stalled", "meme");
						window.__rem_registerListener && window.__rem_registerListener(c, "suspend", y, false, "Livestream: suspend", "meme");
						window.__rem_registerListener && window.__rem_registerListener(c, "emptied", y, false, "Livestream: emptied", "meme");
						const w = setInterval(() => {
							try {
								const e = !!(c && c.videoWidth && c.videoHeight && c.readyState >= 2);
								if (!e) {
									t++
								} else {
									t = 0
								}
								if (t >= p) {
									t = 0;
									n()
								}
							} catch (j) {}
						}, f);
						try {
							window.__rem_registerInterval(w, "[MEME] Livestream health check poll", "meme")
						} catch (j) {}
						c.__pump_health_interval = w;
						c.__pump_health_listeners = {
							onErrorOrStall: y
						};
						c.__pump_last_reattach = 0
					}
				}
			} catch (j) {
				console.warn("Livestream: Health monitor setup failed", j)
			}
			return
		} else {
			c.muted = !!!l;
			c.style.display = "none";
			const o = Ze();
			o.appendChild(c);
			let e = s.mediaStream || c.srcObject || null;
			if (!e && typeof s.createStream === "function") {
				try {
					e = s.createStream()
				} catch (j) {
					e = null
				}
			}
			if (e && window._pump_audio_ctx) {
				const _ = Ye(e);
				if (_) return
			}
			try {
				c.muted = !l ? true : false;
				c.play && c.play()["catch"](() => {})
			} catch (j) {}
			return
		}
	} catch (j) {
		console.warn("attachTrack error", j)
	}
}
async function tt(e, t, n) {
	if (!e) return;
	try {
		if (e.track) {
			x(e.track, t, n, e);
			return
		}
		if (typeof e.setSubscribed === "function") {
			try {
				await e.setSubscribed(true);
				if (e.track) {
					x(e.track, t, n, e);
					return
				}
			} catch (j) {}
		}
		if (typeof e.subscribe === "function") {
			try {
				const r = await e.subscribe();
				if (r) {
					x(r, t, n, e);
					return
				}
			} catch (j) {}
		}
	} catch (j) {
		console.warn("ensureSubscribedAndAttach error", j)
	}
}
const nt = new Map;

function rt(e, t) {
	if (!e) return;
	const n = e.sid || e.identity || Math.random() + "";
	nt.set(n, e);
	const r = Qe(e);
	for (const o of r) tt(o, e, t)
}

function ot(e) {
	if (!e) return;
	const t = e.sid || e.identity;
	nt["delete"](t)
}

function it(e) {
	const t = new Set;
	if (!e) return [];
	try {
		if (e.participants && typeof e.participants.values === "function") {
			for (const n of e.participants.values()) t.add(n)
		}
	} catch (j) {}
	try {
		if (typeof e.getParticipants === "function") {
			const r = e.getParticipants();
			if (Array.isArray(r)) r.forEach(e => t.add(e))
		}
	} catch (j) {}
	try {
		for (const o of Object.keys(e)) {
			const i = e[o];
			if (!i) continue;
			if (Array.isArray(i)) {
				for (const c of i)
					if (c && (c.identity || c.sid)) t.add(c)
			} else if (typeof i.values === "function") {
				try {
					for (const c of i.values())
						if (c && (c.identity || c.sid)) t.add(c)
				} catch (j) {}
			}
		}
	} catch (j) {}
	for (const n of nt.values()) t.add(n);
	return Array.from(t)
}

function ct(e, t) {
	const n = it(e);
	for (const r of n) rt(r, t)
}

function st(e, r) {
	if (!e || typeof e.on !== "function") return;
	const t = e => rt(e, r.value);
	const n = e => ot(e);
	const o = (e, t) => tt(e, t, r.value);
	const i = (e, t, n) => x(e, n, r.value, t);
	e.on("participantConnected", t);
	try {
		window.__rem_registerResource && window.__rem_registerResource("meme", {
			type: "livekit-listener",
			instance: e,
			event: "participantConnected",
			handler: t,
			description: "LiveKit participantConnected"
		})
	} catch (j) {}
	e.on("participantDisconnected", n);
	try {
		window.__rem_registerResource && window.__rem_registerResource("meme", {
			type: "livekit-listener",
			instance: e,
			event: "participantDisconnected",
			handler: n,
			description: "LiveKit participantDisconnected"
		})
	} catch (j) {}
	e.on("trackPublished", o);
	try {
		window.__rem_registerResource && window.__rem_registerResource("meme", {
			type: "livekit-listener",
			instance: e,
			event: "trackPublished",
			handler: o,
			description: "LiveKit trackPublished"
		})
	} catch (j) {}
	e.on("trackSubscribed", i);
	try {
		window.__rem_registerResource && window.__rem_registerResource("meme", {
			type: "livekit-listener",
			instance: e,
			event: "trackSubscribed",
			handler: i,
			description: "LiveKit trackSubscribed"
		})
	} catch (j) {}
}
async function at(e, t = "wss://pump-prod-tg2x8veh.livekit.cloud", a = {
	value: false
}) {
	if (!e) return null;
	const n = Ge();
	if (!n) return null;
	async function r(e, t = 3e3) {
		const n = Date.now();
		while (Date.now() - n < t) {
			try {
				const r = it(e);
				for (const o of r) {
					const i = Qe(o);
					for (const c of i) {
						const s = c.track?.kind || c.kind || c.trackKind;
						if (s === "video" || c.track && c.track.kind === "video") {
							try {
								await tt(c, o, a.value)
							} catch (j) {}
							if (document.getElementById("pump-playback-container")?.querySelector("video")) return true
						}
					}
				}
			} catch (j) {}
			await new Promise(e => setTimeout(e, 200))
		}
		return false
	}
	let o = null;
	try {
		if (n.Room) {
			try {
				const i = n.Room;
				o = new i;
				if (typeof o.connect === "function") {
					await o.connect(t, e)
				} else if (typeof n.connect === "function") {
					o = await n.connect(t, e)
				}
			} catch (j) {
				o = null
			}
		}
	} catch (j) {}
	if (!o && typeof n.connect === "function") {
		try {
			o = await n.connect(t, e)
		} catch (j) {
			o = null
		}
	}
	if (!o && typeof window.connect === "function") {
		try {
			o = await window.connect(t, e)
		} catch (j) {
			o = null
		}
	}
	if (!o) return null;
	st(o, a);
	ct(o, a.value);
	try {
		await r(o, 3e3)
	} catch (j) {}
	window._pump_room = o;
	try {
		if (window.__rem_registerResource) {
			window.__rem_registerResource("meme", {
				type: "livekit",
				instance: o,
				description: "LiveKit room"
			})
		}
	} catch (j) {}
	return o
}

function lt(r, e = 8e3) {
	return new Promise(t => {
		let n = false;
		(async () => {
			const e = await P({
				type: "fetch-thumbnail",
				mintId: r
			});
			if (n) return;
			n = true;
			if (e && e.ok) t(e.data);
			else t(null)
		})();
		setTimeout(() => {
			if (!n) {
				n = true;
				t(null)
			}
		}, e)
	})
}

function ut(e, o = 1e4) {
	return new Promise(t => {
		let n = false;

		function r(e) {
			if (e && e.type === "token") {
				chrome.runtime.onMessage.removeListener(r);
				n = true;
				if (e.token) t({
					ok: true,
					token: e.token,
					wsUrl: e.wsUrl
				});
				else t({
					ok: false,
					error: e.error || "No token"
				})
			}
		}
		chrome.runtime.onMessage.addListener(r);
		P({
			type: "fetchTokenForMint",
			mintId: e
		});
		setTimeout(() => {
			if (!n) {
				chrome.runtime.onMessage.removeListener(r);
				t({
					ok: false,
					error: "Timeout"
				})
			}
		}, o)
	})
}

function dt() {
	try {
		const e = window.AudioContext || window.webkitAudioContext;
		if (e) {
			window._pump_audio_ctx = window._pump_audio_ctx || new e;
			window._pump_audio_ctx.resume && window._pump_audio_ctx.resume()["catch"](() => {})
		}
	} catch (j) {}
}
async function S(e) {
	try {
		try {
			const o = window._pump_room;
			if (o) {
				if (typeof o.disconnect === "function") {
					try {
						await o.disconnect()["catch"](() => {})
					} catch (j) {}
				}
				if (typeof o.leave === "function") {
					try {
						await o.leave()["catch"](() => {})
					} catch (j) {}
				}
				window._pump_room = null
			}
		} catch (j) {
			console.warn("Livestream: error disconnecting room", j)
		}
		const n = document.getElementById("pump-playback-container");
		if (n) {
			try {
				const i = n.querySelectorAll("video, audio");
				i.forEach(e => {
					try {
						if (typeof e.pause === "function") e.pause();
						try {
							e.srcObject = null
						} catch (t) {}
						try {
							e.removeAttribute && e.removeAttribute("src")
						} catch (t) {}
						try {
							if (typeof e.load === "function") e.load()
						} catch (t) {}
					} catch (n) {}
					try {
						if (e.__pump_health_interval) {
							try {
								clearInterval(e.__pump_health_interval)
							} catch (t) {}
							e.__pump_health_interval = null
						}
						if (e.__pump_health_listeners && e.__pump_health_listeners.onErrorOrStall) {
							try {
								e.removeEventListener("error", e.__pump_health_listeners.onErrorOrStall);
								e.removeEventListener("stalled", e.__pump_health_listeners.onErrorOrStall);
								e.removeEventListener("suspend", e.__pump_health_listeners.onErrorOrStall);
								e.removeEventListener("emptied", e.__pump_health_listeners.onErrorOrStall)
							} catch (t) {}
							e.__pump_health_listeners = null
						}
					} catch (j) {}
				})
			} catch (j) {}
		}
		if (n && n.parentNode) {
			n.parentNode.removeChild(n)
		}
		const r = document.getElementById("pump-thumb-wrapper");
		if (r) {
			try {
				r.innerHTML = "";
				const c = document.createElement("div");
				c.style.width = "100%";
				c.style.height = "100%";
				c.style.background = "#000";
				r.appendChild(c)
			} catch (j) {}
		}
		try {
			if (Array.isArray(window._pump_audio_gains)) {
				window._pump_audio_gains.forEach(e => {
					try {
						e.disconnect && e.disconnect()
					} catch (t) {}
				});
				window._pump_audio_gains = []
			}
			if (Array.isArray(window._pump_audio_sources)) {
				window._pump_audio_sources.forEach(e => {
					try {
						e.disconnect && e.disconnect()
					} catch (t) {}
				});
				window._pump_audio_sources = []
			}
		} catch (j) {}
		try {
			if (window._pump_audio_ctx) {
				try {
					window._pump_audio_ctx.close && await window._pump_audio_ctx.close()["catch"](() => {})
				} catch (j) {}
				window._pump_audio_ctx = null
			}
		} catch (j) {}
	} catch (t) {
		console.warn("cleanupPlayback error", t)
	}
}

function mt(e = document) {
	if (!e) return null;
	const t = e.querySelector("#GlobalScrollDomId") || e;
	const n = Array.from(t.querySelectorAll("*")).find(e => {
		const t = (e.textContent || "").trim();
		return t && t.toUpperCase() === "LIVE"
	});
	return n ? "LIVE" : null
}

function ft(o, {
	timeout: i = 5e3,
	interval: c = 120
} = {}) {
	return new Promise(t => {
		if (!o) return t(null);
		const n = Date.now();
		const r = () => {
			const e = mt(o);
			if (e) return t(e);
			if (Date.now() - n >= i) return t(null);
			setTimeout(r, c)
		};
		r()
	})
}
let A = false;
async function pt() {
	const o = window.__rem_pageToken;

	function t() {
		return o !== window.__rem_pageToken
	}
	if (t()) return;
	if (A) return;
	A = true;
	try {
		const s = document.getElementById("pump-video-container");
		if (s) {
			try {
				s.remove()
			} catch (j) {}
		} else {}
		const l = "#meme-info-container";
		let e;
		try {
			e = await B(l)
		} catch (j) {
			e = document.querySelector(l)
		}
		if (t()) {
			A = false;
			return
		}
		const u = await B("#GlobalScrollDomId");
		const p = 5e3;
		const h = await ft(u, {
			timeout: p,
			interval: 120
		});
		if (!h) {
			console.log("[pump] no LIVE text found within", p, "ms — not creating stream container");
			A = false;
			return
		}
		const y = document.createElement("div");
		y.id = "pump-video-container";
		y.className = "flex flex-col border-primaryStroke border-b rounded-lg overflow-hidden";
		window.__rem_registerComponent && window.__rem_registerComponent(y, "Video container", "meme");

		function n() {
			try {
				y.classList.add("pump-video-hidden")
			} catch (j) {}
		}

		function d() {
			try {
				y.classList.remove("pump-video-hidden")
			} catch (j) {}
		}
		const w = document.createElement("div");
		w.className = "pump-toggle-header";
		w.style.position = "relative";
		w.innerHTML = `
      <div class="flex flex-row pl-[8px] px-[16px] pt-[4px] gap-[16px] h-[36px]">
        <button class="group/dropdown w-fit flex flex-row hover:bg-primaryStroke/50 text-textSecondary text-[14px] font-medium h-[28px] pl-[8px] pr-[4px] justify-start items-center rounded-[4px] transition-all duration-125 ease-in-out">
          <span class="flex group-hover/dropdown:text-textPrimary transition-all duration-125 ease-in-out items-center gap-1 tracking-[-0.02em]">Livestream</span>
        </button>
      </div>
    `;
		const _ = document.createElement("button");
		_.type = "button";
		_.title = "Retry livestream";
		_.className = "pump-retry-btn";
		_.innerHTML = "↻";
		Object.assign(_.style, {
			position: "absolute",
			right: "8px",
			top: "8px",
			width: "32px",
			height: "32px",
			borderRadius: "6px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			background: "transparent",
			border: "none",
			color: "#9ca3af",
			cursor: "pointer"
		});
		_.onmouseenter = () => _.style.color = "#fff";
		_.onmouseleave = () => _.style.color = "#9ca3af";
		w.appendChild(_);
		window.__rem_registerComponent && window.__rem_registerComponent(_, "retry button", "meme");
		const g = document.createElement("div");
		g.style.position = "relative";
		g.style.padding = "0 16px 12px 16px";
		const b = document.createElement("div");
		b.style.position = "relative";
		b.style.width = "100%";
		b.style.aspectRatio = "16/9";
		b.style.background = "#000";
		b.id = "pump-thumb-wrapper";
		const v = document.createElement("div");
		v.id = "pump-thumb-placeholder";
		v.style.width = "100%";
		v.style.height = "100%";
		v.style.display = "flex";
		v.style.alignItems = "center";
		v.style.justifyContent = "center";
		v.style.color = "#6b7280";
		v.style.fontSize = "13px";
		b.appendChild(v);
		const k = document.createElement("div");
		k.id = "pump-thumbnail-spinner";
		k.style.cssText = `
      position: absolute; right: 8px; top: 8px;
      width: 12px; height: 12px; border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.6); border-top-color: transparent;
      display: none; box-sizing: border-box;
    `;
		try {
			k.animate([{
				transform: "rotate(0deg)"
			}, {
				transform: "rotate(360deg)"
			}], {
				duration: 800,
				iterations: Infinity
			})
		} catch (j) {}
		b.appendChild(k);
		const x = document.createElement("div");
		x.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg>`;
		x.style.cssText = `
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      cursor: pointer;
      transition: background 0.2s ease;
      pointer-events: auto;
      z-index: 10;
    `;
		x.onmouseenter = () => x.style.background = "rgba(0,0,0,0.65)";
		x.onmouseleave = () => x.style.background = "rgba(0,0,0,0.45)";
		b.appendChild(x);
		g.appendChild(b);
		y.appendChild(w);
		y.appendChild(g);
		if (e && e.parentNode) {
			e.parentNode.insertBefore(y, e.nextSibling)
		}
		try {
			const L = m();
			if (!L) {
				n()
			} else {
				d()
			}
		} catch (j) {}

		function m() {
			try {
				const n = Array.from(document.querySelectorAll('a[href^="https://pump.fun/coin/"]'));
				for (const r of n) {
					try {
						const o = r.href || "";
						const i = r.closest(".progress-token");
						if (i) {
							const c = String(i.innerText || "").trim();
							console.log("[pump] tokenAncestor innerText:", c);
							if (c.toUpperCase().includes("LIVE")) {
								const s = o.split("/coin/");
								const a = s.length > 1 && s[1] ? s[1] : null;
								console.log("[pump] MATCH in .progress-token — returning id:", a);
								return a
							}
						} else {
							console.log("[pump] anchor has no .progress-token ancestor")
						}
						let e = r.parentElement;
						let t = 0;
						while (e && t < 3) {
							const l = String(e.innerText || "").trim();
							console.log("[pump] parent level", t, "text:", l);
							if (l.toUpperCase().includes("LIVE")) {
								const s = o.split("/coin/");
								const a = s.length > 1 && s[1] ? s[1] : null;
								console.log("[pump] MATCH in parent level", t, " — returning id:", a);
								return a
							}
							e = e.parentElement;
							t++
						}
					} catch (e) {}
				}
				try {
					const u = document.querySelector('#MainDomId .flex.flex-col.flex-1.min-w-0 .flex.items-center a[href^="https://pump.fun/coin/"]');
					console.log("[pump] fallback pairAnchor result:", u);
					if (u && u.href) {
						const s = (u.href || "").split("/coin/");
						const a = s.length > 1 && s[1] ? s[1] : false;
						console.log("[pump] returning fallback id:", a);
						return a
					}
				} catch (t) {}
				return false
			} catch (j) {
				return false
			}
		}
		async function f(e) {
			const t = await P({
				type: "fetch-thumbnail",
				mintId: e
			});
			if (!t.ok) {
				throw new Error(t.error || "Failed to fetch thumbnail")
			}
			return t.data
		}
		async function r(e) {
			const t = window.__rem_pageToken;

			function n() {
				return t !== window.__rem_pageToken
			}
			const c = e || m();
			if (!c || n()) return;
			if (window._pump_connecting) return;
			await S(c);
			if (k) k.style.display = "block";
			let r = null;
			try {
				r = await ut(c)
			} catch (o) {
				r = null
			} finally {
				if (k) k.style.display = "none"
			}
			if (n()) return;
			if (r && r.token) {
				await a(r.token, r.wsUrl);
				return
			}
			try {
				try {
					chrome.runtime.sendMessage({
						type: "forceFetchToken",
						mintId: c
					}, e => {})
				} catch (j) {}
				const s = 8e3;
				const i = await new Promise(n => {
					let r = false;
					const o = setTimeout(() => {
						if (!r) {
							r = true;
							window.removeEventListener("pumpTokenUpdated", i);
							n(null)
						}
					}, s);

					function i(e) {
						try {
							if (!e || !e.detail) return;
							const t = e.detail;
							if (t.mintId && String(t.mintId) === String(c) && t.token) {
								if (!r) {
									r = true;
									clearTimeout(o);
									window.removeEventListener("pumpTokenUpdated", i);
									n(t)
								}
							}
						} catch (j) {}
					}
					window.addEventListener("pumpTokenUpdated", i)
				});
				if (i && i.token) {
					await a(i.token, i.wsUrl);
					return
				}
			} catch (j) {}
			return
		}
		async function a(e, t) {
			if (!e) {
				console.log("[pump] no token, returning");
				return
			}
			if (window._pump_connecting) {
				console.log("[pump] _pump_connecting true, returning");
				return
			}
			window._pump_connecting = true;
			try {
				try {
					await S()["catch"](() => {})
				} catch (n) {}
				const o = Ze();
				if (b) {
					b.innerHTML = "";
					b.appendChild(o)
				}
				dt();
				await at(e, t || undefined, {
					value: true
				})
			} catch (r) {} finally {
				window._pump_connecting = false
			}
		}
		const C = async e => {
			try {
				e && e.preventDefault && e.preventDefault();
				e && e.stopPropagation && e.stopPropagation();
				if (x.getAttribute("data-activated") === "1") {
					return
				}
				if (window._pump_connecting) {
					return
				}
				x.setAttribute("data-activated", "1");
				try {
					const t = m();
					if (!t) return;
					await r(t)
				} catch (j) {} finally {
					const n = document.getElementById("pump-playback-container");
					if (!n) x.removeAttribute("data-activated");
					x.style.background = "rgba(0,0,0,0.45)"
				}
			} catch (j) {}
		};
		if (!x.__pump_overlay_bound) {
			x.__pump_overlay_bound = true;
			try {
				window.__rem_registerListener && window.__rem_registerListener(x, "click", C, {
					passive: false
				}, "Thumbnail overlay click", "meme")
			} catch (j) {}
		} else {}
		const E = async e => {
			try {
				e && e.preventDefault && e.preventDefault();
				e && e.stopPropagation && e.stopPropagation();
				if (_.getAttribute("data-busy") === "1") {
					return
				}
				_.setAttribute("data-busy", "1");
				_.style.transform = "rotate(20deg)";
				setTimeout(() => {
					_.style.transform = ""
				}, 160);
				try {
					await S()["catch"](() => {})
				} catch (t) {}
				const r = m ? m() : null;
				chrome.runtime.sendMessage({
					type: "forceFetchToken",
					mintId: r
				}, e => {
					if (chrome.runtime.lastError) {
						_.removeAttribute("data-busy");
						return
					}
				})
			} catch (n) {
				try {
					_.removeAttribute("data-busy")
				} catch (t) {}
			}
		};
		window.__rem_registerListener && window.__rem_registerListener(_, "click", E, false, "Retry click", "meme");

		function i(t) {
			try {
				if (!t || t.type !== "token") {
					return
				}
				const n = m ? m() : null;
				if (t.mintId && n && t.mintId !== n) {
					return
				}
				try {
					_.removeAttribute("data-busy")
				} catch (j) {}
				_.style.transform = "scale(1.08)";
				setTimeout(() => {
					_.style.transform = ""
				}, 200);
				window.dispatchEvent(new CustomEvent("pumpTokenUpdated", {
					detail: {
						token: t.token,
						mintId: t.mintId || n,
						wsUrl: t.wsUrl || null
					}
				}));
				if (t.token) {
					try {
						d()
					} catch (e) {}(async () => {
						try {
							await a(t.token, t.wsUrl || undefined)
						} catch (e) {}
					})()
				}
			} catch (j) {}
		}
		if (!y.__pump_token_handler) {
			y.__pump_token_handler = i;
			try {
				chrome.runtime.onMessage.addListener(y.__pump_token_handler);
				_.__pump_token_listener_bound = true
			} catch (j) {}
		} else {}
		window.__rem_registerResource && window.__rem_registerResource("meme", {
			type: "runtime-listener",
			handler: y.__pump_token_handler,
			description: "chrome.runtime onMessage for pump tokens"
		});
		(function c() {
			let a = 0;
			const t = 12;
			const n = 250;
			let l = null;

			function u() {
				return o !== window.__rem_pageToken
			}
			async function r() {
				if (u()) {
					clearInterval(l);
					return false
				}
				a++;
				try {
					const i = m();
					if (!i) {
						return false
					}
					if (u()) {
						return false
					}
					if (k) k.style.display = "block";
					let e;
					try {
						e = await f(i)["catch"](e => {
							throw e
						})
					} catch (t) {
						return false
					} finally {
						if (k) k.style.display = "none"
					}
					try {
						b.innerHTML = "";
						const c = document.createElement("img");
						const s = chrome.runtime.getURL("img/pump.jpg");
						try {
							c.src = e && e.thumbnail ? e.thumbnail : s
						} catch (j) {
							c.src = s
						}
						c.style.width = "100%";
						c.style.height = "100%";
						c.style.objectFit = "cover";
						c.addEventListener("error", () => {
							try {
								if (c.src !== s) {
									c.src = s
								}
							} catch (j) {}
						});
						b.appendChild(c)
					} catch (n) {}
					if (u()) {
						return false
					}
					try {
						d()
					} catch (r) {}
					try {
						b.appendChild(x);
						x.style.cursor = "pointer";
						if (!x.__pump_overlay_bound) {
							window.__rem_registerListener && window.__rem_registerListener(x, "click", C, {
								passive: false
							}, "thumbnail overlay click", "meme");
							x.__pump_overlay_bound = true
						}
					} catch (o) {}
					return true
				} catch (t) {
					if (k) k.style.display = "none";
					return false
				}
			}(async () => {
				const e = await r();
				if (e) return;
				l = setInterval(async () => {
					try {
						if (a >= t) {
							clearInterval(l);
							l = null;
							y.__pump_retry_interval = null;
							return
						}
						const e = await r();
						if (e) {
							if (l) {
								clearInterval(l);
								l = null;
								y.__pump_retry_interval = null
							}
						}
					} catch (j) {}
				}, n);
				try {
					window.__rem_registerInterval(l, "[MEME] Thumbnail retry poll", "meme")
				} catch (j) {
					console.warn("[pump] __rem_registerInterval threw", j)
				}
				y.__pump_retry_interval = l;
				setTimeout(() => {
					try {
						if (l) {
							clearInterval(l);
							l = null
						}
					} catch (e) {}
					try {
						if (y && y.__pump_retry_interval) {
							clearInterval(y.__pump_retry_interval)
						}
					} catch (e) {}
				}, t * n + 100)
			})()
		})()
	} catch (e) {} finally {
		A = false
	}
}

function ht(e) {
	const t = e.reduce((e, t) => e + t.close, 0) / e.length;
	if (t < .001) {
		const n = 1e6;
		return e.map(e => ({
			time: e.time,
			open: e.open * n,
			high: e.high * n,
			low: e.low * n,
			close: e.close * n
		}))
	}
	return e
}

function yt(e, t, m = {}) {
	if (!e || !t || t.length === 0) return;
	const f = e.getContext("2d");
	const n = e.width;
	const p = e.height;
	f.clearRect(0, 0, n, p);
	const r = ht(t);
	const o = r.map(e => e.low);
	const i = r.map(e => e.high);
	const h = Math.min(...o);
	const y = Math.max(...i);
	if (y === h) return;
	const w = n / r.length;
	r.forEach((e, t) => {
		if (typeof e.open !== "number" || typeof e.close !== "number") return;
		const n = t * w;
		const r = p - (e.open - h) / (y - h) * p;
		const o = p - (e.close - h) / (y - h) * p;
		const i = p - (e.high - h) / (y - h) * p;
		const c = p - (e.low - h) / (y - h) * p;
		const s = m.upColor || "#26a69a";
		const a = m.downColor || "#f57575";
		const l = e.close >= e.open ? s : a;
		f.strokeStyle = l;
		f.beginPath();
		f.moveTo(n + w / 2, i);
		f.lineTo(n + w / 2, c);
		f.stroke();
		f.fillStyle = l;
		const u = Math.min(r, o);
		const d = Math.max(Math.abs(r - o), 1);
		f.fillRect(n + w * .1, u, w * .8, d)
	})
}
window.LightweightCharts = {
	CandlestickSeries: "CandlestickSeries",
	createChart(e, t = {}) {
		let n = e.querySelector("div");
		if (!n) {
			n = document.createElement("div");
			n.style.width = (t.width || 140) + "px";
			n.style.height = (t.height || 50) + "px";
			e.appendChild(n)
		}
		let r = n.querySelector("canvas");
		if (!r) {
			r = document.createElement("canvas");
			r.width = n.offsetWidth || t.width || 140;
			r.height = n.offsetHeight || t.height || 50;
			r.style.width = "100%";
			r.style.height = "100%";
			n.appendChild(r)
		}
		return {
			addSeries(e, t = {}) {
				return {
					setData(e) {
						yt(r, e, t)
					},
					update(e) {
						if (!r._candles) r._candles = [];
						r._candles.push(e);
						yt(r, r._candles, t)
					}
				}
			},
			remove() {
				r.remove()
			},
			timeScale() {
				return {
					fitContent() {}
				}
			}
		}
	}
};

function wt() {
	const e = "Holders";
	let t = null;
	let n = null;
	let r = null;
	const o = ".g-table-body div > div[data-index]";
	const u = 'div[style*="position: absolute"] > div > div:last-child a span.text-textTertiary:first-child';

	function i() {
		return document.querySelector(".g-table-body")
	}

	function c() {
		try {
			return window.localStorage.getItem("detail_tab_active_bsc") === "holders"
		} catch (j) {
			console.warn("initHoldersBalanceClasses: localStorage access failed", j);
			return false
		}
	}

	function d(e, t) {
		e.classList.remove(...[...e.classList].filter(e => e.startsWith("rem-balance-")));
		if (t <= 1.5) e.classList.add("rem-balance-1");
		else if (t <= 10) e.classList.add("rem-balance-2");
		else if (t <= 50) e.classList.add("rem-balance-3");
		else if (t <= 100) e.classList.add("rem-balance-4");
		else e.classList.add("rem-balance-5")
	}

	function m(e) {
		if (!e) return NaN;
		let t = e.replace(/,/g, "").trim().toLowerCase();
		const n = t.match(/^([\d.]+)([kmb]?)/);
		if (!n) return NaN;
		const r = parseFloat(n[1]);
		const o = n[2];
		const i = {
			k: 1e3,
			m: 1e6,
			b: 1e9
		};
		return r * (i[o] || 1)
	}

	function f(e, t) {
		e.classList.remove(...[...e.classList].filter(e => e.startsWith("rem-percentage-")));
		if (t < 2) e.classList.add("rem-percentage-1");
		else if (t <= 2.5) e.classList.add("rem-percentage-2");
		else if (t <= 3.25) e.classList.add("rem-percentage-3");
		else if (t <= 4) e.classList.add("rem-percentage-4");
		else if (t > 4) e.classList.add("rem-percentage-5")
	}

	function p(e) {
		return e ? parseFloat(e.replace("%", "").trim()) : NaN
	}

	function h(e) {
		const t = parseFloat(e);
		if (e.endsWith("m")) return t / (24 * 60);
		if (e.endsWith("h")) return t / 24;
		if (e.endsWith("d")) return t;
		if (e.endsWith("mo")) return t * 30;
		if (e.endsWith("y")) return t * 365;
		return Infinity
	}

	function y(e, t) {
		e.style.color = "";
		e.style.opacity = "";
		if (t < 14) {
			e.style.color = "rgb(var(--primary-red) / var(--tw-text-opacity, 1))";
			e.style.opacity = "0.97"
		} else if (t < 25) {
			e.style.color = "rgb(var(--primary-orange) / var(--tw-text-opacity, 1))";
			e.style.opacity = "0.97"
		} else {
			e.style.color = "";
			e.style.opacity = ""
		}
	}

	function s(e) {
		const t = e.style.color || "";
		const n = t.includes("var(--primary-red)") || t.includes("var(--primary-orange)");
		if (!n) {
			e.style.color = "rgb(var(--primary-yellow) / var(--tw-text-opacity, 1))"
		}
	}

	function a(e) {
		const t = e.querySelector(".flex.items-center.whitespace-nowraps:has(.flex.items-center.gap-2px span > .flex.text-text-200.text-sm.font-medium)");
		if (t) {
			const i = t.querySelector(".flex.items-center.text-text-200.text-\\[13px\\].font-medium.gap-2px > .flex.items-center.gap-2px > span");
			const c = m(i.textContent);
			if (!isNaN(c)) d(t, c)
		}
		const n = e.querySelector(".flex.items-center.whitespace-nowraps:has(.flex.gap-4px.w-full > .flex.text-text-200.text-\\[12px\\].font-medium.items-center.bg-panel-200)");
		const r = n?.querySelector(".flex.gap-4px.w-full > .flex.text-text-200.text-\\[12px\\].font-medium.items-center.bg-panel-200");
		if (n && r) {
			const s = p(r.textContent);
			if (!isNaN(s)) f(n, s)
		}
		const o = e.querySelector(u);
		if (o) {
			const a = o.textContent.trim();
			const l = h(a);
			y(o, l)
		}
	}

	function l() {
		if (!n) return;
		const r = new Map;
		n.querySelectorAll(u).forEach(e => {
			const t = e.textContent.trim();
			const n = h(t);
			if (!r.has(t)) r.set(t, []);
			r.get(t).push({
				span: e,
				days: n
			})
		});
		for (const [, e] of r.entries()) {
			if (e.length >= 6 && e[0].days <= 120) {
				e.forEach(({
					span: e
				}) => s(e))
			}
		}
	}
	const w = z(e => {
		if (!n) return;
		try {
			const t = Array.from(n.querySelectorAll(o));
			t.forEach(a);
			l()
		} catch (j) {
			console.error("initHoldersBalanceClasses: batch processing failed", j)
		}
	}, 200);

	function _() {
		n = i();
		if (!n) return;
		t?.disconnect();
		t = new MutationObserver(w);
		t.observe(n, {
			childList: true,
			subtree: true
		});
		window.__rem_registerObserver && window.__rem_registerObserver(t, "Holders balance observer");
		n.querySelectorAll(o).forEach(a);
		l()
	}
	r = setInterval(() => {
		if (c()) {
			const e = i();
			if (!t || n !== e) {
				_()
			}
		} else {
			t?.disconnect();
			t = null
		}
	}, 300);
	window.__rem_registerInterval(r, "Holders balance interval")
}
const E = new WeakMap;
const _t = new Set;
let gt = false;
const bt = ".group-hover\\/a\\:bg-hover-100\\/95 > span.text-text-300";
const vt = ".group\\/hold.undefined > span.text-text-300";
const a = new WeakMap;

function kt(n) {
	if (!n || a.has(n)) return;
	const e = Wt(n) || "unknown";
	const t = n.querySelectorAll(bt);
	const r = n.querySelectorAll(vt);
	const o = t.length ? t : r;
	let i = null;
	for (const s of o) {
		if (s.textContent?.trim() === "MC") {
			i = s.nextElementSibling;
			break
		}
	}
	if (!i) return;
	const c = new MutationObserver(e => {
		if (!window.__rem_marketCapColorsEnabled) return;
		const t = Et(n);
		if (t) {
			E.set(n, t);
			L(n);
			n.classList.add(t);
			n.dataset.remMcApplied = t;
			try {
				c.disconnect()
			} catch (j) {}
			a["delete"](n)
		} else {
			if (E.get(n) === "inflight") E["delete"](n)
		}
	});
	window.__rem_registerObserver && window.__rem_registerObserver(c, `[PULSE] mc-value-observer (${e||"unknown"})`, "pulse");
	c.observe(i, {
		characterData: true,
		childList: true,
		subtree: true
	});
	a.set(n, c);
	setTimeout(() => {
		if (a.has(n)) {
			try {
				a.get(n).disconnect()
			} catch (j) {}
			a["delete"](n)
		}
	}, 5e3)
}

function L(e) {
	const t = e.dataset.remMcApplied;
	if (t) {
		e.classList.remove(t);
		e.dataset.remMcApplied = "";
		return
	}
	for (const n of Array.from(e.classList)) {
		if (n.startsWith("rem-mc-")) e.classList.remove(n)
	}
}

function xt(e) {
	if (!window.__rem_marketCapColorsEnabled) return;
	if (!e) return;
	const t = E.get(e);
	if (t && t !== "inflight") {
		if (!e.classList.contains(t)) {
			L(e);
			e.classList.add(t);
			e.dataset.remMcApplied = t
		}
		return
	}
	const n = Et(e);
	if (n) {
		E.set(e, n);
		L(e);
		e.classList.add(n);
		e.dataset.remMcApplied = n;
		kt(e);
		return
	}
	if (E.get(e) === "inflight") return;
	E.set(e, "inflight");
	_t.add(e);
	Ct()
}

function Ct() {
	if (gt) return;
	gt = true;
	const e = () => {
		gt = false;
		const t = Array.from(_t);
		_t.clear();
		const n = 15;
		for (let e = 0; e < t.length; e += n) {
			const r = t.slice(e, e + n);
			requestAnimationFrame(() => {
				for (const e of r) {
					try {
						const t = Et(e);
						if (t) {
							E.set(e, t);
							L(e);
							e.classList.add(t);
							e.dataset.remMcApplied = t;
							kt(e)
						} else {
							St(e)
						}
					} catch (j) {}
				}
			})
		}
	};
	setTimeout(e, 25)
}

function Et(e) {
	if (!e || !e.querySelector) return null;
	const t = e.querySelectorAll(bt);
	const n = e.querySelectorAll(vt);
	const r = t.length ? t : n;
	let o = null;
	let i = null;
	for (const m of r) {
		const f = m.textContent;
		if (!f) continue;
		if (f.trim() === "MC") {
			i = m.nextElementSibling;
			if (i) o = i.textContent?.trim() || null;
			break
		}
	}
	if (!o) return null;
	const c = o.replace(/[$,]/g, "").trim();
	const s = parseFloat(c) || 0;
	const a = o.toUpperCase();
	const l = a.includes("K") ? 1e3 : a.includes("M") ? 1e6 : 1;
	const u = s * l;
	let d = "";
	if (u <= 12e3) d = "rem-mc-1";
	else if (u <= 16e3) d = "rem-mc-2";
	else if (u <= 2e4) d = "rem-mc-3";
	else if (u <= 25e3) d = "rem-mc-4";
	else if (u <= 3e4) d = "rem-mc-5";
	else if (u <= 5e4) d = "rem-mc-6";
	else if (u <= 75e3) d = "rem-mc-7";
	else if (u <= 1e5) d = "rem-mc-8";
	else if (u <= 125e3) d = "rem-mc-9";
	else if (u <= 15e4) d = "rem-mc-10";
	else if (u <= 2e5) d = "rem-mc-11";
	else if (u <= 275e3) d = "rem-mc-12";
	else if (u <= 4e5) d = "rem-mc-13";
	else if (u <= 55e4) d = "rem-mc-14";
	else if (u <= 1e6) d = "rem-mc-15";
	else d = "rem-mc-16";
	return d
}

function Lt(e) {
	const t = document.querySelector(e);
	if (!t) return;
	const n = new MutationObserver(e => {
		const t = [];
		for (const n of e) {
			for (const r of Array.from(n.addedNodes)) {
				if (r.nodeType !== 1) continue;
				if (r.matches && r.matches(C)) {
					t.push(r)
				} else {
					const o = r.querySelectorAll ? r.querySelectorAll(C) : [];
					for (const i of o) t.push(i)
				}
			}
		}
		if (t.length && window.__rem_marketCapColorsEnabled) {
			for (const i of t) {
				xt(i)
			}
		}
	});
	n.observe(t, {
		childList: true,
		subtree: true,
		characterData: true
	});
	window.__rem_registerObserver && window.__rem_registerObserver(n, `[PULSE] MC observer ${e}`, "pulse")
}

function St(e) {
	if (!e || !e.querySelector) return;
	const t = E.get(e);
	if (t && t !== "inflight") {
		if (!e.classList.contains(t)) {
			L(e);
			e.classList.add(t);
			e.dataset.remMcApplied = t
		}
		return t
	}
	const n = Et(e);
	if (n) {
		E.set(e, n);
		L(e);
		e.classList.add(n);
		e.dataset.remMcApplied = n;
		kt(e);
		return n
	}
	if (E.get(e) === "inflight") E["delete"](e);
	return null
}
const u = new WeakMap;

function I(e) {
	try {
		const t = e.querySelector(".rem-price-chart");
		if (t) {
			const n = u.get(t);
			if (n) {
				try {
					if (n.remove && typeof n.remove === "function") {
						n.remove()
					}
				} catch (j) {}
				u["delete"](t)
			}
			t._chart = null;
			t._series = null;
			t._retryCount = 0;
			t._renderFailures = 0
		}
	} catch (j) {
		console.warn("cleanupCardChart failed", j)
	}
}
const At = 35 * 1e3;
const It = [10, 30, 45].map(e => e * 1e3);
const Tt = 250;
const Mt = 10;
const qt = 5;
const T = new Map;
const Ft = new Set(["sol-pump-grad", "sol-grad", "bsc-grad", "bas-grad", "mon-grad"]);
let Dt = false;
const Rt = new WeakMap;
const Nt = new WeakSet;
const d = new Set;
const m = new Map;
const M = new Map;
let e = null;
let q = {};

function Pt() {
	const e = document.querySelector(".w-full > .pb-0");
	if (!e) return null;
	const t = Array.from(e.children);
	for (const n of t) {
		const r = n.querySelector(".relative.w-full");
		if (!r) continue;
		const o = r.querySelector("div");
		if (o && o.textContent.trim().includes("Migrated")) {
			return n
		}
	}
	return null
}

function Ut() {
	if (e && document.body.contains(e)) {
		return e
	}
	e = Pt();
	return e
}

function Ot(e) {
	try {
		const t = Ut();
		return !!(t && t.contains(e))
	} catch (j) {
		return false
	}
}

function P(e) {
	return new Promise(t => {
		try {
			chrome.runtime.sendMessage(e, e => {
				if (chrome.runtime.lastError) {
					return t({
						ok: false,
						error: chrome.runtime.lastError.message
					})
				}
				return t(e)
			})
		} catch (j) {
			t({
				ok: false,
				error: j.message
			})
		}
	})
}

function Bt(e, t) {
	try {
		const n = U(e);
		if (!n) {
			return false
		}
		const r = Vt(t) || "unknown";
		const o = Ft.has(r);
		const i = Ot(e);
		const c = o || i ? qt : Mt;
		const s = Math.floor(Date.now() / 1e3) - n;
		const a = s < c;
		return a
	} catch (j) {
		return false
	}
}

function jt(e, t) {
	const n = Math.floor(Date.now() / 1e3) - e;
	if (n < 4 * 60) return "1s";
	if (n < 30 * 60) return "15s";
	if (n < 60 * 60) return "30s";
	if (n < 120 * 60) return "1m";
	return "5m"
}

function U(e) {
	const t = e.querySelector(c);
	if (!t) return null;
	const n = t.textContent.trim();
	if (!n) return null;
	const r = Math.floor(Date.now() / 1e3);
	const o = parseFloat(n);
	let i = 0;
	if (n.endsWith("s")) i = o;
	else if (n.endsWith("m")) i = o * 60;
	else if (n.endsWith("h")) i = o * 3600;
	else if (n.endsWith("d")) i = o * 86400;
	return r - i
}

function Ht(e) {
	const t = e.querySelector('.g-table-body > div > div[data-index] [href*="bsc/token/"]') || e.querySelector('.g-table-body > div > div[data-index] [href*="sol/token/"]') || e.querySelector('.g-table-body > div > div[data-index] [href*="base/token/"]') || e.querySelector('.g-table-body > div > div[data-index] [href*="mon/token/"]');
	if (!t) return null;
	const n = t.getAttribute("href") || "";
	const r = n.split("bsc/token/")[1]?.split(/[?#]/)[0] || n.split("sol/token/")[1]?.split(/[?#]/)[0] || n.split("base/token/")[1]?.split(/[?#]/)[0] || n.split("mon/token/")[1]?.split(/[?#]/)[0];
	return r || null
}

function Wt(e) {
	if (e.dataset.remTokenId) return e.dataset.remTokenId || null;
	const t = Ht(e);
	e.dataset.remTokenId = t || "";
	return t
}
const zt = {
	"sol-pump-new": ["pump.fun", "swap.pump.fun"],
	"sol-pump-grad": ["pump.fun", "swap.pump.fun"],
	"sol-bonk-new": ["bonk.fun", "letsbonk.fun"],
	"sol-bonk-grad": ["bonk-grad.svg"],
	"sol-new": ["www.meteora.ag", "bags.fm", "moonshot.com", "wen.dev", "heaven.xyz", "believe.app", "jup.ag", "moon.it", "boop.fun", "raydium.io", "surge.xyz"],
	"sol-grad": ["www.meteora.ag", "bags.fm", "moonshot.com", "wen.dev", "heaven.xyz", "believe.app", "jup.ag", "moon.it", "boop.fun", "surge.xyz"],
	"sol-raydium-grad": ["raydium.io"],
	"sol-raydium-new": ["raydium.io"],
	"bsc-new": ["four.meme", "web3.binance.com"],
	"bsc-grad": ["four.meme", "web3.binance.com"],
	"bsc-flap-new": ["flap.sh", "beta.flap.sh"],
	"bsc-flap-grad": ["flap.sh", "beta.flap.sh"],
	"bas-new": ["base.meme", "zora.co", "clanker.world"],
	"bas-grad": ["base.meme", "zora.co", "clanker.world"],
	"mon-new": ["flap.sh", "kuru.io", "nad.fun", "bonad.fun"],
	"mon-grad": ["flap.sh", "kuru.io", "nad.fun", "bonad.fun"]
};

function Vt(e) {
	if (!e) return "unknown";
	e = e.split("?")[0];
	for (const [t, n] of Object.entries(zt)) {
		if (n.includes(e)) return t
	}
	return "unknown"
}

function $t(e) {
	let t = e.querySelector(H) || null;
	let n = "";
	if (t) {
		const r = (t.tagName || "").toLowerCase();
		if (r === "a") {
			const o = t.getAttribute("href") || "";
			try {
				const i = new URL(o, window.location.origin);
				n = i.hostname || "";
				if (!n && i.pathname) {
					n = i.pathname.split("/").filter(Boolean).pop() || ""
				}
			} catch (j) {
				const c = o.split("/");
				n = c[2] || c.pop() || ""
			}
		} else {
			const s = t.getAttribute && (t.getAttribute("src") || t.getAttribute("href")) || t.src || "";
			n = s ? s.split("/").pop().split("?")[0] : ""
		}
	}
	n = (n || "").toString().split("?")[0].replace(/\/$/, "").trim();
	return {
		svgImg: t,
		svgFilename: n || ""
	}
}
async function Kt(t, n, r, e) {
	if (e === "bsc") {
		try {
			const o = await P({
				type: "bsc_fetchDateAndLp",
				platform: n,
				tokenId: r
			});
			if (!o || !o.ok) {
				const s = U(t) || null;
				return [s, null]
			}
			const i = o.createdAt ?? null;
			let e = null;
			if (i != null) {
				const a = Number(i);
				if (Number.isFinite(a)) {
					e = a > 1e12 ? Math.floor(a / 1e3) : Math.floor(a)
				}
			}
			const c = o.lpAddress ?? null;
			return {
				createdAt: e,
				lpAddress: c
			}
		} catch (j) {
			return {
				createdAt: U(t) || null,
				lpAddress: null
			}
		}
	} else if (e === "sol") {
		try {
			const o = await P({
				type: "sol_fetchDateAndLp",
				platform: n,
				tokenId: r
			});
			if (!o || !o.ok) {
				const s = U(t) || null;
				return [s, null]
			}
			const i = o.createdAt ?? null;
			let e = null;
			if (i != null) {
				const a = Number(i);
				if (Number.isFinite(a)) {
					e = a > 1e12 ? Math.floor(a / 1e3) : Math.floor(a)
				}
			}
			const c = o.lpAddress ?? null;
			return {
				createdAt: e,
				lpAddress: c
			}
		} catch (j) {
			return {
				createdAt: U(t) || null,
				lpAddress: null
			}
		}
	} else if (e === "bas") {
		try {
			const o = await P({
				type: "bas_fetchDateAndLp",
				platform: n,
				tokenId: r
			});
			if (!o || !o.ok) {
				const s = U(t) || null;
				return [s, null]
			}
			const i = o.createdAt ?? null;
			let e = null;
			if (i != null) {
				const a = Number(i);
				if (Number.isFinite(a)) {
					e = a > 1e12 ? Math.floor(a / 1e3) : Math.floor(a)
				}
			}
			const c = o.lpAddress ?? null;
			return {
				createdAt: e,
				lpAddress: c
			}
		} catch (j) {
			return {
				createdAt: U(t) || null,
				lpAddress: null
			}
		}
	} else if (e === "mon") {
		try {
			const o = await P({
				type: "mon_fetchDateAndLp",
				platform: n,
				tokenId: r
			});
			if (!o || !o.ok) {
				const s = U(t) || null;
				return [s, null]
			}
			const i = o.createdAt ?? null;
			let e = null;
			if (i != null) {
				const a = Number(i);
				if (Number.isFinite(a)) {
					e = a > 1e12 ? Math.floor(a / 1e3) : Math.floor(a)
				}
			}
			const c = o.lpAddress ?? null;
			return {
				createdAt: e,
				lpAddress: c
			}
		} catch (j) {
			return {
				createdAt: U(t) || null,
				lpAddress: null
			}
		}
	}
}

function Gt(e, t) {
	if (!e?.length || !t?.length) return false;
	const n = e[e.length - 1];
	const r = t[t.length - 1];
	return n.time === r.time && n.open === r.open && n.high === r.high && n.low === r.low && n.close === r.close
}

function Qt(e) {
	try {
		const t = m.get(e);
		if (t) {
			if (t.observer && typeof t.observer.disconnect === "function") {
				try {
					t.observer.disconnect()
				} catch (j) {}
			}
			if (t.scrollTarget && t.scrollHandler) {
				try {
					t.scrollTarget.removeEventListener("scroll", t.scrollHandler)
				} catch (j) {}
			}
			m["delete"](e)
		}
	} catch (j) {}
	d["delete"](e)
}

function Jt(t) {
	if (d.has(t)) {
		const o = m.get(t);
		if (o && o.scrollTarget && !document.body.contains(o.scrollTarget)) {
			Qt(t)
		} else {
			return
		}
	}
	const e = document.querySelector(t);
	if (!e) return;
	const n = new MutationObserver(e => {
		e.forEach(e => {
			e.removedNodes.forEach(e => {
				if (e.nodeType === 1) {
					if (e.matches && e.matches(C)) {
						Yt(e)
					}
					const t = e.querySelectorAll?.(C) || [];
					t.forEach(Yt)
				}
			})
		});
		pn(t)
	});
	n.observe(e, {
		childList: true,
		subtree: true
	});
	window.__rem_registerObserver && window.__rem_registerObserver(n, `[PULSE] Coin observer ${t}`, "pulse");
	const r = () => requestAnimationFrame(() => Zt(t));
	window.__rem_registerListener(e, "scroll", r, {
		passive: true
	}, "[MIRROR] mainEl scroll -> processVisibleCards", "pulse");
	m.set(t, {
		observer: n,
		scrollHandler: r,
		scrollTarget: e
	});
	d.add(t);
	pn(t)
}

function Yt(e) {
	try {
		const t = a.get(e);
		if (t) {
			try {
				if (t.moValue && typeof t.moValue.disconnect === "function") t.moValue.disconnect()
			} catch (j) {}
			try {
				if (t.moCard && typeof t.moCard.disconnect === "function") t.moCard.disconnect()
			} catch (j) {}
			a["delete"](e)
		}
		I(e);
		try {
			E["delete"](e);
			if (e.dataset && e.dataset.remMcApplied) {
				try {
					e.classList.remove(e.dataset.remMcApplied)
				} catch (j) {}
				e.dataset.remMcApplied = ""
			}
		} catch (j) {}
		try {
			_t["delete"](e)
		} catch (j) {}
		try {
			sn["delete"](e)
		} catch (j) {}
		try {
			cn["delete"](e)
		} catch (j) {}
		try {
			Nt["delete"](e)
		} catch (j) {}
		try {
			const n = e?.dataset?.remTokenId || null;
			if (n) T["delete"](n)
		} catch (j) {}
	} catch (j) {
		console.warn("cleanupCardObservers failed", j)
	}
}

function Zt(x) {
	if (Dt) return;
	Dt = true;
	requestAnimationFrame(() => {
		try {
			const t = Date.now();
			const n = document.querySelector(x);
			if (!n) {
				Dt = false;
				return
			}
			const r = n.querySelectorAll(C);
			for (const o of r) {
				const i = cn.get(o);
				const c = typeof i === "boolean" ? i : dn(o, .25);
				if (!Nt.has(o)) {
					try {
						ln.observe(o);
						Nt.add(o)
					} catch (j) {}
				}
				const s = Wt(o);
				const a = $t(o).svgFilename;
				const l = Vt(a) || "unknown";
				const u = Ft.has(l);
				const d = Ot(o);
				const m = u || d;
				const f = window.__rem_chartsForAll || m;
				const p = !!window.__rem_marketCapColorsEnabled;
				if (c) {
					const v = !!o.dataset.remChartAttached;
					const k = !!o.dataset.remMcAttached;
					requestAnimationFrame(() => {
						try {
							if (f && !v) {
								Xt(o, a)
							}
							if (p && !k) {
								xt(o);
								o.dataset.remMcAttached = "1"
							} else if (!p && k) {
								L(o);
								E["delete"](o);
								delete o.dataset.remMcAttached
							}
							if (!f && v) {
								try {
									const e = o.querySelector(".rem-price-chart, .rem-chart-container, .rem-chart-canvas");
									if (e) e.remove();
									I && I(o)
								} catch (j) {}
								delete o.dataset.remChartAttached
							}
						} catch (j) {}
					})
				}
				if (!s) continue;
				const h = T.get(s);
				const y = !h || c && t - (h.lastProcessed || 0) >= At;
				if (!y) continue;
				const w = U(o) || null;
				if (!w) continue;
				const _ = Math.floor(Date.now() / 1e3) - w;
				const g = m ? qt : Mt;
				if (_ < g) continue;
				const b = T.get(s);
				T.set(s, {
					element: o,
					lastProcessed: b ? b.lastProcessed : 0,
					data: b ? b.data : undefined,
					createdAt: w
				})
			}
		} catch (e) {
			console.error("processVisibleCards error", e)
		} finally {
			Dt = false
		}
	})
}
async function Xt(e, t) {
	if (!e) return false;
	if (Rt.get(e)) return false;
	Rt.set(e, true);
	try {
		const r = await en(e, t);
		try {
			const o = e.querySelector(".rem-chart-canvas");
			if (o) e.dataset.remChartAttached = "1"
		} catch (j) {}
		return true
	} catch (n) {
		console.warn("Chart processing failed for card:", n);
		I(e);
		return false
	} finally {
		Rt["delete"](e)
	}
}
async function en(e, t) {
	try {
		const u = t || $t && $t(e).svgFilename || "";
		const d = Vt(u);
		const m = Ft.has(d);
		const f = Ot(e);
		const p = m || f;
		if (!window.__rem_chartsForAll && !p) {
			return
		}
	} catch (j) {}
	if (!un(e)) return;
	if (!t) t = $t(e).svgFilename;
	if (Bt(e, t)) return;
	const n = Wt(e);
	if (!n) return;
	let r = e.querySelector(".rem-price-chart");
	if (!r) {
		r = document.createElement("div");
		r.className = "rem-price-chart";
		e.prepend(r)
	}
	const o = Date.now();
	const i = q[n];
	const c = !i || !i.data || o - i.timestamp >= At;
	let s;
	if (!c && i.data) {
		s = i.data
	} else if (i?.failed) {
		tn(r, i, n);
		return
	} else {
		const h = await nn(e, n, t);
		if (!h?.data?.length) return;
		s = h.data
	}
	const a = T.get(n);
	const l = Gt(a?.data, s);
	if (l && un(e)) {
		mn(r, s, n);
		if (a) a.lastProcessed = o
	} else {
		T.set(n, {
			element: e,
			lastProcessed: o,
			data: s
		});
		mn(r, s, n)
	}
	if (window.__rem_marketCapColorsEnabled) {
		xt(e)
	}
}

function tn(e, t, n) {
	const r = Date.now();
	const o = typeof t?.failed === "number" ? t.failed : 1;
	if (o > It.length) {
		e.innerHTML = "";
		return
	}
	const i = It[Math.max(0, o - 1)];
	if (r - (t?.timestamp || 0) >= i) {
		nn(e.parentElement, n)["catch"](e => console.warn("retry failed", e))
	}
}
async function nn(l, u, d) {
	if (M.has(u)) {
		return M.get(u)
	}
	const e = (async () => {
		if (!d) {
			d = $t(l).svgFilename || ""
		}
		const e = l.querySelector(".rem-price-chart");
		if (!e) return null;
		try {
			let e = Vt(d) || "unknown";
			let t = false;
			let n = U(l);
			let r = null;
			let o = null;
			if (e.startsWith("bsc")) o = "bsc";
			if (e.startsWith("sol")) o = "sol";
			if (e.startsWith("bas")) o = "bas";
			if (e.startsWith("mon")) o = "mon";
			try {
				const s = Ot(l);
				if (s && typeof e === "string") {
					if (e.endsWith("-new")) {
						e = e.replace(/-new$/, "-grad");
						t = true
					} else if (e.endsWith("_new")) {
						e = e.replace(/_new$/, "_grad");
						t = true
					}
				}
			} catch (j) {}
			if (e && e.includes("grad")) {
				const a = await Kt(l, e, u, o);
				n = a?.createdAt || n;
				r = a?.lpAddress || null;
				t = true
			}
			const c = jt(n, e);
			let i = null;
			if (o === "sol") {
				i = await P({
					type: "sol_fetchOHLC",
					platform: e,
					tokenId: u,
					interval: c,
					lpAddress: r,
					forceRefresh: t
				})
			} else if (o === "bsc") {
				i = await P({
					type: "bsc_fetchOHLC",
					platform: e,
					tokenId: u,
					interval: c,
					lpAddress: r,
					forceRefresh: t
				})
			} else if (o === "bas") {
				i = await P({
					type: "bas_fetchOHLC",
					platform: e,
					tokenId: u,
					interval: c,
					lpAddress: r,
					forceRefresh: t
				})
			} else if (o === "mon") {
				i = await P({
					type: "mon_fetchOHLC",
					platform: e,
					tokenId: u,
					interval: c,
					lpAddress: r,
					forceRefresh: t
				})
			}
			if (!i?.ok || !Array.isArray(i.data) || i.data.length === 0) {
				return null
			}
			q[u] = q[u] || {};
			q[u].data = i.data;
			q[u].lpAddress = i.lpAddress || r || q[u].lpAddress || null;
			q[u].timestamp = Date.now();
			q[u].failed = 0;
			on(u, i.data, false, i.lpAddress || r);
			return {
				data: i.data,
				lpAddress: i.lpAddress || r
			}
		} catch (t) {
			q[u] = q[u] || {};
			q[u].failed = (q[u].failed || 0) + 1;
			q[u].timestamp = Date.now();
			console.warn("fetchAndUpdateChart error", {
				tokenId: u,
				error: t
			});
			return null
		}
	})();
	M.set(u, e);
	try {
		return await e
	} finally {
		M["delete"](u)
	}
}
async function rn() {
	try {
		const e = await P({
			type: "getAllTokens"
		});
		if (e?.ok) q = e.Tokens || {};
		else q = {}
	} catch (j) {
		q = {}
	}
}
async function on(e, t, n, r = false, o = null) {
	q[t] = {
		data: n || null,
		lpAddress: o || q[t] && q[t].lpAddress || null,
		timestamp: Date.now(),
		isError: !!r
	};
	P({
		type: "setToken",
		tokenId: t,
		data: n || null,
		lpAddress: q[t].lpAddress,
		isError: !!r
	})["catch"](e => {
		console.warn("updateTokenData failed", e)
	});
	try {
		const i = Object.keys(q);
		if (i.length > Tt) {
			const c = i.map(e => [e, q[e]?.timestamp || 0]);
			c.sort((e, t) => e[1] - t[1]);
			const s = i.length - Tt;
			for (let e = 0; e < s; e++) {
				delete q[c[e][0]]
			}
		}
	} catch (j) {}
}
let cn = new WeakMap;
const sn = new Set;
const an = z(() => {
	const t = Array.from(sn);
	sn.clear();
	requestAnimationFrame(() => {
		for (const e of t) {
			en(e)
		}
	})
}, 200);
const ln = new IntersectionObserver(e => {
	for (const t of e) {
		cn.set(t.target, t.isIntersecting);
		if (t.isIntersecting) {
			sn.add(t.target);
			if (window.__rem_marketCapColorsEnabled) {
				try {
					xt(t.target)
				} catch (j) {}
			}
		}
	}
	an()
}, {
	root: null,
	rootMargin: "300px 0px 300px 0px",
	threshold: .2
});
window.__rem_registerObserver && window.__rem_registerObserver(ln, "visibilityObserver", "pulse");

function un(e) {
	const t = cn.get(e);
	if (typeof t === "boolean") return t;
	return dn(e, .25)
}

function dn(e, t) {
	if (!e || !e.getBoundingClientRect) return false;
	const n = e.getBoundingClientRect();
	const r = window.innerHeight || document.documentElement.clientHeight;
	const o = Math.min(n.bottom, r) - Math.max(n.top, 0);
	if (n.width <= 0 || n.height <= 0 || o <= 0) return false;
	return o / n.height >= t
}

function mn(e, t, n) {
	if (!e || !t || !t.length) {
		I(e?.parentElement);
		return
	}
	let r = u.get(e);
	try {
		if (r && r.tokenId && n && r.tokenId !== n) {
			try {
				if (r.chart && typeof r.chart.remove === "function") r.chart.remove()
			} catch (j) {}
			u["delete"](e);
			r = null
		}
		if (r) {
			const i = ht(t);
			const c = Array.isArray(i) ? i.map(e => ({
				time: e.time,
				open: e.open,
				high: e.high,
				low: e.low,
				close: e.close
			})) : [];
			r.series.setData(c);
			r.chart.timeScale().fitContent()
		} else {
			const s = fn(e, t, n);
			if (s) {
				u.set(e, s)
			}
		}
	} catch (o) {
		console.warn("Chart rendering error:", o);
		I(e?.parentElement);
		e._renderFailures = (e._renderFailures || 0) + 1;
		if (e._renderFailures < 2) {
			setTimeout(() => mn(e, t, n), 100)
		}
	}
}

function fn(e, t, n) {
	if (!window.LightweightCharts) {
		return null
	}
	let r = e.querySelector(".rem-chart-canvas");
	if (!r) {
		r = document.createElement("div");
		r.className = "rem-chart-canvas";
		r.style.width = "140px";
		r.style.height = "50px";
		e.appendChild(r)
	}
	try {
		r.dataset.remChartFor = n || "chart-" + Math.random().toString(36).slice(2, 8)
	} catch (j) {}
	try {
		r.dataset.remTokenId = n || ""
	} catch (j) {}
	try {
		const {
			createChart: i
		} = window.LightweightCharts;
		const c = i(r, {
			layout: {
				background: {
					color: "transparent"
				},
				textColor: "transparent"
			},
			grid: {
				vertLines: {
					visible: false
				},
				horzLines: {
					visible: false
				}
			},
			timeScale: {
				visible: false,
				borderVisible: false
			},
			rightPriceScale: {
				visible: false,
				borderVisible: false
			},
			leftPriceScale: {
				visible: false,
				borderVisible: false
			},
			crosshair: {
				vertLine: {
					visible: false
				},
				horzLine: {
					visible: false
				}
			},
			width: 140,
			height: 50
		});
		const s = c.addSeries(window.LightweightCharts.CandlestickSeries, {
			upColor: "#26a69a",
			downColor: "#f57575",
			wickUpColor: "#26a69a",
			wickDownColor: "#f57575",
			borderVisible: false,
			priceLineVisible: false,
			drawBorder: false,
			drawBody: true,
			drawWick: true
		});
		const a = ht(t);
		const l = Array.isArray(a) ? a.map(e => ({
			time: e.time,
			open: e.open,
			high: e.high,
			low: e.low,
			close: e.close
		})) : [];
		s.setData(l);
		c.timeScale().fitContent();
		return {
			chart: c,
			series: s,
			tokenId: n || null
		}
	} catch (o) {
		console.error("Chart creation failed:", o);
		return null
	}
}

function pn(e) {
	yn(e)
}
let hn = false;

function yn(e) {
	if (hn) return;
	hn = true;
	requestAnimationFrame(() => {
		hn = false;
		Zt(e)
	})
}
async function wn(l) {
	let e = Date.now();
	async function u() {
		const e = Date.now();
		const t = new Set;
		const n = Array.from(document.querySelectorAll(`${l} ${C}`));
		for (const i of n) {
			const c = Wt(i);
			if (!c) continue;
			t.add(c);
			const s = T.get(c);
			const a = q[c]?.timestamp || (s?.lastProcessed || 0);
			if (!(c && s && un(i) && e - a >= At)) {
				continue
			}
			Xt(i)
		}
		for (const c of Array.from(T.keys())) {
			if (!t.has(c)) T["delete"](c)
		}
		const r = Date.now() - e;
		const o = Math.max(1e3, At - r);
		setTimeout(u, o)
	}
	u()
}
async function _n(e) {
	Qt(e);
	await rn();
	Jt(e);
	Lt(e);
	Zt(e);
	wn(e)
}

function gn() {
	ln.disconnect();
	T.clear();
	hn = false
}
const bn = 750;
let vn = null;
let o = null;

function kn() {
	if (vn) return;

	function r() {
		try {
			const e = localStorage.getItem("KEY_RND_STATE_DATA_v2");
			const t = JSON.parse(e);
			return String(t?.KEY_TRENCHES_RND?.visible)
		} catch (j) {
			return null
		}
	}
	try {
		o = r();
		xn(o, null)
	} catch (j) {
		o = null
	}
	vn = setInterval(() => {
		try {
			const e = r();
			if (e === o) return;
			const t = o;
			o = e;
			const n = new URLSearchParams(window.location.search).get("chain");
			if (n !== "bsc") {
				xn(e, t)
			}
		} catch (j) {}
	}, bn)
}
async function xn(e, t) {
	const n = e === "true";
	if (n) {
		try {
			const o = await B(l, 5e3);
			Qt(l);
			try {
				for (const i of Array.from(T.keys())) {
					const c = T.get(i);
					if (!c || !c.element || !document.body.contains(c.element)) {
						T["delete"](i)
					}
				}
			} catch (j) {}
			_n(l)
		} catch (r) {}
	} else {
		Qt(l);
		try {
			for (const [i, s] of Array.from(T.entries())) {
				if (!s || !s.element || !document.body.contains(s.element)) {
					T["delete"](i)
				}
			}
		} catch (j) {}
	}
}
let O = null;
let Cn = window.location.pathname;
let En = window.location.href;
let Ln = null;

function Sn() {
	const e = window.location.pathname || "";
	if (e.includes("/token/")) {
		return e.split("/token/")[1]?.split("/")[0] || null
	}
	return null
}

function B(a, n = 8e3) {
	return new Promise((i, e) => {
		const t = document.querySelector(a);
		if (t) return i(t);
		const c = new MutationObserver(e => {
			for (const n of e) {
				for (const r of n.addedNodes) {
					if (r.nodeType === 1 && r.matches && r.matches(a)) {
						c.disconnect();
						clearTimeout(s);
						return i(r)
					}
					if (r.nodeType === 1) {
						const o = r.querySelector?.(a);
						if (o) {
							c.disconnect();
							clearTimeout(s);
							return i(o)
						}
					}
				}
			}
			const t = document.querySelector(a);
			if (t) {
				c.disconnect();
				clearTimeout(s);
				return i(t)
			}
		});
		const s = setTimeout(() => {
			c.disconnect();
			e(new Error(`Timeout waiting for ${a}`))
		}, n);
		c.observe(document.body, {
			childList: true,
			subtree: true
		});
		window.__rem_registerObserver && window.__rem_registerObserver(c, `[GLOBAL] waitForElement`, "global")
	})
}
async function An() {
	B(t).then(() => _n(t));
	Ke()
}
async function In() {
	pt()["catch"](e => console.warn("StreamContainer failed", e));
	await ue()["catch"](e => console.warn("MemeInfo failed", e));
	me()["catch"](e => console.warn("TwitterContainer failed", e));
	try {
		wt()
	} catch (j) {
		console.warn("initHoldersBalanceClasses failed", j)
	}
}

function Tn(e = "/", t = "") {
	try {
		const n = new URLSearchParams(t).get("chain");
		return (e === "/" || e === "") && (n === "bsc" || n === "sol" || n === "base" || n === "mon")
	} catch (j) {
		return false
	}
}

function Mn(e = "") {
	return /^\/(?:sol|bsc|base)\/token(\/|$)/i.test(e || "")
}
async function qn() {
	if (!history.__rem_patched) {
		const r = history.pushState;
		history.pushState = function (...e) {
			r.apply(this, e);
			window.dispatchEvent(new Event("rem:navigation"))
		};
		const o = history.replaceState;
		history.replaceState = function (...e) {
			o.apply(this, e);
			window.dispatchEvent(new Event("rem:navigation"))
		};
		history.__rem_patched = true
	}
	let d = null;
	window.addEventListener("popstate", () => {
		window.dispatchEvent(new Event("rem:navigation"))
	});
	const e = z(n, 50);
	const t = new MutationObserver(() => {
		e()
	});
	t.observe(document.body, {
		childList: true,
		subtree: true
	});
	window.__rem_registerObserver && window.__rem_registerObserver(t, "body route observer", "global");
	async function n() {
		const e = window.location.pathname;
		const t = window.location.search || "";
		const n = e + t;
		if (d !== null && n === d) return;
		const r = d || "";
		d = n;
		const o = r.split("?")[0] || "";
		const i = e || "";
		window.__rem_pageToken = (window.__rem_pageToken || 0) + 1;
		const c = r.includes("?") ? "?" + r.split("?").slice(1).join("?") : "";
		const s = o?.startsWith("/pulse") || Tn(o, c);
		const a = o?.startsWith("/token") || o?.startsWith("/meme") || Mn(o);
		const l = i.startsWith("/pulse") || Tn(i, t);
		const u = i.startsWith("/token") || i.startsWith("/meme") || Mn(i);
		try {
			if (s) {
				__rem_cleanupPage("pulse");
				document.querySelectorAll(C).forEach(Yt);
				M.clear()
			} else if (a) {
				__rem_cleanupPage("meme");
				M.clear()
			}
		} catch (j) {}
		if (l && !s) {
			O = "pulse";
			An();
			return
		}
		if (u && !a) {
			O = "meme";
			Ln = Sn(i);
			try {
				In()
			} catch (j) {
				console.warn("initMemePage error", j)
			}
			return
		}
		if (l && s && r !== n) {
			try {
				__rem_cleanupPage("pulse")
			} catch (j) {}
			try {
				An()
			} catch (j) {
				console.warn("initPulsePage error", j)
			}
			return
		}
		if (u && a && r !== n) {
			O = "meme";
			Ln = Sn(i);
			try {
				__rem_cleanupPage("meme")
			} catch (j) {}
			try {
				In()
			} catch (j) {
				console.warn("initMemePage (query) error", j)
			}
			return
		}
		if (l) {
			O = "pulse";
			An()
		} else if (u) {
			O = "meme";
			Ln = Sn(i);
			try {
				In()
			} catch (j) {
				console.warn("initMemePage fallback error", j)
			}
		} else {
			O = "other"
		}
	}
	window.addEventListener("rem:navigation", n);
	n()
}
chrome.storage.onChanged.addListener((e, t) => {
	if (t !== "local") return;
	if (e.marketCapColors) {
		try {
			window.__rem_marketCapColorsEnabled = !!e.marketCapColors.newValue
		} catch (j) {}
	}
	if (e.chartsForAll) {
		try {
			window.__rem_chartsForAll = !!e.chartsForAll.newValue
		} catch (j) {}
	}
	if (e.twitterPreview) {
		try {
			window.__rem_twitterPreview = !!e.twitterPreview.newValue
		} catch (j) {}
	}
	if (e.Data) {
		try {
			const n = e.Data.newValue || {};
			const r = n.Tokens || {};
			Object.keys(r).forEach(e => {
				try {
					q[e] = r[e]
				} catch (j) {}
			})
		} catch (j) {}
	}
});
qn();
kn();
