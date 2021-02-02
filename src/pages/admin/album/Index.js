import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";
import api from "../../../api";
import Icon from "react-icons-kit";
import { Link } from "react-router-dom";
import { ic_add } from "react-icons-kit/md";
import { handleError } from "../../../utils/Error";

import AlbumList from "../../../components/admin/album-list/Index";
import LoadingComponent from "../../../components/admin/loading/Index";

const Index = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch albums
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(`${api}users`);
        if (response.status === 200) {
          setAlbums(response.data);
          setLoading(false);
        }
      } catch (error) {
        if (error) {
          handleError(error);
        }
      }
    };
    fetchAlbums();
  }, []);

  return (
    <div className="album-index">
      {isLoading ? (
        <LoadingComponent />
      ) : (
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-padding">
                <div className="card border-0 shadow-sm">
                  <AlbumList albums={albums} />
                </div>
              </div>
            </div>
          </div>
        )}

      {/* Float create button */}
      <Link
        to="/admin/album/create"
        type="button"
        className="btn shadow-none rounded-circle float-btn"
      >
        <Icon icon={ic_add} size={25} />
      </Link>
    </div>
  );
};
export default Index;
