/**
 * Created by 25159 on 2016/11/19.
 */
$(function(){
    $('.link .button').hover(function () {
        var title=$(this).attr('data');
        $('.tip em').text(title);
        var pos=$(this).position().left+10;//由于下边按钮有一个20px的padding，使其与下边按钮可见部分左对齐需加上20px
        var dis=($('.tip').outerWidth()-$(this).outerWidth())/2;//使三角位置在下方按钮的中间位置
        var l=pos-dis;//三角应当移动的位置
        $('.tip').css({'left':pos+'px'}).stop(true,false).animate({'top':-10,'opacity':1},500);//动画完成时间是三秒
    },function () {
        $('.tip').stop().animate({'top':-55,'opacity':0},500)
    })
})
