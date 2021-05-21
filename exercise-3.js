debugger;

//finding networkingText
var networkingText = $('.half-hero h2.text-white:contains(Networking)');

// finding networkingText parent block
var networkingBlock = $(networkingText).closest('.half-hero');

// finding networkingBlock right image elements
var networkingRightImgs = $(networkingBlock).find('*[data-testid="featured_module_image"]');


//Step 1 -
$(networkingBlock).find('.half-image-module img').attr('src', '//i.dell.com/sites/csimages/Banner_Imagery/all/cameras-4-up-logitech-540x340.png');


var CPV1_photos = ["//snpi.dell.com/snp/images2/110/a8910375.jpg", "//snpi.dell.com/snp/images2/110/a9552314.jpg", "//snpi.dell.com/snp/images2/110/ab391669.jpg","//snpi.dell.com/snp/images2/110/ab286744_v1.jpg"];

  networkingRightImgs.each(function(item){
    for(let i=0; i<CPV1_photos.length; i++){
      $(this).attr("src", CPV1_photos[item]);
    }
    
  });

//Step 2 -
$(networkingBlock).find('.half-image-module').css({"background-color":"purple"});



//==================================== Step 3 

//finding pbaText
var pbaText = $('.half-hero h2.text-white:contains(Power, Batteries & Adapters)');

// finding pbaText parent block
let pbaBlock = $(pbaText).closest('.half-hero');

// getting price blocks from pbaBlock
let getPrices = $(pbaBlock).find('*[data-testid="featured_module_price"]');
let priceArr = [];
let totalPrice = '';

// Removing string from a string and converting to float numbers
getPrices.each(function(item){
  priceArr.push(parseFloat($(this).text().trim().replace('Dell Price $','')));
  console.log(parseFloat($(this).text().trim().replace('Dell Price $','')));
})

// sum of priceArr using reduce helper function.
let totalCal = (accum, currentItem) => accum + currentItem;
totalPrice = priceArr.reduce(totalCal);

(function(){
  alert(`Power, Batteries & Adapters Products - Total Price: $${totalPrice}` );
})();
