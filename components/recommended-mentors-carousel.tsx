"use client"

import { useState } from "react"
import { Calendar, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RecommendedMentorsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const mentors = [
    { name: "Sarah Miller", title: "Product Manager", rating: 4.9, price: "$80/hr" },
    { name: "John Wilson", title: "Tech Lead", rating: 4.8, price: "$100/hr" },
    { name: "Emily Chen", title: "Marketing Director", rating: 4.7, price: "$75/hr" },
  ]

  const nextMentor = () => {
    setCurrentIndex((prev) => (prev + 1) % mentors.length)
  }

  const prevMentor = () => {
    setCurrentIndex((prev) => (prev - 1 + mentors.length) % mentors.length)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Recommended Mentors
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={prevMentor}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={nextMentor}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder.svg?height=48&width=48" />
            <AvatarFallback>
              {mentors[currentIndex].name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h4 className="font-semibold">{mentors[currentIndex].name}</h4>
            <p className="text-sm text-muted-foreground">{mentors[currentIndex].title}</p>
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-sm">{mentors[currentIndex].rating}</span>
              </div>
              <span className="text-sm font-medium">{mentors[currentIndex].price}</span>
            </div>
          </div>
        </div>
        <Button className="w-full mt-4">
          <Calendar className="h-4 w-4 mr-2" />
          Book Session
        </Button>
      </CardContent>
    </Card>
  )
}
