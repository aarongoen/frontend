class AppContainer {
    static pieces = []
     comments = []
     recitals = {}

    // const rootEl = document.getElementById('root')

// app.addEventListener("DOMContentLoaded", ()=>{
    bindEventListeners() {
//     const pieceCollection = document.querySelector('#piece-collection')
    const btn = document.getElementById("newPieceBtn");
    btn.addEventListener('click', this.getRandomPieces)
    // debugger
    };

    getRandomPieces() {
        // console.log('getting pieces')
        let randomPieces = []
        for (let i = 0; i < 10; i++) {
            //build this to random algorhythm to select a piece per period
        randomPieces.push(AppContainer.pieces[Math.floor(Math.random()*AppContainer.pieces.length)]);
        };
        return randomPieces
        debugger
    }

    getInitialPieces() {
        fetch('http://localhost:3000/pieces') // make a fetch request to /pieces
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.forEach(piece => {
                new Piece(piece.name,
                piece.composer,
                piece.length,
                piece.key,
                piece.period,
                piece.like,
                piece.url,
                piece.img_url)
            });
        })
        .catch(err => alert(err))
    };
    // debugger
}


//     populateNewPiece(data) {
//     data.forEach(piece => {
//         rootEl.innerHTML += `<h2>${piece.name} -${piece.composer}</h2>
//         <p>period: ${piece.period}</p>
//         <p>key: ${piece.key}</p>
//         <p>length: ${piece.length}</p>
//         <p>liked?: ${piece.like}</p>`
//     })
//     return populateNewPiece;
// }


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





