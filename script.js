function show(id){
    let sections=document.getElementsByClassName("details")
    for(let i=0;i<sections.length;i++){
        sections[i].style.display="none";
    }
    document.getElementById(id).style.display="block";
}