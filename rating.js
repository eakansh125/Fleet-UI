
const star1 = document.querySelector(".star-1")
const star2 = document.querySelector(".star-2")
const star3 = document.querySelector(".star-3")
const star4 = document.querySelector(".star-4")
const star5 = document.querySelector(".star-5")

const textStar1 = document.querySelector(".text-star-1")
const textStar2 = document.querySelector(".text-star-2")
const textStar3 = document.querySelector(".text-star-3")
const textStar4 = document.querySelector(".text-star-4")
const textStar5 = document.querySelector(".text-star-5")

const ratingText = document.querySelector("#rating-text")

star1.addEventListener("click", () => {
    star1.classList.add("rating-active")
    star2.classList.remove("rating-active")
    star3.classList.remove("rating-active")
    star4.classList.remove("rating-active")
    star5.classList.remove("rating-active")
})

star2.addEventListener("click", () => {
    star1.classList.add("rating-active")
    star2.classList.add("rating-active")
    star3.classList.remove("rating-active")
    star4.classList.remove("rating-active")
    star5.classList.remove("rating-active")
})

star3.addEventListener("click", () => {
    star1.classList.add("rating-active")
    star2.classList.add("rating-active")
    star3.classList.add("rating-active")
    star4.classList.remove("rating-active")
    star5.classList.remove("rating-active")
})

star4.addEventListener("click", () => {
    star1.classList.add("rating-active")
    star2.classList.add("rating-active")
    star3.classList.add("rating-active")
    star4.classList.add("rating-active")
    star5.classList.remove("rating-active")
})

star5.addEventListener("click", () => {
    star1.classList.add("rating-active")
    star2.classList.add("rating-active")
    star3.classList.add("rating-active")
    star4.classList.add("rating-active")
    star5.classList.add("rating-active")
})

textStar1.addEventListener("click", () => {
    textStar1.classList.add("rating-active")
    textStar2.classList.remove("rating-active")
    textStar3.classList.remove("rating-active")
    textStar4.classList.remove("rating-active")
    textStar5.classList.remove("rating-active")
    ratingText.innerHTML = "Poor"
})

textStar2.addEventListener("click", () => {
    textStar1.classList.add("rating-active")
    textStar2.classList.add("rating-active")
    textStar3.classList.remove("rating-active")
    textStar4.classList.remove("rating-active")
    textStar5.classList.remove("rating-active")
    ratingText.innerHTML = "Ok"
})

textStar3.addEventListener("click", () => {
    textStar1.classList.add("rating-active")
    textStar2.classList.add("rating-active")
    textStar3.classList.add("rating-active")
    textStar4.classList.remove("rating-active")
    textStar5.classList.remove("rating-active")
    ratingText.innerHTML = "Good"
})

textStar4.addEventListener("click", () => {
    textStar1.classList.add("rating-active")
    textStar2.classList.add("rating-active")
    textStar3.classList.add("rating-active")
    textStar4.classList.add("rating-active")
    textStar5.classList.remove("rating-active")
    ratingText.innerHTML = "Exellent"
})

textStar5.addEventListener("click", () => {
    textStar1.classList.add("rating-active")
    textStar2.classList.add("rating-active")
    textStar3.classList.add("rating-active")
    textStar4.classList.add("rating-active")
    textStar5.classList.add("rating-active")
    ratingText.innerHTML = "Perfect"
})
