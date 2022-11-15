import {useEffect,useContext,useState} from 'react'
import {TwitterContext} from '../../context/TwitterContext'
import Post from '../Post'

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}



const ProfileTweets = () => {
    const {currentAccount,currentUser} = useContext(TwitterContext)
return (
    <div className={style.wrapper}>
        {
            currentUser.tweets?.map((tweet,index) => (
                <Post
                    key={index}
                    DisplayName={
                        currentUser.name === 'Unnamed'
                        ? `${currentAccount.slice(
                        0,
                        4,
                        )}...${currentAccount.slice(41)}`
                        : currentUser.name
                    }
                    UserName={`${currentAccount.slice(0,4)}...${currentAccount.slice(-4)}`}
                    avatar={currentUser.profileImage}
                    text={tweet.tweet}
                    IsProfileImageNft={tweet.IsProfileImageNft}
                    timestamp={tweet.timestamp}
                />
            ))
        }
    </div>
)
}

export default ProfileTweets