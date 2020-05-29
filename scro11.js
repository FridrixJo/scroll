/*let btn = document.querySelector('.button'),
    //container = document.querySelector('.container'),
    scrolled = window.pageYOffset;
    //container.classList.add('green'),

    
    
    btn.addEventListener('click', () => {
        console.log(scrolled);
        interval = setInterval(scroll, 1);
         function scroll() {
             if ( scrolled > 0 ) {
                 window.scrollTo(0,scrolled);
                scrolled = scrolled - 5;
             } else {
                 clearInterval(interval);
                 scrollTo(0,0);
             }
             
         }
         console.log(scrolled);
        
    }) */

  
           let scrolled; 
           let timer;
           let btn = document.querySelector('.button'),
               btnt = document.querySelector('.buttontop');
           btn.addEventListener('click', () => {
               scrolled = window.pageYOffset;
               scrollToTop();
               console.log('sucktop');
           });

           function scrollToTop() {
            if ( scrolled > 0 ) {
                window.scrollTo(0,scrolled);
                scrolled = scrolled - 25;
                timer = setTimeout(scrollToTop, 1);
            } else {
                       clearTimeout(timer);
                       window.scrollTo(0,0);
                   }
            
        }

        btnt.addEventListener('click', () => {
            scrolled = window.pageYOffset;
            scrollToDown();
            console.log('suckdown');
        });

        function scrollToDown() {
         if ( scrolled >= 0 && scrolled <= 3000) {
             window.scrollTo(0,scrolled);
             scrolled = scrolled + 25;
             timert = setTimeout(scrollToDown, 1);
         } else {
                    clearTimeout(timer);
                    window.scrollTo(0,3000);
                }
         
     }

     let box = document.querySelector('.box');
         click = document.querySelector('.click');
         click.addEventListener('click', () => {
               box.style.opacity = '1';
               timerID = setInterval(toggle,500);
               //box.style.width = 600 + 'px';
               //click.classList.add('newPos');
               //box.style.height = box.scrollHeight + 'px';
               
        function toggle() {
            click.classList.toggle('blue');
            } 

            click.addEventListener('contextmenu', (e) => {
                //box.style.width = 300 + 'px';
                //box.style.height = 400 + 'px';
                //click.classList.remove('newPos');
                console.log(box.scrollTop);
                event.preventDefault();
                box.style.opacity = '0.5';
                clearInterval(timerID);
                click.classList.remove('blue');
            })
        });
        //console.log(box.getBoundingClientRect());

        //let style = window.getComputedStyle(box);
        //console.log(style);

       // console.log(document.documentElement.scrollTop);
       //window.scrollTo(0,700);
       //window.scrollBy(0,100);
        

        

         
