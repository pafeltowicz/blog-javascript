class Storage {
    constructor(model){
        this.model = model;
        this.storage = window.localStorage.getItem("store");
        this.array = [];
        this.check();
        this.convert();
    }

    setStorage(json){
        this.storage = window.localStorage.setItem("store", json);
    }

    getStorage(){
        return this.storage;
    }

    check(){
        if(this.storage){
            this.array = Utils.toMap(this.storage);
        }
    }

    convert(){
        this.array.forEach( (item) => {
            let post = new Post(item);
            item.comment.forEach((comment) => {
                let comment1 = new Comment(comment)
                post.addComment(comment1);
            });
            this.model.addPost(post);
        });
    }

}