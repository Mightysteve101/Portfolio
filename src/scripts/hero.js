/* Scaling Effect */
window.addEventListener('scroll', function(){
    const scrollY = window.scrollY;
    const heroVideo = document.querySelector("#hero-video");

    /*Subtract the amount of the image based on how much you scrolled*/
    const scaleFactor = 1 - (scrollY /10000);

    /*Input this into css style */
    heroVideo.style.transform = `scale(${scaleFactor})`;
    
});