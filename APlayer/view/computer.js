function functionOne()
{
    //alert("成功加载 computer.js");
    a = $("div.aplayer-pic").animate({width:"0%"});
    var t=setTimeout('$("div.aplayer-pic").animate({width:"36%"});',2000)
    //$("div.aplayer-pic").animate({width:"36%"});
}

functionOne();