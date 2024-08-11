// eslint-disable-next-line react/prop-types
const Tag = ({ text, color }) => {
  return (
    <button
      style={{ color: color, borderColor: color }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = color;
        e.currentTarget.style.color = 'black';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '';
        e.currentTarget.style.color = color;
      }}
      className="px-3 border-1 border rounded-md py-[2px] inline-block text-center"
    >
      {"#"+text}
    </button>
  );
};

export default Tag;
