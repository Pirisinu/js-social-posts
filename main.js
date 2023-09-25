let container = document.getElementById('container');
let postMetaIcon = document.getElementById('post-meta__icon');
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


let post;
for (post of posts) {

    // Divido la parola 
    let inizialiNome = post.author.name.split(" ");
    
    // Metodo Map per estrarre le prime iniziali 
    let inizialiArray = inizialiNome.map(function(firstChar) {
        return firstChar[0];
    });
    // Unisco le due iniziali in una stringa
    let iniziali = inizialiArray.join("");
    //Creo una condizione in cui andare ad applicare le iniziali
    if (post.author.image == null) {
        post.author.image = `<div class="profile-pic-default" <span>${iniziali}</span> </div>`
    }

    post = `<div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src="${post.author.image}" alt="${post.author.image}">
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${post.author.name}</div>
          <div class="post-meta__time">${post.created}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
      ${post.content}
    </div>
    <div class="post__image">
      <img src="${post.media}" alt>
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button js-like-button" data-postid="${post.id}" href="">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">
          Piace a
          <b class="js-likes-counter" id="like-counter-${post.id}">${post.likes}</b> persone
        </div>
      </div>
    </div>
  </div>`
  container.innerHTML += post;

    
}