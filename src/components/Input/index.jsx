function Input({
  placeholder, type, width, height, img1, img2, onclick,
  // Os dados do tipo width, height dever ser do no formato string ex: width="250px".
  // Os dados do tipo img2 deve estar no formato ternário
  // ex: img2={imageState ? image1 : image2}.
}) {
  return (
    <label
      htmlFor="input"
      className="flex bg-primary-bg rounded-full w-fit justify-evenly"
      style={{ width, height, minWidth: width }}
    >
      {img1 && (
        <div className="w-[10%] flex justify-center items-center ml-2">
          <img src={img1} alt="img" className="w-6" />
        </div>
      )}
      <input
        type={type}
        id="input"
        placeholder={placeholder}
        className="bg-primary-bg w-[100%] outline-none text-sm rounded-full p-3"
      />
      {img2
      && (
        <button
          type="button"
          onClick={onclick}
          className="w-[18%] flex justify-center items-center cursor-pointer mr-3"
        >
          <img src={img2} alt="img" className="rounded-full w-full" />
        </button>
      )}
    </label>
  );
}

export default Input;
