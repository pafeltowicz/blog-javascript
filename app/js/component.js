class Component {
    constructor(controller, props = {}) {
        this.props = props;
        this.component = {};
        this.controller = controller;
        this.toHTMLElement();
        this.children();
        this.events();
    }

    create() {
        return this.component;
    }

    attr(obj) {
        for (let attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                if (attr !== 'className') {
                    this.component.setAttribute(attr, obj[attr]);
                }
            }
        }
    }

    toHTMLElement() {
        let parser = new DOMParser();
        let $document = parser.parseFromString(this.render(), 'text/html');
        this.component = $document.querySelector('body').firstElementChild;
    }

    render() {
        return {};
    }

    addChildren() {
        return false;
    }

    addEvents() {
        return {};
    }

    events() {
        let events = this.addEvents();
        for (let event in events) {
            if (events.hasOwnProperty(event)) {
                this.component.addEventListener(event, events[event], false);
            }
        }
    }

    children() {
        let arr = this.addChildren();
        if (arr) {
            arr.forEach((item) => {
                this.component.appendChild(item.create());
            });
        }
    }
}





