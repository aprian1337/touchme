export default function header(props: any) {
  return (
    <div>
      <nav className="bg-red-500">
        <div className="text-center p-6">
          <h1 className="text-5xl text-white font-bold">./ROOT</h1>
          <a className="text-white" href="#" onClick={props.handleLogout}>
            Logout
          </a>
        </div>
      </nav>
    </div>
  );
}
