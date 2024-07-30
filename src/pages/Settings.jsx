import DarkModeToggler from "../ui/DarkModeToggler";
import UserUpdateForm from "../ui/UserUpdateForm";

function Settings() {
  return (
    <div>
      <h1>Customize App</h1>
      <DarkModeToggler />
      <UserUpdateForm />
    </div>
  );
}

export default Settings;
