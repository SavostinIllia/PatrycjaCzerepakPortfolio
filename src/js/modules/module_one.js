export default function sectionCounter() {
    $( window ).on( "load", function() {
        const paginateSection = $('[data-paginateSection]')
        const paginationList = $('[data-pagination]')
        const sectionPosition = []
        const paginationActiveDeviderStep = $('.pagination').height() / 5
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
                }else if($(window).scrollTop() >= sectionPosition[2] - 600){
                    $(paginationList[index]).removeClass('active')
                    $(paginationList[2]).addClass('active')
                    $('.pagination span').css({top: 25 + (paginationActiveDeviderStep * 2)})
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
