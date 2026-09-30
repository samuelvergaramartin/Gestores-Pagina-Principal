import EditUserPage from "@/app/config/users/edit/[id]/EditUserPage";

export default async function EditUserPageLoader({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <EditUserPage id={id}/>
    )
}