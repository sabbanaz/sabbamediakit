import { speakingTopics } from '../data'

export default function SpeakingTopics() {
  return (
    <section className="section">
      <h2 className="section__title">
        Available Speaking Topics
        <span className="section__count">{speakingTopics.length}</span>
      </h2>
      <div className="topics-grid">
        {speakingTopics.map((topic) => (
          <div
            key={topic.label}
            className="topic-chip"
            style={{ borderLeftColor: topic.color, borderLeftWidth: 4, borderLeftStyle: 'solid' }}
          >
            {topic.label}
          </div>
        ))}
      </div>
    </section>
  )
}
