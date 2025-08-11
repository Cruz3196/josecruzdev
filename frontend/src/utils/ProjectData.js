import vitalwear from "../assets/vitalwear.png"
import Xclone from "../assets/xclone.png"

const ProjectData = [
    {
        id: 1,
        title: "VitalWear",
        description: "When I started learning web-development, it has always been my goal to build a e-commerce site as one of my personal projects. Since I am passionate about fitness, I decided to build a fitness related e-commerce platform. This site consisted of react-redux for state management, allowing users to add and remove items from their cart, this site is also fully responsive as well. Since this was my very first project I do intend on revisiting it and adding more features to this site. The tech stack that was used to build this site is react, react-redux, and bootstrap.",
        image: vitalwear, 
        sourceCode: "https://github.com/Cruz3196/vitalwear",
        liveDemo: "https://vitalwear.netlify.app"
    },
    {
    id: 2,
    title: "X-Clone",
    description: "This is a clone of the popular social media website X. The tech stack that was used to build this site is react, expressJs, mongoDB, Nodejs, tailwindCSS, and JWT authentication. The goal of this project was to get a deep understanding of how routes & controllers operate in the backend, as well as how to use JWT authentication to create a secure backend. I also learned how to test urls using Postman.",
    image: Xclone, 
    sourceCode: "https://github.com/Cruz3196/X-Clone",
    liveDemo: "https://x-clone-fz67.onrender.com/login"
    }
]

export default ProjectData;