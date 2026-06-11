export default function Team() {
  const members = [
    { name: 'Amina', role: 'Founder & Designer' },
    { name: 'Ken', role: 'Lead Developer' },
    { name: 'Zuri', role: 'Growth Strategist' },
  ];

  return (
    <section id="team" className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">Team</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          A small team of experienced builders focused on digital strategy, design, and engineering.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div key={member.name} className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="mx-auto mb-5 h-20 w-20 rounded-full bg-white/10" />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="mt-2 text-slate-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
