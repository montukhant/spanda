import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="no-js" lang="en">
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="theme-color" content="#FC3C59" />
        <meta name="msapplication-navbutton-color" content="#00040B" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#00040B" />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.ico" />

        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/fonts/bootstrap-icons/font-css.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/metisMenu.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/spacing.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </Head>
      <body>
        <Main />
        <NextScript />

        <script src="/assets/js/vendor/jquery-2.2.4.min.js"></script>
        <script src="/assets/js/vendor/popper.min.js"></script>
        <script src="/assets/js/vendor/bootstrap.min.js"></script>
        <script src="/assets/js/jquery.meanmenu.js"></script>
        <script src="/assets/js/swiper-bundle.min.js"></script>
        <script src="/assets/js/slick.min.js"></script>
        <script src="/assets/js/jquery.easypiechart.min.js"></script>
        <script src="/assets/js/jquery.counterup.min.js"></script>
        <script src="/assets/js/jquery.magnific-popup.min.js"></script>
        <script src="/assets/js/metisMenu.min.js"></script>
        <script src="/assets/js/wow.min.js"></script>
        <script src="/assets/js/jquery.waypoints.min.js"></script>
        <script src="/assets/js/aos.js"></script>
        <script src="/assets/js/jquery.nice-select.min.js"></script>
        <script src="/assets/js/jquery-ui.js"></script>
        <script src="/assets/js/jquery.scrollUp.min.js"></script>
        <script src="/assets/js/plugins.js"></script>
        <script src="/assets/js/main.js"></script>
      </body>
    </Html>
  );
}
