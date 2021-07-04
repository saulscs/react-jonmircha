import React, { useState, useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import { helpHttp } from "./helpers/helpHttp";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res.err);
      }
    });
    setLoading(false);
  }, [url]);

  const createData = (data) => {
    let options = {
      headers: { "content-type": "application/json" },
      body: data,
    };
    data.id = Date.now();
    api.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...db, data]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let options = {
      headers: { "content-type": "application/json" },
      body: data,
    };
    let endpoint = `${url}/${data.id}`;
    console.log(endpoint);
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };
  return (
    <div>
      <h2>Crud API JSON</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status} : ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};
export default CrudApi;
