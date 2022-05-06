import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { iBlog } from "../../shared/interfaces/app.interface";
import {
  DotsHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import AbacContainer from "../../containers/abacContainer";

type Props = {
  blog: iBlog;
  deleteBlog: Function;
};

const BlogCard = ({ blog, deleteBlog }: Props): JSX.Element => {
  const { image, title, content, slug, date, idBlogPost: id } = blog;

  return (
    <div className="relative w-full overflow-hidden rounded-lg text-center shadow-lg dark:bg-natgas-azul">
      <div className="grid h-52 place-items-center">
        <img src={image} alt={title} className="max-h-52 w-auto" />
      </div>
      <div className="px-6 py-4 text-gray-50">
        <div className="mb-2 font-quicksand-bold text-xl text-natgas-azul dark:text-white">
          {title}
        </div>
        <hr />
        <p className="mt-5 mb-10 truncate text-justify font-quicksand-regular text-base text-natgas-azul dark:text-gray-100">
          {content}
        </p>
        <div className="mx-2 flex flex-row justify-between">
          <p className="font-gilroy-extrabold text-natgas-gris-cool">
            {new Date(date).toLocaleDateString()}
          </p>
          <Link
            to={`/app/blog/${slug}`}
            className="rounded-lg bg-natgas-sec-one px-6 py-1 font-gilroy-light text-white shadow"
          >
            Leer
          </Link>
        </div>
      </div>
      <AbacContainer required_role={"HR"}>
        <Menu
          as="div"
          className="absolute top-2 right-2 inline-block text-left"
        >
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white opacity-90 hover:bg-opacity-30 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <DotsHorizontalIcon
                className="h-5 w-5 text-gray-300"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-natgas-azul shadow-lg shadow-natgas-azul-claro ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-2">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={`/app/blog/edit/${id}`}
                      className={`${
                        active ? "bg-natgas-verde text-white" : "text-gray-100"
                      } group flex w-full items-center rounded-md p-3 text-sm`}
                    >
                      {active ? (
                        <PencilIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <PencilIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      Editar
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-red-700 text-white" : "text-gray-100"
                      } group flex w-full items-center rounded-md p-3 text-sm`}
                      onClick={() => deleteBlog(blog.idBlogPost)}
                    >
                      {active ? (
                        <TrashIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <TrashIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      Eliminar
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </AbacContainer>
    </div>
  );
};

export default BlogCard;
