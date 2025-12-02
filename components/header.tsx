"use client"

import { Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavMenu from "@/components/nav-menu"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-sky-300 px-6 md:px-12 py-4 flex items-center justify-between">
        <Button variant="ghost" size="icon" className="text-foreground" onClick={() => setIsMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </Button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center">
            <div className="text-white text-lg">⚕️</div>
          </div>
          <span className="font-bold text-foreground hidden sm:inline">HEALTHLINK</span>
        </div>

        <Button variant="ghost" className="gap-2 text-foreground">
          <span>Profile</span>
          <User className="w-5 h-5" />
        </Button>
      </header>

      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
