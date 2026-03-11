import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export function LoginPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background p-6">

            {/* Back button */}
            <Link
                to="/"
                className="mb-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to dashboard
            </Link>

            <div className="flex flex-1 items-center justify-center">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>
                            Sign in to your LifeOS account.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input type="email" placeholder="you@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Password</label>
                                <Input type="password" placeholder="••••••••" />
                            </div>

                            <Button className="w-full" type="submit">
                                Login
                            </Button>
                        </form>

                        <p className="mt-4 text-center text-sm text-muted-foreground">
                            Don’t have an account?{" "}
                            <Link
                                to="/register"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Register
                            </Link>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}