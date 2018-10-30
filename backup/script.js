const dropNav = (function (){
    
    let a = 'false';
        
        // Init
        document.getElementById('offer').onclick = function(){
                    
                    // Variables
                    const delayInMilliseconds = 250; //.5 second
                    const offerContent = document.querySelector('.offer-content');
                    const navHeaderContainer = document.querySelector('.nav--header-container');
                    const drop = document.querySelector('.drop');
                    const offer = document.getElementById('offer');
                    const dropDown = document.querySelector('.drop-down');
                    const subNav = document.querySelector('.sub-nav');
            
            
            if (a == 'false') {
                    
                    dropDown.style.height = '100px';
                    dropDown.style.backgroundColor = "lightgrey";
                    drop.style.opacity = "0";
                    
                    // Delayed transitions
                    setTimeout(function() {
                        
                        offerContent.style.opacity = '1';
                        offerContent.style.paddingTop = '35px';
                        subNav.style.boxShadow = "0 5px 20px #3b3b3b";
                        drop.style.opacity = "1";
                        offer.innerHTML = 'Close';
                        
                        
                    }, delayInMilliseconds);
                
                    a = 'true';
                
                } else {
                    
                        dropDown.style.height = '0px';
                        offerContent.style.opacity = '0';
                        offerContent.style.paddingTop = '0px';
                        drop.style.opacity = "0";
                        dropDown.style.backgroundColor = "#000";
                        
                        // Delayed transitions
                        setTimeout(function() {
                            
                            drop.style.opacity = "1";
                            offer.innerHTML = 'Client Login';
                            subNav.style.boxShadow = "0 0 0";
                            
                        }, delayInMilliseconds);
                    
                        a = 'false';
                    } 
            
        } // end init
        
})(); // end closure



// ham menu

var burgerdiv = document.querySelectorAll(".burger");

    for (var i = 0; i < burgerdiv.length; i++) {
        burgerdiv[i].addEventListener("click", function() {
            this.classList.toggle("active");
        });

}