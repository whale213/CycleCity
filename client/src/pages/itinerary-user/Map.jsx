import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../../http";
import { Wrapper } from "@googlemaps/react-wrapper";
import { createRoot } from "react-dom/client";
import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from "react-places-autocomplete";
import { MarkerClusterer } from "@react-google-maps/api";
// import { MarkerClusterer, SuperClusterAlgorithm, } from "@googlemaps/markerclusterer";

// brand + icons
import darkLogo from "../../assets/logoLightMode.png";
import lightLogo from "../../assets/logoDarkMode.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FaDirections } from "react-icons/fa";
import { BiCurrentLocation, BiHome } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

import "./globals.css";

const SINGAPORE_BOUNDS = {
  north: 1.473879,
  south: 1.154298,
  west: 103.567125,
  east: 104.097275,
};

const mapOptions = {
  mapId: import.meta.env.VITE_PUBLIC_MAP_ID,
  center: { lat: 1.356426, lng: 103.8167309 },
  zoom: 12,
  disableDefaultUI: true,
  restriction: {
    latLngBounds: SINGAPORE_BOUNDS,
    strictBounds: false,
  },
  // heading: 25,
  tilt: 50,
};

export default function Map() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }


  return (
    <Wrapper Wrapper
      apiKey={import.meta.env.VITE_PUBLIC_MAP_API_KEY}
      version="beta"
      libraries={["marker", "places", "routes"]}
    >
      <div className="absolute z-10 m-2 mx-0">
        <div className="text-thistle m-1 mx-4 flex">
          <nav>
            <ol className="flex items-center gap-1 text-sm text-gray-600">
              <li>
                <a href="/user" className="block transition text-neutral-700 hover:text-thistle hover:bg-grey rounded-md px-1">
                  <BiHome size={22} />
                </a>
              </li>
              <li>
                <IoIosArrowForward size={20} />
              </li>
              <li>
                <a href="/user/itinerary" className="block transition hover:text-thistle hover:bg-grey rounded-md px-1">Itinerary</a>
              </li>
              <li>
                <IoIosArrowForward size={20} />
              </li>
              <li>
                <a href="#" className="block transition hover:text-thistle hover:bg-grey rounded-md px-1">Map</a>
              </li>
            </ol>
          </nav>
        </div>
        <Search />
      </div>
      <div className="absolute z-10 left-[92%] w-20 h-20">
        <img className="w-full" src={darkLogo} />
      </div>
      <MyMap />
    </Wrapper >
  );
}

function MyMap() {
  const [map, setMap] = useState();
  const ref = useRef();

  const panTo = useCallback(({ lat, lng }) => {
    ref.current.panTo({ lat, lng });
    ref.current.setZoom(14)
  })

  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions));
  }, []);


  return (
    <>
      <div ref={ref} id="map" style={{ height: "100vh" }} />
      {map && <Attractions map={map} />}
    </>
  );
}

function Attractions({ map }) {
  // const [data, setData] = useState(weatherData);
  const [attractionList, setAttractionList] = useState([]);
  const [highlight, setHighlight] = useState();
  const [open, setOpen] = useState();

  const getAttractions = () => {
    http.get("/attraction").then((res) => {
      setAttractionList({ ...res.data });
    });
  };

  useEffect(() => {
    getAttractions();
    console.log(attractionList);
  }, []);


  return (
    <>
      {open && (
        <Panel
          attraction={attractionList[open]}
          open={open}
          close={() => setOpen(null)}
        />
      )}
      {Object.entries(attractionList).map(([key, attraction]) => (
        <Marker
          key={key}
          map={map}
          position={{ lat: parseFloat(attraction.location.latitude), lng: parseFloat(attraction.location.longitude) }}
          onClick={() => setOpen(key)}
        >
          <div
            className={`relative w-12 p-2 bg-grey border-2 border-onyx rounded-lg transition-all duration-300 ease-out 
            ${highlight === key || open === key ? "w-64 h-16" : ""}`}
            onMouseEnter={() => setHighlight(key)}
            onMouseLeave={() => setHighlight(null)}
          >
            <div className="top-0 right-0">
              <img src={lightLogo} className="h-8 w-8" />
            </div>
            <div>
              {highlight === key || open === key ? (
                <div className="absolute left-10 top-0 opacity-100 animate-fadeIn p-2 pt-4">
                  <div className="text-thistle text-xs">{attraction.location.name}</div>
                  <div>{attraction.location.address}</div>
                </div>
              ) : null}
            </div>
          </div>
        </Marker>
      ))}
    </>
  );
}

function Panel({ attraction, close }) {
  return (
    <div className="absolute top-1 right-1 m-32 p-4 w-1/4 h-100 min-w-200 bg-onyx border-2 border-silver rounded-lg shadow-xl">
      <div className="flex justify-center">
        <img
          alt="Cycling"
          src={`${import.meta.env.VITE_FILE_BASE_URL}${attraction.location.imageFile}`}
          className="my-2 h-30 w-72 object-cover rounded-lg"
        />
      </div>
      <div className="text-thistle text-lg">{attraction.location.name}</div>
      <div className="text-sm">{attraction.location.address}</div>
      <div>
        <div className="text-md text-silver py-2">Live Weather Status</div>
        <div className="flex space-x-6">
          <div className="flex flex-col">
            <h1>M</h1>
            <div>
              {Math.floor(Math.random() * (30 - 24 + 1)) + 24}
            </div>
          </div>
          <div className="flex flex-col">
            <h1>T</h1>
            <div>
              {Math.floor(Math.random() * (30 - 24 + 1)) + 24}
            </div>
          </div>
          <div className="flex flex-col">
            <h1>W</h1>
            <div>
              {Math.floor(Math.random() * (30 - 24 + 1)) + 24}
            </div>
          </div>
          <div className="flex flex-col">
            <h1>T</h1>
            <div>
              {Math.floor(Math.random() * (30 - 24 + 1)) + 24}
            </div>
          </div>
          <div className="flex flex-col">
            <h1>F</h1>
            <div>
              {Math.floor(Math.random() * (30 - 24 + 1)) + 24}
            </div>
          </div>
          <div className="flex flex-col">
            <h1>S</h1>
            <div>
              {Math.floor(Math.random() * (30 - 24 + 1)) + 24}
            </div>
          </div>
          <div className="flex flex-col">
            <h1>S</h1>
            <div>
              {Math.floor(Math.random() * (30 - 24 + 1)) + 24}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button type="button" className="hover:bg-ultraViolet p-2 mt-8 rounded-md border-2 hover:border-transparent border-ultraViolet" onClick={() => close()}>
          Close
        </button>
      </div>
    </div>
  );
}

function Marker({ map, position, children, onClick }) {
  const rootRef = useRef();
  const markerRef = useRef();

  useEffect(() => {
    if (!rootRef.current) {
      const container = document.createElement("div");
      rootRef.current = createRoot(container);

      markerRef.current = new google.maps.marker.AdvancedMarkerView({
        position,
        content: container,
      });
    }

    return () => (markerRef.current.map = null);
  }, []);

  useEffect(() => {
    rootRef.current.render(children);
    markerRef.current.position = position;
    markerRef.current.map = map;
    const listener = markerRef.current.addListener("click", onClick);
    return () => listener.remove();
  }, [map, position, children, onClick]);
}

function Search() {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });

  const navigate = useNavigate();

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <div>
      <div className="m-4 mt-0 p-4 w-full h-full bg-fedora bg-opacity-80 rounded-lg">
        <div className="w-full">
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div className="w-[20rem]">
                {/* <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p> */}

                <div className="flex items-center space-x-2">
                  <div className="w-[22rem] flex items-center px-2 sticky top-0 bg-grey rounded-lg border-2 border-neutral-500 hover:border-thistle/90">
                    <input
                      {...getInputProps({ placeholder: "Search Location" })}
                      className="placeholder:text-thistle p-2 bg-grey outline-none rounded-lg pr-16" />
                    <div className="flex divide-x-2 divide-fedora">
                      <div className="text-silver hover:text-blue-500 p-2 group hover:cursor-pointer">
                        <BiCurrentLocation />
                        <div className="opacity-0 w-28 bg-onyx text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-80 -mb-10 px-3 pointer-events-none">
                          Use Your Location
                        </div>
                      </div>
                      <div className="text-silver hover:text-blue-500 p-2 group hover:cursor-pointer" onClick={() => navigate("/user/itinerary/directions")}>
                        <FaDirections />
                        <div className="opacity-0 w-28 bg-onyx text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-[22rem] -mb-8 px-3 pointer-events-none">
                          Directions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 rounded-lg bg-grey bg-opacity-80 w-[30rem]">
                  {loading ? <div className="p-1 px-2">...loading</div> : null}

                  {suggestions.map(suggestion => {
                    const style = {};

                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })} className="hover:bg-thistle hover:text-grey p-1 px-2 rounded-md">
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
      </div>
    </div>
  );
}