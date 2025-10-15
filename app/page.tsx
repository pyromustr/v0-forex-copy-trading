"use client"

import { useState } from "react"
import { HomeTab } from "@/components/home-tab"
import { SignalsTab } from "@/components/signals-tab"
import { PortfolioTab } from "@/components/portfolio-tab"
import { ProfileTab } from "@/components/profile-tab"
import { Home, TrendingUp, Wallet, User } from "lucide-react"

export default function ForexCopyTradingApp() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="h-screen flex flex-col bg-background dark">
      {/* Header - Sabit */}
      <header className="flex-none bg-card border-b border-border px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">ForexCopy</h1>
            <p className="text-xs text-muted-foreground">Sinyal Takip Platformu</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Bakiye</p>
              <p className="text-sm font-semibold text-foreground">$12,450.00</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Scrollable */}
      <main className="flex-1 overflow-y-auto px-4 py-6">
        {activeTab === "home" && <HomeTab />}
        {activeTab === "signals" && <SignalsTab />}
        {activeTab === "portfolio" && <PortfolioTab />}
        {activeTab === "profile" && <ProfileTab />}
      </main>

      {/* Bottom Navigation - Sabit */}
      <nav className="flex-none bg-card border-t border-border">
        <div className="flex items-center justify-around px-4 py-3">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === "home" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Anasayfa</span>
          </button>
          <button
            onClick={() => setActiveTab("signals")}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === "signals" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            <span className="text-xs font-medium">Sinyaller</span>
          </button>
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === "portfolio" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Wallet className="w-5 h-5" />
            <span className="text-xs font-medium">Portföy</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === "profile" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs font-medium">Profil</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
