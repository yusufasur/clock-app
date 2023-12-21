const name = prompt("Please Enter Your Name: ");
const myNameDOM = document.querySelector("#myName");
const clock = document.querySelector("#myClock")

myNameDOM.textContent = name;

const showTime = () => {
  let date = new Date().toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  let time = date.split(" ")[4];
  
  let hours = time.split(":")[0];
  let minutes = time.split(":")[1];

  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  let timeByH12 = `${hours}:${minutes} ${ampm}`;

  let dateArray = date.split(" ");

  clock.innerHTML = `
    Tarih: ${dateArray[0]} ${dateArray[1]} ${dateArray[2]} <br>
    Gün: ${dateArray[3]}<br>
    Saat: ${time} / ${timeByH12}
  `;
};

setInterval(showTime, 1000);