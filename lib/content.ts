/**
 * Every word on the site lives here, in both languages.
 *
 * Source: BrandTalk Credential Ver1.2025 (34-page deck, read 2026-10-30).
 * That deck documents the agency model. The current model is Phan Như Quỳnh
 * working one-to-one with founders and boards, so the deck is used as proof of
 * what has been done, not as a menu of agency services.
 *
 * Client results are named without figures, at the client's request.
 */

export type Lang = 'vi' | 'en'

/** A string that exists in both languages. */
export type L = { vi: string; en: string }

export const LANGS: Lang[] = ['vi', 'en']

export const brand = {
  name: 'BrandTalk',
  tagline: { vi: 'more value, more sustainable', en: 'more value, more sustainable' },
  role: {
    vi: 'Cố vấn thương hiệu & thương mại xã hội',
    en: 'Brand and social commerce advisor',
  },
  founder: 'Phan Như Quỳnh',
  founderRole: {
    vi: 'Nhà sáng lập BrandTalk',
    en: 'Founder, BrandTalk',
  },
}

export const nav: { href: string; label: L }[] = [
  { href: '/', label: { vi: 'Trang chủ', en: 'Home' } },
  { href: '/about', label: { vi: 'Về BrandTalk', en: 'About' } },
  { href: '/approach', label: { vi: 'Cách đồng hành', en: 'Approach' } },
  { href: '/clients', label: { vi: 'Đã đồng hành', en: 'Clients' } },
  { href: '/contact', label: { vi: 'Liên hệ', en: 'Contact' } },
]

export const ui = {
  langLabel: { vi: 'EN', en: 'VI' },
  langSwitchTitle: { vi: 'Switch to English', en: 'Chuyển sang tiếng Việt' },
  menu: { vi: 'Menu', en: 'Menu' },
  close: { vi: 'Đóng', en: 'Close' },
  skipToContent: { vi: 'Tới nội dung chính', en: 'Skip to content' },
  readMore: { vi: 'Xem thêm', en: 'Read more' },
  backToClients: { vi: 'Về danh sách', en: 'Back to clients' },
}

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const home = {
  hero: {
    kicker: {
      vi: 'TikTok Shop Partner · Shopee Enabler',
      en: 'TikTok Shop Partner · Shopee Enabler',
    },
    headline: {
      vi: 'Hiểu từ gốc để tăng trưởng bền vững',
      en: 'Understand the root to grow for good',
    },
    sub: {
      vi: 'Tôi ngồi cạnh người sáng lập và ban điều hành, để thương hiệu Việt bán được hàng trên nền tảng số mà không đánh mất thứ làm nên chính mình.',
      en: 'I sit beside founders and boards so that Vietnamese brands can sell on digital platforms without losing what makes them themselves.',
    },
    cta: { vi: 'Bắt đầu một cuộc trò chuyện', en: 'Start a conversation' },
    ctaSecondary: { vi: 'Cách tôi đồng hành', en: 'How I work' },
  },

  /** The founder letter, kept close to the words in the credential deck. */
  letter: {
    label: { vi: 'Lời ngỏ', en: 'A note from the founder' },
    body: {
      vi: [
        'Start with WHY. Đây là câu hỏi tôi luôn bật ra khi tiếp cận các vấn đề. Tôi giữ tâm thế tò mò đến tận cùng với mọi đề bài, mọi sản phẩm khách hàng chia sẻ.',
        'Mọi chiến lược đều phải xuất phát từ giá trị cốt lõi và văn hoá doanh nghiệp. Sự khác biệt và nổi bật của thương hiệu sinh ra từ đấy.',
        'Mọi nền tảng đều vận hành theo chiến lược và nguyên lý riêng, nhưng không nằm ngoài nguyên lý của cung cầu, của thị trường và marketing. Do đó chúng tôi luôn quan sát và đặt câu hỏi tại sao cho mọi tình huống: thử nghiệm, đúc kết, thực hành, chia sẻ, ứng dụng, rồi lại đúc kết, để đưa ra giải pháp may đo cho từng doanh nghiệp.',
        'Tôi tin rằng tư duy từ gốc rễ và mục tiêu rõ ràng chính là yếu tố quyết định sự thành bại của BrandTalk, và của cả những người bạn mà chúng tôi đồng hành.',
      ],
      en: [
        'Start with WHY. It is the question I reach for first, every time. I stay curious to the very bottom of every brief and every product a client puts in front of me.',
        'Strategy has to begin at core values and company culture. That is where a brand becomes distinct, and where it stands out.',
        'Every platform runs on its own logic, but none of them escape the principles of supply and demand, of markets, of marketing. So we keep watching, and keep asking why: test, distil, practise, share, apply, then distil again, until the answer fits that one business.',
        'I believe thinking from the root, with a clear goal, decides whether BrandTalk succeeds — and whether the people we walk beside do too.',
      ],
    },
  },

  marketTitle: {
    vi: 'Vì sao Shoppertainment là cuộc chơi của 5-10 năm tới',
    en: 'Why shoppertainment is the next five to ten years',
  },
  marketBody: {
    vi: 'Thương mại điện tử Việt Nam giữ tốc độ tăng trưởng trên 25% và vượt quy mô 20 tỷ USD. TikTok Shop, một người chơi mới từ 2021, cho thấy một đại dương xanh khi ghép mua sắm với giải trí. Short video, livestream và influencer không còn là trào lưu để sợ bỏ lỡ, mà là một phương thức bán hàng cần chiến lược rõ ràng.',
    en: 'Vietnamese e-commerce keeps growing above 25 percent a year and has passed 20 billion USD. TikTok Shop, which only arrived in 2021, opened blue water by fusing shopping with entertainment. Short video, livestream and influencers are no longer a trend to fear missing; they are a way of selling that needs a clear strategy.',
  },
  marketSource: {
    vi: 'Nguồn: Báo cáo Hiệp hội Thương mại điện tử Việt Nam (VECOM)',
    en: 'Source: Vietnam E-commerce Association (VECOM) report',
  },

  /** TikTok's own #TikTokmademebuyit research, as cited in the deck. */
  stats: [
    {
      value: '74%',
      label: {
        vi: 'được khích lệ tìm hiểu thêm về một nhãn hiệu hay sản phẩm',
        en: 'were prompted to learn more about a brand or product',
      },
    },
    {
      value: '66%',
      label: {
        vi: 'được giúp quyết định nên mua gì',
        en: 'were helped to decide what to buy',
      },
    },
    {
      value: '67%',
      label: {
        vi: 'được khuyến khích mua sắm ngay cả khi chưa định mua',
        en: 'were encouraged to shop even when they had not planned to',
      },
    },
  ],
  statsSource: {
    vi: 'Nhận thức chung của 8.2 triệu lượt xem #TikTokmademebuyit',
    en: 'Across 8.2 million views of #TikTokmademebuyit',
  },

  closing: {
    quote: {
      vi: 'Một thương hiệu tốt là một câu chuyện không bao giờ dừng lại.',
      en: 'A good brand is a story that never stops.',
    },
    attribution: 'Tony Hsieh, CEO Zappos',
    body: {
      vi: 'Văn hoá không chỉ là ký ức, mà còn là hơi thở, là mạch nguồn sống động đã trường tồn qua bao thế hệ. Đó là giá trị cần được gìn giữ và thắp sáng, không chỉ trong bảo tàng, mà ngay trong đời sống hàng ngày, trong từng sản phẩm, từng thương hiệu.',
      en: 'Culture is not only memory. It is breath, a living current that has run through generations. It deserves to be kept and lit up — not only in museums, but in daily life, in each product, in each brand.',
    },
  },
}

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  title: { vi: 'Về BrandTalk', en: 'About BrandTalk' },
  lede: {
    vi: 'BrandTalk bắt đầu như một agency về thương mại xã hội. Hôm nay nó là công việc của một người: đồng hành cùng người sáng lập và ban điều hành, mang theo những gì đã học được từ hàng chục doanh nghiệp sản xuất, làng nghề và thương hiệu OCOP Việt Nam.',
    en: 'BrandTalk began as a social commerce agency. Today it is one person’s work: walking alongside founders and boards, carrying what was learned from dozens of Vietnamese manufacturers, craft villages and OCOP brands.',
  },

  visionTitle: { vi: 'Tầm nhìn và sứ mệnh', en: 'Vision and mission' },
  aspiration: {
    label: { vi: 'Khát vọng', en: 'Aspiration' },
    body: {
      vi: 'Đồng hành lan toả giá trị khác biệt của các thương hiệu Việt, hỗ trợ đầu ra, bảo tồn giá trị văn hoá, làng nghề truyền thống và nghề gia truyền.',
      en: 'To carry the distinct value of Vietnamese brands further, to help them find buyers, and to keep cultural heritage, traditional craft villages and family trades alive.',
    },
  },
  goal: {
    label: { vi: 'Mục tiêu', en: 'Goal' },
    body: {
      vi: 'Nâng cao văn hoá bản địa và giá trị thương hiệu của các thương hiệu Việt và nhà sản xuất Việt Nam.',
      en: 'To raise local culture and brand value for Vietnamese brands and Vietnamese makers.',
    },
  },
  belief: {
    label: { vi: 'Niềm tin', en: 'Belief' },
    body: {
      vi: 'Mọi thứ đều bắt nguồn từ nguyên lý và trái tim.',
      en: 'Everything begins at first principles, and at the heart.',
    },
  },
  philosophy: {
    label: { vi: 'Triết lý kinh doanh', en: 'Business philosophy' },
    body: {
      vi: 'Phụng sự tử tế và chân thành.',
      en: 'To serve with kindness and sincerity.',
    },
  },

  valuesTitle: { vi: 'Hệ giá trị cốt lõi', en: 'Core values' },
  values: [
    {
      name: { vi: 'Trách nhiệm', en: 'Responsibility' },
      body: {
        vi: 'Không dừng bước và trách nhiệm đến cùng với mục tiêu.',
        en: 'Keep going, and stay accountable to the goal until it is met.',
      },
    },
    {
      name: { vi: 'Tử tế', en: 'Kindness' },
      body: {
        vi: 'Tử tế và biết ơn mỗi bài học, mỗi hành trình được cùng đi qua với khách hàng.',
        en: 'Be kind, and be grateful for every lesson and every journey shared with a client.',
      },
    },
    {
      name: { vi: 'Học tập và chia sẻ', en: 'Learning and sharing' },
      body: {
        vi: 'Không ngừng bồi đắp nội lực và nền tảng gốc rễ.',
        en: 'Keep building inner capability and the foundation it rests on.',
      },
    },
    {
      name: { vi: 'Sáng tạo', en: 'Creativity' },
      body: {
        vi: 'Sáng tạo gắn liền với giá trị cốt lõi, nguồn lực và mục tiêu thực tế.',
        en: 'Create within the bounds of core values, real resources and real goals.',
      },
    },
  ],

  networkTitle: { vi: 'Mạng lưới chuyên gia', en: 'Expert network' },
  networkLede: {
    vi: 'Khi một bài toán cần nhiều hơn một người, tôi mời đúng người vào cuộc. Đây là những cộng sự đã cùng làm việc qua nhiều chương trình.',
    en: 'When a problem needs more than one head, I bring in the right person. These are the collaborators I have worked with across many programmes.',
  },
  network: [
    { name: 'Trung Thị Hoài Thu', role: { vi: 'High performance coach', en: 'High performance coach' } },
    { name: 'Jane Phương Phùng', role: { vi: 'CEO Savela, chuyên gia thương hiệu', en: 'CEO of Savela, brand specialist' } },
    { name: 'Đặng Thúy Hà', role: { vi: 'Chuyên gia thấu hiểu khách hàng', en: 'Consumer insight specialist' } },
    { name: 'Thanh Thủy', role: { vi: 'Chuyên gia đào tạo livestream', en: 'Livestream training specialist' } },
    { name: 'Lê Thùy Dung', role: { vi: 'Tổ chức sản xuất media', en: 'Media production' } },
    { name: 'Nam Trần', role: { vi: 'Chuyên gia quay chụp', en: 'Film and photography' } },
  ],

  partnersTitle: { vi: 'Đối tác', en: 'Partners' },
  partners: [
    { vi: 'Cộng đồng Doanh nhân tử tế Việt Nam', en: 'Vietnam Kind Entrepreneurs Community' },
    { vi: 'Công ty nghiên cứu thị trường và coaching doanh nghiệp — Th.s Đặng Thúy Hà', en: 'Market research and business coaching firm — Đặng Thúy Hà, MSc' },
  ],
}

/* ------------------------------------------------------------------ */
/* Approach                                                            */
/* ------------------------------------------------------------------ */

export const approach = {
  title: { vi: 'Cách đồng hành', en: 'How I work' },
  lede: {
    vi: 'Không có gói dịch vụ đóng sẵn. Mỗi doanh nghiệp bắt đầu từ một câu hỏi khác nhau, nên việc đầu tiên luôn là ngồi xuống và tìm cho ra câu hỏi đó.',
    en: 'There is no packaged service. Every business starts from a different question, so the first task is always to sit down and find out what that question is.',
  },
  modes: [
    {
      name: { vi: 'Đồng hành cùng ban điều hành', en: 'Walking with the board' },
      body: {
        vi: 'Làm việc định kỳ với người sáng lập và ban điều hành về chiến lược thương hiệu, lựa chọn nền tảng và nhịp tăng trưởng. Tôi không nhận việc thực thi thay; tôi giúp bạn ra quyết định và giữ hướng.',
        en: 'Regular sessions with the founder and the board on brand strategy, platform choices and the pace of growth. I do not take execution off your hands; I help you decide, and help you hold the direction.',
      },
      detail: {
        vi: ['Phiên chiến lược hàng tháng', 'Rà soát theo quý', 'Định hướng khi ra quyết định lớn'],
        en: ['Monthly strategy sessions', 'Quarterly reviews', 'Counsel at the big decisions'],
      },
    },
    {
      name: { vi: 'Mentor đội ngũ nội bộ', en: 'Mentoring the in-house team' },
      body: {
        vi: 'Đào tạo và kèm cặp đội ngũ của bạn về video ngắn, livestream và vận hành gian hàng, để năng lực ở lại trong doanh nghiệp thay vì nằm ở một đơn vị bên ngoài.',
        en: 'Training and coaching your own team on short video, livestream and shop operations, so the capability stays inside the business instead of sitting with an outside agency.',
      },
      detail: {
        vi: ['Đào tạo nội bộ về thương mại xã hội', 'Kèm cặp nội dung và vận hành', 'Xây quy trình và kênh'],
        en: ['In-house social commerce training', 'Content and operations coaching', 'Building process and channels'],
      },
    },
    {
      name: { vi: 'Chiến lược thương hiệu bằng video ngắn', en: 'Brand strategy through short video' },
      body: {
        vi: 'Dựng câu chuyện thương hiệu, hoặc thương hiệu cá nhân của người đứng đầu, theo ngôn ngữ của nền tảng, mà vẫn bắt rễ ở giá trị cốt lõi.',
        en: 'Shaping the brand story, or the founder’s own public presence, in the language of the platform while keeping it rooted in core values.',
      },
      detail: {
        vi: ['Định vị và thông điệp', 'Định hướng kênh', 'Thương hiệu cá nhân người sáng lập'],
        en: ['Positioning and message', 'Channel direction', 'Founder brand'],
      },
    },
    {
      name: { vi: 'Hỗ trợ nhà bán trên nền tảng', en: 'Platform-side support' },
      body: {
        vi: 'Với tư cách TikTok Shop Partner và Shopee Enabler: tối ưu hỗ trợ từ nền tảng và ngành hàng, key livestream, voucher thưởng, kháng nghị một kèm một và cập nhật chính sách định kỳ.',
        en: 'As a TikTok Shop Partner and Shopee Enabler: making the most of platform and category support, key livestreams, reward vouchers, one-to-one appeals, and regular policy updates.',
      },
      detail: {
        vi: ['Tối ưu hỗ trợ nền tảng', 'Kháng nghị 1:1', 'Workshop chuyên môn'],
        en: ['Platform support optimisation', 'One-to-one appeals', 'Specialist workshops'],
      },
    },
  ],
  note: {
    vi: 'Phạm vi và thời lượng được may đo sau buổi trao đổi đầu tiên. Buổi đầu không mất phí.',
    en: 'Scope and length are tailored after a first conversation. That first conversation is free.',
  },
}

/* ------------------------------------------------------------------ */
/* Clients                                                             */
/* ------------------------------------------------------------------ */

export const clients = {
  title: { vi: 'Đã đồng hành', en: 'Clients' },
  lede: {
    vi: 'Những doanh nghiệp đã cùng đi qua một chặng với BrandTalk. Kết quả cụ thể được chia sẻ trực tiếp trong buổi trao đổi.',
    en: 'Businesses that have walked a stretch of road with BrandTalk. Specific results are shared directly in conversation.',
  },

  caseLabel: { vi: 'Dự án đồng hành', en: 'Engagements' },
  cases: [
    {
      name: 'Mega Eco',
      sector: { vi: 'Sản phẩm từ mo cau, Quảng Ngãi', en: 'Areca sheath tableware, Quảng Ngãi' },
      body: {
        vi: 'Ra mắt hộp cơm bằng mo cau đầu tiên trên thế giới. Mentor chiến lược doanh nghiệp và định hướng kênh: mở rộng hệ thống cộng tác viên, phát triển kênh xuất khẩu sang Đài Loan và Pháp, chuyển giao công nghệ cho doanh nghiệp địa phương, và tạo đầu ra cho bà con Quảng Ngãi.',
        en: 'Launched the world’s first lunch box made from areca sheath. Strategy mentoring and channel direction: widening the collaborator network, opening export channels to Taiwan and France, transferring the technology to other local producers, and creating a route to market for farmers in Quảng Ngãi.',
      },
      services: {
        vi: ['Mentor chiến lược', 'Định hướng kênh'],
        en: ['Strategy mentoring', 'Channel direction'],
      },
    },
    {
      name: 'Freshity',
      sector: { vi: 'Thực phẩm', en: 'Food' },
      body: {
        vi: 'Chuyển từ trạng thái phụ thuộc hoàn toàn vào KOC sang tự chủ kênh quảng bá, xây dựng nhận diện thương hiệu qua hệ thống review và nâng tỷ trọng doanh thu tự vận hành.',
        en: 'Moved from depending entirely on KOCs to running its own promotion channels, building brand recognition through reviews and raising the share of revenue it drives itself.',
      },
      services: {
        vi: ['Chiến lược thương mại xã hội', 'Tối ưu vận hành'],
        en: ['Social commerce strategy', 'Operations optimisation'],
      },
    },
    {
      name: 'Chosim247',
      sector: { vi: 'Sim và data viễn thông', en: 'Telco sim and data' },
      body: {
        vi: 'Tối ưu phiên livestream do đội ngũ nội bộ vận hành, qua hai chiến dịch lớn trong năm, đưa thương hiệu vào nhóm dẫn đầu mảng sim data.',
        en: 'Optimised livestreams run by the in-house team across two major campaigns in the year, taking the brand into the leading group in its category.',
      },
      services: {
        vi: ['Tối ưu livestream', 'Chiến dịch'],
        en: ['Livestream optimisation', 'Campaigns'],
      },
    },
    {
      name: 'Hòa Tuộc Seafood',
      sector: { vi: 'Hải sản', en: 'Seafood' },
      body: {
        vi: 'Đào tạo và mentor nội dung, hỗ trợ vận hành và livestream. Xây thương hiệu cá nhân cho chủ kênh, phát triển bán hàng đa nền tảng với khâu vận chuyển tự chủ, và mở rộng hệ thống đại lý toàn quốc.',
        en: 'Content training and mentoring, with support on operations and livestream. Built the owner’s personal brand, developed multi-platform selling with in-house delivery, and extended the dealer network nationwide.',
      },
      services: {
        vi: ['Đào tạo nội dung', 'Hỗ trợ vận hành'],
        en: ['Content training', 'Operations support'],
      },
    },
    {
      name: 'Việt Tín 5s',
      sector: { vi: 'Dịch vụ', en: 'Services' },
      body: {
        vi: 'Coaching doanh nghiệp, xây dựng quy trình và dựng kênh TikTok để quảng bá thương hiệu.',
        en: 'Business coaching, process design, and building a TikTok channel to carry the brand.',
      },
      services: {
        vi: ['Coaching doanh nghiệp', 'Xây kênh'],
        en: ['Business coaching', 'Channel build'],
      },
    },
    {
      name: 'Call me Duy & Aom',
      sector: { vi: 'Nhà sáng tạo nội dung', en: 'Content creators' },
      body: {
        vi: 'Hỗ trợ nhà bán thuộc mạng lưới TikTok Shop Partner: tối ưu hỗ trợ nền tảng, key livestream và voucher thưởng.',
        en: 'Seller support within the TikTok Shop Partner network: platform support optimisation, key livestreams and reward vouchers.',
      },
      services: {
        vi: ['Hỗ trợ nhà bán', 'Key livestream'],
        en: ['Seller support', 'Key livestream'],
      },
    },
  ],

  trainingLabel: { vi: 'Doanh nghiệp đã đào tạo', en: 'Training clients' },
  training: [
    { name: 'Vietnam Airlines', note: { vi: 'Tiếp thị số cho kênh đại lý', en: 'Digital marketing for the agency channel' } },
    { name: 'Đại Phú An Group', note: { vi: 'Đào tạo đại lý livestream', en: 'Livestream training for dealers' } },
    { name: 'Gốm Bụt', note: { vi: 'Đào tạo đại lý, cùng nghệ nhân Nguyễn Trường Sơn', en: 'Dealer training, with artisan Nguyễn Trường Sơn' } },
    { name: 'CEO Hà Nội 7 & 8', note: { vi: 'Thương mại xã hội, video ngắn và livestream chuyên sâu', en: 'Social commerce, short video and advanced livestream' } },
  ],

  heritageLabel: { vi: 'Thương hiệu di sản trong hành trình', en: 'Heritage brands along the way' },
  heritage: ['Zó Project', 'Hoa Tiên Brocade', 'Gốm Sen', 'Oca', 'Việt Tú', 'Nước mắm Mười Quý'],

  milestonesLabel: { vi: 'Dấu ấn', en: 'Milestones' },
  milestones: [
    {
      year: '2024',
      items: {
        vi: [
          'Đối tác chiến lược của U+ và ban tổ chức Triển lãm TMĐT Novabiz Chiết Giang, đưa 60 doanh nghiệp Việt sang tham quan và học hỏi tại nhà máy sản xuất.',
          'Được mời làm việc cùng đội ngũ Douyin — ByteDance tại Thượng Hải, với tư cách TikTok Shop Partner Việt Nam.',
          'Huấn luyện viên module video ngắn trong khoá coaching của chuyên gia Đặng Thúy Hà.',
          'Hơn 10 hội thảo và workshop về thương mại xã hội cho cộng đồng doanh nghiệp; khởi động khoá mentor riêng cho doanh nghiệp sản xuất có chứng chỉ OCOP.',
        ],
        en: [
          'Strategic partner to U+ and the organisers of the Novabiz Zhejiang e-commerce exhibition, taking 60 Vietnamese businesses to visit and learn at the production sites.',
          'Invited to work with the Douyin — ByteDance team in Shanghai as a Vietnamese TikTok Shop Partner.',
          'Short-video module trainer on Đặng Thúy Hà’s coaching programme.',
          'More than ten seminars and workshops on social commerce for the business community; launched a dedicated mentoring programme for OCOP-certified manufacturers.',
        ],
      },
    },
    {
      year: '2025',
      items: {
        vi: [
          'Chia sẻ tại sự kiện Bứt phá thành công — Chiến lược bền vững cho thương hiệu Việt và OCOP, cùng đội ngũ TikTok Shop CSR.',
          'Workshop Chinh phục TikTok Shop, tổ chức bởi Bộ Kế hoạch và Đầu tư, JCI Thăng Long và Đại học Quốc gia.',
          'Cùng đại diện TikTok Việt Nam chia sẻ với 120 sinh viên quốc tế từ Đại học Lyon, Pháp, trong khoá Study Tour tại CFVG Việt Nam.',
          'Các khoá đào tạo TikTok Shop cho người mới bắt đầu và xây dựng thương hiệu cá nhân bằng video ngắn.',
        ],
        en: [
          'Spoke at Breaking Through — Sustainable Strategy for Vietnamese and OCOP Brands, with the TikTok Shop CSR team.',
          'Conquering TikTok Shop workshop, run by the Ministry of Planning and Investment, JCI Thăng Long and Vietnam National University.',
          'Shared the stage with TikTok Vietnam for 120 international students from Université de Lyon on their study tour at CFVG Vietnam.',
          'Training courses on TikTok Shop for beginners, and on building a founder brand through short video.',
        ],
      },
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contact = {
  title: { vi: 'Liên hệ', en: 'Contact' },
  lede: {
    vi: 'Kể cho tôi nghe doanh nghiệp của bạn đang ở đâu và điều gì đang khiến bạn băn khoăn. Tôi trả lời trong vòng 48 giờ.',
    en: 'Tell me where your business stands and what is on your mind. I reply within 48 hours.',
  },
  details: {
    phoneLabel: { vi: 'Điện thoại', en: 'Phone' },
    phone: '+84 936 752 494',
    emailLabel: { vi: 'Email', en: 'Email' },
    email: 'ceo@brandtalk.asia',
    addressLabel: { vi: 'Địa chỉ', en: 'Address' },
    address: {
      vi: 'Rivera Park, 69 Vũ Trọng Phụng, Thanh Xuân, Hà Nội',
      en: 'Rivera Park, 69 Vũ Trọng Phụng, Thanh Xuân, Hanoi',
    },
    facebookLabel: { vi: 'Facebook', en: 'Facebook' },
    facebook: 'fb.com/brandtalkmarketingagency',
    facebookUrl: 'https://fb.com/brandtalkmarketingagency',
  },
  form: {
    name: { vi: 'Họ và tên', en: 'Full name' },
    email: { vi: 'Email', en: 'Email' },
    company: { vi: 'Doanh nghiệp', en: 'Company' },
    interest: { vi: 'Bạn quan tâm điều gì', en: 'What brings you here' },
    interestOptions: [
      { value: 'board', label: { vi: 'Đồng hành cùng ban điều hành', en: 'Walking with the board' } },
      { value: 'team', label: { vi: 'Mentor đội ngũ nội bộ', en: 'Mentoring the in-house team' } },
      { value: 'brand', label: { vi: 'Chiến lược thương hiệu bằng video ngắn', en: 'Brand strategy through short video' } },
      { value: 'platform', label: { vi: 'Hỗ trợ nhà bán trên nền tảng', en: 'Platform-side support' } },
      { value: 'other', label: { vi: 'Điều khác', en: 'Something else' } },
    ],
    message: { vi: 'Nội dung', en: 'Message' },
    messagePlaceholder: {
      vi: 'Doanh nghiệp bạn đang bán ở đâu, đội ngũ bao nhiêu người, và điều gì đang vướng?',
      en: 'Where do you sell today, how big is the team, and what is in the way?',
    },
    call: { vi: 'Tôi muốn đặt một buổi trao đổi 30 phút', en: 'I would like to book a 30-minute conversation' },
    submit: { vi: 'Gửi', en: 'Send' },
    sending: { vi: 'Đang gửi', en: 'Sending' },
    success: {
      vi: 'Đã nhận được. Tôi sẽ trả lời trong vòng 48 giờ.',
      en: 'Received. I will reply within 48 hours.',
    },
    error: {
      vi: 'Chưa gửi được. Bạn thử lại, hoặc viết thẳng tới ceo@brandtalk.asia.',
      en: 'That did not send. Try again, or write straight to ceo@brandtalk.asia.',
    },
    required: { vi: 'Phần này cần điền', en: 'This field is needed' },
    invalidEmail: { vi: 'Email chưa đúng định dạng', en: 'That email does not look right' },
  },
}

export const footer = {
  blurb: {
    vi: 'Cố vấn thương hiệu và thương mại xã hội cho doanh nghiệp Việt.',
    en: 'Brand and social commerce advisor for Vietnamese businesses.',
  },
  rights: { vi: 'Bảo lưu mọi quyền.', en: 'All rights reserved.' },
}
