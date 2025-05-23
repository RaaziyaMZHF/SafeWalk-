import { Clock, Filter, MapPin, MoreHorizontal, Search, Shield, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function UsersPage() {
  const users = [
    {
      id: "USR-001",
      name: "Jessica Taylor",
      email: "jessica.taylor@example.com",
      location: "Downtown - 5th Avenue",
      status: "active",
      lastActive: "Just now",
      guardians: 2,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "USR-002",
      name: "Robert Chen",
      email: "robert.chen@example.com",
      location: "Central Park - East Side",
      status: "active",
      lastActive: "5 min ago",
      guardians: 3,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "USR-003",
      name: "Aisha Johnson",
      email: "aisha.johnson@example.com",
      location: "Riverside Drive",
      status: "inactive",
      lastActive: "2 hours ago",
      guardians: 1,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "USR-004",
      name: "Carlos Rodriguez",
      email: "carlos.rodriguez@example.com",
      location: "University Campus",
      status: "active",
      lastActive: "10 min ago",
      guardians: 2,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "USR-005",
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      location: "Westside Mall",
      status: "inactive",
      lastActive: "1 day ago",
      guardians: 4,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "USR-006",
      name: "Michael Chen",
      email: "michael.chen@example.com",
      location: "Downtown - 3rd Avenue",
      status: "active",
      lastActive: "30 min ago",
      guardians: 2,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Users</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <User className="mr-2 h-4 w-4" />
            Add New User
          </Button>
        </div>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <TabsList>
            <TabsTrigger value="all">All Users</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search users..." className="w-full min-w-[200px] pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4">
            {users.map((user) => (
              <Card key={user.id}>
                <CardContent className="p-0">
                  <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                        <span
                          className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            user.status === "active" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {user.status}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 pt-2 text-sm text-muted-foreground sm:flex-row sm:items-center">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {user.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          Last active: {user.lastActive}
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="h-4 w-4" />
                          {user.guardians} guardians
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline">View Profile</Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">More options</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit User</DropdownMenuItem>
                          <DropdownMenuItem>Manage Guardians</DropdownMenuItem>
                          <DropdownMenuItem>View Activity Log</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Deactivate User</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4">
            {users
              .filter((user) => user.status === "active")
              .map((user) => (
                <Card key={user.id}>
                  <CardContent className="p-0">
                    <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                          <span
                            className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              user.status === "active" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {user.status}
                          </span>
                        </div>
                        <div className="flex flex-col gap-2 pt-2 text-sm text-muted-foreground sm:flex-row sm:items-center">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {user.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Last active: {user.lastActive}
                          </div>
                          <div className="flex items-center gap-1">
                            <Shield className="h-4 w-4" />
                            {user.guardians} guardians
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline">View Profile</Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More options</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit User</DropdownMenuItem>
                            <DropdownMenuItem>Manage Guardians</DropdownMenuItem>
                            <DropdownMenuItem>View Activity Log</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Deactivate User</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="inactive" className="space-y-4">
          <div className="grid gap-4">
            {users
              .filter((user) => user.status === "inactive")
              .map((user) => (
                <Card key={user.id}>
                  <CardContent className="p-0">
                    <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                          <span
                            className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              user.status === "active" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {user.status}
                          </span>
                        </div>
                        <div className="flex flex-col gap-2 pt-2 text-sm text-muted-foreground sm:flex-row sm:items-center">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {user.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Last active: {user.lastActive}
                          </div>
                          <div className="flex items-center gap-1">
                            <Shield className="h-4 w-4" />
                            {user.guardians} guardians
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline">View Profile</Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More options</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit User</DropdownMenuItem>
                            <DropdownMenuItem>Manage Guardians</DropdownMenuItem>
                            <DropdownMenuItem>View Activity Log</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-green-600">Activate User</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
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
