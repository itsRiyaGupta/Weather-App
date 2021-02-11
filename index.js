document.getElementById("mybtn").onclick = () => {
  var v = document.getElementById("textInput").value;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${v}&units=metric&appid=8bc3551c9ba59f49259431c4f2d6889a`
  )
    .then((data) => {
      return data.json();
    })
    .then((data2) => {
      //   console.log(data2.name);
      //   console.log(data2.main.temp);
      //   console.log(data2.weather[0].description);

      document.getElementById("info").innerHTML = `
          <ul>
            <li class="city">City:  ${data2.name}</li>
            <li>Temperature:  ${data2.main.temp} degree celcius</li>
            <li class="des">Description:  ${data2.weather[0].description}</li>
          </ul>
      `;
    });
};
