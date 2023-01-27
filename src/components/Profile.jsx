import '../styles/Profile.css'
const Profile = ({user})=>{
    return(
        <div className="profile">
            <h1>Profile</h1>
            <div className='welcome-profile'>
                <img className="img-profile" src={user.img} alt={user.name} />
                <div className="welcome-name">
                    <p>Hello</p>
                    <h2 className="name-profile">{user.name} {user.lastName}</h2>
                </div>
            </div>
            <div className="div-profile">
                <h2>Datos Personales</h2>
                <div className="personal-date">
                    <div className='name-profile'>
                        <p>Name</p>
                        <input type="text" value={user.name} placeholder="Name" />
                    </div>
                    <div className='name-profile'>
                        <p>Last Name</p>
                        <input type="text" value={user.lastName} placeholder="Name" />
                    </div>
                    <div className='name-profile'>
                        <p>Year</p>
                        <input type="text" value={user.year} placeholder="Name" />
                    </div>
                    <div className='name-profile'>
                        <p>email</p>
                        <input type="text" value={user.email} placeholder="Name" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile