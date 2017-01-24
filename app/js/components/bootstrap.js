class Bootstrap extends Component{
    constructor(controller) {
        super(controller);
    }

    render() {
        return `<main class="blog-main"></main>`;
    }

    addChildren() {
        let container = {};
        if(this.controller.route !== ""){
             container = new SinglePost(this.controller);
        }else{
            container = new Posts(this.controller);
        }

        return [container]
    }
}