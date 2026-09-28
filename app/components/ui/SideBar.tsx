"use client"

import { SetStateAction } from "react"
import { type SideBarItem } from "@/app/types"
import { Badge } from "@/app/components/ui/Badge"
import { useRouter } from 'next/navigation';

export default function SideBar({
    sidebarOpen,
    setSidebarOpen,
    sidebarItems,
    activeSection,
    setActiveSection,
    sideBarRight
} : Props) {
    const { push } = useRouter();
    return (
        <div
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 fixed md:static inset-y-0 ${sideBarRight ? 'right-0' : 'left-0'} z-50 w-64 bg-gray-800 ${sideBarRight ? 'border-l' : 'border-r'} border-gray-600 transition-transform duration-300 ease-in-out`}
        >
          <div className="p-6 space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if(item.href) {
                    push(item.href);
                  }
                  else {
                    setSidebarOpen(false)
                    if(activeSection && setActiveSection) setActiveSection(item.id);
                  }
                }}
                className={`cursor-pointer w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? item.primary
                      ? "bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 text-red-300 shadow-lg shadow-red-500/10"
                      : "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 shadow-lg shadow-blue-500/10"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`}
              >
                <div className={activeSection === item.id ? "text-current" : "text-gray-400"}>{item.icon}</div>
                <span className="font-medium">{item.label}</span>
                {item.primary && (
                  <Badge className="ml-auto bg-red-500/20 text-red-400 text-xs border border-red-500/30">
                    Principal
                  </Badge>
                )}
              </button>
            ))}
          </div>
        </div>
    )
}

type Props = {
    sidebarOpen: boolean,
    sidebarItems: SideBarItem[],
    setSidebarOpen: (value: SetStateAction<boolean>) => void,
    activeSection?: string,
    setActiveSection?: (value: SetStateAction<string>) => void,
    sideBarRight?: boolean
}