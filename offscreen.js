chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'parse-html') {
    if (msg.action === 'believe-description') {
      fetchBelieveDescription(msg.url).then(sendResponse);
    } else {
      fetchHtml(msg.url).then(sendResponse);
    }
    return true;
  }
});

async function fetchHtml(url) {
  try {
    const response = await fetch(url, {
      headers: { 'Accept': 'text/html', 'User-Agent': 'Mozilla/5.0' }
    });
    
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const metaTag = doc.querySelector('meta[name="description"]') || doc.querySelector('meta[property="og:description"]');
    
    return {
      success: true,
      description: metaTag.content,
      fullTag: metaTag.outerHTML
    };
    
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

async function fetchBelieveDescription(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'text/html',
        'User-Agent': 'Mozilla/5.0'
      }
    });
    
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const descriptionElement = doc.querySelector('.bg-white.rounded-2xl.border-2.border-neutral-100.p-6.mb-6 p.text-text-secondary.font-medium.text-lg');

    return {
      success: !!descriptionElement,
      description: descriptionElement ? descriptionElement.textContent.trim() : null,
      fullTag: descriptionElement ? descriptionElement.outerHTML : null
    };
    
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

async function fetchMoonitDescription(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'text/html',
        'User-Agent': 'Mozilla/5.0'
      }
    });
    
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const descriptionElement = doc.querySelector('[data-sentry-element="MemeCardTitle"] .mi-line-clamp-2.mi-h-\[40px\].mi-text-sm.mi-text-border');

    return {
      success: !!descriptionElement,
      description: descriptionElement ? descriptionElement.textContent.trim() : null,
      fullTag: descriptionElement ? descriptionElement.outerHTML : null
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

