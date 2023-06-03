function Input({
  placeholder, type, width, height, imgage, conditionalImage, onclick,
  // Os dados do tipo width, height dever ser do no formato string ex: width="250px".
  // Os dados do tipo conditionalImage deve estar no formato ternário
  // ex: conditionalImage={imageState ? image1 : image2}.
}) {
  return (
    <label
      htmlFor={placeholder}
      className="flex bg-primary-bg rounded-full w-fit justify-start"
      style={{ width, height, minWidth: width }}
    >
      {imgage && (
        <div className="w-8 flex justify-center items-center ml-2">
          <img src={imgage} alt="img" className="w-5" />
        </div>
      )}
      <input
        type={type}
        id={placeholder}
        placeholder={placeholder}
        className="bg-primary-bg w-[100%] outline-none text-sm rounded-full p-3"
      />
      {conditionalImage
      && (
        <button
          type="button"
          onClick={onclick}
          className="w-14 flex justify-center items-center cursor-pointer mr-2"
        >
          <img src={conditionalImage} alt="img" className="rounded-full w-full" />
        </button>
      )}
    </label>
  );
}

export default Input;
