"use client"

import { useState } from "react"
import {
  Calendar,
  MessageCircle,
  User,
  Star,
  BookOpen,
  Settings,
  Bell,
  Search,
  Play,
  Clock,
  Award,
  TrendingUp,
  Upload,
  Download,
  FileText,
  Video,
  MessageSquare,
  Target,
  CheckCircle,
  XCircle,
  Edit,
  Send,
  CalendarIcon,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MentorDashboard } from "./mentor-dashboard"
import { AdminDashboard } from "./admin-dashboard"
import { AuthScreen } from "./auth-screen"
import { NextCallCountdown } from "./next-call-countdown"
import { CurrentMentorCard } from "./current-mentor-card"
import { RecommendedMentorsCarousel } from "./recommended-mentors-carousel"

const menuItems = [
  { title: "Dashboard", icon: TrendingUp, id: "dashboard" },
  { title: "Profile Setup", icon: User, id: "profile" },
  { title: "AI Intake Chat", icon: MessageCircle, id: "ai-chat" },
  { title: "Find Mentors", icon: User, id: "mentors" },
  { title: "My Sessions", icon: Calendar, id: "sessions" },
  { title: "Mindflix Content", icon: BookOpen, id: "content" },
  { title: "Ratings & Reviews", icon: Star, id: "ratings" },
  { title: "Settings", icon: Settings, id: "settings" },
  { title: "Messages", icon: MessageCircle, id: "messages" },
]

export function MenteeDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [userRole, setUserRole] = useState<"mentee" | "mentor" | "admin">("mentee")

  if (!isLoggedIn) {
    return (
      <AuthScreen
        onLogin={setIsLoggedIn}
        showSignup={showSignup}
        setShowSignup={setShowSignup}
        setUserRole={setUserRole}
      />
    )
  }

  if (userRole === "mentor") {
    return <MentorDashboard />
  }

  if (userRole === "admin") {
    return <AdminDashboard />
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Award className="h-4 w-4" />
              </div>
              <span className="font-semibold">YoungMinds</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton onClick={() => setActiveSection(item.id)} isActive={activeSection === item.id}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="p-2">
              <div className="flex items-center gap-2 rounded-lg bg-muted p-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-sm">
                  <p className="font-medium">John Doe</p>
                  <p className="text-muted-foreground">Mentee</p>
                </div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1">
          <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center gap-4 px-6">
              <SidebarTrigger />
              <div className="flex-1" />
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          </header>

          <div className="p-6">
            {activeSection === "dashboard" && <DashboardOverview />}
            {activeSection === "profile" && <ProfileSetup />}
            {activeSection === "ai-chat" && <AIIntakeChat />}
            {activeSection === "mentors" && <MentorRecommendations />}
            {activeSection === "sessions" && <SessionBooking />}
            {activeSection === "content" && <MindflixContent />}
            {activeSection === "ratings" && <RatingsReviews />}
            {activeSection === "settings" && <SettingsPanel />}
            {activeSection === "messages" && <MessagesPanel />}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

function MessagesPanel() {
  const [selectedChat, setSelectedChat] = useState<string | null>("sarah-miller")
  const [newMessage, setNewMessage] = useState("")

  const conversations = [
    {
      id: "sarah-miller",
      name: "Sarah Miller",
      role: "Mentor",
      lastMessage: "Great progress on your goals!",
      timestamp: "2 hours ago",
      unread: 2,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "john-wilson",
      name: "John Wilson",
      role: "Mentor",
      lastMessage: "Let's schedule our next session",
      timestamp: "1 day ago",
      unread: 0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "sarah-miller",
      content: "Hi John! How are you feeling about your career transition goals?",
      timestamp: "10:30 AM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "me",
      content:
        "Hi Sarah! I'm feeling more confident after our last session. I've been working on the action items you suggested.",
      timestamp: "10:35 AM",
      isOwn: true,
    },
    {
      id: 3,
      sender: "sarah-miller",
      content:
        "That's wonderful to hear! I'd love to see your progress. Can you share what specific steps you've taken?",
      timestamp: "10:40 AM",
      isOwn: false,
    },
    {
      id: 4,
      sender: "me",
      content:
        "Sure! I've updated my LinkedIn profile, reached out to 3 people in my network, and started the online course you recommended.",
      timestamp: "10:45 AM",
      isOwn: true,
    },
    {
      id: 5,
      sender: "sarah-miller",
      content: "Great progress on your goals! Keep up the excellent work. Let's discuss this more in our next session.",
      timestamp: "2 hours ago",
      isOwn: false,
    },
  ]

  const handleSendMessage = () => {
    if (!newMessage.trim()) return
    // Handle sending message logic here
    setNewMessage("")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-muted-foreground">Chat with your mentors and stay connected.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 h-[600px]">
        {/* Conversations List */}
        <Card>
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`flex items-center space-x-3 p-3 cursor-pointer hover:bg-muted ${
                    selectedChat === conversation.id ? "bg-muted" : ""
                  }`}
                  onClick={() => setSelectedChat(conversation.id)}
                >
                  <Avatar>
                    <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {conversation.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium truncate">{conversation.name}</p>
                      {conversation.unread > 0 && (
                        <Badge variant="default" className="ml-2">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                    <p className="text-xs text-muted-foreground">{conversation.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="md:col-span-2">
          {selectedChat ? (
            <>
              <CardHeader className="border-b">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Sarah Miller</CardTitle>
                    <p className="text-sm text-muted-foreground">Mentor • Online</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col h-full p-0">
                {/* Messages */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.isOwn ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"
                          }`}
                        >
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <Button onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="flex items-center justify-center h-full">
              <div className="text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">Select a conversation to start chatting</p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  )
}

function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your mentoring journey overview.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <NextCallCountdown />
        <CurrentMentorCard />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Mentors</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Across different domains</p>
            <Progress value={60} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">This month</p>
            <Progress value={80} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progress Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">+5% from last week</p>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <RecommendedMentorsCarousel />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">Sarah Miller</p>
                <p className="text-sm text-muted-foreground">Career Development</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Tomorrow</p>
                <p className="text-sm text-muted-foreground">2:00 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>JW</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">John Wilson</p>
                <p className="text-sm text-muted-foreground">Technical Skills</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Friday</p>
                <p className="text-sm text-muted-foreground">10:00 AM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Leadership Skills</span>
                <span>75%</span>
              </div>
              <Progress value={75} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Technical Knowledge</span>
                <span>60%</span>
              </div>
              <Progress value={60} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Communication</span>
                <span>90%</span>
              </div>
              <Progress value={90} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ProfileSetup() {
  const goals = [
    { name: "Leadership Development", progress: 75, completed: false },
    { name: "Technical Skills", progress: 60, completed: false },
    { name: "Communication", progress: 100, completed: true },
    { name: "Career Planning", progress: 40, completed: false },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile Setup</h1>
        <p className="text-muted-foreground">Complete your profile to get better mentor recommendations.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Tell us about yourself and your goals.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" placeholder="Tell us about your background and interests..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="goals">Career Goals</Label>
              <Textarea id="goals" placeholder="What do you want to achieve through mentoring?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills">Skills to Develop</Label>
              <Input id="skills" placeholder="e.g., Leadership, Programming, Marketing" />
            </div>
            <Button>Save Profile</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Goal Tracker</CardTitle>
            <CardDescription>Track your progress towards your goals.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {goals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{goal.name}</span>
                    {goal.completed && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Completed
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
              </div>
            ))}
            <Button variant="outline" className="w-full">
              <Target className="h-4 w-4 mr-2" />
              Add New Goal
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function AIIntakeChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm your AI assistant. I'll help you identify the best mentoring path based on your goals and interests. What would you like to achieve through mentoring?",
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      {
        role: "assistant",
        content:
          "That's great! Based on what you've shared, I can see you're interested in career development. Let me ask you a few more questions to better understand your needs...",
      },
    ])
    setInput("")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">AI Intake Chat</h1>
        <p className="text-muted-foreground">Let our AI understand your needs and recommend the perfect mentors.</p>
      </div>

      <Card className="h-[600px] flex flex-col">
        <CardHeader>
          <CardTitle>Chat with AI Assistant</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="flex-1 space-y-4 overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function MentorRecommendations() {
  const mentors = [
    {
      name: "Sarah Miller",
      title: "Senior Product Manager",
      company: "Tech Corp",
      expertise: ["Product Management", "Leadership", "Strategy"],
      rating: 4.9,
      sessions: 150,
      price: "$80/hour",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "John Wilson",
      title: "Software Engineering Director",
      company: "StartupXYZ",
      expertise: ["Software Development", "Team Management", "Architecture"],
      rating: 4.8,
      sessions: 200,
      price: "$100/hour",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emily Chen",
      title: "Marketing Director",
      company: "Growth Inc",
      expertise: ["Digital Marketing", "Brand Strategy", "Analytics"],
      rating: 4.7,
      sessions: 120,
      price: "$75/hour",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Find Mentors</h1>
        <p className="text-muted-foreground">Discover mentors that match your goals and interests.</p>
      </div>

      <div className="flex gap-4">
        <Input placeholder="Search mentors..." className="flex-1" />
        <Button variant="outline">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={mentor.image || "/placeholder.svg"} />
                  <AvatarFallback>
                    {mentor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{mentor.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{mentor.title}</p>
                  <p className="text-sm text-muted-foreground">{mentor.company}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-1">
                {mentor.expertise.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>{mentor.rating}</span>
                  <span className="text-muted-foreground ml-1">({mentor.sessions} sessions)</span>
                </div>
                <span className="font-medium">{mentor.price}</span>
              </div>
              <Button className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                Book Session
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function SessionBooking() {
  const [sessionNotes, setSessionNotes] = useState("")
  const sharedFiles = [
    { name: "Career_Plan_Template.pdf", size: "2.3 MB", type: "pdf" },
    { name: "Resume_Review.docx", size: "1.1 MB", type: "doc" },
    { name: "Interview_Prep_Notes.txt", size: "0.5 MB", type: "txt" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Sessions</h1>
        <p className="text-muted-foreground">Manage your upcoming and past mentoring sessions.</p>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past Sessions</TabsTrigger>
          <TabsTrigger value="book">Book New</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Sarah Miller</p>
                    <p className="text-sm text-muted-foreground">Career Development Session</p>
                    <p className="text-sm text-muted-foreground">Tomorrow, 2:00 PM - 3:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Reschedule
                  </Button>
                  <Button variant="outline" size="sm">
                    <XCircle className="h-4 w-4 mr-1" />
                    Cancel
                  </Button>
                  <Button size="sm">
                    <Video className="h-4 w-4 mr-1" />
                    Join Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Session Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Add notes for your upcoming session..."
                value={sessionNotes}
                onChange={(e) => setSessionNotes(e.target.value)}
                rows={4}
              />
              <Button>Save Notes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shared Files</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {sharedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">{file.size}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full">
                <Upload className="h-4 w-4 mr-2" />
                Upload File
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Past Sessions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>JW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Wilson</p>
                    <p className="text-sm text-muted-foreground">Technical Skills Review</p>
                    <p className="text-sm text-muted-foreground">Last week</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Notes
                  </Button>
                  <Button variant="outline" size="sm">
                    Rate Session
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="book" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Book a New Session</CardTitle>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="book" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Book a New Session</CardTitle>
              <CardDescription>Schedule a session with one of your mentors.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Select Mentor</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a mentor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sarah">Sarah Miller - Career Development</SelectItem>
                    <SelectItem value="john">John Wilson - Technical Skills</SelectItem>
                    <SelectItem value="emily">Emily Chen - Marketing Strategy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Session Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select session type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="60min">1-on-1 Mentoring (60 min)</SelectItem>
                    <SelectItem value="30min">Quick Check-in (30 min)</SelectItem>
                    <SelectItem value="90min">Project Review (90 min)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Preferred Date & Time</Label>
                <Input type="datetime-local" />
              </div>
              <div className="space-y-2">
                <Label>Session Goals</Label>
                <Textarea placeholder="What would you like to focus on in this session?" />
              </div>
              <Button className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                Book Session
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Booking Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <CalendarIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Interactive calendar would be integrated here</p>
                  <Button className="mt-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    View Available Slots
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function MindflixContent() {
  const content = [
    {
      title: "Leadership Fundamentals",
      type: "Course",
      duration: "2h 30m",
      progress: 60,
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      title: "Effective Communication",
      type: "Workshop",
      duration: "1h 45m",
      progress: 100,
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      title: "Career Planning Masterclass",
      type: "Masterclass",
      duration: "3h 15m",
      progress: 25,
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
  ]

  const communityThreads = [
    {
      title: "Best practices for remote work",
      author: "Sarah M.",
      replies: 23,
      lastActivity: "2h ago",
    },
    {
      title: "Career transition tips",
      author: "John D.",
      replies: 15,
      lastActivity: "4h ago",
    },
    {
      title: "Networking strategies",
      author: "Emily C.",
      replies: 31,
      lastActivity: "1d ago",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mindflix Content</h1>
        <p className="text-muted-foreground">Access exclusive learning content and community discussions.</p>
      </div>

      <div className="flex gap-4">
        <Input placeholder="Search content..." className="flex-1" />
        <Button variant="outline">All Categories</Button>
      </div>

      <Tabs defaultValue="content">
        <TabsList>
          <TabsTrigger value="content">Content Feed</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="content">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.map((item, index) => (
              <Card key={index}>
                <div className="relative">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-t-lg">
                    <Button size="icon" variant="secondary">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{item.type}</Badge>
                      <span className="text-sm text-muted-foreground">{item.duration}</span>
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{item.progress}%</span>
                      </div>
                      <Progress value={item.progress} />
                    </div>
                    <Button className="w-full" variant={item.progress === 100 ? "outline" : "default"}>
                      {item.progress === 100 ? "Completed" : item.progress > 0 ? "Continue" : "Start"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="community">
          <Card>
            <CardHeader>
              <CardTitle>Community Threads</CardTitle>
              <CardDescription>Join discussions with other mentees and mentors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {communityThreads.map((thread, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{thread.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      by {thread.author} • {thread.replies} replies • {thread.lastActivity}
                    </p>
                  </div>
                  <Button size="sm">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Join Thread
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <MessageSquare className="h-4 w-4 mr-2" />
                Start New Discussion
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function RatingsReviews() {
  const sessions = [
    {
      mentor: "Sarah Miller",
      date: "Last week",
      topic: "Career Development",
      rating: 0,
      reviewed: false,
    },
    {
      mentor: "John Wilson",
      date: "2 weeks ago",
      topic: "Technical Skills",
      rating: 5,
      reviewed: true,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Ratings & Reviews</h1>
        <p className="text-muted-foreground">Rate your mentoring sessions and provide feedback.</p>
      </div>

      <div className="space-y-4">
        {sessions.map((session, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{session.mentor}</h3>
                  <p className="text-sm text-muted-foreground">
                    {session.topic} • {session.date}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  {session.reviewed ? (
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < session.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">Reviewed</span>
                    </div>
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Rate Session</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Rate Your Session</DialogTitle>
                          <DialogDescription>How was your session with {session.mentor}?</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="flex justify-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Button key={i} variant="ghost" size="icon">
                                <Star className="h-6 w-6" />
                              </Button>
                            ))}
                          </div>
                          <div className="space-y-2">
                            <Label>Review (Optional)</Label>
                            <Textarea placeholder="Share your experience..." />
                          </div>
                          <Button className="w-full">Submit Review</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function SettingsPanel() {
  const plans = [
    { name: "Basic", price: "$29/month", features: ["2 sessions/month", "Basic support"] },
    { name: "Pro", price: "$59/month", features: ["5 sessions/month", "Priority support", "AI insights"] },
    { name: "Premium", price: "$99/month", features: ["Unlimited sessions", "24/7 support", "Advanced analytics"] },
  ]

  const invoices = [
    { date: "Dec 2023", amount: "$59.00", status: "Paid" },
    { date: "Nov 2023", amount: "$59.00", status: "Paid" },
    { date: "Oct 2023", amount: "$59.00", status: "Paid" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and billing.</p>
      </div>

      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" />
              </div>
              <Button>Update Account</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account & Billing Panel</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Current Plan</Label>
                  <Select defaultValue="pro">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {plans.map((plan) => (
                        <SelectItem key={plan.name.toLowerCase()} value={plan.name.toLowerCase()}>
                          {plan.name} - {plan.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button>Update Plan</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="**** **** **** 1234" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
                <Button>Update Payment Method</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Invoice History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {invoices.map((invoice, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{invoice.date}</p>
                        <p className="text-sm text-muted-foreground">{invoice.amount}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{invoice.status}</Badge>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Session Reminders</p>
                  <p className="text-sm text-muted-foreground">Get notified before your sessions</p>
                </div>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New Content</p>
                  <p className="text-sm text-muted-foreground">Notifications about new Mindflix content</p>
                </div>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
