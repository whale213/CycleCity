import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import http from "../../http";
import * as yup from "yup";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { RxSlash } from "react-icons/rx";
import { LuClock4 } from "react-icons/lu";

export default function EditAttractions() {
  const { id } = useParams();

  const [attraction, setAttraction] = useState({
    name: "",
    postalCode: "",
    address: "",
    imageFile: "",
    longitude: "",
    latitude: "",
  });

  useEffect(() => {
    http.get(`/attractions/${id}`).then((res) => {
      setAttraction(res.data);
    });
  }, []);

  const formik = useFormik({
    initialValues: attraction,
  });

  return (
    <div>
      <div class="m-12">
        <div className="flex space-x-1 text-md md:text-xl pl-8 pb-2 text-thistle dark:text-fedora">
          <Link
            to={"/staff/itinerary/attractions"}
            className="text-grey dark:text-thistle"
          >
            Attractions
          </Link>
          <div className="flex">
            <MdOutlineKeyboardDoubleArrowRight size={30} />
          </div>

          <Link className="text-grey dark:text-thistle">West Coast Park</Link>
        </div>
        <div className="overflow-hidden rounded-3xl shadow transition hover:shadow-lg">
          <img
            alt="Cycling"
            src="https://thesmartlocal.com/wp-content/uploads/2021/01/west-coast-park_17.jpg"
            class="h-40 w-full object-cover"
          />

          <div class="bg-seashell dark:bg-grey border border-glass p-4 sm:p-6 md:h-[340px] h-56">
            <div className="flex justify-between">
              <h1 className="text-lg md:text-2xl font-medium text-ultraViolet dark:text-thistle">
                West Coast Park
              </h1>
              <div className="flex space-x-2 text-ultraViolet dark:text-thistle p-2">
                <LuClock4 />
                <div class="hidden md:block text-xs text-gray-500">
                  Last Modified:
                </div>
                <div class="block text-xs text-gray-500">10th Oct 2022</div>
              </div>
            </div>

            <a href="#">
              <h3 class="mt-0.5 text-lg text-gray-900 dark:text-seashell">
                Attraction: {id}
              </h3>
            </a>

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
