import { useState } from 'react'

export default function Thumbnail({ item, size = 48 }) {
  const [failed, setFailed] = useState(false)
  const logoUrl = `https://logo.clearbit.com/${item.thumbDomain}`
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${item.thumbDomain}&sz=128`

  const fallbackStyle = {
    width: size,
    height: size,
    borderRadius: 12,
    background: item.color || '#6B7280',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: size * 0.36,
    letterSpacing: 1,
    flexShrink: 0,
  }

  if (failed) {
    return <div style={fallbackStyle}>{item.initial}</div>
  }

  return (
    <img
      src={logoUrl}
      alt={`${item.name} logo`}
      width={size}
      height={size}
      className="thumb-img"
      onError={(e) => {
        if (e.target.src === logoUrl) {
          e.target.src = faviconUrl
        } else {
          setFailed(true)
        }
      }}
    />
  )
}
