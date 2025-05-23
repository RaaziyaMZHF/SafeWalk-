import { AlertTriangle, Clock, Filter, MapPin, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function IncidentsPage() {
  const incidents = [
    {
      id: "INC-001",
      type: "emergency",
      location: "Oak Street & 5th Avenue",
      time: "Today, 2:30 PM",
      description: "User triggered emergency alert",
      status: "resolved",
      user: "Jessica Taylor",
    },
    {
      id: "INC-002",
      type: "suspicious",
      location: "Central Park West",
      time: "Today, 2:15 PM",
      description: "Suspicious activity reported near fountain",
      status: "investigating",
      user: "Robert Chen",
    },
    {
      id: "INC-003",
      type: "timer",
      location: "Main Street & Broadway",
      time: "Today, 1:55 PM",
      description: "Safety timer expired without check-in",
      status: "resolved",
      user: "Aisha Johnson",
    },
    {
      id: "INC-004",
      type: "community",
      location: "Riverside Drive",
      time: "Today, 1:30 PM",
      description: "Community alert: Poor lighting reported in area",
      status: "pending",
      user: "Carlos Rodriguez",
    },
    {
      id: "INC-005",
      type: "emergency",
      location: "University Campus",
      time: "Today, 12:45 PM",
      description: "Emergency button pressed, user reported feeling unsafe",
      status: "resolved",
      user: "Emma Wilson",
    },
    {
      id: "INC-006",
      type: "suspicious",
      location: "Downtown - 3rd Avenue",
      time: "Today, 11:20 AM",
      description: "Suspicious person following user",
      status: "investigating",
      user: "Michael Chen",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Incidents</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <AlertTriangle className="mr-2 h-4 w-4" />
            Report New Incident
          </Button>
        </div>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <TabsList>
            <TabsTrigger value="all">All Incidents</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search incidents..." className="w-full min-w-[200px] pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
            <Select defaultValue="today">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4">
            {incidents.map((incident) => (
              <Card key={incident.id}>
                <CardContent className="p-0">
                  <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
                    <div
                      className={`rounded-full p-3 ${
                        incident.type === "emergency"
                          ? "bg-red-100 text-red-600"
                          : incident.type === "suspicious"
                            ? "bg-amber-100 text-amber-600"
                            : incident.type === "timer"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <div>
                          <p className="font-medium">
                            {incident.id}: {incident.type.charAt(0).toUpperCase() + incident.type.slice(1)} Alert
                          </p>
                          <p className="text-sm text-muted-foreground">{incident.description}</p>
                        </div>
                        <span
                          className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            incident.status === "resolved"
                              ? "bg-green-100 text-green-700"
                              : incident.status === "investigating"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {incident.status}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 pt-2 text-sm text-muted-foreground sm:flex-row sm:items-center">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {incident.user}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {incident.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {incident.time}
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="shrink-0">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4">
            {incidents
              .filter((incident) => incident.status !== "resolved")
              .map((incident) => (
                <Card key={incident.id}>
                  <CardContent className="p-0">
                    <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
                      <div
                        className={`rounded-full p-3 ${
                          incident.type === "emergency"
                            ? "bg-red-100 text-red-600"
                            : incident.type === "suspicious"
                              ? "bg-amber-100 text-amber-600"
                              : incident.type === "timer"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <AlertTriangle className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                          <div>
                            <p className="font-medium">
                              {incident.id}: {incident.type.charAt(0).toUpperCase() + incident.type.slice(1)} Alert
                            </p>
                            <p className="text-sm text-muted-foreground">{incident.description}</p>
                          </div>
                          <span
                            className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              incident.status === "resolved"
                                ? "bg-green-100 text-green-700"
                                : incident.status === "investigating"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {incident.status}
                          </span>
                        </div>
                        <div className="flex flex-col gap-2 pt-2 text-sm text-muted-foreground sm:flex-row sm:items-center">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {incident.user}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {incident.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {incident.time}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="shrink-0">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="resolved" className="space-y-4">
          <div className="grid gap-4">
            {incidents
              .filter((incident) => incident.status === "resolved")
              .map((incident) => (
                <Card key={incident.id}>
                  <CardContent className="p-0">
                    <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
                      <div
                        className={`rounded-full p-3 ${
                          incident.type === "emergency"
                            ? "bg-red-100 text-red-600"
                            : incident.type === "suspicious"
                              ? "bg-amber-100 text-amber-600"
                              : incident.type === "timer"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <AlertTriangle className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                          <div>
                            <p className="font-medium">
                              {incident.id}: {incident.type.charAt(0).toUpperCase() + incident.type.slice(1)} Alert
                            </p>
                            <p className="text-sm text-muted-foreground">{incident.description}</p>
                          </div>
                          <span
                            className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              incident.status === "resolved"
                                ? "bg-green-100 text-green-700"
                                : incident.status === "investigating"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {incident.status}
                          </span>
                        </div>
                        <div className="flex flex-col gap-2 pt-2 text-sm text-muted-foreground sm:flex-row sm:items-center">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {incident.user}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {incident.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {incident.time}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="shrink-0">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
