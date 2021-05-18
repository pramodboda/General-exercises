debugger;
//Step 1 -
$('#divResourceLinks, #divEnterpriseProductLinks').css({"width":"50%", "float":"left"});

$('#divResourceLinks').find('.card').parent().removeClass('col-lg-3');
$('#divResourceLinks').find('.card').parent().addClass('col-lg-6');
$('#divResourceLinks').find('.card').css({"margin-bottom":"25px"});

//Step 2 -
$('#divEnterpriseProductLinks').find('.card').parent().addClass('col-lg-12');

//Step 3 -
// $('#divEnterpriseProductLinks h3').css({"display":"none"}); // - will hides the element
$('#divEnterpriseProductLinks h3').remove(); // - will deletes the element from the DOM