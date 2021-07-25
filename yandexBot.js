// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://yandex.ru/?utm_source=google&utm_medium=search&utm_campaign=brand_search_msk%3Aspb&utm_term=%D0%BD%D1%84%D1%82%D0%B2%D1%83%D1%87&gclid=EAIaIQobChMIp-On47T-8QIVokaRBR1OlQQaEAAYASAAEgLMVPD_BwE&campaignid=1679697480&adgroupid=67114848124&creative=438922846294&keyword=%D0%BD%D1%84%D1%82%D0%B2%D1%83%D1%87
// @icon         https://www.google.com/s2/favicons?domain=yandex.ru
// @grant        none
// ==/UserScript==

let words = ['Гобой', 'Флейта', 'Как звучит кларнет', 'Валторна', 'Фагот'];
let yandexInput = document.getElementsByName('text')[0];
yandexInput.value = words[getIntRandom(0, words.length)];

let searchBtn = document.getElementsByClassName('button mini-suggest__button button_theme_search button_size_search i-bem')[0];
if(searchBtn != undefined) {
    setTimeout(function() {
    searchBtn.click();
    }, 1500);
}else {
    let links = document.links;
    let next = document.getElementsByClassName('link link_theme_none link_target_serp pager__item pager__item_kind_next i-bem');
    let goToTheNextPage = true;
    for(let i = 0; i < links.length; i++) {
        let link = links[i];
        if(link.href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai') != -1) {
            setTimeout(function() {
            link.click();
            }, 2000);
            goToTheNextPage = false;
            break;
        }
    }
    if(goToTheNextPage) setTimeout(function() {next.click();}, 1800);
}

function getIntRandom (min, max) {
    return Math.floor(Math.random()*(max-min)+min);
}
