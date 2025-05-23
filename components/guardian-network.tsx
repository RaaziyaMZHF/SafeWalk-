import { Shield } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function GuardianNetwork() {
  const guardians = [
    {
      id: 1,
      name: "Emma Wilson",
      status: "active",
      protectees: 3,
      lastActive: "Just now",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Michael Chen",
      status: "active",
      protectees: 2,
      lastActive: "5 min ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      status: "inactive",
      protectees: 4,
      lastActive: "1 hour ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "David Kim",
      status: "active",
      protectees: 1,
      lastActive: "Just now",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="space-y-3">
      {guardians.map((guardian) => (
        <div key={guardian.id} className="flex items-center gap-3 rounded-lg border p-3">
          <Avatar>
            <AvatarImage src={guardian.avatar || "/placeholder.svg"} alt={guardian.name} />
            <AvatarFallback>{guardian.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{guardian.name}</p>
              <span
                className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${
                  guardian.status === "active" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    guardian.status === "active" ? "bg-green-600" : "bg-slate-400"
                  }`}
                ></span>
                {guardian.status}
              </span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Shield className="h-3 w-3" />
                <span>Protecting {guardian.protectees} users</span>
              </div>
              <div className="text-xs text-muted-foreground">{guardian.lastActive}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
