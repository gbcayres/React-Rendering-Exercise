import '../card.css'

function Card({ username, email, password, job }) {
    return (
        <div className="card">
            <div>
                <p className="info_label">Username:</p>
                <p className="info">{username}</p>
            </div>
            <div>
                <p className="info_label">Email:</p>
                <p className="info">{email}</p>
            </div>
            <div>
                <p className="info_label">Password:</p>
                <p className="info">{password}</p>
            </div>
            <div>
                <p className="info_label">Job:</p>
                <p className="info">{job}</p>
            </div>
        </div>
    )
}

export default Card