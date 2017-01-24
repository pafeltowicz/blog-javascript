class Article extends Component {
    constructor(controller, props) {
        super(controller, props);
    }

    render() {
        let title = this.props.title;
        let content = this.props.content;
        let postID = this.props.postID;
        return `
            <article class="blog-post">
                <h2 class="blog-post-title"><a href="#post/${postID}">${title}</a></h2>
                <p class="blog-post-content">${content}</p>
            </article>`;
    }

    addChildren() {
        let commentArr = [];
        this.props.comment.forEach((item) => {
            let comment = new CommentComp(this.controller, item);
            commentArr.push(comment);
        });
        commentArr.push(new AddCommentComponent(this.controller, this.props));
        return commentArr.reverse();
    }

}