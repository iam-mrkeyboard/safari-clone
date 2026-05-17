/**
 * Decap CMS Preview Templates
 * Live preview for content editors
 */

const h = React.createElement;

// Color palette matching the site
const colors = {
  primary: '#00AA6C',
  primaryDark: '#009960',
  dark: '#1a1a1a',
  light: '#E6F9F1',
  white: '#ffffff',
  gray: '#6b7280',
  lightGray: '#e5e7eb',
};

// Star rating component
function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      h('span', {
        key: i,
        style: {
          color: i <= rating ? colors.primary : colors.lightGray,
          fontSize: '18px',
        },
      },
      '★'
    ));
  }
  return h('span', { style: { display: 'inline-flex', gap: '2px' } }, ...stars);
}

// Blog Post Preview
function BlogPreview({ entry, widgetFor }) {
  const title = entry.getIn(['data', 'title']);
  const date = entry.getIn(['data', 'date']);
  const author = entry.getIn(['data', 'author']);
  const category = entry.getIn(['data', 'category']);
  const description = entry.getIn(['data', 'description']);
  const thumbnail = entry.getIn(['data', 'thumbnail']);

  return h('div', {
    style: {
      fontFamily: "'Poppins', sans-serif",
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      background: colors.white,
    },
  }, [
    thumbnail && h('img', {
      key: 'thumb',
      src: thumbnail,
      alt: title || 'Blog post thumbnail',
      style: {
        width: '100%',
        maxHeight: '400px',
        objectFit: 'cover',
        borderRadius: '12px',
        marginBottom: '32px',
      },
    }),
    category && h('span', {
      key: 'category',
      style: {
        display: 'inline-block',
        background: colors.primary,
        color: colors.white,
        padding: '4px 12px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        marginBottom: '16px',
      },
    }, category),
    h('h1', {
      key: 'title',
      style: {
        fontSize: '32px',
        fontWeight: 700,
        color: colors.dark,
        lineHeight: 1.2,
        marginBottom: '16px',
      },
    }, title || 'Blog Post Title'),
    h('div', {
      key: 'meta',
      style: {
        display: 'flex',
        gap: '24px',
        fontSize: '14px',
        color: colors.gray,
        marginBottom: '24px',
        paddingBottom: '24px',
        borderBottom: `1px solid ${colors.lightGray}`,
      },
    }, [
      h('span', { key: 'date' }, date ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Date'),
      author && h('span', { key: 'author' }, `By ${author}`),
    ]),
    description && h('p', {
      key: 'desc',
      style: {
        fontSize: '18px',
        color: colors.gray,
        lineHeight: 1.6,
        marginBottom: '32px',
        fontStyle: 'italic',
      },
    }, description),
    h('div', {
      key: 'body',
      style: {
        fontSize: '16px',
        lineHeight: 1.8,
        color: '#374151',
      },
    }, widgetFor('body')),
  ]);
}

// Tour Preview
function TourPreview({ entry, widgetFor }) {
  const title = entry.getIn(['data', 'title']);
  const image = entry.getIn(['data', 'image']);
  const duration = entry.getIn(['data', 'duration']);
  const price = entry.getIn(['data', 'price']);
  const badge = entry.getIn(['data', 'badge']);
  const category = entry.getIn(['data', 'category']);

  return h('div', {
    style: {
      fontFamily: "'Poppins', sans-serif",
      maxWidth: '800px',
      margin: '0 auto',
      background: colors.white,
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    },
  }, [
    h('div', {
      key: 'hero',
      style: {
        position: 'relative',
        height: '300px',
        overflow: 'hidden',
      },
    }, [
      image && h('img', {
        key: 'img',
        src: image,
        alt: title || 'Tour image',
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        },
      }),
      h('div', {
        key: 'overlay',
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
          padding: '40px 24px 24px',
        },
      }, [
        badge && h('span', {
          key: 'badge',
          style: {
            display: 'inline-block',
            background: colors.primary,
            color: colors.white,
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 600,
            marginBottom: '8px',
          },
        }, badge),
        h('h1', {
          key: 'title',
          style: {
            fontSize: '28px',
            fontWeight: 700,
            color: colors.white,
            margin: 0,
          },
        }, title || 'Tour Title'),
      ]),
    ]),
    h('div', {
      key: 'info',
      style: {
        display: 'flex',
        gap: '24px',
        padding: '24px',
        background: colors.light,
        borderBottom: `1px solid ${colors.lightGray}`,
      },
    }, [
      h('div', { key: 'duration', style: { textAlign: 'center' } }, [
        h('div', { key: 'dur-val', style: { fontSize: '20px', fontWeight: 700, color: colors.dark } }, duration || '—'),
        h('div', { key: 'dur-label', style: { fontSize: '12px', color: colors.gray, textTransform: 'uppercase' } }, 'Duration'),
      ]),
      h('div', { key: 'price-wrap', style: { textAlign: 'center' } }, [
        h('div', { key: 'price-val', style: { fontSize: '20px', fontWeight: 700, color: colors.primary } }, price ? `$${price}` : '—'),
        h('div', { key: 'price-label', style: { fontSize: '12px', color: colors.gray, textTransform: 'uppercase' } }, 'From'),
      ]),
      category && h('div', { key: 'cat-wrap', style: { textAlign: 'center' } }, [
        h('div', { key: 'cat-val', style: { fontSize: '20px', fontWeight: 700, color: colors.dark } }, category),
        h('div', { key: 'cat-label', style: { fontSize: '12px', color: colors.gray, textTransform: 'uppercase' } }, 'Category'),
      ]),
    ]),
    h('div', {
      key: 'body',
      style: {
        padding: '32px 24px',
        fontSize: '16px',
        lineHeight: 1.8,
        color: '#374151',
      },
    }, widgetFor('body')),
  ]);
}

// Testimonial Preview
function TestimonialPreview({ entry }) {
  const name = entry.getIn(['data', 'name']);
  const avatar = entry.getIn(['data', 'avatar']);
  const rating = entry.getIn(['data', 'rating']);
  const title = entry.getIn(['data', 'title']);
  const date = entry.getIn(['data', 'date']);
  const travelType = entry.getIn(['data', 'travel_type']);
  const text = entry.getIn(['data', 'text']);

  return h('div', {
    style: {
      fontFamily: "'Poppins', sans-serif",
      maxWidth: '600px',
      margin: '0 auto',
      padding: '40px',
      background: colors.white,
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
  }, [
    h('div', {
      key: 'quote-icon',
      style: {
        fontSize: '48px',
        color: colors.primary,
        opacity: 0.3,
        marginBottom: '16px',
      },
    }, '"'),
    avatar && h('img', {
      key: 'avatar',
      src: avatar,
      alt: name || 'Customer avatar',
      style: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '16px',
        border: `3px solid ${colors.primary}`,
      },
    }),
    h('h3', {
      key: 'name',
      style: {
        fontSize: '20px',
        fontWeight: 600,
        color: colors.dark,
        marginBottom: '4px',
      },
    }, name || 'Customer Name'),
    travelType && h('p', {
      key: 'type',
      style: {
        fontSize: '13px',
        color: colors.gray,
        marginBottom: '8px',
      },
    }, travelType),
    h('div', {
      key: 'stars',
      style: {
        marginBottom: '16px',
      },
    }, h(StarRating, { rating: rating || 0 })),
    title && h('p', {
      key: 'title',
      style: {
        fontSize: '16px',
        fontWeight: 600,
        color: colors.dark,
        marginBottom: '16px',
      },
    }, title),
    h('p', {
      key: 'text',
      style: {
        fontSize: '15px',
        lineHeight: 1.7,
        color: '#374151',
        marginBottom: '24px',
      },
    }, text || 'Testimonial text will appear here...'),
    date && h('p', {
      key: 'date',
      style: {
        fontSize: '13px',
        color: colors.gray,
      },
    }, new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })),
  ]);
}

// Destination Preview
function DestinationPreview({ entry }) {
  const title = entry.getIn(['data', 'title']);
  const image = entry.getIn(['data', 'image']);

  return h('div', {
    style: {
      fontFamily: "'Poppins', sans-serif",
      maxWidth: '400px',
      margin: '0 auto',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    },
  }, [
    image && h('div', {
      key: 'img-wrap',
      style: {
        height: '250px',
        overflow: 'hidden',
      },
    }, h('img', {
      src: image,
      alt: title || 'Destination',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    })),
    h('div', {
      key: 'content',
      style: {
        padding: '24px',
        background: colors.white,
      },
    }, h('h3', {
      style: {
        fontSize: '22px',
        fontWeight: 600,
        color: colors.dark,
        margin: 0,
      },
    }, title || 'Destination Name')),
  ]);
}

// Category Preview
function CategoryPreview({ entry }) {
  const title = entry.getIn(['data', 'title']);
  const subtitle = entry.getIn(['data', 'subtitle']);
  const image = entry.getIn(['data', 'image']);

  return h('div', {
    style: {
      fontFamily: "'Poppins', sans-serif",
      maxWidth: '400px',
      margin: '0 auto',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    },
  }, [
    image && h('div', {
      key: 'img-wrap',
      style: {
        height: '200px',
        overflow: 'hidden',
        position: 'relative',
      },
    }, [
      h('img', {
        key: 'img',
        src: image,
        alt: title || 'Category',
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        },
      }),
      h('div', {
        key: 'overlay',
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
          padding: '40px 20px 20px',
        },
      }, h('h3', {
        style: {
          fontSize: '20px',
          fontWeight: 700,
          color: colors.white,
          margin: 0,
        },
      }, title || 'Category Title')),
    ]),
    subtitle && h('div', {
      key: 'content',
      style: {
        padding: '16px 20px',
        background: colors.white,
      },
    }, h('p', {
      style: {
        fontSize: '14px',
        color: colors.gray,
        margin: 0,
      },
    }, subtitle)),
  ]);
}

// Homepage Sections Preview
function HomepagePreview({ entry }) {
  try {
    const sections = entry.getIn(['data', 'sections']);
    if (!sections || sections.size === 0) {
      return h('div', {
        style: {
          fontFamily: "'Poppins', sans-serif",
          padding: '60px 40px',
          textAlign: 'center',
          color: colors.gray,
        },
      }, 'No sections defined yet. Add sections to the homepage.');
    }

    function safeVal(map, key) {
      return map && typeof map.get === 'function' ? map.get(key) : null;
    }

    function safeList(map, key) {
      const v = safeVal(map, key);
      return v && typeof v.map === 'function' && typeof v.toArray === 'function' ? v : null;
    }

    function filterChildren(arr) {
      return arr.filter(Boolean);
    }

    function pill(text) {
      return text ? h('span', {
        style: {
          background: colors.light,
          color: colors.primaryDark,
          padding: '4px 10px',
          borderRadius: '6px',
          fontSize: '11px',
          fontWeight: 500,
          display: 'inline-block',
        },
      }, String(text)) : null;
    }

    function sectionTypeBadge(type) {
      return h('span', {
        style: {
          background: colors.primary,
          color: colors.white,
          padding: '2px 10px',
          borderRadius: '12px',
          fontSize: '10px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        },
      }, type || '?');
    }

    function renderSection(section, index) {
      const type = safeVal(section, 'type');
      const visible = safeVal(section, 'visible');
      const heading = safeVal(section, 'heading');

      const badge = h('div', {
        style: { display: 'flex', gap: '8px', marginBottom: '10px', alignItems: 'center', flexWrap: 'wrap' },
      }, filterChildren([
        sectionTypeBadge(type),
        h('span', { style: { color: colors.gray, fontSize: '10px' } }, 'Section ' + (index + 1)),
        visible === false ? h('span', {
          style: {
            background: '#fef3c7', color: '#92400e', padding: '2px 8px',
            borderRadius: '8px', fontSize: '10px', fontWeight: 600,
          },
        }, 'Hidden') : null,
      ]));

      const children = [badge];

      if (heading) {
        children.push(h('h3', {
          style: { fontSize: '16px', fontWeight: 600, color: colors.dark, margin: '0 0 6px' },
        }, heading));
      }

      if (type === 'hero') {
        const tagline = safeVal(section, 'tagline');
        const scrollTo = safeVal(section, 'scroll_to');
        if (tagline) children.push(h('p', { style: { fontSize: '13px', color: colors.gray, margin: 0 } }, tagline));
        if (scrollTo) children.push(h('p', { style: { fontSize: '11px', color: colors.primaryDark, margin: '6px 0 0' } }, 'Scroll to: ' + scrollTo));

      } else if (type === 'categories' || type === 'destinations') {
        const text = safeVal(section, 'text');
        const items = safeList(section, 'items');
        const isCategories = type === 'categories';
        if (text) children.push(h('p', { style: { fontSize: '12px', color: colors.gray, margin: '0 0 10px' } }, text));
        if (items && items.size > 0) {
          const tags = [];
          items.forEach(function (item, idx) {
            tags.push(pill(isCategories
              ? (safeVal(item, 'title') || '') + ' — ' + (safeVal(item, 'subtitle') || '')
              : safeVal(item, 'title') || ''));
          });
          children.push(h('div', {
            style: { display: 'flex', flexWrap: 'wrap', gap: '6px' },
          }, filterChildren(tags)));
        } else {
          children.push(h('p', { style: { fontSize: '12px', color: colors.lightGray, fontStyle: 'italic', margin: 0 } }, 'No items added yet'));
        }

      } else if (type === 'about') {
        const description = safeVal(section, 'description');
        const stats = safeList(section, 'stats');
        if (description) children.push(h('p', { style: { fontSize: '12px', color: colors.gray, margin: '0 0 10px', lineHeight: 1.5 } }, description));
        if (stats && stats.size > 0) {
          const statTags = [];
          stats.forEach(function (stat, idx) {
            statTags.push(h('span', {
              style: {
                background: colors.light, color: colors.primaryDark,
                padding: '6px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 600,
              },
            }, (safeVal(stat, 'value') || '') + ' ' + (safeVal(stat, 'label') || '')));
          });
          children.push(h('div', { style: { display: 'flex', gap: '12px', flexWrap: 'wrap' } }, filterChildren(statTags)));
        }

      } else if (type === 'tours') {
        const text = safeVal(section, 'text');
        if (text) children.push(h('p', { style: { fontSize: '12px', color: colors.gray, margin: 0 } }, text));

      } else if (type === 'partners') {
        const text = safeVal(section, 'text');
        const items = safeList(section, 'items');
        if (text) children.push(h('p', { style: { fontSize: '12px', color: colors.gray, margin: '0 0 10px' } }, text));
        if (items && items.size > 0) {
          const tags = [];
          items.forEach(function (item) { tags.push(pill(safeVal(item, 'name'))); });
          children.push(h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '6px' } }, filterChildren(tags)));
        }

      } else if (type === 'lodges') {
        const text = safeVal(section, 'text');
        const items = safeList(section, 'items');
        if (text) children.push(h('p', { style: { fontSize: '12px', color: colors.gray, margin: '0 0 10px' } }, text));
        if (items && items.size > 0) {
          const tags = [];
          items.forEach(function (item) {
            tags.push(pill((safeVal(item, 'title') || '') + ' (' + (safeVal(item, 'tag') || '') + ')'));
          });
          children.push(h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '6px' } }, filterChildren(tags)));
        }

      } else if (type === 'testimonials') {
        const text = safeVal(section, 'text');
        const items = safeList(section, 'items');
        if (text) children.push(h('p', { style: { fontSize: '12px', color: colors.gray, margin: '0 0 10px' } }, text));
        if (items && items.size > 0) {
          const itemCards = [];
          items.forEach(function (item, idx) {
            itemCards.push(h('div', {
              style: {
                background: colors.light, color: colors.dark,
                padding: '8px 12px', borderRadius: '6px', fontSize: '12px',
                borderLeft: '3px solid ' + colors.primaryDark,
              },
            }, filterChildren([
              h('span', { style: { fontWeight: 600 } }, safeVal(item, 'name') || ''),
              h('span', { style: { color: colors.gray, margin: '0 6px' } }, '—'),
              h('span', { style: { color: colors.gray } }, safeVal(item, 'title') || ''),
            ])));
          });
          children.push(h('div', { style: { display: 'flex', flexDirection: 'column', gap: '6px' } }, itemCards));
          children.push(h('p', { style: { fontSize: '11px', color: colors.gray, margin: '6px 0 0', fontStyle: 'italic' } }, items.size + ' testimonial(s)'));
        }

      } else if (type === 'contact') {
        const tagline = safeVal(section, 'tagline');
        const buttonText = safeVal(section, 'button_text');
        const buttonLink = safeVal(section, 'button_link');
        if (tagline) children.push(h('p', { style: { fontSize: '12px', color: colors.gray, margin: '0 0 8px' } }, tagline));
        if (buttonText) {
          children.push(h('span', {
            style: {
              display: 'inline-block', background: colors.primary, color: colors.white,
              padding: '6px 16px', borderRadius: '20px', fontSize: '11px', fontWeight: 600,
            },
          }, buttonText + (buttonLink ? ' →' : '')));
        }
      }

      return h('div', {
        style: {
          background: colors.white, borderRadius: '8px', padding: '20px 24px',
          marginBottom: '12px',
          border: '1px solid ' + colors.lightGray,
          borderLeft: '4px solid ' + (visible !== false ? colors.primary : colors.lightGray),
          opacity: visible === false ? 0.6 : 1,
        },
      }, filterChildren(children));
    }

    const cards = [];
    sections.forEach(function (section, i) {
      cards.push(renderSection(section, i));
    });

    return h('div', {
      style: {
        fontFamily: "'Poppins', sans-serif",
        maxWidth: '640px', margin: '0 auto',
        padding: '20px', background: '#f3f4f6', minHeight: '100vh',
      },
    }, cards);

  } catch (e) {
    return h('div', {
      style: {
        fontFamily: "'Poppins', sans-serif",
        padding: '40px', textAlign: 'center', color: '#ef4444',
      },
    }, [
      h('h3', { style: { fontSize: '16px', fontWeight: 600, margin: '0 0 8px' } }, 'Preview Error'),
      h('p', { style: { fontSize: '13px', color: colors.gray, margin: 0 } }, 'Could not render preview. This is a display issue only — your data is safe.'),
    ]);
  }
}

// Site Settings Preview
function SiteSettingsPreview({ entry }) {
  const siteName = entry.getIn(['data', 'meta', 'site_name']);
  const siteUrl = entry.getIn(['data', 'meta', 'site_url']);
  const whatsapp = entry.getIn(['data', 'whatsapp_number']);
  const footer = entry.getIn(['data', 'footer']);
  const social = footer && footer.get('social');

  const card = (title, children) => h('div', {
    style: {
      background: colors.white,
      borderRadius: '8px',
      padding: '20px 24px',
      marginBottom: '12px',
      border: `1px solid ${colors.lightGray}`,
      borderLeft: `4px solid ${colors.primary}`,
    },
  }, [
    h('h3', { key: 'title', style: { fontSize: '14px', fontWeight: 600, color: colors.primaryDark, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.5px' } }, title),
    ...(Array.isArray(children) ? children : [children]),
  ]);

  const field = (label, value) =>
    value ? h('div', { style: { marginBottom: '8px', fontSize: '13px' } }, [
      h('span', { key: 'label', style: { color: colors.gray, fontWeight: 600, display: 'inline-block', minWidth: '120px' } }, label),
      h('span', { key: 'value', style: { color: colors.dark } }, value),
    ]) : null;

  const linkField = (label, url) =>
    url ? h('div', { style: { marginBottom: '6px', fontSize: '13px' } }, [
      h('span', { key: 'label', style: { color: colors.gray, fontWeight: 600, display: 'inline-block', minWidth: '120px' } }, label),
      h('a', { key: 'value', href: url, target: '_blank', style: { color: colors.primary, textDecoration: 'none' } }, url),
    ]) : null;

  return h('div', {
    style: {
      fontFamily: "'Poppins', sans-serif",
      maxWidth: '640px',
      margin: '0 auto',
      padding: '20px',
      background: '#f3f4f6',
    },
  }, [
    card('Site Info', [
      field('Site Name', siteName),
      field('Site URL', siteUrl),
      field('WhatsApp', whatsapp),
    ]),
    card('Footer — Newsletter', [
      field('Heading', footer && footer.get('newsletter_heading')),
      field('Text', footer && footer.get('newsletter_text')),
      field('Button', footer && footer.get('newsletter_button')),
    ]),
    card('Footer — CTA', [
      field('Heading', footer && footer.get('cta_heading')),
      field('Text', footer && footer.get('cta_text')),
      field('Button', footer && footer.get('cta_button')),
      field('Button Link', footer && footer.get('cta_button_link')),
    ]),
    card('Footer — Copyright', field('Copyright', footer && footer.get('copyright'))),
    card('Social Links', [
      linkField('TripAdvisor', social && social.get('tripadvisor_url')),
      linkField('Instagram', social && social.get('instagram_url')),
      linkField('Facebook', social && social.get('facebook_url')),
      linkField('YouTube', social && social.get('youtube_url')),
      linkField('TikTok', social && social.get('tiktok_url')),
    ]),
  ]);
}

// Pages Preview (generic — works for all page types)
function PagesPreview({ entry }) {
  const data = entry.get('data');
  const heroImage = data.get('hero_image');
  const heroTagline = data.get('hero_tagline');
  const heroTitle = data.get('hero_title');
  const heroDescription = data.get('hero_description');

  const fieldKeys = data.keySeq().filter(k =>
    !['hero_image', 'hero_tagline', 'hero_title', 'hero_description'].includes(k)
  ).toArray();

  const renderValue = (key, value) => {
    if (!value) return null;
    if (Immutable.List.isList(value) || Immutable.Map.isMap(value)) return null;
    if (typeof value === 'string' && (value.startsWith('http') || value.startsWith('../../assets'))) {
      return h('div', { style: { marginBottom: '12px' } }, [
        h('p', { key: 'label', style: { fontSize: '11px', color: colors.gray, fontWeight: 600, textTransform: 'uppercase', margin: '0 0 4px', letterSpacing: '0.5px' } }, key.replace(/_/g, ' ')),
        value.match(/\.(png|jpg|jpeg|webp|gif|svg)/i) ? h('img', { src: value, style: { maxWidth: '100%', maxHeight: '120px', borderRadius: '6px', objectFit: 'cover' } }) : h('p', { style: { fontSize: '13px', color: colors.dark, margin: 0, wordBreak: 'break-all' } }, value),
      ]);
    }
    return h('div', { style: { marginBottom: '10px' } }, [
      h('p', { key: 'label', style: { fontSize: '11px', color: colors.gray, fontWeight: 600, textTransform: 'uppercase', margin: '0 0 2px', letterSpacing: '0.5px' } }, key.replace(/_/g, ' ')),
      h('p', { key: 'val', style: { fontSize: '13px', color: colors.dark, margin: 0, whiteSpace: 'pre-wrap' } }, String(value)),
    ]);
  };

  const renderList = (key, list) => {
    if (!list || list.size === 0) return null;
    return h('div', { style: { marginBottom: '12px' } }, [
      h('p', { key: 'label', style: { fontSize: '11px', color: colors.gray, fontWeight: 600, textTransform: 'uppercase', margin: '0 0 8px', letterSpacing: '0.5px' } }, key.replace(/_/g, ' ') + ' (' + list.size + ')'),
      h('div', { style: { display: 'flex', flexDirection: 'column', gap: '6px' } },
        list.map((item, idx) => {
          if (typeof item === 'string') {
            return h('div', { key: idx, style: { background: colors.light, padding: '8px 12px', borderRadius: '6px', fontSize: '12px', color: colors.dark } }, item);
          }
          const entries = item.entrySeq().toArray();
          return h('div', { key: idx, style: { background: colors.light, padding: '8px 12px', borderRadius: '6px', fontSize: '12px' } },
            entries.map(([k, v]) =>
              h('span', {
                key: k,
                style: { display: 'block', color: colors.dark, marginBottom: '2px' },
              }, [
                h('span', { style: { color: colors.gray, fontWeight: 600 } }, k + ': '),
                h('span', {}, String(v)),
              ])
            )
          );
        }).toArray()
      ),
    ]);
  };

  const renderObject = (key, obj) => {
    if (!obj) return null;
    const entries = obj.entrySeq().toArray();
    return h('div', { style: { marginBottom: '12px' } }, [
      h('p', { key: 'label', style: { fontSize: '11px', color: colors.gray, fontWeight: 600, textTransform: 'uppercase', margin: '0 0 8px', letterSpacing: '0.5px' } }, key.replace(/_/g, ' ')),
      h('div', { style: { background: colors.light, padding: '12px', borderRadius: '6px' } },
        entries.map(([k, v]) =>
          h('span', { key: k, style: { display: 'block', fontSize: '12px', color: colors.dark, marginBottom: '4px' } }, [
            h('span', { style: { color: colors.gray, fontWeight: 600 } }, k + ': '),
            h('span', {}, String(v)),
          ])
        )
      ),
    ]);
  };

  const bodySections = [];
  const isList = (v) => v && v.map && typeof v.map === 'function' && v.toArray && typeof v.toArray === 'function';
  const isMap = (v) => v && v.entrySeq && typeof v.entrySeq === 'function';

  fieldKeys.forEach((key) => {
    const value = data.get(key);
    if (value == null) return;
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      bodySections.push(renderValue(key, value));
    } else if (isList(value)) {
      bodySections.push(renderList(key, value));
    } else if (isMap(value)) {
      bodySections.push(renderObject(key, value));
    }
  });

  return h('div', {
    style: {
      fontFamily: "'Poppins', sans-serif",
      maxWidth: '640px',
      margin: '0 auto',
      background: '#f3f4f6',
      minHeight: '100vh',
    },
  }, [
    heroImage && h('div', { style: { width: '100%', height: '200px', overflow: 'hidden' } },
      h('img', { src: heroImage, style: { width: '100%', height: '100%', objectFit: 'cover' } })
    ),
    h('div', { style: { padding: '20px' } }, [
      heroTagline && h('p', { style: { fontSize: '11px', color: colors.primary, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' } }, heroTagline),
      heroTitle && h('h1', { style: { fontSize: '24px', fontWeight: 700, color: colors.dark, margin: '0 0 8px' } }, heroTitle),
      heroDescription && h('p', { style: { fontSize: '13px', color: colors.gray, lineHeight: 1.6, margin: '0 0 20px' } }, heroDescription),
      bodySections.length > 0 && h('div', { style: { borderTop: `1px solid ${colors.lightGray}`, paddingTop: '16px' } }, bodySections),
    ]),
  ]);
}

// Register preview templates
CMS.registerPreviewTemplate('blog', BlogPreview);
CMS.registerPreviewTemplate('tours', TourPreview);
CMS.registerPreviewTemplate('homepage', HomepagePreview);
CMS.registerPreviewTemplate('site', SiteSettingsPreview);
CMS.registerPreviewTemplate('pages', PagesPreview);
CMS.registerPreviewTemplate('testimonials', TestimonialPreview);
CMS.registerPreviewTemplate('destinations', DestinationPreview);
CMS.registerPreviewTemplate('categories', CategoryPreview);

// Register custom styling for preview pane
CMS.registerPreviewStyle(`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  body {
    font-family: 'Poppins', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }
  
  p {
    margin-bottom: 16px;
  }
  
  a {
    color: #00AA6C;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  blockquote {
    border-left: 4px solid #00AA6C;
    padding-left: 20px;
    margin-left: 0;
    color: #6b7280;
    font-style: italic;
  }
  
  ul, ol {
    padding-left: 24px;
  }
  
  li {
    margin-bottom: 8px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
  }
  
  th, td {
    padding: 12px;
    border: 1px solid #e5e7eb;
    text-align: left;
  }
  
  th {
    background: #E6F9F1;
    font-weight: 600;
  }
`);
