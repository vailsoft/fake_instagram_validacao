/*SEARCH SHADOW*/
let formSearch = document.querySelector("form")
formSearch.addEventListener("mouseover", (event) => {
    formSearch.style.cssText = "box-shadow: 0px 1px 3px black;"
});
formSearch.addEventListener("mouseout", (event) => {
    formSearch.style.cssText = "box-shadow: none;"
});


/*RED HEART*/
let likes = document.querySelector(".likes img");
let likesCount = document.querySelector(".likesCount");
function addLike(params) {
    let textLike = params.nextElementSibling.innerHTML;    
    let qtd_like = textLike.split(" ")[0];
    if(params.getAttribute("src") == "img/icons/heart.svg"){
        params.setAttribute("src", "img/red-heart.png");
        qtd_like++;
    } else {
        params.setAttribute("src", "img/icons/heart.svg");
        qtd_like--;
    }
    params.nextElementSibling.innerHTML = `${qtd_like} likes`;
}


/*VER MAIS POINTER MOUSE*/
let more = document.querySelector("button#more")
more.addEventListener("mouseover", (event) =>{
    more.style.cssText = "cursor: pointer";
})


/* Clone */
let post = document.querySelector(".card");
let main = document.querySelector("main");
more.addEventListener("click", (event) => {
    let clone = post.cloneNode(true);
    main.insertBefore(clone, more);
})


