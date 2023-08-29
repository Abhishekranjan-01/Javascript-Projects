const div = document.querySelector('div');




setInterval(()=>{
    const time = new Date;
    div.textContent = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
    console.log("ExCution");

},1000);

