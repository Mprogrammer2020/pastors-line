import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DataModal } from "../common/DataModal";
import { ContactDataApi } from "../services/UserServices";
import { useDispatch, useSelector } from "react-redux";
import { setResponse } from "../redux/Action";

export const Home = () => {
  const buttons = ["A", "B"];
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEven, setShowEven] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeContact, setActiveContact] = useState("A");

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const getContacts = async (p, s, active) => {
    try {
      setLoading(true);
      let response = await ContactDataApi(p, s, active === "B" ? 226 : "");
      // add new response to the previous one
      if (p === 1) {
        dispatch(setResponse(response.data.contacts));
      } else {
        dispatch(setResponse({ ...selector.data, ...response.data.contacts }));
      }
      setLoading(false);
    } catch (err) {
      console.log("An Error Occurred: ", err);
      alert("Oops, An Error occurred, Please try again later!");
      setLoading(false);
    }
  };

  const handleCommon = async (active) => {
    dispatch(setResponse({}));
    // Added just to change the url query params for the modal
    navigate(`/?type=${active}`);
    setActiveContact(active);
    await getContacts(1, "", active);
  };

  const openModal = (modal) => {
    handleCommon(modal);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowEven(false);
  };

  const handleSearch = async (value) => {
    setSearch(value);
    // delay for 3 seconds
    await new Promise((res) => setTimeout(res, 3000));
    getSearchedData(value);
  };

  const getSearchedData = async (val) => {
    dispatch(setResponse({}));
    await getContacts(1, val, activeContact);
  };

  return (
    <div>
      <section className="assignment-box">
        <div className="assign-btn">
          {buttons.map((d, i) => (
            <Button
              variant="unset"
              key={i}
              onClick={() => openModal(d)}
              className={`btn-${d}`}
            >
              Button {d}
            </Button>
          ))}
        </div>
      </section>

      {/* Common modal for button A and button B */}
      <DataModal
        show={showModal}
        hide={handleCloseModal}
        getData={handleCommon}
        type={activeContact}
        check={showEven}
        handleCheck={setShowEven}
        loading={loading}
        search={search}
        handleSearch={handleSearch}
        searchData={getSearchedData}
        loadData={getContacts}
      />
    </div>
  );
};
