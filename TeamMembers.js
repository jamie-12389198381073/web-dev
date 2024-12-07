document.addEventListener("DOMContentLoaded", () => {
    document.title = "Team Members - Sustainbility";
    let header = document.getElementById("teamMembers");
    header.textContent = "team members";

    let mypara1 = document.getElementById("mypara1");
    mypara1.textContent = "This page will showcase our amazing team members with infomration about what they do and why they want to do it. It will also tell you about why they chose to work in this industy and more genral information about them";
    
});


if (sectionElement = document.querySelector("#section")) {
    let localJsonFile = "Team.json";
    document.addEventListener("DOMContentLoaded", () => {
      fetch(localJsonFile)
        .then((response) => response.json())
        .then((responseData) => {
          for (item of responseData) {
            const schedule = document.createElement("article");
            const imageElement = document.createElement("img");
            sectionElement.appendChild(schedule);
            imageElement.src = item.imageURL;
            imageElement.alt = item.alt;
    
            imageElement.classList.add("small-image");
    
            schedule.appendChild(imageElement);
            const headElement = document.createElement("h4");
            const paraElement1 = document.createElement("p");
            const paraElement2 = document.createElement("p");
            const paraElement3 = document.createElement("p");
            const paraElement4 = document.createElement("p");
    
            schedule.setAttribute("class", "servies");
            schedule.appendChild(headElement);
            headElement.textContent = "Name of our team member:" + item.NameOfOurTeamMember;
    
            schedule.appendChild(paraElement1);
            paraElement1.textContent = "about this team member: " + item.about;
    
            schedule.appendChild(paraElement2);
            paraElement2.textContent = "focus: " + item.focus;
    
            schedule.appendChild(paraElement3);
            paraElement3.textContent = "benefits: " + item.benefits;
    
            schedule.appendChild(paraElement4);
            paraElement4.textContent = "level: " + item.level;
          }
        })
        .catch((error) => console.error("Error fetching JSON data", error));
    });
    }

