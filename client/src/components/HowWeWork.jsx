const steps = [
  {
    number: '01',
    badge: 'Step one',
    title: 'We talk',
    description: "You tell us what you need. We ask the right questions and give you a straight answer on what it'll cost and how long it takes. If we're a fit, we start. No discovery sprints, no proposals that take a week.",
  },
  {
    number: '02',
    badge: 'Step two',
    title: 'We build',
    description: "You see working software — not Figma frames. We check in when there's something to show, ask questions when we're stuck, and handle scope changes like adults when they come up.",
  },
  {
    number: '03',
    badge: 'Step three',
    title: 'You own it',
    description: "Delivery, handoff, documentation. You get the code and the deployment. We offer a monthly retainer for hosting and support. Our reputation is the only thing we have, so we protect it.",
  },
];

export default function HowWeWork() {
  return (
    <section className="section section-alt" id="process">
      <div className="container">
        <div className="sec-label"><span>02 · How we work</span></div>
        <h2 className="section-h2">No theatrics.<br />Just how it goes.</h2>
        <p className="section-p">Three steps. You know what's happening at every stage. No surprises, no disappearing acts.</p>

        <div className="process-steps">
          {steps.map((step) => (
            <div key={step.number} className="proc-step">
              <div className="proc-num-row">
                <div className="proc-num">{step.number}</div>
                <span className="proc-badge">{step.badge}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
