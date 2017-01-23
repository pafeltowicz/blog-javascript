class AddCommentComponent extends Component {
    constructor(controller, props) {
        super(controller, props);
        this.model = this.controller.model;
    }

    addEvents() {
        return {
            submit: function (e) {
                e.preventDefault();
                let post = this.model.getPost(this.props.postID);
                let comment = new Comment({
                    postID: this.props.postID,
                    author: e.target.author.value,
                    content: e.target.content.value,
                });
                this.controller.addComment(post, comment);
            }.bind(this)
        }
    }

    render() {
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