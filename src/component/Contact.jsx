import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        if (value.length >= 4) {
            setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (/\S+@\S+\.\S+/.test(value)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        }
    };

    const handleMessageChange = (e) => {
        const value = e.target.value;
        setMessage(value);
        if (value.length >= 4) {
            setErrors((prevErrors) => ({ ...prevErrors, message: '' }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            alert('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    const validate = () => {
        const error = {};

        if (!name) {
            error.name = 'Name is required';
        } 

        if (!email) {
            error.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            error.email = 'Invalid Email Format';
        }

        if (!message) {
            error.message = 'Message is required';
        } 

        return error;
    };

    return (
        <div>
            <section className="text-gray-600 body-font bg-[url('https://thumbs.dreamstime.com/b/e-mail-symbol-background-concept-contact-us-address-customer-service-support-email-internet-340665838.jpg')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center min-h-screen">
                <div className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto" id="contact-form">
                    <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
                        <h1 className="text-4xl text-gray-900 sm:text-4xl font-bold title-font mb-4">Contact Form</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 py-4 text-lg text-gray-900 font-bold">Your Name</label>
                                    {errors.name && <div className="text-red-500">{errors.name}</div>}
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 py-4 text-lg text-gray-900 font-bold">Your Email</label>
                                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 py-4 text-lg text-gray-900 font-bold">Your Message</label>
                                    {errors.message && <div className="text-red-500">{errors.message}</div>}
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        value={message}
                                        onChange={handleMessageChange}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button
                                    type="submit"
                                    className="flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-blue-400 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
