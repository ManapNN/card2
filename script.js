const createPost = (post,photo) => {
    let item = `
    <div class="card" style="width: 16rem; height: auto; font-size: 15+++++px;">
      <img src="${photo.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">
        ${post.body}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `;
  
    return item;
  };
  
  let items = [];
  let count = 1
  let loadPost = (page) =>{
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`, {
        method: "GET",
      })

  
    .then((response) => response.json())
    .then((ar) => {
        fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}`) 
  
        .then((respons2) => respons2.json())
        .then((ar2) => {
        ar2.map((photo,id) => {
          let el = createPost(ar[id],photo);
          items.push(el)
        });
        // console.log(items)
      })
      .then(() =>{
        let cards = items.join('')
        console.log(cards)
        document.getElementById('posts').innerHTML=cards
        count++
       })
      
    })
    .catch((err) => {
        alert("ошибка");
      });

    
}
loadPost()