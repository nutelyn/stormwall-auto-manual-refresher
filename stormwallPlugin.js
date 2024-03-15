// ==UserScript==
// @name         Stormwall Auto Refresh
// @namespace    https://stormwall.pro
// @version      1.0
// @description  try to autorefresh stormwall
// @author       Me and https://github.com/DeesMood
// @match        https://stormwall.pro/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

   // Check if script has run before
    const config = JSON.parse(localStorage.getItem('exampleConfig')) || {
        intervalValue: 0,
        autoRefresh: false
    };


    // Update localStorage with new config
    function saveConfig(config) {
        localStorage.setItem('exampleConfig', JSON.stringify(config));
    }

    // Create form for config
    const form = document.createElement('form');
    form.innerHTML = `
        <label for="intervalValue">Interval Value (in Seconds):</label>
        <input type="number" id="intervalValue" name="intervalValue" value="${config.intervalValue}">
        <br>
        <label for="autoRefresh">Auto Refresh:</label>
        <input type="checkbox" id="autoRefresh" name="autoRefresh" ${config.autoRefresh ? 'checked' : ''}>
        <br>
        <button type="submit">Save</button>
    `;

    // Add form to page
    document.body.insertBefore(form, document.body.firstChild);

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        config.intervalValue = parseInt(document.getElementById('intervalValue').value, 10);
        config.autoRefresh = document.getElementById('autoRefresh').checked;
        saveConfig(config);
        location.reload();
    });

    // Check if autoRefresh is enabled and set interval
    if (config.autoRefresh) {
        var interval = parseInt(config.intervalValue, 10) * 1000; // convert time (second(s)) to ms
        // var interval = parseInt(config.intervalValue, 10) * 60 * 1000; // convert time (minute(s)) to ms
        setInterval(function() {
            // Refresh page here
            var loc = location.href;
            var index = location.href;
            index = index.indexOf('#');
            if (index !== -1) {
                var strippedStr = loc.substring(0, index);
                // console.log(strippedStr); // debugging purposes only
                location.replace(strippedStr + "#protocol_select");
            } else {
                location.replace(location.href + "#protocol_select");
            }

        }, interval);
    }
})();
