import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export function RegisterPage() {
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
                        <CardTitle>Create account</CardTitle>
                        <CardDescription>
                            Start organizing your life with LifeOS.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <Input placeholder="Name" />
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />

                        <Button className="w-full">
                            Register
                        </Button>

                        <p className="text-center text-sm text-muted-foreground">
                            Already have an account?{" "}
                            <Link to="/login" className="underline">
                                Login
                            </Link>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}