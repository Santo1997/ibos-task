import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import {useContext, useState} from "react";
import CardPanel from "../utilities/CardPanel";
import Title from "../utilities/Title";
import {DataContext} from "../../App";

const Store = () => {
  const data = useContext(DataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(null);
  const itemsPerPage = 6;

  let filteredData = category ? data.filter((item) => item.category === category) : data;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const selectTabs = (category) => {
    setCurrentPage(1);
    setCategory(category);
  };

  return (
    <>
      <Title title="Store" />
      <div className="m-14">
        <TabGroup vertical className="flex h-full">
          <TabList className="menu w-80 ps-5 text-[#717171] font-bold border-e ">
            <Tab onClick={() => selectTabs("Rocking chair")} className="focus:bg-black focus:text-white text-lg text-left w-52 ps-5 py-1">
              Rocking chair
            </Tab>
            <Tab onClick={() => selectTabs("Side chair")} className="focus:bg-black focus:text-white text-lg text-left w-52 ps-5 py-1">
              Side chair
            </Tab>
            <Tab onClick={() => selectTabs("Lounge chair")} className="focus:bg-black focus:text-white text-lg text-left w-52 ps-5 py-1">
              Lounge chair
            </Tab>
          </TabList>
          <TabPanels className="rounded-box ms-10 w-full">
            <TabPanel className="grid grid-cols-4 gap-5">
              {currentData.map((data) => (
                <CardPanel data={data} key={data._id} />
              ))}
            </TabPanel>
            <TabPanel className="grid grid-cols-4 gap-5">
              {currentData.map((data) => (
                <CardPanel data={data} key={data._id} />
              ))}
            </TabPanel>
            <TabPanel className="grid grid-cols-4 gap-5">
              {currentData.map((data) => (
                <CardPanel data={data} key={data._id} />
              ))}
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <div>
          <div className="flex justify-center mt-10">
            <nav aria-label="Page navigation">
              <ul className="flex items-center gap-1 h-10 text-sm font-bold">
                <li>
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-sm hover:bg-gray-100 hover:border-black">
                    <span className="sr-only">Previous</span>
                    <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                  </button>
                </li>

                {Array.from({length: totalPages}, (_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setCurrentPage(index + 1)}
                      className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight bg-white border border-gray-300 rounded-sm hover:bg-gray-100 hover:border-black ${
                        currentPage === index + 1 ? "border-black" : ""
                      }`}>
                      {index + 1}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-sm hover:bg-gray-100 hover:border-black">
                    <span className="sr-only">Next</span>
                    <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
