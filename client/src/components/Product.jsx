const FEATURES = [
  'Every business gets their own trained AI agent - not a shared bot',
  'M-Pesa payment confirmation built in, no manual reconciliation',
  'Inventory management and order tracking via WhatsApp Business API',
  'Built for 3G connections and businesses with zero technical staff',
]

const TAGS = ['React', 'Flask', 'PostgreSQL', 'WhatsApp API', 'M-Pesa Daraja', 'Drop Labs AI']

export default function Product() {
  return (
    <section
      id="product"
      className="py-16 md:py-28"
      style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-[1160px] mx-auto px-5 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-center">
          {/* Left */}
          <div data-reveal>
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="inline-block w-5 h-[2px]" style={{ background: 'var(--text-muted)' }} />
              <span className="text-[11px] tracking-[0.14em] uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>04 · What we're building</span>
            </div>
            <div
              className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.08em] uppercase px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'var(--orange-glow)', color: 'var(--orange)', border: '1px solid var(--border-warm)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--orange)' }} />
              Coming soon
            </div>
            <h2 className="font-display font-extrabold tracking-tight leading-[1.1] mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
              Replai - AI commerce agent for WhatsApp
            </h2>
            <p className="text-[14px] leading-[1.8] mb-6 font-light" style={{ color: 'var(--text-muted)' }}>
              Agency work funds this. We're also building for ourselves. Replai is a multi-tenant AI platform that lets African SMBs run customer support, take M-Pesa orders, and manage inventory entirely over WhatsApp.
            </p>
            <div className="flex flex-col gap-2.5 mb-7">
              {FEATURES.map(f => (
                <div key={f} className="flex items-start gap-2.5">
                  <div className="w-1 h-1 rounded-full mt-[7px] flex-shrink-0" style={{ background: 'var(--orange)' }} />
                  <span className="text-[13px] leading-[1.6] font-light" style={{ color: 'var(--text-muted)' }}>{f}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {TAGS.map(tag => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.05em] px-2 py-1 rounded font-mono"
                  style={{ background: 'var(--bg4)', color: 'var(--text-dim)', border: '1px solid var(--border)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Mockup */}
          <div data-reveal data-delay="2" className="rounded-2xl overflow-hidden" style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-2 p-3 px-4" style={{ background: 'var(--bg4)', borderBottom: '1px solid var(--border)' }}>
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--border)' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--border)' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--border)' }} />
              <div className="flex-1 h-1.5 rounded ml-2" style={{ background: 'var(--border)' }} />
            </div>
            <div className="p-5 flex flex-col gap-2.5">
              {/* Customer msg */}
              <div className="flex gap-2 items-start">
                <div
                  className="w-[26px] h-[26px] rounded-lg flex items-center justify-center text-[8px] font-display font-bold flex-shrink-0"
                  style={{ background: 'var(--orange-glow)', border: '1px solid var(--border-warm)', color: 'var(--orange)' }}
                >C</div>
                <div className="text-[12px] px-3 py-2 rounded-[2px_10px_10px_10px] max-w-[80%] font-light leading-[1.6]" style={{ background: 'var(--bg4)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                  Hi! I'd like to order 2kg rice and 1L cooking oil.
                </div>
              </div>
              {/* AI reply */}
              <div className="flex flex-row-reverse gap-2 items-start">
                <div
                  className="w-[26px] h-[26px] rounded-lg flex items-center justify-center text-[8px] font-display font-bold flex-shrink-0"
                  style={{ background: 'var(--bg4)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                >AI</div>
                <div className="text-[12px] px-3 py-2 rounded-[10px_2px_10px_10px] max-w-[80%] font-light leading-[1.6]" style={{ background: 'var(--orange-glow)', color: 'var(--text)', border: '1px solid var(--border-warm)' }}>
                  Got it!<br />• Rice 2kg - KES 180<br />• Cooking oil 1L - KES 210<br /><strong>Total: KES 390</strong><br /><br />Pay via M-Pesa to confirm.
                </div>
              </div>
              {/* Customer confirm */}
              <div className="flex gap-2 items-start">
                <div
                  className="w-[26px] h-[26px] rounded-lg flex items-center justify-center text-[8px] font-display font-bold flex-shrink-0"
                  style={{ background: 'var(--orange-glow)', border: '1px solid var(--border-warm)', color: 'var(--orange)' }}
                >C</div>
                <div className="text-[12px] px-3 py-2 rounded-[2px_10px_10px_10px] max-w-[80%] font-light leading-[1.6]" style={{ background: 'var(--bg4)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                  Done, payment sent.
                </div>
              </div>
              {/* AI confirmed */}
              <div className="flex flex-row-reverse gap-2 items-start">
                <div
                  className="w-[26px] h-[26px] rounded-lg flex items-center justify-center text-[8px] font-display font-bold flex-shrink-0"
                  style={{ background: 'var(--bg4)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                >AI</div>
                <div className="text-[12px] px-3 py-2 rounded-[10px_2px_10px_10px] max-w-[80%] font-light leading-[1.6]" style={{ background: 'var(--orange-glow)', color: 'var(--text)', border: '1px solid var(--border-warm)' }}>
                  ✅ KES 390 confirmed. Order preparing - delivery in 2–3hrs.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mx-5 mb-4 px-3.5 py-2.5 rounded-lg" style={{ background: 'var(--bg4)', border: '1px solid var(--border)' }}>
              <span className="text-[11px] flex-1" style={{ color: 'var(--text-dim)' }}>Type a message...</span>
              <button className="px-3 py-1 rounded text-[11px] text-white cursor-pointer font-body" style={{ background: 'var(--orange)', border: 'none' }}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
