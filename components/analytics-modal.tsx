"use client"

import { useState } from "react"
import { Users, DollarSign, Calendar, BookOpen, TrendingUp, Download, Filter } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface AnalyticsModalProps {
  isOpen: boolean
  onClose: () => void
  metricType: "users" | "mentors" | "sessions" | "revenue" | "mindflix" | null
  metricTitle: string
}

export function AnalyticsModal({ isOpen, onClose, metricType, metricTitle }: AnalyticsModalProps) {
  const [startDate, setStartDate] = useState("2023-11-01")
  const [endDate, setEndDate] = useState("2023-12-15")
  const [granularity, setGranularity] = useState("daily")

  // Mock data based on metric type
  const getMetricData = () => {
    switch (metricType) {
      case "users":
        return {
          current: 2847,
          previous: 2541,
          change: "+12%",
          breakdown: [
            { label: "New Users", value: 306, change: "+15%" },
            { label: "Active Users", value: 2541, change: "+8%" },
            { label: "Returning Users", value: 1892, change: "+5%" },
            { label: "Churned Users", value: 89, change: "-3%" },
          ],
          chartData: [
            { date: "Nov 1", value: 2541 },
            { date: "Nov 8", value: 2598 },
            { date: "Nov 15", value: 2654 },
            { date: "Nov 22", value: 2712 },
            { date: "Nov 29", value: 2768 },
            { date: "Dec 6", value: 2801 },
            { date: "Dec 13", value: 2847 },
          ],
        }
      case "mentors":
        return {
          current: 342,
          previous: 298,
          change: "+14.8%",
          breakdown: [
            { label: "Active Mentors", value: 342, change: "+14.8%" },
            { label: "New Mentors", value: 44, change: "+22%" },
            { label: "Pending Approval", value: 28, change: "+12%" },
            { label: "Inactive Mentors", value: 15, change: "-8%" },
          ],
          chartData: [
            { date: "Nov 1", value: 298 },
            { date: "Nov 8", value: 305 },
            { date: "Nov 15", value: 312 },
            { date: "Nov 22", value: 321 },
            { date: "Nov 29", value: 328 },
            { date: "Dec 6", value: 335 },
            { date: "Dec 13", value: 342 },
          ],
        }
      case "sessions":
        return {
          current: 12456,
          previous: 10234,
          change: "+21.7%",
          breakdown: [
            { label: "Completed Sessions", value: 11698, change: "+23%" },
            { label: "Cancelled Sessions", value: 512, change: "-5%" },
            { label: "No-Shows", value: 246, change: "-12%" },
            { label: "Average Duration", value: 67, change: "+8%", unit: "min" },
          ],
          chartData: [
            { date: "Nov 1", value: 10234 },
            { date: "Nov 8", value: 10567 },
            { date: "Nov 15", value: 10912 },
            { date: "Nov 22", value: 11298 },
            { date: "Nov 29", value: 11654 },
            { date: "Dec 6", value: 12001 },
            { date: "Dec 13", value: 12456 },
          ],
        }
      case "revenue":
        return {
          current: 145231,
          previous: 121025,
          change: "+20%",
          breakdown: [
            { label: "Session Revenue", value: 123446, change: "+22%" },
            { label: "Platform Fees", value: 14523, change: "+20%" },
            { label: "Subscription Revenue", value: 5890, change: "+15%" },
            { label: "Premium Features", value: 1372, change: "+8%" },
          ],
          chartData: [
            { date: "Nov 1", value: 121025 },
            { date: "Nov 8", value: 125234 },
            { date: "Nov 15", value: 129567 },
            { date: "Nov 22", value: 134123 },
            { date: "Nov 29", value: 138890 },
            { date: "Dec 6", value: 142456 },
            { date: "Dec 13", value: 145231 },
          ],
        }
      case "mindflix":
        return {
          current: 1200000,
          previous: 1043000,
          change: "+15%",
          breakdown: [
            { label: "Total Views", value: 1200000, change: "+15%" },
            { label: "Unique Viewers", value: 45600, change: "+18%" },
            { label: "Avg. Watch Time", value: 12.5, change: "+8%", unit: "min" },
            { label: "Content Completion", value: 78, change: "+5%", unit: "%" },
          ],
          chartData: [
            { date: "Nov 1", value: 1043000 },
            { date: "Nov 8", value: 1078000 },
            { date: "Nov 15", value: 1112000 },
            { date: "Nov 22", value: 1145000 },
            { date: "Nov 29", value: 1167000 },
            { date: "Dec 6", value: 1184000 },
            { date: "Dec 13", value: 1200000 },
          ],
        }
      default:
        return null
    }
  }

  const data = getMetricData()
  if (!data) return null

  const formatValue = (value: number, unit?: string) => {
    if (metricType === "revenue") {
      return `$${value.toLocaleString()}`
    }
    if (metricType === "mindflix" && value > 1000000) {
      return `${(value / 1000000).toFixed(1)}M`
    }
    if (value > 1000) {
      return `${(value / 1000).toFixed(1)}k`
    }
    return `${value}${unit || ""}`
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {metricType === "users" && <Users className="h-5 w-5" />}
            {metricType === "mentors" && <Users className="h-5 w-5" />}
            {metricType === "sessions" && <Calendar className="h-5 w-5" />}
            {metricType === "revenue" && <DollarSign className="h-5 w-5" />}
            {metricType === "mindflix" && <BookOpen className="h-5 w-5" />}
            {metricTitle} Analytics
          </DialogTitle>
          <DialogDescription>Detailed analytics and insights for the selected metric</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Date Range Controls */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Date Range & Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 items-end">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date</Label>
                  <Input id="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Granularity</Label>
                  <Select value={granularity} onValueChange={setGranularity}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button>
                  <Filter className="h-4 w-4 mr-2" />
                  Apply Filters
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Period</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatValue(data.current)}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{data.change}</span> from previous period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Previous Period</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatValue(data.previous)}</div>
                <p className="text-xs text-muted-foreground">Comparison baseline</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{data.change}</div>
                <p className="text-xs text-muted-foreground">Period over period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Trend</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">↗</div>
                <p className="text-xs text-muted-foreground">Positive growth</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Trend Chart</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-muted rounded-lg flex items-center justify-center relative">
                      <p className="text-muted-foreground">Interactive chart would go here</p>
                      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
                        {startDate} to {endDate}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Key Metrics Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {data.breakdown.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.label}</span>
                        <div className="text-right">
                          <div className="font-semibold">{formatValue(item.value, item.unit)}</div>
                          <div className="text-xs text-green-600">{item.change}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="breakdown" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Category Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Pie chart would go here</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Geographic Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Geographic map would go here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="trends" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Historical Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Multi-period trend analysis would go here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Insights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Positive Trend</h4>
                      <p className="text-sm text-green-700">
                        {metricTitle} showing strong growth of {data.change} compared to previous period.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Peak Performance</h4>
                      <p className="text-sm text-blue-700">
                        Highest performance recorded on Dec 13 with {formatValue(data.current)} total.
                      </p>
                    </div>
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Opportunity</h4>
                      <p className="text-sm text-yellow-700">
                        Consider implementing growth strategies to maintain this positive momentum.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Short-term Actions</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Monitor daily performance metrics</li>
                        <li>• Identify top-performing segments</li>
                        <li>• Optimize conversion funnels</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Long-term Strategy</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Develop retention programs</li>
                        <li>• Expand successful initiatives</li>
                        <li>• Invest in growth channels</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
