"use client"

import MainLayout from "@/app/components/layout/MainLayout"
import Navbar from "@/app/components/ui/NavBar"
import { Card, CardContent } from "@/app/components/ui/Card"
import { Button } from "@/app/components/ui/Button"
import { Edit, Trash, Plus } from 'lucide-react';
import Link from "next/link"

export default function UsersPage() {
    const users = [
        "Pepe",
        "Antonio",
        "Felipe",
        "Alejandro",
        "José Manuel",
        "Alberto",
        "Francisco"
    ]
    return (
        <MainLayout
            title="Listado de usuarios"
            navbar={
                <Navbar 
                    returnLink={"/config"}
                    description={"Usuarios"}
                />
            }
        >
            <div className="flex justify-center">
                <Card className="bg-gray-700/50 border-gray-600/50 backdrop-blur-sm shadow-xl w-3xl">
                    <CardContent className="space-y-6">
                        <div className="space-y-3 mt-6">
                            <div className="w-full">
                                <Link href={"/config/users/create"}>
                                    <Button className="w-full cursor-pointer bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 shadow-lg shadow-green-500/25 transform hover:scale-[1.02] transition-all">
                                        <Plus className="h-4 w-4 mr-2"/>
                                        Crear usuario
                                    </Button>
                                </Link>
                            </div>
                            {users.map((user, index) => (
                                <div
                                key={index}
                                className="flex items-center justify-between p-4 bg-gray-600/30 rounded-lg border border-gray-500/30 hover:bg-gray-400/30"
                                >
                                    <div className="flex items-center justify-between space-x-3 w-full">
                                        <span className="text-gray-200 font-medium">{user}</span>
                                        <div className="flex gap-3">
                                            <Button className="w-full cursor-pointer bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-3 shadow-lg shadow-yellow-500/25 transform hover:scale-[1.02] transition-all">
                                                <Edit className="h-4 w-4 mr-2"/>
                                            </Button>
                                            <Button className="w-full cursor-pointer bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 shadow-lg shadow-red-500/25 transform hover:scale-[1.02] transition-all">
                                                <Trash className="h-4 w-4 mr-2"/>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </MainLayout>
    )
}