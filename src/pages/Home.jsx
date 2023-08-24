import React from 'react';
import Sidebar from '../components/Sidebar';
import Charts from './Charts';
import Contacts from '../components/Contacts';
import ContactForm from '../components/ContactForm';
import { useLocation } from "react-router-dom";

function Contact() {

    const location = useLocation();
    const currentRoute = location.pathname;

    return (
        <div className='main'>
            <h1 className='pt-4 text-center text-white font-bold text-4xl '>
                {currentRoute == "/" ? "Contact Management" : currentRoute == "/Contact" ? "Contact Form" : "Charts and Graphs"}
            </h1>
            <div className='flex w-full'>
                <div className='sticky  top-0 h-screen'>
                    <Sidebar/>
                </div>
                <div className='w-full'>
                    {currentRoute == "/" ? <Contacts/> : <Charts/>}
                </div>
            </div>
        </div>
    )
}

export default Contact;