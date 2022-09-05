/* WEB INTRO */ 
$(document).ready(function() {
    $( "#instroImg" ).delay(500).effect( "blind", 400 );
    $( "#instro" ).delay(700).effect( "blind", 700 );
})

/* PLAY INTRO DIV */

let introMouseDiv = document.getElementById("playIntro");
let introMouseCont = document.getElementById("introButtCont");

introMouseCont.onmouseenter = function() {
    $(introMouseDiv).toggle( "clip", 500 );
}
introMouseCont.onmouseleave = function() {
    $(introMouseDiv).toggle( "clip", 500 );
}

const onMouseMove = (e) =>{
    const mouseY = e.pageY;
    const mouseX = e.pageX;
    introMouseDiv.style.top = mouseY + 'px'
    introMouseDiv.style.left = mouseX + 'px'
  }
document.addEventListener('mousemove', onMouseMove);


/* CHANGING INTRO BACKGROUND */

var bckgImgs = ["sneakers.jpg","girl.jpg","squat.jpg"];
var introImgs = ["strength.jpg","style.jpg"];
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
let sliderContainer = document.querySelector('#carouselCont');
let innerSlider = document.querySelector('#selUl');
let dragButton = document.getElementById("pDrag");
let dragText = document.getElementById("draggy");

let pressed = false;
let startX;
let x;

sliderContainer.addEventListener('mousedown', (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    dragButton.style.width = "80px";
    dragButton.style.height = "80px";
    dragText.innerHTML = "";
})

sliderContainer.addEventListener("mouseup", () => {;
    pressed = false;
    dragButton.style.width = "110px";
    dragButton.style.height = "110px";
    dragText.innerHTML = "DRAG";
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


/* DRAG SLIDER BUTTON */

let dragMouseDiv = document.getElementById("dragTop");
let dragMouseCont = document.getElementById("carouselCont");

dragMouseCont.onmouseenter = function() {
    $(dragMouseDiv).toggle( "blind", 500 );
}
dragMouseCont.onmouseleave = function() {
    $(dragMouseDiv).toggle( "blind", 500 );
}

const onDragMove = (e) =>{
    const mouseY = e.pageY;
    const mouseX = e.pageX;
    dragMouseDiv.style.top = mouseY + 'px'
    dragMouseDiv.style.left = mouseX + 'px'
  }
document.addEventListener('mousemove', onDragMove);


/* STYLE CHANGING ON SCROLL */

let elemY = $("#sect5");
let elemTop = elemY.position().top
let elemBot = elemY.position().top + elemY.outerHeight(true)

$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > elemTop - 600) {
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
       if ($(this).scrollTop() < elemTop - 600 || $(this).scrollTop() > elemBot - 200) {
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

