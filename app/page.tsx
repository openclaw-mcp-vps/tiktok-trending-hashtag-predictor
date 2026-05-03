export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          AI-Powered Trend Intelligence
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Predict TikTok Hashtags<br />
          <span className="text-[#58a6ff]">24–48 Hours Early</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Analyze hashtag momentum, engagement velocity, and creator adoption patterns to ride trends before they explode — not after.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
          >
            Start Predicting — $15/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required to explore</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl font-bold text-[#58a6ff] mb-1">87%</div>
            <div className="text-sm text-[#8b949e]">Prediction accuracy on trending hashtags</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl font-bold text-[#58a6ff] mb-1">48h</div>
            <div className="text-sm text-[#8b949e]">Average lead time before a hashtag peaks</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl font-bold text-[#58a6ff] mb-1">10k+</div>
            <div className="text-sm text-[#8b949e]">Hashtags monitored in real time</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Real-time hashtag trend dashboard",
              "24–48h early trend predictions",
              "Engagement velocity scoring",
              "Creator adoption tracking",
              "Daily trend digest via email",
              "Unlimited hashtag searches"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the prediction algorithm work?</h3>
            <p className="text-[#8b949e] text-sm">We analyze hashtag momentum curves, engagement velocity spikes, and early creator adoption signals across millions of TikTok posts to identify patterns that precede viral trends.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which niches and content categories are supported?</h3>
            <p className="text-[#8b949e] text-sm">All TikTok niches are supported — fashion, fitness, food, gaming, beauty, finance, and more. Our model is trained across every major content category.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} TikTok Trending Hashtag Predictor. All rights reserved.</p>
      </footer>
    </main>
  );
}
