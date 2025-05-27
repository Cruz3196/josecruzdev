import { Link } from 'react-router-dom';
import { useState } from 'react';

const CTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5001', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.text();
            alert(data);
            
            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            
            // Close modal
            document.getElementById('my_modal_4').close();
            
        } catch (error) {
            alert('Error sending message. Please try again.');
            console.error('Error:', error);
        }
    };

    return (
        <footer id="contact" className="footer footer-horizontal footer-center text-base-content py-12 px-4">
            <div className='flex flex-col items-center'>
                <h1 className="font-bold text-3xl sm:text-4xl mb-3 sm:mb-4">Keep In <span className="text-teal-400">Touch.</span></h1>
                <p className="text-sm sm:text-base">
                    I'm currently specializing in full stack development. Feel free <br className=' hidden sm:block'/>to get in touch and talk more about your project or tech! I'd love to connect!
                </p>
            </div>
            <nav>
                <div className="grid grid-flow-col gap-6 justify-center items-center">

                    <Link to="https://www.facebook.com/profile.php?id=61563983062509" target='_blank'>
                        <i className="bi bi-facebook text-2xl cursor-pointer hover:text-teal-400"></i>
                    </Link>

                    <button onClick={()=>document.getElementById('my_modal_4').showModal()}>
                        <i className="bi bi-envelope text-2xl cursor-pointer hover:text-teal-400">
                        </i>
                    </button>

                    {/* Contact Form Modal */}
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-9/12 max-w-1xl h-140">
                            <form onSubmit={handleSubmit} className="px-0 py-0">
                                <h3 className="font-bold text-lg">Contact Me</h3>

                                <h1 className='flex justify-start font-bold py-4'>Name</h1>
                                <input 
                                    name="name"
                                    type="text" 
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input w-full"
                                    required
                                />

                                <h1 className='flex justify-start font-bold py-4'>Email</h1>
                                <input 
                                    name="email"
                                    type="email" 
                                    placeholder="Email here"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input w-full"
                                    required
                                />

                                <h1 className='flex justify-start font-bold py-4'>Subject</h1>
                                <input 
                                    name="subject"
                                    type="text" 
                                    placeholder="Subject here"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="input w-full"
                                    required
                                />

                                <h1 className='flex justify-start font-bold py-4'>Message</h1>
                                <textarea 
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="textarea w-full"
                                    rows="4"
                                    required
                                />
                                
                                <div className="modal-action">
                                    <button type="submit" className="btn submit">Send Message</button>
                                    <button 
                                        type="button" 
                                        className="btn" 
                                        onClick={() => document.getElementById('my_modal_4').close()}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </dialog>

                    <div 
                        onClick={() => window.open('/Jose Cruz Resume-5-2.pdf', '_blank')}
                        className="cursor-pointer"
                        >
                        <i className="bi bi-card-text text-2xl cursor-pointer hover:text-teal-400"></i>
                    </div>
                    
                </div>
            </nav>
            <aside>
                <p>Designed and Developed by Jose Cruz.
                Built with <span className='text-teal-400'>Coffee</span> & <span className='text-teal-400'>Love</span>. Hosted on <span className='text-teal-400'>Vercel</span>.</p>
            </aside>
        </footer>
    )
}

export default CTA