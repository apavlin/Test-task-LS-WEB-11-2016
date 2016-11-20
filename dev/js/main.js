//= ../../bower_components/jquery/dist/jquery.min.js

$(document).ready(function() {

//  При отметке чекбокса блок закрашивается и исчезает через 1с
var hiding = function() {
  var trigger = $('.course__looked_text');
    trigger.click(function() {
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
      });
  }
// Выводит блок с надписью и убирает заголовки со страницы
var taskComleted = function() {
  $('.taskComleted').css('display', 'block');
  $('.courses .article__header, .article__subHeader').css('display', 'none');
}

// если все блоки исчезли вывести надпись про выполненное задание
if ( $(".course:visible").length != 0) { hiding() }
  else { taskComleted() };

});