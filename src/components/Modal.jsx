import { useEffect, useRef } from 'react'

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

const actionLabel = (type) => {
  if (type === 'Podcast') return 'Listen'
  if (type === 'Video') return 'Watch'
  return 'View'
}

export default function Modal({ item, onClose }) {
  const closeRef = useRef(null)
  const modalRef = useRef(null)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
    >
      <div className="modal" ref={modalRef}>
        <div className="modal__icon" aria-hidden="true">
          {item.emoji}
        </div>
        <div className="modal__name">{item.name}</div>
        {item.episode && <div className="modal__episode">{item.episode}</div>}
        <span className={`modal__badge ${badgeClass(item.type)}`}>
          {item.type}
        </span>
        <div className="modal__detail">{item.detail}</div>
        <p className="modal__description">{item.description}</p>
        <div className="modal__actions">
          {item.url && (
            <a
              className="btn btn--primary"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {actionLabel(item.type)} &rarr;
            </a>
          )}
          <button className="btn btn--ghost" onClick={onClose} ref={closeRef}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
