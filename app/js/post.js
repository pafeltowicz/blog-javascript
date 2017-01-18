class Post {
    constructor(obj){
        this.postID = Utils.genereteKey();
        this.title = obj.title;
        this.content = obj.content;
        this.comment = new Map();
    }
    setTitle(text){
        this.title = text;
    }
    setContent(text){
        this.content = text;
    }
    addComment(comment){
        this.comment.set(comment.commentID, comment);
    }
    getComment(){
        return this.comment;
    }
}