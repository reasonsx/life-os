import { AppShell } from "@/components/layout/app-shell"
import { Sidebar } from "@/components/layout/sidebar"
import { DashboardPage } from "@/pages/dashboard-page"

function App() {
    return (
        <AppShell sidebar={<Sidebar />}>
            <DashboardPage />
        </AppShell>
    )
}

export default App