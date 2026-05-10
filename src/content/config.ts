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
    whatsapp_number: z.string(),
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
  }),
});

const homepage = defineCollection({
  type: 'content',
  schema: z.object({
    sections: z.array(z.object({
      section_type: z.string(),
      visible: z.boolean(),
      heading: z.string().optional(),
      tagline: z.string().optional(),
      text: z.string().optional(),
      description: z.string().optional(),
      subtitle: z.string().optional(),
      video_url: z.string().optional(),
      poster_image: z.string().optional(),
      image: z.string().optional(),
      scroll_to: z.string().optional(),
      button_text: z.string().optional(),
      button_link: z.string().optional(),
      stats: z.array(z.object({
        value: z.string(),
        label: z.string(),
      })).optional(),
    })),
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
    video_url: z.string().optional(),
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

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    hero_image: z.string().optional(),
    hero_tagline: z.string().optional(),
    hero_title: z.string().optional(),
    hero_description: z.string().optional(),
    story_tagline: z.string().optional(),
    story_heading: z.string().optional(),
    story_description: z.string().optional(),
    story_paragraphs: z.array(z.string()).optional(),
    story_image: z.string().optional(),
    values_heading: z.string().optional(),
    values_description: z.string().optional(),
    values: z.array(z.object({
      title: z.string(),
      text: z.string(),
    })).optional(),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })).optional(),
    cta_heading: z.string().optional(),
    cta_description: z.string().optional(),
    cta_buttons: z.array(z.object({
      text: z.string(),
      link: z.string(),
      style: z.string().optional(),
    })).optional(),
    contact_heading: z.string().optional(),
    contact_description: z.string().optional(),
    offices: z.array(z.object({
      title: z.string(),
      email: z.string().optional(),
      phone: z.string().optional(),
      address_line1: z.string().optional(),
      address_line2: z.string().optional(),
      hours_line1: z.string().optional(),
      hours_line2: z.string().optional(),
    })).optional(),
    form_heading: z.string().optional(),
    form_name_label: z.string().optional(),
    form_email_label: z.string().optional(),
    form_subject_label: z.string().optional(),
    form_message_label: z.string().optional(),
    form_submit_text: z.string().optional(),
    form_privacy_text: z.string().optional(),
    intro_heading: z.string().optional(),
    intro_description: z.string().optional(),
    features_heading: z.string().optional(),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional(),
    intro_text: z.array(z.string()).optional(),
    intro_image: z.string().optional(),
    routes_heading: z.string().optional(),
    routes: z.array(z.object({
      name: z.string(),
      days: z.string(),
      difficulty: z.string(),
      description: z.string(),
    })).optional(),
    treks_heading: z.string().optional(),
  }),
});

export const collections = {
  blog,
  site,
  homepage,
  pages,
  categories,
  destinations,
  tours,
  lodges,
  testimonials,
  partners,
};
