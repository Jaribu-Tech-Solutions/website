export default function Hero() {
  return (
    <section id="hero" className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 text-center md:text-left">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Digital solutions for growing brands</p>
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">Build modern web experiences with confidence.</h1>
        <p className="mx-auto max-w-2xl text-base text-slate-300 sm:mx-0">
          We craft fast, polished products for startups and agencies. Placeholder content lives here while the full site is coming together.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
        <a href="#contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
          Start a Project
        </a>
        <a href="#services" className="text-sm font-medium text-slate-200 underline underline-offset-4 hover:text-white">
          Explore Services
        </a>
      </div>
    </section>
  );
}
