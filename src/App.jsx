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

      {/* Atmospheric background */}
      <div className="atmosphere">
        <img
          className="atmosphere__watermark"
          src="/sabbamediakit/safar-moon-eye.png"
          alt=""
          aria-hidden="true"
        />
        <div className="atmosphere__orb atmosphere__orb--1" />
        <div className="atmosphere__orb atmosphere__orb--2" />
        <div className="atmosphere__orb atmosphere__orb--3" />
      </div>

      {/* Floating toolbar */}
      <nav className="toolbar" aria-label="Quick navigation">
        <button className="toolbar__btn toolbar__btn--active" aria-label="Home" title="Home">
          ⌂
        </button>
        <button className="toolbar__btn" aria-label="Podcasts" title="Podcasts">
          🎙
        </button>
        <button className="toolbar__btn" aria-label="Articles" title="Articles">
          ✎
        </button>
        <button className="toolbar__btn" aria-label="Contact" title="Contact">
          ✉
        </button>
      </nav>

      {/* Main glass shell */}
      <div className="glass-shell">
        <div className="glass-main">
          <Header />
          <hr className="glass-divider" />
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
      </div>

      {activeItem && (
        <Modal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </>
  )
}
