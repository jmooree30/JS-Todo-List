const Newtodo = (title,description,date,priority) => {
  return {
   title,
   description,
   date,
   priority,
  }
}

  document.querySelector("#new-project").addEventListener("click",function(){
    document.querySelector(".modal").style.display = "inline";
    document.querySelector("#page-mask").style.display = "inline";
  });

  document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".modal").style.display = "none";
    document.querySelector("#page-mask").style.display = "none";
  });
