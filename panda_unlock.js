// ==UserScript==
// @name         PandaLive Adult Unlocked (without logging in)
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Just for fun!
// @author       t4si, K1a
// @match        https://www.pandalive.co.kr/live/play/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var cracked = false;

    function check() {
        mediaAdult = "N";
        if (userInfo != undefined && !cracked && playSizeCode != undefined && playList[playSizeCode] != undefined && player != undefined) {
            unlockAdult()
        } else {
            setTimeout(function() {
                check()
            }, 1000)
        }
    }

    function unlockAdult() {
        userInfo.authBirthdayAdultYN = 'Y';
        userInfo.isLogin = true;
        playList[playSizeCode][0].file = playList[playSizeCode][0].file.replace('_radio', '');
        player.load(playList[playSizeCode]);
        cracked = true
    }
    check();
})();
