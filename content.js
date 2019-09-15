console.log('this is content.js ? ')
const firstHref = $("a[href^='http']").eq(0).attr("href");
console.log(firstHref);

chrome.storage.sync.get(['on', 'className'], function (items) {
    console.log('items :', items)
});
