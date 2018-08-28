$(document).ready(function() {

    initLoading();


})

function initLoading() {
    $('.loadingFirst').waitForImages({
        finished: function() {
            // $('#loading').find('.loadingTxt').html('100');
            // simpleHide($('.loadingPage'), 0);
            // _gaPV('index');
            // $('.mainContainer').removeClass('hide');
            // $('.ci').removeClass('hide');
            // playAni(getChannelString());
        },
        each: function(loaded, count, success) {
            var r = Math.floor(loaded / count * 100);
            // console.log(loaded,count)
            // $('.loadingPage').find('.txt').html(r + '%');

        },
        waitForAll: true
    });
}