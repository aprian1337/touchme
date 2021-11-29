export default function header() {
  return (
    <div>
      <nav className="bg-red-500">
        {/* <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">h2</div> */}
        <div className="text-center p-6">
          <h1 className="text-5xl text-white font-bold">./ROOT</h1>
          <a className="text-white" href="#">
            Logout
          </a>
        </div>
      </nav>
    </div>
  );
}
