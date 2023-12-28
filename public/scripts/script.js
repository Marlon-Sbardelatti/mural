document.addEventListener("DOMContentLoaded", () => {
    updatePosts();
})
function updatePosts() {
    fetch("http://localhost:8080/api/all").then(res => {
        return res.json()
    }).then(json => {
        const posts = JSON.parse(json);
        const allPosts = document.getElementById("posts");
        let postElements = '';
        for (const post of posts) {
            const postElement = `<div id="${post.id}" class="card mb-4">
               <div class="card-header">
                <h5 class="card-title">${post.title}</h5> 
               </div> 
               <div class="card-body">
                <div class="card-text">
                ${post.description} 
                </div> 
               </div>
                <input type="button" name="" value="apagar" onclick="deletePost('${post.id}')">
            </div>`

            postElements += postElement;
        }
        allPosts.innerHTML = postElements;
    })
}

function newPost() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("desc").value;
    const post = { title, description }
    const options = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(post)
    }
    fetch("http://localhost:8080/api/new", options).then(res => {
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
    })
}

function deletePost(id) {
    const postId = { id }
    const options = {
        method: "DELETE",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(postId)
    }
    fetch("http://localhost:8080/api/delete", options).then(res => {
        updatePosts();
    })
}
