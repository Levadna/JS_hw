document.addEventListener("DOMContentLoaded", function(){
    let usersDiv = document.querySelector("#users");
    let infoDiv = document.querySelector("#info");
    let postsDiv = document.querySelector("#posts");

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(user => {
            let div = document.createElement("div");
            div.className = "user";
            div.textContent = user.name;
            div.addEventListener("click", function(){
                loadUser(user.id);
            });
            usersDiv.appendChild(div);
        });
    })
    .catch(error => {
        console.log("Error", error);

    });

    function loadUser(id)
    {
        postsDiv.innerHTML = "";
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(user => {
            console.log(user);
            infoDiv.innerHTML = `
            <h2>User info:</h2>
            <table>
                <tr>
                    <td><b>Name:</b></td>
                    <td>${user.name}</td>
                </tr>
                <tr>
                    <td><b>Username:</b></td>
                    <td>${user.username}</td>
                </tr>
                <tr>
                    <td><b>Address:</b></td>
                    <td>${user.address.city}, ${user.address.street}</td>
                </tr>
                <tr>
                    <td><b>Email:</b></td>
                    <td>${user.email}</td>
                </tr>
                <tr>
                    <td><b>Phone:</b></td>
                    <td>${user.phone}</td>
                </tr>
                <tr>
                    <td><b>Website:</b></td>
                    <td>${user.website}</td>
                </tr>
            </table>
            <button id="postsBtn">Show posts</button>
            `;
            document.querySelector("#postsBtn")
            .addEventListener("click", function(){
                loadPosts(user.id);
            });
        });
    }

    function loadPosts(userId)
    {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            console.log(posts);
            postsDiv.innerHTML = "<h2 style='width:100%; text-align:center;'>User's posts:</h2>";
            posts.forEach(post => {
                let div = document.createElement("div");
                div.className = "post";
                div.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                `;
                postsDiv.appendChild(div);
            });
        });
    }
});