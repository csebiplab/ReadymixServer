import NavBar from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar/SideBar";
import React from "react";

const DashboardRoot = ({ children }) => {
    return (
        <div className="h-full relative">
            <aside className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-brown-900">
                <SideBar />
            </aside>
            <main className="md:pl-72 pb-10">
                <NavBar />
                {children}
            </main>
        </div>
    );
};

export default DashboardRoot;
