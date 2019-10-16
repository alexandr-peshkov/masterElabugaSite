
// TODO мобильное меню js
$(document).ready(function () {
    $("#phone").mask(" +7 (999)-999-99-99");
});


var $btn = document.getElementById('show');
var $nav = document.getElementById('nav');

$btn.addEventListener('click', function() {
    $nav.classList.toggle('active');
});

/*<div id="nav" class="navigation">
                    <div class="navigation__inner">
                        <!--   Content   -->
                    </div>
                </div>
                <button id="show">меню</button> */