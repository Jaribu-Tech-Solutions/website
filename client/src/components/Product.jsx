const chatLines = [
  { speaker: 'C', text: "Hi! I'd like to order 2kg rice and 1L cooking oil." },
  { speaker: 'AI', text: 'Got it! • Rice 2kg — KES 180 • Cooking oil 1L — KES 210 Total: KES 390 Pay via M-Pesa to confirm.' },
  { speaker: 'C', text: 'Done, payment sent.' },
  { speaker: 'AI', text: '✅ KES 390 confirmed. Order preparing — delivery in 2–3hrs.' },
];

export default function Product() {
  return (
    <section className="section section-alt" id="product">
      <div className="container">
        <div className="sec-label"><span>04 · What we're building</span></div>
        <p className="product-tag">COMING SOON</p>
        <h2 className="section-h2">Replai — AI commerce agent for WhatsApp</h2>
        <p className="section-p">Agency work funds this. We're also building for ourselves. Replai is a multi-tenant AI platform that lets African SMBs run customer support, take M-Pesa orders, and manage inventory entirely over WhatsApp.</p>

        <div className="product-grid">
          <div className="product-features">
            <ul>
              <li>Every business gets their own trained AI agent — not a shared bot</li>
              <li>M-Pesa payment confirmation built in, no manual reconciliation</li>
              <li>Inventory management and order tracking via WhatsApp Business API</li>
              <li>Built for 3G connections and businesses with zero technical staff</li>
            </ul>
          </div>
          <div className="product-chat">
            <div className="product-chat-header">Replai demo</div>
            <div className="product-chat-window">
              {chatLines.map((line, index) => (
                <div key={index} className={line.speaker === 'AI' ? 'chat-line ai' : 'chat-line user'}>
                  <span className="chat-speaker">{line.speaker}</span>
                  <p>{line.text}</p>
                </div>
              ))}
            </div>
            <div className="product-chat-input">
              <span>Type a message...</span>
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
