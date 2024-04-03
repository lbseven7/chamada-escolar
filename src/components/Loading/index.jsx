import logo from '../../images/logo/logo_redonda.png';

function Loading() {
  return (
    <div
      className="
      fixed inset-0 z-50 flex items-center justify-center bg-secundary-bg h-screen
      "
    >
      <img className="animate-bounce sm:w-24 md:w-36 xl:w-72" src={logo} alt="logo" />
    </div>
  );
}

export default Loading;
