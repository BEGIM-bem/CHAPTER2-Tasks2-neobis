let posts = document.querySelector(".posts")

const url = "https://jsonplaceholder.typicode.com/posts "

async function getPosts(url) {
    const response = await fetch(url)
    const result = await response.json()
    console.log(result)

    let view = result.map(item =>
        `<br>Title: ${item.title}<br>
    Content: ${item.body}<br><hr>
    ` ).join('')
    posts.innerHTML = view
    console.log(view)

}

getPosts(url)