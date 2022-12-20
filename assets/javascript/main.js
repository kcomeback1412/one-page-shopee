
var adSliderPrev = document.querySelector(".advertisement-slider-button--prev")
var adSliderNext = document.querySelector(".advertisement-slider-button--next")
var test = 0;
adSliderNext.onclick = function (){
    let  sliderItems = document.querySelectorAll(".advertisement-slider-item");
    document.getElementById('advertisement-slider-wrap').appendChild(sliderItems[0]);
    
}

adSliderPrev.onclick = function (){
    let  sliderItems = document.querySelectorAll(".advertisement-slider-item");
    document.getElementById('advertisement-slider-wrap').prepend(sliderItems[sliderItems.length - 1]);
}

setInterval(function(){
    let  sliderItems = document.querySelectorAll(".advertisement-slider-item");
    document.getElementById('advertisement-slider-wrap').appendChild(sliderItems[0]);
}, 5000)


// 2 buttons in home cart
var homeCartGroupList = document.querySelectorAll('.home-cart-group');
var firstGroupIndex = 0;
document.querySelector(".home-cart-button-prev").style.display = 'none';

document.querySelector(".home-cart-button-next").onclick = function() {
    document.querySelector('.home-cart-wrap').style.left='-360px';
    let i = firstGroupIndex;
    for(i ; i < firstGroupIndex + 3 ; i++ ){
        homeCartGroupList[i].classList.remove('home-cart-group-showing');
        homeCartGroupList[i + 10].classList.add('home-cart-group-showing');
    }
    firstGroupIndex += 3;
    document.querySelector(".home-cart-button-prev").style.display = 'block';    
    let tmp = firstGroupIndex + 10 ;
    if(homeCartGroupList.length == tmp){
       document.querySelector(".home-cart-button-next").style.display = 'none';   
    }
}

document.querySelector(".home-cart-button-prev").onclick = function() {
    document.querySelector('.home-cart-wrap').style.left='0px';
    let i = firstGroupIndex;
    for(i ; i < firstGroupIndex + 3 ; i++ ){
        homeCartGroupList[i+7].classList.remove('home-cart-group-showing');
        homeCartGroupList[i - 3].classList.add('home-cart-group-showing');
    }
    firstGroupIndex -= 3;
    document.querySelector(".home-cart-button-next").style.display = 'block';
    if(firstGroupIndex == 0){
        document.querySelector(".home-cart-button-prev").style.display = 'none';
    }
}


// Falsh sale

var firstProductIndex = 0;
var postitonListProduct = 0;
document.querySelector(".falsh-sale-cart-button-prev").style.display = 'none';

document.querySelector('.falsh-sale-cart-button-next').onclick = function(){
    let countProduct = document.querySelectorAll(".container__home-flash-sale-item").length;
    firstProductIndex += 5;
    postitonListProduct = 200*firstProductIndex;
    document.querySelector(".container__home-flash-sale-list").style.left = '-' + postitonListProduct + 'px';
    if(countProduct - 6 == firstProductIndex) {
        document.querySelector(".falsh-sale-cart-button-next").style.display = 'none';
    } 
    if(firstProductIndex > 0) {
        document.querySelector(".falsh-sale-cart-button-prev").style.display = 'block';
    } 
}

document.querySelector('.falsh-sale-cart-button-prev').onclick = function(){
    let countProduct = document.querySelectorAll(".container__home-flash-sale-item").length;
    firstProductIndex -= 5;
    postitonListProduct = 200*firstProductIndex;
    document.querySelector(".container__home-flash-sale-list").style.left = '-' + postitonListProduct + 'px';
    if(0 == firstProductIndex) {
        document.querySelector(".falsh-sale-cart-button-prev").style.display = 'none';
    } 

    if(firstProductIndex < countProduct - 6 ) {
        document.querySelector(".falsh-sale-cart-button-next").style.display = 'block';
    } 
}

// Home Shopee mall Slider

var firstHomeShopeeMallSliderItemIndex = 0;
var positionHomeShopeeMallSlider = 0;

setInterval(function(){
    let sliderList = document.querySelectorAll('.home-shopee-mall-slider-item');
    let sliderIndexList = document.querySelectorAll('.home-shopee-mall-slider-index-item');
    sliderIndexList[firstHomeShopeeMallSliderItemIndex].classList.remove('home-shopee-mall-slider-index-item-active');
    if(firstHomeShopeeMallSliderItemIndex == sliderList.length - 1){
        firstHomeShopeeMallSliderItemIndex = 0;
    }
    else {
        firstHomeShopeeMallSliderItemIndex += 1;
    }
    sliderIndexList[firstHomeShopeeMallSliderItemIndex].classList.add('home-shopee-mall-slider-index-item-active');
    positionHomeShopeeMallSlider = - firstHomeShopeeMallSliderItemIndex*390;
    let homeSliderShopeeMall = document.querySelector('.home-shopee-mall-slider-list');
    homeSliderShopeeMall.style.left =   positionHomeShopeeMallSlider + 'px';
}
,5000)

document.querySelector('.home-shopee-mall-slider-button--next').onclick = function() {
    let sliderList = document.querySelectorAll('.home-shopee-mall-slider-item');
    let sliderIndexList = document.querySelectorAll('.home-shopee-mall-slider-index-item');
    sliderIndexList[firstHomeShopeeMallSliderItemIndex].classList.remove('home-shopee-mall-slider-index-item-active');
    if(firstHomeShopeeMallSliderItemIndex == sliderList.length - 1){
        firstHomeShopeeMallSliderItemIndex = 0;
    }
    else {
        firstHomeShopeeMallSliderItemIndex += 1;
    }
    sliderIndexList[firstHomeShopeeMallSliderItemIndex].classList.add('home-shopee-mall-slider-index-item-active');
    positionHomeShopeeMallSlider = - firstHomeShopeeMallSliderItemIndex*390;
    let homeSliderShopeeMall = document.querySelector('.home-shopee-mall-slider-list');
    homeSliderShopeeMall.style.left =  positionHomeShopeeMallSlider + 'px';
}

document.querySelector('.home-shopee-mall-slider-button--prev').onclick = function() {
    let sliderList = document.querySelectorAll('.home-shopee-mall-slider-item');
    let sliderIndexList = document.querySelectorAll('.home-shopee-mall-slider-index-item');
    sliderIndexList[firstHomeShopeeMallSliderItemIndex].classList.remove('home-shopee-mall-slider-index-item-active');
    if(firstHomeShopeeMallSliderItemIndex == 0){
        firstHomeShopeeMallSliderItemIndex = sliderList.length - 1;
    }
    else {
        firstHomeShopeeMallSliderItemIndex -= 1;
    }
    sliderIndexList[firstHomeShopeeMallSliderItemIndex].classList.add('home-shopee-mall-slider-index-item-active');
    positionHomeShopeeMallSlider = - firstHomeShopeeMallSliderItemIndex*390;
    let homeSliderShopeeMall = document.querySelector('.home-shopee-mall-slider-list');
    homeSliderShopeeMall.style.left =  positionHomeShopeeMallSlider + 'px';
}

var sliderShopeeMallIndexList = document.querySelectorAll('.home-shopee-mall-slider-index-item');
for(let i = 0 ; i < sliderShopeeMallIndexList.length; i++){
    sliderShopeeMallIndexList[i].onclick = function(){
        sliderShopeeMallIndexList[firstHomeShopeeMallSliderItemIndex].classList.remove('home-shopee-mall-slider-index-item-active')
        firstHomeShopeeMallSliderItemIndex = i;
        sliderShopeeMallIndexList[firstHomeShopeeMallSliderItemIndex].classList.add('home-shopee-mall-slider-index-item-active')
        positionHomeShopeeMallSlider = -firstHomeShopeeMallSliderItemIndex*390;
        let homeSliderShopeeMall = document.querySelector('.home-shopee-mall-slider-list');
        homeSliderShopeeMall.style.left =  positionHomeShopeeMallSlider + 'px';
    }
}

// Home Shopee mall deal

var homeShopeeMallDealIndexGroup = 0;
var homeShopeeMallDealPosition = 0;

document.querySelector('.home-shopee-mall-button-next').onclick = function(){
    let listDealGroupItem = document.querySelectorAll('.home-shopee-mall-deal-group');
    document.querySelector('.home-shopee-mall-button-prev').style.display = 'block';
    homeShopeeMallDealIndexGroup += 1;
    if(homeShopeeMallDealIndexGroup == listDealGroupItem.length - 4){
        document.querySelector('.home-shopee-mall-button-next').style.display = 'none';
    }
    homeShopeeMallDealPosition = -homeShopeeMallDealIndexGroup*200;
    document.querySelector('.home-shopee-mall-deal-list').style.left = homeShopeeMallDealPosition + 'px';
}  

document.querySelector('.home-shopee-mall-button-prev').onclick = function(){
    let listDealGroupItem = document.querySelector('.home-shopee-mall-deal-group');
    document.querySelector('.home-shopee-mall-button-next').style.display = 'block';
    homeShopeeMallDealIndexGroup -= 1;
    if(homeShopeeMallDealIndexGroup == 0){
        document.querySelector('.home-shopee-mall-button-prev').style.display = 'none';
    }
    homeShopeeMallDealPosition = -homeShopeeMallDealIndexGroup*200;
    document.querySelector('.home-shopee-mall-deal-list').style.left = homeShopeeMallDealPosition + 'px';
}

// Home Top Search
var homeTopSearchFirstIndexItem = 0;
var homeTopSearchPosition = 0;

document.querySelector('.home-top-search-button-next').onclick = function(){
    let listItem = document.querySelectorAll('.home-top-search-content-item');
    document.querySelector('.home-top-search-button-prev').style.display = 'block';
    homeTopSearchFirstIndexItem += 5;
    if(homeTopSearchFirstIndexItem == listItem.length - 6){
        document.querySelector('.home-top-search-button-next').style.display = 'none';
    }
    homeTopSearchPosition = -homeTopSearchFirstIndexItem*200;
    document.querySelector('.home-top-search-content-list').style.left = homeTopSearchPosition + 'px';
}

document.querySelector('.home-top-search-button-prev').onclick = function(){
    let listItem = document.querySelectorAll('.home-top-search-content-item');
    document.querySelector('.home-top-search-button-next').style.display = 'block';
    homeTopSearchFirstIndexItem -= 5;
    if(homeTopSearchFirstIndexItem == 0){
        document.querySelector('.home-top-search-button-prev').style.display = 'none';
    }
    homeTopSearchPosition = -homeTopSearchFirstIndexItem*200;
    document.querySelector('.home-top-search-content-list').style.left = homeTopSearchPosition + 'px';
}