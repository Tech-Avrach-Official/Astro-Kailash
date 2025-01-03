import img from "../assets/blog2.png"
import { IoMdPerson } from "react-icons/io";
import { FaComment } from "react-icons/fa";
const articles = [
  {
    id: 1,
    image: img, 
    title:
      "Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt Ut Labore.",
    description:
      "Consectetur adipiscing elit, sed desdo eiusmod tempor incididuesdeentiut labore etesde magna.",
    author: "Admin",
    comments: 0,
  },
  {
    id: 2,
    image: img, 
    title:
      "Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt Ut Labore.",
    description:
      "Consectetur adipiscing elit, sed desdo eiusmod tempor incididuesdeentiut labore etesde magna.",
    author: "Admin",
    comments: 0,
  },
  {
    id: 3,
    image: img, 
    title:
      "Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt Ut Labore.",
    description:
      "Consectetur adipiscing elit, sed desdo eiusmod tempor incididuesdeentiut labore etesde magna.",
    author: "Admin",
    comments: 0,
  },
  {
    id: 4,
    image: img, 
    title:
      "Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt Ut Labore.",
    description:
      "Consectetur adipiscing elit, sed desdo eiusmod tempor incididuesdeentiut labore etesde magna.",
    author: "Admin",
    comments: 0,
  },
  {
    id: 5,
    image: img, 
    title:
      "Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt Ut Labore.",
    description:
      "Consectetur adipiscing elit, sed desdo eiusmod tempor incididuesdeentiut labore etesde magna.",
    author: "Admin",
    comments: 0,
  },
  {
    id: 6,
    image: img,
    title:
      "Consectetur Adipiscing Elit Sedeius Mod Tempor Incididunt Ut Labore.",
    description:
      "Consectetur adipiscing elit, sed desdo eiusmod tempor incididuesdeentiut labore etesde magna.",
    author: "Admin",
    comments: 0,
  },

    
];

const LatestArticles = () => {
  return (
    <div className="bg-gray-100 text-black py-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Latest Articles</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 shadow-lg">
              {/* <div className="flex items-center text-sm text-gray-400 mb-4">
              <IoMdPerson className="text-2xl px-1"/>
                <span className="mr-4">By - {article.author}</span>
                <FaComment className="px-1 text-lg" />
                <span>{article.comments} comments</span>
              </div> */}
              <h3 className="text-xl font-semibold line-clamp-1 mb-4">{article.title}</h3>
              <p className="text-gray-600 line-clamp-3 mb-6">{article.description}</p>
              <button className="bg-yellow-600 text-white py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
