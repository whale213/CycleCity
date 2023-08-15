import { useRef, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import he from "he";


import { BsCircle } from "react-icons/bs";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { BiCurrentLocation, BiHome } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

import "./globals.css";
import logo from "../../assets/logoLightMode.png";

const center = { lat: 1.379348, lng: 103.849876 };
const live = { lat: 1.379348, lng: 103.849876 };


export default function Test() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_PUBLIC_MAP_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [instructions, setInstructions] = useState(null);


  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const handleSelectOrigin = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setOrigin(value);
    setCoordinates(latLng);
  };

  const handleSelectDestination = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setDestination(value);
    setCoordinates(latLng);
  };

  const originRef = useRef();
  const destinationRef = useRef();

  if (!isLoaded) {
    return "Loading...";
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.BICYCLING,
      unitSystem: google.maps.UnitSystem.METRIC,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    setInstructions(results.routes[0].legs[0].steps);

    console.log(`Instructions: ${instructions}`);
    console.log(instructions[0]);
    console.log(instructions[1]);
    console.log(results.routes[0].legs[0].steps);
    instructions.map((instruction, index) => {
      console.log(instruction.distance.text)
      console.log(`In ${instruction.distance.text}, ${instruction.instructions}`);
    })
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
    window.location.reload();
  }

  return (
    <div className="h-[100vh] w-[100vw]">
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          mapId: import.meta.env.VITE_PUBLIC_MAP_ID,
          center: { lat: 1.356426, lng: 103.8167309 },
          zoom: 12,
          disableDefaultUI: true,
          restriction: {
            latLngBounds: {
              north: 1.473879,
              south: 1.154298,
              west: 103.567125,
              east: 104.097275,
            },
            strictBounds: false,
          },
          heading: 25,
          tilt: 50,
        }}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={center} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
        <div className="absolute z-10 m-2 mx-0">
          <div className="text-thistle rounded-md m-1 mx-4 flex">
            <nav>
              <ol className="flex items-center gap-1 text-sm text-gray-600 pl-8">
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
                  <a href="/user/itinerary/map" className="block transition hover:text-thistle hover:bg-grey rounded-md px-1">Map</a>
                </li>
                <li>
                  <IoIosArrowForward size={20} />
                </li>
                <li>
                  <a href="#" className="block transition hover:text-thistle hover:bg-grey rounded-md px-1">Directions</a>
                </li>
              </ol>
            </nav>
          </div>
          <div className="flex flex-col">
            <div className="m-4 mt-0 mb-2 p-4 w-full h-full bg-fedora bg-opacity-80 rounded-lg">
              <div className="w-full flex flex-col space-y-2">
                <PlacesAutocomplete
                  value={origin}
                  onChange={setOrigin}
                  onSelect={handleSelectOrigin}
                >
                  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className="w-[20rem]">
                      <div className="flex items-center space-x-2">
                        <BsCircle size={20} color="thistle" />
                        <div className="w-[18rem] flex items-center px-2 sticky top-0 bg-grey rounded-lg border-2 border-neutral-500 hover:border-thistle/90">
                          <input
                            {...getInputProps({ placeholder: "Choose Starting Point" })}
                            className="placeholder:text-thistle p-2 bg-grey outline-none rounded-lg pr-8" ref={originRef} />
                          <div className="text-silver hover:text-blue-500 p-2 group" onClick={() => {
                            map.panTo(live);
                            map.setZoom(15);
                          }}>
                            <BiCurrentLocation />
                            <div className="opacity-0 w-28 bg-onyx text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-80 -mb-10 px-3 pointer-events-none">
                              Use Your Location
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 ml-6 rounded-lg bg-grey bg-opacity-80 w-[30rem]">
                        {loading ? <div className="p-1 px-2">...loading</div> : null}

                        {suggestions.map(suggestion => {
                          const style = {};

                          return (
                            <div {...getSuggestionItemProps(suggestion, { style })} className="hover:bg-thistle hover:text-grey p-1 px-2 rounded-md z-10">
                              {suggestion.description}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
                <PlacesAutocomplete
                  value={destination}
                  onChange={setDestination}
                  onSelect={handleSelectDestination}
                >
                  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className="w-[20rem]">
                      <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt size={20} color="thistle" />
                        <div className="w-[18rem] flex items-center px-2 sticky top-0 bg-grey rounded-lg border-2 border-neutral-500 hover:border-thistle/90">
                          <input {...getInputProps({ placeholder: "Choose Destination" })}
                            className="placeholder:text-thistle p-2 bg-grey outline-none rounded-lg pr-8" ref={destinationRef} />
                          <div className="text-silver hover:text-blue-500 p-2 group" onClick={() => {
                            map.panTo(live);
                            map.setZoom(15);
                          }} >
                            <BiCurrentLocation />
                            <div className="opacity-0 w-28 bg-onyx text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-60 px-3 pointer-events-none">
                              Use Your Location
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 ml-6 rounded-lg bg-grey bg-opacity-80 w-[30rem]">
                        {loading ? <div className="p-1 px-2">...loading</div> : null}

                        {suggestions.map(suggestion => {
                          const style = {};

                          return (
                            <div {...getSuggestionItemProps(suggestion, { style })} className="hover:bg-thistle hover:text-grey p-1 px-2 rounded-md z-10">
                              {suggestion.description}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
                <div className="w-4/5 flex justify-center space-x-2">
                  <div className="w-1/2 h-8 flex justify-center items-center bg-thistle hover:bg-onyx text-grey hover:text-thistle rounded-md shadow-xl"
                    onClick={() => calculateRoute()}
                  >
                    Search
                  </div>
                  <div className="w-1/4 h-8 flex justify-center items-center bg-thistle hover:bg-onyx text-grey hover:text-thistle rounded-md shadow-xl"
                    onClick={() => clearRoute()}>
                    <FaTimes />
                  </div>
                </div>
              </div>
            </div>
            <div className="m-4 mt-0 p-4 w-full h-[22rem] overflow-auto bg-fedora bg-opacity-80 rounded-lg">
              <div className="text-grey text-xl">Directions</div>
              <div className="w-[20rem] text-thistle text-sm pt-2">
                <div>
                  Distance: {distance}
                </div>
                <div>
                  Duration: {duration}
                </div>
              </div>
              <div className="w-[20rem] text-seashell mt-4">
                {instructions && instructions.map((instruction, index) => (
                  <div key={index} className="py-2">
                    <div className="text-md text-neutral-300">
                      In {instruction.distance.text},
                    </div>
                    <div>
                      {he.decode(instruction.instructions).replace(/<\/?[^>]+(>|$)/g, "")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-10 left-[92%] w-20 h-20">
          <img className="w-full" src={logo} />
        </div>
      </GoogleMap>
    </div >
  );
}