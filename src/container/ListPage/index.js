import React, { Component } from "react";
import { connect } from "react-redux";
import { loadListRequest } from "../../actions/";
import Menu from "../../components/Menu";
import NewsList from "../../components/NewsList";

export class ListPage extends Component {
  componentDidMount() {
    this.props.loadListRequest();
  }

  updateList = param => {
    this.props.loadListRequest(param);
  };

  render() {
    return (
      <div>
        <Menu updateList={this.updateList} />
        <NewsList list={this.props.list.hits} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.reducer.list
  };
};

const mapDispatchToProps = dispatch => ({
  loadListRequest: param => dispatch(loadListRequest(param))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
