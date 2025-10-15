"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, Activity, Shield, Zap } from "lucide-react"
import { PortfolioChart } from "@/components/portfolio-chart"

const subscriptions = [
  {
    id: 1,
    accountType: "Düşük Risk",
    icon: Shield,
    amount: 5000,
    profit: 425,
    profitPercent: 8.5,
    activeSignals: 4,
    status: "active",
    color: "success",
  },
  {
    id: 2,
    accountType: "Orta Risk",
    icon: Activity,
    amount: 3000,
    profit: 456,
    profitPercent: 15.2,
    activeSignals: 6,
    status: "active",
    color: "primary",
  },
  {
    id: 3,
    accountType: "Yüksek Risk",
    icon: Zap,
    amount: 2000,
    profit: 496,
    profitPercent: 24.8,
    activeSignals: 8,
    status: "active",
    color: "destructive",
  },
]

const recentTransactions = [
  {
    id: 1,
    pair: "EUR/USD",
    type: "BUY",
    amount: 0.5,
    profit: 45.2,
    time: "2 saat önce",
    accountType: "Orta Risk",
  },
  {
    id: 2,
    pair: "GBP/JPY",
    type: "SELL",
    amount: 0.3,
    profit: -12.5,
    time: "5 saat önce",
    accountType: "Yüksek Risk",
  },
  {
    id: 3,
    pair: "USD/CHF",
    type: "BUY",
    amount: 0.8,
    profit: 67.8,
    time: "1 gün önce",
    accountType: "Düşük Risk",
  },
]

export function PortfolioTab() {
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
            <span className="text-sm font-semibold">+$1,377.00</span>
          </div>
          <span className="text-sm text-muted-foreground">+12.4% toplam getiri</span>
        </div>
      </Card>

      {/* Performance Chart */}
      <Card className="p-4 bg-card border-border">
        <h3 className="text-sm font-semibold text-foreground mb-4">Performans Grafiği</h3>
        <PortfolioChart />
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4 bg-card border-border">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-primary" />
            <p className="text-xs text-muted-foreground">Aktif Sinyaller</p>
          </div>
          <p className="text-2xl font-bold text-foreground">18</p>
        </Card>
        <Card className="p-4 bg-card border-border">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <p className="text-xs text-muted-foreground">Başarı Oranı</p>
          </div>
          <p className="text-2xl font-bold text-foreground">75%</p>
        </Card>
      </div>

      {/* Active Subscriptions */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Aktif Abonelikler</h3>
          <Button variant="ghost" size="sm" className="text-xs">
            Yönet
          </Button>
        </div>
        {subscriptions.map((sub) => {
          const Icon = sub.icon
          return (
            <Card key={sub.id} className="p-4 bg-card border-border">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    sub.color === "success"
                      ? "bg-success/10"
                      : sub.color === "primary"
                        ? "bg-primary/10"
                        : "bg-destructive/10"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      sub.color === "success"
                        ? "text-success"
                        : sub.color === "primary"
                          ? "text-primary"
                          : "text-destructive"
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground text-sm">{sub.accountType}</h4>
                  <p className="text-xs text-muted-foreground">Yatırım: ${sub.amount.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-semibold ${sub.profit >= 0 ? "text-success" : "text-destructive"}`}>
                    {sub.profit >= 0 ? "+" : ""}${sub.profit.toFixed(2)}
                  </p>
                  <p className={`text-xs ${sub.profitPercent >= 0 ? "text-success" : "text-destructive"}`}>
                    {sub.profitPercent >= 0 ? "+" : ""}
                    {sub.profitPercent}%
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  {sub.activeSignals} aktif sinyal
                </Badge>
                <Badge
                  variant="outline"
                  className={`text-xs ${
                    sub.color === "success"
                      ? "border-success text-success"
                      : sub.color === "primary"
                        ? "border-primary text-primary"
                        : "border-destructive text-destructive"
                  }`}
                >
                  {sub.status === "active" ? "Aktif" : "Pasif"}
                </Badge>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Recent Transactions */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Son İşlemler</h3>
        {recentTransactions.map((transaction) => (
          <Card key={transaction.id} className="p-4 bg-card border-border">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Badge variant={transaction.type === "BUY" ? "default" : "secondary"} className="text-xs">
                  {transaction.type}
                </Badge>
                <span className="font-semibold text-foreground text-sm">{transaction.pair}</span>
              </div>
              <span
                className={`text-sm font-semibold ${transaction.profit >= 0 ? "text-success" : "text-destructive"}`}
              >
                {transaction.profit >= 0 ? "+" : ""}${transaction.profit.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{transaction.accountType}</span>
              <span>{transaction.time}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
