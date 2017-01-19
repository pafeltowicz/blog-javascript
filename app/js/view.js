class View{
    constructor(model) {
        this.model = model;
        this.$app = document.getElementById("app");
        this.postArr = [];
        this.app = {};
    }


    genereteComponent(){

        this.model.store.reverse();
        this.model.each((item) => {
            const postContent = new Component({
                type: "p",
                attr: {
                    className: ["blog-post-content"]
                },
                text: item.content,
            });
            const postTitle = new Component({
                type: "h2",
                attr: {
                    className: ["blog-post-title"]
                },
                text: item.title,
            });
            const postMore = new Component({
                type: "a",
                attr: {
                    href: "/post/" + item.postID,
                    className: []
                },
                text: "Zobacz więcej"
            });

            postMore.addEvent("click", (ev) => {
                ev.preventDefault();
                 window.location.replace("test");
            });
            const post = new Component({
                type: "article",
                attr: {
                    id: item.postID,
                    className: ["blog-post"]
                },
                children: [postTitle, postContent, postMore],
            });
            post.addEvent("click", () => {
                // this.model.removePost(item.postID);
                // this.container.render().removeChild(post.render());
                //
                // console.log(this.model.store);
            });
            this.postArr.push(post);
        });
    }


    render(){

        this.postArr.length = 0;
        this.genereteComponent();
        this.container = new Component({
            type: "div",
            attr: {
                className: ["container"]
            },
            children: this.postArr,
        });
        this.app = new Component({
            type: "main",
            attr: {
                className: ["blog-main"]
            },
            children: [this.container],
        });

        this.$app.innerHTML = "";
        this.$app.appendChild(this.app.render());
        console.log(this.model.store);
    }

}