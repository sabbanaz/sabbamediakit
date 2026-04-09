import MediaCard from './MediaCard'

export default function MediaSection({ title, items, onCardClick }) {
  return (
    <section className="section">
      <h2 className="section__title">
        {title}
        <span className="section__count">{items.length}</span>
      </h2>
      <div className="card-grid">
        {items.map((item) => (
          <MediaCard key={item.id} item={item} onClick={onCardClick} />
        ))}
      </div>
    </section>
  )
}
