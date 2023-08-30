import { Component } from 'react';
import { SeacrhbarContainer, SearchForm } from './Searchbar.styled';
import { IconSearch } from './IconSearch';

export class Searchbar extends Component {
  state = { searchRequest: '' };

  onChange = e => {
    this.setState({ searchRequest: e.currentTarget.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.searchRequest.trim()) {
      return;
    }
    this.props.onSearchRequestSubmit(this.state.searchRequest.trim());
    this.setState({ searchRequest: '' });
  };

  render() {
    return (
      <header>
        <SeacrhbarContainer>
          <SearchForm onSubmit={this.onSubmit}>
            <button type="submit">
              <IconSearch />
            </button>

            <input
              onChange={this.onChange}
              type="text"
              autoComplete="off"
              value={this.state.searchRequest}
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        </SeacrhbarContainer>
      </header>
    );
  }
}
