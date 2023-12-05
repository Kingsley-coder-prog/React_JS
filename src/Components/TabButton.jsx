export default function TabButton({ children }) {
  function clickHandler() {
    console.log("Hello Fam!");
  }

  return (
    <li>
      <button onClick={clickHandler}>{children}</button>
    </li>
  );
}
