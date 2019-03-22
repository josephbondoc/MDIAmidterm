// Variables

// Main Candy + Text

var ohhenry = document.querySelector("#OhHenry")
    crunch = document.querySelector("#Crunch")
    musketeers = document.querySelector("#Musketeers")
    eatmore = document.querySelector("#EatMore")
    glosette = document.querySelector("#Glosette")
    hershey = document.querySelector("#Hershey")
    kitkat = document.querySelector("#KitKat")
    mars = document.querySelector("#Mars")
    snickers = document.querySelector("#Snickers")
    twix = document.querySelector("#Twix")
    
// Candy Icons

var ohhenryicon = document.querySelector("#OhHenryIcon")
    crunchicon = document.querySelector("#CrunchIcon")
    musketeersicon = document.querySelector("#MusketeersIcon")
    eatmoreicon = document.querySelector("#EatMoreIcon")
    glosetteicon = document.querySelector("#GlosetteIcon")
    hersheyicon = document.querySelector("#HersheyIcon")
    kitkaticon = document.querySelector("#KitKatIcon")
    marsicon = document.querySelector("#MarsIcon")
    snickersicon = document.querySelector("#SnickersIcon")
    twixicon = document.querySelector("#TwixIcon")

// Ramin

var ramin = document.querySelector("#Ramin")
    sbubble = document.querySelector("#Bubble")
    henrytext = document.querySelector("#OhHenry_3_")
    welcometext = document.querySelector("#Welcome_1_")
    rand1 = document.querySelector("#RandomOne")
    rand2 = document.querySelector("#RandomTwo")
    rand3 = document.querySelector("#RandomThree")

// Interface

var lbut = document.querySelector("#LeftBut")
var rbut = document.querySelector("#RightBut")
var atc = document.querySelector("#Add_To_Cart_2_")
var quantity = document.querySelector("#numcount")
var share = document.querySelector("#Share_2_")
var sign = document.querySelector("#Surveillance_Sign")

// Hide elements
    
// Candy + Text
$("#OhHenry").hide();
$("#Crunch").hide();
$("#Musketeers").hide();
$("#EatMore").hide();
$("#Glosette").hide();
$("#Hershey").hide();
$("#KitKat").hide();
$("#Mars").hide();
$("#Snickers").hide();
$("#Crunch").hide();
$("#Twix").hide();


// Icons
$("#OhHenryIcon").hide();
$("#CrunchIcon").hide();
$("#MusketeersIcon").hide();
$("#EatMoreIcon").hide();
$("#GlosetteIcon").hide();
$("#HersheyIcon").hide();
$("#KitKatIcon").hide();
$("#MarsIcon").hide();
$("#SnickersIcon").hide();
$("#TwixIcon").hide();

// Ramin
$("#Ramin").hide();

// Ramin Speech

$("#Bubble").hide();
$("#OhHenry_3_").hide();
$("#RandomOne").hide();
$("#RandomTwo").hide();
$("#RandomThree").hide();
$("#Welcome_1_").hide();

// Environment

$(sign).hide();

// After x seconds, Show Ramin and his welcome text
// Text will fade away
// Display Icons (First Page)

$(document).ready(function() {
    $(ramin).delay(1000).fadeIn(500);
    $(sbubble).delay(1500).fadeIn(500);
    $(welcometext).delay(1500).fadeIn(500);
    $(welcometext).delay(2500).fadeOut(500);
    $("#OhHenryIcon").delay(2500).fadeIn(500);
    $("#CrunchIcon").delay(2500).fadeIn(500);
    $("#EatMoreIcon").delay(2500).fadeIn(500);
    $("#GlosetteIcon").delay(2500).fadeIn(500);
    $("#HersheyIcon").delay(2500).fadeIn(500);
});

// Start random text

function raminSpeech() {

// 3 ramin quotes array
   var raminArr = [
        rand1, rand2, rand3
    ];
    // Choose 1 Ramin Quotes 
    var randRamin = raminArr[Math.floor(Math.random() * raminArr.length)];
    $(randRamin).addClass('raminQuote');
    $(randRamin).delay(500).fadeIn(500);
}

setInterval(function() {
    $('.raminQuote').fadeOut(500);
    raminSpeech();

  },
  5000); // every 5 seconds

// once candyicon is clicked display candy + text - FIRST 5

$(hersheyicon).click(function(){
    $(".chocbar").fadeOut(500);
    $(hershey).fadeIn(500);
    $(hershey).addClass('chocbar');
})
$(glosetteicon).click(function(){
    $(".chocbar").fadeOut(500);
    $(glosette).fadeIn(500);
    $(glosette).addClass('chocbar');
})
$(eatmoreicon).click(function(){
    $(".chocbar").fadeOut(500);
    $(eatmore).fadeIn(500);
    $(eatmore).addClass('chocbar');
})
$("#HenryFace").hide();
$(ohhenryicon).click(function(){
    $(".chocbar").fadeOut(500);
    $(ohhenry).fadeIn(500);
    $(ohhenry).addClass('chocbar');
    $("#HenryFace").delay(5000).fadeIn(1000);
    $("#OhHenryBar").delay(4500).fadeOut(500);
    
})
$(crunchicon).click(function(){
    $(".chocbar").fadeOut(500);
    $(crunch).fadeIn(500);
    $(crunch).addClass('chocbar');
})


// once candyicon is clicked display candy + text - NEXT 5

$(kitkaticon).click(function(){
    $(".chocbar").fadeOut(500);
    $(kitkat).fadeIn(500);
    $(kitkat).addClass('chocbar');
})
$(musketeersicon).click(function(){
    $(".chocbar").fadeOut(500);
    $(musketeers).fadeIn(500);
    $(musketeers).addClass('chocbar');
})
$(snickersicon).click(function(){
    $(".chocbar").fadeOut(500);
    $(snickers).fadeIn(500);
    $(snickers).addClass('chocbar');
})
$(marsicon).click(function(){
    $(".chocbar").fadeOut(500);
    $(mars).fadeIn(500);
    $(mars).addClass('chocbar');
})
$(twixicon).click(function(){
    $(".chocbar").fadeOut(500);
    $(twix).fadeIn(500);
    $(twix).addClass('chocbar');
})

// Interface 

// Left + Right Buttons
var LButNum = 
$(LeftBut).click(function(){
    $(kitkaticon).hide();
    $(marsicon).hide();
    $(snickersicon).hide();
    $(twixicon).hide();
    $(musketeersicon).hide();

    $(hersheyicon).show();
    $(glosetteicon).show();
    $(eatmoreicon).show();
    $(ohhenryicon).show();
    $(crunchicon).show();
})

$(RightBut).click(function(){
    $(hersheyicon).hide();
    $(glosetteicon).hide();
    $(eatmoreicon).hide();
    $(ohhenryicon).hide();
    $(crunchicon).hide();

    $(kitkaticon).show();
    $(marsicon).show();
    $(snickersicon).show();
    $(twixicon).show();
    $(musketeersicon).show();
})

// Add to Cart (Increase Quantity number by 1) 
// idk why this took me so much time

var count = 0;
$(atc).click(function(){
    count++;
    $("#numcount").html(+count);
    
})

// EASTER EGG - when count hits 5, display smile poster
// GIVING UP I CANT DO IT OH MY GOD
// var num = parseInt($(count).text());
//     if (count == 5){
//         $(sign).fadeIn(500);

// var numb = $("#numcount").text();
// console.log(parseInt(numb));

// console.log(count);


// Share Button (Goes to Facebook)
$(share).click(function(){
    var fb = window.open('https://facebook.com', '_blank');
    fb;
    if (fb) {
        //Browser has allowed it to be opened
        fb.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups so you can tell the world that you love chocolate, but in reality no one really cares.');
    }
})











