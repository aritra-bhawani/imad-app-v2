console.log('Loaded!');
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLegft=marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,100);
    //img.style.marginLeft='100px';
};