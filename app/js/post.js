class Post {
    constructor(title, content){
        this.title = title;
        this.content = content;
        this.comment = new Map();
    }
    setTitle(text){
        this.title = text;
    }
    setContent(text){
        this.content = text;
    }
    getPost(){
        return this;
    }
    addComment(comment){
        this.comment.set(comment, comment);
    }
}