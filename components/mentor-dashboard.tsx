"use client"

import { useState } from "react"
import {
  Calendar,
  MessageCircle,
  User,
  Star,
  BookOpen,
  Users,
  Settings,
  Bell,
  Upload,
  DollarSign,
  Award,
  TrendingUp,
  FileText,
  Link,
  Video,
  Github,
  Linkedin,
  Twitter,
  BarChart3,
  CheckCircle,
  XCircle,
  Edit,
  Flag,
  Copy,
  Download,
  Share2,
  Shield,
  Receipt,
  Bot,
  Activity,
  Send,
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mentorMenuItems = [
  { title: "Dashboard", icon: TrendingUp, id: "dashboard" },
  { title: "Profile Management", icon: User, id: "profile" },
  { title: "Session Requests", icon: MessageCircle, id: "requests" },
  { title: "Booking Calendar", icon: Calendar, id: "calendar" },
  { title: "My Mentees", icon: Users, id: "mentees" },
  { title: "Resources", icon: BookOpen, id: "resources" },
  { title: "Reviews & Ratings", icon: Star, id: "reviews" },
  { title: "Payouts", icon: DollarSign, id: "payouts" },
  { title: "Settings", icon: Settings, id: "settings" },
  { title: "Messages", icon: MessageCircle, id: "messages" },
]

function MentorMessagesPanel() {
  const [selectedChat, setSelectedChat] = useState<string | null>("john-doe")
  const [newMessage, setNewMessage] = useState("")

  const conversations = [
    {
      id: "john-doe",
      name: "John Doe",
      role: "Mentee",
      lastMessage: "Thank you for the career advice!",
      timestamp: "1 hour ago",
      unread: 1,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "alice-smith",
      name: "Alice Smith",
      role: "Mentee",
      lastMessage: "Can we schedule our next session?",
      timestamp: "3 hours ago",
      unread: 0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "mike-johnson",
      name: "Mike Johnson",
      role: "Mentee",
      lastMessage: "I've completed the assignment",
      timestamp: "1 day ago",
      unread: 2,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "me",
      content: "Hi John! How are you feeling about your career transition goals?",
      timestamp: "10:30 AM",
      isOwn: true,
    },
    {
      id: 2,
      sender: "john-doe",
      content:
        "Hi Sarah! I'm feeling more confident after our last session. I've been working on the action items you suggested.",
      timestamp: "10:35 AM",
      isOwn: false,
    },
    {
      id: 3,
      sender: "me",
      content:
        "That's wonderful to hear! I'd love to see your progress. Can you share what specific steps you've taken?",
      timestamp: "10:40 AM",
      isOwn: true,
    },
    {
      id: 4,
      sender: "john-doe",
      content:
        "Sure! I've updated my LinkedIn profile, reached out to 3 people in my network, and started the online course you recommended.",
      timestamp: "10:45 AM",
      isOwn: false,
    },
    {
      id: 5,
      sender: "john-doe",
      content: "Thank you for the career advice! It's been really helpful.",
      timestamp: "1 hour ago",
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
        <p className="text-muted-foreground">Chat with your mentees and provide ongoing support.</p>
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
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>John Doe</CardTitle>
                    <p className="text-sm text-muted-foreground">Mentee • Online</p>
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

export function MentorDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Award className="h-4 w-4" />
              </div>
              <span className="font-semibold">YoungMinds Pro</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {mentorMenuItems.map((item) => (
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
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-sm">
                  <p className="font-medium">Sarah Miller</p>
                  <p className="text-muted-foreground">Mentor</p>
                </div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1">
          <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center gap-4 px-6">
              <SidebarTrigger />
              <div className="flex-1">
                <span className="font-semibold">YoungMinds Pro</span>
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          </header>

          <div className="p-6">
            {activeSection === "dashboard" && <MentorDashboardOverview />}
            {activeSection === "profile" && <MentorProfileManagement />}
            {activeSection === "requests" && <SessionRequests />}
            {activeSection === "calendar" && <BookingCalendar />}
            {activeSection === "mentees" && <MyMentees />}
            {activeSection === "resources" && <ResourceManagement />}
            {activeSection === "reviews" && <ReviewsRatings />}
            {activeSection === "payouts" && <PayoutManagement />}
            {activeSection === "settings" && <MentorSettings />}
            {activeSection === "messages" && <MentorMessagesPanel />}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

function MentorDashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mentor Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your mentoring overview.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Mentees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">+5 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sessions This Month</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,840</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.9</div>
            <p className="text-xs text-muted-foreground">Based on 156 reviews</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TodaysScheduleTable />
        <EarningsSummaryCard />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Industry Expertise</span>
                <span>95%</span>
              </div>
              <Progress value={95} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Market Credibility</span>
                <span>88%</span>
              </div>
              <Progress value={88} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Content Quality</span>
                <span>92%</span>
              </div>
              <Progress value={92} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New session request from Mike Johnson</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Payment of $120 processed</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New 5-star review received</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function TodaysScheduleTable() {
  const todaysSchedule = [
    {
      time: "9:00 AM",
      mentee: "John Doe",
      topic: "Career Development",
      duration: "60 min",
      status: "upcoming",
    },
    {
      time: "11:00 AM",
      mentee: "Alice Smith",
      topic: "Technical Review",
      duration: "45 min",
      status: "upcoming",
    },
    {
      time: "2:00 PM",
      mentee: "Mike Johnson",
      topic: "Product Strategy",
      duration: "90 min",
      status: "upcoming",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Mentee</TableHead>
              <TableHead>Topic</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todaysSchedule.map((session, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{session.time}</TableCell>
                <TableCell>{session.mentee}</TableCell>
                <TableCell>{session.topic}</TableCell>
                <TableCell>{session.duration}</TableCell>
                <TableCell>
                  <Button size="sm">
                    <Video className="h-4 w-4 mr-1" />
                    Join Call
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function EarningsSummaryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Earnings Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-green-600">$2,840</div>
            <p className="text-sm text-muted-foreground">This Month</p>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold">$18,420</div>
            <p className="text-sm text-muted-foreground">Total Earned</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Monthly Goal Progress</span>
            <span>85%</span>
          </div>
          <Progress value={85} />
        </div>
        <Button className="w-full">
          <DollarSign className="h-4 w-4 mr-2" />
          Request Payout
        </Button>
      </CardContent>
    </Card>
  )
}

function MentorProfileManagement() {
  const [expertiseTags, setExpertiseTags] = useState([
    "Product Management",
    "Leadership",
    "Strategy",
    "Agile",
    "Team Building",
  ])
  const [newTag, setNewTag] = useState("")
  const [hourlyRate, setHourlyRate] = useState("80")

  const addExpertiseTag = () => {
    if (newTag.trim() && !expertiseTags.includes(newTag.trim())) {
      setExpertiseTags([...expertiseTags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeExpertiseTag = (tagToRemove: string) => {
    setExpertiseTags(expertiseTags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile Management</h1>
        <p className="text-muted-foreground">Manage your public profile and expertise.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile Edit Form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <Button variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Change Photo
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Sarah" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Miller" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Professional Title</Label>
              <Input id="title" defaultValue="Senior Product Manager" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" defaultValue="Tech Corp" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Select defaultValue="8-10">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-3">1-3 years</SelectItem>
                  <SelectItem value="4-7">4-7 years</SelectItem>
                  <SelectItem value="8-10">8-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea
                id="bio"
                rows={4}
                defaultValue="Experienced Product Manager with 8+ years in tech, specializing in product strategy, team leadership, and agile development. Passionate about mentoring the next generation of product professionals."
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Media & Credibility</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <div className="flex">
                <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted">
                  <Linkedin className="h-4 w-4" />
                </div>
                <Input id="linkedin" placeholder="linkedin.com/in/username" className="rounded-l-none" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="github">GitHub Profile</Label>
              <div className="flex">
                <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted">
                  <Github className="h-4 w-4" />
                </div>
                <Input id="github" placeholder="github.com/username" className="rounded-l-none" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="twitter">Twitter/X Profile</Label>
              <div className="flex">
                <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted">
                  <Twitter className="h-4 w-4" />
                </div>
                <Input id="twitter" placeholder="x.com/username" className="rounded-l-none" />
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Credibility Score</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>LinkedIn Verification</span>
                  <Badge variant="secondary">Verified</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>GitHub Activity</span>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Overall Score</span>
                  <span className="font-medium">88/100</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Expertise Tags Editor</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Current Expertise Tags</Label>
              <div className="flex flex-wrap gap-2">
                {expertiseTags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() => removeExpertiseTag(tag)}
                  >
                    {tag}
                    <XCircle className="h-3 w-3 ml-1" />
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Add new expertise tag..."
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addExpertiseTag()}
              />
              <Button onClick={addExpertiseTag}>Add</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hourly Rate Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
              <Input id="hourlyRate" type="number" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} />
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Rate Recommendations</h4>
              <p className="text-sm text-muted-foreground">
                Based on your experience and expertise, the recommended rate range is $75-$95/hour.
              </p>
            </div>
            <Button>Update Profile</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function SessionRequests() {
  const requests = [
    {
      id: 1,
      mentee: "John Doe",
      topic: "Career Development Strategy",
      requestedTime: "Tomorrow, 3:00 PM",
      duration: "60 minutes",
      status: "pending",
      message:
        "I'm looking to transition into product management and would love guidance on building the right skills.",
    },
    {
      id: 2,
      mentee: "Alice Smith",
      topic: "Technical Leadership",
      requestedTime: "Friday, 10:00 AM",
      duration: "90 minutes",
      status: "pending",
      message: "Need help with leading a technical team and managing stakeholder expectations.",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Session Requests</h1>
        <p className="text-muted-foreground">Review and manage incoming session requests.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pending Requests Table</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mentee</TableHead>
                <TableHead>Topic</TableHead>
                <TableHead>Requested Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>
                          {request.mentee
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{request.mentee}</span>
                    </div>
                  </TableCell>
                  <TableCell>{request.topic}</TableCell>
                  <TableCell>{request.requestedTime}</TableCell>
                  <TableCell>{request.duration}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <XCircle className="h-4 w-4 mr-1" />
                        Decline
                      </Button>
                      <Button size="sm">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Accept
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {requests.map((request) => (
          <Card key={request.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>
                      {request.mentee
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{request.mentee}</h3>
                    <p className="text-sm text-muted-foreground">{request.topic}</p>
                    <p className="text-sm text-muted-foreground">
                      {request.requestedTime} • {request.duration}
                    </p>
                    <p className="text-sm mt-2">{request.message}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function BookingCalendar() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Booking Calendar</h1>
        <p className="text-muted-foreground">Manage your availability and sync with external calendars.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Calendar View</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Calendar integration would go here</p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Availability Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Working Hours</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input type="time" defaultValue="09:00" />
                  <Input type="time" defaultValue="17:00" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Working Days</Label>
                <div className="space-y-2">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                    <div key={day} className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked />
                      <span className="text-sm">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="w-full">Update Availability</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Calendar Sync</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                Sync with Google Calendar
              </Button>
              <Button variant="outline" className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                Sync with Outlook
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function MyMentees() {
  const mentees = [
    {
      name: "John Doe",
      sessions: 8,
      lastSession: "2 days ago",
      progress: 75,
      focus: "Career Development",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Alice Smith",
      sessions: 12,
      lastSession: "1 week ago",
      progress: 90,
      focus: "Technical Leadership",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Mike Johnson",
      sessions: 3,
      lastSession: "3 days ago",
      progress: 40,
      focus: "Product Strategy",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Mentees</h1>
        <p className="text-muted-foreground">Track progress and manage relationships with your mentees.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mentees.map((mentee, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src={mentee.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {mentee.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{mentee.name}</h3>
                  <p className="text-sm text-muted-foreground">{mentee.focus}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Sessions Completed</span>
                  <span>{mentee.sessions}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Last Session</span>
                  <span>{mentee.lastSession}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{mentee.progress}%</span>
                  </div>
                  <Progress value={mentee.progress} />
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline" className="flex-1">
                  View Notes
                </Button>
                <Button size="sm" className="flex-1">
                  Schedule Session
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function ResourceManagement() {
  const resources = [
    {
      title: "Product Management Fundamentals",
      type: "document",
      uploadDate: "2 days ago",
      downloads: 24,
    },
    {
      title: "Leadership Best Practices",
      type: "video",
      uploadDate: "1 week ago",
      downloads: 18,
    },
    {
      title: "Agile Methodology Guide",
      type: "link",
      uploadDate: "3 days ago",
      downloads: 31,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Resource Management</h1>
        <p className="text-muted-foreground">Upload and manage resources for your mentees.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resource Upload</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="resourceTitle">Resource Title</Label>
            <Input id="resourceTitle" placeholder="Enter resource title..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="resourceType">Resource Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="document">Document</SelectItem>
                <SelectItem value="video">Video</SelectItem>
                <SelectItem value="link">Link</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="resourceDescription">Description</Label>
            <Textarea id="resourceDescription" placeholder="Describe the resource..." />
          </div>
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
            <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Drag and drop files here, or click to browse</p>
            <Button variant="outline" className="mt-2">
              <Upload className="h-4 w-4 mr-2" />
              Choose Files
            </Button>
          </div>
          <Button className="w-full">
            <Upload className="h-4 w-4 mr-2" />
            Upload Resource
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resource Library Table</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Resource</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Upload Date</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {resources.map((resource, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-muted rounded">
                        {resource.type === "document" && <FileText className="h-4 w-4" />}
                        {resource.type === "video" && <Video className="h-4 w-4" />}
                        {resource.type === "link" && <Link className="h-4 w-4" />}
                      </div>
                      <span className="font-medium">{resource.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{resource.type}</Badge>
                  </TableCell>
                  <TableCell>{resource.uploadDate}</TableCell>
                  <TableCell>{resource.downloads}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function ReviewsRatings() {
  const reviews = [
    {
      mentee: "John Doe",
      rating: 5,
      date: "2 days ago",
      comment: "Sarah provided excellent guidance on my career transition. Her insights were invaluable!",
      sentiment: "positive",
    },
    {
      mentee: "Alice Smith",
      rating: 5,
      date: "1 week ago",
      comment: "Great mentor! Helped me develop leadership skills and navigate team challenges effectively.",
      sentiment: "positive",
    },
    {
      mentee: "Mike Johnson",
      rating: 4,
      date: "2 weeks ago",
      comment: "Very knowledgeable and patient. Looking forward to more sessions.",
      sentiment: "positive",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Reviews & Ratings</h1>
        <p className="text-muted-foreground">View feedback and ratings from your mentees.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Overall Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Based on 156 reviews</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Talk‑Time Ratio Metric</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">65%</div>
              <p className="text-sm text-muted-foreground">Mentee Talk Time</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Mentee</span>
                  <span>65%</span>
                </div>
                <Progress value={65} />
                <div className="flex justify-between text-sm">
                  <span>Mentor</span>
                  <span>35%</span>
                </div>
                <Progress value={35} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Feedback Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-blue-500" />
                <span className="font-medium">AI Insights</span>
              </div>
              <div className="space-y-2 text-sm">
                <p>• Excellent active listening skills</p>
                <p>• Strong problem-solving guidance</p>
                <p>• Consider more follow-up questions</p>
              </div>
              <Button size="sm" className="w-full">
                View Detailed Analysis
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sentiment Trend Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Activity className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Sentiment analysis chart would be displayed here</p>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Positive: 85%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Neutral: 12%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Negative: 3%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ratings & Reviews Table</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mentee</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Comment</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reviews.map((review, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>
                          {review.mentee
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{review.mentee}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{review.date}</TableCell>
                  <TableCell className="max-w-xs truncate">{review.comment}</TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      <Flag className="h-4 w-4 mr-1" />
                      Flag
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function PayoutManagement() {
  const payouts = [
    {
      date: "Dec 15, 2023",
      amount: "$1,240",
      status: "completed",
      sessions: 15,
      method: "Bank Transfer",
    },
    {
      date: "Nov 15, 2023",
      amount: "$980",
      status: "completed",
      sessions: 12,
      method: "PayPal",
    },
    {
      date: "Oct 15, 2023",
      amount: "$1,560",
      status: "completed",
      sessions: 19,
      method: "Bank Transfer",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Payout Management</h1>
        <p className="text-muted-foreground">Track your earnings and manage withdrawals.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,840</div>
            <p className="text-xs text-muted-foreground">Ready for withdrawal</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,840</div>
            <p className="text-xs text-muted-foreground">28 sessions completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$18,420</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Withdraw Funds</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="withdrawAmount">Amount to Withdraw</Label>
              <Input id="withdrawAmount" type="number" placeholder="0.00" />
            </div>
            <div className="space-y-2">
              <Label>Withdrawal Method</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="stripe">Stripe</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full">Request Withdrawal</Button>
            <p className="text-xs text-muted-foreground">
              Withdrawals are processed within 3-5 business days. A 2.9% processing fee applies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bankAccount">Bank Account</Label>
              <Input id="bankAccount" placeholder="****1234" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="paypalEmail">PayPal Email</Label>
              <Input id="paypalEmail" type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="taxId">Tax ID</Label>
              <Input id="taxId" placeholder="XXX-XX-XXXX" />
            </div>
            <Button variant="outline" className="w-full">
              Update Payment Info
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payout History Table</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Sessions</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payouts.map((payout, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{payout.date}</TableCell>
                  <TableCell>{payout.amount}</TableCell>
                  <TableCell>{payout.sessions}</TableCell>
                  <TableCell>{payout.method}</TableCell>
                  <TableCell>
                    <Badge variant={payout.status === "completed" ? "default" : "secondary"}>{payout.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Receipt
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function MentorSettings() {
  const [referralLink] = useState("https://youngminds.com/ref/sarah-miller")

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink)
    // You could add a toast notification here
  }

  const complianceItems = [
    { item: "Background Check", status: "completed", date: "2023-01-15" },
    { item: "Identity Verification", status: "completed", date: "2023-01-16" },
    { item: "Professional References", status: "completed", date: "2023-01-18" },
    { item: "Code of Conduct Agreement", status: "completed", date: "2023-01-20" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and compliance.</p>
      </div>

      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="referrals">Referrals</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" value="sarah.miller@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="pst">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pst">Pacific Standard Time</SelectItem>
                      <SelectItem value="est">Eastern Standard Time</SelectItem>
                      <SelectItem value="cst">Central Standard Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button>Update Account</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>LinkedIn Integration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">LinkedIn Badge</p>
                    <p className="text-sm text-muted-foreground">Display YoungMinds mentor badge on LinkedIn</p>
                  </div>
                  <Button>
                    <Linkedin className="h-4 w-4 mr-2" />
                    Add Badge
                  </Button>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm">
                    Show your expertise as a YoungMinds mentor on your LinkedIn profile to attract more mentees.
                  </p>
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
                  <p className="font-medium">New Session Requests</p>
                  <p className="text-sm text-muted-foreground">Get notified when mentees request sessions</p>
                </div>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Payment Notifications</p>
                  <p className="text-sm text-muted-foreground">Notifications about payments and payouts</p>
                </div>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Review Alerts</p>
                  <p className="text-sm text-muted-foreground">Get notified when you receive new reviews</p>
                </div>
                <Button variant="outline" size="sm">
                  Enabled
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="referrals">
          <Card>
            <CardHeader>
              <CardTitle>Referral Program</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Your Referral Link</Label>
                <div className="flex gap-2">
                  <Input value={referralLink} readOnly />
                  <Button onClick={copyReferralLink}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Referral Benefits</h4>
                <ul className="text-sm space-y-1">
                  <li>• Earn $50 for each successful mentor referral</li>
                  <li>• Get 10% bonus on first month earnings from referred mentees</li>
                  <li>• Build your mentor network and community</li>
                </ul>
              </div>
              <Button className="w-full">
                <Share2 className="h-4 w-4 mr-2" />
                Share Referral Link
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <div>
                          <p className="font-medium">{item.item}</p>
                          <p className="text-sm text-muted-foreground">Completed on {item.date}</p>
                        </div>
                      </div>
                      <Badge variant="secondary">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Legal Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Mentor Agreement Contract</p>
                      <p className="text-sm text-muted-foreground">Signed on Jan 20, 2023</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Receipt className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Tax Form W-9</p>
                      <p className="text-sm text-muted-foreground">Upload required for tax reporting</p>
                    </div>
                  </div>
                  <Button size="sm">
                    <Upload className="h-4 w-4 mr-1" />
                    Upload
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
