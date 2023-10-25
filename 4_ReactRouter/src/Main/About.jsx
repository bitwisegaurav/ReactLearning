import { useCallback, useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';

export default function About() {
    const [data, setData] = useState([]);
    // const loaderData = useLoaderData();
    const fetchData = useCallback(() => {
        fetch('https://api.github.com/users/bitwisegaurav')
        .then(res => res.json()).then(res => setData(res))
    }, [])
    useEffect(() => {
        fetchData();
        // console.log(loaderData);
    })
  return (
    <>
    <h1 className='text-5xl mt-5 mb-16 tracking-wider'>Github</h1>
    <div className='w-full flex items-center justify-around flex-wrap gap-10'>
        <div className="left h-60 rounded-lg overflow-hidden">
            <img src={data.avatar_url} alt="Image" className='h-full'/>
        </div>
        <div className="right w-full max-w-xl flex justify-between gap-24 text-xl tracking-wider column-2">
            <div className='grid gap-5'>
                <div className="name">Name : 
                    <span className='ml-4 text-indigo-300'>{data.name}</span>
                </div>
                <div className="followers">Followers : 
                    <span className='ml-4 text-indigo-300'>{data.followers}</span>
                </div>
                <div className="following">Following : 
                    <span className='ml-4 text-indigo-300'>{data.following}</span>
                </div>
            </div>
            <div className='flex flex-col items-start gap-3'>
                <div className="bio">Bio : 
                    <span className='ml-4 text-indigo-300'>{data.bio}</span>
                </div>
                <div className="repos">Public Repos : 
                    <span className='ml-4 text-indigo-300'>{data.public_repos}</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

// export const githubInfo = async () => {
//     const response = await fetch('https://api.github.com/users/bitwisegaurav');
//     console.log("something")
//     return response.json();
// };
