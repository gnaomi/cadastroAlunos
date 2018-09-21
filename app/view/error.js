function error(msg) {
    $("#sectionResult").html("<div class='text-danger text-small mt-5'><i class='material-icons float-left pr-2'>feedback</i>Houve um erro com o carregamento da lista de alunos, tente novamente.</div>");
}

function errorClear() {
    $("#sectionResult").remove(msg);
}