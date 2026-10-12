import type { ReactNode } from "react";
import type { Facility } from "@/lib/content";

function InstrumentAsset({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="block h-auto max-h-[520px] w-full bg-white object-contain" loading="lazy" />;
}

function Potentiostat() {
  return (
    <InstrumentAsset
      src="/instrument-archive/01-potentiostat-galvanostat.jpeg"
      alt="01 Potentiostat / Galvanostat Admiral Instruments, USA"
    />
  );
}

function SmartPot() {
  return (
    <InstrumentAsset
      src="/instrument-archive/03-pem-electrolyser-flow-cell.jpeg"
      alt="02 SensitSmart Smartphone Potentiostat PalmSens, Netherlands"
    />
  );
}

function PemCell() {
  return (
    <InstrumentAsset
      src="/instrument-archive/02-sensitsmart-smartphone-potentiostat.png"
      alt="03 Proton Exchange Membrane (PEM) Electrolyser Flow Cell"
    />
  );
}

function Autoclave() {
  return (
    <InstrumentAsset
      src="/instrument-archive/04-hydrothermal-autoclaves.jpeg"
      alt="04 Hydrothermal Autoclaves"
    />
  );
}

function Stirrer() {
  return (
    <InstrumentAsset
      src="/instrument-archive/06-ultrasonicator.jpeg"
      alt="05 Magnetic Stirrer with Hot Plate"
    />
  );
}

function Sonicator() {
  return (
    <InstrumentAsset
      src="/instrument-archive/07-vacuum-oven.jpeg"
      alt="06 Ultrasonicator"
    />
  );
}

function VacuumOven() {
  return (
    <InstrumentAsset
      src="/instrument-archive/08-digital-ph-meter.jpeg"
      alt="07 Vacuum Oven"
    />
  );
}

function PhMeter() {
  return (
    <InstrumentAsset
      src="/instrument-archive/09-cvd-tube-furnace-argon-gas-cylinders.png"
      alt="08 Digital pH Meter"
    />
  );
}

function Furnace() {
  return (
    <InstrumentAsset
      src="/instrument-archive/05-magnetic-stirrer-hot-plate.png"
      alt="09 CVD Tube Furnace with Argon Gas Cylinders"
    />
  );
}

function PowerSupply() {
  return (
    <InstrumentAsset
      src="/instrument-archive/10-dc-power-supply.png"
      alt="10 DC Power Supply"
    />
  );
}

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
  powersupply: PowerSupply,
};

export function EquipmentFigure({ kind }: { kind: Facility["figure"] }) {
  const Component = FIGURES[kind];
  return <Component />;
}
