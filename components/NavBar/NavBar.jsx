"use client";

import React, { useState } from "react";
import { Navbar, IconButton, Drawer, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import  SideBar  from "@/components/SideBar/SideBar";

const NavBar = () => {
    const [openLeftDrawer, setOpenLeftDrawer] = useState(false);

    const openDrawer = () => {
        setOpenLeftDrawer(true);
    };
    const closeDrawer = () => {
        setOpenLeftDrawer(false);
    };

    return (
        <aside>
            <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 md:hidden bg-brown-700">
                <div className="container mx-auto flex items-center justify-between text-brown-900">
                    <IconButton color="white" onClick={openDrawer}>
                        <Menu />
                    </IconButton>

                    {/* <div className="px-3 py-2 ">
                        <Link href="/" className="flex items-center pl-3">
                            <div className="relative h-8 w-8 mr-4">Logo</div>
                            <h1 className="text-2xl font-bold text-white">Prime Dashboard</h1>
                        </Link>
                    </div> */}
                </div>
            </Navbar>
            <Drawer
                placement="left"
                open={openLeftDrawer}
                onClose={closeDrawer}
                className="p-4 h-screen bg-brown-700"
                
            >
                <div className="mb-6 flex flex-col items-end justify-end">
                <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                    <X />
                </IconButton>
                </div>
                <SideBar />
            </Drawer>
        </aside>
    );
};

export default NavBar;
