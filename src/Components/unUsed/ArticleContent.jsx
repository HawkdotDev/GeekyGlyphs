// eslint-disable-next-line react/prop-types
const ArticleContent = ({contents}) => {
  return (
    // eslint-disable-next-line react/prop-types
    <>{contents.map((section, index) => (
        <div key={index}>
          <div className="bg-slate-900 w-full h-[60px] my-1 border"></div>
          <h2 className="font-bold text-red-500 text-xl">
            {section.heading}
          </h2>
          <p className="px-1 py-1">{section.content}</p>
        </div>
      ))}
      </>
  )
}

export default ArticleContent