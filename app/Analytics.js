'use client';

import { Analytics } from '@vercel/analytics/react';

function AnalyticsWrapper() {
  return (
  <>

  <Analytics />

  <script strategy="lazyOnload" src={'https://www.googletagmanager.com/gtag/js?id=G-DMN03FGPWF'} />

<script strategy="lazyOnload">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DMN03FGPWF'}', {
        page_path: window.location.pathname,
        });
    `}
</script>
  </>
  );
}

export default AnalyticsWrapper;
