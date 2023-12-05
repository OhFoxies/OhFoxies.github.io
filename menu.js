function getCalendar() {
    let date = new Date();
    
    let days = ['Poniedzialek', "Wtorek", "Sroda", "Czwartek", "Piatek", "Sobota", "Niedziela"]
    let months = ["Styczen", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpien", "Wrzesien", "Październik", "Listopad", "Grudzien"]
    let month = date.getMonth()
    let day = date.getDate()
    let year = date.getFullYear()
    let day_name = date.getDay()
    let date_container = document.getElementById("date")
    let month_container = document.getElementById("month")
    let year_container = document.getElementById("year")
    let day_container = document.getElementById("day")
    date_container.innerHTML = "" + day;
    month_container.innerHTML = months[month]
    year_container.innerHTML = "" + year
    day_container.innerHTML = days[day_name - 1]
    console.log("Miesiąc: " + month + " day: " + day + " year: " + year)
}