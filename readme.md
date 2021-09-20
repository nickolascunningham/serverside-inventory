The Night Stack Express
===

A Train Line for Night Stackers
---

For your first group project, you'll be creating a simple web app that will allow users to see/add passengers to a train. 

Make sure each member of your group understands the underlying concepts before moving from one phase to the next. Each bullet point is a perfect place to add/commit so build that habit here by doing so after each bullet point is completed.

Base Mode requirements:
===

Phase 1: server GET setup:
---

- create a global array variable in server.js to hold the passengers
- create a GET route on the server named "/passenger"that sends a response of this array (can test in browser, may also want to put some test data in there as such: ``` let passengers = [ { firstName: 'Commander', lastName: 'Wisdom' } ]``` so you don't only have an empty array)

Phase 2: client GET:
---

- create a function in client.js names "getPassengers" that makes a GET call via AJAX to this get route
- display the response from the GET call in the console
- displays the response on the DOM (there is already a "passengersOut" ul element)

Phase 3: Client POST
---

- add text inputs and button to the html for the user to add a passenger (eg: firstNameIn, lastNameIn, addPassengerButton)
- add a click hander for the addPassengerButton in client.js
- in this click hander, run a function that collects the user data and packages it into an object to send to the server. console log the object
- once you have an object with the user input, add an AJAX POST call to this function that will send it to the server

Phase 4: Server Post 
---

- create a POST route on the server at "/passenger"
- log out the ```req.body``` received in the route
- restart your server and try to POST to this route from your user input
- update the POST route to push the new passenger into the passengers array
- in your client.js, run the "getPassengers" function in the "then" of the POST AJAX call - this should update the DOM

Review the app's code here and check with one another that the techniques make sense before moving on to the Stretch Goals if you have time.

Stretch Goals:
---

- add a "arrived" button for each passenger with a class of "removePassenger"
- add a data-id field for each "arrived" button that holds the passenger's array index (i in the loop)
- create a dynamic button click or the "removePassenger" class
- use ```$( this ).data( 'id' )``` to get the passenger ID when clicked
- send this id, in an object, to the server 
- remove this passenger from the array & update the DOM