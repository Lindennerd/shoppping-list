export const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      className="bg-gray-400 text-white rounded p-2"
      type="submit"
      {...props}
    >
      {props.children}
    </button>
  );
};
