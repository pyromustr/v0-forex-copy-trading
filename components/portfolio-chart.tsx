"use client"

export function PortfolioChart() {
  const data = [
    { value: 10000 },
    { value: 10200 },
    { value: 10150 },
    { value: 10400 },
    { value: 10350 },
    { value: 10600 },
    { value: 10800 },
    { value: 10700 },
    { value: 11000 },
    { value: 10900 },
    { value: 11200 },
    { value: 11400 },
    { value: 11300 },
    { value: 11600 },
    { value: 11800 },
    { value: 12000 },
    { value: 11900 },
    { value: 12200 },
    { value: 12450 },
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
    <div className="w-full h-48 bg-secondary/30 rounded-lg p-3">
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="portfolioGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--success))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--success))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline points={`0,100 ${points} 100,100`} fill="url(#portfolioGradient)" stroke="none" />
        <polyline
          points={points}
          fill="none"
          stroke="hsl(var(--success))"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}
