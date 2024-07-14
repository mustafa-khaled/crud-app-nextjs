"use server";

import { revalidatePath } from "next/cache";
import { addItems, deleteItem, updateItems } from "./data-service";

export async function addUser(prevState, formData) {
  const useName = formData.get("useName");
  const idAdmin = formData.get("idAdmin");
  const options = formData.get("options");

  let errors = {};

  if (!useName || useName.trim().length === 0) {
    errors.useName = "Name is required";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  await addItems({
    textField: useName,
    dropDownMenu: options,
    checkBox: idAdmin === "on",
  });

  revalidatePath("/");
  return { success: true };
}

export async function updateUser(prevState, formData) {
  const useName = formData.get("useName");
  const idAdmin = formData.get("idAdmin");
  const options = formData.get("options");
  const userId = formData.get("userId");

  let errors = {};

  if (!userId || userId.trim().length === 0) {
    errors.userId = "Id is required";
  }

  if (!useName || useName.trim().length === 0) {
    errors.useName = "Name is required";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  await updateItems(userId, {
    textField: useName,
    dropDownMenu: options,
    checkBox: idAdmin === "on",
  });

  revalidatePath("/");
  return { success: true };
}

export async function deleteUser(userId) {
  try {
    await deleteItem(userId);
  } catch (error) {
    console.error("Failed to delete user:", error.message);
  }

  revalidatePath("/");
}
