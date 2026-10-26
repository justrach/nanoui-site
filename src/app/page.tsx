import { Hero } from "@/components/home/Hero";
import { MobileApps } from "@/components/home/MobileApps";
import { Apps, GetStarted } from "@/components/home/Apps";

export default function Home() {
  return (
    <>
      <Hero />
      <Apps />
      <MobileApps />
      <GetStarted />
    </>
  );
}
