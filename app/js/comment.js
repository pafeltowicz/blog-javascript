class Comment{
    constructor(obj){
        this.commentID = Utils.genereteKey();
        this.postID = obj.postID;
        this.content = obj.content;
        this.author = obj.author;
    }
}