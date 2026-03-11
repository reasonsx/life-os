import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {TodayTasks} from "@/components/dashboard/today-tasks.tsx";

export function DashboardPage() {
    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <Card>
                <CardHeader>
                    <CardTitle>Today</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">3 tasks planned.</p>
                </CardContent>
            </Card>

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

            <TodayTasks />
        </div>
    )
}