import React, { forwardRef, memo } from 'react';

const Input = forwardRef(
  (
    {
      placeholder,
      type,
      width,
      height,
      image, conditionalImage, onClick, register, // Corrigido de 'onclick' para 'onClick'
    },
    ref,
  ) => (
    <label
      htmlFor={placeholder}
      className="flex bg-primary-bg rounded w-fit justify-start"
      style={{ width, height, minWidth: width }}
    >
      {image && (
        <div className="w-8 flex justify-center items-center ml-2">
          <img src={image} alt="img" className="w-5" />
        </div>
      )}
      <input
        type={type}
        id={placeholder}
        placeholder={placeholder}
        ref={ref}
        {...register}
        autoComplete="off"
        className="bg-primary-bg w-[100%] outline-none text-sm rounded-full p-3"
      />
      {conditionalImage && (
        <button
          type="button"
          onClick={onClick} // Corrigido de 'onclick' para 'onClick'
          className="w-14 flex justify-center items-center cursor-pointer mr-2"
        >
          <img
            src={conditionalImage}
            alt="img"
            className="w-full"
          />
        </button>
      )}
    </label>
  ),
);

const MemoizedInput = memo(Input);

export default forwardRef((props, ref) => <MemoizedInput {...props} ref={ref} />);
