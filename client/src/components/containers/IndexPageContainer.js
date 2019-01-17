import { connect } from "react-redux";
import { hirePerson, firePerson } from "../../ducks/person";
import IndexPage from "../IndexPage";

export default connect(
  state => ({
    persons: state.person.get("persons")
  }),
  {
    hirePerson,
    firePerson
  }
)(IndexPage);
