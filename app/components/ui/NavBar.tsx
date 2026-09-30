"use client"

import Link from "next/link";
import { Button } from "@/app/components/ui/Button";
import { ArrowLeft, Bot, DoorOpen, X, Menu } from "lucide-react";
import type { SetStateAction } from "react";

export default function Navbar({
    returnLink,
    sidebarOpen,
    setSidebarOpen,
    description,
} : Props) {
    return (
    <header className="border-b border-gray-600/50 bg-gray-800/80 backdrop-blur-xl shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                {returnLink && (
                    <Link href={returnLink}>
                        <Button variant="ghost" size="sm" className="cursor-pointer text-gray-300 hover:text-white hover:bg-gray-700/50">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Volver
                        </Button>
                    </Link>
                )}
                {setSidebarOpen && (
                    <Button
                        variant="ghost"
                        size="sm"
                        className="md:hidden text-gray-300 hover:text-white"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                )}
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <Bot className="h-8 w-8 text-red-400" />
                        <div className="absolute inset-0 bg-red-400/20 rounded-full blur-lg animate-pulse"></div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 via-red-300 to-orange-400 bg-clip-text text-transparent">
                            Gestores
                        </h1>
                        <p className="text-xs text-gray-400">{description}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end space-x-4">
                <Link href={"/"}>
                    <Button
                        onClick={() => {}}
                        className="cursor-pointer mt-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium shadow-lg shadow-red-500/25"
                        >
                        <DoorOpen />
                        Cerrar sesión
                    </Button>
                </Link>
            </div>
        </div>
      </header>
    )
}

type Props = {
    returnLink?: string,
    sidebarOpen?: boolean,
    setSidebarOpen?: (value: SetStateAction<boolean>) => void,
    description: string,
}