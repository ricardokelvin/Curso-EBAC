$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $('<tr id="linha"></tr>');

        $(`<td class="tarefa" style="cursor:pointer;">${novaTarefa}</td>`).appendTo(novoItem);

        $(novoItem).appendTo('.corpo');
        $('#nome-tarefa').val('');

        $(novoItem).click(function() {
            $(this).addClass('completa');

        })



    })
})