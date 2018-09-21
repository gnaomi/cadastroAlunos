const base_url = "http://localhost:3000/student";

function getAll() {
    $.ajax({
        type: "GET", 
        url: base_url, 
        beforeSend: function() {
            loading();
        },
        success: function(data){
            successGetAll(data);
        },
        error: function(msg) {
            error(msg);
        }
    })
}

function getById(id) {
    $.ajax({
        type: "GET", 
        url: base_url + "/" + id, 
        beforeSend: function() {
            loading();
        },
        success: function(){
            successGetById();
        },
        error: function(msg) {
            error(msg);
        }
    })
}

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
            error(msg);
        }
    })
}

function putById(id) {
    $.ajax({
        type: "PUT", 
        url: base_url + "/" + id, 
        data: form_data,
        beforeSend: function() {
            loading();
        },
        success: function(){
            successPutById();
        },
        error: function(msg) {
            error(msg);
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
            error(msg);
        }
    })
}