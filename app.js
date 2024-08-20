let $trafficRedBtn = document.querySelector("#red_btn");
let $trafficYellowBtn = document.querySelector("#yellow_btn");
let $trafficGreenBtn = document.querySelector("#green_btn");

function resetClassActive() {
    $trafficRedBtn.classList.remove("active");
    $trafficYellowBtn.classList.remove("active");
    $trafficGreenBtn.classList.remove("active");
}

$trafficRedBtn.addEventListener("click", function () {
    resetClassActive()
    $trafficRedBtn.classList.add("active");
    document.querySelector("#traffic-content").textContent = "Stop"
    document.querySelector("#traffic-content").style.color = "red"
})

$trafficYellowBtn.addEventListener("click", function () {
    resetClassActive()
    $trafficYellowBtn.classList.add("active");
    document.querySelector("#traffic-content").textContent = "Wait"
    document.querySelector("#traffic-content").style.color = "yellow"
})

$trafficGreenBtn.addEventListener("click", function () {
    resetClassActive()
    $trafficGreenBtn.classList.add("active");
    document.querySelector("#traffic-content").textContent = "Go"
    document.querySelector("#traffic-content").style.color = "green"
})



