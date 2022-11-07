import {useEffect,useState} from 'react'
import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'


const tweets =[
    {
        DisplayName:"binto",
        UserName:"0xcvdb245nas678hihifj576jsbskjd7",
        avatar:"https://avatars.githubusercontent.com/u/70394879?v=4",
        text:"Hola",
        IsProfileImageNft:false,
        timestamp:'2021-11-05T01:28:00.000Z'
    },
    {
        DisplayName:"binto",
        UserName:"0xcvdb245nas678hihifj576jsbskjd7",
        avatar:"https://avatars.githubusercontent.com/u/70394879?v=4",
        text:"Hola",
        IsProfileImageNft:false,
        timestamp:'2022-11-05T01:28:00.000Z'
    },
    {
        DisplayName:"binto",
        UserName:"0xcvdb245nas678hihifj576jsbskjd7",
        avatar:"https://avatars.githubusercontent.com/u/70394879?v=4",
        text:"Hola",
        IsProfileImageNft:false,
        timestamp:'2022-11-05T01:28:00.000Z'
    },
    {
        DisplayName:"binto",
        UserName:"0xcvdb245nas678hihifj576jsbskjd7",
        avatar:"https://avatars.githubusercontent.com/u/70394879?v=4",
        text:"Hola",
        IsProfileImageNft:false,
        timestamp:'2022-11-05T01:28:00.000Z'
    },
    {
        DisplayName:"binto",
        UserName:"0xcvdb245nas678hihifj576jsbskjd7",
        avatar:"https://avatars.githubusercontent.com/u/70394879?v=4",
        text:"Hola",
        IsProfileImageNft:false,
        timestamp:'2022-11-05T01:28:00.000Z'
    },
    {
        DisplayName:"binto",
        UserName:"0xcvdb245nas678hihifj576jsbskjd7",
        avatar:"https://avatars.githubusercontent.com/u/70394879?v=4",
        text:"Hola",
        IsProfileImageNft:false,
        timestamp:'2022-11-05T01:28:00.000Z'
    },
]

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll `,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

function Feed() {
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
                DisplayName={tweet.DisplayName}
                UserName={`${tweet.UserName.slice(0,4)}...${tweet.UserName.slice(-4)}`}
                avatar={tweet.avatar}
                text={tweet.text}
                IsProfileImageNft={tweet.IsProfileImageNft}
                timestamp={tweet.timestamp}
            />
        ))}
    </div>
)
}

export default Feed