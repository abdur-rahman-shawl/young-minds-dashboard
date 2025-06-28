"use client"

import { useState } from "react"
import {
  CheckCircle,
  XCircle,
  Eye,
  Video,
  Play,
  Download,
  Upload,
  Edit,
  Trash2,
  Plus,
  Clock,
  ThumbsUp,
  UserPlus,
  Star,
  Calendar,
  MessageSquare,
  Filter,
  MoreHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function MentorApprovals() {
  const pendingMentors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@email.com",
      title: "Senior Data Scientist",
      company: "Google",
      experience: "8 years",
      expertise: ["Data Science", "Machine Learning", "Python"],
      linkedin: "linkedin.com/in/sarahjohnson",
      github: "github.com/sarahjohnson",
      bio: "Experienced data scientist with expertise in ML and AI. Passionate about mentoring the next generation.",
      hourlyRate: 120,
      submitDate: "2023-12-10",
      status: "Pending",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@email.com",
      title: "Product Manager",
      company: "Meta",
      experience: "6 years",
      expertise: ["Product Management", "Strategy", "Analytics"],
      linkedin: "linkedin.com/in/michaelchen",
      github: "",
      bio: "Product leader with experience scaling products from 0 to millions of users.",
      hourlyRate: 100,
      submitDate: "2023-12-12",
      status: "Under Review",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Mentor Approvals</h1>
          <p className="text-muted-foreground">Review and approve mentor applications.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Add Mentor Manually
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add Mentor Manually</DialogTitle>
              <DialogDescription>Create a mentor profile directly without application process.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mentorName">Full Name</Label>
                  <Input id="mentorName" placeholder="Enter mentor name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mentorEmail">Email</Label>
                  <Input id="mentorEmail" type="email" placeholder="mentor@youngminds.com" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mentorTitle">Job Title</Label>
                  <Input id="mentorTitle" placeholder="Senior Product Manager" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mentorCompany">Company</Label>
                  <Input id="mentorCompany" placeholder="Company name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="mentorBio">Bio</Label>
                <Textarea id="mentorBio" placeholder="Professional background and expertise..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mentorExpertise">Expertise Tags</Label>
                <Input id="mentorExpertise" placeholder="e.g., Product Management, Leadership, Strategy" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mentorRate">Hourly Rate ($)</Label>
                  <Input id="mentorRate" type="number" placeholder="80" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mentorExperience">Years of Experience</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="4-7">4-7 years</SelectItem>
                      <SelectItem value="8-10">8-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full">Create Mentor Profile</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Awaiting review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved This Month</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rejection Rate</CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8%</div>
            <p className="text-xs text-muted-foreground">Quality maintained</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pending Mentor Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {pendingMentors.map((mentor) => (
              <div key={mentor.id} className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" />
                      <AvatarFallback>
                        {mentor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">{mentor.name}</h3>
                      <p className="text-muted-foreground">
                        {mentor.title} at {mentor.company}
                      </p>
                      <p className="text-sm text-muted-foreground">{mentor.email}</p>
                      <Badge variant="outline">{mentor.experience} experience</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${mentor.hourlyRate}/hour</p>
                    <p className="text-sm text-muted-foreground">Applied: {mentor.submitDate}</p>
                    <Badge variant={mentor.status === "Pending" ? "secondary" : "outline"}>{mentor.status}</Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-1">Bio</h4>
                    <p className="text-sm text-muted-foreground">{mentor.bio}</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Expertise</h4>
                    <div className="flex flex-wrap gap-1">
                      {mentor.expertise.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-1">LinkedIn</h4>
                      <p className="text-sm text-blue-600">{mentor.linkedin}</p>
                    </div>
                    {mentor.github && (
                      <div>
                        <h4 className="font-medium mb-1">GitHub</h4>
                        <p className="text-sm text-blue-600">{mentor.github}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button size="sm" className="flex-1">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Approve
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Review
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function SessionRecordings() {
  const recordings = [
    {
      id: 1,
      sessionId: "SES-001",
      mentee: "John Doe",
      mentor: "Sarah Miller",
      topic: "Career Development",
      date: "2023-12-15",
      duration: "58:32",
      size: "245 MB",
      status: "Available",
      rating: 5,
    },
    {
      id: 2,
      sessionId: "SES-002",
      mentee: "Alice Smith",
      mentor: "John Wilson",
      topic: "Technical Review",
      date: "2023-12-14",
      duration: "1:23:15",
      size: "387 MB",
      status: "Processing",
      rating: null,
    },
    {
      id: 3,
      sessionId: "SES-003",
      mentee: "Mike Johnson",
      mentor: "Emily Chen",
      topic: "Marketing Strategy",
      date: "2023-12-13",
      duration: "45:20",
      size: "198 MB",
      status: "Available",
      rating: 4,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Session Recordings</h1>
        <p className="text-muted-foreground">Manage audio/video recordings of mentoring sessions.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Recordings</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 TB</div>
            <p className="text-xs text-muted-foreground">68% of capacity</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Currently processing</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4">
        <Input placeholder="Search recordings..." className="flex-1" />
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
        <Button>
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Recordings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Session ID</TableHead>
                <TableHead>Participants</TableHead>
                <TableHead>Topic</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recordings.map((recording) => (
                <TableRow key={recording.id}>
                  <TableCell className="font-medium">{recording.sessionId}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p>{recording.mentee}</p>
                      <p className="text-muted-foreground">with {recording.mentor}</p>
                    </div>
                  </TableCell>
                  <TableCell>{recording.topic}</TableCell>
                  <TableCell>{recording.date}</TableCell>
                  <TableCell>{recording.duration}</TableCell>
                  <TableCell>{recording.size}</TableCell>
                  <TableCell>
                    <Badge variant={recording.status === "Available" ? "default" : "secondary"}>
                      {recording.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {recording.rating ? (
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{recording.rating}</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Play className="h-4 w-4 mr-2" />
                          Play Recording
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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

export function MindflixCMS() {
  const [activeTab, setActiveTab] = useState("content")

  const mindflixContent = [
    {
      id: 1,
      title: "Complete Guide to Study Abroad Applications",
      category: "Study Abroad",
      type: "Video",
      duration: "15:30",
      views: 2847,
      likes: 234,
      uploadDate: "2023-12-10",
      status: "Published",
      featured: true,
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 2,
      title: "Career Pivot: From Engineering to Product Management",
      category: "Career",
      type: "Video",
      duration: "22:15",
      views: 1923,
      likes: 187,
      uploadDate: "2023-12-08",
      status: "Published",
      featured: false,
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 3,
      title: "Startup Funding: Seed to Series A",
      category: "Startup",
      type: "Video",
      duration: "28:45",
      views: 3421,
      likes: 312,
      uploadDate: "2023-12-05",
      status: "Published",
      featured: false,
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
  ]

  const resources = [
    {
      id: 1,
      title: "Study Abroad Checklist",
      type: "PDF",
      category: "Study Abroad",
      downloads: 1247,
      uploadDate: "2023-12-01",
      size: "2.3 MB",
    },
    {
      id: 2,
      title: "Career Transition Template",
      type: "PDF",
      category: "Career",
      downloads: 892,
      uploadDate: "2023-11-28",
      size: "1.8 MB",
    },
    {
      id: 3,
      title: "Startup Pitch Deck Template",
      type: "PDF",
      category: "Startup",
      downloads: 2156,
      uploadDate: "2023-11-25",
      size: "4.2 MB",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Mindflix Content Management</h1>
          <p className="text-muted-foreground">Manage curated learning content and resources.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Content
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Mindflix Content</DialogTitle>
              <DialogDescription>Upload new video content or resources to Mindflix.</DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="video">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="video">Video Content</TabsTrigger>
                <TabsTrigger value="resource">Resource/PDF</TabsTrigger>
              </TabsList>
              <TabsContent value="video" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="videoTitle">Video Title</Label>
                  <Input id="videoTitle" placeholder="Enter video title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="videoCategory">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="study-abroad">Study Abroad</SelectItem>
                      <SelectItem value="career">Career</SelectItem>
                      <SelectItem value="startup">Startup</SelectItem>
                      <SelectItem value="expert-interview">Expert Interview</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="videoDescription">Description</Label>
                  <Textarea id="videoDescription" placeholder="Video description..." />
                </div>
                <div className="space-y-2">
                  <Label>Video Upload</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Drag and drop video file here, or click to browse</p>
                    <Button variant="outline" className="mt-2">
                      Choose Video File
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Thumbnail Upload</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                    <Upload className="h-6 w-6 mx-auto mb-1 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Upload thumbnail image</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="featured" />
                  <Label htmlFor="featured">Feature this video</Label>
                </div>
                <Button className="w-full">Upload Video</Button>
              </TabsContent>
              <TabsContent value="resource" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="resourceTitle">Resource Title</Label>
                  <Input id="resourceTitle" placeholder="Enter resource title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resourceCategory">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="study-abroad">Study Abroad</SelectItem>
                      <SelectItem value="career">Career</SelectItem>
                      <SelectItem value="startup">Startup</SelectItem>
                      <SelectItem value="checklist">Checklist</SelectItem>
                      <SelectItem value="template">Template</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resourceDescription">Description</Label>
                  <Textarea id="resourceDescription" placeholder="Resource description..." />
                </div>
                <div className="space-y-2">
                  <Label>File Upload</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Upload PDF, document, or other resource</p>
                    <Button variant="outline" className="mt-2">
                      Choose File
                    </Button>
                  </div>
                </div>
                <Button className="w-full">Upload Resource</Button>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Videos</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">Across all categories</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2M</div>
            <p className="text-xs text-muted-foreground">+15% this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resources</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">PDFs & templates</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Featured Content</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Currently featured</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="content">Video Content</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          <div className="flex gap-4">
            <Input placeholder="Search content..." className="flex-1" />
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="study-abroad">Study Abroad</SelectItem>
                <SelectItem value="career">Career</SelectItem>
                <SelectItem value="startup">Startup</SelectItem>
                <SelectItem value="expert-interview">Expert Interview</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mindflixContent.map((content) => (
              <Card key={content.id}>
                <div className="relative">
                  <img
                    src={content.thumbnail || "/placeholder.svg"}
                    alt={content.title}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  {content.featured && (
                    <Badge className="absolute top-2 left-2" variant="default">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {content.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{content.category}</Badge>
                      <Badge variant={content.status === "Published" ? "default" : "secondary"}>{content.status}</Badge>
                    </div>
                    <h3 className="font-semibold line-clamp-2">{content.title}</h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{content.views.toLocaleString()} views</span>
                      <span>{content.likes} likes</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Uploaded: {content.uploadDate}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resource Library</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Downloads</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Upload Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {resources.map((resource) => (
                    <TableRow key={resource.id}>
                      <TableCell className="font-medium">{resource.title}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{resource.type}</Badge>
                      </TableCell>
                      <TableCell>{resource.category}</TableCell>
                      <TableCell>{resource.downloads.toLocaleString()}</TableCell>
                      <TableCell>{resource.size}</TableCell>
                      <TableCell>{resource.uploadDate}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Content Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Content performance chart would go here</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Category Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Study Abroad</span>
                    <span>35%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "35%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Career</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Startup</span>
                    <span>25%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export function FeedbackHub() {
  const feedbackData = [
    {
      id: 1,
      type: "Session Feedback",
      user: "John Doe",
      mentor: "Sarah Miller",
      rating: 5,
      comment: "Excellent session! Sarah provided great insights on career development.",
      date: "2023-12-15",
      category: "Positive",
      status: "Reviewed",
    },
    {
      id: 2,
      type: "Platform Feedback",
      user: "Alice Smith",
      mentor: null,
      rating: 3,
      comment: "The booking system could be more intuitive. Sometimes it's hard to find available slots.",
      date: "2023-12-14",
      category: "Improvement",
      status: "Pending",
    },
    {
      id: 3,
      type: "Mentor Feedback",
      user: "Mike Johnson",
      mentor: "John Wilson",
      rating: 2,
      comment: "The mentor was late and seemed unprepared for our session.",
      date: "2023-12-13",
      category: "Complaint",
      status: "Under Review",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Feedback Hub</h1>
        <p className="text-muted-foreground">Aggregate and analyze user feedback across the platform.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Feedback</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.6</div>
            <p className="text-xs text-muted-foreground">Platform average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Positive Feedback</CardTitle>
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">4-5 star ratings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4">
        <Input placeholder="Search feedback..." className="flex-1" />
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="session">Session</SelectItem>
            <SelectItem value="platform">Platform</SelectItem>
            <SelectItem value="mentor">Mentor</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="positive">Positive</SelectItem>
            <SelectItem value="improvement">Improvement</SelectItem>
            <SelectItem value="complaint">Complaint</SelectItem>
          </SelectContent>
        </Select>
        <Button>
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {feedbackData.map((feedback) => (
              <div key={feedback.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>
                        {feedback.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{feedback.user}</p>
                      {feedback.mentor && (
                        <p className="text-sm text-muted-foreground">Session with {feedback.mentor}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < feedback.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{feedback.date}</p>
                  </div>
                </div>

                <div className="flex gap-2 mb-3">
                  <Badge variant="outline">{feedback.type}</Badge>
                  <Badge
                    variant={
                      feedback.category === "Positive"
                        ? "default"
                        : feedback.category === "Complaint"
                          ? "destructive"
                          : "secondary"
                    }
                  >
                    {feedback.category}
                  </Badge>
                  <Badge variant={feedback.status === "Reviewed" ? "default" : "secondary"}>{feedback.status}</Badge>
                </div>

                <p className="text-sm mb-3">{feedback.comment}</p>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Respond
                  </Button>
                  {feedback.status === "Pending" && (
                    <Button size="sm">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Mark Reviewed
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Feedback Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Feedback trends chart would go here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Issues</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Booking system issues</span>
              <Badge variant="secondary">12 reports</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Mentor punctuality</span>
              <Badge variant="secondary">8 reports</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Payment processing</span>
              <Badge variant="secondary">5 reports</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Video call quality</span>
              <Badge variant="secondary">3 reports</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
