const postContent = new Component({
    type: "p",
    attr: {
        className: ["blog-post-content"]
    },
    text: "Lorem ipsum dolor sit amet",
});

const postTitle = new Component({
    type: "h2",
    attr: {
        className: ["blog-post-title"]
    },
    text: "Tytuł bloga",
});


const post = new Component({
    type: "article",
    attr: {
        className: ["blog-post"]
    },
    children: [postTitle, postContent],
});


let postArr = [];
postArr.push(post);
post.obj.text = "asnjkdad";
postArr.push(post);

const container = new Component({
    type: "div",
    attr: {
        className: ["container"]
    },
    children: postArr,
});


const app = new Component({
    type: "main",
    attr: {
        className: ["blog-main"]
    },
    children: [container],
});



// let arr = ["klasa1" , "klasa2", "bashbdsjd", "ahsgdhj"];
// let objArr = [];
// arr.forEach((item) => {
//     let row = new Component({
//         type: "div",
//         attr: {
//             id: item,
//             className: ["col-md-3"]
//         },
//         text: item,
//     });
//     row.addEvent("click", () => console.log(item));
//     objArr.push(row);
// });

window.addEventListener('load', () => {
    const model = new Model();
});

document.getElementById("app").appendChild(app.render());