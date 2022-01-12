import CakeContainer from "./CakeContainer";
import HooksCakeContainer from "./HooksCakeContainer";
import IcecreamContainer from "./IcecreamContainer";
import AsyncUserList from "./AsyncUserList";
function ReduxContainer() {
  return (
    <div>
      <CakeContainer />
      <HooksCakeContainer />
      <IcecreamContainer />
      <AsyncUserList />
    </div>
  );
}

export default ReduxContainer;
