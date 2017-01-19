window.addEventListener("load", () => {
    const model = new Model();
    const view = new View(model);
    new Controller(model, view);
}, false);