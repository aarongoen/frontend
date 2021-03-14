class Piece {
    constructor(name, composer, length, key, period, like, url, img_url){
        this.name = name;
        this.composer = composer;
        this.length = length;
        this.key = key;
        this.period = period;
        this.like = like;
        this.url = url;
        this.img_url = img_url;
        AppContainer.pieces.push(this);
    }
}