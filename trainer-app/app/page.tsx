export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">личен треньор по бокс и фитнес</p>
        <h1>Тренировъчен режим за сила, техника и постоянен прогрес</h1>
        <p className="intro">Това е отделено приложение, посветено на твоята спортна подготовка и боксови умения. Ако търсиш фотография, остани в другото приложение.</p>
        <a className="primary-whatsapp" href="https://api.whatsapp.com/send?phone=447719799244" target="_blank" rel="noreferrer">
          WhatsApp +44 7719 799244
        </a>
      </section>

      <section className="content-block">
        <h2>За кого е тази услуга</h2>
        <ul>
          <li>Хора с желание да подобрят физиката и дисциплината си.</li>
          <li>Търсещи сила, издръжливост и техника в бокса.</li>
          <li>Които искат персонален тренировъчен план, а не общ шаблон.</li>
        </ul>
      </section>

      <section className="content-block">
        <h2>Какво предлагам</h2>
        <div className="grid-columns">
          <div>
            <h3>Персонална бокс подготовка</h3>
            <p>Техника, позиция, работа на чувал и спаринг навици, базирани на реално състезателен опит.</p>
          </div>
          <div>
            <h3>Функционален фитнес</h3>
            <p>Силова и кардио подготовка за по-добра издръжливост, гъвкавост и бързина.</p>
          </div>
          <div>
            <h3>Хранителен режим</h3>
            <p>Прости и ефективни препоръки за хранене, които подкрепят тренировъчния процес.</p>
          </div>
        </div>
      </section>

      <section className="content-block" id="booking">
        <h2>Резервирай тренировка</h2>
        <p>Запази своя първи час чрез контакт или запитване. Сесиите се планират спрямо твоя график и цел.</p>
        <a className="inline-whatsapp" href="https://api.whatsapp.com/send?phone=447719799244" target="_blank" rel="noreferrer">
          Пиши ми в WhatsApp: +44 7719 799244
        </a>
      </section>

      <section className="content-block" id="contact">
        <h2>Свържи се</h2>
        <p>Пиши за консултация, въпроси или персонално предложение. Това приложение е напълно отделно и фокусирано само върху твоята тренировка.</p>
        <a className="inline-whatsapp" href="https://api.whatsapp.com/send?phone=447719799244" target="_blank" rel="noreferrer">
          WhatsApp +44 7719 799244
        </a>
      </section>
      <a className="floating-whatsapp" href="https://api.whatsapp.com/send?phone=447719799244" target="_blank" rel="noreferrer">
        WhatsApp +44 7719 799244
      </a>
    </main>
  );
}
