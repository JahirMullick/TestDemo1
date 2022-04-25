
const request = new XMLHttpRequest();

function Get_Request() {
    request.open("GET", "http://localhost:3000/student");
    request.send();

    request.onload = function () {
        if (request.status == 200) {
            // console.log("All Data fatched successfully.");
            document.getElementById('comments1').value = request.response;
        }
        else {
            console.log("Wrong URL!");
        }
    }
}


function Post_Request() {

    let data = (document.getElementById('com').value);
    request.open("POST", "http://localhost:3000/student");
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(data);

    request.onload = function () {
        if (request.status == 201) {
            console.log("Post request send successfully");
            document.getElementById('comments1').value = request.response;
        }
        else {
            console.log("Wrong URL!");
        }
    }
}


function Put_Request() {
    let id_input = Number(document.getElementById('giveid').value);
    let putData = (document.getElementById('com').value);
    request.open("PUT", ("http://localhost:3000/student/" + id_input));
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(putData);

    request.onload = function () {
        if (request.status == 200) {
            console.log("Put request send successfully");
            document.getElementById('comments1').value = request.response;
        }
        else {
            console.log("Wrong URL!");
        }
    }
}



function Delete_Request() {
    let deleteId = (document.getElementById('giveid').value);
    request.open("DELETE", ("http://localhost:3000/student/" + deleteId));
    request.send();

    request.onload = function () {
        if (request.status == 200) {
            console.log("Item Deleted");
            document.getElementById('comments1').value = request.response;
        }
        else {
            console.log("Wrong URL!");
        }
    }
}
