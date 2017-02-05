
var commentsContainer = document.getElementById("comments");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://fe3.814.myftpupload.com/wp-json/wp/v2/comments');
    ourRequest.onload = function () {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
         // console.log(ourRequest.responseText);
        var ourData = JSON.parse(ourRequest.responseText);
       // console.log(ourData[0]);
       renderHTML(ourData);
        } else {
            console.log("we connnected but got an error");
        }
    };

    ourRequest.onerror = function() {
       // alert('Connection error');
    };
    ourRequest.send();
});

function renderHTML (data) {
    var htmlString = "";
     for (i = 0; i < data.length; i++) {
         htmlString += '<h1>' + data[i].author_name + ' says:<h1></br>';
         htmlString += '<p>' + data[i].content.rendered + '</p>';
     }
    
    commentsContainer.insertAdjacentHTML('beforeend', htmlString);
}







// var thePets = [
//     {
//     "name": "meowsalot",
//     "species": "cat",
//     "favFood": "tuna"
//     },
//     {
//     "name": "Barky",
//     "species": "dog",
//     "favFood": "carrots"
//     }
// ]

// 'thePets[1].favFood' would give you the value "carrots" 