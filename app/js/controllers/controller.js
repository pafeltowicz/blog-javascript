class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.storage = new Storage(this.model);
        this.$form = window.document.getElementById("form");
        this.formData = new FormData(this.$form);
        this.assignEvent();
        this.view.render(this);
        console.log(this.formData);
    }

    addComment(post, comment){
        post.addComment(comment);
        this.view.render(this);
        this.save();
    }

    save(){
        this.storage.setStorage(Utils.toJSON(this.model.store));
    }

    assignEvent() {
        this.$form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addPost({
                title: e.target.title.value,
                content: e.target.content.value
            });
            e.target.title.value = "";
            e.target.content.value = "";
        }, false);
    }

    addPost(obj) {
        this.model.addPost(new Post(obj));
        this.view.render(this);
        this.save();
    }
}