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

    removePost(key) {
        let storeIndex = this.store.findIndex((entry) => {
            return entry.id === key;
        });
        this.store.splice(storeIndex, 1);
    }

    each(callback){
        return this.store.forEach(callback);
    }

    toJSON(){
        return Utils.toJSON(this.store);
    }
}