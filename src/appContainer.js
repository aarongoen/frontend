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
    // };

    // getRandomPieces() {
    //     // console.log('getting pieces')
    //     let randomPieces = []
    //     for (let i = 0; i < randomPiece.length; i++) {
    //         //build this to random algorhythm to select a piece per period
    //     randomPieces.push(AppContainer.pieces[Math.floor(Math.random()*AppContainer.pieces.length)]);
    //     };
    //     return randomPieces
    //     // debugger
    // }

    getInitialPieces() {
        fetch('http://localhost:3000/pieces') // make a fetch request to /pieces
        .then(res => res.json())
        .then(data => {
            data.forEach(piece => {
                new Piece(piece)
            });
            this.renderPieces();
        })
        .catch(err => alert(err))
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
        
        // newDiv.className = "card" 
        // pTag.innerText = piece.like
        // btn.innerText = "Like <3"
        // btn.className = "like-btn"
     
        let startHeart = piece.like ? FULL_HEART : EMPTY_HEART
      
        this.rootEl.innerHTML += `<h2>${piece.name}  -${piece.composer}</h2>
        
        <p><a href="${piece.url}" target="_blank" rel="noopener noreferrer"><img border="0" alt="link to piece page"
        src="${piece.img_url}" width="550" height="700"></a></p>
        like <button data-piece-id="${piece.id}" class="like-btn">${startHeart}</button>

        <div id="comments" name="comments" overflow="scroll">
        <ul id="${piece.id}">
        ${renderComments()}
        </ul>
        </div>
        
        <form autocomplete="off" data-piece-id="${piece.id}" class="comment-form"> 
        <input name="text" type="textarea" textarea id="text" placeholder="Your comment here..."/>
        <input type="submit" name="submit-comment" value="submit"/>
        </form>`

        function renderComments() {
            return piece.comments.map(function(c) {
            return `<ul>${c.text} <button data-id="${c.id}" class="delete-btn">x</button></ul>`
            })
        } 

    })
  
    //  adds an event listener on button to toggle the heart
        document.querySelectorAll('.like-btn').forEach((btn) => {
            btn.addEventListener('click',  (e) => {
                // debugger
                let pieceId = e.target.dataset.pieceId
                let currentPiece = AppContainer.pieces[pieceId]
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

        //creates an event listener on the submit button of a comment 
        document.querySelectorAll('.comment-form').forEach((textbox) => {  
            textbox.addEventListener('submit', (e) => {
                e.preventDefault();
                let piece_id = e.target.dataset.pieceId
                let currentPiece = AppContainer.pieces[piece_id]
                let text= e.target.text.value
                // debugger
                const data = {
                    text,
                    piece_id
                };
                submitComment(data);
                e.target.reset()
                })
        }) 

        function submitComment(data) {
            // debugger
            fetch('http://localhost:3000/comments', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            // .then((comment) => console.log(comment))
            .then((data) => {
                console.log(data)
                const newComment = new Comment(data);
                // debugger
                appendComment(newComment)
            })
            .catch((error) => {
                console.error("Error:", error)
            })
                // rootEl.innerHTML += newComment.renderComment();
        }

        function appendComment(comment) {
            let newComment = document.createElement('LI');
            let btn = document.createElement("BUTTON")
            console.log(comment)
            newComment.innerText = comment.text
            document.getElementById(comment.piece_id).appendChild(newComment)
            newComment.appendChild(btn)
        }

        (document.querySelectorAll('.delete-btn')).forEach(btn => btn.addEventListener('click', deleteComment))


        function deleteComment(e) {
            const id = e.target.dataset.id;
            fetch(`http://localhost:3000/comments/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                e.target.parentElement.remove()
              });
          }

    }
    
}

