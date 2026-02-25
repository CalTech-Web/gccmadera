type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-[#1a2e4a] pt-36 sm:pt-40 pb-20 px-4 sm:px-6 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 0%, #243d61 0%, #1a2e4a 65%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8973a]/30 to-transparent" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
        <h1
          className="text-white text-5xl sm:text-6xl font-bold leading-tight"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
