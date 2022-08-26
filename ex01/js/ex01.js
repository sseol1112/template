// 즉시실행함수 사용
(function () {
    const ex01 = {
        init : function() {
            const self = this;

            self.settings();
            self.bindEvents();
        },    
        settings: function() {
            const self =this;
            

            self.sectionEl = document.querySelector('.section');
            self.listEl = document.querySelectorAll('.list_wrap ul li');            
            
            self.delBtn = document.querySelector('.btn_del');
            self.darkBtn = document.querySelector('.btn_dark');
            self.total = document.querySelector('.total');
            self.percent = document.querySelectorAll('.percent');
            self.statusBar = document.querySelectorAll('.status_bar');            
            self.sliderRange = document.getElementById('myRange');
            self.outputValue = document.getElementById('value');

            self.scrollInnerEl = document.querySelector('.scroll_inner');

            self.total.innerHTML = ` ${self.listEl.length} `;
            self.outputValue.innerHTML = self.sliderRange.value;

            ex01.setStatus();
        },
        bindEvents : function(){
            const self = this;

            self.delBtn.addEventListener('click', function(){

                let chk_icon = document.querySelectorAll('.ico_check');
                for(let i=0; i<chk_icon.length; i++){
                    if(chk_icon[i].checked == true) {
                        chk_icon[i].closest('li').remove();
                    }
                }
            });

            self.darkBtn.addEventListener('click', function(){
                ex01.setDisplayMode();
            });

            self.sliderRange.oninput = function(){
                self.outputValue.innerHTML = this.value;
            }

            self.scrollInnerEl.addEventListener('scroll', function(e){
                let scrollVal = self.scrollInnerEl.scrollTop;
                console.log(e);
                self.outputValue.textContent = `scroll 값 : ${scrollVal}`
                if(scrollVal >= '100') {
                    self.outputValue.style.background= 'blue';
                    self.outputValue.style.color= 'white';
                } else {
                    self.outputValue.style.background= 'white';
                    self.outputValue.style.color= 'black';
                }
            })
        },
        setDisplayMode : function(){
            const self = this;
            if(self.darkBtn.classList.contains('dark')){
                console.log("일반모드");
                self.darkBtn.classList.remove('dark');
                self.sectionEl.style.background = 'white';
                self.sectionEl.style.color = 'black';
                self.darkBtn.innerText = "다크모드";
            } else {
                console.log("다크모드");
                self.darkBtn.classList.add('dark');
                self.sectionEl.style.background = 'black';
                self.sectionEl.style.color = 'white';
                self.darkBtn.innerText = "일반모드";
            }
        },
        setStatus : function() {
            const self = this;
            let statusLeng = self.statusBar.length;
            let perLeng = self.percent.length;
            let perLengNum = [];

            for(let i=0; i<perLeng; i++){

                const perArrVal = parseInt(self.percent[i].textContent);
                perLengNum.push(perArrVal);
                console.log(perLengNum);
            }

            for(let j=0; j<statusLeng; j++) {
                //self.statusBar[j].innerHTML = perLengNum[j];
                self.statusBar[j].style.borderRightWidth = perLengNum[j] + 'px';
                self.statusBar[j].style.borderColor = 'red';
                self.statusBar[j].style.width = perLengNum[j] + 'px';
                self.statusBar[j].style.transform = perLengNum[j] + 'px';
            }
            
        }


    };

    ex01.init();
})();