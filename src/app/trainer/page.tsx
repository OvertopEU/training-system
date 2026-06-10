import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Apple,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  CreditCard,
  Dumbbell,
  Flame,
  Globe2,
  HeartPulse,
  MessageCircle,
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

type Lang = "en" | "bg" | "uk" | "de" | "fr" | "es";

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
      uk: "/trainer?lang=uk",
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
  deposit: Wallet,
  payment: CreditCard,
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

function whatsappMessageUrl(message: string) {
  return `${whatsappUrl}&text=${encodeURIComponent(message)}`;
}

const content = {
  bg: {
    langLabel: "Език",
    menuLabel: "Меню",
    scriptureRef: "Псалми 23:1–6",
    nav: [
      ["За мен", "about"],
      ["Услуги", "services"],
      ["Записване", "booking"],
      ["Плащане", "payment"]
    ],
    headerCta: "Запази",
    heroOffer: "Безплатна консултация",
    heroEyebrow: "Тренирай, храни се, спи, повтори.",
    heroTitle: "Персонален план за сила, тяло и дисциплина. Структура за успех.",
    heroText: "Цялостна система за тренировки, хранене, индивидуални планове и занимания по бокс. С моя опит и твоето желание резултатите се превръщат в естествена част от процеса.",
    heroPrimary: "Запази консултация",
    heroSecondary: "Виж услугите",
    whatsappCta: "Пиши в WhatsApp",
    chatTitle: "Как мога да помогна?",
    chatPrompt: "Избери тема",
    chatConsultation: "Запази консултация",
    chatTraining: "Питай за тренировки",
    chatNutrition: "Питай за хранителен режим",
    focusTitle: "Бокс + хранене",
    stats: [
      { value: "12+", label: "тренировки седмично" },
      { value: "3", label: "нива на натоварване" },
      { value: "24/7", label: "онлайн насоки" }
    ],
    focusItems: ["Техника преди натоварване", "Онлайн инструкции"],
    coverTitle: "Тренировки по бокс",
    gymPhotoEyebrow: "тренировъчна среда",
    gymPhotoTitle: "Работа в зала с реален ритъм",
    gymPhotoText: "Тренировките се изграждат около техника, дистанция, контрол и постоянно движение в работна среда.",
    aboutEyebrow: "за мен",
    aboutTitle: "За треньора и тренировъчната общност",
    soloTitle: "Личен подход",
    soloText: "20+ години опит в бокса, полупрофесионален път до професионален ринг, редица постижения и победи с международен опит в над 50 държави. Втори спорт: лека атлетика с 8 национални титли и европейска квота.",
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
        points: ["персонални тренировки", "групови тренировки", "подготовка за състезания", "техника и кондиционни тренировки"]
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
    bookingEyebrow: "записване",
    bookingTitle: "Записване за тренировка или онлайн режим",
    bookingCardTitle: "Избери услуга, цел и удобен график.",
    bookingCardText: "Секцията за записване е предназначена за тренировки по бокс, онлайн фитнес насоки и хранителни режими. След заявката уточняваме часа, депозита и начина за връзка.",
    bookingItems: ["Първа консултация", "Индивидуална тренировка", "Онлайн режим", "Хранителен план"],
    directContact: `За директна връзка пиши в WhatsApp: ${whatsappDisplay}.`,
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
    depositCta: "Към записване",
    paymentSuccess: "Плащането е прието. Ще получиш потвърждение и следващи стъпки.",
    paymentCancelled: "Плащането беше прекъснато. Можеш да опиташ отново, когато си готов.",
    footer: "Тренировки, онлайн инструкции, бокс подготовка, хранителни режими и плащане."
  },
  en: {
    langLabel: "Language",
    menuLabel: "Menu",
    scriptureRef: "Psalm 23:1–6",
    nav: [
      ["About", "about"],
      ["Services", "services"],
      ["Booking", "booking"],
      ["Payment", "payment"]
    ],
    headerCta: "Book",
    heroOffer: "Free consultation",
    heroEyebrow: "Train, eat, sleep, repeat.",
    heroTitle: "A personal plan for strength, body and discipline. A structure for success.",
    heroText: "A complete system for training, nutrition, personalised plans and boxing sessions. With my experience and your commitment, results become a natural part of the process.",
    heroPrimary: "Book a consultation",
    heroSecondary: "View services",
    whatsappCta: "Message on WhatsApp",
    chatTitle: "How can I help?",
    chatPrompt: "Choose a topic",
    chatConsultation: "Book a consultation",
    chatTraining: "Ask about training",
    chatNutrition: "Ask about nutrition",
    focusTitle: "Boxing + nutrition",
    stats: [
      { value: "12+", label: "weekly sessions" },
      { value: "3", label: "training levels" },
      { value: "24/7", label: "online guidance" }
    ],
    focusItems: ["Technique before intensity", "Online guidance"],
    coverTitle: "Boxing training",
    gymPhotoEyebrow: "training environment",
    gymPhotoTitle: "Train in a real gym environment",
    gymPhotoText: "Training is built around technique, distance, control and consistent movement in a working gym environment.",
    aboutEyebrow: "about",
    aboutTitle: "About the coach and training community",
    soloTitle: "Personal approach",
    soloText: "20+ years of boxing experience, a semi-professional path up to the professional ring, multiple achievements and wins with international experience across 50+ countries. Second sport: athletics with 8 national titles and a European quota.",
    groupTitle: "Group training",
    groupText: "A training environment for people who want movement, boxing technique, motivation and consistency.",
    groupBadge: "group training",
    servicesEyebrow: "services",
    servicesTitle: "Core services",
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
    directContact: `For direct contact, message on WhatsApp: ${whatsappDisplay}.`,
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
    nutritionTitle: "A personal plan for better nutrition",
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
      ["Saturday", "Full-body session", "55 min"]
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
    paymentSuccess: "Payment received. You will get confirmation and next steps.",
    paymentCancelled: "Payment was cancelled. You can try again when you are ready.",
    footer: "Training, online instructions, boxing preparation, nutrition plans and payment."
  }
};

const supportedLangs = ["en", "bg", "uk", "de", "fr", "es"] as const;
const defaultLang: Lang = "en";
const languageLabels: Record<Lang, string> = {
  en: "EN",
  bg: "BG",
  uk: "UA",
  de: "DE",
  fr: "FR",
  es: "ES"
};

const scriptureVerses: Record<Lang, string[]> = {
  bg: [
    "Господ е Пастир мой; няма да остана в нужда.",
    "На зелени пасбища ме успокоява; при тихи води ме завежда.",
    "Освежава душата ми; води ме през прави пътеки заради името Си.",
    "Да! И в долината на мрачната сянка, ако ходя, няма да се уплаша от зло; защото Ти си с мене; Твоят жезъл и Твоята тояга – те ме утешават.",
    "Приготвяш пред мене трапеза в присъствието на неприятелите ми, помазал си с миро главата ми; чашата ми прелива.",
    "Наистина благост и милост ще ме следват през всичките дни на живота ми; и аз ще живея завинаги в дома Господен."
  ],
  en: [
    "The Lord is my Shepherd; I will lack nothing.",
    "He gives me rest in green pastures and leads me beside quiet waters.",
    "He restores my soul and guides me along right paths for his name’s sake.",
    "Even when I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff comfort me.",
    "You prepare a table before me in the presence of my enemies; you anoint my head with oil, and my cup overflows.",
    "Surely goodness and mercy will follow me all the days of my life, and I will dwell in the house of the Lord forever."
  ],
  uk: [
    "Господь — мій Пастир; я не матиму нестачі.",
    "Він дає мені спочинок на зелених пасовищах і веде до тихих вод.",
    "Він відновлює мою душу й веде мене праведними стежками заради Свого імені.",
    "Навіть коли піду долиною темної тіні, не злякаюся зла, бо Ти зі мною; Твій жезл і Твій посох утішають мене.",
    "Ти готуєш переді мною трапезу в присутності моїх ворогів; помазуєш мою голову оливою, і моя чаша переповнена.",
    "Так, добро й милість супроводжуватимуть мене всі дні мого життя, і я житиму в домі Господньому повіки."
  ],
  de: [
    "Der Herr ist mein Hirte; mir wird nichts fehlen.",
    "Er lässt mich auf grünen Weiden ruhen und führt mich zu stillen Wassern.",
    "Er erquickt meine Seele und führt mich auf rechten Wegen um seines Namens willen.",
    "Auch wenn ich durch das dunkelste Tal gehe, fürchte ich kein Unheil, denn du bist bei mir; dein Stab und deine Stütze trösten mich.",
    "Du bereitest vor mir einen Tisch im Angesicht meiner Feinde; du salbst mein Haupt mit Öl, und mein Becher fließt über.",
    "Güte und Barmherzigkeit werden mir alle Tage meines Lebens folgen, und ich werde für immer im Haus des Herrn wohnen."
  ],
  fr: [
    "Le Seigneur est mon berger : je ne manquerai de rien.",
    "Il me fait reposer dans de verts pâturages et me conduit près des eaux paisibles.",
    "Il restaure mon âme et me guide sur de justes sentiers à cause de son nom.",
    "Même si je marche dans la vallée la plus sombre, je ne crains aucun mal, car tu es avec moi ; ton bâton et ta houlette me rassurent.",
    "Tu dresses devant moi une table en présence de mes ennemis ; tu verses de l’huile sur ma tête et ma coupe déborde.",
    "Oui, la bonté et la grâce m’accompagneront tous les jours de ma vie, et j’habiterai pour toujours dans la maison du Seigneur."
  ],
  es: [
    "El Señor es mi Pastor; nada me faltará.",
    "Me hace descansar en verdes praderas y me conduce junto a aguas tranquilas.",
    "Restaura mi alma y me guía por caminos rectos por amor de su nombre.",
    "Aunque camine por el valle más oscuro, no temeré mal alguno, porque tú estás conmigo; tu vara y tu cayado me consuelan.",
    "Preparas una mesa ante mí en presencia de mis enemigos; unges mi cabeza con aceite y mi copa rebosa.",
    "Ciertamente, la bondad y la misericordia me seguirán todos los días de mi vida, y habitaré para siempre en la casa del Señor."
  ]
};
type TrainerCopy = typeof content.en;

const localizedContent: Record<Lang, TrainerCopy> = {
  en: content.en,
  bg: content.bg,
  uk: {
    ...content.en,
    langLabel: "Мова",
    menuLabel: "Меню",
    scriptureRef: "Псалом 23:1–6",
    nav: [
      ["Про мене", "about"],
      ["Послуги", "services"],
      ["Запис", "booking"],
      ["Оплата", "payment"]
    ],
    headerCta: "Записатися",
    heroOffer: "Безкоштовна консультація",
    heroEyebrow: "Тренуйся, харчуйся, спи, повторюй.",
    heroTitle: "Персональний план для сили, тіла та дисципліни. Структура для успіху.",
    heroText: "Комплексна система тренувального режиму, харчування, індивідуальних планів і занять з боксу. Завдяки моєму досвіду та вашому бажанню результат стає невіддільною частиною процесу.",
    heroPrimary: "Записатися на консультацію",
    heroSecondary: "Переглянути послуги",
    whatsappCta: "Написати у WhatsApp",
    chatTitle: "Чим можу допомогти?",
    chatPrompt: "Оберіть тему",
    chatConsultation: "Записатися на консультацію",
    chatTraining: "Запитати про тренування",
    chatNutrition: "Запитати про харчування",
    focusTitle: "Бокс + харчування",
    stats: [
      { value: "12+", label: "занять на тиждень" },
      { value: "3", label: "рівні навантаження" },
      { value: "24/7", label: "онлайн-підтримка" }
    ],
    focusItems: ["Техніка перед навантаженням", "Онлайн-інструкції"],
    coverTitle: "Тренування з боксу",
    gymPhotoEyebrow: "тренувальне середовище",
    gymPhotoTitle: "Робота в залі у справжньому тренувальному ритмі",
    gymPhotoText: "Тренування будуються навколо техніки, дистанції, контролю та постійного руху в робочому середовищі залу.",
    aboutEyebrow: "про мене",
    aboutTitle: "Про тренера та тренувальну спільноту",
    soloTitle: "Персональний підхід",
    soloText: "Понад 20 років досвіду в боксі, напівпрофесійний шлях до професійного рингу, численні досягнення та перемоги, а також міжнародний досвід у понад 50 країнах. Другий вид спорту — легка атлетика: 8 національних титулів і кваліфікація на європейські змагання.",
    groupTitle: "Групові тренування",
    groupText: "Середовище для людей, які прагнуть руху, боксерської техніки, мотивації та стабільного прогресу.",
    groupBadge: "групові тренування",
    servicesEyebrow: "послуги",
    servicesTitle: "Основні напрямки",
    services: [
      {
        icon: icons.boxing,
        title: "Тренування з боксу",
        text: "Індивідуальна робота над стійкою, ударами, захистом, рухом, реакцією та фізичною підготовкою.",
        points: ["персональні тренування", "групові тренування", "підготовка до змагань", "технічна та фізична підготовка"]
      },
      {
        icon: icons.online,
        title: "Онлайн-фітнес-тренер",
        text: "Отримуйте інструкції, тижневий план і коригування онлайн без обов'язкової присутності в залі.",
        points: ["вправи з інструкціями", "тижневий графік"]
      },
      {
        icon: icons.nutrition,
        title: "Персональний план харчування",
        text: "Практичне харчування відповідно до вашої мети, розпорядку дня, уподобань і реальних звичок.",
        points: ["калорії та макронутрієнти", "приклади меню", "щотижневі коригування"]
      }
    ],
    programsEyebrow: "програми",
    programsTitle: "Програми відповідно до вашої мети",
    programs: [
      {
        icon: icons.strength,
        title: "Сила та форма",
        text: "Структуровані силові тренування для м'язового тонусу, стабільності та помітного прогресу без хаотичного навантаження.",
        details: ["3–5 тренувань на тиждень", "поступове збільшення навантаження", "коригування техніки"]
      },
      {
        icon: icons.conditioning,
        title: "Витривалість і кондиція",
        text: "Функціональні заняття з кардіо, мобільністю та інтервалами для більшої енергії й витривалості.",
        details: ["HIIT-блоки", "аеробна база", "відновлення"]
      },
      {
        icon: icons.instructions,
        title: "Онлайн-інструкції",
        text: "Чіткий план із вправами, підходами, повтореннями, темпом і примітками щодо виконання.",
        details: ["відеоінструкції", "щотижневий звіт", "онлайн-коригування"]
      }
    ],
    bookingEyebrow: "запис",
    bookingTitle: "Запис на тренування або онлайн-програму",
    bookingCardTitle: "Оберіть послугу, мету та зручний графік.",
    bookingCardText: "Розділ запису призначений для тренувальних послуг: боксу, онлайн-фітнес-інструкцій або плану харчування. Після заявки узгоджуються час, депозит і спосіб зв'язку.",
    bookingItems: ["Перша консультація", "Індивідуальне тренування", "Онлайн-програма", "План харчування"],
    directContact: `Для прямого зв'язку напишіть у WhatsApp: ${whatsappDisplay}.`,
    form: {
      name: "Ім'я",
      namePlaceholder: "Ваше ім'я",
      contact: "Телефон або електронна пошта",
      contactPlaceholder: "Контактні дані",
      service: "Послуга",
      servicePlaceholder: "Оберіть послугу",
      serviceOptions: ["Тренування з боксу", "Онлайн-фітнес-тренер", "Персональний план харчування"],
      day: "Бажаний день",
      dayPlaceholder: "Наприклад: вівторок",
      goal: "Мета",
      goalPlaceholder: "Сила, схуднення, техніка боксу, харчування...",
      submit: "Записатися та сплатити депозит"
    },
    nutritionEyebrow: "харчування",
    nutritionTitle: "Персональний план для правильного харчування",
    nutritionCardTitle: "Без крайнощів. За чіткими правилами.",
    nutritionCardText: "План будується навколо продуктів, які ви можете купувати, готувати та регулярно використовувати. Мета — контроль калорій, достатня кількість білка, стабільна енергія та менше імпровізації.",
    nutrition: [
      { title: "Баланс макронутрієнтів", text: "Чітка добова норма білків, вуглеводів і жирів відповідно до вашої мети та графіка." },
      { title: "Звичайні продукти", text: "Меню з доступними продуктами, простим приготуванням і варіантами для активніших днів." },
      { title: "Звички, а не крайнощі", text: "Поступові зміни, яких можна дотримуватися без короткострокових дієт і виснаження." },
      { title: "Відстеження", text: "Щотижневі коригування відповідно до ваги, обхватів, сили, сну та рівня енергії." }
    ],
    weekEyebrow: "тиждень",
    weekTitle: "Приклад тижневої структури тренувань",
    week: [
      ["Понеділок", "Сила: нижня частина тіла + м'язи кора", "60 хв"],
      ["Вівторок", "Техніка боксу + кондиція", "50 хв"],
      ["Середа", "Мобільність та активне відновлення", "35 хв"],
      ["Четвер", "Сила: верхня частина тіла + спина", "60 хв"],
      ["П'ятниця", "Онлайн-звіт + коригування", "30 хв"],
      ["Субота", "Комплексне тренування всього тіла", "55 хв"]
    ],
    methodEyebrow: "метод",
    methodTitle: "Контрольований процес, а не лише мотивація",
    process: [
      { icon: icons.assessment, title: "Оцінка", text: "Починаємо з вашої мети, досвіду, вільного часу, обмежень і поточних звичок." },
      { icon: icons.plan, title: "План", text: "Ви отримуєте структуру тренувань, харчування та відновлення." },
      { icon: icons.progress, title: "Прогрес", text: "Відстежуємо результати та коригуємо план, щоб ви стабільно рухалися вперед." }
    ],
    paymentEyebrow: "депозит і оплата",
    paymentTitle: "Підтвердження перед початком",
    paymentItems: [
      { icon: icons.deposit, title: "Депозит", text: "Депозит 20% для підтвердження заняття або початку онлайн-програми." },
      { icon: icons.payment, title: "Оплата", text: "Підготовлений розділ для оплати карткою, банківським переказом або іншим обраним способом." },
      { icon: icons.confirm, title: "Підтвердження", text: "Після оплати клієнт отримує підтвердження та інформацію про наступні кроки." }
    ],
    depositTitle: "Депозит 20%",
    depositText: "Резервує заняття або запускає створення онлайн-програми тренувань і харчування.",
    depositCta: "Перейти до запису",
    paymentSuccess: "Оплату отримано. Ви отримаєте підтвердження та інформацію про наступні кроки.",
    paymentCancelled: "Оплату скасовано. Ви можете повторити спробу, коли будете готові.",
    footer: "Тренування, онлайн-інструкції, підготовка з боксу, плани харчування та оплата."
  },
  de: {
    ...content.en,
    langLabel: "Sprache",
    menuLabel: "Menü",
    scriptureRef: "Psalm 23,1–6",
    nav: [
      ["Über mich", "about"],
      ["Leistungen", "services"],
      ["Buchung", "booking"],
      ["Zahlung", "payment"]
    ],
    headerCta: "Buchen",
    heroOffer: "Kostenlose Beratung",
    heroEyebrow: "Trainieren, essen, schlafen, wiederholen.",
    heroTitle: "Ein persönlicher Plan für Kraft, Körper und Disziplin. Eine Struktur für Erfolg.",
    heroText: "Ein vollständiges System für Training, Ernährung, individuelle Pläne und Boxeinheiten. Mit meiner Erfahrung und deinem Einsatz werden Ergebnisse zu einem natürlichen Teil des Prozesses.",
    heroPrimary: "Beratung buchen",
    heroSecondary: "Leistungen ansehen",
    whatsappCta: "Auf WhatsApp schreiben",
    chatTitle: "Wie kann ich helfen?",
    chatPrompt: "Thema auswählen",
    chatConsultation: "Beratung buchen",
    chatTraining: "Frage zum Training",
    chatNutrition: "Frage zur Ernährung",
    focusTitle: "Boxen + Ernährung",
    stats: [
      { value: "1:1", label: "Personal Coaching" },
      { value: "Online", label: "Training und Ernährung" },
      { value: "20%", label: "Anzahlung" }
    ],
    focusItems: ["Technik vor Intensität", "Online-Betreuung"],
    coverTitle: "Boxtraining",
    gymPhotoEyebrow: "Trainingsumgebung",
    gymPhotoTitle: "Training im echten Studioalltag",
    gymPhotoText: "Das Training konzentriert sich auf Technik, Distanz, Kontrolle und kontinuierliche Bewegung in einer professionellen Trainingsumgebung.",
    aboutEyebrow: "über mich",
    aboutTitle: "Über den Trainer und die Trainingsgemeinschaft",
    soloTitle: "Persönlicher Ansatz",
    soloText: "Mehr als 20 Jahre Boxerfahrung, ein semiprofessioneller Weg bis in den Profiring, zahlreiche Erfolge und Siege sowie internationale Erfahrung in über 50 Ländern. Zweite Sportart: Leichtathletik mit 8 nationalen Titeln und einer Qualifikation für die Europameisterschaft.",
    groupTitle: "Gruppentraining",
    groupText: "Ein Umfeld für Menschen, die Bewegung, Boxtechnik, Motivation und beständige Fortschritte suchen.",
    groupBadge: "Gruppentraining",
    servicesEyebrow: "Leistungen",
    servicesTitle: "Unsere Schwerpunkte",
    services: [
      {
        icon: icons.boxing,
        title: "Boxtraining",
        text: "Individuelle Arbeit an Stellung, Schlägen, Verteidigung, Bewegung, Reaktion und Kondition.",
        points: ["Personal Training", "Gruppentraining", "Wettkampfvorbereitung", "Technik- und Konditionstraining"]
      },
      {
        icon: icons.online,
        title: "Online-Fitnesstraining",
        text: "Du erhältst Anleitungen, einen Wochenplan und Online-Korrekturen, ohne im Fitnessstudio anwesend sein zu müssen.",
        points: ["angeleitete Übungen", "Wochenplan"]
      },
      {
        icon: icons.nutrition,
        title: "Persönlicher Ernährungsplan",
        text: "Praktische Ernährung, abgestimmt auf dein Ziel, deinen Alltag, deine Vorlieben und deine Gewohnheiten.",
        points: ["Kalorien und Makronährstoffe", "Beispielmenüs", "wöchentliche Anpassungen"]
      }
    ],
    programsEyebrow: "Programme",
    programsTitle: "Programme passend zu deinem Ziel",
    programs: [
      {
        icon: icons.strength,
        title: "Kraft und Form",
        text: "Strukturiertes Krafttraining für Muskeltonus, Stabilität und sichtbare Fortschritte ohne planlose Überlastung.",
        details: ["3–5 Einheiten pro Woche", "progressive Belastung", "Technikkorrektur"]
      },
      {
        icon: icons.conditioning,
        title: "Ausdauer und Kondition",
        text: "Funktionelle Einheiten mit Cardio, Mobilität und Intervallen für mehr Energie und Belastbarkeit.",
        details: ["HIIT-Blöcke", "aerobe Grundlage", "Regeneration"]
      },
      {
        icon: icons.instructions,
        title: "Online-Anleitungen",
        text: "Ein klarer Plan mit Übungen, Sätzen, Wiederholungen, Tempo und Hinweisen zur Ausführung.",
        details: ["Videoanleitungen", "wöchentlicher Check-in", "Online-Korrekturen"]
      }
    ],
    bookingEyebrow: "Buchung",
    bookingTitle: "Buche eine Trainingseinheit oder starte mit einem Online-Plan.",
    bookingCardTitle: "Direkte Kommunikation",
    bookingCardText:
      "Sende deine Daten, dein Ziel und deinen bevorzugten Tag. Danach erhältst du eine Bestätigung und die nächsten Schritte.",
    bookingItems: [
      "WhatsApp-Kontakt für eine schnelle Abstimmung",
      "20% Anzahlung für die Buchung oder den Planstart",
      "Klare Bestätigung nach der Zahlung"
    ],
    directContact: `Direkt: ${whatsappDisplay}`,
    form: {
      ...content.en.form,
      name: "Name",
      namePlaceholder: "Dein Name",
      contact: "WhatsApp oder E-Mail",
      contactPlaceholder: "+44 ... oder E-Mail",
      service: "Leistung",
      servicePlaceholder: "Leistung wählen",
      day: "Bevorzugter Tag",
      dayPlaceholder: "Zum Beispiel: Dienstag",
      goal: "Ziel",
      goalPlaceholder: "Boxen, Fitness, Gewichtsverlust, Ernährung...",
      submit: "20% Anzahlung bezahlen",
      serviceOptions: ["Personal Training", "Boxtraining", "Online-Trainingsplan", "Ernährungsplan", "Komplettpaket"]
    },
    nutritionEyebrow: "Ernährung",
    nutritionTitle: "Ein persönlicher Plan für eine bessere Ernährung",
    nutritionCardTitle: "Keine Extreme. Klare Regeln.",
    nutritionCardText: "Der Plan basiert auf Lebensmitteln, die du kaufen, zubereiten und regelmäßig verwenden kannst. Ziel sind kontrollierte Kalorien, ausreichend Protein, stabile Energie und weniger Improvisation.",
    nutrition: [
      { title: "Makronährstoff-Balance", text: "Klare Tagesziele für Protein, Kohlenhydrate und Fette, abgestimmt auf dein Ziel und deinen Zeitplan." },
      { title: "Echte Lebensmittel", text: "Ein Menü mit verfügbaren Produkten, einfacher Zubereitung und Optionen für aktivere Tage." },
      { title: "Gewohnheiten statt Extreme", text: "Schrittweise Veränderungen, die du ohne kurzfristige Diäten und Erschöpfung beibehalten kannst." },
      { title: "Fortschrittskontrolle", text: "Wöchentliche Anpassungen anhand von Gewicht, Maßen, Kraft, Schlaf und Energie." }
    ],
    weekEyebrow: "Woche",
    weekTitle: "Beispiel für eine Trainingswoche",
    week: [
      ["Montag", "Kraft: Unterkörper + Rumpf", "60 Min."],
      ["Dienstag", "Boxtechnik + Kondition", "50 Min."],
      ["Mittwoch", "Mobilität und aktive Regeneration", "35 Min."],
      ["Donnerstag", "Kraft: Oberkörper + Rücken", "60 Min."],
      ["Freitag", "Online-Check-in + Anpassungen", "30 Min."],
      ["Samstag", "Ganzkörpertraining", "55 Min."]
    ],
    methodEyebrow: "Methode",
    methodTitle: "Ein kontrollierter Prozess, nicht nur Motivation",
    process: [
      { icon: icons.assessment, title: "Analyse", text: "Wir beginnen mit deinem Ziel, deiner Erfahrung, deiner verfügbaren Zeit, deinen Einschränkungen und aktuellen Gewohnheiten." },
      { icon: icons.plan, title: "Plan", text: "Du erhältst eine klare Struktur für Training, Ernährung und Regeneration." },
      { icon: icons.progress, title: "Fortschritt", text: "Wir verfolgen die Ergebnisse und passen den Plan an, damit du beständig vorankommst." }
    ],
    paymentEyebrow: "Zahlung",
    paymentTitle: "Eine einfache Anzahlung zur Bestätigung deines Termins.",
    paymentItems: [
      { icon: icons.deposit, title: "20% Anzahlung", text: "Sichert deine Buchung oder startet die Erstellung deines Online-Plans." },
      { icon: icons.payment, title: "Sichere Zahlung", text: "Die Zahlung erfolgt per Karte über Stripe Checkout mit digitaler Bestätigung." },
      { icon: icons.confirm, title: "Nächste Schritte", text: "Nach der Zahlung melde ich mich mit Termin, Plan und Vorbereitungshinweisen." }
    ],
    depositTitle: "20% Anzahlung",
    depositText: "Reserviert eine Einheit oder aktiviert die Erstellung eines Online-Trainings- und Ernährungsplans.",
    depositCta: "Zur Buchung",
    paymentSuccess: "Zahlung erhalten. Du bekommst eine Bestätigung und die nächsten Schritte.",
    paymentCancelled: "Die Zahlung wurde abgebrochen. Du kannst es erneut versuchen, wenn du bereit bist.",
    footer: "Training, Online-Anleitungen, Boxvorbereitung, Ernährungspläne und Zahlung."
  },
  fr: {
    ...content.en,
    langLabel: "Langue",
    menuLabel: "Menu",
    scriptureRef: "Psaume 23:1–6",
    nav: [
      ["Profil", "about"],
      ["Services", "services"],
      ["Réservation", "booking"],
      ["Paiement", "payment"]
    ],
    headerCta: "Réserver",
    heroOffer: "Consultation gratuite",
    heroEyebrow: "S'entraîner, manger, dormir, recommencer.",
    heroTitle: "Un programme personnel pour la force, le corps et la discipline. Une structure pour réussir.",
    heroText: "Un système complet pour l'entraînement, la nutrition, les programmes personnalisés et les séances de boxe. Avec mon expérience et votre engagement, les résultats deviennent une partie naturelle du processus.",
    heroPrimary: "Réserver une consultation",
    heroSecondary: "Voir les services",
    whatsappCta: "Écrire sur WhatsApp",
    chatTitle: "Comment puis-je vous aider ?",
    chatPrompt: "Choisissez un sujet",
    chatConsultation: "Réserver une consultation",
    chatTraining: "Question sur l'entraînement",
    chatNutrition: "Question sur la nutrition",
    focusTitle: "Boxe + nutrition",
    stats: [
      { value: "1:1", label: "Coaching privé" },
      { value: "En ligne", label: "Entraînement et nutrition" },
      { value: "20%", label: "Acompte" }
    ],
    focusItems: ["La technique avant l'intensité", "Suivi en ligne"],
    coverTitle: "Entraînement de boxe",
    gymPhotoEyebrow: "environnement d'entraînement",
    gymPhotoTitle: "S'entraîner dans les conditions réelles d'une salle",
    gymPhotoText: "L'entraînement s'articule autour de la technique, de la distance, du contrôle et d'un mouvement constant dans un environnement professionnel.",
    aboutEyebrow: "à propos",
    aboutTitle: "À propos du coach et de la communauté",
    soloTitle: "Approche personnalisée",
    soloText: "Plus de 20 ans d'expérience en boxe, un parcours semi-professionnel jusqu'au ring professionnel, de nombreux résultats et victoires, ainsi qu'une expérience internationale dans plus de 50 pays. Deuxième discipline : l'athlétisme, avec 8 titres nationaux et une qualification européenne.",
    groupTitle: "Entraînement en groupe",
    groupText: "Un environnement pour celles et ceux qui recherchent le mouvement, la technique de boxe, la motivation et une progression régulière.",
    groupBadge: "entraînement en groupe",
    servicesEyebrow: "services",
    servicesTitle: "Nos principaux services",
    services: [
      {
        icon: icons.boxing,
        title: "Entraînement de boxe",
        text: "Travail individuel sur la garde, les frappes, la défense, les déplacements, les réactions et la condition physique.",
        points: ["coaching individuel", "entraînement en groupe", "préparation aux compétitions", "technique et condition physique"]
      },
      {
        icon: icons.online,
        title: "Coach fitness en ligne",
        text: "Recevez des consignes, un programme hebdomadaire et des corrections en ligne sans devoir être présent en salle.",
        points: ["exercices guidés", "programme hebdomadaire"]
      },
      {
        icon: icons.nutrition,
        title: "Programme nutritionnel personnalisé",
        text: "Une alimentation pratique adaptée à votre objectif, votre quotidien, vos préférences et vos habitudes.",
        points: ["calories et macronutriments", "exemples de menus", "ajustements hebdomadaires"]
      }
    ],
    programsEyebrow: "programmes",
    programsTitle: "Des programmes adaptés à votre objectif",
    programs: [
      {
        icon: icons.strength,
        title: "Force et silhouette",
        text: "Des séances de renforcement structurées pour le tonus musculaire, la stabilité et des progrès visibles sans surcharge désordonnée.",
        details: ["3 à 5 séances par semaine", "progression de la charge", "correction technique"]
      },
      {
        icon: icons.conditioning,
        title: "Endurance et condition physique",
        text: "Des séances fonctionnelles avec cardio, mobilité et intervalles pour améliorer l'énergie et la résistance.",
        details: ["blocs HIIT", "base aérobie", "récupération"]
      },
      {
        icon: icons.instructions,
        title: "Consignes en ligne",
        text: "Un programme clair avec exercices, séries, répétitions, rythme et conseils d'exécution.",
        details: ["conseils vidéo", "bilan hebdomadaire", "corrections en ligne"]
      }
    ],
    bookingEyebrow: "réservation",
    bookingTitle: "Réservez une séance ou commencez un programme en ligne.",
    bookingCardTitle: "Contact direct",
    bookingCardText:
      "Envoyez vos coordonnées, votre objectif et votre jour préféré. Vous recevrez ensuite une confirmation et les prochaines étapes.",
    bookingItems: [
      "Contact WhatsApp pour une organisation rapide",
      "Acompte de 20% pour réserver ou démarrer le programme",
      "Confirmation claire après le paiement"
    ],
    directContact: `Contact direct : ${whatsappDisplay}`,
    form: {
      ...content.en.form,
      name: "Nom",
      namePlaceholder: "Votre nom",
      contact: "WhatsApp ou e-mail",
      contactPlaceholder: "+44 ... ou e-mail",
      service: "Service",
      servicePlaceholder: "Choisissez un service",
      day: "Jour préféré",
      dayPlaceholder: "Exemple: mardi",
      goal: "Objectif",
      goalPlaceholder: "Boxe, remise en forme, perte de poids, nutrition...",
      submit: "Payer l'acompte de 20%",
      serviceOptions: ["Coaching individuel", "Entraînement de boxe", "Programme en ligne", "Programme nutritionnel", "Formule complète"]
    },
    nutritionEyebrow: "nutrition",
    nutritionTitle: "Un programme personnalisé pour mieux manger",
    nutritionCardTitle: "Pas d'extrêmes. Des règles claires.",
    nutritionCardText: "Le programme repose sur des aliments que vous pouvez acheter, préparer et consommer régulièrement. L'objectif est de contrôler les calories, d'apporter suffisamment de protéines, de stabiliser l'énergie et de limiter l'improvisation.",
    nutrition: [
      { title: "Équilibre des macronutriments", text: "Des objectifs quotidiens clairs en protéines, glucides et lipides selon votre objectif et votre emploi du temps." },
      { title: "Des aliments simples", text: "Un menu composé de produits accessibles, faciles à préparer, avec des options pour les journées plus actives." },
      { title: "Des habitudes, pas des extrêmes", text: "Des changements progressifs que vous pouvez maintenir sans régimes courts ni épuisement." },
      { title: "Suivi", text: "Des ajustements hebdomadaires selon le poids, les mensurations, la force, le sommeil et le niveau d'énergie." }
    ],
    weekEyebrow: "semaine",
    weekTitle: "Exemple de semaine d'entraînement",
    week: [
      ["Lundi", "Force : bas du corps + sangle abdominale", "60 min"],
      ["Mardi", "Technique de boxe + condition physique", "50 min"],
      ["Mercredi", "Mobilité et récupération active", "35 min"],
      ["Jeudi", "Force : haut du corps + dos", "60 min"],
      ["Vendredi", "Bilan en ligne + ajustements", "30 min"],
      ["Samedi", "Séance complète", "55 min"]
    ],
    methodEyebrow: "méthode",
    methodTitle: "Un processus maîtrisé, pas seulement de la motivation",
    process: [
      { icon: icons.assessment, title: "Évaluation", text: "Nous commençons par votre objectif, votre expérience, votre disponibilité, vos limites et vos habitudes actuelles." },
      { icon: icons.plan, title: "Programme", text: "Vous recevez une structure claire pour l'entraînement, la nutrition et la récupération." },
      { icon: icons.progress, title: "Progression", text: "Nous suivons les résultats et ajustons le programme pour vous faire progresser régulièrement." }
    ],
    paymentEyebrow: "Paiement",
    paymentTitle: "Un acompte simple pour confirmer la réservation.",
    paymentItems: [
      { icon: icons.deposit, title: "Acompte de 20%", text: "Réservez votre séance ou lancez la création de votre programme en ligne." },
      { icon: icons.payment, title: "Paiement sécurisé", text: "Paiement par carte via Stripe Checkout avec confirmation numérique." },
      { icon: icons.confirm, title: "Prochaines étapes", text: "Après le paiement, je confirme l'horaire, le programme et la préparation." }
    ],
    depositTitle: "Acompte de 20%",
    depositText: "Réserve une séance ou active la création d'un programme d'entraînement et de nutrition en ligne.",
    depositCta: "Aller à la réservation",
    paymentSuccess: "Paiement reçu. Vous recevrez une confirmation et les prochaines étapes.",
    paymentCancelled: "Le paiement a été annulé. Vous pouvez réessayer lorsque vous êtes prêt.",
    footer: "Entraînement, conseils en ligne, préparation à la boxe, programmes nutritionnels et paiement."
  },
  es: {
    ...content.en,
    langLabel: "Idioma",
    menuLabel: "Menú",
    scriptureRef: "Salmo 23:1–6",
    nav: [
      ["Sobre mí", "about"],
      ["Servicios", "services"],
      ["Reserva", "booking"],
      ["Pago", "payment"]
    ],
    headerCta: "Reservar",
    heroOffer: "Consulta gratuita",
    heroEyebrow: "Entrena, come, duerme, repite.",
    heroTitle: "Un plan personal para la fuerza, el cuerpo y la disciplina. Una estructura para el éxito.",
    heroText: "Un sistema completo de entrenamiento, nutrición, planes personalizados y sesiones de boxeo. Con mi experiencia y tu compromiso, los resultados se convierten en una parte natural del proceso.",
    heroPrimary: "Reservar una consulta",
    heroSecondary: "Ver servicios",
    whatsappCta: "Escribir por WhatsApp",
    chatTitle: "¿Cómo puedo ayudarte?",
    chatPrompt: "Elige un tema",
    chatConsultation: "Reservar una consulta",
    chatTraining: "Preguntar por entrenamiento",
    chatNutrition: "Preguntar por nutrición",
    focusTitle: "Boxeo + nutrición",
    stats: [
      { value: "1:1", label: "Coaching personal" },
      { value: "Online", label: "Entrenamiento y nutrición" },
      { value: "20%", label: "Depósito" }
    ],
    focusItems: ["La técnica antes que la intensidad", "Asesoramiento online"],
    coverTitle: "Entrenamiento de boxeo",
    gymPhotoEyebrow: "entorno de entrenamiento",
    gymPhotoTitle: "Entrena en un entorno de gimnasio real",
    gymPhotoText: "El entrenamiento se centra en la técnica, la distancia, el control y el movimiento constante dentro de un entorno profesional.",
    aboutEyebrow: "sobre mí",
    aboutTitle: "Sobre el entrenador y la comunidad",
    soloTitle: "Enfoque personal",
    soloText: "Más de 20 años de experiencia en boxeo, una trayectoria semiprofesional hasta el ring profesional, numerosos logros y victorias, y experiencia internacional en más de 50 países. Segundo deporte: atletismo, con 8 títulos nacionales y una clasificación europea.",
    groupTitle: "Entrenamiento en grupo",
    groupText: "Un entorno para quienes buscan movimiento, técnica de boxeo, motivación y progreso constante.",
    groupBadge: "entrenamiento en grupo",
    servicesEyebrow: "servicios",
    servicesTitle: "Servicios principales",
    services: [
      {
        icon: icons.boxing,
        title: "Entrenamiento de boxeo",
        text: "Trabajo individual de guardia, golpes, defensa, desplazamientos, reacción y acondicionamiento físico.",
        points: ["entrenamiento personal", "entrenamiento en grupo", "preparación para competiciones", "técnica y acondicionamiento"]
      },
      {
        icon: icons.online,
        title: "Entrenador fitness online",
        text: "Recibe instrucciones, un plan semanal y correcciones online sin necesidad de acudir al gimnasio.",
        points: ["ejercicios guiados", "plan semanal"]
      },
      {
        icon: icons.nutrition,
        title: "Plan nutricional personal",
        text: "Una alimentación práctica adaptada a tu objetivo, rutina diaria, preferencias y hábitos reales.",
        points: ["calorías y macronutrientes", "menús de ejemplo", "ajustes semanales"]
      }
    ],
    programsEyebrow: "programas",
    programsTitle: "Programas según tu objetivo",
    programs: [
      {
        icon: icons.strength,
        title: "Fuerza y forma física",
        text: "Sesiones de fuerza estructuradas para mejorar el tono muscular, la estabilidad y el progreso visible sin sobrecargas desordenadas.",
        details: ["3–5 sesiones semanales", "sobrecarga progresiva", "corrección técnica"]
      },
      {
        icon: icons.conditioning,
        title: "Resistencia y acondicionamiento",
        text: "Sesiones funcionales con cardio, movilidad e intervalos para mejorar la energía y la resistencia.",
        details: ["bloques HIIT", "base aeróbica", "recuperación"]
      },
      {
        icon: icons.instructions,
        title: "Instrucciones online",
        text: "Un plan claro con ejercicios, series, repeticiones, ritmo y notas de ejecución.",
        details: ["orientación por vídeo", "revisión semanal", "correcciones online"]
      }
    ],
    bookingEyebrow: "Reserva",
    bookingTitle: "Reserva una sesión o empieza con un plan online.",
    bookingCardTitle: "Contacto directo",
    bookingCardText:
      "Envía tus datos, tu objetivo y tu día preferido. Después recibirás la confirmación y los siguientes pasos.",
    bookingItems: [
      "Contacto por WhatsApp para organizarlo rápidamente",
      "Depósito del 20% para reservar o iniciar el plan",
      "Confirmación clara después del pago"
    ],
    directContact: `Directo: ${whatsappDisplay}`,
    form: {
      ...content.en.form,
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      contact: "WhatsApp o email",
      contactPlaceholder: "+44 ... o email",
      service: "Servicio",
      servicePlaceholder: "Elige un servicio",
      day: "Día preferido",
      dayPlaceholder: "Ejemplo: martes",
      goal: "Objetivo",
      goalPlaceholder: "Boxeo, fitness, pérdida de peso, nutrición...",
      submit: "Pagar el depósito del 20%",
      serviceOptions: ["Entrenamiento personal", "Entrenamiento de boxeo", "Plan online", "Plan nutricional", "Paquete completo"]
    },
    nutritionEyebrow: "nutrición",
    nutritionTitle: "Un plan personal para mejorar tu alimentación",
    nutritionCardTitle: "Sin extremos. Con reglas claras.",
    nutritionCardText: "El plan se basa en alimentos que puedes comprar, preparar y consumir con regularidad. El objetivo es controlar las calorías, asegurar suficiente proteína, mantener una energía estable y reducir la improvisación.",
    nutrition: [
      { title: "Equilibrio de macronutrientes", text: "Objetivos diarios claros de proteínas, carbohidratos y grasas según tu meta y tu horario." },
      { title: "Alimentos reales", text: "Un menú con productos accesibles, preparación sencilla y opciones para los días de mayor actividad." },
      { title: "Hábitos, no extremos", text: "Cambios graduales que puedes mantener sin dietas a corto plazo ni agotamiento." },
      { title: "Seguimiento", text: "Ajustes semanales según el peso, las medidas, la fuerza, el sueño y el nivel de energía." }
    ],
    weekEyebrow: "semana",
    weekTitle: "Ejemplo de estructura semanal",
    week: [
      ["Lunes", "Fuerza: tren inferior + zona media", "60 min"],
      ["Martes", "Técnica de boxeo + acondicionamiento", "50 min"],
      ["Miércoles", "Movilidad y recuperación activa", "35 min"],
      ["Jueves", "Fuerza: tren superior + espalda", "60 min"],
      ["Viernes", "Revisión online + ajustes", "30 min"],
      ["Sábado", "Sesión de cuerpo completo", "55 min"]
    ],
    methodEyebrow: "método",
    methodTitle: "Un proceso controlado, no solo motivación",
    process: [
      { icon: icons.assessment, title: "Evaluación", text: "Empezamos por tu objetivo, experiencia, tiempo disponible, limitaciones y hábitos actuales." },
      { icon: icons.plan, title: "Plan", text: "Recibes una estructura clara para el entrenamiento, la nutrición y la recuperación." },
      { icon: icons.progress, title: "Progreso", text: "Seguimos los resultados y ajustamos el plan para que avances de forma constante." }
    ],
    paymentEyebrow: "Pago",
    paymentTitle: "Un depósito sencillo para confirmar la reserva.",
    paymentItems: [
      { icon: icons.deposit, title: "Depósito del 20%", text: "Reserva tu sesión o inicia la creación de tu plan online." },
      { icon: icons.payment, title: "Pago seguro", text: "Pago con tarjeta mediante Stripe Checkout y confirmación digital." },
      { icon: icons.confirm, title: "Siguientes pasos", text: "Después del pago confirmaré el horario, el plan y la preparación." }
    ],
    depositTitle: "Depósito del 20%",
    depositText: "Reserva una sesión o activa la creación de un plan online de entrenamiento y nutrición.",
    depositCta: "Ir a la reserva",
    paymentSuccess: "Pago recibido. Recibirás la confirmación y los siguientes pasos.",
    paymentCancelled: "El pago se ha cancelado. Puedes intentarlo de nuevo cuando estés listo.",
    footer: "Entrenamiento, asesoramiento online, preparación de boxeo, planes nutricionales y pago."
  }
};

type TrainerSearchParams = {
  lang?: string | string[];
  payment?: string | string[];
};

function getLang(searchParams?: TrainerSearchParams): Lang {
  const lang = Array.isArray(searchParams?.lang) ? searchParams?.lang[0] : searchParams?.lang;
  return supportedLangs.includes(lang as Lang) ? (lang as Lang) : defaultLang;
}

function getPaymentStatus(searchParams?: TrainerSearchParams) {
  const payment = Array.isArray(searchParams?.payment) ? searchParams?.payment[0] : searchParams?.payment;
  return payment === "success" || payment === "cancelled" ? payment : null;
}

function href(lang: Lang, id?: string) {
  const base = lang === defaultLang ? "/" : "/trainer";
  const query = lang === defaultLang ? "" : `?lang=${lang}`;
  return `${base}${query}${id ? `#${id}` : ""}`;
}

export default function TrainerPage({ searchParams }: { searchParams?: TrainerSearchParams }) {
  const lang = getLang(searchParams);
  const copy = localizedContent[lang];
  const paymentStatus = getPaymentStatus(searchParams);
  const trainingChatUrl = whatsappMessageUrl(copy.chatTraining);
  const nutritionChatUrl = whatsappMessageUrl(copy.chatNutrition);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-emerald-300/10 bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:min-h-20 sm:gap-4 sm:px-6 lg:px-8">
          <div className="flex shrink-0 items-center gap-3">
            <details className="group relative hidden lg:block">
              <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-md border border-emerald-200/25 bg-emerald-200/[.06] px-3 py-2 text-[10px] font-semibold uppercase tracking-[.16em] text-emerald-100 transition hover:border-emerald-200/60 hover:bg-emerald-200/10">
                {copy.scriptureRef}
                <ChevronDown size={13} className="transition group-open:rotate-180" />
              </summary>
              <div className="absolute left-0 top-full z-50 mt-3 max-h-[70vh] w-[32rem] overflow-y-auto rounded-xl border border-emerald-200/25 bg-black/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,.75)] backdrop-blur-xl">
                <p className="font-display text-2xl text-white">{copy.scriptureRef}</p>
                <div className="mt-5 grid gap-4">
                  {scriptureVerses[lang].map((verse, index) => (
                    <p key={verse} className="grid grid-cols-[1.5rem_1fr] gap-2 text-sm leading-6 text-white/75">
                      <span className="font-display text-lg text-emerald-200">{index + 1}</span>
                      <span>{verse}</span>
                    </p>
                  ))}
                </div>
              </div>
            </details>
            <Link href={href(lang)} className="flex shrink-0 items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-emerald-300/30 bg-emerald-300/10">
                <Dumbbell size={20} className="text-emerald-200" />
              </span>
              <span className="hidden font-display text-base tracking-[.14em] text-white sm:block sm:text-lg">TRAINING SYSTEM</span>
            </Link>
          </div>
          <details className="relative lg:hidden">
            <summary className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-2 text-sm text-white transition hover:border-emerald-200/40">
              {copy.menuLabel} <ChevronDown size={16} />
            </summary>
            <div className="fixed left-3 right-3 top-16 rounded-2xl border border-white/10 bg-black/95 p-4 shadow-2xl sm:absolute sm:left-auto sm:right-0 sm:top-full sm:mt-2 sm:w-[18rem]">
              <details className="group mb-3 border-b border-white/10 pb-3">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl border border-emerald-200/25 bg-emerald-200/[.06] px-4 py-3 text-xs font-semibold uppercase tracking-[.14em] text-emerald-100">
                  {copy.scriptureRef}
                  <ChevronDown size={15} className="transition group-open:rotate-180" />
                </summary>
                <div className="mt-3 max-h-[55vh] overflow-y-auto rounded-xl border border-emerald-200/15 bg-white/[.03] p-4">
                  <div className="grid gap-3">
                    {scriptureVerses[lang].map((verse, index) => (
                      <p key={verse} className="grid grid-cols-[1.25rem_1fr] gap-2 text-xs leading-5 text-white/75">
                        <span className="font-display text-base text-emerald-200">{index + 1}</span>
                        <span>{verse}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </details>
              <div className="grid gap-2">
                {copy.nav.map(([label, id]) => (
                  <Link key={id} href={href(lang, id)} className="rounded-full px-4 py-2 text-sm text-white transition hover:bg-white/10">
                    {label}
                  </Link>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {supportedLangs.map((item) => (
                  <Link
                    key={item}
                    href={href(item)}
                    className={`rounded-full px-3 py-2 text-xs uppercase transition ${item === lang ? "bg-emerald-200 text-black" : "border border-white/10 hover:bg-white/10 text-white/70"}`}
                  >
                    {languageLabels[item]}
                  </Link>
                ))}
              </div>
            </div>
          </details>
          <div className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
            {copy.nav.map(([label, id]) => (
              <Link key={id} href={href(lang, id)} className="transition hover:text-emerald-200">
                {label}
              </Link>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden sm:flex flex-wrap items-center gap-1 rounded-full border border-white/10 bg-white/[.04] p-1 text-xs text-white/65">
              <Globe2 size={14} className="ml-1 text-emerald-200 sm:ml-2" />
              {supportedLangs.map((item) => (
                <Link
                  key={item}
                  href={href(item)}
                  className={`rounded-full px-2.5 py-1.5 uppercase transition sm:px-3 ${item === lang ? "bg-emerald-200 text-black" : "hover:text-white"}`}
                >
                    {languageLabels[item]}
                </Link>
              ))}
            </div>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={copy.whatsappCta}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-200/40 text-emerald-100 transition hover:bg-emerald-200 hover:text-black sm:hidden"
            >
              <MessageCircle size={18} />
            </Link>
            <Link href={href(lang, "booking")} className="rounded-full border border-emerald-200/40 px-3 py-2 text-sm text-emerald-100 transition hover:bg-emerald-200 hover:text-black sm:px-4">
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

      <section className="relative z-10 overflow-hidden px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-36 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_22%,rgba(16,185,129,.16),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 sm:min-h-[calc(100vh-9rem)] sm:gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div className="min-w-0">
            <Link
              href={href(lang, "booking")}
              className="mb-6 inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full bg-emerald-200 px-7 py-3 text-sm font-bold uppercase tracking-[.18em] text-black shadow-[0_0_35px_rgba(167,243,208,.28)] transition hover:bg-white sm:px-9 sm:text-base"
            >
              {copy.heroOffer}
            </Link>
            <p className="mb-4 text-xs uppercase tracking-[.28em] text-emerald-200 sm:tracking-[.4em]">{copy.heroEyebrow}</p>
            <h1 className="max-w-[11.5ch] break-words font-display text-5xl leading-[1.13] tracking-[.01em] text-white sm:text-6xl lg:text-[5.25rem] lg:leading-[1.1]">
              {copy.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:mt-6 sm:text-lg sm:leading-8">{copy.heroText}</p>
            <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap sm:items-center min-w-0">
              <Link href={href(lang, "booking")} className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-emerald-200 px-5 py-3 text-center text-sm font-medium text-black transition hover:bg-white sm:w-auto sm:px-6">
                {copy.heroPrimary} <ArrowRight size={16} />
              </Link>
              <Link href={href(lang, "services")} className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full border border-emerald-200/30 px-5 py-3 text-center text-sm font-medium text-emerald-100 transition hover:bg-emerald-200 hover:text-black sm:w-auto sm:px-6">
                {copy.heroSecondary}
              </Link>
              <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-center text-sm font-medium text-white transition hover:border-emerald-200 hover:text-emerald-100 sm:w-auto sm:px-6">
                {copy.whatsappCta} <MessageCircle size={16} />
              </Link>
            </div>
          </div>

          <div className="relative min-w-0 w-full max-w-full">
            <div className="overflow-hidden rounded-lg border border-emerald-200/20 bg-white/[.04] shadow-[0_30px_100px_rgba(0,0,0,.5)]">
              <div className="relative aspect-[4/5] min-h-[20rem] max-w-full sm:min-h-[520px]">
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
              <article key={service.title} className="min-w-0 rounded-lg border border-white/10 bg-white/[.04] p-5 transition hover:-translate-y-1 hover:border-emerald-200/60 sm:p-6">
                <Icon className="text-emerald-200" size={34} />
                <h3 className="mt-5 font-display text-2xl sm:text-3xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{service.text}</p>
                <div className="mt-5 grid gap-2">
                  {service.points.map((point) => (
                    <p key={point} className="rounded-md border border-white/10 px-3 py-2 text-xs text-white/70">{point}</p>
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
              <article key={program.title} className="min-w-0 rounded-lg border border-white/10 bg-white/[.04] p-5 transition hover:-translate-y-1 hover:border-emerald-200/60 sm:p-6">
                <Icon className="text-emerald-200" size={34} />
                <h3 className="mt-5 font-display text-2xl sm:text-3xl">{program.title}</h3>
                <p className="mt-3 min-h-28 text-sm leading-6 text-white/65">{program.text}</p>
                <div className="mt-5 grid gap-2">
                  {program.details.map((detail) => (
                    <p key={detail} className="rounded-md border border-white/10 px-3 py-2 text-xs text-white/70">{detail}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section eyebrow={copy.bookingEyebrow} title={copy.bookingTitle} className="scroll-mt-24" id="booking">
        {paymentStatus ? (
          <div className={`mb-6 rounded-lg border px-4 py-3 text-sm ${paymentStatus === "success" ? "border-emerald-200/40 bg-emerald-200/10 text-emerald-50" : "border-white/15 bg-white/[.04] text-white/70"}`}>
            {paymentStatus === "success" ? copy.paymentSuccess : copy.paymentCancelled}
          </div>
        ) : null}
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="min-w-0 rounded-lg border border-emerald-200/25 bg-black/35 p-5 sm:p-7">
            <CalendarCheck className="text-emerald-200" size={36} />
            <h3 className="mt-5 font-display text-3xl sm:text-4xl">{copy.bookingCardTitle}</h3>
            <p className="mt-4 text-sm leading-7 text-white/68 sm:text-base">{copy.bookingCardText}</p>
            <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full justify-center gap-2 rounded-full border border-emerald-200/35 px-4 py-3 text-sm text-emerald-100 transition hover:bg-emerald-200 hover:text-black sm:w-auto">
              {copy.whatsappCta} <MessageCircle size={16} />
            </Link>
            <div className="mt-5 grid gap-2 text-sm text-white/70">
              {copy.bookingItems.map((item) => (
                <div key={item} className="flex min-w-0 items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs sm:px-4 sm:py-3">
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
        <div className="mt-6 rounded-lg border border-emerald-200/20 bg-black/35 p-5 sm:p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-display text-3xl">{copy.depositTitle}</p>
              <p className="mt-2 text-sm leading-7 text-white/65">{copy.depositText}</p>
              <p className="mt-2 text-sm leading-7 text-white/65">{copy.directContact}</p>
            </div>
            <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-center">
              <Link href={href(lang, "booking")} className="inline-flex w-full min-w-0 justify-center gap-2 rounded-full bg-emerald-200 px-4 py-3 text-sm font-medium text-black transition hover:bg-white sm:w-auto">
                {copy.depositCta} <ArrowRight size={16} />
              </Link>
              <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex w-full min-w-0 justify-center gap-2 rounded-full border border-emerald-200/35 px-4 py-3 text-sm font-medium text-emerald-100 transition hover:bg-emerald-200 hover:text-black sm:w-auto">
                {copy.whatsappCta} <MessageCircle size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <footer className="relative z-10 border-t border-emerald-300/10 bg-black px-4 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-xl tracking-[.16em] text-white">TRAINING SYSTEM</p>
          <p>{copy.footer}</p>
        </div>
      </footer>
      <details className="group fixed bottom-5 right-5 z-50">
        <summary
          aria-label={copy.chatTitle}
          className="ml-auto flex h-14 w-14 cursor-pointer list-none items-center justify-center rounded-full bg-emerald-200 text-black shadow-[0_16px_50px_rgba(0,0,0,.55)] transition hover:scale-105 hover:bg-white"
        >
          <MessageCircle size={23} />
        </summary>
        <div className="absolute bottom-[4.25rem] right-0 w-[min(21rem,calc(100vw-2.5rem))] rounded-2xl border border-emerald-200/25 bg-black/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,.75)] backdrop-blur-xl">
          <p className="font-display text-2xl text-white">{copy.chatTitle}</p>
          <p className="mt-1 text-xs uppercase tracking-[.18em] text-emerald-200/70">{copy.chatPrompt}</p>
          <div className="mt-4 grid gap-2">
            <Link
              href={href(lang, "booking")}
              className="flex items-center justify-between rounded-xl bg-emerald-200 px-4 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >
              {copy.chatConsultation}
              <CalendarCheck size={17} />
            </Link>
            <Link
              href={trainingChatUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-white transition hover:border-emerald-200/45 hover:text-emerald-100"
            >
              {copy.chatTraining}
              <Dumbbell size={17} />
            </Link>
            <Link
              href={nutritionChatUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm text-white transition hover:border-emerald-200/45 hover:text-emerald-100"
            >
              {copy.chatNutrition}
              <Apple size={17} />
            </Link>
          </div>
        </div>
      </details>
    </>
  );
}
