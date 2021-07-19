$(function() {

    $.ajax({
        url:'https://localhost/projeto-filmes-em-cartaz/assets/bd/script.php',
        type:'GET',
        dataType:'json',
        beforeSend:function(){
            $('.filmes').html('<div class="col-md-12">Carregando...</div>');
        },
        success:function(json){

            var html = '';

            for(var i in json) {
                html += '<div class="col-md-4"><div class="filme"><img class="shadow" src="'+json[i].avatar+'">'+json[i].titulo+'</div></div>'
            }

            $('.filmes').html(html);

        }
    });

});