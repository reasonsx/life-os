import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "@/components/layout/main-layout"
import { DashboardPage } from "@/pages/dashboard-page"
import { TasksPage } from "@/pages/tasks-page"
import { WeekPage } from "@/pages/week-page"
import { NotesPage } from "@/pages/notes-page"
import { PlannerPage } from "@/pages/planner-page"
import { LoginPage } from "@/pages/login-page"
import { RegisterPage } from "@/pages/register-page"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route element={<MainLayout />}>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/tasks" element={<TasksPage />} />
                    <Route path="/week" element={<WeekPage />} />
                    <Route path="/notes" element={<NotesPage />} />
                    <Route path="/planner" element={<PlannerPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App