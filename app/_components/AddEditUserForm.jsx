import { useFormState } from "react-dom";
import { addUser, updateUser } from "../_lib/actions";

function AddEditUserForm({ user, closePopup }) {
  const isEditingSession = Boolean(user);

  const [state, formAction] = useFormState(
    isEditingSession ? updateUser : addUser,
    {}
  );

  return (
    <form
      action={formAction}
      className="flex flex-col gap-[10px] items-start justify-start">
      <input
        type="text"
        placeholder="User name"
        name="useName"
        defaultValue={(isEditingSession && user?.textField) || ""}
      />
      <input type="hidden" name="userId" defaultValue={user?._id} />
      <input
        type="checkbox"
        name="idAdmin"
        defaultChecked={isEditingSession ? user?.checkBox : false}
      />
      <select
        name="options"
        defaultValue={(isEditingSession && user?.dropDownMenu) || ""}>
        <option value={"One"}>One</option>
        <option value={"Two"}>Two</option>
        <option value={"Three"}>Three</option>
      </select>

      <button type="submit">Submit</button>

      {state?.useName && (
        <span className="text-center bg-red-300 text-red-500 w-full p-[5px] rounded-md text-sm mt-[20px]">
          {state?.useName}
        </span>
      )}
    </form>
  );
}

export default AddEditUserForm;
