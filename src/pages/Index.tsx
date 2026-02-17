import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ChevronRight, Users, Utensils, Sparkles, Clock, IndianRupee, Heart, PartyPopper, Building2, Palette, TreePine, Send, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const heroImages = [hero1, hero2, hero3, hero4];

const services = [
  { icon: Heart, title: "Wedding Events", desc: "Dream weddings crafted with love" },
  { icon: Utensils, title: "Catering Services", desc: "Veg & Non-Veg premium cuisine" },
  { icon: PartyPopper, title: "Birthday Parties", desc: "Celebrations that wow" },
  { icon: Building2, title: "Corporate Events", desc: "Professional event solutions" },
  { icon: Palette, title: "Decoration & Setup", desc: "Stunning décor themes" },
  { icon: TreePine, title: "Outdoor Events", desc: "Beautiful open-air events" },
];

const testimonials = [
  { name: "Priya Sharma", text: "Rel Event made our wedding absolutely magical. Every detail was perfect!", rating: 5 },
  { name: "Rahul Deshmukh", text: "Best catering we've ever had. Our guests are still talking about the food!", rating: 5 },
  { name: "Sneha Patil", text: "They handled our corporate event flawlessly. Highly professional team.", rating: 5 },
  { name: "Amit Joshi", text: "Birthday party was a hit! Kids and adults both loved the decoration and food.", rating: 5 },
];

const whyChooseUs = [
  { icon: Users, title: "Experienced Team", desc: "200+ successful events" },
  { icon: Utensils, title: "Quality Catering", desc: "Premium multi-cuisine" },
  { icon: Sparkles, title: "Custom Planning", desc: "Tailored to your vision" },
  { icon: IndianRupee, title: "Affordable Packages", desc: "Best value guaranteed" },
  { icon: Clock, title: "Timely Execution", desc: "Always on schedule" },
];

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const stats = [
  { number: "500+", label: "Events Done" },
  { number: "200+", label: "Happy Clients" },
  { number: "50+", label: "Venues" },
  { number: "10+", label: "Years Exp." },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [formData, setFormData] = useState({ name: "", phone: "", eventType: "", message: "" });

  const nextSlide = useCallback(() => {
    setCurrentSlide((p) => (p + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialSlide((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${formData.name}. I'm interested in ${formData.eventType}. ${formData.message}. My phone: ${formData.phone}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[85vh] overflow-hidden">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={img} alt="Event" className="w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/40 to-charcoal/90" />
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
            <h1 className="font-heading text-4xl font-bold text-primary-foreground leading-tight mb-2 drop-shadow-lg">
              Making Memories<br />
              <span className="text-gold-gradient italic">Through Events</span>
            </h1>
            <p className="text-primary-foreground/90 text-sm font-body mb-6 drop-shadow-md">
              Catering | Weddings | Corporate Events | Celebrations
            </p>
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="px-6 py-3 gradient-gold rounded-full text-primary-foreground font-body font-bold text-sm shadow-gold-lg hover:scale-105 transition-transform"
              >
                Book Now
              </Link>
              <a
                href="tel:+919876543210"
                className="px-6 py-3 border-2 border-gold/80 rounded-full text-gold font-body font-bold text-sm backdrop-blur-sm hover:bg-gold hover:text-primary-foreground transition-all"
              >
                Call Now
              </a>
            </div>
          </motion.div>
          {/* Slide indicators */}
          <div className="flex gap-2 mt-6">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === i ? "w-8 bg-gold" : "w-4 bg-primary-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="gradient-gold py-5 px-4">
        <div className="grid grid-cols-4 gap-2 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-heading text-lg font-bold text-primary-foreground">{s.number}</p>
              <p className="text-primary-foreground/80 text-[10px] font-body">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <motion.section className="px-5 py-12" {...fadeIn}>
        <p className="text-xs tracking-[4px] text-gold font-body uppercase mb-2">We Are Rel Event</p>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          No.1 Events Management <span className="text-gold-gradient">Company</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed font-body mb-6">
          We are the leading Event Management group known as Rel Event, with a special niche for offering you the best services for all types of events. From intimate celebrations to grand weddings, we make every moment unforgettable.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-gold font-body font-bold text-sm hover:gap-3 transition-all"
        >
          About Us <ChevronRight size={16} />
        </Link>
      </motion.section>

      {/* SERVICES */}
      <section className="px-5 py-12 bg-card">
        <motion.div {...fadeIn}>
          <p className="text-xs tracking-[4px] text-gold font-body uppercase mb-2 text-center">Our Services</p>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
            Our <span className="text-gold-gradient">Expertise</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to="/services"
                className="block p-4 bg-background rounded-xl border border-border hover:border-gold/40 hover:shadow-gold hover:-translate-y-1 transition-all duration-300 group"
              >
                <s.icon className="w-8 h-8 text-gold mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-xs font-body">{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-gold font-body font-bold text-sm hover:gap-3 transition-all">
            View All Services <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-5 py-12">
        <motion.div {...fadeIn}>
          <p className="text-xs tracking-[4px] text-gold font-body uppercase mb-2 text-center">Our Work</p>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
            Event <span className="text-gold-gradient">Gallery</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-2">
          {galleryImages.slice(0, 4).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl overflow-hidden group ${i === 0 ? "row-span-2" : ""}`}
            >
              <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-gold font-body font-bold text-sm hover:gap-3 transition-all">
            View Full Gallery <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-5 py-12 bg-charcoal">
        <motion.div {...fadeIn}>
          <p className="text-xs tracking-[4px] text-gold font-body uppercase mb-2 text-center">Why Choose Us</p>
          <h2 className="font-heading text-2xl font-bold text-secondary-foreground mb-8 text-center">
            The Rel Event <span className="text-gold-gradient">Difference</span>
          </h2>
        </motion.div>
        <div className="space-y-4">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-charcoal-light/50 border border-gold/10 hover:border-gold/30 hover:bg-charcoal-light/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-secondary-foreground">{item.title}</h3>
                <p className="text-warm-gray text-xs font-body">{item.desc}</p>
              </div>
              <CheckCircle2 className="w-5 h-5 text-gold/50 ml-auto flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-5 py-12 bg-card">
        <motion.div {...fadeIn}>
          <p className="text-xs tracking-[4px] text-gold font-body uppercase mb-2 text-center">Testimonials</p>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
            Client <span className="text-gold-gradient">Reviews</span>
          </h2>
        </motion.div>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${testimonialSlide * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-full px-1">
                <div className="bg-background rounded-xl p-5 border border-border shadow-sm">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm font-body italic mb-4">"{t.text}"</p>
                  <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialSlide(i)}
                className={`h-1.5 rounded-full transition-all ${
                  testimonialSlide === i ? "w-6 bg-gold" : "w-3 bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="px-5 py-12 gradient-dark">
        <motion.div {...fadeIn}>
          <h2 className="font-heading text-2xl font-bold text-secondary-foreground text-center mb-2">
            Let's Plan Your <span className="text-gold-gradient">Event</span>
          </h2>
          <p className="text-warm-gray text-sm text-center font-body mb-8">
            Get in touch and let us create something extraordinary
          </p>
        </motion.div>

        <div className="flex gap-3 mb-8">
          <a
            href="tel:+919876543210"
            className="flex-1 py-3 gradient-gold rounded-full text-primary-foreground font-body font-bold text-sm text-center shadow-gold-lg hover:scale-105 transition-transform"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 rounded-full text-primary-foreground font-body font-bold text-sm text-center hover:scale-105 transition-transform"
            style={{ backgroundColor: "#25D366" }}
          >
            💬 WhatsApp
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-charcoal-light/50 border border-gold/20 rounded-xl text-secondary-foreground placeholder:text-warm-gray text-sm font-body focus:outline-none focus:border-gold transition-colors" />
          <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-charcoal-light/50 border border-gold/20 rounded-xl text-secondary-foreground placeholder:text-warm-gray text-sm font-body focus:outline-none focus:border-gold transition-colors" />
          <select value={formData.eventType} onChange={(e) => setFormData({ ...formData, eventType: e.target.value })} required className="w-full px-4 py-3 bg-charcoal-light/50 border border-gold/20 rounded-xl text-secondary-foreground text-sm font-body focus:outline-none focus:border-gold transition-colors">
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday Party</option>
            <option value="Corporate">Corporate Event</option>
            <option value="Catering">Catering Only</option>
            <option value="Other">Other</option>
          </select>
          <textarea placeholder="Your Message" rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-charcoal-light/50 border border-gold/20 rounded-xl text-secondary-foreground placeholder:text-warm-gray text-sm font-body focus:outline-none focus:border-gold resize-none transition-colors" />
          <button type="submit" className="w-full py-3.5 gradient-gold rounded-full text-primary-foreground font-body font-bold text-sm shadow-gold-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
            <Send size={16} /> Send Enquiry
          </button>
        </form>
      </section>

      {/* LOCATION */}
      <section className="px-5 py-10 bg-card">
        <div className="text-center">
          <p className="text-xs tracking-[4px] text-gold font-body uppercase mb-2">Our Location</p>
          <h2 className="font-heading text-xl font-bold text-foreground mb-4">Find Us in Nagpur</h2>
          <p className="text-muted-foreground text-sm font-body">📍 Itwari, Nagpur, Maharashtra, India</p>
          <p className="text-muted-foreground text-xs font-body mt-1">Serving across Nagpur & surrounding areas</p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
