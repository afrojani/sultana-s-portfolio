import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8lqxm6i', 'template_eqegrzq', form.current, 'jkw12_Xx87MX_928P')
            .then((result) => {
                console.log(result.text);
                console.log("Message sent");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id='contact' className='relative'>
            <form ref={form} onSubmit={sendEmail} className="lg:w-1/3 md:w-1/2 flex flex-col mx-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                    Hire Me: <small className='text-xs'>sultana.ani2019@gmail.com</small>
                </h2>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-400">Name</label>
                    <input type="text" name="user_name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-400">Email</label>
                    <input type="email" name="user_email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-400">Message</label>
                    <textarea name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                </div>
                <input type="submit" value="Send" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" />
            </form>
        </section>
    );
};

export default Contact;