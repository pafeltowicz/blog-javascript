window.addEventListener("load", () => {
    const model = new Model();
    const post = new Post("hello", "lorem");
    const comment = new Comment();
    post.addComment(comment);
    model.addPost(post);
    model.addPost(new Post());
    const controller = new Controller(model);
    new View(model, controller);
}, false);