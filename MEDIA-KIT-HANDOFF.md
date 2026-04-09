# Sabba Nazhand — Interactive Media Kit
## Claude Code Handoff Brief

---

## What This Is

An interactive media kit for Sabba Nazhand (Founder & CEO, Safar). It should be a React app (or HTML/CSS/JS) where every podcast, article, press feature, and speaking gig is a clickable card that opens a **modal popup** with full details and a link-out button.

## Design System: Perspective Design (TypeUI)

Apply the full Perspective Design spec below. Key requirements:

- **Typography**: Poppins (body), Oswald (display/headers), JetBrains Mono (mono)
- **Weights**: 100–900 available
- **Scale**: 12/14/16/20/24/32
- **Spacing scale**: 4/8/12/16/24/32
- **Color tokens**: primary=#00BD7D, secondary=#00BD7D, success=#16A34A, warning=#D97706, danger=#DC2626, surface=#FFFFFF, text=#111827
- **Aesthetic**: Spatial depth — isometric views, vanishing points, layered elements, perspective transforms, 3D-like depth
- **Components**: Cards with hover lift (perspective transforms), modals with spatial depth (rotateX, layered shadows, backdrop blur), badges/chips for type labels, buttons with explicit states (default/hover/focus-visible/active/disabled)
- **WCAG 2.2 AA**, keyboard-first interactions, visible focus states
- **All component states**: default, hover, focus-visible, active, disabled, loading, error

### Override the current color palette with Safar brand:
- Background: dark slate (#1e2430 range — adjustable)
- Cards: #2a3040 range
- Borders: #3a4558 range
- Text: cream (#f5f0e8), dimmed cream (#c8c0b4), muted (#8a9aaa)
- Accent terracotta: #c4613a
- Accent gold: #b8943e / #e8c878
- Accent sage: #6b8c5e
- Gradient: linear-gradient(135deg, #c4613a 0%, #b8943e 40%, #6b8c5e 100%)

---

## Assets

Two image files are included:

1. **sabba-headshot.png** — Full professional photo of Sabba. Use in the header area, left side.
2. **safar-moon-eye.png** — Moon phases with orange Safar geometric eye motif. Use as a subtle background watermark (low opacity, screen blend mode, centered behind top content).

---

## Layout Structure

### Top gradient bar
4px, linear-gradient(90deg, #c4613a, #b8943e, #6b8c5e)

### Header (3-column grid)
- LEFT: Sabba's headshot photo (full shot, ~200px wide, fade-to-background on right edge)
- CENTER: "SABBA NAZHAND" (Oswald, large) + subtitle "Founder & CEO, Safar — The First Operating System for Human Transformation" (Poppins)
- RIGHT: "MEDIA KIT" label (Oswald, gold, uppercase tracking) + links: joinsafar.com, linkedin.com/in/sabbanazhand, pr@joinsafar.com

### Bio section
Full paragraph (see copy below), followed by pull quote in Cormorant Garamond italic, gold, with left border accent.

### Recognition banner
"Featured" badge + "Named to Webdelics Top 100 Thought Leaders & Content Creators..."

### Content sections (each with section title divider)
1. Podcast Appearances (11 live + 2 coming soon)
2. Published Articles (2)
3. Press & Features (3)
4. Speaking, Keynotes & Panels (8)
5. Available Speaking Topics (6 chips, 2-column grid)

### Footer
Tag chips + contact links

---

## Interactive Behavior

**Every media card is clickable.** On click, open a modal with:
- Large emoji icon + name + episode number
- Type badge (Podcast / Article / Press / Keynote / Panel / Speaker / Video / Lecture / Coming Soon)
- Detail line
- Full description paragraph
- "Listen / View →" button (links to URL, opens in new tab)
- "Close" button
- Close on backdrop click or Escape key
- Modal should animate in with spatial depth (perspective transform, slide up, backdrop blur)
- Cards should have hover states with perspective lift and shadow

---

## Bio Copy

Born in Tehran during the Iran-Iraq War and raised as an asylum seeker in the United States, **Sabba Nazhand** spent 20+ years in tech leadership — driving $500M+ in revenue across companies like Social Tables, Andela, Teampay, and 2U. A personal crisis led him to psychedelic-assisted therapy, and to building the infrastructure the healing field was missing. **Safar** uses voice-based AI and adaptive protocols to help practitioners measure and sustain client transformation between sessions, powered by Salience Intelligence™.

### Pull quote:
"People don't fail because they lack insight. They fail because insight fades. The in-between is where transformation lives or dies."

---

## Complete Media Data

### PODCASTS

1. **Psychedelic Stories**
   - Detail: Origin story — Tehran, asylum, 5-MeO-DMT, and the birth of Safar
   - URL: https://music.amazon.com/podcasts/b6e1a2ab-c983-45e1-af04-950ae749aba4/psychedelic-stories
   - Description: Sabba shares the full origin story — born in Tehran during the Iran-Iraq War, his family's flight through Greece to the U.S., his 20-year tech career, and the 5-MeO-DMT experience that shattered everything and rebuilt it. This is the foundational episode.

2. **Entrepreneurs in Recovery** — Ep. 061
   - Detail: AI, psychedelics & accessibility in mental health
   - URL: https://open.spotify.com/episode/1fgldyJ0rUUYQujGKzLuqD
   - Description: Host Jesse Harless and Sabba go deep on the intersection of AI and psychedelics, the broken therapeutic model, systemic barriers to mental health care, and why integration — not the medicine — is where real change happens.

3. **Leadershipedelics** — S3 Ep. 8
   - Detail: Conscious leadership, fatherhood & psychedelic business
   - URL: https://www.leadershipedelics.com/1860291/episodes/12715722-sabba-nazhand-conscious-leadership-fatherhood-psychedelic-business-and-personal-growth
   - Description: A conversation about overcoming burnout, the transformative power of psychedelics, and how vulnerability and emotional openness are superpowers for fathers and leaders.

4. **Webdelics**
   - Detail: Embracing emotions & masculinity — transformational journey with psychedelics
   - URL: https://rephonic.com/podcasts/webdelics-podcast
   - Description: Sabba explores masculinity, emotional expression, and how psychedelics helped him reconnect with parts of himself that survival mode had buried.

5. **Mile 40 Podcast** — Ep. 126
   - Detail: Integration, innovation & moving with intention
   - URL: https://creators.spotify.com/pod/profile/bishoy-tadros/episodes/Ep-126---Integration--Innovation---Moving-With-Intention-Featuring-Sabba-Nazhand-e31854c
   - Description: Host Bishoy Tadros and Sabba discuss the immigrant experience, psychedelic therapy, mission-driven entrepreneurship, and the path to authenticity and conscious leadership.

6. **Bridges Between Us**
   - Detail: Conscious sales, burnout recovery & the future of work
   - URL: https://podcasts.apple.com/mu/podcast/conscious-at-work-w-sabba-nazhand/id1594188937?i=1000646049216
   - Description: A conversation on the future of work, the state of modern sales teams, burnout, and how Conscious Leadership principles transformed Sabba's approach to selling and leading.

7. **The TripSitting Podcast** — Ep. 070
   - Detail: Coming back to ourselves — fleeing Iran & healing through psychedelics
   - URL: https://open.spotify.com/episode/1lmR7k9yMydDhFYvjRb4Un
   - Description: Sabba tells his story of fleeing Iran as a newborn, arriving in the U.S. five years later, and how psychedelics helped him come back to himself.

8. **TrueLife**
   - Detail: Psychedelic Science Exodus — Safar, integration & the future of the field
   - URL: https://podscan.fm/podcasts/truelife/episodes/sabba-nazhand-amp-jack-gorsline-psychedelic-science-exodous
   - Description: Recorded at Psychedelic Science 2025 — Sabba and Jack Gorsline discuss Safar, AI-driven integration, and the future of the psychedelic ecosystem.

9. **Minority Trip Report™** — Co-Creator
   - Detail: Spotlighting underrepresented voices in psychedelics & consciousness
   - URL: https://www.minoritytrip.com
   - Description: Sabba co-created this platform to spotlight underrepresented perspectives in mental health, psychedelics, and consciousness — using psychedelics as a lens to explore identity and transformation.

10. **Startup Sales** — Ep. 059
    - Detail: Building top-performing enterprise sales teams (WorkGenius era)
    - URL: https://www.podchaser.com/podcasts/startup-sales-686446/episodes/interview-for-top-sales-with-s-45755565
    - Description: From Sabba's tech leadership era — a deep dive into building and scaling enterprise sales teams, recorded while VP of Sales at WorkGenius.

11. **Fashion Is Your Business**
    - Detail: Recorded live at eTail East, Boston — AI workforce solutions
    - URL: https://podcasts.apple.com/gb/podcast/sabba-nazhand-workgenius-julian-kahlon-project-verte/id954158712?i=1000452731102
    - Description: Recorded on location at eTail East in Boston — Sabba discusses WorkGenius and the AI-powered marketplace for enterprise freelancer engagement.

### COMING SOON (Podcasts)

12. **WELLPOWER: Breath, Cold, & Biohacking Podcast**
    - Detail: Episode coming soon
    - URL: https://open.spotify.com/show/7EKXTOqgKIXe6kmlwkJvts

13. **The Psychedelic Scene Podcast**
    - Detail: Episode coming soon
    - URL: https://open.spotify.com/show/10xHqbyEmuubsGLBHPwAwx

### PUBLISHED ARTICLES

1. **Reality Sandwich** — "The Hive and the Seeker: Psychedelics, Integration, and the Composition of Connection"
   - URL: https://realitysandwich.com/psychedelics-integration-connection/
   - Description: An essay on integration as resistance — how the hive metaphor mirrors the psychedelic journey, and why carrying insights into daily life is the real work. "Integration is the quiet rebellion of remembrance."

2. **Psychedelic Scene Magazine** — "On Generational Trauma: You're Not Broken — You're Running Someone Else's Code"
   - URL: https://psychedelicscene.com/2026/04/07/generational-trauma/
   - Description: Sabba's essay on inherited survival programming — from revolutionary Iran to American suburbia — and how psychedelics dissolve the narration long enough to meet yourself before the download. Published April 2026.

### PRESS & FEATURES

1. **Tricycle Day** — Featured Interview
   - Detail: AI in psychedelic healing, indigenous wisdom in tech (80K+ subscribers)
   - URL: https://www.tricycleday.com/p/sabba-nazhand
   - Description: The flagship interview — Tricycle Day's 80K+ subscriber newsletter featured Sabba on what's broken about current integration models, bringing indigenous wisdom into a tech product, and why AI belongs in psychedelic healing.

2. **Send2Press / National Newswire** — Launch Coverage
   - Detail: Safar launch syndicated across 15+ outlets
   - URL: https://www.send2press.com/wire/integration-enterprises-pbc-dba-safar-launches-the-first-operating-system-for-human-transformation/
   - Description: The official Safar launch press release — syndicated across Fox21, Florida Newswire, Massachusetts Newswire, and 15+ other outlets. Announced the first Operating System for Human Transformation, powered by Salience Intelligence™.

3. **Webdelics Top 100** — Thought Leader Recognition
   - Detail: Named among top thought leaders in psychedelic space
   - URL: https://www.webdelics.com/top-lists/thought-leaders-content-creators
   - Description: Recognized as an emerging thought leader in conscious leadership and psychedelic integration among the top 100 thought leaders and content creators in the psychedelic space.

### SPEAKING, KEYNOTES & PANELS

1. **Awakening 2025** — Keynote & Panelist (type: keynote)
   - Detail: Keynote + Psychedelics & Technology panel — Psychedelic Institute of LA
   - URL: https://www.liiightspace.com/post/psychedelics-technology-panel
   - Description: Delivered a keynote and joined the Psychedelics & Technology panel alongside Aaron Chi, Dr. Sanjay Manchanda, and Dru Ali at Awakening 2025, hosted by the Psychedelic Institute of Los Angeles.

2. **The Psychedelic Assembly** (type: speaker)
   - Detail: From War-torn Iran to Conscious Leadership
   - URL: https://www.thepsychedelicassembly.com/
   - Description: Sabba's keynote on the journey from asylum seeker to tech executive to conscious leader — and how psychedelics catalyzed the transformation.

3. **Global Psychedelic Week** (type: speaker)
   - Detail: Psychedelics & AI: Consciousness, Technology, and the Future
   - URL: https://www.globalpsychedelicweek.com/speakers
   - Description: A talk on the convergence of psychedelics and artificial intelligence — how technology can serve consciousness rather than extract from it.

4. **In The Beehive** (type: panel)
   - Detail: Emerge and See: Psychedelics and the Future
   - URL: https://inthebeehive.com/panels
   - Description: Panel discussion on the emerging psychedelic landscape and what the future holds for practitioners, patients, and the broader ecosystem.

5. **Hollyhock — Canadian Psychedelic Summit 2023** (type: speaker)
   - Detail: Presenter at Cortes Island retreat centre
   - URL: https://hollyhock.ca/people/sabba-nazhand/
   - Description: Presented at the Canadian Psychedelic Summit at Hollyhock's legendary retreat centre on Cortes Island, British Columbia.

6. **Sensoria Presents** (type: speaker)
   - Detail: Fundraiser for the Shulgin Farm
   - URL: https://sensoria.rsvpify.com/
   - Description: Speaker at the Sensoria fundraiser benefiting the Shulgin Farm — honoring the legacy of Sasha and Ann Shulgin.

7. **AMA — Why Business Leaders Are Turning to Psychedelics** (type: video)
   - Detail: Video — YouTube
   - URL: https://www.youtube.com/watch?v=TXjCePHehbM
   - Description: An open AMA exploring why executives, founders, and business leaders are increasingly turning to psychedelic experiences for clarity, creativity, and conscious leadership.

8. **George Washington University** — Guest Lecturer (type: lecture)
   - Detail: School of Business — Event Management & Hospitality programs
   - No URL
   - Description: Guest lecturer at GWU's School of Business, delivering presentations for the event management and hospitality disciplines.

### AVAILABLE SPEAKING TOPICS

1. The Integration Gap — Why Insight Without Structure Fades (color: #c4613a)
2. Ethics of Building in Sacred & Healing Spaces (color: #b8943e)
3. AI Meets the Soul — Technology for Human Transformation (color: #6b8c5e)
4. Intergenerational Trauma & the Immigrant Founder Story (color: #6a9ec8)
5. Conscious Sales Leadership & Vulnerability at Work (color: #a89e90)
6. Measurement as Medicine — Making the Invisible Visible (color: #c4613a)

### FOOTER TAGS
Psychedelics, AI + Healing, Conscious Leadership, Integration, Founder Story

### CONTACT
- Booking & media: pr@joinsafar.com
- joinsafar.com · LinkedIn (linkedin.com/in/sabbanazhand) · Instagram (instagram.com/sabba_nazhand)

---

## Full Perspective Design System Spec (for reference)

```
Visual style: modern, clean, high-contrast
Typography scale: 12/14/16/20/24/32
Fonts: primary=Poppins, display=Oswald, mono=JetBrains Mono
Weights: 100–900
Color tokens: primary=#00BD7D, secondary=#00BD7D, success=#16A34A, warning=#D97706, danger=#DC2626, surface=#FFFFFF, text=#111827
Spacing scale: 4/8/12/16/24/32
WCAG 2.2 AA, keyboard-first, visible focus states

Component states required: default, hover, focus-visible, active, disabled, loading, error
Interaction: keyboard, pointer, touch
Spatial depth: isometric views, vanishing points, layered elements, perspective transforms
```

---

## Build Notes

- Use React (.jsx) for the interactive version
- Embed images as base64 if building a single-file artifact, or reference them as local files
- Modal should trap focus and close on Escape
- All cards should have tabindex and be keyboard-accessible
- The "Listen / View →" button in modals should open links in new tabs
- Maintain the Safar dark aesthetic while applying Perspective Design's spatial depth principles
