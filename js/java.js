$(document).ready(function(){
    var controller=new ScrollMagic.Controller();
    var poroject=$("p");
    $(".project").each(function(){
        ourScene =new ScrollMagic.Scene({
            triggerElement:this,
            duration:'30%'
        })
    })
    .setTween(TweenLite.to(poroject,2,{left:"542px",backgroundColor:"black",borderBottomColor:"pink",Color:"blue"}))
    .addIndicators({
        name:'fade scene',
        colorTrigger:'black',
        colorStart:'#75c695',
        colorEnd:'pink'
    })
    .addTo(controller);
})