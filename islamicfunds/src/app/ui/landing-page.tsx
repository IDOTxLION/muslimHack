"use client";

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export type LandingAuth = { name: string; dashboardPath: string } | null

type BusinessSummary = {
  id: string;
  name: string;
  tagline: string;
  location: string;
  category: string;
  imageUrl: string | null;
  fundingTarget: number;
  equityOffered: number;
  raised: number;
  investorCount: number;
  percentFunded: number;
}

const NAV_ITEMS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Businesses', href: '#businesses-seeking-funding' },
  { label: 'For Investors', href: '#businesses-seeking-funding' },
  { label: 'About', href: '#trust-section' },
]

const STATS = [
  { value: '$20k', label: 'Total Funded' },
  { value: '3', label: 'Businesses Supported' },
  { value: '5+', label: 'Active Investors' },
  { value: '99.9%', label: 'Campaign Success Rate' },
]

const HOW_IT_WORKS_INVESTOR = [
  {
    step: '01',
    title: 'Browse Verified Businesses',
    desc: 'Every listing on our platform has passed our background check and financial analysis process.',
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
    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--muted)' }}>
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${pct}%`, backgroundColor: 'var(--primary)' }}
      />
    </div>
  )
}

function TagBadge({ tag }: { tag: string }) {
  const styles: Record<string, { bg: string; color: string }> = {
    Featured: { bg: 'var(--accent)', color: 'var(--accent-foreground)' },
    'Closing Soon': { bg: 'var(--primary)', color: 'var(--primary-foreground)' },
    New: { bg: 'var(--secondary)', color: 'var(--secondary-foreground)' },
  }
  const s = styles[tag] ?? { bg: 'var(--muted)', color: 'var(--foreground)' }
  return (
    <span
      className="text-xs font-semibold px-2.5 py-1 rounded-full"
      style={{ backgroundColor: s.bg, color: s.color }}
    >
      {tag}
    </span>
  )
}

export function LandingPage({ auth, businesses }: { auth: LandingAuth; businesses: BusinessSummary[] }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'investor' | 'business'>('investor')
  const [mobileOpen, setMobileOpen] = useState(false)

  const steps = activeTab === 'investor' ? HOW_IT_WORKS_INVESTOR : HOW_IT_WORKS_BUSINESS

  const handleListBusiness = () => {
    if (!auth) {
      router.push('/signup?role=business')
      return
    }

    if (auth.dashboardPath === '/dashboard/business') {
      router.push(auth.dashboardPath)
      return
    }

    alert('Only business accounts can list a business. Redirecting you to create a business account.')
    router.push('/signup?role=business')
  }

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: 'var(--background)', color: 'var(--foreground)', minHeight: '100%' }}>

      {/* NAV */}
      <header style={{ backgroundColor: 'var(--accent)', position: 'sticky', top: 0, zIndex: 50 }}>
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: 64 }}>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-md" style={{ width: 28, height: 28, backgroundColor: 'var(--primary)' }}>
              <span style={{ color: 'white', fontSize: 11, fontWeight: 800 }}>A</span>
            </div>
            <span style={{ color: 'var(--accent-foreground)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em' }}>Asaan Fund</span>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(item => (
              <li key={item.label}>
                <a href={item.href} style={{ color: 'var(--secondary)', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--secondary)')}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            {auth ? (
              <>
                <span style={{ color: 'var(--secondary)', fontSize: 14, fontWeight: 500 }}>Hi, {auth.name}</span>
                <a
                  href={auth.dashboardPath}
                  className="bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg text-sm no-underline hover:opacity-80 hover:bg-opacity-80 active:scale-[0.98] transition-all duration-150"
                  style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', fontSize: 14, fontWeight: 600, padding: '8px 18px', borderRadius: 10, textDecoration: 'none' }}
                >
                  Go to Dashboard
                </a>
              </>
            ) : (
              <>
                <a href="/login" className="text-secondary text-sm font-medium no-underline hover:text-white hover:opacity-80 active:scale-[0.98] transition-all duration-150" style={{ color: 'var(--secondary)', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Sign In</a>
                <a
                  href="/signup"
                  className="bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg text-sm no-underline hover:opacity-90 active:scale-[0.98] transition-all duration-150"
                  style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', fontSize: 14, fontWeight: 600, padding: '8px 18px', borderRadius: 10, textDecoration: 'none' }}
                >
                  Get Started
                </a>
              </>
            )}
          </div>

          <button
            className="md:hidden"
            style={{ color: 'var(--accent-foreground)', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
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
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ backgroundColor: 'var(--accent)' }}>
            {NAV_ITEMS.map(item => (
              <a key={item.label} href={item.href} style={{ color: 'var(--secondary)', fontSize: 14, fontWeight: 500, textDecoration: 'none', paddingTop: 4, paddingBottom: 4 }}>{item.label}</a>
            ))}
            {auth ? (
              <a href={auth.dashboardPath} className="bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg text-sm no-underline hover:opacity-80 hover:bg-opacity-80 active:scale-[0.98] transition-all duration-150" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', fontSize: 14, fontWeight: 600, padding: '10px 18px', borderRadius: 10, textDecoration: 'none', textAlign: 'center', marginTop: 8 }}>
                Go to Dashboard
              </a>
            ) : (
              <a href="/signup" className="bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg text-sm no-underline hover:opacity-90 active:scale-[0.98] transition-all duration-150" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', fontSize: 14, fontWeight: 600, padding: '10px 18px', borderRadius: 10, textDecoration: 'none', textAlign: 'center', marginTop: 8 }}>
                Get Started
              </a>
            )}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="hero-section" style={{ backgroundColor: 'var(--accent)', paddingTop: 80, paddingBottom: 112, paddingLeft: 24, paddingRight: 24, position: 'relative', overflow: 'hidden' }}>
        {/* decorative rings */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', right: -96, top: -96, width: 384, height: 384, borderRadius: '50%', border: '1px solid rgba(221,232,226,0.10)' }} />
          <div style={{ position: 'absolute', right: -64, top: -64, width: 288, height: 288, borderRadius: '50%', border: '1px solid rgba(221,232,226,0.10)' }} />
          <div style={{ position: 'absolute', right: 128, bottom: 0, width: 192, height: 192, borderRadius: '50%', border: '1px solid rgba(221,232,226,0.08)' }} />
        </div>
        <div className="max-w-6xl mx-auto" style={{ position: 'relative' }}>
          <div style={{ maxWidth: 620 }}>
            <span style={{ display: 'inline-block', color: 'var(--secondary)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24, border: '1px solid rgba(221,232,226,0.30)', borderRadius: 999, padding: '4px 12px' }}>
              Halal · Equity-Based · Community-Driven
            </span>
            <h1 style={{ color: 'var(--accent-foreground)', fontSize: 'clamp(40px, 6vw, 60px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 24 }}>
              Fund Muslim businesses.<br />
              <span style={{ color: 'var(--primary)' }}>Share in their success.</span>
            </h1>
            <p style={{ color: 'var(--secondary)', fontSize: 18, lineHeight: 1.65, marginBottom: 40, maxWidth: 520 }}>
              Asaan Fund connects investors with verified Muslim-owned SMEs seeking equity crowdfunding. No interest. No ambiguity. Just genuine partnership.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#businesses-seeking-funding" className="bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-lg text-sm no-underline text-center hover:scale-[1.03] hover:opacity-90 active:scale-[0.98] transition-all duration-150" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', fontWeight: 600, padding: '14px 28px', borderRadius: 10, fontSize: 14, textDecoration: 'none' }}>
                Start Investing
              </a>
              <button
                type="button"
                onClick={handleListBusiness}
                className="border border-secondary/40 text-secondary font-medium px-7 py-3.5 rounded-lg text-sm no-underline bg-transparent cursor-pointer hover:scale-[1.03] hover:bg-white/10 active:scale-[0.98] transition-all duration-150"
                style={{ color: 'var(--secondary)', fontWeight: 500, padding: '14px 28px', borderRadius: 10, fontSize: 14, textDecoration: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                List Your Business
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="hero-transition" aria-hidden="true" />

      {/* STATS */}
      <div style={{ backgroundColor: 'var(--background)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ paddingTop: 40, paddingBottom: 40 }}>
          {STATS.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 30, fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>{s.value}</div>
              <div style={{ fontSize: 13, color: 'var(--muted-foreground)', fontWeight: 500, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-35" style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24 }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6" style={{ marginBottom: 48 }}>
            <div>
              <p style={{ color: 'var(--primary)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>How It Works</p>
              <h2 style={{ fontSize: 36, fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Simple steps to get started
              </h2>
            </div>
            <div className="flex self-start md:self-auto" style={{ backgroundColor: 'var(--muted)', borderRadius: 10, padding: 4 }}>
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
                    backgroundColor: activeTab === tab ? 'var(--accent)' : 'transparent',
                    color: activeTab === tab ? 'var(--accent-foreground)' : 'var(--muted-foreground)',
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
              <div key={item.step} style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: 28 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--foreground)', marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--muted-foreground)', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE CAMPAIGNS */}
      <section id="businesses-seeking-funding" className="scroll-mt-16" style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, backgroundColor: 'var(--muted)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ marginBottom: 48 }}>
            <div>
              <p style={{ color: 'var(--primary)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Active Campaigns</p>
              <h2 style={{ fontSize: 36, fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.03em' }}>
                Businesses seeking funding
              </h2>
            </div>
            <a href="/dashboard/investor" className="text-accent text-sm font-semibold underline underline-offset-4 hover:opacity-80 active:scale-[0.98] transition-all duration-150" style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 4 }}>
              View all listings →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {businesses.length === 0 ? (
              <p style={{ color: 'var(--muted-foreground)', fontSize: 16, textAlign: 'center', gridColumn: '1 / -1', padding: 40 }}>
                No businesses are currently seeking funding. Check back soon!
              </p>
            ) : businesses.map(biz => {
              const tag = biz.percentFunded > 80 ? 'Closing Soon' : biz.percentFunded === 0 ? 'New' : 'Featured'
              return (
                <div
                  key={biz.id}
                  style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s, transform 0.15s' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{ position: 'relative', height: 200, backgroundColor: 'var(--muted)' }}>
                    <img src={biz.imageUrl ?? 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop&auto=format'} alt={biz.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 12, left: 12 }}>
                      <TagBadge tag={tag} />
                    </div>
                  </div>

                  <div style={{ padding: 20, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div className="flex items-start justify-between gap-2" style={{ marginBottom: 4 }}>
                      <h3 style={{ fontWeight: 700, color: 'var(--foreground)', fontSize: 15, lineHeight: 1.3 }}>{biz.name}</h3>
                      <span style={{ fontSize: 11, color: 'var(--muted-foreground)', whiteSpace: 'nowrap' }}>{biz.location}</span>
                    </div>
                    <span style={{ fontSize: 11, color: 'var(--primary)', fontWeight: 600, marginBottom: 12 }}>{biz.category}</span>
                    <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: 16, flex: 1, minHeight: 62 }}>{biz.tagline}</p>

                    <ProgressBar raised={biz.raised} target={biz.fundingTarget} />

                    <div className="grid grid-cols-3 gap-2 text-center" style={{ marginTop: 12, marginBottom: 20 }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--foreground)', fontVariantNumeric: 'tabular-nums' }}>${biz.raised.toLocaleString()}</div>
                        <div style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>raised</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--foreground)', fontVariantNumeric: 'tabular-nums' }}>{biz.percentFunded}%</div>
                        <div style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>of goal</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--foreground)', fontVariantNumeric: 'tabular-nums' }}>{biz.investorCount}</div>
                        <div style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>investors</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>{biz.equityOffered}% equity offered</span>
                      <a href={`/invest/${biz.id}`} className="bg-primary text-primary-foreground font-semibold text-xs px-4 py-1.5 rounded-lg no-underline text-center hover:opacity-90 active:scale-[0.98] transition-all duration-150" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', fontSize: 12, fontWeight: 600, padding: '7px 16px', borderRadius: 8, textDecoration: 'none' }}>
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
      <section id="trust-section" className="scroll-mt-16" style={{ paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24 }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ marginBottom: 48 }}>
            <p style={{ color: 'var(--primary)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Why Asaan Fund</p>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.03em', maxWidth: 480 }}>
              Built on trust, transparency, and Islamic principles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {TRUST_POINTS.map(tp => (
              <div key={tp.title} className="flex gap-5" style={{ backgroundColor: 'color-mix(in srgb, var(--secondary) 50%, transparent)', border: '1px solid var(--border)', borderRadius: 10, padding: 28 }}>
                <div style={{ fontSize: 28, lineHeight: 1, marginTop: 2 }}>{tp.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, color: 'var(--foreground)', marginBottom: 8, fontSize: 15 }}>{tp.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--muted-foreground)', lineHeight: 1.65 }}>{tp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-linear-to-b from-[#FAF8F5] via-neutral-950 to-black pt-20 pb-16 px-6 relative">
        <div className="max-w-6xl mx-auto rounded-2xl bg-neutral-900/90 border border-neutral-800 p-8 md:p-12 relative overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-(--primary)/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-3">
              Ready to back a Muslim business?
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Join thousands of investors growing wealth the halal way — sharing in the success of real businesses, not charging interest.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button href="#businesses-seeking-funding" variant="primary">
                Browse Businesses
              </Button>
              <Button onClick={handleListBusiness} variant="outline">
                List Your Business
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black pt-8 pb-16 px-6 border-t border-neutral-900 text-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-neutral-900">
            <div className="md:col-span-2 pr-0 md:pr-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 flex items-center justify-center rounded-md bg-primary">
                  <span className="text-black text-xs font-black">A</span>
                </div>
                <span className="text-white font-bold text-base tracking-tight">Asaan Fund</span>
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
                Halal equity crowdfunding for Muslim-owned small and medium businesses. Connecting ethical capital with growing ventures.
              </p>
            </div>

            {[
              { title: 'Platform', links: ['Browse Businesses', 'How It Works', 'Pricing', 'For Investors'] },
              { title: 'Company', links: ['About Us', 'Shariah Compliance', 'Legal', 'Contact'] },
              { title: 'Resources', links: ['Blog', 'FAQ', 'Investor Guide', 'Business Guide'] },
            ].map(col => (
              <div key={col.title}>
                <h4 className="text-white text-xs font-semibold tracking-wider uppercase mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map(l => (
                    <li key={l}>
                      <a href="#" className="text-neutral-400 hover:text-white text-xs transition-colors duration-150">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© 2026 Asaan Fund. All rights reserved.</p>
            <p className="text-neutral-500 sm:text-right">
              Investments involve risk. Capital at risk. Not financial advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
