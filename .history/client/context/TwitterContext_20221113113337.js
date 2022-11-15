import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {} from '../'

export const TwitterContext = createContext()

export const TwitterProvider = ({ children }) => {
    const [appStatus, setAppStatus] = useState('loading')
    const [currentAccount, setCurrentAccount] = useState('')
    const [currentUser, setCurrentUser] = useState({})
    const [tweets, setTweets] = useState([])
    const router = useRouter()


    useEffect(() => {
        checkIfWalletIsConnected()
    }, [])
    



    const checkIfWalletIsConnected = async () => {
        if(!window.ethereum) return setAppStatus('noMetaMask')
        try{
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            })
            if(addressArray.length > 0){
                //connected
                setAppStatus('connected')
                setCurrentAccount(addressArray[0])
            }else{
                //not connected
                router.push('/')
                setAppStatus('notConnected')
            }
        }catch(error){
            console.log(error)
        }
    }

    //metamask connection

    const connectToWallet = async () => {
        if (!window.ethereum) return setAppStatus('noMetaMask')
        try {
            setAppStatus('loading')
            const addressArray = await window.ethereum.request({
                method: 'eth_requestAccounts'
            })
            if(addressArray.length > 0){
                setAppStatus('connected')
                setCurrentAccount(addressArray[0])
            }else{
                router.push('/')
                setAppStatus('notConnected')
            }
        } catch (error) {
            setAppStatus('error')
        }
    }

    const createUserAccount = async (userWalletAddress = currentAccount) => {
        if (!window.ethereum) return setAppStatus('noMetaMask')
        try {
            const userDoc = {}
        } catch (error) {
            router.push('/')
            setAppStatus('error')
        }
    }

    return (
        <TwitterContext.Provider value={{appStatus,currentAccount,connectToWallet}}>
            {children}
        </TwitterContext.Provider>
    )
}