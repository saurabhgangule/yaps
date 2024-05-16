import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='shortcut icon' href='/logo.svg' type='image/x-icon' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          href='https://vjs.zencdn.net/8.5.2/video-js.css'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://unicons.iconscout.com/release/v4.0.0/css/unicons.css'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Outfit:wght@300;500&display=swap'
          rel='stylesheet'
        />
        <script
            type="text/javascript"
            data-cfasync="false"
            dangerouslySetInnerHTML={{
              __html: `/*<![CDATA[/* */
              (function(){var q=window,x="a43e9fa46b8a0f69693350e9a1d6dff8",j=[["siteId",178+673*789+4385809],["minBid",0.12],["popundersPerIP","10,10"],["delayBetween",3],["default","https://freeanimesfull.xyz"],["defaultPerDay",1000],["topmostLayer","auto"]],y=["d3d3LmNkbjRhZHMuY29tL1dDVUptYy9yZmxvYXRsYWJlbHMubWluLmpz","ZDNnNW92Zm5nanc5YncuY2xvdWRmcm9udC5uZXQvc1MvZm1WUy9zZHJvcC5taW4uY3Nz"],c=-1,p,h,s=function(){clearTimeout(h);c++;if(y[c]&&!(1741791419000<(new Date).getTime()&&1<c)){p=q.document.createElement("script");p.type="text/javascript";p.async=!0;var m=q.document.getElementsByTagName("script")[0];p.src="https://"+atob(y[c]);p.crossOrigin="anonymous";p.onerror=s;p.onload=function(){clearTimeout(h);q[x.slice(0,16)+x.slice(0,16)]||s()};h=setTimeout(s,5E3);m.parentNode.insertBefore(p,m)}};if(!q[x]){try{Object.freeze(q[x]=j)}catch(e){}s()}})();
              /*]]>/* */`,
            }}
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
