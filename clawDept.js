/* WEB INTRO */ 
$(document).ready(function() {
    $( "#instroImg" ).delay(500).effect( "blind", 400 );
    $( "#instro" ).delay(700).effect( "blind", 700 );
})

/* CHANGING INTRO BACKGROUND */

var bckgImgs = ["sneakers.jpg","girl.jpg"];
var introImgs = ["manWom.jpg","squat.jpg"];
$(function () {
    var i = 0;
    var y = 0;
    setInterval(function () {
        
        
        
        if ($("#introImg").css("display") == "none") {
            i++;
            if (i === introImgs.length) {
                i = 0;
            }
                $("#introImg").attr("src", "imgs/" + introImgs[i]);
                $("#introImg").fadeIn(800);
        } else {
            y++;
        if (y === bckgImgs.length) {
            y = 0;
        }
                $("#introSect").css("background-image", "url(imgs/" + bckgImgs[y] + ")");
                $("#introImg").fadeOut(800);
        }
        
    }, 3000);
});

/* CAROUSEL TIME */
let sliderContainer = document.querySelector('#carousel');
let innerSlider = document.querySelector('#selUl');

let pressed = false;
let startX;
let x;

sliderContainer.addEventListener('mousedown', (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
})

sliderContainer.addEventListener("mouseenter", () => {
    sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseup", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
});

sliderContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;

    checkBoundary();
});

const checkBoundary = () => {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
    }

    if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
};

/* STYLE CHANGING ON SCROLL */

let elemY = $("#sect5");
let elemTop = elemY.position().top
let elemBot = elemY.position().top + elemY.outerHeight(true)

$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > elemTop - 400) {
          $("body").addClass("blackyBckg")
          $(".4lee").addClass("pinkyf")
          $(".linky").addClass("pinkyf")
          $("#feats6").addClass("pinkyF")
          $("#sect5").addClass("pinkyF")
          $(".titley").addClass("pinkyF")
          $("#3rdButt").addClass("pinkyButt")
          $("#4thButt").addClass("pinkyButt")
          $(".s6li").addClass("pinkyBord")
          $("hr").addClass("pinkyBord")
       } 
       if ($(this).scrollTop() < elemTop - 400 || $(this).scrollTop() > elemBot - 200) {
            $("body").removeClass("blackyBckg")
          $(".4lee").removeClass("pinkyf")
          $(".linky").removeClass("pinkyf")
          $("#feats6").removeClass("pinkyF")
          $("#sect5").removeClass("pinkyF")
          $(".titley").removeClass("pinkyF")
          $("#3rdButt").removeClass("pinkyButt")
          $("#4thButt").removeClass("pinkyButt")
          $(".s6li").removeClass("pinkyBord")
          $("hr").removeClass("pinkyBord")
       } 
    });
    });

