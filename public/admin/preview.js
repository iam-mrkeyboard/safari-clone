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

// Register preview templates
CMS.registerPreviewTemplate('blog', BlogPreview);
CMS.registerPreviewTemplate('tours', TourPreview);
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
