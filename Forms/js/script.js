function saveData() {
    var studentname = document.getElementById("studentname").value;
    var fathername = document.getElementById("fathername").value;
    var mothername = document.getElementById("mothername").value;
    var mobilenum = document.getElementById("mobilenum").value;
    var address = document.getElementById("address").value;
    var dob = document.getElementById("dob").value;
    var previousmarks = document.getElementById("previousmarks").value;

    localStorage.setItem("Student Name", studentname);
    localStorage.setItem("Father's Name", fathername);
    localStorage.setItem("Mother's Name", mothername);
    localStorage.setItem("Mobile Number", mobilenum);
    localStorage.setItem("Address", address);
    localStorage.setItem("Date Of Birth", dob);
    localStorage.setItem("Previous Class Marks", previousmarks);

    // window.location.href = "FormData.html";
}


// function displayTable() {
//     var studentname = document.getElementById("studentname").value;
//     var fathername = document.getElementById("fathername").value;
//     var mothername = document.getElementById("mothername").value;
//     var mobilenum = document.getElementById("mobilenum").value;
//     var address = document.getElementById("address").value;
//     var dob = document.getElementById("dob").value;
//     var previousmarks = document.getElementById("previousmarks").value;

//     localStorage.setItem("Student Name", studentname);
//     localStorage.setItem("Father's Name", fathername);
//     localStorage.setItem("Mother's Name", mothername);
//     localStorage.setItem("Mobile Number", mobilenum);
//     localStorage.setItem("Address", address);
//     localStorage.setItem("Date Of Birth", dob);
//     localStorage.setItem("Previous Class Marks", previousmarks);

//     var table = document.getElementById("storeddata");

//     var newRow = table.insertRow(n);

//     var cell = newRow.insertCell();
//     cell.innerHTML = localStorage.getItem("Student Name");

//     var cell2 = newRow.insertCell();
//     cell2.innerHTML = localStorage.getItem("Father's Name");

//     var cell3 = newRow.insertCell();
//     cell3.innerHTML = localStorage.getItem("Mother's Name");

//     var cell4 = newRow.insertCell();
//     cell4.innerHTML = localStorage.getItem("Mobile Number");

//     var cell5 = newRow.insertCell();
//     cell5.innerHTML = localStorage.getItem("Address");

//     var cell6 = newRow.insertCell();
//     cell6.innerHTML = localStorage.getItem("Date Of Birth");

//     var cell7 = newRow.insertCell();
//     cell7.innerHTML = localStorage.getItem("Previous Class Marks");
// }

// function resetForm() {
//     document.getElementById("studentdata").reset();
// }

// displayTable(); // Display the table on page load