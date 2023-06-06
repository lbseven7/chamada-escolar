import logo from '../../images/logo/logo_redonda.png';

function Loading() {
  return (
    <main
      className="
      w-full
      h-screen
      bg-secundary-bg
      flex
      justify-center
      items-center
      "
    >
      <img className="animate-bounce" src={logo} alt="logo" />
    </main>
  );
}

export default Loading;
