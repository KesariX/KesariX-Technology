import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Globe,
  X,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error" | null; text: string }>({ type: null, text: "" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const socialLinks = {
    Twitter: "https://x.com/kesarixtech",
    LinkedIn: "https://www.linkedin.com/company/kesarix-technology",
    Github: "https://github.com/KesariX",
    Instagram: "https://www.instagram.com/kesarix_technology",
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contactInfos = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@kesarixtechnology.com",
      subValue: "Direct support line",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 92747 39361",
      subValue: "Mon-Fri from 9am to 6pm",
    },
    
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const from_name = (form.elements.namedItem("from_name") as HTMLInputElement).value.trim();
    const from_email = (form.elements.namedItem("from_email") as HTMLInputElement).value.trim();
    const subject = (form.elements.namedItem("subject") as HTMLSelectElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!from_name || !from_email || !message) {
      setStatusMessage({ type: "error", text: "Please fill out all required fields." });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ type: null, text: "" });

    const now = new Date();

    const formattedTime = now.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const formData = {
      from_name,
      from_email,
      subject,
      message,
      time: formattedTime,
    };

    emailjs
      .send(
        "service_l4bouq8",
        "template_2la7n2s",
        formData,
        "wFpFjP1ut2sXe31cx",
      )
      .then(
        () => {
          setIsSubmitting(false);
          setStatusMessage({ type: "success", text: "Thank you for your interest! We have received your message and will reach out to you shortly." });
          form.reset();
        },
        (err) => {
          console.error(err);
          setIsSubmitting(false);
          setStatusMessage({ type: "error", text: "Failed to send the message. Please try again later." });
        }
      );
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[var(--bg-base)]">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--accent-primary)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--accent-glow)]/5 rounded-full blur-[120px]" />
      </div>

      <section className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Info & Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="section-eyebrow mb-4"
            >
              Let's Connect
            </motion.span>
            <motion.h1 variants={itemVariants} className="section-title mb-6">
              Get in Touch with our{" "}
              <span className="gradient-text">Experts</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="section-subtitle mb-12"
            >
              Ready to automate your workflows or build the next big thing? Our
              team of engineers and AI experts is here to turn your vision into
              reality.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {contactInfos.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="premium-card p-6 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] flex items-center justify-center shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-dark)]">
                        {info.title}
                      </h4>
                      <p className="text-[var(--accent-primary)] font-medium text-sm mb-1 break-all">
                        {info.value}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {info.subValue}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional Features */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 border-t border-[var(--border)] pt-8"
            >
              {[
                { icon: Clock, text: "Response time under 24 hours" },
                {
                  icon: MessageSquare,
                  text: "Free initial strategy consultation",
                },
                {
                  icon: Globe,
                  text: "Supporting global clients across 2+ timezones",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-[var(--text-mid)]"
                >
                  <item.icon
                    size={18}
                    className="text-[var(--accent-primary)]"
                  />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side: Animated Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="premium-card p-8 md:p-12 relative overflow-hidden">
              {/* Form Shadow Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-primary)]/10 blur-3xl -mr-16 -mt-16" />

              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                Send us a Message
                <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[var(--text-dark)] ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="John Doe"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border)] focus:border-[var(--accent-primary)] focus:ring-4 focus:ring-[var(--accent-primary)]/5 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[var(--text-dark)] ml-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="john@company.com"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border)] focus:border-[var(--accent-primary)] focus:ring-4 focus:ring-[var(--accent-primary)]/5 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[var(--text-dark)] ml-1">
                    Subject
                  </label>
                  <select
                    name="subject"
                    className="w-full px-5 py-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border)] focus:border-[var(--accent-primary)] outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option>Software Development</option>
                    <option>AI & Machine Learning</option>
                    <option>Cloud Infrastructure</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[var(--text-dark)] ml-1">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project or inquiry..."
                      required
                    className="w-full px-5 py-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border)] focus:border-[var(--accent-primary)] focus:ring-4 focus:ring-[var(--accent-primary)]/5 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className={`btn-primary w-full py-5 text-lg flex items-center justify-center gap-3 shadow-xl shadow-[var(--accent-primary)]/30 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? "Sending..." : "Shoot Message"} <Send size={20} />
                </motion.button>

                <p className="text-center text-xs text-[var(--text-muted)] mt-6">
                  By submitting this form, you agree to our{" "}
                  <Link
                    to="/legal/privacy"
                    className="underline hover:text-[var(--accent-primary)]"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/legal/terms"
                    className="underline hover:text-[var(--accent-primary)]"
                  >
                    Terms of Service
                  </Link>
                  .
                </p>
              </form>
            </div>

            {/* Success Animation Placeholder or Social Links */}
            <div className="mt-8 flex justify-center gap-8">
              {Object.entries(socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors uppercase tracking-widest"
                >
                  {platform}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map or Visual Section */}
      <section className="section-padding overflow-hidden">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[400px] rounded-[var(--radius-lg)] bg-black/5 relative overflow-hidden group"
          >
            {/* Visual Representation of Global Reach */}
            <div className="absolute inset-0 bg-[#0A0A0A]" />
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Animated Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[var(--accent-primary)]/20 rounded-full animate-[ping_3s_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[var(--accent-primary)]/10 rounded-full animate-[ping_5s_infinite]" />

                {/* Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="w-16 h-16 bg-[var(--accent-primary)] rounded-full blur-2xl opacity-50 mx-auto" />
                  <div className="relative z-10">
                    <h2 className="text-white text-3xl font-bold mb-2">
                      Global Connectivity
                    </h2>
                    <p className="text-white/60">
                      Bridging technology from India to the World.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SUCCESS / ERROR MODAL ── */}
      <AnimatePresence>
        {statusMessage.type && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[var(--bg-base)] rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl relative border border-[var(--border)] text-center"
            >
              <button
                onClick={() => setStatusMessage({ type: null, text: "" })}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--text-muted)] hover:text-[var(--text-dark)] transition-colors"
              >
                <X size={18} />
              </button>
              
              <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg ${statusMessage.type === "success" ? "bg-green-500/10 text-green-500 shadow-green-500/20" : "bg-red-500/10 text-red-500 shadow-red-500/20"}`}>
                {statusMessage.type === "success" ? <CheckCircle2 size={40} /> : <AlertCircle size={40} />}
              </div>
              
              <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-3 font-['Outfit']">
                {statusMessage.type === "success" ? "Thank You!" : "Oops!"}
              </h3>
              
              <p className="text-[var(--text-mid)] mb-8 leading-relaxed">
                {statusMessage.text}
              </p>
              
              <button
                onClick={() => setStatusMessage({ type: null, text: "" })}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${statusMessage.type === "success" ? "bg-green-500 hover:bg-green-600 shadow-green-500/30" : "bg-red-500 hover:bg-red-600 shadow-red-500/30"}`}
              >
                {statusMessage.type === "success" ? "Done" : "Try Again"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
