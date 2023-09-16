
const startButton = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')
const timeButton = document.querySelector('.time-list')
const board = document.querySelector('#board')
const timeEl = document.querySelector('#time')


const back = [
    'https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/smudge-the-viral-cat.jpg',
    'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
    'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_20/2860886/190517-grumpy-cat-mc-10372.JPG',
    'https://s.yimg.com/ny/api/res/1.2/WfAIcTxGIhQZIMOSjLPohw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTg1Mw--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/f4130c376e8c1633b900e6006fea8d89',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVECzTdH_vdN6kNatGLQiEc4ocSFdbcWqztQ&usqp=CAU',
    'https://i.ytimg.com/vi/n4rhAy3ueVE/maxresdefault.jpg',
    'https://ctl.s6img.com/society6/img/CnFTfKZu5-Aebu2t1YyEdwFKs4M/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/5653cd36be88468b8387ee851c6e5cc0/~~/buff-cat-meme-prints.jpg',
    'https://ih1.redbubble.net/image.2686073165.0413/fpp,small,lustre,wall_texture,product,750x1000.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwsTcvZO4NdxUU0pgZFbSfMVbEaoNf9B0XQ&usqp=CAU',
    'https://i.pinimg.com/564x/a7/45/d4/a745d490ae6782b87ede7ceed74835eb.jpg'
]



let time = 0
let score = 0

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1 class='score'> Your score: <span class='primary'> ${score} </span> </h1>`
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(50, 100)
    const { width, height } = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    let backgroundUrl = back[Math.floor(Math.random() * back.length)]
    circle.style.background = `center url(${backgroundUrl})`
    circle.style.backgroundSize = 'cover'

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
startButton.addEventListener('click', (e) => {
    e.preventDefault()
    screens[0].classList.add('up')
})
timeButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})
board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})