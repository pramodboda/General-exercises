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


//finding pbaText
var pbaText = $('.half-hero h2.text-white:contains(Power, Batteries & Adapters)');

// finding pbaText parent block
var pbaBlock = $(pbaText).closest('.half-hero');

// finding pbaBlock right image elements
var pbaTotalProducts = $(pbaBlock).find('*[data-testid="featured_module_image"]');

//Step 3 -
(function(){
  alert(`Power, Batteries & Adapters Products: ${pbaTotalProducts.length}` );
})();
