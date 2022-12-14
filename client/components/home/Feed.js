import {useEffect,useState,useContext} from 'react'
import {TwitterContext} from '../../context/TwitterContext'
import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'



const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll scrollbar-hide`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

function Feed() {
    const { tweets } = useContext(TwitterContext)
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>
                    Feed
                </div>
                <BsStars/>
            </div>
            <TweetBox/>
            {tweets.map((tweet,index) => (
                <Post
                    key={index}
                    DisplayName={
                    tweet.author.name === 'Unnamed'
                        ? `${tweet.author.walletAddress.slice(
                        0,
                        4,
                        )}...${tweet.author.walletAddress.slice(41)}`
                        : tweet.author.name
                    }
                    UserName={`${tweet.author.walletAddress.slice(0,4)}...${tweet.author.walletAddress.slice(-4)}`}
                    avatar={tweet.author.profileImage}
                    text={tweet.tweet}
                    IsProfileImageNft={tweet.IsProfileImageNft}
                    timestamp={tweet.timestamp}
                />
            ))}
        </div>
    )
}

export default Feed