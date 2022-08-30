import ProfileOrderHistoryItem from "./ProfileOrderHistoryItem"

const ProfileOrderHistory = ({translations=[]}) =>{

   const wordsHistory = translations?.map((word,index) => <ProfileOrderHistoryItem key={index + "-" + word} word={word}/>)
    return (
        <ul>{wordsHistory}</ul>
    )
}
export default ProfileOrderHistory