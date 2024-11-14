// Déclarations pour récupérer les éléments HTML nécessaires
const descriptionBox = document.getElementById('description');
const playerName = document.getElementById('player-name');
const closeBtn = document.getElementById('close-btn');
const main = document.querySelector('main');
const playerDescription = document.getElementById('description-player');
const photoDescription = document.getElementById('photo');
const strengthsDescription = document.getElementById('strengths');
const weaknessesDescription = document.getElementById('weaknesses');
const achievementDescription = document.getElementById('achievement');
const funFactDescription = document.getElementById('fun-fact');


// Descriptions de chaque joueur
const players = {

    astadjam: {
        name: 'Astadjam',
        description: 'Astadjam is a skilled developer with a focus on backend technologies and cloud solutions. He is proficient in database management and APIs.',
        placeOfBirth: 'Paris',
        age: 24,
        codingStrengths: 'Backend development, Cloud infrastructure, API integration',
        codingWeaknesses: 'Mobile app development, UI/UX design',
        achievement: 'Astadjam successfully integrated a complex API into a project, improving its data fetching performance by 50%.',
        funFact: 'Astadjam once automated his home lighting system using a Raspberry Pi, and now controls it from his phone.',
        photo: "photos/ASTADJAM.png"
    },

    balzano: {
        name: 'Romain Balzano',
        description: 'Romain is a full-stack developer with a special knack for creating scalable web applications. He’s excellent at optimizing both frontend and backend systems.',
        placeOfBirth: 'Lyon',
        age: 26,
        codingStrengths: 'Full-stack development, Performance optimization, Database design',
        codingWeaknesses: 'Mobile app development, JavaScript frameworks',
        achievement: 'Romain contributed to the development of a high-performance web app that increased company sales by 30%.',
        funFact: 'Romain loves solving complex Rubik\'s Cube puzzles in under 30 seconds to unwind.',
        photo: "photos/BALZANO.png"
    },

    bathily: {
        name: 'Yahaya Bathily',
        description: 'Yahaya is a talented developer who specializes in data structures and algorithms. He has a keen eye for optimizing complex systems.',
        placeOfBirth: 'Bamako, Mali',
        age: 22,
        codingStrengths: 'Algorithms, Data structures, Python',
        codingWeaknesses: 'UI/UX design, Front-end JavaScript',
        achievement: 'Yahaya implemented an optimization algorithm that reduced processing time by over 40% for his company\'s core application.',
        funFact: 'Yahaya once wrote a program to help him study for exams, and it turned out to be more efficient than the study methods he had been using.',
        photo: "photos/BATHILY.png"
    },

    belarif: {
        name: 'Louisa Belarif',
        description: 'Louisa is a skilled mobile app developer, with extensive experience in iOS development and mobile UI/UX design.',
        placeOfBirth: 'Paris',
        age: 25,
        codingStrengths: 'Mobile app development (iOS), UI/UX design, Swift',
        codingWeaknesses: 'Backend development, Cloud solutions',
        achievement: 'Louisa developed a popular iOS app that has been downloaded over 100,000 times in less than a year.',
        funFact: 'Louisa enjoys creating mobile apps for fun and once made an app that tracks how much water she drinks daily.',
        photo: "photos/BELARIF.png"
    },

    benameur: {
        name: 'Kawtar Benameur',
        description: 'Kawtar is an excellent backend developer who is passionate about cloud computing and cybersecurity.',
        placeOfBirth: 'Casablanca, Morocco',
        age: 23,
        codingStrengths: 'Cloud computing, Cybersecurity, Backend architecture',
        codingWeaknesses: 'Frontend frameworks, Web design',
        achievement: 'Kawtar developed a secure authentication system that significantly improved the security of her company’s web applications.',
        funFact: 'Kawtar has a secret hobby of cryptography and often solves puzzles to challenge herself.',
        photo: "photos/BENAMEUR.png"
    },

    bensalem: {
        name: 'Ilyas Bensalem',
        placeOfBirth: 'Marseille',
        age: 23,
        description: 'Ilyas is a student in computer science, he did his bachelor in fundamental computer science in Toulouse' +
            ' where he graduated in 2023. There he got a solid foundations to become a well rounded developer, then he applied in ' +
            'a web and mobile development master\'s degree in Corte, although struggling a little bit because this field was totally new to him ' +
            'he acquired a bit of knowledge and in currently getting better one step at a time but still lagging behind compared to others from the same ' +
            'class. For the first year of the master and the beginning of the second one, he has worked in a start-up company in Paris. Travelling every two weeks ' +
            'across the whole France was and is still challenging but he endured striving to become a professional developer. During most of the apprenticeship he has ' +
            'been writing unit tests, quite the boring task but still an important one for a company targeting quality and security. We are currently in november and Ilyas sets his goal ' +
            'to become a better web and mobile developed by the end of this year'
        ,
        codingStengths: 'Testing, Database Administration, Java',
        codingWeaknesses: 'Web development, Security, Electronics',
        achievement: 'Ilyas\'s biggest achievement was in the context of his apprenticeship. the company, at the time, wanted to implement a task related to R&D. ' +
            'It was an advanced feature pertaining to 3D and augmented reality. this task involved working with the back-end, the web front-end ' +
            'and the mobile front-end and tweaking a little bit the model used for the database. It was quite the rewarding task.',
        funFact: 'learned english at 19 in 6 months top only by reading mangas, was level A1 before 19',
        photo: "photos/BENSALEM.jpg"
    },

    bovy: {
        name: 'Thomas Bovy',
        description: 'Thomas is a versatile full-stack developer with a focus on building dynamic, user-friendly web applications. He excels in JavaScript and modern web frameworks.',
        placeOfBirth: 'Lyon',
        age: 26,
        codingStrengths: 'Full-stack development, JavaScript, React',
        codingWeaknesses: 'Mobile development, Cloud solutions',
        achievement: 'Thomas built a real-time chat application that scaled to over 10,000 active users.',
        funFact: 'Thomas enjoys tinkering with new JavaScript libraries and frameworks in his free time.',
        photo: "photos/BOVY.png"
    },

    chaker: {
        name: 'Yakoub Chaker',
        description: 'Yakoub is a backend developer with strong skills in database architecture and API design. He is passionate about building scalable and efficient systems.',
        placeOfBirth: 'Tunis, Tunisia',
        age: 24,
        codingStrengths: 'Backend development, API design, SQL',
        codingWeaknesses: 'Frontend development, UI/UX design',
        achievement: 'Yakoub optimized a major database system that resulted in a 60% improvement in query speed and overall performance.',
        funFact: 'Yakoub enjoys building personal projects and has created several automation bots to streamline his daily tasks.',
        photo: "photos/CHAKER.png"
    },

    colin: {
        name: 'Anthony Colin',
        description: 'Anthony is a web developer with expertise in JavaScript and server-side technologies. He is highly skilled in building responsive, scalable web applications.',
        placeOfBirth: 'Nice',
        age: 28,
        codingStrengths: 'JavaScript, Node.js, Web app architecture',
        codingWeaknesses: 'Mobile app development, Game development',
        achievement: 'Anthony developed a real-time collaborative tool used by over 15,000 users to improve team productivity.',
        funFact: 'Anthony once built a personal website to test out a new JavaScript framework just to see how fast it could load.',
        photo: "photos/COLIN.png"
    },

    eveille: {
        name: 'Marie Eveille',
        description: 'Marie is a data scientist and backend developer with a focus on machine learning and big data technologies. She loves creating data-driven solutions.',
        placeOfBirth: 'Bordeaux',
        age: 24,
        codingStrengths: 'Machine learning, Data analysis, Python',
        codingWeaknesses: 'Mobile development, Frontend frameworks',
        achievement: 'Marie created a predictive analytics model that significantly improved her company’s marketing strategy and customer retention.',
        funFact: 'Marie enjoys visualizing data and has developed several interactive dashboards just for fun.',
        photo: "photos/EVEILLE.png"
    },

    fortini: {
        name: 'Donat Fortini',
        description: 'Donat is a cybersecurity expert with a deep understanding of securing web applications and performing penetration testing. He is passionate about security and data protection.',
        placeOfBirth: 'Florence, Italy',
        age: 25,
        codingStrengths: 'Cybersecurity, Penetration testing, Backend development',
        codingWeaknesses: 'UI/UX design, Mobile development',
        achievement: 'Donat successfully identified and fixed several critical vulnerabilities in a web application, securing it for millions of users.',
        funFact: 'Donat participates in Capture the Flag (CTF) challenges every weekend to hone his ethical hacking skills.',
        photo: "photos/FORTINI.png"
    },

    garau: {
        name: 'Thomas Garau',
        description: 'Thomas is a front-end developer with a focus on creating visually appealing, responsive websites using modern technologies such as HTML5, CSS3, and JavaScript.',
        placeOfBirth: 'Montpellier',
        age: 27,
        codingStrengths: 'Frontend development, HTML5, CSS3, JavaScript',
        codingWeaknesses: 'Backend systems, Data analytics',
        achievement: 'Thomas developed a fully responsive website that helped increase his company’s client engagement by over 40%.',
        funFact: 'Thomas enjoys experimenting with new web design techniques and has a passion for creating clean, minimalistic layouts.',
        photo: "photos/GARAU.png"
    },

    grazietti: {
        name: 'Livia Grazietti',
        description: 'Livia is a mobile app developer specializing in iOS development with a focus on user-centered design. She has a knack for building intuitive, user-friendly apps.',
        placeOfBirth: 'Rome, Italy',
        age: 26,
        codingStrengths: 'iOS development, Swift, UI/UX design',
        codingWeaknesses: 'Backend development, Cloud infrastructure',
        achievement: 'Livia developed an iOS app that was featured in the App Store’s “New and Noteworthy” section.',
        funFact: 'Livia loves to solve logic puzzles and often challenges herself with coding exercises during her free time.',
        photo: "photos/GRAZIETTI.png"
    },

    hamadene: {
        name: 'Yasmine Hamadene',
        description: 'Yasmine is a data engineer with a focus on designing data pipelines and optimizing data processing systems.',
        placeOfBirth: 'Algiers, Algeria',
        age: 24,
        codingStrengths: 'Data engineering, Data pipelines, SQL',
        codingWeaknesses: 'Mobile development, Frontend frameworks',
        achievement: 'Yasmine developed a data pipeline that reduced data processing time by over 70%, significantly improving the efficiency of her team.',
        funFact: 'Yasmine loves learning new data tools and is always experimenting with new ways to improve data workflows.',
        photo: "photos/HAMADENE.png"
    },

    ismael: {
        name: 'Mohamed Ismael Otban',
        description: 'Mohamed is a backend developer with expertise in building scalable applications using Java and Spring Boot.',
        placeOfBirth: 'Cairo, Egypt',
        age: 29,
        codingStrengths: 'Java, Spring Boot, Microservices',
        codingWeaknesses: 'Frontend development, UI design',
        achievement: 'Mohamed developed a microservices architecture that improved the scalability of his company’s core application by 200%.',
        funFact: 'Mohamed loves playing around with new programming paradigms and is particularly interested in functional programming.',
        photo: "photos/ISMAEL.png"
    },

    kilimou: {
        name: 'Ambroise Kilimou',
        description: 'Ambroise is a versatile developer skilled in both front-end and back-end technologies, with a particular interest in cross-platform mobile development.',
        placeOfBirth: 'Paris',
        age: 26,
        codingStrengths: 'Full-stack development, React Native, Node.js',
        codingWeaknesses: 'Game development, Virtual reality',
        achievement: 'Ambroise developed a mobile app that runs on both iOS and Android, helping his client save development time and costs.',
        funFact: 'Ambroise enjoys making cross-platform mobile apps just to see how many different platforms he can target with a single codebase.',
        photo: "photos/KILIMOU.png"
    },

    leculier: {
        name: 'Lucas Leculier',
        description: 'Lucas is a back-end developer with experience in serverless architectures and cloud technologies.',
        placeOfBirth: 'Lille',
        age: 27,
        codingStrengths: 'Serverless architectures, AWS, Python',
        codingWeaknesses: 'Mobile app development, Front-end frameworks',
        achievement: 'Lucas implemented a serverless architecture that significantly reduced his company’s cloud infrastructure costs by 40%.',
        funFact: 'Lucas loves automation and has set up several home automation systems using cloud technologies.',
        photo: "photos/LECULIER.jpg"
    },

    marchiselli: {
        name: 'Anthony Marchiselli',
        description: 'Anthony is a software developer with a focus on building robust and secure web applications. He is proficient in both front-end and back-end technologies.',
        placeOfBirth: 'Paris',
        age: 28,
        codingStrengths: 'Full-stack development, Security, JavaScript',
        codingWeaknesses: 'Mobile apps, Augmented reality',
        achievement: 'Anthony implemented a security system that reduced the vulnerability of his company’s web apps by over 50%.',
        funFact: 'Anthony is fascinated by web security and often participates in ethical hacking competitions.',
        photo: "photos/MARCHISELLI.png"
    },

    marechal: {
        name: 'Antoine Marechal',
        description: 'Antoine is a web developer with expertise in both front-end and back-end development. He loves tackling complex challenges and optimizing code.',
        placeOfBirth: 'Toulouse',
        age: 26,
        codingStrengths: 'Web development, JavaScript, Node.js',
        codingWeaknesses: 'Mobile development, Cloud computing',
        achievement: 'Antoine developed a high-traffic web application that performed well under peak loads and won a company award for its optimization.',
        funFact: 'Antoine loves taking online coding challenges to constantly improve his skills.',
        photo: "photos/MARECHAL.png"
    },

    piacentini: {
        name: 'Theo Piacentini',
        description: 'Theo is a software developer with a strong background in building scalable applications. He is passionate about improving code efficiency and enjoys working on both front-end and back-end technologies.',
        placeOfBirth: 'Paris, France',
        age: 25,
        codingStrengths: 'Backend development, API design, Python, Django',
        codingWeaknesses: 'Mobile app development, UI/UX design',
        achievement: 'Theo built a highly efficient API for a real-time messaging system that reduced server load by 40%, greatly improving user experience.',
        funFact: 'Theo is an avid open-source contributor and has built several small projects to help improve the developer community.',
        photo: "photos/PIACENTINI.png"
    },

    renkas: {
        name: 'Vitali Renkas',
        description: 'Vitali is a software engineer with a deep interest in algorithms and optimization. He enjoys working on high-performance systems and solving complex problems.',
        placeOfBirth: 'Vilnius, Lithuania',
        age: 28,
        codingStrengths: 'Algorithms, System optimization, C++',
        codingWeaknesses: 'Mobile app development, Front-end frameworks',
        achievement: 'Vitali optimized a critical piece of the company’s core software, increasing its processing speed by 70% and improving user satisfaction.',
        funFact: 'Vitali enjoys solving competitive programming challenges and once won a local hackathon for building a data processing tool.',
        photo: "photos/RENKAS.png"
    },

    vigneau: {
        name: 'Pascal Vigneau',
        description: 'Pascal is a web developer with a passion for building responsive, accessible websites. He is experienced with modern web technologies and enjoys creating seamless user experiences.',
        placeOfBirth: 'Nantes',
        age: 30,
        codingStrengths: 'Web development, HTML5, CSS3, JavaScript',
        codingWeaknesses: 'Mobile app development, Cloud services',
        achievement: 'Pascal created a progressive web app (PWA) that allowed users to access the site offline, resulting in a 50% increase in mobile user engagement.',
        funFact: 'Pascal loves experimenting with new CSS techniques to improve website aesthetics and performance.',
        photo: "photos/VIGNEAU.png"
    },

    vinciguerra: {
        name: 'Paul-Antoine Vinciguerra',
        description: 'Paul-Antoine is a full-stack developer with expertise in both front-end and back-end technologies. He is passionate about building end-to-end solutions and learning new frameworks.',
        placeOfBirth: 'Ajaccio',
        age: 27,
        codingStrengths: 'Full-stack development, Node.js, React',
        codingWeaknesses: 'Mobile development, Security',
        achievement: 'Paul-Antoine built an internal tool that automated several tasks in his team, saving over 30 hours per week of manual work.',
        funFact: 'Paul-Antoine is always learning something new. He recently started exploring machine learning to expand his skill set.',
        photo: "photos/VINCIGUERRA.png"
    }
};

for(let playerId in players){
    // Création du conteneur principal
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

// Création de la carte du joueur
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-player', playerId);

// Création de l'image du joueur
    const img = document.createElement('img');
    img.src = players[playerId].photo;
    img.alt = players[playerId].name;

// Création du titre du joueur
    const h3 = document.createElement('h3');
    h3.textContent = players[playerId].name;

// Ajout de l'image et du titre dans la carte
    card.appendChild(img);
    card.appendChild(h3);

// Ajout de la carte dans le conteneur principal
    cardContainer.appendChild(card);

    main.append(cardContainer);
}

// Fonction pour afficher la description du joueur
function showPlayerDescription(playerId) {
    const player = players[playerId];
    if (player) {
        playerName.textContent = player.name;
        playerDescription.textContent = player.description;
        strengthsDescription.textContent = player.codingStengths
        weaknessesDescription.textContent = player.codingWeaknesses;
        achievementDescription.textContent = player.achievement;
        funFactDescription.textContent = player.funFact;
        photoDescription.src = player.photo;
        photoDescription.alt = player.name;
        descriptionBox.classList.remove('hidden');
        descriptionBox.classList.add('visible');
    }
}

// Fermeture de la boîte de description
closeBtn.addEventListener('click', () => {
    descriptionBox.classList.remove('visible');
    descriptionBox.classList.add('hidden');
});

// Ajoute un événement de clic à chaque carte pour afficher la description du joueur
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const playerId = card.getAttribute('data-player');
        showPlayerDescription(playerId);
    });
});
