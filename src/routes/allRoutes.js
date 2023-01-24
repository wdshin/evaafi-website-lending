import React from 'react'
import { Redirect } from "react-router-dom";

//Main Index
// import Main from "../pages/Home/indexMain";

//Special
import PageComingSoon from "../pages/Pages/Special/PageComingSoon";

import PageComingSoon2 from "../pages/Pages/Special/PageComingSoon2";

import PageError from "../pages/Pages/Special/PageError";

import PageThankYou from "../pages/Pages/Special/PageThankYou";

import PageMaintenance from "../pages/Pages/Special/PageMaintenance";

//Auth Pages
import PageLogin from "../pages/Pages/AuthPages/PageLogin";

import PageCoverLogin from "../pages/Pages/AuthPages/PageCoverLogin";

import PageLoginThree from "../pages/Pages/AuthPages/PageLoginThree";

import PageLoginFive from "../pages/Pages/AuthPages/PageLoginFive";

import PageSignup from "../pages/Pages/AuthPages/PageSignup";

import PageCoverSignup from "../pages/Pages/AuthPages/PageCoverSignup";

import PageSignupThree from "../pages/Pages/AuthPages/PageSignupThree";

import PageSignupFive from "../pages/Pages/AuthPages/PageSignupFive";

import PageCoverRePassword from "../pages/Pages/AuthPages/PageCoverRePassword";

import PageRecoveryPassword from "../pages/Pages/AuthPages/PageRecoveryPassword";

import PageRePasswordThree from "../pages/Pages/AuthPages/PageRePasswordThree";

import PageResetPassFive from "../pages/Pages/AuthPages/PageResetPassFive";

// Import all components
import SaasOnepage from "../pages/Saas Onepage/index";
import Customer from "../pages/Customer/index";
import Software from "../pages/Software/index";
import Payments from "../pages/Payments/index";
import IndexCarRiding from "../pages/Car Ride/index";
import IndexclassicSaas from "../pages/Classic Saas/index";
import ClassicApp from "../pages/Classic Application/index";

import Agency from "../pages/Agency/index";
import Saas from "../pages/Saas/index";
import Apps from "../pages/Apps/index";
import Studio from "../pages/Studio/index";
import Business from "../pages/Business/index";
import ITSolution from "../pages/ITSolution/index";
import Marketing from "../pages/Marketing/index";
import RealEstate from "../pages/RealEstate/index";
import Hotel from "../pages/Hotel/index";
import Developer from "../pages/Developer/index";
import LandingFour from "../pages/LandingFour/index";
import Integration from "../pages/Integration/index";
import TaskManagement from "../pages/TaskManagement/index";
import Hospital from "../pages/Hospital/index";
import Construction from "../pages/Construction/index";
import EmailInbox from "../pages/Email-Inbox/index";
import LandingOne from "../pages/LandingOne/index";
import LandingThree from "../pages/LandingThree/index";
import LandingTwo from "../pages/LandingTwo/index";
import Travel from "../pages/Travel/index";
import SeoAgency from "../pages/SeoAgency/index";
import ModernBusiness from "../pages/ModernBusiness/index";
import CorporateBusiness from "../pages/CorporateBusiness/index";

import Coworking from "../pages/Coworking/index";
import Event from "../pages/Event/index";
import Course from "../pages/Course/index";
import Personal from "../pages/Personal/index";
import SingleProduct from "../pages/SingleProduct/index";
import Enterprise from "../pages/Enterprise/index";
import Services from "../pages/Services/index";
import Insurance from "../pages/Insurance/index";
import Ebook from "../pages/Ebook/index";
import SocialMarketing from "../pages/SocialMarketing/index";

import DigitalAgency from "../pages/DigitalAgency/index";
import OnlineLearning from "../pages/OnlineLearning/index";
import Finance from '../pages/Finance/index';
import Logistics from "../pages/Logistics/index";
import VideoCall from '../pages/VideoCall/index';
import iTSolutionTwo from '../pages/ITSolutionTwo/index';
import Freelancer from '../pages/Freelancer/index';
import Blockchain from '../pages/Blockchain/index';
import CryptoTwo from '../pages/CryptoTwo/index';

//Docs
import ChangeLog from "../pages/Docs/ChangeLog";
import Documentation from "../pages/Docs/Documentation";
import Widget from "../pages/Docs/widget";

//Components
import Buttons from "../pages/Components/Buttons";
import Badges from "../pages/Components/Badges";
import Alerts from "../pages/Components/Alerts";
import Dropdowns from "../pages/Components/Dropdowns";
import Typography from "../pages/Components/Typography";
import Background from "../pages/Components/Background";
import TextColors from "../pages/Components/TextColors";
import Accordions from "../pages/Components/Accordions";
import BoxShadows from "../pages/Components/BoxShadows";
import Borders from "../pages/Components/Borders";
import Carousel from "../pages/Components/Carousel";
import Lightbox from "../pages/Components/Lightbox";
import Tooltips from "../pages/Components/Tooltips";
import Cards from "../pages/Components/Cards";
import Forms from "../pages/Components/Forms";
import Breadcrumbs from "../pages/Components/Breadcrumbs";
import Paginations from "../pages/Components/Paginations";
import Avatar from "../pages/Components/Avatar";
import NavTabs from "../pages/Components/NavTabs";
import Modals from "../pages/Components/Modals";
import Tables from "../pages/Components/Tables";
import Icons from "../pages/Components/Icons";
import Progressbar from "../pages/Components/Progressbar";

import PageAboutUs from "../pages/Pages/PageAboutUs";
import PageAboutusTwo from "../pages/Pages/PageAboutusTwo";
import PageHistory from "../pages/Pages/PageHistory";
import PageMembers from "../pages/Pages/Account/PageMembers";

import PageWorks from "../pages/Pages/Account/PageWorks";
import PageMessages from "../pages/Pages/Account/PageMessages";

import PagePricing from "../pages/Pages/PagePricing";
import PageServices from "../pages/Pages/PageServices";
import PageTeam from "../pages/Pages/PageTeam";

//Account
import PageProfile from "../pages/Pages/Account/PageProfile";
import PageProfileEdit from "../pages/Pages/Account/PageProfileEdit";
import PagePayments from "../pages/Pages/Account/PagePayments";
import PageInvoice from "../pages/Pages/Account/PageInvoice";
import PageChat from "../pages/Pages/Account/PageChat";

//Blog
import PageBlog from "../pages/Pages/Blog/PageBlog";
import PageBlogDetail from "../pages/Pages/Blog/PageBlogDetail";
import PageBlogDetailTwo from "../pages/Pages/Blog/PageBlogDetailTwo";
import PageBlogSidebar from "../pages/Pages/Blog/PageBlogSidebar";
import PageBlogList from "../pages/Pages/Blog/PageBlogList";
import PageBlogListSidebar from "../pages/Pages/Blog/PageBlogListSidebar";

//Case Study
import AllCases from "../pages/Pages/CaseStudy/AllCases";
import CaseDetail from "../pages/Pages/CaseStudy/CaseDetail";

//course-detail 
import CourseDetail from "../pages/Pages/CourseDetail/index";

//Utility
import PagePrivacy from "../pages/Pages/Utility/PagePrivacy";
import PageTerms from "../pages/Pages/Utility/PageTerms";

//Contact
import PageContactDetail from "../pages/Pages/Contact/PageContactDetail";
import PageContactOne from "../pages/Pages/Contact/PageContactOne";
import PageContactThree from "../pages/Pages/Contact/PageContactThree";
import PageContactTwo from "../pages/Pages/Contact/PageContactTwo";

// forums
import Overview from "../pages/Pages/Forums/overview";
import ForumTopic from "../pages/Pages/Forums/ForumTopic";
import ForumsComments from '../pages/Pages/Forums/ForumsComments';

//Email
import EmailAlert from "../pages/Pages/EmailTemplate/EmailAlert";
import EmailPasswordReset from "../pages/Pages/EmailTemplate/EmailPasswordReset";
import EmailConfirmation from "../pages/Pages/EmailTemplate/EmailConfirmation";
import EmailInvoice from "../pages/Pages/EmailTemplate/EmailInvoice";

//Help Center
import HelpCenterOverview from "../pages/Pages/HelpCenter/HelpCenterOverview";
import HelpCenterFaqs from "../pages/Pages/HelpCenter/HelpCenterFaqs";
import HelpCenterGuides from "../pages/Pages/HelpCenter/HelpCenterGuides";
import HelpCenterSupportRequest from "../pages/Pages/HelpCenter/HelpCenterSupportRequest";

//Demo Shop
import Shop from "../pages/Pages/DemoShop/Shop";
import ShopAboutus from "../pages/Pages/DemoShop/ShopAboutus";
import ShopFullwidthGrids from "../pages/Pages/DemoShop/ShopFullwidthGrids";
import ShopGrid from "../pages/Pages/DemoShop/ShopGrid";
import ShopFullwidthLists from "../pages/Pages/DemoShop/ShopFullwidthLists";
import ShopLists from "../pages/Pages/DemoShop/ShopList";
import ShopProductDetail from "../pages/Pages/DemoShop/ShopProductDetail";
import ShopCart from "../pages/Pages/DemoShop/ShopCart";
import ShopCheckouts from "../pages/Pages/DemoShop/ShopCheckouts";
import ShopMyAccount from "../pages/Pages/DemoShop/ShopMyaccount";
import ShopBlog from "../pages/Pages/DemoShop/ShopBlog";
import ShopBlogDetails from "../pages/Pages/DemoShop/ShopBlogDetails";

//Corporate Buisness
import CorporateAbout from "../pages/Pages/CorporateAbout";
import CorporateServices from "../pages/Pages/CorporateServices";
import CorporateTeam from "../pages/Pages/CorporateTeam";
import CorporatePricing from "../pages/Pages/CorporatePricing";
import CorporateBlog from "../pages/Pages/CorporateBlog";
import CorporateBlogDetail from "../pages/Pages/CorporateBlogDetail";

//Demo Portfolio
import Portfolio from "../pages/Pages/DemoPortfolio/Portfolio";
import PageWorkModernTwo from "../pages/Pages/DemoPortfolio/PageWorkModernTwo";
import PageWorkModernThree from "../pages/Pages/DemoPortfolio/PageWorkModernThree";
import PageWorkModernFour from "../pages/Pages/DemoPortfolio/PageWorkModernFour";
import PageWorkModernFive from "../pages/Pages/DemoPortfolio/PageWorkModernFive";
import PageWorkModernSix from "../pages/Pages/DemoPortfolio/PageWorkModernSix";
import PageWorkClassicTwo from "../pages/Pages/DemoPortfolio/PageWorkClassicTwo";
import PageWorkClassicThree from "../pages/Pages/DemoPortfolio/PageWorkClassicThree";
import PageWorkClassicFour from "../pages/Pages/DemoPortfolio/PageWorkClassicFour";
import PageWorkClassicFive from "../pages/Pages/DemoPortfolio/PageWorkClassicFive";
import PageWorkClassicSix from "../pages/Pages/DemoPortfolio/PageWorkClassicSix";
import PageWorkGridTwo from "../pages/Pages/DemoPortfolio/PageWorkGridTwo";
import PageWorkGridThree from "../pages/Pages/DemoPortfolio/PageWorkGridThree";
import PageWorkGridFour from "../pages/Pages/DemoPortfolio/PageWorkGridFour";
import PageWorkGridFive from "../pages/Pages/DemoPortfolio/PageWorkGridFive";
import PageWorkGridSix from "../pages/Pages/DemoPortfolio/PageWorkGridSix";
import PageWorkMasonryTwo from "../pages/Pages/DemoPortfolio/PageWorkMasonryTwo";
import PageWorkDetailOne from "../pages/Pages/DemoPortfolio/PageWorkDetailOne";
import PageWorkDetailTwo from "../pages/Pages/DemoPortfolio/PageWorkDetailTwo";
import PageWorkDetailThree from "../pages/Pages/DemoPortfolio/PageWorkDetailThree";
import PageWorkDetailFour from "../pages/Pages/DemoPortfolio/PageWorkDetailFour";
import PortfolioAbout from "../pages/Pages/DemoPortfolio/Portfolio/PortfolioAbout";
import PortfolioService from "../pages/Pages/DemoPortfolio/Portfolio/PortfolioService";

import PageMasonryTwo from "../pages/Pages/DemoPortfolio/PageMasonryTwo";
import PageMasonryThree from "../pages/Pages/DemoPortfolio/PageMasonryThree";
import PageMasonryFour from "../pages/Pages/DemoPortfolio/PageMasonryFour";
import PageMasonryFive from "../pages/Pages/DemoPortfolio/PageMasonryFive";
import PageMasonrySix from "../pages/Pages/DemoPortfolio/PageMasonrySix";

//Career
import Job from "../pages/Pages/DemoJob/Job";
import PageCompanyList from "../pages/Pages/DemoJob/PageCompanyList";
import JobListone from "../pages/Pages/DemoJob/JobListOne/JobListOne";
import JobListTwo from "../pages/Pages/DemoJob/JobListTwo";
import JobListThree from "../pages/Pages/DemoJob/JobListThree";
import JobListFour from "../pages/Pages/DemoJob/JobListFour";
import JobListFive from "../pages/Pages/DemoJob/JobListFive";
import PageJobDetail from "../pages/Pages/DemoJob/PageJobDetail";
import PageJobDetailTwo from "../pages/Pages/DemoJob/PageJobDetailTwo";
import PageJobApply from "../pages/Pages/DemoJob/PageJobApply";
import PageCandidateList from "../pages/Pages/DemoJob/PageCandidateList";
import PageJobCandidate from "../pages/Pages/DemoJob/PageJobCandidate";
import PageJobCompany from "../pages/Pages/DemoJob/PageJobCompany";
import JobAbout from "../pages/Pages/DemoJob/JobAbout";
import JobPrice from "../pages/Pages/DemoJob/JobPrice";
import JobFaq from "../pages/Pages/DemoJob/JobFaq";
import AuthLogin from "../pages/Pages/DemoJob/AuthLogin";
import AuthSignup from "../pages/Pages/DemoJob/AuthSignup";
import AuthReset from "../pages/Pages/DemoJob/AuthReset";

//Cryptocurrency
import Cryptocurrency from "../pages/DemoCryptocurrency/Cryptocurrency/index";
import CryptoAbout from "../pages/DemoCryptocurrency/AboutUs";
import CryptoMarket from "../pages/DemoCryptocurrency/CryptoMarket";
import CryptoToken from "../pages/DemoCryptocurrency/CryptoToken";
import CryptoServices from "../pages/DemoCryptocurrency/CryptoServices";
import CryptoFaqs from "../pages/DemoCryptocurrency/CryptoFaqs";
import CryptoWhitepaper from "../pages/DemoCryptocurrency/CryptoWhitepaper";
import CryptoBlog from "../pages/DemoCryptocurrency/CryptoBlog";
import CryptoBlogDetail from "../pages/DemoCryptocurrency/CryptoBlogDetail";

import PageJobDetailThree from "../pages/Pages/DemoJob/PageJobDetailThree";

import PageJobsSidebar from "../pages/Pages/Careers/PageJobsSidebar";

import PageJob from "../pages/Pages/Careers/PageJob";

//Demo Blog
import Blog from "../pages/Pages/DemoBlog/Blog/index";
import BlogAbout from "../pages/Pages/DemoBlog/BlogAbout";
import BlogStandardPost from "../pages/Pages/DemoBlog/BlogStandardPost";
import BlogSliderPost from "../pages/Pages/DemoBlog/BlogSliderPost";
import BlogGalleryPost from "../pages/Pages/DemoBlog/BlogGalleryPost";
import BlogYoutubePost from "../pages/Pages/DemoBlog/BlogYoutubePost";
import BlogVimeoPost from "../pages/Pages/DemoBlog/BlogVimeoPost";
import BlogAudioPost from "../pages/Pages/DemoBlog/BlogAudioPost";
import BlogBlockquotePost from "../pages/Pages/DemoBlog/BlogBlockquotePost";
import BlogLeftSliderPost from "../pages/Pages/DemoBlog/BlogLeftSidebarPost";

//nft marketplace
import Nftmarketplace from "../pages/Pages/NFTMarketPlace/index";
import NftExplore from "../pages/Pages/NFTMarketPlace/NftExplore";
import NftCreators from "../pages/Pages/NFTMarketPlace/NftCreators";
import NftItemDetail from "../pages/Pages/NFTMarketPlace/NftItemDetail";

//CloudHosting
import CloudHosting from "../pages/DemoCloudHosting/index";
import HostingDomain from "../pages/DemoCloudHosting/HostingDomain";
import HostingShared from "../pages/DemoCloudHosting/HostingShared";
import HostingVps from "../pages/DemoCloudHosting/HostingVps";
import HostingDedicated from "../pages/DemoCloudHosting/HostingDedicated";
import HostingCloud from "../pages/DemoCloudHosting/HostingCloud";
import HostingReseller from "../pages/DemoCloudHosting/HostingReseller";
import HostingAboutus from "../pages/DemoCloudHosting/HostingAboutus";
import HostingServices from "../pages/DemoCloudHosting/HostingServices";
import HostingFaqs from "../pages/DemoCloudHosting/HostingFaqs";
import HostingBlog from "../pages/DemoCloudHosting/HostingBlog";
import HostingBlogDetail from "../pages/DemoCloudHosting/HostingBlogDetail";

//Forums
import Forums from "../pages/Forums/index";

//Footer layouts 
import PageFooterLayouts from "../pages/Pages/PageFooterLayouts/PageFooterLayouts";

const routes = [
  //routes without Layout
  { path: "/index-forums", component: Forums, isTopbarDark: true, isWithoutLayout: true },

  //CloudHosting
  { path: "/index-hosting", component: CloudHosting, isWithoutLayout: true },
  { path: "/hosting-domain", component: HostingDomain, isWithoutLayout: true },
  { path: "/hosting-shared", component: HostingShared, isWithoutLayout: true },
  { path: "/hosting-vps", component: HostingVps, isWithoutLayout: true },
  { path: "/hosting-dedicated", component: HostingDedicated, isWithoutLayout: true },
  { path: "/hosting-cloud", component: HostingCloud, isWithoutLayout: true },
  { path: "/hosting-reseller", component: HostingReseller, isWithoutLayout: true },
  { path: "/hosting-aboutus", component: HostingAboutus, isWithoutLayout: true },
  { path: "/hosting-services", component: HostingServices, isWithoutLayout: true },
  { path: "/hosting-faqs", component: HostingFaqs, isWithoutLayout: true },
  { path: "/hosting-blog", component: HostingBlog, isWithoutLayout: true },
  { path: "/hosting-blog-detail", component: HostingBlogDetail, isWithoutLayout: true },

  //Cryptocurrency
  { path: "/index-crypto", component: Cryptocurrency, isWithoutLayout: true },
  { path: "/crypto-about", component: CryptoAbout, isWithoutLayout: true },
  { path: "/crypto-market", component: CryptoMarket, isWithoutLayout: true },
  { path: "/crypto-token", component: CryptoToken, isWithoutLayout: true },
  { path: "/crypto-services", component: CryptoServices, isWithoutLayout: true },
  { path: "/crypto-faqs", component: CryptoFaqs, isWithoutLayout: true },
  { path: "/crypto-whitepaper", component: CryptoWhitepaper, isWithoutLayout: true },
  { path: "/crypto-blog", component: CryptoBlog, isWithoutLayout: true },
  { path: "/crypto-blog-detail", component: CryptoBlogDetail, isWithoutLayout: true },

  //Demo Blog 
  { path: "/index-blog", component: Blog, isWithoutLayout: true },
  { path: "/blog-about", component: BlogAbout, isWithoutLayout: true },
  { path: "/blog-standard-post", component: BlogStandardPost, isWithoutLayout: true },
  { path: "/blog-slider-post", component: BlogSliderPost, isWithoutLayout: true },
  { path: "/blog-gallery-post", component: BlogGalleryPost, isWithoutLayout: true },
  { path: "/blog-youtube-post", component: BlogYoutubePost, isWithoutLayout: true },
  { path: "/blog-vimeo-post", component: BlogVimeoPost, isWithoutLayout: true },
  { path: "/blog-audio-post", component: BlogAudioPost, isWithoutLayout: true },
  { path: "/blog-blockquote-post", component: BlogBlockquotePost, isWithoutLayout: true },
  { path: "/blog-left-sidebar-post", component: BlogLeftSliderPost, isWithoutLayout: true },

  //nft marketplace
  { path: "/index-nft", component: Nftmarketplace, isWithoutLayout: true },
  { path: "/nft-explore", component: NftExplore, isWithoutLayout: true },
  { path: "/nft-creators", component: NftCreators, isWithoutLayout: true },
  { path: "/nft-item-detail", component: NftItemDetail, isWithoutLayout: true },

  //Shop page
  { path: "/index-shop", component: Shop, isWithoutLayout: true },
  { path: "/shop-aboutus", component: ShopAboutus, isWithoutLayout: true },
  { path: "/shop-fullwidth-grids", component: ShopFullwidthGrids, isWithoutLayout: true },
  { path: "/shop-grids", component: ShopGrid, isWithoutLayout: true },
  { path: "/shop-fullwidth-lists", component: ShopFullwidthLists, isWithoutLayout: true },
  { path: "/shop-lists", component: ShopLists, isWithoutLayout: true },
  { path: "/shop-product-detail", component: ShopProductDetail, isWithoutLayout: true },
  { path: "/shop-cart", component: ShopCart, isWithoutLayout: true },
  { path: "/shop-checkouts", component: ShopCheckouts, isWithoutLayout: true },
  { path: "/shop-myaccount", component: ShopMyAccount, isWithoutLayout: true },
  { path: "/shop-blog", component: ShopBlog, isWithoutLayout: true },
  { path: "/shop-blog-detail", component: ShopBlogDetails, isWithoutLayout: true },


  //Help Center
  { path: "/helpcenter-overview", component: HelpCenterOverview, isWithoutLayout: true },
  { path: "/helpcenter-faqs", component: HelpCenterFaqs, isWithoutLayout: true },
  { path: "/helpcenter-guides", component: HelpCenterGuides, isWithoutLayout: true },
  { path: "/helpcenter-support-request", component: HelpCenterSupportRequest, isWithoutLayout: true },

  //PortFolio
  { path: "/index-portfolio", component: Portfolio, isWithoutLayout: true },
  { path: "/portfolio-modern-two", component: PageWorkModernTwo, isWithoutLayout: true },
  { path: "/portfolio-modern-three", component: PageWorkModernThree, isWithoutLayout: true },
  { path: "/portfolio-modern-four", component: PageWorkModernFour, isWithoutLayout: true },
  { path: "/portfolio-modern-five", component: PageWorkModernFive, isWithoutLayout: true },
  { path: "/portfolio-modern-six", component: PageWorkModernSix, isWithoutLayout: true },
  { path: "/portfolio-classic-two", component: PageWorkClassicTwo, isWithoutLayout: true },
  { path: "/portfolio-classic-three", component: PageWorkClassicThree, isWithoutLayout: true },
  { path: "/portfolio-classic-four", component: PageWorkClassicFour, isWithoutLayout: true },
  { path: "/portfolio-classic-five", component: PageWorkClassicFive, isWithoutLayout: true },
  { path: "/portfolio-classic-six", component: PageWorkClassicSix, isWithoutLayout: true },

  { path: "/portfolio-grid-two", component: PageWorkGridTwo, isWithoutLayout: true },
  { path: "/portfolio-grid-three", component: PageWorkGridThree, isWithoutLayout: true },
  { path: "/portfolio-grid-four", component: PageWorkGridFour, isWithoutLayout: true },
  { path: "/portfolio-grid-five", component: PageWorkGridFive, isWithoutLayout: true },
  { path: "/portfolio-grid-six", component: PageWorkGridSix, isWithoutLayout: true },

  { path: "/portfolio-masonry-two", component: PageWorkMasonryTwo, isTopbarDark: true },

  { path: "/portfolio-detail-one", component: PageWorkDetailOne, isWithoutLayout: true },
  { path: "/portfolio-detail-two", component: PageWorkDetailTwo, isWithoutLayout: true },
  { path: "/portfolio-detail-three", component: PageWorkDetailThree, isWithoutLayout: true },
  { path: "/portfolio-detail-four", component: PageWorkDetailFour, isWithoutLayout: true },

  { path: "/portfolio-about", component: PortfolioAbout, isWithoutLayout: true },
  { path: "/portfolio-service", component: PortfolioService, isWithoutLayout: true },

  { path: "/portfolio-page-masonry-two", component: PageMasonryTwo, isWithoutLayout: true },
  { path: "/portfolio-masonry-three", component: PageMasonryThree, isWithoutLayout: true },
  { path: "/portfolio-masonry-Four", component: PageMasonryFour, isWithoutLayout: true },
  { path: "/portfolio-masonry-Five", component: PageMasonryFive, isWithoutLayout: true },
  { path: "/portfolio-masonry-Six", component: PageMasonrySix, isWithoutLayout: true },

  //Contact without layout
  {
    path: "/page-contact-detail",
    component: PageContactDetail,
    isWithoutLayout: true,
    isTopbarDark: true
  },

  //Email Pages
  { path: "/email-alert", component: EmailAlert, isWithoutLayout: true },
  {
    path: "/email-password-reset",
    component: EmailPasswordReset,
    isWithoutLayout: true,
  },
  {
    path: "/email-confirmation",
    component: EmailConfirmation,
    isWithoutLayout: true,
  },
  { path: "/email-invoice", component: EmailInvoice, isWithoutLayout: true },

  //Special Pages
  {
    path: "/page-comingsoon",
    component: PageComingSoon,
    isWithoutLayout: true,
  },
  {
    path: "/page-comingsoon2",
    component: PageComingSoon2,
    isWithoutLayout: true,
  },
  { path: "/page-error", component: PageError, isWithoutLayout: true },
  { path: "/page-thankyou", component: PageThankYou, isWithoutLayout: true },
  {
    path: "/page-maintenance",
    component: PageMaintenance,
    isWithoutLayout: true,
  },

  //Demos Corporate Business
  { path: "/index-corporate", component: CorporateBusiness, isWithoutLayout: true },
  { path: "/corporate-about", component: CorporateAbout, isWithoutLayout: true },
  { path: "/corporate-services", component: CorporateServices, isWithoutLayout: true },
  { path: "/corporate-team", component: CorporateTeam, isWithoutLayout: true },
  { path: "/corporate-pricing", component: CorporatePricing, isWithoutLayout: true },
  { path: "/corporate-blog", component: CorporateBlog, isWithoutLayout: true },
  { path: "/corporate-blog-detail", component: CorporateBlogDetail, isWithoutLayout: true },

  //Page Job
  { path: "/index-job", component: Job, isWithoutLayout: true },
  { path: "/job-list-one", component: JobListone, isWithoutLayout: true },
  { path: "/job-list-two", component: JobListTwo, isWithoutLayout: true },
  { path: "/job-list-three", component: JobListThree, isWithoutLayout: true },
  { path: "/job-list-four", component: JobListFour, isWithoutLayout: true },
  { path: "/job-list-five", component: JobListFive, isWithoutLayout: true },
  { path: "/job-detail-one", component: PageJobDetail, isWithoutLayout: true },
  { path: "/job-detail-two", component: PageJobDetailTwo, isWithoutLayout: true },
  { path: "/job-detail-three", component: PageJobDetailThree, isWithoutLayout: true },
  { path: "/job-apply", component: PageJobApply, isWithoutLayout: true },
  { path: "/job-candidate-list", component: PageCandidateList, isWithoutLayout: true },
  { path: "/job-candidate", component: PageJobCandidate, isWithoutLayout: true },
  { path: "/job-company-list", component: PageCompanyList, isWithoutLayout: true },
  { path: "/job-company", component: PageJobCompany, isWithoutLayout: true },
  { path: "/job-about", component: JobAbout, isWithoutLayout: true },
  { path: "/job-price", component: JobPrice, isWithoutLayout: true },
  { path: "/job-faqs", component: JobFaq, isWithoutLayout: true },
  { path: "/auth-bs-login", component: AuthLogin, isWithoutLayout: true },
  { path: "/auth-bs-signup", component: AuthSignup, isWithoutLayout: true },
  { path: "/auth-bs-reset", component: AuthReset, isWithoutLayout: true },

  { path: "/page-job", component: PageJob, isWithoutLayout: true },
  { path: "/page-jobs-sidebar", component: PageJobsSidebar, isWithoutLayout: true },

  //User Pages
  { path: "/auth-login", component: PageLogin, isWithoutLayout: true },
  {
    path: "/auth-cover-login",
    component: PageCoverLogin,
    isWithoutLayout: true,
  },
  {
    path: "/auth-login-three",
    component: PageLoginThree,
    isWithoutLayout: true,
  },

  {
    path: "/auth-login-bg-video",
    component: PageLoginFive,
    isWithoutLayout: true,
  },

  { path: "/auth-signup", component: PageSignup, isWithoutLayout: true },
  {
    path: "/auth-cover-signup",
    component: PageCoverSignup,
    isWithoutLayout: true,
  },
  {
    path: "/auth-signup-three",
    component: PageSignupThree,
    isWithoutLayout: true,
  },

  {
    path: "/auth-signup-bg-video",
    component: PageSignupFive,
    isWithoutLayout: true,
  },

  {
    path: "/auth-re-password",
    component: PageRecoveryPassword,
    isWithoutLayout: true,
  },
  {
    path: "/auth-cover-re-password",
    component: PageCoverRePassword,
    isWithoutLayout: true,
  },
  {
    path: "/auth-re-password-three",
    component: PageRePasswordThree,
    isWithoutLayout: true,
  },

  {
    path: "/auth-reset-password-bg-video",
    component: PageResetPassFive,
    isWithoutLayout: true,
  },

  { path: "/footer-layouts", component: PageFooterLayouts },

  // Landings
  { path: "/index-onepage", component: SaasOnepage, isTopbarDark: true },
  { path: "/index-customer", component: Customer, isTopbarDark: true },

  { path: "/index-software", component: Software },
  { path: "/index-payments", component: Payments, isTopbarDark: true },
  { path: "/index-car-riding", component: IndexCarRiding, isTopbarDark: true },
  { path: "/", component: IndexclassicSaas, isTopbarDark: true },
  { path: "/index-classic-app", component: ClassicApp, isTopbarDark: true },
  { path: "/index-saas", component: Saas, isTopbarDark: true },
  { path: "/index-apps", component: Apps, isTopbarDark: true },
  { path: "/index-agency", component: Agency, isTopbarDark: true },
  { path: "/index-studio", component: Studio, isTopbarDark: true },
  { path: "/index-business", component: Business, isTopbarDark: true },
  { path: "/index-it-solution", component: ITSolution },
  { path: "/index-marketing", component: Marketing, isTopbarDark: true },
  { path: "/index-hotel", component: Hotel, isTopbarDark: true },
  { path: "/index-developer", component: Developer, isTopbarDark: true },
  { path: "/index-landing-four", component: LandingFour, isTopbarDark: true },
  { path: "/index-integration", component: Integration },
  { path: "/index-task-management", component: TaskManagement },
  { path: "/index-hospital", component: Hospital, isTopbarDark: true },
  { path: "/index-construction", component: Construction },
  { path: "/index-email-inbox", component: EmailInbox, isTopbarDark: true },
  { path: "/index-landing-one", component: LandingOne },
  { path: "/index-landing-two", component: LandingTwo, isTopbarDark: true },
  { path: "/index-landing-three", component: LandingThree },
  { path: "/index-travel", component: Travel },
  { path: "/index-real-estate", component: RealEstate },
  { path: "/index-seo-agency", component: SeoAgency, isTopbarDark: true },
  { path: "/index-modern-business", component: ModernBusiness },
  { path: "/index-coworking", component: Coworking },
  { path: "/index-event", component: Event },
  { path: "/index-course", component: Course },
  { path: "/index-personal", component: Personal, isTopbarDark: true },
  { path: "/index-single-product", component: SingleProduct, isTopbarDark: true },
  { path: "/index-enterprise", component: Enterprise },
  { path: "/index-services", component: Services, isTopbarDark: true },
  { path: "/index-insurance", component: Insurance },
  { path: "/index-ebook", component: Ebook, isTopbarDark: true },
  { path: "/index-social-marketing", component: SocialMarketing, isTopbarDark: true },
  { path: "/index-digital-agency", component: DigitalAgency, isTopbarDark: true },
  { path: "/index-online-learning", component: OnlineLearning, isTopbarDark: true },
  { path: "/index-finance", component: Finance, isTopbarDark: true },
  { path: "/index-logistics", component: Logistics, isTopbarDark: false },
  { path: "/index-videocall", component: VideoCall, isTopbarDark: true },
  { path: "/index-it-solution-two", component: iTSolutionTwo },
  { path: "/index-freelancer", component: Freelancer, isTopbarDark: true },
  { path: "/index-blockchain", component: Blockchain },
  { path: "/index-crypto-two", component: CryptoTwo },

  { path: "/page-aboutus", component: PageAboutUs, isTopbarDark: true },
  { path: "/page-aboutus-two", component: PageAboutusTwo },
  { path: "/page-history", component: PageHistory, isTopbarDark: true },
  { path: "/page-pricing", component: PagePricing, isTopbarDark: true },
  { path: "/page-services", component: PageServices, isTopbarDark: true },
  { path: "/page-team", component: PageTeam, isTopbarDark: true },

  //Utility
  { path: "/page-terms", component: PageTerms, isTopbarDark: true },
  { path: "/page-privacy", component: PagePrivacy, isTopbarDark: true },

  //Page Profile
  { path: "/page-profile", component: PageProfile },
  { path: "/page-members", component: PageMembers },
  { path: "/page-works", component: PageWorks },
  { path: "/page-messages", component: PageMessages },
  { path: "/page-profile-edit", component: PageProfileEdit },
  { path: "/page-payments", component: PagePayments },
  { path: "/page-invoice", component: PageInvoice, isTopbarDark: true },
  { path: "/page-chat", component: PageChat },

  //Page Blog
  { path: "/page-blog-grid", component: PageBlog, isTopbarDark: true },
  { path: "/page-blog-detail", component: PageBlogDetail, isTopbarDark: true },
  { path: "/page-blog-detail-two", component: PageBlogDetailTwo },
  { path: "/page-blog-sidebar", component: PageBlogSidebar, isTopbarDark: true },
  { path: "/page-blog-list", component: PageBlogList, isTopbarDark: true },
  { path: "/page-blog-list-sidebar", component: PageBlogListSidebar, isTopbarDark: true },

  //Page Case Study
  { path: "/page-all-cases", component: AllCases },
  { path: "/page-case-detail", component: CaseDetail, isTopbarDark: true },

  //course-detail
  { path: "/page-course-detail", component: CourseDetail },

  //Page Contact
  { path: "/page-contact-one", component: PageContactOne, isTopbarDark: true },
  { path: "/page-contact-three", component: PageContactThree, isTopbarDark: true },
  { path: "/page-contact-two", component: PageContactTwo, isTopbarDark: true },

  // forums
  { path: "/forums", component: Overview, isTopbarDark: true },
  { path: "/forums-topic", component: ForumTopic, isTopbarDark: true },
  { path: "/forums-comments", component: ForumsComments, isTopbarDark: true },

  //Components
  { path: "/ui-button", component: Buttons, isTopbarDark: true },
  { path: "/ui-badges", component: Badges, isTopbarDark: true },
  { path: "/ui-alert", component: Alerts, isTopbarDark: true },
  { path: "/ui-dropdown", component: Dropdowns, isTopbarDark: true },
  { path: "/ui-typography", component: Typography, isTopbarDark: true },
  { path: "/ui-background", component: Background, isTopbarDark: true },
  { path: "/ui-text", component: TextColors, isTopbarDark: true },
  { path: "/ui-accordion", component: Accordions, isTopbarDark: true },
  { path: "/ui-shadow", component: BoxShadows, isTopbarDark: true },
  { path: "/ui-border", component: Borders, isTopbarDark: true },
  { path: "/ui-carousel", component: Carousel, isTopbarDark: true },
  { path: "/ui-lightbox", component: Lightbox, isTopbarDark: true },
  { path: "/ui-tooltip-popover", component: Tooltips, isTopbarDark: true },
  { path: "/ui-card", component: Cards, isTopbarDark: true },
  { path: "/ui-form", component: Forms, isTopbarDark: true },
  { path: "/ui-breadcrumb", component: Breadcrumbs, isTopbarDark: true },
  { path: "/ui-Pagination", component: Paginations, isTopbarDark: true },
  { path: "/ui-avatar", component: Avatar, isTopbarDark: true },
  { path: "/ui-nav-tabs", component: NavTabs, isTopbarDark: true },
  { path: "/ui-modals", component: Modals, isTopbarDark: true },
  { path: "/ui-tables", component: Tables, isTopbarDark: true },
  { path: "/ui-icons", component: Icons, isTopbarDark: true },
  { path: "/ui-progressbar", component: Progressbar, isTopbarDark: true },

  //Docs
  { path: "/changelog", component: ChangeLog, isTopbarDark: true },
  { path: "/documentation", component: Documentation, isTopbarDark: true },
  { path: "/widget", component: Widget, isTopbarDark: true },

  //Index Main
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/index-classic-saas" />,
  },
  { path: "/", component: IndexclassicSaas, isTopbarDark: true },
];

export default routes;
