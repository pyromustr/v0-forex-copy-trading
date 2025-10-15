"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Activity, DollarSign } from "lucide-react"

const accountTypes = [
  {
    id: 1,
    name: "Düşük Risk",
    description: "Konservatif strateji, düşük volatilite",
    monthlyReturn: 8.5,
    winRate: 85,
    activeSignals: 12,
    color: "success",
    subscribers: 342,
  },
  {
    id: 2,
    name: "Orta Risk",
    description: "Dengeli yaklaşım, orta getiri",
    monthlyReturn: 15.2,
    winRate: 75,
    activeSignals: 18,
    color: "primary",
    subscribers: 567,
  },
  {
    id: 3,
    name: "Yüksek Risk",
    description: "Agresif strateji, yüksek getiri potansiyeli",
    monthlyReturn: 24.8,
    winRate: 65,
    activeSignals: 24,
    color: "destructive",
    subscribers: 198,
  },
]

const recentSignals = [
  {
    id: 1,
    pair: "EUR/USD",
    type: "BUY",
    entry: 1.0845,
    target: 1.092,
    stopLoss: 1.08,
    accountType: "Orta Risk",
    time: "15 dakika önce",
    status: "active",
  },
  {
    id: 2,
    pair: "GBP/JPY",
    type: "SELL",
    entry: 189.45,
    target: 188.2,
    stopLoss: 190.1,
    accountType: "Yüksek Risk",
    time: "1 saat önce",
    status: "active",
  },
  {
    id: 3,
    pair: "USD/CHF",
    type: "BUY",
    entry: 0.892,
    target: 0.898,
    stopLoss: 0.888,
    accountType: "Düşük Risk",
    time: "2 saat önce",
    status: "closed",
    profit: 45.2,
  },
]

export function HomeTab() {
  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Toplam Portföy Değeri</p>
            <h2 className="text-3xl font-bold text-foreground">$12,450.00</h2>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-success">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">+$1,047.00</span>
          </div>
          <span className="text-sm text-muted-foreground">+9.2% bu ay</span>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4 bg-card border-border">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-primary" />
            <p className="text-xs text-muted-foreground">Aktif Sinyaller</p>
          </div>
          <p className="text-2xl font-bold text-foreground">8</p>
        </Card>
        <Card className="p-4 bg-card border-border">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <p className="text-xs text-muted-foreground">Başarı Oranı</p>
          </div>
          <p className="text-2xl font-bold text-foreground">73%</p>
        </Card>
      </div>

      {/* Account Types */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground">Hesap Türleri</h2>
        {accountTypes.map((account) => (
          <Card key={account.id} className="p-4 bg-card border-border">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-foreground mb-1">{account.name}</h3>
                <p className="text-xs text-muted-foreground">{account.description}</p>
              </div>
              <Badge
                variant="outline"
                className={`${
                  account.color === "success"
                    ? "border-success text-success"
                    : account.color === "primary"
                      ? "border-primary text-primary"
                      : "border-destructive text-destructive"
                }`}
              >
                {account.subscribers} abone
              </Badge>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div>
                <p className="text-xs text-muted-foreground">Aylık Getiri</p>
                <p className="text-sm font-semibold text-success">+{account.monthlyReturn}%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Başarı</p>
                <p className="text-sm font-semibold text-foreground">{account.winRate}%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Aktif Sinyal</p>
                <p className="text-sm font-semibold text-foreground">{account.activeSignals}</p>
              </div>
            </div>
            <Button className="w-full" size="sm">
              Abone Ol
            </Button>
          </Card>
        ))}
      </div>

      {/* Recent Signals */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Son Sinyaller</h3>
          <Button variant="ghost" size="sm" className="text-xs">
            Tümünü Gör
          </Button>
        </div>
        {recentSignals.map((signal) => (
          <Card key={signal.id} className="p-4 bg-card border-border">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Badge variant={signal.type === "BUY" ? "default" : "secondary"} className="text-xs">
                  {signal.type}
                </Badge>
                <span className="font-semibold text-foreground text-sm">{signal.pair}</span>
              </div>
              {signal.status === "closed" && signal.profit && (
                <span className={`text-sm font-semibold ${signal.profit >= 0 ? "text-success" : "text-destructive"}`}>
                  {signal.profit >= 0 ? "+" : ""}${signal.profit.toFixed(2)}
                </span>
              )}
            </div>
            <div className="grid grid-cols-3 gap-2 mb-2 text-xs">
              <div>
                <p className="text-muted-foreground">Giriş</p>
                <p className="text-foreground font-medium">{signal.entry}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Hedef</p>
                <p className="text-success font-medium">{signal.target}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Stop Loss</p>
                <p className="text-destructive font-medium">{signal.stopLoss}</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{signal.accountType}</span>
              <span>{signal.time}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
