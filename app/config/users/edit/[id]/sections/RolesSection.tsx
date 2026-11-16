"use client"

import { Button } from "@/app/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/Card"
import { Input } from "@/app/components/ui/Input"
import { Label } from "@/app/components/ui/Label"
import { Switch } from "@/app/components/ui/Switch"
import { ListCheck, Save } from "lucide-react"
import { type User, type UserRole, USER_ROLES, USER_ROLES_NAMES } from '@/app/types';

export default function RolesSection({ user } : Params) {
	let roles : UserRole[] = [];
	Object.values(USER_ROLES).forEach((p)=> {
		if (typeof p != "string") {
			roles.push({
				name: p as USER_ROLES,
				displayName: "",
				hasRole: false
			});
		}
	});
	const names = Object.values(USER_ROLES_NAMES).filter((v) => typeof v == "string");
	names.forEach((p, i) => roles[i].displayName = p);
	return (
		<Card className="bg-gray-700/50 border-gray-600/50 backdrop-blur-sm shadow-xl mr-115 w-3xl">
			<CardHeader>
				<CardTitle className="flex items-center text-red-300">
					<ListCheck className="h-6 w-6 mr-3 text-red-400" />
					Roles
				</CardTitle>
				<CardDescription className="text-gray-300">
					Edite los roles del usuario
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="grid grid-cols-2 gap-4">
					{roles.map((role, key) => (
						<div key={key} className="flex items-center justify-between p-4 bg-gray-600/30 rounded-lg border border-gray-500/30">
							<Label htmlFor={`has${role.name}Role`} className="text-gray-200 font-medium">
								{role.displayName}
							</Label>
							<Switch id={`has${role.name}Role`} className="data-[state=checked]:bg-green-500" defaultChecked={role.hasRole}/>
						</div>
					))}
				</div>
				<Button
					className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 shadow-lg shadow-blue-500/25 transform hover:scale-[1.02] transition-all"
				>
					<Save className="h-5 w-5 mr-2" />
					Guardar cambios
				</Button>
			</CardContent>
		</Card>
	)
}

type Params = {
    user: User | null
}