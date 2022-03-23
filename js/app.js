var i = 0, text;
function typing() {
  text = "Hi, I'm Anurag Singh";
  if (i < text.length) {
    setTimeout(typing, 100);
    document.getElementById("name").innerHTML += text.charAt(i);
    i++;
  }
}
typing();

/* cursor */
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})