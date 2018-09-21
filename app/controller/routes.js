const base_url = "http://localhost:3000/student";

function getAll() {
    $.ajax({
        type: "GET", 
        url: base_url, 
        beforeSend: function() {
            loading();
        },
        success: function(data){
            loadingComplete();
            successGetAll(data);
            console.log(JSON.stringify(data));
            console.log(data);
        },
        error: function(msg) {
            loadingComplete();
            error("Houve um erro com o carregamento da lista de alunos, tente novamente.");
        }
    })
}
getAll()

function postById(id) {
    $.ajax({
        type: "POST", 
        url: base_url + "/" + id, 
        data: form_data,
        beforeSend: function() {
            loading();
        },
        success: function(){
            successPostById();
        },
        error: function(msg) {
            error("Houve um erro no cadastramento do aluno, por favor, tente mais tarde.");
        }
    })
}

function updateById(id) {
    $.ajax({
        type: "PUT", 
        url: base_url + "/" + id, 
        data: form_data,
        beforeSend: function() {
            loading();
        },
        success: function(data){
            successPutById(data);
        },
        error: function(msg) {
            error("Não foi possível atualizar o cadastro " + this.studentName);
        }
    })
}

function deleteById(id) {
    $.ajax({
        type: "DELETE", 
        url: base_url + "/" + id, 
        data: form_data,
        beforeSend: function() {
            loading();
        },
        success: function(){
            successDeleteById();
        },
        error: function(msg) {
            error("Houve um erro ao tentar excluir este cadastro, por favor, tente novamente.");
        }
    })
}