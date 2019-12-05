// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            let htmlToAdd = '';
            for (let i in json) {
                let data = json[i];
                htmlToAdd += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${data.firstName} ${data.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${data.hoursInSpace}</li>
                            <li>Active: ${data.active}</li>
                            <li>Skills: ${data.skills.join(', ')}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${data.picture}">
                </div>
                `;
            }
            let container = document.getElementById('container');
            container.innerHTML = htmlToAdd;
        });
    });
});