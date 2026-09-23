# Project instructions

This is Yeshe Sampa's personal portfolio and application website.

## Purpose

The website targets roles in:
- Inside Sales
- Sales Support
- Technical Sales
- IT / Software companies

## Design goal

The website must feel:
- distinctive
- modern
- unconventional
- future-oriented
- premium
- interactive

Avoid:
- generic portfolio templates
- generic SaaS design
- generic AI gradient aesthetics
- excessive rounded cards
- bland minimalism
- animations without purpose

The website should clearly stand out from typical applicant portfolios
while remaining professional and easy to use.

## Important information

CV, experience, profile and contact information must remain easy to find.

## Development

- Check desktop and mobile layouts.
- Preserve accessibility.
- Do not sacrifice usability for visual effects.
- Do not change CV/PDF content unless explicitly requested.

## Multi-agent workflow

- The main agent is the Luna coordinator and creative director. It compares proposals, rejects weak ideas, and selects one coherent direction instead of averaging the reports.
- For a substantial redesign, first run `art_direction`, `interaction_motion`, and `recruiter_review` independently and in parallel. Each returns its own concrete proposal and rationale without coordinating with the others.
- After those reports, run `technical_feasibility` read-only against the actual candidate ideas. It assesses implementation effort, mobile behavior, performance, accessibility, and reduced-motion alternatives; it does not veto exploration before proposals exist.
- For the substantial redesign, if several viable directions remain and choosing poorly would cause significant rework, ask `creative_strategy_advisor` for one read-only second opinion after feasibility review. Astra advises on tradeoffs; it does not lead, implement, or make the final choice.
- The main agent synthesizes the results and gives the selected direction to `frontend_implementer`, the sole writing agent, for design and implementation. Do not delegate overlapping code changes.
- After implementation, start fresh read-only reviews with `visual_critic`, `frontend_qa`, and a new `recruiter_review` instance. The main agent evaluates the findings and makes any fixes.
- Use these roles for substantial homepage work, not routine small tasks. Keep CV, experience, profile, and contact easy to reach.
- The analysis and review roles are configured with `sandbox_mode = "read-only"`. The Codex app's active parent permission mode can override that default; select read-only permission for the parent turn when strict read-only execution is required.
