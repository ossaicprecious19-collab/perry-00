export function Nebula() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="nebula animate-pulse-glow"
        style={{
          top: "-10%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          background: "oklch(0.78 0.14 190 / 18%)",
        }}
      />
      <div
        className="nebula animate-pulse-glow"
        style={{
          bottom: "-20%",
          right: "-10%",
          width: "55vw",
          height: "55vw",
          background: "oklch(0.74 0.17 30 / 14%)",
          animationDelay: "2s",
        }}
      />
      <div
        className="nebula"
        style={{
          top: "40%",
          left: "40%",
          width: "30vw",
          height: "30vw",
          background: "oklch(0.65 0.15 280 / 10%)",
        }}
      />
    </div>
  );
}
