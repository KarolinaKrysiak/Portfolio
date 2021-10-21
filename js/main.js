"use strict";

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  // =========== Project functionality =========== //
/*
global variables: _projects _selectedProjectId
*/
let _projects = [];
let _selectedProjectId;

/*
Fetches json data from the file projects.json
*/
async function fetchData() {
  const response = await fetch('json/projects.json');
  const data = await response.json();
  _projects = data;
  console.log(_projects);
  appendProjects(_projects);
  showLoader(false);
}

fetchData();

function appendProjects(projects) {
  let htmlTemplate = "";
  for (let project of projects) {
    htmlTemplate += /*html*/`
        <article onclick="showDetailView(${project.id})">
          <img src="${project.img}">
          <h2>${project.title}</h2>
          <h3>${project.undertitle}</h3>
        </article>
    `;
  }
  document.querySelector('#projects-container').innerHTML = htmlTemplate;
}

function showDetailView(id) {
  const projectToShow = _projects.find(project => project.id === id);
  navigateTo("detail-view");
  document.querySelector("#detail-view .title").innerHTML = projectToShow.title;
  document.querySelector("#detail-view-container").innerHTML = /*html*/`
    <img src="${projectToShow.img}">
    <article>
      <h2>${projectToShow.title}</h2>
      <h3>${projectToShow.brand}</h3>
      <p>Price: ${projectToShow.price} kr.</p>
      <p>Status: ${projectToShow.status}</p>
    </article>
  `;
}
