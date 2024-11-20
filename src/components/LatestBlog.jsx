const LatestBlog = () => {
  const blogs = [
    {
      title: "Top 5 Career Tips You Should Know",
      description: "Learn the best tips to boost your career prospects.",
      image: "https://i.ibb.co.com/RPsg886/Career-success.webp",
    },
    {
      title: "How to Write a Perfect Resume",
      description: "Step-by-step guide to creating an impactful resume.",
      image: "https://i.ibb.co.com/4ZrwfBq/4-No-Text-4-Steps-To-Writing-The-Perfect-Resume.webp",
    },
    {
      title: "Mastering Online Interviews",
      description: "Tips to ace your next online interview.",
      image: "https://i.ibb.co.com/W040TmC/1693553932390.png",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 font-playfair">
            Latest <span className="text-indigo-600">Blog Posts</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Stay updated with the latest career tips and trends!
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {/* Blog Image */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-indigo-600">
                  {blog.title}
                </h3>
                <p className="mt-4 text-gray-600">{blog.description}</p>
                <button className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:from-blue-600 hover:to-purple-600 hover:shadow-xl transform transition-all duration-300">
                  Read More
                </button>
                {/* <div className="text-center">
                  <Link to={`/service/${id}`} className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:from-blue-600 hover:to-purple-600 hover:shadow-xl transform transition-all duration-300"> {buttonText} </Link>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
