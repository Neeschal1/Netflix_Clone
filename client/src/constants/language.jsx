const languages = {
  en: {
    welcome: "Welcome to Netflix Clone",
    aboutus: "About Us",
    description: "Unlimited movies, TV shows, and more (starts at USD 2.99. Cancel anytime.)",
    suggestions: "Ready to watch? Create your account or sign in to continue.",
    login: "Login",
    signup: "Sign Up",
    otp: "Please enter the OTP sent in your email"
  },
  np: {
    welcome: "नेटफ्लिक्स क्लोनमा स्वागत छ",
    aboutus: "हाम्रोबारे", 
    description: "असीमित फिल्म, टिभी शो, र थप (USD 2.99 बाट सुरु। जुनसुकै बेला रद्द गर्न सकिन्छ।)",
    suggestions: "हेर्न तयार हुनुहुन्छ? आफ्नो खाता सिर्जना गर्नुहोस् वा लग इन गर्नुहोस्।",
    login: "लग इन",
    signup: "साइन अप"
  },
  es: {
    welcome: "Bienvenido a Netflix Clone",
    aboutus: "Sobre nosotros",
    description: "Películas y series ilimitadas en tu idioma favorito (desde USD 2.99. Cancela en cualquier momento).",
    suggestions: "¿Listo para ver? Crea tu cuenta o inicia sesión para continuar.",
    login: "Iniciar sesión",
    signup: "Regístrate"
  },
  fr: {
    welcome: "Bienvenue sur Netflix Clone",
    aboutus: "À propos de nous",
    description: "Films et séries illimités dans votre langue préférée (à partir de 2,99 USD. Annulez à tout moment).",
    suggestions: "Prêt à regarder ? Créez votre compte ou connectez-vous pour continuer.",
    login: "Se connecter",
    signup: "S'inscrire"
  },
  de: {
    welcome: "Willkommen bei Netflix Clone",
    aboutus: "Über uns",
    description: "Unbegrenzte Filme, Serien und mehr in deiner Lieblingssprache (ab 2,99 USD. Jederzeit kündbar).",
    suggestions: "Bereit zu schauen? Erstellen Sie Ihr Konto oder melden Sie sich an.",
    login: "Anmelden",
    signup: "Registrieren"
  },
  it: {
    welcome: "Benvenuto su Netflix Clone",
    aboutus: "Chi siamo",
    description: "Film e serie illimitati nella tua lingua preferita (da USD 2,99. Annulla in qualsiasi momento).",
    suggestions: "Pronto a guardare? Crea il tuo account o accedi per continuare.",
    login: "Accedi",
    signup: "Registrati"
  },
  pt: {
    welcome: "Bem-vindo ao Netflix Clone",
    aboutus: "Sobre nós",
    description: "Filmes e séries ilimitados no seu idioma favorito (a partir de USD 2,99. Cancele a qualquer momento).",
    suggestions: "Pronto para assistir? Crie sua conta ou faça login para continuar.",
    login: "Entrar",
    signup: "Inscreva-se"
  },
  ru: {
    welcome: "Добро пожаловать в Netflix Clone",
    aboutus: "О нас",
    description: "Неограниченные фильмы, сериалы и многое другое (начиная с 2,99 USD. Отмените в любое время).",
    suggestions: "Готовы смотреть? Создайте аккаунт или войдите, чтобы продолжить.",
    login: "Войти",
    signup: "Регистрация"
  },
  zh: {
    welcome: "欢迎来到 Netflix 克隆",
    aboutus: "关于我们",
    description: "无限电影、电视剧等（从 USD 2.99 开始。随时取消）。",
    suggestions: "准备好观看了吗？创建您的帐户或登录继续。",
    login: "登录",
    signup: "注册"
  },
  ja: {
    welcome: "Netflixクローンへようこそ",
    aboutus: "私たちに関しては",
    description: "無制限の映画、テレビ番組など（USD 2.99から。いつでもキャンセル可能）。",
    suggestions: "視聴の準備はできましたか？アカウントを作成するか、ログインして続行してください。",
    login: "ログイン",
    signup: "サインアップ"
  },
  ko: {
    welcome: "넷플릭스 클론에 오신 것을 환영합니다",
    aboutus: "회사 소개",
    description: "무제한 영화, TV 프로그램 등 (USD 2.99부터. 언제든지 취소 가능).",
    suggestions: "시청할 준비가 되셨나요? 계정을 생성하거나 로그인하여 계속하세요.",
    login: "로그인",
    signup: "가입"
  },
  ar: {
    welcome: "مرحبًا بك في Netflix Clone",
    aboutus: "معلومات عنا",
    description: "أفلام ومسلسلات غير محدودة وأكثر (يبدأ من 2.99 دولار أمريكي. يمكنك الإلغاء في أي وقت).",
    suggestions: "هل أنت مستعد للمشاهدة؟ أنشئ حسابك أو سجّل الدخول للمتابعة.",
    login: "تسجيل الدخول",
    signup: "اشتراك"
  },
  hi: {
    welcome: "Netflix Clone में आपका स्वागत है",
    aboutus: "हमारे बारे में",
    description: "असीमित फिल्में, टीवी शो और बहुत कुछ (USD 2.99 से शुरू। कभी भी रद्द करें)।",
    suggestions: "देखने के लिए तैयार हैं? अपना खाता बनाएं या लॉगिन करें।",
    login: "लॉग इन",
    signup: "साइन अप"
  },
  bn: {
    welcome: "Netflix ক্লোন-এ স্বাগতম",
    aboutus: "আমাদের সম্পর্কে",
    description: "অসীম সিনেমা, টিভি শো এবং আরও অনেক কিছু (USD 2.99 থেকে। যেকোন সময় বাতিল করুন)।",
    suggestions: "দেখতে প্রস্তুত? আপনার অ্যাকাউন্ট তৈরি করুন বা সাইন ইন করুন।",
    login: "লগইন",
    signup: "সাইন আপ"
  },
  ur: {
    welcome: "Netflix Clone میں خوش آمدید",
    aboutus: "ہمارے بارے میں",
    description: "لا محدود فلمیں، ٹی وی شوز، اور مزید (USD 2.99 سے شروع۔ کسی بھی وقت منسوخ کریں۔)",
    suggestions: "دیکھنے کے لیے تیار ہیں؟ اپنا اکاؤنٹ بنائیں یا سائن ان کریں۔",
    login: "لاگ ان",
    signup: "سائن اپ"
  },
  vi: {
    welcome: "Chào mừng đến với Netflix Clone",
    aboutus: "Về chúng tôi",
    description: "Phim và chương trình TV không giới hạn (bắt đầu từ USD 2.99. Hủy bất cứ lúc nào).",
    suggestions: "Sẵn sàng xem chưa? Tạo tài khoản hoặc đăng nhập để tiếp tục.",
    login: "Đăng nhập",
    signup: "Đăng ký"
  },
  th: {
    welcome: "ยินดีต้อนรับสู่ Netflix Clone",
    aboutus: "เกี่ยวกับเรา",
    description: "ภาพยนตร์และรายการทีวีไม่จำกัด (เริ่มต้นที่ USD 2.99 ยกเลิกได้ทุกเวลา)",
    suggestions: "พร้อมรับชมหรือยัง? สร้างบัญชีของคุณหรือเข้าสู่ระบบเพื่อดำเนินการต่อ",
    login: "เข้าสู่ระบบ",
    signup: "สมัครสมาชิก"
  },
  tr: {
    welcome: "Netflix Clone'a Hoş Geldiniz",
    aboutus: "Hakkımızda",
    description: "Favori dilinizde sınırsız film, TV şovu ve daha fazlası (USD 2.99'dan itibaren. İstediğiniz zaman iptal edin).",
    suggestions: "İzlemeye hazır mısınız? Hesabınızı oluşturun veya giriş yapın.",
    login: "Giriş Yap",
    signup: "Kayıt Ol"
  },
  id: {
    welcome: "Selamat datang di Netflix Clone",
    aboutus: "Tentang Kami",
    description: "Film dan acara TV tanpa batas (mulai dari USD 2,99. Batalkan kapan saja).",
    suggestions: "Siap menonton? Buat akun Anda atau masuk untuk melanjutkan.",
    login: "Masuk",
    signup: "Daftar"
  },
  ms: {
    welcome: "Selamat datang ke Netflix Clone",
    aboutus: "Tentang Kami",
    description: "Filem dan rancangan TV tanpa had (dari USD 2.99. Batal pada bila-bila masa).",
    suggestions: "Bersedia menonton? Buat akaun anda atau log masuk untuk teruskan.",
    login: "Log Masuk",
    signup: "Daftar"
  }
};

export default languages;
