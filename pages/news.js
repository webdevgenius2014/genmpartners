// pages/dashboard.js
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import EmptyCard from '../components/EmptyCard'
import styles from '../styles/Home.module.css';
//import '../styles/global.css'
import 'tailwindcss/tailwind.css';
import { Button, Alert } from "@material-tailwind/react";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function Dashboard({ darkMode, toggleDarkMode }) {



  return (
    <>
      <Head>
        <title>Gen M Partners</title>
      </Head>
      <div className={`${darkMode ? 'dark' : ''} genMMain`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pt-10">
                <h1 className="text-3xl font-semibold text-center mb-8">News</h1>
                <p>Follow us at @genmpartners</p>
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="genmpartners"
                options={{height: 400}}
                />
                <a href="https://cryptopanic.com/" target="_blank" data-news_feed="recent" data-bg_color="#FFFFFF" data-text_color="#333333" data-link_color="#0091C2" data-header_bg_color="#30343B" data-header_text_color="#FFFFFF" data-currencies="XRP" class="CryptoPanicWidget">Latest News</a>
<script src="https://static.cryptopanic.com/static/js/widgets.min.js"></script>
              
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
