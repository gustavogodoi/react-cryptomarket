import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSortList } from "../../actions/";
import { SortWrapper, Label, Select } from "./style";

export class Sort extends Component {
  updateSort = e => {
    this.props.updateSortList(e.target.value);
  };

  render() {
    const { sort } = this.props;
    return (
      <SortWrapper>
        <Label>Sort by:</Label>
        <Select id="sort-select" value={sort} onChange={this.updateSort}>
          <option value="rank">Rank</option>
          <option value="price_eur">Price</option>
          <option value="24h_volume_eur">Volume 24h</option>
          <option value="percent_change_1h">Change 1h</option>
          <option value="percent_change_24h">Change 24h</option>
          <option value="percent_change_7d">Change 7d</option>
        </Select>
      </SortWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sort: state.coinState.sort
  };
};

const mapDispatchToProps = dispatch => ({
  updateSortList: param => dispatch(updateSortList(param))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
