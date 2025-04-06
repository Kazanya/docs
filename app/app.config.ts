export default defineAppConfig({
  ui: {
    colors: {
      primary: 'purple',
      neutral: 'slate'
    }
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-(--ui-border)',
        left: 'text-sm text-(--ui-text-muted)'
      }
    }
  },
  seo: {
    siteName: 'Stream HQ - Dokumentation'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: []
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-lucide-link',
      'to': 'https://hendycap.com',
      'target': '_blank',
      'aria-label': 'Stream HQ Website'
    }, {
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.gg/vjmrCDFyJP',
      'target': '_blank',
      'aria-label': 'Stream HQ on Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/hendycapp',
      'target': '_blank',
      'aria-label': 'HendyCapp on X'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/Kazanya/docs/edit/main/content',
      links: []
    }
  }
})
