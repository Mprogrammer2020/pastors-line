import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { ValueChecker } from "./ValueChecker";
import { DetailModal } from "./DetailModal";
import { Loader } from "./Loader";
import { Scrollbars } from "react-custom-scrollbars";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/Action";

export const TableData = ({ evenOnly, loading, loadData, search, type }) => {
  const [filterData, setFilterData] = useState([]);
  const [detailModal, setDetailModal] = useState(false);
  const [detail, setDetail] = useState({});
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  // need to change on data and evenonly
  useEffect(() => {
    let temp = Object.keys(selector.data);
    if (temp.length) {
      if (evenOnly) {
        temp = temp.filter((d) => selector.data[d].id % 2 === 0);
      }
      setFilterData(temp);
    }
  }, [selector.data, evenOnly]);

  const viewDetail = (d) => {
    setDetail(d);
    setDetailModal(true);
  };

  const handleCloseDetail = () => {
    setDetail({});
    setDetailModal(false);
  };

  const handleScrollFrame = async (values) => {
    if (values.top === 1) {
      dispatch(setPage(selector.page+1))
      await loadData(selector.page+1, search, type)
    }
  }

  return (
    <>
      <Scrollbars style={{ width: 750, height: 500 }}  onScrollFrame={handleScrollFrame}>
        <Table bordered responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Country</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(selector.data)
              .filter((d) => filterData.includes(d))
              .map((c, i) => (
                <tr key={i}>
                  <td>{selector.data[c].id}</td>
                  <td>{ValueChecker(selector.data[c].first_name)}</td>
                  <td>{ValueChecker(selector.data[c].email)}</td>
                  <td>{ValueChecker(selector.data[c].phone_number)}</td>
                  <td>{ValueChecker(selector.data[c].country?.iso)}</td>
                  <td>
                    <Button variant="unset" className="btn-C" onClick={() => viewDetail(selector.data[c])}>View</Button>
                  </td>
                </tr>
              ))}
            {/* loader component, could be set in main if handled with global context */}
            <div className="modal-loader">
              <Loader load={loading} />
            </div>
          </tbody>
        </Table>
      </Scrollbars>
      <DetailModal show={detailModal} hide={handleCloseDetail} data={detail} />
    </>
  );
};
