// 참고 소스 https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


function handlePaging(e) {
    let href = location.href.toString()
    let page = getParameterByName('page')
    let prevPage = page
    const keyCode = e.which

    if (prevPage == null) {
        href = (href.indexOf('?') === -1 ? '?' : +'&') + 'page=1'
        prevPage = 1
    }

    if (keyCode === 97 && page !== null && page !== -1) {
        page--
    }
    if (keyCode === 100) {
        if (page == null) page = 2
        else page++
    }

    if (keyCode === 97 || keyCode === 100 && page !== null) {
        location.href = href.replace(`page=${prevPage}`, `page=${page}`)
    }
}

chrome.storage.sync.get(['on', 'className', 'firstRow', 'lastRow', 'column'], function (items) {
    console.log('items :', items)

    if (items.on) {
        $(document).on('keypress', handlePaging);

        const tr = "tr[onmouseover='mouseOver(this)']";
        const count = $("." + items.className).find(tr).length - 1
        const firstRowVal = $("." + items.className).find(tr).eq(items.firstRow).find("td").eq(items.column).text()
        const lastRowVal = $("." + items.className).find(tr).eq(count - (items.lastRow)).find("td").eq(items.column).text()
        console.log('첫번째 줄 값 :', firstRowVal, ' 마지막 줄 값 : ', lastRowVal, '현재 페이지 :', getParameterByName('page'))
    }
});
