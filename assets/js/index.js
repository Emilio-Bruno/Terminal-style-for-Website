function parser(inputString) {
    switch (inputString.trim()) {
        case "?":
        case "help":
            var p = document.createElement("pre");
            var content = document.createTextNode("me@ScriptIsle:~$ " + inputString);
            p.appendChild(content);

            document.getElementById("contents").appendChild(p);
            document.getElementById('contents').innerHTML += "<p><b><br>help</b> or '<b>?</b>' Display helpful information about builtin commands.<br><br><b>exit</b> or <b>quit</b> Exit the shell.<br><br><b>minimize</b> Minimize the shell.<br><br><b>about</b> Info about ScriptIsle project.<br><br><b>contact</b> or <b>contact us</b> Minimize the shell and open the contact form.<br><br><b>patreon</b> Display patreon's tiers for our project.<br><br><b>clear</b> clears your screen if this is possible.<br><br></p>"
            break;
        case "quit":
        case "exit":
            parser("clear");
            closeTerminal();
            break;
        case "minimize":
            var p = document.createElement("pre");
            var content = document.createTextNode("me@ScriptIsle:~$ " + inputString);

            p.appendChild(content);
            document.getElementById("contents").appendChild(p);
            minimizeTerminal();
            break;
        case "about":
            var p = [document.createElement("pre"), document.createElement("pre"), document.createElement("P")];
            var content = document.createTextNode("me@ScriptIsle:~$ " + inputString);

            p[0].appendChild(content);
            p[1].className = "about";
            p[1].appendChild(document.createTextNode(".d88888b \n"));
            p[1].appendChild(document.createTextNode("88.        \"'\n"));
            p[1].appendChild(document.createTextNode("`Y88888b.\n"));
            p[1].appendChild(document.createTextNode("              '8b\n"));
            p[1].appendChild(document.createTextNode("d8'       .8P\n"));
            p[1].appendChild(document.createTextNode(" Y88888P \n"));
            content = document.createTextNode("I'm a university student, and now I am willing to start a journey in the IT world. I was a huge fan of every documentary I saw on Tv when I was younger; now I would like to spread my knowledge and try to be a good teacher like they were for me.");
            p[2].className = "about";
            p[2].appendChild(content);
            var docFrag = document.createDocumentFragment();
            for (var i = 0; i < 3; i++) {
                docFrag.appendChild(p[i]);
            }

            document.getElementById("contents").appendChild(docFrag);
            break;
        case "patreon":
            var p = document.createElement("pre");
            var content = document.createTextNode("me@ScriptIsle:~$ " + inputString);
            p.appendChild(content);

            document.getElementById("contents").appendChild(p);
            document.getElementById('contents').innerHTML += '<div style="text-align:center;"><div class="tiers-container"><span class="tier-title">FREE</span><ul class="tier-list"><li>Free contents on my Youtube channel</ul></div><div class="tiers-container"><span class="tier-title">6 EURO</span><ul class="tier-list"><li>Early access<li>Telegram group<li>Exclusive voting power<li>Source code/Application download</ul></div><a style="display:block; width:100px; margin: 0 auto 10px auto; color:#66FF66; cursor:pointer;" target="_blank" href="https://www.patreon.com/join/ScriptIsle">Go to Patreon</a></div>';
            break;
        case "contact us":
        case "contact":
            var p = document.createElement("pre");
            var content = document.createTextNode("me@ScriptIsle:~$ " + inputString);

            p.appendChild(content);
            document.getElementById("contents").appendChild(p);
            minimizeTerminal();
            break;
        case "clear":
            var div = document.getElementById('contents');
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
            break;
        case "":
            var p = document.createElement("pre");
            var content = document.createTextNode("me@ScriptIsle:~$ " + inputString);

            p.appendChild(content);
            document.getElementById("contents").appendChild(p);
            break;
        default:
            var p = [document.createElement("pre"), document.createElement("P")];
            var content = document.createTextNode("me@ScriptIsle:~$ " + inputString);
            p[0].appendChild(content);
            content = document.createTextNode("Your input is wrong, if you want to know what commands you can use please write help or '?'.");
            p[1].style.margin = "5px 0";
            p[1].appendChild(content);

            var docFrag = document.createDocumentFragment();
            for (var i = 0; i < 2; i++) {
                docFrag.appendChild(p[i]);
            }

            document.getElementById("contents").appendChild(docFrag);
            break;
    }
}