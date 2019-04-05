//Mobile Menu
function Init() {
    document.addEventListener('click', function(e){
        if(e.target.classList.contains('nav-toggle')) {
            const _this = e.target;
            const navMenu = document.getElementById('nav-menu');
            
            if(navMenu.classList.contains('open')){
                navMenu.classList.remove('open')
            } else {
                navMenu.classList.add('open')
            }
            if(_this.classList.contains('active')) {
                _this.classList.remove('active')
            } else {
                _this.classList.add('active')
            }
        }  
    });
}

Init();