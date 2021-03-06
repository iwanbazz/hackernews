import React from 'react'
import PropTypes from 'prop-types'
import timeAgo from '../../utils/timeAgo'

const Stories = ({ state }) => (
  <>
    {state.map(({ item, author, title, score, commentsCount, time, url }) => (
      <tr key={item}>
        <td style={{ padding: '0px' }}>
          <i
            className="fas fa-sort-up"
            style={{
              fontSize: '30px',
              marginTop: '16px',
              padding: '0px',
              marginRight: '0px',
            }}
          />
        </td>
        <td
          style={{
            padding: '0px',
            paddingTop: '13px',
            paddingRight: '15px',
            color: '#828282',
          }}
        >
          &nbsp;
          {score}
        </td>
        <td style={{ paddingRight: '80px', fontWeight: '600' }}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </td>
        <React.Fragment className="info">
          <td style={{ color: '#828282' }}>
            <i className="fas fa-user" />{' '}
            <a
              href={`https://news.ycombinator.com/user?id=${author}`}
              target="_blank"
              style={{ color: '#828282' }}
              rel="noopener noreferrer"
            >
              {author}
            </a>
          </td>
          <td style={{ color: '#828282' }}>
            <i className="fas fa-globe" />{' '}
            <a
              href={`https://${
                url
                  .replace('http://', '')
                  .replace('https://', '')
                  .split(/[/?#]/)[0]
              }`}
              target="_blank"
              style={{ color: '#828282' }}
              rel="noopener noreferrer"
            >
              {url
                .replace('http://', '')
                .replace('https://', '')
                .split(/[/?#]/)[0]
                .replace('www.', '')}
            </a>
          </td>
          <td style={{ color: '#828282' }}>
            <i className="fas fa-clock"> {timeAgo(time * 1000)}</i>
          </td>
          <td style={{ color: '#828282' }}>
            <i className="far fa-comment-alt" />{' '}
            <a
              href={`https://news.ycombinator.com/item?id=${item}`}
              target="_blank"
              style={{ color: '#828282' }}
              rel="noopener noreferrer"
            >
              {commentsCount}
            </a>
          </td>
        </React.Fragment>
      </tr>
    ))}
  </>
)

Stories.propTypes = {
  state: PropTypes.shape.isRequired,
}

export default Stories
