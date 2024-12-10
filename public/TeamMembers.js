document.addEventListener("DOMContentLoaded", () => {
  document.title = "Team Members - Sustainbility";
  let header = document.getElementById("teamMembers");
  header.textContent = "Team Members";

  let mypara1 = document.getElementById("mypara1");
  mypara1.textContent = "This page will showcase our amazing team members with information about what they did in this project as well as information about them such as there picture name and short bio.";

});


document.addEventListener("DOMContentLoaded", () => {
  const sectionElement = document.querySelector("#section");
  if (!sectionElement) return;

  const localJsonFile = "Team.json";

  fetch(localJsonFile)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((responseData) => {
      responseData.forEach((item) => {
        const schedule = createTeamMemberCard(item);
        sectionElement.appendChild(schedule);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON data", error);
    });
});

function createTeamMemberCard(item) {
  const schedule = document.createElement("article");
  schedule.setAttribute("class", "teammembers");

  const imageElement = createImageElement(item.imageURL, item.alt);
  schedule.appendChild(imageElement);

  schedule.appendChild(createHeading("Name of our team member:  " + item.NameOfOurTeamMember));
  schedule.appendChild(createParagraph("bio:  " + item.bio));
  schedule.appendChild(createParagraph("What role do they play in the team:  " + item.whatTheyDo));
  schedule.appendChild(createParagraph("Responsibilities:  " + item.Hobbies));
  schedule.appendChild(createParagraph("Contributions:  " + item.WhyTheyChoseToDoThisLineOfWork));

  return schedule;
}

function createImageElement(src, alt) {
  const imageElement = document.createElement("img");
  imageElement.src = src;
  imageElement.alt = alt;
  imageElement.classList.add("small-image");
  return imageElement;
}

function createHeading(text) {
  const heading = document.createElement("h4");
  heading.textContent = text;
  return heading;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}