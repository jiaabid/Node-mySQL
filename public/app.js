document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

const form = document.getElementById('addpost')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const post = {
        title: form.title.value,
        body: form.body.value
    }
    fetch('/addPost', {
        method: "POST",
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(post)
    }).then(err => {
        if (err) {
            console.log(err)
        }
        form = ""
        alert("data inserted")
        var elems = document.querySelector('.modal');
        elems.close()

    });

})

const allpost = async () => {
    const posts = await fetch('/allPosts')
    const parsedposts = await posts.json()
    console.log(parsedposts)
    for (i of parsedposts) {
        document.querySelector('tbody').innerHTML += `
          <tr>
          <td>${i.id}</td>
          <td>${i.title}</td>
          <td>${i.body}</td>
          </tr>`
    }
}
allpost()
document.getElementById('mypost').addEventListener('click', async (e) => {
    e.preventDefault()
    const id = prompt('enter the id of post you want to find')
    if (id) {
        const post = await fetch(`/post/${id}`)
        const parsedpost = await post.json()
        console.log(parsedpost)
        document.querySelector('tbody').innerHTML = `
          <tr>
          <td>${parsedpost[0].id}</td>
          <td>${parsedpost[0].title}</td>
          <td>${parsedpost[0].body}</td>
          </tr>`
    }
    else {
        alert("do give the id")
        location.reload()
    }
})
//update function
//delete function
document.getElementById('delete').addEventListener('click', (e) => {
    const id = prompt('enter the id of post you want to deltet')
    if (id) {
        fetch(`/deletepost/${id}`).then(() => {
            alert("deleted!")
            location.reload()
        })
    }
})