document.getElementById('submit')
    .addEventListener('click', () => {
        const data = {
            className: $("#className").val(),
            on: $("#on").is(":checked")
        }
        if(data.on && data.className.length === 0){
            chrome.tabs.executeScript({file: 'validationfail.js'})
        }else{
            chrome.storage.sync.set(data, () => chrome.tabs.executeScript({file: 'alert.js'}))
        }

    });
