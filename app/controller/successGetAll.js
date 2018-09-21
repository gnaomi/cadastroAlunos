function successGetAll(data) {

    for(i in data) {
        $("#sectionResult").append(        
            "<div class='row'>" +               
                "<div class='card-header col-12 pl-0'>" +
                    "<h5 class='mb-0 float-left'>" +  
                        "<button id='btStudent_" + i + "'" + "class='btn btn-link' type='button' data-toggle='collapse' data-target='#studentData_" + i + "'" + "aria-expanded='false' aria-controls='studentData_" + i + "'" + ">" +
                        data[i].studentName +
                        "</button>" +                                 
                    "</h5>" +
                    "<div class='float-right mt-2'>" +
                        "<a id='btEdit' href='#' class='text-info'><i class='material-icons'>edit</i></a>" +
                        "<a id='btCheck' href='#' class='text-success'><i class='material-icons'>check</i></a>" +
                        "<a id='btDelete' href='#' class='text-danger'><i class='material-icons'>delete</i></a>" +
                    "</div>" +
                "</div>" + 
                "<div class='collapse' id='studentData_" + i + "'" + ">" +
                    "<div class='card card-aluno'>" +                               
                        "<div id='collapseOne' class='collapse show' aria-labelledby='headingOne' data-parent='#accordionExample'>" +
                            "<div class='card-body row'>" +
                                "<div class='form-group col-3'>" +
                                    "<input id='studentId' class='form-control form-control-sm' type='text' placeholder='ID'>" +
                                "</div>" +
                                "<div class='form-group col-9'>" +
                                    "<input id='studentName' class='form-control form-control-sm' type='text' placeholder='Nome Completo'>" +
                                "</div>" +
                                "<div class='form-group col'>" +
                                    "<input id='studentCpf' class='form-control form-control-sm' type='text' placeholder='CPF'>" +
                                "</div>" +
                                "<div class='form-group col'>" +
                                    "<input id='studentRg' class='form-control form-control-sm' type='text' placeholder='RG'>" +
                                "</div>" +
                                "<div class='form-group col-12'>" +
                                    "<input id='studentEndereco' class='form-control form-control-sm' type='text' placeholder='Endereço'>" +
                                "</div>" +
                                "<div class='form-group col-3'>" +
                                    "<input id='studentClass' class='form-control form-control-sm' type='text' placeholder='Turma'>" +
                                "</div>" +
                                "<div class='form-group col-9'>" +
                                    "<input id='studentTheme' class='form-control form-control-sm' type='text' placeholder='Matérias'>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>"
        )}
    }


successGetAll();