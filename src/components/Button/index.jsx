function Button({
  children, classname, onClick, path,
}) {
  return (
    <button
      type="submit"
      className={classname}
      onClick={() => onClick(path)}
    >
      {children}
    </button>
  );
}

export default Button;
