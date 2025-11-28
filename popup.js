'use strict';

const el = {
  toggleMarketcap: document.getElementById('toggle-marketcap'),
  radioAll: document.getElementById('radio-charts-all'),
  radioMigrated: document.getElementById('radio-charts-migrated'),
};

function setToggleUI(toggleEl, on) {
  if (on) {
    toggleEl.classList.add('on');
    toggleEl.setAttribute('aria-checked', 'true');
  } else {
    toggleEl.classList.remove('on');
    toggleEl.setAttribute('aria-checked', 'false');
  }
}

function setRadioUI(allSelected) {
  if (allSelected) {
    el.radioAll.classList.add('active');
    el.radioMigrated.classList.remove('active');
  } else {
    el.radioAll.classList.remove('active');
    el.radioMigrated.classList.add('active');
  }
}

function loadSettings() {
  chrome.storage.local.get(['marketCapColors', 'chartsForAll'], (res) => {
    const market = (typeof res.marketCapColors === 'boolean') ? res.marketCapColors : true;
    const chartsAll = (typeof res.chartsForAll === 'boolean') ? res.chartsForAll : true;

    setToggleUI(el.toggleMarketcap, market);
    setRadioUI(!!chartsAll);
  });
}

function saveSetting(key, value) {
  const payload = {};
  payload[key] = value;
  chrome.storage.local.set(payload, () => {
    console.debug('Saved', key, value);
  });
}

function reloadAxiomTabs() {
  try {
    chrome.tabs.query({}, (tabs) => {
      if (!tabs || !tabs.length) return;
      for (const t of tabs) {
        try {
          const url = t.url || '';
          let hostname = '';
          try { hostname = (new URL(url)).hostname || ''; } catch (e) { hostname = ''; }
          if (hostname === 'gmgn.ai' || hostname.endsWith('.gmgn.ai')) {
            try { chrome.tabs.reload(t.id); } catch (e) {}
          }
        } catch (e) {}
      }
    });
  } catch (e) { console.debug('error', e); }
}

el.toggleMarketcap.addEventListener('click', () => {
  const isOn = el.toggleMarketcap.classList.contains('on');
  const newVal = !isOn;
  setToggleUI(el.toggleMarketcap, newVal);
  saveSetting('marketCapColors', !!newVal);
});

el.toggleMarketcap.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.toggleMarketcap.click(); }
});

el.radioAll.addEventListener('click', () => {
  setRadioUI(true);
  saveSetting('chartsForAll', true);
});

el.radioMigrated.addEventListener('click', () => {
  setRadioUI(false);
  saveSetting('chartsForAll', false);
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== 'local') return;

  let shouldReloadAxiom = false;

  if (changes.marketCapColors) {
    setToggleUI(el.toggleMarketcap, !!changes.marketCapColors.newValue);
    shouldReloadAxiom = true;
  }
  if (changes.chartsForAll) {
    setRadioUI(!!changes.chartsForAll.newValue);
    shouldReloadAxiom = true;
  }

  if (shouldReloadAxiom) {
    reloadAxiomTabs();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  loadSettings();
});
