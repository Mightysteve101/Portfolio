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

/*
    <div class="title">
    <h1>Exploring Fresh <span style="color: #ffc107;">Challenges.</span></h1>
</div>
<div class="pro-container">
    <div id="image-track">
        <a href="https://github.com/Mightysteve101/ENMU_Faculty">
            <div class="heading item-1">
                <h3>Project 1</h3>
                <h2>ENMU Faculty Page</h2>
            </div>
        </a>
        <a href="https://github.com/Mightysteve101/art-culture-grid">
            <div class="heading item-2">
                <h3>Project 2</h3>
                <h2>ENMU Culture Page Update</h2>
            </div>
        </a>
        <a href="https://github.com/Mightysteve101/Database-Project">
            <div class="heading item-3">
                <h3 style="color: white">Project 3</h3>
                <h2 style="color: white">SQLite Group Project</h2>
            </div>
        </a>
        <a href="https://github.com/Mightysteve101/Faculty_Advisor_Directroy">
            <div class="heading item-4">
                <h3 style="color: white">Project 4</h3>
                <h2 style="color: white">Faculty Advisor Directory Update</h2>
            </div>
        </a>
    </div>
</div>   
*/