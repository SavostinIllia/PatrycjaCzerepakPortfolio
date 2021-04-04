export default function sectionCounter() {
    $( window ).on( "load", function() {
        const hero = $('#hero').offset().top
        const aboutMe = $('#aboutMe').offset().top
        console.log(hero);
        console.log(`aaboutme`, aboutMe)
    });
}
