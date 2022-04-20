
const request = new XMLHttpRequest();

let url
let id_input 
let url_id

url  = "http://localhost:3000/student/";

id_input = Number(document.getElementById('giveid').value);

url_id= url.concat(id_input);

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



// function Put_Request() {

//     // let  putData = '{"id": 7,"name": "aool", "phon":09948}';
//     let url = "http://localhost:3000/student/";
//     let putData = (document.getElementById('com').value);
//     let putId = (document.getElementById('giveid').value);
//     // request.open("PUT", "http://localhost:3000/student/7");
//     request.open("PUT", url.concat(putId));
//     request.setRequestHeader('Content-Type', 'application/json')
//     request.send(putData);

//     request.onload = function () {
//         if (request.status == 200) {
//             console.log("Put request send successfully");
//             document.getElementById('comments1').value = request.response;
//         }
//         else {
//             console.log("Wrong URL!");
//         }
//     }
// }


function Put_Request() {
    let putData = (document.getElementById('com').value);
    request.open("PUT", url_id);
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



// function Delete_Request() {
//     let deleteId = (document.getElementById('com').value);
//     let url = "http://localhost:3000/student/";
//     request.open("DELETE", url.concat(deleteId));
//     request.send();

//     request.onload = function () {
//         if (request.status == 200) {
//             console.log("Item Deleted");
//             document.getElementById('comments1').value = request.response;
//         }
//         else {
//             console.log("Wrong URL!");
//         }
//     }
// }




function Delete_Request() {
    let deleteId = (document.getElementById('com').value);
    request.open("DELETE", url_id);
    request.send(deleteId);

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
