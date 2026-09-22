import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 20, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

export const ArrowUpRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 17L17 7M8 7h9v9" />
  </Svg>
);

export const ArrowUp = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </Svg>
);

export const Menu = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const Close = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);

export const Mail = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="M3.6 7.2L12 13l8.4-5.8" />
  </Svg>
);

export const Phone = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6.4 3.5h2.9l1.5 3.9-2.1 1.5a11.4 11.4 0 0 0 5.4 5.4l1.5-2.1 3.9 1.5v2.9a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.4 5.7a2 2 0 0 1 2-2.2z" />
  </Svg>
);

export const MapPin = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.4" />
  </Svg>
);

export const LinkedIn = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
    <path d="M8 10.5v6M8 7.6v.01M12 16.5v-6M12 12.3c0-1.1.9-2 2-2s2 .9 2 2v4.2" />
  </Svg>
);

export const Scholar = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 9l9-4 9 4-9 4-9-4z" />
    <path d="M7 11.3V16c0 1.5 2.2 2.6 5 2.6s5-1.1 5-2.6v-4.7" />
    <path d="M21 9v5" />
  </Svg>
);

export const External = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14 4h6v6M20 4l-8.5 8.5M18 14.5V19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4.5" />
  </Svg>
);

export const Search = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M20 20l-4.4-4.4" />
  </Svg>
);

export const ChevronDown = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 9.5l6 6 6-6" />
  </Svg>
);

export const Check = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12.5l4.5 4.5L19 7" />
  </Svg>
);

export const Flask = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9.5 3h5M10.5 3v5.2L5.9 16.6A2.4 2.4 0 0 0 8 20.5h8a2.4 2.4 0 0 0 2.1-3.9L13.5 8.2V3" />
    <path d="M7.6 15h8.8" />
  </Svg>
);

export const Atom = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="2" />
    <ellipse cx="12" cy="12" rx="9.5" ry="4" />
    <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(120 12 12)" />
  </Svg>
);

export const Microscope = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 3h6M10.5 3v5.2L5.9 15.2A2 2 0 0 0 7.5 18.4h5a2 2 0 0 0 1.7-3.2L13.5 8.2V3" />
    <path d="M8 21.4h8" />
    <path d="M11 12.5h2" />
  </Svg>
);

export const Layers = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.5l8.5 4.5L12 12.5 3.5 8 12 3.5z" />
    <path d="M4.5 12.5l7.5 4 7.5-4" />
    <path d="M4.5 16.5l7.5 4 7.5-4" />
  </Svg>
);

export const Drop = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.2s6.2 6.6 6.2 10.6A6.2 6.2 0 0 1 5.8 13.8C5.8 9.8 12 3.2 12 3.2z" />
  </Svg>
);

export const Bolt = (p: IconProps) => (
  <Svg {...p}>
    <path d="M13.4 3L5.5 13.2h5l-1 7.8L18.5 10h-5l-.1-7z" />
  </Svg>
);

export const Expand = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 4H4v5M15 4h5v5M20 15v5h-5M4 15v5h5" />
  </Svg>
);

export const Upload = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 16V4M7 9l5-5 5 5M4 16v4h16v-4" />
  </Svg>
);

export const Download = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 4v12M7 11l5 5 5-5M4 17v3h16v-3" />
  </Svg>
);

export const Handshake = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 11l4-3 5 3.5 5-3.5 4 3" />
    <path d="M3 11v5l4 3 3-2.5M21 11v5l-4 3-3-2.5" />
    <path d="M10.5 12.2l3 2.4" />
  </Svg>
);
