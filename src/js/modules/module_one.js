export default function sectionCounter() {
    $( window ).on( "load", function() {
        const paginateSection = $('[data-paginateSection]')
        const paginationList = $('[data-pagination]')
        const sectionPosition = []
        const paginationActiveDeviderStep = $('.pagination').height() / 7
        paginateSection.map((index, section) =>{
            sectionPosition.push($(section).offset().top)
            $(window).on('scroll', function(){
                if($(window).scrollTop() > sectionPosition[0] && $(window).scrollTop() < sectionPosition[1] - 600){
                    $(paginationList[index]).removeClass('active')
                    $(paginationList[0]).addClass('active')
                    $('.pagination span').css({top: 25})
                }else if($(window).scrollTop()  >= (sectionPosition[1] - 600) && $(window).scrollTop() < sectionPosition[2] - 600){
                    $(paginationList[index]).removeClass('active')
                    $(paginationList[1]).addClass('active')
                    $('.pagination span').css({top: 25 + paginationActiveDeviderStep})
                }else if($(window).scrollTop() >= sectionPosition[2] - 600 && $(window).scrollTop() < sectionPosition[3] - 600){
                    $(paginationList[index]).removeClass('active')
                    $(paginationList[2]).addClass('active')
                    $('.pagination span').css({top: 25 + (paginationActiveDeviderStep * 2)})
                }else if($(window).scrollTop() >= sectionPosition[3] - 600 && $(window).scrollTop() < sectionPosition[4] - 600){
                    $(paginationList[index]).removeClass('active')
                    $(paginationList[3]).addClass('active')
                    $('.pagination span').css({top: 25 + (paginationActiveDeviderStep * 3)})
                }else if($(window).scrollTop() >= sectionPosition[4] - 600 && $(window).scrollTop() < sectionPosition[5] - 600){
                    $(paginationList[index]).removeClass('active')
                    $(paginationList[4]).addClass('active')
                    $('.pagination span').css({top: 25 + (paginationActiveDeviderStep * 4)})
                }else if($(window).scrollTop() >= sectionPosition[5] - 600 && $(window).scrollTop() < sectionPosition[6] - 600){
                    $(paginationList[index]).removeClass('active')
                    $(paginationList[5]).addClass('active')
                    $('.pagination span').css({top: 25 + (paginationActiveDeviderStep * 5)})
                }else if($(window).scrollTop() >= sectionPosition[6] - 600){
                    $(paginationList[index]).removeClass('active')
                    $(paginationList[6]).addClass('active')
                    $('.pagination span').css({top: 25 + (paginationActiveDeviderStep * 6)})
                }
            })
        })

        paginationList.map((index, listItem) => {
            $(listItem).on('click', function(e) {
                e.preventDefault()
                const sectionScrollTo = $(this).data("pagination")
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(sectionScrollTo).offset().top - 100
                }, 1000);
            })
        })
    });
}
