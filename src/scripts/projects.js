document.addEventListener("DOMContentLoaded", function() {
    //selector is to find the elements I want to trigger with scroll
    function scrollTrigger(selector, options = {}){
        //Once I find what I want(selectors) put it into a list
        let els = document.querySelectorAll(selector) 
        //convert nodeList to an array
        els = Array.from(els) 
        //run through each element and do something to it
        els.forEach(el => {
            addObserver(el, options) 
        })
    }

    //Still understanding what this portion means
    function addObserver(el, options){
        if(!('IntersectionObserver' in window)){
            if(options.cb){
                options.cb(el)
            }else{
                entry.target.classList.add('active')
            }
            return
        }
        let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elements list and the observer instance
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    if(options.cb){
                        options.cb(el)
                    }else{
                        entry.target.classList.add('active')
                    }
                    observer.unobserve(entry.target)
                }
            })
        }, options)
        observer.observe(el)
    }
    // Example usages:

    scrollTrigger('.scroll-reveal', {
        rootMargin: '-200px',
    })
});