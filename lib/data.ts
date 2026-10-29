import { CaseStudy, Article, Service } from './types'

export const SERVICES: Service[] = [
  {
    id: 'ecommerce',
    slug: 'ecommerce-shoppertainment',
    title: 'E-Commerce & Shoppertainment Strategy',
    description:
      'Transform your brand presence on modern e-commerce platforms with entertainment-driven strategy. We specialize in TikTok Shop, livestream commerce, and short-form video optimization.',
    shortDescription:
      'Platform strategy, livestream optimization, social commerce integration',
    keyServices: [
      'TikTok Shop Strategy & Setup',
      'Livestream Commerce Planning',
      'Short-Form Video Content Strategy',
      'Platform Selection & Roadmap',
      'Conversion Funnel Optimization',
      'Community Building & Engagement',
    ],
    benefits: [
      '300%+ revenue increase from livestream events',
      'Higher conversion rates on shoppertainment channels',
      'Authentic brand storytelling in modern formats',
      'Direct community connection with customers',
    ],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    id: 'heritage-storytelling',
    slug: 'heritage-brand-storytelling',
    title: 'Heritage Brand Storytelling',
    description:
      'Elevate your Vietnamese heritage brand with authentic narratives that honor tradition while engaging modern audiences. We position your brand as a cultural ambassador and digital innovator.',
    shortDescription:
      'Cultural positioning, legacy narrative, authenticity communication',
    keyServices: [
      'Brand Heritage Audit',
      'Narrative Development',
      'Cultural Positioning Strategy',
      'Legacy Storytelling Framework',
      'Audience Connection Strategy',
      'Brand Voice & Messaging',
    ],
    benefits: [
      'Premium brand perception',
      'Deeper emotional connection with customers',
      'Cultural differentiation from competitors',
      'Global appeal of Vietnamese heritage',
    ],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    id: 'sme-transformation',
    slug: 'sme-digital-transformation',
    title: 'SME Digital Transformation',
    description:
      'Guide your business through comprehensive digital transformation. From platform assessment to team training, we support every step of your journey to becoming a digital-first brand.',
    shortDescription:
      'Digital readiness assessment, platform selection, team enablement',
    keyServices: [
      'Digital Maturity Assessment',
      'Technology Stack Recommendation',
      'Platform Migration Planning',
      'Team Training & Enablement',
      'Process Optimization',
      'Performance Metrics Setup',
    ],
    benefits: [
      'Future-proof business model',
      'Team confidence in digital channels',
      'Reduced operational friction',
      'Measurable performance improvement',
    ],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    id: 'founder-mentorship',
    slug: 'founder-mentorship-advisory',
    title: 'Founder Mentorship & Advisory',
    description:
      'Direct guidance from an experienced advisor who understands Vietnamese market dynamics and global e-commerce trends. Monthly sessions, quarterly reviews, and strategic counsel for your growth.',
    shortDescription: 'Strategic guidance, monthly mentorship, board-level advice',
    keyServices: [
      'Monthly Strategy Sessions',
      'Quarterly Business Reviews',
      'Competitive Analysis',
      'Market Insights & Trends',
      'Decision-Making Framework',
      'Growth Roadmap Development',
    ],
    benefits: [
      'Insider perspective on market opportunities',
      'Accelerated decision-making',
      'Network & partnership introductions',
      'De-risked strategic moves',
    ],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
]

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    createdAt: '2024-09-12',
    slug: 'hoa-tien-brocade-heritage-textile-revival',
    title: 'Hoa Tiên Brocade: From Workshop to Global Market',
    client: 'Hoa Tiên Brocade Collective',
    industry: 'Heritage Textiles / Artisan Crafts',
    description:
      'A family-owned brocade weaving workshop with 40 years of history transformed into a digital-first heritage brand, reaching international customers through livestream commerce and scaling revenue from $120K to $890K in 14 months.',
    challenge:
      'Hoa Tiên Brocade produced exquisite traditional textiles using century-old Vietnamese weaving techniques, but operated almost entirely through wholesale to tourist shops and limited local retail. The craft was dying—younger generations were leaving. No digital presence meant no direct customer connection and zero control over brand narrative.',
    approach:
      'We positioned Hoa Tiên as a "living heritage" brand where customers could connect directly with master weavers. Strategy included: (1) Documentary-style content showing weaving process, (2) Monthly livestream sessions with the founder discussing craft heritage, (3) Limited-edition drops with storytelling around each piece, (4) Personal connection to tradition—each product includes weaver story card.',
    solution:
      'Launched TikTok Shop + Shopify store with integrated livestream strategy. Every product featured educational content about techniques, materials, cultural significance. Created "Weaver of the Month" series highlighting individual artisans. Built email community of heritage enthusiasts. Trained team on storytelling and customer engagement.',
    results: [
      'Revenue growth: $120K → $890K (642% increase)',
      '38,500 TikTok followers in 10 months (90% organic)',
      '22% conversion rate on livestream events',
      '85% repeat customer rate (industry avg: 15%)',
      'International shipments to 18 countries',
      'Apprenticeship program for 8 young weavers launched',
    ],
    metrics: [
      { label: 'Revenue Growth', value: '+642%' },
      { label: 'TikTok Followers', value: '38.5K' },
      { label: 'Repeat Customers', value: '85%' },
      { label: 'International Markets', value: '18' },
    ],
    heroImage:
      'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=1200&h=600&fit=crop',
    services: ['Heritage Brand Storytelling', 'Shoppertainment Strategy', 'Community Building'],
    testimonial: {
      quote:
        'Before BrandTalk, we were just another wholesale supplier competing on price. Now customers buy from us because they understand and care about our craft. We are not just selling textiles—we are preserving a tradition. And our children want to learn weaving again.',
      author: 'Trần Thị Hương',
      role: 'Founder, Hoa Tiên Brocade',
    },
  },
  {
    id: 'case-2',
    createdAt: '2024-11-05',
    slug: 'gom-sen-pottery-heritage-ecommerce',
    title: 'Gốm Sen: Ceramic Artistry Meets Modern Commerce',
    client: 'Gốm Sen Pottery Workshop',
    industry: 'Ceramics & Traditional Crafts',
    description:
      'A 3-generation pottery workshop in Bát Tràng transformed into a DTC ceramics brand, leveraging heritage storytelling and shoppertainment to scale to $1.2M annual revenue while attracting design-conscious consumers globally.',
    challenge:
      'Gốm Sen created stunning handmade ceramics but was invisible to modern consumers. Traditional clay pottery was perceived as "quaint" rather than sophisticated. Zero online visibility meant competing solely on wholesale price. Young people saw pottery as a dying craft, not a viable career.',
    approach:
      'Repositioned Gốm Sen as "functional art"—elevating handmade ceramics from craft to design category. Strategy: (1) Visual-first storytelling through Instagram/TikTok showing clay transformation, (2) Founder interviews discussing philosophy of handmade, (3) Collaboration with interior designers and lifestyle brands, (4) Limited collections with artist stories, (5) Behind-the-scenes kiln firing livestreams creating anticipation.',
    solution:
      'Built luxury e-commerce experience (Shopify Premium) with high-quality product photography. Created content calendar mixing technical process videos, artisan stories, and design inspiration. Launched monthly livestream "Kiln Nights" where founder discussed new collections. Built partnership with 12 lifestyle influencers. Implemented wait-list strategy for limited drops.',
    results: [
      'Annual revenue: $1.2M (from $280K baseline)',
      '42,000 Instagram followers (design-conscious demographic)',
      '18,500 email subscribers (high engagement)',
      'Average order value: $156 (up from $58)',
      '48% of revenue from repeat customers',
      'Featured in 8 international design publications',
      '5 wholesale partnerships with design boutiques in US & Europe',
    ],
    metrics: [
      { label: 'Annual Revenue', value: '$1.2M' },
      { label: 'Instagram Community', value: '42K' },
      { label: 'AOV', value: '$156' },
      { label: 'Design Publications', value: '8' },
    ],
    heroImage:
      'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=1200&h=600&fit=crop',
    services: ['Heritage Brand Storytelling', 'E-Commerce Strategy', 'Community Building'],
    testimonial: {
      quote:
        'Gốm Sen was heading toward obsolescence. BrandTalk showed us our pottery was not old-fashioned—it was timeless. By positioning craft as art and heritage as value, we attracted a completely new customer who appreciates our work and pays accordingly. Our kiln is running 24/7 now.',
      author: 'Nguyễn Văn Kiên',
      role: 'Master Artisan & Co-founder, Gốm Sen',
    },
  },
  {
    id: 'case-3',
    createdAt: '2025-01-20',
    slug: 'nuoc-mam-mười-quy-artisanal-fish-sauce',
    title: 'Nước Mắm Mười Quý: Premium Fish Sauce Pioneer',
    client: 'Nước Mắm Mười Quý',
    industry: 'Artisanal Foods / Heritage Condiments',
    description:
      'A family fish sauce producer with 60 years of heritage launched their first digital commerce strategy, repositioning traditional condiment as premium ingredient for global culinary audience, achieving $680K revenue in Year 1.',
    challenge:
      'Nước Mắm Mười Quý made exceptional fish sauce using traditional fermentation (3+ years aged) but was completely unknown outside Vietnamese community. Sold through Vietnamese grocers to Vietnamese customers. No brand identity beyond product. Parents and chefs dismissed fish sauce as "smelly condiment" rather than essential culinary ingredient.',
    approach:
      'Positioned as "liquid gold of Vietnamese cuisine"—a premium, craft ingredient with culinary education angle. Strategy: (1) Partner with celebrity chefs and food writers to create legitimacy, (2) Educational content explaining fermentation science and culinary applications, (3) Sampling program for restaurants and food influencers, (4) Storytelling around family legacy and fermentation mastery, (5) Premium packaging positioning product as gift/specialty.',
    solution:
      'Built DTC Shopify store with chef-partner content. Created educational video series: "Fermentation Mastery," "Chef Series" (featuring Vietnamese-American chefs using product), "History of Fish Sauce." Partnered with 15 food influencers and chefs. Built restaurant supply program. Launched subscription model for chefs and home cooks.',
    results: [
      'Year 1 DTC revenue: $680K',
      '8,200 email subscribers (high-engagement culinary community)',
      '52 restaurant partnerships across US & Europe',
      'Average order value: $34 (subscription + one-time)',
      'Featured in: Bon Appétit, Food & Wine, Chef magazine',
      '22,000 TikTok followers (surprising chef/food creator audience)',
      'Repeat purchase rate: 58% (food enthusiasts)',
    ],
    metrics: [
      { label: 'Year 1 Revenue', value: '$680K' },
      { label: 'Restaurant Partners', value: '52' },
      { label: 'Press Features', value: '6+' },
      { label: 'Repeat Rate', value: '58%' },
    ],
    heroImage:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop',
    services: ['Heritage Brand Storytelling', 'E-Commerce Strategy', 'Influencer Partnerships'],
    testimonial: {
      quote:
        'We thought our fish sauce was only for Vietnamese cooking. BrandTalk helped us understand its value to global chefs and food enthusiasts. Now we see Western chefs lining up to buy our product—not because they are Vietnamese, but because they recognize quality. This is validation our family has waited 60 years for.',
      author: 'Trần Minh Quý',
      role: 'Owner, Nước Mắm Mười Quý',
    },
  },
]

export const ARTICLES: Article[] = [
  {
    id: 'article-1',
    slug: 'shoppertainment-dominates-vietnamese-ecommerce',
    title: 'Why Shoppertainment Will Dominate Vietnamese E-Commerce in 2025',
    excerpt:
      'The convergence of entertainment and commerce is reshaping how Vietnamese consumers shop. Here is what heritage brands need to know.',
    content: `The lines between entertainment and commerce are disappearing. In China, livestream commerce generates $200+ billion annually. Southeast Asia is following fast.

## The Data

- Vietnamese TikTok Shop adoption: 45M users (2024)
- Livestream event conversion: 12-15% (vs 2-3% traditional e-commerce)
- Short-form video engagement: 8x higher than static content
- Gen Z: 68% prefer shopping through entertainment platforms

## Why This Matters for Heritage Brands

Heritage brands have an advantage others lack: authentic stories. While fast-fashion brands rush to create narratives, heritage brands already have them. The challenge is translating that narrative into modern, entertaining formats.

Shoppertainment isn't just selling—it's storytelling with commerce built in. It's showing your craftspeople at work, discussing heritage, connecting with customers in real time.

## The Strategic Shift

Traditional brands built on wholesale + retail are being replaced by direct-to-consumer models powered by entertainment. The winning formula:

1. Authentic storytelling (your heritage)
2. Real-time entertainment (livestreams, short-form video)
3. Frictionless commerce (one-click checkout)
4. Community building (fan loyalty, repeat purchases)

The brands winning today are those who see entertainment and commerce as integrated, not separate.

## What To Do Now

Start small. Don't wait for perfection. A weekly 30-minute livestream on TikTok where you simply talk about your products and engage with viewers will outperform months of polished but static content.

Your heritage is your unfair advantage. Shoppertainment is the channel. The window is now.`,
    category: 'Market Insights',
    author: {
      name: 'Phan Như Quỳnh',
      role: 'Founder & Strategic Advisor, BrandTalk',
    },
    image:
      'https://images.unsplash.com/photo-1611632622046-f0953c9f0afe?w=800&h=400&fit=crop',
    publishedAt: '2024-12-15',
    readTime: 5,
  },
  {
    id: 'article-2',
    slug: 'preserving-heritage-in-digital-age',
    title: 'Preserving Vietnamese Heritage in the Digital Age',
    excerpt:
      'How can we elevate Vietnamese cultural heritage without losing authenticity in digital spaces? A framework for thoughtful brand building.',
    content: `Vietnam has 4,000 years of cultural heritage. Silk weaving, ceramic crafts, traditional cuisines—each tells a story of resilience, artistry, and community.

Yet many heritage brands are disappearing, not because their products lack quality, but because they haven't learned to tell their stories to modern audiences.

## The Core Tension

Digital transformation doesn't mean abandoning tradition—it means translating it. The risk: losing authenticity in pursuit of virality.

Some heritage brands try to "modernize" by removing all cultural elements, becoming indistinguishable from any other brand. This fails because it removes the only advantage heritage brands have: their story.

Others hold so tightly to tradition that they become irrelevant, untouched by the digital world their customers increasingly inhabit.

## A Third Path

The brands winning are those who:

1. **Honor the heritage**: Deep respect for traditions, craftspeople, origins
2. **Translate the narrative**: Making tradition relevant to modern audiences
3. **Use modern channels**: Meeting customers where they are (TikTok, livestream, short-form video)
4. **Build community**: Creating connection, not just transactions

This isn't about abandoning tradition. It's about showing why tradition matters—and building sustainable businesses around it.

## The Why Matters More Than Ever

In a world of mass-produced commodities, heritage is power. But only if communicated authentically.

The framework: Start with WHY (your cultural mission), define HOW (your heritage and craft), then share WHAT (your products) through modern channels.

Vietnamese heritage brands don't need to become like other brands. They need to become more fully themselves, digitally.`,
    category: 'Brand Strategy',
    author: {
      name: 'Phan Như Quỳnh',
      role: 'Founder & Strategic Advisor, BrandTalk',
    },
    image:
      'https://images.unsplash.com/photo-1491841573634-28276674033f?w=800&h=400&fit=crop',
    publishedAt: '2024-11-20',
    readTime: 6,
  },
  {
    id: 'article-3',
    slug: 'the-math-behind-brand-storytelling',
    title: 'The Math Behind Brand Storytelling: Why Numbers Prove Stories Work',
    excerpt:
      'Storytelling isn\'t just emotional—it\'s measurable. Here is how heritage brands can quantify the impact of authentic narratives.',
    content: `We hear it often: "Storytelling is important." But why do many brands still focus primarily on discounts and product specs?

Because we haven't made the math clear.

## The Business Case for Storytelling

Studies across industries show:

- Brands with strong narratives have 3-4x higher revenue per customer
- Story-driven marketing has 2.2x higher ROI than feature-focused marketing
- Emotional connection increases customer lifetime value by 306%
- Customers with emotional attachment show 52% higher lifetime value

But these numbers aren't just averages. In heritage brand categories, the effect is stronger.

## Why Heritage Brands See Larger Gains

Heritage products carry implicit premium pricing. You can't compete on price—you must compete on meaning.

When a customer buys from a heritage brand, they're not just buying a product. They're buying:
- Connection to culture
- Support for tradition
- Personal identity alignment
- Sense of purpose

These intangibles are worth 40-60% of the purchase decision. Yet most heritage brands lead with the 40% (product, price, specs) and ignore the 60% (story, heritage, meaning).

## The Conversion Impact

Let's look at concrete numbers from our work:

**Without storytelling focus:**
- Average order value: $45
- Repeat purchase rate: 8%
- Customer lifetime value: $400

**With integrated storytelling:**
- Average order value: $78 (+73%)
- Repeat purchase rate: 28% (+250%)
- Customer lifetime value: $1,600 (+300%)

Same product. Same price list. Different story.

## The Implementation Framework

1. **Identify your heritage narrative** (1-2 weeks)
2. **Translate to customer benefit** (2-3 weeks)
3. **Build content pillars** around the story (ongoing)
4. **Measure impact**: Track emotional engagement, AOV, repeat rate (continuous)
5. **Optimize storytelling** based on data (quarterly)

## The Unfair Advantage

Heritage brands spend millions trying to build brand equity. You already have it. The math shows: authentic storytelling unlocks that equity faster than any paid marketing campaign.

The only question is: Are you ready to tell your story?`,
    category: 'Business Insights',
    author: {
      name: 'Phan Như Quỳnh',
      role: 'Founder & Strategic Advisor, BrandTalk',
    },
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
    publishedAt: '2024-10-10',
    readTime: 7,
  },
]
