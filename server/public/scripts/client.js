const passengersDom = $("#passengersOut")
const form = $("form")


function getPassengers() {
    $.ajax({
        type: "GET",
        url: "http://localhost:5000/passenger",
    })
        .then(passengers => {
            passengers.forEach(passenger => {
                const markUp = `<li>${passenger.firstName} ${passenger.lastName}</li>`
                passengersDom.append(markUp)
            })
        })
        .catch(error => {
            console.log(error)
        })
}


form.submit((event) => {
    event.preventDefault();
    const formData = {
        firstName: $("#firstNameIn").val(),
        lastName: $("#lastNameIn").val()
    }

    $.ajax({
        type: "POST",
        contentType: "application/json",
        datatype: "json",
        data: JSON.stringify(formData),
        url: "http://localhost:5000/passenger" })

        .then(res => {
            passengersDom.empty();
           getPassengers();
        })
        .catch(error => console.log(error))

        $("#firstNameIn").val("")
        $("#lastNameIn").val("")
})






getPassengers()