# Theme and style tokens

## Compact current token summary

- Framework: none; static HTML, vanilla CSS, vanilla JavaScript.
- Fonts: DM Sans for body; Manrope for display/headings.
- Final CSS variables (overridden in `dist/refinement.css`): ink `#101b2d`, blue `#155eef`, dark blue `#1248bd`, cyan `#41d9d0`, paper `#f5f7fb`, muted `#64748b`, line `#dbe2ec`; white `#fff`; radius `24px` from base sheet.
- Main content max width: 1240px; header/footer content approximately 1184px.
- Breakpoint: 800px. Reduced motion disables smooth scrolling and reveal transitions.
- Visual system: cool pale background, navy panels, vivid blue actions, cyan highlights; rounded panels/cards; responsive single-page sections.

## Raw stylesheet sources

### dist/styles.css
``css
:root{--ink:#142238;--blue:#2457a6;--blue-dark:#183f7a;--paper:#f4f7fa;--muted:#5d6b7c;--line:#d7e0ea;--white:#fff;--radius:24px}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font-family:"DM Sans",sans-serif;font-size:16px;line-height:1.65}a{color:inherit;text-decoration:none}.site-header{position:sticky;top:0;z-index:20;display:flex;align-items:center;justify-content:space-between;max-width:1240px;margin:auto;padding:18px 28px;background:rgba(245,247,251,.88);backdrop-filter:blur(18px);border-bottom:1px solid rgba(219,226,236,.8)}.brand{display:flex;align-items:center;gap:12px;font-weight:700}.brand span{display:grid;place-items:center;width:38px;height:38px;border-radius:12px;background:var(--ink);color:white;font-family:Manrope}.site-header nav{display:flex;gap:30px;font-size:.9rem;font-weight:600}.site-header nav a:hover{color:var(--blue)}.menu{display:none;border:0;background:none;font:inherit;font-weight:700}.hero{min-height:82vh;max-width:1240px;margin:auto;padding:100px 28px 80px;display:grid;grid-template-columns:minmax(0,1.5fr) minmax(310px,.6fr);gap:70px;align-items:center;position:relative}.hero:before{content:"";position:absolute;right:10%;top:12%;width:340px;height:340px;border-radius:50%;background:none;pointer-events:none}.eyebrow{margin:0 0 22px;color:var(--blue);font-size:.78rem;font-weight:800;letter-spacing:.16em}.hero h1,.section h2,.skills-section h2,.contact h2{font-family:Manrope,sans-serif;line-height:1.08;letter-spacing:-.045em;margin:0}.hero h1{font-size:clamp(3rem,6.2vw,5.7rem);max-width:900px}.hero h1 em,.contact h2 em{font-style:normal;color:var(--blue)}.lead{max-width:690px;color:#475569;font-size:1.25rem;margin:30px 0}.actions,.contact-actions{display:flex;gap:12px;flex-wrap:wrap}.button{display:inline-flex;align-items:center;justify-content:center;padding:14px 20px;border-radius:12px;font-weight:700;transition:.2s ease}.button:hover{transform:translateY(-2px)}.primary{background:var(--blue);color:white;box-shadow:0 12px 28px rgba(21,94,239,.22)}.secondary{border:1px solid var(--line);background:rgba(255,255,255,.6)}.signal-card{position:relative;background:var(--ink);color:white;border-radius:var(--radius);padding:32px;box-shadow:0 30px 60px rgba(16,27,45,.2);overflow:hidden}.signal-card:after{content:"";position:absolute;width:150px;height:150px;border:25px solid rgba(65,217,208,.18);border-radius:50%;right:-70px;bottom:-70px}.status{font-size:.82rem;display:flex;align-items:center;gap:9px;color:#cbd5e1}.status span{width:8px;height:8px;background:#dbeafe;border-radius:50%;box-shadow:0 0 0 6px rgba(65,217,208,.1)}.signal-label{margin:60px 0 10px;color:#dbeafe;font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em}.signal-value{font-family:Manrope;font-size:1.55rem;font-weight:700;line-height:1.45}.signal-meta{margin-top:50px;padding-top:20px;border-top:1px solid #334155;display:flex;justify-content:space-between;color:#94a3b8;font-size:.78rem}.section,.skills-section{max-width:1240px;margin:auto;padding:110px 28px}.intro{display:grid;grid-template-columns:1fr 1fr;gap:80px}.section h2,.skills-section h2{font-size:clamp(2.5rem,4vw,4rem)}.prose{font-size:1.16rem;color:#475569}.prose p:first-child{margin-top:0}.values{max-width:1240px;margin:auto;padding:0 28px 90px;display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line)}.values article{background:var(--paper);padding:40px 32px}.values article>span{font-family:Manrope;color:var(--blue);font-weight:800}.values h3{font-family:Manrope;font-size:1.4rem;margin:25px 0 10px}.values p{color:var(--muted);margin:0}.experience{background:white;max-width:none;padding-left:max(28px,calc((100% - 1184px)/2));padding-right:max(28px,calc((100% - 1184px)/2))}.section-head{display:grid;grid-template-columns:1.5fr .7fr;gap:70px;align-items:end;margin-bottom:60px}.section-head>p{color:var(--muted);margin:0}.timeline{border-top:1px solid var(--line)}.timeline article{display:grid;grid-template-columns:1fr 2fr .5fr;gap:40px;padding:30px 0;border-bottom:1px solid var(--line)}.company{font-weight:700}.timeline h3{margin:0 0 8px;font:700 1.18rem Manrope}.timeline p{margin:0;color:var(--muted)}.timeline article>span{text-align:right;color:var(--blue);font-size:.82rem;font-weight:700}.skills-section{display:grid;grid-template-columns:.7fr 1.3fr;gap:70px}.skill-cloud{display:flex;flex-wrap:wrap;gap:12px;align-content:center}.skill-cloud span{padding:12px 16px;border:1px solid var(--line);border-radius:999px;background:white;font-weight:600}.project-card{background:var(--ink);color:white;padding:36px;border-radius:var(--radius);box-shadow:0 24px 50px rgba(16,27,45,.18)}.project-top{display:flex;justify-content:space-between;color:#94a3b8;font-size:.78rem;text-transform:uppercase;letter-spacing:.1em}.project-no{color:#dbeafe}.project-body{display:grid;grid-template-columns:1.4fr .7fr;gap:70px;padding:55px 0}.project-body h3{font:800 clamp(2.2rem,4vw,4rem) Manrope;margin:0 0 18px}.project-body p{color:#cbd5e1;font-size:1.05rem}.project-tags{display:flex;flex-direction:column;justify-content:center;gap:10px}.project-tags span{border:1px solid #334155;border-radius:10px;padding:10px 14px;color:#cbd5e1}.project-card>a{display:flex;justify-content:space-between;padding-top:22px;border-top:1px solid #334155;color:#dbeafe;font-weight:700}.contact{background:var(--blue);color:white;padding:110px max(28px,calc((100% - 1184px)/2));}.contact .eyebrow{color:#bffaf5}.contact h2{font-size:clamp(3rem,6vw,6rem)}.contact h2 em{color:#dbeafe}.contact>p:not(.eyebrow){max-width:700px;font-size:1.15rem;color:#dbeafe;margin:30px 0}.light{background:white;color:var(--blue)}.outline{border:1px solid rgba(255,255,255,.55)}.downloads{display:flex;gap:30px;margin-top:70px;padding-top:25px;border-top:1px solid rgba(255,255,255,.25)}.downloads a{display:flex;gap:25px;font-weight:700}footer{display:flex;justify-content:space-between;padding:28px max(28px,calc((100% - 1184px)/2));background:var(--ink);color:#94a3b8;font-size:.85rem}.reveal{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease}.reveal.visible{opacity:1;transform:none}@media(max-width:800px){.menu{display:block}.site-header nav{display:none;position:absolute;top:74px;left:16px;right:16px;flex-direction:column;background:white;padding:22px;border-radius:16px;box-shadow:0 15px 35px rgba(16,27,45,.12)}.site-header nav.open{display:flex}.hero{grid-template-columns:1fr;padding-top:70px;gap:45px}.hero h1{font-size:clamp(2.7rem,12vw,4.3rem)}.intro,.section-head,.skills-section,.project-body{grid-template-columns:1fr;gap:35px}.values{grid-template-columns:1fr}.timeline article{grid-template-columns:1fr;gap:12px}.timeline article>span{text-align:left}.section,.skills-section{padding-top:80px;padding-bottom:80px}.downloads{flex-direction:column;gap:16px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.reveal{opacity:1;transform:none;transition:none}.button:hover{transform:none}}

`` 

### dist/portrait.css
``css
.hero{grid-template-columns:minmax(0,1.45fr) minmax(330px,.62fr)}
.hero-visual{position:relative}
.portrait{height:390px;margin:0 0 -44px 24px;border-radius:28px 28px 10px 10px;overflow:hidden;background:#d9dde3;box-shadow:0 24px 55px rgba(16,27,45,.18)}
.portrait img{display:block;width:100%;height:100%;object-fit:cover;object-position:center 25%}
.hero-visual .signal-card{z-index:2;padding:25px 28px}
.hero-visual .signal-label{margin:28px 0 8px}
.hero-visual .signal-value{font-size:1.3rem;line-height:1.4}
.hero-visual .signal-meta{margin-top:25px;padding-top:16px}
@media(max-width:800px){.hero-visual{max-width:430px}.portrait{height:410px;margin-left:18px}}
.nav-download{padding:8px 13px;border-radius:9px;background:#155eef;color:#fff!important}

`` 

### dist/project.css
``css
.project-showcase{display:grid;grid-template-columns:.95fr 1.05fr;gap:50px;align-items:center;padding:45px 0}
.project-copy h3{font:800 clamp(2.2rem,4vw,4rem) Manrope;margin:0 0 18px}
.project-copy>p{color:#cbd5e1;font-size:1.05rem}
.project-result{margin:28px 0}
.project-result>span{display:block;margin-bottom:7px;color:var(--cyan);font-size:.75rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase}
.project-showcase .project-tags{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;gap:9px}
.project-showcase .project-tags span{border:1px solid #334155;border-radius:999px;padding:8px 12px;color:#cbd5e1;font-size:.82rem}
.project-preview{position:relative;overflow:hidden;background:#0b1728;color:#fff;border:1px solid #29405e;border-radius:16px;padding:25px;box-shadow:0 20px 45px rgba(0,0,0,.24)}
.project-preview:after{content:"";position:absolute;width:170px;height:170px;right:-95px;top:-95px;border:24px solid rgba(65,217,208,.11);border-radius:50%;pointer-events:none}
.schematic-label{position:relative;z-index:1;display:flex;align-items:center;gap:9px;color:#a9bdcf;font-size:.68rem;font-weight:800;letter-spacing:.08em}
.schematic-label span{width:8px;height:8px;border-radius:50%;background:var(--cyan);box-shadow:0 0 0 5px rgba(65,217,208,.10)}
.decision-map{position:relative;z-index:1;display:grid;grid-template-columns:.8fr 34px 1.25fr;grid-template-rows:auto auto;gap:12px 10px;align-items:stretch;margin:28px 0 24px}
.map-node,.map-branches div,.map-output{border:1px solid #38516f;background:#12243a;border-radius:10px;padding:13px}
.map-node{grid-row:1/3;align-self:center}
.map-track{grid-row:1/3;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:space-around}
.map-track:before{content:"";position:absolute;inset:25% 50%;width:1px;background:#53708f}
.map-track i{width:100%;height:1px;background:linear-gradient(90deg,#53708f,var(--cyan))}
.map-track b{position:absolute;width:7px;height:7px;border-radius:50%;background:var(--cyan)}
.map-branches{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.map-output{grid-column:3;display:flex;align-items:center;justify-content:space-between;gap:12px;border-color:rgba(65,217,208,.46)}
.decision-map small{display:block;margin-bottom:4px;color:#7f99b2;font-size:.58rem;font-weight:800;letter-spacing:.08em}
.decision-map strong{display:block;font:700 .83rem Manrope;line-height:1.3}
.map-output small{margin:0;color:var(--cyan)}
.project-preview p{position:relative;z-index:1;margin:0;color:#8fa5ba;font-size:.78rem}
@media(max-width:800px){.project-showcase{grid-template-columns:1fr;gap:35px}.project-card{padding:25px}.decision-map{grid-template-columns:1fr;grid-template-rows:auto;gap:9px}.map-node,.map-track,.map-output{grid-row:auto;grid-column:auto}.map-track{height:22px}.map-track:before{inset:50% 20%;width:auto;height:1px}.map-track i{width:1px;height:100%;background:linear-gradient(#53708f,var(--cyan))}.map-branches{grid-template-columns:1fr 1fr}.map-output{display:block}.map-output small{margin-bottom:4px}}

`` 

### dist/refinement.css
``css
/* Targeted refinements: tighter first viewport, readable project panel, resilient fallback. */
:root{--ink:#101b2d;--blue:#155eef;--blue-dark:#1248bd;--cyan:#41d9d0;--paper:#f5f7fb;--muted:#64748b;--line:#dbe2ec}
.hero:before{background:radial-gradient(circle,rgba(65,217,208,.15),transparent 68%)}
.eyebrow{letter-spacing:.08em}
.hero-downloads{display:flex;flex-wrap:wrap;gap:0;margin-top:15px;color:var(--blue)}
.hero-downloads a{display:inline-flex;align-items:center;gap:7px;padding:4px 16px 4px 0}
.hero-downloads a+a{padding-left:16px;border-left:1px solid var(--line)}
.hero-downloads a,.downloads a{font-weight:700;text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:4px}
.role-line{margin:22px 0 -16px;color:var(--ink);font-weight:700}
:where(a,button):focus-visible{outline:3px solid var(--blue);outline-offset:4px;border-radius:6px}
.site-header nav a:focus-visible,.hero-downloads a:focus-visible,.downloads a:focus-visible{text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:5px}
.project-card :where(a,button):focus-visible,.contact :where(a,button):focus-visible,footer :where(a,button):focus-visible{outline-color:#fff}
.hero{min-height:74vh;padding-top:76px;padding-bottom:66px;gap:55px}
.hero h1{max-width:780px;font-size:clamp(2.8rem,5.4vw,4.9rem)}
.hero h1 em{color:var(--blue)}
.lead{font-size:1.16rem}
.status span{background:var(--cyan)}
.signal-label{color:var(--cyan)}
.project-no,.project-card>a{color:var(--cyan)}
.contact h2 em{color:var(--cyan)}
.reveal{opacity:1;transform:none}
.js .reveal{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease}
.js .reveal.visible{opacity:1;transform:none}
@media(max-width:800px){
  .hero{grid-template-columns:1fr;min-height:auto;padding-top:66px;padding-bottom:62px;gap:38px}
  .hero h1{font-size:clamp(2.65rem,11vw,4.1rem)}
  .hero-downloads{gap:7px 0}
  .hero-downloads a{padding-right:11px}
  .hero-downloads a+a{padding-left:11px}
  .hero-visual{max-width:430px}
  .portrait{height:390px;margin-left:0}
  .project-showcase{grid-template-columns:1fr;gap:32px}
}
@media(prefers-reduced-motion:reduce){
  .reveal,.js .reveal{opacity:1;transform:none;transition:none}
}

`` 

### dist/upgrade.css
``css

`` 

