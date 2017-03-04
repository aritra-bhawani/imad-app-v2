//counter
var button = document.getElementById('counter');

button.onclick = function() {
    //create a request object
    var request = new XMLHttpRequest();
    //capture the respons and store it in a variable
    request.onreadystatechange = function () {
        if (request.readState === XMLHttpRequest.DONE) {
            //take some action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
        }
        //not done yet
        
    };
    //make a requwest
    request.open('GET' , 'http://aritra-bhawani.imad.hasura-app.io/counter' , true);
    request.send(null);
};