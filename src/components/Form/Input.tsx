export const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input
      className="border border-gray-300 rounded p-2 outline-none focus:border-gray-600 transition-colors duration-200 ease-in-out"
      {...props}
    />
  );
};
