const grid = document.querySelector(".grid");
const cardTemplate = document.getElementById("card-template");

for (let i = 0; i < 100; i++) {
  grid.append(cardTemplate.content.cloneNode(true));
}

setTimeout(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      grid.innerHTML = "";
      posts.forEach((post) => {
        const div = cardTemplate.content.cloneNode(true);
        const img = div.querySelector("img");
        img.src = "https://source.unsplash.com/100x100/?nature";
        img.addEventListener(
          "load",
          () => {
            img.classList.remove("skeleton");
          },
          { once: true }
        );
        div.querySelector("[data-title]").textContent = post.title;
        div.querySelector("[data-body]").textContent = post.body;
        grid.append(div);
      });
    });
}, 2500);

