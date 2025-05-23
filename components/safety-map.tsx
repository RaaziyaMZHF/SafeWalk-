"use client"

import { useEffect, useRef, useState } from "react"
import { AlertTriangle, MapPin, Navigation } from "lucide-react"

export function SafetyMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-md border bg-muted/20" ref={mapRef}>
      {!isLoaded ? (
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <Navigation className="h-8 w-8 animate-pulse text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Loading map...</p>
          </div>
        </div>
      ) : (
        <>
          <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
            <div className="flex items-center gap-2 rounded-full bg-background px-3 py-1 text-xs shadow-md">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              Safe Zone
            </div>
            <div className="flex items-center gap-2 rounded-full bg-background px-3 py-1 text-xs shadow-md">
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              Caution Zone
            </div>
            <div className="flex items-center gap-2 rounded-full bg-background px-3 py-1 text-xs shadow-md">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              High Alert Zone
            </div>
          </div>
          <div className="absolute inset-0 bg-slate-200">
            {/* Map Placeholder with Incident Markers */}
            <div className="absolute left-[20%] top-[30%]">
              <div className="relative">
                <MapPin className="h-6 w-6 text-green-600" />
                <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-100 text-[10px] font-bold text-green-600">
                  8
                </div>
              </div>
            </div>
            <div className="absolute left-[45%] top-[60%]">
              <div className="relative">
                <MapPin className="h-6 w-6 text-yellow-600" />
                <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-100 text-[10px] font-bold text-yellow-600">
                  3
                </div>
              </div>
            </div>
            <div className="absolute left-[70%] top-[40%]">
              <div className="relative animate-pulse">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-100 text-[10px] font-bold text-red-600">
                  1
                </div>
              </div>
            </div>
            <div className="absolute left-[30%] top-[50%]">
              <div className="relative">
                <MapPin className="h-6 w-6 text-green-600" />
                <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-100 text-[10px] font-bold text-green-600">
                  5
                </div>
              </div>
            </div>
            {/* Grid lines for map */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 opacity-10">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={`col-${i}`} className="border-r border-black"></div>
              ))}
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`row-${i}`} className="border-b border-black"></div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
