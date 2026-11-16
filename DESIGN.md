# Design direction

The reasons behind the design of this portfolio. Read this before changing how the site looks.

## Design read

A personal portfolio for recruiters and freelance clients, technical and non-technical, in a calm technical style.

Dial: ENERGY 1 / RHYTHM 2 / MOTION 2

- **ENERGY 1 (calm).** The visitor is checking facts about a person: what he did, where, and when. The page should stay out of the way of that.
- **RHYTHM 2 (consistent, with a few breaks).** Sections share one grid and one type scale, but not one layout. See "Layout" below.
- **MOTION 2 (scroll reveal and state transitions).** Sections fade in as they arrive, and controls respond to hover and press. Nothing loops, floats, or bounces.

## Owner decisions

These were chosen by the site owner and are kept as his identity. They are recorded here so nobody "fixes" them later.

- **Dark navy theme, no light mode.** The owner asked for a dark navy and cyan technology theme from the start, as the look of his personal brand. There is no theme toggle.
- **Space Grotesk, Inter, and JetBrains Mono.** The owner picked this set. The reasons each one is used are under "Typography".
- **Fade-in on scroll.** The owner asked for subtle animation in the original brief and confirmed on 2026-11-16 that the fade-in stays. See "Motion" for how it is kept safe.

## Color

| Token | Value | Reason |
|---|---|---|
| `--color-bg` | `#0B1220` | The base of the owner's dark navy theme. |
| `--color-bg-alt` | `#142238` | A second navy, so neighboring sections can be told apart without a line or a box. |
| `--color-accent` | `#22D3EE` | The single accent. Used only for things the visitor can act on (links, buttons) and for record stamps. |
| `--color-text` | `#F8FAFC` | Headings and key facts. |
| `--color-text-muted` | `#94A3B8` | Body text. Lowest contrast on the site is 5.71:1, above the 4.5:1 minimum. |

Two navies and one accent. No gradients, glows, or shadows: none of them would carry information here.

## Typography

- **Inter for body text.** It stays readable at small sizes on phone screens and covers English and Indonesian fully.
- **Space Grotesk for headings.** Wider and heavier than Inter, so a heading is recognizable by shape, not only by size.
- **JetBrains Mono for record stamps only.** See "Identity motif".
- **Chinese pages** fall back to fonts already installed on the visitor's device, because none of the three fonts has Chinese characters.

## Identity motif: the record stamp

The owner's career has one thread: keeping technology running and keeping the record of it. He worked as Document Control on two projects, and wrote procedures and reports in every other role.

The site shows that with one repeated element. Every dated or classified record carries a small cyan monospace stamp, the way a controlled document carries its reference:

- the period above each job in the timeline
- the field above each case study card
- the type and year above each education entry
- the field and period at the top of each case study page

The stamp is used for records and nothing else. It is not a decoration above section headings.

## Layout

Each section's layout follows the kind of content it holds.

| Section | Layout | Reason |
|---|---|---|
| Hero | Two columns, text and photo | One focal point: the name. The photo lets a client see who they would work with. |
| About | Plain paragraphs | It is a short story, so it reads as prose. |
| Services | Row list | Five short offers. A list is scanned faster than five boxes. |
| Skills | Cards of tags | Tags need a container to show which group they belong to. |
| Experience | Timeline | The order in time is the point. |
| Case studies | Large cards, whole card is a link | The main proof of work, so they are the largest and the only cards that react to the pointer. |
| Education | Row list | Four reference facts, same reasoning as Services. |
| Contact | A row of buttons | Five ways to act, nothing else. |

A card reacts to the pointer only when clicking it does something.

## Spacing

One scale of five steps (`--space-xs` to `--space-xl`). Large gaps separate sections, small gaps group related items. Text columns stop at 65 characters, the width that is comfortable to read.

## Motion

- Links and buttons respond to hover and press.
- Case study cards lift slightly on hover, to show the whole card is a link.
- Each section below the hero fades in once, the first time it enters the screen. The purpose is to lead the eye to the section that has just arrived on a long single page. The hero does not fade, so the top of the page is readable at once.
- The fade is one kind of movement only: 20px upward with opacity, 0.6 seconds, once. No floating, scaling, or bouncing.
- The class that hides a section is added by the script itself. If the script does not run, nothing is hidden.
- All movement, including the fade-in, is switched off for visitors who set "reduce motion" on their device.

## Copy

- No em dashes. Use a comma, colon, parentheses, or a middle dot.
- No arrows on links, except the previous and next links between case studies, where the arrow shows direction.
- No numbers or claims that the owner cannot back up. If a result was not recorded, the page says so.
