class Model {
    constructor(){
        this.store = [];
    }

    addPost(post){
        this.store.push(post);
    }

    getPost(key){
        return this.store.find((store) => {
            return store.postID === key;
        })
    }

    each(callback){
        return this.store.forEach(callback);
    }
}
