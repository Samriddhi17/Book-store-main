const searchInput = document.querySelector("[data-search]")
const submitBtn = document.querySelector("submit")

searchInput.addEventListener("input", e => {
    console.log(e);
    const value = e.target.value.toLowerCase()
    console.log(value)
    users.forEach(user => {
      const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
      user.element.classList.toggle("hide", !isVisible)
    })
  })


submitBtn.addEventListener("submit", e => {
  console.log(e);
})

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      console.log(user);
    })
  })