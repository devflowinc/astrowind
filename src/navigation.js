import { getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Dashboard',
      href: 'https://dashboard.trieve.ai',
    },
    {
      text: 'Demo',
      href: 'https://yc.trieve.ai',
    },
    {
      text: 'Docs',
      href: 'https://docs.trieve.ai',
    },
    {
      text: 'Pricing',
      href: '/pricing',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      links: [
        {
          text: '+1 628-222-4090',
          href: 'tel:+16282224090',
        },
        {
          text: 'humans@trieve.ai',
          href: 'mailto:humans@trieve.ai',
        },
        {
          text: 'Meet with Us',
          href: 'https://cal.com/nick.k/meet',
        },
        {
          text: 'Matrix',
          href: 'https://matrix.to/#/#trieve-general:trieve.ai',
        },
        {
          text: 'Discord',
          href: 'https://discord.gg/E9sPRZqpDT',
        },
      ],},
  ],
  actions: [{ text: 'Get Started Free', href: 'https://dashboard.trieve.ai', target: '_blank' }],
  showRssFeed: true,
};

export const footerData = {
  links: [
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: 'https://docs.trieve.ai' },
        { text: 'Matrix', href: 'https://matrix.to/#/#trieve-general:trieve.ai' },
        { text: 'Discord', href: 'https://discord.gg/E9sPRZqpDT' },
        {
          text: '+1 628-222-4090',
          href: 'tel:+16282224090',
        },
        {
          text: 'humans@trieve.ai',
          href: 'mailto:humans@trieve.ai',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Admin Dashboard', href: 'https://dashboard.trieve.ai' },
        { text: 'Privacy Policy', href: '/legal/privacy-policy' },
        { text: 'GitHub', href: 'https://github.com/devflowinc/trieve' },
      ],
    },
    {
      title: 'Product',
      links: [
        { text: 'Pricing', href: '/pricing' },
        { text: 'Documentation', href: 'https://docs.trieve.ai' },
        { text: 'YC Directory Demo', href: 'https://yc.trieve.ai' },
      ],
    },
    {
      title: 'Comparisons',
      links: [{ text: 'vs Algolia', href: '/trieve-vs-algolia' }],
    },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/trieveai' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/devflowinc/trieve' },
    { ariaLabel: 'Matrix', icon: 'tabler:brand-matrix', href: 'https://matrix.to/#/#trieve-general:trieve.ai' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/E9sPRZqpDT' },
  ],
  secondaryLinks: [],
};
