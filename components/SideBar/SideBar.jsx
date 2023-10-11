"use client";
import { dashboardRoutes } from "@/data/dashboardRoutes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
    const pathname = usePathname();
    console.log(dashboardRoutes);

    return (
        <section className="space-y-4 py-4 flex flex-col h-full overflow-y-scroll bg-brown-700 text-white">
            <div className="px-3 py-2 ">
                <Link href="/" className="flex items-center pl-3 mb-14">
                    <div className="relative h-8 w-8 mr-4">Logo</div>
                    <h1 className="text-2xl font-bold text-white">Prime Dashboard</h1>
                </Link>
            </div>
            <div className="space-y-1">
                {dashboardRoutes.map((route) => {
                    console.log(route);
                    return (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={`text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition ${
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                            }`}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={`h-5 w-5 mr-3 ${route.color}`} />
                                {route.label}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default SideBar;
