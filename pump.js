chrome.runtime.onMessage.addListener(async (e, t, n) => {
    if (!e || e.type !== "fetchToken" || !e.mintId) return;
    const r = e.requestId || null;
    try {
        const o = await fetch("https://livestream-api.pump.fun/livestream/join", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                mintId: e.mintId
            })
        });
        const m = await o.json();
        if (!m || !m.token) throw new Error("No token received from pump.fun");
        try {
            chrome.runtime.sendMessage({
                type: "token",
                token: m.token,
                wsUrl: m.wsUrl || null,
                mintId: e.mintId,
                requestId: r
            }, e => {
                if (chrome.runtime.lastError) {}
            })
        } catch (i) {}
    } catch (i) {
        try {
            chrome.runtime.sendMessage({
                type: "token",
                mintId: e.mintId,
                error: i.message || String(i),
                requestId: r
            }, () => {})
        } catch (s) {}
    }
});
