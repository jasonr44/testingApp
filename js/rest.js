
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://fe3.814.myftpupload.com/wp-json/wp/v2/comments');
    ourRequest.onload = function () {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {

        var data = JSON.parse(ourRequest.responseText);
     
       createHTML(data);
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

function createHTML(data) {
    var rawTemplate = document.getElementById("commentsTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(data);

    var commentsContainer = document.getElementById("commentsContainer");
    commentsContainer.innerHTML = ourGeneratedHTML;
}

