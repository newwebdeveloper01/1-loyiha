"use strict";


baza.splice(100);


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
console.log(sortBaza)

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
        $('.blackboard').appendChild(card)
    })
}
rendorBaza();