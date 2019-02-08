
showSlider(); 
function showSlider(){
    var i=0, j=0,temp2=0, temp3=0, temp4, temp=[], temp1, slider2=[], slider3=[], li, l=0; repeat=false;
    var k=0; // счетчик картинок, которые уже показаны на экране
    var slider = document.getElementsByClassName("imageTextNumber");
    var width=document.documentElement.clientWidth; //получаем размер экрана 
    var ost=width % 262;
    var kolimage=(width-ost)/262; //kolimage показывает сколько картинок должно быть показано на экане
    if (kolimage<1){ //задаём условие, как минимум одна картинка всегда должна быть показана
        kolimage=1;
    }

    //необходимо отсортировать массив слайдер2 попытка 10.12.18
    for (i=0; i<slider.length; i++){
        if ((getComputedStyle(slider[i], null).display) == "block"){
            k++; 
            slider3.push(slider[i]); // записываем в впомогательный массив картинки, которые уже показаны
            slider2.push(slider[i]); // записываем в впомогательный массив картинки, которые уже показаны
        }
    }
    for (i=0; i<slider3.length-1; i++){
        if (+(getComputedStyle(slider3[i], null).order)>+(getComputedStyle(slider3[i+1], null).order)){
            repeat=true; temp1=i+1;;  
            //temp1=+(getComputedStyle(slider3[i+1], null).order);
        }
    }
    if (repeat==true){
        for (i=0; i<temp1; i++){
            slider2.shift();
        }
        for (i=0; i<temp1; i++){
            slider2.push(slider3.shift());
        }
    }

    if (kolimage <= k){
        for (j=kolimage; j<k; j++) { // берем массив с картинками которые сейчас показаны на экране
            for(i=0; i<slider.length; i++){ //берем массив всех картинок
                if (slider2[j].style.order==slider[i].style.order){
                    slider[i].style.display = "none";
                }
            }
        }
    }

     temp2=+slider2.pop().style.order;
    if (kolimage>k) {
        for (j=temp2; j<temp2+kolimage-k; j++) {
            for (i=0; i<slider.length; i++){
                if (+slider[i].style.order==temp2+1){
                    slider[i].style.display = "block";
                }
            }
        }
    }
   
    return k;
}

function minusSlides(){
    var slider = document.getElementsByClassName("imageTextNumber");
    var k=0, t, i;

    for (i=0; i<slider.length; i++){
        if (getComputedStyle(slider[i], null).display == "block"){
            k++;
        }
    }
  
    if(k<slider.length){
        for(i=0; i<slider.length; i++){
            var t=getComputedStyle(slider[i], null).order;
            if(t==1){
                slider[i].style.display = "none";
                slider[i].style.order=slider.length;
            }
            else slider[i].style.order--;
        }
        for(i=0; i<slider.length; i++){
            var t=getComputedStyle(slider[i], null).order;
            if(t==k){
                slider[i].style.display = "block";
            }
        }
    }
    else{
        for(i=0; i<slider.length; i++){
            var t=getComputedStyle(slider[i], null).order;
            if(t==1){
                slider[i].style.order=slider.length;
            }
            else slider[i].style.order--;
        }
    } 
}

function plusSlides(){
    var slider = document.getElementsByClassName("imageTextNumber");
    var k=0, t, i;

    for (i=0; i<slider.length; i++){
        if (getComputedStyle(slider[i], null).display == "block"){
            k++;
        }
    }
  
    if(k<slider.length){
        for(i=0; i<slider.length; i++){
            var t=getComputedStyle(slider[i], null).order;
            if(t==k){
                slider[i].style.display = "none";
            }
        }
        for(i=0; i<slider.length; i++){
            var t=getComputedStyle(slider[i], null).order;
            if(t==slider.length){
                slider[i].style.display = "block";
                slider[i].style.order=1;
            }
            else slider[i].style.order++;
        }
    }
    else{
        for(i=0; i<slider.length; i++){
            var t=getComputedStyle(slider[i], null).order;
            if(t==slider.length){
                slider[i].style.order=1;
            }
            else slider[i].style.order++;
        }
    } 
}