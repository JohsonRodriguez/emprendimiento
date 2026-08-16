import { redirect } from "next/navigation";
import { assetPath } from "@/lib/assets";

export default function Home() { redirect(`${assetPath("/en")}/`); }
