import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FaRegComment, FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'
import { useState } from 'react'


const style = {
    wrapper: `flex p-3 border-b border-[#38444d]`,
    profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
    postMain: `flex-1 px-4`,
    headerDetails: `flex items-center`,
    name: `font-bold mr-1`,
    verified: `text-[0.8rem]`,
    handleAndTimeAgo: `text-[#8899a6] ml-1`,
    tweet: `my-2`,
    image: `rounded-3xl`,
    footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
    footerIcon: `rounded-full text-lg p-2`,
}

const Post = ({
    displayName,
    userName,
    text,
    avatar,
    timestamp,
    isProfileImageNft,
}) => {
return (
    <div className={style.wrapper}>
        <div>
        <div>
        <img
        src={avatar}
        alt={userName}
        className={
            isProfileImageNft
            ? `${style.profileImage}  smallHex`
            : style.profileImage
        }
        />
    </div>
        </div>
    </div>
)
}

export default Post