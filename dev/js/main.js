

$(document).ready(function() {
  // Выводит блок с надписью и убирает заголовки со страницы
var taskComleted = function() {
  $('.taskComleted').css('display', 'block');
  $('.courses .article__header, .courses .article__subHeader').css('display', 'none');
}

var arrCourses = [];
//  При отметке чекбокса блок закрашивается и исчезает через 1с
var hiding = function() {
  var trigger = $('.course__looked_text');
    trigger.click(function() {
      $(this).children('.course__looked_checkbox').css('background-image', 'url(img/checkedbox.png');
      $(this).parent().prev().css({
        'background':'#edf5e3',
        'color': '#a4ac9b',
        'border-top': '6px solid #edf5e3'
      });
      $(this).parent().css({
        'color': '#bedc9e',
        'background':'#e7efdb'
      });
      $(this).closest('.course').delay(500).fadeOut(500);

      arrCourses = $(".course").filter(":visible");
      if(arrCourses.length-1 == 0){
        setTimeout(taskComleted, 1000)
      }

    });
  }

  hiding();

});