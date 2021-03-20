class Comment {
    constructor(comment) {
        // debugger
        this.text = comment.text;
        this.piece_id = comment.piece_id;
        // AppContainer.comments.push(this)
    }


    renderIndexComment() {
        return `<li>${this.text}</li>`
    }

}
// renderForm() {
//     return `<form class="form"> <input name="text" type="textarea" id="comment-form" textarea id="text" id="comment-form" class="input-text" placeholder="Your comment here..."></textarea>
//     <input type="submit" name="submit-comment" value="submit"/>
//     </form>`;
// }


//create a belongs_to a piece (when instantiated?)