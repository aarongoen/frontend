class Piece {
    constructor(piece){
        let {id, name, composer, length, key, period, like, url, img_url, comments} = piece
        this.id = id;
        this.name = name;
        this.composer = composer;
        this.length = length;
        this.key = key;
        this.period = period;
        this.like = like;
        this.url = url;
        this.img_url = img_url;
        this.comments = comments;
        AppContainer.pieces.push(this);
    }
}
