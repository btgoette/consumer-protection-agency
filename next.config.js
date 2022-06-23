module.exports = {

  exportPathMap: async function (defaultPathMap) {
    return {
      
      "/about/index": { page: "/about" },
      "/blog/index": { page: "/blog" },
      "/contact/index": { page: "/contact" },
      "/in-the-news/index": { page: "/in-the-news"},
      "/services/private-small-business-network": { page: "/services/private-small-business-network" },
      "/services/accounting-and-tax-services": { page: "/services/accounting-and-tax-services" },      
      "/services/financial-education": { page: "/services/financial-education" },
      "/services/credit-restoration": { page: "/services/credit-restoration" },
      "/extended-warranty-services/index": { page: "/extended-warranty-services" },
      "/natural-disaster-coverage/index": { page: "/natural-disaster-coverage" },
      "/testimonials/index": { page: "/testimonials" },
      "/thank-you": { page: "/thank-you" },
      "/": { page: "/" },
      "/404": { page: "/404" },
      "/403": { page: "/403" },
      "/privacy-policy": { page: "/privacy-policy" },
      "/roadmap": { page: "/roadmap" },
      "/site-map": { page: "/site-map" }
    };
  },

  async redirects() {
    return [
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/private-small-business-network",
        destination: "/services/private-small-business-network",
        permanent: true,
      },
      {
        source: "/accounting-and-tax-services",
        destination: "/services/accounting-and-tax-services",
        permanent: true,
      },
      {
        source: "/financial-education",
        destination: "/services/financial-education",
        permanent: true,
      },
      {
        source: "/credit-restoration",
        destination: "/services/credit-restoration",
        permanent: true,
      },
      {
        source: "/services/natural-disaster-coverage",
        destination: "/natural-disaster-coverage",
        permanent: true,
      },
      {
        source: "/services/extended-warranty-services",
        destination: "/extended-warranty-services",
        permanent: true,
      }
    ];
  },
};
