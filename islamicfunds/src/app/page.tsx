"use client";

import { useState } from 'react'

const NAV_LINKS = ['How It Works', 'Businesses', 'For Investors', 'About']

const STATS = [
  { value: '£2.4M', label: 'Total Funded' },
  { value: '147', label: 'Businesses Supported' },
  { value: '3,200+', label: 'Active Investors' },
  { value: '94%', label: 'Campaign Success Rate' },
]

const HOW_IT_WORKS_INVESTOR = [
  {
    step: '01',
    title: 'Browse Verified Businesses',
    desc: 'Every listing on our platform has passed our background check and financial analysis process — no guesswork.',
  },
  {
    step: '02',
    title: 'Choose Your Stake',
    desc: 'Select how much you want to invest and what equity share you receive. Fully transparent, halal, no interest involved.',
  },
  {
    step: '03',
    title: 'Grow Together',
    desc: 'Receive profit distributions as the business grows. Track your portfolio and stay connected with founders.',
  },
]

const HOW_IT_WORKS_BUSINESS = [
  {
    step: '01',
    title: 'Apply & Get Verified',
    desc: 'Submit your business profile. Our team conducts background checks and financial due diligence to verify your credibility.',
  },
  {
    step: '02',
    title: 'Set Your Terms',
    desc: "Define how much equity you're offering and your funding target. Our legal templates ensure a fair, Shariah-compliant agreement.",
  },
  {
    step: '03',
    title: 'Receive Funding',
    desc: 'Once your campaign is live, investors from the community can contribute and become stakeholders in your growth.',
  },
]

const BUSINESSES = [
  {
    name: 'Baraka Bakehouse',
    location: 'Birmingham, UK',
    category: 'Food & Hospitality',
    raised: 28400,
    target: 40000,
    investors: 84,
    equity: '12%',
    daysLeft: 18,
    tag: 'Featured',
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop&auto=format',
    desc: 'An artisan halal bakery expanding to a second location in the city centre.',
  },
  {
    name: 'Nour Tech Solutions',
    location: 'London, UK',
    category: 'Technology',
    raised: 67500,
    target: 80000,
    investors: 132,
    equity: '8%',
    daysLeft: 9,
    tag: 'Closing Soon',
    img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&auto=format',
    desc: 'SaaS platform helping small mosques manage memberships and community events.',
  },
  {
    name: 'Ummah Threads',
    location: 'Manchester, UK',
    category: 'Fashion & Retail',
    raised: 11200,
    target: 35000,
    investors: 47,
    equity: '15%',
    daysLeft: 34,
    tag: 'New',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop&auto=format',
    desc: 'Ethical modest fashion brand bringing premium quality to everyday Muslim wardrobes.',
  },
]

const TRUST_POINTS = [
  {
    icon: '🔍',
    title: 'Background Verified',
    desc: 'Every business on our platform is vetted by our compliance team before listing.',
  },
  {
    icon: '📊',
    title: 'Financial Analysis',
    desc: 'Optional deep-dive financial reports prepared by qualified analysts to inform your decision.',
  },
  {
    icon: '☪️',
    title: 'Shariah Compliant',
    desc: 'All investments are equity-based — no interest, no riba. Profit and risk are shared fairly.',
  },
  {
    icon: '⚖️',
    title: 'Legal Framework',
    desc: 'Standardised equity agreements drafted with experienced commercial lawyers protect both parties.',
  },
]

function ProgressBar({ raised, target }: { raised: number; target: number }) {
  const pct = Math.min((raised / target) * 100, 100)
  return (
    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: '#EEE9DF' }}>
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${pct}%`, backgroundColor: '#D86F52' }}
      />
    </div>
  )
}

function TagBadge({ tag }: { tag: string }) {
  const styles: Record<string, { bg: string; color: string }> = {
    Featured: { bg: '#123E3A', color: '#F8F4EC' },
    'Closing Soon': { bg: '#D86F52', color: '#FFFFFF' },
    New: { bg: '#DDE8E2', color: '#202927' },
  }
  const s = styles[tag] ?? { bg: '#EEE9DF', color: '#202927' }
  return (
    <span
      className="text-xs font-semibold px-2.5 py-1 rounded-full"
      style={{ backgroundColor: s.bg, color: s.color }}
    >
      {tag}
    </span>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'investor' | 'business'>('investor')
  const [mobileOpen, setMobileOpen] = useState(false)

  const steps = activeTab === 'investor' ? HOW_IT_WORKS_INVESTOR : HOW_IT_WORKS_BUSINESS

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: '#F8F4EC', color: '#202927', minHeight: '100%' }}>

      {/* NAV */}
      <header style={{ backgroundColor: '#123E3A', position: 'sticky', top: 0, zIndex: 50 }}>
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: 64 }}>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-md" style={{ width: 28, height: 28, backgroundColor: '#D86F52' }}>
              <span style={{ color: 'white', fontSize: 11, fontWeight: 800 }}>A</span>
            </div>
            <span style={{ color: '#F8F4EC', fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em' }}>Amal Fund</span>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <li key={link}>
                <a href="#" style={{ color: '#DDE8E2', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#DDE8E2')}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a href="/login" style={{ color: '#DDE8E2', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Sign In</a>
            <a
              href="/signup"
              className="transition-colors"
              style={{ backgroundColor: '#D86F52', color: 'white', fontSize: 14, fontWeight: 600, padding: '8px 18px', borderRadius: 10, textDecoration: 'none' }}
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden"
            style={{ color: '#F8F4EC', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
            onClick={() => setMobileOpen(o => !o)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <path d="M6 18L18 6M6 6l12 12" />
                : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </nav>

        {mobileOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ backgroundColor: '#0e322f' }}>
            {NAV_LINKS.map(link => (
              <a key={link} href="#" style={{ color: '#DDE8E2', fontSize: 14, fontWeight: 500, textDecoration: 'none', paddingTop: 4, paddingBottom: 4 }}>{link}</a>
            ))}
            <a href="#" style={{ backgroundColor: '#D86F52', color: 'white', fontSize: 14, fontWeight: 600, padding: '10px 18px', borderRadius: 10, textDecoration: 'none', textAlign: 'center', marginTop: 8 }}>
              Get Started
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section style={{ backgroundColor: '#123E3A', paddingTop: 80, paddingBottom: 112, paddingLeft: 24, paddingRight: 24, position: 'relative', overflow: 'hidden' }}>
        {/* decorative rings */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', right: -96, top: -96, width: 384, height: 384, borderRadius: '50%', border: '1px solid rgba(221,232,226,0.10)' }} />
          <div style={{ position: 'absolute', right: -64, top: -64, width: 288, height: 288, borderRadius: '50%', border: '1px solid rgba(221,232,226,0.10)' }} />
          <div style={{ position: 'absolute', right: 128, bottom: 0, width: 192, height: 192, borderRadius: '50%', border: '1px solid rgba(221,232,226,0.08)' }} />
        </div>
        <div className="max-w-6xl mx-auto" style={{ position: 'relative' }}>
          <div style={{ maxWidth: 620 }}>
            <span style={{ display: 'inline-block', color: '#DDE8E2', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24, border: '1px solid rgba(221,232,226,0.30)', borderRadius: 999, padding: '4px 12px' }}>
              Halal · Equity-Based · Community-Driven
            </span>
            <h1 style={{ color: '#F8F4EC', fontSize: 'clamp(40px, 6vw, 60px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 24 }}>
              Fund Muslim businesses.<br />
              <span style={{ color: '#D86F52' }}>Share in their success.</span>
            </h1>
            <p style={{ color: '#DDE8E2', fontSize: 18, lineHeight: 1.65, marginBottom: 40, maxWidth: 520 }}>
              Amal Fund connects investors with verified Muslim-owned SMEs seeking equity crowdfunding. No interest. No ambiguity. Just genuine partnership.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" style={{ backgroundColor: '#D86F52', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: 10, fontSize: 14, textDecoration: 'none' }}>
                Start Investing
              </a>
              <a href="#" style={{ border: '1px solid rgba(221,232,226,0.40)', color: '#DDE8E2', fontWeight: 500, padding: '14px 28px', borderRadius: 10, fontSize: 14, textDecoration: 'none' }}>
                List Your Business
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ backgroundColor: '#F8F4EC', borderBottom: '1px solid #D4CEBE' }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ paddingTop: 40, paddingBottom: 40 }}>
          {STATS.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 30, fontWeight: 800, color: '#123E3A', letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#5C6B64', fontWeight: 500, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24 }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6" style={{ marginBottom: 48 }}>
            <div>
              <p style={{ color: '#D86F52', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>How It Works</p>
              <h2 style={{ fontSize: 36, fontWeight: 800, color: '#202927', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Simple steps to get started
              </h2>
            </div>
            <div className="flex self-start md:self-auto" style={{ backgroundColor: '#EEE9DF', borderRadius: 10, padding: 4 }}>
              {(['investor', 'business'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '8px 20px',
                    fontSize: 13,
                    fontWeight: 600,
                    borderRadius: 8,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    backgroundColor: activeTab === tab ? '#123E3A' : 'transparent',
                    color: activeTab === tab ? '#F8F4EC' : '#5C6B64',
                    fontFamily: 'inherit',
                  }}
                >
                  {tab === 'investor' ? 'As an Investor' : 'As a Business'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map(item => (
              <div key={item.step} style={{ backgroundColor: 'white', border: '1px solid #D4CEBE', borderRadius: 10, padding: 28 }}>
                <div style={{ fontSize: 48, fontWeight: 800, color: '#DDE8E2', marginBottom: 20, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{item.step}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#202927', marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#5C6B64', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE CAMPAIGNS */}
      <section style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, backgroundColor: 'rgba(221,232,226,0.35)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ marginBottom: 48 }}>
            <div>
              <p style={{ color: '#D86F52', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Active Campaigns</p>
              <h2 style={{ fontSize: 36, fontWeight: 800, color: '#202927', letterSpacing: '-0.03em' }}>
                Businesses seeking funding
              </h2>
            </div>
            <a href="#" style={{ color: '#123E3A', fontSize: 14, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 4 }}>
              View all listings →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {BUSINESSES.map(biz => {
              const pct = Math.round((biz.raised / biz.target) * 100)
              return (
                <div
                  key={biz.name}
                  style={{ backgroundColor: 'white', border: '1px solid #D4CEBE', borderRadius: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(18,62,58,0.10)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                >
                  <div style={{ position: 'relative', height: 176, backgroundColor: '#EEE9DF' }}>
                    <img src={biz.img} alt={biz.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 12, left: 12 }}>
                      <TagBadge tag={biz.tag} />
                    </div>
                  </div>

                  <div style={{ padding: 20, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div className="flex items-start justify-between gap-2" style={{ marginBottom: 4 }}>
                      <h3 style={{ fontWeight: 700, color: '#202927', fontSize: 15, lineHeight: 1.3 }}>{biz.name}</h3>
                      <span style={{ fontSize: 11, color: '#5C6B64', whiteSpace: 'nowrap' }}>{biz.location}</span>
                    </div>
                    <span style={{ fontSize: 11, color: '#D86F52', fontWeight: 600, marginBottom: 12 }}>{biz.category}</span>
                    <p style={{ fontSize: 13, color: '#5C6B64', lineHeight: 1.6, marginBottom: 16, flex: 1 }}>{biz.desc}</p>

                    <ProgressBar raised={biz.raised} target={biz.target} />

                    <div className="grid grid-cols-3 gap-2 text-center" style={{ marginTop: 12, marginBottom: 20 }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#202927', fontVariantNumeric: 'tabular-nums' }}>£{biz.raised.toLocaleString()}</div>
                        <div style={{ fontSize: 11, color: '#5C6B64' }}>raised</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#202927', fontVariantNumeric: 'tabular-nums' }}>{pct}%</div>
                        <div style={{ fontSize: 11, color: '#5C6B64' }}>of goal</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#202927', fontVariantNumeric: 'tabular-nums' }}>{biz.daysLeft}d</div>
                        <div style={{ fontSize: 11, color: '#5C6B64' }}>remaining</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span style={{ fontSize: 11, color: '#5C6B64' }}>{biz.investors} investors · {biz.equity} equity</span>
                      <a href="#" style={{ backgroundColor: '#D86F52', color: 'white', fontSize: 12, fontWeight: 600, padding: '7px 16px', borderRadius: 8, textDecoration: 'none' }}>
                        Invest Now
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24 }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ marginBottom: 48 }}>
            <p style={{ color: '#D86F52', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Why Amal Fund</p>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#202927', letterSpacing: '-0.03em', maxWidth: 480 }}>
              Built on trust, transparency, and Islamic principles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {TRUST_POINTS.map(tp => (
              <div key={tp.title} className="flex gap-5" style={{ backgroundColor: 'rgba(221,232,226,0.5)', border: '1px solid #D4CEBE', borderRadius: 10, padding: 28 }}>
                <div style={{ fontSize: 28, lineHeight: 1, marginTop: 2 }}>{tp.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, color: '#202927', marginBottom: 8, fontSize: 15 }}>{tp.title}</h3>
                  <p style={{ fontSize: 13, color: '#5C6B64', lineHeight: 1.65 }}>{tp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ backgroundColor: '#123E3A', paddingTop: 80, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 style={{ color: '#F8F4EC', fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 12 }}>
              Ready to back a Muslim business?
            </h2>
            <p style={{ color: '#DDE8E2', fontSize: 15, maxWidth: 480, lineHeight: 1.6 }}>
              Join thousands of investors growing wealth the halal way — sharing in the success of real businesses, not charging interest.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3" style={{ flexShrink: 0 }}>
            <a href="#" style={{ backgroundColor: '#D86F52', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: 10, fontSize: 14, textDecoration: 'none', textAlign: 'center' }}>
              Browse Businesses
            </a>
            <a href="#" style={{ border: '1px solid rgba(221,232,226,0.40)', color: '#DDE8E2', fontWeight: 500, padding: '14px 28px', borderRadius: 10, fontSize: 14, textDecoration: 'none', textAlign: 'center' }}>
              List Your Business
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#0e322f', paddingTop: 48, paddingBottom: 48, paddingLeft: 24, paddingRight: 24 }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" style={{ marginBottom: 40 }}>
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2" style={{ marginBottom: 16 }}>
                <div className="flex items-center justify-center rounded-md" style={{ width: 24, height: 24, backgroundColor: '#D86F52' }}>
                  <span style={{ color: 'white', fontSize: 10, fontWeight: 800 }}>A</span>
                </div>
                <span style={{ color: '#F8F4EC', fontWeight: 700, fontSize: 15 }}>Amal Fund</span>
              </div>
              <p style={{ color: 'rgba(221,232,226,0.65)', fontSize: 13, lineHeight: 1.6 }}>
                Halal equity crowdfunding for Muslim-owned small and medium businesses.
              </p>
            </div>
            {[
              { title: 'Platform', links: ['Browse Businesses', 'How It Works', 'Pricing', 'For Investors'] },
              { title: 'Company', links: ['About Us', 'Shariah Compliance', 'Legal', 'Contact'] },
              { title: 'Resources', links: ['Blog', 'FAQ', 'Investor Guide', 'Business Guide'] },
            ].map(col => (
              <div key={col.title}>
                <h4 style={{ color: '#F8F4EC', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>{col.title}</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.links.map(l => (
                    <li key={l}>
                      <a href="#" style={{ color: 'rgba(221,232,226,0.65)', fontSize: 13, textDecoration: 'none' }}>{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(221,232,226,0.10)', paddingTop: 24 }}>
            <p style={{ color: 'rgba(221,232,226,0.45)', fontSize: 12 }}>© 2026 Amal Fund. All rights reserved.</p>
            <p style={{ color: 'rgba(221,232,226,0.45)', fontSize: 12 }}>Investments involve risk. Capital at risk. Not financial advice.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
