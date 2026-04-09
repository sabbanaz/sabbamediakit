import Thumbnail from './Thumbnail'

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
  const Tag = item.url ? 'a' : 'div'
  const linkProps = item.url
    ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Tag
      className="media-item"
      {...linkProps}
      onClick={(e) => {
        e.preventDefault()
        onClick(item)
      }}
    >
      <div className="media-item__thumb">
        <Thumbnail item={item} size={40} />
      </div>
      <div className="media-item__info">
        <div className="media-item__name">{item.name}</div>
        <div className="media-item__detail">
          {item.episode ? `${item.episode} — ` : ''}{item.detail}
        </div>
      </div>
      <span className={`media-item__badge ${badgeClass(item.type)}`}>
        {item.type}
      </span>
      <span className="media-item__arrow">&rarr;</span>
    </Tag>
  )
}
