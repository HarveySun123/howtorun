import { useState, useEffect } from 'react'
import './App.css'

// 支持的语言
const languages = {
  en: { name: 'English', flag: '🇺🇸' },
  zh: { name: '中文', flag: '🇨🇳' },
  fr: { name: 'Français', flag: '🇫🇷' },
  ja: { name: '日本語', flag: '🇯🇵' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  es: { name: 'Español', flag: '🇪🇸' },
  it: { name: 'Italiano', flag: '🇮🇹' },
  ru: { name: 'Русский', flag: '🇷🇺' }
}

// 翻译数据
const translations = {
  en: {
    siteTitle: 'howtorun',
    slogan: 'Your journey to becoming a runner starts here',
    training: 'Training Plans',
    athletes: 'Athlete Stories',
    wisdom: "Runner's Wisdom",
    first5k: 'First 5K',
    first10k: 'First 10K',
    forBeginners: 'For Beginners',
    settingGoals: 'Setting Goals',
    motivation: 'Motivation',
    runningTechnique: 'Running Technique',
    nutritionTips: 'Nutrition Tips'
  },
  zh: {
    siteTitle: '如何跑步',
    slogan: '你的跑步之旅从这里开始',
    training: '训练计划',
    athletes: '运动员故事',
    wisdom: '跑者箴言',
    first5k: '首个5公里',
    first10k: '首个10公里',
    forBeginners: '新手入门',
    settingGoals: '目标设定',
    motivation: '激励',
    runningTechnique: '跑步技巧',
    nutritionTips: '营养建议'
  },
  fr: {
    siteTitle: 'commentcourir',
    slogan: 'Votre voyage vers la course à pied commence ici',
    training: 'Plans d\'entraînement',
    athletes: 'Histoires d\'athlètes',
    wisdom: 'Sagesse du coureur',
    first5k: 'Premier 5K',
    first10k: 'Premier 10K',
    forBeginners: 'Pour débutants',
    settingGoals: 'Fixer des objectifs',
    motivation: 'Motivation',
    runningTechnique: 'Technique de course',
    nutritionTips: 'Conseils nutrition'
  },
  ja: {
    siteTitle: 'ランニング方法',
    slogan: 'ランナーへの道のりはここから始まります',
    training: 'トレーニング計画',
    athletes: 'アスリート物語',
    wisdom: 'ランナーの知恵',
    first5k: '初めての5K',
    first10k: '初めての10K',
    forBeginners: '初心者向け',
    settingGoals: '目標設定',
    motivation: 'モチベーション',
    runningTechnique: 'ランニング技術',
    nutritionTips: '栄養のヒント'
  },
  de: {
    siteTitle: 'laufenlernen',
    slogan: 'Ihre Reise zum Läufer beginnt hier',
    training: 'Trainingspläne',
    athletes: 'Athleten-Geschichten',
    wisdom: 'Läufer-Weisheit',
    first5k: 'Erster 5K',
    first10k: 'Erster 10K',
    forBeginners: 'Für Anfänger',
    settingGoals: 'Ziele setzen',
    motivation: 'Motivation',
    runningTechnique: 'Lauftechnik',
    nutritionTips: 'Ernährungstipps'
  },
  es: {
    siteTitle: 'comocorrer',
    slogan: 'Tu viaje para convertirte en corredor comienza aquí',
    training: 'Planes de entrenamiento',
    athletes: 'Historias de atletas',
    wisdom: 'Sabiduría del corredor',
    first5k: 'Primer 5K',
    first10k: 'Primer 10K',
    forBeginners: 'Para principiantes',
    settingGoals: 'Establecer metas',
    motivation: 'Motivación',
    runningTechnique: 'Técnica de carrera',
    nutritionTips: 'Consejos de nutrición'
  },
  it: {
    siteTitle: 'comecorrere',
    slogan: 'Il tuo viaggio per diventare un runner inizia qui',
    training: 'Piani di allenamento',
    athletes: 'Storie di atleti',
    wisdom: 'Saggezza del runner',
    first5k: 'Primo 5K',
    first10k: 'Primo 10K',
    forBeginners: 'Per principianti',
    settingGoals: 'Impostare obiettivi',
    motivation: 'Motivazione',
    runningTechnique: 'Tecnica di corsa',
    nutritionTips: 'Consigli nutrizionali'
  },
  ru: {
    siteTitle: 'какбегать',
    slogan: 'Ваш путь к бегу начинается здесь',
    training: 'Планы тренировок',
    athletes: 'Истории спортсменов',
    wisdom: 'Мудрость бегуна',
    first5k: 'Первый 5K',
    first10k: 'Первый 10K',
    forBeginners: 'Для начинающих',
    settingGoals: 'Постановка целей',
    motivation: 'Мотивация',
    runningTechnique: 'Техника бега',
    nutritionTips: 'Советы по питанию'
  }
}

// 侧边栏导航数据
const getSidebarItems = (lang) => [
  {
    id: 'training',
    title: translations[lang]?.training || 'Training Plans',
    icon: '🏃',
    subItems: [
      { id: '5k', title: translations[lang]?.first5k || 'First 5K' },
      { id: '10k', title: translations[lang]?.first10k || 'First 10K' },
      { id: 'half', title: 'Half Marathon' },
      { id: 'full', title: 'Full Marathon' }
    ]
  },
  {
    id: 'athletes',
    title: translations[lang]?.athletes || 'Athlete Stories',
    icon: '🏆',
    subItems: [
      { id: 'bannister', title: 'Roger Bannister' },
      { id: 'kipchoge', title: 'Eliud Kipchoge' },
      { id: 'radcliffe', title: 'Paula Radcliffe' },
      { id: 'gebreselassie', title: 'Haile Gebrselassie' },
      { id: 'viren', title: 'Lasse Viren' },
      { id: 'wang', title: 'Wang Junxia' },
      { id: 'bolt', title: 'Usain Bolt' },
      { id: 'rudisha', title: 'David Rudisha' }
    ]
  },
  {
    id: 'wisdom',
    title: translations[lang]?.wisdom || "Runner's Wisdom",
    icon: '💡',
    subItems: [
      { id: 'beginner', title: translations[lang]?.forBeginners || 'For Beginners' },
      { id: 'goals', title: translations[lang]?.settingGoals || 'Setting Goals' },
      { id: 'motivation', title: translations[lang]?.motivation || 'Motivation' },
      { id: 'technique', title: translations[lang]?.runningTechnique || 'Running Technique' },
      { id: 'nutrition', title: translations[lang]?.nutritionTips || 'Nutrition Tips' }
    ]
  }
]

// 内容数据
const contentData = {
  // 训练计划
  '5k': {
    title: 'First 5K Training Plan',
    content: [
      {
        week: 'Week 1-2',
        title: 'Building Foundation',
        description: 'Start with 3-4 sessions per week. Walk-run intervals: 1 minute run, 2 minutes walk. Total time: 20-30 minutes.'
      },
      {
        week: 'Week 3-4',
        title: 'Increasing Endurance',
        description: 'Gradually increase running intervals. 2 minutes run, 1 minute walk. Total time: 25-35 minutes.'
      },
      {
        week: 'Week 5-6',
        title: 'Continuous Running',
        description: 'Try continuous running for 10-15 minutes. Focus on comfortable pace where you can talk.'
      },
      {
        week: 'Week 7-8',
        title: 'Race Preparation',
        description: 'Build up to 5K distance. Include one longer run per week. Practice race pace.'
      }
    ]
  },
  '10k': {
    title: 'First 10K Training Plan',
    content: [
      {
        week: 'Week 1-3',
        title: 'Base Building',
        description: 'If you can run 5K, start with 3-4 runs per week. Gradually increase weekly mileage by 10%.'
      },
      {
        week: 'Week 4-6',
        title: 'Endurance Development',
        description: 'Add one longer run per week. Include tempo runs and hill training for strength.'
      },
      {
        week: 'Week 7-9',
        title: 'Speed Work',
        description: 'Introduce interval training. One speed session per week. Maintain long runs.'
      },
      {
        week: 'Week 10-12',
        title: 'Taper and Race',
        description: 'Reduce mileage gradually. Focus on race pace. Rest well before race day.'
      }
    ]
  },
  'half': {
    title: 'Half Marathon Training Plan',
    content: [
      {
        week: 'Week 1-4',
        title: 'Foundation Phase',
        description: 'Build base mileage with 4-5 runs per week. Long runs should be 6-8 miles. Focus on easy pace and consistency.'
      },
      {
        week: 'Week 5-8',
        title: 'Endurance Building',
        description: 'Increase long runs to 10-12 miles. Add tempo runs and hill training. Include one rest day and one cross-training day.'
      },
      {
        week: 'Week 9-12',
        title: 'Speed and Strength',
        description: 'Introduce interval training and longer tempo runs. Peak long run of 14-16 miles. Maintain 5-6 runs per week.'
      },
      {
        week: 'Week 13-16',
        title: 'Taper and Race',
        description: 'Gradually reduce mileage by 20-30%. Focus on race pace practice. Rest well in the final week before race day.'
      }
    ]
  },
  'full': {
    title: 'Full Marathon Training Plan',
    content: [
      {
        week: 'Week 1-6',
        title: 'Base Building',
        description: 'Start with 5-6 runs per week. Build long runs from 8 to 16 miles. Focus on easy pace and building endurance.'
      },
      {
        week: 'Week 7-12',
        title: 'Endurance Development',
        description: 'Increase long runs to 18-22 miles. Add marathon pace runs and hill training. Include proper recovery days.'
      },
      {
        week: 'Week 13-18',
        title: 'Peak Training',
        description: 'Peak long runs of 20-24 miles. Include speed work and marathon pace practice. Maintain high weekly mileage.'
      },
      {
        week: 'Week 19-22',
        title: 'Taper Period',
        description: 'Gradually reduce mileage by 30-40%. Focus on race pace and mental preparation. Rest well before race day.'
      }
    ]
  },
  // 运动员故事
  'bannister': {
    title: 'Roger Bannister',
    subtitle: 'The First Sub-4 Minute Mile',
    content: 'On May 6, 1954, Roger Bannister became the first person to run a mile in under 4 minutes. His time of 3:59.4 was achieved at Oxford University. This breakthrough showed that the "impossible" was possible, inspiring generations of runners.'
  },
  'kipchoge': {
    title: 'Eliud Kipchoge',
    subtitle: 'Breaking the 2-Hour Marathon Barrier',
    content: 'In 2019, Eliud Kipchoge became the first person to run a marathon in under 2 hours (1:59:40) during the INEOS 1:59 Challenge. His philosophy "No human is limited" has inspired millions worldwide.'
  },
  'radcliffe': {
    title: 'Paula Radcliffe',
    subtitle: 'Women\'s Marathon World Record Holder',
    content: 'Paula Radcliffe set the women\'s marathon world record of 2:15:25 in 2003, a record that stood for 16 years. Her determination and mental strength made her one of the greatest female distance runners.'
  },
  'gebreselassie': {
    title: 'Haile Gebrselassie',
    subtitle: 'The Emperor of Distance Running',
    content: 'Haile Gebrselassie won two Olympic gold medals and set 27 world records. His smooth running style and incredible work ethic made him one of the most successful distance runners in history.'
  },
  'viren': {
    title: 'Lasse Viren',
    subtitle: 'The Flying Finn',
    content: 'Lasse Viren won four Olympic gold medals in the 5000m and 10000m. His famous comeback in the 1972 Olympics, where he fell but still won the 10000m, is one of the greatest moments in running history.'
  },
  'wang': {
    title: 'Wang Junxia',
    subtitle: 'The Chinese Running Legend',
    content: 'Wang Junxia set the women\'s 3000m world record of 8:06.11 in 1993, a record that stood for 22 years. She also won Olympic gold in the 5000m at the 1996 Atlanta Games, becoming one of China\'s most celebrated athletes.'
  },
  'bolt': {
    title: 'Usain Bolt',
    subtitle: 'The Fastest Man Alive',
    content: 'Usain Bolt holds the world records in the 100m (9.58s) and 200m (19.19s). His charismatic personality and dominance in sprinting made him a global icon, proving that running can be both fast and fun.'
  },
  'rudisha': {
    title: 'David Rudisha',
    subtitle: 'The 800m Master',
    content: 'David Rudisha set the 800m world record of 1:40.91 at the 2012 London Olympics, winning gold. His perfect race execution and smooth running style made him one of the greatest middle-distance runners of all time.'
  },
  // 跑者箴言
  'beginner': {
    title: 'For Beginners',
    content: [
      'Start slowly and build gradually. Your body needs time to adapt to running.',
      'Focus on consistency rather than speed. Three 20-minute runs are better than one 60-minute run.',
      'Listen to your body. Rest days are as important as training days.',
      'Don\'t compare yourself to others. Every runner started as a beginner.'
    ]
  },
  'goals': {
    title: 'Setting Goals',
    content: [
      'Set realistic, achievable goals. Small wins build confidence and motivation.',
      'Break big goals into smaller milestones. Celebrate each achievement.',
      'Be flexible with your goals. Life happens, and that\'s okay.',
      'Focus on the process, not just the outcome. Enjoy the journey of becoming a runner.'
    ]
  },
  'motivation': {
    title: 'Motivation',
    content: [
      'Remember why you started. Your "why" will keep you going when motivation is low.',
      'Find a running buddy or join a group. Community makes running more enjoyable.',
      'Track your progress, but don\'t obsess over numbers. Focus on how you feel.',
      'Every run is a victory. Whether it\'s 1 mile or 26.2, you\'re doing something amazing.'
    ]
  },
  'technique': {
    title: 'Running Technique',
    content: [
      'Keep your head up and look ahead, not down at your feet. This helps with posture and breathing.',
      'Relax your shoulders and arms. Let them swing naturally at your sides.',
      'Land midfoot, not on your heels. This reduces impact and improves efficiency.',
      'Maintain a slight forward lean from your ankles, not your waist. This helps with momentum.'
    ]
  },
  'nutrition': {
    title: 'Nutrition Tips',
    content: [
      'Stay hydrated throughout the day, not just during runs. Dehydration affects performance.',
      'Eat a light snack 1-2 hours before running. Bananas, toast, or energy bars work well.',
      'For runs longer than 60 minutes, consider taking energy gels or sports drinks.',
      'Recovery nutrition is important. Eat protein and carbs within 30 minutes after your run.'
    ]
  }
}

function App() {
  const [activeSection, setActiveSection] = useState('training')
  const [activeItem, setActiveItem] = useState('5k')
  const [currentLang, setCurrentLang] = useState('en')
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('howtorun-progress')
    return saved ? JSON.parse(saved) : {
      currentPlan: '5k',
      week: 1,
      completedRuns: 0,
      totalDistance: 0,
      achievements: [],
      startDate: new Date().toISOString()
    }
  })

  // 保存进度到本地存储
  useEffect(() => {
    localStorage.setItem('howtorun-progress', JSON.stringify(userProgress))
  }, [userProgress])

  // 自动检测浏览器语言
  useEffect(() => {
    const navLang = navigator.language || navigator.userLanguage || 'en'
    const short = navLang.split('-')[0]
    if (languages[short]) {
      setCurrentLang(short)
    }
  }, [])

  // 更新进度
  const updateProgress = (type, value) => {
    setUserProgress(prev => {
      const newProgress = { ...prev }
      
      if (type === 'run') {
        newProgress.completedRuns += 1
        newProgress.totalDistance += value || 5 // 默认5公里
      } else if (type === 'week') {
        newProgress.week = value
      } else if (type === 'plan') {
        newProgress.currentPlan = value
        newProgress.week = 1
      }

      // 检查成就
      const achievements = checkAchievements(newProgress)
      if (achievements.length > 0) {
        newProgress.achievements = [...newProgress.achievements, ...achievements]
      }

      return newProgress
    })
  }

  // 检查成就
  const checkAchievements = (progress) => {
    const newAchievements = []
    
    if (progress.completedRuns === 1 && !progress.achievements.includes('first_run')) {
      newAchievements.push('first_run')
    }
    if (progress.completedRuns === 10 && !progress.achievements.includes('ten_runs')) {
      newAchievements.push('ten_runs')
    }
    if (progress.totalDistance >= 50 && !progress.achievements.includes('fifty_k')) {
      newAchievements.push('fifty_k')
    }
    if (progress.totalDistance >= 100 && !progress.achievements.includes('hundred_k')) {
      newAchievements.push('hundred_k')
    }
    if (progress.week >= 4 && !progress.achievements.includes('month_runner')) {
      newAchievements.push('month_runner')
    }

    return newAchievements
  }

  // 成就数据
  const achievements = {
    first_run: { title: 'First Steps', description: 'Completed your first run', icon: '👟' },
    ten_runs: { title: 'Getting Started', description: 'Completed 10 runs', icon: '🏃' },
    fifty_k: { title: 'Distance Runner', description: 'Ran 50+ kilometers', icon: '📏' },
    hundred_k: { title: 'Century Club', description: 'Ran 100+ kilometers', icon: '🏆' },
    month_runner: { title: 'Consistent Runner', description: 'Trained for 4+ weeks', icon: '📅' }
  }

  // 搜索功能
  const handleSearch = (query) => {
    setSearchQuery(query)
    if (!query.trim()) {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    const results = []
    const lowerQuery = query.toLowerCase()

    // 搜索训练计划
    Object.entries(contentData).forEach(([key, data]) => {
      if (key === '5k' || key === '10k' || key === 'half' || key === 'full') {
        if (data.title.toLowerCase().includes(lowerQuery) ||
            data.content.some(item => 
              item.title.toLowerCase().includes(lowerQuery) ||
              item.description.toLowerCase().includes(lowerQuery)
            )) {
          results.push({
            type: 'training',
            id: key,
            title: data.title,
            section: 'Training Plans',
            preview: data.content[0]?.description || ''
          })
        }
      } else if (key === 'bannister' || key === 'kipchoge' || key === 'radcliffe' || 
                 key === 'gebreselassie' || key === 'viren' || key === 'wang' || 
                 key === 'bolt' || key === 'rudisha') {
        if (data.title.toLowerCase().includes(lowerQuery) ||
            data.subtitle.toLowerCase().includes(lowerQuery) ||
            data.content.toLowerCase().includes(lowerQuery)) {
          results.push({
            type: 'athlete',
            id: key,
            title: data.title,
            section: 'Athlete Stories',
            preview: data.content.substring(0, 100) + '...'
          })
        }
      } else {
        if (data.title.toLowerCase().includes(lowerQuery) ||
            data.content.some(item => item.toLowerCase().includes(lowerQuery))) {
          results.push({
            type: 'wisdom',
            id: key,
            title: data.title,
            section: "Runner's Wisdom",
            preview: data.content[0] || ''
          })
        }
      }
    })

    setSearchResults(results)
    setIsSearching(false)
  }

  const handleItemClick = (sectionId, itemId) => {
    setActiveSection(sectionId)
    setActiveItem(itemId)
    setSearchQuery('')
    setSearchResults([])
  }

  const handleLangChange = (lang) => {
    setCurrentLang(lang)
    setShowLangMenu(false)
  }

  const renderContent = () => {
    // 如果正在搜索，显示搜索结果
    if (searchQuery.trim()) {
      return (
        <div className="content">
          <h1>Search Results</h1>
          <div className="search-results">
            {isSearching ? (
              <div className="loading">Searching...</div>
            ) : searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <div 
                  key={index} 
                  className="search-result-item"
                  onClick={() => handleItemClick(
                    result.type === 'training' ? 'training' : 
                    result.type === 'athlete' ? 'athletes' : 'wisdom', 
                    result.id
                  )}
                >
                  <h3>{result.title}</h3>
                  <p className="result-section">{result.section}</p>
                  <p className="result-preview">{result.preview}</p>
                </div>
              ))
            ) : (
              <div className="no-results">No results found for "{searchQuery}"</div>
            )}
          </div>
        </div>
      )
    }

    const data = contentData[activeItem]
    if (!data) return <div>Content not found</div>

    if (activeSection === 'training') {
      return (
        <div className="content">
          <div className="training-header">
            <h1>{data.title}</h1>
            <div className="progress-section">
              <h3>Your Progress</h3>
              <div className="progress-stats">
                <div className="stat">
                  <span className="stat-number">{userProgress.completedRuns}</span>
                  <span className="stat-label">Runs Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{userProgress.totalDistance}</span>
                  <span className="stat-label">Total KM</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{userProgress.week}</span>
                  <span className="stat-label">Current Week</span>
                </div>
              </div>
              <div className="progress-actions">
                <button 
                  className="progress-btn"
                  onClick={() => updateProgress('run', 5)}
                >
                  Complete Run
                </button>
                <button 
                  className="progress-btn"
                  onClick={() => updateProgress('week', userProgress.week + 1)}
                >
                  Next Week
                </button>
              </div>
            </div>
          </div>
          <div className="training-plan">
            {data.content.map((item, index) => (
              <div key={index} className={`training-week ${userProgress.week > index + 1 ? 'completed' : userProgress.week === index + 1 ? 'current' : ''}`}>
                <h3>{item.week}</h3>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                {userProgress.week === index + 1 && (
                  <div className="week-status current">Current Week</div>
                )}
                {userProgress.week > index + 1 && (
                  <div className="week-status completed">✓ Completed</div>
                )}
              </div>
            ))}
          </div>
          {userProgress.achievements.length > 0 && (
            <div className="achievements-section">
              <h3>Achievements</h3>
              <div className="achievements-grid">
                {userProgress.achievements.map((achievement, index) => (
                  <div key={index} className="achievement">
                    <span className="achievement-icon">{achievements[achievement]?.icon}</span>
                    <div className="achievement-info">
                      <h4>{achievements[achievement]?.title}</h4>
                      <p>{achievements[achievement]?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )
    }

    if (activeSection === 'athletes') {
      return (
        <div className="content">
          <div className="athlete-story">
            <h1>{data.title}</h1>
            <h3>{data.subtitle}</h3>
            <p>{data.content}</p>
          </div>
        </div>
      )
    }

    if (activeSection === 'wisdom') {
      return (
        <div className="content">
          <h1>{data.title}</h1>
          <div className="wisdom-list">
            {data.content.map((item, index) => (
              <div key={index} className="wisdom-item">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }

    return <div>Select an item from the sidebar</div>
  }

  const sidebarItems = getSidebarItems(currentLang)

  return (
    <div className="app">
      {/* 顶部标题栏 */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="site-title">{translations[currentLang]?.siteTitle || 'howtorun'}</h1>
            <p className="slogan">{translations[currentLang]?.slogan || 'Your journey to becoming a runner starts here'}</p>
          </div>
          <div className="header-right">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="language-selector">
              <button 
                className="lang-button"
                onClick={() => setShowLangMenu(!showLangMenu)}
              >
                {languages[currentLang]?.flag} {languages[currentLang]?.name}
              </button>
              {showLangMenu && (
                <div className="lang-menu">
                  {Object.entries(languages).map(([code, lang]) => (
                    <button
                      key={code}
                      className={`lang-option ${currentLang === code ? 'active' : ''}`}
                      onClick={() => handleLangChange(code)}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="main-container">
        {/* 侧边栏 */}
        <aside className="sidebar">
          {sidebarItems.map((section) => (
            <div key={section.id} className="sidebar-section">
              <h3 className="section-title">
                <span className="section-icon">{section.icon}</span>
                {section.title}
              </h3>
              <ul className="section-items">
                {section.subItems.map((item) => (
                  <li key={item.id}>
                    <button
                      className={`sidebar-item ${activeSection === section.id && activeItem === item.id ? 'active' : ''}`}
                      onClick={() => handleItemClick(section.id, item.id)}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* 主内容区 */}
        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default App
