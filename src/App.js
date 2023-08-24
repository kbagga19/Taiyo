import { useLocation } from "react-router-dom";
import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import AllRoutes from './pages/Routing';

export default function App() {
    const location = useLocation();
    const currentRoute = location.pathname;
  
    return (
        <div className='main'>
            <h1 className='sticky pt-4 text-center text-white font-bold text-4xl bg-blue-600 p-4'>
                {currentRoute == "/" ? "Contact Management" : currentRoute == "/ContactForm" ? "Contact Form" : "Charts and Graphs"}
            </h1>
            <div className='flex w-full'>
                <div className='sticky top-0 h-screen'>
                    <Sidebar/>
                </div>
                <div className='w-full'>
                    <AllRoutes/>
                </div>
            </div>
        </div>
    );
}

// export default App;
