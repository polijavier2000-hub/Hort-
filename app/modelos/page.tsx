import type { Metadata } from "next";
import ModelosClient from "./ModelosClient";

export const metadata: Metadata = {
  title: "Modelos | Hort!",
  description:
    "Hort! 6 y Hort! 10: huertos urbanos automáticos con IA, pensados para funcionar solos.",
};

export default function ModelosPage() {
  return <ModelosClient />;
}
