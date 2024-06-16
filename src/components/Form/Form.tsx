export const Form = (
  props: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
) => {
  return (
    <form className="flex flex-col gap-2 w-1/3" {...props}>
      {props.children}
    </form>
  );
};
