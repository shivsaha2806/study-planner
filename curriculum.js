// curriculum.js — MyStudyPlanner
// Full curriculum data for all 3 tracks.
// Data only — no logic. Imported by firebase.js for seeding and app.js for display.

export const CURRICULUM = [

  // ============================================================
  // TRACK 1 — FRONTEND
  // ============================================================
  {
    id: 'frontend',
    name: 'Frontend',
    color: '#c4b5fd',
    daysPerWeek: 4,
    topics: [

      // ── HTML ─────────────────────────────────────────────────
      {
        id: 'html',
        name: 'HTML',
        subtopics: [
          {
            id: 'html-basics',
            name: 'Basics & Structure',
            subSubTopics: [
              { id: 'html-basics-1', name: 'How browsers parse HTML' },
              { id: 'html-basics-2', name: 'DOCTYPE + html + head + body' },
              { id: 'html-basics-3', name: 'Tags + elements + attributes + nesting rules' }
            ],
            resources: [
              { title: 'Kevin Powell — HTML & CSS for Absolute Beginners (2025)', url: 'https://www.youtube.com/watch?v=YOsMJQfwqow', type: 'video', lang: 'english' },
              { title: 'Sheryians Coding School — Full Web Dev Playlists', url: 'https://www.youtube.com/@sheryians/playlists', type: 'channel', lang: 'hindi' }
            ]
          },
          {
            id: 'html-text',
            name: 'Text & Content',
            subSubTopics: [
              { id: 'html-text-1', name: 'Headings h1-h6 + paragraphs + line breaks' },
              { id: 'html-text-2', name: 'Text formatting (strong em mark del sub sup)' },
              { id: 'html-text-3', name: 'Quotations (blockquote q cite)' },
              { id: 'html-text-4', name: 'Code elements (code pre kbd)' }
            ],
            resources: [
              { title: 'Kevin Powell — 5 Important HTML Concepts', url: 'https://www.youtube.com/watch?v=HJ0-fUJ-2F0', type: 'video', lang: 'english' },
              { title: 'Sheryians Coding School — HTML Foundation Series', url: 'https://www.youtube.com/@sheryians/playlists', type: 'channel', lang: 'hindi' }
            ]
          },
          {
            id: 'html-lists',
            name: 'Lists',
            subSubTopics: [
              { id: 'html-lists-1', name: 'Ordered lists' },
              { id: 'html-lists-2', name: 'Unordered lists' },
              { id: 'html-lists-3', name: 'Description lists' },
              { id: 'html-lists-4', name: 'Nested lists' }
            ],
            resources: [
              { title: 'Sheryians Coding School — HTML Foundation Series', url: 'https://www.youtube.com/@sheryians/playlists', type: 'channel', lang: 'hindi' }
            ]
          },
          {
            id: 'html-links',
            name: 'Links & Navigation',
            subSubTopics: [
              { id: 'html-links-1', name: 'Anchor tag (href target rel)' },
              { id: 'html-links-2', name: 'Absolute vs relative URLs' },
              { id: 'html-links-3', name: 'Email + tel links' },
              { id: 'html-links-4', name: 'nav element' }
            ],
            resources: [
              { title: 'Sheryians Coding School — HTML Foundation Series', url: 'https://www.youtube.com/@sheryians/playlists', type: 'channel', lang: 'hindi' }
            ]
          },
          {
            id: 'html-media',
            name: 'Images & Media',
            subSubTopics: [
              { id: 'html-media-1', name: 'img tag (src alt width height)' },
              { id: 'html-media-2', name: 'figure + figcaption' },
              { id: 'html-media-3', name: 'picture element (responsive images)' },
              { id: 'html-media-4', name: 'video + audio + iframe' }
            ],
            resources: [
              { title: 'Kevin Powell — Responsive Images', url: 'https://www.youtube.com/@KevinPowell/search?query=responsive+images', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'html-tables',
            name: 'Tables',
            subSubTopics: [
              { id: 'html-tables-1', name: 'table + thead + tbody + tfoot + tr + th + td' },
              { id: 'html-tables-2', name: 'colspan + rowspan' },
              { id: 'html-tables-3', name: 'Accessibility in tables (scope caption)' }
            ],
            resources: [
              { title: 'Sheryians Coding School — HTML Tables', url: 'https://www.youtube.com/@sheryians/playlists', type: 'channel', lang: 'hindi' }
            ]
          },
          {
            id: 'html-forms',
            name: 'Forms',
            subSubTopics: [
              { id: 'html-forms-1', name: 'form (action method)' },
              { id: 'html-forms-2', name: 'All input types (text email password checkbox radio file date range color tel url)' },
              { id: 'html-forms-3', name: 'label + placeholder + required + disabled + readonly' },
              { id: 'html-forms-4', name: 'select + option + optgroup + textarea' },
              { id: 'html-forms-5', name: 'button types (submit reset button)' },
              { id: 'html-forms-6', name: 'fieldset + legend' },
              { id: 'html-forms-7', name: 'Validation attributes (min max pattern maxlength)' },
              { id: 'html-forms-8', name: 'datalist' }
            ],
            resources: [
              { title: 'Kevin Powell — HTML Forms Done Right (Accessibility First)', url: 'https://www.youtube.com/@KevinPowell/search?query=forms', type: 'channel', lang: 'english' },
              { title: 'Web Dev Simplified — Form Handling + Validation', url: 'https://www.youtube.com/@WebDevSimplified', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'html-semantic',
            name: 'Semantic HTML',
            subSubTopics: [
              { id: 'html-semantic-1', name: 'Why semantics matter (SEO + a11y)' },
              { id: 'html-semantic-2', name: 'header + footer + main + article + section + aside + nav' },
              { id: 'html-semantic-3', name: 'time + address + figure + details + summary + progress + meter' }
            ],
            resources: [
              { title: 'Kevin Powell — HTML Section Elements', url: 'https://www.youtube.com/watch?v=ULdkpU51hTQ', type: 'video', lang: 'english' },
              { title: 'RoadsideCoder — HTML + CSS Interview Questions', url: 'https://www.youtube.com/watch?v=w73uPuzOwhc', type: 'video', lang: 'hindi' }
            ]
          },
          {
            id: 'html-a11y',
            name: 'Accessibility (a11y)',
            subSubTopics: [
              { id: 'html-a11y-1', name: 'ARIA roles + labels (aria-label aria-labelledby aria-describedby)' },
              { id: 'html-a11y-2', name: 'Alt text best practices' },
              { id: 'html-a11y-3', name: 'Keyboard navigation + focus management' },
              { id: 'html-a11y-4', name: 'Screen reader basics' },
              { id: 'html-a11y-5', name: 'WCAG color contrast basics' },
              { id: 'html-a11y-6', name: 'Skip links' }
            ],
            resources: [
              { title: 'Kevin Powell — Accessibility Videos', url: 'https://www.youtube.com/@KevinPowell/search?query=accessibility', type: 'channel', lang: 'english' },
              { title: 'RoadsideCoder — HTML Interview Questions (a11y covered)', url: 'https://www.youtube.com/watch?v=w73uPuzOwhc', type: 'video', lang: 'hindi' }
            ]
          },
          {
            id: 'html-meta',
            name: 'Meta & SEO Basics',
            subSubTopics: [
              { id: 'html-meta-1', name: 'meta charset + viewport + description' },
              { id: 'html-meta-2', name: 'Open Graph tags' },
              { id: 'html-meta-3', name: 'Favicon + robots meta' }
            ],
            resources: [
              { title: 'Fireship — Meta Tags + SEO Quick Takes', url: 'https://www.youtube.com/@Fireship', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'html-apis',
            name: 'HTML5 APIs (Basics)',
            subSubTopics: [
              { id: 'html-apis-1', name: 'localStorage + sessionStorage' },
              { id: 'html-apis-2', name: 'Geolocation API' },
              { id: 'html-apis-3', name: 'History API' },
              { id: 'html-apis-4', name: 'Drag and Drop' },
              { id: 'html-apis-5', name: 'Canvas basics' }
            ],
            resources: [
              { title: 'Web Dev Simplified — HTML5 APIs (per API videos)', url: 'https://www.youtube.com/@WebDevSimplified/search?query=localStorage', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'html-best',
            name: 'Best Practices',
            subSubTopics: [
              { id: 'html-best-1', name: 'HTML validation' },
              { id: 'html-best-2', name: 'Lazy loading images' },
              { id: 'html-best-3', name: 'Performance basics' }
            ],
            resources: [
              { title: 'Kevin Powell — HTML Best Practices', url: 'https://www.youtube.com/@KevinPowell', type: 'channel', lang: 'english' }
            ]
          }
        ]
      },

      // ── CSS ──────────────────────────────────────────────────
      {
        id: 'css',
        name: 'CSS',
        subtopics: [
          {
            id: 'css-basics',
            name: 'Basics + Syntax + CSS Reset',
            subSubTopics: [
              { id: 'css-basics-1', name: 'How CSS works + how browsers apply styles' },
              { id: 'css-basics-2', name: 'CSS rule structure (selector property value)' },
              { id: 'css-basics-3', name: 'Inline + internal + external CSS' },
              { id: 'css-basics-4', name: 'CSS reset vs Normalize vs modern reset' }
            ],
            resources: [
              { title: 'Kevin Powell — Improve Your Reset With Modern CSS', url: 'https://www.youtube.com/watch?v=eWmDW4zEXt4', type: 'video', lang: 'english' },
              { title: 'Kevin Powell — Start Over-Engineering Your CSS (CSS Day 2024)', url: 'https://www.youtube.com/watch?v=k_3pRxdv-cI', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'css-selectors',
            name: 'Selectors + Pseudo-classes + Pseudo-elements',
            subSubTopics: [
              { id: 'css-selectors-1', name: 'Basic selectors (element class ID universal)' },
              { id: 'css-selectors-2', name: 'Combinators (descendant child adjacent sibling)' },
              { id: 'css-selectors-3', name: 'Attribute selectors' },
              { id: 'css-selectors-4', name: 'Pseudo-classes (:hover :focus :nth-child :not :is :where :has)' },
              { id: 'css-selectors-5', name: 'Pseudo-elements (::before ::after ::placeholder ::selection)' },
              { id: 'css-selectors-6', name: 'Specificity calculation' }
            ],
            resources: [
              { title: 'Kevin Powell — Modern Selectors (:has :is :where)', url: 'https://www.youtube.com/@KevinPowell/search?query=selectors', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'css-cascade',
            name: 'Cascade + Specificity + @layer',
            subSubTopics: [
              { id: 'css-cascade-1', name: 'Cascade algorithm (order specificity origin)' },
              { id: 'css-cascade-2', name: 'Inheritance (which properties inherit)' },
              { id: 'css-cascade-3', name: '!important (when to avoid)' },
              { id: 'css-cascade-4', name: '@layer (cascade layers — modern CSS interview hot topic)' }
            ],
            resources: [
              { title: 'Kevin Powell — CSS @layer Cascade Playlist', url: 'https://www.youtube.com/playlist?list=PL4-IK0AVhVjM4P3MFlN6nFEaAIC4tqH-9', type: 'playlist', lang: 'english' },
              { title: 'Kevin Powell — CSS Features for More Cascade Control (2024)', url: 'https://www.youtube.com/watch?v=jhjVKZB9yc0', type: 'video', lang: 'english' },
              { title: 'Web Dev Simplified — CSS Layers Changing Specificity', url: 'https://www.youtube.com/watch?v=Pr1PezCc4FU', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'css-boxmodel',
            name: 'Box Model + Margin Collapse',
            subSubTopics: [
              { id: 'css-boxmodel-1', name: 'content + padding + border + margin' },
              { id: 'css-boxmodel-2', name: 'box-sizing (content-box vs border-box)' },
              { id: 'css-boxmodel-3', name: 'Margin collapse (when + why)' },
              { id: 'css-boxmodel-4', name: 'Outline vs border' }
            ],
            resources: [
              { title: 'Kevin Powell — Box Model Videos', url: 'https://www.youtube.com/@KevinPowell/search?query=box+model', type: 'channel', lang: 'english' },
              { title: 'RoadsideCoder — CSS Interview Questions (box model covered)', url: 'https://www.youtube.com/watch?v=w73uPuzOwhc', type: 'video', lang: 'hindi' }
            ]
          },
          {
            id: 'css-typography',
            name: 'Typography + Fluid Typography + clamp()',
            subSubTopics: [
              { id: 'css-typography-1', name: 'font-family + font-size + font-weight + font-style' },
              { id: 'css-typography-2', name: 'line-height + letter-spacing + word-spacing' },
              { id: 'css-typography-3', name: 'text-align + text-transform + text-decoration' },
              { id: 'css-typography-4', name: 'Web fonts (@font-face Google Fonts)' },
              { id: 'css-typography-5', name: 'rem vs em vs px vs vh/vw — when to use which' },
              { id: 'css-typography-6', name: 'Fluid typography with clamp()' }
            ],
            resources: [
              { title: 'Kevin Powell — Fluid Typography + clamp()', url: 'https://www.youtube.com/@KevinPowell/search?query=clamp', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'css-colors',
            name: 'Colors + Backgrounds + Gradients',
            subSubTopics: [
              { id: 'css-colors-1', name: 'Color formats (hex rgb rgba hsl hsla)' },
              { id: 'css-colors-2', name: 'background (color image repeat size position attachment)' },
              { id: 'css-colors-3', name: 'Gradients (linear radial conic)' },
              { id: 'css-colors-4', name: 'opacity vs rgba transparency' },
              { id: 'css-colors-5', name: 'CSS filters (blur brightness contrast grayscale)' },
              { id: 'css-colors-6', name: 'Modern oklch colors' }
            ],
            resources: [
              { title: 'Kevin Powell — Modern CSS Color Features + oklch', url: 'https://www.youtube.com/@KevinPowell/search?query=color', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'css-display',
            name: 'Display + Visibility + Overflow',
            subSubTopics: [
              { id: 'css-display-1', name: 'display (block inline inline-block none)' },
              { id: 'css-display-2', name: 'visibility hidden vs display none vs opacity 0 — differences + use cases' },
              { id: 'css-display-3', name: 'overflow (hidden scroll auto clip)' }
            ],
            resources: [
              { title: 'Web Dev Simplified — Display + Visibility Differences', url: 'https://www.youtube.com/@WebDevSimplified', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'css-positioning',
            name: 'Positioning + Z-index + Stacking Contexts',
            subSubTopics: [
              { id: 'css-positioning-1', name: 'static + relative + absolute + fixed + sticky' },
              { id: 'css-positioning-2', name: 'top right bottom left' },
              { id: 'css-positioning-3', name: 'z-index + stacking contexts (deep — interview favorite)' },
              { id: 'css-positioning-4', name: 'CSS containment (contain property)' }
            ],
            resources: [
              { title: 'Kevin Powell — Unknown Fundamentals: Offset Parents + Stacking Context', url: 'https://www.youtube.com/watch?v=GS6b9p6edfk', type: 'video', lang: 'english' },
              { title: 'Kevin Powell — Easy Fix for z-index Issue (2024)', url: 'https://www.youtube.com/watch?v=ocl4eN9IrD0', type: 'video', lang: 'english' },
              { title: 'Kevin Powell — CSS Z-index + Stacking Context Deep Dive', url: 'https://www.youtube.com/watch?v=uS8l4YRXbaw', type: 'video', lang: 'english' },
              { title: 'Kevin Powell — isolation: isolate Trick (Short 2025)', url: 'https://www.youtube.com/shorts/cNS0qWHEq58', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'css-flexbox',
            name: 'Flexbox',
            subSubTopics: [
              { id: 'css-flexbox-1', name: 'flex container (direction wrap justify-content align-items align-content gap)' },
              { id: 'css-flexbox-2', name: 'flex items (grow shrink basis shorthand align-self order)' },
              { id: 'css-flexbox-3', name: 'Common layout patterns with Flexbox' }
            ],
            resources: [
              { title: 'Kevin Powell — Learn Flexbox the Easy Way', url: 'https://www.youtube.com/watch?v=u044iM9xsWU', type: 'video', lang: 'english' },
              { title: 'Kevin Powell — Flexbox vs Grid Decision', url: 'https://www.youtube.com/watch?v=ESAXStllfcw', type: 'video', lang: 'english' },
              { title: 'RoadsideCoder — CSS Interview Questions (Flexbox covered)', url: 'https://www.youtube.com/watch?v=w73uPuzOwhc', type: 'video', lang: 'hindi' }
            ]
          },
          {
            id: 'css-grid',
            name: 'CSS Grid',
            subSubTopics: [
              { id: 'css-grid-1', name: 'grid-template-columns + rows + areas + gap' },
              { id: 'css-grid-2', name: 'grid-column + row + area + span' },
              { id: 'css-grid-3', name: 'auto-fill vs auto-fit' },
              { id: 'css-grid-4', name: 'minmax() + repeat()' },
              { id: 'css-grid-5', name: 'Flexbox vs Grid — when to use which (interview must)' },
              { id: 'css-grid-6', name: 'CSS subgrid' }
            ],
            resources: [
              { title: 'Kevin Powell — CSS Grid Complete Playlist', url: 'https://www.youtube.com/playlist?list=PL4-IK0AVhVjPv5tfS82UF_iQgFp4Bl998', type: 'playlist', lang: 'english' }
            ]
          },
          {
            id: 'css-responsive',
            name: 'Responsive Design + Container Queries',
            subSubTopics: [
              { id: 'css-responsive-1', name: 'Mobile-first approach' },
              { id: 'css-responsive-2', name: 'Media queries (min-width max-width orientation prefers-color-scheme)' },
              { id: 'css-responsive-3', name: 'Breakpoints strategy' },
              { id: 'css-responsive-4', name: 'Viewport units (vh vw svh dvh)' },
              { id: 'css-responsive-5', name: 'Container queries (@container — 2026 interview hot topic)' },
              { id: 'css-responsive-6', name: 'Responsive images (srcset sizes picture)' }
            ],
            resources: [
              { title: 'Kevin Powell — Responsive Layouts Workshop (2024)', url: 'https://www.youtube.com/watch?v=S2XstSrGJOw', type: 'video', lang: 'english' },
              { title: 'Kevin Powell — Subgrid + Container Queries Change Layouts', url: 'https://www.youtube.com/watch?v=Zddz_R1RnfM', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'css-variables',
            name: 'CSS Variables (Custom Properties)',
            subSubTopics: [
              { id: 'css-variables-1', name: 'Defining + using variables (:root scope)' },
              { id: 'css-variables-2', name: 'Local vs global scope' },
              { id: 'css-variables-3', name: 'Updating with JavaScript' },
              { id: 'css-variables-4', name: 'Theming with CSS variables' }
            ],
            resources: [
              { title: 'Kevin Powell — Master CSS Custom Properties', url: 'https://www.youtube.com/watch?v=40K1pvxEwlE', type: 'video', lang: 'english' },
              { title: 'Kevin Powell — CSS Variables Intro (Foundational)', url: 'https://www.youtube.com/watch?v=PHO6TBq_auI', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'css-animations',
            name: 'Animations + Transitions + Transforms',
            subSubTopics: [
              { id: 'css-animations-1', name: 'transition (property duration timing-function delay)' },
              { id: 'css-animations-2', name: '@keyframes' },
              { id: 'css-animations-3', name: 'animation (name duration timing fill-mode iteration direction)' },
              { id: 'css-animations-4', name: 'transform (translate rotate scale skew)' },
              { id: 'css-animations-5', name: 'will-change (performance hint)' },
              { id: 'css-animations-6', name: 'prefers-reduced-motion' }
            ],
            resources: [
              { title: 'Kevin Powell — CSS Animation Tips and Tricks (2023)', url: 'https://www.youtube.com/watch?v=YBd5VHgXRtY', type: 'video', lang: 'english' },
              { title: 'Kevin Powell — CSS Animations Playlist', url: 'https://www.youtube.com/playlist?list=PL4-IK0AVhVjP5iRPyoF1pKwX-7sEOwty4', type: 'playlist', lang: 'english' },
              { title: 'Kevin Powell — Creative CSS Animations (2024)', url: 'https://www.youtube.com/watch?v=IdxzJLQ3Mbs', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'css-architecture',
            name: 'CSS Architecture (BEM + SASS + CSS Modules)',
            subSubTopics: [
              { id: 'css-architecture-1', name: 'BEM methodology (Block Element Modifier)' },
              { id: 'css-architecture-2', name: 'OOCSS basics' },
              { id: 'css-architecture-3', name: 'SMACSS basics' },
              { id: 'css-architecture-4', name: 'Utility classes vs component classes' },
              { id: 'css-architecture-5', name: 'CSS Modules (scoped styles)' },
              { id: 'css-architecture-6', name: 'CSS-in-JS concept (Styled Components Emotion)' }
            ],
            resources: [
              { title: 'Kevin Powell — BEM CSS Architecture', url: 'https://www.youtube.com/@KevinPowell/search?query=BEM', type: 'channel', lang: 'english' },
              { title: 'Sheryians Coding School — SASS Series (Hindi)', url: 'https://www.youtube.com/@sheryians/playlists', type: 'channel', lang: 'hindi' }
            ]
          },
          {
            id: 'css-modern',
            name: 'Modern CSS 2024-2026 (Interview Hot Topics)',
            subSubTopics: [
              { id: 'css-modern-1', name: ':has() selector (parent selector)' },
              { id: 'css-modern-2', name: '@layer (cascade layers)' },
              { id: 'css-modern-3', name: 'Container queries (@container)' },
              { id: 'css-modern-4', name: 'CSS nesting (native)' },
              { id: 'css-modern-5', name: 'color-mix() + oklch colors' },
              { id: 'css-modern-6', name: 'CSS subgrid' },
              { id: 'css-modern-7', name: 'scroll-snap' }
            ],
            resources: [
              { title: 'Kevin Powell — New CSS Features to Know for 2025 (April 2025)', url: 'https://www.youtube.com/watch?v=jSCgZqoebsM', type: 'video', lang: 'english' },
              { title: 'Kevin Powell — Smart Layout Patterns with Modern CSS (SmashingConf 2024)', url: 'https://www.youtube.com/watch?v=Xx68hP3DGa8', type: 'video', lang: 'english' },
              { title: 'Kevin Powell — State of CSS in 2025 (Oct 2025)', url: 'https://www.youtube.com/watch?v=x_XMqcI-GS8', type: 'video', lang: 'english' },
              { title: 'Kevin Powell — Getting Started with CSS Style Queries (2025)', url: 'https://www.youtube.com/watch?v=WP5CC5yawfs', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'css-perf-a11y',
            name: 'Performance + Accessibility in CSS',
            subSubTopics: [
              { id: 'css-perf-a11y-1', name: 'Critical CSS' },
              { id: 'css-perf-a11y-2', name: 'Avoiding layout thrash (reflow vs repaint)' },
              { id: 'css-perf-a11y-3', name: 'will-change' },
              { id: 'css-perf-a11y-4', name: 'CSS containment (contain property)' },
              { id: 'css-perf-a11y-5', name: 'focus-visible styles (never remove outline without replacement)' },
              { id: 'css-perf-a11y-6', name: 'prefers-reduced-motion' },
              { id: 'css-perf-a11y-7', name: 'prefers-color-scheme (dark mode)' },
              { id: 'css-perf-a11y-8', name: 'High contrast mode' },
              { id: 'css-perf-a11y-9', name: '.sr-only pattern' }
            ],
            resources: [
              { title: 'Kevin Powell — Performance + A11y CSS Videos', url: 'https://www.youtube.com/@KevinPowell/search?query=accessibility', type: 'channel', lang: 'english' },
              { title: 'Google Chrome Developers — DevTools CSS Debugging', url: 'https://www.youtube.com/@ChromeDevs', type: 'channel', lang: 'english' }
            ]
          }
        ]
      },

      // ── TAILWIND CSS ─────────────────────────────────────────
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        subtopics: [
          {
            id: 'tailwind-core',
            name: 'Core Concept + v3 vs v4',
            subSubTopics: [
              { id: 'tailwind-core-1', name: 'Utility-first approach — what it is + why it exists' },
              { id: 'tailwind-core-2', name: 'JIT engine' },
              { id: 'tailwind-core-3', name: 'Tailwind v3 vs v4 key differences (JS config → CSS @theme, Oxide Rust engine 100x faster)' },
              { id: 'tailwind-core-4', name: 'Utility-first vs Bootstrap vs plain CSS tradeoffs (interview)' }
            ],
            resources: [
              { title: 'Fireship — Tailwind CSS Is the Worst (utility-first debate, conceptual)', url: 'https://www.youtube.com/watch?v=lHZwlzOUOZ4', type: 'video', lang: 'english' },
              { title: 'Tailwind CSS v4 Full Course (Jun 2025)', url: 'https://www.youtube.com/watch?v=Vdmspw07SUs', type: 'video', lang: 'english' },
              { title: 'Tailwind CSS v4 Tutorial 25-Part Series (Apr 2026)', url: 'https://www.youtube.com/watch?v=m-IGibAiJo8', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'tailwind-setup',
            name: 'Setup + Utility Classes + Responsive',
            subSubTopics: [
              { id: 'tailwind-setup-1', name: 'Vite + React setup' },
              { id: 'tailwind-setup-2', name: 'Utility classes (spacing sizing typography colors borders shadows display)' },
              { id: 'tailwind-setup-3', name: 'Mobile-first breakpoints (sm md lg xl 2xl)' },
              { id: 'tailwind-setup-4', name: 'Responsive prefix pattern' }
            ],
            resources: [
              { title: 'Tailwind CSS v4 Vite + React Setup', url: 'https://www.youtube.com/watch?v=aDju3zOjQHQ', type: 'video', lang: 'english' },
              { title: 'Hitesh Choudhary / Chai aur Code — Tailwind Hindi', url: 'https://www.youtube.com/@chaiaurcode', type: 'channel', lang: 'hindi' },
              { title: 'Sheryians Coding School — Tailwind v4 Content', url: 'https://www.youtube.com/@sheryians/playlists', type: 'channel', lang: 'hindi' }
            ]
          },
          {
            id: 'tailwind-states',
            name: 'States + Dark Mode + Customization',
            subSubTopics: [
              { id: 'tailwind-states-1', name: 'Hover + focus + active + disabled modifiers' },
              { id: 'tailwind-states-2', name: 'Group hover pattern' },
              { id: 'tailwind-states-3', name: 'Peer pattern' },
              { id: 'tailwind-states-4', name: 'Dark mode (dark: modifier class strategy)' },
              { id: 'tailwind-states-5', name: '@theme block (v4 design token config)' },
              { id: 'tailwind-states-6', name: 'Custom colors + fonts + spacing scale' },
              { id: 'tailwind-states-7', name: '@apply directive' },
              { id: 'tailwind-states-8', name: 'Arbitrary values ([300px] syntax)' }
            ],
            resources: [
              { title: 'Kevin Powell — CSS Variables + Tailwind Design Token Overlap', url: 'https://www.youtube.com/watch?v=40K1pvxEwlE', type: 'video', lang: 'english' },
              { title: 'Fireship — Tailwind v4 @theme Config Change', url: 'https://www.youtube.com/@Fireship', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'tailwind-components',
            name: 'Component Patterns + shadcn/ui',
            subSubTopics: [
              { id: 'tailwind-components-1', name: 'Extracting components with @apply' },
              { id: 'tailwind-components-2', name: '@layer components pattern' },
              { id: 'tailwind-components-3', name: 'cn() utility (clsx + tailwind-merge) — interview must' },
              { id: 'tailwind-components-4', name: 'shadcn/ui (Radix + Tailwind — hugely popular 2025-2026)' },
              { id: 'tailwind-components-5', name: 'Headless UI' }
            ],
            resources: [
              { title: 'Jack Herrington — Future of UI Frameworks: shadcn/ui (2024)', url: 'https://www.youtube.com/watch?v=hz3V6VyJxKE', type: 'video', lang: 'english' },
              { title: 'Intro to shadcn/ui (2025)', url: 'https://www.youtube.com/watch?v=yKZdMgiDtJM', type: 'video', lang: 'english' },
              { title: '10 Advanced Tailwind Tricks from shadcn (Jan 2025)', url: 'https://www.youtube.com/watch?v=9z2Ifq-OPEI', type: 'video', lang: 'english' }
            ]
          }
        ]
      },

      // ── JAVASCRIPT ───────────────────────────────────────────
      {
        id: 'javascript',
        name: 'JavaScript',
        subtopics: [
          {
            id: 'js-execution',
            name: 'Execution Context + Call Stack + How JS Works',
            subSubTopics: [
              { id: 'js-execution-1', name: 'How JS works (V8 engine interpreted vs compiled)' },
              { id: 'js-execution-2', name: 'Execution context (global + function)' },
              { id: 'js-execution-3', name: 'Call stack' },
              { id: 'js-execution-4', name: 'Overview of event loop' }
            ],
            resources: [
              { title: 'Akshay Saini — Namaste JavaScript Season 1 (Ep 1-2 cover this)', url: 'https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP', type: 'playlist', lang: 'hindi' }
            ]
          },
          {
            id: 'js-scope',
            name: 'Scope + Hoisting + TDZ',
            subSubTopics: [
              { id: 'js-scope-1', name: 'Global + function + block scope' },
              { id: 'js-scope-2', name: 'Lexical scope + scope chain' },
              { id: 'js-scope-3', name: 'Variable hoisting (var vs let/const)' },
              { id: 'js-scope-4', name: 'Function hoisting (declaration vs expression)' },
              { id: 'js-scope-5', name: 'Temporal Dead Zone' },
              { id: 'js-scope-6', name: 'IIFE (Immediately Invoked Function Expression)' }
            ],
            resources: [
              { title: 'Akshay Saini — Namaste JS S1 (Ep 3 7 8 9 — scope hoisting TDZ)', url: 'https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP', type: 'playlist', lang: 'hindi' }
            ]
          },
          {
            id: 'js-closures',
            name: 'Closures',
            subSubTopics: [
              { id: 'js-closures-1', name: 'What a closure is (deep understanding)' },
              { id: 'js-closures-2', name: 'Practical uses (data privacy factory functions memoization)' },
              { id: 'js-closures-3', name: 'Common interview problems (loop + setTimeout trap)' },
              { id: 'js-closures-4', name: 'Memory implications of closures' }
            ],
            resources: [
              { title: 'Akshay Saini — Namaste JS S1 Ep 10-14 (Closures Deep Dive)', url: 'https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP', type: 'playlist', lang: 'hindi' },
              { title: 'RoadsideCoder — Closure Interview Questions', url: 'https://www.youtube.com/watch?v=sZjlEKbaykc', type: 'video', lang: 'hindi' }
            ]
          },
          {
            id: 'js-functions',
            name: 'Functions + call/apply/bind + Polyfills',
            subSubTopics: [
              { id: 'js-functions-1', name: 'Declaration vs expression vs arrow function' },
              { id: 'js-functions-2', name: 'HOF (map filter reduce forEach)' },
              { id: 'js-functions-3', name: 'Pure functions vs impure' },
              { id: 'js-functions-4', name: 'Default + rest params + arguments object' },
              { id: 'js-functions-5', name: 'Currying + partial application' },
              { id: 'js-functions-6', name: 'call + apply + bind differences + use cases' },
              { id: 'js-functions-7', name: 'Polyfills for bind/call/apply from scratch' }
            ],
            resources: [
              { title: 'Akshay Saini — Namaste JS S1 Ep 13-14 (HOF + First Class Functions)', url: 'https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP', type: 'playlist', lang: 'hindi' },
              { title: 'RoadsideCoder — call apply bind Interview Questions', url: 'https://www.youtube.com/watch?v=VkmUOktYDAU', type: 'video', lang: 'hindi' },
              { title: 'RoadsideCoder — 12 Polyfills (Promise Bind Reduce Map etc.) (2024)', url: 'https://www.youtube.com/watch?v=Th3rZjfKKhI', type: 'video', lang: 'hindi' }
            ]
          },
          {
            id: 'js-this',
            name: 'this keyword',
            subSubTopics: [
              { id: 'js-this-1', name: '4 rules of this (implicit explicit new default)' },
              { id: 'js-this-2', name: 'this in regular vs arrow functions' },
              { id: 'js-this-3', name: 'call apply bind — differences' },
              { id: 'js-this-4', name: 'this in event listeners' },
              { id: 'js-this-5', name: 'Losing this — common mistakes + fixes' }
            ],
            resources: [
              { title: 'Akshay Saini — Namaste JS S2 Ep 6 (this keyword)', url: 'https://www.youtube.com/watch?v=9T4z98JcHR0', type: 'video', lang: 'hindi' }
            ]
          },
          {
            id: 'js-eventloop',
            name: 'Event Loop (Deep Dive)',
            subSubTopics: [
              { id: 'js-eventloop-1', name: 'Call stack + heap + Web APIs' },
              { id: 'js-eventloop-2', name: 'Callback queue (macrotask)' },
              { id: 'js-eventloop-3', name: 'Microtask queue (Promises MutationObserver queueMicrotask)' },
              { id: 'js-eventloop-4', name: 'Microtasks vs macrotasks priority order (interview must)' },
              { id: 'js-eventloop-5', name: 'Event loop cycle step-by-step' },
              { id: 'js-eventloop-6', name: 'setTimeout(fn, 0) — what it actually does' },
              { id: 'js-eventloop-7', name: 'requestAnimationFrame — where it fits' }
            ],
            resources: [
              { title: 'Akshay Saini — Namaste JS S1 Ep 15-16 (Best Event Loop Explanation)', url: 'https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP', type: 'playlist', lang: 'hindi' },
              { title: 'RoadsideCoder — Event Loop Output-Based Interview Questions', url: 'https://www.youtube.com/@RoadsideCoder/playlists', type: 'channel', lang: 'hindi' }
            ]
          },
          {
            id: 'js-promises',
            name: 'Callbacks + Promises',
            subSubTopics: [
              { id: 'js-promises-1', name: 'Callbacks + callback hell problem' },
              { id: 'js-promises-2', name: 'Promises (states: pending fulfilled rejected)' },
              { id: 'js-promises-3', name: 'Promise chaining' },
              { id: 'js-promises-4', name: 'Promise.all + allSettled + race + any — differences (interview must)' },
              { id: 'js-promises-5', name: 'Error handling in Promises' }
            ],
            resources: [
              { title: 'Akshay Saini — Namaste JS S2 Ep 1 (Callback Hell)', url: 'https://www.youtube.com/watch?v=yEKtJGha3yM', type: 'video', lang: 'hindi' },
              { title: 'Akshay Saini — Namaste JS S2 Ep 2-3 (Promises Deep Dive)', url: 'https://www.youtube.com/watch?v=ap-6PPAuK1Y', type: 'video', lang: 'hindi' },
              { title: 'Akshay Saini — Namaste JS Season 2 Full Playlist', url: 'https://www.youtube.com/playlist?list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX', type: 'playlist', lang: 'hindi' }
            ]
          },
          {
            id: 'js-async',
            name: 'async/await',
            subSubTopics: [
              { id: 'js-async-1', name: 'async/await as syntactic sugar over Promises' },
              { id: 'js-async-2', name: 'Error handling (try/catch with async/await)' },
              { id: 'js-async-3', name: 'AbortController (cancelling fetch requests)' },
              { id: 'js-async-4', name: 'Sequential vs parallel async operations' },
              { id: 'js-async-5', name: 'Race conditions + solutions' }
            ],
            resources: [
              { title: 'Akshay Saini — Namaste JS S2 Ep 4 (async/await)', url: 'https://www.youtube.com/watch?v=6nv3qy3oNkc', type: 'video', lang: 'hindi' }
            ]
          },
          {
            id: 'js-debounce',
            name: 'Debounce + Throttle + Performance Patterns',
            subSubTopics: [
              { id: 'js-debounce-1', name: 'Debounce implementation from scratch' },
              { id: 'js-debounce-2', name: 'Throttle implementation from scratch' },
              { id: 'js-debounce-3', name: 'When to use which' },
              { id: 'js-debounce-4', name: 'requestAnimationFrame for animations' }
            ],
            resources: [
              { title: 'RoadsideCoder — Debouncing and Throttling Interview Questions', url: 'https://www.youtube.com/watch?v=kCfTEoeQvQw', type: 'video', lang: 'hindi' }
            ]
          },
          {
            id: 'js-arrays',
            name: 'map/filter/reduce Polyfills + Array Methods',
            subSubTopics: [
              { id: 'js-arrays-1', name: 'map from scratch' },
              { id: 'js-arrays-2', name: 'filter from scratch' },
              { id: 'js-arrays-3', name: 'reduce from scratch' },
              { id: 'js-arrays-4', name: 'forEach from scratch' },
              { id: 'js-arrays-5', name: 'flat + flatMap' },
              { id: 'js-arrays-6', name: 'Array.from + Array.of + Array.isArray' },
              { id: 'js-arrays-7', name: 'sort — gotchas with default sorting' },
              { id: 'js-arrays-8', name: 'ES2023 immutable methods (toSorted toReversed toSpliced with)' },
              { id: 'js-arrays-9', name: 'Object.groupBy (ES2024)' },
              { id: 'js-arrays-10', name: 'Chaining array methods' }
            ],
            resources: [
              { title: 'RoadsideCoder — JS Interview Playlist (all polyfills)', url: 'https://www.youtube.com/playlist?list=PLKhlp2qtUcSZtJefDThsXcsAbRBCSTgW4', type: 'playlist', lang: 'hindi' }
            ]
          },
          {
            id: 'js-dom',
            name: 'DOM Manipulation + Events',
            subSubTopics: [
              { id: 'js-dom-1', name: 'Selecting elements (getElementById querySelector querySelectorAll)' },
              { id: 'js-dom-2', name: 'Creating + appending + removing elements' },
              { id: 'js-dom-3', name: 'innerHTML vs textContent vs innerText (differences + security)' },
              { id: 'js-dom-4', name: 'classList + dataset' },
              { id: 'js-dom-5', name: 'DOM traversal (parentNode children nextSibling)' },
              { id: 'js-dom-6', name: 'Event bubbling + capturing' },
              { id: 'js-dom-7', name: 'Event delegation — pattern + why important' },
              { id: 'js-dom-8', name: 'stopPropagation vs preventDefault vs stopImmediatePropagation' },
              { id: 'js-dom-9', name: 'Custom events (CustomEvent dispatchEvent)' },
              { id: 'js-dom-10', name: 'Debounce + throttle on events' }
            ],
            resources: [
              { title: 'RoadsideCoder — Event Delegation + Bubbling Interview Questions', url: 'https://www.youtube.com/@RoadsideCoder/playlists', type: 'channel', lang: 'hindi' },
              { title: 'Web Dev Simplified — DOM APIs', url: 'https://www.youtube.com/@WebDevSimplified', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'js-es6',
            name: 'ES6+ Features',
            subSubTopics: [
              { id: 'js-es6-1', name: 'Destructuring (arrays + objects nested default values renaming)' },
              { id: 'js-es6-2', name: 'Spread + rest operators' },
              { id: 'js-es6-3', name: 'Template literals (tagged templates)' },
              { id: 'js-es6-4', name: 'Optional chaining (?.)' },
              { id: 'js-es6-5', name: 'Nullish coalescing (??) — vs ||' },
              { id: 'js-es6-6', name: 'Logical assignment (&&= ||= ??=)' },
              { id: 'js-es6-7', name: 'Short-circuit evaluation' }
            ],
            resources: [
              { title: 'Fireship — Modern JS Features Quick Takes', url: 'https://www.youtube.com/@Fireship', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'js-prototypes',
            name: 'Prototypes + Inheritance + Classes',
            subSubTopics: [
              { id: 'js-prototypes-1', name: 'Prototype chain — how property lookup works' },
              { id: 'js-prototypes-2', name: '__proto__ vs prototype' },
              { id: 'js-prototypes-3', name: 'Object.create()' },
              { id: 'js-prototypes-4', name: 'Constructor functions' },
              { id: 'js-prototypes-5', name: 'ES6 Classes (syntactic sugar over prototypes)' },
              { id: 'js-prototypes-6', name: 'Inheritance with extends + super' },
              { id: 'js-prototypes-7', name: 'hasOwnProperty + in operator' },
              { id: 'js-prototypes-8', name: 'Static methods + properties' }
            ],
            resources: [
              { title: 'Akshay Saini — Namaste JS Prototype Chain', url: 'https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP', type: 'playlist', lang: 'hindi' },
              { title: 'Web Dev Simplified — Prototypes vs Classes', url: 'https://www.youtube.com/@WebDevSimplified/search?query=prototype', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'js-mapset',
            name: 'Map + Set + WeakMap + WeakSet',
            subSubTopics: [
              { id: 'js-mapset-1', name: 'Map vs Object — when to use which' },
              { id: 'js-mapset-2', name: 'Set — unique values + use cases' },
              { id: 'js-mapset-3', name: 'WeakMap + WeakSet — garbage collection + use cases' },
              { id: 'js-mapset-4', name: 'Remove duplicates from array using Set' }
            ],
            resources: [
              { title: 'Web Dev Simplified — Map Set WeakMap WeakSet', url: 'https://www.youtube.com/@WebDevSimplified/search?query=map+set', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'js-modules',
            name: 'Modules + Browser APIs + Design Patterns',
            subSubTopics: [
              { id: 'js-modules-1', name: 'ES Modules (import/export named vs default)' },
              { id: 'js-modules-2', name: 'Dynamic import() for code splitting' },
              { id: 'js-modules-3', name: 'Tree shaking — how it works with ES modules' },
              { id: 'js-modules-4', name: 'CommonJS vs ESM — differences' },
              { id: 'js-modules-5', name: 'fetch API' },
              { id: 'js-modules-6', name: 'localStorage + sessionStorage + cookies — differences + security' },
              { id: 'js-modules-7', name: 'Intersection Observer — lazy loading infinite scroll' },
              { id: 'js-modules-8', name: 'History API — pushState replaceState' },
              { id: 'js-modules-9', name: 'Design patterns (Module Observer Factory Singleton Proxy Strategy)' }
            ],
            resources: [
              { title: 'Fireship — JS Modules Explained', url: 'https://www.youtube.com/@Fireship', type: 'channel', lang: 'english' },
              { title: 'Web Dev Simplified — Browser APIs (per API videos)', url: 'https://www.youtube.com/@WebDevSimplified', type: 'channel', lang: 'english' },
              { title: 'RoadsideCoder — Design Patterns in JS', url: 'https://www.youtube.com/@RoadsideCoder/playlists', type: 'channel', lang: 'hindi' }
            ]
          },
          {
            id: 'js-modern',
            name: 'Modern JS (ES2022-2025) + Security',
            subSubTopics: [
              { id: 'js-modern-1', name: 'Array.at()' },
              { id: 'js-modern-2', name: 'Object.hasOwn()' },
              { id: 'js-modern-3', name: 'Error.cause' },
              { id: 'js-modern-4', name: 'Top-level await' },
              { id: 'js-modern-5', name: 'Private class fields (#field syntax)' },
              { id: 'js-modern-6', name: 'structuredClone' },
              { id: 'js-modern-7', name: 'Set methods ES2025 (union intersection difference)' },
              { id: 'js-modern-8', name: 'XSS prevention (sanitize input avoid innerHTML eval)' },
              { id: 'js-modern-9', name: 'CSRF basics' }
            ],
            resources: [
              { title: 'Fireship — Yearly JS Features Roundup Videos', url: 'https://www.youtube.com/@Fireship', type: 'channel', lang: 'english' }
            ]
          }
        ]
      },

      // ── TYPESCRIPT ───────────────────────────────────────────
      {
        id: 'typescript',
        name: 'TypeScript',
        subtopics: [
          {
            id: 'ts-setup',
            name: 'Why TypeScript + Setup + tsconfig + strict mode',
            subSubTopics: [
              { id: 'ts-setup-1', name: 'JS vs TS — static typing compile time errors' },
              { id: 'ts-setup-2', name: 'tsconfig.json key options (strict noImplicitAny strictNullChecks target module)' },
              { id: 'ts-setup-3', name: 'tsc compiler' },
              { id: 'ts-setup-4', name: 'TypeScript with Vite + React setup' }
            ],
            resources: [
              { title: 'Jack Herrington — No BS TS #1 Setup + Everyday Types', url: 'https://www.youtube.com/watch?v=LKVHFHJsiO0', type: 'video', lang: 'english' },
              { title: 'Jack Herrington — No BS TS Full Playlist', url: 'https://www.youtube.com/playlist?list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n', type: 'playlist', lang: 'english' },
              { title: 'Hitesh Choudhary — TypeScript Series (Hindi)', url: 'https://www.youtube.com/playlist?list=PLRAV69dS1uWRPSfKzwZsIm-Axxq-LxqhW', type: 'playlist', lang: 'hindi' }
            ]
          },
          {
            id: 'ts-types',
            name: 'Basic Types + any vs unknown vs never',
            subSubTopics: [
              { id: 'ts-types-1', name: 'string + number + boolean + null + undefined' },
              { id: 'ts-types-2', name: 'any — why to avoid' },
              { id: 'ts-types-3', name: 'unknown — safer alternative to any' },
              { id: 'ts-types-4', name: 'never — what it means + when it appears' },
              { id: 'ts-types-5', name: 'void' },
              { id: 'ts-types-6', name: 'Literal types ("success" | "error")' },
              { id: 'ts-types-7', name: 'Tuple — fixed-length arrays with typed positions' }
            ],
            resources: [
              { title: 'Matt Pocock — TypeScript Crash Course', url: 'https://www.youtube.com/watch?v=p6dO9u0M7MQ', type: 'video', lang: 'english' },
              { title: 'Jack Herrington — No BS TS #2 Functions + Types', url: 'https://www.youtube.com/watch?v=-TsIUuA3yyE', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'ts-interface',
            name: 'Type vs Interface + Union + Intersection + Discriminated Unions',
            subSubTopics: [
              { id: 'ts-interface-1', name: 'Type vs Interface differences (interview must)' },
              { id: 'ts-interface-2', name: 'Declaration merging — only interfaces can do this' },
              { id: 'ts-interface-3', name: 'When to use type vs interface' },
              { id: 'ts-interface-4', name: 'Union (A | B)' },
              { id: 'ts-interface-5', name: 'Intersection (A & B)' },
              { id: 'ts-interface-6', name: 'Discriminated unions pattern (loading/success/error states)' },
              { id: 'ts-interface-7', name: 'Type narrowing safely' }
            ],
            resources: [
              { title: 'Web Dev Simplified — Type vs Interface Which is Better', url: 'https://www.youtube.com/watch?v=dZWrIocSA1g', type: 'video', lang: 'english' },
              { title: 'Web Dev Simplified — Type Narrowing', url: 'https://www.youtube.com/watch?v=WAlJfSFngxw', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'ts-generics',
            name: 'Generics',
            subSubTopics: [
              { id: 'ts-generics-1', name: 'What generics are — reusable typed components' },
              { id: 'ts-generics-2', name: 'Generic functions + interfaces + types' },
              { id: 'ts-generics-3', name: 'Constraints (extends)' },
              { id: 'ts-generics-4', name: 'Default generic parameters' },
              { id: 'ts-generics-5', name: 'Multiple type parameters' },
              { id: 'ts-generics-6', name: 'Generic React components' },
              { id: 'ts-generics-7', name: 'Real examples: useFetch<T> Repository<T> ApiResponse<T>' }
            ],
            resources: [
              { title: 'Matt Pocock — TypeScript Generics', url: 'https://www.youtube.com/watch?v=YhO8MTIl0fw', type: 'video', lang: 'english' },
              { title: 'Matt Pocock — WHEN to Use a Generic', url: 'https://www.youtube.com/watch?v=lMfGp29Ht8c', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'ts-utility',
            name: 'Utility Types',
            subSubTopics: [
              { id: 'ts-utility-1', name: 'Partial<T> — all props optional' },
              { id: 'ts-utility-2', name: 'Required<T> — all props required' },
              { id: 'ts-utility-3', name: 'Readonly<T> — immutable' },
              { id: 'ts-utility-4', name: 'Pick<T, K> — select props' },
              { id: 'ts-utility-5', name: 'Omit<T, K> — exclude props' },
              { id: 'ts-utility-6', name: 'Record<K, V> — key-value map type' },
              { id: 'ts-utility-7', name: 'Exclude<T, U> + Extract<T, U> + NonNullable<T>' },
              { id: 'ts-utility-8', name: 'ReturnType<T> + Parameters<T> + Awaited<T> + InstanceType<T>' },
              { id: 'ts-utility-9', name: 'How Omit is built using mapped types + Exclude' }
            ],
            resources: [
              { title: 'Matt Pocock — Utility Types Blazing Fast', url: 'https://www.youtube.com/watch?v=EU0TB_8KHpY', type: 'video', lang: 'english' },
              { title: 'Matt Pocock — 6 TypeScript Tips (utility + mapped types)', url: 'https://www.youtube.com/watch?v=lraHlXpuhKs', type: 'video', lang: 'english' },
              { title: 'Total TypeScript — Free Interactive Exercises', url: 'https://www.totaltypescript.com', type: 'website', lang: 'english' }
            ]
          },
          {
            id: 'ts-advanced',
            name: 'Mapped Types + Conditional Types + infer + satisfies',
            subSubTopics: [
              { id: 'ts-advanced-1', name: 'Mapped types (keyof + in keyof)' },
              { id: 'ts-advanced-2', name: 'Conditional types (T extends U ? X : Y)' },
              { id: 'ts-advanced-3', name: 'infer keyword — extracting types within conditions' },
              { id: 'ts-advanced-4', name: 'Distributive conditional types' },
              { id: 'ts-advanced-5', name: 'Template literal types' },
              { id: 'ts-advanced-6', name: 'satisfies operator (validate type without widening)' },
              { id: 'ts-advanced-7', name: 'as const — making values readonly literals' }
            ],
            resources: [
              { title: 'Matt Pocock — Advanced TypeScript Playlist', url: 'https://www.youtube.com/playlist?list=PLIvujZeVDLMx040-j1W4WFs1BxuTGdI_b', type: 'playlist', lang: 'english' },
              { title: 'Matt Pocock — Infer is Easier Than You Think', url: 'https://www.youtube.com/watch?v=hLZXJTm7TEk', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'ts-react',
            name: 'TypeScript with React + APIs + Zod',
            subSubTopics: [
              { id: 'ts-react-1', name: 'Typing props + hooks (useState<T> useRef<HTMLElement> useReducer)' },
              { id: 'ts-react-2', name: 'Typing events (ChangeEvent MouseEvent FormEvent)' },
              { id: 'ts-react-3', name: 'Typing children + context' },
              { id: 'ts-react-4', name: 'Generic React components' },
              { id: 'ts-react-5', name: 'Zod (runtime validation + TS inference)' },
              { id: 'ts-react-6', name: 'z.infer<typeof schema> pattern' }
            ],
            resources: [
              { title: 'Jack Herrington — No BS TS #20-25 (React + TypeScript series)', url: 'https://www.youtube.com/playlist?list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n', type: 'playlist', lang: 'english' },
              { title: 'Codevolution — React + TypeScript Full Playlist', url: 'https://www.youtube.com/@Codevolution/playlists', type: 'channel', lang: 'english' },
              { title: 'Jack Herrington — Zod + TypeScript', url: 'https://www.youtube.com/@jherr/search?query=zod', type: 'channel', lang: 'english' }
            ]
          }
        ]
      },

      // ── REACT ────────────────────────────────────────────────
      {
        id: 'react',
        name: 'React',
        subtopics: [
          {
            id: 'react-core',
            name: 'Core Concepts (Virtual DOM + Reconciliation + Fiber)',
            subSubTopics: [
              { id: 'react-core-1', name: 'What React is — UI library not framework' },
              { id: 'react-core-2', name: 'Virtual DOM — what it is + how it works' },
              { id: 'react-core-3', name: 'Reconciliation + diffing algorithm' },
              { id: 'react-core-4', name: 'Fiber architecture + concurrent features' },
              { id: 'react-core-5', name: 'JSX — what it compiles to (React.createElement)' },
              { id: 'react-core-6', name: 'React tree — component tree element vs component' }
            ],
            resources: [
              { title: 'RoadsideCoder — Virtual DOM + Reconciliation Interview Questions', url: 'https://www.youtube.com/watch?v=4ewR-Ii2yWE', type: 'video', lang: 'hindi' },
              { title: 'Akshay Saini — Namaste React Full Playlist', url: 'https://www.youtube.com/playlist?list=PLlasXeu85E9dg5N37gDfclwzTqtoW7h5j', type: 'playlist', lang: 'hindi' }
            ]
          },
          {
            id: 'react-components',
            name: 'Components + Props + State',
            subSubTopics: [
              { id: 'react-components-1', name: 'Functional components' },
              { id: 'react-components-2', name: 'Props (drilling spread children)' },
              { id: 'react-components-3', name: 'Controlled vs uncontrolled components (interview must)' },
              { id: 'react-components-4', name: 'useState (batching functional updates lazy init state as snapshot stale closure)' },
              { id: 'react-components-5', name: 'Derived state — avoid unnecessary state' },
              { id: 'react-components-6', name: 'Lifting state up — sharing between siblings' }
            ],
            resources: [
              { title: 'RoadsideCoder — React JS Interview Questions Playlist', url: 'https://www.youtube.com/playlist?list=PLKhlp2qtUcSZiWKJTi5-5r6IRdHhxP9ZU', type: 'playlist', lang: 'hindi' },
              { title: 'Codevolution — React Fundamentals Playlist', url: 'https://www.youtube.com/@Codevolution/playlists', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'react-hooks-core',
            name: 'Core Hooks (useState + useEffect + useRef)',
            subSubTopics: [
              { id: 'react-hooks-core-1', name: 'useState — functional updates lazy init stale closure trap' },
              { id: 'react-hooks-core-2', name: 'useEffect — dependency array cleanup fetching AbortController StrictMode double-invocation' },
              { id: 'react-hooks-core-3', name: 'useRef — DOM access mutable values callback refs' },
              { id: 'react-hooks-core-4', name: 'useLayoutEffect — difference from useEffect (fires sync after DOM mutations)' }
            ],
            resources: [
              { title: 'Codevolution — React Hooks Full Playlist (useState through custom hooks)', url: 'https://www.youtube.com/watch?v=cF2lQ_gZeA8', type: 'video', lang: 'english' },
              { title: 'Codevolution — useEffect Hook', url: 'https://www.youtube.com/watch?v=06Y6aJzTmXY', type: 'video', lang: 'english' },
              { title: 'RoadsideCoder — useEffect Interview Questions + Stale Closure', url: 'https://www.youtube.com/watch?v=tNQuUgmv1Fs', type: 'video', lang: 'hindi' },
              { title: 'Web Dev Simplified — useEffect Deep Dive', url: 'https://www.youtube.com/@WebDevSimplified', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'react-perf-hooks',
            name: 'Performance Hooks (useMemo + useCallback + React.memo)',
            subSubTopics: [
              { id: 'react-perf-hooks-1', name: 'useMemo — memoizing expensive calculations' },
              { id: 'react-perf-hooks-2', name: 'useCallback — memoizing functions preventing re-renders' },
              { id: 'react-perf-hooks-3', name: 'React.memo — when it fails (object/function props recreated every render)' },
              { id: 'react-perf-hooks-4', name: 'When NOT to memoize — overhead vs benefit' }
            ],
            resources: [
              { title: 'Codevolution — useMemo', url: 'https://www.youtube.com/watch?v=qySZIzZvZOY', type: 'video', lang: 'english' },
              { title: 'Codevolution — useCallback', url: 'https://www.youtube.com/watch?v=IL82CzlaCys', type: 'video', lang: 'english' },
              { title: 'Jack Herrington — Mastering React Memo', url: 'https://www.youtube.com/watch?v=DEPwA3mv_R8', type: 'video', lang: 'english' },
              { title: 'Why React Re-renders — Every Performance Trick (Oct 2025)', url: 'https://www.youtube.com/watch?v=5nSsnXZTdDs', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'react-context',
            name: 'useContext + useReducer',
            subSubTopics: [
              { id: 'react-context-1', name: 'createContext + Provider + useContext' },
              { id: 'react-context-2', name: 'Default context value' },
              { id: 'react-context-3', name: 'Context re-render problem — all consumers re-render' },
              { id: 'react-context-4', name: 'Performance patterns (memoize value split contexts)' },
              { id: 'react-context-5', name: 'useReducer — when to use over useState' },
              { id: 'react-context-6', name: 'Dispatch + action → new state pattern' },
              { id: 'react-context-7', name: 'useReducer + Context = poor man\'s Redux pattern' }
            ],
            resources: [
              { title: 'Jack Herrington — Making React Context FAST', url: 'https://www.youtube.com/watch?v=ZKlXqrcBx88', type: 'video', lang: 'english' },
              { title: 'Codevolution — Context API + useReducer Playlists', url: 'https://www.youtube.com/@Codevolution/playlists', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'react-19',
            name: 'React 19 New Hooks + Features',
            subSubTopics: [
              { id: 'react-19-1', name: 'use() hook — reading Promises + context during render' },
              { id: 'react-19-2', name: 'useActionState — managing form action state' },
              { id: 'react-19-3', name: 'useOptimistic — optimistic UI updates during async' },
              { id: 'react-19-4', name: 'useFormStatus — reading parent form submission state' },
              { id: 'react-19-5', name: 'React Compiler — automatic memoization (replaces manual useMemo/useCallback)' },
              { id: 'react-19-6', name: 'Server Actions + Form Actions (action prop on form)' },
              { id: 'react-19-7', name: 'ref as prop (no more forwardRef needed)' },
              { id: 'react-19-8', name: 'Context as provider — <Context> instead of <Context.Provider>' }
            ],
            resources: [
              { title: 'All React 19 Features — useActionState useFormStatus useOptimistic (Feb 2026)', url: 'https://www.youtube.com/watch?v=H8RTMU5tVmU', type: 'video', lang: 'english' },
              { title: 'Jack Herrington — Master React 19.2 Async (Oct 2025)', url: 'https://www.youtube.com/watch?v=KI4gjUrOfOs', type: 'video', lang: 'english' },
              { title: 'React 19 All New Hooks in 20 mins (2024)', url: 'https://www.youtube.com/watch?v=iNQbsdhOqGI', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'react-rsc',
            name: 'React Server Components (RSC)',
            subSubTopics: [
              { id: 'react-rsc-1', name: 'What RSC is — renders on server zero JS sent to client' },
              { id: 'react-rsc-2', name: 'Server vs Client Components — when to use each' },
              { id: 'react-rsc-3', name: 'use client directive' },
              { id: 'react-rsc-4', name: 'use server directive' },
              { id: 'react-rsc-5', name: 'RSC benefits (smaller bundle direct DB access no waterfall)' },
              { id: 'react-rsc-6', name: 'RSC limitations (no useState useEffect event handlers browser APIs)' },
              { id: 'react-rsc-7', name: 'Composing SC + CC — passing server data as props' },
              { id: 'react-rsc-8', name: 'RSC vs SSR vs SSG differences (interview must)' }
            ],
            resources: [
              { title: 'Jack Herrington — Proof RSCs Are 2x Faster (2025)', url: 'https://www.youtube.com/watch?v=AJvbnNFHx0A', type: 'video', lang: 'english' },
              { title: 'RSC — CSR vs SSR vs RSC Explained (Oct 2025)', url: 'https://www.youtube.com/watch?v=XgGa-q31RDE', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'react-patterns',
            name: 'Component Patterns + Performance',
            subSubTopics: [
              { id: 'react-patterns-1', name: 'HOC (Higher Order Components)' },
              { id: 'react-patterns-2', name: 'Render Props pattern' },
              { id: 'react-patterns-3', name: 'Compound Components — flexible component APIs' },
              { id: 'react-patterns-4', name: 'Provider pattern' },
              { id: 'react-patterns-5', name: 'Custom hooks as pattern — extracting logic' },
              { id: 'react-patterns-6', name: 'Virtualization (react-window react-virtual for long lists)' },
              { id: 'react-patterns-7', name: 'Code splitting (React.lazy + Suspense)' },
              { id: 'react-patterns-8', name: 'React DevTools Profiler' }
            ],
            resources: [
              { title: 'RoadsideCoder — Design Patterns in React', url: 'https://www.youtube.com/@RoadsideCoder/playlists', type: 'channel', lang: 'hindi' },
              { title: 'Jack Herrington — Advanced Component Architecture', url: 'https://www.youtube.com/@jherr', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'react-router',
            name: 'React Router v6 + Forms + Error Handling',
            subSubTopics: [
              { id: 'react-router-1', name: 'BrowserRouter + Routes + Route + nested routes' },
              { id: 'react-router-2', name: 'useNavigate + useParams + useSearchParams + useLocation' },
              { id: 'react-router-3', name: 'Link vs NavLink' },
              { id: 'react-router-4', name: 'Outlet — rendering nested routes' },
              { id: 'react-router-5', name: 'Protected routes pattern' },
              { id: 'react-router-6', name: 'React Hook Form — performance advantage (uncontrolled)' },
              { id: 'react-router-7', name: 'Zod integration with React Hook Form' },
              { id: 'react-router-8', name: 'Error Boundaries (class component only in 2026)' },
              { id: 'react-router-9', name: 'react-error-boundary — useErrorBoundary hook' }
            ],
            resources: [
              { title: 'Codevolution — React Router v6 Playlist', url: 'https://www.youtube.com/@Codevolution/playlists', type: 'channel', lang: 'english' },
              { title: 'Jack Herrington — React Hook Form + Zod', url: 'https://www.youtube.com/@jherr/search?query=react+hook+form', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'react-testing',
            name: 'Testing in React (Jest + RTL)',
            subSubTopics: [
              { id: 'react-testing-1', name: 'Testing philosophy — test behavior not implementation' },
              { id: 'react-testing-2', name: 'render + screen + queries' },
              { id: 'react-testing-3', name: 'getBy vs queryBy vs findBy — differences (interview must)' },
              { id: 'react-testing-4', name: 'userEvent vs fireEvent — userEvent preferred' },
              { id: 'react-testing-5', name: 'Async testing (waitFor findBy)' },
              { id: 'react-testing-6', name: 'Mocking (jest.mock MSW Mock Service Worker)' },
              { id: 'react-testing-7', name: 'renderHook — testing custom hooks' },
              { id: 'react-testing-8', name: 'getByRole — accessibility-first preferred query' }
            ],
            resources: [
              { title: 'Codevolution — React Testing Full Playlist', url: 'https://www.youtube.com/playlist?list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd', type: 'playlist', lang: 'english' },
              { title: 'Master React Testing with Jest and RTL (Aug 2023)', url: 'https://www.youtube.com/watch?v=NLFPvO8_hMQ', type: 'video', lang: 'english' }
            ]
          }
        ]
      },

      // ── STATE MANAGEMENT ─────────────────────────────────────
      {
        id: 'state-management',
        name: 'State Management',
        subtopics: [
          {
            id: 'sm-zustand',
            name: 'State Classification + Zustand',
            subSubTopics: [
              { id: 'sm-zustand-1', name: 'Local vs global vs server vs URL vs form state classification' },
              { id: 'sm-zustand-2', name: 'What Zustand is — pub-sub + useSyncExternalStore' },
              { id: 'sm-zustand-3', name: 'create() + selectors + set() + functional updates' },
              { id: 'sm-zustand-4', name: 'Async actions in Zustand' },
              { id: 'sm-zustand-5', name: 'Middleware (persist devtools immer)' },
              { id: 'sm-zustand-6', name: 'TypeScript with Zustand' },
              { id: 'sm-zustand-7', name: 'Zustand vs Context API — re-render problem solved' }
            ],
            resources: [
              { title: 'Jack Herrington — Master React State Management (architecture)', url: 'https://www.youtube.com/watch?v=iA-7G1Mllyw', type: 'video', lang: 'english' },
              { title: 'Jack Herrington — Zustand New React State Manager', url: 'https://www.youtube.com/watch?v=_qCRuFrdhYw', type: 'video', lang: 'english' },
              { title: 'Jack Herrington — Mastering TypeScript State with Zustand', url: 'https://www.youtube.com/watch?v=sqTPGMipjHk', type: 'video', lang: 'english' },
              { title: 'Piyush Garg — Zustand Hindi Tutorial', url: 'https://www.youtube.com/@piyushgargdev/playlists', type: 'channel', lang: 'hindi' }
            ]
          },
          {
            id: 'sm-redux',
            name: 'Redux Toolkit (RTK)',
            subSubTopics: [
              { id: 'sm-redux-1', name: 'createSlice (name initialState reducers Immer built-in auto-generated actions)' },
              { id: 'sm-redux-2', name: 'createAsyncThunk (pending fulfilled rejected lifecycle)' },
              { id: 'sm-redux-3', name: 'configureStore (combining slices DevTools built-in)' },
              { id: 'sm-redux-4', name: 'createSelector (Reselect memoized derived selectors)' },
              { id: 'sm-redux-5', name: 'RTK Query (createApi query vs mutation auto-generated hooks cache invalidation)' },
              { id: 'sm-redux-6', name: 'RTK Query vs TanStack Query — when each' }
            ],
            resources: [
              { title: 'Codevolution — Redux Toolkit Full Playlist', url: 'https://www.youtube.com/playlist?list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3', type: 'playlist', lang: 'english' },
              { title: 'RoadsideCoder — Redux Toolkit Complete Tutorial with Project (2024)', url: 'https://www.youtube.com/watch?v=-ovliZG617g', type: 'video', lang: 'hindi' },
              { title: 'Redux Toolkit + RTK Query Interview Q&A (2025)', url: 'https://www.youtube.com/watch?v=nuJOGfExuTs', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'sm-tanstack',
            name: 'TanStack Query v5',
            subSubTopics: [
              { id: 'sm-tanstack-1', name: 'queryKey (array format as dependency + cache key)' },
              { id: 'sm-tanstack-2', name: 'queryFn — async function returning data' },
              { id: 'sm-tanstack-3', name: 'isLoading vs isFetching — difference (interview must)' },
              { id: 'sm-tanstack-4', name: 'enabled (conditional fetching)' },
              { id: 'sm-tanstack-5', name: 'staleTime vs gcTime (formerly cacheTime)' },
              { id: 'sm-tanstack-6', name: 'useMutation (mutate onSuccess onError onSettled)' },
              { id: 'sm-tanstack-7', name: 'Cache invalidation (invalidateQueries setQueryData)' },
              { id: 'sm-tanstack-8', name: 'useInfiniteQuery (fetchNextPage hasNextPage)' },
              { id: 'sm-tanstack-9', name: 'Prefetching + optimistic updates (useOptimistic)' }
            ],
            resources: [
              { title: 'TanStack React Query v5 Full Guide — Setup to Optimistic Updates (Mar 2025)', url: 'https://www.youtube.com/watch?v=_EuPZrr3faU', type: 'video', lang: 'english' },
              { title: 'TanStack Query God-Tier Deep Dive (Jun 2025)', url: 'https://www.youtube.com/watch?v=KkxPtimqaew', type: 'video', lang: 'english' },
              { title: 'TkDodo — All About TanStack Query v5', url: 'https://www.youtube.com/watch?v=ur_318WWswA', type: 'video', lang: 'english' }
            ]
          }
        ]
      },

      // ── NEXT.JS ──────────────────────────────────────────────
      {
        id: 'nextjs',
        name: 'Next.js',
        subtopics: [
          {
            id: 'nextjs-approuter',
            name: 'App Router Fundamentals',
            subSubTopics: [
              { id: 'nextjs-approuter-1', name: 'File-based routing (page.js layout.js template.js loading.js error.js not-found.js route.js)' },
              { id: 'nextjs-approuter-2', name: 'Static + dynamic + nested routes ([id] [...slug] [[...slug]])' },
              { id: 'nextjs-approuter-3', name: 'Route groups + private folders' },
              { id: 'nextjs-approuter-4', name: 'Parallel routes (@slot) + intercepting routes (.) — modal patterns' },
              { id: 'nextjs-approuter-5', name: 'useParams + usePathname + useSearchParams' }
            ],
            resources: [
              { title: 'ByteGrad — Next.js Tutorial 2026 (Jun 2025)', url: 'https://www.youtube.com/watch?v=KAQCHfu_3jw', type: 'video', lang: 'english' },
              { title: 'ByteGrad — NEXT.js Full Course 2025 App Router (Aug 2025)', url: 'https://www.youtube.com/watch?v=COZjeh1_B-k', type: 'video', lang: 'english' },
              { title: 'Piyush Garg — Next.JS Full Course Hindi Playlist', url: 'https://www.youtube.com/playlist?list=PLwGdqUZWnOp0lwvSBaIzzgV9X0ZiZ-42O', type: 'playlist', lang: 'hindi' }
            ]
          },
          {
            id: 'nextjs-rendering',
            name: 'Rendering + Data Fetching + Caching',
            subSubTopics: [
              { id: 'nextjs-rendering-1', name: 'SSR vs SSG vs ISR vs CSR vs PPR (interview must)' },
              { id: 'nextjs-rendering-2', name: 'Async Server Components — fetch directly in component' },
              { id: 'nextjs-rendering-3', name: 'Extended fetch API (cache: force-cache vs no-store + revalidate)' },
              { id: 'nextjs-rendering-4', name: 'Parallel data fetching (Promise.all in Server Components)' },
              { id: 'nextjs-rendering-5', name: 'generateStaticParams — pre-generating dynamic routes at build' },
              { id: 'nextjs-rendering-6', name: '4 caching layers (request memoization data cache full route cache router cache)' },
              { id: 'nextjs-rendering-7', name: 'revalidatePath + revalidateTag' }
            ],
            resources: [
              { title: 'Next.js App Router Caching Explained (2024)', url: 'https://www.youtube.com/watch?v=VBlSe8tvg4U', type: 'video', lang: 'english' },
              { title: 'Composition Caching + Architecture in Modern Next.js (Dec 2025)', url: 'https://www.youtube.com/watch?v=iRGc8KQDyQ8', type: 'video', lang: 'english' },
              { title: 'Jack Herrington — Next.js Caching Deep Dive', url: 'https://www.youtube.com/@jherr', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'nextjs-actions',
            name: 'Server Actions + Middleware + Auth',
            subSubTopics: [
              { id: 'nextjs-actions-1', name: 'Server Actions — use server directive' },
              { id: 'nextjs-actions-2', name: 'Form Actions (action prop on <form> with Server Action)' },
              { id: 'nextjs-actions-3', name: 'Progressive enhancement — works without JS' },
              { id: 'nextjs-actions-4', name: 'useActionState — handling action state' },
              { id: 'nextjs-actions-5', name: 'Middleware (runs before request matches route edge runtime matcher)' },
              { id: 'nextjs-actions-6', name: 'NextAuth.js / Auth.js — OAuth credentials JWT sessions' },
              { id: 'nextjs-actions-7', name: 'cookies() — reading/writing in Server Components' },
              { id: 'nextjs-actions-8', name: 'Protecting Server Actions' }
            ],
            resources: [
              { title: 'Jack Herrington — Server Actions + RSC (2025)', url: 'https://www.youtube.com/watch?v=t9xB8xvySyo', type: 'video', lang: 'english' },
              { title: 'Next.js 14 Server Actions + RSC + useFormState (2023)', url: 'https://www.youtube.com/watch?v=BCQK4STfzn4', type: 'video', lang: 'english' },
              { title: 'Piyush Garg — Next.js Auth with Kinde (Hindi)', url: 'https://www.youtube.com/watch?v=RnRqHBp98S8', type: 'video', lang: 'hindi' }
            ]
          },
          {
            id: 'nextjs-optimization',
            name: 'Image + Font + Script Optimization + Metadata',
            subSubTopics: [
              { id: 'nextjs-optimization-1', name: 'next/image (lazy loading WebP/AVIF CLS prevention priority prop)' },
              { id: 'nextjs-optimization-2', name: 'next/font (zero layout shift Google Fonts self-hosted)' },
              { id: 'nextjs-optimization-3', name: 'next/script (beforeInteractive afterInteractive lazyOnload worker strategies)' },
              { id: 'nextjs-optimization-4', name: 'Static metadata object — export const metadata' },
              { id: 'nextjs-optimization-5', name: 'generateMetadata() async function for dynamic metadata' },
              { id: 'nextjs-optimization-6', name: 'Open Graph + Twitter card + robots + canonical' }
            ],
            resources: [
              { title: 'Codevolution — next/image next/font Tutorials', url: 'https://www.youtube.com/@Codevolution/playlists', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'nextjs-pages',
            name: 'Pages Router (Legacy Awareness)',
            subSubTopics: [
              { id: 'nextjs-pages-1', name: 'getStaticProps (SSG data fetching)' },
              { id: 'nextjs-pages-2', name: 'getServerSideProps (SSR data fetching)' },
              { id: 'nextjs-pages-3', name: 'getStaticPaths (dynamic SSG routes)' },
              { id: 'nextjs-pages-4', name: '_app.tsx + _document.tsx' },
              { id: 'nextjs-pages-5', name: 'pages/api/ routes' },
              { id: 'nextjs-pages-6', name: 'Pages Router vs App Router migration — common interview topic' }
            ],
            resources: [
              { title: 'ByteGrad — Pages Router Content', url: 'https://www.youtube.com/@ByteGrad/search?query=pages+router', type: 'channel', lang: 'english' }
            ]
          }
        ]
      },

      // ── NODE.JS + EXPRESS + NESTJS ───────────────────────────
      {
        id: 'nodejs',
        name: 'Node.js + Express + NestJS',
        subtopics: [
          {
            id: 'nodejs-core',
            name: 'Node.js Core + npm',
            subSubTopics: [
              { id: 'nodejs-core-1', name: 'V8 engine + non-blocking I/O + single-threaded' },
              { id: 'nodejs-core-2', name: 'Event loop phases (timers I/O idle poll check close)' },
              { id: 'nodejs-core-3', name: 'setImmediate vs setTimeout vs process.nextTick — execution order (interview must)' },
              { id: 'nodejs-core-4', name: 'fs + path + http + events + process + crypto modules' },
              { id: 'nodejs-core-5', name: 'CommonJS (require module.exports) vs ES Modules in Node' },
              { id: 'nodejs-core-6', name: 'npm + package.json + package-lock.json' },
              { id: 'nodejs-core-7', name: 'npm vs yarn vs pnpm — differences + why pnpm is faster' }
            ],
            resources: [
              { title: 'Piyush Garg — How NodeJS Works Internally (Feb 2024)', url: 'https://www.youtube.com/watch?v=_eJ6KAb56Gw', type: 'video', lang: 'hindi' },
              { title: 'Piyush Garg — Master NodeJS Playlist', url: 'https://www.youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo', type: 'playlist', lang: 'hindi' }
            ]
          },
          {
            id: 'nodejs-express',
            name: 'Express.js + REST API Design',
            subSubTopics: [
              { id: 'nodejs-express-1', name: 'Express server setup + app.listen()' },
              { id: 'nodejs-express-2', name: 'Routing (app.get post put delete patch) + Express Router' },
              { id: 'nodejs-express-3', name: 'Middleware types (built-in third-party custom error-handling) + execution order' },
              { id: 'nodejs-express-4', name: 'REST principles + HTTP status codes + resource naming + versioning + pagination' },
              { id: 'nodejs-express-5', name: 'CORS (preflight requests credentials)' },
              { id: 'nodejs-express-6', name: 'JWT auth (access token + refresh token jsonwebtoken)' },
              { id: 'nodejs-express-7', name: 'Centralized error handling middleware' },
              { id: 'nodejs-express-8', name: 'Security (helmet rate-limiting input sanitization)' }
            ],
            resources: [
              { title: 'Piyush Garg — Express.js + REST API Tutorial Hindi (Jan 2024)', url: 'https://www.youtube.com/watch?v=qthiEMUZrX4', type: 'video', lang: 'hindi' },
              { title: 'Codevolution — Express REST API Structured Playlist', url: 'https://www.youtube.com/@Codevolution/playlists', type: 'channel', lang: 'english' },
              { title: 'Hussein Nasser — Security Headers + HTTP Deep Dives', url: 'https://www.youtube.com/@hnasr', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'nodejs-db',
            name: 'Database Integration (Mongoose + Prisma)',
            subSubTopics: [
              { id: 'nodejs-db-1', name: 'MongoDB + Mongoose (schema model CRUD populate indexes aggregation hooks)' },
              { id: 'nodejs-db-2', name: 'Prisma (schema migrations typed queries)' },
              { id: 'nodejs-db-3', name: 'Connection pooling basics' },
              { id: 'nodejs-db-4', name: 'Environment-based DB config' }
            ],
            resources: [
              { title: 'Piyush Garg — Mongoose Full Integration Hindi', url: 'https://www.youtube.com/@piyushgargdev/playlists', type: 'channel', lang: 'hindi' },
              { title: 'Jack Herrington — Prisma with TypeScript', url: 'https://www.youtube.com/@jherr', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'nodejs-nestjs',
            name: 'NestJS (Awareness)',
            subSubTopics: [
              { id: 'nodejs-nestjs-1', name: 'What NestJS is — opinionated Angular-inspired Node framework' },
              { id: 'nodejs-nestjs-2', name: 'Modules + Controllers + Services architecture' },
              { id: 'nodejs-nestjs-3', name: 'Dependency injection' },
              { id: 'nodejs-nestjs-4', name: 'Decorators (@Controller @Get @Injectable)' },
              { id: 'nodejs-nestjs-5', name: 'Pipes (validation + transformation) + Guards (auth) + Interceptors (logging)' }
            ],
            resources: [
              { title: 'Codevolution — NestJS Full Playlist (most comprehensive)', url: 'https://www.youtube.com/@Codevolution/playlists', type: 'channel', lang: 'english' },
              { title: 'NestJS Crash Course Playlist (2024)', url: 'https://www.youtube.com/playlist?list=PLT5Jhb7lgSBMEqOsbiGuKwntRY_SqWW6o', type: 'playlist', lang: 'english' }
            ]
          }
        ]
      },

      // ── BUILD TOOLS ──────────────────────────────────────────
      {
        id: 'build-tools',
        name: 'Build Tools (Vite + Webpack)',
        subtopics: [
          {
            id: 'bt-concepts',
            name: 'Why Bundlers Exist + Core Concepts',
            subSubTopics: [
              { id: 'bt-concepts-1', name: 'Entry + output + dependency graph' },
              { id: 'bt-concepts-2', name: 'Loaders/transforms — processing non-JS files' },
              { id: 'bt-concepts-3', name: 'Tree shaking — removing unused exports' },
              { id: 'bt-concepts-4', name: 'Code splitting — splitting output into multiple chunks' },
              { id: 'bt-concepts-5', name: 'Lazy loading — loading chunks on demand' },
              { id: 'bt-concepts-6', name: 'Source maps — mapping minified code back to original' },
              { id: 'bt-concepts-7', name: 'HMR (Hot Module Replacement)' },
              { id: 'bt-concepts-8', name: 'Minification — removing whitespace shortening names' }
            ],
            resources: [
              { title: 'Why Vite\'s Dev Server Feels Instant (Sep 2025)', url: 'https://www.youtube.com/watch?v=dfV1FzXD5no', type: 'video', lang: 'english' },
              { title: 'Webpack vs Vite vs Turbopack — Future of Bundlers (Apr 2025)', url: 'https://www.youtube.com/watch?v=_xgctwn9_Sw', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'bt-vite',
            name: 'Vite + Code Splitting + ESLint + Prettier',
            subSubTopics: [
              { id: 'bt-vite-1', name: 'Vite dev server — no bundling serves ESM natively' },
              { id: 'bt-vite-2', name: 'vite.config.ts — plugins base outDir' },
              { id: 'bt-vite-3', name: 'import.meta.env (VITE_ prefix)' },
              { id: 'bt-vite-4', name: 'Dev proxy for CORS' },
              { id: 'bt-vite-5', name: 'Code splitting with dynamic import()' },
              { id: 'bt-vite-6', name: 'React.lazy + Suspense for component-level splitting' },
              { id: 'bt-vite-7', name: 'Bundle analysis — Vite bundle visualizer' },
              { id: 'bt-vite-8', name: 'ESLint flat config + eslint-plugin-react + @typescript-eslint' },
              { id: 'bt-vite-9', name: 'Prettier (.prettierrc) + eslint-config-prettier' },
              { id: 'bt-vite-10', name: 'Husky + lint-staged — run ESLint + Prettier on pre-commit' }
            ],
            resources: [
              { title: 'Fireship — Vite in 100 Seconds', url: 'https://www.youtube.com/watch?v=KCrXgy8qtjM', type: 'video', lang: 'english' },
              { title: 'Jack Herrington — Code Splitting Made Simple', url: 'https://www.youtube.com/watch?v=7kNLXE0hixM', type: 'video', lang: 'english' },
              { title: 'Real-World React Performance Code Splitting Lazy Loading (Jul 2025)', url: 'https://www.youtube.com/watch?v=MYV2NU3UaJE', type: 'video', lang: 'english' }
            ]
          }
        ]
      },

      // ── TESTING ──────────────────────────────────────────────
      {
        id: 'testing',
        name: 'Testing (Jest + RTL + Mocha)',
        subtopics: [
          {
            id: 'testing-jest',
            name: 'Jest Core + Mocking',
            subSubTopics: [
              { id: 'testing-jest-1', name: 'Test file naming (.test.js .spec.js __tests__ folder)' },
              { id: 'testing-jest-2', name: 'describe + it/test + expect' },
              { id: 'testing-jest-3', name: 'Matchers (toBe toEqual toContain toThrow toHaveBeenCalled toHaveBeenCalledWith)' },
              { id: 'testing-jest-4', name: 'toBe vs toEqual — reference vs deep equality (interview must)' },
              { id: 'testing-jest-5', name: 'beforeEach afterEach beforeAll afterAll — setup + teardown' },
              { id: 'testing-jest-6', name: 'jest.fn() + jest.mock() + jest.spyOn()' },
              { id: 'testing-jest-7', name: 'mockReturnValue + mockResolvedValue + mockRejectedValue' },
              { id: 'testing-jest-8', name: 'MSW (Mock Service Worker) — intercepts at network level' },
              { id: 'testing-jest-9', name: 'Async testing (waitFor findBy async/await)' },
              { id: 'testing-jest-10', name: 'Snapshot testing + code coverage' }
            ],
            resources: [
              { title: 'Codevolution — React Testing Tutorial (Ep 1 Introduction)', url: 'https://www.youtube.com/watch?v=T2sv8jXoP4s', type: 'video', lang: 'english' },
              { title: 'Codevolution — React Testing Full Playlist', url: 'https://www.youtube.com/playlist?list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd', type: 'playlist', lang: 'english' }
            ]
          },
          {
            id: 'testing-rtl',
            name: 'React Testing Library + Mocha Basics',
            subSubTopics: [
              { id: 'testing-rtl-1', name: 'render + screen — mounting component in test environment' },
              { id: 'testing-rtl-2', name: 'Query types (getBy queryBy findBy) — differences' },
              { id: 'testing-rtl-3', name: 'Query priority: getByRole > getByLabelText > getByText > getByTestId' },
              { id: 'testing-rtl-4', name: 'userEvent vs fireEvent — userEvent simulates real user interactions' },
              { id: 'testing-rtl-5', name: 'Async queries (waitFor findBy)' },
              { id: 'testing-rtl-6', name: 'renderHook — testing custom hooks' },
              { id: 'testing-rtl-7', name: 'Custom render wrapper for context + providers' },
              { id: 'testing-rtl-8', name: 'What NOT to test — implementation details internal state' },
              { id: 'testing-rtl-9', name: 'Mocha basics (describe + it + Chai assertions — seen in legacy codebases)' }
            ],
            resources: [
              { title: 'Master React Testing with Jest and RTL (Aug 2023)', url: 'https://www.youtube.com/watch?v=NLFPvO8_hMQ', type: 'video', lang: 'english' },
              { title: 'Web Dev Simplified — RTL Philosophy + Patterns', url: 'https://www.youtube.com/@WebDevSimplified', type: 'channel', lang: 'english' }
            ]
          }
        ]
      },

      // ── BROWSER DEVTOOLS ─────────────────────────────────────
      {
        id: 'devtools',
        name: 'Browser DevTools + Debugging',
        subtopics: [
          {
            id: 'devtools-panels',
            name: 'All DevTools Panels + Debugging JS + CSS',
            subSubTopics: [
              { id: 'devtools-panels-1', name: 'Elements + Console + Sources + Network + Performance + Memory + Application + Lighthouse + Rendering panels' },
              { id: 'devtools-panels-2', name: 'Breakpoints (conditional breakpoints logpoints)' },
              { id: 'devtools-panels-3', name: 'Step over + step into + step out' },
              { id: 'devtools-panels-4', name: 'Watch expressions + call stack + scope panel' },
              { id: 'devtools-panels-5', name: 'Inspecting computed styles' },
              { id: 'devtools-panels-6', name: 'Flexbox + Grid visual inspector' },
              { id: 'devtools-panels-7', name: 'Forced element states (:hover :focus :active)' }
            ],
            resources: [
              { title: 'Google Chrome Developers — Official Channel (most authoritative + updated)', url: 'https://www.youtube.com/@ChromeDevs', type: 'channel', lang: 'english' },
              { title: 'Chrome DevTools — Monitor Core Web Vitals with Performance Panel (Jan 2025)', url: 'https://www.youtube.com/watch?v=18zeqk_ftpk', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'devtools-network',
            name: 'Network Tab + Performance + React DevTools',
            subSubTopics: [
              { id: 'devtools-network-1', name: 'Request types + status codes + headers + payload + timing' },
              { id: 'devtools-network-2', name: 'Throttling (3G slow 4G) + blocking requests' },
              { id: 'devtools-network-3', name: 'Recording performance trace' },
              { id: 'devtools-network-4', name: 'Flame chart + long tasks + FPS meter' },
              { id: 'devtools-network-5', name: 'Core Web Vitals markers in DevTools' },
              { id: 'devtools-network-6', name: 'React DevTools Components tab — inspect props state hooks context' },
              { id: 'devtools-network-7', name: 'React DevTools Profiler tab — render time per component' },
              { id: 'devtools-network-8', name: 'Highlight updates — seeing unnecessary re-renders' }
            ],
            resources: [
              { title: 'Chrome DevTools — Monitor Live Core Web Vitals (Oct 2024)', url: 'https://www.youtube.com/watch?v=M5oe010pYbA', type: 'video', lang: 'english' },
              { title: 'Jack Herrington — React DevTools + Real App Debugging', url: 'https://www.youtube.com/@jherr', type: 'channel', lang: 'english' }
            ]
          }
        ]
      },

      // ── FRONTEND DESIGN SYSTEMS ──────────────────────────────
      {
        id: 'design-systems',
        name: 'Frontend Design Systems',
        subtopics: [
          {
            id: 'ds-tokens',
            name: 'Design Tokens + Component Architecture + Storybook',
            subSubTopics: [
              { id: 'ds-tokens-1', name: 'What a design system is (tokens + components + guidelines + documentation + process)' },
              { id: 'ds-tokens-2', name: 'Design tokens (color spacing typography border radius z-index breakpoints)' },
              { id: 'ds-tokens-3', name: 'Global vs semantic tokens (--color-blue-500 vs --color-brand-primary)' },
              { id: 'ds-tokens-4', name: 'CSS custom properties as tokens' },
              { id: 'ds-tokens-5', name: 'Primitive vs composite components' },
              { id: 'ds-tokens-6', name: 'Composition over configuration' },
              { id: 'ds-tokens-7', name: 'Compound component pattern (Table with Table.Row Table.Cell)' },
              { id: 'ds-tokens-8', name: 'Headless components (Radix UI Headless UI) — logic without styling' },
              { id: 'ds-tokens-9', name: 'Component API design (props naming polymorphic forwarding refs accessible defaults)' },
              { id: 'ds-tokens-10', name: 'Theming + dark mode via token swap' },
              { id: 'ds-tokens-11', name: 'Storybook (stories args actions docs play function visual regression)' }
            ],
            resources: [
              { title: 'Jack Herrington — Component Architecture + Design Systems', url: 'https://www.youtube.com/@jherr', type: 'channel', lang: 'english' },
              { title: 'Kevin Powell — CSS Custom Properties for Design Tokens', url: 'https://www.youtube.com/watch?v=40K1pvxEwlE', type: 'video', lang: 'english' },
              { title: 'Chirag Goel — Frontend System Design Machine Coding', url: 'https://www.youtube.com/@engineerchirag', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'ds-systemdesign',
            name: 'Frontend System Design',
            subSubTopics: [
              { id: 'ds-systemdesign-1', name: 'HLD + LLD for frontend systems' },
              { id: 'ds-systemdesign-2', name: 'Real-world case studies (Netflix etc.)' },
              { id: 'ds-systemdesign-3', name: 'Component library design questions' },
              { id: 'ds-systemdesign-4', name: 'State management architecture' },
              { id: 'ds-systemdesign-5', name: 'Rendering optimization' },
              { id: 'ds-systemdesign-6', name: 'Offline support + accessibility + logging + monitoring' }
            ],
            resources: [
              { title: 'Chirag Goel — Chakde System Design Playlist (FREE)', url: 'https://www.youtube.com/playlist?list=PL4CFloQ4GGWICE0Tz6iXKfN3XWkXRlboU', type: 'playlist', lang: 'english' },
              { title: 'Chirag Goel — Deep Dive into Frontend System Design', url: 'https://www.youtube.com/watch?v=Dec8-lYnKq8', type: 'video', lang: 'english' },
              { title: 'GreatFrontEnd — System Design Written Guides (Free Tier)', url: 'https://greatfrontend.com/system-design', type: 'website', lang: 'english' }
            ]
          }
        ]
      },

      // ── WEB PERFORMANCE ──────────────────────────────────────
      {
        id: 'web-performance',
        name: 'Web Performance',
        subtopics: [
          {
            id: 'wp-cwv',
            name: 'Core Web Vitals + Critical Rendering Path',
            subSubTopics: [
              { id: 'wp-cwv-1', name: 'LCP (Largest Contentful Paint) — target under 2.5s' },
              { id: 'wp-cwv-2', name: 'INP (Interaction to Next Paint) — replaced FID 2024 target under 200ms' },
              { id: 'wp-cwv-3', name: 'CLS (Cumulative Layout Shift) — target under 0.1' },
              { id: 'wp-cwv-4', name: 'Lab vs field data — Lighthouse (lab) vs CrUX (real users) — senior distinction' },
              { id: 'wp-cwv-5', name: 'Browser rendering steps (HTML parse → DOM → CSSOM → Render Tree → Layout → Paint → Composite)' },
              { id: 'wp-cwv-6', name: 'Render-blocking resources — CSS + synchronous JS' },
              { id: 'wp-cwv-7', name: 'async vs defer on script tags — differences + when to use each' },
              { id: 'wp-cwv-8', name: 'Preload + prefetch + preconnect — resource hints' },
              { id: 'wp-cwv-9', name: 'Critical CSS — inlining above-the-fold CSS' }
            ],
            resources: [
              { title: 'Core Web Vitals 2025 — INP LCP CLS Explained (Jul 2025)', url: 'https://www.youtube.com/watch?v=m_yWVuf8ZkE', type: 'video', lang: 'english' },
              { title: 'Google Chrome Developers — Official CWV Channel', url: 'https://www.youtube.com/@ChromeDevs', type: 'channel', lang: 'english' },
              { title: 'Optimize for Core Web Vitals (Google I/O hands-on)', url: 'https://www.youtube.com/watch?v=AQqFZ5t8uNc', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'wp-loading',
            name: 'Loading + Runtime + Caching Performance',
            subSubTopics: [
              { id: 'wp-loading-1', name: 'Code splitting + dynamic import + React.lazy' },
              { id: 'wp-loading-2', name: 'Tree shaking' },
              { id: 'wp-loading-3', name: 'Bundle size analysis (bundlephobia Vite visualizer)' },
              { id: 'wp-loading-4', name: 'Minification + Brotli compression' },
              { id: 'wp-loading-5', name: 'CDN + HTTP/2 + HTTP/3' },
              { id: 'wp-loading-6', name: 'Image optimization (WebP AVIF srcset lazy loading)' },
              { id: 'wp-loading-7', name: 'Web Workers — offloading CPU tasks off main thread' },
              { id: 'wp-loading-8', name: 'Virtualization — react-window rendering only visible rows' },
              { id: 'wp-loading-9', name: 'Debounce + throttle' },
              { id: 'wp-loading-10', name: 'requestAnimationFrame — scheduling visual updates correctly' },
              { id: 'wp-loading-11', name: 'Memory leaks (event listeners closures detached DOM nodes)' },
              { id: 'wp-loading-12', name: 'Cache-Control headers + stale-while-revalidate + Service Workers' },
              { id: 'wp-loading-13', name: 'React.memo + useTransition + useDeferredValue' }
            ],
            resources: [
              { title: 'Jack Herrington — Real-World React Performance Code Splitting Lazy Loading (Jul 2025)', url: 'https://www.youtube.com/watch?v=MYV2NU3UaJE', type: 'video', lang: 'english' },
              { title: 'Hussein Nasser — HTTP Caching + Cache-Control Deep Dive', url: 'https://www.youtube.com/@hnasr', type: 'channel', lang: 'english' }
            ]
          }
        ]
      },

      // ── WEB SECURITY ─────────────────────────────────────────
      {
        id: 'web-security',
        name: 'Web Security',
        subtopics: [
          {
            id: 'ws-xss',
            name: 'XSS + CSRF + CSP + Security Headers',
            subSubTopics: [
              { id: 'ws-xss-1', name: 'XSS types (Stored Reflected DOM-based)' },
              { id: 'ws-xss-2', name: 'XSS prevention (React auto-escaping dangerouslySetInnerHTML DOMPurify textContent CSP)' },
              { id: 'ws-xss-3', name: 'CSRF + prevention (SameSite cookie CSRF tokens HttpOnly Origin/Referer check)' },
              { id: 'ws-xss-4', name: 'CSP (Content-Security-Policy header directives script-src nonces report-only mode)' },
              { id: 'ws-xss-5', name: 'Security headers (HSTS X-Content-Type-Options X-Frame-Options Referrer-Policy)' },
              { id: 'ws-xss-6', name: 'helmet in Express — sets all security headers automatically' }
            ],
            resources: [
              { title: 'Hussein Nasser — 1 Hour of Popular Web Attacks (XSS CSRF SSRF SQL Injection)', url: 'https://www.youtube.com/watch?v=pdC3H8SX-F4', type: 'video', lang: 'english' },
              { title: 'JWT Storage — Why Token Storage Could Be Your Biggest Risk (Nov 2025)', url: 'https://www.youtube.com/watch?v=vTroMvQy6K0', type: 'video', lang: 'english' },
              { title: 'Hussein Nasser — Full Security Channel', url: 'https://www.youtube.com/@hnasr', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'ws-cors',
            name: 'CORS + Cookies + JWT Security + OWASP',
            subSubTopics: [
              { id: 'ws-cors-1', name: 'Same Origin Policy — browser security foundation' },
              { id: 'ws-cors-2', name: 'CORS (Access-Control-Allow-Origin preflight requests credentials common mistakes)' },
              { id: 'ws-cors-3', name: 'Secure cookie attributes (HttpOnly Secure SameSite)' },
              { id: 'ws-cors-4', name: 'JWT in localStorage vs HttpOnly cookie — tradeoff (interview must)' },
              { id: 'ws-cors-5', name: 'Dependency security (npm audit Snyk Dependabot)' },
              { id: 'ws-cors-6', name: 'Input validation — frontend = UX only backend = always required' },
              { id: 'ws-cors-7', name: 'OWASP Top 10 awareness' }
            ],
            resources: [
              { title: 'Hussein Nasser — CSRF vs SSRF Explained', url: 'https://www.youtube.com/watch?v=a7OMdTuYaGc', type: 'video', lang: 'english' },
              { title: 'Web Dev Simplified — Auth Security Patterns', url: 'https://www.youtube.com/@WebDevSimplified', type: 'channel', lang: 'english' }
            ]
          }
        ]
      },

      // ── CI/CD ────────────────────────────────────────────────
      {
        id: 'cicd',
        name: 'CI/CD + GitHub Actions',
        subtopics: [
          {
            id: 'cicd-ghactions',
            name: 'CI/CD Concepts + GitHub Actions',
            subSubTopics: [
              { id: 'cicd-ghactions-1', name: 'CI vs CD vs Continuous Deployment — differences (interview must)' },
              { id: 'cicd-ghactions-2', name: 'Pipeline stages (trigger install lint type-check test build deploy)' },
              { id: 'cicd-ghactions-3', name: 'GitHub Actions (.github/workflows/*.yml)' },
              { id: 'cicd-ghactions-4', name: 'on + jobs + steps + runs-on + uses + env + secrets' },
              { id: 'cicd-ghactions-5', name: 'actions/checkout + actions/setup-node' },
              { id: 'cicd-ghactions-6', name: 'Caching (actions/cache keyed on package-lock.json hash)' },
              { id: 'cicd-ghactions-7', name: 'Matrix strategy — test on multiple Node versions' },
              { id: 'cicd-ghactions-8', name: 'Branch protection + require CI to pass before merge' },
              { id: 'cicd-ghactions-9', name: 'Preview deployments — per-PR ephemeral environments' },
              { id: 'cicd-ghactions-10', name: 'Secrets management — GitHub Secrets encrypted vars' }
            ],
            resources: [
              { title: 'TechWorld with Nana — GitHub Actions Tutorial CI/CD with Docker', url: 'https://www.youtube.com/watch?v=R8_veQiYBjI', type: 'video', lang: 'english' },
              { title: 'TechWorld with Nana — Full Channel', url: 'https://www.youtube.com/c/TechWorldwithNana', type: 'channel', lang: 'english' }
            ]
          }
        ]
      },

      // ── DOCKER ───────────────────────────────────────────────
      {
        id: 'docker',
        name: 'Docker',
        subtopics: [
          {
            id: 'docker-core',
            name: 'Docker Core (Dockerfile + Compose + Multi-stage)',
            subSubTopics: [
              { id: 'docker-core-1', name: 'Container vs Image — image is recipe container is running instance' },
              { id: 'docker-core-2', name: 'Dockerfile (FROM WORKDIR COPY RUN EXPOSE CMD ENV ARG)' },
              { id: 'docker-core-3', name: '.dockerignore' },
              { id: 'docker-core-4', name: 'Layer caching — order matters for speed' },
              { id: 'docker-core-5', name: 'docker build + run + ps + stop + rm + images + logs + exec + pull + push' },
              { id: 'docker-core-6', name: 'Port mapping (-p hostPort:containerPort)' },
              { id: 'docker-core-7', name: 'docker-compose.yml (services ports volumes environment depends_on)' },
              { id: 'docker-core-8', name: 'docker compose up + down + --build' },
              { id: 'docker-core-9', name: 'Multi-stage builds (build in Node serve in nginx — smaller production image)' },
              { id: 'docker-core-10', name: 'Volumes + bind mounts' },
              { id: 'docker-core-11', name: 'Bridge network — containers communicate by service name' },
              { id: 'docker-core-12', name: 'Docker in CI/CD pipeline (build → push to registry → deploy)' }
            ],
            resources: [
              { title: 'TechWorld with Nana — Docker Tutorial for Beginners (Full Course 3 hrs)', url: 'https://www.youtube.com/watch?v=3c-iBn73dDE', type: 'video', lang: 'english' },
              { title: 'Abhishek Veeramalla — Everything About Docker (multi-stage volumes networking)', url: 'https://www.youtube.com/watch?v=3F1ZOkqK7Ww', type: 'video', lang: 'english' },
              { title: 'Abhishek Veeramalla — Docker Playlist', url: 'https://www.youtube.com/playlist?list=PLdpzxOOAlwvLjb0vTD9BXLOwwLD_GWCmC', type: 'playlist', lang: 'english' }
            ]
          }
        ]
      },

      // ── KUBERNETES + AWS ─────────────────────────────────────
      {
        id: 'k8s-aws',
        name: 'Kubernetes + AWS Basics',
        subtopics: [
          {
            id: 'k8s-core',
            name: 'Kubernetes Concepts + AWS Core Services',
            subSubTopics: [
              { id: 'k8s-core-1', name: 'K8s — cluster node pod deployment service ingress configmap secret namespace' },
              { id: 'k8s-core-2', name: 'EKS vs ECS — K8s standard vs AWS-native simpler' },
              { id: 'k8s-core-3', name: 'AWS core (S3 CloudFront Lambda API Gateway IAM Route53 Secrets Manager SQS SNS)' },
              { id: 'k8s-core-4', name: 'React app → S3 → CloudFront → users pattern' },
              { id: 'k8s-core-5', name: 'Serverless vs EC2 — Lambda functions no server management' },
              { id: 'k8s-core-6', name: 'Cold start — Lambda delay on first invocation after idle' },
              { id: 'k8s-core-7', name: 'Region + Availability Zone' }
            ],
            resources: [
              { title: 'TechWorld with Nana — Kubernetes Crash Course', url: 'https://www.youtube.com/c/TechWorldwithNana', type: 'channel', lang: 'english' },
              { title: 'Abhishek Veeramalla — Kubernetes Zero to Hero', url: 'https://www.youtube.com/watch?v=myo7U-B2MvA', type: 'video', lang: 'english' },
              { title: 'Abhishek Veeramalla — Free DevOps Playlist (Docker + K8s + AWS)', url: 'https://www.youtube.com/playlist?list=PLdpzxOOAlwvIKMhk8WhzN1pYoJ1YU8Csa', type: 'playlist', lang: 'english' }
            ]
          },
          {
            id: 'aws-bedrock',
            name: 'AWS Bedrock + Cognito + Amplify',
            subSubTopics: [
              { id: 'aws-bedrock-1', name: 'Bedrock — managed GenAI service (Claude Titan Llama models InvokeModel Converse API)' },
              { id: 'aws-bedrock-2', name: 'Bedrock features (Knowledge Bases Agents Guardrails fine-tuning)' },
              { id: 'aws-bedrock-3', name: 'Bedrock vs SageMaker — using existing models vs training custom' },
              { id: 'aws-bedrock-4', name: 'Cognito — User Pools vs Identity Pools (JWT tokens social login MFA)' },
              { id: 'aws-bedrock-5', name: 'Cognito IAM roles (authenticatedRole unauthenticatedRole)' },
              { id: 'aws-bedrock-6', name: 'Amplify — Gen1 vs Gen2 (Auth Storage Hosting Functions amplify push)' },
              { id: 'aws-bedrock-7', name: 'Amplify with React (@aws-amplify/ui-react withAuthenticator HOC)' },
              { id: 'aws-bedrock-8', name: 'Full pattern: React → Cognito login → Identity Pool → IAM → Lambda → Bedrock' },
              { id: 'aws-bedrock-9', name: 'AccessDeniedException — IAM role missing bedrock:InvokeModel permission' }
            ],
            resources: [
              { title: 'AWS Official YouTube Channel (Bedrock Cognito Amplify tutorials)', url: 'https://www.youtube.com/@AWSEventsChannel', type: 'channel', lang: 'english' },
              { title: 'Abhishek Veeramalla — AWS Hindi Deep Dives', url: 'https://www.youtube.com/abhishekveeramalla', type: 'channel', lang: 'hindi' }
            ]
          }
        ]
      },

      // ── DATABASES ────────────────────────────────────────────
      {
        id: 'databases',
        name: 'Databases',
        subtopics: [
          {
            id: 'db-all',
            name: 'MongoDB + Mongoose + Redis + SQL Basics',
            subSubTopics: [
              { id: 'db-all-1', name: 'SQL vs NoSQL — when to use each + ACID properties' },
              { id: 'db-all-2', name: 'MongoDB — document database collections CRUD' },
              { id: 'db-all-3', name: 'Mongoose — schema model populate indexes aggregation pipeline' },
              { id: 'db-all-4', name: 'Embedding vs referencing documents — tradeoffs' },
              { id: 'db-all-5', name: 'Redis — in-memory key-value store (caching session rate limiting pub/sub BullMQ TTL)' },
              { id: 'db-all-6', name: 'Redis data structures (String Hash List Set Sorted Set)' },
              { id: 'db-all-7', name: 'SQL (SELECT WHERE JOINs GROUP BY aggregations)' },
              { id: 'db-all-8', name: 'Indexes — clustered vs non-clustered' },
              { id: 'db-all-9', name: 'Normalization (1NF 2NF 3NF)' },
              { id: 'db-all-10', name: 'Transactions + ACID' },
              { id: 'db-all-11', name: 'Second highest salary query (classic interview SQL)' }
            ],
            resources: [
              { title: 'Piyush Garg — MongoDB with Node.js Hindi (Jan 2024)', url: 'https://www.youtube.com/watch?v=IKpuBj8I3Qg', type: 'video', lang: 'hindi' },
              { title: 'MongoDB Tutorial in 1 Hour (Official 2024)', url: 'https://www.youtube.com/watch?v=J6mDkcqU_ZE', type: 'video', lang: 'english' },
              { title: 'Hussein Nasser — Redis + PostgreSQL Deep Dives', url: 'https://www.youtube.com/@hnasr', type: 'channel', lang: 'english' }
            ]
          }
        ]
      },

      // ── DSA ──────────────────────────────────────────────────
      {
        id: 'dsa',
        name: 'DSA (JavaScript)',
        subtopics: [
          {
            id: 'dsa-complexity',
            name: 'Time + Space Complexity + Arrays + Strings + Hash Maps',
            subSubTopics: [
              { id: 'dsa-complexity-1', name: 'Big O notation (O(1) O(n) O(log n) O(n²) O(n log n))' },
              { id: 'dsa-complexity-2', name: 'Time vs space complexity' },
              { id: 'dsa-complexity-3', name: 'Best average worst case' },
              { id: 'dsa-complexity-4', name: 'Two pointers pattern' },
              { id: 'dsa-complexity-5', name: 'Sliding window pattern' },
              { id: 'dsa-complexity-6', name: 'Frequency counter pattern (Map/Set)' },
              { id: 'dsa-complexity-7', name: 'Common problems: reverse array find duplicates two sum max subarray anagram palindrome' }
            ],
            resources: [
              { title: 'RoadsideCoder — DSA in JavaScript Playlist', url: 'https://www.youtube.com/playlist?list=PLKhlp2qtUcSZtJefDThsXcsAbRBCSTgW4', type: 'playlist', lang: 'hindi' },
              { title: 'NeetCode — Pattern-Based DSA (all playlists)', url: 'https://www.youtube.com/@NeetCode/playlists', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'dsa-structures',
            name: 'Stacks + Queues + Linked Lists + Trees + Recursion',
            subSubTopics: [
              { id: 'dsa-structures-1', name: 'Stack (LIFO push pop — valid parentheses min stack)' },
              { id: 'dsa-structures-2', name: 'Queue (FIFO BFS task scheduling)' },
              { id: 'dsa-structures-3', name: 'Linked list (reverse detect cycle Floyd\'s algorithm find middle)' },
              { id: 'dsa-structures-4', name: 'Binary tree — DFS (inorder preorder postorder) + BFS (level order)' },
              { id: 'dsa-structures-5', name: 'Common tree problems (max depth invert same tree level order)' },
              { id: 'dsa-structures-6', name: 'Recursion (base case memoization flatten nested array deep clone)' },
              { id: 'dsa-structures-7', name: 'Tree traversal (relevance to DOM + React component tree)' }
            ],
            resources: [
              { title: 'Striver A2Z DSA Course (language-agnostic)', url: 'https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz', type: 'playlist', lang: 'hindi' },
              { title: 'NeetCode — Tree Traversal Patterns', url: 'https://www.youtube.com/@NeetCode/playlists', type: 'channel', lang: 'english' },
              { title: 'Aditya Verma — DP Series (best Hindi DP resource)', url: 'https://www.youtube.com/@adityavermaforyou/playlists', type: 'channel', lang: 'hindi' }
            ]
          },
          {
            id: 'dsa-polyfills',
            name: 'Polyfills + Machine Coding (Frontend Specific)',
            subSubTopics: [
              { id: 'dsa-polyfills-1', name: 'map from scratch' },
              { id: 'dsa-polyfills-2', name: 'filter from scratch' },
              { id: 'dsa-polyfills-3', name: 'reduce from scratch' },
              { id: 'dsa-polyfills-4', name: 'bind from scratch' },
              { id: 'dsa-polyfills-5', name: 'call from scratch' },
              { id: 'dsa-polyfills-6', name: 'apply from scratch' },
              { id: 'dsa-polyfills-7', name: 'Promise.all from scratch' },
              { id: 'dsa-polyfills-8', name: 'Debounce + throttle implementation' },
              { id: 'dsa-polyfills-9', name: 'Flatten nested object/array' },
              { id: 'dsa-polyfills-10', name: 'Deep clone object' },
              { id: 'dsa-polyfills-11', name: 'Custom Event Emitter (pub/sub pattern)' },
              { id: 'dsa-polyfills-12', name: 'Virtual DOM diffing concept' }
            ],
            resources: [
              { title: 'RoadsideCoder — 12 Polyfills from Scratch (2024)', url: 'https://www.youtube.com/watch?v=Th3rZjfKKhI', type: 'video', lang: 'hindi' },
              { title: 'Chirag Goel — Machine Coding Problems for Frontend', url: 'https://www.youtube.com/@engineerchirag', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'dsa-sorting',
            name: 'Sorting + Binary Search + Practice Platforms',
            subSubTopics: [
              { id: 'dsa-sorting-1', name: 'Bubble sort O(n²) — know conceptually' },
              { id: 'dsa-sorting-2', name: 'Merge sort O(n log n) — divide and conquer' },
              { id: 'dsa-sorting-3', name: 'Quick sort O(n log n) average — in-place' },
              { id: 'dsa-sorting-4', name: 'JS Array.sort() — uses TimSort internally + comparison function' },
              { id: 'dsa-sorting-5', name: 'Binary search O(log n) — requires sorted array left right mid pointer' },
              { id: 'dsa-sorting-6', name: 'Search in rotated array' }
            ],
            resources: [
              { title: 'NeetCode — Binary Search + Sorting Patterns', url: 'https://www.youtube.com/@NeetCode/playlists', type: 'channel', lang: 'english' },
              { title: 'GreatFrontEnd — Frontend DSA in JS (practice platform)', url: 'https://greatfrontend.com', type: 'website', lang: 'english' }
            ]
          }
        ]
      },

      // ── UI/UX + FIGMA ────────────────────────────────────────
      {
        id: 'uiux',
        name: 'UI/UX + Figma',
        subtopics: [
          {
            id: 'uiux-principles',
            name: 'UI/UX Principles + Figma for Developers',
            subSubTopics: [
              { id: 'uiux-principles-1', name: 'UI vs UX — visual interface vs overall experience' },
              { id: 'uiux-principles-2', name: 'User-centered design' },
              { id: 'uiux-principles-3', name: 'Visual hierarchy + consistency + feedback + affordance + whitespace + mobile-first' },
              { id: 'uiux-principles-4', name: 'Nielsen\'s 10 Usability Heuristics' },
              { id: 'uiux-principles-5', name: 'Figma frames + auto layout + components + variants + variables' },
              { id: 'uiux-principles-6', name: 'Dev mode — inspect CSS values spacing assets exports' },
              { id: 'uiux-principles-7', name: 'Developer handoff — reading Figma specs without asking designer' },
              { id: 'uiux-principles-8', name: 'Design tokens in Figma (light/dark mode variables)' },
              { id: 'uiux-principles-9', name: 'Prototyping basics — connecting frames triggers smart animate' }
            ],
            resources: [
              { title: 'DesignCourse — 2026 Figma Crash Course (Jan 2026 — freshest)', url: 'https://www.youtube.com/watch?v=PASsk7lxTrc', type: 'video', lang: 'english' },
              { title: 'DesignCourse — Learn UI/UX in 30 Days (free series)', url: 'https://www.youtube.com/playlist?list=PL0lNJEnwfVVOQ8qKmLoT7tLdTDKhEDzmG', type: 'playlist', lang: 'english' },
              { title: 'Figma Variables Masterclass 2025', url: 'https://www.youtube.com/watch?v=425aMhpDTSY', type: 'video', lang: 'english' },
              { title: 'DesignCourse — How to Use Figma Dev Mode', url: 'https://www.youtube.com/watch?v=wk9xSDNboZw', type: 'video', lang: 'english' }
            ]
          }
        ]
      }

    ] // end frontend topics
  },

  // ============================================================
  // TRACK 2 — AI ENGINEER
  // ============================================================
  {
    id: 'ai',
    name: 'AI Engineer',
    color: '#a8d4f5',
    daysPerWeek: 2,
    topics: [

      // ── PYTHON FOR AI ────────────────────────────────────────
      {
        id: 'python-ai',
        name: 'Python for AI',
        subtopics: [
          {
            id: 'python-basics',
            name: 'Python Basics for JS Developers',
            subSubTopics: [
              { id: 'python-basics-1', name: 'Variables (no let/const just assignment)' },
              { id: 'python-basics-2', name: 'Types (int float str bool list dict tuple set None)' },
              { id: 'python-basics-3', name: 'Type hints (def func(name: str) -> int:)' },
              { id: 'python-basics-4', name: 'f-strings (f"Hello {name}")' },
              { id: 'python-basics-5', name: 'List comprehensions ([x*2 for x in items])' },
              { id: 'python-basics-6', name: 'Dictionary comprehensions ({k: v for k, v in items})' },
              { id: 'python-basics-7', name: '*args + **kwargs + unpacking' },
              { id: 'python-basics-8', name: 'Decorators (@decorator syntax)' },
              { id: 'python-basics-9', name: 'Generators (yield keyword + lazy evaluation)' },
              { id: 'python-basics-10', name: 'Context managers (with statement __enter__ __exit__)' },
              { id: 'python-basics-11', name: 'venv + pip + requirements.txt' },
              { id: 'python-basics-12', name: 'async/await in Python (asyncio)' }
            ],
            resources: [
              { title: 'Hitesh Choudhary / Chai aur Code — Python Series Hindi', url: 'https://www.youtube.com/@chaiaurcode', type: 'channel', lang: 'hindi' },
              { title: 'Corey Schafer — Python Tutorials (English clean structured)', url: 'https://www.youtube.com/@coreyms', type: 'channel', lang: 'english' }
            ]
          },
          {
            id: 'python-numpy',
            name: 'NumPy + Pandas + Scikit-learn',
            subSubTopics: [
              { id: 'python-numpy-1', name: 'NumPy — ndarray shape reshape vectorized ops broadcasting indexing slicing' },
              { id: 'python-numpy-2', name: 'NumPy — np.mean np.sum np.max np.dot (matrix multiply)' },
              { id: 'python-numpy-3', name: 'Pandas — DataFrame Series read_csv head info describe shape' },
              { id: 'python-numpy-4', name: 'Pandas — selecting filtering groupby sort_values merge join' },
              { id: 'python-numpy-5', name: 'Pandas — handling missing values (dropna fillna)' },
              { id: 'python-numpy-6', name: 'Scikit-learn — train_test_split + fit/predict pattern' },
              { id: 'python-numpy-7', name: 'Scikit-learn — LinearRegression LogisticRegression RandomForest KMeans' },
              { id: 'python-numpy-8', name: 'Scikit-learn — evaluation metrics (accuracy precision recall F1 confusion matrix)' },
              { id: 'python-numpy-9', name: 'ML fundamentals — supervised vs unsupervised vs reinforcement learning' },
              { id: 'python-numpy-10', name: 'ML fundamentals — overfitting vs underfitting + bias-variance tradeoff' },
              { id: 'python-numpy-11', name: 'ML fundamentals — feature engineering + normalization + standardization' }
            ],
            resources: [
              { title: 'CampusX — NumPy + Pandas + Scikit-learn Hindi (in-depth data science focused)', url: 'https://www.youtube.com/@campusx-official/playlists', type: 'channel', lang: 'hindi' },
              { title: 'CampusX — Master Scikit-learn (Hindi Feb 2024)', url: 'https://www.youtube.com/watch?v=YyFuIubbqpo', type: 'video', lang: 'hindi' },
              { title: 'Scikit-Learn Full Crash Course (Aug 2025)', url: 'https://www.youtube.com/watch?v=SIEaLBXr0rk', type: 'video', lang: 'english' },
              { title: 'Krish Naik — Complete Data Science + GenAI Playlist 2024', url: 'https://www.youtube.com/watch?v=w8wGej-WN64', type: 'video', lang: 'english' },
              { title: 'Data Analysis with Python — NumPy Pandas Visualization (freeCodeCamp)', url: 'https://www.youtube.com/watch?v=GPVsHOlRBBI', type: 'video', lang: 'english' }
            ]
          }
        ]
      },

      // ── NLP + TRANSFORMERS + BERT ────────────────────────────
      {
        id: 'nlp-transformers',
        name: 'NLP Fundamentals + Transformers + BERT',
        subtopics: [
          {
            id: 'nlp-fundamentals',
            name: 'NLP Fundamentals + Text Representation',
            subSubTopics: [
              { id: 'nlp-fundamentals-1', name: 'What NLP is + use cases' },
              { id: 'nlp-fundamentals-2', name: 'Tokenization + stopwords + stemming + lemmatization' },
              { id: 'nlp-fundamentals-3', name: 'Bag of Words (BoW) — word frequency count ignores order' },
              { id: 'nlp-fundamentals-4', name: 'TF-IDF — term frequency × inverse document frequency' },
              { id: 'nlp-fundamentals-5', name: 'Word embeddings (Word2Vec GloVe)' },
              { id: 'nlp-fundamentals-6', name: 'Static vs contextual embeddings problem ("bank" river vs bank money)' },
              { id: 'nlp-fundamentals-7', name: 'NLP tasks (classification NER translation summarization QA generation)' }
            ],
            resources: [
              { title: 'CampusX — NLP Full Playlist Hindi', url: 'https://www.youtube.com/@campusx-official', type: 'channel', lang: 'hindi' },
              { title: 'Krish Naik Hindi — NLP Playlists', url: 'https://www.youtube.com/@krishnaikhindi/playlists', type: 'channel', lang: 'hindi' }
            ]
          },
          {
            id: 'transformers-bert',
            name: 'Transformers Architecture + BERT',
            subSubTopics: [
              { id: 'transformers-bert-1', name: 'Why Transformers changed everything (vs RNNs LSTMs — parallelizable)' },
              { id: 'transformers-bert-2', name: 'Self-attention mechanism (Query Key Value attention score)' },
              { id: 'transformers-bert-3', name: 'Multi-head attention — multiple attention patterns simultaneously' },
              { id: 'transformers-bert-4', name: 'Transformer architecture (encoder decoder positional encoding FFN layer norm residual)' },
              { id: 'transformers-bert-5', name: 'BERT (bidirectional encoder MLM NSP pre-training fine-tuning)' },
              { id: 'transformers-bert-6', name: 'BERT variants (RoBERTa DistilBERT ALBERT Sentence-BERT/SBERT)' },
              { id: 'transformers-bert-7', name: 'BERT vs GPT — encoder bidirectional (understanding) vs decoder left-to-right (generation)' },
              { id: 'transformers-bert-8', name: 'Embeddings — cosine similarity sentence embeddings use in RAG' }
            ],
            resources: [
              { title: 'Andrej Karpathy — Deep Dive into LLMs like ChatGPT (Feb 2025 — MUST WATCH FIRST)', url: 'https://www.youtube.com/watch?v=7xTGNNLPyMI', type: 'video', lang: 'english' },
              { title: 'Andrej Karpathy — Neural Networks Zero to Hero (build GPT from scratch)', url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ', type: 'playlist', lang: 'english' },
              { title: 'HuggingFace Transformers + BERT + Pipelines (Sep 2025)', url: 'https://www.youtube.com/watch?v=KGUmhQMUBgo', type: 'video', lang: 'english' },
              { title: 'Fine-Tuning BERT for NLP Classification Sentiment QA (Jul 2025)', url: 'https://www.youtube.com/watch?v=3gj8wyZOkV8', type: 'video', lang: 'english' },
              { title: 'PyTorch + HuggingFace — Re-implementing BERT (Jun 2025)', url: 'https://www.youtube.com/watch?v=wVrHPZz5jic', type: 'video', lang: 'english' }
            ]
          }
        ]
      },

      // ── PYTORCH ──────────────────────────────────────────────
      {
        id: 'pytorch',
        name: 'PyTorch',
        subtopics: [
          {
            id: 'pytorch-core',
            name: 'PyTorch Core (Tensors + Autograd + Training Loop)',
            subSubTopics: [
              { id: 'pytorch-core-1', name: 'Tensors — creation shape reshape .to(device) operations requires_grad' },
              { id: 'pytorch-core-2', name: 'Autograd — forward pass loss.backward() optimizer.step() optimizer.zero_grad()' },
              { id: 'pytorch-core-3', name: 'Why zero_grad — gradients accumulate by default' },
              { id: 'pytorch-core-4', name: 'nn.Module — __init__ + forward() method' },
              { id: 'pytorch-core-5', name: 'nn.Linear + activations (ReLU Sigmoid Softmax) + nn.Dropout + nn.Embedding' },
              { id: 'pytorch-core-6', name: 'nn.Sequential — stacking layers' },
              { id: 'pytorch-core-7', name: 'Training loop pattern (DataLoader Dataset loss functions optimizers)' },
              { id: 'pytorch-core-8', name: 'model.train() vs model.eval() — switches dropout/batch norm behavior' },
              { id: 'pytorch-core-9', name: 'GPU usage (torch.cuda.is_available() .to(device))' },
              { id: 'pytorch-core-10', name: 'Saving + loading models (state_dict)' }
            ],
            resources: [
              { title: 'PyTorch in a Day — Daniel Bourke (most beginner friendly)', url: 'https://www.youtube.com/watch?v=Z_ikDlimN6A', type: 'video', lang: 'english' },
              { title: 'PyTorch for Deep Learning Full Course — freeCodeCamp Daniel Bourke', url: 'https://www.youtube.com/watch?v=V_xro1bcAuA', type: 'video', lang: 'english' },
              { title: 'PyTorch Tutorials Playlist — Aladdin Persson (deeper than basics)', url: 'https://www.youtube.com/playlist?list=PLhhyoLH6IjfxeoooqP9rhU3HJIAVAJ3Vz', type: 'playlist', lang: 'english' },
              { title: 'CampusX — PyTorch Hindi', url: 'https://www.youtube.com/@campusx-official', type: 'channel', lang: 'hindi' }
            ]
          }
        ]
      },

      // ── HUGGINGFACE ──────────────────────────────────────────
      {
        id: 'huggingface',
        name: 'HuggingFace',
        subtopics: [
          {
            id: 'hf-core',
            name: 'HuggingFace (from_pretrained + Pipelines + Fine-tuning + Sentence Transformers)',
            subSubTopics: [
              { id: 'hf-core-1', name: 'What HuggingFace Hub is — 50000+ pre-trained models' },
              { id: 'hf-core-2', name: 'from_pretrained() — download + load any model' },
              { id: 'hf-core-3', name: 'Tokenizer (AutoTokenizer input_ids attention_mask truncation padding max_length)' },
              { id: 'hf-core-4', name: 'Pipeline API (text-classification text-generation summarization QA NER feature-extraction)' },
              { id: 'hf-core-5', name: 'Fine-tuning with Trainer API (AutoModelForSequenceClassification TrainingArguments Trainer push_to_hub)' },
              { id: 'hf-core-6', name: 'LoRA / PEFT — parameter-efficient fine-tuning (awareness)' },
              { id: 'hf-core-7', name: 'Sentence Transformers (SentenceTransformer cosine similarity)' },
              { id: 'hf-core-8', name: 'HuggingFace datasets library' }
            ],
            resources: [
              { title: 'HuggingFace Transformers LLMs RAG Fine-Tuning (Mar 2025)', url: 'https://www.youtube.com/watch?v=2olcoOLdxrc', type: 'video', lang: 'english' },
              { title: 'Applied AI — HuggingFace Transformers + BERT + Pipelines (Sep 2025)', url: 'https://www.youtube.com/watch?v=KGUmhQMUBgo', type: 'video', lang: 'english' },
              { title: 'Krish Naik — HuggingFace Tutorials', url: 'https://www.youtube.com/@krishnaik06', type: 'channel', lang: 'english' }
            ]
          }
        ]
      },

      // ── GENAI FUNDAMENTALS + PROMPT ENGINEERING ──────────────
      {
        id: 'genai-fundamentals',
        name: 'GenAI Fundamentals + Prompt Engineering',
        subtopics: [
          {
            id: 'genai-concepts',
            name: 'GenAI Fundamentals + LLM Concepts',
            subSubTopics: [
              { id: 'genai-concepts-1', name: 'Generative vs discriminative AI' },
              { id: 'genai-concepts-2', name: 'LLMs — parameters context window tokens (~0.75 words per token)' },
              { id: 'genai-concepts-3', name: 'Temperature (0 = deterministic 1 = creative)' },
              { id: 'genai-concepts-4', name: 'top-p (nucleus sampling) + top-k + max_tokens' },
              { id: 'genai-concepts-5', name: 'System prompt + few-shot + zero-shot learning' },
              { id: 'genai-concepts-6', name: 'Chain of Thought (CoT) — ask model to reason step by step' },
              { id: 'genai-concepts-7', name: 'Hallucination + knowledge cutoff + prompt injection + jailbreaking' },
              { id: 'genai-concepts-8', name: 'KV cache + streaming + batch inference + quantization (awareness)' }
            ],
            resources: [
              { title: 'Andrej Karpathy — Deep Dive into LLMs (Feb 2025)', url: 'https://www.youtube.com/watch?v=7xTGNNLPyMI', type: 'video', lang: 'english' },
              { title: 'Krish Naik Hindi — What is GenAI + GenAI Roadmap 2024', url: 'https://www.youtube.com/watch?v=1U51-QO9q2A', type: 'video', lang: 'hindi' },
              { title: 'CampusX — MCP Model Context Protocol Mini Series (Aug 2025)', url: 'https://www.youtube.com/watch?v=3_TN1i3MTEU', type: 'video', lang: 'english' }
            ]
          },
          {
            id: 'prompt-engineering',
            name: 'Prompt Engineering',
            subSubTopics: [
              { id: 'prompt-engineering-1', name: 'Zero-shot + few-shot + Chain-of-Thought techniques' },
              { id: 'prompt-engineering-2', name: 'System prompts (persona constraints output format)' },
              { id: 'prompt-engineering-3', name: 'Role prompting ("You are an expert...")' },
              { id: 'prompt-engineering-4', name: 'Output format specification (JSON XML — make responses predictable)' },
              { id: 'prompt-engineering-5', name: 'Prompt chaining — output of one → input of next' },
              { id: 'prompt-engineering-6', name: 'ReAct pattern (Reason → Act → Observe → Repeat)' },
              { id: 'prompt-engineering-7', name: 'Prompt injection prevention' },
              { id: 'prompt-engineering-8', name: 'Best practices (be specific use delimiters positive instructions iterate)' }
            ],
            resources: [
              { title: 'DeepLearning.AI — Prompt Engineering for Developers (Andrew Ng FREE short course)', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/', type: 'website', lang: 'english' },
              { title: 'Prompt Engineering Course Hindi Playlist', url: 'https://www.youtube.com/playlist?list=PLeroFlBJyusTOobx95ZT5Cl6kRxMxSHPE', type: 'playlist', lang: 'hindi' },
              { title: 'Engineer Prompt — YouTube Channel (PhD AI/ML expert no hype practical)', url: 'https://www.youtube.com/@engineerprompt', type: 'channel', lang: 'english' }
            ]
          }
        ]
      },

      // ── OPENAI / GEMINI API ──────────────────────────────────
      {
        id: 'openai-api',
        name: 'OpenAI / Gemini API',
        subtopics: [
          {
            id: 'openai-core',
            name: 'OpenAI API + Function Calling + Streaming',
            subSubTopics: [
              { id: 'openai-core-1', name: 'openai Python SDK' },
              { id: 'openai-core-2', name: 'client.chat.completions.create() (messages model temperature max_tokens)' },
              { id: 'openai-core-3', name: 'Message roles (system user assistant)' },
              { id: 'openai-core-4', name: 'Streaming (stream=True iterating chunks)' },
              { id: 'openai-core-5', name: 'Embeddings (client.embeddings.create())' },
              { id: 'openai-core-6', name: 'Function calling / Tool use (define tools as JSON schema model decides execute)' },
              { id: 'openai-core-7', name: 'Structured outputs (force JSON schema compliance)' },
              { id: 'openai-core-8', name: 'API best practices (rate limiting 429 exponential backoff cost management caching)' },
              { id: 'openai-core-9', name: 'Gemini API — google.generativeai + multimodal support' }
            ],
            resources: [
              { title: 'OpenAI API with Python — Latest 2025 Tutorial', url: 'https://www.youtube.com/watch?v=CHsRy4gl6hk', type: 'video', lang: 'english' },
              { title: 'OpenAI Responses API + Streaming + Web Search (Mar 2025)', url: 'https://www.youtube.com/watch?v=YDeJ9rq0aYE', type: 'video', lang: 'english' },
              { title: 'How to Stream OpenAI Responses in Python Sync + Async (Apr 2025)', url: 'https://www.youtube.com/watch?v=FJJn3ZVm3VA', type: 'video', lang: 'english' },
              { title: 'End-to-End Streaming GenAI — Next.js + FastAPI + Gemini Pro', url: 'https://www.youtube.com/watch?v=qas4aLEkXTk', type: 'video', lang: 'english' },
              { title: 'Krish Naik — OpenAI + Gemini API Tutorials', url: 'https://www.youtube.com/@krishnaik06', type: 'channel', lang: 'english' }
            ]
          }
        ]
      },

      // ── RAG + VECTOR SEARCH ──────────────────────────────────
      {
        id: 'rag',
        name: 'RAG + Vector Search',
        subtopics: [
          {
            id: 'rag-pipeline',
            name: 'RAG Pipeline + Vector Databases',
            subSubTopics: [
              { id: 'rag-pipeline-1', name: 'What RAG is — problem it solves (hallucination + knowledge cutoff)' },
              { id: 'rag-pipeline-2', name: 'RAG vs fine-tuning — dynamic/private data vs behavior/style' },
              { id: 'rag-pipeline-3', name: 'Full RAG pipeline: document loading → chunking → embedding → vector store → retrieval → generation' },
              { id: 'rag-pipeline-4', name: 'Chunking strategies (fixed size recursive semantic chunk_overlap)' },
              { id: 'rag-pipeline-5', name: 'Vector databases (Pinecone Chroma Qdrant Weaviate FAISS)' },
              { id: 'rag-pipeline-6', name: 'Similarity search (cosine similarity dot product euclidean distance)' },
              { id: 'rag-pipeline-7', name: 'Metadata filtering' },
              { id: 'rag-pipeline-8', name: 'Hybrid search (vector + BM25 keyword combined)' },
              { id: 'rag-pipeline-9', name: 'Reranking (Cohere Rerank — reorder retrieved chunks by relevance)' },
              { id: 'rag-pipeline-10', name: 'HyDE + parent-child chunking' },
              { id: 'rag-pipeline-11', name: 'RAG evaluation (faithfulness answer relevance context precision)' }
            ],
            resources: [
              { title: 'Krish Naik — Complete RAG Crash Course with LangChain (Oct 2025 2hrs)', url: 'https://www.youtube.com/watch?v=o126p1QN_RI', type: 'video', lang: 'english' },
              { title: 'Krish Naik — Build RAG Pipeline from Scratch (Sep 2025)', url: 'https://www.youtube.com/watch?v=MykcjWPJ6T4', type: 'video', lang: 'english' },
              { title: 'Production RAG with LangChain + Vector Databases Full Course (May 2026)', url: 'https://www.youtube.com/watch?v=mHxLXzYjQRE', type: 'video', lang: 'english' },
              { title: 'Build Production-Ready RAG — Hybrid Search + Reranking + HyDE (Aug 2025)', url: 'https://www.youtube.com/watch?v=YNcoFoRwoc8', type: 'video', lang: 'english' },
              { title: 'Learn RAG LangChain Vector DBs Full Course with Project (Nov 2024)', url: 'https://www.youtube.com/watch?v=ShEOoJLSLbI', type: 'video', lang: 'english' }
            ]
          }
        ]
      },

      // ── LANGCHAIN ────────────────────────────────────────────
      {
        id: 'langchain',
        name: 'LangChain',
        subtopics: [
          {
            id: 'langchain-core',
            name: 'LangChain + LCEL + Memory + RAG',
            subSubTopics: [
              { id: 'langchain-core-1', name: 'What LangChain is — LLMs prompts chains retrievers memory tools agents' },
              { id: 'langchain-core-2', name: 'LCEL (pipe syntax: prompt | llm | output_parser — streaming + async)' },
              { id: 'langchain-core-3', name: 'PromptTemplate + ChatPromptTemplate' },
              { id: 'langchain-core-4', name: 'Document loaders + text splitters' },
              { id: 'langchain-core-5', name: 'Memory types (ConversationBufferMemory SummaryMemory WindowMemory)' },
              { id: 'langchain-core-6', name: 'RetrievalQA + ConversationalRetrievalChain + create_retrieval_chain' },
              { id: 'langchain-core-7', name: 'LangSmith — tracing + debugging LangChain apps' },
              { id: 'langchain-core-8', name: 'Guardrails' },
              { id: 'langchain-core-9', name: 'LangChain vs LangGraph — when each' }
            ],
            resources: [
              { title: 'LangChain Mastery 2025 — Full 5 Hour Course v0.3 (Feb 2025)', url: 'https://www.youtube.com/watch?v=Cyv-dgv80kE', type: 'video', lang: 'english' },
              { title: 'Krish Naik — Complete LangChain Course for GenAI (3 hrs)', url: 'https://www.youtube.com/watch?v=swCPic00c30', type: 'video', lang: 'english' },
              { title: 'Krish Naik Hindi — GenAI Crash Course with LangChain (Jan 2026 — freshest)', url: 'https://www.youtube.com/watch?v=7qqGnuRrWxg', type: 'video', lang: 'hindi' },
              { title: 'Generative AI Full Course Beginner to Advanced LangChain + LLMs (Mar 2026)', url: 'https://www.youtube.com/watch?v=vwncYfhxbR0', type: 'video', lang: 'english' },
              { title: 'Krish Naik — Guardrails with LangChain (Mar 2026)', url: 'https://www.youtube.com/watch?v=ruiLq0OzjkI', type: 'video', lang: 'english' },
              { title: 'LangChain Streaming + astream_events + FastAPI Integration', url: 'https://www.youtube.com/watch?v=juzD9h9ewV8', type: 'video', lang: 'english' }
            ]
          }
        ]
      },

      // ── LANGGRAPH ────────────────────────────────────────────
      {
        id: 'langgraph',
        name: 'LangGraph',
        subtopics: [
          {
            id: 'langgraph-core',
            name: 'LangGraph (StateGraph + Nodes + Edges + Agents)',
            subSubTopics: [
              { id: 'langgraph-core-1', name: 'What LangGraph is vs LangChain agents' },
              { id: 'langgraph-core-2', name: 'StateGraph + State schema (TypedDict)' },
              { id: 'langgraph-core-3', name: 'add_node() + add_edge() + add_conditional_edges() + compile() + invoke()' },
              { id: 'langgraph-core-4', name: 'Nodes as Python functions' },
              { id: 'langgraph-core-5', name: 'Cycles + loops — agents can retry reflect' },
              { id: 'langgraph-core-6', name: 'Human-in-the-loop — pause graph for approval' },
              { id: 'langgraph-core-7', name: 'Persistence — checkpointing graph state' },
              { id: 'langgraph-core-8', name: 'ReAct agent with LangGraph' },
              { id: 'langgraph-core-9', name: 'Multi-agent supervisor pattern' },
              { id: 'langgraph-core-10', name: 'LangGraph vs CrewAI — when to use each' }
            ],
            resources: [
              { title: 'LangGraph Complete Course Zero to Hero (Feb 2026 — freshest)', url: 'https://www.youtube.com/watch?v=DtW_Lc9hYoU', type: 'video', lang: 'english' },
              { title: 'LangGraph Complete Course for Beginners Complex AI Agents (May 2025)', url: 'https://www.youtube.com/watch?v=jGg_1h0qzaM', type: 'video', lang: 'english' },
              { title: 'LangChain + LangGraph Explained Build Agentic AI Apps 2025 (Oct 2025)', url: 'https://www.youtube.com/watch?v=1ykcOVCQdkY', type: 'video', lang: 'english' },
              { title: 'Complete Agentic AI Course 10 Hours LangChain LangGraph RAG Guardrails (May 2026)', url: 'https://www.youtube.com/watch?v=rV3HJ4LEZ7k', type: 'video', lang: 'english' },
              { title: 'Krish Naik — Getting Started with LangGraph for AI Agents (Apr 2025)', url: 'https://www.youtube.com/watch?v=UltwJqpNA04', type: 'video', lang: 'english' }
            ]
          }
        ]
      },

      // ── AGENTIC AI (CREWAI + MCP) ────────────────────────────
      {
        id: 'agentic-ai',
        name: 'Agentic AI (CrewAI + MCP)',
        subtopics: [
          {
            id: 'agents-core',
            name: 'Agent Concepts + CrewAI + MCP',
            subSubTopics: [
              { id: 'agents-core-1', name: 'What an AI agent is (LLM + tools + memory + decision loop)' },
              { id: 'agents-core-2', name: 'ReAct pattern (Reason → Act → Observe → Repeat)' },
              { id: 'agents-core-3', name: 'Tool calling — define tools model decides execute send result' },
              { id: 'agents-core-4', name: 'CrewAI — role-based agents tasks crews sequential vs hierarchical process' },
              { id: 'agents-core-5', name: 'MCP (Model Context Protocol) — Anthropic open standard' },
              { id: 'agents-core-6', name: 'MCP server vs client — what each is' },
              { id: 'agents-core-7', name: 'MCP growing ecosystem (filesystem GitHub Slack databases)' },
              { id: 'agents-core-8', name: 'Agent frameworks comparison (LangGraph vs CrewAI vs OpenAI Agents SDK vs Google ADK)' }
            ],
            resources: [
              { title: 'Agentic AI Engineering Full 4 Hour Workshop (MCP + CrewAI + OpenAI Agents SDK Jun 2025)', url: 'https://www.youtube.com/watch?v=LSk5KaEGVk4', type: 'video', lang: 'english' },
              { title: 'Agentic AI Architecture CrewAI vs LangGraph + MCP (Nov 2025)', url: 'https://www.youtube.com/watch?v=Pe05ELsWadM', type: 'video', lang: 'english' },
              { title: 'CrewAI Tutorial Agentic AI Crash Course with Project (Jul 2025)', url: 'https://www.youtube.com/watch?v=G42J2MSKyc8', type: 'video', lang: 'english' },
              { title: 'Build Multi-Agent System with CrewAI (Apr 2025)', url: 'https://www.youtube.com/watch?v=qsrl2DHYi1Y', type: 'video', lang: 'english' },
              { title: 'MCP Explained for Beginners AI Flight Booking Demo (Jul 2025)', url: 'https://www.youtube.com/watch?v=E2DEHOEbzks', type: 'video', lang: 'english' },
              { title: 'All You Need to Know About MCP — Krish Naik (Apr 2025)', url: 'https://www.youtube.com/watch?v=-UQ6OZywZ2I', type: 'video', lang: 'english' },
              { title: 'CampusX — MCP Mini Series (Aug 2025)', url: 'https://www.youtube.com/watch?v=3_TN1i3MTEU', type: 'video', lang: 'english' }
            ]
          }
        ]
      },

      // ── FASTAPI ──────────────────────────────────────────────
      {
        id: 'fastapi',
        name: 'FastAPI',
        subtopics: [
          {
            id: 'fastapi-core',
            name: 'FastAPI Core + Async + DI + Streaming',
            subSubTopics: [
              { id: 'fastapi-core-1', name: 'What FastAPI is (ASGI Starlette Pydantic auto-docs /docs)' },
              { id: 'fastapi-core-2', name: 'Route decorators (@app.get post put delete)' },
              { id: 'fastapi-core-3', name: 'Path + query params + request body (Pydantic BaseModel)' },
              { id: 'fastapi-core-4', name: 'Response model + status codes + HTTPException' },
              { id: 'fastapi-core-5', name: 'Pydantic v2 — @field_validator + validation' },
              { id: 'fastapi-core-6', name: 'async def vs def — non-blocking vs thread pool' },
              { id: 'fastapi-core-7', name: 'Depends() pattern — DB session auth check rate limit' },
              { id: 'fastapi-core-8', name: 'JWT auth (OAuth2PasswordBearer)' },
              { id: 'fastapi-core-9', name: 'Background tasks' },
              { id: 'fastapi-core-10', name: 'CORS middleware (CORSMiddleware)' },
              { id: 'fastapi-core-11', name: 'StreamingResponse + SSE for LLM token streaming (critical for GenAI apps)' }
            ],
            resources: [
              { title: 'FastAPI Crash Course — Traversy Media (Jan 2026 — freshest)', url: 'https://www.youtube.com/watch?v=8TMQcRcBnW8', type: 'video', lang: 'english' },
              { title: 'FastAPI Tutorial for Beginners Full Course (Jun 2025)', url: 'https://www.youtube.com/watch?v=VirndPTeRaw', type: 'video', lang: 'english' },
              { title: 'FastAPI Beyond CRUD Advanced API Development (Aug 2024)', url: 'https://www.youtube.com/watch?v=TO4aQ3ghFOc', type: 'video', lang: 'english' },
              { title: 'FastAPI for AI Projects Getting Started in 15 Minutes (May 2025)', url: 'https://www.youtube.com/watch?v=-IaCV5-mlSk', type: 'video', lang: 'english' }
            ]
          }
        ]
      },

      // ── GENAI + REACT INTEGRATION ────────────────────────────
      {
        id: 'genai-react',
        name: 'GenAI + React Integration',
        subtopics: [
          {
            id: 'genai-react-full',
            name: 'Full Stack GenAI with React + FastAPI',
            subSubTopics: [
              { id: 'genai-react-full-1', name: 'Architecture pattern: React → FastAPI → LLM/Agent' },
              { id: 'genai-react-full-2', name: 'Streaming in React with SSE (EventSource API + fetch ReadableStream)' },
              { id: 'genai-react-full-3', name: 'Display tokens as they arrive — chat-like UX' },
              { id: 'genai-react-full-4', name: 'useEffect cleanup — close stream on unmount (AbortController)' },
              { id: 'genai-react-full-5', name: 'Chat history state management (array of messages in Zustand/useState)' },
              { id: 'genai-react-full-6', name: 'isStreaming + error states' },
              { id: 'genai-react-full-7', name: 'Optimistic messages — show user message immediately' },
              { id: 'genai-react-full-8', name: 'RAG chatbot UI pattern' },
              { id: 'genai-react-full-9', name: 'Document Q&A upload pattern' }
            ],
            resources: [
              { title: 'Streaming OpenAI Responses React + FastAPI (Mar 2025)', url: 'https://www.youtube.com/watch?v=i7GlWbAFDtY', type: 'video', lang: 'english' },
              { title: 'Streaming in React with SSE + FastAPI LLM style (Sep 2025)', url: 'https://www.youtube.com/watch?v=hOAAg1WaZh8', type: 'video', lang: 'english' },
              { title: 'Streaming LLM Responses with FastAPI + LangChain (Feb 2025)', url: 'https://www.youtube.com/watch?v=xTTtqwGWemw', type: 'video', lang: 'english' },
              { title: 'How to Build AI Apps with React + FastAPI Full Beginner Tutorial (May 2024)', url: 'https://www.youtube.com/watch?v=vEGqCleTHfM', type: 'video', lang: 'english' }
            ]
          }
        ]
      }

    ] // end ai topics
  },

  // ============================================================
  // TRACK 3 — JAVA
  // ============================================================
  {
    id: 'java',
    name: 'Java',
    color: '#fda4af',
    daysPerWeek: 1,
    topics: [

      // ── CORE JAVA ────────────────────────────────────────────
      {
        id: 'core-java',
        name: 'Core Java (Interview Q&A)',
        subtopics: [
          {
            id: 'java-oop',
            name: 'OOP + Java Basics + Collections + Multithreading',
            subSubTopics: [
              { id: 'java-oop-1', name: '4 OOP pillars (Encapsulation Inheritance Polymorphism Abstraction)' },
              { id: 'java-oop-2', name: 'Interface vs Abstract Class — key differences' },
              { id: 'java-oop-3', name: 'HAS-A vs IS-A relationships' },
              { id: 'java-oop-4', name: 'Java primitives + wrapper classes + autoboxing/unboxing' },
              { id: 'java-oop-5', name: 'String vs StringBuilder vs StringBuffer (immutability thread safety)' },
              { id: 'java-oop-6', name: 'final + static + this + super keywords' },
              { id: 'java-oop-7', name: 'equals() vs == + hashCode() contract' },
              { id: 'java-oop-8', name: 'Collections Framework (List Set Map Queue ArrayList LinkedList HashMap HashSet TreeMap LinkedHashMap ConcurrentHashMap)' },
              { id: 'java-oop-9', name: 'ArrayList vs LinkedList — when to use which' },
              { id: 'java-oop-10', name: 'HashMap internal working (hashCode buckets load factor rehashing)' },
              { id: 'java-oop-11', name: 'Comparable vs Comparator' },
              { id: 'java-oop-12', name: 'Java 8+ (lambda functional interfaces Stream API Optional method references Date/Time API)' },
              { id: 'java-oop-13', name: 'Exception handling (checked vs unchecked try-catch-finally try-with-resources custom exceptions hierarchy)' },
              { id: 'java-oop-14', name: 'Multithreading (lifecycle synchronized volatile vs synchronized deadlock ExecutorService Future CompletableFuture AtomicInteger)' },
              { id: 'java-oop-15', name: 'JVM internals (heap vs stack GC ClassLoader)' }
            ],
            resources: [
              { title: 'Code Decode — Java Interview Q&A for 3-10 Years Experience (Part 1)', url: 'https://www.youtube.com/watch?v=FePI2qUjI6Y', type: 'video', lang: 'english' },
              { title: 'Code Decode — Top Java Interview Traps Most Developers Fail (Jan 2026)', url: 'https://www.youtube.com/watch?v=qiw6qPhFS6g', type: 'video', lang: 'english' },
              { title: 'Java Senior Developer Scenario-Based Interview Q&A (Feb 2026)', url: 'https://www.youtube.com/watch?v=VflpZPkiWvI', type: 'video', lang: 'english' },
              { title: 'Code Decode — Multithreading Interview Questions Part 1', url: 'https://www.youtube.com/watch?v=bHU4gDsDHLA', type: 'video', lang: 'english' },
              { title: 'Code Decode — Java Collection Framework Interview Q&A', url: 'https://www.youtube.com/watch?v=Q1FWyk6q5Fg', type: 'video', lang: 'english' },
              { title: 'Code Decode — Full Channel (all Java Q&A playlists)', url: 'https://www.youtube.com/@CodeDecode/playlists', type: 'channel', lang: 'english' },
              { title: 'Top 25 Java Coding Interview Q&A Hindi (Nov 2025)', url: 'https://www.youtube.com/watch?v=LkctHNmajuI', type: 'video', lang: 'hindi' }
            ]
          },
          {
            id: 'java-patterns',
            name: 'Design Patterns in Java',
            subSubTopics: [
              { id: 'java-patterns-1', name: 'Singleton (lazy vs eager thread-safe implementation)' },
              { id: 'java-patterns-2', name: 'Factory' },
              { id: 'java-patterns-3', name: 'Builder' },
              { id: 'java-patterns-4', name: 'Observer (pub/sub)' },
              { id: 'java-patterns-5', name: 'Strategy' },
              { id: 'java-patterns-6', name: 'Dependency Injection + IoC' }
            ],
            resources: [
              { title: 'Java Techie — Design Patterns + Core Java Q&A', url: 'https://www.youtube.com/c/JavaTechie', type: 'channel', lang: 'english' },
              { title: 'Code Decode — Java Lead Developer Interview Questions (Nov 2024)', url: 'https://www.youtube.com/watch?v=Z3h6T8-iQxk', type: 'video', lang: 'english' }
            ]
          }
        ]
      },

      // ── SPRING BOOT ──────────────────────────────────────────
      {
        id: 'spring-boot',
        name: 'Spring Boot',
        subtopics: [
          {
            id: 'spring-boot-core',
            name: 'Spring Boot Core + REST API',
            subSubTopics: [
              { id: 'spring-boot-core-1', name: 'Spring Boot vs Spring (auto-configuration embedded server Spring Initializr)' },
              { id: 'spring-boot-core-2', name: '@SpringBootApplication = @Configuration + @EnableAutoConfiguration + @ComponentScan' },
              { id: 'spring-boot-core-3', name: 'application.properties vs application.yml' },
              { id: 'spring-boot-core-4', name: 'DI + IoC (@Component @Service @Repository @Controller @Autowired)' },
              { id: 'spring-boot-core-5', name: 'Constructor injection vs field injection — constructor preferred (testable immutable)' },
              { id: 'spring-boot-core-6', name: '@Bean + ApplicationContext' },
              { id: 'spring-boot-core-7', name: '@RestController @RequestMapping @GetMapping @PostMapping @PutMapping @DeleteMapping' },
              { id: 'spring-boot-core-8', name: '@PathVariable @RequestParam @RequestBody ResponseEntity' },
              { id: 'spring-boot-core-9', name: '@ExceptionHandler + @ControllerAdvice' },
              { id: 'spring-boot-core-10', name: 'Profiles (@Profile spring.profiles.active dev/staging/prod)' },
              { id: 'spring-boot-core-11', name: 'Spring Boot Actuator (/health /metrics /info)' }
            ],
            resources: [
              { title: 'Spring Boot Complete Tutorial Hindi (Feb 2025)', url: 'https://www.youtube.com/watch?v=THq9Ojf2CG0', type: 'video', lang: 'hindi' },
              { title: 'Spring Boot 3 Tutorial Full Course with JPA + REST API (2024)', url: 'https://www.youtube.com/watch?v=fm4RtXFiP7Y', type: 'video', lang: 'english' }
            ]
          }
        ]
      },

      // ── SPRING SECURITY + JWT + HIBERNATE + JPA ──────────────
      {
        id: 'spring-security',
        name: 'Spring Security + JWT + Hibernate + JPA',
        subtopics: [
          {
            id: 'spring-sec-jpa',
            name: 'Spring Security + JWT + JPA + Spring Data',
            subSubTopics: [
              { id: 'spring-sec-jpa-1', name: 'SecurityFilterChain' },
              { id: 'spring-sec-jpa-2', name: 'UserDetails + UserDetailsService + PasswordEncoder (BCrypt)' },
              { id: 'spring-sec-jpa-3', name: 'JwtAuthFilter + OncePerRequestFilter + SecurityContextHolder' },
              { id: 'spring-sec-jpa-4', name: 'Access token + refresh token pattern' },
              { id: 'spring-sec-jpa-5', name: '@PreAuthorize + RBAC (Role-Based Access Control)' },
              { id: 'spring-sec-jpa-6', name: 'CSRF — disable for REST APIs (stateless)' },
              { id: 'spring-sec-jpa-7', name: 'CORS configuration in Spring Security' },
              { id: 'spring-sec-jpa-8', name: 'JPA annotations (@Entity @Table @Id @GeneratedValue relationships FetchType CascadeType @Transactional)' },
              { id: 'spring-sec-jpa-9', name: 'Spring Data JPA (JpaRepository method naming @Query Pageable PageRequest)' },
              { id: 'spring-sec-jpa-10', name: 'N+1 problem + @EntityGraph solution' },
              { id: 'spring-sec-jpa-11', name: 'JDBC Template — for complex queries where JPA is overkill' }
            ],
            resources: [
              { title: 'Amigoscode — Spring Boot 3 + Spring Security 6 + JWT (2023 standard reference)', url: 'https://www.youtube.com/watch?v=KxqlJblhzfI', type: 'video', lang: 'english' },
              { title: 'JWT Authentication with Spring Security Full Example (Sep 2025 — freshest)', url: 'https://www.youtube.com/watch?v=5TY9V5xLW8o', type: 'video', lang: 'english' },
              { title: 'Spring Boot 3 + Spring Security 6 + JWT From Scratch (Sep 2024)', url: 'https://www.youtube.com/watch?v=08kl5i8K_AA', type: 'video', lang: 'english' },
              { title: 'Amigoscode — Spring Data JPA Master Class Playlist', url: 'https://www.youtube.com/playlist?list=PLgZ6KbbkPTfUN5AA1OwlFkNn99dWKOayl', type: 'playlist', lang: 'english' }
            ]
          }
        ]
      },

      // ── MICROSERVICES ────────────────────────────────────────
      {
        id: 'microservices',
        name: 'Microservices (Awareness)',
        subtopics: [
          {
            id: 'microservices-core',
            name: 'Microservices with Spring Cloud',
            subSubTopics: [
              { id: 'microservices-core-1', name: 'Monolith vs Microservices — when each (pros cons)' },
              { id: 'microservices-core-2', name: 'Spring Cloud toolkit (Eureka service discovery API Gateway Feign Client Config Server)' },
              { id: 'microservices-core-3', name: 'Circuit Breaker (Resilience4j) — prevent cascading failures' },
              { id: 'microservices-core-4', name: 'Synchronous vs Asynchronous communication (REST vs Kafka RabbitMQ)' },
              { id: 'microservices-core-5', name: 'Event-driven architecture basics' },
              { id: 'microservices-core-6', name: 'Eventual consistency' }
            ],
            resources: [
              { title: 'Spring Boot 3 Microservices Course 2025 Java 21 + Eureka + Feign + Resilience4j (May 2025)', url: 'https://www.youtube.com/watch?v=93cTu9x-QR4', type: 'video', lang: 'english' },
              { title: 'Java Brains — Microservice Configuration with Spring Boot Playlist', url: 'https://www.youtube.com/watch?v=upoIwn4rWCo', type: 'video', lang: 'english' },
              { title: 'Spring Boot Microservices Circuit Breaker Resilience4j (May 2024)', url: 'https://www.youtube.com/watch?v=Hw2KC7ecY_A', type: 'video', lang: 'english' }
            ]
          }
        ]
      }

    ] // end java topics
  }

]; // end CURRICULUM