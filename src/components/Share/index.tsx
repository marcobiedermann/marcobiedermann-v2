import classNames from 'classnames';
import React from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import facebookIcon from '../../images/icons/facebook.svg';
import twitterIcon from '../../images/icons/twitter.svg';
import styles from './style.module.css';

export interface ShareProps {
  className?: string;
  url: string;
  via: string;
}

const Share: React.FC<ShareProps> = (props) => {
  const { className, url, via, ...otherProps } = props;

  return (
    <ul className={classNames(className, styles.share)} {...otherProps}>
      <li>
        <FacebookShareButton url={url}>
          <img src={facebookIcon} alt="Facebook" width="32" height="32" />
        </FacebookShareButton>
      </li>
      <li>
        <TwitterShareButton url={url} via={via}>
          <img src={twitterIcon} alt="Twitter" width="32" height="32" />
        </TwitterShareButton>
      </li>
    </ul>
  );
};

export default Share;
