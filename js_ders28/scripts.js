const postListDOM = document.querySelector(".post_list");

const postUI = (posts) => {
    let result = "";
    posts.forEach((post) => {
        result += `
    <li class ="post_item">
    <div class="post_body">
        <span class="post_id">Post ID: <b> ${post.id} </b></span>
        <strong class="post_title">${post.title}</strong>
        <p class="post_content">${post.body}</p>
    </div>
    <button class="post_button">Read More</button>
</li>
`;
postListDOM.innerHTML = result;
    });
};

//! ajax

/* const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.onload = function () {
    const response = xhr.responseText;
    const data = JSON.parse(response);
    postUI(data);
};


xhr.send(); */

// ! fetch
/* 
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => postUI(data))
.catch((error) => console.log(error)); */

// ! Async & await
const getData = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    postUI(data);
};

getData();