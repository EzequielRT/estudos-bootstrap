$(function() {

    $('#btnPesquisa').bind('click', function() {
        buscaGifs();
    });

    $('#buscaGif').bind('keydown', function(e) {
        if(e.keyCode == 13) {
            buscaGifs();
        }
    });

    function buscaGifs() {
        let html = '';
        let busca = $('#buscaGif').val();
        let url = 'https://g.tenor.com/v1/search?q='+busca+'&key=1WVBDIJ76EQS&limit=24';

        if(busca == '') {

            html = '<div class="col-md-12"><h1>Digite algo...</h1></div>';
            $('.gifs').html(html);

        } else {
            $.ajax({
                url:url,
                type:'GET',
                dataType:'json',
                beforeSend:function(){
                    $('.gifs').html('<div class="col-md-12">Carregando...</div>');
                },
                success:function(json){
        
                    html = ''; 
    
                    for(var i=0;i<json.results.length;i++) {
                        html += '<div class="col-md-4"><div class="gif"><img class="shadow" src="'+json.results[i].media[0].gif.url+'"></div></div>'
                    }
        
                    $('.gifs').html(html);
        
                }
            });
        }
    };

});