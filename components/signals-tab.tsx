"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, Clock, CheckCircle2 } from "lucide-react"

const activeSignals = [
  {
    id: 1,
    pair: "EUR/USD",
    type: "BUY",
    entry: 1.0845,
    currentPrice: 1.0872,
    target: 1.092,
    stopLoss: 1.08,
    accountType: "Orta Risk",
    time: "15 dakika önce",
    profit: 27.0,
    profitPercent: 2.49,
  },
  {
    id: 2,
    pair: "GBP/JPY",
    type: "SELL",
    entry: 189.45,
    currentPrice: 189.12,
    target: 188.2,
    stopLoss: 190.1,
    accountType: "Yüksek Risk",
    time: "1 saat önce",
    profit: 33.0,
    profitPercent: 1.74,
  },
  {
    id: 3,
    pair: "USD/CHF",
    type: "BUY",
    entry: 0.892,
    currentPrice: 0.8905,
    target: 0.898,
    stopLoss: 0.888,
    accountType: "Düşük Risk",
    time: "3 saat önce",
    profit: -15.0,
    profitPercent: -1.68,
  },
  {
    id: 4,
    pair: "AUD/USD",
    type: "BUY",
    entry: 0.6542,
    currentPrice: 0.6558,
    target: 0.659,
    stopLoss: 0.652,
    accountType: "Orta Risk",
    time: "5 saat önce",
    profit: 16.0,
    profitPercent: 2.45,
  },
]

const closedSignals = [
  {
    id: 1,
    pair: "EUR/GBP",
    type: "SELL",
    entry: 0.8567,
    exit: 0.8523,
    target: 0.852,
    stopLoss: 0.86,
    accountType: "Düşük Risk",
    closeTime: "2 saat önce",
    profit: 44.0,
    profitPercent: 5.14,
    status: "win",
  },
  {
    id: 2,
    pair: "USD/JPY",
    type: "BUY",
    entry: 149.85,
    exit: 149.45,
    target: 150.5,
    stopLoss: 149.4,
    accountType: "Yüksek Risk",
    closeTime: "1 gün önce",
    profit: -40.0,
    profitPercent: -2.67,
    status: "loss",
  },
  {
    id: 3,
    pair: "NZD/USD",
    type: "BUY",
    entry: 0.5923,
    exit: 0.5967,
    target: 0.597,
    stopLoss: 0.59,
    accountType: "Orta Risk",
    closeTime: "1 gün önce",
    profit: 44.0,
    profitPercent: 7.43,
    status: "win",
  },
]

export function SignalsTab() {
  const [filter, setFilter] = useState<"all" | "low" | "medium" | "high">("all")

  const filteredActiveSignals = activeSignals.filter((signal) => {
    if (filter === "all") return true
    if (filter === "low") return signal.accountType === "Düşük Risk"
    if (filter === "medium") return signal.accountType === "Orta Risk"
    if (filter === "high") return signal.accountType === "Yüksek Risk"
    return true
  })

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="p-3 bg-card border-border">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-3 h-3 text-primary" />
            <p className="text-xs text-muted-foreground">Aktif</p>
          </div>
          <p className="text-xl font-bold text-foreground">{activeSignals.length}</p>
        </Card>
        <Card className="p-3 bg-card border-border">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-3 h-3 text-success" />
            <p className="text-xs text-muted-foreground">Kazanan</p>
          </div>
          <p className="text-xl font-bold text-success">{closedSignals.filter((s) => s.status === "win").length}</p>
        </Card>
        <Card className="p-3 bg-card border-border">
          <div className="flex items-center gap-2 mb-1">
            <TrendingDown className="w-3 h-3 text-destructive" />
            <p className="text-xs text-muted-foreground">Kaybeden</p>
          </div>
          <p className="text-xl font-bold text-destructive">
            {closedSignals.filter((s) => s.status === "loss").length}
          </p>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="active">Aktif Sinyaller</TabsTrigger>
          <TabsTrigger value="closed">Kapanan Sinyaller</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4 mt-4">
          {/* Filter Buttons */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
              Tümü
            </Button>
            <Button variant={filter === "low" ? "default" : "outline"} size="sm" onClick={() => setFilter("low")}>
              Düşük Risk
            </Button>
            <Button variant={filter === "medium" ? "default" : "outline"} size="sm" onClick={() => setFilter("medium")}>
              Orta Risk
            </Button>
            <Button variant={filter === "high" ? "default" : "outline"} size="sm" onClick={() => setFilter("high")}>
              Yüksek Risk
            </Button>
          </div>

          {/* Active Signals List */}
          <div className="space-y-3">
            {filteredActiveSignals.map((signal) => (
              <Card key={signal.id} className="p-4 bg-card border-border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Badge variant={signal.type === "BUY" ? "default" : "secondary"} className="text-xs">
                      {signal.type}
                    </Badge>
                    <span className="font-semibold text-foreground">{signal.pair}</span>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-semibold ${signal.profit >= 0 ? "text-success" : "text-destructive"}`}>
                      {signal.profit >= 0 ? "+" : ""}${signal.profit.toFixed(2)}
                    </p>
                    <p className={`text-xs ${signal.profitPercent >= 0 ? "text-success" : "text-destructive"}`}>
                      {signal.profitPercent >= 0 ? "+" : ""}
                      {signal.profitPercent.toFixed(2)}%
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Giriş / Güncel</p>
                    <p className="text-sm text-foreground font-medium">
                      {signal.entry} / {signal.currentPrice}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Hedef / Stop</p>
                    <p className="text-sm font-medium">
                      <span className="text-success">{signal.target}</span> /{" "}
                      <span className="text-destructive">{signal.stopLoss}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {signal.accountType}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{signal.time}</span>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="closed" className="space-y-3 mt-4">
          {closedSignals.map((signal) => (
            <Card key={signal.id} className="p-4 bg-card border-border">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Badge variant={signal.type === "BUY" ? "default" : "secondary"} className="text-xs">
                    {signal.type}
                  </Badge>
                  <span className="font-semibold text-foreground">{signal.pair}</span>
                  {signal.status === "win" ? (
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-destructive" />
                  )}
                </div>
                <div className="text-right">
                  <p className={`text-sm font-semibold ${signal.profit >= 0 ? "text-success" : "text-destructive"}`}>
                    {signal.profit >= 0 ? "+" : ""}${signal.profit.toFixed(2)}
                  </p>
                  <p className={`text-xs ${signal.profitPercent >= 0 ? "text-success" : "text-destructive"}`}>
                    {signal.profitPercent >= 0 ? "+" : ""}
                    {signal.profitPercent.toFixed(2)}%
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Giriş / Çıkış</p>
                  <p className="text-sm text-foreground font-medium">
                    {signal.entry} / {signal.exit}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Hedef / Stop</p>
                  <p className="text-sm font-medium">
                    <span className="text-success">{signal.target}</span> /{" "}
                    <span className="text-destructive">{signal.stopLoss}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  {signal.accountType}
                </Badge>
                <span className="text-xs text-muted-foreground">{signal.closeTime}</span>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
