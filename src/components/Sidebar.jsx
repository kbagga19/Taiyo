import React from 'react';
import { Link } from "react-router-dom";
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import ViewSidebarRoundedIcon from '@mui/icons-material/ViewSidebarRounded';

function Sidebar() {
    return (
        <div className="flex border-r-2">
        <div className="flex pt-8 flex-col h-screen p-2 bg-white shadow-md w-60">
        {/* <img src={ require('./bg.png')} /> */}

            <div className="space-y-3">
                <div className="flex items-center">
                    <h2 className="text-xl text-center mt-4 font-bold">Dashboard</h2>
                </div>
                <div className="flex-1 font-bold">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm">
                            <Link
                                to="/"
                                className="flex items-center p-2 space-x-3 font-bold rounded-md hover:font-outline"
                            >
                                <RecentActorsRoundedIcon/>    
                                <span>Contacts</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                to="/Charts"
                                className="flex items-center p-2 space-x-3 rounded-md font-bold hover:font-outline">
                                <InsightsRoundedIcon/>
                                <span>Charts And Maps</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            
                                <div className="flex items-center p-2 space-x-3 rounded-md font-bold hover:font-outline">
                                <ViewSidebarRoundedIcon/>
                                <span>Sidebar</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Sidebar;