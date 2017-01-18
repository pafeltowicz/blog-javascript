class Component {

    constructor(obj) {
        this.comp = {};
        this.obj = obj;
        this.create();
        this._children();
    }

    addEvent(event, callback){
        this.comp.addEventListener(event, callback, false);
    }

    toggleClass(className){
        this.comp.classList.toggle(className);
    }

    getChildren(i){
        return this.obj.children[i];
    }
    render(){
        return this.comp;
    }

    setText(text) {
        this.comp.textContent = text;
        this._children();
    }

    _children() {
        if(this.obj.children){
            this.obj.children.forEach((item) => {
                this.comp.appendChild(item.render());
            });
        }
    }

    create() {
        this.comp = window.document.createElement(this.obj.type);
        this.obj.attr.className.forEach((item) => {
            this.comp.classList.add(item);
        })
        for (let prop in this.obj.attr) {
            if (this.obj.attr.hasOwnProperty(prop)) {
                if (prop !== 'className') {
                    this.comp.setAttribute(prop, this.obj.attr[prop]);
                }
            }
        }
        this.comp.id = String(Math.random().toString(16).slice(2));
        this.comp.textContent = this.obj.text;
    }
}



