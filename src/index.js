const rootEl = document.getElementById('root')

fetch('http://localhost:3000/pieces')
.then((res) => res.json())
.then(data => renderPieces(data))

const renderPieces = function (pieces) {
    console.log(pieces)

    pieces.forEach(piece => {
        rootEl.innerHTML += `<h2>${piece.name} -${piece.composer}</h2>`
    })
}