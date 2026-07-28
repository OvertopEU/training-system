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
  Dumbbell,
  Flame,
  Globe2,
  HeartPulse,
  MessageCircle,
  Monitor,
  Phone,
  ShieldCheck,
  Target,
  Timer,
  Trophy,
  Utensils,
} from "lucide-react";
import { Section } from "@/components/section";

type Lang = "en" | "bg" | "de" | "fr" | "es";

export const metadata: Metadata = {
  applicationName: "TS",
  title: {
    absolute: "TS | Training System"
  },
  description: "Personal boxing training, online fitness coaching, nutrition plans and booking.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      bg: "/trainer?lang=bg",
      de: "/trainer?lang=de",
      fr: "/trainer?lang=fr",
      es: "/trainer?lang=es"
    }
  },
  openGraph: {
    title: "TS | Training System",
    description: "Personal boxing training, online fitness coaching, nutrition plans and booking.",
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
    description: "Personal boxing training, online fitness coaching, nutrition plans and booking.",
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
  confirm: CheckCircle2
};

const promoImages = {
  cover: "/trainer/coach-boxer-cover.jpg",
  solo: "/trainer/coach-flex.jpg",
  gym: "/trainer/gym-training-session.jpg",
  groups: [
    "/trainer/group-promo-bags.jpg",
    "/trainer/group-promo-team.jpg",
    "/trainer/group-ring-promo.jpg",
    "/trainer/group-ring-class.jpg"
  ]
};

const whatsappUrl = "https://api.whatsapp.com/send?phone=447719799244";
const whatsappDisplay = "+44 7719 799244";
const phoneUrl = "tel:+447719799244";

const content = {
  bg: {
    langLabel: "Език",
    nav: [
      ["За мен", "about"],
      ["Услуги", "services"],
      ["Записване", "booking"]
    ],
    headerCta: "Запази",
    heroEyebrow: "тренировки, бокс и правилно хранене",
    heroTitle: "Индивидуални тренировъчни и хранителни планове, изградени точно около твоя дневен график.",
    heroText: "Самостоятелна система за лични бокс тренировки, онлайн фитнес инструкции, хранителни режими и чисти планове с крайна цена.",
    heroPrimary: "Запази консултация",
    heroSecondary: "Виж услугите",
    whatsappCta: "Пиши в WhatsApp",
    focusTitle: "Бокс + хранене",
    stats: [
      { value: "12+", label: "седмични сесии" },
      { value: "3", label: "нива на натоварване" },
      { value: "24/7", label: "онлайн насоки" }
    ],
    focusItems: ["Техника преди тежест", "Онлайн инструкции"],
    coverTitle: "Тренировки по бокс",
    gymPhotoEyebrow: "тренировъчна среда",
    gymPhotoTitle: "Работа в зала с реален ритъм",
    gymPhotoText: "Тренировките се изграждат около техника, дистанция, контрол и постоянно движение в работна среда.",
    aboutEyebrow: "за мен",
    aboutTitle: "За треньора и тренировъчната общност",
    soloTitle: "Личен подход",
    soloText: "20+ години опит в бокса, полупрофесионален път до професионален ринг, редица постижения и победи с международен опит в над 50 държави. Втори спорт: лека атлетика с 8 национални титли и европейска квота. Работя и в най-висок сектор на охрана с фокус върху анти-терористична сигурност. Ски инструктор съм и съм завършил Национална спортна академия с първо място и най-висок успех.",
    groupTitle: "Групови тренировки",
    groupText: "Среда за хора, които искат движение, бокс техника, мотивация и постоянство в общ ритъм.",
    groupBadge: "групови тренировки",
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
        details: ["седмичен отчет", "корекции онлайн"]
      }
    ],
    bookingEyebrow: "записване",
    bookingTitle: "Записване за тренировка или онлайн режим",
    bookingCardTitle: "Избери услуга, цел и удобен график.",
    bookingCardText: "За момента плащанията се уточняват индивидуално след директен контакт. След избор на услуга получаваш крайна цена и персонален начин за плащане.",
    bookingItems: ["Първа консултация", "Индивидуална тренировка", "Онлайн режим", "Хранителен план"],
    paymentInfoBadge: "плащане",
    paymentInfoTitle: "Индивидуален Stripe линк или банков трансфер",
    paymentInfoText: "Всеки конкретен пеймент към клиент ще се изпраща като индивидуално генериран Stripe payment link за съответната услуга. При нужда ще има и възможност за директен банков трансфер след потвърждение.",
    paymentInfoItems: ["крайна цена преди плащане", "персонален Stripe payment link", "възможност за директен банков трансфер"],
    directContact: `За директна връзка пиши в WhatsApp: ${whatsappDisplay}.`,
    nutritionEyebrow: "хранене",
    nutritionTitle: "Личен диетичен режим за правилно хранене",
    nutritionCardTitle: "Без крайности. С ясни правила.",
    nutritionCardText: "Режимът се изгражда в насоката, която клиентът желае, спрямо неговия дневен график. Целта е контрол върху калориите, достатъчно протеин, стабилна енергия и по-малко импровизация.",
    nutritionOfferBadge: "готов план",
    nutritionOfferTitle: "Хранителен режим с крайна цена",
    nutritionOfferText: "Започни директно с персонален режим, изграден около твоя график, цел и реални навици. Плащането е за целия план с ясна крайна цена.",
    nutritionOfferItems: ["индивидуален хранителен режим", "ясни правила и примерни менюта", "онлайн комуникация за уточнения"],
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
      { icon: icons.progress, title: "Прогрес", text: "Лично следя резултатите ти и настройвам плана, за да вървиш стабилно напред." }
    ],
    footer: "Всичко в този сайт е изградено и потвърдено лично от мен, Svetoslav Milushev. Плановете и цялостната структура се предоставят лично от мен."
  },
  en: {
    langLabel: "Language",
    nav: [
      ["About", "about"],
      ["Services", "services"],
      ["Booking", "booking"]
    ],
    headerCta: "Book",
    heroEyebrow: "training, boxing and nutrition",
    heroTitle: "Individual training and nutrition plans, precisely built around your daily schedule.",
    heroText: "A standalone system for private boxing sessions, online fitness instructions, nutrition plans, and diet regime.",
    heroPrimary: "Book a consultation",
    heroSecondary: "View services",
    whatsappCta: "Message on WhatsApp",
    focusTitle: "Boxing + nutrition",
    stats: [
      { value: "12+", label: "weekly sessions" },
      { value: "3", label: "training levels" },
      { value: "24/7", label: "online guidance" }
    ],
    focusItems: ["Technique before load", "Online instructions"],
    coverTitle: "Boxing training",
    gymPhotoEyebrow: "training environment",
    gymPhotoTitle: "Gym work with real training rhythm",
    gymPhotoText: "Training is built around technique, distance, control and consistent movement in a working gym environment.",
    aboutEyebrow: "about",
    aboutTitle: "About the coach and training community",
    soloTitle: "Personal approach",
    soloText: "20+ years of boxing experience, a semi-professional path up to the professional ring, multiple achievements and wins with international experience across 50+ countries. Second sport: athletics with 8 national titles and a European quota. I also work in a high-level security sector focused on anti-terrorism protection. I am a ski instructor and graduated from the National Sports Academy in first place with the highest academic result.",
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
        text: "Get instructions, a weekly plan and online personal guides.",
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
        details: ["weekly check-in", "online corrections"]
      }
    ],
    bookingEyebrow: "booking",
    bookingTitle: "Book a training session or online plan",
    bookingCardTitle: "Choose a service, goal and schedule.",
    bookingCardText: "For now, payments are arranged individually after direct contact. Once the service is confirmed, you receive the final price and the right payment method.",
    bookingItems: ["Initial consultation", "Private session", "Online plan", "Nutrition plan"],
    paymentInfoBadge: "payment",
    paymentInfoTitle: "Individual Stripe link or bank transfer",
    paymentInfoText: "Each client payment will be sent as an individually generated Stripe payment link for the confirmed service. A direct bank transfer option can also be provided after confirmation.",
    paymentInfoItems: ["final price before payment", "personal Stripe payment link", "direct bank transfer option"],
    directContact: `For direct contact, message on WhatsApp: ${whatsappDisplay}.`,
    nutritionEyebrow: "nutrition",
    nutritionTitle: "Personal nutrition plan for better eating",
    nutritionCardTitle: "No extremes. Clear rules.",
    nutritionCardText: "The plan is built around the direction the client wants, matched to their daily schedule. The goal is calorie control, enough protein, steady energy and less improvisation.",
    nutritionOfferBadge: "ready plan",
    nutritionOfferTitle: "Nutrition plan with final price",
    nutritionOfferText: "Start directly with a personal nutrition plan built around your schedule, goal and real habits. This is full-plan payment with a clear final price.",
    nutritionOfferItems: ["individual nutrition plan", "clear rules and sample menus", "online communication for details"],
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
      { icon: icons.progress, title: "Progress", text: "I personally track your results and adjust the plan so you keep moving forward." }
    ],
    footer: "Everything on this site is built and confirmed personally by me, Svetoslav Milushev. The plans and full structure are provided directly by me."
  }
};

const supportedLangs = ["en", "bg", "de", "fr", "es"] as const;
const defaultLang: Lang = "en";
type TrainerCopy = typeof content.en;

const localizedContent: Record<Lang, TrainerCopy> = {
  en: content.en,
  bg: content.bg,
  de: {
    ...content.en,
    langLabel: "Sprache",
    nav: [
      ["Über mich", "about"],
      ["Leistungen", "services"],
      ["Buchung", "booking"]
    ],
    headerCta: "Buchen",
    heroEyebrow: "Training, Boxen und Ernährung",
    heroTitle: "Individuelle Trainings- und Ernährungspläne, genau passend zu deinem Tagesablauf.",
    heroText:
      "Ein eigenständiges System für private Boxeinheiten, Online-Fitness-Anleitungen, Ernährungspläne und Diätstruktur.",
    heroPrimary: "Training buchen",
    heroSecondary: "WhatsApp Kontakt",
    whatsappCta: "Auf WhatsApp schreiben",
    soloText: "Mehr als 20 Jahre Boxerfahrung, ein semiprofessioneller Weg bis in den Profiring, zahlreiche Erfolge und Siege sowie internationale Erfahrung in über 50 Ländern. Zweite Sportart: Leichtathletik mit 8 nationalen Titeln und einer europäischen Qualifikation. Zusätzlich arbeite ich in einem hochrangigen Sicherheitsbereich mit Schwerpunkt auf Anti-Terror-Schutz. Ich bin Skilehrer und habe die Nationale Sportakademie als Jahrgangsbester mit dem höchsten akademischen Ergebnis abgeschlossen.",
    focusTitle: "Boxen + Ernährung",
    stats: [
      { value: "12+", label: "Einheiten pro Woche" },
      { value: "3", label: "Trainingsstufen" },
      { value: "24/7", label: "Online-Begleitung" }
    ],
    focusItems: ["Technik vor Belastung", "Online-Anleitungen"],
    coverTitle: "Boxtraining",
    gymPhotoEyebrow: "Trainingsumgebung",
    gymPhotoTitle: "Arbeit im Gym mit echtem Trainingsrhythmus",
    gymPhotoText: "Das Training wird um Technik, Distanz, Kontrolle und konstante Bewegung in einer echten Trainingsumgebung aufgebaut.",
    aboutEyebrow: "über mich",
    aboutTitle: "Über den Trainer und die Trainingsgemeinschaft",
    soloTitle: "Persönlicher Ansatz",
    groupTitle: "Gruppentraining",
    groupText: "Ein Umfeld für Menschen, die Bewegung, Boxtechnik, Motivation und Beständigkeit in einem gemeinsamen Rhythmus suchen.",
    groupBadge: "Gruppentraining",
    servicesEyebrow: "Leistungen",
    servicesTitle: "Hauptbereiche",
    services: [
      {
        icon: icons.boxing,
        title: "Boxtraining",
        text: "Individuelle Arbeit an Stand, Schlägen, Verteidigung, Bewegung, Reaktion und Kondition.",
        points: ["Personal Training", "Gruppentraining", "Wettkampfvorbereitung", "Technik- und Konditionstraining"]
      },
      {
        icon: icons.online,
        title: "Online-Fitness-Coach",
        text: "Du erhältst Anleitungen, einen Wochenplan und Online-Korrekturen, ohne zwingend im Gym vor Ort zu sein.",
        points: ["angeleitete Übungen", "Wochenstruktur"]
      },
      {
        icon: icons.nutrition,
        title: "Persönlicher Ernährungsplan",
        text: "Praktische Ernährung passend zu deinem Ziel, Alltag, deinen Vorlieben und realen Gewohnheiten.",
        points: ["Kalorien und Makros", "Beispielmenüs", "wöchentliche Anpassungen"]
      }
    ],
    programsEyebrow: "Programme",
    programsTitle: "Pläne nach deinem Ziel",
    programs: [
      {
        icon: icons.strength,
        title: "Kraft und Form",
        text: "Strukturierte Krafteinheiten für Muskeltonus, Stabilität und sichtbaren Fortschritt ohne zufällige Überlastung.",
        details: ["3-5 Einheiten pro Woche", "progressive Belastung", "Technikkorrektur"]
      },
      {
        icon: icons.conditioning,
        title: "Ausdauer und Kondition",
        text: "Funktionelle Einheiten mit Cardio, Mobilität und Intervallen für mehr Energie und Belastbarkeit.",
        details: ["HIIT-Blöcke", "aerobe Basis", "Regeneration"]
      },
      {
        icon: icons.instructions,
        title: "Online-Anleitungen",
        text: "Ein klarer Plan mit Übungen, Sätzen, Wiederholungen, Tempo und Ausführungshinweisen.",
        details: ["wöchentlicher Check-in", "Online-Korrekturen"]
      }
    ],
    bookingEyebrow: "Buchung",
    bookingTitle: "Buche eine Trainingseinheit oder starte mit einem Online-Plan.",
    bookingCardTitle: "Wähle Leistung, Ziel und passenden Zeitplan.",
    bookingCardText:
      "Zahlungen werden vorerst individuell nach direktem Kontakt abgestimmt. Nach Bestätigung der Leistung erhältst du den Endpreis und die passende Zahlungsmethode.",
    bookingItems: [
      "Erstberatung",
      "Private Einheit",
      "Online-Plan",
      "Ernährungsplan"
    ],
    paymentInfoBadge: "Zahlung",
    paymentInfoTitle: "Individueller Stripe-Link oder Banküberweisung",
    paymentInfoText: "Jede Kundenzahlung wird als individuell generierter Stripe Payment Link für die bestätigte Leistung gesendet. Nach Bestätigung ist auch eine direkte Banküberweisung möglich.",
    paymentInfoItems: ["Endpreis vor der Zahlung", "persönlicher Stripe Payment Link", "Option für direkte Banküberweisung"],
    nutritionEyebrow: "Ernährung",
    nutritionTitle: "Persönlicher Ernährungsplan für bessere Essgewohnheiten",
    nutritionCardTitle: "Keine Extreme. Klare Regeln.",
    nutritionCardText: "Der Plan wird nach der Richtung aufgebaut, die der Kunde möchte, und an seinen Tagesablauf angepasst. Ziel sind Kalorienkontrolle, ausreichend Protein, stabile Energie und weniger Improvisation.",
    nutritionOfferBadge: "fertiger Plan",
    nutritionOfferTitle: "Ernährungsplan mit festem Endpreis",
    nutritionOfferText: "Starte direkt mit einem persönlichen Ernährungsplan, der zu deinem Zeitplan, Ziel und deinen realen Gewohnheiten passt. Das ist die Zahlung für den kompletten Plan mit klarem Endpreis.",
    nutritionOfferItems: ["individueller Ernährungsplan", "klare Regeln und Beispielmenüs", "Online-Kommunikation für Details"],
    nutrition: [
      { title: "Makro-Balance", text: "Klare tägliche Ziele für Protein, Kohlenhydrate und Fett passend zu Ziel und Zeitplan." },
      { title: "Echte Lebensmittel", text: "Ein Menü mit verfügbaren Produkten, einfacher Vorbereitung und Optionen für aktivere Tage." },
      { title: "Gewohnheiten, keine Extreme", text: "Schrittweise Veränderungen, die du halten kannst, ohne kurzfristige Diäten und Erschöpfung." },
      { title: "Kontrolle", text: "Wöchentliche Anpassungen nach Gewicht, Maßen, Kraft, Schlaf und Energiegefühl." }
    ],
    weekEyebrow: "Woche",
    weekTitle: "Beispiel für eine wöchentliche Trainingsstruktur",
    week: [
      ["Montag", "Kraft: Unterkörper + Core", "60 Min"],
      ["Dienstag", "Boxtechnik + Kondition", "50 Min"],
      ["Mittwoch", "Mobilität und aktive Regeneration", "35 Min"],
      ["Donnerstag", "Kraft: Oberkörper + Rücken", "60 Min"],
      ["Freitag", "Online-Check-in + Anpassungen", "30 Min"],
      ["Samstag", "Ganzkörper-Komplex", "55 Min"]
    ],
    methodEyebrow: "Methode",
    methodTitle: "Ein kontrollierter Prozess, nicht nur Motivation",
    process: [
      { icon: icons.assessment, title: "Analyse", text: "Wir beginnen mit Ziel, Erfahrung, verfügbarer Zeit, Einschränkungen und aktuellen Gewohnheiten." },
      { icon: icons.plan, title: "Plan", text: "Du erhältst eine Struktur für Training, Ernährung und Regeneration." },
      { icon: icons.progress, title: "Fortschritt", text: "Ich verfolge deine Ergebnisse persönlich und passe den Plan an, damit du weiter vorankommst." }
    ],
    directContact: `Direkt: ${whatsappDisplay}`,
    footer: "Alles auf dieser Website wurde von mir, Svetoslav Milushev, persönlich erstellt und bestätigt. Die Pläne und die gesamte Struktur werden direkt von mir bereitgestellt."
  },
  fr: {
    ...content.en,
    langLabel: "Langue",
    nav: [
      ["Profil", "about"],
      ["Services", "services"],
      ["Réservation", "booking"]
    ],
    headerCta: "Réserver",
    heroEyebrow: "Boxe, fitness et nutrition",
    heroTitle: "Des plans individuels d'entraînement et de nutrition, précisément adaptés à ton emploi du temps.",
    heroText:
      "Un système autonome pour séances privées de boxe, instructions fitness en ligne, plans nutritionnels et régime alimentaire structuré.",
    heroPrimary: "Réserver une séance",
    heroSecondary: "Contact WhatsApp",
    whatsappCta: "Écrire sur WhatsApp",
    soloText: "Plus de 20 ans d'expérience en boxe, un parcours semi-professionnel jusqu'au ring professionnel, de nombreux résultats et victoires, ainsi qu'une expérience internationale dans plus de 50 pays. Deuxième discipline: l'athlétisme, avec 8 titres nationaux et une qualification européenne. Je travaille également dans un secteur de sécurité de haut niveau, axé sur la protection antiterroriste. Je suis aussi moniteur de ski et diplômé de l'Académie nationale des sports avec la première place et le meilleur résultat académique.",
    focusTitle: "Boxe + nutrition",
    stats: [
      { value: "12+", label: "séances par semaine" },
      { value: "3", label: "niveaux d'entraînement" },
      { value: "24/7", label: "guidance en ligne" }
    ],
    focusItems: ["La technique avant la charge", "Instructions en ligne"],
    coverTitle: "Entraînement de boxe",
    gymPhotoEyebrow: "environnement d'entraînement",
    gymPhotoTitle: "Travail en salle avec un vrai rythme d'entraînement",
    gymPhotoText: "L'entraînement est construit autour de la technique, de la distance, du contrôle et du mouvement constant dans un environnement de travail réel.",
    aboutEyebrow: "profil",
    aboutTitle: "À propos du coach et de la communauté d'entraînement",
    soloTitle: "Approche personnelle",
    groupTitle: "Entraînement en groupe",
    groupText: "Un environnement pour les personnes qui veulent du mouvement, de la technique de boxe, de la motivation et de la régularité.",
    groupBadge: "entraînement en groupe",
    servicesEyebrow: "services",
    servicesTitle: "Axes principaux",
    services: [
      {
        icon: icons.boxing,
        title: "Entraînement de boxe",
        text: "Travail individuel sur la garde, les coups, la défense, le déplacement, la réaction et la condition physique.",
        points: ["entraînement personnel", "entraînement en groupe", "préparation compétition", "technique et condition physique"]
      },
      {
        icon: icons.online,
        title: "Coach fitness en ligne",
        text: "Tu reçois des instructions, un plan hebdomadaire et des corrections en ligne, sans présence obligatoire en salle.",
        points: ["exercices guidés", "planning hebdomadaire"]
      },
      {
        icon: icons.nutrition,
        title: "Plan nutritionnel personnel",
        text: "Nutrition pratique selon ton objectif, ton quotidien, tes préférences et tes habitudes réelles.",
        points: ["calories et macros", "exemples de menus", "ajustements hebdomadaires"]
      }
    ],
    programsEyebrow: "programmes",
    programsTitle: "Plans selon ton objectif",
    programs: [
      {
        icon: icons.strength,
        title: "Force et forme",
        text: "Séances de force structurées pour le tonus musculaire, la stabilité et un progrès visible sans surcharge aléatoire.",
        details: ["3-5 séances par semaine", "charge progressive", "correction technique"]
      },
      {
        icon: icons.conditioning,
        title: "Endurance et condition",
        text: "Séances fonctionnelles avec cardio, mobilité et intervalles pour plus d'énergie et de résistance.",
        details: ["blocs HIIT", "base aérobie", "récupération"]
      },
      {
        icon: icons.instructions,
        title: "Instructions en ligne",
        text: "Un plan clair avec exercices, séries, répétitions, tempo et notes d'exécution.",
        details: ["bilan hebdomadaire", "corrections en ligne"]
      }
    ],
    bookingEyebrow: "réservation",
    bookingTitle: "Réserver une séance ou commencer avec un plan en ligne",
    bookingCardTitle: "Choisis un service, un objectif et un horaire adapté.",
    bookingCardText:
      "Pour le moment, les paiements sont organisés individuellement après un contact direct. Une fois le service confirmé, tu reçois le prix final et le mode de paiement adapté.",
    bookingItems: [
      "Première consultation",
      "Séance privée",
      "Plan en ligne",
      "Plan nutritionnel"
    ],
    paymentInfoBadge: "paiement",
    paymentInfoTitle: "Lien Stripe individuel ou virement bancaire",
    paymentInfoText: "Chaque paiement client sera envoyé sous forme de lien Stripe généré individuellement pour le service confirmé. Un virement bancaire direct pourra aussi être proposé après confirmation.",
    paymentInfoItems: ["prix final avant paiement", "lien Stripe personnel", "option de virement bancaire direct"],
    nutritionEyebrow: "nutrition",
    nutritionTitle: "Plan nutritionnel personnel pour mieux manger",
    nutritionCardTitle: "Pas d'extrêmes. Des règles claires.",
    nutritionCardText: "Le plan est construit dans la direction souhaitée par le client et adapté à son emploi du temps quotidien. L'objectif est le contrôle des calories, suffisamment de protéines, une énergie stable et moins d'improvisation.",
    nutritionOfferBadge: "plan prêt",
    nutritionOfferTitle: "Plan nutritionnel avec prix final",
    nutritionOfferText: "Commence directement avec un plan nutritionnel personnel, adapté à ton emploi du temps, ton objectif et tes habitudes réelles. C'est le paiement du plan complet avec un prix final clair.",
    nutritionOfferItems: ["plan nutritionnel individuel", "règles claires et exemples de menus", "communication en ligne pour les détails"],
    nutrition: [
      { title: "Équilibre des macros", text: "Objectifs quotidiens clairs pour protéines, glucides et lipides selon ton objectif et ton planning." },
      { title: "Aliments réels", text: "Un menu avec des produits accessibles, une préparation simple et des options pour les jours plus actifs." },
      { title: "Habitudes, pas extrêmes", text: "Des changements progressifs que tu peux maintenir sans régimes courts et épuisement." },
      { title: "Suivi", text: "Ajustements hebdomadaires selon le poids, les mensurations, la force, le sommeil et l'énergie." }
    ],
    weekEyebrow: "semaine",
    weekTitle: "Exemple de structure hebdomadaire d'entraînement",
    week: [
      ["Lundi", "Force: bas du corps + tronc", "60 min"],
      ["Mardi", "Technique de boxe + condition", "50 min"],
      ["Mercredi", "Mobilité et récupération active", "35 min"],
      ["Jeudi", "Force: haut du corps + dos", "60 min"],
      ["Vendredi", "Bilan en ligne + ajustements", "30 min"],
      ["Samedi", "Complexe corps complet", "55 min"]
    ],
    methodEyebrow: "méthode",
    methodTitle: "Un processus contrôlé, pas seulement de la motivation",
    process: [
      { icon: icons.assessment, title: "Évaluation", text: "Nous commençons par ton objectif, ton expérience, ton temps disponible, tes limites et tes habitudes actuelles." },
      { icon: icons.plan, title: "Plan", text: "Tu reçois une structure pour l'entraînement, la nutrition et la récupération." },
      { icon: icons.progress, title: "Progrès", text: "Je suis personnellement tes résultats et j'ajuste le plan pour que tu continues d'avancer." }
    ],
    directContact: `Direct: ${whatsappDisplay}`,
    footer: "Tout ce qui se trouve sur ce site est construit et confirmé personnellement par moi, Svetoslav Milushev. Les plans et toute la structure sont fournis directement par moi."
  },
  es: {
    ...content.en,
    langLabel: "Idioma",
    nav: [
      ["Sobre mí", "about"],
      ["Servicios", "services"],
      ["Reserva", "booking"]
    ],
    headerCta: "Reservar",
    heroEyebrow: "Boxeo, fitness y nutrición",
    heroTitle: "Planes individuales de entrenamiento y nutrición, adaptados con precisión a tu horario diario.",
    heroText:
      "Un sistema independiente para sesiones privadas de boxeo, instrucciones fitness online, planes nutricionales y régimen alimenticio.",
    heroPrimary: "Reservar entrenamiento",
    heroSecondary: "Contacto WhatsApp",
    whatsappCta: "Escribir por WhatsApp",
    soloText: "Más de 20 años de experiencia en boxeo, una trayectoria semiprofesional hasta el ring profesional, numerosos logros y victorias, y experiencia internacional en más de 50 países. Segundo deporte: atletismo, con 8 títulos nacionales y una clasificación europea. También trabajo en un sector de seguridad de alto nivel, enfocado en la protección antiterrorista. Soy instructor de esquí y me gradué en la Academia Nacional de Deportes en primer lugar, con el mejor resultado académico.",
    stats: [
      { value: "12+", label: "sesiones semanales" },
      { value: "3", label: "niveles de entrenamiento" },
      { value: "24/7", label: "guía online" }
    ],
    focusItems: ["Técnica antes de la carga", "Instrucciones online"],
    coverTitle: "Entrenamiento de boxeo",
    gymPhotoEyebrow: "entorno de entrenamiento",
    gymPhotoTitle: "Trabajo en gimnasio con ritmo real de entrenamiento",
    gymPhotoText: "El entrenamiento se construye alrededor de técnica, distancia, control y movimiento constante en un entorno real de trabajo.",
    aboutEyebrow: "sobre mí",
    aboutTitle: "Sobre el coach y la comunidad de entrenamiento",
    soloTitle: "Enfoque personal",
    groupTitle: "Entrenamiento en grupo",
    groupText: "Un entorno para personas que buscan movimiento, técnica de boxeo, motivación y constancia en un ritmo común.",
    groupBadge: "entrenamiento en grupo",
    servicesEyebrow: "servicios",
    servicesTitle: "Áreas principales",
    services: [
      {
        icon: icons.boxing,
        title: "Entrenamiento de boxeo",
        text: "Trabajo individual sobre guardia, golpes, defensa, movimiento, reacción y condición física.",
        points: ["entrenamiento personal", "entrenamiento en grupo", "preparación para competición", "técnica y condición física"]
      },
      {
        icon: icons.online,
        title: "Coach fitness online",
        text: "Recibes instrucciones, un plan semanal y correcciones online, sin presencia obligatoria en gimnasio.",
        points: ["ejercicios guiados", "horario semanal"]
      },
      {
        icon: icons.nutrition,
        title: "Plan nutricional personal",
        text: "Nutrición práctica basada en tu objetivo, rutina diaria, preferencias y hábitos reales.",
        points: ["calorías y macros", "menús de ejemplo", "ajustes semanales"]
      }
    ],
    programsEyebrow: "programas",
    programsTitle: "Planes según tu objetivo",
    programs: [
      {
        icon: icons.strength,
        title: "Fuerza y forma",
        text: "Sesiones de fuerza estructuradas para tono muscular, estabilidad y progreso visible sin sobrecarga aleatoria.",
        details: ["3-5 sesiones semanales", "carga progresiva", "corrección técnica"]
      },
      {
        icon: icons.conditioning,
        title: "Resistencia y condición",
        text: "Sesiones funcionales con cardio, movilidad e intervalos para más energía y resistencia.",
        details: ["bloques HIIT", "base aeróbica", "recuperación"]
      },
      {
        icon: icons.instructions,
        title: "Instrucciones online",
        text: "Un plan claro con ejercicios, series, repeticiones, tempo y notas de ejecución.",
        details: ["revisión semanal", "correcciones online"]
      }
    ],
    bookingEyebrow: "reserva",
    bookingTitle: "Reserva una sesión o empieza con un plan online",
    bookingCardTitle: "Elige un servicio, objetivo y horario adecuado.",
    bookingCardText:
      "Por ahora, los pagos se organizan individualmente después del contacto directo. Una vez confirmado el servicio, recibes el precio final y el método de pago adecuado.",
    bookingItems: [
      "Primera consulta",
      "Sesión privada",
      "Plan online",
      "Plan nutricional"
    ],
    paymentInfoBadge: "pago",
    paymentInfoTitle: "Enlace Stripe individual o transferencia bancaria",
    paymentInfoText: "Cada pago de cliente se enviará como un enlace de pago Stripe generado individualmente para el servicio confirmado. También puede ofrecerse transferencia bancaria directa después de la confirmación.",
    paymentInfoItems: ["precio final antes del pago", "enlace Stripe personal", "opción de transferencia bancaria directa"],
    nutritionEyebrow: "nutrición",
    nutritionTitle: "Plan nutricional personal para comer mejor",
    nutritionCardTitle: "Sin extremos. Reglas claras.",
    nutritionCardText: "El plan se construye en la dirección que desea el cliente, adaptado a su horario diario. El objetivo es control calórico, suficiente proteína, energía estable y menos improvisación.",
    nutritionOfferBadge: "plan listo",
    nutritionOfferTitle: "Plan nutricional con precio final",
    nutritionOfferText: "Empieza directamente con un plan nutricional personal, creado alrededor de tu horario, objetivo y hábitos reales. Es el pago del plan completo con precio final claro.",
    nutritionOfferItems: ["plan nutricional individual", "reglas claras y menús de ejemplo", "comunicación online para detalles"],
    nutrition: [
      { title: "Equilibrio de macros", text: "Objetivos diarios claros de proteínas, carbohidratos y grasas según tu objetivo y horario." },
      { title: "Comida real", text: "Un menú con productos accesibles, preparación sencilla y opciones para días más activos." },
      { title: "Hábitos, no extremos", text: "Cambios graduales que puedes mantener sin dietas cortas ni agotamiento." },
      { title: "Seguimiento", text: "Ajustes semanales según peso, medidas, fuerza, sueño y sensación de energía." }
    ],
    weekEyebrow: "semana",
    weekTitle: "Ejemplo de estructura semanal de entrenamiento",
    week: [
      ["Lunes", "Fuerza: tren inferior + core", "60 min"],
      ["Martes", "Técnica de boxeo + condición", "50 min"],
      ["Miércoles", "Movilidad y recuperación activa", "35 min"],
      ["Jueves", "Fuerza: tren superior + espalda", "60 min"],
      ["Viernes", "Revisión online + ajustes", "30 min"],
      ["Sábado", "Complejo de cuerpo completo", "55 min"]
    ],
    methodEyebrow: "método",
    methodTitle: "Un proceso controlado, no solo motivación",
    process: [
      { icon: icons.assessment, title: "Evaluación", text: "Empezamos con tu objetivo, experiencia, tiempo disponible, limitaciones y hábitos actuales." },
      { icon: icons.plan, title: "Plan", text: "Recibes una estructura para entrenamiento, nutrición y recuperación." },
      { icon: icons.progress, title: "Progreso", text: "Sigo personalmente tus resultados y ajusto el plan para que sigas avanzando." }
    ],
    directContact: `Directo: ${whatsappDisplay}`,
    footer: "Todo lo que aparece en este sitio está creado y confirmado personalmente por mí, Svetoslav Milushev. Los planes y toda la estructura son proporcionados directamente por mí."
  }
};

type TrainerSearchParams = {
  lang?: string | string[];
};

function getLang(searchParams?: TrainerSearchParams): Lang {
  const lang = Array.isArray(searchParams?.lang) ? searchParams?.lang[0] : searchParams?.lang;
  return supportedLangs.includes(lang as Lang) ? (lang as Lang) : defaultLang;
}

function href(lang: Lang, id?: string) {
  const base = lang === defaultLang ? "/" : "/trainer";
  const query = lang === defaultLang ? "" : `?lang=${lang}`;
  return `${base}${query}${id ? `#${id}` : ""}`;
}

export default function TrainerPage({ searchParams }: { searchParams?: TrainerSearchParams }) {
  const lang = getLang(searchParams);
  const copy = localizedContent[lang];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-emerald-300/10 bg-black/75 backdrop-blur-xl">
        <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-6 lg:px-8">
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
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex max-w-[58vw] items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[.04] p-1 text-[11px] text-white/65 sm:max-w-none sm:flex-wrap sm:text-xs">
              <Globe2 size={14} className="ml-1 text-emerald-200 sm:ml-2" />
              {supportedLangs.map((item) => (
                <Link
                  key={item}
                  href={href(item)}
                  className={`whitespace-nowrap rounded-full px-2.5 py-1.5 uppercase transition sm:px-3 ${item === lang ? "bg-emerald-200 text-black" : "hover:text-white"}`}
                >
                  {item}
                </Link>
              ))}
            </div>
            <Link href={href(lang, "booking")} className="whitespace-nowrap rounded-full border border-emerald-200/40 px-3 py-2 text-sm text-emerald-100 transition hover:bg-emerald-200 hover:text-black sm:px-4">
              {copy.headerCta}
            </Link>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={copy.whatsappCta}
              className="hidden items-center gap-2 rounded-full border border-emerald-200/40 px-3 py-2 text-sm text-emerald-100 transition hover:bg-emerald-200 hover:text-black sm:inline-flex"
            >
              <MessageCircle size={17} />
              WhatsApp
            </Link>
          </div>
        </nav>
      </header>

      <section className="relative z-10 overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_22%,rgba(16,185,129,.16),transparent_28%)]" />
        <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[.28em] text-emerald-200 sm:tracking-[.4em]">{copy.heroEyebrow}</p>
            <h1 className="font-display text-4xl leading-[1.03] text-white sm:text-5xl md:text-7xl">{copy.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{copy.heroText}</p>
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={href(lang, "booking")} className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-200 px-6 py-3 text-sm font-medium text-black transition hover:bg-white">
                  {copy.heroPrimary} <ArrowRight size={16} />
                </Link>
                <Link href={href(lang, "services")} className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200/30 px-6 py-3 text-sm font-medium text-emerald-100 transition hover:bg-emerald-200 hover:text-black">
                  {copy.heroSecondary}
                </Link>
                <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-emerald-200 hover:text-emerald-100">
                  {copy.whatsappCta} <MessageCircle size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-emerald-200/20 bg-white/[.04] shadow-[0_30px_100px_rgba(0,0,0,.5)]">
              <div className="relative aspect-[4/5] min-h-[360px] sm:min-h-[520px]">
                <Image
                  src={promoImages.cover}
                  alt={copy.coverTitle}
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover object-[50%_18%]"
                />
              </div>
              <div className="border-t border-emerald-200/20 bg-emerald-200/[.08] p-4">
                <p className="text-[10px] uppercase tracking-[.24em] text-emerald-100">Svetoslav Milushev</p>
                <p className="mt-2 text-sm leading-6 text-white/82">{copy.footer}</p>
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

      <Section eyebrow={copy.gymPhotoEyebrow} title={copy.gymPhotoTitle} className="scroll-mt-24">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-emerald-200/20 bg-black">
            <Image
              src={promoImages.gym}
              alt={copy.gymPhotoTitle}
              fill
              sizes="(min-width: 1024px) 64vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[.04] p-6">
            <p className="text-sm leading-7 text-white/68">{copy.gymPhotoText}</p>
            <div className="mt-6 grid gap-2">
              {copy.focusItems.map((item) => (
                <p key={item} className="rounded-md border border-white/10 px-3 py-2 text-sm text-white/70">{item}</p>
              ))}
            </div>
          </div>
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
        <div className="rounded-lg border border-emerald-200/25 bg-black/35 p-7 lg:p-9">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <div>
            <CalendarCheck className="text-emerald-200" size={36} />
            <h3 className="mt-6 font-display text-4xl">{copy.bookingCardTitle}</h3>
            <p className="mt-5 text-base leading-8 text-white/68">{copy.bookingCardText}</p>
            <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-200/35 px-5 py-2.5 text-sm text-emerald-100 transition hover:bg-emerald-200 hover:text-black">
              {copy.whatsappCta} <MessageCircle size={16} />
            </Link>
            <div className="mt-6 grid gap-3 text-sm text-white/70">
              {copy.bookingItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 px-4 py-3">
                  <CheckCircle2 size={18} className="text-emerald-200" />
                  {item}
                </div>
              ))}
            </div>
            </div>
            <div className="mt-6 rounded-lg border border-emerald-200/20 bg-emerald-200/[.06] p-5">
              <p className="text-xs uppercase tracking-[.26em] text-emerald-100">{copy.paymentInfoBadge}</p>
              <h4 className="mt-3 font-display text-3xl text-white">{copy.paymentInfoTitle}</h4>
              <p className="mt-4 text-sm leading-7 text-white/68">{copy.paymentInfoText}</p>
              <div className="mt-5 grid gap-2">
                {copy.paymentInfoItems.map((item) => (
                  <p key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-black/25 px-3 py-2 text-sm text-white/72">
                    <CheckCircle2 size={16} className="shrink-0 text-emerald-200" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow={copy.nutritionEyebrow} title={copy.nutritionTitle} className="scroll-mt-24" id="nutrition">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-lg border border-emerald-200/25 bg-black/35 p-7">
            <Utensils className="text-emerald-200" size={36} />
            <h3 className="mt-6 font-display text-4xl">{copy.nutritionCardTitle}</h3>
            <p className="mt-5 text-base leading-8 text-white/68">{copy.nutritionCardText}</p>
            <div className="mt-7 rounded-lg border border-emerald-200/25 bg-emerald-200/[.06] p-5">
              <p className="text-xs uppercase tracking-[.28em] text-emerald-100">{copy.nutritionOfferBadge}</p>
              <h4 className="mt-3 font-display text-3xl text-white">{copy.nutritionOfferTitle}</h4>
              <p className="mt-4 text-sm leading-7 text-white/68">{copy.nutritionOfferText}</p>
              <div className="mt-5 grid gap-2">
                {copy.nutritionOfferItems.map((item) => (
                  <p key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-black/25 px-3 py-2 text-sm text-white/72">
                    <CheckCircle2 size={16} className="shrink-0 text-emerald-200" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
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

      <footer className="relative z-10 border-t border-emerald-300/10 bg-black px-4 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-xl tracking-[.16em] text-white">TRAINING SYSTEM</p>
          <p>Svetoslav Milushev</p>
        </div>
      </footer>
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`WhatsApp ${whatsappDisplay}`}
        className="fixed bottom-20 right-5 z-50 hidden h-12 w-12 items-center justify-center rounded-full bg-green-500 text-black shadow-[0_16px_50px_rgba(0,0,0,.45)] transition hover:bg-white sm:inline-flex"
      >
        <MessageCircle size={18} />
        <span className="sr-only">WhatsApp {whatsappDisplay}</span>
      </Link>
      <Link
        href={phoneUrl}
        aria-label={`Call ${whatsappDisplay}`}
        className="fixed bottom-5 right-5 z-50 hidden h-12 w-12 items-center justify-center rounded-full bg-emerald-200 text-black shadow-[0_16px_50px_rgba(0,0,0,.45)] transition hover:bg-white sm:inline-flex"
      >
        <Phone size={18} />
        <span className="sr-only">Call {whatsappDisplay}</span>
      </Link>
    </>
  );
}
