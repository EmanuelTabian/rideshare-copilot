function DarkModeToggler() {
  return (
    <>
      <h2>App theme</h2>
      <label htmlFor="theme-select">Select theme</label>
      <select id="theme-select">
        <option>Auto</option>
        <option>Dark theme</option>
        <option>Light theme</option>
      </select>
    </>
  );
}

export default DarkModeToggler;
