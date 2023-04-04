$(function () {
  // 滑鼠經過左側小li
  $('#left li').mouseover(function () {
    // 得到當前小li索引號
    var index = $(this).index();
    console.log(index);
    // 讓右側盒子相應索引號圖片顯示出來
    $('#content div').eq(index).show();
    // 讓其餘圖片隱藏起來
    $('#content div').eq(index).siblings().hide();
  });
});