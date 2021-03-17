class AppContainer {
    static pieces = []
     comments = []
     recitals = {}

     constructor(pieces, comments, recitals) {
        this.pieces = pieces;
        this.comments = comments;
        this.recitals = recitals;
        this.rootEl = document.getElementById('root')
     }

    // bindEventListeners() {
    // const pieceCollection = document.querySelector('#piece-collection')
    // const btn = document.getElementById("newPieceBtn");
    // btn.addEventListener('click', this.getRandomPieces)

    // // debugger
    // };

    getRandomPieces() {
        // console.log('getting pieces')
        let randomPieces = []
        for (let i = 0; i < 10; i++) {
            //build this to random algorhythm to select a piece per period
        randomPieces.push(AppContainer.pieces[Math.floor(Math.random()*AppContainer.pieces.length)]);
        };
        return randomPieces
        // debugger
    }

    getInitialPieces() {
        fetch('http://localhost:3000/pieces') // make a fetch request to /pieces
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.forEach(piece => {
                new Piece(piece)
            });
            this.renderPieces();
        })
        .catch(err => alert(err))
        console.log(AppContainer.pieces)
    }


    renderPieces() {
    const piecePreviewAndLinkEl = document.getElementById('piece-preview-and-link')
    const EMPTY_HEART = '♡'
    const FULL_HEART = '♥'

    AppContainer.pieces.forEach(piece => {
        let newDiv = document.createElement("div"),
        btn = document.createElement("button"),
        pTag = document.createElement("p")
        const commentForm = document.getElementById('comment-form')
        
        newDiv.className = "card" 
        pTag.innerText = piece.like
        btn.innerText = "Like <3"
        btn.className = "like-btn"
     
        let startHeart = piece.like ? FULL_HEART : EMPTY_HEART

        const showHeart = () => {
            console.log('running!')
            if (piece.like === true) {
                startHeart = FULL_HEART }
            else if (piece.like === null) {
                startHeart = EMPTY_HEART
            } else {
                alert('heart error')}
                 //fetch to persist   
        }

        this.rootEl.innerHTML += `<h2>${piece.name}  -${piece.composer}</h2>
        <p><a href="${piece.url}" target="_blank" rel="noopener noreferrer"><img border="0" alt="link to piece page"
         src="${piece.img_url}" width="550" height="700"></a></p>
    like <button data-piece-id="${piece.id}" class="like-btn">${startHeart}</button>
        Comment    <form id="comment-form">
        <h3>Comment</h3>
        <textarea id="text" name="comment[text]" id="comment" class="input-text" placeholder="Your comment here..."></textarea>
        <button data-comment-id="comment-id" type="submit">submit</button>
    </form>`

    })
    //  adds an event listener on button to toggle the heart
    document.querySelectorAll('.like-btn').forEach((btn) => {
         btn.addEventListener('click',  (e) => {
             console.log('from eventListener')
             let pieceId = e.target.dataset.pieceId
             let currentPiece = AppContainer.pieces[pieceId]
             console.log(currentPiece)
             let changeHeart = function() {
                 if (currentPiece.like === true) {
                    currentPiece.like = false
                    btn.innerHTML = EMPTY_HEART
                     }
                 else {
                    currentPiece.like = true
                    btn.innerHTML = FULL_HEART
                 }
                }
             changeHeart()
            })
  
    })

    }

    // function bindCommentFormEventListener() {
    //     commentForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
    //         let formData = new FormData(e.target)
    //         console.log(formData)        
    //     });
    // }

    }

         
  

   

    // function changeHeart() {

    // }

        // for later, add:
            //<p>period: ${piece.period}</p>
            // <p>key: ${piece.key}</p>
            // <p>length: ${piece.length}</p>

// const fillHeart = (hearts) => {
    // const EMPTY_HEART = '♡'
    // const FULL_HEART = '♥'
    // const hearts = document.getElementsByClassName("like-glyph")
    // const heart = document.querySelector("like-glyph")

    // for (const heart of hearts) {
    // heart.addEventListener("click", (e) => {
    //     console.log(e)
    //   if (heart.innerHTML === EMPTY_HEART){
    //   // debugger
    //       heart.innerText = FULL_HEART
    //       heart.className = "activated-heart"
    //   } else {
    //       heart.innerText = EMPTY_HEART
    //       heart.className = "like-glyph"
    //   }
    //   })
    //   .catch(error => {
    //     modal.hidden = false
    //     const modalMessage = document.querySelector('#modal-message')
    //     modalMessage.innerText = error
    //     setTimeout(() =>{
    //       modal.hidden = true
    //     }, 5000)
    //   })
    // }
//   }

    // populate the pieces, comments, & recitals properties with the returned data

    // getComments() {

    // }

    // renderComments() {

    // }