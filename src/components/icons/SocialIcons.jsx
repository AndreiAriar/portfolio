// lucide-react removed brand/logo icons in recent versions, so these are
// small hand-drawn stand-ins kept in the same stroke style (24x24,
// strokeWidth 2, round caps) so they sit visually consistent next to
// any remaining lucide icons used elsewhere (Mail, Send, MessageCircle).

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function GithubIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} {...base} {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 1.3 5.4 1.6 5.4 1.6a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 8c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V20" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7" y1="10" x2="7" y2="17" />
      <circle cx="7" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      <line x1="11.5" y1="17" x2="11.5" y2="10" />
      <path d="M11.5 13c0-1.7 1-3 2.5-3s2.5 1.3 2.5 3v4" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} {...base} {...props}>
      <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}