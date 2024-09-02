// // import { IoIosSearch } from "react-icons/io";

// // const HeroSection = () => {
// //   return (
// //     <div className="sm:w-[60vw] h-[20vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center items-center ">
// //       <form className="absolute flex justify-center items-center">
// //         <input
// //           type="search"
// //           id="search"
// //           name="search"
// //           className="py-5 px-3 w-[80vw] sm:w-[40vw] text-xl sm:text-3xl mx-auto outline-none border-b-2 bg-bgColor"
// //           placeholder="Search your asset..."
// //         />
// //         <IoIosSearch className="text-3xl sm:text-5xl text-gray-400 -ml-10" />
// //       </form>
// //     </div>
// //   );
// // };

// // export default HeroSection;


import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllPosts } from "../store/slices/postSlice";

const HeroSection = () => {
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    try {
      const search = e.target.value;
      const res = await axios.get(
        import.meta.env.VITE_API_URL + `/post/search?search=${search} `
      );
      const { data } = await res.data;
      dispatch(setAllPosts(data));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };


  return (
    <div className="relative h-[15vh] sm:h-[40vh] flex items-center justify-center">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60 z-0"
        src="https://cdn.pixabay.com/video/2017/06/05/9584-220312371_large.mp4"
        autoPlay
        loop
        muted
      />

      {/* Foreground content */}
      <div className="sm:w-[60vw] h-[30vh] sm:h-[20vh] mx-auto flex justify-center items-center relative z-10">
        <form className="relative flex justify-center items-center w-full">
          {/* Search bar with background image */}
          <div className="relative w-[80vw] sm:w-[40vw] flex items-center bg-white bg-opacity-10 backdrop-blur-lg rounded-full shadow-lg overflow-hidden">
            <input
              type="search"
              id="search"
              name="search"
              className="py-4 px-6 w-full text-xl sm:text-2xl outline-none bg-transparent text-white placeholder-gray-300"
              placeholder="Search your asset..."
              onChange={handleSearch}
              style={{
                backgroundImage: `url('https://i.pinimg.com/736x/95/1f/4c/951f4c2774f4ad8978c03721e8743205.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <button type="submit" className="p-2">
              <IoIosSearch className="text-3xl sm:text-4xl text-white mx-3" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
