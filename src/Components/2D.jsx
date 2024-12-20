import profilePic from '../assets/a.jpg'
import Button from './ButtonD'

function Card1() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Ambatukam</h2>
            <p className="card-text">Tools collector</p>
            <a className='text' href='https://cdn.discordapp.com/attachments/1290660645695520808/1299488668339277884/Ambatukam.exe?ex=6724a2e1&is=67235161&hm=b565490c0290e3f8de3bbe03fc6d2a2c20648c97e6ae0c0c7ce3d0b98b295d72&'>Download</a>
        </div>
    );
}
export default Card1;