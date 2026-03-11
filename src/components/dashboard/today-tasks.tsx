import {useState} from "react"
import {Checkbox} from "@/components/ui/checkbox"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import type {Task} from "@/types/task.ts";
import { Badge } from "@/components/ui/badge"

const initialTasks: Task[] = [
    {id: "1", title: "Go to gym", done: false, priority: "high"},
    {id: "2", title: "Study UX", done: false, priority: "medium"},
    {id: "3", title: "Buy groceries", done: true, priority: "low"},
]

export function TodayTasks() {
    const [tasks, setTasks] = useState(initialTasks)

    function toggleTask(id: string) {
        setTasks((prev) =>
            prev.map((t) =>
                t.id === id ? {...t, done: !t.done} : t
            )
        )
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Today</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
                {tasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Checkbox
                                checked={task.done}
                                onCheckedChange={() => toggleTask(task.id)}
                            />

                            <span
                                className={
                                    task.done
                                        ? "line-through text-muted-foreground"
                                        : ""
                                }
                            >
      {task.title}
    </span>
                        </div>

                        <Badge variant="secondary">
                            {task.priority}
                        </Badge>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}