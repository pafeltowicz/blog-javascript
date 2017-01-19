class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.$form = window.document.getElementById("form");
        this.assignEvent();
        this.view.render();
    }

    assignEvent() {
        this.$form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addPost({
                title: e.target.title.value,
                content: e.target.content.value
            })
            e.target.title.value = "";
            e.target.content.value = "";
        }, false);
    }

    addPost(obj) {
        this.model.addPost(new Post(obj));
        this.view.render();
        console.log(this.model.store);
    }

}