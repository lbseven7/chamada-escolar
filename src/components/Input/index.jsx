function Input({
  placeholder, type, width, height, img1, img2, onclick,
  // Os dados do tipo width, height dever ser do no formato string ex: width="250px".
  // Os dados do tipo img2 deve estar no formato ternário
  // ex: img2={imageState ? image1 : image2}.
}) {
  return (
    <label
      htmlFor="input"
      className="flex bg-primary-bg rounded-full w-fit"
      style={{ width, height, minWidth: width }}
    >
      <div className="w-[15%] flex justify-center items-center">
        <img src={img1} alt="img" className="w-6" />
      </div>
      <input
        type={type}
        id="input"
        placeholder={placeholder}
        className="bg-primary-bg w-[65%] outline-none text-sm"
      />
      {img2
      && (
        <button
          type="button"
          onClick={onclick}
          className="w-[15%] flex justify-center items-center cursor-pointer"
        >
          <img src={img2} alt="img" className="rounded-full w-10" />
        </button>
      )}
    </label>
  );
}

export default Input;
