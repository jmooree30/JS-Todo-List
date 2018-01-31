const projectArr = [];

const Newtodo = (title,date,priority) => {
  return {
   title,
   date,
   priority,
  }
};

function populateProjects(){
    div = document.createElement("div")
    div.innerHTML = projectArr[projectArr.length - 1].title
    div.classList = "eachproject"
    div.style.color = projectArr[projectArr.length - 1].priority
    span = document.createElement("span")
    span.innerHTML = projectArr[projectArr.length - 1].date
    span.style.float = "right"
    document.querySelector(".projects").appendChild(div).appendChild(span)
}

  document.querySelector("#new-project").addEventListener("click",function(){
    document.querySelector(".modal").style.display = "inline";
    document.querySelector("#page-mask").style.display = "inline";
  });

  document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".modal").style.display = "none";
    document.querySelector("#page-mask").style.display = "none";
  });

  document.querySelector("form").addEventListener("submit", function(e){
    values = document.querySelector("form")
    document.querySelector(".modal").style.display = "none";
    document.querySelector("#page-mask").style.display = "none";
    e.preventDefault()
    const newProject = Newtodo(values.elements["title"].value,
                               values.elements["date"].value,
                               values.elements["priority"].value)
    projectArr.push(newProject)
    populateProjects()
  })
