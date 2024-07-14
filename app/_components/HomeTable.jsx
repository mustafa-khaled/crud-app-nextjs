"use client";

import { useState } from "react";
import { deleteItem } from "../_lib/data-service";

import Popup from "./Popup";
import AddEditUserForm from "./AddEditUserForm";

function HomeTable({ usersData }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const closePopup = () => setIsPopupOpen(false);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedUser(null);
  };

  const handleOpenPopup = (user = null) => {
    setSelectedUser(user);
    setIsPopupOpen(true);
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteItem(userId);
    } catch (error) {
      console.error("Failed to delete user:", error.message);
    }
  };

  return (
    <>
      <button className="mb-[20px]" onClick={() => handleOpenPopup()}>
        Add user
      </button>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-gray-800 p-[10px] rounded-md border dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                Is admin
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {usersData?.length > 0 &&
              usersData?.map((user) => {
                return (
                  <tr
                    key={user?._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {user?.textField}
                    </th>
                    <td className="px-6 py-4">
                      {user?.checkBox ? "Admin" : "Not Admin"}
                    </td>
                    <td className="px-6 py-4">{user?.dropDownMenu}</td>
                    <td className="px-6 py-4 flex gap-[10px]">
                      <button onClick={() => handleOpenPopup(user)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteUser(user?._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
        <AddEditUserForm
          user={selectedUser}
          usersData={usersData}
          closePopup={closePopup}
        />
      </Popup>
    </>
  );
}

export default HomeTable;
