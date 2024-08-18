const Button = ({ buttonContent }) => {
  return (
    <button
      id="button"
      className="text-base font-medium text-white rounded-sm bg-purple-200 py-3 px-8 hover:scale-105"
    >
      {buttonContent}
    </button>
  );
};

export default Button;
