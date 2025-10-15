"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { User, Settings, Bell, Shield, CreditCard, HelpCircle, LogOut, ChevronRight } from "lucide-react"

export function ProfileTab() {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground">Kullanıcı Adı</h3>
            <p className="text-sm text-muted-foreground">kullanici@email.com</p>
          </div>
          <Button variant="outline" size="sm">
            Düzenle
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Toplam Kazanç</p>
            <p className="text-sm font-bold text-success">+$3,245</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Takip Edilen</p>
            <p className="text-sm font-bold text-foreground">3</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">İşlem Sayısı</p>
            <p className="text-sm font-bold text-foreground">127</p>
          </div>
        </div>
      </Card>

      {/* Account Settings */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Hesap Ayarları</h3>
        <Card className="bg-card border-border divide-y divide-border">
          <button className="w-full p-4 flex items-center gap-3 hover:bg-secondary/50 transition-colors">
            <Settings className="w-5 h-5 text-muted-foreground" />
            <span className="flex-1 text-left text-sm text-foreground">Genel Ayarlar</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="w-full p-4 flex items-center gap-3 hover:bg-secondary/50 transition-colors">
            <CreditCard className="w-5 h-5 text-muted-foreground" />
            <span className="flex-1 text-left text-sm text-foreground">Ödeme Yöntemleri</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="w-full p-4 flex items-center gap-3 hover:bg-secondary/50 transition-colors">
            <Shield className="w-5 h-5 text-muted-foreground" />
            <span className="flex-1 text-left text-sm text-foreground">Güvenlik</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        </Card>
      </div>

      {/* Notifications */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Bildirimler</h3>
        <Card className="bg-card border-border divide-y divide-border">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">İşlem Bildirimleri</span>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">Fiyat Uyarıları</span>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">Trader Güncellemeleri</span>
            </div>
            <Switch />
          </div>
        </Card>
      </div>

      {/* Support */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Destek</h3>
        <Card className="bg-card border-border divide-y divide-border">
          <button className="w-full p-4 flex items-center gap-3 hover:bg-secondary/50 transition-colors">
            <HelpCircle className="w-5 h-5 text-muted-foreground" />
            <span className="flex-1 text-left text-sm text-foreground">Yardım Merkezi</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="w-full p-4 flex items-center gap-3 hover:bg-secondary/50 transition-colors">
            <LogOut className="w-5 h-5 text-destructive" />
            <span className="flex-1 text-left text-sm text-destructive">Çıkış Yap</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        </Card>
      </div>

      {/* App Info */}
      <div className="text-center text-xs text-muted-foreground pb-4">
        <p>ForexCopy v1.0.0</p>
        <p className="mt-1">© 2025 Tüm hakları saklıdır</p>
      </div>
    </div>
  )
}
