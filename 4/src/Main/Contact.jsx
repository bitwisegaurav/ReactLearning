export default function Contact() {
  return (
    <div className="isolate text-slate-200 px-6 py-2 lg:px-8 overflow-y-scroll w-5/6">
  <div className="mx-auto max-w-2xl  text-center">
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
  </div>
  <form action="#" method="POST" className="mx-auto mt-6 max-w-xl">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="first-name" className="block text-sm font-semibold leading-6">First name</label>
        <div className="mt-2.5">
          <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm bg-slate-200 text-slate-800 focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm font-semibold leading-6">Last name</label>
        <div className="mt-2.5">
          <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm  bg-slate-200 text-slate-800 focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-semibold leading-6">Email</label>
        <div className="mt-2.5">
          <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm  bg-slate-200 text-slate-800 focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold leading-6">Message</label>
        <div className="mt-2.5">
          <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm text-slate-800 bg-slate-200 focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">Lets talk</button>
    </div>
  </form>
</div>
  )
}