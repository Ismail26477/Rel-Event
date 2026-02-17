import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Utensils, PartyPopper, Building2, Palette, TreePine, Sparkles, Camera, Music, Gift, Award, Users } from "lucide-react";
import Layout from "@/components/Layout";
import serviceWedding from "@/assets/service-wedding.jpg";
import serviceCatering from "@/assets/service-catering.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import hero1 from "@/assets/hero-1.jpg";

const services = [
  { icon: Heart, title: "Wedding Events", desc: "Complete wedding planning from mandap to reception", img: serviceWedding },
  { icon: Utensils, title: "Catering Services", desc: "Veg & Non-Veg premium multi-cuisine catering", img: serviceCatering },
  { icon: PartyPopper, title: "Birthday Parties", desc: "Theme parties for kids and adults", img: gallery1 },
  { icon: Building2, title: "Corporate Events", desc: "Conferences, seminars and business meetings", img: gallery5 },
  { icon: Palette, title: "Decoration & Setup", desc: "Stunning stage and venue décor themes", img: gallery4 },
  { icon: TreePine, title: "Outdoor Events", desc: "Beautiful garden and open-air celebrations", img: gallery6 },
];

const weddingPackage = [
  "Wedding Invitation Card", "Haldi Mandep", "Theme Decoration", "Special Haldi & Mehndi Seating",
  "Sangeet Function with Choreographer", "Professional Mehndi Artist", "Professional Makeup Artist",
  "Photography (Regular & Cinematic)", "DJ Sound / Punjabi Dhol", "Unique Entry for Groom & Bride",
  "Groom's Vehicle with Decoration", "Guest Vehicle", "Bride's Grahvarvesh",
  "Petals Varmala + Gajre + Bouquet", "Home & Floor Decoration", "Bouncers & Guards",
];

const moreServices = [
  { icon: Gift, title: "Engagement" },
  { icon: Sparkles, title: "Theme Parties" },
  { icon: Award, title: "Awards Function" },
  { icon: Camera, title: "Photography" },
  { icon: Music, title: "DJ & Sound" },
  { icon: Users, title: "Get Together" },
];

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] overflow-hidden">
        <img src={hero1} alt="Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal/90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-heading text-3xl font-bold text-primary-foreground mb-2 drop-shadow-lg">
              Our <span className="text-gold-gradient">Services</span>
            </h1>
            <p className="text-primary-foreground/80 text-sm font-body drop-shadow-md">Home | Services</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-5 py-12">
        <motion.div {...fadeIn}>
          <p className="text-xs tracking-[4px] text-gold font-body uppercase mb-2">Rel Event</p>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
            Our <span className="text-gold-gradient">Expertise</span>
          </h2>
        </motion.div>
        <div className="space-y-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl overflow-hidden border border-border bg-card hover:shadow-gold hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-8 gradient-gold rounded-full" />
                  <div>
                    <h3 className="font-heading text-base font-bold text-foreground">{s.title}</h3>
                    <p className="text-muted-foreground text-xs font-body">{s.desc}</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-block mt-2 px-5 py-2 gradient-gold rounded-full text-primary-foreground font-body font-bold text-xs shadow-gold hover:scale-105 transition-transform"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* More Services */}
      <section className="px-5 py-10 bg-card">
        <motion.div {...fadeIn}>
          <h2 className="font-heading text-xl font-bold text-foreground mb-6 text-center">
            More <span className="text-gold-gradient">Services</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-3 gap-3">
          {moreServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-3 bg-background rounded-xl border border-border hover:border-gold/40 hover:shadow-gold hover:-translate-y-1 transition-all duration-300 group"
            >
              <s.icon className="w-6 h-6 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-body font-semibold text-foreground">{s.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Wedding Package */}
      <section className="px-5 py-12">
        <motion.div {...fadeIn}>
          <p className="text-xs tracking-[4px] text-gold font-body uppercase mb-2">🏷️ Wedding Package</p>
          <h2 className="font-heading text-xl font-bold text-foreground mb-6">
            Complete Wedding <span className="text-gold-gradient">Package</span>
          </h2>
        </motion.div>
        <div className="space-y-2.5 mb-6">
          {weddingPackage.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full gradient-gold flex-shrink-0" />
              <span className="text-muted-foreground text-sm font-body">{item}</span>
            </motion.div>
          ))}
        </div>
        <div className="flex gap-3">
          <Link to="/contact" className="px-6 py-3 gradient-gold rounded-full text-primary-foreground font-body font-bold text-sm shadow-gold-lg hover:scale-105 transition-transform">
            Book Now
          </Link>
          <Link to="/contact" className="px-6 py-3 border border-gold rounded-full text-gold font-body font-bold text-sm hover:bg-gold hover:text-primary-foreground transition-all">
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
