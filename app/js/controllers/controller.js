class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.storage = new Storage(this.model);
        this.$form = window.document.getElementById("formAddPost");
        this.$addFormButton = window.document.getElementById("addPostButton");
        this.route = window.location.hash.substr(6, 13);
        this.assignEvent();
        this.view.render(this);
    }

    addComment(post, comment){
        post.addComment(comment);
        this.view.render(this);
        this.save();
    }

    save(){
        this.storage.setStorage(Utils.toJSON(this.model.store));
    }

    resetForm(target){
        target.title.value = "";
        target.content.value = "";
    }

    assignEvent() {
        this.$form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addPost({
                title: e.target.title.value,
                content: e.target.content.value
            });
            this.resetForm(e.target);
        }, false);

        window.addEventListener("hashchange", (e) => {
            this.route = window.location.hash.substr(6, 13);
            this.view.render(this);
        }, false);

        this.$addFormButton.addEventListener("click", (e) => {
            e.preventDefault();
            this.$form.classList.toggle("active");
        }, false);
    }

    addPost(obj) {
        this.model.addPost(new Post(obj));
        this.view.render(this);
        this.save();
    }
}