export default function Network() {
    const friends = [
        {
            name: "Nicholas Garcia-Scholtz",
            link: "https://nicholasgarciascholtz.com/",
            img: "https://nicholasgarciascholtz.com/assets/PFP-CdJPYQEa.jpeg"
        },
        {
            name: "Carson May",
            link: "https://cjmay.netlify.app/",
            img: "https://media.licdn.com/dms/image/v2/D4E03AQGCI105tMc1uA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1665810459887?e=2147483647&v=beta&t=zFU43ys5P0WHYmtjDu_5peAkIODFxRV3Lfc-Rswc1z8"
        },
        {
            name: "Sam Richell-Smith",
            link: "https://www.samrichellsmith.com/",
            img: "https://media.licdn.com/dms/image/v2/D5603AQGTqD_IyvrhZA/profile-displayphoto-shrink_200_200/B56ZSXJx0hHoAY-/0/1737702711032?e=2147483647&v=beta&t=MuI6ADdR9FM3X_x7NjtCh91z0wqqJKUknnoay9qxf6E"
        },
        {
            name: "Mikai Somerville",
            link: "https://www.mikaisomerville.com/",
            img: "https://media.licdn.com/dms/image/v2/D5603AQGaGFmU7_uJYg/profile-displayphoto-shrink_200_200/B56ZTAJNKTHQAY-/0/1738390426980?e=2147483647&v=beta&t=5WzUq3DvYyDK9b1wBQYMjYadUZzWSrYTDrKoA-W6tpQ"
        }
    ];

    return (
        <div id="network" className="network">
            <h2 className="network-title">Grateful to my friends. Go check them out!</h2>
            <div className="friends">
                {friends.map((friend, index) => (
                    <div key={index} className="friend">
                        <img className="friend-img" src={friend.img} alt={friend.name} />
                        <a href={friend.link} target="_blank" rel="noopener noreferrer">
                            <div className="friend-overlay">
                                <p className="friend-name">{friend.name}</p>
                                <img className="friend-icon" src="src/assets/external.png" alt="Link icon" />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
