const APIKey = "7dfd05918020b2464b04d38f736b4dbb";
const input = document.getElementById("cityInput");

window.addEventListener("keydown", (event) => {
    if(event.key == "Enter") {
        search()
    }
})

async function search() {
    if(input.value != "") {
        try {
            const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${APIKey}`
            );
            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.log(error);
        }
        input.value = "";
    } else {
        alert("Du musst eine Stadt eingeben >:-)")
    }
}

async function city() {
    try {
        const response = await fetch(
            "https://countriesnow.space/api/v0.1/countries"
        )
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}