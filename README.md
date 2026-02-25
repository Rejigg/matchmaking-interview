# Matching System Take-Home

## BizMatch

BizMatch is a marketplace that connects buyers with small businesses for sale. Buyers browse listings, find businesses they're interested in, and reach out to sellers.

Sellers list their business with a description, basic financials, and some industry tags. They're the scarce side of the marketplace — roughly 200 active listings at any time. Every extra question or step in the listing flow risks them abandoning it.

Buyers sign up, set a few preferences, and browse. There are roughly 2,000 active buyers, and they vary wildly:

- An individual buying their first $300K service business
- A PE firm doing $5M+ roll-ups in a specific vertical
- A strategic acquirer looking for bolt-on businesses in their industry

These buyers have fundamentally different needs, budgets, experience levels, and deal preferences. One-size-fits-all matching doesn't work here.

## The Current Matching Approach

Today, we compute a single "match score" for each buyer-business pair. Open `src/matcher.js` to see the implementation. In short:

1. Keyword overlap: compare the buyer's target industry tags against the business's. More overlap = higher score.
2. Revenue fit: check if the business's revenue falls within the buyer's stated range. In range = bonus. Out of range = nothing.

These two signals get added together into one number. Buyers see businesses sorted by this score.

## The Problems We're Seeing

- Buyers in very different situations see similar rankings. A first-time individual buyer and a PE firm get essentially the same list.
- Sellers get overwhelmed with low-quality inquiries from buyers who aren't actually a fit. The system doesn't consider what the seller is looking for in a buyer at all.
- The score mixes everything together. A business that's a perfect industry match but way out of budget ends up with a middling score, same as one that's in-budget but in the wrong industry. The single number hides the "why."

## Your Assignment

**Time estimate: ~3 hours.** You don't need to answer everything or build a complete system — and you don't need to do it all in one sitting. We care more about how you think through the problem — your trade-offs, priorities, and reasoning — than how much you get done.

We want you to evolve this matching system. The starter project is a working but limited starting point. Your job is to critique it, design something better, and build a V1. Everything in the starter is fair game to change — the data model, the UI, the algorithm, the components.  

The project files:

- `src/components/` — React components for each view
- `src/App.jsx` — top-level layout and view routing
- `src/matcher.js` — the matching algorithm
- `src/data.js` — sample buyers and business listings
- `src/index.css` — all styling

The main experience is the search view. The "Test Accounts" picker lets you see the product pre-populated as a specific buyer or seller.

We're looking for three things: a design, a plan, and a first PR.

1. **Design** — Write up your thinking in `SOLUTION.md`. What's wrong with the current approach? How should matching actually work? What information would you collect, and from whom? Include UI sketches or descriptions if it helps. Keep it short and opinionated.

2. **Plan** — Assume you're the sole engineer on this and have roughly a month to ship the next iteration. How would you break the work up? What ships first, what gets cut, and why? We care about your prioritization and reasoning.

3. **First PR** — Build the first thing you'd ship. Extend the starter project — it should be runnable in the browser.

Roughly, expect to spend about a third of your time on design, a smaller chunk on the plan, and the rest building. But organize your time however works for you.

## What We're Looking For

- Clear thinking, and the ability to express it in a spec
- Empathy for the end user, especially around data collection and the friction it creates
- Judgment about scope and priorities
- Decent code

## Submitting

When you're done, email us your solution — a zip or a link to a repo works fine.

## Follow-Up

We will do a follow-up interview where you walk us through your decisions and code. Treat this like a real design doc and first PR. We'll ask you to explain your choices, what you'd do next, and how you'd validate your approach.

## Getting Started

**Option A: Docker (no local setup needed)**

```bash
docker compose up
```

Open [http://localhost:3000](http://localhost:3000)

**Option B: Local**

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
