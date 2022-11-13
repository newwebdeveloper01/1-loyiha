"use strict";


baza.splice(10);


//------------ tartiblanmagan bazani tartiblash---------------//
const sortBaza = baza.map((baza) => {
    return {
        title: baza.title,
        year: baza.year,
        lang: baza.language,
        category: baza.categories,
        id: baza.imdbId,
        time: ` ${Math.floor(baza.runtime/60)}h ${baza.runtime%60}m`,
        summary: baza.summary,
        link: `https://www.youtube.com/embed/${baza.youtubeId}`,
        maxImg: baza.bigThumbnail,
        minIMG: baza.smallThumbnail,
        rating: baza.imdbRating,

    }
})
// console.log(sortBaza)

function rendorBaza() {
    sortBaza.forEach((el) => {

        const card = crElement('div', 'card shadow-lg ', `
        <img src="${el.minIMG}" alt="img" class="card-img">
        <div class="card-body">
           <h4 class="card-title">
              ${el.title}   
           </h4>
           <ul class="list-unstyled">
           <li> <strong>Year:  ${el.year}   </strong>
           </li>
           <li> <strong>Language:  ${el.lang} </strong></li>
           <li> <strong>Rating:   ${el.rating} </strong></li>
           <li> <strong>Category:  ${el.category}  </strong></li>
           <li> <strong>Runtime:  ${el.time} </strong></li>
        </ul>
    
           <div class="social d-flex">
              <button class="btn btn-danger m-2">
                 Trailers
              </button>
              <button class="btn btn-primary m-2">
                 Read more . . .
              </button>
    
              <button class="btn btn-warning m-2">
                 Add bookmark
              </button>
           </div>
    
        </div>
        `);

       $('.salom').appendChild(card)
   
   
      } )
}
rendorBaza();



const sortCotegory=()=>{
   const arrayCategory=[];

   sortBaza.forEach((e)=>{
      e.category.forEach((el)=>{
         if(!arrayCategory.includes(el)){
            arrayCategory.push(el);
         }

      })
   })

   arrayCategory.sort();

   arrayCategory.unshift("All");

   arrayCategory.forEach((el)=>{
      const option=crElement('option','option-item',el);
      $('#idCategory').appendChild(option);
   })
   console.log(arrayCategory);
}
sortCotegory();





const findFilm=(regerx,reyting=0,category)=>{
   if(category=='All'){
      return sortBaza.filter((films)=>{
         return films.title.match(regerx) && films.rating>=reyting
      })

   }
   return sortBaza.filter((films)=>{
      return films.title.match(regerx) && films.rating>=reyting && films.category.includes(category)
   })
}

$('.formSubmit').addEventListener('submit',  (el)=> {
   el.preventDefault();
   const filmName=$('#idName').value;
   const filmReyting=$('#idReyting').value;
   const filmCategory=$('#idCategory').value;

   const regerx= new RegExp(filmName,"gi");

   const searchFilm=findFilm(regerx,filmReyting,filmCategory);

   // console.log(searchFilm);
   setTimeout(()=>{
      if(searchFilm.length>0){
         searchResultsRender(searchFilm);
         $('.info__number').innerHTML=`<strong >${searchFilm.length}</strong> ta ma'lumot topildi`


      }
      else{
// $('.salom').classList.add('d-none');

$('.salom').innerHTML=`<h1>MA'LUMOT TOPILMADI</h1>`;

$('.info__number').innerHTML=`<strong >${searchFilm.length}</strong> ta ma'lumot topildi`
      }
   },200)


});




function searchResultsRender(data=[]) {
   // console.log(data.length);`
   $('.salom').innerHTML = "";
   data.forEach((el) => {
      const card = crElement('div', 'card shadow-lg', 
      `<img src="${el.minIMG}" alt="img" class="card-img">
       <div class="card-body">
          <h4 class="card-title">
             ${el.title}   
          </h4>
          <ul class="list-unstyled">
             <li> <strong>Year:  ${el.year}   </strong>
             </li>
             <li> <strong>Language:  ${el.lang} </strong></li>
             <li> <strong>Rating:   ${el.rating} </strong></li>
             <li> <strong>Category:  ${el.category}  </strong></li>
             <li> <strong>Runtime:  ${el.time} </strong></li>
          </ul>
   
          <div class="social d-flex">
             <a href="${el.link}" target="_blank" class="btn btn-danger m-2">
                Trailers
             </a>
             <button class="btn btn-primary m-2">
              Read more . . .
             </button>
   

             
             <button class="btn btn-warning m-2">
                Add bookmark
             </button>
          </div>
   
       </div>`);

      $('.salom').appendChild(card);

   })
}