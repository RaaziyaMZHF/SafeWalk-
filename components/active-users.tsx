import { Clock, MapPin, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ActiveUsers() {
  const users = [
    {
      id: 1,
      name: "Jessica Taylor",
      location: "Downtown - 5th Avenue",
      status: "walking",
      timeActive: "15 min",
      guardians: 2,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Robert Chen",
      location: "Central Park - East Side",
      status: "timer active",
      timeActive: "8 min",
      guardians: 3,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Aisha Johnson",
      location: "Riverside Drive",
      status: "walking",
      timeActive: "22 min",
      guardians: 1,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Carlos Rodriguez",
      location: "University Campus",
      status: "timer active",
      timeActive: "5 min",
      guardians: 2,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="space-y-3">
      {users.map((user) => (
        <div key={user.id} className="flex items-center gap-3 rounded-lg border p-3">
          <Avatar>
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{user.name}</p>
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  user.status === "walking" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"
                }`}
              >
                {user.status}
              </span>
            </div>
            <div className="flex flex-col gap-1 pt-1 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {user.location}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {user.timeActive}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {user.guardians} guardians
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
