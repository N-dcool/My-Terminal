var textarea = document.getElementById("texter");
var command = document.getElementById("typer");
var before = document.getElementById("before");
var liner = document.getElementById("liner");
var terminal = document.getElementById("terminal");

var commands = [];
var git = 0;
var pw = false;
let pwd = false;

setTimeout(function(){
    loopLines(banner, "", 80);
    textarea.focus();
},100);

window.addEventListener("keyup", enterKey);

console.log(
    "%cYou hacked my password!😡 HAHAHA",
    "color: #04ff00; font-weight: bold; font-size: 24px;"
);
console.log(
    "%cPassword: '" + "naresh123" + "' - I wonder what it does",
    "colo: grey"            
)

textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
    if (e.keyCode == 181) {
      document.location.reload(true);
    }
    if (pw) {
      let et = "*";
      let w = textarea.value.length;
      command.innerHTML = et.repeat(w);
      if (textarea.value === password) {
        pwd = true;
      }
      if (pwd && e.keyCode == 13) {
        loopLines(secret, "color2 margin", 120);
        command.innerHTML = "";
        textarea.value = "";
        pwd = false;
        pw = false;
        liner.classList.remove("password");
      } else if (e.keyCode == 13) {
        addLine("Wrong password", "error", 0);
        command.innerHTML = "";
        textarea.value = "";
        pw = false;
        liner.classList.remove("password");
      }
    } else {
      if (e.keyCode == 13) {
        commands.push(command.innerHTML);
        git = commands.length;
        addLine("root@user:~$ " + command.innerHTML, "no-animation", 0);
        commander(command.innerHTML.toLowerCase());
        command.innerHTML = "";
        textarea.value = "";
      }
      if (e.keyCode == 38 && git != 0) {
        git -= 1;
        textarea.value = commands[git];
        command.innerHTML = textarea.value;
      }
      if (e.keyCode == 40 && git != commands.length) {
        git += 1;
        if (commands[git] === undefined) {
          textarea.value = "";
        } else {
          textarea.value = commands[git];
        }
        command.innerHTML = textarea.value;
      }
    }
  }

function commander(cmd){
    switch (cmd.toLowerCase()){
       case "help":
            loopLines(help, "color2 margin", 80);
            break;
        case "whois":
            loopLines(whois, "color2 margin", 80);
            break;
        case "whoami":
            loopLines(whoami, "color2 margin", 80);
            break;  
        case "video":
            addLine("Opening YouTube... ", "color2", 80);
            newTab("https://youtu.be/p3SPgIFBYB0?t=1");
            break;
        case "sudo":
            addLine("Oh no, you're not admin...","color2", 80);
            setTimeout(function(){
                window.open("https://youtu.be/XqZsoesa55w?t=27")
            }, 1000);
            break;
        case "social":
            loopLines(social, "color2 margin", 80);
            break;
        case "secret":
            liner.classList.add("password");
            pw = true;
            break;
        case "projects":
            loopLines(projects, "color2 margin", 80);
            break;
        case "password":
            addLine("<span class=\"inherit\"> Lol! You're joking, right? You\'re gonna have to try harder than that!😂</span>", "error", 100);
            break;
        case "history":
            addLine("<br>", "" , 0);
            loopLines(commands, "color2", 80);
            addLine("<br>", "command", 80*commands.length + 50);
            break; 
        case "clear":
            setTimeout(function() {
                terminal.innerHTML = '<a id="before"></a>';
                before = document.getElementById("before");
            }, 1);
            break;
        case "banner":
            loopLines(banner, "", 80);
            break;
        // socials
        case "youtube":
            addLine("Opening YouTube...", "color2", 80);
            newTab(youtube);
            break;
        case "instagram":
            addLine("Opening Instagram...", "color2", 0);
            newTab(instagram);
            break;
        case "github":
            addLine("Opening GitHub...", "color2", 0);
            newTab(github);
            break;
        case "donate":
            loopLines(donation, "color2 margin", 80);
            break;
        default:
            addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
            break;                      

    }
}

function newTab(link){
    setTimeout(function(){
        window.open(link, "_blank");
    },500);
}


function addLine(text, style, time){
    var t = "";
    for(let i=0; i<text.length; i++){
        if(text.charAt(i)==' ' && text.charAt(i+1) == ' '){
            t+= "&nbsp;&nbsp";
            i++;
        }else {
            t+= text.charAt(i);
        }
        
    }

    setTimeout(function() {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;

        before.parentNode.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}


function loopLines(name, style, time) {
    name.forEach(function(item, index){
        addLine(item, style, index*time);
    });
}

