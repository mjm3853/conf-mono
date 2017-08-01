import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { formatDate } from '../utils/format';
import conferencesListQuery from '../queries/conferencesListQuery';
import DeleteConf from './DeleteConf';

const ConferencesList = ({ data: { loading, error, allConferences } }) => {
  if (loading) {
    return <div className="pt6">
        <article className="center mw5 mw7-ns hidden ba mv4">
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">Loading...</h1>
        </article>
    </div>;
  }
  if (error) {
    return <p className="center mw5 pt6">{error.message}</p>;
  }

  return <div className="pt6">
      {
        allConferences
          .map(conf =>
            <article key={conf.id} className="center mw5 mw7-ns hidden ba mv4">
              <h1 className="f4 bg-near-black white mv0 pv2 ph3">{conf.name}</h1>
              <div className="pa4 bt">
                <p className="f6 f5-ns lh-copy mv0">{conf.description}</p>
                <p className="f6 f5-ns lh-copy mv0">From {formatDate(conf.start)} to {formatDate(conf.end)}</p>
                <p className="f6 f5-ns lh-copy mv0">{conf.location.name}</p>
                <div>
                  {conf.tags
                    .map(tag =>
                      <p className="f6 link dim br-pill ba ph3 pv2 mr1 mb2 dib black" key={tag.id}>{tag.name}</p>
                    )}
                </div>
              </div>
              <div>
                <DeleteConf confId={conf.id} />
              </div>
            </article>)
      }
  </div>
};

const ConferencesListWithData = graphql(conferencesListQuery, {
  options: { fetchPolicy: 'cache-and-network' }
})(ConferencesList);

class ListConf extends Component {
  render() {
    return (
      <ConferencesListWithData />
    );
  }
}

export default withRouter(ListConf);
