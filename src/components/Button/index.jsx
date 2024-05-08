function Button({
  children, classname, onclick, path,
}) {
  return (
    <button
      type="submit"
      className={classname}
      onClick={onclick ? () => onclick(path) : null}
    >
      {children}
    </button>
  );
}

export default Button;
