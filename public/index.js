const gridContainer = document.getElementById('grid-container');

/*let localJsonFile = "index.json";

document.addEventListener('DOMContentLoaded', ()=>{
    fetch(localJsonFile)
    .then(response => response.json())
    .then (responseData =>{ console.log(responseData);
        for (item of responseData){
            const foot = document.createElement('h4');
            document.querySelector('#foottag').textContent = item.Foot
            const homepage = document.createElement('h1');
            document.querySelector('#Home').textContent = item.home
            const aboutUs = document.createElement('h1')
            document.querySelector('#About').textContent = item.about
            const contactUs = document.createElement('h1');
            document.querySelector('#Contact').textContent = item.contact
            const ourGoals = document.createElement('h1');
            document.querySelector('#Goals').textContent = item.goals
            const Title = document.createElement('h1');
            document.querySelector('#title').textContent = item.header
            const fblink = document.createElement('h4');
            document.querySelector('#fb').textContent = item.facebook
            const twitlink = document.createElement('h4');
            document.querySelector('#twit').textContent = item.twitter
            const linkedlink = document.createElement('h4');
            document.querySelector('#linked').textContent = item.linkedin



        }
     })
    })*/

const goals = [
    {
        imgSrc: 'Images/1povert.png',
        description: '<span class="goal-text">Goal:</span><br> End poverty in all its forms everywhere.<br><span class="stats-text">Stats:</span><br> Over 700 million people (9% of the global population) live on less than $2.15 a day (World Bank, 2023). Poverty rates are highest in sub-Saharan Africa and South Asia.'
    },
    { 
        imgSrc: 'Images/2hunger.png', 
        description: '<span class="goal-text">Goal:</span><br> End hunger, achieve food security, and promote sustainable agriculture.<br> <span class="stats-text">Stats:</span><br> 828 million people are undernourished (FAO, 2021).' 
    },
    { 
        imgSrc: 'Images/3-health.png', 
        description: '<span class="goal-text">Goal:</span><br> Ensure healthy lives and promote well-being for all.<br> <span class="stats-text">Stats:</span><br> Child mortality has declined by nearly 60% since 1990 (UNICEF, 2022).' 
    },
    { 
        imgSrc: 'Images/4-education.png', 
        description: '<span class="goal-text">Goal:</span><br> Ensure inclusive and equitable quality education.<br> <span class="stats-text">Stats:</span><br> 244 million children were out of school in 2021 (UNESCO, 2021).' 
    },
    { 
        imgSrc: 'Images/5Gender.png', 
        description: '<span class="goal-text">Goal:</span><br> Achieve gender equality and empower all women and girls.<br> <span class="stats-text">Stats:</span><br> Women earn 77% of what men earn globally (ILO, 2020).' 
    },
    { 
        imgSrc: 'Images/6Water.png', 
        description: '<span class="goal-text">Goal:</span><br> Ensure availability and sustainable management of water and sanitation.<br> <span class="stats-text">Stats:</span><br> 2 billion people lack access to safely managed water services (UNICEF, 2020).' 
    },
    { 
        imgSrc: 'Images/7Energy.png', 
        description: '<span class="goal-text">Goal:</span><br> Ensure access to affordable, reliable, sustainable, and modern energy.<br> <span class="stats-text">Stats:</span><br> 675 million people lacked electricity in 2021 (IEA, 2022).' 
    },
    { 
        imgSrc: 'Images/8Economy.png', 
        description: '<span class="goal-text">Goal:</span><br> Promote inclusive and sustainable economic growth, employment, and decent work.<br> <span class="stats-text">Stats:</span><br> Unemployment rose to 191 million globally in 2023 (ILO, 2023).' 
    },
    { 
        imgSrc: 'Images/9Industry.png', 
        description: '<span class="goal-text">Goal:</span><br> Build resilient infrastructure, promote sustainable industrialization, and foster innovation.<br> <span class="stats-text">Stats:</span><br> 16% of people lack access to mobile broadband (ITU, 2021).' 
    },
    { 
        imgSrc: 'Images/10Inequality.png', 
        description: '<span class="goal-text">Goal:</span><br> Reduce inequality within and among countries.<br> <span class="stats-text">Stats:</span><br> The top 10% of the global population earns 52% of global income (UN, 2022).' 
    },
    { 
        imgSrc: 'Images/11SusCity.png', 
        description: '<span class="goal-text">Goal:</span><br> Make cities inclusive, safe, resilient, and sustainable.<br> <span class="stats-text">Stats:</span><br> 1 billion people live in slums globally (UN Habitat, 2020).' 
    },
    { 
        imgSrc: 'Images/12Responsible.png', 
        description: '<span class="goal-text">Goal:</span><br> Ensure sustainable consumption and production patterns.<br> <span class="stats-text">Stats:</span><br> One-third of all food produced is wasted (FAO, 2021).' 
    },
    { 
        imgSrc: 'Images/13climate.png', 
        description: '<span class="goal-text">Goal:</span><br> Take urgent action to combat climate change.<br> <span class="stats-text">Stats:</span><br> Global temperatures have risen by 1.2°C above pre-industrial levels (UN, 2021).' 
    },
    { 
        imgSrc: 'Images/14lifeBelow.png', 
        description: '<span class="goal-text">Goal:</span><br> Conserve and sustainably use the oceans, seas, and marine resources.<br> <span class="stats-text">Stats:</span><br> 90% of fish stocks are either fully exploited or overfished (FAO, 2020).' 
    },
    { 
        imgSrc: 'Images/15onland.png', 
        description: '<span class="goal-text">Goal:</span><br> Protect, restore, and promote sustainable use of terrestrial ecosystems.<br> <span class="stats-text">Stats:</span><br> 10 million hectares of forests are lost annually (FAO, 2021).' 
    },
    { 
        imgSrc: 'Images/16peace.png', 
        description: '<span class="goal-text">Goal:</span><br> Promote peaceful and inclusive societies for sustainable development.<br> <span class="stats-text">Stats:</span><br> 79.5 million people were displaced by conflict in 2020 (UNHCR, 2020).' 
    },
    { 
        imgSrc: 'Images/17Partnership.png', 
        description: '<span class="goal-text">Goal:</span><br> Strengthen global partnerships for sustainable development.<br> <span class="stats-text">Stats:</span><br> Official development assistance reached $204 billion in 2022 (OECD, 2022).' 
    }
];


gridContainer.innerHTML = '';


goals.forEach(goal => {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    gridItem.innerHTML = `
        <img src="${goal.imgSrc}" alt="Goal Image">
        <p>${goal.description}</p>
    `;

   
    gridContainer.appendChild(gridItem);
});

document.getElementById('play-video').addEventListener('click', function() {
    const videoContainer = document.getElementById('video-container');

    
    if (videoContainer.innerHTML === '') {
        
        const iframe = document.createElement('iframe');
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = "https://www.youtube.com/embed/M-iJM02m_Hg"; 
        iframe.frameborder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

       
        console.log("Video iframe created.");

        
        videoContainer.appendChild(iframe);
    } else {
       
        console.log("Video already embedded.");
    }
});
