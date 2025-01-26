let main = document.getElementById("main");

let s = "";
for (let i = 0; i <= 27; i++) {
  s += `<div class="cards">
        <img
          class="img"
          src="https://cdn.pixabay.com/photo/2022/05/16/11/01/pugs-7200102_640.png"
        />
      </div>`;
}

main.innerHTML = s;
