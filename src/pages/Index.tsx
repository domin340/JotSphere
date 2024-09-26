import { Page } from "../utils/pageMaster";

function Index() {
  const currentScene = Page((state) => state.current);
  return (
    <>
      { currentScene ? currentScene : (
        <div className="main">
          <h1>No current Scene</h1>
        </div>
      )}
    </>
  )
}

export default Index;