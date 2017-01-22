class AddCommentComponent extends Component{
    constructor(controller, props) {
        super(controller, props);
        this.model = this.controller.model;
    }

    addEvents(){
        return {
            submit: function (e) {
                e.preventDefault();
                let post = this.model.getPost(this.props.postID);
                let comment = new Comment({
                    author: e.target.author.value,
                    content: e.target.content.value,
                });
                this.controller.addComment(post, comment);
            }.bind(this)
        }
    }

    render(){
        return `
            <form method="post">
            <div class="comment-add-form active">
                <h4>Dodaj Komentarz</h4>
                <div class="form-group">
                    <label>Autor</label>
                    <input type="text" class="form-control" name="author" placeholder="Wpisz autora">
                </div>
                <div class="form-group">
                    <label>Treść komentarza</label>
                    <input type="text" class="form-control" name="content" placeholder="Wpisz treść komentarza">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Dodaj post</button>
                </div>
            </div>
        </form>
        `;
    }
}


class CommentComp extends Component{
    constructor(controller, props) {
        super(controller, props);
    }

    render(){
        return `
            <div class="blog-comment">
                <h5>${this.props.author}</h5>
                <p>${this.props.content}</p>
            </div>
        `;
    }
}

class Article extends Component {
    constructor(controller, props) {
        super(controller, props);
    }

    render() {
        let title = this.props.title;
        let content = this.props.content;
        return `
                <article class="blog-post">
                    <h2 class="blog-post-title"><a href="#">${title}</a></h2>
                    <p class="blog-post-content">${content}</p>
                </article>`;
    }
    addChildren(){
        let commentArr = [];
        this.props.comment.forEach((item) => {
            let comment = new CommentComp(this.controller, item);
            commentArr.push(comment);
        });
        commentArr.push(new AddCommentComponent(this.controller, this.props));
        return commentArr.reverse();
    }

}

class Container extends Component {
    constructor(model, view) {
        super(model, view);
    }

    render() {
        return `<div class="container"></div>`
    }

    addChildren() {
        let article = [];
        this.controller.model.store.forEach((item) => {
            let post = new Article(this.controller, item);
            article.push(post);
        });
        return article.reverse();
    }
}

class App extends Component {
    constructor(controller) {
        super(controller);
    }

    render() {
        return `<main class="blog-main"></main>`;
    }

    addChildren() {
        const container = new Container(this.controller);
        return [container]
    }
}