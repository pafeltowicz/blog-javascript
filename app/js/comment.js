class Comment{
    constructor(obj){
        this.commentID = Utils.genereteKey();
        this.postID = obj ? obj.postID : null;
        this.content = obj ? obj.content : null;
        this.author = obj ? obj.author : null;
    }

    setContent(text){
        this.content = text;
    }



}