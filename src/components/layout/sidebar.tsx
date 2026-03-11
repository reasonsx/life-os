import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CalendarDays, CheckSquare, FileText, Home, LogIn, NotebookPen, UserPlus } from "lucide-react"
import { NavLink } from "react-router-dom"

const items = [
    { label: "Dashboard", icon: Home, to: "/" },
    { label: "Tasks", icon: CheckSquare, to: "/tasks" },
    { label: "Week", icon: CalendarDays, to: "/week" },
    { label: "Notes", icon: FileText, to: "/notes" },
    { label: "Planner", icon: NotebookPen, to: "/planner" },
]

const isLoggedIn = false

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
                        <NavLink
                            key={item.label}
                            to={item.to}
                            end={item.to === "/"}
                            className={({ isActive }) =>
                                `flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors cursor-pointer ${
                                    isActive
                                        ? "bg-accent text-accent-foreground"
                                        : "hover:bg-accent hover:text-accent-foreground"
                                }`
                            }
                        >
                            <Icon className="h-4 w-4" />
                            <span>{item.label}</span>
                        </NavLink>
                    )
                })}
            </nav>

            <div className="mt-auto border-t pt-4">
                {isLoggedIn ? (
                    <div className="flex items-center gap-3 rounded-lg px-2 py-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                            <AvatarFallback>KK</AvatarFallback>
                        </Avatar>

                        <div className="min-w-0">
                            <p className="truncate text-sm font-medium">Kamil Kregiel</p>
                            <p className="truncate text-xs text-muted-foreground">Personal account</p>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-2">
                        <NavLink to="/login" className="block">
                            <Button variant="outline" className="w-full justify-start">
                                <LogIn className="mr-2 h-4 w-4" />
                                Login
                            </Button>
                        </NavLink>

                        <NavLink to="/register" className="block">
                            <Button className="w-full justify-start">
                                <UserPlus className="mr-2 h-4 w-4" />
                                Register
                            </Button>
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    )
}