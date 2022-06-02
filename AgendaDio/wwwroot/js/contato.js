chave = ''
function apagarContato(guid) {
    chave = guid
    confirmar('Tem Certeza?', excluir)
}

function excluir() {
    $.ajax("/api/Agenda/" + chave, { method: "delete" })
        .then(function (response) {
            location.reload()
        })
}