import KeyStore from "../utils/KeyStore";

function KeyTest() {
  const pressed = KeyStore((state) => state.pressed);

  return (
    <div className="KeyTestPage">
      <h1>The final Key Listener test!</h1>
      <p>{pressed ? pressed : "nothing pressed"}</p>
    </div>
  );
}

export default KeyTest;
