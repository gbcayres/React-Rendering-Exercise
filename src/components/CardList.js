import Card from "./Card";

function CardList({users}) {
    return (
        <>
            {
                users.length > 0 ?
                    (
                        users.map((user) => {
                            return <Card 
                                username={user.username}
                                email={user.email}
                                password={user.password}
                                job={user.job}
                            />
                        })
                    ) : (
                    console.log('hi')
                )
            }
        </>
    )
}

export default CardList