import profilepic from '../assets/profile-pic.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
    <div className="hero h-140 ">
        <div className="hero-content flex-col justify-start items-start w-full">
            <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-30 h-30 rounded-full">
                    <img src={profilepic} />
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold">
                    Full Stack Developer <br className=" hidden sm:block"/> and Computer Science Major
                </h1>
                <p className="py-6 leading-7 sm:leading-8">
                    Computer Science Major with a passion for full stack development based in California. <br className="hidden lg:block"/> Currently making responsive websites and learning new technologies.
                </p>
                
                <div className="flex gap-5">
                    <Link to="https://github.com/Cruz3196" target="_blank">
                        <i className="bi bi-github text-2xl cursor-pointer hover:text-teal-400"></i>
                    </Link>
                    <Link to="https://www.facebook.com/profile.php?id=61563983062509" target='_blank'>
                        <i className="bi bi-facebook text-2xl cursor-pointer hover:text-teal-400"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/jose-cruz-6056322b3" target='_blank'>
                        <i className="bi bi-linkedin text-2xl cursor-pointer hover:text-teal-400"></i>
                    </Link>

                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero