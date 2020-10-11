$(document).ready(function () {

    $(function(){
        var fadeDelay = 1000;
        var fadeDuration = 1000;
        $('h1').click(function(e){
            $('h1').css({
                'transform': 'rotate('+ Math.random()* 360 +'deg)',
                'left': Math.random() * window.innerWidth - 100,
                'top': Math.random() * window.innerHeight + 100
            });
            $('.explosion.titre').hide()
            var div = $('<div class="explosion">')
                .css({
                    "left": e.pageX + 'px',
                    "top": e.pageY + 'px'
                })
                //.append($('<img style="width:80px; height:80px" src="img/explosion.png" alt="PAM!" />'))
                .appendTo(document.body);
                    
            setTimeout(function() {
                div.addClass('fade-out');           
                setTimeout(function() { div.remove(); }, fadeDuration);
            }, fadeDelay);
        });
    });   

});