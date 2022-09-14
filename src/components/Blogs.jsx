/** @format */

import useFetchData from "./useFetchData";
import BlogList from "./BlogList";

const Blogs = () => {
  const { myBlogs, loading, error } = useFetchData(
    " http://localhost:8000/blogs"
  );

  // useEffect(()=>{
  //     fetch('http://localhost:8000/blogs')
  //     .then(res=>{
  //         if(!res.ok)
  //            throw Error("Error Connecting to the server")
  //         return res.json();
  //     })
  //     .then(data =>{
  //         setMyblogs(data)
  //         setLoading(false)
  //         setError(null)
  //     })
  //     .catch((err)=>{
  //         setError(err.message)
  //         setLoading(false);
  //     },1000)
  // },[])

  // const[name, setName] = useState('Nate')
  // const changeName = () => {
  //     setName('kamau')
  // }
  // const handleDelete = (id)=>{
  //     const newBlogs = myBlogs.filter(blog => blog.id !== id);
  //     setMyblogs(newBlogs);
  // }

  return (
    <div className='blog'>
      <div className='blogy'>
        {error && <div>{error}</div>}
        {myBlogs && <BlogList blog={myBlogs} />}
        {loading && <div>Loading...</div>}
      </div>
    </div>
  );
};

export default Blogs;
