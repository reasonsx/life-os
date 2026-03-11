type AppShellProps = {
    sidebar: React.ReactNode
    children: React.ReactNode
}

export function AppShell({ sidebar, children }: AppShellProps) {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="grid min-h-screen md:grid-cols-[260px_1fr]">
                <aside className="border-r bg-muted/30">{sidebar}</aside>
                <main className="p-6">{children}</main>
            </div>
        </div>
    )
}