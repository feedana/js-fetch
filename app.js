//
const setError=(code)=>{
    const statuscode={
        400:"Bad Request",
        401:"Unauthorized",
        403:"Forbidden",
        404:"Not Found",
        405:"Method Not Allowed",
        408:"Request Timeout",
        409:"Conflict",
        422:"Unprocessable Entity",
        429:"Too Many Requests",
        500:"Internal Server Error",
        502:"Bad Gateway",
        503:"Service Unavailable",
        504:"Gateway Timeout",
    };
    throw new Error(statuscode[code] || "Unknown Error");
        
    };

const url = "https://dummyjson.com/posts";
fetch(url)
.then((response) => {
    if(response.status===200&&response.ok){
        return response.json();
    }else{
        setError(response.status);
    }
})
.then(({posts}) => {
    let result = "";
    const postsContainer = document.getElementById("posts");
    posts.forEach(({title,body,reactions,views}) => {
        result += `<div class="card">
      <h2 class="story-title">${title}</h2>
      <p class="story-body"> ${body}</p>

      <div class="story-reactions">
        <div class="views">
           <span class="views-count"> Views:${views}</span>
        </div>
        <div class="read-more-button">
           <a href="#">Read More</a>
        </div>
        </div>
        </div>`;
    });
    postsContainer.innerHTML = result;
})
    .catch((error) => {
    alert(error.message);
});

