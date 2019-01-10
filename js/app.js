$(document).ready(function(){
    var controller=new ScrollMagic.Controller();
    var para=$("p");
    $(".project").each(function(){
        ourScene =new ScrollMagic.Scene({
            triggerElement:this,
            duration:'30%'
        })
    .setTween(TweenLite.to(this,2,{left:"542px",backgroundColor:"black", borderBottomColor:"pink",color:"blue"}))
    .addIndicators({
        name:'fade scene',
        colorTrigger:'black',
        colorStart:'red',
        colorEnd:'pink'
    })
    .addTo(controller);
});
});











// $(document).ready(function(){
//     var controller = new ScrollMagic.Controller();
//     $(".project").each(function(){
//         var ourScene=new ScrollMagic.Scene({
//             triggerElement:this
//         })
//         .setClassToggle(this,"fade-in")
//         .addTo(controller)
//     })
// })
//         triggerElement:"#project",
//         triggerHook:0,
//         duration:'25%',
//     })
// })
//     .setClassToggle("#project","fade-in")
//     .addIndicators({
//         name:'Fade scene',
//         colorTrigger:'black',
//         indent:200,
//         colorStart:'blue',
//         colorEnd:'red',  
//     })
//     .addTo(controller)
//     var scene2 = new ScrollMagic.Scene({
//         triggerElement:"#project1",
//     }).setClassToggle("#project1","fade-in")
//     .addIndicators({
//         name:'Fade scene',
//         colorTrigger:'black',
//         indent:200,
//         colorStart:'blue',
//         colorEnd:'red'  
//     })
//     .addTo(controller)
// var scene3 = new ScrollMagic.Scene({
//     triggerElement:"#project2",
// }).setClassToggle("#project2","fade-in")
// .addIndicators({
//     name:'Fade scene',
//     colorTrigger:'black',
//     indent:200,
//     colorStart:'blue',
//     colorEnd:'red'  
// })
// .addTo(controller)
// })