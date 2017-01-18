class Controller{
    constructor(model){
        this.model = model;
        this.addPost(2);
    }

    addPost(obj){
        const post1 = new Post({
            title: "Jakiś tytuł",
            content: "lorem"
        });
        const comment = new Comment({
            postID: post1.postID,
            content: "Jakiś komentarz",
            author: "veranoo",
        });
        this.model.addPost(post1);
        post1.addComment(comment);

    }
}