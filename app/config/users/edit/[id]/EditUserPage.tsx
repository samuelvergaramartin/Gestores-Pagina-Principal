"use client"

import { useState, useEffect} from "react";
import { type User, type SideBarItem } from '@/app/types';
import MainLayout from "@/app/components/layout/MainLayout";
import Navbar from "@/app/components/ui/NavBar";
import SideBar from "@/app/components/ui/SideBar";
import UserSection from "@/app/config/users/edit/[id]/sections/UserSection";

export default function EditUserPage({ id } : Props) {
    const [user, setUser] = useState<User | null>(null);
    const [activeSection, setActiveSection] = useState<string>("usuario");
    const sidebarItems : SideBarItem[] = [
        {
            id: "usuario",
            label: "Usuario"
        },
        {
            id: "roles",
            label: "Roles"
        },
        {
            id: "permisos",
            label: "Permisos"
        },
        {
            id: "departamentos",
            label: "Departamentos"
        }
    ];

    useEffect(()=> {
        setUser(
            (JSON.parse(sessionStorage.getItem("users")!) as User[])
            .find((u) => u.id === Number(id))!
        )
    }, []);

    return (
        <MainLayout
            title="Editar usuario"
            description="Edite los datos del usuario"
            navbar={
                <Navbar 
                    returnLink="/config/users"
                    description="Edición de usuario"
                />
            }
        >
            <div className={"flex mx-3 ms-60"}>
                <SideBar 
                    sidebarOpen={true}
                    setSidebarOpen={()=>{}}
                    sidebarItems={sidebarItems}
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
                <div className="flex w-full justify-center">
                    {activeSection === "usuario" && (
                        <UserSection user={user} />
                    )}
                </div>
            </div>
        </MainLayout>
    )
}

type Props = {
    id: string
}