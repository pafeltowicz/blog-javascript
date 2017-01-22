class Post {
    constructor(obj){
        this.postID = Utils.genereteKey();
        this.title = obj ? obj.title : null;
        this.content = obj ? obj.content : null;
        this.comment = [];
    }
    addComment(comment){
        this.comment.push(comment);
    }
}