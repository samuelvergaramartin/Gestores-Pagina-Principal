"use client"

import { useState, useEffect} from "react";
import { type User } from '@/app/types';
import MainLayout from "@/app/components/layout/MainLayout";
import Navbar from "@/app/components/ui/NavBar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/Card";
import { Switch } from "@/app/components/ui/Switch";
import { Button } from "@/app/components/ui/Button";
import { ListCheck, Save } from 'lucide-react'
import { Label } from "@/app/components/ui/Label";
import { Input } from "@/app/components/ui/Input";

export default function EditUserPage({ id } : Props) {
    const [user, setUser] = useState<User | null>(null);

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
            <Card className="bg-gray-700/50 border-gray-600/50 backdrop-blur-sm shadow-xl">
                <CardHeader>
                    <CardTitle className="flex items-center text-red-300">
                        <ListCheck className="h-6 w-6 mr-3 text-red-400" />
                        Datos del usuario
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                        Edite los datos del usuario
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="email" className="text-gray-200 font-medium">
                                Correo electrónico
                            </Label>
                            <Input
                                id="email"
                                placeholder="Escriba el nombre de usuario"
                                defaultValue={user ? user.email : ""}
                                className="bg-gray-600/50 border-gray-500/50 text-white placeholder-gray-400 focus:border-red-400/50 focus:ring-red-400/20"
                            />
                        </div>
                        <div>
                           <Label htmlFor="fullname" className="text-gray-200 font-medium">
                                Nombre completo
                            </Label>
                            <Input
                                id="fullname"
                                placeholder="Escriba su nombre completo"
                                defaultValue={user ? user.fullname : ""}
                                disabled={true}
                                className="bg-gray-600/50 border-gray-500/50 text-white placeholder-gray-400 focus:border-red-400/50 focus:ring-red-400/20"
                            /> 
                        </div>
                        <div>
                            <Label htmlFor="password" className="text-gray-200 font-medium">
                                Contraseña
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Escriba su nombre completo"
                                defaultValue={user ? user.password : ""}
                                disabled={true}
                                className="bg-gray-600/50 border-gray-500/50 text-white placeholder-gray-400 focus:border-red-400/50 focus:ring-red-400/20"
                            /> 
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-600/30 rounded-lg border border-gray-500/30">
                            <Label htmlFor="isAdminIT" className="text-gray-200 font-medium">
                                Administrador IT
                            </Label>
                            {user && (
                                <Switch id="isAdminIT" className="data-[state=checked]:bg-green-500" defaultChecked={user.isAdminIT}/>
                            )}
                        </div>
                    </div>
                    <Button
                        className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 shadow-lg shadow-green-500/25 transform hover:scale-[1.02] transition-all"
                    >
                        <Save className="h-5 w-5 mr-2" />
                        Guardar cambios
                    </Button>
                </CardContent>
            </Card>
        </MainLayout>
    )
}

type Props = {
    id: string
}