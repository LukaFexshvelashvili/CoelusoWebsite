
function modern_Scroll(div, elem, classremove, delaytime){
        if(window.scrollY >= div.position().top){
        setTimeout(() => {
            elem.removeClass(classremove)

           
        }, delaytime);
          

}

}
