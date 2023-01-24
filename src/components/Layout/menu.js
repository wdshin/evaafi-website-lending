import corporate from '../../assets/images/demo/corporate.png';
import crypto from '../../assets/images/demo/crypto.png';
import shop from '../../assets/images/demo/shop.png';
import portfolio from '../../assets/images/demo/portfolio.png';
import helpCenter from '../../assets/images/demo/help-center.png';
import hosting from '../../assets/images/demo/hosting.png';
import job from '../../assets/images/demo/job.png';
import forums from '../../assets/images/demo/forums.png';
import blog from '../../assets/images/demo/blog.png';
import nft from "../../assets/images/demo/nft.png";

const navLinks = [
  //Note : each child and nested child must have unique id
  { id: 1, title: 'Home', link: '/' },
  {
    id: 2,
    title: 'Landing',
    link: '/#',
    isMegaMenu: true,

    child: [
      { id: 1, header: "Landing Pages", link: '/#', icon: "uil uil-book-open fs-6 align-middle", isHeaderClass: true },
      { id: 1, title: 'Saas', link: '/index-saas' },
      { id: 2, title: 'Classic Saas', link: '/index-classic-saas' },
      { id: 3, title: 'Agency', link: '/index-agency' },
      { id: 4, title: 'Application', link: '/index-apps' },
      { id: 5, title: 'Classic Application', link: '/index-classic-app' },
      { id: 6, title: 'Studio', link: '/index-studio' },
      { id: 7, title: 'Marketing', link: '/index-marketing' },
      { id: 8, title: 'Enterprise', link: '/index-enterprise' },
      { id: 9, title: 'Services', link: '/index-services' },
      { id: 10, title: 'Payments', link: '/index-payments' },
      { id: 11, title: 'IT Solution', link: '/index-it-solution', isDark: false },
      { id: 12, title: 'IT Solution Two', link: '/index-it-solution-two', isDark: false },

      { id: 2, header: "Landing Pages", link: '/#', icon: "uil uil-book-open fs-6 align-middle", isHeaderClass: true },
      { id: 13, title: 'Developer', link: '/index-developer', isDark: false },
      { id: 14, title: 'SEO Agency', link: '/index-seo-agency', isDark: false },
      { id: 15, title: 'Hospital', link: '/index-hospital', isDark: false },
      { id: 16, title: 'Coworking', link: '/index-coworking' },
      { id: 17, title: 'Business', link: '/index-business' },
      { id: 18, title: 'Modern Business', link: '/index-modern-business', isDark: false },
      { id: 19, title: 'Finance', link: '/index-finance', isDark: false },
      { id: 20, title: 'Delivery & Logistics', link: '/index-logistics', isDark: false },
      { id: 21, title: 'Social Media', link: '/index-social-marketing' },
      { id: 22, title: 'Digital Agency', link: '/index-digital-agency' },
      { id: 23, title: 'Customer', link: '/index-customer' },
      { id: 24, title: 'Software', link: '/index-software' },

      { id: 3, header: "Landing Pages", link: '/#', icon: "uil uil-book-open fs-6 align-middle", isHeaderClass: true },
      { id: 25, title: 'Hotel', link: '/index-hotel' },
      { id: 26, title: 'Construction', link: '/index-construction', isDark: false },
      { id: 27, title: 'Real Estate', link: '/index-real-estate', isDark: false },
      { id: 28, title: 'Video Conference', link: '/index-videocall', isDark: false },
      { id: 29, title: 'Blockchain', link: '/index-blockchain', isDark: false },
      { id: 30, title: 'Cryptocurrency Two', link: '/index-crypto-two' },
      { id: 31, title: 'Integration', link: '/index-integration' },
      { id: 32, title: 'Task Management', link: '/index-task-management' },
      { id: 33, title: 'Email Inbox', link: '/index-email-inbox', isDark: false },
      { id: 34, title: 'Travel', link: '/index-travel', isDark: false },
      { id: 35, title: 'Course', link: '/index-course' },
      { id: 36, title: 'Online Learning', link: '/index-online-learning', isDark: false },

      { id: 4, header: "Landing Pages", link: '/#', icon: "uil uil-book-open fs-6 align-middle", isHeaderClass: true },
      { id: 37, title: 'Insurance', link: '/index-insurance', isDark: false },
      { id: 38, title: 'Product', link: '/index-single' },
      { id: 39, title: 'Car Ride', link: '/index-car-riding' },
      { id: 40, title: 'Landing One', link: '/index-landing-one', isDark: false },
      { id: 41, title: 'Landing Two', link: '/index-landing-two', isDark: false },
      { id: 42, title: 'Landing Three', link: '/index-landing-three', isDark: false },
      { id: 43, title: 'LandingFour', link: '/index-landing-four', isDark: false },
      { id: 44, title: 'Personal', link: '/index-personal' },
      { id: 45, title: 'Freelancer', link: '/index-freelancer' },
      { id: 46, title: 'Event', link: '/index-event' },
      { id: 47, title: 'E-Book', link: '/index-ebook', isDark: false },
      { id: 48, title: 'Saas', link: '/index-onepage', extra: 'onepage' },

      { id: 5, header: "Full Demos", link: '/#', icon: "uil uil-cube fs-6 align-middle", isHeaderClass: true },
      { id: 49, title: 'Corporate', link: '/index-corporate', isDark: false },
      { id: 50, title: 'Cryptocurrency', link: '/index-crypto', isDark: false },
      { id: 51, title: 'Shop', link: '/index-shop', isDark: false },
      { id: 52, title: 'Portfolio', link: '/index-portfolio' },
      { id: 53, title: 'Help Center', link: '/helpcenter-overview' },
      { id: 54, title: 'Hosting', link: '/index-hosting' },
      { id: 55, title: 'Job & Career', link: '/index-job', isDark: false },
      { id: 56, title: 'Forums', link: '/index-forums', isDark: false, },
      { id: 57, title: 'Blog', link: '/index-blog', isDark: false, },
      { id: 58, title: 'NFT Marketplace', link: '/index-nft', isDark: false },
    ],
  },
  {
    id: 3,
    title: 'Pages',
    link: '/#',

    child: [
      {
        id: 4,
        title: 'Company',
        link: '/#',

        child: [
          { title: 'About Us', link: '/page-aboutus' },
          { title: 'About Us Two', link: '/page-aboutus-two' },
          { title: 'Services', link: 'page-services' },
          { title: 'History', link: '/page-history' },
          { title: 'Team', link: '/page-team' },
          { title: 'Pricing', link: '/page-pricing' },
        ],
      },
      {
        id: 4,
        title: 'Account',
        link: '/#',

        hasStar: true,
        child: [
          { title: 'Profile', link: '/page-profile', isupdatePage: true },
          { title: 'Members', link: '/page-members', isNewPage: true },
          { title: 'Works', link: '/page-works', isNewPage: true },
          { title: 'Messages', link: '/page-messages', isNewPage: true },
          { title: 'Chat', link: '/page-chat', isNewPage: true, hasStar: true },
          { title: 'Payments', link: '/page-payments', isNewPage: true },
          { title: 'Setting', link: '/page-profile-edit' },
          { title: 'Invoice', link: '/page-invoice' },
        ],
      },
      {
        id: 5,
        title: 'Email Template',
        link: '/#',

        child: [
          { title: 'Confirmation', link: '/email-confirmation' },
          { title: 'Reset Password', link: '/email-password-reset' },
          { title: 'Alert', link: '/email-alert' },
          { title: 'Invoice', link: '/email-invoice' },
        ],
      },
      {
        id: 6,
        title: 'Blog',
        link: '/#',

        child: [
          { title: 'Blog Grid', link: '/page-blog-grid' },
          { title: 'Blog with Sidebar', link: '/page-blog-sidebar' },
          { title: 'Blog Listing', link: '/page-blog-list' },
          {
            title: 'Blog List & Sidebar',
            link: '/page-blog-list-sidebar',
          },
          { title: 'Blog Detail', link: '/page-blog-detail' },
          { title: 'Blod Detail 2', link: '/page-blog-detail-two' },
        ],
      },
      {
        id: 7,
        title: 'Case Study',
        link: '/#',

        child: [
          { title: 'All Cases', link: '/page-all-cases' },
          { title: 'Case Detail', link: '/page-case-detail' },
        ],
      },
      {
        id: 8,
        title: "Course Detail",
        link: "/page-course-detail"
      },
      {
        id: 9,
        title: 'Auth Pages',
        link: '/#',

        hasStar: true,
        child: [
          {
            id: 1,
            title: 'Login',
            link: '/#',
            hasStar: true,
            child: [
              { title: 'Login', link: '/auth-login' },
              { title: 'Login Cover', link: '/auth-cover-login' },
              { title: 'Login Simple', link: '/auth-login-three' },
              { title: 'BS5 Login', link: '/auth-bs-login' },
              { title: 'Login Five', link: '/auth-login-bg-video' },
            ],
          },
          {
            id: 2,
            title: 'SignUp',
            link: '/#',
            hasStar: true,
            child: [
              { title: 'Signup', link: '/auth-signup' },
              { title: 'Signup Cover', link: '/auth-cover-signup' },
              { title: 'Signup Simple', link: '/auth-signup-three' },
              { title: 'BS5 Singup', link: '/auth-bs-signup' },
              { title: 'Singup Five', link: '/auth-signup-bg-video' },
            ],
          },
          {
            id: 3,
            title: 'Reset Password',
            link: '/#',
            hasStar: true,
            child: [
              { title: 'Reset Password', link: '/auth-re-password' },
              { title: 'Reset Password Cover', link: '/auth-cover-re-password' },
              { title: 'Reset Password Simple', link: '/auth-re-password-three' },
              { title: 'BS5 Reset Password', link: '/auth-bs-reset' },
              { title: 'Reset Pass Five', link: '/auth-reset-password-bg-video' },
            ],
          },
        ],
      },
      {
        id: 10,
        title: 'Utility',
        link: '/#',

        child: [
          { title: 'Terms of Services', link: '/page-terms' },
          { title: 'Privacy Policy', link: '/page-privacy' },
        ],
      },
      {
        id: 11,
        title: 'Special',
        link: '/#',

        child: [
          { title: 'Coming Soon', link: '/page-comingsoon' },
          { title: 'Coming Soon Two', link: '/page-comingsoon2' },
          { title: 'Maintenance', link: '/page-maintenance' },
          { title: 'Error', link: '/page-error' },
          { title: 'Thank you', link: '/page-thankyou', isNewPage: true },
        ],
      },
      {
        id: 12,
        title: 'Contact',
        link: '/#',

        child: [
          { title: 'Contact Detail', link: '/page-contact-detail' },
          { title: 'Contact One', link: '/page-contact-one' },
          { title: 'Contact Two', link: '/page-contact-two' },
          { title: 'Contact Three', link: '/page-contact-three' },
        ],
      },
      {
        id: 13,
        title: 'Multi Level Menu',
        link: '/#',

        child: [
          {
            title: 'Level 1.0',
            link: '/#',
          },

          {
            title: 'Level 2.0',
            link: '/#',
            child: [
              { title: 'Level 2.1', link: '/#' },
              { title: 'Level 2.2', link: '/#' },
            ],
          },
        ],
      },
      {
        id: 14,
        title: 'Footer Layouts',
        link: '/footer-layouts',
        hasStar: true,
      },
    ],
  },
  {
    id: 4,
    title: 'Demos',
    link: '/#',

    isDemo: true,
    child: [
      {
        id: 1,
        title: 'Corporate',
        link: '/index-corporate',
        img: corporate,
        isDark: false,
      },
      {
        id: 2,
        title: 'Cryptocurrency',
        link: '/index-crypto',
        img: crypto,
        isDark: false,
      },
      {
        id: 3,
        title: 'Shop',
        link: '/index-shop',
        img: shop,
        isDark: false,
      },
      {
        id: 4,
        title: 'Portfolio',
        link: '/index-portfolio',
        img: portfolio,
        isDark: false,
      },
      {
        id: 5,
        title: 'Help Center',
        link: '/helpcenter-overview',
        img: helpCenter,
        isDark: false,
      },
      {
        id: 6,
        title: 'Hosting & Domain',
        link: '/index-hosting',
        img: hosting,
        isDark: false,
      },
      {
        id: 7,
        title: 'Job & Career',
        link: '/index-job',
        img: job,
        isDark: false,
      },
      {
        id: 8,
        title: 'Forums',
        link: '/index-forums',
        img: forums,
        isDark: false,
      },
      {
        id: 9,
        title: 'Blog',
        link: '/index-blog',
        img: blog,
        isDark: false,
      },
      {
        id: 10,
        title: 'NFT Marketplace',
        link: '/index-nft',
        img: nft,
        isDark: false,
      },
    ],
  },
  {
    id: 5,
    title: "Components",
    link: '/#',

    child: [
      { subTitle: 'Buttons', link: '/ui-button', iconClass: "uil uil-cube fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Badges', link: '/ui-badges', iconClass: "uil uil-award fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Alert', link: '/ui-alert', iconClass: "uil uil-info-circle fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Dropdowns', link: '/ui-dropdown', iconClass: "uil uil-layers fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Typography', link: '/ui-typography', iconClass: "uil uil-align-center-alt fs-6 align-middle me-1", isMenu: true },

      { subTitle: 'Background', link: '/ui-background', iconClass: "uil uil-palette fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Text Color', link: '/ui-text', iconClass: "uil uil-text fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Accordions', link: '/ui-accordion', iconClass: "uil uil-list-ui-alt fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Cards', link: '/ui-card', iconClass: "uil uil-postcard fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Tooltips & Popovers', link: '/ui-tooltip-popover', iconClass: "uil uil-backspace fs-6 align-middle me-1", isMenu: true },

      { subTitle: 'Shadows', link: '/ui-shadow', iconClass: "uil uil-square-full fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Border', link: '/ui-border', iconClass: "uil uil-border-out fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Carousel', link: '/ui-carousel', iconClass: "uil uil-sliders-v fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Form Elements', link: '/ui-form', iconClass: "uil uil-notes fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Breadcrumb', link: '/ui-breadcrumb', iconClass: "uil uil-sort-amount-down fs-6 align-middle me-1", isMenu: true },

      { subTitle: 'Pagination', link: '/ui-pagination', iconClass: "uil uil-copy fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Avatars', link: '/ui-avatar', iconClass: "uil uil-image fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Nav Tabs', link: '/ui-nav-tabs', iconClass: "uil uil-bars fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Modals', link: '/ui-modals', iconClass: "uil uil-vector-square fs-6 align-middle me-1", isMenu: true },

      { subTitle: 'Tables', link: '/ui-tables', iconClass: "uil uil-table fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Icons', link: '/ui-icons', iconClass: "uil uil-shutter-alt fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Progressbar', link: '/ui-progressbar', iconClass: "uil uil-brackets-curly fs-6 align-middle me-1", isMenu: true },
      { subTitle: 'Lightbox', link: '/ui-lightbox', iconClass: "uil uil-play-circle fs-6 align-middle me-1", isMenu: true },
    ],
  },
  {
    id: 6,
    title: 'Docs',
    link: '/#',

    child: [
      { title: 'Documentations', link: '/documentation' },
      { title: 'Changelog', link: '/changelog' },
      { title: 'Widget', link: '/widget' },
    ],
  },

];

export { navLinks };
