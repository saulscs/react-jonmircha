import React from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import { useCrudContext } from "../context/CrudContext";

const CrudApi = () => {
  const {loading, error, db} = useCrudContext();
  return (
    <div>
      <h2>Crud API JSON</h2>
      <article className="grid-1-2">
        <CrudForm
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status} : ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable />
        )}
      </article>
    </div>
  );
};
export default CrudApi;
