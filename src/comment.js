class Comment {
    constructor(text, piece){
        this.text = text;
        this.piece = piece;
        AppContainer.comments.push(this)
    }
}

//create a belongs_to a piece (when instantiated?)