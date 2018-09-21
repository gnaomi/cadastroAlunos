function getStudent() {
    studentObj = {
        "studentId" : $("#studentId").val(),
        "studentName" : $("#studentName").val(),
        "studentCpf" : $("#studentCpf").val(),
        "studentRg" : $("#studentRg").val(),
        "studentEndereco" : $("#studentEndereco").val(),
        "studentClass" : $("#studentClass").val(),
        "studentTheme" : $("#studentTheme").val()
    }

    console.log(studentObj.studentName);
}

getStudent();