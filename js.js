function change_color(color) {
    document.getElementById("stylesheet").setAttribute("href", "css" + color + ".css");
    window.location.reload
}
var coloru = "#f14f2b";

function color(a) {
    coloru = a;
    document.getElementById("views_i").style.color = coloru
}
var intro = document.getElementById("intro");
intro.style.width = window.innerWidth + "px";
intro.style.height = window.innerHeight - 40 + "px";
var space_num = 1,
    space_name = document.getElementById("space" + space_num),
    intro_h = document.getElementById("intro_h"),
    intro_p = document.getElementById("intro_p"),
    str = "Welcome to MALVINThis is my Portfolio ",
    tag = '<pre id="intro_h_pre"></pre>';
document.onload = setTimeout(function() {
    var iii = 0;
    space_name.innerHTML = tag;
    document.getElementById("intro_h_pre").style.padding = "30px 0";
    intro_h.innerHTML += str[iii];
    string_out(intro_h, iii)
}, 3e3);

function string_out(place, iii) {
    iii++;
    setTimeout(function() {
        place.innerHTML += str[iii]
    }, 300);
    if (iii < 16) setTimeout(function() {
        string_out(place, iii)
    }, 300);
    else {
        if (iii == 16) {
            space_name.style.display = "none";
            space_num++;
            space_name.innerHTML = tag;
            document.getElementById("intro_h_pre").style.padding = "10px 0"
        }
        if (iii < 37) {
            setTimeout(function() {
                string_out(intro_p, iii)
            }, 300)
        }
        if (iii > 37) space_name.style.display = "none"
    }
}
window.onload = function() {
    document.getElementById("navbar_links").style.display = "none"
};

function drop_menu() {
    if (document.getElementById("navbar_links").style.display == "block") {
        document.getElementById("drop_up").style.display = "none";
        document.getElementById("drop_down").style.display = "inline-block";
        document.getElementById("navbar_links").style.display = "none"
    } else {
        document.getElementById("drop_up").style.display = "inline-block";
        document.getElementById("drop_down").style.display = "none";
        document.getElementById("navbar_links").style.display = "block"
    }
}
var navbar = document.getElementById("navbar");
var navbar_links = document.getElementById("navbar_links"),
    section = document.getElementsByTagName("section");

function scroll_func() {
    if ((document.documentElement.scrollTop || document.body.scrollTop) >= 10) {
        navbar.style.backgroundColor = "rgba(255,255,255,0.9)";
        navbar.style.color = "#1f1f1f";
        navbar.style.boxShadow = "0 0 10px grey";
        navbar.style.position = "fixed";
        document.getElementById("space").style.paddingTop = "40px"
    }
    if ((document.documentElement.scrollTop || document.body.scrollTop) <= 5) {
        navbar.style.backgroundColor = "rgba(0,0,0,0)";
        navbar.style.color = "#1f1f1f";
        navbar.style.boxShadow = "0 0 rgba(0,0,0,0)";
        navbar.style.position = "static";
        navbar.style.backgroundColor = "transparent";
        document.getElementById("space").style.paddingTop = "0px"
    }
}
var parts = document.getElementsByClassName("parts");

function goto_func(a) {
    for (i = 0; i < 3; i++) {
        parts[i].style.display = "none"
    }
    parts[a].style.display = "block"
}
document.getElementById("change_color").style.left = "-167px";

function onclick_content(content) {
    if (document.getElementById(content + "_hover").style.display == "block") document.getElementById(content + "_hover").style.display = "none";
    else {
        var con = content;
        for (var ii = 1; ii <= 2; ii++) {
            content = "tools_a";
            document.getElementById(content + "_hover").style.display = "none";
            content = "languages_a";
            document.getElementById(content + "_hover").style.display = "none";
            content = "gothelpfrom_a";
            document.getElementById(content + "_hover").style.display = "none"
        }
        content = con;
        document.getElementById(content + "_hover").style.display = "block"
    }
}
var views_var = 0;
window.onload = function() {
    views_var += 1;
    document.getElementById("views_p").innerHTML = views_var
};
var r = 1,
    b = 0;

function likes_func() {
    if (r == 1) {
        b++;
        r++;
        document.getElementById("views_i").style.color = coloru
    } else if (r >= 2) {
        b--;
        document.getElementById("views_i").style.color = "white";
        r--
    }
    document.getElementById("likes_p").innerHTML = b
}