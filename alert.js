chrome.storage.sync.get(['on', 'className'], function (items) {
    alert(`items : ${items.on} , className : ${items.className} , length : ${items.className.length}`);
})

