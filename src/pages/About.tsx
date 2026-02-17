import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Diamond, MapPin, HeartHandshake, Clock, Lightbulb, Users } from "lucide-react";
import Layout from "@/components/Layout";
import hero2 from "@/assets/hero-2.jpg";

const highlights = [
  { icon: Diamond, title: "Friendly Team", desc: "More than 200 professionals" },
  { icon: MapPin, title: "Perfect Venues", desc: "Handpicked premium venues" },
  { icon: Lightbulb, title: "Unique Scenarios", desc: "We think out of the box" },
  { icon: HeartHandshake, title: "Unforgettable Time", desc: "We make you perfect event" },
  { icon: Clock, title: "24/7 Support", desc: "Anytime, anywhere" },
  { icon: Users, title: "Brilliant Ideas", desc: "We have a million ideas" },
];

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[40vh] overflow-hidden">
        <img src={hero2} alt="About" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal/90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-heading text-3xl font-bold text-primary-foreground mb-2 drop-shadow-lg">
              About <span className="text-gold-gradient">Rel Event</span>
            </h1>
            <p className="text-primary-foreground/80 text-sm font-body drop-shadow-md">Home | About Us</p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <motion.section className="px-5 py-12" {...fadeIn}>
        <p className="text-xs tracking-[4px] text-gold font-body uppercase mb-2">We Are Rel Event</p>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
          No.1 Events Management <span className="text-gold-gradient">Company</span>
        </h2>

        <div className="space-y-4 text-muted-foreground text-sm font-body leading-relaxed">
          <p>
            We are engaged in providing our clients with quality Event management and catering service as per the requirements of our clients. We serve as advocates for clients seeking to build and maintain positive relationships with the public.
          </p>
          <p>
            We also provide corporate event management services, business event management service and other event management solutions. We are the leading Event Management group known as Rel Event, with a special niche for offering you the best services for all types of events.
          </p>
          <p className="italic text-foreground font-heading">
            "Leave all your event planning to us. We work with every budget."
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-block mt-6 px-8 py-3 gradient-gold rounded-full text-primary-foreground font-body font-bold text-sm shadow-gold-lg hover:scale-105 transition-transform"
        >
          Get Started
        </Link>
      </motion.section>

      {/* Highlights Grid */}
      <section className="px-5 py-12 bg-card">
        <motion.div {...fadeIn}>
          <h2 className="font-heading text-xl font-bold text-foreground mb-8 text-center">
            Why We're <span className="text-gold-gradient">Different</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-background rounded-xl border border-border text-center hover:border-gold/40 hover:shadow-gold hover:-translate-y-1 transition-all duration-300 group"
            >
              <h.icon className="w-8 h-8 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{h.title}</h3>
              <p className="text-muted-foreground text-xs font-body">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="px-5 py-12">
        <motion.div {...fadeIn}>
          <h2 className="font-heading text-xl font-bold text-foreground mb-2 text-center">
            Our <span className="text-gold-gradient">Team</span>
          </h2>
          <p className="text-muted-foreground text-sm text-center font-body mb-8">
            Dedicated professionals behind every event
          </p>
        </motion.div>
        <div className="text-center">
          <div className="w-24 h-24 rounded-full gradient-gold mx-auto mb-4 flex items-center justify-center">
            <span className="font-heading text-3xl text-primary-foreground font-bold">AS</span>
          </div>
          <h3 className="font-heading text-lg font-bold text-foreground">Akshay Sonarghare</h3>
          <p className="text-gold text-sm font-body">Founder & Director</p>
          <p className="text-muted-foreground text-sm font-body mt-3 max-w-xs mx-auto">
            Passionate event planner with years of experience turning ordinary moments into extraordinary memories.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
