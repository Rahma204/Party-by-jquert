$(".signer-one > h2").on("click", function(){
    $(".signer-one > p").slideToggle(1000);
    $(".signer-two > p").slideUp(1000)
    $(".signer-three > p").slideUp(1000)
    $(".signer-four > p").slideUp(1000)

})
$(".signer-two > h2").on("click", function(){
    $(".signer-two > p").slideToggle(1000);
    $(".signer-one > p").slideUp(1000)
    $(".signer-three > p").slideUp(1000)
    $(".signer-four > p").slideUp(1000)

})
$(".signer-three > h2").on("click", function(){
    $(".signer-three > p").slideToggle(1000);
    $(".signer-two > p").slideUp(1000)
    $(".signer-one > p").slideUp(1000)
    $(".signer-four > p").slideUp(1000)

})
$(".signer-four > h2").on("click", function(){
    $(".signer-four > p").slideToggle(1000);
    $(".signer-two > p").slideUp(1000)
    $(".signer-one > p").slideUp(1000)
    $(".signer-three > p").slideUp(1000)

})
$(".nav").on("click", function(){
    $("aside").animate({width: "25%" , position: "fixed"},2000)
    $(".nav").css({display: "none"})
}
)
$(".close").on("click", function(){
    $("aside").animate({width: "0%"},2000, function () {
       $(".nav").css({display: "block"},2000)  
    })
   
}
)

let countDate = new Date("30 oct, 2024 11:59:59").getTime()

let counter = setInterval(()=>{
    let nowDate = new Date().getTime()
    let diff = countDate - nowDate   //mille second
    let days =Math.floor( diff / (1000 * 60 * 60 *24))
    document.querySelector(".days").innerHTML = days
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60  * 60 ))
    document.querySelector(".hours").innerHTML = hours
    let minuts = Math.floor(diff % (1000 * 60 * 60 ) / (1000 * 60 ))
    document.querySelector(".mintus").innerHTML = minuts
    let seconds = Math.floor(diff % (1000 * 60) / 1000)
    document.querySelector(".second").innerHTML = seconds
    
},1000)

let counterInput = document.querySelector("textarea")
let counterLetter  = document.querySelector(".counter-letter ")
let finish  = document.querySelector(".finish ")
let correct  = document.querySelector(".correct ")
let maxLength = counterInput.getAttribute("maxlength")
counterLetter.innerHTML = maxLength
counterInput.addEventListener("input",function(){
    counterLetter.innerHTML= maxLength - counterInput.value.length
  if (counterLetter.innerHTML === "0") {
      finish.classList.remove("d-none")
    finish.classList.add("d-block")
    correct.classList.add("d-none")
  }  
})


$("aside a").on("click", function(){
    let currentSection = $(this).attr("href")
    let scrollTopOffset= $(currentSection).offset().top
   $("html, body").animate({scrollTop:scrollTopOffset},20000)
    
})
