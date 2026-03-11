import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TodayTasks } from "@/components/dashboard/today-tasks"

export function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold tracking-tight">Dashboard</h2>
                <p className="text-sm text-muted-foreground">
                    Your overview for today and this week.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <TodayTasks />

                <Card>
                    <CardHeader>
                        <CardTitle>This Week</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">2 important goals this week.</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Quick Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">Capture ideas fast.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}