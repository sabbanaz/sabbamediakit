import { useState } from 'react'

export default function Thumbnail({ item, size = 40 }) {
  const [failed, setFailed] = useState(false)

  if (!item.thumbDomain || !item.url) {
    return (
      <div className="emoji-fallback">
        {item.emoji || item.initial}
      </div>
    )
  }

  const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${item.thumbDomain}`

  if (failed) {
    return (
      <div className="emoji-fallback">
        {item.emoji || item.initial}
      </div>
    )
  }

  return (
    <img
      src={faviconUrl}
      alt={`${item.name} favicon`}
      width={size}
      height={size}
      style={{ objectFit: 'contain', display: 'block', width: size, height: size }}
      onError={() => setFailed(true)}
    />
  )
}
