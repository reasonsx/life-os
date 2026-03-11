export type Task = {
    id: string
    title: string
    done: boolean
    priority: "low" | "medium" | "high"
    dueDate?: string
    category?: string
}