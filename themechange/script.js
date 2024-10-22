// #bcff00

function themeChange(){
    var con= document.body.style;
    var btnCh= document.getElementById('btn').style;
    var clr="rgb(244, 225, 114)";
    

    if(con.background==""){
        con.background="black";
        con.color=clr;
        btnCh.color=clr;
        btnCh.borderColor=clr;
        

    }else{
        con.background="";
        con.color="";
        btnCh.color="";
        btnCh.borderColor="";
        
    }
}   
// function toggleIcon(){
//     var icon=document.getElementById('icon');
//     if (icon.classList.contains(<i class="fa-regular fa-moon"></i>)) {
//         icon.classList.remove('<i class="fa-regular fa-moon"></i>');
//         icon.classList.add(<i class="fa-regular fa-sun"></i>);
//     } else {
//         icon.classList.remove(<i class="fa-regular fa-moon"></i>);
//         icon.classList.add(<i class="fa-regular fa-sun"></i>);
//     }
// } 
function toggleIcon(x){
    x.classList.toggle(" fa-regular fa-sun")

}

function MenuOp(){
    document.getElementById('side-bar').style.right="0";
}

function MenuClose(){
    document.getElementById('side-bar').style.right="-200px"
}



