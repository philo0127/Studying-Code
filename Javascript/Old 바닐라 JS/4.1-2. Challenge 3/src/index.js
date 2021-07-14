function getTime() {
  const elapsed = new Date("2021-12-24:00:00:00") - Date.now();

  const Days = parseInt(elapsed/86400000);
  const Hours = parseInt(((elapsed - (86400000*Days))/3600000));
  const Minutes = parseInt((elapsed - (86400000*Days)-(3600000*Hours))/60000);
  const Seconds = parseInt((elapsed - (86400000*Days)-(3600000*Hours)-(60000*Minutes))/1000);

  const clockTitle = document.querySelector(".time");
  clockTitle.innerText = `${Days}d ${Hours < 10 ? `0${Hours}` : Hours}h ${Minutes < 10 ? `0${Minutes}` : Minutes}m ${Seconds < 10 ? `0${Seconds}` : Seconds}s`;
}

function init() {
  getTime();
  setInterval(getTime,1000);
}
init();
