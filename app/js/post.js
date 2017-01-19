class Post {
    constructor(obj){
        this.postID = Utils.genereteKey();
        this.title = obj ? obj.title : null;
        this.content = obj ? obj.content : null;
        this.comment = [];
    }
    setTitle(text){
        this.title = text;
    }
    setContent(text){
        this.content = text;
    }
    addComment(comment){
        this.comment.push(comment);
    }
    getComments(){
        return this.comment;
    }
    getComment(key){
        return this.comment.find((comment) => {
            return comment.postID === key;
        })
    }
}