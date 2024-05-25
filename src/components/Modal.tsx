//
// source: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular
// with custom modification
//

import {
  BG_COLORS,
  COLORS,
  ITEM_COLORS,
  SELECTED_ICON_COLORS,
  TEXT_COLORS,
} from "../config/constant";
import { XCircleIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { ReactElement, useState } from "react";

type IconModalProps = {
  children: ReactElement;
};

const Modal = ({ children }: IconModalProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState<ITEM_COLORS>("red");
  const [selectedIcon, setSelectedIcon] = useState(0);

  const iconsCol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <button
        className="p-3 rounded-lg mr-4 bg-neutral-700 focus:outline-none ease-linear transition-all duration-150"
        onClick={() => setShowModal(true)}
      >
        {children}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[23rem]">
              {/*content*/}
              <div className="border-neutral-500 border rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-800 outline-none focus:outline-none">
                {/* header exit button */}
                <div className="flex items-start justify-between p-3 rounded-t">
                  <button
                    className="mb-4 ml-auto float-right text-3xl outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <XCircleIcon className="h-8 text-neutral-100" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-3 mb-5 flex-auto rounded-b">
                  {/* select color */}
                  <div className="rounded-lg bg-neutral-700 py-3 px-1 w-full flex justify-around">
                    {COLORS.map((color) => (
                      <button
                        key={color}
                        className={`w-6 h-6 rounded-full ${BG_COLORS[color]}`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color === selectedColor ? (
                          <div className="w-3 h-3 bg-neutral-700 rounded-full m-auto"></div>
                        ) : null}
                      </button>
                    ))}
                  </div>
                  <div className="rounded-lg bg-neutral-700 mt-3 py-3 w-full flex justify-around">
                    <div className="grid grid-cols-5 gap-5">
                      {iconsCol.map((item) => (
                        <button
                          key={item}
                          className={clsx(
                            "p-2 rounded-full opacity-80",
                            selectedIcon === item
                              ? SELECTED_ICON_COLORS[selectedColor]
                              : null
                          )}
                          onClick={() => setSelectedIcon(item)}
                        >
                          <BookOpenIcon
                            className={clsx(
                              "w-7",
                              selectedIcon === item
                                ? TEXT_COLORS[selectedColor]
                                : "text-neutral-400"
                            )}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default Modal;
