class Post {
    constructor({title = "", content = ""}){
        this.postID = Utils.generateKey();
        this.title = title;
        this.content = content;
        this.comment = [];
    }

    addComment(comment){
        this.comment.push(comment);
    }
}