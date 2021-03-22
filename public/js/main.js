'use strict'
//variables
const body = document.querySelector('body');
const p = document.getElementById('mode');

fetch('api/v0')
.then((res) => {
  if (!res.ok) throw new Error('Not OK!')

  return res.json()
})
.then((jeeps) => {

  const section = document.querySelector('section');
  //append is used to nest elements into other elements. Eg: section.appendChild(figure), the figure element will become nested into the section element. HTML terms:
//<section>
//  <figure></figure>
//</section>
jeeps.forEach((jeep) => {
  //Creating a set of figure elements for each object inside array list.
    const figure = document.createElement('figure');
    section.appendChild(figure);
  
  //Creating h2 element to nest into the figures, this is the title.
    const title = document.createElement('h2');
    title.innerHTML = jeep.title;
    figure.appendChild(title);
  
  //Creating img element, this is where the image, the alt, its source, height and width will be located (these become the image attributes)
    const img = document.createElement('img');
    img.src = jeep.pathURL;
    img.alt = jeep.description;
    img.width = jeep.width;
    img.height = jeep.height;
    figure.appendChild(img);

  //Creating a anchor element, this displays the photographers name and attached is a link to his "portfolio". (instagram)
    const creditLink = document.createElement('a');
    creditLink.href = jeep.creditLink;
    creditLink.innerHTML = `Photo by ${jeep.credit}`;
    figure.appendChild(creditLink);

  //Creating a figcaption element this includes the image description. 
    const figCaption = document.createElement('figcaption')
    figCaption.innerHTML = `${jeep.description}`;
    figure.appendChild(figCaption);
  });
})
.catch((error) => {
  console.log(error)
});
