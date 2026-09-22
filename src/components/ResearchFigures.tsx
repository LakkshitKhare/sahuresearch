import type { CSSProperties } from "react";

const INK = "#1d2839";
const ELEC = "#2447e8";
const AQUA = "#0b8fa6";
const GOLD = "#8a6c14";

/* ============================================================
   01 — Electrified molecular systems: PEM electrolyser
   ============================================================ */
function ElectrolyserFigure() {
  const bubbles = [
    { x: 78, d: 0, r: 3.4 },
    { x: 96, d: 1.1, r: 2.4 },
    { x: 118, d: 2.2, r: 4 },
    { x: 138, d: 0.6, r: 2.8 },
    { x: 262, d: 0.9, r: 3.2 },
    { x: 282, d: 2, r: 2.6 },
    { x: 304, d: 1.4, r: 3.8 },
    { x: 324, d: 0.3, r: 2.5 },
  ];

  return (
    <>
      {/* Cell body */}
      <rect x="40" y="46" width="320" height="228" fill="#f7f8f4" stroke={INK} strokeOpacity="0.35" />
      <rect x="40" y="46" width="320" height="228" fill="url(#cellFill)" />

      {/* Membrane */}
      <rect x="196" y="46" width="8" height="228" fill={ELEC} fillOpacity="0.14" stroke={ELEC} strokeOpacity="0.5" />
      <line x1="200" y1="46" x2="200" y2="274" stroke={ELEC} strokeOpacity="0.45" strokeDasharray="4 5" />

      {/* Electrodes */}
      <rect x="86" y="46" width="6" height="228" fill={INK} fillOpacity="0.85" />
      <rect x="308" y="46" width="6" height="228" fill={INK} fillOpacity="0.85" />

      {/* Bubbles */}
      {bubbles.map((b) => (
        <circle
          key={b.x}
          cx={b.x}
          cy="250"
          r={b.r}
          fill="none"
          stroke={AQUA}
          strokeOpacity="0.75"
          strokeWidth="1.1"
          style={
            {
              animation: `rise ${4.2 + b.d}s linear infinite`,
              animationDelay: `${b.d}s`,
              transformBox: "fill-box",
              transformOrigin: "center",
            } as CSSProperties
          }
        />
      ))}

      {/* Labels */}
      <text x="40" y="34" className="fig-label" fill={INK}>
        Cathode
      </text>
      <text x="360" y="34" className="fig-label" textAnchor="end" fill={INK}>
        Anode
      </text>
      <text x="40" y="292" className="fig-label" fill={ELEC}>
        2H⁺ + 2e⁻ → H₂
      </text>
      <text x="360" y="292" className="fig-label" textAnchor="end" fill={AQUA}>
        2H₂O → O₂ + 4H⁺ + 4e⁻
      </text>
      <text x="200" y="20" className="fig-label" textAnchor="middle" fill={ELEC}>
        Proton-exchange membrane
      </text>
    </>
  );
}

/* ============================================================
   02 — Electrochemical sensing: three-electrode cell + CV
   ============================================================ */
function SensorFigure() {
  return (
    <>
      {/* Beaker */}
      <path d="M34 60h132v186H34z" fill="#f7f8f4" stroke={INK} strokeOpacity="0.4" />
      <rect x="34" y="60" width="132" height="186" fill="url(#cellFill)" />

      {/* Electrodes */}
      <line x1="66" y1="18" x2="66" y2="200" stroke={INK} strokeOpacity="0.8" strokeWidth="2" />
      <line x1="100" y1="30" x2="100" y2="150" stroke={INK} strokeOpacity="0.5" strokeWidth="1.5" />
      <line x1="134" y1="24" x2="134" y2="170" stroke={INK} strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="66" cy="200" r="4" fill={ELEC} />
      <circle cx="100" cy="150" r="3.2" fill="none" stroke={INK} strokeOpacity="0.6" />
      <circle cx="134" cy="170" r="3.2" fill="none" stroke={INK} strokeOpacity="0.6" />

      {/* Circuit */}
      <path
        d="M66 18h34M100 30v14M100 44h34M134 24v-6"
        stroke={INK}
        strokeOpacity="0.35"
        fill="none"
      />
      <rect x="96" y="4" width="38" height="14" fill="#fff" stroke={INK} strokeOpacity="0.35" />
      <text x="115" y="14.5" className="fig-label" textAnchor="middle" fill={INK}>
        Potentiostat
      </text>

      {/* Voltammogram */}
      <rect x="204" y="60" width="156" height="130" fill="#fff" stroke={INK} strokeOpacity="0.3" />
      <line x1="204" y1="190" x2="360" y2="190" stroke={INK} strokeOpacity="0.35" />
      <line x1="204" y1="60" x2="204" y2="190" stroke={INK} strokeOpacity="0.35" />
      <path
        d="M212 176c14 0 18-46 34-46s20 46 34 46 22-70 40-70"
        fill="none"
        stroke={ELEC}
        strokeOpacity="0.25"
        strokeWidth="1.6"
      />
      <path
        d="M212 176c14 0 18-46 34-46s20 46 34 46 22-70 40-70"
        fill="none"
        stroke={ELEC}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="620"
        className="hero-trace"
      />
      <text x="204" y="52" className="fig-label" fill={INK}>
        Current response
      </text>
      <text x="360" y="208" className="fig-label" textAnchor="end" fill={INK}>
        Potential
      </text>

      {/* Analyte */}
      <circle cx="150" cy="96" r="3" fill={AQUA} fillOpacity="0.8" />
      <circle cx="160" cy="112" r="2.2" fill={AQUA} fillOpacity="0.6" />
      <circle cx="148" cy="128" r="2.6" fill={AQUA} fillOpacity="0.7" />
      <text x="34" y="272" className="fig-label" fill={INK}>
        Working · Reference · Counter
      </text>
      <text x="360" y="272" className="fig-label" textAnchor="end" fill={AQUA}>
        Redox signal
      </text>
    </>
  );
}

/* ============================================================
   03 — Ionic polymer membrane: selective transport
   ============================================================ */
function MembraneFigure() {
  const chains = [70, 96, 122, 148, 174];

  const chainPath = (baseY: number, phase: number) => {
    const pts: string[] = [];
    const steps = 22;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = 36 + 330 * t;
      const y = baseY + Math.sin(t * Math.PI * 5 + phase) * 6.5;
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return `M${pts.join(" L")}`;
  };

  return (
    <>
      {/* Membrane stack */}
      <rect x="30" y="40" width="340" height="212" fill="#f7f8f4" stroke={INK} strokeOpacity="0.35" />

      {/* Polymer chains */}
      {chains.map((y, i) => (
        <path
          key={y}
          d={chainPath(y, i * 0.7)}
          fill="none"
          stroke={ELEC}
          strokeOpacity={0.22 + i * 0.09}
          strokeWidth="1.6"
        />
      ))}

      {/* Dense selective layer */}
      <rect x="196" y="40" width="6" height="212" fill={INK} fillOpacity="0.8" />
      <rect x="202" y="40" width="2" height="212" fill={AQUA} fillOpacity="0.5" />

      {/* Transporting ions */}
      {[0, 1.4, 2.8, 4.2].map((d, i) => (
        <g key={i} style={{ animation: `filter-flow ${5.6 + i * 0.5}s linear infinite`, animationDelay: `${d}s` }}>
          <circle cx="34" cy={74 + i * 40} r="4.2" fill={i % 2 ? AQUA : ELEC} fillOpacity="0.85" />
        </g>
      ))}

      {/* Blocked species */}
      {[92, 132, 172, 212].map((y, i) => (
        <g key={y} style={{ animation: `drift-x ${6 + i * 0.7}s var(--ease-smooth) infinite`, animationDelay: `${i * 0.4}s` }}>
          <rect x="150" y={y - 5} width="10" height="10" fill={GOLD} fillOpacity="0.28" stroke={GOLD} strokeOpacity="0.6" />
        </g>
      ))}

      <text x="30" y="28" className="fig-label" fill={INK}>
        Feed — contaminated water
      </text>
      <text x="370" y="28" className="fig-label" textAnchor="end" fill={ELEC}>
        Permeate
      </text>
      <text x="30" y="272" className="fig-label" fill={INK}>
        Ionic polymer network
      </text>
      <text x="370" y="272" className="fig-label" textAnchor="end" fill={AQUA}>
        Selectively retained
      </text>
    </>
  );
}

/* ============================================================
   04 — Optical bioimaging: nanoscale probes + spectra
   ============================================================ */
function ImagingFigure() {
  const bars = [
    { x: 250, h: 62, o: 0.95, d: 0 },
    { x: 262, h: 96, o: 0.55, d: 0.12 },
    { x: 274, h: 34, o: 0.7, d: 0.24 },
    { x: 286, h: 120, o: 1, d: 0.36 },
    { x: 298, h: 48, o: 0.5, d: 0.48 },
    { x: 310, h: 78, o: 0.75, d: 0.6 },
    { x: 322, h: 26, o: 0.45, d: 0.72 },
    { x: 334, h: 58, o: 0.65, d: 0.84 },
    { x: 346, h: 40, o: 0.4, d: 0.96 },
  ];

  return (
    <>
      {/* Illumination */}
      <line x1="8" y1="120" x2="52" y2="120" stroke={ELEC} strokeWidth="2" strokeOpacity="0.8" />
      <path d="M52 112l10 8-10 8z" fill={ELEC} fillOpacity="0.8" />

      {/* Cell */}
      <circle cx="130" cy="140" r="86" fill="#f7f8f4" stroke={INK} strokeOpacity="0.4" />
      <circle cx="130" cy="140" r="72" fill="none" stroke={AQUA} strokeOpacity="0.4" strokeWidth="1.4" strokeDasharray="3 6" />
      <circle cx="130" cy="140" r="46" fill="none" stroke={INK} strokeOpacity="0.2" strokeWidth="1.2" />

      {/* Nanoscale probes */}
      {[
        [104, 92],
        [156, 100],
        [96, 168],
        [164, 172],
        [130, 140],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="9" fill={ELEC} fillOpacity="0.14" />
          <circle
            cx={cx}
            cy={cy}
            r="9"
            fill="none"
            stroke={ELEC}
            strokeOpacity="0.7"
            style={{ animation: `pulse-ring ${3.4 + i * 0.5}s var(--ease-smooth) infinite`, animationDelay: `${i * 0.6}s`, transformBox: "fill-box", transformOrigin: "center" }}
          />
          <circle cx={cx} cy={cy} r="3" fill={ELEC} />
        </g>
      ))}

      {/* Spectra */}
      <line x1="240" y1="196" x2="366" y2="196" stroke={INK} strokeOpacity="0.35" />
      {bars.map((b) => (
        <rect
          key={b.x}
          x={b.x}
          y={196 - b.h}
          width="7"
          height={b.h}
          fill={ELEC}
          fillOpacity={b.o * 0.75}
          style={
            {
              animation: `spectral-in 0.9s var(--ease-expo) both`,
              animationDelay: `${1 + b.d}s`,
              transformBox: "fill-box",
              transformOrigin: "bottom",
            } as CSSProperties
          }
        />
      ))}
      <text x="240" y="216" className="fig-label" fill={INK}>
        Raman shift →
      </text>
      <text x="8" y="34" className="fig-label" fill={ELEC}>
        Excitation
      </text>
      <text x="130" y="256" className="fig-label" textAnchor="middle" fill={INK}>
        Nanoscale optical probes on a cell membrane
      </text>
      <text x="366" y="262" className="fig-label" textAnchor="end" fill={AQUA}>
        Scattering spectrum
      </text>
    </>
  );
}

/* ============================================================
   Shared shell
   ============================================================ */
const FIGURE_MAP = {
  electrolyser: ElectrolyserFigure,
  sensor: SensorFigure,
  membrane: MembraneFigure,
  imaging: ImagingFigure,
} as const;

export type FigureKind = keyof typeof FIGURE_MAP;

export const FIGURE_CAPTIONS: Record<FigureKind, string> = {
  electrolyser: "Schematic · Membrane electrode assembly for water splitting",
  sensor: "Schematic · Three-electrode configuration and voltammetric response",
  membrane: "Schematic · Ionic polymer membrane with selective ion transport",
  imaging: "Schematic · Plasmonic probes and scattering spectroscopy",
};

export function ResearchFigure({
  kind,
  className,
}: {
  kind: FigureKind;
  className?: string;
}) {
  const Component = FIGURE_MAP[kind];
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label={FIGURE_CAPTIONS[kind]}
      className={className ?? "h-auto w-full"}
    >
      <defs>
        <linearGradient id="cellFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#eef2fb" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <Component />
    </svg>
  );
}
