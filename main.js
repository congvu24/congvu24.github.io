$(document).ready(function(){

    $(document).on("scroll",function(){
        if(window.pageYOffset >100){
            $(".scroll-top").addClass('show');
        }
        if(window.pageYOffset <100){
            $(".scroll-top").removeClass('show');
        }
    })
    $(".scroll-top").click(function(){
        window.scrollTo(0, 0)
    });
    $(".nav-wrap ul li").click(function(){
        $('li.active').removeClass("active");
        $(this).addClass("active");
    })
    $(".showmore").click(function(){
        console.log('hello')
        $('.porfolio-content:nth-child(3)').addClass("showmore")
    })
  });