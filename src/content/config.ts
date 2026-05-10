import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    thumbnail: z.string().optional(),
    author: z.string(),
    description: z.string().optional(),
  }),
});

const site = defineCollection({
  type: 'content',
  schema: z.object({
    hero: z.object({
      heading: z.string(),
      tagline: z.string(),
      video_url: z.string(),
      whatsapp_number: z.string(),
      scroll_to: z.string(),
    }),
    about: z.object({
      heading: z.string(),
      description: z.string(),
      image: z.string(),
      stats: z.array(z.object({
        value: z.string(),
        label: z.string(),
      })),
    }),
    contact: z.object({
      heading: z.string(),
      tagline: z.string(),
      image: z.string(),
      button_text: z.string(),
      button_link: z.string(),
    }),
    footer: z.object({
      newsletter_heading: z.string(),
      newsletter_text: z.string(),
      newsletter_button: z.string(),
      cta_heading: z.string(),
      cta_text: z.string(),
      cta_button: z.string(),
      cta_button_link: z.string(),
      copyright: z.string(),
      social: z.object({
        tripadvisor_url: z.string(),
        instagram_url: z.string(),
        facebook_url: z.string(),
        youtube_url: z.string(),
        tiktok_url: z.string(),
      }),
    }),
    meta: z.object({
      site_name: z.string(),
      site_url: z.string(),
    }),
    homepage: z.object({
      categories_heading: z.string(),
      categories_text: z.string(),
      destinations_heading: z.string(),
      destinations_text: z.string(),
      destinations_subtitle: z.string(),
      tours_heading: z.string(),
      tours_text: z.string(),
      partners_heading: z.string(),
      partners_text: z.string(),
      lodges_heading: z.string(),
      lodges_text: z.string(),
      testimonials_heading: z.string(),
      testimonials_text: z.string(),
    }),
  }),
});

const categories = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.string(),
    link: z.string(),
    order: z.number(),
  }),
});

const destinations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    link: z.string(),
    order: z.number(),
  }),
});

const tours = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    duration: z.string(),
    price: z.string(),
    badge: z.string().optional(),
    category: z.string(),
    link: z.string(),
    order: z.number(),
  }),
});

const lodges = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    rating: z.number(),
    tag: z.string(),
    link: z.string(),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
    rating: z.number(),
    title: z.string(),
    date: z.string(),
    travel_type: z.string(),
    text: z.string(),
    order: z.number(),
  }),
});

const partners = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    image: z.string(),
    link: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  blog,
  site,
  categories,
  destinations,
  tours,
  lodges,
  testimonials,
  partners,
};