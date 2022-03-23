import { useRouter } from "next/router"
import useSWR from 'swr'

const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const API_KEY = '940b46cd1ee7213b55c2b72f2e0d3acf';

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
}

function Nav() {
    const router = useRouter();

    const { data, error } = useSWR(
        () => `${BASE_URL}?api_key=${API_KEY}&language=ko`, fetcher
    )
    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap
            space-x-10 sm:space-x-20">
                {data.genres.map((menu, index) => index < 5 && (
                    <h2 key={menu.id}
                        onClick={
                            () => router.push(`/?menu=${menu.id}`, '/')
                        }
                        className="last:pr-24 cursor-pointer transition 
                        duration-100 transform hover:scale-125 hover:text-white 
                        active:text-red-500"
                    >{menu.name}
                    </h2>
                ))}
            </div>
        </nav>
    )
}

export default Nav