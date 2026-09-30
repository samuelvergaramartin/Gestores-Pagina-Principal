"use client"

import Navbar from "@/app/components/ui/NavBar"
import MainLayout from "@/app/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/Card";
import { ListCheck, Plus } from 'lucide-react'
import { Label } from "@/app/components/ui/Label";
import { Input } from "@/app/components/ui/Input";
import { Switch } from "@/app/components/ui/Switch";
import { Button } from "@/app/components/ui/Button";

export default function CreateUserPage() {
    return (
        <MainLayout 
            navbar={
                <Navbar 
                    returnLink="/config/users"
                    description="Creación de usuario"
                />
            }
            title="Creación de usuario"
            description="Formulario para crear un usuario"
        >
            <Card className="bg-gray-700/50 border-gray-600/50 backdrop-blur-sm shadow-xl">
                <CardHeader>
                    <CardTitle className="flex items-center text-red-300">
                        <ListCheck className="h-6 w-6 mr-3 text-red-400" />
                        Datos del usuario
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                        Introduzca los datos del usuario
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
                                className="bg-gray-600/50 border-gray-500/50 text-white placeholder-gray-400 focus:border-red-400/50 focus:ring-red-400/20"
                            /> 
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-600/30 rounded-lg border border-gray-500/30">
                            <Label htmlFor="isAdminIT" className="text-gray-200 font-medium">
                                Administrador IT
                            </Label>
                            <Switch id="isAdminIT" className="data-[state=checked]:bg-green-500" />
                        </div>
                    </div>
                    <Button
                        className="w-full cursor-pointer bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 shadow-lg shadow-green-500/25 transform hover:scale-[1.02] transition-all"
                    >
                        <Plus className="h-5 w-5 mr-2" />
                        Crear usuario
                    </Button>
                </CardContent>
            </Card>
        </MainLayout>
    )
}