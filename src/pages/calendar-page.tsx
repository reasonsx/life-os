import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type CalendarEvent = {
    title: string
    date?: string
    start?: string
    end?: string
    extendedProps?: {
        category?: "health" | "study" | "work" | "personal"
    }
}

const events: CalendarEvent[] = [
    {
        title: "Gym",
        date: "2026-03-12",
        extendedProps: { category: "health" },
    },
    {
        title: "Study UX",
        date: "2026-03-14",
        extendedProps: { category: "study" },
    },
    {
        title: "Meeting",
        date: "2026-03-18",
        extendedProps: { category: "work" },
    },
]

function getCategoryClass(category?: string) {
    switch (category) {
        case "health":
            return "bg-green-500/15 text-green-700 dark:text-green-300 border-green-500/20"
        case "study":
            return "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/20"
        case "work":
            return "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/20"
        default:
            return "bg-primary/15 text-primary border-primary/20"
    }
}

export function CalendarPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold tracking-tight">Calendar</h2>
                <p className="text-sm text-muted-foreground">
                    Plan your month, week, and day in one place.
                </p>
            </div>

            <Card className="border-border/60 shadow-sm">
                <CardHeader>
                    <CardTitle>Schedule</CardTitle>
                    <CardDescription>
                        Switch between month, week, and day views.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="lifeos-calendar">
                        <FullCalendar
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                            height="auto"
                            weekends
                            editable={false}
                            selectable
                            dayMaxEvents={2}
                            headerToolbar={{
                                left: "prev,next today",
                                center: "title",
                                right: "dayGridMonth,timeGridWeek,timeGridDay",
                            }}
                            buttonText={{
                                today: "Today",
                                month: "Month",
                                week: "Week",
                                day: "Day",
                            }}
                            events={events}
                            eventContent={(eventInfo) => {
                                const category = eventInfo.event.extendedProps.category

                                return (
                                    <div className="w-full">
                                        <Badge
                                            variant="outline"
                                            className={`w-full justify-start rounded-md px-2 py-1 text-[11px] font-medium ${getCategoryClass(category)}`}
                                        >
                                            {eventInfo.event.title}
                                        </Badge>
                                    </div>
                                )
                            }}
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}