"use client"

export function MiniChart() {
  const data = [
    { value: 100 },
    { value: 105 },
    { value: 103 },
    { value: 110 },
    { value: 108 },
    { value: 115 },
    { value: 112 },
    { value: 118 },
    { value: 120 },
    { value: 117 },
    { value: 122 },
    { value: 125 },
    { value: 123 },
    { value: 128 },
    { value: 130 },
  ]

  const max = Math.max(...data.map((d) => d.value))
  const min = Math.min(...data.map((d) => d.value))
  const range = max - min

  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * 100
      const y = 100 - ((d.value - min) / range) * 100
      return `${x},${y}`
    })
    .join(" ")

  return (
    <div className="w-full h-32 bg-secondary/30 rounded-lg p-2">
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline points={`0,100 ${points} 100,100`} fill="url(#chartGradient)" stroke="none" />
        <polyline
          points={points}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}
