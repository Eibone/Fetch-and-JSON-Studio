// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(data) {
            console.log(data);
            data.sort(function(a, b){return b.hoursInSpace-a.hoursInSpace});
            astronautCount = 0;
            for (let i in data) {
                container.innerHTML += 
                `<span class = "astronaut">
                    <h3>${data[i].firstName} ${data[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${data[i].hoursInSpace}</li>
                        <li class="${data[i].active ? 'active' : ''}">Active ${data[i].active}</li>
                        <li>Skills: ${data[i].skills}</li>
                    </ul>
                    <img class="avatar" src="${data[i].picture}">
                </span>
            `;
                astronautCount ++;
            };
            let counter = document.getElementById("count")
            counter.textContent = astronautCount;
        });
    });
});

