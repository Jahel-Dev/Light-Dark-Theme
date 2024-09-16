const btn = document.querySelector('button')
const span = document.querySelector('span')
const body = document.querySelector('body')
const title = document.querySelector('title')
const linkIcon = document.querySelector("link[rel='icon']")

btn.addEventListener('click', function() {
    if(document.body.classList.contains('dark-mode')) {
       body.classList.remove('dark-mode')
       title.textContent = "Light"
       span.textContent = "dark"
       linkIcon.href = "./sun.ico"
       btn.classList.remove('btn-dark-mode')
       
    } else {
        body.classList.add('dark-mode')
        title.textContent = "Dark"
        span.textContent = "light"
        linkIcon.href = "./moon.ico"
        btn.classList.add('btn-dark-mode')
    }
})