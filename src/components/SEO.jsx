import { useEffect } from 'react';

export default function SEO({ title, description, keywords, ogType = 'website', canonicalUrl }) {
  useEffect(() => {
    // Title
    const finalTitle = title ? `${title} | Spark Tenspick` : 'Spark Tenspick | Enterprise Software, AI & Cloud Solutions';
    document.title = finalTitle;
    
    // Helper to set or create meta tag
    const setMetaTag = (name, value, isProperty = false) => {
      const attributeName = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attributeName}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    // Standard SEO Tags
    const defaultDesc = "SPARK TENSPICK is a premier global technology firm. We engineer premium enterprise software, AI-powered automation systems, cloud architecture, and high-end digital experiences.";
    const finalDesc = description || defaultDesc;
    setMetaTag('description', finalDesc);
    
    const generateDynamicKeywords = () => {
      const locations = ['india', 'kuwait'];
      const prefixes = [
        'best', 'top', 'affordable', 'professional', 'enterprise', 
        'custom', 'near me', 'for startups', 'for business', 
        'premium', 'expert', 'trusted', 'leading', '24x7', 'modern'
      ];
      
      const generated = [];

      locations.forEach(loc => {
        // Base core keywords
        const core = [
          `software company ${loc}`,
          `web development company ${loc}`,
          `mobile app development ${loc}`,
          `AI solutions ${loc}`,
          `ERP software ${loc}`,
          `CRM development ${loc}`,
          `digital marketing ${loc}`,
          `SEO company ${loc}`,
          `custom software development ${loc}`,
          `React development ${loc}`,
          `web development ${loc}`,
          `custom software ${loc}`
        ];
        generated.push(...core);

        // Combinations
        const subjects = [
          `software company ${loc}`,
          `web development ${loc}`,
          `website design ${loc}`,
          `mobile app development ${loc}`,
          `ai solutions ${loc}`,
          `ai chatbot ${loc}`,
          `erp software ${loc}`,
          `crm software ${loc}`,
          `pos software ${loc}`,
          `cloud solutions ${loc}`,
          `react development ${loc}`,
          `ui ux design ${loc}`,
          `digital marketing ${loc}`,
          `seo services ${loc}`,
          `google ads ${loc}`,
          `branding agency ${loc}`,
          `automation services ${loc}`,
          `custom software ${loc}`,
          `saas development ${loc}`
        ];

        prefixes.forEach(pref => {
          subjects.forEach(sub => {
            generated.push(`${pref} ${sub}`);
          });
        });

        // Special IT Company case for India/Kuwait
        if (loc === 'india' || loc === 'kuwait') {
          const itPrefixes = ['best', 'top', 'affordable', 'professional', 'enterprise'];
          itPrefixes.forEach(pref => {
            generated.push(`${pref} it company ${loc}`);
          });
        }
      });

      return generated;
    };

    const defaultKeywords = [
      "Spark Tenspick", "Tenspick", "enterprise software", 
      "AI automation", "cloud architecture", "UI/UX design", "custom development", 
      "software development India", "tech firm Pullampeta", "software company Kuwait", "IT services Kuwait"
    ];
    
    const combinedKeywords = Array.from(new Set([
      ...(keywords ? keywords.split(',').map(k => k.trim()) : defaultKeywords),
      ...generateDynamicKeywords()
    ])).join(', ');

    setMetaTag('keywords', combinedKeywords);
    
    setMetaTag('robots', 'index, follow');

    // Open Graph / Facebook Tags
    setMetaTag('og:title', finalTitle, true);
    setMetaTag('og:description', finalDesc, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:image', `${window.location.origin}/logo.png`, true);
    setMetaTag('og:url', canonicalUrl || window.location.href, true);
    setMetaTag('og:site_name', 'Spark Tenspick');

    // Twitter Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', finalTitle);
    setMetaTag('twitter:description', finalDesc);
    setMetaTag('twitter:image', `${window.location.origin}/logo.png`);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl || window.location.href);

    // JSON-LD Structured Data Schema Markup
    let schemaScript = document.getElementById('json-ld-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'json-ld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Spark Tenspick",
      "url": "https://sparktenspick.com",
      "logo": `${window.location.origin}/logo.png`,
      "keywords": combinedKeywords,
      "sameAs": [
        "https://www.linkedin.com/company/sparktenspick",
        "https://www.instagram.com/sparktenspick"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-7330863893",
          "contactType": "sales",
          "areaServed": ["IN"],
          "availableLanguage": ["en"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+965-55139630",
          "contactType": "sales",
          "areaServed": ["KW"],
          "availableLanguage": ["en", "ar"]
        }
      ]
    };

    schemaScript.textContent = JSON.stringify(organizationSchema);
  }, [title, description, keywords, ogType, canonicalUrl]);

  return null;
}
