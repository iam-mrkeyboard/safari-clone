import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    thumbnail: image().optional(),
    author: z.string(),
    description: z.string().optional(),
  }),
});

const site = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
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
      nav_columns: z.array(z.object({
        title: z.string(),
        links: z.array(z.object({
          label: z.string(),
          url: z.string(),
        })),
      })).optional(),
    }),
    meta: z.object({
      site_name: z.string(),
      site_url: z.string(),
      default_description: z.string().optional(),
      og_image: image().optional(),
      twitter_handle: z.string().optional(),
    }),
  }),
});

const homepage = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    sections: z.array(
      z.discriminatedUnion("type", [
        z.object({
          type: z.literal("hero"),
          visible: z.boolean(),
          heading: z.string(),
          tagline: z.string().optional(),
          video_url: z.string().optional(),
          poster_image: image().optional(),
          scroll_to: z.string().optional(),
        }),
        z.object({
          type: z.literal("categories"),
          visible: z.boolean(),
          heading: z.string(),
          text: z.string().optional(),
          items: z.array(z.object({
            title: z.string(),
            subtitle: z.string(),
            image: image(),
            link: z.string(),
            order: z.number(),
          })).optional(),
        }),
        z.object({
          type: z.literal("about"),
          visible: z.boolean(),
          heading: z.string(),
          description: z.string().optional(),
          image: image().optional(),
          stats: z.array(z.object({
            value: z.string(),
            label: z.string(),
          })).optional(),
        }),
        z.object({
          type: z.literal("destinations"),
          visible: z.boolean(),
          heading: z.string(),
          text: z.string().optional(),
          subtitle: z.string().optional(),
          items: z.array(z.object({
            title: z.string(),
            image: image(),
            link: z.string(),
            order: z.number(),
          })).optional(),
        }),
        z.object({
          type: z.literal("tours"),
          visible: z.boolean(),
          heading: z.string(),
          text: z.string().optional(),
        }),
        z.object({
          type: z.literal("partners"),
          visible: z.boolean(),
          heading: z.string(),
          text: z.string().optional(),
          items: z.array(z.object({
            name: z.string(),
            image: image(),
            link: z.string().optional(),
            order: z.number(),
          })).optional(),
        }),
        z.object({
          type: z.literal("lodges"),
          visible: z.boolean(),
          heading: z.string(),
          text: z.string().optional(),
          items: z.array(z.object({
            title: z.string(),
            image: image(),
            rating: z.number(),
            tag: z.string(),
            link: z.string(),
            order: z.number(),
          })).optional(),
        }),
        z.object({
          type: z.literal("testimonials"),
          visible: z.boolean(),
          heading: z.string(),
          text: z.string().optional(),
          items: z.array(z.object({
            name: z.string(),
            avatar: image(),
            rating: z.number(),
            title: z.string(),
            date: z.string(),
            travel_type: z.string(),
            text: z.string(),
            video_url: z.string().optional(),
            order: z.number(),
          })).optional(),
        }),
        z.object({
          type: z.literal("contact"),
          visible: z.boolean(),
          heading: z.string(),
          tagline: z.string().optional(),
          image: image().optional(),
          button_text: z.string().optional(),
          button_link: z.string().optional(),
        }),
      ])
    ),
  }),
});

const tours = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image(),
    duration: z.string(),
    price: z.string(),
    badge: z.string().optional(),
    category: z.string(),
    link: z.string(),
    order: z.number(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    hero_image: image().optional(),
    hero_tagline: z.string().optional(),
    hero_title: z.string().optional(),
    hero_description: z.string().optional(),
    story_tagline: z.string().optional(),
    story_heading: z.string().optional(),
    story_description: z.string().optional(),
    story_paragraphs: z.array(z.string()).optional(),
    story_image: image().optional(),
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
    intro_image: image().optional(),
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
  tours,
};
