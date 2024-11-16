const Right=document.querySelector(".slider-right");
const Left=document.querySelector(".slider-left");
const SliderContainer = document.querySelector(".slider-container");
const SliderImage= document.querySelector(".slider-image");
const SliderPagination = document.querySelector(".slider-pagination");
let count= 0;

Right.addEventListener("click", function(){
  if(count < SliderImage.length - 1){
    count++;
    SliderContainer.style.transform = `translateX(-${count * 600}px)`;
    checkNavigation();
    generatePagination();
  }
});

Left.addEventListener("click", function(){
    if(count != 0){
      count--;
      SliderContainer.style.transform = `translateX(-${count * 600}px)`;
      checkNavigation();
      generatePagination();
    }
  });

  function checkNavigation(){
    if(count>=SliderImage.length - 1){
        Right.setAttribute("disabled",true);
    }else if(count<= 0){
        Left.setAttribute("disabled",true);
    }else{
        Right.removeAttribute("disabled")
        Left.removeAttribute("disabled")
    }
  }

  function generatePagination(){
    SliderPagination.innerHTML = "";
    for(let i = 0; i<SliderImage.length; i++){
        const Bullet = document.createElement("div");
        Bullet.setAttribute("class","slider-bullet");
        if(count == i){
            Bullet.classList.add("active");
        }  
        SliderPagination.appendChild(Bullet);
    }
  }

  checkNavigation();
  generatePagination();

