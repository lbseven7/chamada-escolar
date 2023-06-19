function Button({
  children, classname, onclick, path,
}) {
  return (
    <button
      type="submit"
      className={classname}
      onClick={() => onclick(path)}
    >
      {children}
    </button>
  );
}

export default Button;
