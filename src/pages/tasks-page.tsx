import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TasksPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold tracking-tight">Tasks</h2>
                <p className="text-sm text-muted-foreground">
                    Manage your daily and upcoming tasks.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Inbox</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Your tasks will appear here.</p>
                </CardContent>
            </Card>
        </div>
    )
}