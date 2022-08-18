import React from 'react';
import {BellIcon, MailIcon} from "@heroicons/react/outline";


function Topbar() {
    return (
        <div className="navbar bg-transparent mb-24">
            <div className="navbar-start">
                <label htmlFor="my-drawer" className= "btn btn-square btn-ghost drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block w-5 h-5 stroke-current">
                            <path d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                </label>
                <input type="text" placeholder="search.." className="input rounded-xl input-bordered w-128" disabled/>
            </div>
            <div className="navbar-center">
            </div>
            <div className="navbar-end">
                 <button className="btn btn-circle btn-accent  bg-white mr-4" disabled>
                     <BellIcon className="w-5 h-5"/>
                </button>
                <button className="btn btn-circle btn-accent bg-white btn-outlined" disabled>
                     <MailIcon className="w-5 h-5"/>
                </button>
            </div>
        </div>
    )
}

export default Topbar;