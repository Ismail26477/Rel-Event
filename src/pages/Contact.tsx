import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Send, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import hero1 from "@/assets/hero-1.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", eventType: "", message: "" });

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
      {/* Hero */}
      <section className="relative h-[35vh] overflow-hidden">
        <img src={hero1} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal/90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-heading text-3xl font-bold text-primary-foreground mb-2 drop-shadow-lg">
              Contact <span className="text-gold-gradient">Us</span>
            </h1>
            <p className="text-primary-foreground/80 text-sm font-body drop-shadow-md">Home | Contact</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="px-5 py-10">
        <motion.div {...fadeIn}>
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-2">
            Let's Plan Your <span className="text-gold-gradient">Event</span>
          </h2>
          <p className="text-muted-foreground text-sm text-center font-body mb-8">
            Reach out to us and we'll make it happen
          </p>
        </motion.div>

        <div className="flex gap-3 mb-8">
          <a
            href="tel:+919876543210"
            className="flex-1 py-3.5 gradient-gold rounded-xl text-primary-foreground font-body font-bold text-sm text-center shadow-gold-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            <Phone size={16} /> Call Now
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3.5 rounded-xl text-primary-foreground font-body font-bold text-sm text-center flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>

        {/* Info Cards */}
        <div className="space-y-3 mb-10">
          {[
            { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
            { icon: Mail, label: "Email", value: "contact@relevent.in", href: "mailto:contact@relevent.in" },
            { icon: MapPin, label: "Address", value: "Itwari, Nagpur, Maharashtra, India", href: "#" },
          ].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                <item.icon size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-body">{item.label}</p>
                <p className="text-sm font-body font-semibold text-foreground">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-5 py-10 gradient-dark">
        <motion.div {...fadeIn}>
          <h2 className="font-heading text-xl font-bold text-secondary-foreground text-center mb-6">
            Send Us a <span className="text-gold-gradient">Message</span>
          </h2>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3.5 bg-charcoal-light/50 border border-gold/20 rounded-xl text-secondary-foreground placeholder:text-warm-gray text-sm font-body focus:outline-none focus:border-gold transition-colors" />
          <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3.5 bg-charcoal-light/50 border border-gold/20 rounded-xl text-secondary-foreground placeholder:text-warm-gray text-sm font-body focus:outline-none focus:border-gold transition-colors" />
          <select value={formData.eventType} onChange={(e) => setFormData({ ...formData, eventType: e.target.value })} required className="w-full px-4 py-3.5 bg-charcoal-light/50 border border-gold/20 rounded-xl text-secondary-foreground text-sm font-body focus:outline-none focus:border-gold transition-colors">
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday Party</option>
            <option value="Corporate">Corporate Event</option>
            <option value="Catering">Catering Only</option>
            <option value="Engagement">Engagement</option>
            <option value="Other">Other</option>
          </select>
          <textarea placeholder="Tell us about your event..." rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3.5 bg-charcoal-light/50 border border-gold/20 rounded-xl text-secondary-foreground placeholder:text-warm-gray text-sm font-body focus:outline-none focus:border-gold resize-none transition-colors" />
          <button type="submit" className="w-full py-3.5 gradient-gold rounded-xl text-primary-foreground font-body font-bold text-sm shadow-gold-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
            <Send size={16} /> Send via WhatsApp
          </button>
        </form>
      </section>

      {/* Location */}
      <section className="px-5 py-10 bg-card text-center">
        <h3 className="font-heading text-lg font-bold text-foreground mb-3">Our Location</h3>
        <p className="text-muted-foreground text-sm font-body">📍 Itwari, Nagpur, Maharashtra, India</p>
        <p className="text-muted-foreground text-xs font-body mt-1">We serve across Nagpur & all surrounding areas</p>
      </section>
    </Layout>
  );
};

export default Contact;
