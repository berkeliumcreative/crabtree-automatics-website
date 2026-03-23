// @ts-nocheck
"use client";

import content from "../data/content.json";
import { MinimalNav } from "@/components/ui/minimal-nav";
import { HeroGradient } from "@/components/ui/hero-gradient";
import { TrustBadges } from "@/components/ui/trust-badges";
import { StatsSection } from "@/components/ui/stats-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialMarquee } from "@/components/ui/testimonial-marquee";
import { ServiceList } from "@/components/ui/service-list";
import { StepsSection } from "@/components/ui/steps-section";
import { FAQSection } from "@/components/ui/faq-section";
import { HoursTable } from "@/components/ui/hours-table";
import { MapEmbed } from "@/components/ui/map-embed";
import { PhoneCTA } from "@/components/ui/phone-cta";
import { FooterColumns } from "@/components/ui/footer-columns";

const navItems = [
  { label: "Reviews", href: "#reviews" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const trustBadges = [
  { text: "5.0 ★ Perfect Rating" },
  { text: "30+ Years Experience" },
  { text: "Transmission Specialists" },
  { text: "Honest Pricing Guarantee" },
];

const steps = [
  {
    title: "Bring It In",
    description: "Drop off your vehicle or call to schedule. We'll listen to your concerns and do a thorough inspection.",
  },
  {
    title: "Honest Diagnosis",
    description: "We'll identify the exact problem and give you a clear, upfront estimate — no hidden fees or unnecessary upsells.",
  },
  {
    title: "Expert Repair",
    description: "Our experienced technicians fix it right the first time using quality parts and proven techniques.",
  },
  {
    title: "Drive with Confidence",
    description: "Pick up your vehicle running smoothly, backed by our warranty and decades of trusted service.",
  },
];

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Transmission Repair", href: "#services" },
      { label: "Transmission Rebuild", href: "#services" },
      { label: "Diagnostics", href: "#services" },
      { label: "General Auto Repair", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Reviews", href: "#reviews" },
      { label: "FAQ", href: "#faq" },
      { label: "Facebook", href: content.social.facebook },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: content.contact.phone, href: "tel:+18188459117" },
      { label: content.contact.address, href: "#contact" },
      { label: "Mon–Fri: 8:30 AM – 5:30 PM", href: "#contact" },
    ],
  },
];

export default function Home() {
  const testimonials = content.reviews.map((r: any) => ({
    quote: r.text,
    author: r.name,
    rating: r.rating,
  }));

  return (
    <main className="bg-background text-foreground">
      <MinimalNav
        brand={content.businessName}
        items={navItems}
        cta={{ label: "Call Now", href: "tel:+18188459117" }}
      />

      <HeroGradient
        heading={content.hero.heading}
        subheading={content.hero.subheading}
        ctaText={content.hero.ctaText}
        ctaLink={content.hero.ctaLink}
      />

      {/* Trust Badges */}
      <section className="py-10 md:py-14 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <TrustBadges badges={trustBadges} />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <StatsSection stats={content.stats} />
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 md:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="27 five-star reviews and counting — our reputation speaks for itself."
          />
        </div>
        <div className="mt-12">
          <TestimonialMarquee testimonials={testimonials} />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Our Services"
            subtitle="Specialized transmission work and complete auto repair — everything your vehicle needs under one roof."
          />
          <div className="mt-12">
            <ServiceList services={content.services} />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="How It Works"
            subtitle="Simple, transparent service from start to finish."
          />
          <div className="mt-12">
            <StepsSection steps={steps} />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title={content.about.heading} />
          <div className="mt-8 max-w-3xl mx-auto space-y-6">
            {content.about.paragraphs.map((p: string, i: number) => (
              <p key={i} className="text-muted-foreground text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about transmission repair and our process."
          />
          <div className="mt-12 max-w-3xl mx-auto">
            <FAQSection faqs={content.faq} />
          </div>
        </div>
      </section>

      {/* Phone CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <PhoneCTA
            heading="Ready to Get Your Transmission Fixed?"
            subheading="Call us today for honest advice and a free estimate."
            phone={content.contact.phone}
          />
        </div>
      </section>

      {/* Contact / Hours / Map */}
      <section id="contact" className="py-20 md:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Visit Us"
            subtitle="Located on Magnolia Boulevard in the heart of Burbank."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <HoursTable hours={content.contact.hours} />
              <div className="mt-8 space-y-2 text-muted-foreground">
                <p>{content.contact.address}</p>
                <p>{content.contact.phone}</p>
                <p>{content.contact.email}</p>
              </div>
            </div>
            <div>
              <MapEmbed query={content.contact.mapEmbedQuery} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterColumns
        brand={content.businessName}
        columns={footerColumns}
        copyright={`© ${new Date().getFullYear()} ${content.businessName}. All rights reserved.`}
      />
    </main>
  );
}