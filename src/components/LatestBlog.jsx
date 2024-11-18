
const LatestBlog = () => {
    const blogs = [
      {
        title: "Top 5 Career Tips You Should Know",
        description: "Learn the best tips to boost your career prospects.",
        image: "https://via.placeholder.com/400x250",
      },
      {
        title: "How to Write a Perfect Resume",
        description: "Step-by-step guide to creating an impactful resume.",
        image: "https://via.placeholder.com/400x250",
      },
      {
        title: "Mastering Online Interviews",
        description: "Tips to ace your next online interview.",
        image: "https://via.placeholder.com/400x250",
      },
    ];
  
    return (
      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600">{blog.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default LatestBlog;
  