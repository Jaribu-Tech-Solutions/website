import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const ORANGE = 'rgba(232,93,26,'
    const DIM    = 'rgba(255,255,255,'
    const fragments = [
      'const','{}','[]','()=>','async','await','fetch(','M-Pesa',
      '.post(','.get(','200','404','true','null','0x1A','KES',
      'SELECT','INSERT','WHERE','JOIN','index','token','[]byte',
      'if(','else{','return','payload','webhook','daraja','stk',
      '#!/','>>>','---','~~~','API','SDK','env','req','res',
    ]

    let particles = []
    let rafId

    function resize() {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    function spawn() {
      const isOrange = Math.random() < 0.18
      return {
        text:    fragments[Math.floor(Math.random() * fragments.length)],
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        vx:      (Math.random() - 0.5) * 0.18,
        vy:      Math.random() * 0.22 + 0.06,
        alpha:   Math.random() * 0.4 + 0.12,
        fade:    Math.random() < 0.5 ? 1 : -1,
        size:    Math.floor(Math.random() * 4) + 9,
        isOrange,
        color:   isOrange ? ORANGE : DIM,
      }
    }

    function init() {
      resize()
      particles = Array.from({ length: 55 }, spawn)
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.alpha += p.fade * 0.0012
        if (p.alpha > 0.55) p.fade = -1
        if (p.alpha < 0.08) p.fade = 1
        if (p.y > canvas.height + 20) { p.y = -20; p.x = Math.random() * canvas.width }
        if (p.x < -60) p.x = canvas.width + 10
        if (p.x > canvas.width + 60) p.x = -10
        ctx.font = `300 ${p.size}px 'Courier New', monospace`
        ctx.fillStyle = p.color + p.alpha.toFixed(3) + ')'
        ctx.fillText(p.text, p.x, p.y)
      }
      rafId = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(() => resize())
    ro.observe(canvas)
    init()
    draw()

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [])

  return (
    <section
      className="hero-section relative flex items-start overflow-hidden"
      style={{ paddingTop: 'clamp(110px, 14vh, 180px)', paddingBottom: '100px' }}
    >
      <div className="hero-grid-bg" />
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-160px', right: '-160px',
          width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(232,93,26,0.07) 0%, transparent 70%)',
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ opacity: 0.85, width: '100%', height: '100%' }}
      />

      <div className="relative z-20 max-w-[1160px] mx-auto px-5 md:px-14 w-full">
        <div className="max-w-[860px]"
          style={{
            background: 'radial-gradient(ellipse 110% 120% at 0% 50%, rgba(10,10,10,0.72) 60%, transparent 100%)',
          }}
        >
          <div className="flex items-center gap-2.5 mb-5 md:mb-8 anim-fade-up anim-delay-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--orange)' }} />
            <span className="text-[11px] tracking-[0.13em] uppercase" style={{ color: 'var(--text-muted)' }}>
              Nairobi, Kenya · Est. 2026
            </span>
          </div>

          <h1
            className="font-display font-extrabold leading-none tracking-tight mb-5 md:mb-7 anim-fade-up anim-delay-2"
            style={{ fontSize: 'clamp(28px, 6vw, 88px)' }}
          >
            We digitise and automate<br className="hidden sm:block" />
            {' '}<span className="kenya-underline">Kenyan</span> businesses.
          </h1>

          <p
            className="text-base max-w-[480px] leading-[1.75] mb-7 md:mb-10 font-light anim-fade-up anim-delay-3"
            style={{ color: 'var(--text-muted)' }}
          >
            Custom web apps, payment integrations, and workflow automation. We take your business from manual to digital - fast, without the agency fluff.
          </p>

          <div className="flex items-center gap-4 flex-wrap anim-fade-up anim-delay-4">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium no-underline hover:-translate-y-px transition-transform duration-200"
            >
              Get a quote →
            </a>
            <a
              href="#portfolio"
              className="btn-ghost-white inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-normal no-underline"
            >
              See our work
            </a>
          </div>

          {/* Stats - visible on mobile below CTAs */}
          <div className="flex gap-8 mt-9 md:hidden anim-fade-up anim-delay-5">
            {[
              { num: '2', lbl: 'Developers' },
              { num: '<4h', lbl: 'Reply time' },
              { num: '2w', lbl: 'MVP delivery' },
            ].map(s => (
              <div key={s.lbl}>
                <div className="font-display font-bold text-[22px] tracking-tight" style={{ color: 'var(--text)' }}>{s.num}</div>
                <div className="text-[11px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute z-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 no-underline animate-bounce anim-fade-up anim-delay-5"
        style={{ bottom: '36px' }}
        aria-label="Scroll to services"
      >
        <span className="text-[10px] tracking-[0.12em] uppercase" style={{ color: 'var(--text-dim)' }}>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </a>

      {/* Stats */}
      <div
        className="absolute z-20 hidden md:flex gap-9 anim-fade-up anim-delay-5"
        style={{ bottom: '80px', right: '56px' }}
      >
        {[
          { num: '2', lbl: 'Developers' },
          { num: '<4h', lbl: 'Reply time' },
          { num: '2w', lbl: 'MVP delivery' },
        ].map(s => (
          <div key={s.lbl} className="text-right">
            <div className="font-display font-bold text-[28px] tracking-tight" style={{ color: 'var(--text)' }}>{s.num}</div>
            <div className="text-[11px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
