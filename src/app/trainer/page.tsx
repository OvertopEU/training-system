import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Apple,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Dumbbell,
  Flame,
  Globe2,
  HeartPulse,
  Monitor,
  ShieldCheck,
  Target,
  Timer,
  Trophy,
  Utensils,
  Wallet
} from "lucide-react";
import { Section } from "@/components/section";
import { TrainerBookingForm } from "@/components/trainer-booking-form";

type Lang = "bg" | "en";

export const metadata: Metadata = {
  applicationName: "TS",
  title: {
    absolute: "TS | Training System"
  },
  description: "Personal training, boxing, online fitness guidance, nutrition plans and booking.",
  alternates: {
    canonical: "/",
    languages: {
      bg: "/",
      en: "/trainer?lang=en"
    }
  },
  openGraph: {
    title: "TS | Training System",
    description: "Personal training, boxing, online fitness guidance, nutrition plans and booking.",
    url: "/",
    siteName: "TS",
    type: "website",
    images: [
      {
        url: "/trainer/coach-boxer-cover.jpg",
        width: 1080,
        height: 1350,
        alt: "TS personal trainer boxing coach"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TS | Training System",
    description: "Personal training, boxing, online fitness guidance, nutrition plans and booking.",
    images: ["/trainer/coach-boxer-cover.jpg"]
  },
  icons: {
    icon: "/trainer-favicon.svg"
  }
};

const icons = {
  boxing: ShieldCheck,
  online: Monitor,
  nutrition: Utensils,
  strength: Dumbbell,
  conditioning: HeartPulse,
  instructions: ClipboardList,
  assessment: Target,
  plan: CalendarCheck,
  progress: Trophy,
  deposit: Wallet,
  payment: CreditCard,
  confirm: CheckCircle2
};

const promoImages = {
  cover: "/trainer/coach-boxer-cover.jpg",
  solo: "/trainer/coach-flex.jpg",
  groups: [
    "/trainer/group-promo-bags.jpg",
    "/trainer/group-promo-team.jpg",
    "/trainer/group-ring-promo.jpg",
    "/trainer/group-ring-class.jpg"
  ]
};

const content = {
  bg: {
    langLabel: "Ð•Ð·Ð¸Ðº",
    nav: [
      ["Ð—Ð° Ð¼ÐµÐ½", "about"],
      ["Ð£ÑÐ»ÑƒÐ³Ð¸", "services"],
      ["Ð‘ÑƒÑƒÐºÐ¸Ð½Ð³", "booking"],
      ["ÐŸÐ»Ð°Ñ‰Ð°Ð½Ðµ", "payment"]
    ],
    headerCta: "Ð—Ð°Ð¿Ð°Ð·Ð¸",
    heroEyebrow: "Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ¸, Ð±Ð¾ÐºÑ Ð¸ Ð¿Ñ€Ð°Ð²Ð¸Ð»Ð½Ð¾ Ñ…Ñ€Ð°Ð½ÐµÐ½Ðµ",
    heroTitle: "ÐŸÐµÑ€ÑÐ¾Ð½Ð°Ð»ÐµÐ½ Ð¿Ð»Ð°Ð½ Ð·Ð° Ñ‚ÑÐ»Ð¾, ÑÐ¸Ð»Ð° Ð¸ Ð´Ð¸ÑÑ†Ð¸Ð¿Ð»Ð¸Ð½Ð°",
    heroText: "Ð¡Ð°Ð¼Ð¾ÑÑ‚Ð¾ÑÑ‚ÐµÐ»Ð½Ð° ÑÐ¸ÑÑ‚ÐµÐ¼Ð° Ð·Ð° Ð»Ð¸Ñ‡Ð½Ð¸ Ð±Ð¾ÐºÑ Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ¸, Ð¾Ð½Ð»Ð°Ð¹Ð½ Ñ„Ð¸Ñ‚Ð½ÐµÑ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ð¸, Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÐµÐ»Ð½Ð¸ Ñ€ÐµÐ¶Ð¸Ð¼Ð¸, Ð±ÑƒÑƒÐºÐ¸Ð½Ð³, Ð´ÐµÐ¿Ð¾Ð·Ð¸Ñ‚ Ð¸ Ð¿Ð»Ð°Ñ‰Ð°Ð½Ðµ.",
    heroPrimary: "Ð—Ð°Ð¿Ð°Ð·Ð¸ ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ",
    heroSecondary: "Ð’Ð¸Ð¶ ÑƒÑÐ»ÑƒÐ³Ð¸Ñ‚Ðµ",
    focusTitle: "Ð‘Ð¾ÐºÑ + Ñ…Ñ€Ð°Ð½ÐµÐ½Ðµ",
    stats: [
      { value: "12+", label: "ÑÐµÐ´Ð¼Ð¸Ñ‡Ð½Ð¸ ÑÐµÑÐ¸Ð¸" },
      { value: "3", label: "Ð½Ð¸Ð²Ð° Ð½Ð° Ð½Ð°Ñ‚Ð¾Ð²Ð°Ñ€Ð²Ð°Ð½Ðµ" },
      { value: "24/7", label: "Ð¾Ð½Ð»Ð°Ð¹Ð½ Ð½Ð°ÑÐ¾ÐºÐ¸" }
    ],
    focusItems: ["Ð¢ÐµÑ…Ð½Ð¸ÐºÐ° Ð¿Ñ€ÐµÐ´Ð¸ Ñ‚ÐµÐ¶ÐµÑÑ‚", "ÐžÐ½Ð»Ð°Ð¹Ð½ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ð¸"],
    coverTitle: "Ð¢Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ¸ Ð¿Ð¾ Ð±Ð¾ÐºÑ",
    aboutEyebrow: "about",
    aboutTitle: "Ð—Ð° Ñ‚Ñ€ÐµÐ½ÑŒÐ¾Ñ€Ð° Ð¸ Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÑŠÑ‡Ð½Ð°Ñ‚Ð° Ð¾Ð±Ñ‰Ð½Ð¾ÑÑ‚",
    soloTitle: "Ð›Ð¸Ñ‡ÐµÐ½ Ð¿Ð¾Ð´Ñ…Ð¾Ð´",
    soloText: "20+ Ð³Ð¾Ð´Ð¸Ð½Ð¸ Ð¾Ð¿Ð¸Ñ‚ Ð² Ð±Ð¾ÐºÑÐ°, Ð¿Ð¾Ð»ÑƒÐ¿Ñ€Ð¾Ñ„ÐµÑÐ¸Ð¾Ð½Ð°Ð»ÐµÐ½ Ð¿ÑŠÑ‚ Ð´Ð¾ Ð¿Ñ€Ð¾Ñ„ÐµÑÐ¸Ð¾Ð½Ð°Ð»ÐµÐ½ Ñ€Ð¸Ð½Ð³, Ñ€ÐµÐ´Ð¸Ñ†Ð° Ð¿Ð¾ÑÑ‚Ð¸Ð¶ÐµÐ½Ð¸Ñ Ð¸ Ð¿Ð¾Ð±ÐµÐ´Ð¸ Ñ Ð¼ÐµÐ¶Ð´ÑƒÐ½Ð°Ñ€Ð¾Ð´ÐµÐ½ Ð¾Ð¿Ð¸Ñ‚ Ð² Ð½Ð°Ð´ 50 Ð´ÑŠÑ€Ð¶Ð°Ð²Ð¸. Ð’Ñ‚Ð¾Ñ€Ð¸ ÑÐ¿Ð¾Ñ€Ñ‚: Ð»ÐµÐºÐ° Ð°Ñ‚Ð»ÐµÑ‚Ð¸ÐºÐ° Ñ 8 Ð½Ð°Ñ†Ð¸Ð¾Ð½Ð°Ð»Ð½Ð¸ Ñ‚Ð¸Ñ‚Ð»Ð¸ Ð¸ ÐµÐ²Ñ€Ð¾Ð¿ÐµÐ¹ÑÐºÐ° ÐºÐ²Ð¾Ñ‚Ð°. Ð”Ð¾Ð¿ÑŠÐ»Ð½Ð¸Ñ‚ÐµÐ»Ð½Ð¾: ÑÐºÐ¸ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐºÑ‚Ð¾Ñ€ Ð¸ Ð·Ð°Ð²ÑŠÑ€ÑˆÐµÐ½Ð° ÐÐ°Ñ†Ð¸Ð¾Ð½Ð°Ð»Ð½Ð° ÑÐ¿Ð¾Ñ€Ñ‚Ð½Ð° Ð°ÐºÐ°Ð´ÐµÐ¼Ð¸Ñ Ñ Ð¿ÑŠÐ»Ð½Ð¾ Ð¾Ñ‚Ð»Ð¸Ñ‡Ð¸Ðµ, Ð¿ÑŠÑ€Ð²Ð¾ Ð¼ÑÑÑ‚Ð¾ Ð¸ Ð½Ð°Ð¹-Ð²Ð¸ÑÐ¾Ðº ÑƒÑÐ¿ÐµÑ….",
    groupTitle: "Ð“Ñ€ÑƒÐ¿Ð¾Ð²Ð¸ Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ¸",
    groupText: "Ð¡Ñ€ÐµÐ´Ð° Ð·Ð° Ñ…Ð¾Ñ€Ð°, ÐºÐ¾Ð¸Ñ‚Ð¾ Ð¸ÑÐºÐ°Ñ‚ Ð´Ð²Ð¸Ð¶ÐµÐ½Ð¸Ðµ, Ð±Ð¾ÐºÑ Ñ‚ÐµÑ…Ð½Ð¸ÐºÐ°, Ð¼Ð¾Ñ‚Ð¸Ð²Ð°Ñ†Ð¸Ñ Ð¸ Ð¿Ð¾ÑÑ‚Ð¾ÑÐ½ÑÑ‚Ð²Ð¾ Ð² Ð¾Ð±Ñ‰ Ñ€Ð¸Ñ‚ÑŠÐ¼.",
    groupBadge: "group training",
    servicesEyebrow: "ÑƒÑÐ»ÑƒÐ³Ð¸",
    servicesTitle: "ÐžÑÐ½Ð¾Ð²Ð½Ð¸ Ð½Ð°Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ñ",
    services: [
      {
        icon: icons.boxing,
        title: "Ð¢Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ¸ Ð¿Ð¾ Ð±Ð¾ÐºÑ",
        text: "Ð˜Ð½Ð´Ð¸Ð²Ð¸Ð´ÑƒÐ°Ð»Ð½Ð° Ñ€Ð°Ð±Ð¾Ñ‚Ð° Ð²ÑŠÑ€Ñ…Ñƒ ÑÑ‚Ð¾Ð¹ÐºÐ°, ÑƒÐ´Ð°Ñ€Ð¸, Ð·Ð°Ñ‰Ð¸Ñ‚Ð°, Ð´Ð²Ð¸Ð¶ÐµÐ½Ð¸Ðµ, Ñ€ÐµÐ°ÐºÑ†Ð¸Ñ Ð¸ ÐºÐ¾Ð½Ð´Ð¸Ñ†Ð¸Ñ.",
        points: ["Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð½Ð¸ Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ¸", "Ð³Ñ€ÑƒÐ¿Ð¾Ð²Ð¸ Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ¸", "Ð¿Ð¾Ð´Ð³Ð¾Ñ‚Ð¾Ð²ÐºÐ¸ Ð·Ð° ÑÑŠÑÑ‚ÐµÐ·Ð°Ð½Ð¸Ðµ", "Ñ‚ÐµÑ…Ð½Ð¸ÐºÐ° Ð¸ ÐºÐ¾Ð½Ð´Ð¸Ñ†Ð¸Ð¾Ð½Ð½Ð¸ Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ¸"]
      },
      {
        icon: icons.online,
        title: "ÐžÐ½Ð»Ð°Ð¹Ð½ Ñ„Ð¸Ñ‚Ð½ÐµÑ Ñ‚Ñ€ÐµÐ½ÑŒÐ¾Ñ€",
        text: "ÐŸÐ¾Ð»ÑƒÑ‡Ð°Ð²Ð°Ñˆ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ð¸, ÑÐµÐ´Ð¼Ð¸Ñ‡ÐµÐ½ Ð¿Ð»Ð°Ð½ Ð¸ ÐºÐ¾Ñ€ÐµÐºÑ†Ð¸Ð¸ Ð¾Ð½Ð»Ð°Ð¹Ð½, Ð±ÐµÐ· Ð·Ð°Ð´ÑŠÐ»Ð¶Ð¸Ñ‚ÐµÐ»Ð½Ð¾ Ð¿Ñ€Ð¸ÑÑŠÑÑ‚Ð²Ð¸Ðµ Ð² Ð·Ð°Ð»Ð°.",
        points: ["ÑƒÐ¿Ñ€Ð°Ð¶Ð½ÐµÐ½Ð¸Ñ Ñ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ð¸", "ÑÐµÐ´Ð¼Ð¸Ñ‡ÐµÐ½ Ð³Ñ€Ð°Ñ„Ð¸Ðº"]
      },
      {
        icon: icons.nutrition,
        title: "Ð›Ð¸Ñ‡ÐµÐ½ Ð´Ð¸ÐµÑ‚Ð¸Ñ‡ÐµÐ½ Ñ€ÐµÐ¶Ð¸Ð¼",
        text: "ÐŸÑ€Ð°Ð²Ð¸Ð»Ð½Ð¾ Ñ…Ñ€Ð°Ð½ÐµÐ½Ðµ ÑÐ¿Ð¾Ñ€ÐµÐ´ Ñ†ÐµÐ»Ñ‚Ð°, ÐµÐ¶ÐµÐ´Ð½ÐµÐ²Ð¸ÐµÑ‚Ð¾, Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð¸ÑÑ‚Ð° Ð¸ Ñ€ÐµÐ°Ð»Ð½Ð¸Ñ‚Ðµ Ñ‚Ð¸ Ð½Ð°Ð²Ð¸Ñ†Ð¸.",
        points: ["ÐºÐ°Ð»Ð¾Ñ€Ð¸Ð¸ Ð¸ Ð¼Ð°ÐºÑ€Ð¾ÑÐ¸", "Ð¿Ñ€Ð¸Ð¼ÐµÑ€Ð½Ð¸ Ð¼ÐµÐ½ÑŽÑ‚Ð°", "ÑÐµÐ´Ð¼Ð¸Ñ‡Ð½Ð¸ ÐºÐ¾Ñ€ÐµÐºÑ†Ð¸Ð¸"]
      }
    ],
    programsEyebrow: "Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¸",
    programsTitle: "Ð ÐµÐ¶Ð¸Ð¼Ð¸ ÑÐ¿Ð¾Ñ€ÐµÐ´ Ñ†ÐµÐ»Ñ‚Ð°",
    programs: [
      {
        icon: icons.strength,
        title: "Ð¡Ð¸Ð»Ð° Ð¸ Ñ„Ð¾Ñ€Ð¼Ð°",
        text: "Ð¡Ñ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ð¸Ñ€Ð°Ð½Ð¸ ÑÐ¸Ð»Ð¾Ð²Ð¸ Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ¸ Ð·Ð° Ð¼ÑƒÑÐºÑƒÐ»ÐµÐ½ Ñ‚Ð¾Ð½ÑƒÑ, ÑÑ‚Ð°Ð±Ð¸Ð»Ð½Ð¾ÑÑ‚ Ð¸ Ð²Ð¸Ð´Ð¸Ð¼ Ð¿Ñ€Ð¾Ð³Ñ€ÐµÑ Ð±ÐµÐ· Ñ…Ð°Ð¾Ñ‚Ð¸Ñ‡Ð½Ð¾ Ð½Ð°Ñ‚Ð¾Ð²Ð°Ñ€Ð²Ð°Ð½Ðµ.",
        details: ["3-5 Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ¸ ÑÐµÐ´Ð¼Ð¸Ñ‡Ð½Ð¾", "Ð¿Ñ€Ð¾Ð³Ñ€ÐµÑÐ¸Ð²Ð½Ð¾ Ð½Ð°Ñ‚Ð¾Ð²Ð°Ñ€Ð²Ð°Ð½Ðµ", "ÐºÐ¾Ñ€ÐµÐºÑ†Ð¸Ñ Ð½Ð° Ñ‚ÐµÑ…Ð½Ð¸ÐºÐ°"]
      },
      {
        icon: icons.conditioning,
        title: "Ð˜Ð·Ð´Ñ€ÑŠÐ¶Ð»Ð¸Ð²Ð¾ÑÑ‚ Ð¸ ÐºÐ¾Ð½Ð´Ð¸Ñ†Ð¸Ñ",
        text: "Ð¤ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»Ð½Ð¸ ÑÐµÑÐ¸Ð¸ Ñ ÐºÐ°Ñ€Ð´Ð¸Ð¾, Ð¼Ð¾Ð±Ð¸Ð»Ð½Ð¾ÑÑ‚ Ð¸ Ñ€Ð°Ð±Ð¾Ñ‚Ð° Ð² Ð¸Ð½Ñ‚ÐµÑ€Ð²Ð°Ð»Ð¸ Ð·Ð° Ð¿Ð¾-Ð´Ð¾Ð±Ñ€Ð° ÐµÐ½ÐµÑ€Ð³Ð¸Ñ Ð¸ ÑƒÑÑ‚Ð¾Ð¹Ñ‡Ð¸Ð²Ð¾ÑÑ‚.",
        details: ["HIIT Ð±Ð»Ð¾ÐºÐ¾Ð²Ðµ", "Ð°ÐµÑ€Ð¾Ð±Ð½Ð° Ð±Ð°Ð·Ð°", "Ð²ÑŠÐ·ÑÑ‚Ð°Ð½Ð¾Ð²ÑÐ²Ð°Ð½Ðµ"]
      },
      {
        icon: icons.instructions,
        title: "ÐžÐ½Ð»Ð°Ð¹Ð½ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ð¸",
        text: "ÐŸÐ»Ð°Ð½ Ñ ÑÑÐ½Ð¾ Ð¿Ð¾Ð´Ñ€ÐµÐ´ÐµÐ½Ð¸ ÑƒÐ¿Ñ€Ð°Ð¶Ð½ÐµÐ½Ð¸Ñ, ÑÐµÑ€Ð¸Ð¸, Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€ÐµÐ½Ð¸Ñ, Ñ‚ÐµÐ¼Ð¿Ð¾ Ð¸ Ð±ÐµÐ»ÐµÐ¶ÐºÐ¸ Ð·Ð° Ð¸Ð·Ð¿ÑŠÐ»Ð½ÐµÐ½Ð¸Ðµ.",
        details: ["Ð²Ð¸Ð´ÐµÐ¾ Ð½Ð°ÑÐ¾ÐºÐ¸", "ÑÐµÐ´Ð¼Ð¸Ñ‡ÐµÐ½ Ð¾Ñ‚Ñ‡ÐµÑ‚", "ÐºÐ¾Ñ€ÐµÐºÑ†Ð¸Ð¸ Ð¾Ð½Ð»Ð°Ð¹Ð½"]
      }
    ],
    bookingEyebrow: "Ð±ÑƒÑƒÐºÐ¸Ð½Ð³",
    bookingTitle: "Ð—Ð°Ð¿Ð¸ÑÐ²Ð°Ð½Ðµ Ð·Ð° Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ° Ð¸Ð»Ð¸ Ð¾Ð½Ð»Ð°Ð¹Ð½ Ñ€ÐµÐ¶Ð¸Ð¼",
    bookingCardTitle: "Ð˜Ð·Ð±ÐµÑ€Ð¸ ÑƒÑÐ»ÑƒÐ³Ð°, Ñ†ÐµÐ» Ð¸ ÑƒÐ´Ð¾Ð±ÐµÐ½ Ð³Ñ€Ð°Ñ„Ð¸Ðº.",
    bookingCardText: "Ð‘ÑƒÑƒÐºÐ¸Ð½Ð³ ÑÐµÐºÑ†Ð¸ÑÑ‚Ð° Ðµ Ð¾Ñ‚Ð´ÐµÐ»Ð½Ð° Ð·Ð° Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÑŠÑ‡Ð½Ð¸Ñ‚Ðµ ÑƒÑÐ»ÑƒÐ³Ð¸: Ð±Ð¾ÐºÑ, Ð¾Ð½Ð»Ð°Ð¹Ð½ Ñ„Ð¸Ñ‚Ð½ÐµÑ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ð¸ Ð¸Ð»Ð¸ Ð´Ð¸ÐµÑ‚Ð¸Ñ‡ÐµÐ½ Ñ€ÐµÐ¶Ð¸Ð¼. Ð¡Ð»ÐµÐ´ Ð·Ð°ÑÐ²ÐºÐ° ÑÐµ Ð¿Ð¾Ñ‚Ð²ÑŠÑ€Ð¶Ð´Ð°Ð²Ð° Ñ‡Ð°Ñ, Ð´ÐµÐ¿Ð¾Ð·Ð¸Ñ‚ Ð¸ Ð½Ð°Ñ‡Ð¸Ð½ Ð½Ð° ÐºÐ¾Ð¼ÑƒÐ½Ð¸ÐºÐ°Ñ†Ð¸Ñ.",
    bookingItems: ["ÐŸÑŠÑ€Ð²Ð° ÐºÐ¾Ð½ÑÑƒÐ»Ñ‚Ð°Ñ†Ð¸Ñ", "Ð˜Ð½Ð´Ð¸Ð²Ð¸Ð´ÑƒÐ°Ð»Ð½Ð° Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ°", "ÐžÐ½Ð»Ð°Ð¹Ð½ Ñ€ÐµÐ¶Ð¸Ð¼", "Ð¥Ñ€Ð°Ð½Ð¸Ñ‚ÐµÐ»ÐµÐ½ Ð¿Ð»Ð°Ð½"],
    form: {
      name: "Ð˜Ð¼Ðµ",
      namePlaceholder: "Ð¢Ð²Ð¾ÐµÑ‚Ð¾ Ð¸Ð¼Ðµ",
      contact: "Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½ Ð¸Ð»Ð¸ Ð¸Ð¼ÐµÐ¹Ð»",
      contactPlaceholder: "ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚",
      service: "Ð£ÑÐ»ÑƒÐ³Ð°",
      servicePlaceholder: "Ð˜Ð·Ð±ÐµÑ€Ð¸ ÑƒÑÐ»ÑƒÐ³Ð°",
      serviceOptions: ["Ð¢Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ¸ Ð¿Ð¾ Ð±Ð¾ÐºÑ", "ÐžÐ½Ð»Ð°Ð¹Ð½ Ñ„Ð¸Ñ‚Ð½ÐµÑ Ñ‚Ñ€ÐµÐ½ÑŒÐ¾Ñ€", "Ð›Ð¸Ñ‡ÐµÐ½ Ð´Ð¸ÐµÑ‚Ð¸Ñ‡ÐµÐ½ Ñ€ÐµÐ¶Ð¸Ð¼"],
      day: "ÐŸÑ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½ Ð´ÐµÐ½",
      dayPlaceholder: "ÐÐ°Ð¿Ñ€Ð¸Ð¼ÐµÑ€: Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº",
      goal: "Ð¦ÐµÐ»",
      goalPlaceholder: "Ð¡Ð¸Ð»Ð°, Ð¾Ñ‚ÑÐ»Ð°Ð±Ð²Ð°Ð½Ðµ, Ð±Ð¾ÐºÑ Ñ‚ÐµÑ…Ð½Ð¸ÐºÐ°, Ñ…Ñ€Ð°Ð½ÐµÐ½Ðµ...",
      submit: "Ð—Ð°Ð¿Ð°Ð·Ð¸ Ð¸ Ð¿Ð»Ð°Ñ‚Ð¸ Ð´ÐµÐ¿Ð¾Ð·Ð¸Ñ‚"
    },
    nutritionEyebrow: "Ñ…Ñ€Ð°Ð½ÐµÐ½Ðµ",
    nutritionTitle: "Ð›Ð¸Ñ‡ÐµÐ½ Ð´Ð¸ÐµÑ‚Ð¸Ñ‡ÐµÐ½ Ñ€ÐµÐ¶Ð¸Ð¼ Ð·Ð° Ð¿Ñ€Ð°Ð²Ð¸Ð»Ð½Ð¾ Ñ…Ñ€Ð°Ð½ÐµÐ½Ðµ",
    nutritionCardTitle: "Ð‘ÐµÐ· ÐºÑ€Ð°Ð¹Ð½Ð¾ÑÑ‚Ð¸. Ð¡ ÑÑÐ½Ð¸ Ð¿Ñ€Ð°Ð²Ð¸Ð»Ð°.",
    nutritionCardText: "Ð ÐµÐ¶Ð¸Ð¼ÑŠÑ‚ ÑÐµ Ð¸Ð·Ð³Ñ€Ð°Ð¶Ð´Ð° Ð¾ÐºÐ¾Ð»Ð¾ Ñ…Ñ€Ð°Ð½Ð¸Ñ‚Ðµ, ÐºÐ¾Ð¸Ñ‚Ð¾ Ð¼Ð¾Ð¶ÐµÑˆ Ð´Ð° ÐºÑƒÐ¿Ð¸Ñˆ, Ð¿Ñ€Ð¸Ð³Ð¾Ñ‚Ð²Ð¸Ñˆ Ð¸ Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñˆ. Ð¦ÐµÐ»Ñ‚Ð° Ðµ ÐºÐ¾Ð½Ñ‚Ñ€Ð¾Ð» Ð²ÑŠÑ€Ñ…Ñƒ ÐºÐ°Ð»Ð¾Ñ€Ð¸Ð¸Ñ‚Ðµ, Ð´Ð¾ÑÑ‚Ð°Ñ‚ÑŠÑ‡Ð½Ð¾ Ð¿Ñ€Ð¾Ñ‚ÐµÐ¸Ð½, ÑÑ‚Ð°Ð±Ð¸Ð»Ð½Ð° ÐµÐ½ÐµÑ€Ð³Ð¸Ñ Ð¸ Ð¿Ð¾-Ð¼Ð°Ð»ÐºÐ¾ Ð¸Ð¼Ð¿Ñ€Ð¾Ð²Ð¸Ð·Ð°Ñ†Ð¸Ñ.",
    nutrition: [
      { title: "Ð‘Ð°Ð»Ð°Ð½Ñ Ð½Ð° Ð¼Ð°ÐºÑ€Ð¾ÑÐ¸", text: "Ð¯ÑÐµÐ½ Ð´Ð½ÐµÐ²ÐµÐ½ Ð¿Ñ€Ð¸ÐµÐ¼ Ð½Ð° Ð¿Ñ€Ð¾Ñ‚ÐµÐ¸Ð½, Ð²ÑŠÐ³Ð»ÐµÑ…Ð¸Ð´Ñ€Ð°Ñ‚Ð¸ Ð¸ Ð¼Ð°Ð·Ð½Ð¸Ð½Ð¸ ÑÐ¿Ð¾Ñ€ÐµÐ´ Ñ†ÐµÐ»Ñ‚Ð° Ð¸ Ð³Ñ€Ð°Ñ„Ð¸ÐºÐ°." },
      { title: "Ð ÐµÐ°Ð»Ð½Ð¸ Ñ…Ñ€Ð°Ð½Ð¸", text: "ÐœÐµÐ½ÑŽ Ñ Ð´Ð¾ÑÑ‚ÑŠÐ¿Ð½Ð¸ Ð¿Ñ€Ð¾Ð´ÑƒÐºÑ‚Ð¸, Ð»ÐµÑÐ½Ð° Ð¿Ð¾Ð´Ð³Ð¾Ñ‚Ð¾Ð²ÐºÐ° Ð¸ Ð²Ð°Ñ€Ð¸Ð°Ð½Ñ‚Ð¸ Ð·Ð° Ð´Ð½Ð¸ Ñ Ð¿Ð¾Ð²ÐµÑ‡Ðµ Ð´Ð²Ð¸Ð¶ÐµÐ½Ð¸Ðµ." },
      { title: "ÐÐ°Ð²Ð¸Ñ†Ð¸, Ð½Ðµ ÐºÑ€Ð°Ð¹Ð½Ð¾ÑÑ‚Ð¸", text: "ÐŸÐ»Ð°Ð²Ð½Ð¸ Ð¿Ñ€Ð¾Ð¼ÐµÐ½Ð¸, ÐºÐ¾Ð¸Ñ‚Ð¾ Ð¼Ð¾Ð¶ÐµÑˆ Ð´Ð° Ð¿Ð¾Ð´Ð´ÑŠÑ€Ð¶Ð°Ñˆ, Ð±ÐµÐ· ÐºÑ€Ð°Ñ‚ÐºÐ¾ÑÑ€Ð¾Ñ‡Ð½Ð¸ Ð´Ð¸ÐµÑ‚Ð¸ Ð¸ Ð¸Ð·Ñ‚Ð¾Ñ‰ÐµÐ½Ð¸Ðµ." },
      { title: "ÐŸÑ€Ð¾ÑÐ»ÐµÐ´ÑÐ²Ð°Ð½Ðµ", text: "Ð¡ÐµÐ´Ð¼Ð¸Ñ‡Ð½Ð¸ ÐºÐ¾Ñ€ÐµÐºÑ†Ð¸Ð¸ ÑÐ¿Ð¾Ñ€ÐµÐ´ Ñ‚ÐµÐ³Ð»Ð¾, Ð¾Ð±Ð¸ÐºÐ¾Ð»ÐºÐ¸, ÑÐ¸Ð»Ð°, ÑÑŠÐ½ Ð¸ ÑƒÑÐµÑ‰Ð°Ð½Ðµ Ð·Ð° ÐµÐ½ÐµÑ€Ð³Ð¸Ñ." }
    ],
    weekEyebrow: "ÑÐµÐ´Ð¼Ð¸Ñ†Ð°",
    weekTitle: "ÐŸÑ€Ð¸Ð¼ÐµÑ€Ð½Ð° ÑÑ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ð° Ð½Ð° Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÑŠÑ‡ÐµÐ½ Ñ€ÐµÐ¶Ð¸Ð¼",
    week: [
      ["ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº", "Ð¡Ð¸Ð»Ð°: Ð´Ð¾Ð»Ð½Ð° Ñ‡Ð°ÑÑ‚ + ÑÐ´Ñ€Ð¾", "60 Ð¼Ð¸Ð½"],
      ["Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº", "Ð‘Ð¾ÐºÑ Ñ‚ÐµÑ…Ð½Ð¸ÐºÐ° + ÐºÐ¾Ð½Ð´Ð¸Ñ†Ð¸Ñ", "50 Ð¼Ð¸Ð½"],
      ["Ð¡Ñ€ÑÐ´Ð°", "ÐœÐ¾Ð±Ð¸Ð»Ð½Ð¾ÑÑ‚ Ð¸ Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾ Ð²ÑŠÐ·ÑÑ‚Ð°Ð½Ð¾Ð²ÑÐ²Ð°Ð½Ðµ", "35 Ð¼Ð¸Ð½"],
      ["Ð§ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº", "Ð¡Ð¸Ð»Ð°: Ð³Ð¾Ñ€Ð½Ð° Ñ‡Ð°ÑÑ‚ + Ð³Ñ€ÑŠÐ±", "60 Ð¼Ð¸Ð½"],
      ["ÐŸÐµÑ‚ÑŠÐº", "ÐžÐ½Ð»Ð°Ð¹Ð½ Ð¾Ñ‚Ñ‡ÐµÑ‚ + ÐºÐ¾Ñ€ÐµÐºÑ†Ð¸Ð¸", "30 Ð¼Ð¸Ð½"],
      ["Ð¡ÑŠÐ±Ð¾Ñ‚Ð°", "ÐŸÑŠÐ»ÐµÐ½ ÐºÐ¾Ð¼Ð¿Ð»ÐµÐºÑ", "55 Ð¼Ð¸Ð½"]
    ],
    methodEyebrow: "Ð¼ÐµÑ‚Ð¾Ð´",
    methodTitle: "ÐŸÑ€Ð¾Ñ†ÐµÑ Ñ ÐºÐ¾Ð½Ñ‚Ñ€Ð¾Ð», Ð½Ðµ Ð¿Ñ€Ð¾ÑÑ‚Ð¾ Ð¼Ð¾Ñ‚Ð¸Ð²Ð°Ñ†Ð¸Ñ",
    process: [
      { icon: icons.assessment, title: "ÐžÑ†ÐµÐ½ÐºÐ°", text: "Ð—Ð°Ð¿Ð¾Ñ‡Ð²Ð°Ð¼Ðµ Ñ Ñ†ÐµÐ», Ð¾Ð¿Ð¸Ñ‚, ÑÐ²Ð¾Ð±Ð¾Ð´Ð½Ð¾ Ð²Ñ€ÐµÐ¼Ðµ, Ð¾Ð³Ñ€Ð°Ð½Ð¸Ñ‡ÐµÐ½Ð¸Ñ Ð¸ Ñ‚ÐµÐºÑƒÑ‰Ð¸ Ð½Ð°Ð²Ð¸Ñ†Ð¸." },
      { icon: icons.plan, title: "ÐŸÐ»Ð°Ð½", text: "ÐŸÐ¾Ð»ÑƒÑ‡Ð°Ð²Ð°Ñˆ ÑÑ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ð° Ð·Ð° Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ¸, Ñ…Ñ€Ð°Ð½ÐµÐ½Ðµ Ð¸ Ð²ÑŠÐ·ÑÑ‚Ð°Ð½Ð¾Ð²ÑÐ²Ð°Ð½Ðµ." },
      { icon: icons.progress, title: "ÐŸÑ€Ð¾Ð³Ñ€ÐµÑ", text: "Ð¡Ð»ÐµÐ´Ð¸Ð¼ Ñ€ÐµÐ·ÑƒÐ»Ñ‚Ð°Ñ‚Ð¸Ñ‚Ðµ Ð¸ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹Ð²Ð°Ð¼Ðµ Ð¿Ð»Ð°Ð½Ð°, Ð·Ð° Ð´Ð° Ð²ÑŠÑ€Ð²Ð¸Ñˆ ÑÑ‚Ð°Ð±Ð¸Ð»Ð½Ð¾ Ð½Ð°Ð¿Ñ€ÐµÐ´." }
    ],
    paymentEyebrow: "Ð´ÐµÐ¿Ð¾Ð·Ð¸Ñ‚ Ð¸ Ð¿Ð»Ð°Ñ‰Ð°Ð½Ðµ",
    paymentTitle: "ÐŸÐ¾Ñ‚Ð²ÑŠÑ€Ð¶Ð´ÐµÐ½Ð¸Ðµ Ð¿Ñ€ÐµÐ´Ð¸ ÑÑ‚Ð°Ñ€Ñ‚",
    paymentItems: [
      { icon: icons.deposit, title: "Ð”ÐµÐ¿Ð¾Ð·Ð¸Ñ‚", text: "20% Ð´ÐµÐ¿Ð¾Ð·Ð¸Ñ‚ Ð·Ð° Ð¿Ð¾Ñ‚Ð²ÑŠÑ€Ð¶Ð´ÐµÐ½Ð¸Ðµ Ð½Ð° Ñ‡Ð°Ñ Ð¸Ð»Ð¸ ÑÑ‚Ð°Ñ€Ñ‚ Ð½Ð° Ð¾Ð½Ð»Ð°Ð¹Ð½ Ñ€ÐµÐ¶Ð¸Ð¼." },
      { icon: icons.payment, title: "ÐŸÐ»Ð°Ñ‰Ð°Ð½Ðµ", text: "ÐŸÐ¾Ð´Ð³Ð¾Ñ‚Ð²ÐµÐ½Ð° ÑÐµÐºÑ†Ð¸Ñ Ð·Ð° ÐºÐ°Ñ€Ñ‚Ð°, Ð±Ð°Ð½ÐºÐ¾Ð² Ð¿Ñ€ÐµÐ²Ð¾Ð´ Ð¸Ð»Ð¸ Ð´Ñ€ÑƒÐ³ Ð¼ÐµÑ‚Ð¾Ð´ Ð¿Ð¾ Ð¸Ð·Ð±Ð¾Ñ€." },
      { icon: icons.confirm, title: "ÐŸÐ¾Ñ‚Ð²ÑŠÑ€Ð¶Ð´ÐµÐ½Ð¸Ðµ", text: "Ð¡Ð»ÐµÐ´ Ð¿Ð»Ð°Ñ‰Ð°Ð½Ðµ ÐºÐ»Ð¸ÐµÐ½Ñ‚ÑŠÑ‚ Ð¿Ð¾Ð»ÑƒÑ‡Ð°Ð²Ð° Ð¿Ð¾Ñ‚Ð²ÑŠÑ€Ð¶Ð´ÐµÐ½Ð¸Ðµ Ð¸ ÑÐ»ÐµÐ´Ð²Ð°Ñ‰Ð¸ ÑÑ‚ÑŠÐ¿ÐºÐ¸." }
    ],
    depositTitle: "Ð”ÐµÐ¿Ð¾Ð·Ð¸Ñ‚ 20%",
    depositText: "Ð—Ð°Ð¿Ð°Ð·Ð²Ð° Ñ‡Ð°Ñ Ð¸Ð»Ð¸ Ð°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð° Ð¸Ð·Ð³Ð¾Ñ‚Ð²ÑÐ½ÐµÑ‚Ð¾ Ð½Ð° Ð¾Ð½Ð»Ð°Ð¹Ð½ Ñ‚Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÑŠÑ‡ÐµÐ½ Ð¸ Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÐµÐ»ÐµÐ½ Ñ€ÐµÐ¶Ð¸Ð¼.",
    depositCta: "ÐšÑŠÐ¼ Ð±ÑƒÑƒÐºÐ¸Ð½Ð³",
    footer: "Ð¢Ñ€ÐµÐ½Ð¸Ñ€Ð¾Ð²ÐºÐ¸, Ð¾Ð½Ð»Ð°Ð¹Ð½ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ð¸, Ð±Ð¾ÐºÑ Ð¿Ð¾Ð´Ð³Ð¾Ñ‚Ð¾Ð²ÐºÐ°, Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÐµÐ»Ð½Ð¸ Ñ€ÐµÐ¶Ð¸Ð¼Ð¸ Ð¸ Ð¿Ð»Ð°Ñ‰Ð°Ð½Ðµ."
  },
  en: {
    langLabel: "Language",
    nav: [
      ["About", "about"],
      ["Services", "services"],
      ["Booking", "booking"],
      ["Payment", "payment"]
    ],
    headerCta: "Book",
    heroEyebrow: "training, boxing and nutrition",
    heroTitle: "A personal plan for strength, body and discipline",
    heroText: "A standalone system for private boxing sessions, online fitness instructions, nutrition plans, booking, deposits and payment.",
    heroPrimary: "Book a consultation",
    heroSecondary: "View services",
    focusTitle: "Boxing + nutrition",
    stats: [
      { value: "12+", label: "weekly sessions" },
      { value: "3", label: "training levels" },
      { value: "24/7", label: "online guidance" }
    ],
    focusItems: ["Technique before load", "Online instructions"],
    coverTitle: "Boxing training",
    aboutEyebrow: "about",
    aboutTitle: "About the coach and training community",
    soloTitle: "Personal approach",
    soloText: "20+ years of boxing experience, a semi-professional path up to the professional ring, multiple achievements and wins with international experience across 50+ countries. Second sport: athletics with 8 national titles and a European quota. Also a ski instructor and graduate of the National Sports Academy with full honors, first place and the highest academic result.",
    groupTitle: "Group training",
    groupText: "A training environment for people who want movement, boxing technique, motivation and consistency.",
    groupBadge: "group training",
    servicesEyebrow: "services",
    servicesTitle: "Core directions",
    services: [
      {
        icon: icons.boxing,
        title: "Boxing training",
        text: "One-to-one work on stance, punches, defense, movement, reaction and conditioning.",
        points: ["personal training", "group training", "competition preparation", "technique and conditioning training"]
      },
      {
        icon: icons.online,
        title: "Online fitness coach",
        text: "Get instructions, a weekly plan and online corrections without needing to be present in a gym.",
        points: ["guided exercises", "weekly schedule"]
      },
      {
        icon: icons.nutrition,
        title: "Personal nutrition plan",
        text: "Practical nutrition based on your goal, daily routine, preferences and real habits.",
        points: ["calories and macros", "sample menus", "weekly adjustments"]
      }
    ],
    programsEyebrow: "programs",
    programsTitle: "Plans based on your goal",
    programs: [
      {
        icon: icons.strength,
        title: "Strength and shape",
        text: "Structured strength sessions for muscle tone, stability and visible progress without random overload.",
        details: ["3-5 sessions weekly", "progressive overload", "technique correction"]
      },
      {
        icon: icons.conditioning,
        title: "Endurance and conditioning",
        text: "Functional sessions with cardio, mobility and intervals for better energy and resilience.",
        details: ["HIIT blocks", "aerobic base", "recovery"]
      },
      {
        icon: icons.instructions,
        title: "Online instructions",
        text: "A clear plan with exercises, sets, reps, tempo and execution notes.",
        details: ["video guidance", "weekly check-in", "online corrections"]
      }
    ],
    bookingEyebrow: "booking",
    bookingTitle: "Book a training session or online plan",
    bookingCardTitle: "Choose a service, goal and schedule.",
    bookingCardText: "The booking area is dedicated to training services: boxing, online fitness instructions or a nutrition plan. After submitting, the time, deposit and communication method are confirmed.",
    bookingItems: ["Initial consultation", "Private session", "Online plan", "Nutrition plan"],
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      contact: "Phone or email",
      contactPlaceholder: "Contact",
      service: "Service",
      servicePlaceholder: "Choose a service",
      serviceOptions: ["Boxing training", "Online fitness coach", "Personal nutrition plan"],
      day: "Preferred day",
      dayPlaceholder: "Example: Tuesday",
      goal: "Goal",
      goalPlaceholder: "Strength, fat loss, boxing technique, nutrition...",
      submit: "Book and pay deposit"
    },
    nutritionEyebrow: "nutrition",
    nutritionTitle: "Personal nutrition plan for better eating",
    nutritionCardTitle: "No extremes. Clear rules.",
    nutritionCardText: "The plan is built around foods you can buy, prepare and repeat. The goal is calorie control, enough protein, steady energy and less improvisation.",
    nutrition: [
      { title: "Macro balance", text: "Clear daily protein, carbohydrate and fat targets based on your goal and schedule." },
      { title: "Real food", text: "A menu with accessible products, simple preparation and options for more active days." },
      { title: "Habits, not extremes", text: "Gradual changes you can maintain without short-term diets and exhaustion." },
      { title: "Tracking", text: "Weekly adjustments based on weight, measurements, strength, sleep and energy." }
    ],
    weekEyebrow: "week",
    weekTitle: "Sample weekly training structure",
    week: [
      ["Monday", "Strength: lower body + core", "60 min"],
      ["Tuesday", "Boxing technique + conditioning", "50 min"],
      ["Wednesday", "Mobility and active recovery", "35 min"],
      ["Thursday", "Strength: upper body + back", "60 min"],
      ["Friday", "Online check-in + adjustments", "30 min"],
      ["Saturday", "Full-body complex", "55 min"]
    ],
    methodEyebrow: "method",
    methodTitle: "A controlled process, not just motivation",
    process: [
      { icon: icons.assessment, title: "Assessment", text: "We start with your goal, experience, available time, limitations and current habits." },
      { icon: icons.plan, title: "Plan", text: "You receive a structure for training, nutrition and recovery." },
      { icon: icons.progress, title: "Progress", text: "We track results and adjust the plan so you keep moving forward." }
    ],
    paymentEyebrow: "deposit and payment",
    paymentTitle: "Confirmation before starting",
    paymentItems: [
      { icon: icons.deposit, title: "Deposit", text: "20% deposit to confirm a session or start an online plan." },
      { icon: icons.payment, title: "Payment", text: "Prepared area for card, bank transfer or another chosen method." },
      { icon: icons.confirm, title: "Confirmation", text: "After payment, the client receives confirmation and next steps." }
    ],
    depositTitle: "20% deposit",
    depositText: "Reserves a session or activates the creation of an online training and nutrition plan.",
    depositCta: "Go to booking",
    footer: "Training, online instructions, boxing preparation, nutrition plans and payment."
  }
};

function getLang(searchParams?: { lang?: string | string[] }): Lang {
  const lang = Array.isArray(searchParams?.lang) ? searchParams?.lang[0] : searchParams?.lang;
  return lang === "en" ? "en" : "bg";
}

function href(lang: Lang, id?: string) {
  if (lang === "bg") {
    return `/${id ? `#${id}` : ""}`;
  }

  return `/trainer?lang=en${id ? `#${id}` : ""}`;
}

export default function TrainerPage({ searchParams }: { searchParams?: { lang?: string | string[] } }) {
  const lang = getLang(searchParams);
  const copy = content[lang];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-emerald-300/10 bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-3 sm:gap-4 sm:px-6 lg:px-8">
          <Link href={href(lang)} className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md border border-emerald-300/30 bg-emerald-300/10">
              <Dumbbell size={20} className="text-emerald-200" />
            </span>
            <span className="hidden font-display text-base tracking-[.14em] text-white sm:block sm:text-lg">TRAINING SYSTEM</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
            {copy.nav.map(([label, id]) => (
              <Link key={id} href={href(lang, id)} className="transition hover:text-emerald-200">
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[.04] p-1 text-xs text-white/65">
              <Globe2 size={14} className="ml-1 text-emerald-200 sm:ml-2" />
              {(["bg", "en"] as Lang[]).map((item) => (
                <Link
                  key={item}
                  href={href(item)}
                  className={`rounded-full px-2.5 py-1.5 uppercase transition sm:px-3 ${item === lang ? "bg-emerald-200 text-black" : "hover:text-white"}`}
                >
                  {item}
                </Link>
              ))}
            </div>
            <Link href={href(lang, "booking")} className="rounded-full border border-emerald-200/40 px-3 py-2 text-sm text-emerald-100 transition hover:bg-emerald-200 hover:text-black sm:px-4">
              {copy.headerCta}
            </Link>
          </div>
        </nav>
      </header>

      <section className="relative z-10 overflow-hidden px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_22%,rgba(16,185,129,.16),transparent_28%)]" />
        <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[.4em] text-emerald-200">{copy.heroEyebrow}</p>
            <h1 className="font-display text-5xl leading-[1.03] text-white md:text-7xl">{copy.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{copy.heroText}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={href(lang, "booking")} className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-200 px-6 py-3 text-sm font-medium text-black transition hover:bg-white">
                {copy.heroPrimary} <ArrowRight size={16} />
              </Link>
              <Link href={href(lang, "services")} className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200/30 px-6 py-3 text-sm font-medium text-emerald-100 transition hover:bg-emerald-200 hover:text-black">
                {copy.heroSecondary}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-emerald-200/20 bg-white/[.04] shadow-[0_30px_100px_rgba(0,0,0,.5)]">
              <div className="relative aspect-[4/5] min-h-[520px]">
                <Image
                  src={promoImages.cover}
                  alt={copy.coverTitle}
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover object-[50%_18%]"
                />
              </div>
              <div className="grid gap-2 border-t border-white/10 bg-black/55 p-4 sm:grid-cols-3">
                {copy.stats.map((item) => (
                  <div key={item.label} className="rounded-md border border-white/10 bg-white/[.04] p-3">
                    <p className="font-display text-2xl text-emerald-100">{item.value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[.18em] text-white/55">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 grid gap-2 md:grid-cols-2">
              {copy.focusItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-black/80 px-4 py-3 text-xs text-white/75 backdrop-blur">
                  <Flame className="shrink-0 text-emerald-200" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow={copy.aboutEyebrow} title={copy.aboutTitle} className="scroll-mt-24" id="about">
        <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <article className="overflow-hidden rounded-lg border border-white/10 bg-white/[.04]">
            <div className="relative aspect-[4/5]">
              <Image
                src={promoImages.solo}
                alt={copy.soloTitle}
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover object-[50%_28%]"
              />
            </div>
            <div className="border-t border-white/10 p-6">
              <p className="text-xs uppercase tracking-[.28em] text-emerald-100">solo</p>
              <h3 className="mt-2 font-display text-4xl">{copy.soloTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{copy.soloText}</p>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-white/10 bg-white/[.04]">
            <div className="grid gap-4 p-4 md:grid-cols-2">
              {promoImages.groups.map((src, index) => (
                <div key={src} className={`relative overflow-hidden rounded-md ${index === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <Image
                    src={src}
                    alt={`${copy.groupTitle} ${index + 1}`}
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 56vw, 100vw" : "(min-width: 1024px) 28vw, 50vw"}
                    className="object-cover object-center transition duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 p-6">
              <p className="text-xs uppercase tracking-[.28em] text-emerald-100">{copy.groupBadge}</p>
              <h3 className="mt-2 font-display text-4xl">{copy.groupTitle}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">{copy.groupText}</p>
            </div>
          </article>
        </div>
      </Section>

      <Section eyebrow={copy.servicesEyebrow} title={copy.servicesTitle} className="scroll-mt-24" id="services">
        <div className="grid gap-5 lg:grid-cols-3">
          {copy.services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-lg border border-white/10 bg-white/[.04] p-6 transition hover:-translate-y-1 hover:border-emerald-200/60">
                <Icon className="text-emerald-200" size={34} />
                <h3 className="mt-6 font-display text-3xl">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{service.text}</p>
                <div className="mt-6 grid gap-2">
                  {service.points.map((point) => (
                    <p key={point} className="rounded-md border border-white/10 px-3 py-2 text-sm text-white/70">{point}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section eyebrow={copy.programsEyebrow} title={copy.programsTitle} className="scroll-mt-24" id="programs">
        <div className="grid gap-5 lg:grid-cols-3">
          {copy.programs.map((program) => {
            const Icon = program.icon;
            return (
              <article key={program.title} className="rounded-lg border border-white/10 bg-white/[.04] p-6 transition hover:-translate-y-1 hover:border-emerald-200/60">
                <Icon className="text-emerald-200" size={34} />
                <h3 className="mt-6 font-display text-3xl">{program.title}</h3>
                <p className="mt-4 min-h-28 text-sm leading-7 text-white/65">{program.text}</p>
                <div className="mt-6 grid gap-2">
                  {program.details.map((detail) => (
                    <p key={detail} className="rounded-md border border-white/10 px-3 py-2 text-sm text-white/70">{detail}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section eyebrow={copy.bookingEyebrow} title={copy.bookingTitle} className="scroll-mt-24" id="booking">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-lg border border-emerald-200/25 bg-black/35 p-7">
            <CalendarCheck className="text-emerald-200" size={36} />
            <h3 className="mt-6 font-display text-4xl">{copy.bookingCardTitle}</h3>
            <p className="mt-5 text-base leading-8 text-white/68">{copy.bookingCardText}</p>
            <div className="mt-6 grid gap-3 text-sm text-white/70">
              {copy.bookingItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 px-4 py-3">
                  <CheckCircle2 size={18} className="text-emerald-200" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <TrainerBookingForm copy={copy.form} lang={lang} />
        </div>
      </Section>

      <Section eyebrow={copy.nutritionEyebrow} title={copy.nutritionTitle} className="scroll-mt-24" id="nutrition">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-lg border border-emerald-200/25 bg-black/35 p-7">
            <Utensils className="text-emerald-200" size={36} />
            <h3 className="mt-6 font-display text-4xl">{copy.nutritionCardTitle}</h3>
            <p className="mt-5 text-base leading-8 text-white/68">{copy.nutritionCardText}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.nutrition.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/[.04] p-6">
                <Apple className="text-emerald-200" size={24} />
                <h4 className="mt-5 font-display text-2xl">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow={copy.weekEyebrow} title={copy.weekTitle} className="scroll-mt-24" id="week">
        <div className="overflow-hidden rounded-lg border border-white/10 bg-black/35">
          {copy.week.map(([day, focus, duration]) => (
            <div key={day} className="grid gap-3 border-b border-white/10 px-5 py-4 last:border-b-0 md:grid-cols-[180px_1fr_120px] md:items-center">
              <p className="font-display text-2xl text-emerald-100">{day}</p>
              <p className="text-sm text-white/72">{focus}</p>
              <p className="inline-flex items-center gap-2 text-sm text-white/55">
                <Timer size={16} /> {duration}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow={copy.methodEyebrow} title={copy.methodTitle} className="scroll-mt-24" id="method">
        <div className="grid gap-5 md:grid-cols-3">
          {copy.process.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="rounded-lg border border-white/10 bg-white/[.04] p-7">
                <Icon className="text-emerald-200" size={32} />
                <h3 className="mt-6 font-display text-3xl">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{step.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow={copy.paymentEyebrow} title={copy.paymentTitle} className="scroll-mt-24" id="payment">
        <div className="grid gap-5 md:grid-cols-3">
          {copy.paymentItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/[.04] p-7">
                <Icon className="text-emerald-200" size={32} />
                <h3 className="mt-6 font-display text-3xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-6 rounded-lg border border-emerald-200/20 bg-black/35 p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-display text-3xl">{copy.depositTitle}</p>
              <p className="mt-2 text-sm leading-7 text-white/65">{copy.depositText}</p>
            </div>
            <Link href={href(lang, "booking")} className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-200 px-6 py-3 text-sm font-medium text-black transition hover:bg-white">
              {copy.depositCta} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <footer className="relative z-10 border-t border-emerald-300/10 bg-black px-4 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-xl tracking-[.16em] text-white">TRAINING SYSTEM</p>
          <p>{copy.footer}</p>
        </div>
      </footer>
    </>
  );
}
