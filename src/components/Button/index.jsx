function Button({
  children, classname,
}) {
  return (
    <button
      type="submit"
      className={classname}
    >
      {children}
    </button>
  );
}

export default Button;
