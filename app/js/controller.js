class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.fetch();
        this.$form = window.document.getElementById("form");
        this.assignEvent();
    }

    fetch(){
        let json = window.localStorage.getItem("store");
        if(json !== null){
            this.model.store = Utils.toMap(json);
        }
        this.view.render(this);
    }

    save(){
        window.localStorage.setItem("store", Utils.toJSON(this.model.store));
    }

    addComment(post, comment){
        post.addComment(comment);
        this.view.render(this);
        this.save();
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