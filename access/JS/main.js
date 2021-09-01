        // bật sự kiện cho nút menu
        var menu = document.querySelector('.menu')
        menu.onclick = function() {
            nav.style.display = 'block'
        }
        // bật sử kiện cho nút close
        var a = document.querySelector('.close')
        var nav = document.querySelector('.navbar-mobile')
        a.onclick = function() {
            nav.style.display = 'none'
        }