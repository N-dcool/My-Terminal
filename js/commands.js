var youtube = "https://www.youtube.com/channel/UCnPVNQCldsXx5x1Frs6JTXg";
var password = "naresh123";
var linkedIn = "https://www.linkedin.com/in/naresh-choudhary-0009b3212/";
var github = "https://github.com/Nareshchoudhary02";
var resume = "https://drive.google.com/file/d/1gxXIXafkn4lWm-i08vQzj_0zFwuBt0A2/view?usp=share_link";

whois = [
    "<br>",
    "Hey, I'm Naresh👋",
    "I am Final year student at GCOEARA",
    "I am trying to improve myself in software programming. Coding is a love.🥰",
    "My Aim: Successful software developer and develop innovative solutions",
    'Resume        <a href="' + resume + '" target="_blank">Naresh/Resume' + "</a>",
    "<br>"
];

whoami = [
    "<br>",
    "The paradox of “Who am I?” is: we never know, but, we constantly find out.",
    "<br>"
];

social = [
    "<br>",
    'YouTube        <a href="' + youtube + '" target="_blank">youtube/Daddycool' + "</a>",
    'LinkedIn      <a href="' + linkedIn + '" target="_blank"> linkedIn/Naresh Choudhary' + '</a>',
    'GitHub         <a href="' + github + '" target="_blank">github/Naresh Choudhary' + "</a>",
    "<br>"
];

secret = [
    "<br>",
    '<span class="command">sudo</span>           Only use if you\'re admin',
    "<br>"
];

donation = [
    "<br>",
    '<span class="command">Hey thanks for thinking about donation 💖</span>',
    '<a href="https://buymeacoffee.com/coolnaresh" target="_blank">Click For Buy Me A Coffe</a>',
    "<br>"
];

projects = [
    "<br>",
    "Most projects are public and Open Source on my Github.",
    'GitHub         <a href="' + github + '" target="_blank">github/Naresh Choudhary' + "</a>",
    "<br>"
];

help = [
    "<br>",
    '<span class="command">whois</span>          Who is Naresh?',
    '<span class="command">whoami</span>         Who are you?',
    '<span class="command">video</span>          View YouTube videos',
    '<span class="command">donate</span>         Donation Link',
    '<span class="command">social</span>         Display social networks',
    '<span class="command">secret</span>         Find the password',
    '<span class="command">projects</span>       View coding projects',
    '<span class="command">history</span>        View command history',
    '<span class="command">help</span>           You obviously already know what this does',
    '<span class="command">clear</span>          Clear terminal',
    '<span class="command">banner</span>         Display the header',
    "<br>",
]

// banner = [
//     "                          oooo$$$$$$$$$$$$oooo",
//     "                      oo$$$$$$$$$$$$$$$$$$$$$$$$o",
//     "                   oo$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$o         o$   $$ o$",
//     "   o $ oo        o$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$o       $$ $$ $$o$",
//     "oo $ $ \"$      o$$$$$$$$$    $$$$$$$$$$$$$    $$$$$$$$$o       $$$o$$o$",
//     "\"$$$$$$o$     o$$$$$$$$$      $$$$$$$$$$$      $$$$$$$$$$o    $$$$$$$$",
//     "  $$$$$$$    $$$$$$$$$$$      $$$$$$$$$$$      $$$$$$$$$$$$$$$$$$$$$$$",
//     "  $$$$$$$$$$$$$$$$$$$$$$$    $$$$$$$$$$$$$    $$$$$$$$$$$$$$  \"\"\"$$$",
//     "   \"$$$\"\"\"\"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$     \"$$$",
//     "    $$$   o$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$     \"$$$o",
//     "   o$$\"   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$       $$$o",
//     "   $$$    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\" \"$$$$$$ooooo$$$$o",
//     "  o$$$oooo$$$$$  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   o$$$$$$$$$$$$$$$$$",
//     "  $$$$$$$$\"$$$$   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$     $$$$\"\"\"\"\"\"\"\"",
//     " \"\"\"\"       $$$$    \"$$$$$$$$$$$$$$$$$$$$$$$$$$$$\"      o$$$",
//     "            \"$$$o     \"\"\"$$$$$$$$$$$$$$$$$$\"$$\"         $$$",
//     "              $$$o          \"$$\"\"$$$$$$\"\"\"\"           o$$$",
//     "               $$$$o                 oo             o$$$\"",
//     "                \"$$$$o      o$$$$$$o\"$$$$o        o$$$$",
//     "                  \"$$$$$oo     \"\"$$$$o$$$$$o   o$$$$\"\"  ",
//     "                     \"\"$$$$$oooo  \"$$$o$$$$$$$$$\"\"\"",
//     "                        \"\"$$$$$$$oo $$$$$$$$$$       ",
//     "                                \"\"\"\"$$$$$$$$$$$        ",
//     "                                    $$$$$$$$$$$$       ",
//     "                                     $$$$$$$$$$\"      ",
//     "                                      \"$$$\"\"\"\"",
//     "                                                             ",
    // '<span class="color2">Welcome to my interactive web terminal.</span>',
    // "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>"
// ]

banner = [


    "_/\\\\\\\\\\_____/\\\\\\_______________________________________________________________/\\\\\\________________         ",
    "_\\/\\\\\\\\\\\\___\\/\\\\\\______________________________________________________________\\/\\\\\\________________        ",
    "__\\/\\\\\\/\\\\\\__\\/\\\\\\______________________________________________________________\\/\\\\\\________________       ",
    "  _\\/\\\\\\//\\\\\\_\\/\\\\\\___/\\\\\\\\\\\\\\\\\\______/\\\\/\\\\\\\\\\\\\\______/\\\\\\\\\\\\\\\\____/\\\\\\\\\\\\\\\\\\\\__\\/\\\\\\________________      ",
    "   _\\/\\\\\\\\//\\\\\\\\/\\\\\\__\\////////\\\\\\____\\/\\\\\\/////\\\\\\___/\\\\\\/  /\\\\\\___\\/\\\\\\//////___\\/\\\\\\\\\\\\\\\\\\\\_________     ",
    "    _\\/\\\\\\_\\//\\\\\\/\\\\\\____/\\\\\\\\\\\\\\\\\\\\___\\/\\\\\\___\\///___/\\\\\\\\\\\\\\\\\\\\\\___\\/\\\\\\\\\\\\\\\\\\\\__\\/\\\\\\/////\\\\\\________    ",
    "     _\\/\\\\\\__\\//\\\\\\\\\\\\___/\\\\\\/////\\\\\\___\\/\\\\\\_________\\//\\\\///////____\\////////\\\\\\__\\/\\\\\\___\\/\\\\\\________   ",
    "      _\\/\\\\\\___\\//\\\\\\\\\\__\\//\\\\\\\\\\\\\\\\/\\\\__\\/\\\\\\__________\\//\\\\\\\\\\\\\\\\\\\\___/\\\\\\\\\\\\\\\\\\\\__\\/\\\\\\___\\/\\\\\\________  ",
    "       _\\///_____\\/////____\\////////\\//___\\///____________\\//////////___\\//////////___\\///____\\///_________ ",
    "<br>",
    "<br>",
    '<span class="color2">Welcome to my interactive web terminal.</span>',
    "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>"

]
