"use client"

import { useState, useEffect } from "react"
import { Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function NextCallCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 34,
    seconds: 15,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <CardContent className="p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Next Session</h3>
          <div className="flex justify-center gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</div>
              <div className="text-sm opacity-80">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
              <div className="text-sm opacity-80">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
              <div className="text-sm opacity-80">Seconds</div>
            </div>
          </div>
          <Button variant="secondary" className="w-full">
            <Video className="h-4 w-4 mr-2" />
            Join Call
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
