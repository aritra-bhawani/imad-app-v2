//counter
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    //craeate a request object
    var request = new XMLHttpRequest();
    //capture the respons and store it in a variable
    request.onreadystatechange = function () {
        if (request.readState === XMLHttpRequest.DONE) {
            //take some action
            if(request.status === 200) {
                var counter = request.responseText;
                
            }
        }
        //not done yet
        
    };
    //make a requwest
    request.open('GET' , 'http://http://aritra-bhawani.imad.hasura-app.io/counter' , true);
    request.send(null);
};