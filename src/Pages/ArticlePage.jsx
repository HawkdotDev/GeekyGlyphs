import data from "../Data/articleData.json";
import staffData from "../Data/staffData.json"
import ArticleContent from "../Components/ArticleContent";

// eslint-disable-next-line react/prop-types, no-unused-vars
const ArticlePage = ({articleData}) => {
  const author = staffData.users.find(user => user.id === parseInt(data.authorId, 10));
  const logodim = "18px";

  return (
    <>
      <div className="p-5">
        <h1 className="text-4xl font-bold">{data.heading}</h1>
        <p className="text-xl font-semibold mt-2">{data.extension}</p>
        <div className="flex justify-between mt-1 items-center">
          <div className="text-slate-400 text-sm flex items-center">
            by, 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={logodim}
              viewBox="0 -960 960 960"
              width={logodim}
              fill="#e8eaed"
              className="ml-1"
            >
              <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
            </svg>
            <div className="px-[2px]">{author.name}</div>
          </div>
          <text className="text-gray-400 text-xs">
            {data.date}, {data.time} pm
          </text>
        </div>
        <img
          src={data.coverImage}
          alt="darksouls1 image"
          className="border mt-3 mb-3"
        />
        <p>{data.intro}</p>
        <p className="py-3">
          <ArticleContent contents={data?.sections} />
        </p>
      </div>
    </>
  );
};

export default ArticlePage;
