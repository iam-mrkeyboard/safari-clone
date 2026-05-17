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

  const cards = [];
  sections.forEach((section, i) => {
    const type = section.get('type');
    const visible = section.get('visible');
    const heading = section.get('heading');

    const cardStyle = {
      background: colors.white,
      borderRadius: '8px',
      padding: '20px 24px',
      marginBottom: '12px',
      border: `1px solid ${colors.lightGray}`,
      borderLeft: `4px solid ${visible !== false ? colors.primary : colors.lightGray}`,
      opacity: visible === false ? 0.6 : 1,
    };

    const badge = h('div', {
      key: 'badge',
      style: { display: 'flex', gap: '8px', marginBottom: '10px', alignItems: 'center' },
    }, [
      h('span', {
        key: 'type',
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
      }, type),
      h('span', { key: 'pos', style: { color: colors.gray, fontSize: '10px' } }, `Section ${i + 1}`),
      visible === false && h('span', {
        key: 'hidden',
        style: {
          background: '#fef3c7',
          color: '#92400e',
          padding: '2px 8px',
          borderRadius: '8px',
          fontSize: '10px',
          fontWeight: 600,
        },
      }, 'Hidden'),
    ]);

    const headingEl = heading && h('h3', {
      key: 'heading',
      style: { fontSize: '16px', fontWeight: 600, color: colors.dark, margin: '0 0 6px' },
    }, heading);

    let body = null;

    if (type === 'hero') {
      const tagline = section.get('tagline');
      const scrollTo = section.get('scroll_to');
      body = [
        headingEl,
        tagline && h('p', { key: 'tagline', style: { fontSize: '13px', color: colors.gray, margin: 0 } }, tagline),
        scrollTo && h('p', { key: 'scroll', style: { fontSize: '11px', color: colors.primaryDark, margin: '6px 0 0' } }, 'Scroll to: ' + scrollTo),
      ];
    } else if (type === 'categories' || type === 'destinations') {
      const text = section.get('text');
      const items = section.get('items');
      const isCategories = type === 'categories';
      body = [
        headingEl,
        text && h('p', { key: 'text', style: { fontSize: '12px', color: colors.gray, margin: '0 0 10px' } }, text),
        items && items.size > 0 && h('div', {
          key: 'items',
          style: { display: 'flex', flexWrap: 'wrap', gap: '6px' },
        }, items.map((item, idx) =>
          h('span', {
            key: idx,
            style: {
              background: colors.light,
              color: colors.primaryDark,
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '11px',
              fontWeight: 500,
            },
          }, isCategories ? (item.get('title') + ' — ' + item.get('subtitle')) : item.get('title'))
        ).toArray()),
        (!items || items.size === 0) && h('p', { key: 'empty', style: { fontSize: '12px', color: colors.lightGray, fontStyle: 'italic', margin: 0 } }, 'No items added yet'),
      ];
    } else if (type === 'about') {
      const description = section.get('description');
      const stats = section.get('stats');
      body = [
        headingEl,
        description && h('p', { key: 'desc', style: { fontSize: '12px', color: colors.gray, margin: '0 0 10px', lineHeight: 1.5 } }, description),
        stats && stats.size > 0 && h('div', {
          key: 'stats',
          style: { display: 'flex', gap: '12px', flexWrap: 'wrap' },
        }, stats.map((stat, idx) =>
          h('span', {
            key: idx,
            style: {
              background: colors.light,
              color: colors.primaryDark,
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 600,
            },
          }, stat.get('value') + ' ' + stat.get('label'))
        ).toArray()),
      ];
    } else if (type === 'tours') {
      const text = section.get('text');
      body = [
        headingEl,
        text && h('p', { key: 'text', style: { fontSize: '12px', color: colors.gray, margin: 0 } }, text),
      ];
    } else if (type === 'partners') {
      const text = section.get('text');
      const items = section.get('items');
      body = [
        headingEl,
        text && h('p', { key: 'text', style: { fontSize: '12px', color: colors.gray, margin: '0 0 10px' } }, text),
        items && items.size > 0 && h('div', {
          key: 'items',
          style: { display: 'flex', flexWrap: 'wrap', gap: '6px' },
        }, items.map((item, idx) =>
          h('span', {
            key: idx,
            style: {
              background: colors.light,
              color: colors.primaryDark,
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '11px',
              fontWeight: 500,
            },
          }, item.get('name'))
        ).toArray()),
      ];
    } else if (type === 'lodges') {
      const text = section.get('text');
      const items = section.get('items');
      body = [
        headingEl,
        text && h('p', { key: 'text', style: { fontSize: '12px', color: colors.gray, margin: '0 0 10px' } }, text),
        items && items.size > 0 && h('div', {
          key: 'items',
          style: { display: 'flex', flexWrap: 'wrap', gap: '6px' },
        }, items.map((item, idx) =>
          h('span', {
            key: idx,
            style: {
              background: colors.light,
              color: colors.primaryDark,
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '11px',
              fontWeight: 500,
            },
          }, item.get('title') + ' (' + item.get('tag') + ')')
        ).toArray()),
      ];
    } else if (type === 'testimonials') {
      const text = section.get('text');
      const items = section.get('items');
      body = [
        headingEl,
        text && h('p', { key: 'text', style: { fontSize: '12px', color: colors.gray, margin: '0 0 10px' } }, text),
        items && items.size > 0 && h('div', {
          key: 'items',
          style: { display: 'flex', flexDirection: 'column', gap: '6px' },
        }, items.map((item, idx) =>
          h('div', {
            key: idx,
            style: {
              background: colors.light,
              color: colors.dark,
              padding: '8px 12px',
              borderRadius: '6px',
              fontSize: '12px',
              borderLeft: `3px solid ${colors.primaryDark}`,
            },
          }, [
            h('span', { key: 'name', style: { fontWeight: 600 } }, item.get('name')),
            h('span', { key: 'sep', style: { color: colors.gray, margin: '0 6px' } }, '—'),
            h('span', { key: 'title', style: { color: colors.gray } }, item.get('title')),
          ])
        ).toArray()),
        items && h('p', { key: 'count', style: { fontSize: '11px', color: colors.gray, margin: '6px 0 0', fontStyle: 'italic' } }, items.size + ' testimonial(s)'),
      ];
    } else if (type === 'contact') {
      const tagline = section.get('tagline');
      const buttonText = section.get('button_text');
      const buttonLink = section.get('button_link');
      body = [
        headingEl,
        tagline && h('p', { key: 'tagline', style: { fontSize: '12px', color: colors.gray, margin: '0 0 8px' } }, tagline),
        buttonText && h('span', {
          key: 'button',
          style: {
            display: 'inline-block',
            background: colors.primary,
            color: colors.white,
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 600,
          },
        }, buttonText + (buttonLink ? ' →' : '')),
      ];
    }

    cards.push(h('div', { key: i, style: cardStyle }, [badge, body]));
  });

  return h('div', {
    style: {
      fontFamily: "'Poppins', sans-serif",
      maxWidth: '640px',
      margin: '0 auto',
      padding: '20px',
      background: '#f3f4f6',
      minHeight: '100vh',
    },
  }, cards);
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

// Register preview templates
CMS.registerPreviewTemplate('blog', BlogPreview);
CMS.registerPreviewTemplate('tours', TourPreview);
CMS.registerPreviewTemplate('homepage', HomepagePreview);
CMS.registerPreviewTemplate('site', SiteSettingsPreview);
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
