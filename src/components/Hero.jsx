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
        alpha:   Math.random() * 0.28 + 0.04,
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
        p.alpha += p.fade * 0.0008
        if (p.alpha > 0.32) p.fade = -1
        if (p.alpha < 0.03) p.fade = 1
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
      className="relative flex items-end overflow-hidden"
      style={{ minHeight: '100vh', paddingBottom: '100px', paddingTop: '64px' }}
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
        style={{ opacity: 0.55, width: '100%', height: '100%' }}
      />

      <div className="relative z-20 max-w-[1160px] mx-auto px-14 md:px-5 w-full">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-2.5 mb-9 anim-fade-up anim-delay-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--orange)' }} />
            <span className="text-[11px] tracking-[0.13em] uppercase" style={{ color: 'var(--text-muted)' }}>
              Nairobi, Kenya · Est. 2024
            </span>
          </div>

          <h1
            className="font-display font-extrabold leading-none tracking-tight mb-7 anim-fade-up anim-delay-2"
            style={{ fontSize: 'clamp(48px, 6.5vw, 88px)' }}
          >
            We digitise and automate<br />
            <span className="kenya-underline">Kenyan</span> businesses.
          </h1>

          <p
            className="text-base max-w-[480px] leading-[1.75] mb-11 font-light anim-fade-up anim-delay-3"
            style={{ color: 'var(--text-muted)' }}
          >
            Custom web apps, payment integrations, and workflow automation. We take your business from manual to digital - fast, without the agency fluff.
          </p>

          <div className="flex items-center gap-4 flex-wrap anim-fade-up anim-delay-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium no-underline text-white transition-all duration-200 hover:-translate-y-px"
              style={{ background: 'var(--orange)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--orange-dim)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--orange)'}
            >
              Get a quote <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-normal no-underline transition-all duration-200"
              style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'var(--text)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
            >
              See our work
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        className="absolute z-20 flex gap-9 anim-fade-up anim-delay-5"
        style={{ bottom: '100px', right: '56px' }}
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
