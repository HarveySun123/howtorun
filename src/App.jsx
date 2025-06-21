import { useState, useEffect } from 'react'
import './App.css'

// 语言数据
const languages = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'fr', label: 'Français' },
  { code: 'ja', label: '日本語' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'ru', label: 'Русский' },
]

// 多语言文本
const translations = {
  en: {
    siteTitle: 'howtorun',
    slogan: 'Start running scientifically, from zero',
    placeholder: 'What do you want to know? (e.g. How to start running)',
    button: 'Take a small step',
    tips: [
      {
        title: 'The most important thing for beginners',
        content: 'Progress gradually, jog easily at a pace where you can talk comfortably. Listen to your body and build the habit step by step.'
      },
      {
        title: 'Set the smallest goal',
        content: 'For example, "Just run for 5 minutes today." Lower the mental barrier and make it easier to stick to. Studies show small goals help form habits.'
      }
    ]
  },
  zh: {
    siteTitle: 'howtorun',
    slogan: '科学跑步，从零开始',
    placeholder: '你想了解什么？（如：如何开始跑步）',
    button: '先跑一小步',
    tips: [
      {
        title: '跑步小白最重要的事',
        content: '循序渐进，轻松慢跑，说话也不费力的强度。关注身体感受，逐步建立习惯。'
      },
      {
        title: '把目标定到最小',
        content: '比如"今天只跑5分钟"，降低心理压力，更容易坚持。科学研究表明，小目标更易形成习惯。'
      }
    ]
  },
  fr: {
    siteTitle: "howtorun",
    slogan: "Commencez a courir scientifiquement, a partir de zero",
    placeholder: "Que voulez-vous savoir ? (ex : Comment commencer a courir)",
    button: "Faites un petit pas",
    tips: [
      { title: "Le plus important pour les debutants", content: "Progressez progressivement, courez a un rythme ou vous pouvez parler facilement. Ecoutez votre corps et construisez l'habitude etape par etape." },
      { title: "Fixez le plus petit objectif", content: "Par exemple, Courez seulement 5 minutes aujourd'hui. Reduisez la barriere mentale et facilitez la perseverance. Les etudes montrent que de petits objectifs aident a former des habitudes." }
    ]
  },
  ja: {
    siteTitle: "howtorun",
    slogan: "ゼロから科学的に走り始めよう",
    placeholder: "何を知りたいですか？（例：ランニングの始め方）",
    button: "小さな一歩を踏み出す",
    tips: [
      { title: "初心者にとって最も大切なこと", content: "徐々に進め、会話できるくらい楽なペースでジョギングしましょう。体の声を聞き、少しずつ習慣を作ります。" },
      { title: "目標はできるだけ小さく", content: "例えば「今日は5分だけ走る」。心理的ハードルを下げ、継続しやすくします。小さな目標が習慣化に役立ちます。" }
    ]
  },
  de: {
    siteTitle: "howtorun",
    slogan: "Starte wissenschaftlich mit dem Laufen, von Null an",
    placeholder: "Was möchtest du wissen? (z.B. Wie fange ich mit dem Laufen an?)",
    button: "Mache einen kleinen Schritt",
    tips: [
      { title: "Das Wichtigste für Anfänger", content: "Steigere dich langsam, jogge in einem Tempo, bei dem du dich unterhalten kannst. Höre auf deinen Körper und baue die Gewohnheit Schritt für Schritt auf." },
      { title: "Setze das kleinste Ziel", content: "Zum Beispiel: 'Heute nur 5 Minuten laufen.' Senke die mentale Hürde und mache es leichter, dranzubleiben. Studien zeigen, dass kleine Ziele helfen, Gewohnheiten zu bilden." }
    ]
  },
  es: {
    siteTitle: "howtorun",
    slogan: "Corre científicamente, desde cero",
    placeholder: "¿Qué quieres saber? (por ejemplo: Cómo empezar a correr)",
    button: "Da un pequeño paso",
    tips: [
      { title: "Lo más importante para principiantes", content: "Avanza gradualmente, trota fácilmente a un ritmo en el que puedas hablar cómodamente. Escucha a tu cuerpo y construye el hábito paso a paso." },
      { title: "Establece la meta más pequeña", content: "Por ejemplo, 'Solo corre 5 minutos hoy'. Baja la barrera mental y hazlo más fácil de mantener. Los estudios muestran que las metas pequeñas ayudan a formar hábitos." }
    ]
  },
  it: {
    siteTitle: "howtorun",
    slogan: "Inizia a correre scientificamente, da zero",
    placeholder: "Cosa vuoi sapere? (es: Come iniziare a correre)",
    button: "Fai un piccolo passo",
    tips: [
      { title: "La cosa più importante per i principianti", content: "Procedi gradualmente, corri a un ritmo in cui puoi parlare facilmente. Ascolta il tuo corpo e costruisci l'abitudine passo dopo passo." },
      { title: "Fissa il più piccolo obiettivo", content: "Ad esempio, 'Corri solo 5 minuti oggi'. Abbassa la barriera mentale e rendi più facile mantenere l'impegno. Gli studi dimostrano che piccoli obiettivi aiutano a formare abitudini." }
    ]
  },
  ru: {
    siteTitle: "howtorun",
    slogan: "Начните бегать научно, с нуля",
    placeholder: "Что вы хотите узнать? (например: Как начать бегать)",
    button: "Сделайте маленький шаг",
    tips: [
      { title: "Самое важное для новичков", content: "Продвигайтесь постепенно, бегайте в легком темпе, при котором можно разговаривать. Прислушивайтесь к своему телу и формируйте привычку шаг за шагом." },
      { title: "Поставьте самую маленькую цель", content: "Например, 'Сегодня просто пробегите 5 минут'. Снизьте психологический барьер и легче придерживайтесь. Исследования показывают, что маленькие цели помогают формировать привычки." }
    ]
  },
}

function getDefaultLang() {
  const navLang = navigator.language || navigator.userLanguage || 'en'
  const short = navLang.split('-')[0]
  if (translations[short]) return short
  return 'en'
}

function App() {
  const [lang, setLang] = useState(getDefaultLang())
  const [query, setQuery] = useState('')

  // 自动检测浏览器语言（仅首次加载）
  useEffect(() => {
    const navLang = navigator.language || navigator.userLanguage || 'en'
    const short = navLang.split('-')[0]
    if (translations[short]) setLang(short)
  }, [])

  const t = translations[lang] || translations['en']

  // 搜索功能占位（可扩展）
  const handleSearch = (e) => {
    e.preventDefault()
    alert(t.tips[0]?.title || 'Coming soon!')
  }

  return (
    <div className="container">
      {/* 右上角语言切换器 */}
      <div style={{ position: 'absolute', top: 24, right: 32 }}>
        <select
          value={lang}
          onChange={e => setLang(e.target.value)}
          style={{ padding: '0.3em 1em', borderRadius: 8, border: '1px solid #e2e8f0', fontSize: '1rem' }}
        >
          {languages.map(l => (
            <option key={l.code} value={l.code}>{l.label}</option>
          ))}
        </select>
      </div>
      <h1 className="site-title">{t.siteTitle}</h1>
      <p className="slogan">{t.slogan}</p>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder={t.placeholder}
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">{t.button}</button>
      </form>
      <div className="tips">
        {t.tips.map((tip, idx) => (
          <div className="tip" key={idx}>
            <h2>{tip.title}</h2>
            <p>{tip.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
