// multiple element and multiple class & id select
// $("#para1,.my-div,.head2").text("hi")

// text manipulation and use html method
// $("#para1").html("<b>hello</b>")


// use append & prepend method

// $("#para1").append(" this is append")
// $("#para1").prepend(" this is prepend")


// use after & before method

// var para1 = $("<p></p>").text("this is a paragraph 0")
//  $("#p1").after(para1)
// $("#p1").before(para1)


// attributes manipulation & attributes remove & set href
//  $("a").attr("href")
//  $("a").removeAttr("href");
// $("a").attr("href","www.youtube.com");


// use css method & use first property then value
// $("h1").css("color","red");
// $("h1").css("font-size","3rem");
// $("h1").css("font-style","italic");


// use css method & multiple property & multiple value use in one line // multiple class use & remove in one line
// $("h1").css({"color":"green","font-size":"3rem","font-style":"italic"});
// $("h1").addClass("class1 class2")
// $("h1").removeClass("class1 class2")


// add event listner 
// $("button").click(function (){ 
//     // $("h1").text("you have clicked the button")
//      $("h1").toggleClass("class1")

// })

// multiple event listner add 
// $("button").click(function (){
//     var value = this.innerHTML;
//     $("h1").text(value + "is clicked") 

// })


// login demo project

// $("#loginButton").click(function(){ 

//     var password1 = $("#pass1").val();
//     var password2 = $("#pass2").val();


//     if(password1 !== "" && password2 !== ""){ 


//         if(password1 == password2){ 
//             alert ("login succcesfully")
//         }

//         else{ 
//             alert("password mitchmatch")
//         }

//     }

//     else{ 
//         alert ("please enter password")

//     }
// })



// Animation hide,show & toggle method use
// $("#btn").click(function(){ 
//     $("#div1").hide(2000).show(2000);
// })


// Animation Fadein,FadeOut & fadeToggle,fadeTo method use
// $("#btn").click(function(){ 
//     $("#div1").fadeOut(2000).fadeIn(2000);
// })



// Animation slideUp,slideDown & slideToggle, method use
// $("#btn").click(function(){ 
//     $("#div1").slideUp(2000).slideDown(2000);
// })



// Animated
// $("#btn").click(function(){ 
//     $("#div1").animate(
//         {
//             height:"500px",
//             width:"900px",
//             margin:"30px"
    
    
//         },2000);
// })