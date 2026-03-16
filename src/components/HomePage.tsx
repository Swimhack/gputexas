import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Star, ChevronRight } from 'lucide-react';

// ─── Section Badge ─────────────────────────────────────────────────────────────
function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
      {children}
    </span>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      id="home"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero-background-firemagic.jpg.png)' }}
      />
      {/* Dark gradient overlay — left to right so left content stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />
      {/* Orange radial glow accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 25% 50%, rgba(255,107,53,0.18) 0%, transparent 55%)' }}
      />

      {/* Content — LEFT aligned (restored from approved design) */}
      <div className="relative z-10 w-full container mx-auto px-6 lg:px-16">
        <div className="max-w-2xl">
          {/* Badge pill */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-semibold px-5 py-2 rounded-full mb-6">
            🔥 Premium Gas Products Since 1985
          </div>

          {/* Headline with gradient text */}
          <h1
            className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Elite Outdoor Living Solutions
          </h1>

          <p className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed">
            Transform your outdoor space with Texas's premier collection of Fire Magic grills,
            Coppersmith gas lighting, Real Fyre gas logs, and American Fyre Designs fire features.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-200"
            >
              Explore Products <ChevronRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/25 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 hover:-translate-y-1 transition-all duration-200"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Product Categories ───────────────────────────────────────────────────────
const CATEGORIES = [
  {
    badge: 'BESTSELLER',
    title: 'Fire Magic Grills',
    description:
      "Experience the pinnacle of outdoor cooking with Fire Magic's premium gas grills — advanced technology, superior construction, and professional-grade performance.",
    href: '/grills/gas',
    bgColor: 'from-gray-800 to-gray-700',
    emoji: '🔥',
  },
  {
    title: 'Gas Lighting',
    description:
      'Illuminate your outdoor spaces with handcrafted Coppersmith gas lanterns and lighting fixtures designed to enhance the elegance of your home.',
    href: '/lights',
    bgColor: 'from-amber-900 to-amber-800',
    emoji: '🏮',
  },
  {
    badge: 'FEATURED',
    title: 'Real Fyre Gas Logs',
    description:
      "Bring the authentic beauty of a real wood fire to your gas fireplace with Real Fyre's meticulously crafted, hand-painted log sets.",
    href: '/logs/gas',
    bgColor: 'from-stone-800 to-stone-700',
    emoji: '🪵',
  },
  {
    title: 'Fire Features',
    description:
      'Create stunning focal points with American Fyre Designs fire bowls, fire tables, and outdoor fireplaces that combine modern design with lasting quality.',
    href: '/outdoor',
    bgColor: 'from-zinc-800 to-zinc-700',
    emoji: '✨',
  },
];

function Categories() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50" id="products">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionBadge>🏆 Premium Brands</SectionBadge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gas Product Excellence</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover our comprehensive collection of the industry's most respected brands, each
            delivering unmatched quality and performance for your outdoor living space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="relative group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-3 transition-all duration-300"
            >
              {cat.badge && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {cat.badge}
                </div>
              )}
              {/* Category image placeholder — replace with real product images */}
              <div
                className={`h-56 bg-gradient-to-br ${cat.bgColor} flex items-center justify-center overflow-hidden`}
              >
                <span className="text-6xl opacity-60">{cat.emoji}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{cat.description}</p>
                <Link
                  to={cat.href}
                  className="inline-flex items-center gap-1 text-orange-500 font-semibold text-sm hover:text-orange-600 hover:gap-2 transition-all"
                >
                  View Collection <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Feature Banner ───────────────────────────────────────────────────────────
function FeatureBanner({
  title,
  body,
  cta,
  href,
  flip = false,
  accent = '#ff6b35',
}: {
  title: string;
  body: string;
  cta: string;
  href: string;
  flip?: boolean;
  accent?: string;
}) {
  return (
    <section className="py-20 bg-gray-900 overflow-hidden">
      <div className={`container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 ${flip ? 'lg:flex-row-reverse' : ''}`}>
        {/* Text side */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">{body}</p>
          <a
            href={href}
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-1"
            style={{ background: `linear-gradient(135deg, ${accent} 0%, #f7931e 100%)`, boxShadow: `0 10px 30px ${accent}44` }}
          >
            {cta} <ChevronRight size={18} />
          </a>
        </div>
        {/* Visual accent side */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className="w-72 h-72 rounded-3xl opacity-20"
            style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── Reviews ──────────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    stars: 5,
    text: '"The Fire Magic Echelon grill we purchased from GPU Texas exceeded all expectations. Build quality is exceptional and it cooks like a professional kitchen. Outstanding service from consultation to installation!"',
    reviewer: 'James Wilson — Houston, TX',
  },
  {
    stars: 5,
    text: '"GPU Texas provided exceptional service from start to finish. Our Coppersmith gas lights transformed our backyard into an elegant outdoor living space. Highly recommend their expertise and product knowledge."',
    reviewer: 'Sarah Martinez — Dallas, TX',
  },
];

function Reviews() {
  return (
    <section className="py-24 bg-gray-50" id="reviews">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <SectionBadge>💬 Testimonials</SectionBadge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Hear from satisfied customers across Texas who've transformed their outdoor spaces
            with GPU Texas products and expertise.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <div className="flex gap-1 text-orange-400 mb-4">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed italic mb-6">{r.text}</p>
              <p className="text-sm font-semibold text-gray-800">— {r.reviewer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact / Request a Quote ────────────────────────────────────────────────
// All Jobber-style address fields preserved as requested
function ContactSection() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    streetAddress: '',
    streetAddress2: '',
    city: '',
    state: '',
    zip: '',
    productInterest: '',
    description: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // TODO: wire to PHP backend / Jobber API / email handler
    await new Promise((r) => setTimeout(r, 900));
    setStatus('sent');
  };

  const inputCls =
    'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-400 transition-all';
  const labelCls = 'block text-sm font-semibold text-gray-700 mb-1.5';

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">

          {/* Left: contact info */}
          <div>
            <SectionBadge>📋 Work Request</SectionBadge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Request a Quote</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Ready to transform your outdoor space? Fill out the form and we'll get back to you
              with a personalized quote and expert recommendations.
            </p>
            <div className="space-y-5">
              {[
                { icon: <Phone size={20} className="text-orange-500" />, label: 'Phone', value: '(281) 482-4478', href: 'tel:2814824478' },
                { icon: <Mail size={20} className="text-orange-500" />, label: 'Email', value: 'TJ@gputexas.com', href: 'mailto:TJ@gputexas.com' },
                { icon: <MapPin size={20} className="text-orange-500" />, label: 'Address', value: '19356 N Hwy 35, Alvin TX 77511', href: null },
                { icon: <Clock size={20} className="text-orange-500" />, label: 'Hours', value: 'Mon–Fri 8:00 AM – 6:00 PM CST', href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-gray-800 font-medium hover:text-orange-500 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
            {status === 'sent' ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-500">
                  We'll be in touch shortly with your personalized quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      className={inputCls}
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div>
                    <label className={labelCls}>
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      className={inputCls}
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      className={inputCls}
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(XXX) XXX-XXXX"
                      required
                    />
                  </div>
                  <div>
                    <label className={labelCls}>
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      className={inputCls}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className={labelCls}>Street Address</label>
                  <input
                    className={inputCls}
                    type="text"
                    name="streetAddress"
                    value={form.streetAddress}
                    onChange={handleChange}
                    placeholder="Street address"
                  />
                </div>
                <div>
                  <label className={labelCls}>Street Address 2</label>
                  <input
                    className={inputCls}
                    type="text"
                    name="streetAddress2"
                    value={form.streetAddress2}
                    onChange={handleChange}
                    placeholder="Apt, suite, unit, etc. (optional)"
                  />
                </div>
                <div className="grid grid-cols-5 gap-4">
                  <div className="col-span-2">
                    <label className={labelCls}>City</label>
                    <input
                      className={inputCls}
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="City"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className={labelCls}>State</label>
                    <input
                      className={inputCls}
                      type="text"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      placeholder="TX"
                      maxLength={2}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className={labelCls}>Zip Code</label>
                    <input
                      className={inputCls}
                      type="text"
                      name="zip"
                      value={form.zip}
                      onChange={handleChange}
                      placeholder="77511"
                    />
                  </div>
                </div>

                {/* Product interest */}
                <div>
                  <label className={labelCls}>Product Interest</label>
                  <select
                    className={inputCls}
                    name="productInterest"
                    value={form.productInterest}
                    onChange={handleChange}
                  >
                    <option value="">Select a category</option>
                    <option value="gas-grills">Gas Grills (Fire Magic)</option>
                    <option value="gas-lights">Gas Lighting (Coppersmith)</option>
                    <option value="gas-logs">Gas Logs (Real Fyre)</option>
                    <option value="fire-features">Fire Features (American Fyre)</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className={labelCls}>
                    Description of Work <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    className={`${inputCls} resize-none`}
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project — what you're looking for, your space, any specific requirements..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold rounded-2xl shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Submitting…' : 'Submit Work Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeatureBanner
        title="Fire Magic Grills"
        body="Discover the ultimate in outdoor cooking technology with Fire Magic's award-winning gas grills. From precision temperature control to innovative design features, every grill is engineered for the discerning chef who demands perfection."
        cta="Explore Fire Magic"
        href="/grills/gas"
      />
      <Reviews />
      <FeatureBanner
        title="Premium Gas Lighting"
        body="Illuminate your outdoor spaces with the warm glow of authentic Coppersmith gas lighting. Handcrafted fixtures that add elegance and charm to any architectural style, from traditional to contemporary."
        cta="View Gas Lights"
        href="/lights"
        flip
        accent="#f7931e"
      />
      <ContactSection />
    </>
  );
}
