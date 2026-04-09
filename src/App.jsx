import Header from './components/Header'
import Bio from './components/Bio'
import Recognition from './components/Recognition'
import MediaSection from './components/MediaSection'
import SpeakingTopics from './components/SpeakingTopics'
import Footer from './components/Footer'
import { podcasts, articles, press, speaking } from './data'

export default function App() {
  return (
    <>
      <div className="gradient-bar" />

      <img
        className="bg-moon"
        src="/sabbamediakit/safar-moon-eye.png"
        alt=""
        aria-hidden="true"
      />

      <div className="page">
        <Header />
        <hr className="divider" />
        <Bio />
        <Recognition />

        <MediaSection title="Podcast Appearances" items={podcasts} />
        <MediaSection title="Published Articles" items={articles} />
        <MediaSection title="Press & Features" items={press} />
        <MediaSection title="Speaking, Keynotes & Panels" items={speaking} />
        <SpeakingTopics />
        <Footer />
      </div>
    </>
  )
}
