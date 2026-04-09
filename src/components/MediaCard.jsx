const badgeClass = (type) => {
  const map = {
    Podcast: 'badge--podcast',
    Article: 'badge--article',
    Press: 'badge--press',
    Keynote: 'badge--keynote',
    Panel: 'badge--panel',
    Speaker: 'badge--speaker',
    Video: 'badge--video',
    Lecture: 'badge--lecture',
    'Coming Soon': 'badge--coming-soon',
  }
  return map[type] || ''
}

export default function MediaCard({ item, onClick }) {
  return (
    <div
      className="media-card"
      tabIndex={0}
      role="button"
      aria-label={`View details for ${item.name}`}
      onClick={() => onClick(item)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick(item)
        }
      }}
    >
      <div className="media-card__header">
        <span className="media-card__emoji" aria-hidden="true">
          {item.emoji}
        </span>
        <div className="media-card__title-wrap">
          <div className="media-card__name">{item.name}</div>
          {item.episode && (
            <div className="media-card__episode">{item.episode}</div>
          )}
        </div>
        <span className={`media-card__badge ${badgeClass(item.type)}`}>
          {item.type}
        </span>
      </div>
      <div className="media-card__detail">{item.detail}</div>
    </div>
  )
}
