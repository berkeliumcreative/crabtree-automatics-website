// @ts-nocheck
"use client";

import content from "../data/content.json";
import { MinimalNav } from "@/components/ui/minimal-nav";
import { HeroCentered } from "@/components/ui/hero-centered";
import { TrustBadges } from "@/components/ui/trust-badges";
import { StatsSection } from "@/components/ui/stats-section";
import { TestimonialGrid } from "@/components/ui/testimonial-grid";
import { ServiceGrid } from "@/components/ui/service-grid";
import { StepsSection } from "@/components/ui/steps-section";
import { HoursTable } from "@/components/ui/hours-table";
import { FAQSection } from "@/components/ui/faq-section";
import { BookingPrompt } from "@/components/ui/booking-prompt";
import { MapEmbed } from "@/components/ui/map-embed";
import { FooterGradient } from "@/components/ui/footer-gradient";
import { SectionHeading } from "@/components/ui/section-heading";
import { GoogleReviewBadge } from "@/components/ui/google-review-badge";
import { Shield, Wrench, Clock, CheckCircle, Award, Settings } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAVIGATION */}
      <MinimalNav
        logo={
          <span className="text-lg font-bold tracking-tight">
            <span style={{ color: "var(--theme-accent)" }}>Crabtree</span> Automatics
          </span>
        }
        items={[
          { label: "Services", href: "#services" },
          { label: "Reviews", href: "#reviews" },
          { label: "Process", href: "#process" },
          { label: "FAQ", href: "#faq" },
          { label: "Hours", href: "#hours" },
        ]}
        ctaText="Call Now"
        ctaHref={"tel:" + content.contact.phone.replace(/[^0-9]/g, "")}
      />

      {/* HERO — HeroCentered with solid text, no gradient-clip issues */}
      <HeroCentered
        label="5-Star Rated Transmission Shop"
        heading={content.hero.heading}
        subheading={content.hero.subheading}
        ctaText={content.hero.ctaText}
        ctaHref={content.hero.ctaLink}
        secondaryCtaText="View Services"
        secondaryCtaHref="#services"
      />

      {/* TRUST BADGES */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <TrustBadges
            badges={[
              { icon: <Shield className="w-5 h-5" />, text: "Warranty on All Repairs" },
              { icon: <Award className="w-5 h-5" />, text: "5.0 Star Rating" },
              { icon: <Wrench className="w-5 h-5" />, text: "Transmission Specialists" },
              { icon: <Clock className="w-5 h-5" />, text: "Fast Turnaround" },
              { icon: <CheckCircle className="w-5 h-5" />, text: "Honest Diagnostics" },
            ]}
          />
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <StatsSection
            stats={[
              { value: 27, label: "5-Star Reviews", suffix: "+" },
              { value: 5, label: "Star Rating", suffix: ".0" },
              { value: 1000, label: "Transmissions Serviced", suffix: "+" },
              { value: 100, label: "Customer Satisfaction", suffix: "%" },
            ]}
          />
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 md:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Real reviews from real customers who trusted us with their transmissions"
            align="center"
          />
          <div className="mt-6 mb-12 flex justify-center">
            <GoogleReviewBadge rating={5.0} totalReviews={27} />
          </div>
          <TestimonialGrid
            testimonials={content.reviews.map((r) => ({
              quote: r.text,
              author: r.name,
              rating: r.rating,
            }))}
            columns={3}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="What We Do"
            title="Transmission Services"
            subtitle="From diagnostics to full rebuilds, we handle every aspect of transmission repair"
            align="center"
          />
          <div className="mt-12">
            <ServiceGrid
              services={content.services.map((s, i) => ({
                title: s.title,
                description: s.description,
                icon: [
                  <Settings key={0} className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />,
                  <Wrench key={1} className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />,
                  <CheckCircle key={2} className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />,
                  <Shield key={3} className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />,
                  <Settings key={4} className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />,
                  <Wrench key={5} className="w-6 h-6" style={{ color: "var(--theme-accent)" }} />,
                ][i],
              }))}
              columns={3}
              variant="card"
            />
          </div>
        </div>
      </section>

      {/* PROCESS / HOW IT WORKS */}
      <section id="process" className="py-20 md:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="How It Works"
            subtitle="Our straightforward process from diagnosis to getting you back on the road"
            align="center"
          />
          <div className="mt-12">
            <StepsSection
              steps={[
                {
                  title: "Bring It In",
                  description: "Drop off your vehicle or call ahead. We'll listen to your concerns and schedule a convenient time for diagnostics.",
                },
                {
                  title: "Expert Diagnosis",
                  description: "We run computer-assisted and hands-on tests to pinpoint the exact issue. You get a clear explanation and honest estimate.",
                },
                {
                  title: "Precision Repair",
                  description: "Our specialists fix the problem using quality parts and proven techniques — no shortcuts, no unnecessary upsells.",
                },
                {
                  title: "Road Ready",
                  description: "We test drive your vehicle, verify everything shifts smoothly, and hand you back the keys with a warranty on the work.",
                },
              ]}
              variant="horizontal"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                label="About Us"
                title={content.about.heading}
                align="left"
              />
              {content.about.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-muted-foreground leading-relaxed text-lg">
                  {p}
                </p>
              ))}
            </div>
            <div className="space-y-4">
              {content.about.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "var(--theme-accent)" }} />
                  <span className="font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <BookingPrompt
        heading="Transmission Trouble? Let's Fix It."
        description="Call Crabtree Automatics for an honest diagnosis and expert repair. We'll get you back on the road."
        phone={content.contact.phone}
        ctaText="Call (818) 845-9117"
        ctaHref={"tel:" + content.contact.phone.replace(/[^0-9]/g, "")}
      />

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="Common questions about our transmission repair services"
            items={content.faq}
          />
        </div>
      </section>

      {/* HOURS + MAP */}
      <section id="hours" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="Visit Our Shop"
            subtitle="Conveniently located on Magnolia Blvd in Burbank"
            align="center"
          />
          <div className="mt-12 grid md:grid-cols-2 gap-12">
            <HoursTable hours={content.contact.hours} />
            <MapEmbed query={content.contact.mapEmbedQuery} height={400} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <FooterGradient
        businessName={content.businessName}
        tagline={content.tagline}
        phone={content.contact.phone}
        email={content.contact.email}
        address={content.contact.address}
      />
    </main>
  );
}