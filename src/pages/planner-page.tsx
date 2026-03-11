import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PlannerPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold tracking-tight">Planner</h2>
                <p className="text-sm text-muted-foreground">
                    Organize routines, goals, and bigger plans.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Planning Board</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Your planning tools will go here.</p>
                </CardContent>
            </Card>
        </div>
    )
}