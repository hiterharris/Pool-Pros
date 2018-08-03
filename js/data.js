var data = {
    "name": "Aqua Experts",
    "phone1": "1-888-234-5678",
    "email": "info@aquaexperts.com",
    "addressLine1": "1234 Some Street",
    "addressLine2": "",
    "city": "Charlotte",
    "state": "North Carolina",
    "country": "US",
    "zipcode": "28205",
    "mon": "Monday 7:00am - 7:00pm",
    "tue": "Tuesday 7:00am - 7:00pm",
    "wed": " Wednesday 7:00am - 7:00pm",
    "thu": "Thursday 7:00am - 7:00pm",
    "fri": "Friday 7:00am - 7:00pm",
    "sat": "Saturday 7:00am - 3:00pm",
    "sun": "Sunday CLOSED"
}

var aquaExperts = document.getElementById('aquaExperts');

aquaExperts.innerHTML = data.name;
phone1.innerHTML = data.phone1;
mon.innerHTML = data.mon;
tue.innerHTML = data.tue;
wed.innerHTML = data.wed;
thu.innerHTML = data.thu;
fri.innerHTML = data.fri;
sat.innerHTML = data.sat;
sun.innerHTML = data.sun;
