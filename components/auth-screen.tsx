"use client"

import type React from "react"

import { useState } from "react"
import { Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AuthScreenProps {
  onLogin: (value: boolean) => void
  showSignup: boolean
  setShowSignup: (value: boolean) => void
  setUserRole: (role: "mentee" | "mentor" | "admin") => void
}

export function AuthScreen({ onLogin, showSignup, setShowSignup, setUserRole }: AuthScreenProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedRole, setSelectedRole] = useState<"mentee" | "mentor">("mentee")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simple validation
    if (!email || !password) {
      alert("Please fill in all fields")
      setIsLoading(false)
      return
    }

    // Demo credentials for testing
    if (
      (email === "demo@mentee.com" && password === "password") ||
      (email === "demo@mentor.com" && password === "password") ||
      (email === "admin@youngminds.com" && password === "admin123")
    ) {
      setTimeout(() => {
        if (email.includes("admin")) {
          setUserRole("admin")
        } else {
          setUserRole(email.includes("mentor") ? "mentor" : selectedRole)
        }
        onLogin(true)
        setIsLoading(false)
      }, 1000)
    } else {
      alert(
        "Invalid credentials. Try: demo@mentee.com / password, demo@mentor.com / password, or admin@youngminds.com / admin123",
      )
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Award className="h-6 w-6" />
            </div>
          </div>
          <CardTitle className="text-2xl">Welcome to YoungMinds</CardTitle>
          <CardDescription>{showSignup ? "Create your account" : "Sign in to your account"}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {showSignup && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>I want to join as:</Label>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant={selectedRole === "mentee" ? "default" : "outline"}
                    onClick={() => setSelectedRole("mentee")}
                    className="flex-1"
                  >
                    Mentee
                  </Button>
                  <Button
                    type="button"
                    variant={selectedRole === "mentor" ? "default" : "outline"}
                    onClick={() => setSelectedRole("mentor")}
                    className="flex-1"
                  >
                    Mentor
                  </Button>
                </div>
              </div>
            </>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : showSignup ? `Sign Up as ${selectedRole}` : "Login to Dashboard"}
            </Button>
          </form>
          <div className="text-center">
            <Button variant="link" onClick={() => setShowSignup(!showSignup)}>
              {showSignup ? "Already have an account? Login" : "Don't have an account? Sign up"}
            </Button>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>Demo credentials:</p>
            <p>Mentee: demo@mentee.com / password</p>
            <p>Mentor: demo@mentor.com / password</p>
            <p>Admin: admin@youngminds.com / admin123</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
