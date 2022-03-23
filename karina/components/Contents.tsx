import Image from "next/image"

function Contents({ contents }) {

    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    return (
        <div>
            <br></br>
            {contents.map(result => (
                <Image
                layout="responsive"
                src={
                    `${BASE_URL}${result.backdrop_path || result.poster_path}`
                }
                height={360}
                width={640}
            />
            ))}

        </div>
    )
}

export default Contents