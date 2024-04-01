var students = [];

function addStudent() {
    var student = {
        name: '',
        age: '',
        address: '',
        phone: '',
        email: '',
        class: ''
    };

    students.push(student);
    displayStudents();
}

function displayStudents() {
    var tableBody = document.getElementById('studentList');
    tableBody.innerHTML = '';

    students.forEach(function(student, index) {
        var row = '<tr>';
        row += '<td>' + (index + 1) + '</td>';
        row += '<td contenteditable="true">' + student.name + '</td>';
        row += '<td contenteditable="true">' + student.age + '</td>';
        row += '<td contenteditable="true">' + student.address + '</td>';
        row += '<td contenteditable="true">' + student.phone + '</td>';
        row += '<td contenteditable="true">' + student.email + '</td>';
        row += '<td contenteditable="true">' + student.class + '</td>';
        row += '<td><button onclick="saveStudent(' + index + ')">Lưu</button> <button onclick="deleteStudent(' + index + ')">Xóa</button></td>';
        row += '</tr>';
        tableBody.innerHTML += row;
    });
}

function saveStudent(index) {
    var row = document.getElementById('studentTable').rows[index + 1]; // 
    students[index] = {
        name: row.cells[1].innerText,
        age: row.cells[2].innerText,
        address: row.cells[3].innerText,
        phone: row.cells[4].innerText,
        email: row.cells[5].innerText,
        class: row.cells[6].innerText
    };
    displayStudents();
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

addStudent(); 
