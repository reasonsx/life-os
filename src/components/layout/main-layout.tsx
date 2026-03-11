import { Outlet } from "react-router-dom"
import { AppShell } from "@/components/layout/app-shell"
import { Sidebar } from "@/components/layout/sidebar"

export function MainLayout() {
    return (
        <AppShell sidebar={<Sidebar />}>
            <Outlet />
        </AppShell>
    )
}