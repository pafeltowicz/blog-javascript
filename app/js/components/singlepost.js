class SinglePost extends Component {
    constructor(controller) {
        super(controller);
    }

    render() {
        return `<div class="container"></div>`
    }

    addChildren() {
        const post = this.controller.model.getPost(this.controller.route);
        let article = {};
        if(post.postID === this.controller.route){
            article = new Article(this.controller, post);
        }
        return [article];
    }
}