import { CalendarDays, CheckSquare, FileText, Home, NotebookPen } from "lucide-react"

const items = [
    { label: "Dashboard", icon: Home },
    { label: "Tasks", icon: CheckSquare },
    { label: "Week", icon: CalendarDays },
    { label: "Notes", icon: FileText },
    { label: "Planner", icon: NotebookPen },
]

export function Sidebar() {
    return (
        <div className="flex h-full flex-col p-4">
            <div className="px-2 py-3">
                <h1 className="text-xl font-semibold tracking-tight">LifeOS</h1>
                <p className="text-sm text-muted-foreground">Organize your week</p>
            </div>

            <nav className="mt-6 space-y-1">
                {items.map((item) => {
                    const Icon = item.icon

                    return (
                        <button
                            key={item.label}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition hover:bg-accent hover:text-accent-foreground"
                        >
                            <Icon className="h-4 w-4" />
                            <span>{item.label}</span>
                        </button>
                    )
                })}
            </nav>
        </div>
    )
}