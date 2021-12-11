const books = document.querySelector(".books");
const book = document.querySelectorAll(".book");
books.insertAdjacentElement("afterbegin", book[1])
books.insertAdjacentElement("beforeend", book[2])
book[3].before(book[4])

const bodyStyle = document.querySelector("body").style.backgroundImage = "url(./image/you-dont-know-js.jpg)"

const link = document.querySelectorAll("a")
link[2].innerHTML = "Книга 3. this и Прототипы Объектов"

const removeAdvertising = document.querySelector(".adv");
removeAdvertising.remove()

const allUl = document.querySelectorAll("ul");
const liChapter2 = allUl[1].querySelectorAll("li")
liChapter2[4].before(liChapter2[6], liChapter2[8])
liChapter2[10].before(liChapter2[2])

const liChapter5 = allUl[4].querySelectorAll("li");
liChapter5[2].before(liChapter5[9])
liChapter5[4].after(liChapter5[2])
liChapter5[7].after(liChapter5[5])

const liChapter6 = allUl[5].querySelectorAll("li");
const li8 = document.createElement("li")
li8.innerText = "Глава 8: За пределами ES6"
liChapter6[8].after(li8)

