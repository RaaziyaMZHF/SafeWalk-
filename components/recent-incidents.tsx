import { AlertCircle, AlertTriangle, Clock, MapPin } from "lucide-react"

export function RecentIncidents() {
  const incidents = [
    {
      id: 1,
      type: "emergency",
      location: "Oak Street & 5th Avenue",
      time: "10 minutes ago",
      description: "User triggered emergency alert",
      status: "resolved",
    },
    {
      id: 2,
      type: "suspicious",
      location: "Central Park West",
      time: "25 minutes ago",
      description: "Suspicious activity reported",
      status: "investigating",
    },
    {
      id: 3,
      type: "timer",
      location: "Main Street & Broadway",
      time: "45 minutes ago",
      description: "Safety timer expired without check-in",
      status: "resolved",
    },
    {
      id: 4,
      type: "community",
      location: "Riverside Drive",
      time: "1 hour ago",
      description: "Community alert: Poor lighting reported",
      status: "pending",
    },
  ]

  return (
    <div className="space-y-4">
      {incidents.map((incident) => (
        <div key={incident.id} className="flex items-start gap-4 rounded-lg border p-3">
          <div
            className={`rounded-full p-2 ${
              incident.type === "emergency"
                ? "bg-red-100 text-red-600"
                : incident.type === "suspicious"
                  ? "bg-amber-100 text-amber-600"
                  : incident.type === "timer"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-slate-100 text-slate-600"
            }`}
          >
            {incident.type === "emergency" ? (
              <AlertCircle className="h-4 w-4" />
            ) : incident.type === "suspicious" ? (
              <AlertTriangle className="h-4 w-4" />
            ) : incident.type === "timer" ? (
              <Clock className="h-4 w-4" />
            ) : (
              <MapPin className="h-4 w-4" />
            )}
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">
                {incident.type.charAt(0).toUpperCase() + incident.type.slice(1)} Alert
              </p>
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
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
            <p className="text-xs text-muted-foreground">{incident.description}</p>
            <div className="flex items-center gap-4 pt-1 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {incident.location}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {incident.time}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
