import vitalwear from "../assets/vitalwear.png"
import Xclone from "../assets/Xclone.png"
import reactABCFitness from "../assets/ReactABCFitness.png"

const ProjectData = [
    {
    id: 1,
    title: "ABC Fitness",
    description: "For this project, I wanted to revisit a old project that I built for a web development course I took on Sophia Learning. The original project was built using only HTML, CSS, and JavaScript, the user at the time was able to add and delete products using Local and Session Storage. For this updated version of the site, I got inspiration from a Udemy Course, I was taking for full stack development. I also research other repos on Github to get more ideas on how to structure the backend and add more features to the site. After completing each route and controller, I then tested the endpoints using Postman. The authentication controller is also located within the user routes. It uses bcrypt, JSON Web Tokens (JWT), and cookie-parser. When a user creates an account, a token is generated to authenticate the user during login. This includes both access and refresh tokens. The refresh token resets every 15 minutes using a Redis cache system. The access token is used to log in to the account, and passwords are hashed using bcrypt. Middleware checks are implemented to determine if the user is an admin or has a trainer profile. The techstack that was used to build this site is React, Node.js, Express.js, MongoDB, and Mongoose, and dev dependencies that were used for the backend are axios, bcryptjs, cors, jsonwebtoken, cookie-parser, crypto, express and much more. The frontend dependencies that were used are axios, react-router-dom, zustard, axios, tailwindcss with daisyUI, and react-icons.",
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
    id: 3,
    title: "VitalWear",
    description: "When I started learning web-development, it has always been my goal to build a e-commerce site as one of my personal projects. Since I am passionate about fitness, I decided to build a fitness related e-commerce platform. This site consisted of react-redux for state management, allowing users to add and remove items from their cart, this site is also fully responsive as well. Since this was my very first project I do intend on revisiting it and adding more features to this site. The tech stack that was used to build this site is react, react-redux, and bootstrap.",
    image: vitalwear, 
    sourceCode: "https://github.com/Cruz3196/vitalwear",
    liveDemo: "https://vitalwear.netlify.app"
    },
]

export default ProjectData;