export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold">JaribuTech</div>
        <nav className="hidden gap-6 md:flex text-sm text-slate-200/90">
          <a href="#hero" className="hover:text-white">Home</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}
