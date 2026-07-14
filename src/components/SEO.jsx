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

    // Google Site Verification env variable support
    const gscVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;
    if (gscVerification) {
      setMetaTag('google-site-verification', gscVerification);
    }

    // Consolidated canonical URL pointing to production domain
    const productionOrigin = 'https://sparktenspick.com';
    const currentPath = window.location.pathname;
    const resolvedCanonical = canonicalUrl || `${productionOrigin}${currentPath}`;

    // Open Graph / Facebook Tags
    setMetaTag('og:title', finalTitle, true);
    setMetaTag('og:description', finalDesc, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:image', `${productionOrigin}/logo.png`, true);
    setMetaTag('og:url', resolvedCanonical, true);
    setMetaTag('og:site_name', 'Spark Tenspick');

    // Twitter Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', finalTitle);
    setMetaTag('twitter:description', finalDesc);
    setMetaTag('twitter:image', `${productionOrigin}/logo.png`);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', resolvedCanonical);

    // JSON-LD Structured Data Schema Markup
    let schemaScript = document.getElementById('json-ld-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'json-ld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const schemas = [];

    // 1. Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://sparktenspick.com/#organization",
      "name": "Spark Tenspick",
      "url": "https://sparktenspick.com",
      "logo": "https://sparktenspick.com/logo.png",
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
    schemas.push(organizationSchema);

    // 2. WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://sparktenspick.com/#website",
      "name": "Spark Tenspick",
      "url": "https://sparktenspick.com",
      "publisher": {
        "@id": "https://sparktenspick.com/#organization"
      }
    };
    schemas.push(websiteSchema);

    // 3. SiteNavigationElement Schema
    const navigationSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": "https://sparktenspick.com/#navigation",
      "name": "Navigation Menu",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Home",
          "url": "https://sparktenspick.com/"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "About",
          "url": "https://sparktenspick.com/about"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Services",
          "url": "https://sparktenspick.com/services"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Solutions",
          "url": "https://sparktenspick.com/solutions"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "Industries",
          "url": "https://sparktenspick.com/industries"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 6,
          "name": "Process",
          "url": "https://sparktenspick.com/process"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 7,
          "name": "Contact",
          "url": "https://sparktenspick.com/contact"
        }
      ]
    };
    schemas.push(navigationSchema);

    // 4. BreadcrumbList Schema (on sub-pages only)
    if (currentPath && currentPath !== '/') {
      const pathSegments = currentPath.split('/').filter(Boolean);
      const breadcrumbs = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://sparktenspick.com/"
        }
      ];

      pathSegments.forEach((segment, idx) => {
        const name = segment.charAt(0).toUpperCase() + segment.slice(1);
        const url = `https://sparktenspick.com/${pathSegments.slice(0, idx + 1).join('/')}`;
        breadcrumbs.push({
          "@type": "ListItem",
          "position": idx + 2,
          "name": name,
          "item": url
        });
      });

      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs
      };
      schemas.push(breadcrumbSchema);
    }

    schemaScript.textContent = JSON.stringify(schemas);
  }, [title, description, keywords, ogType, canonicalUrl]);

  return null;
}
