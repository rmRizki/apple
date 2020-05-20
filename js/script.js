function timeRefresh() {
    const refresh = 1000;
    myTime = setTimeout('displayTime()', refresh)
}

function displayTime() {
    const today = new Date();
    const monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    const monthName = monthList[today.getMonth()];
    const date = `${today.getDate()} ${monthName} ${today.getFullYear()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const dateTime = `${date} ${time}`;
    document.getElementById('time').innerHTML = dateTime;
    timeRefresh();
}