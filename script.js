const grid = document.querySelector(".grid");
const cardTemplate = document.getElementById("card-template");

for (let i = 0; i < 20; i++) {
  grid.append(cardTemplate.content.cloneNode(true));
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((posts) => {
    grid.innerHTML = "";
    posts.forEach((post) => {
      const div = cardTemplate.content.cloneNode(true);
      const img = div.querySelector("img");
      img.addEventListener(
        "load",
        () => {
          img.classList.remove("skeleton");
        },
        { once: true }
      );
      div.querySelector("[data-name]").textContent = post.title;
      div.querySelector("[data-body]").textContent = post.body;
      grid.append(div);
    });
  });

