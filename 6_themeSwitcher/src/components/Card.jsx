
export default function Card() {
    return (
        <div className="flex flex-col justify-center items-center w-max px-16 py-6 bg-slate-100 rounded-xl gap-6 light:shadow-2xl dark:bg-slate-800 dark:text-slate-300">
            <div className="h-40">
                    <img src="https://avatars.githubusercontent.com/u/104730811?v=4" alt="Image" className="h-full rounded-xl" />
            </div>
            <p>
                <p>Gaurav Mishra</p>
                <p>Full Stack Developer</p>
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white dark:bg-slate-300 dark:text-slate-800 rounded-lg">More about me</button>
        </div>
    );
}
