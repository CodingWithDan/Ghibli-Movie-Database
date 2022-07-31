const url = "https://ghibliapi.herokuapp.com/films"

document.querySelector('button').addEventListener('click', getMovie)

function getMovie(){
  const movie = document.querySelector('input').value;
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let idx = (data.map(el => el.title).indexOf(movie))
        if (idx != -1) {
            id = data[idx].id
            return fetch(`${url}/${id}`);
        } 
        else return
      })
      
      .then(res => res.json())
      .then(data => {
          console.log(data)
          document.querySelector('.title').innerText = data.title
          document.querySelector('.banner').src = data.movie_banner
          document.querySelector('.director').innerText = `Directed by: ${data.director}`
          document.querySelector('.descrip').innerText = data.description
          document.querySelector('.release').innerText = `Release year: ${data.release_date}`
          document.querySelector('.run').innerText = `Runtime: ${data.running_time} minutes`
          document.querySelector('.poster').src = data.image
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// document.querySelector('button').addEventListener('click', getMovie)

// function getMovie(){
//   const movie = document.querySelector('input').value.toLowerCase();
//   const url = `https://ghibliapi.herokuapp.com/films`
//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         let movieList = findMovie(id);        
//         document.querySelector('h1').innerText = data.title
//         document.querySelector('h2').innerText = data.director
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

//     let filmTitles = [
//       {id: '2baf70d1-42bb-4437-b551-e5fed5a87abe', title: "Castle in the Sky"},
//       {id: '12cfb892-aac0-4c5b-94af-521852e46d6a', title: 'Grave of the Fireflies'}
//   ];

//     let findMovie = movies.find(movie => movie.id === '2baf70d1-42bb-4437-b551-e5fed5a87abe' )

//     console.log(findMovie)




// document.querySelector('button').addEventListener('click', getMovie)

// function getMovie(){
//   let movie = document.querySelector('input').value;
// //   const url = `https://ghibliapi.herokuapp.com/films${movie}`

//   fetch(`https://ghibliapi.herokuapp.com/films${movie}`)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
        
        
//         document.querySelector('h1').innerText = data[0].title
//         document.querySelector('h2').innerText = data[0].director
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }
