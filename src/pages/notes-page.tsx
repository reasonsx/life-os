import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export function NotesPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold tracking-tight">Notes</h2>
                <p className="text-sm text-muted-foreground">
                    Keep quick notes and ideas in one place.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Quick Note</CardTitle>
                </CardHeader>
                <CardContent>
                    <Textarea placeholder="Write something..." />
                </CardContent>
            </Card>
        </div>
    )
}