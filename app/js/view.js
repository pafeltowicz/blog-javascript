class View{
    constructor(model) {
        this.model = model;
        this.$app = document.getElementById("app");
    }
    render(controller){
        const AppComp = new App(controller);
        this.$app.innerHTML = "";
        this.$app.appendChild(AppComp.create());
    }
}
