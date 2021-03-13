class AppContainer {
    pieces = []
    comments = []
    recitals = {}

    // const rootEl = document.getElementById('root')

// document.addEventListener("DOMContentLoaded", ()=>{
    bindEventListeners() {
//     const pieceCollection = document.querySelector('#piece-collection')
    const btn = document.querySelector('#new-piece-btn')
    }

    getInitialPieces() {
        fetch('http://localhost:3000/pieces') // make a fetch request to /pieces
        .then(res => res.json())
        .then(data => {
            data.forEach(populateNewPiece)})
        .catch(err => alert(err))
    }
}
    
        // populate the pieces, comments, & recitals properties with the returned data


    // renderPieces() {
    //     // create DOM notes and insert data inthem to render in the DOM
    // }

    // getComments() {

    // }

    // renderComments() {

    // }

    // fetch('http://localhost:3000/pieces')
// .then((res) => res.json())
// .then(data => renderPieces(data))


// const renderPieces = function (pieces) {
//     console.log(pieces)

//     pieces.forEach(piece => {
//         rootEl.innerHTML += `<h2>${piece.name} -${piece.composer}</h2>
//         <p>period: ${piece.period}</p>
//         <p>key: ${piece.key}</p>
//         <p>length: ${piece.length}</p>
//         <p>liked?: ${piece.like}</p>`
//     })
// }


