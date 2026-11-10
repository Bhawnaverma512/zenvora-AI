import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Headphones,
  Heart,
  Lock,
  Mail,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DESC =
  "Zenvora AI helps teams find answers, finish routine work and stay in control — with sources you can check and privacy you can trust.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Zenvora AI — Helpful AI, honestly built" }, { name: "description", content: DESC }],
  }),
  component: Index,
});

/* ───────────────────────── Illustrations (inline SVG) ───────────────────────── */


function Photo({ id, alt, w = 900, pos = "center", eager = false }: { id: string; alt: string; w?: number; pos?: string; eager?: boolean }) {
  return (
    <img
      src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
      className="h-full w-full object-cover"
      style={{ objectPosition: pos }}
    />
  );
}





const GALLERY = [
  { pic: <Photo id="1522202176988-66273c2fd55f" alt="Three colleagues laughing together at a wooden table with laptops" />, cap: "Ideas first, tools second", span: "md:col-span-2 md:row-span-2", rot: "-rotate-1" },
  { pic: <Photo id="1455390582262-044cdead277a" alt="Hands writing in a notebook next to a laptop" w={700} />, cap: "Notes that stay organised", span: "", rot: "rotate-1" },
  { pic: <Photo id="1486406146926-c627a92ad1ab" alt="Glass office building against a blue sky" w={700} />, cap: "Built for teams everywhere", span: "", rot: "-rotate-1" },
  { pic: <Photo id="1519389950473-47ba0277781c" alt="Overhead view of a busy team desk with laptops, notebooks and coffee" w={1000} />, cap: "Calm tools, calmer days", span: "md:col-span-2", rot: "rotate-1" },
];

/* ───────────────────────── Content ───────────────────────── */

const NAV = [
  { label: "Story", href: "#story" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Trust", href: "#trust" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const USE_CASES = [
  { n: "01", photo: "1522071820081-009f0129c71c", icon: Headphones, tag: "Support", title: "Replies in your voice", body: "Drafts answers from past tickets and your help center, flags anything unusual, and hands tricky cases to a person.", chips: ["Draft replies", "Smart tagging", "Human handoff"] },
  { n: "02", photo: "1497032628192-86f99bcd76bc", icon: Search, tag: "Knowledge", title: "Search that understands", body: "Ask a question the way you'd ask a colleague. Every answer shows the document and paragraph it came from.", chips: ["Cited answers", "20+ connectors", "Permission-aware"] },
  { n: "03", photo: "1498050108023-c5249f4df085", icon: Workflow, tag: "Operations", title: "Busywork, handled", body: "Onboarding checklists, weekly reports, invoice reminders — set the steps once and let Zenvora run them.", chips: ["Scheduled runs", "Approvals", "Undo anytime"] },
];

const PRINCIPLES = [
  { n: "1", title: "Show your work", body: "No answer without a source. If we aren't sure, we say so instead of guessing." },
  { n: "2", title: "People decide", body: "Anything that sends, spends or deletes waits for a human yes." },
  { n: "3", title: "Your data stays yours", body: "Never used to train shared models. Export or erase it whenever you like." },
];

const TRUST = [
  { icon: Lock, title: "Privacy by default", body: "Encryption in transit and at rest. Content is stored in your workspace only, and retention is yours to set." },
  { icon: ShieldCheck, title: "Security you can verify", body: "SSO, role-based access, audit logs and regular third-party penetration tests. Security documentation on request." },
  { icon: BookOpen, title: "Responsible AI", body: "Source citations, confidence signals, bias reviews and a clear escalation path for every automated action." },
  { icon: Heart, title: "Accessibility", body: "Built to WCAG 2.2 AA: keyboard friendly, screen-reader tested and respectful of reduced-motion settings." },
];

const ROADMAP = [
  { when: "Now", items: ["Cited answers", "Support drafting", "20+ connectors"] },
  { when: "Next quarter", items: ["Voice questions", "Shared team memory", "Data residency (EU)"] },
  { when: "Later", items: ["On-premise option", "Custom model choice", "Public API"] },
];

const POSTS = [
  { tag: "Essay", title: "Why every AI answer should come with a receipt", mins: 6 },
  { tag: "Guide", title: "A gentle checklist for rolling out AI at a small company", mins: 9 },
  { tag: "Privacy", title: "What 'we don't train on your data' should actually mean", mins: 5 },
];

const FAQ = [
  { q: "Does Zenvora train on my data?", a: "No. Your content is never used to train shared models. It lives in your workspace and you can delete it at any time." },
  { q: "Which tools can it connect to?", a: "Docs, wikis, chat, ticketing, CRMs, email and SQL databases. If a tool has an API, our connector kit can usually reach it." },
  { q: "How do you reduce wrong answers?", a: "Answers link to their sources, uncertain ones are flagged, and risky actions pause for approval. You set the guardrails." },
  { q: "Is it safe for regulated industries?", a: "Enterprise plans add SSO, audit logs and data-residency options. Talk to us about your compliance needs and we'll be straightforward about what we cover." },
  { q: "Can I leave whenever I want?", a: "Yes. Plans are month-to-month and you can export everything first." },
];

/* ───────────────────────── Pieces ───────────────────────── */

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Zenvora home">
      <svg viewBox="0 0 32 32" className="h-9 w-9 drop-shadow-sm" aria-hidden>
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="oklch(0.85 0.14 175)" />
            <stop offset="1" stopColor="oklch(0.5 0.12 215)" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="10" fill="url(#logo-g)" />
        <path d="M9.5 11h12.5L10 21.5h13" fill="none" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24.5 4.5l1.1 2.9 2.9 1.1-2.9 1.1-1.1 2.9-1.1-2.9-2.9-1.1 2.9-1.1z" fill="oklch(0.92 0.1 90)" />
      </svg>
      <span className="font-display text-2xl font-semibold lowercase leading-none tracking-tight">
        zenvora<span className="text-accent">.</span>
      </span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled || open ? "border-b border-border bg-background/85 backdrop-blur" : ""}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground">{n.label}</a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button size="sm" className="rounded-full" asChild><a href="https://www.northstarai.online" target="_blank" rel="noopener noreferrer">Get started</a></Button>
        </div>
        <button className="grid h-10 w-10 place-items-center lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="px-5 pb-5 lg:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-2.5 text-muted-foreground">{n.label}</a>
          ))}
          <Button size="sm" className="mt-2 w-full rounded-full" asChild><a href="https://www.northstarai.online" target="_blank" rel="noopener noreferrer">Get started</a></Button>
        </div>
      )}
    </header>
  );
}

function Section({ id, eyebrow, title, intro, children, className = "" }: { id?: string; eyebrow: string; title: ReactNode; intro?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl scroll-mt-16 px-5 py-20 md:py-28 ${className}`}>
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">{title}</h2>
      {intro && <p className="lead mt-4 max-w-2xl">{intro}</p>}
      <div className="mt-12">{children}</div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="paper space-y-4 rounded-3xl p-7"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {sent ? (
        <div className="py-10 text-center">
          <Check className="mx-auto h-10 w-10 text-primary" />
          <p className="mt-3 font-display text-2xl">Thank you!</p>
          <p className="text-muted-foreground">A real person will write back within one working day.</p>
        </div>
      ) : (
        <>
          {[
            { id: "name", label: "Your name", type: "text" },
            { id: "email", label: "Work email", type: "email" },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="mb-1.5 block text-sm font-medium">{f.label}</label>
              <input id={f.id} type={f.type} required className="h-11 w-full rounded-xl border border-input bg-background px-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30" />
            </div>
          ))}
          <div>
            <label htmlFor="msg" className="mb-1.5 block text-sm font-medium">What would you like help with?</label>
            <textarea id="msg" rows={4} className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30" />
          </div>
          <Button type="submit" size="lg" className="w-full rounded-full">Send message</Button>
        </>
      )}
    </form>
  );
}

/* ───────────────────────── Page ───────────────────────── */

function Index() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
          <video
            className="hero-video pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-90 saturate-125 [mask-image:linear-gradient(to_bottom,black_82%,transparent)]"
            src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/85 via-background/35 to-transparent" aria-hidden />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-24 pt-32 md:grid-cols-[1.05fr_.95fr] md:pt-36">
          <div className="animate-rise">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-accent" /> Independent · Privacy-first · Founded 2024
            </p>
            <h1 className="text-5xl leading-[1.05] md:text-7xl">
              Helpful AI, <span className="hl hl-under">honestly built.</span>
            </h1>
            <p className="lead mt-6 max-w-lg">
              Zenvora is a small team making AI that works like a good colleague: it finds the answer, shows where it
              came from, and checks with you before it acts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full px-7" asChild>
                <a href="https://www.northstarai.online" target="_blank" rel="noopener noreferrer">Start free <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-transparent px-7" asChild>
                <a href="#story">Read our story</a>
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["No credit card", "Never trains on your data", "Cancel anytime"].map((t) => (
                <li key={t} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" />{t}</li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="paper tape relative aspect-square rotate-[2deg] overflow-hidden rounded-[2rem] p-3">
              <div className="h-full w-full overflow-hidden rounded-[1.4rem]"><Photo id="1517694712202-14dd9538aa97" alt="A laptop on a bright desk beside a plant and a yellow mug" w={1000} pos="35% center" eager /></div>
            </div>
            <div className="paper animate-float absolute -bottom-6 -left-6 max-w-[15rem] rounded-2xl p-4 text-sm" style={{ ["--r" as string]: "-3deg" }}>
              <p className="mb-1 text-xs font-semibold text-accent">Zenvora · 3 sources</p>
              “Refund requests dipped 12% after the new FAQ went live.”
            </div>
            <div className="absolute -right-3 top-8 rotate-[4deg] rounded-xl bg-butter px-3 py-2 font-display text-sm text-[oklch(0.2_0.04_205)] shadow-lg">
              ✓ Stay in control
            </div>
          </div>
        </div>
        <a href="#story" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground/70 md:flex" aria-label="Scroll to next section">
          Scroll
          <span className="grid h-9 w-6 place-items-start justify-center rounded-full border border-foreground/40 pt-2"><span className="h-2 w-1 animate-bounce rounded-full bg-foreground" /></span>
        </a>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-border bg-secondary/60 py-4" aria-label="Works with your tools">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-lg italic text-muted-foreground">
            {[0, 1].map((k) => (
              <div key={k} className="flex gap-10" aria-hidden={k === 1}>
                {["Docs", "Slack-style chat", "Help desks", "CRMs", "Spreadsheets", "Email", "Calendars", "SQL databases", "Wikis"].map((t) => (
                  <span key={t}>{t} <span className="not-italic text-accent">✺</span></span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Partnership */}
        <section className="mx-auto max-w-6xl px-5 pt-16">
          <a href="https://www.northstarai.online" target="_blank" rel="noopener noreferrer" className="paper group flex flex-col items-center justify-between gap-4 rounded-3xl px-7 py-6 text-center transition-colors hover:border-accent sm:flex-row sm:text-left">
            <span className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground" aria-hidden>
                <Sparkles className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-accent">In partnership with</span>
                <span className="block font-display text-2xl">NorthStar AI</span>
              </span>
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              Together we build trustworthy AI for teams · northstarai.online
              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </section>

        {/* Story */}
        <Section id="story" eyebrow="Our story" title={<>We got tired of AI that <span className="hl">talks big</span> and shows nothing.</>}>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="lead space-y-5">
              <p>
                Zenvora began in 2024 when two friends — one from customer support, one from machine-learning research
                — kept hearing the same complaint: “It sounds confident, but I can't tell if it's right.”
              </p>
              <p>
                So we set a rule for ourselves: nothing ships unless a person can check it. Every answer cites its
                source. Every automated action can be undone. Every customer owns their data.
              </p>
              <p className="font-display text-2xl text-foreground">We'd rather be trusted than impressive.</p>
            </div>
            <div className="grid gap-4">
              {PRINCIPLES.map((p) => (
                <div key={p.n} className="paper flex gap-5 rounded-2xl p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent font-display text-lg text-accent-foreground">{p.n}</span>
                  <div>
                    <h3 className="text-xl">{p.title}</h3>
                    <p className="text-muted-foreground">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Use cases */}
        <Section id="use-cases" eyebrow="What it does" title={<>Three jobs Zenvora does <span className="hl">really well</span></>} intro="We'd rather do a few things properly than promise everything. Here's where teams start.">
          <div className="relative">
            <div className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-72 w-[80%] -translate-x-1/2 rounded-full bg-primary/20 blur-[110px]" aria-hidden />
            <div className="grid gap-7 md:grid-cols-3">
              {USE_CASES.map((u, i) => (
                <article
                  key={u.title}
                  className={`group relative rounded-[1.75rem] bg-gradient-to-b from-white/25 via-white/5 to-transparent p-px transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-30px] hover:shadow-primary/60 ${i === 1 ? "md:mt-10" : ""}`}
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-[1.7rem] bg-card">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
                        <Photo id={u.photo} alt={`${u.tag} — ${u.title}`} w={800} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-background/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                        <u.icon className="h-3.5 w-3.5 text-accent" /> {u.tag}
                      </span>
                      <span className="absolute bottom-2 right-5 font-display text-6xl font-bold italic text-white/15">{u.n}</span>
                    </div>
                    <div className="flex flex-1 flex-col p-7 pt-3">
                      <h3 className="text-3xl leading-tight">{u.title}</h3>
                      <p className="lead mt-3 !text-base !leading-relaxed">{u.body}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {u.chips.map((c) => (
                          <li key={c} className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{c}</li>
                        ))}
                      </ul>
                      <a href="#contact" className="mt-6 inline-flex items-center gap-2 pt-1 text-sm font-semibold text-foreground">
                        <span className="hl-under decoration-primary/60 underline-offset-4">Explore {u.tag.toLowerCase()}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
                  <div className="mt-16">
            <h3 className="mb-6 text-2xl md:text-3xl">A glimpse of the <span className="hl">day-to-day</span></h3>
            <div className="grid auto-rows-[200px] gap-5 md:grid-cols-4">
              {GALLERY.map((g) => (
                <figure key={g.cap} className={`paper group relative overflow-hidden rounded-3xl p-2 transition-transform hover:rotate-0 ${g.rot} ${g.span}`}>
                  <div className="h-full w-full overflow-hidden rounded-2xl [&>svg]:h-full [&>svg]:w-full [&>svg]:object-cover">{g.pic}</div>
                  <figcaption className="absolute inset-x-4 bottom-4 rounded-full bg-card/90 px-4 py-1.5 text-center text-sm font-medium backdrop-blur">{g.cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Section>

        {/* Trust (dark band) */}
        <section id="trust" className="scroll-mt-16 bg-[oklch(0.17_0.045_205)] py-20 text-foreground md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <p className="eyebrow mb-5">Privacy, security &amp; responsible AI</p>
            <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">The boring, important stuff — <span className="hl">done carefully.</span></h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {TRUST.map((t) => (
                <div key={t.title} className="rounded-3xl border border-white/15 bg-white/5 p-7">
                  <t.icon className="h-6 w-6 text-butter" />
                  <h3 className="mt-4 text-2xl">{t.title}</h3>
                  <p className="mt-2 text-foreground/80">{t.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-foreground/65">
              We'll always tell you plainly what we do and don't cover. Ask for our security overview at any time.
            </p>
          </div>
        </section>

        {/* Roadmap + Resources */}
        <section id="roadmap" className="mx-auto grid max-w-6xl scroll-mt-16 gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow mb-5">Roadmap</p>
            <h2 className="text-4xl">Where we're <span className="hl">headed</span></h2>
            <ol className="mt-8 space-y-6 border-l-2 border-dashed border-border pl-6">
              {ROADMAP.map((r) => (
                <li key={r.when} className="relative">
                  <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-background bg-accent" />
                  <h3 className="text-xl">{r.when}</h3>
                  <p className="text-muted-foreground">{r.items.join(" · ")}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="eyebrow mb-5">Journal</p>
            <h2 className="text-4xl">Notes from <span className="hl">the team</span></h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {POSTS.map((p) => (
                <li key={p.title}>
                  <a href="#top" className="group flex items-center justify-between gap-4 py-5">
                    <span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-accent">{p.tag} · {p.mins} min</span>
                      <span className="mt-1 block font-display text-xl group-hover:underline">{p.title}</span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl scroll-mt-16 px-5 pb-20 md:pb-28">
          <h2 className="text-center text-4xl md:text-5xl">Good <span className="hl">questions</span></h2>
          <Accordion type="single" collapsible className="mt-10">
            {FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`}>
                <AccordionTrigger className="text-left font-display text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 bg-secondary/60 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-2">
            <div>
              <p className="eyebrow mb-5">Say hello</p>
              <h2 className="text-4xl leading-tight md:text-5xl">Let's find out if we can <span className="hl">help.</span></h2>
              <p className="lead mt-5 max-w-md">
                Tell us a little about your team. No sales scripts — just a conversation about whether Zenvora is a fit.
              </p>
              <ul className="mt-8 space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-accent" /> hello@zenvora.example</li>
                <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-accent" /> Remote-first · Team across 3 time zones</li>
              </ul>
            </div>
            <Contact />
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">Helpful AI, honestly built.</p>
          </div>
          {[
            ["Product", ["Use cases", "Trust", "Roadmap"]],
            ["Company", ["Story", "Journal", "Contact"]],
            ["Legal", ["Privacy", "Terms", "Security"]],
          ].map(([h, links]) => (
            <div key={h as string}>
              <h3 className="font-sans text-sm font-semibold">{h as string}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {(links as string[]).map((l) => (<li key={l}><a href="#top" className="hover:text-foreground">{l}</a></li>))}
              </ul>
            </div>
          ))}
        </div>
        <p className="border-t border-border py-5 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Zenvora AI. Made with care. In partnership with <a className="underline" href="https://www.northstarai.online" target="_blank" rel="noopener noreferrer">NorthStar AI</a>. Photos via <a className="underline" href="https://unsplash.com">Unsplash</a>.</p>
      </footer>
    </div>
  );
}
