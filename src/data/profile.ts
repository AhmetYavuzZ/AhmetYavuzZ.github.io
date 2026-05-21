export const profile = {
	name: 'Ahmet Muhammet YAVUZ',
	shortName: 'Ahmet Muhammet YAVUZ',
	role: 'Software Engineer | Full Stack Developer',
	heroTitle: 'Java ve Spring Boot ile üretime çıkan ürünler geliştiriyorum.',
	summary:
		'ERP, e-ticaret, enerji analitiği ve bulut operasyon platformlarında backend servisleri, yönetim panelleri ve yayın akışları geliştiriyorum. Güvenli servis katmanları ile kullanıcı odaklı arayüzleri aynı ürün disiplini içinde birleştirmeyi seviyorum.',
	location: 'Bursa, Türkiye',
	email: 'ahmet.y1562@gmail.com',
	phone: '+90 546 847 9518',
	github: 'https://github.com/AhmetYavuzZ',
	githubLabel: 'AhmetYavuzZ',
	linkedin: 'https://www.linkedin.com/in/ahmet-muhammet-yavuz/',
	linkedinLabel: 'ahmet-muhammet-yavuz',
	cvPath: '/documents/Ahmet_Muhammet_Yavuz_CV_Guncel.pdf',
};

export const navLinks = [
	{ label: 'Hakkımda', href: '#about' },
	{ label: 'Deneyim', href: '#experience' },
	{ label: 'Yetenekler', href: '#stack' },
	{ label: 'İletişim', href: '#contact' },
];

export const highlightMetrics = [
	{ value: '2023+', label: 'Canlı ürün geliştirme deneyimi' },
	{ value: '5', label: 'Farklı ürün alanında uçtan uca katkı' },
	{ value: 'Full Stack', label: 'Java backend ve Vue/React arayüz teslimatı' },
	{ value: 'CI/CD', label: 'Docker, GH Actions ve yayın otomasyonu' },
];

export const spotlightCards = [
	{
		eyebrow: 'Backend Core',
		title: 'Spring Boot tabanlı servis mimarileri',
		text: 'REST API tasarımı, validation, global error handling, JWT ve role/permission yönetimi.',
	},
	{
		eyebrow: 'Frontend Delivery',
		title: 'Vue 3 ve React ile karar destek ekranları',
		text: 'Yönetim panelleri, operasyon akışları, lisans ekranları ve veri odaklı dashboard deneyimi.',
	},
	{
		eyebrow: 'Release Flow',
		title: 'Branch bazlı deployment süreçleri',
		text: 'GitHub Actions, GHCR, Docker Stack, Traefik ve canlı ortam bakımı üzerinde aktif çalışma.',
	},
];

export const domainExperience = [
	{
		title: 'Kurumsal ERP',
		stack: 'Java, Spring Boot, Vue 3, PrimeVue',
		description:
			'Muhasebe, stok, sipariş, irsaliye, e-belge ve raporlama modüllerini aynı ürün içinde taşıyan kurumsal akışlara katkı sundum.',
		points: [
			'Fatura, gider, tahsilat ve ödeme süreçleri için servis katmanları geliştirdim.',
			'Rol, permission ve ortak response standardı gibi temel altyapıları kurguladım.',
		],
	},
	{
		title: 'Multi-tenant E-ticaret',
		stack: 'Spring Boot, Flyway, PostgreSQL, React',
		description:
			'Admin ve müşteri panelleri içeren application provider yapısında tenant bazlı veri akışları ve UI teslimleri yaptım.',
		points: [
			'Migration ve veritabanı versiyonlama süreçlerini yönettim.',
			'Build ve deployment adımlarını GitHub Actions ile otomatikleştirdim.',
		],
	},
	{
		title: 'InfraLenses',
		stack: 'Spring Boot, PostgreSQL, Vue 3, JWT',
		description:
			'Bulut varlık görünürlüğü, ownership mapping ve maliyet takibi odaklı SaaS operasyon panelinde çalıştım.',
		points: [
			'FinOps dashboard ve runtime telemetry ekranları oluşturdum.',
			'Sahipsiz kaynakların görünürlüğünü artıran yönetim akışları geliştirdim.',
		],
	},
	{
		title: 'AtmosLayer',
		stack: 'Spring Boot, Vue.js, CSV/Excel export',
		description:
			'Enerji tahmini ve piyasa gelir analizi için veri toplama, normalizasyon ve senaryo ekranları geliştirdim.',
		points: [
			'24, 48 ve 72 saatlik analiz panelleri ile senaryo hesap katmanları üzerinde çalıştım.',
			'Raporlama çıktıları için dışa aktarım akışları hazırladım.',
		],
	},
	{
		title: 'Microservice Call Center',
		stack: 'Microservices, Saga Pattern, Eventual Consistency',
		description:
			'Çağrı, kuyruk ve kullanıcı akışlarını yöneten modüler servis yapılarında ölçeklenebilir API tasarımları geliştirdim.',
		points: [
			'Orchestration saga pattern ile çok adımlı iş akışlarını yönettim.',
			'Compensation ve fault tolerance odaklı çözüm yaklaşımları uyguladım.',
		],
	},
];

export const experienceTimeline = [
	{
		period: '2023 - Bugün',
		role: 'Software Engineer',
		company: 'CatchSoft',
		summary:
			'ERP, e-ticaret, altyapı zekası ve enerji analitiği ürünlerinde backend servisleri, arayüzler ve release süreçleri üzerinde çalışıyorum.',
		highlights: [
			'Java ve Spring Boot ile servis katmanları, domain akışları ve iş kuralları geliştirdim.',
			'Vue 3, PrimeVue ve React ile yönetim paneli, dashboard ve operasyon ekranları teslim ettim.',
			'GitHub Actions, Docker, GHCR ve Traefik ile canlı ortam yayın akışlarına katkı sundum.',
		],
	},
];

export const skillGroups = [
	{
		title: 'Backend',
		items: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'REST API', 'JPA/Hibernate', 'Maven'],
	},
	{
		title: 'Frontend',
		items: ['Vue.js', 'Vue 3', 'React', 'JavaScript', 'PrimeVue', 'Tailwind CSS', 'Responsive UI'],
	},
	{
		title: 'Data & Search',
		items: ['PostgreSQL', 'SQL', 'Flyway', 'Elasticsearch', 'Multi-tenant DB', 'Versioning'],
	},
	{
		title: 'Architecture',
		items: ['Monolith', 'Microservices', 'Saga Pattern', 'Layered Architecture', 'Reusable CRUD'],
	},
	{
		title: 'DevOps',
		items: ['GitHub Actions', 'Docker', 'Docker Compose', 'GHCR', 'Traefik', 'DigitalOcean', 'Linux'],
	},
	{
		title: 'Product Domains',
		items: ['ERP', 'E-commerce', 'FinOps', 'Energy Analytics', 'Operations Panels', 'User & Permission Management'],
	},
];

export const workingPrinciples = [
	{
		title: 'Üretime uygun servisler',
		text: 'Sadece çalışan değil, bakım yapılabilir ve genişlemeye açık backend katmanları kurmaya odaklanıyorum.',
	},
	{
		title: 'İş akışını anlayan arayüzler',
		text: 'Operasyon ekiplerinin gerçekten kullandığı ekranlarda hız, netlik ve karar desteği önceliğim oluyor.',
	},
	{
		title: 'Yetki ve güvenlik disiplini',
		text: 'Rol bazlı erişim, validation ve hata yönetimi gibi altyapıları ürün kalitesinin parçası görüyorum.',
	},
	{
		title: 'Yayın sorumluluğu',
		text: 'Kod tesliminin canlı ortam, deployment ve bakım tarafıyla birlikte düşünülmesi gerektiğine inanıyorum.',
	},
];

export const credentials = {
	education: 'Eskişehir Osmangazi University | Mathematics and Computer Science | 2017',
	certifications: [
		'Java Programming Language Training',
		'Spring Boot Development Training',
	],
	languages: ['Türkçe: Ana dil', 'İngilizce: B1 - Intermediate'],
};
