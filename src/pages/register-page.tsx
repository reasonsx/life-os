import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return (
        <div className="min-h-screen bg-background">
            <div className="p-6">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to dashboard
                </Link>
            </div>

            <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 pb-6">
                <div className="w-full max-w-md space-y-6">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-semibold tracking-tight">LifeOS</h1>
                        <p className="text-sm text-muted-foreground">
                            Create your account and start planning better.
                        </p>
                    </div>

                    <Card className="border-border/60 shadow-sm">
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-2xl">Create account</CardTitle>
                            <CardDescription>
                                Enter your details below to get started.
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form className="space-y-5">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Kamil" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="register-email">Email</Label>
                                    <Input id="register-email" type="email" placeholder="you@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="register-password">Password</Label>

                                    <div className="relative">
                                        <Input
                                            id="register-password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Create a password"
                                            className="pr-10"
                                        />

                                        <button
                                            type="button"
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                            onClick={() => setShowPassword((prev) => !prev)}
                                            className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-4 w-4" />
                                            ) : (
                                                <Eye className="h-4 w-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="confirm-password">Confirm password</Label>

                                    <div className="relative">
                                        <Input
                                            id="confirm-password"
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Repeat your password"
                                            className="pr-10"
                                        />

                                        <button
                                            type="button"
                                            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                                            className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
                                        >
                                            {showConfirmPassword ? (
                                                <EyeOff className="h-4 w-4" />
                                            ) : (
                                                <Eye className="h-4 w-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <Button className="w-full" type="submit">
                                    Create account
                                </Button>
                            </form>

                            <p className="mt-6 text-center text-sm text-muted-foreground">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="font-medium underline underline-offset-4 hover:text-foreground"
                                >
                                    Login
                                </Link>
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}