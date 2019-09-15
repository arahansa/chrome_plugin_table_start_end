chrome.storage.sync.get(['on', 'className'], function (items) {
    $("#className").val(items.className)
    if(items.on){
        $("#on").prop('checked', true)
    }
})

document.getElementById('submit')
    .addEventListener('click', () => {
        const data = {
            className: $("#className").val(),
            on: $("#on").is(":checked"),
            firstRow : $("#firstRow").val(),
            lastRow : $("#lastRow").val(),
            column: $("#column").val()
        }
        if(data.on && data.className.length === 0){
            chrome.tabs.executeScript({file: 'validationfail.js'})
        }else{
            chrome.storage.sync.set(data, () => chrome.tabs.executeScript({file: 'alert.js'}))
        }

    });



