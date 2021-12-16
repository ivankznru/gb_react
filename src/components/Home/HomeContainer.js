import { profileSelector } from "../../Store/Profile/selector";
import { bindActionCreators } from "redux";
import { changeName } from "../../Store/Profile/actions";
import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = (globalState) => {
  return profileSelector(globalState);
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onChangeProfileName: changeName,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
