document.getElementById("button").onclick = function () {
    axios
      .get("http://localhost:4000/api/users")
      .then(function (response) {
        document.getElementById("people").innerHTML = response.data
          .map(function (person) {
            return '<li class="row">' + person
          })
          .join("")
      })
      .catch(function (err) {
        document.getElementById("people").innerHTML =
          '<li class="text-danger">' + err.message + "</li>"
      })
  }

  function getWeather(type) {
    axios
    .get(`http://localhost:4000/weather/${type}`)
    .then( (resp) => {
      // console.log(resp.data)
      document.getElementById("weather").innerHTML = resp.data
    })
    .catch(function (err) {
      document.getElementById("weather").innerHTML =
        '<p class="text-danger">' + err.message + "</p>"
    })
  }

  document.getElementById("hot").onclick = function () {
    getWeather('hot')
  }

  document.getElementById("cold").onclick = function () {
    getWeather('cold')
  }

