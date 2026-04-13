export default function sitemap() {
  const baseUrl = 'https://saiteerth.in';

  const routes = [
    '',
    '/attractions',
    '/attractions/lanka-dahan',
    '/attractions/kaliya-mardan',
    '/attractions/sabka-malik-ek',
    '/attractions/teerth-yatra',
    '/attractions/dwarkamai',
    '/attractions/mushak-maharaj',
    '/attractions/laser-show',
    '/attractions/saibaba-mosaic',
    '/how-to-reach',
    '/foods-and-beverages',
    '/guest-facility-at-saiteerth',
    '/blog',
    '/gallery',
    '/group-enquiry',
    '/influencer',
    '/offers',
    '/about-sai-teerth',
    '/contact-us',
    '/terms-and-conditions',
    '/rules-and-regulations',
    '/privacy-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
