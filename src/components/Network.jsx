import { external } from "../assets";

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
            img: "https://media.licdn.com/dms/image/v2/D4E03AQEFZttAv1bs8A/profile-displayphoto-crop_800_800/B4EZ8WkdDyHoAI-/0/1782790085949?e=1788393600&v=beta&t=LX6v5QorpmrFacI1iLH9hLwZAlkhYB78qrG5bXLWytY"
        },
        {
            name: "Jack Preston",
            link: "https://www.jackpreston.me/",
            img: "https://media.licdn.com/dms/image/v2/D4E03AQED7r6l8kDZlQ/profile-displayphoto-shrink_200_200/B4EZU08q7_HgAc-/0/1740350075167?e=2147483647&v=beta&t=iQSDcf_bGxXjmwizQLwxMXagulLzweZIA-VttXXT-Bs"
        },
        {
            name: "Sam Richell-Smith",
            link: "https://www.samrichellsmith.com/",
            img: "https://media.licdn.com/dms/image/v2/D4E03AQEXd9t4SuD1jA/profile-displayphoto-scale_200_200/B4EZy7dSqYHgAc-/0/1772671544698?e=2147483647&v=beta&t=NWblHupKs6I-utpluvnXF9k7UBnC7xOvrsVDzR08i7w"
        },
        {
            name: "Mikai Somerville",
            link: "https://www.mikaisomerville.com/",
            img: "https://media.licdn.com/dms/image/v2/D5603AQGaGFmU7_uJYg/profile-displayphoto-shrink_200_200/B56ZTAJNKTHQAY-/0/1738390426980?e=2147483647&v=beta&t=5WzUq3DvYyDK9b1wBQYMjYadUZzWSrYTDrKoA-W6tpQ"
        }
    ];

    return (
        <div id="network" className="text-center text-white flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold pb-16">Grateful to my friends. Go check them out!</h2>
            <div className="flex flex-wrap gap-16 justify-evenly p-4">
                {friends.map((friend, index) => (
                    <div key={index} className="friend">
                        <img className="friend-img" src={friend.img} alt={friend.name} />
                        <a href={friend.link} target="_blank" rel="noopener noreferrer">
                            <div className="flex flex-col sm:flex-row items-center gap-1 justify-center friend-overlay">
                                <p className="break-words opacity-80 hover:opacity-100 hover:underline hover:cursor-pointer max-w-[120px] sm:max-w-[150px] text-center leading-tight">{friend.name}</p>
                                <img src={external} alt="Link icon" className="w-4 h-4 flex-shrink-0" />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
