import profilePic from '../assets/a.jpg'
import Button from './ButtonD'

function Card1() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Ambatukam</h2>
            <p className="card-text">Tools collector</p>
            <a className='text' href='https://cdn.discordapp.com/attachments/1290660645695520808/1299488668339277884/Ambatukam.exe?ex=67668de1&is=67653c61&hm=448c03fa13c4fee7f53393ddf5c88e8a6c5f0e7f6652aeb4407f8d1ddac152ee&'>Download</a>
        </div>
    );
}
export default Card1;