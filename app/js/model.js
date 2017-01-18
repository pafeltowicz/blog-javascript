class Model {
    constructor(){
        this.store = new Map();
    }

    addPost(post){
        this.store.set(post.postID, post);
    }

    getPost(key){
        return this.store.get(key);
    }

    get(){
        return this;
    }
}