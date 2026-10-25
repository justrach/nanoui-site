import { Hero } from "@/components/home/Hero";
import { NativeUI } from "@/components/home/NativeUI";
import { Testing, WebPages } from "@/components/home/PagesAndTests";
import { Performance, Platforms } from "@/components/home/Platforms";
import { Apps, GetStarted } from "@/components/home/Apps";

export default function Home() {
  return (
    <>
      <Hero />
      <NativeUI />
      <WebPages />
      <Testing />
      <Platforms />
      <Performance />
      <Apps />
      <GetStarted />
    </>
  );
}
