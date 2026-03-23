// @ts-nocheck
"use client";

import content from "../data/content.json";
import { FloatingNav } from "@/components/ui/floating-nav";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { GoogleReviewBadge } from "@/components/ui/google-review-badge";
import { NumberGrid } from "@/components/ui/number-grid";
import { StackedCards } from "@/components/ui/stacked-cards";
import { ReviewStars } from "@/components/ui/review-stars";
import { StepsSection } from "@/components/ui/steps-section";
import { HoursTable } from "@/components/ui/hours-table";
import { MapEmbed } from "@/components/ui/map-embed";
import { FooterMinimal } from "@/components/ui/footer-minimal";
import { FloatingCTA } from "@/components/ui/floating-cta";
import { CTABanner } from "@/components/ui/cta-banner";
import { GridPattern } from "@/components/ui/grid-pattern";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExperienceBadge } from "@/components/ui/experience-badge";
import { Wrench, Cog, Droplets, Disc, CircleDot, Truck, Phone, MapPin, Clock, Star, Shield, ThumbsUp, Award } from "lucide-react";

const serviceIcons = [Wrench, Cog, Droplets, Disc, CircleDot, Truck];

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* MINIMAL NAV */}
      <FloatingNav
        logo={<span className="font-bold text-lg"><span style={{ color: "var(--theme-accent)" }}>Crabtree</span> Automatics</span>}
        items={[
          { label: "Reviews", href: "#reviews" },
          { label: "Services", href: "#services" },
          { label: "Process", href: "#process" },
          { label: "About", href: "#about" },
          { label: "Hours", href: "#hours" },
        ]}
        ctaText="Call Now"
        ctaHref="tel:8188459117"
      />

      {/* HERO â INLINE (plain HTML + CSS animations, no Framer Motion) */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <GridPattern className="opacity-40" size={32} />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center text-center">
            <div
              className="animate-hero-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
            >
              <Star className="h-4 w-4" style={{ color: "var(--theme-accent)" }} />
              <span>5.0 Stars on Google â 27 Reviews</span>
            </div>
            <h1 className="animate-hero-fade-in text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Precision{" "}
              <span style={{ color: "var(--theme-accent)" }}>Transmission</span>
              <br />
              Repair in Burbank
            </h1>
            <p className="animate-hero-fade-in-delayed mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
              {content.hero.subheading}
            </p>
            <div className="animate-hero-fade-up mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8188459117"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: "var(--theme-accent)" }}
              >
                <Phone className="h-5 w-5" />
                Call (818) 845-9117
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-border px-8 py-4 text-lg font-semibold transition-colors hover:bg-muted"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS / TRUST â Stats + Google Badge + Testimonials */}
      <section id="reviews" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <GoogleReviewBadge rating={5} totalReviews={27} />
            <ExperienceBadge years={50} label="Years in Business" />
          </div>

          <NumberGrid
            items={[
              { value: 50, suffix: "+", label: "Years in Business" },
              { value: 27, label: "5-Star Reviews" },
              { value: 10000, suffix: "+", label: "Transmissions Rebuilt" },
              { value: 100, suffix: "%", label: "Satisfaction Guaranteed" },
            ]}
            className="mb-16"
          />

          <SectionHeading
            title="What Our Customers Say"
            subtitle="Real reviews from real Burbank drivers"
            label="Testimonials"
          />

          <StackedCards
            cards={content.reviews.map((r, i) => (
              <div key={i}>
                <ReviewStars rating={r.rating} size="md" />
                <p className="mt-3 text-foreground italic leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <p className="mt-3 text-sm font-semibold" style={{ color: "var(--theme-accent)" }}>
                  â {r.name}
                </p>
              </div>
            ))}
            className="max-w-xl mx-auto"
          />
        </div>
      </section>

      {/* SERVICES â BENTO GRID (asymmetric cards) */}
      <section id="services" className="relative py-20 md:py-28 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive transmission care for every vehicle"
            label="What We Do"
          />

          <BentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-[18rem] gap-4">
            {content.services.map((service, i) => {
              const Icon = serviceIcons[i] || Wrench;
              const spanClass = i === 0
                ? "md:col-span-2 md:row-span-1"
                : i === 3
                ? "md:col-span-2 md:row-span-1"
                : "md:col-span-1 md:row-span-1";
              return (
                <BentoCard
                  key={i}
                  name={service.title}
                  description={service.description}
                  Icon={Icon}
                  className={spanClass}
                  background={<div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(circle at ${30 + i * 15}% ${20 + i * 10}%, var(--theme-accent), transparent 60%)` }} />}
                  href="tel:8188459117"
                  cta="Schedule Service"
                />
              );
            })}
          </BentoGrid>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            title="How It Works"
            subtitle="From diagnosis to road-ready â our straightforward process"
            label="Our Process"
          />

          <StepsSection
            steps={[
              { title: "Bring It In", description: "Drop off your vehicle or call us to describe the issue. We'll schedule a convenient time for inspection." },
              { title: "Expert Diagnosis", description: "Our technicians run comprehensive computer diagnostics and physical inspections to identify the root cause." },
              { title: "Transparent Quote", description: "We explain the problem in plain language, present your options, and give a written estimate â no surprises." },
              { title: "Quality Repair", description: "We perform the repair using quality parts, test everything thoroughly, and get you back on the road." },
            ]}
            variant="vertical"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-20 md:py-28 bg-muted/30 overflow-hidden">
        <GridPattern className="opacity-20" size={48} />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <SectionHeading
            title={content.about.heading}
            subtitle={content.about.paragraphs[0]}
            label="About Us"
          />

          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 -mt-6">
            {content.about.paragraphs[1]}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {content.about.highlights.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <div
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "var(--theme-accent)" }}
                >
                  {i === 0 ? <Shield className="h-4 w-4 text-white" /> :
                   i === 1 ? <Cog className="h-4 w-4 text-white" /> :
                   i === 2 ? <Award className="h-4 w-4 text-white" /> :
                   <ThumbsUp className="h-4 w-4 text-white" />}
                </div>
                <p className="text-sm text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {content.gallery?.images?.length > 0 && (
            <div className="mt-12 flex justify-center">
              <img
                src={content.gallery.images[0].src}
                alt={content.gallery.images[0].alt}
                className="rounded-xl border border-border shadow-lg max-w-md w-full object-cover"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <CTABanner
            heading="Transmission Trouble? Let's Fix It."
            subheading="Call now for a free consultation. Same-day diagnostics available Monday through Friday."
            ctaText="Call (818) 845-9117"
            ctaHref="tel:8188459117"
            variant="filled"
          />
        </div>
      </section>

      {/* HOURS & MAP */}
      <section id="hours" className="py-20 md:py-28 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Visit Us"
            subtitle="Located on Magnolia Boulevard in the heart of Burbank"
            label="Hours & Location"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5" style={{ color: "var(--theme-accent)" }} />
                <h3 className="font-semibold text-lg">Business Hours</h3>
              </div>
              <HoursTable hours={content.contact.hours} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5" style={{ color: "var(--theme-accent)" }} />
                <h3 className="font-semibold text-lg">Find Us</h3>
              </div>
              <MapEmbed query={content.contact.mapEmbedQuery} height={340} />
              <p className="mt-4 text-sm text-muted-foreground">
                {content.contact.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <FooterMinimal
        businessName="Crabtree Automatics"
        links={[
          { label: "Services", href: "#services" },
          { label: "Reviews", href: "#reviews" },
          { label: "Hours", href: "#hours" },
          { label: "Facebook", href: "https://www.facebook.com/crabtreeautomatics/" },
        ]}
      />

      {/* FLOATING CTA */}
      <FloatingCTA
        text="Call Now"
        phone="(818) 845-9117"
        showAfterScroll={400}
      />
    </main>
  );
}
