"use client"

import { Button } from "@/app/components/ui/Button";
import { Settings } from "lucide-react";
import SideBar from "@/app/components/ui/SideBar";
import { useState } from "react";
import { type SideBarItem } from "@/app/types"

export default function MainPage() {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const sidebarItems : SideBarItem[] = [
        {
            id: "config",
            label: "Configuración",
            href: "/config"
        },
        {
            id: "entidad",
            label: "Entidad",
            href: "/entity"
        },
        {
            id: "salir",
            label: "Salir"
        }
    ]
    return (
        <div className="w-full">
            <div className="flex justify-between text-6xl font-bold">
                <h1>Dashboard</h1>
                <Button
                    onClick={()=>{
                        setSidebarOpen(!sidebarOpen);
                    }}
                >
                    <Settings />
                </Button>
            </div>

            <div className="flex">
                {/**Sidebar */}
                {sidebarOpen && (
                    <SideBar 
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                        sidebarItems={sidebarItems}
                    />
                )}
            </div>
        </div>
    )
}