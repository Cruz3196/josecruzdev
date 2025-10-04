import vitalwear from "../assets/vitalwear.png"
import Xclone from "../assets/Xclone.png"
import reactABCFitness from "../assets/reactABCFitness.png"

const ProjectData = [
    {
        id: 1,
        title: "ABC Fitness",
        description: "When I started learning web-development, it has always been my goal to build a e-commerce site as one of my personal projects. Since I am passionate about fitness, I decided to build a fitness related e-commerce platform. This site consisted of react-redux for state management, allowing users to add and remove items from their cart, this site is also fully responsive as well. Since this was my very first project I do intend on revisiting it and adding more features to this site. The tech stack that was used to build this site is react, react-redux, and bootstrap.",
        image: reactABCFitness, 
        sourceCode: "https://github.com/Cruz3196/abcfitness-react/tree/main",
        liveDemo: "https://abcfitness-react.onrender.com/"
    },
    {
    id: 2,
    title: "X-Clone",
    description: "This is a clone of the popular social media site X. Users can sign up and log in securely, with user sessions managed by JWT for authentication and authorization. Once logged in, users can create, like, and comment on posts, follow other users, edit their profile, and receive notifications. Building this project taught me how to architect a full-stack application by connecting a MongoDB database to an Express.js backend, creating the routes and controllers needed to power the React frontend.",
    image: Xclone, 
    sourceCode: "https://github.com/Cruz3196/X-Clone",
    liveDemo: "https://x-clone-fz67.onrender.com/login"
    },
    {
    id: 1,
    title: "VitalWear",
    description: "When I started learning web-development, it has always been my goal to build a e-commerce site as one of my personal projects. Since I am passionate about fitness, I decided to build a fitness related e-commerce platform. This site consisted of react-redux for state management, allowing users to add and remove items from their cart, this site is also fully responsive as well. Since this was my very first project I do intend on revisiting it and adding more features to this site. The tech stack that was used to build this site is react, react-redux, and bootstrap.",
    image: vitalwear, 
    sourceCode: "https://github.com/Cruz3196/vitalwear",
    liveDemo: "https://vitalwear.netlify.app"
    },
]

export default ProjectData;