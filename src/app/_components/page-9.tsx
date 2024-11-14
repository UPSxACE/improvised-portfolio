import { Badge } from "@/components/ui/badge";
import Layout from "./layout";

const project = {
  title: "Staking Smart Contract",
  image: "/sc/solana.webp",
  date: "October, 2024",
  text: `Smart contract created with the Rust framework: Anchor. I didn't bother learning all the basics of rust, but the framework is really easy to use, as long as you study how the Solana blockchain works. I learned a lot studying the blockchain.`,
  badges: (
    <>
      <Badge className="!bg-orange-800 text-white" variant="secondary">
        Rust
      </Badge>
      <Badge className="!bg-pink-700 text-white" variant="secondary">
        Web3
      </Badge>
    </>
  ),
};

export default function Page9() {
  return (
    <div className="flex flex-col justify-center h-full relative w-full">
      <div className="h-full w-full absolute overflow-y-auto">
        <Layout {...project} />
      </div>
    </div>
  );
}
