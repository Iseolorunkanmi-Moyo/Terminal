var searchDiv = document.getElementById("searchDiv")
var searchBtnSub = document.getElementById("searchBtnSub")
var headerReturn = document.getElementById("header-return")
var homeDiv = document.getElementById("home")
var latestDiv = document.getElementById("latest")
var postsDiv = document.getElementById("posts")
var inboxDiv = document.getElementById("inbox")
var homeBtn = document.getElementById("homeBtn")
var latestBtn = document.getElementById("latestBtn")
var postsBtn = document.getElementById("postsBtn")
var inboxBtn = document.getElementById("inboxBtn")
var searchInput = document.getElementById("searchInput")
var searchSub = document.getElementById("searchBtn")
var createPostDiv = document.getElementById("createPost")
var closePostBtn = document.getElementById("closePostDiv")
var createPostBtn = document.getElementById("newPost")
var postTitle = document.getElementById("title")
var postComment = document.getElementById("comment")
var postCommentBtn = document.getElementById("postComment")

postCommentBtn.addEventListener("click", ()=>{
    createPostDiv.style.display="none"
})

closePostBtn.addEventListener("click", ()=>{
    createPostDiv.style.display="none"
})

createPostBtn.addEventListener("click", ()=>{
    createPostDiv.style.display="flex"
    postTitle.value = "";
    postComment.value = "";
}) 

headerReturn.addEventListener("click", ()=>{
    searchDiv.style.animationName = "widthMinus"
    searchDiv.style.animationDuration = "100ms"
    setTimeout(() => {
        searchDiv.style.display="none"    
        searchInput.value = ""
    }, 100);
    
})

searchBtnSub.addEventListener("click", ()=>{
    searchDiv.style.display="flex"
    searchDiv.style.animationName = "widthPlus"
})

searchInput.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        alert("jj")
    }
})

homeBtn.addEventListener("click", (e)=>{
    homeDiv.style.display="flex"
    latestDiv.style.display="none"
    postsDiv.style.display="none"
    inboxDiv.style.display = "none"
})

latestBtn.addEventListener("click", (e)=>{
    homeDiv.style.display="none"
    latestDiv.style.display="flex"
    postsDiv.style.display="none"
    inboxDiv.style.display = "none"
})

postsBtn.addEventListener("click", (e)=>{
    homeDiv.style.display="none"
    latestDiv.style.display="none"
    postsDiv.style.display="flex"
    inboxDiv.style.display = "none"
})

inboxBtn.addEventListener("click", (e)=>{
    homeDiv.style.display="none"
    latestDiv.style.display="none"
    postsDiv.style.display="none"
    inboxDiv.style.display = "flex"
})

