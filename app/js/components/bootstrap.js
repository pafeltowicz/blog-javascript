class Bootstrap extends Component{
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