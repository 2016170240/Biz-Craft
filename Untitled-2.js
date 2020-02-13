/*global $ document*/
$(document).ready(function(){
    $(".f").click(function(){
        $("p").addClass("s11");
        
        if($("p").hasClass("s22") || $("p").hasClass("s33") || $("p").hasClass("s44") )
           {
              $("p").removeClass("s22 s33 s44")
           }
        
         $("div").addClass("s1");
         if($("div").hasClass("s2") || $("div").hasClass("s3") || $("div").hasClass("s4") )
           {
              $("div").removeClass("s2 s3 s4")
           }
    });
     $(".s").click(function(){
        $("p").addClass("s22");
         if($("p").hasClass("s11") || $("p").hasClass("s33") || $("p").hasClass("s44") )
           {
              $("p").removeClass("s11 s33 s44")
           }
         $("div").addClass("s2");
         if($("div").hasClass("s1") || $("div").hasClass("s3") || $("div").hasClass("s4") )
           {
              $("div").removeClass("s1 s3 s4")
           }
    });
    $(".t").click(function(){
        $("p").addClass("s33");
        if($("p").hasClass("s11") || $("p").hasClass("s22") || $("p").hasClass("s44") )
           {
              $("p").removeClass("s11 s22 s44")
           }
         $("div").addClass("s3");
        
        if($("div").hasClass("s1") || $("div").hasClass("s2") || $("div").hasClass("s4") )
           {
              $("div").removeClass("s1 s2 s4")
           }
    });
    $(".fo").click(function(){
        $("p").addClass("s44");
        if($("p").hasClass("s11") || $("p").hasClass("s33") || $("p").hasClass("s22") )
           {
              $("p").removeClass("s11 s33 s44")
           }
         $("div").addClass("s4");
        if($("div").hasClass("s1") || $("div").hasClass("s3") || $("div").hasClass("s2") )
           {
              $("div").removeClass("s1 s3 s2")
           }
    });
});