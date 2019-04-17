$(document).ready(function(){
    
    var randomindex= Math.ceil(Math.random() * 3);
  $('#maindiv').css('background-image','url(img/'+randomindex+'.jpg');
   
  $("#opac").on('mouseover',changeColor);
  $("#opac2").on('mouseover',changeColor);
 
  function changeColor(){
    $(this).css('background-color','white');
    $(this).on('mouseout',changeColor1);
  }
  
  $("#Lora").on("click",showAbout);
function showAbout(){
  $('#Lora').toggleClass('top');
   $("#loraID").fadeToggle();
}
// $("#outlook").on("click",showAbout1);
// function showAbout1(){
//   $('#outlook').toggleClass('left');
//    $("#email").fadeToggle();
// }
  function changeColor1(){
    
    $(this).css('background-color','#D8CBCB');
  }
  $("#cupcakeImg1").on('click',function () {
    
    $("#dialog").dialog("open");
    er(this);
});
$("#cupcakeImg2").on('click',function () {
    
  $("#dialog").dialog("open");
  er(this);
});
$("#cupcakeImg3").on('click',function () {
    
  $("#dialog").dialog("open");
  er(this);
});
$("#cupcakeImg4").on('click',function () {
    
  $("#dialog").dialog("open");
  er(this);
});
$("#cupcakeImg5").on('click',function () {
    
  $("#dialog").dialog("open");
  er(this);
});
$("#cupcakeImg6").on('click',function () {
    
  $("#dialog").dialog("open");
  er(this);
});
$("#cupcakeImg7").on('click',function () {
    
  $("#dialog").dialog("open");
  er(this);
});
$("#cupcakeImg8").on('click',function () {
    
  $("#dialog").dialog("open");
  er(this);
});
 function er(event){
  var eventID=$( event ).attr( "id" );
  console.log(eventID);
  if(eventID=='cupcakeImg1'){
  $('#dialog' ).html('<p>apple cider cake with pureed apple pie filling and cinnamon buttercream</p>'); }
  else if(eventID=='cupcakeImg2'){
  $('#dialog' ).html('<p>banana cake with caramel buttercream and toffee bits</p>') ;}
  else if(eventID=='cupcakeImg3'){
  $('#dialog').html('<p>vanilla cake with vanilla cream filling and chocolate buttercream</p>'); }
  else if(eventID=='cupcakeImg4'){
    $('#dialog').html('<p>apple cake with pureed apple pie filling and caramel buttercream</p>'); }
  else if(eventID=='cupcakeImg5'){
    $('#dialog').html('<p>brownie style cupcake with cheesecake filling and chocolate cream cheese frosting</p>'); }
  else if(eventID=='cupcakeImg6'){
    $('#dialog').html('<p>chocolate cake with cherry filling and vanilla buttercream</p>'); }
  else if(eventID=='cupcakeImg7'){
    $('#dialog').html('<p>vanilla cake with lemon curd filling and vanills buttercream</p>'); }
  else{
    $('#dialog').html('<p>vanilla cake with vanilla cream filling and coconut buttercream</p>'); 
    }
 }
  $(function () {
    
    
 
    $("#dialog").dialog({

        autoOpen: false,
        width:400,
        height:200,
        
        modal: true,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
        
    });
   $('#ui-dialog-title-dialog').hide();
    $('.ui-dialog-titlebar').removeClass('ui-widget-header');
    $('.ui-dialog-titlebar').css('background-color',' rgb(247, 207, 207');
    $('.ui-dialog-titlebar').css('font-family','sans serfi');

   
    $('#dialog').css('font-size','18px'); 
    $('#dialog').css('font-family','sans serfi'); 
    $('#dialog').css('border','0px');

});
});

