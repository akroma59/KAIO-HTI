var sliderImg = document.getElementsByClassName("slider-img");
// var myInterval = setInterval(myInterval, 3000);
var sliderBlock = document.getElementsByClassName("slider-block");
var sliderPart = document.getElementsByClassName("slider-part");


function showImg() {
    sliderImg[0].style.opacity="0.5";
    sliderImg[2].style.opacity="0.5";
    sliderBlock[0].style.display="none";
    sliderBlock[2].style.display="none";
    sliderImg[1].style.opacity="1";
    sliderBlock[1].style.display="block";
}

function insertContent() {
    for (var i = 0; i < sliderPart.length; i++) {
        sliderPart[i].innerHTML="";
        sliderPart[i].appendChild(sliderImg[i]);
        sliderPart[i].appendChild(sliderBlock[i]);
    }
}

function orderContent(direction) {
    var firstImg=sliderImg[0];
    var secondImg=sliderImg[1];
    var thirdImg=sliderImg[2];    

    var firstBlock=sliderBlock[0];
    var secondBlock=sliderBlock[1];
    var thirdBlock=sliderBlock[2];

    if (direction) {
        sliderImg = [thirdImg,firstImg,secondImg];
        sliderBlock = [thirdBlock,firstBlock,secondBlock];
    }
    else {
        sliderImg = [secondImg,thirdImg,firstImg];
        sliderBlock = [secondBlock,thirdBlock,firstBlock];
    }
}
showImg();

btnLeft.onclick = function(){ 
    orderContent(false);
    showImg();  
    insertContent();
};

btnRight.onclick = function(){
    orderContent(true);
    showImg();  
    insertContent();
};

