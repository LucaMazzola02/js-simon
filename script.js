const clock = setInterval(countDown, 1000);


function countDown(){
    const newLessonsDate = new Date ("May 27, 2023 09:30:00");

    const nowDate = Date.now();

    const timeDifference = newLessonsDate.getTime() - nowDate;

    const second = 1000;
    const minutes = second * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const missingSecond = Math.floor((timeDifference % minutes) / 1000);
    updateDigits('div#second-counter p.counter-digits', missingSecond);

    const missingMinutes = Math.floor((timeDifference % hours) / minutes);
    updateDigits('div#minutes-counter p.counter-digits', missingMinutes);

    const missingHours = Math.floor((timeDifference % (hours * 60)) / hours);
    updateDigits('div#hours-counter p.counter-digits', missingHours);

    const missingDays = Math.floor((timeDifference % (days * 24)) / days);
    updateDigits('div#days-counter p.counter-digits', missingDays);

};


function updateDigits(querySelectorString, htmlContent){
    const element = document.querySelector(querySelectorString);
    element.innerHTml = htmlContent;
};