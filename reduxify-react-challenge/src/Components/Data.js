import React from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../Actions';

const styles = {
  footer: {
    backgroundColor: '#F5F5F5',
    width: '100%',
  },
  card: {
    display: 'inline',
    width: '50%',
  },
  cardcontent: {
    textAlign: 'center',
  },
};

class Data extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div>

        {
          this.props.data.map(result => (
            <div key={result.episode_id} className="card" style={styles.card}>
              <div className="card-content" style={styles.cardcontent}>
                <p className="title">{result.title}</p>
                <p className="director">Director: {result.director}</p>
                <p className="episode">Episode: {result.episode_id}</p>
              </div>
              <footer className="card-footer" style={styles.footer}>
                <p className="card-footer-item"><a className="button is-primary">Edit</a></p>
                <p className="card-footer-item"><a className="button is-primary">Delete</a></p>
              </footer>
              <br />
              <br />
              <br />
            </div>
            ),
          )
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
