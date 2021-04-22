// ==UserScript==
var foo = 1;
// @name        Team test
// @description Final test results
// @include     https://bingosync.com/?*
// @match       *://bingosync.com/?+foo)
// ==/UserScript==
        document.getElementById('id_room_name').value="Team "+(foo)
        document.getElementById('id_passphrase').value = '1234';
      document.getElementById('id_nickname').value = 'Host'
        document.getElementById('id_game_type').value= 273
        document.getElementById('id_hide_card').checked="checked"
        document.getElementById('id_is_spectator').checked="checked"
        document.getElementById('id_variant_type').value = 'normal'
    document.forms[0].submit();
