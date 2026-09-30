"use client"

import { JSX, ReactNode } from "react"

export default function MainLayout({children, title, description, navbar} : Props) {
    return (
        <div className="min-h-screen bg-gray-800 text-white">
            {navbar && (
                navbar
            )}
            <main className="flex-1 p-6 md:p-8">
                <div className="space-y-6">
                    {title && (
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold mb-2">
                                <span className="bg-gradient-to-r from-red-400 via-red-300 to-orange-400 bg-clip-text text-transparent">
                                    {title}
                                </span>
                            </h2>
                            {description && (
                                <p className="text-gray-300 text-lg">{description}</p>
                            )}
                        </div>
                    )}
                    {children}
                </div>
            </main>
        </div>
    )
}

type Props = {
    children: ReactNode,
    title?: string,
    description?: string,
    navbar?: JSX.Element
}