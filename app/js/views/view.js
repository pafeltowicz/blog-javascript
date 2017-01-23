class View{
    constructor(model) {
        this.model = model;
        this.$app = document.getElementById("app");
    }
    render(controller){
        const boot = new Bootstrap(controller);
        this.$app.innerHTML = "";
        this.$app.appendChild(boot.create());
    }
}
