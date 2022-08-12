
        let sliderButton1 = document.getElementById('slider__button1');
        let sliderButton2 = document.getElementById('slider__button2');
        let sliderButton3 = document.getElementById('slider__button3');
        let bigSlider = document.querySelector('.big__slider');

        console.log(bigSlider);

        sliderButton2.addEventListener('click', function() {
            
            bigSlider.style.marginLeft = '-100%';
            sliderButton2.style.backgroundColor ='#FC0079';
            sliderButton1.style.backgroundColor ='#ffffff';
            sliderButton3.style.backgroundColor ='#ffffff';
        })

        sliderButton3.addEventListener('click', function() {
            
            bigSlider.style.marginLeft = '-200%';
            sliderButton2.style.backgroundColor ='#ffffff';
            sliderButton1.style.backgroundColor ='#ffffff';
            sliderButton3.style.backgroundColor ='#FC0079';
        })

        sliderButton1.addEventListener('click', function() {
            
            bigSlider.style.marginLeft = '0';
            sliderButton2.style.backgroundColor ='#ffffff';
            sliderButton1.style.backgroundColor ='#FC0079';
            sliderButton3.style.backgroundColor ='#ffffff';
        })
