const Slider = {
    arrows : [document.querySelector("#leftArrow"),document.querySelector("#rightArrow")],
    sliderList : document.querySelector("#sliderList"),
    move: function() {
        let firstItem = this.sliderList.firstElementChild.innerHTML;
        let lastItem = this.sliderList.lastElementChild.innerHTML;

        let firstLi = document.createElement("li");
        firstLi.classList.add("mainHeader__slider__list__item");        
        firstLi.innerHTML = firstItem;
        this.sliderList.appendChild(firstLi);

        let lastLi = document.createElement("li");
        lastLi.classList.add("mainHeader__slider__list__item");
        lastLi.innerHTML = lastItem;
        this.sliderList.insertBefore(lastLi, this.sliderList.firstElementChild);

        let newPos = -100;
        let enableBtn = true;
        let maxRightMove = (this.sliderList.children.length - 2) * 100;
        let duration = 0.6;

        let changePos = (e) => {
            if(enableBtn === true) {
                if(e.target.getAttribute("id") === "leftArrow") {
                    this.sliderList.style.transitionDuration = `${duration}s`;
                    this.sliderList.style.left = `${newPos += 100}%`;
                    if(newPos === 0) {
                        setTimeout(function(){
                            this.sliderList.style.transitionDuration = "0s";
                            newPos = -maxRightMove;
                            this.sliderList.style.left = `-${maxRightMove}%`;
                        },duration * 1000);
                    }
                }else if (e.target.getAttribute("id") === "rightArrow") {
                    this.sliderList.style.transitionDuration = `${duration}s`;
                    this.sliderList.style.left = `${newPos -= 100}%`;
                    if(newPos === -(maxRightMove + 100)) {
                        setTimeout(function(){
                            this.sliderList.style.transitionDuration = "0s";
                            newPos = -100;
                            this.sliderList.style.left = "-100%";
                        },duration * 1000);
                    }
                } 
                enableBtn = false; 
                setTimeout(function(){enableBtn = true;},duration * 1000); 
            }//enableBtn         
        }//changePos
        this.arrows.forEach(element => {
            element.addEventListener("click",changePos);
        });
        
        ///////////////////////////////////////////////////////////////////////
        let checkKey = (e) => {
            e = e || window.event;           
            if (e.keyCode == '37') {
               // left arrow
                if(enableBtn === true) {
                    this.sliderList.style.transitionDuration = `${duration}s`;
                    this.sliderList.style.left = `${newPos += 100}%`;
                    if(newPos === 0) {
                        setTimeout(function(){
                            this.sliderList.style.transitionDuration = "0s";
                            newPos = -maxRightMove;
                            this.sliderList.style.left = `-${maxRightMove}%`;
                        },duration * 1000);
                    }
                    enableBtn = false; 
                    setTimeout(function(){enableBtn = true;},duration * 1000); 
                }//enableBtn 
            }else if (e.keyCode == '39') {
               // right arrow
                if(enableBtn === true) {
                    this.sliderList.style.transitionDuration = `${duration}s`;
                    this.sliderList.style.left = `${newPos -= 100}%`;
                    if(newPos === -(maxRightMove + 100)) {
                        setTimeout(function(){
                            this.sliderList.style.transitionDuration = "0s";
                            newPos = -100;
                            this.sliderList.style.left = "-100%";
                        },duration * 1000);
                    } 
                    enableBtn = false; 
                    setTimeout(function(){enableBtn = true;},duration * 1000); 
                }//enableBtn 
            }
        }
        document.onkeydown = checkKey;
        ///////////////////////////////////////////////////////////////////////
    }
}
Slider.move();

const ToggleMenu = {
    menuIcon: document.querySelector("#menuIcon"),
    menuList: document.querySelector("#mainHeaderList"),
    toggle: function() {
        let toggleFn = (e) => {
            e.stopPropagation()
            this.menuList.classList.toggle("block");
        }
        this.menuIcon.addEventListener("click",toggleFn);
    },
    hideMenu: function() {
       document.addEventListener("click",function(e){
        ToggleMenu.menuList.classList.remove("block");
       }); 
    }
}
ToggleMenu.toggle();
ToggleMenu.hideMenu();

const TopNav = {
    toggleActiveClass: function() {
        let links = document.querySelectorAll(".mainHeader__list__item__link");
        links.forEach(element => {
            element.addEventListener("click",function(e){
                e.preventDefault();
                links.forEach(element => {element.classList.remove("active")});
                this.classList.add("active");
            });
        });        
    }
}
TopNav.toggleActiveClass();