module.exports = {
    posts: [
        {
            id: "meuid",
            title: "Um aviso",
            description: "my desc"
        },
        {
            id: "novo",
            title: "Novo",
            description: "Nova desc"
        }
    ],
    newPost(title, description) {
        this.posts.push({ id: generateId(), title, description });
    },
    getAll() {
        return this.posts;
    },
    deletePost(id) {
        for (const post of this.posts) {
            if (post.id === id) {
                console.log(`found: ${id}`)
                // console.log(this.posts.indexOf(post))
                const idx = this.posts.indexOf(post);
                this.posts.splice(idx, 1)
            }
        }
    }

}
function generateId() {
    return Math.random().toString(36).substring(2, 9);
}
