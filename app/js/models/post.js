class Post {
    constructor({postID = Utils.generateKey(), title = "", content = ""}){
        this.postID = postID;
        this.title = title;
        this.content = content;
        this.comment = [];
    }

    addComment(comment){
        this.comment.push(comment);
    }
}