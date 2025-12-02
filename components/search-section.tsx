"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function SearchSection() {
  return (
    <div className="bg-sky-300 px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search health topics, symptoms, or treatments..."
            className="pl-12 py-3 bg-white rounded-full border-0 shadow-sm text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>
    </div>
  )
}
