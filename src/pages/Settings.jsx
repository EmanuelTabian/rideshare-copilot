import Button from "../ui/Button";
import DarkModeToggler from "../ui/DarkModeToggler";
import UserUpdateForm from "../ui/UserUpdateForm";
import DeleteUser from "../ui/DeleteUser";

function Settings() {
  return (
    <div>
      <h1>Customize App</h1>
      <DarkModeToggler />
      <UserUpdateForm />
      <DeleteUser />
    </div>
  );
}

export default Settings;
