import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  selectIsCollectionFetched,
  selectCollection,
} from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionFetched(state),
  collection: (state, ownProps) =>
    selectCollection(ownProps.match.params.collectionId)(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
