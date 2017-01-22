class Comment{
    constructor(obj){
        this.postID = obj ? obj.postID : null;
        this.content = obj ? obj.content : null;
        this.author = obj ? obj.author : null;
    }
}