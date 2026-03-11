import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export function WeekPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold tracking-tight">Week</h2>
                <p className="text-sm text-muted-foreground">
                    Plan your week at a glance.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {days.map((day) => (
                    <Card key={day}>
                        <CardHeader>
                            <CardTitle>{day}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">No plans yet.</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}