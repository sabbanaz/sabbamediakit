import { useState } from 'react'
import Header from './components/Header'
import Bio from './components/Bio'
import Recognition from './components/Recognition'
import MediaSection from './components/MediaSection'
import SpeakingTopics from './components/SpeakingTopics'
import Footer from './components/Footer'
import Modal from './components/Modal'
import { podcasts, articles, press, speaking } from './data'

export default function App() {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <>
      <div className="gradient-bar" />
      <div className="app-wrapper">
        <Header />
        <Bio />
        <Recognition />

        <MediaSection
          title="Podcast Appearances"
          items={podcasts}
          onCardClick={setActiveItem}
        />
        <MediaSection
          title="Published Articles"
          items={articles}
          onCardClick={setActiveItem}
        />
        <MediaSection
          title="Press & Features"
          items={press}
          onCardClick={setActiveItem}
        />
        <MediaSection
          title="Speaking, Keynotes & Panels"
          items={speaking}
          onCardClick={setActiveItem}
        />
        <SpeakingTopics />
        <Footer />
      </div>

      {activeItem && (
        <Modal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </>
  )
}
