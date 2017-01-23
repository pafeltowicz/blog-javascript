class CommentComp extends Component {
    constructor(controller, props) {
        super(controller, props);
    }

    render() {
        return `
            <div class="blog-comment">
                <h5>${this.props.author}</h5>
                <p>${this.props.content}</p>
            </div>
        `;
    }
}