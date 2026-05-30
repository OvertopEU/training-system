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
    langLabel: "Език",
    nav: [
      ["За мен", "about"],
      ["Услуги", "services"],
      ["Буукинг", "booking"],
      ["Плащане", "payment"]
    ],
    headerCta: "Запази",
    heroEyebrow: "тренировки, бокс и правилно хранене",
    heroTitle: "Персонален план за тяло, сила и дисциплина",
    heroText: "Самостоятелна система за лични бокс тренировки, онлайн фитнес инструкции, хранителни режими, буукинг, депозит и плащане.",
    heroPrimary: "Запази консултация",
    heroSecondary: "Виж услугите",
    focusTitle: "Бокс + хранене",
    stats: [
      { value: "12+", label: "седмични сесии" },
      { value: "3", label: "нива на натоварване" },
      { value: "24/7", label: "онлайн насоки" }
    ],
    focusItems: ["Техника преди тежест", "Онлайн инструкции"],
    coverTitle: "Тренировки по бокс",
    videoEyebrow: "promo video",
    videoTitle: "30 секунди от тренировъчния процес",
    videoText: "Кратък пример от реална работа: движение, дистанция, защита и контрол в спаринг среда.",
    aboutEyebrow: "about",
    aboutTitle: "За треньора и тренировъчната общност",
    soloTitle: "Личен подход",
    soloText: "20+ години опит в бокса, полупрофесионален път до професионален ринг, редица постижения и победи с международен опит в над 50 държави. Втори спорт: лека атлетика с 8 национални титли и европейска квота. Допълнително: ски инструктор и завършена Национална спортна академия с пълно отличие, първо място и най-висок успех.",
    groupTitle: "Групови тренировки",
    groupText: "Среда за хора, които искат движение, бокс техника, мотивация и постоянство в общ ритъм.",
    groupBadge: "group training",
    servicesEyebrow: "услуги",
    servicesTitle: "Основни направления",
    services: [
      {
        icon: icons.boxing,
        title: "Тренировки по бокс",
        text: "Индивидуална работа върху стойка, удари, защита, движение, реакция и кондиция.",
        points: ["персонални тренировки", "групови тренировки", "подготовки за състезание", "техника и кондиционни тренировки"]
      },
      {
        icon: icons.online,
        title: "Онлайн фитнес треньор",
        text: "Получаваш инструкции, седмичен план и корекции онлайн, без задължително присъствие в зала.",
        points: ["упражнения с инструкции", "седмичен график"]
      },
      {
        icon: icons.nutrition,
        title: "Личен диетичен режим",
        text: "Правилно хранене според целта, ежедневието, предпочитанията и реалните ти навици.",
        points: ["калории и макроси", "примерни менюта", "седмични корекции"]
      }
    ],
    programsEyebrow: "програми",
    programsTitle: "Режими според целта",
    programs: [
      {
        icon: icons.strength,
        title: "Сила и форма",
        text: "Структурирани силови тренировки за мускулен тонус, стабилност и видим прогрес без хаотично натоварване.",
        details: ["3-5 тренировки седмично", "прогресивно натоварване", "корекция на техника"]
      },
      {
        icon: icons.conditioning,
        title: "Издръжливост и кондиция",
        text: "Функционални сесии с кардио, мобилност и работа в интервали за по-добра енергия и устойчивост.",
        details: ["HIIT блокове", "аеробна база", "възстановяване"]
      },
      {
        icon: icons.instructions,
        title: "Онлайн инструкции",
        text: "План с ясно подредени упражнения, серии, повторения, темпо и бележки за изпълнение.",
        details: ["видео насоки", "седмичен отчет", "корекции онлайн"]
      }
    ],
    bookingEyebrow: "буукинг",
    bookingTitle: "Записване за тренировка или онлайн режим",
    bookingCardTitle: "Избери услуга, цел и удобен график.",
    bookingCardText: "Буукинг секцията е отделна за тренировъчните услуги: бокс, онлайн фитнес инструкции или диетичен режим. След заявка се потвърждава час, депозит и начин на комуникация.",
    bookingItems: ["Първа консултация", "Индивидуална тренировка", "Онлайн режим", "Хранителен план"],
    form: {
      name: "Име",
      namePlaceholder: "Твоето име",
      contact: "Телефон или имейл",
      contactPlaceholder: "Контакт",
      service: "Услуга",
      servicePlaceholder: "Избери услуга",
      serviceOptions: ["Тренировки по бокс", "Онлайн фитнес треньор", "Личен диетичен режим"],
      day: "Предпочитан ден",
      dayPlaceholder: "Например: вторник",
      goal: "Цел",
      goalPlaceholder: "Сила, отслабване, бокс техника, хранене...",
      submit: "Запази и плати депозит"
    },
    nutritionEyebrow: "хранене",
    nutritionTitle: "Личен диетичен режим за правилно хранене",
    nutritionCardTitle: "Без крайности. С ясни правила.",
    nutritionCardText: "Режимът се изгражда около храните, които можеш да купиш, приготвиш и повториш. Целта е контрол върху калориите, достатъчно протеин, стабилна енергия и по-малко импровизация.",
    nutrition: [
      { title: "Баланс на макроси", text: "Ясен дневен прием на протеин, въглехидрати и мазнини според целта и графика." },
      { title: "Реални храни", text: "Меню с достъпни продукти, лесна подготовка и варианти за дни с повече движение." },
      { title: "Навици, не крайности", text: "Плавни промени, които можеш да поддържаш, без краткосрочни диети и изтощение." },
      { title: "Проследяване", text: "Седмични корекции според тегло, обиколки, сила, сън и усещане за енергия." }
    ],
    weekEyebrow: "седмица",
    weekTitle: "Примерна структура на тренировъчен режим",
    week: [
      ["Понеделник", "Сила: долна част + ядро", "60 мин"],
      ["Вторник", "Бокс техника + кондиция", "50 мин"],
      ["Сряда", "Мобилност и активно възстановяване", "35 мин"],
      ["Четвъртък", "Сила: горна част + гръб", "60 мин"],
      ["Петък", "Онлайн отчет + корекции", "30 мин"],
      ["Събота", "Пълен комплекс", "55 мин"]
    ],
    methodEyebrow: "метод",
    methodTitle: "Процес с контрол, не просто мотивация",
    process: [
      { icon: icons.assessment, title: "Оценка", text: "Започваме с цел, опит, свободно време, ограничения и текущи навици." },
      { icon: icons.plan, title: "План", text: "Получаваш структура за тренировки, хранене и възстановяване." },
      { icon: icons.progress, title: "Прогрес", text: "Следим резултатите и настройваме плана, за да вървиш стабилно напред." }
    ],
    paymentEyebrow: "депозит и плащане",
    paymentTitle: "Потвърждение преди старт",
    paymentItems: [
      { icon: icons.deposit, title: "Депозит", text: "20% депозит за потвърждение на час или старт на онлайн режим." },
      { icon: icons.payment, title: "Плащане", text: "Подготвена секция за карта, банков превод или друг метод по избор." },
      { icon: icons.confirm, title: "Потвърждение", text: "След плащане клиентът получава потвърждение и следващи стъпки." }
    ],
    depositTitle: "Депозит 20%",
    depositText: "Запазва час или активира изготвянето на онлайн тренировъчен и хранителен режим.",
    depositCta: "Към буукинг",
    footer: "Тренировки, онлайн инструкции, бокс подготовка, хранителни режими и плащане."
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
    videoEyebrow: "promo video",
    videoTitle: "30 seconds from the training process",
    videoText: "A short sample from real work: movement, distance, defense and control in a sparring environment.",
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

      <Section eyebrow={copy.videoEyebrow} title={copy.videoTitle} className="scroll-mt-24">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_.65fr] lg:items-center">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[.04]">
            <video
              className="aspect-video w-full bg-black object-cover"
              src="/trainer/training-promo.mp4"
              poster="/trainer/training-promo-poster.jpg"
              controls
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[.04] p-6">
            <p className="text-sm leading-7 text-white/68">{copy.videoText}</p>
            <div className="mt-6 grid gap-2">
              {copy.focusItems.map((item) => (
                <p key={item} className="rounded-md border border-white/10 px-3 py-2 text-sm text-white/70">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

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
