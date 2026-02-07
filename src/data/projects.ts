export interface Project {
  name: string;
  description: string;
  repo?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    name: "vault",
    description: "Multi-chain portfolio tracker. 11 chains, real-time prices, alerts, dark mode.",
    repo: "https://github.com/just-frame/chainpulse",
    demo: "https://chainpulsetest1.vercel.app",
  },
  {
    name: "chain-hunter",
    description: "Solana memecoin tracker with real-time rug pull analysis. PumpFun, Helius, Jupiter sources.",
    repo: "https://github.com/just-frame/token_hunter",
  },
  // Uncomment if you want to include PRD Agent
  // {
  //   name: "prd-agent",
  //   description: "Real-time code validation against PRD requirements. Security-focused checks.",
  //   repo: "https://github.com/yourusername/prd-agent",
  // },
];
