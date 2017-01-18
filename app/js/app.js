window.addEventListener("load", () => {
    const model = new Model();
    const controller = new Controller(model);
    new View(model, controller);
}, false);