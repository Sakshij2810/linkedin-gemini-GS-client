import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { fetchSheetData, clearErrors } from "../../actions/sheetAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { sheetData, loading, error } = useSelector((state) => state.sheetData);

  useEffect(() => {
    // if (error) {
    //   toast.error(error);
    //   dispatch(clearErrors());
    // }
    // dispatch(fetchSheetData());
  }, [dispatch, error]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <Fragment>
      <div>
        <h1>Dashboard</h1>
        {/* {sheetData && sheetData.length > 0 ? (
          <ul>
            {sheetData.map((row, index) => (
              <li key={index}>{row.join(", ")}</li>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )} */}
      </div>
    </Fragment>
  );
};

export default Dashboard;
