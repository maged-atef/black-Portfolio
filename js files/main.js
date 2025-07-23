// Gear Color Pick 

$("#leakG").on("click", function () {

    $(".colors").slideToggle(1000)
})

$(".colors span").on("click", function (e) {
    console.log($(e.target).css("backgroundColor"));

    $(".leak a").css("color", `${$(e.target).css("backgroundColor")}`)
    $("#gear").css("color", `${$(e.target).css("backgroundColor")}`)
})

$(".icom-home").click(function(){
 location.reload()
 
})

$(".about").on("click", function () {

    $(".leak").not(".about").slideUp(500)
    $("#info").slideToggle(300);


})

$(".home").on("click", function () {


    $(".leak").not(".home").slideUp(500)
  

    $("#home").slideToggle(1000)


})

$(".services").on("click", function () {

    $(".leak").not(".services").slideUp(500)

    
    $("#services").slideToggle(1000)



})

$(".portfolio").on("click", function () {

    $(".leak").not(".portfolio").slideUp(500)

   
    $("#portfolio").fadeToggle(1000)


})

$(".contact").on("click", function () {
 

    $(".leak").not(".contact").slideUp(500)
    
    $("#contact").fadeToggle(1000)



})