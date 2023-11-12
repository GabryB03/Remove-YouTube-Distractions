// ==UserScript==
// @name         YouTube Remove Distractions
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove all the YouTube distractions to get concentrated on what's really important
// @author       GabryB03
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @updateURL    https://github.com/GabryB03/Remove-YouTube-Distractions/raw/main/RemoveYouTubeDistractions.user.js
// @downloadURL  https://github.com/GabryB03/Remove-YouTube-Distractions/raw/main/RemoveYouTubeDistractions.user.js
// @grant        none
// ==/UserScript==

(function()
{
    'use strict';

    function asyncLoop()
    {
        try
        {
            var distractingElements = ["/feed/library", "/feed/history", "/playlist?list=WL", "/playlist?list=LL", "/account", "/reporthistory"];

            for (var i = 0; i < distractingElements.length; i++)
            {
                var distractingElement = document.querySelector("a[href='" + distractingElements[i] + "']");

                if (distractingElement != null && distractingElement != undefined)
                {
                    distractingElement.remove();
                }
            }

            distractingElements = ["Guida", "Invia feedback"];

            for (var i = 0; i < distractingElements.length; i++)
            {
                var distractingElement = document.querySelector("a[title='" + distractingElements[i] + "']");

                if (distractingElement != null && distractingElement != undefined)
                {
                    distractingElement.remove();
                }
            }

            distractingElements = ["contentContainer", "buttons", "start"];

            for (var i = 0; i < distractingElements.length; i++)
            {
                var distractingElement = document.getElementById(distractingElements[i]);

                if (distractingElement != null && distractingElement != undefined)
                {
                    distractingElement.remove();
                }
            }

            distractingElements = ["Esegui una ricerca vocale", "Notifiche"];

            for (var i = 0; i < distractingElements.length; i++)
            {
                var distractingElement = document.querySelector("button[aria-label='" + distractingElements[i] + "']");

                if (distractingElement != null && distractingElement != undefined)
                {
                    distractingElement.remove();
                }
            }
        }
        catch (e)
        {

        }

        setTimeout(async function()
        {
            await asyncLoop();
        },
        500);
    }

    asyncLoop();
})();