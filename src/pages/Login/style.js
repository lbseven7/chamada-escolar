export const container = `
  flex
  flex-col
  items-center
  w-full
  h-screen
  space-y-4
  md:flex-row
  md:h-screen
  md:space-y-0
`;

export const containerImage = `
  bg-secundary-bg
  w-full
  h-64
  flex
  justify-center
  items-center
  rounded-bl-[70px]
  rounded-br-[70px]
  md:rounded-none
  md:h-full
  md:w-[50%]
`;
export const image = `
  w-48
  h-48
  md:h-[200px]
  md:w-[200px]
`;
export const containerForm = `
  flex
  text-start
  flex-col
  w-[80%]
  h-[350px]
  space-y-4
  md:items-center
  md:w-[50%]
`;
export const titleStyle = `
  font-bold
  text-2xl
  text-btn-color
  mt-6
  md:w-auto
  md:mr-[140px]
  `;
export const formStyle = `
  h-[90%] 
  space-y-4
  flex
  flex-col
  justify-around
  items-center
`;

export const errorStyle = 'text-error text-sm leading-3';

export const wrapperInputLink = `
  flex
  justify-around
  items-center
  gap-2
`;

export const labelStyle = `
  text-sm
  text-secundary-bg
  font-bold
`;

export const linkStyle = `
  text-sm
  text-secundary-bg
  font-bold
`;

export const buttonStyle = `
  bg-btn-color
  text-font-color
  w-full
  h-[50px]
  rounded-full
  text-xl
  font-bold
`;

export const buttonHomeStyle = `
  w-[75%]
  border
  bg-btn-color
  rounded
  h-[40px]
  text-font-color
  py-2
  mb-24
  p-3
`;

export const spanStyle = `
  text-sm
  text-secundary-bg
  font-bold
  text-center
`;

export default {
  container,
  containerImage,
  image,
  containerForm,
  titleStyle,
  formStyle,
  errorStyle,
  wrapperInputLink,
  labelStyle,
  linkStyle,
  buttonStyle,
  spanStyle,
};
