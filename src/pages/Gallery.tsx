import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import serviceWedding from "@/assets/service-wedding.jpg";
import serviceCatering from "@/assets/service-catering.jpg";

const images = [
  { src: hero1, label: "Wedding Venue" },
  { src: gallery2, label: "Outdoor Setup" },
  { src: gallery3, label: "Catering" },
  { src: gallery4, label: "Stage Decor" },
  { src: hero2, label: "Ceremony" },
  { src: gallery1, label: "Birthday" },
  { src: serviceWedding, label: "Mandap" },
  { src: gallery5, label: "Corporate" },
  { src: serviceCatering, label: "Food Counter" },
  { src: gallery6, label: "Garden Party" },
  { src: hero3, label: "Buffet" },
  { src: hero4, label: "Grand Event" },
  { src: gallery7, label: "Reception Hall" },
  { src: gallery8, label: "Outdoor Wedding" },
  { src: gallery9, label: "Food Display" },
  { src: gallery10, label: "Royal Mandap" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const goNext = () => setSelected((p) => (p !== null ? (p + 1) % images.length : null));
  const goPrev = () => setSelected((p) => (p !== null ? (p - 1 + images.length) % images.length : null));

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[35vh] overflow-hidden">
        <img src={gallery4} alt="Gallery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal/90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-heading text-3xl font-bold text-primary-foreground mb-2 drop-shadow-lg">
              Our <span className="text-gold-gradient">Gallery</span>
            </h1>
            <p className="text-primary-foreground/80 text-sm font-body drop-shadow-md">Home | Gallery</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-xs tracking-[4px] text-gold font-body uppercase mb-2">Our Work</p>
          <h2 className="font-heading text-xl font-bold text-foreground">
            Memorable <span className="text-gold-gradient">Moments</span>
          </h2>
        </motion.div>
        <div className="columns-2 gap-2 space-y-2">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileTap={{ scale: 0.97 }}
              className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer relative group"
              onClick={() => setSelected(i)}
            >
              <img src={img.src} alt={img.label} className="w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-primary-foreground text-xs font-body font-semibold p-3">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/95 z-[60] flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-4 right-4 p-2 text-primary-foreground z-10" onClick={() => setSelected(null)}>
              <X size={28} />
            </button>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-primary-foreground z-10"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
            >
              <ChevronLeft size={32} />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary-foreground z-10"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
            >
              <ChevronRight size={32} />
            </button>
            <motion.img
              key={selected}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].label}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="absolute bottom-8 text-primary-foreground font-heading text-lg">{images[selected].label}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
