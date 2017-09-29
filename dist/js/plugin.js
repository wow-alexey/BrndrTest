//Переключатель да/нет
var switcher = $('.switcher');
var warning = $('.warning');
$('.switch').click(function () {
    if (switcher.css('left') == '3px') {
        switcher.animate({
            right: '3px',
            left: '28px'
        }, 150); //передвигаю ползунок
        warning.animate({
            opacity: '0'
        }, 200); //скрываю текст
        $('.switch').css('background', '#e0e0e0');
        $('.switch').removeClass('checkedYes').addClass('checkedNo'); //для отслеживания сервером выбранного ответа

    } else {
        switcher.animate({
            right: '0px',
            left: '3px'
        }, 150); //передвигаю ползунок
        warning.animate({
            opacity: '1'
        }, 200); //проявляю текст
        $('.switch').css('background', '#7f7f7f');
        $('.switch').removeClass('checkedNo').addClass('checkedYes'); //для отслеживания сервером выбранного ответа

    }
});

//Ползунок + панель
var slider = new Slider("#choseBar");
slider.on("slide", function (sliderValue) {
    document.getElementById("choseBarVal").textContent = sliderValue;
});

//Добавляю содержание ползунка
var minSliderHandle = $('.min-slider-handle');
minSliderHandle.append('<img class="leftArrow" src="img/leftArrow.png" alt="leftArrow"><span id="choseBarVal">15</span><span id="choseBarValLabel">дней</span><img class="rightArrow" src="img/rightArrow.png" alt="rightArrow">')
        .addClass('draggableItem')
        .removeClass('round');

//Динамическое изменение слов в ползунке
$('#choseBarVal').bind("DOMSubtreeModified",function(){
    // console.log(this.innerHTML, choseBarValLabel[0].innerHTML);

    var choseBarVal = this.innerHTML;
    var choseBarValLabel = $('#choseBarValLabel');
    // console.log(choseBarVal);

    if (choseBarVal == 1 || choseBarVal == 21 || choseBarVal == 31){
        choseBarValLabel[0].innerHTML = "день";
    } else if (choseBarVal == 2 || choseBarVal == 3 || choseBarVal == 4 || choseBarVal == 22 || choseBarVal == 23 || choseBarVal == 24){
        choseBarValLabel[0].innerHTML = "дня";
    } else {
        choseBarValLabel[0].innerHTML = "дней";
    }
});