"use client"

import SideBar from "@/app/components/ui/SideBar";
import { type SideBarItem } from "@/app/types";
import { useState } from "react";
import { Button } from "@/app/components/ui/Button";
import { Settings } from "lucide-react";

export default function ConfigPage() {
    const [sidebarRightOpen, setSidebarRightOpen] = useState<boolean>(true);
    const sidebarLeftItems : SideBarItem[] = [
        {
            id: "usuarios",
            label: "Usuarios",
        },
        {
            id: "roles",
            label: "Roles"
        },
        {
            id: "gestores",
            label: "Gestores"
        },
        {
            id: "departamentos",
            label: "Departamentos"
        },
        {
            id: "delegaciones",
            label: "Delegaciones"
        }
    ];
    const sidebarRightItems : SideBarItem[] = [
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
        },
    ]
    return (
        <div className="min-h-screen bg-gray-600 text-white">
            <div className="w-full flex justify-end">
                <Button
                    onClick={()=>{
                        setSidebarRightOpen(!sidebarRightOpen);
                    }}
                >
                    <Settings />
                </Button>
            </div>
            <div className={sidebarRightOpen ? "flex justify-between mx-3" : ""}>
                {/** Sidebar de la izquierda */}
                <SideBar 
                    sidebarOpen={true}
                    setSidebarOpen={()=>{}}
                    sidebarItems={sidebarLeftItems}
                />
                {/** Sidebar de la derecha plegable*/}
                {sidebarRightOpen && (
                    <SideBar 
                        sidebarOpen={sidebarRightOpen}
                        setSidebarOpen={setSidebarRightOpen}
                        sidebarItems={sidebarRightItems}
                        sideBarRight={true}
                    />
                )}
            </div>
        </div>
    )
}