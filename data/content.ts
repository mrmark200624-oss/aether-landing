export const token = {
  name: "Aether Protocol",
  symbol: "AETH",
  tagline: "Liquidity for the on-chain economy",
  description:
    "Aether is a next-generation liquidity layer that routes value across chains in milliseconds — permissionless, low-fee and MEV-resistant by design.",
  totalSupply: "1,000,000,000",
  chain: "Ethereum · Base · Solana",
  contract: "0x4E7A…9c21",
};

export const stats = [
  { label: "Total Value Locked", value: "$482M" },
  { label: "Active Wallets", value: "214K" },
  { label: "Chains Supported", value: "12" },
  { label: "Avg. Settlement", value: "0.4s" },
];

export const features = [
  {
    title: "Cross-chain by default",
    body: "Move liquidity between 12+ networks through a single unified router. No wrapped assets, no bridges you have to trust.",
    icon: "orbit",
  },
  {
    title: "Sub-second finality",
    body: "Our intent-based settlement engine matches and executes swaps in under half a second, with gas abstracted away from the user.",
    icon: "bolt",
  },
  {
    title: "Owned by the community",
    body: "Every protocol parameter — fees, emissions, treasury spend — is governed on-chain by $AETH holders through quadratic voting.",
    icon: "shield",
  },
];

export type Allocation = {
  label: string;
  percent: number;
  color: string;
  detail: string;
  cliff: string;
};

export const allocations: Allocation[] = [
  { label: "Community & Airdrop", percent: 30, color: "#22d3ee", detail: "300,000,000 AETH", cliff: "Unlocked at TGE" },
  { label: "Ecosystem Fund", percent: 25, color: "#38bdf8", detail: "250,000,000 AETH", cliff: "48-month linear" },
  { label: "Core Team", percent: 15, color: "#a855f7", detail: "150,000,000 AETH", cliff: "12m cliff · 36m vest" },
  { label: "Liquidity", percent: 12, color: "#f0abfc", detail: "120,000,000 AETH", cliff: "Unlocked at TGE" },
  { label: "Treasury", percent: 10, color: "#818cf8", detail: "100,000,000 AETH", cliff: "DAO controlled" },
  { label: "Advisors", percent: 8, color: "#c4b5fd", detail: "80,000,000 AETH", cliff: "6m cliff · 24m vest" },
];

export type RoadmapItem = {
  quarter: string;
  title: string;
  status: "done" | "active" | "upcoming";
  points: string[];
};

export const roadmap: RoadmapItem[] = [
  {
    quarter: "Q1 2026",
    title: "Genesis",
    status: "done",
    points: ["Mainnet launch on Ethereum & Base", "$AETH token generation event", "Community airdrop — Season 1"],
  },
  {
    quarter: "Q2 2026",
    title: "Expansion",
    status: "active",
    points: ["Solana & Arbitrum integration", "Intent-based settlement v2", "First DAO governance vote"],
  },
  {
    quarter: "Q3 2026",
    title: "Liquidity Engine",
    status: "upcoming",
    points: ["Concentrated liquidity vaults", "Native fiat on-ramp", "SDK & public API launch"],
  },
  {
    quarter: "Q4 2026",
    title: "Sovereignty",
    status: "upcoming",
    points: ["Full protocol decentralization", "Cross-chain governance", "12+ chains supported"],
  },
];

export type Member = {
  name: string;
  role: string;
  initials: string;
  socials: { x?: string; in?: string };
};

export const team: Member[] = [
  { name: "Nadia Vole", role: "Co-Founder & CEO", initials: "NV", socials: { x: "#", in: "#" } },
  { name: "Kenji Aramaki", role: "Co-Founder & CTO", initials: "KA", socials: { x: "#", in: "#" } },
  { name: "Lucia Márquez", role: "Head of Protocol", initials: "LM", socials: { x: "#", in: "#" } },
  { name: "Deren Osei", role: "Lead Cryptographer", initials: "DO", socials: { x: "#", in: "#" } },
];

export const socials = [
  { label: "X / Twitter", href: "#", icon: "x" },
  { label: "Discord", href: "#", icon: "discord" },
  { label: "Telegram", href: "#", icon: "telegram" },
  { label: "GitHub", href: "#", icon: "github" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
];
