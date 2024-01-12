// countdown timer script js

let days = document.querySelector('.days');
let hours = document.querySelector('.hour');
let minutes = document.querySelector('.minute');
let seconds = document.querySelector('.seconds');





let countDownDate = new Date("Feb 14, 2024").getTime(); //setting the countdown date

let countDown = setInterval(() => {


    let todaysDate = new Date().getTime();  // Get today's date and time

    let difference = countDownDate - todaysDate;  // Find the difference between now and the count down date

    let day = Math.floor(difference / (1000 * 60 * 60 * 24)); // Time calculations for days
    let hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Time calculations for hours, 
    let minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); //Time calculations for minutes 
    let second = Math.floor((difference % (1000 * 60)) / 1000);// Time calculations for seconds


    if (second < 10) {

        second = '0' + second;

    }
    if (minute < 10) {

        minute = '0' + minute;

    }
    if (hour < 10) {

        hour = '0' + hour;

    }
    if (day < 10) {

        day = '0' + day;

    }

    days.textContent = day;
    hours.textContent = hour;
    minutes.textContent = minute;
    seconds.textContent = second;

    if (difference < 0) {
        clearInterval(countDown);

    }


}, 1000);

//End of count timer script js