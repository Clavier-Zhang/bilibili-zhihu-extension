

function removeElements() {
    console.log('hello bilibili yeah~')

    const keyWords = [
        '直播',
        '会员购',
        '大会员',
        '游戏中心',
        '赛事',
        '下载APP',
        'BW'

    ]

    const paths = [
        'a.try-feedback',
        'a.contact-help',
        'div.text-info',
        '#bili_live',
        '#bili_ad',
        '#reportFirst2',
        'a.banner-card',
        'div.mascot',
        'div.slide-gg',
        '#right-bottom-banner',
        '#live_recommand_report',
        // game ad
        '#reco_list > div.rec-list > div.video-page-game-card',

        // headers icon
        // 下载APP
        // '#internationalHeader > div.mini-header.m-header > div > div.nav-link > ul > li:nth-child(9)',
        // 直播
        // '#internationalHeader > div.mini-header.m-header > div > div.nav-link > ul > li:nth-child(4)',
        // 'div#slide_ad'
    ]
    paths.forEach((path) => {
        let elems = document.querySelectorAll(path)
        elems.forEach((elem) => {
            elem.parentNode.removeChild(elem)
        })
        console.log(path)
    })

    keyWords.forEach((word) => {
        let xpath = `//a[contains(text(),'${word}')]`
        let matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (matchingElement) {
            matchingElement.parentNode.removeChild(matchingElement)
        }
    })

    
    
    // var xpath = "//a[text()='直播']";
    // var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    // matchingElement.parentNode.removeChild(matchingElement)
}


setTimeout(removeElements, 300);

setTimeout(removeElements, 450);

setTimeout(removeElements, 600);

setTimeout(removeElements, 800);

setTimeout(removeElements, 2000);

setTimeout(removeElements, 3000);

setTimeout(removeElements, 3500);

setTimeout(removeElements, 4000);