import type { ReactNode } from "react";
import type { Facility } from "@/lib/content";

const INK = "#1d2839";
const ELEC = "#2447e8";
const AQUA = "#0b8fa6";
const GOLD = "#8a6c14";
const PANEL = "#f6f7f3";

type LProps = { x: number; y: number; anchor?: "start" | "middle" | "end"; fill?: string; children: ReactNode };

function L({ x, y, anchor = "start", fill = INK, children }: LProps) {
  return (
    <text x={x} y={y} className="fig-label" textAnchor={anchor} fill={fill}>
      {children}
    </text>
  );
}

function Shell({ children, caption }: { children: ReactNode; caption: string }) {
  return (
    <svg viewBox="0 0 400 280" role="img" aria-label={caption} className="h-auto w-full">
      <defs>
        <linearGradient id="eqFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#eef1fa" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="280" fill={PANEL} />
      <rect x="14" y="14" width="372" height="252" fill="none" stroke={INK} strokeOpacity="0.18" />
      {children}
    </svg>
  );
}

/* ---------------------------------------------------------------
   1. Potentiostat / Galvanostat
   --------------------------------------------------------------- */
function Potentiostat() {
  return (
    <Shell caption="Schematic of a potentiostat/galvanostat electrochemical workstation connected to a three-electrode cell">
      <rect x="34" y="52" width="176" height="150" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <rect x="50" y="70" width="144" height="72" fill={INK} fillOpacity="0.06" stroke={INK} strokeOpacity="0.3" />
      <path
        d="M56 128c12 0 16-40 30-40s18 40 30 40 20-56 34-56 18 44 30 44 16-30 30-30"
        fill="none"
        stroke={ELEC}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <L x={50} y={64} fill={INK} >Display</L>
      {[74, 106, 138, 170].map((cx) => (
        <circle key={cx} cx={cx} cy="168" r="8" fill="none" stroke={INK} strokeOpacity="0.45" />
      ))}
      <line x1="74" y1="168" x2="74" y2="160" stroke={ELEC} strokeWidth="1.6" />

      {/* Terminals + cell */}
      <line x1="210" y1="92" x2="252" y2="92" stroke={INK} strokeOpacity="0.5" />
      <line x1="210" y1="126" x2="252" y2="126" stroke={INK} strokeOpacity="0.5" />
      <line x1="210" y1="160" x2="252" y2="160" stroke={ELEC} strokeOpacity="0.8" />
      <rect x="252" y="60" width="116" height="136" fill="#fff" stroke={INK} strokeOpacity="0.5" />
      <rect x="252" y="60" width="116" height="136" fill="url(#eqFill)" />
      <line x1="288" y1="92" x2="288" y2="168" stroke={INK} strokeWidth="2" />
      <line x1="316" y1="126" x2="316" y2="168" stroke={INK} strokeOpacity="0.5" strokeWidth="1.5" />
      <line x1="342" y1="126" x2="342" y2="168" stroke={INK} strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="288" cy="170" r="4" fill={ELEC} />
      <circle cx="316" cy="170" r="3" fill="none" stroke={INK} strokeOpacity="0.6" />
      <circle cx="342" cy="170" r="3" fill="none" stroke={INK} strokeOpacity="0.6" />

      <L x={34} y={40}>Electrochemical work station</L>
      <L x={310} y={222} anchor="middle" fill={INK}>Three-electrode cell</L>
      <L x={34} y={222} fill={ELEC}>Controlled potential / current</L>
      <L x={366} y={40} anchor="end" fill={INK}>WE · RE · CE</L>
    </Shell>
  );
}

/* ---------------------------------------------------------------
   2. Smartphone potentiostat
   --------------------------------------------------------------- */
function SmartPot() {
  return (
    <Shell caption="Schematic of a smartphone-linked portable potentiostat with a sensor electrode">
      <rect x="40" y="42" width="120" height="196" rx="12" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <rect x="52" y="62" width="96" height="130" fill={INK} fillOpacity="0.07" stroke={INK} strokeOpacity="0.3" />
      <path
        d="M60 168c14 0 18-44 32-44s18 44 32 44 20-58 32-58"
        fill="none"
        stroke={AQUA}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="100" cy="206" r="7" fill="none" stroke={INK} strokeOpacity="0.4" />
      <rect x="86" y="50" width="28" height="4" rx="2" fill={INK} fillOpacity="0.35" />
      <L x={40} y={32}>SensitSmart — smartphone interface</L>

      {/* Cable */}
      <path
        d="M160 140c40 0 40 46 80 46s40-46 80-46"
        fill="none"
        stroke={ELEC}
        strokeOpacity="0.65"
        strokeWidth="1.6"
        strokeDasharray="5 4"
      />
      <rect x="184" y="86" width="46" height="20" fill="#fff" stroke={INK} strokeOpacity="0.5" />
      <L x={207} y={100} anchor="middle" fill={INK}>Cell</L>

      {/* Sensor strip */}
      <rect x="256" y="140" width="104" height="52" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <rect x="262" y="146" width="92" height="40" fill={ELEC} fillOpacity="0.1" stroke={ELEC} strokeOpacity="0.4" />
      <circle cx="276" cy="166" r="5" fill={ELEC} fillOpacity="0.7" />
      <circle cx="308" cy="166" r="5" fill={AQUA} fillOpacity="0.7" />
      <circle cx="340" cy="166" r="5" fill={GOLD} fillOpacity="0.6" />
      <L x={256} y={222} fill={INK}>Screen-printed electrode</L>
      <L x={366} y={32} anchor="end" fill={AQUA}>Field measurement</L>
      <L x={40} y={250} fill={INK}>PalmSens · Netherlands</L>
    </Shell>
  );
}

/* ---------------------------------------------------------------
   3. PEM electrolyser flow cell
   --------------------------------------------------------------- */
function PemCell() {
  return (
    <Shell caption="Schematic of a PEM electrolyser flow cell with membrane electrode assembly">
      <rect x="52" y="66" width="296" height="150" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <rect x="52" y="66" width="296" height="150" fill="url(#eqFill)" />

      {/* Membrane */}
      <rect x="192" y="66" width="10" height="150" fill={ELEC} fillOpacity="0.16" stroke={ELEC} strokeOpacity="0.55" />

      {/* Electrode plates */}
      <rect x="112" y="66" width="10" height="150" fill={INK} fillOpacity="0.85" />
      <rect x="278" y="66" width="10" height="150" fill={INK} fillOpacity="0.85" />

      {/* Flow inlets */}
      <path d="M8 96h44M40 90l10 6-10 6" stroke={AQUA} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M8 186h44M40 180l10 6-10 6" stroke={AQUA} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <L x={8} y={78} fill={AQUA}>H₂O in</L>
      <L x={8} y={214} fill={AQUA}>Electrolyte</L>

      {/* Gas out */}
      <path d="M122 66V34M116 40l6-6 6 6" stroke={ELEC} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M288 66V34M282 40l6-6 6 6" stroke={ELEC} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <L x={122} y={26} fill={ELEC}>H₂</L>
      <L x={288} y={26} fill={ELEC}>O₂</L>

      {[80, 100, 120, 140].map((x, i) => (
        <circle
          key={x}
          cx={x}
          cy="190"
          r="3.2"
          fill="none"
          stroke={AQUA}
          strokeOpacity="0.7"
          style={{ animation: `rise ${3.8 + i * 0.4}s linear infinite`, animationDelay: `${i * 0.6}s`, transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}

      <L x={197} y={234} anchor="middle" fill={ELEC}>Proton-exchange membrane</L>
      <L x={52} y={56} fill={INK}>Flow channel</L>
      <L x={366} y={56} anchor="end" fill={INK}>Bipolar plates</L>
      <L x={366} y={234} anchor="end" fill={INK}>Continuous gas evolution</L>
    </Shell>
  );
}

/* ---------------------------------------------------------------
   4. Hydrothermal autoclave
   --------------------------------------------------------------- */
function Autoclave() {
  return (
    <Shell caption="Schematic of a hydrothermal autoclave reactor">
      {/* Vessel */}
      <path d="M126 76h148v112a24 24 0 0 1-24 24H150a24 24 0 0 1-24-24z" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <rect x="126" y="76" width="148" height="140" fill="url(#eqFill)" />
      <rect x="116" y="56" width="168" height="22" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      {[132, 168, 204, 240, 268].map((x) => (
        <circle key={x} cx={x} cy="67" r="4" fill="none" stroke={INK} strokeOpacity="0.45" />
      ))}
      <path d="M140 214l120-92" stroke={ELEC} strokeOpacity="0.25" strokeWidth="1" />
      <path d="M140 150l120 64" stroke={ELEC} strokeOpacity="0.2" strokeWidth="1" />

      {/* Heater */}
      <path
        d="M92 236h216"
        stroke={GOLD}
        strokeOpacity="0.6"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6 6"
      />
      <rect x="92" y="240" width="216" height="12" fill={GOLD} fillOpacity="0.12" stroke={GOLD} strokeOpacity="0.35" />

      <L x={116} y={44} fill={INK}>Sealed pressure vessel</L>
      <L x={92} y={268} fill={GOLD}>Heating mantle</L>
      <L x={308} y={140} fill={INK}>PTFE liner</L>
      <L x={308} y={158} fill={INK}>Reaction mixture</L>
      <L x={200} y={128} anchor="middle" fill={ELEC}>Elevated T · P</L>
      <L x={366} y={268} anchor="end" fill={INK}>Hydrothermal synthesis</L>
    </Shell>
  );
}

/* ---------------------------------------------------------------
   5. Magnetic stirrer with hot plate
   --------------------------------------------------------------- */
function Stirrer() {
  return (
    <Shell caption="Schematic of a magnetic stirrer with hot plate and a stirred beaker">
      <path d="M60 74h108v118H60z" fill="#fff" stroke={INK} strokeOpacity="0.5" />
      <rect x="60" y="74" width="108" height="118" fill="url(#eqFill)" />
      <rect x="66" y="80" width="96" height="106" fill="none" stroke={INK} strokeOpacity="0.25" />
      {/* Stir bar */}
      <rect x="92" y="164" width="44" height="10" rx="5" fill={ELEC} fillOpacity="0.7" />
      <circle cx="100" cy="169" r="7" fill="none" stroke={ELEC} strokeOpacity="0.5" strokeDasharray="2 3" style={{ animation: "spin 7s linear infinite", transformBox: "fill-box", transformOrigin: "center" }} />
      <circle cx="128" cy="169" r="7" fill="none" stroke={ELEC} strokeOpacity="0.5" strokeDasharray="2 3" style={{ animation: "spin 7s linear infinite", animationDelay: "0.1s", transformBox: "fill-box", transformOrigin: "center" }} />

      {/* Hot plate */}
      <rect x="40" y="204" width="150" height="20" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <rect x="40" y="204" width="150" height="20" fill={GOLD} fillOpacity="0.12" />
      <rect x="40" y="228" width="150" height="26" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <circle cx="70" cy="241" r="9" fill="none" stroke={INK} strokeOpacity="0.45" />
      <circle cx="160" cy="241" r="9" fill="none" stroke={INK} strokeOpacity="0.45" />
      <rect x="92" y="234" width="52" height="14" fill={INK} fillOpacity="0.08" stroke={INK} strokeOpacity="0.3" />

      {/* Vortex indicator */}
      <path d="M104 120c10-8 20 8 30 0s20 8 30 0" fill="none" stroke={AQUA} strokeOpacity="0.5" strokeWidth="1.3" />

      <L x={40} y={64} fill={INK}>Reaction vessel</L>
      <L x={40} y={268} fill={GOLD}>Hot plate · controlled temperature</L>
      <L x={366} y={64} anchor="end" fill={AQUA}>Magnetic stirring</L>
      <L x={366} y={268} anchor="end" fill={INK}>Mixing &amp; heating</L>
      <L x={210} y={120} fill={INK}>Solution-phase reactions</L>
      <L x={210} y={140} fill={INK}>Polymerisation</L>
      <L x={210} y={160} fill={INK}>Electrodeposition baths</L>
    </Shell>
  );
}

/* ---------------------------------------------------------------
   6. Ultrasonicator
   --------------------------------------------------------------- */
function Sonicator() {
  return (
    <Shell caption="Schematic of an ultrasonic bath for dispersion and homogenisation">
      <path d="M96 82h208v96H96z" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <rect x="96" y="112" width="208" height="66" fill={AQUA} fillOpacity="0.1" />
      <rect x="96" y="178" width="208" height="14" fill={INK} fillOpacity="0.08" stroke={INK} strokeOpacity="0.35" />
      {[120, 152, 184, 216, 248, 280].map((x, i) => (
        <path
          key={x}
          d={`M${x} 178q-6 -14 0 -26`}
          fill="none"
          stroke={AQUA}
          strokeOpacity="0.55"
          strokeWidth="1.3"
          style={{ animation: `cue ${2 + i * 0.28}s var(--ease-smooth) infinite`, animationDelay: `${i * 0.22}s` }}
        />
      ))}
      {/* Transducers */}
      {[124, 164, 204, 244, 284].map((x) => (
        <rect key={x} x={x - 9} y="192" width="18" height="14" fill="#fff" stroke={INK} strokeOpacity="0.5" />
      ))}

      {/* Control box */}
      <rect x="316" y="82" width="64" height="96" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <circle cx="348" cy="112" r="12" fill="none" stroke={ELEC} strokeOpacity="0.6" />
      <line x1="348" y1="112" x2="348" y2="104" stroke={ELEC} strokeWidth="1.6" />
      <rect x="326" y="140" width="44" height="8" fill={INK} fillOpacity="0.12" />
      <rect x="326" y="156" width="44" height="8" fill={INK} fillOpacity="0.12" />

      <L x={96} y={70} fill={INK}>Ultrasonic bath</L>
      <L x={96} y={234} fill={AQUA}>20–40 kHz transducers</L>
      <L x={366} y={234} anchor="end" fill={INK}>Dispersion · degassing · homogenisation</L>
      <L x={316} y={70} anchor="end" fill={ELEC}>Control unit</L>
    </Shell>
  );
}

/* ---------------------------------------------------------------
   7. Vacuum oven
   --------------------------------------------------------------- */
function VacuumOven() {
  return (
    <Shell caption="Schematic of a vacuum oven with a vacuum pump and gauge">
      <rect x="56" y="52" width="212" height="152" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <rect x="56" y="52" width="212" height="152" fill="url(#eqFill)" />
      <rect x="72" y="70" width="180" height="116" fill="none" stroke={INK} strokeOpacity="0.3" />
      <circle cx="162" cy="128" r="40" fill="none" stroke={INK} strokeOpacity="0.25" />
      <path d="M162 128a40 40 0 0 1 28-38" fill="none" stroke={ELEC} strokeOpacity="0.6" strokeWidth="2" />
      <line x1="162" y1="128" x2="176" y2="110" stroke={ELEC} strokeWidth="1.6" />
      <L x={162} y={182} anchor="middle" fill={INK}>Shelf</L>
      <rect x="56" y="204" width="212" height="10" fill={GOLD} fillOpacity="0.14" stroke={GOLD} strokeOpacity="0.35" />

      {/* Gauge */}
      <circle cx="304" cy="88" r="26" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <circle cx="304" cy="88" r="19" fill="none" stroke={INK} strokeOpacity="0.25" />
      <line x1="304" y1="88" x2="316" y2="76" stroke={ELEC} strokeWidth="1.8" />
      <L x={304} y={128} anchor="middle" fill={INK}>Vacuum</L>

      {/* Pump */}
      <rect x="272" y="150" width="66" height="54" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <circle cx="288" cy="177" r="9" fill="none" stroke={INK} strokeOpacity="0.45" />
      <circle cx="322" cy="177" r="9" fill="none" stroke={INK} strokeOpacity="0.45" />
      <path d="M268 200h74" stroke={AQUA} strokeWidth="1.6" strokeOpacity="0.6" />
      <path d="M268 154h4" stroke={AQUA} strokeWidth="1.6" strokeOpacity="0.6" />

      <L x={56} y={42} fill={INK}>Vacuum oven · reduced pressure drying</L>
      <L x={56} y={234} fill={GOLD}>Controlled temperature</L>
      <L x={366} y={234} anchor="end" fill={INK}>Membrane &amp; gel drying</L>
      <L x={366} y={42} anchor="end" fill={AQUA}>Low-pressure drying</L>
    </Shell>
  );
}

/* ---------------------------------------------------------------
   8. Digital pH meter
   --------------------------------------------------------------- */
function PhMeter() {
  return (
    <Shell caption="Schematic of a digital pH meter with a glass combination electrode">
      <rect x="72" y="46" width="150" height="104" rx="8" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <rect x="86" y="62" width="122" height="52" fill={INK} fillOpacity="0.08" stroke={INK} strokeOpacity="0.3" />
      <text x="147" y="98" textAnchor="middle" className="fig-label" fill={ELEC} style={{ fontSize: 22 }}>
        7.02
      </text>
      <circle cx="104" cy="134" r="8" fill="none" stroke={INK} strokeOpacity="0.45" />
      <circle cx="190" cy="134" r="8" fill="none" stroke={INK} strokeOpacity="0.45" />
      <rect x="124" y="126" width="46" height="16" fill="#fff" stroke={INK} strokeOpacity="0.4" />

      {/* Electrode */}
      <path d="M222 150h-6V96" stroke={INK} strokeOpacity="0.7" strokeWidth="2" fill="none" />
      <rect x="200" y="150" width="32" height="14" fill={INK} fillOpacity="0.18" stroke={INK} strokeOpacity="0.5" />
      <path d="M216 164v58" stroke={INK} strokeOpacity="0.7" strokeWidth="2.5" fill="none" />
      <circle cx="216" cy="234" r="9" fill={AQUA} fillOpacity="0.28" stroke={AQUA} strokeOpacity="0.7" />

      {/* Beaker */}
      <path d="M296 176h72v72h-72z" fill="none" stroke={INK} strokeOpacity="0.45" />
      <rect x="296" y="196" width="72" height="52" fill={AQUA} fillOpacity="0.12" />

      <L x={72} y={36} fill={INK}>Digital pH meter</L>
      <L x={216} y={258} anchor="middle" fill={INK}>Glass electrode</L>
      <L x={332} y={168} anchor="end" fill={INK}>Sample</L>
      <L x={366} y={36} anchor="end" fill={AQUA}>Electrolyte &amp; matrix control</L>
      <L x={72} y={258} fill={INK}>Temperature compensated</L>
    </Shell>
  );
}

/* ---------------------------------------------------------------
   9. CVD tube furnace
   --------------------------------------------------------------- */
function Furnace() {
  return (
    <Shell caption="Schematic of a CVD tube furnace with gas cylinder delivery">
      {/* Tube */}
      <rect x="112" y="128" width="176" height="34" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <rect x="112" y="128" width="176" height="34" fill="url(#eqFill)" />
      <line x1="200" y1="128" x2="200" y2="162" stroke={ELEC} strokeOpacity="0.45" strokeDasharray="4 4" />

      {/* Furnace bodies */}
      <rect x="120" y="106" width="66" height="78" fill="#fff" stroke={INK} strokeOpacity="0.5" />
      <rect x="214" y="106" width="66" height="78" fill="#fff" stroke={INK} strokeOpacity="0.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={`l${i}`}
          d={`M128 ${116 + i * 15}h50`}
          stroke={GOLD}
          strokeOpacity="0.6"
          strokeWidth="2"
          fill="none"
        />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={`r${i}`}
          d={`M222 ${116 + i * 15}h50`}
          stroke={GOLD}
          strokeOpacity="0.6"
          strokeWidth="2"
          fill="none"
        />
      ))}

      {/* Gas cylinders */}
      {[36, 78].map((x) => (
        <g key={x}>
          <path d={`M${x} 176h34v58h-34z`} fill="#fff" stroke={INK} strokeOpacity="0.5" />
          <rect x={x + 12} y="166" width="10" height="12" fill="#fff" stroke={INK} strokeOpacity="0.5" />
          <path d={`M${x + 17} 166V112h56`} stroke={AQUA} strokeOpacity="0.6" strokeWidth="1.5" fill="none" />
        </g>
      ))}
      <path d="M112 145H56" stroke={AQUA} strokeOpacity="0.6" strokeWidth="1.5" />
      <path d="M288 145h56" stroke={AQUA} strokeOpacity="0.6" strokeWidth="1.5" />

      {/* Controller */}
      <rect x="306" y="106" width="66" height="78" fill="#fff" stroke={INK} strokeOpacity="0.5" />
      <rect x="316" y="118" width="46" height="18" fill={INK} fillOpacity="0.1" stroke={INK} strokeOpacity="0.3" />
      <text x="339" y="131" textAnchor="middle" className="fig-label" fill={ELEC} style={{ fontSize: 11 }}>
        950 °C
      </text>
      <circle cx="339" cy="160" r="11" fill="none" stroke={INK} strokeOpacity="0.45" />

      <L x={112} y={96} fill={INK}>Quartz tube</L>
      <L x={306} y={96} anchor="end" fill={INK}>Controller</L>
      <L x={36} y={250} fill={AQUA}>Carrier / reactive gas</L>
      <L x={366} y={250} anchor="end" fill={INK}>CVD · calcination · heat treatment</L>
      <L x={153} y={204} anchor="middle" fill={GOLD}>Heating elements</L>
    </Shell>
  );
}

/* ---------------------------------------------------------------
   10. Fume hood
   --------------------------------------------------------------- */
function FumeHood() {
  return (
    <Shell caption="Schematic of a laboratory fume hood with sash and exhaust duct">
      <rect x="76" y="46" width="248" height="176" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <rect x="76" y="46" width="248" height="176" fill="url(#eqFill)" />
      <rect x="92" y="62" width="216" height="98" fill="none" stroke={INK} strokeOpacity="0.3" />
      <line x1="92" y1="118" x2="308" y2="118" stroke={INK} strokeOpacity="0.35" strokeDasharray="6 5" />
      <rect x="92" y="160" width="216" height="12" fill={INK} fillOpacity="0.1" stroke={INK} strokeOpacity="0.3" />

      {/* Sash */}
      <rect x="84" y="72" width="232" height="8" fill={INK} fillOpacity="0.35" />
      <circle cx="200" cy="76" r="6" fill="none" stroke={INK} strokeOpacity="0.5" />

      {/* Airflow arrows */}
      {[110, 152, 194, 236, 278].map((x) => (
        <path
          key={x}
          d={`M${x} 178V150M${x - 5} 156l5-6 5 6`}
          stroke={AQUA}
          strokeOpacity="0.55"
          strokeWidth="1.3"
          fill="none"
          style={{ animation: `cue ${2.4 + (x % 3) * 0.4}s var(--ease-smooth) infinite`, animationDelay: `${(x % 4) * 0.3}s` }}
        />
      ))}

      {/* Duct */}
      <rect x="166" y="18" width="68" height="28" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <path d="M200 18V6" stroke={INK} strokeOpacity="0.45" strokeWidth="2" />

      {/* Vessels on bench */}
      <path d="M116 160h34v-26h-34z" fill="none" stroke={INK} strokeOpacity="0.5" />
      <path d="M250 160h30v-30h-30z" fill="none" stroke={INK} strokeOpacity="0.5" />

      <L x={76} y={38} fill={INK}>Fume hood · ventilated enclosure</L>
      <L x={92} y={202} fill={INK}>Work surface</L>
      <L x={308} y={202} anchor="end" fill={AQUA}>Face velocity · containment</L>
      <L x={200} y={244} anchor="middle" fill={INK}>Exhaust to atmosphere</L>
      <L x={366} y={244} anchor="end" fill={INK}>Safe handling of solvents &amp; reagents</L>
    </Shell>
  );
}

/* ---------------------------------------------------------------
   11. DC power supply
   --------------------------------------------------------------- */
function PowerSupply() {
  return (
    <Shell caption="Schematic of a programmable DC power supply driving an electrochemical load">
      <rect x="60" y="58" width="200" height="130" fill="#fff" stroke={INK} strokeOpacity="0.55" />
      <rect x="60" y="58" width="200" height="130" fill="url(#eqFill)" />
      <rect x="76" y="76" width="80" height="42" fill={INK} fillOpacity="0.08" stroke={INK} strokeOpacity="0.3" />
      <text x="116" y="104" textAnchor="middle" className="fig-label" fill={ELEC} style={{ fontSize: 18 }}>
        12.0 V
      </text>
      <rect x="168" y="76" width="76" height="42" fill={INK} fillOpacity="0.08" stroke={INK} strokeOpacity="0.3" />
      <text x="206" y="104" textAnchor="middle" className="fig-label" fill={ELEC} style={{ fontSize: 18 }}>
        1.50 A
      </text>
      <circle cx="116" cy="150" r="14" fill="none" stroke={INK} strokeOpacity="0.45" />
      <line x1="116" y1="150" x2="116" y2="140" stroke={ELEC} strokeWidth="1.8" />
      <rect x="150" y="140" width="60" height="20" fill="#fff" stroke={INK} strokeOpacity="0.4" />

      {/* Terminals */}
      <circle cx="276" cy="96" r="7" fill={ELEC} fillOpacity="0.8" />
      <circle cx="276" cy="150" r="7" fill="none" stroke={INK} strokeOpacity="0.6" />
      <path d="M283 96h34V186h-34" stroke={ELEC} strokeOpacity="0.55" strokeWidth="1.6" fill="none" />
      <path d="M283 150h34" stroke={INK} strokeOpacity="0.4" strokeWidth="1.6" fill="none" />

      {/* Load cell */}
      <rect x="330" y="106" width="46" height="80" fill="#fff" stroke={INK} strokeOpacity="0.5" />
      <rect x="330" y="106" width="46" height="80" fill="url(#eqFill)" />
      <line x1="353" y1="126" x2="353" y2="166" stroke={ELEC} strokeWidth="2" />

      <L x={60} y={48} fill={INK}>DC power supply</L>
      <L x={276} y={80} fill={ELEC}>+</L>
      <L x={276} y={172} fill={INK}>−</L>
      <L x={353} y={202} anchor="middle" fill={INK}>Electrochemical cell</L>
      <L x={366} y={48} anchor="end" fill={INK}>Constant current / voltage</L>
      <L x={366} y={216} anchor="end" fill={INK}>Electrodeposition · polarisation</L>
    </Shell>
  );
}

/* ---------------------------------------------------------------
   Registry
   --------------------------------------------------------------- */
const FIGURES: Record<Facility["figure"], () => ReactNode> = {
  potentiostat: Potentiostat,
  smartpot: SmartPot,
  pem: PemCell,
  autoclave: Autoclave,
  stirrer: Stirrer,
  sonicator: Sonicator,
  vacuumoven: VacuumOven,
  phmeter: PhMeter,
  furnace: Furnace,
  fumehood: FumeHood,
  powersupply: PowerSupply,
};

export function EquipmentFigure({ kind }: { kind: Facility["figure"] }) {
  const Component = FIGURES[kind];
  return <Component />;
}
