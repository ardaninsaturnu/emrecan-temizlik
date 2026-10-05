import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2.5 2.5 0 0 1-2.8 2.5C10.4 19.2 4.8 13.6 4 5.8A2.5 2.5 0 0 1 6.5 3Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.5} {...props}>
      <path d="M3.5 20.5 5 16.3A8.2 8.2 0 1 1 8.1 19.4l-4.6 1.1Z" />
      <path d="M9 9.3c.3 2.6 3 5.3 5.6 5.6.7.1 1.4-.5 1.4-1.2v-.6l-1.9-.8-1 1a7 7 0 0 1-2.5-2.5l1-1-.8-1.9h-.6c-.7 0-1.3.7-1.2 1.4Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} width={14} height={14} strokeWidth={2} {...props}>
      <path d="m4.5 12.5 4.5 4.5 10-11" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5.5c0 4.2 2.9 8.1 7 9.5 4.1-1.4 7-5.3 7-9.5V6l-7-3Z" />
      <path d="m9.2 12 2 2 3.6-4" />
    </svg>
  );
}

export function TeamIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6.2a3 3 0 0 1 0 5.6" />
      <path d="M17.5 14.6a5.5 5.5 0 0 1 3 4.9" />
    </svg>
  );
}

export function SprayIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 8h5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V8Z" />
      <path d="M11 8V5.5A1.5 1.5 0 0 1 12.5 4H14" />
      <path d="M19 6h.01M21 9h.01M19 12h.01" />
    </svg>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h7l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M13 3v5h5" />
      <path d="M8.5 13h7M8.5 16.5h4.5" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} width={17} height={17} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <path d="M16.8 7.2h.01" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} width={17} height={17} {...props}>
      <path d="M14.5 8.5h2.2M14.5 8.5V6.8c0-1 .6-1.8 1.7-1.8h1V2.4h-2c-2.2 0-3.6 1.4-3.6 3.8v2.3H9.3v2.7h2.3V21h2.9v-9.8h2.2l.4-2.7" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base} width={17} height={17} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <path d="M8 10.5V16M8 7.6h.01M12 16v-3.2a1.8 1.8 0 0 1 3.6 0V16" />
    </svg>
  );
}

/** Logo işareti: bir çekpas hareketini soyutlayan yaprak biçimi. */
export function BrandMark({ size = 34, ...props }: IconProps & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M17 2.5c8 0 14.5 6.5 14.5 14.5S25 31.5 17 31.5 2.5 25 2.5 17 9 2.5 17 2.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M9.5 21.8c4.8.6 8.7-1 11.6-4.8 2.9-3.8 3.7-7.6 2.4-11.4-5 1.5-8.4 3.7-10.2 6.6-1.8 2.9-3.1 6.1-3.8 9.6Z"
        fill="currentColor"
      />
      <path d="M9.4 27c1.5-4 3.6-7.5 6.4-10.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
