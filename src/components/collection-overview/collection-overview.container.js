import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  selectIsCollectionFetching,
  selectCollectionsForPreview,
} from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
  collections: selectCollectionsForPreview,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
