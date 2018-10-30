import hydroImage from "../assets/images/hydrobudget.png";
import twitImage from "../assets/images/twittermotions.png";
import studyImage from "../assets/images/studyduo.png";
// import image4 from "../assets/images/beardo.png";
// import image5 from "../assets/images/beardo.png";
// import image6 from "../assets/images/beardo.png";
// import image7 from "../assets/images/beardo.png";
// import image8 from "../assets/images/beardo.png";
// import image9 from "../assets/images/beardo.png";
// import image10 from "../assets/images/beardo.png";
// import image11 from "../assets/images/beardo.png";
// import image12 from "../assets/images/beardo.png";
// import image13 from "../assets/images/beardo.png";
// import image14 from "../assets/images/beardo.png";
// import image15 from "../assets/images/beardo.png";
// import image16 from "../assets/images/beardo.png";
// import image17 from "../assets/images/beardo.png";

// Templete
// {
//     title: "",
//     git: "",
//     link: "",
//     src: image,
//     desc: "",
//     tech: ['',]
// }
export default [
    // {
    //     title: "Fire Emblem RPG",
    //     git: "https://github.com/JMatt21/unit-4-game",
    //     link: "https://jmatt21.github.io/unit-4-game/",
    //     src: image2,
    //     desc: "This is a Fire Emblem themed duel simulator using only front-end JS.",
    //     tech: ['Javascript', 'HTML5/CSS']
    // },
    {
        title: "Study-Duo",
        git: "https://github.com/JMatt21/studdy-finder",
        link: "https://studyduo.herokuapp.com/",
        src: studyImage,
        desc: "Study-Duo is a mild social media application that users could find others to study with. The application was designed to find users of similar skills near them or any skills that they could search for. Users can chat with each other and will appear on their sideboard once a conversation starts. This app used React, MySQL/Sequelize, Express, SocketIO, Animate.css,  css-grid and Materialize. \nI handled the entirety of the backend with MySQL/Sequelize, Express, and SocketIO. I also put together the API for the front-end. ",
        tech: ['MySQL','Sequelize', 'Express', 'Socket.IO', 'Axios', 'React.js', 'Node.js'],
        clr: '#704ab7'
    },
    {
        title: "Twitter-Motions",
        git: "https://github.com/Chambrse/spinningSurfRappers",
        link: "https://spinning-surf-rappers.herokuapp.com/",
        src: twitImage,
        desc: "This app was made so that users could subscribe to certain twitter handles that would display the ‘emotions’ of each tweet. A large group of pre-designated handles were selected to display on the main page and users could search up any twitter handles that they would like to see the emotions of. This app used MySQL for its database and Handlebars for its front-end rendering. \nI handled the backend of the app with MySQL/Sequelize andExpress.",
        tech: ['MySQL','Sequelize', 'Express', 'Handlebars', 'Node.js'],
        clr: '#314ea2'
    }
    ,{
        title: "Hydro-Budget",
        git: "https://github.com/youngbrennin/HydroBudget",
        link: "https://youngbrennin.github.io/HydroBudget/",
        src: hydroImage,
        desc: "Hydro-Budget was designed for users to make a list of their monthly budgets to keep track of how they spent their money. It was made purely front end technologies such as HTML5/CSS and Javascript. Alongside it was Firebase to store/edit data and Google Charts to show the user their budget in a neat way.\nI was in charge of setting up the Firebase Database handling Front-Endlogic.",
        tech: ['Firebase', 'Javascript', 'Jquery'],
        clr: '#9198ad'
    }
]