import { WavyBackground } from "./ui/wavy-background";


export default function Header() {
    return (
      <WavyBackground
        className="max-w-4xl mx-auto py-20"
        containerClassName="h-[400px]" // Control height here
      >
        <p className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center leading-tight">
          Crypto Guard AI, AI Smart Contract Auditor
        </p>
        <p className="text-base md:text-lg lg:text-xl mt-4 text-white font-light text-center">
          Leverage the power of AI to audit your smart contracts, Powered by {" "}
          <span className="text-orange-500 font-bold">SambaNova.AI Cloud</span>
        </p>
      </WavyBackground>
    );
  }
  
