"use client"

import { X, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function NavMenu({ isOpen, onClose }: NavMenuProps) {
  const menuItems = [
    { label: "Home", color: "text-foreground" },
    { label: "Health Updates", color: "text-red-500" },
    { label: "First Aid", color: "text-foreground" },
    { label: "Nutrition", color: "text-foreground" },
    { label: "Mental Health", color: "text-foreground" },
    { label: "Hygiene & Safety", color: "text-foreground" },
    { label: "Wellness", color: "text-foreground" },
    { label: "Personal Tracker", color: "text-purple-500" },
    { label: "Take a Quiz!", color: "text-foreground" },
    { label: "Suggestions", color: "text-foreground" },
    { label: "Achievement Badges", color: "text-foreground" },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="w-64 bg-white shadow-lg flex flex-col h-full overflow-y-auto">
        {/* Header with logo and close button */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-300 rounded-full flex items-center justify-center">
              <div className="text-white text-lg">⚕️</div>
            </div>
            <span className="font-bold text-foreground">HEALTHLINK</span>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close menu">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 px-6 py-6 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`block py-2 font-medium hover:opacity-70 transition-opacity ${item.color}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Auth buttons at bottom */}
        <div className="p-6 border-t space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
          <Button className="w-full bg-gray-700 hover:bg-gray-800 text-white rounded-full font-medium">Log In</Button>
          <Button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full font-medium">
            Sign Up
          </Button>
        </div>
      </div>

      <div className="flex-1 bg-black/50" onClick={onClose} aria-hidden="true" />
    </div>
  )
}
