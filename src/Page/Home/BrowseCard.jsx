import MarektingIMG from "../../assets/Card Icon/marketing.png";


import HumanResourceIMG from "../../assets/Card Icon/human-resources.png";
const BrowseCard = () => {
    return (
        <div>
            {/* text */}
            <div className="text-center mt-10">
                <h1 className="text-4xl text-white">Browse by category</h1>
                <p className="mt-2">Find the job that’s perfect for you. about 800+ new jobs everyday</p>

            </div>


            {/* card */}

            <div className="grid grid-cols-1 items-center lg:grid-cols-2  justify-items-center max-w-7xl mx-auto px-4">

                <div className="flex items-center gap-2 border-2 border-yellow-500 p-3 rounded-lg">
                    <img className="w-16" src={MarektingIMG}></img>
                    <p>Marketing & Sale</p>
                </div>


                


                <div className="flex items-center gap-2 border-2 border-yellow-500 p-3 rounded-lg">
                     <img className="w-16" src={HumanResourceIMG}></img>
                    <p>Human Resource</p>
                </div>

              

            </div>



        </div>
    );
};

export default BrowseCard;