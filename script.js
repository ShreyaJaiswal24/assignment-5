var index = 0;
function changeColors(){
    var colors =["red","blUe","orange","yellow","green","purple"];
    let a;
    a=document.getElementsByTagName("body")[0]
     a.style.background = colors[index++];

    if(index> colors.length - 1)
    index=0;
}