export default [
  {
    name: 'solution',
    i18nKey: 'common.nav.solution',
    isDropdown: true,
    sub: [
      {
        name: 'threat-sonar',
        i18nKey: 'common.nav.threat-sonar',
        as: '/products/threatsonar',
        href: '/products/threatsonar',
        imageUrl:
          'https://res.cloudinary.com/dvgomg5gh/image/upload/v1630923764/custom/ThreatSonar_eqfvid.svg',
        logEventKey: 'solution_threatsonar',
      },
      {
        name: 'threat-vision',
        i18nKey: 'common.nav.threat-vision',
        as: '/products/threatvision',
        href: '/products/threatvision',
        imageUrl:
          'https://res.cloudinary.com/dvgomg5gh/image/upload/v1630923764/custom/ThreatVision_na33jo.svg',
        logEventKey: 'solution_threatvision',
      },
    ],
  },
  {
    name: 'company',
    i18nKey: 'common.nav.company',
    isDropdown: true,
    sub: [
      {
        name: 'about-us',
        i18nKey: 'common.nav.about-us',
        as: '/about-us',
        href: '/about-us',
        imageUrl:
          'https://res.cloudinary.com/dvgomg5gh/image/upload/q_90/w_200,c_scale/f_auto/v1597723059/about_cover_59b796ac5a.jpg',
        logEventKey: 'company_about',
      },
      {
        name: 'careers',
        i18nKey: 'common.nav.careers',
        as: '/careers',
        href: '/careers',
        imageUrl:
          'https://res.cloudinary.com/dvgomg5gh/image/upload/q_90/w_200,c_scale/f_auto/v1597723058/TeamT5_Careers_img_b6492dddfd.jpg',
        logEventKey: 'company_careers',
      },
    ],
  },
  {
    name: 'newsAndEvents',
    i18nKey: 'common.nav.news-and-event',
    as: '/news-and-events',
    href: '/news-and-events',
    logEventKey: 'news',
  },
  {
    name: 'blog',
    i18nKey: 'common.nav.blog',
    as: '/blog',
    href: '/blog',
    logEventKey: 'blog',
  },
  {
    name: 'contact-us',
    i18nKey: 'common.nav.contact-us',
    isDropdown: true,
    sub: [
      {
        name: 'request-information',
        i18nKey: 'common.nav.request-information',
        as: '/request-information',
        href: '/request-information',
        imageUrl:
          'https://res.cloudinary.com/dvgomg5gh/image/upload/q_90/w_200,c_scale/f_auto/v1597723058/info_9e3a7cbe05.jpg',
        logEventKey: 'contact_information',
      },
      {
        name: 'partner',
        i18nKey: 'common.nav.become-a-partner',
        as: '/become-a-partner',
        href: '/become-a-partner',
        imageUrl:
          'https://res.cloudinary.com/dvgomg5gh/image/upload/q_90/w_200,c_scale/f_auto/v1602841516/partner_c95a01f8af.jpg',
        logEventKey: 'contact_partner',
      },
    ],
  },
]
