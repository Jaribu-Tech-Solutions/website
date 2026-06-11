export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">Contact</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Ready to start a project or learn more? Send a message and we’ll get back to you soon.
        </p>
        <div className="mt-10 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 sm:flex-row sm:items-start">
          <div className="space-y-4 sm:w-1/2">
            <p className="text-base text-slate-300">Email</p>
            <p className="font-medium text-white">hello@jaributech.com</p>
            <p className="text-base text-slate-300">Phone</p>
            <p className="font-medium text-white">+123 456 7890</p>
          </div>
          <form className="space-y-4 sm:w-1/2">
            <input className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white" type="text" placeholder="Your name" />
            <input className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white" type="email" placeholder="Your email" />
            <textarea className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white" rows="4" placeholder="Tell us about your project"></textarea>
            <button className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950" type="button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
